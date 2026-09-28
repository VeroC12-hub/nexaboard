/**
 * Kwaku Ananse, as a rig.
 *
 * ── Why he is a file of his own ──────────────────────────────────────────────
 *
 * He was built on a test page to find out whether children would warm to him
 * before anything was built around him. They did, so he now has to appear in
 * games, on loading screens, in the story book and eventually on the icon. One
 * character drawn in several places is several characters, and children notice
 * that faster than adults do.
 *
 * So there is one Ananse, here, and everything else asks him to draw himself.
 *
 * ── How he acts ──────────────────────────────────────────────────────────────
 *
 * Nothing in the drawing branches on his mood. Every part of him is a number,
 * every number is a spring chasing a target, and a mood is only a set of
 * targets. Three things follow from that, and all three matter:
 *
 *   - Moods blend. A child who taps twice quickly sees him change his mind
 *     rather than teleport between two poses.
 *   - A new mood is one line of data, not new drawing code.
 *   - He is never still, because the springs are never exactly at rest and the
 *     breathing never stops. A character that is ever completely still reads
 *     as a picture of a character.
 *
 * ── Why he is drawn rather than loaded ───────────────────────────────────────
 *
 * Not on principle, and not to save bytes: that reasoning is what produced the
 * games nobody wanted to play. It is because a rig can be posed, and posing is
 * where the life is. A sprite sheet of him would have a fixed number of faces;
 * this has all of them, and he can look at wherever the child's finger
 * actually is. If a better looking Ananse is ever generated, he replaces the
 * drawing inside these same functions and nothing that uses him changes.
 */

(function (global) {
  'use strict'

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v }
  function lerp(a, b, k) { return a + (b - a) * k }

  /**
   * A spring, used for everything that chases a target.
   *
   * A plain lerp towards a target is smooth and lifeless, because it never
   * overshoots and so never looks like it has weight. A spring carries
   * velocity, so the body arrives a little past where it was going and settles
   * back, which is what a body with mass does.
   */
  function Spring(value, stiffness, damping) {
    this.v = value
    this.target = value
    this.vel = 0
    this.k = stiffness === undefined ? 140 : stiffness
    this.d = damping === undefined ? 14 : damping
  }
  Spring.prototype.step = function (dt) {
    var a = (this.target - this.v) * this.k - this.vel * this.d
    this.vel += a * dt
    this.v += this.vel * dt
    return this.v
  }

  /**
   * The moods.
   *
   * `scheming` and `caught` are the two that matter, because they are the two
   * faces the character actually needs. Every Ananse story is him wanting
   * something he should not have and then being found out, so those two faces
   * carry the whole folklore. The rest are punctuation.
   */
  var MOODS = {
    hello:    { bob: 0,   lean: 0,     fat: 1,    open: 0.42, curve: 1,    brow: 0,    lift: 0.55, wide: 1 },
    happy:    { bob: -26, lean: 0,     fat: 1.1,  open: 0.85, curve: 1,    brow: -0.2, lift: 1,    wide: 1 },
    caught:   { bob: 16,  lean: -0.1,  fat: 0.86, open: 0.6,  curve: -1,   brow: 1,    lift: 0.1,  wide: 1.25 },
    hungry:   { bob: 0,   lean: 0.06,  fat: 1.04, open: 0.7,  curve: 0.7,  brow: -0.5, lift: 0.8,  wide: 1.1 },
    scheming: { bob: 0,   lean: 0.1,   fat: 0.98, open: 0.22, curve: 0.9,  brow: -1,   lift: 0.35, wide: 0.72 },
    sleepy:   { bob: 12,  lean: 0.14,  fat: 0.94, open: 0.3,  curve: 0.2,  brow: 0.3,  lift: 0,    wide: 0.12 },
    /* Looking at something he wants, rather than at the child. Used while a
       mango is being dragged past him. */
    watching: { bob: -4,  lean: 0.04,  fat: 1.02, open: 0.5,  curve: 0.8,  brow: -0.6, lift: 0.5,  wide: 1.15 },
  }

  /**
   * The outline.
   *
   * Added when the world around him was rebuilt as flat cartoon: every other
   * object on screen carries a dark rim, and without one he read as a
   * photograph pasted onto a drawing. It is drawn as a slightly larger copy of
   * each shape underneath, not as a stroke on the path, because stroking a
   * cluster of overlapping circles strokes the parts buried inside it.
   */
  var INKED = true
  var RIM = '#3a2a10'

  var GOLD_HI = '#ffd07a'
  var GOLD = '#f2a83c'
  var GOLD_LO = '#c2701a'
  var LEG = '#7a4420'
  var LEG_HI = '#a9653a'
  var INK = '#32200f'

  function Ananse(ctx) {
    this.ctx = ctx
    this.mood = 'hello'

    this.bob = new Spring(0, 120, 12)       /* vertical offset */
    this.lean = new Spring(0, 90, 11)       /* tilt in radians */
    this.fat = new Spring(1, 170, 13)       /* squash and stretch, 1 is resting */
    this.open = new Spring(0.35, 150, 14)   /* how open the mouth is */
    this.curve = new Spring(1, 120, 13)     /* +1 grinning, -1 dismayed */
    this.brow = new Spring(0, 110, 12)      /* +1 worried, -1 scheming */
    this.lift = new Spring(0, 90, 10)       /* how high the front legs are raised */
    this.wide = new Spring(1, 140, 13)      /* eye opening, 0 is shut */

    this.blinkAt = 1.6
    this.blink = 0
    this.laugh = 0
    /** Seconds left of chewing. Drives the jaw, nothing else. */
    this.chew = 0
    this.t = 0

    /* Where he is looking, and where the pupils currently are. Separate,
       because the pupils chase and never snap. */
    this.want = { x: 0, y: 0 }
    this.eye = { x: 0, y: 0 }

    /* Filled in by `draw`, so callers can aim things at his mouth without
       repeating the layout arithmetic. */
    this.at = { x: 0, y: 0, r: 40, mouthX: 0, mouthY: 0 }

    this.setMood('hello')
  }

  Ananse.prototype.setMood = function (name) {
    if (!MOODS[name]) return
    this.mood = name
    var m = MOODS[name]
    this.bob.target = m.bob
    this.lean.target = m.lean
    this.fat.target = m.fat
    this.open.target = m.open
    this.curve.target = m.curve
    this.brow.target = m.brow
    this.lift.target = m.lift
    this.wide.target = m.wide
  }

  /**
   * Look at a point, in screen pixels.
   *
   * Given in screen space rather than as a direction because every caller
   * knows where the thing is and none of them should have to work out an
   * angle. `draw` knows where his head ended up, so the conversion happens
   * where the information is.
   */
  Ananse.prototype.look = function (x, y) {
    this.want.x = x
    this.want.y = y
  }

  /**
   * The reaction to being touched.
   *
   * Children tap a character before they do anything else, and what happens on
   * that first tap decides whether they tap again. He compresses first and
   * then springs back past his own size. The anticipation matters as much as
   * the bounce: it is what tells the eye the bounce was caused rather than
   * scheduled.
   */
  Ananse.prototype.poke = function () {
    this.fat.v = 0.7
    this.fat.vel = 0
    this.bob.vel = -320
    this.laugh = 1
    if (this.mood === 'sleepy') this.setMood('caught')
  }

  /**
   * Chew, for a given number of seconds.
   *
   * Separate from the moods on purpose. Chewing is something he does *while*
   * feeling something, and folding it into a mood would mean a chewing face
   * and a pleased face could not happen at once, which is precisely the
   * expression this character needs: delighted, with his mouth full.
   */
  Ananse.prototype.eat = function (seconds) {
    this.chew = seconds === undefined ? 1.6 : seconds
  }

  /** A hop on the spot, for celebrating without changing mood. */
  Ananse.prototype.hop = function (power) {
    this.bob.vel = -(power === undefined ? 260 : power)
    this.fat.v = 0.86
  }

  Ananse.prototype.step = function (dt) {
    this.t += dt

    /* Blinking at an uneven interval. A blink on a fixed timer is a metronome
       and the eye picks it out within seconds. */
    this.blinkAt -= dt
    if (this.blinkAt <= 0) {
      this.blink = 1
      this.blinkAt = 1.8 + Math.random() * 3.4
    }
    this.blink = Math.max(0, this.blink - dt * 9)
    this.laugh = Math.max(0, this.laugh - dt * 2.2)
    this.chew = Math.max(0, this.chew - dt)

    this.bob.step(dt)
    this.lean.step(dt)
    this.fat.step(dt)
    this.open.step(dt)
    this.curve.step(dt)
    this.brow.step(dt)
    this.lift.step(dt)
    this.wide.step(dt)

    /* The pupils chase, normalised against his own size so he tracks a finger
       anywhere on screen without them pinning to the edge of the white. */
    var span = Math.max(80, this.at.r * 5)
    var wx = clamp((this.want.x - this.at.x) / span, -1, 1)
    var wy = clamp((this.want.y - (this.at.y - this.at.r * 0.8)) / span, -1, 1)
    var chase = 1 - Math.pow(0.0015, dt)
    this.eye.x = lerp(this.eye.x, wx, chase)
    this.eye.y = lerp(this.eye.y, wy, chase)

    /* A sleeping spider does not follow you about the room. */
    if (this.mood === 'sleepy') {
      this.eye.x *= 0.9
      this.eye.y = lerp(this.eye.y, 0.3, 0.05)
    }
  }

  /**
   * One leg.
   *
   * The knee sits **above** the attachment, which is the entire silhouette of
   * a spider: out from the body, up, then down to the foot. Drawn as a thick
   * round stroke rather than a filled outline, because a tapering limb at this
   * size reads better as a stroke and costs a tenth as much code.
   *
   * `index` staggers the wave along the row so the legs ripple rather than
   * moving as one. Legs in unison look like a machine; legs a beat behind each
   * other look alive, and that lag is the whole trick.
   */
  Ananse.prototype._leg = function (x, y, side, index, R, raise) {
    var ctx = this.ctx
    var wave = Math.sin(this.t * 3.1 + index * 0.85) * 0.5 + 0.5
    var spread = 0.62 + index * 0.26
    var len = R * (1.05 + index * 0.12)

    var kneeX = x + side * len * 0.55 * spread
    var kneeY = y - R * (0.52 + wave * 0.08) - raise * R * 0.5
    var footX = x + side * len * spread
    var footY = y + R * (0.72 - raise * 0.9) + wave * R * 0.06

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    ctx.strokeStyle = LEG
    ctx.lineWidth = R * 0.115
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.quadraticCurveTo(kneeX, kneeY, footX, footY)
    ctx.stroke()

    /* One highlight along the top edge, enough to stop a flat stroke reading
       as a wire. */
    ctx.strokeStyle = LEG_HI
    ctx.lineWidth = R * 0.04
    ctx.beginPath()
    ctx.moveTo(x, y - R * 0.03)
    ctx.quadraticCurveTo(kneeX, kneeY - R * 0.035, footX, footY - R * 0.02)
    ctx.stroke()

    /* Spiders do not have round feet. Cute ones do. */
    ctx.fillStyle = INK
    ctx.beginPath()
    ctx.ellipse(footX, footY, R * 0.075, R * 0.055, 0, 0, Math.PI * 2)
    ctx.fill()
  }

  /** One eye: a lid that closes from the top, a pupil, and two catch lights. */
  Ananse.prototype._eye = function (cx, cy, r, open, lookX, lookY) {
    var ctx = this.ctx
    ctx.fillStyle = '#fffdf6'
    ctx.beginPath()
    ctx.ellipse(cx, cy, r, r * 1.06, 0, 0, Math.PI * 2)
    ctx.fill()

    /* The pupil never leaves the white, or he goes cross eyed at the edges. */
    var px = cx + lookX * r * 0.34
    var py = cy + lookY * r * 0.34
    ctx.fillStyle = '#2a1a0a'
    ctx.beginPath()
    ctx.ellipse(px, py, r * 0.46, r * 0.5, 0, 0, Math.PI * 2)
    ctx.fill()

    /* A big catch light where the light is and a small one opposite. This one
       detail is most of what stops an eye looking dead. */
    ctx.fillStyle = '#ffffff'
    ctx.beginPath()
    ctx.arc(px - r * 0.18, py - r * 0.2, r * 0.16, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 0.6
    ctx.beginPath()
    ctx.arc(px + r * 0.2, py + r * 0.18, r * 0.07, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalAlpha = 1

    /* The lid, as a shape dropped over the top rather than a line drawn across
       the eye. A line is a closed eye; a shape is an eyelid. */
    if (open < 0.999) {
      ctx.fillStyle = GOLD
      var lid = (1 - open) * r * 2.2
      ctx.beginPath()
      ctx.ellipse(cx, cy - r * 1.1 + lid, r * 1.14, r * 1.12, 0, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  /**
   * Draw him, centred on his body, at radius `R`.
   *
   * `groundY` is where his shadow falls. Passed in rather than assumed,
   * because he has to be able to leave the ground: a shadow pinned under a
   * jumping character is the one lighting mistake a child notices without
   * being able to name it.
   */
  Ananse.prototype.draw = function (x, y, R, groundY) {
    var ctx = this.ctx
    var cy = y + this.bob.v
    if (groundY === undefined) groundY = y + R * 1.5

    this.at.x = x
    this.at.y = cy
    this.at.r = R

    /* Breathing, always, under everything else. */
    var breath = Math.sin(this.t * 1.5) * 0.016
    var fat = this.fat.v + breath
    /* Volume is conserved: wider means shorter. Without this a squash is a
       resize. */
    var sx = fat
    var sy = 1 / fat

    /* The shadow shrinks and fades as he rises, which is what sells a jump. */
    var off = clamp((groundY - (cy + R * 1.5)) / (R * 1.6), 0, 1)
    ctx.save()
    ctx.globalAlpha = 0.16 * (1 - off * 0.7)
    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.ellipse(x, groundY, R * (1.15 - off * 0.3), R * 0.2 * (1 - off * 0.3), 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    ctx.save()
    ctx.translate(x, cy)
    ctx.rotate(this.lean.v)
    ctx.scale(sx, sy)

    /* ── legs, behind the body ─────────────────────────────────────────────── */
    for (var s = -1; s <= 1; s += 2) {
      for (var i = 0; i < 4; i++) {
        /* Only the front pair lift when he raises his arms. A character waving
           with all eight legs reads as panic. */
        this._leg(s * R * 0.42, -R * 0.12 + i * R * 0.17, s, i, R,
          i === 0 ? this.lift.v : this.lift.v * 0.12)
      }
    }

    /* ── abdomen ───────────────────────────────────────────────────────────── */
    if (INKED) {
      ctx.fillStyle = RIM
      ctx.beginPath()
      ctx.ellipse(0, R * 0.12, R * 0.92 + R * 0.035, R * 0.86 + R * 0.035, 0, 0, Math.PI * 2)
      ctx.fill()
    }
    var body = ctx.createRadialGradient(-R * 0.34, -R * 0.4, R * 0.08, 0, 0, R * 1.15)
    body.addColorStop(0, GOLD_HI)
    body.addColorStop(0.5, GOLD)
    body.addColorStop(1, GOLD_LO)
    ctx.fillStyle = body
    ctx.beginPath()
    ctx.ellipse(0, R * 0.12, R * 0.92, R * 0.86, 0, 0, Math.PI * 2)
    ctx.fill()

    /**
     * A kente sash over one shoulder.
     *
     * It was a band across his middle, and that made him a hamburger: a gold
     * dome, a dark stripe across the widest part, a gold base. Any horizontal
     * band at the midpoint of a round body does that, and once it has been
     * seen it cannot be unseen.
     *
     * A diagonal breaks the symmetry instead of reinforcing it, which is also
     * how kente is actually worn, and it gives the silhouette an axis so he
     * does not read as a ball.
     */
    ctx.save()
    ctx.beginPath()
    ctx.ellipse(0, R * 0.12, R * 0.92, R * 0.86, 0, 0, Math.PI * 2)
    ctx.clip()
    ctx.rotate(-0.62)
    var bands = ['#1d1a17', '#d6402e', '#f2d024', '#0f8a4d', '#1d1a17']
    var bandH = R * 0.1
    var top = -R * 0.34
    for (var b = 0; b < bands.length; b++) {
      ctx.fillStyle = bands[b]
      ctx.fillRect(-R * 1.6, top + b * bandH, R * 3.2, bandH)
    }
    /* A soft edge where the cloth meets the body, so it lies on him rather
       than being printed on him. */
    ctx.fillStyle = 'rgba(70,40,10,0.18)'
    ctx.fillRect(-R * 1.6, top, R * 3.2, R * 0.03)
    ctx.fillRect(-R * 1.6, top + bands.length * bandH - R * 0.03, R * 3.2, R * 0.03)
    ctx.restore()

    /* ── head ──────────────────────────────────────────────────────────────── */
    var hy = -R * 0.78
    var hr = R * 0.7
    var head = ctx.createRadialGradient(-hr * 0.35, hy - hr * 0.4, hr * 0.06, 0, hy, hr * 1.2)
    head.addColorStop(0, GOLD_HI)
    head.addColorStop(0.55, GOLD)
    head.addColorStop(1, GOLD_LO)
    if (INKED) {
      ctx.fillStyle = RIM
      ctx.beginPath()
      ctx.ellipse(0, hy, hr + R * 0.035, hr * 0.95 + R * 0.035, 0, 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.fillStyle = head
    ctx.beginPath()
    ctx.ellipse(0, hy, hr, hr * 0.95, 0, 0, Math.PI * 2)
    ctx.fill()

    /**
     * Four small eyes above the two big ones.
     *
     * Spiders have eight. Drawing all eight the same size is how you get a
     * spider a four year old will not look at. Two large ones carry every
     * expression, and four tiny ones above are enough to say spider without
     * frightening anybody.
     */
    ctx.fillStyle = 'rgba(40,24,10,0.55)'
    for (var e = 0; e < 4; e++) {
      ctx.beginPath()
      ctx.arc((e - 1.5) * hr * 0.3, hy - hr * 0.55, hr * 0.06, 0, Math.PI * 2)
      ctx.fill()
    }

    var er = hr * 0.33
    var openness = clamp(this.wide.v * (1 - this.blink), 0, 1.3)
    this._eye(-hr * 0.38, hy - hr * 0.04, er, openness, this.eye.x, this.eye.y)
    this._eye(hr * 0.38, hy - hr * 0.04, er, openness, this.eye.x, this.eye.y)

    /**
     * Brows, which are where the acting happens.
     *
     * A face this simple says almost everything with two short strokes above
     * the eyes. Angled down towards the middle he is scheming; angled up he is
     * worried and has been caught. Nothing else on the face changes as much
     * between those two.
     */
    var bw = this.brow.v
    ctx.strokeStyle = INK
    ctx.lineWidth = hr * 0.11
    ctx.lineCap = 'round'
    for (var side2 = -1; side2 <= 1; side2 += 2) {
      var bx = side2 * hr * 0.38
      var by = hy - hr * 0.42
      ctx.beginPath()
      ctx.moveTo(bx - hr * 0.2, by + bw * hr * 0.12 * side2 * -1)
      ctx.lineTo(bx + hr * 0.2, by + bw * hr * 0.12 * side2)
      ctx.stroke()
    }

    /**
     * The mouth, filled rather than stroked.
     *
     * A stroked smile is a line on a face. A filled mouth has an inside, and
     * that is what makes a grin read as a grin at a glance across a room,
     * which is how a child sees it.
     */
    /* The jaw. Chewing overrides whatever the mood wanted the mouth to do,
       because a mouth full of mango is the loudest fact about his face. */
    var mo = this.open.v * (1 + this.laugh * 0.5)
    if (this.chew > 0) {
      mo = 0.25 + Math.abs(Math.sin(this.t * 13)) * 0.7
    }
    var mw = hr * 0.44
    var mh = hr * 0.42 * mo
    var my = hy + hr * 0.36
    var cv = this.curve.v

    ctx.fillStyle = '#5c2118'
    ctx.beginPath()
    ctx.moveTo(-mw, my - cv * hr * 0.06)
    ctx.quadraticCurveTo(0, my + cv * hr * 0.3 + mh, mw, my - cv * hr * 0.06)
    ctx.quadraticCurveTo(0, my + cv * hr * 0.08 - mh * 0.25, -mw, my - cv * hr * 0.06)
    ctx.closePath()
    ctx.fill()

    if (mo > 0.5 && cv > 0) {
      ctx.fillStyle = '#e0715c'
      ctx.beginPath()
      ctx.ellipse(0, my + mh * 0.55, mw * 0.45, mh * 0.4, 0, 0, Math.PI * 2)
      ctx.fill()
    }

    /* Cheeks. Warmth, for two ellipses. */
    /* Cheeks. Warmth, for two ellipses, and they puff out while he is
       chewing, which is the detail that says his mouth is full rather than
       merely open. */
    var puff = this.chew > 0 ? 1.5 : 1
    ctx.save()
    ctx.globalAlpha = 0.32
    ctx.fillStyle = '#e0715c'
    ctx.beginPath()
    ctx.ellipse(-hr * 0.72, hy + hr * 0.22, hr * 0.2 * puff, hr * 0.13 * puff, 0, 0, Math.PI * 2)
    ctx.ellipse(hr * 0.72, hy + hr * 0.22, hr * 0.2 * puff, hr * 0.13 * puff, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    /**
     * The cap.
     *
     * Worth more than it looks: it is the one thing that makes his outline
     * recognisable at the size of an app icon, and characters are remembered
     * as silhouettes. Rounded, not a cone, because a cone is a party hat and a
     * party hat says birthday rather than character.
     *
     * It lags behind the head by design, so it swings when he moves. Secondary
     * motion on one accessory does more for aliveness than any amount of work
     * on the body.
     */
    ctx.save()
    ctx.translate(0, hy - hr * 0.82)
    ctx.rotate(clamp(-this.lean.vel * 0.0016, -0.4, 0.4))
    ctx.fillStyle = '#d6402e'
    ctx.beginPath()
    ctx.ellipse(0, hr * 0.1, hr * 0.62, hr * 0.17, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(-hr * 0.46, hr * 0.12)
    ctx.bezierCurveTo(-hr * 0.5, -hr * 0.34, -hr * 0.26, -hr * 0.46, 0, -hr * 0.46)
    ctx.bezierCurveTo(hr * 0.26, -hr * 0.46, hr * 0.5, -hr * 0.34, hr * 0.46, hr * 0.12)
    ctx.closePath()
    ctx.fill()
    /* A gold stripe round the cap, tying it to the sash. */
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(-hr * 0.46, hr * 0.12)
    ctx.bezierCurveTo(-hr * 0.5, -hr * 0.34, -hr * 0.26, -hr * 0.46, 0, -hr * 0.46)
    ctx.bezierCurveTo(hr * 0.26, -hr * 0.46, hr * 0.5, -hr * 0.34, hr * 0.46, hr * 0.12)
    ctx.closePath()
    ctx.clip()
    ctx.fillStyle = '#f2d024'
    ctx.fillRect(-hr, -hr * 0.16, hr * 2, hr * 0.11)
    ctx.restore()
    ctx.fillStyle = '#f2d024'
    ctx.beginPath()
    ctx.arc(0, -hr * 0.5, hr * 0.09, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    ctx.restore()

    /* Where his mouth ended up, for anything that wants to fly into it. The
       scale and lean are undone here so callers get a screen position. */
    this.at.mouthX = x
    this.at.mouthY = cy + (hy + hr * 0.36) * sy
  }

  /** Whether a point is on him, for tapping. Generous, because small hands. */
  Ananse.prototype.hit = function (px, py) {
    var dx = px - this.at.x
    var dy = py - (this.at.y - this.at.r * 0.3)
    return dx * dx + dy * dy < Math.pow(this.at.r * 1.35, 2)
  }

  Ananse.MOODS = MOODS
  global.Ananse = Ananse
}(window))
