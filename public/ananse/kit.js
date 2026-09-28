/**
 * The kit every Ananse game is built from.
 *
 * ── Why this exists ──────────────────────────────────────────────────────────
 *
 * The first game came to about sixteen hundred lines, and roughly nine hundred
 * of them had nothing to do with mangoes: the flat cartoon scene, the outlined
 * lettering, the banner, the button, the sound pool, the recorded voice, the
 * particles, the screen shake, the title card, the progress row, the round loop
 * and the judging. Copying that into fifteen games would mean fifteen places to
 * fix every bug, and five bugs were found in it on the first day alone.
 *
 * So it lives here once, and a game is only its own idea: what is on the
 * ground, what the child does with it, and what counts as right.
 *
 * ── What this is not ─────────────────────────────────────────────────────────
 *
 * It is not the game *generator* that came before it. That thing composed games
 * from a grammar of verbs and subjects and places, and every game it produced
 * was the same verb in a different hat. Children would not play them.
 *
 * The difference is where the line is drawn. The generator owned the ideas and
 * left the presentation generic. This owns the presentation and leaves every
 * idea to the game: its own scene, its own script, its own character beat, its
 * own rules. Shared plumbing, never shared design.
 *
 * ── The rule that does not move ──────────────────────────────────────────────
 *
 * A game's `judge` is handed the board and must work out the truth from it at
 * that moment. The kit never stores an answer, never passes one around, and
 * never tells a game whether it was right. Nothing in here can be edited to
 * make a wrong answer pass, because there is nothing in here that knows.
 */

(function (global) {
  'use strict'

  /* ── maths ─────────────────────────────────────────────────────────────── */

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v }
  function lerp(a, b, k) { return a + (b - a) * k }
  function rand(a, b) { return a + Math.random() * (b - a) }
  function randInt(a, b) { return Math.floor(rand(a, b + 1)) }
  function pick(list) { return list[randInt(0, list.length - 1)] }
  /** Deterministic noise, so scenery is identical every time it is painted. */
  function fixed(i, n) { return ((i * 9301 + 49297) % 233280) / 233280 * n }

  /**
   * A spring, for everything that chases a target.
   *
   * A plain lerp is smooth and lifeless because it never overshoots, so it
   * never looks like it has weight. A spring carries velocity, arrives a little
   * past where it was going, and settles back, which is what a body does.
   */
  function Spring(v, k, d) { this.v = v; this.target = v; this.vel = 0; this.k = k; this.d = d }
  Spring.prototype.step = function (dt) {
    this.vel += ((this.target - this.v) * this.k - this.vel * this.d) * dt
    this.v += this.vel * dt
  }

  /* ── the flat cartoon look ─────────────────────────────────────────────── */

  /**
   * The outline colour everything carries.
   *
   * The first scene was a naturalistic painting: dusty earth, sun haze, soft
   * gradients, no outlines. Competent, and children refused to play it. Every
   * successful game in this category is loud and graphic, with a hard dark rim
   * on every shape, and that style is also the one canvas is best at. The
   * mistake was never drawing in code, it was drawing soft realism in code.
   */
  var LINE = '#2f4a1f'

  function inkedOn(g, fill, line, width) {
    g.fillStyle = fill
    g.fill()
    if (width === 0) return
    g.strokeStyle = line || LINE
    g.lineWidth = width || 3
    g.lineJoin = 'round'
    g.stroke()
  }

  /**
   * A cluster of circles, outlined round the outside only.
   *
   * Stroking a path made of several arcs strokes every arc, including the parts
   * buried inside the shape, so a cloud built that way comes out as a scribble
   * of overlapping rings. The fix is the oldest trick in flat illustration:
   * draw the whole thing once in the outline colour slightly larger, then again
   * in its real colour on top. What shows round the edge is the outline, and
   * there is nothing left inside to show.
   */
  function blobOn(g, circles, fill, width) {
    var w = width === undefined ? 3 : width
    var i
    if (w > 0) {
      g.fillStyle = LINE
      for (i = 0; i < circles.length; i++) {
        g.beginPath()
        g.arc(circles[i][0], circles[i][1], circles[i][2] + w, 0, Math.PI * 2)
        g.fill()
      }
    }
    g.fillStyle = fill
    for (i = 0; i < circles.length; i++) {
      g.beginPath()
      g.arc(circles[i][0], circles[i][1], circles[i][2], 0, Math.PI * 2)
      g.fill()
    }
  }

  function cloud(g, x, y, r) {
    blobOn(g, [
      [x, y, r],
      [x + r * 0.95, y + r * 0.12, r * 0.78],
      [x - r * 0.92, y + r * 0.16, r * 0.66],
      [x + r * 0.2, y - r * 0.48, r * 0.62]
    ], '#ffffff', 0)
  }

  /** A cartoon tree. `fruit` colours what hangs in it, or null for none. */
  function tree(g, x, baseY, h, fruit) {
    g.beginPath()
    g.moveTo(x - h * 0.075, baseY)
    g.lineTo(x - h * 0.05, baseY - h * 0.44)
    g.lineTo(x + h * 0.05, baseY - h * 0.44)
    g.lineTo(x + h * 0.075, baseY)
    g.closePath()
    inkedOn(g, '#a9703c', LINE, 3.5)

    var lobes = [
      [0, -0.64, 0.30], [-0.21, -0.54, 0.22], [0.21, -0.54, 0.22],
      [-0.10, -0.80, 0.21], [0.11, -0.80, 0.21]
    ]
    /* The dark body, then a lighter one offset up and left. Two flat tones read
       as volume better than a gradient does in this style, and the light stays
       in the same corner as everything else without any soft shading. */
    for (var pass = 0; pass < 2; pass++) {
      var ring = []
      for (var i = 0; i < lobes.length; i++) {
        var ox = pass ? -h * 0.025 : 0
        var oy = pass ? -h * 0.03 : 0
        ring.push([x + lobes[i][0] * h + ox, baseY + lobes[i][1] * h + oy, lobes[i][2] * h])
      }
      blobOn(g, ring, pass ? '#6fc04a' : '#3f8f38', pass ? 0 : 3.5)
    }

    if (fruit) {
      for (var f = 0; f < 4; f++) {
        var a = f * 1.7 + 0.6
        g.beginPath()
        g.ellipse(x + Math.cos(a) * h * 0.2, baseY - h * 0.64 + Math.sin(a) * h * 0.15,
          h * 0.04, h * 0.032, -0.3, 0, Math.PI * 2)
        inkedOn(g, fruit, LINE, 2.5)
      }
    }
  }

  function bush(g, x, y, r) {
    blobOn(g, [
      [x, y, r],
      [x + r * 0.8, y + r * 0.2, r * 0.72],
      [x - r * 0.8, y + r * 0.2, r * 0.72]
    ], '#4ca63f', 3)
  }

  /* ── scenes ────────────────────────────────────────────────────────────── */

  /**
   * Where the ground begins.
   *
   * One number, shared by every scene and every game, because the whole layout
   * hangs off it: objects stand on it, the scatter works within it, and shadows
   * fall on it. A scene that moved it would silently break every game drawn on
   * that scene.
   */
  function groundY(H) { return H * 0.52 }

  /**
   * The places games happen in.
   *
   * Added as games need them rather than written speculatively. Each one paints
   * itself onto an offscreen canvas exactly once per size, so detail is nearly
   * free: the cost is one `drawImage` per frame however much is in it.
   */
  var SCENES = {}

  SCENES.garden = function (g, w, h) {
    var hy = groundY(h)

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#4fb6ef')
    sky.addColorStop(1, '#c4eafc')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)

    for (var c = 0; c < 4; c++) {
      cloud(g, fixed(c * 17 + 4, w), hy * (0.16 + fixed(c * 11, 0.38)),
        h * (0.035 + fixed(c * 5, 0.02)))
    }

    var far = []
    for (var t = 0; t <= 14; t++) {
      far.push([(t / 14) * (w + 40) - 20, hy - h * 0.015, h * (0.05 + fixed(t * 7, 0.028))])
    }
    blobOn(g, far, '#2e7a33', 3)

    /* A fence, which is what makes a green field read as somebody's garden. */
    var fy = hy - h * 0.06
    var posts = Math.max(6, Math.ceil(w / (h * 0.085)))
    for (var p = 0; p <= posts; p++) {
      var px = p * (w / posts)
      g.beginPath()
      g.moveTo(px - h * 0.019, fy + h * 0.082)
      g.lineTo(px - h * 0.019, fy + h * 0.012)
      g.lineTo(px, fy - h * 0.014)
      g.lineTo(px + h * 0.019, fy + h * 0.012)
      g.lineTo(px + h * 0.019, fy + h * 0.082)
      g.closePath()
      inkedOn(g, '#f5eeda', LINE, 3)
    }
    g.beginPath()
    g.rect(0, fy + h * 0.026, w, h * 0.018)
    inkedOn(g, '#f5eeda', LINE, 3)

    g.fillStyle = '#57b038'
    g.fillRect(0, hy, w, h - hy)
    /* A lighter band nearer the front: one hard edge between two flat greens
       says "this part is nearer" more clearly than any smooth blend, and it
       keeps the picture graphic. */
    g.fillStyle = '#7ccc4c'
    g.beginPath()
    g.moveTo(-10, hy + h * 0.11)
    g.quadraticCurveTo(w * 0.5, hy + h * 0.045, w + 10, hy + h * 0.11)
    g.lineTo(w + 10, h + 10)
    g.lineTo(-10, h + 10)
    g.closePath()
    g.fill()

    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()

    /* Tufts and flowers. Sparse enough that the floor stays readable, because
       picking objects out of it is usually the game, and dense enough that it
       is a garden rather than a green rectangle. */
    for (var k = 0; k < 30; k++) {
      var gx = fixed(k * 7 + 3, w)
      var gy = hy + h * 0.035 + fixed(k * 13 + 5, (h - hy) * 0.9)
      var gs = h * 0.014
      g.strokeStyle = 'rgba(38,105,38,0.55)'
      g.lineWidth = Math.max(2, gs * 0.32)
      g.lineCap = 'round'
      g.beginPath()
      g.moveTo(gx - gs * 0.5, gy)
      g.lineTo(gx - gs * 0.8, gy - gs)
      g.moveTo(gx, gy)
      g.lineTo(gx, gy - gs * 1.35)
      g.moveTo(gx + gs * 0.5, gy)
      g.lineTo(gx + gs * 0.8, gy - gs)
      g.stroke()
      if (k % 5 === 2) {
        var petal = ['#ffd93b', '#ff7ab0', '#ffffff'][k % 3]
        for (var pe = 0; pe < 5; pe++) {
          g.beginPath()
          g.arc(gx + Math.cos(pe * 1.26) * gs * 0.6,
            gy - gs * 2 + Math.sin(pe * 1.26) * gs * 0.6, gs * 0.4, 0, Math.PI * 2)
          inkedOn(g, petal, 'rgba(90,70,20,0.4)', 1.6)
        }
        g.beginPath()
        g.arc(gx, gy - gs * 2, gs * 0.3, 0, Math.PI * 2)
        inkedOn(g, '#ffb23b', 'rgba(90,70,20,0.4)', 1.4)
      }
    }

    tree(g, w * 0.09, hy + h * 0.06, h * 0.56, '#f5871f')
    tree(g, w * 0.93, hy + h * 0.03, h * 0.46, '#f5871f')
    bush(g, w * 0.25, hy + h * 0.014, h * 0.036)
    bush(g, w * 0.72, hy + h * 0.018, h * 0.03)
  }

  /**
   * Open sky, with the ground only as a strip along the bottom.
   *
   * For games where the objects are in the air. The horizon is the same line as
   * every other scene, because the character still stands on it and the layout
   * of every game hangs off that one number, but almost everything above it is
   * empty: things that float need somewhere to float.
   */
  SCENES.sky = function (g, w, h) {
    var hy = groundY(h)

    var sky = g.createLinearGradient(0, 0, 0, hy * 1.2)
    sky.addColorStop(0, '#3ba7e8')
    sky.addColorStop(0.6, '#8fd2f5')
    sky.addColorStop(1, '#d6f0fd')
    g.fillStyle = sky
    g.fillRect(0, 0, w, h)

    /* More clouds than the garden has, and higher, because they are the only
       thing telling the eye this is sky rather than a blue rectangle. */
    for (var c = 0; c < 7; c++) {
      cloud(g, fixed(c * 23 + 6, w), fixed(c * 31 + 9, hy * 0.85),
        h * (0.03 + fixed(c * 5, 0.03)))
    }

    var far = []
    for (var t = 0; t <= 14; t++) {
      far.push([(t / 14) * (w + 40) - 20, hy + h * 0.01, h * (0.04 + fixed(t * 7, 0.02))])
    }
    blobOn(g, far, '#2e7a33', 3)

    g.fillStyle = '#57b038'
    g.fillRect(0, hy + h * 0.03, w, h)
    g.fillStyle = '#7ccc4c'
    g.beginPath()
    g.moveTo(-10, hy + h * 0.1)
    g.quadraticCurveTo(w * 0.5, hy + h * 0.06, w + 10, hy + h * 0.1)
    g.lineTo(w + 10, h + 10)
    g.lineTo(-10, h + 10)
    g.closePath()
    g.fill()

    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy + h * 0.03)
    g.lineTo(w, hy + h * 0.03)
    g.stroke()

    tree(g, w * 0.07, hy + h * 0.09, h * 0.4, null)
    tree(g, w * 0.95, hy + h * 0.07, h * 0.34, null)
  }

  /**
   * Lay items out at random without letting them touch.
   *
   * Every game needs this and every game gets it subtly wrong on its own. Two
   * mistakes in particular, both of which have already happened here:
   *
   * Confining the band too tightly. A strip between the horizon and some prop
   * is forty pixels tall on a wide screen, so everything comes out in a neat
   * row, which is exactly the worksheet look this whole rebuild exists to
   * escape.
   *
   * Forgetting the keep-out zone. An object laid on top of the character is one
   * the child cannot tell apart from the scenery, and an object under the
   * button cannot be reached at all.
   *
   * Gives up after enough tries rather than looping forever: a slightly
   * overlapping board is a far better failure than a hung game.
   */
  function scatter(items, box, gap, avoid) {
    for (var i = 0; i < items.length; i++) {
      var it = items[i]
      for (var tries = 0; tries < 160; tries++) {
        it.x = rand(box.x, box.x + box.w)
        it.y = rand(box.y, box.y + box.h)
        var ok = true
        for (var j = 0; j < i; j++) {
          if (Math.hypot(items[j].x - it.x, items[j].y - it.y) < gap) { ok = false; break }
        }
        if (ok && avoid) {
          for (var a = 0; a < avoid.length; a++) {
            if (Math.hypot(it.x - avoid[a][0], it.y - avoid[a][1]) < avoid[a][2]) {
              ok = false
              break
            }
          }
        }
        if (ok) break
      }
    }
    return items
  }

  /**
   * Open country with a railway across it.
   *
   * No fence: the rails are the horizontal line the eye follows, and a fence
   * behind them fights with that. The embankment is baked into the scene but
   * the rails themselves are not, because a game has to be able to put them
   * exactly where its carriages sit, and a rail that misses the wheels by four
   * pixels is the kind of thing a child sees immediately.
   */
  SCENES.rails = function (g, w, h) {
    var hy = groundY(h)

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#4fb6ef')
    sky.addColorStop(1, '#c4eafc')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)

    for (var c = 0; c < 5; c++) {
      cloud(g, fixed(c * 19 + 5, w), hy * (0.14 + fixed(c * 13, 0.4)),
        h * (0.032 + fixed(c * 5, 0.022)))
    }

    /* Rolling hills rather than a treeline, which is what a railway runs
       through and what keeps the middle of the picture open. */
    for (var pass = 0; pass < 2; pass++) {
      g.beginPath()
      g.moveTo(-10, hy)
      for (var i = 0; i <= 10; i++) {
        var hx = (i / 10) * (w + 20) - 10
        var amp = pass ? 0.075 : 0.11
        var lift = Math.sin(i * (pass ? 1.1 : 0.8) + (pass ? 2.3 : 0.6)) * 0.5 + 0.5
        g.lineTo(hx, hy - h * amp * (0.45 + lift * 0.55))
      }
      g.lineTo(w + 10, hy)
      g.closePath()
      inkedOn(g, pass ? '#4ca63f' : '#2e7a33', LINE, 3)
    }

    g.fillStyle = '#57b038'
    g.fillRect(0, hy, w, h - hy)
    g.fillStyle = '#7ccc4c'
    g.beginPath()
    g.moveTo(-10, hy + h * 0.1)
    g.quadraticCurveTo(w * 0.5, hy + h * 0.05, w + 10, hy + h * 0.1)
    g.lineTo(w + 10, h + 10)
    g.lineTo(-10, h + 10)
    g.closePath()
    g.fill()

    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()

    for (var k = 0; k < 18; k++) {
      var gx = fixed(k * 11 + 3, w)
      var gy = hy + h * 0.03 + fixed(k * 17 + 5, (h - hy) * 0.35)
      var gs = h * 0.013
      g.strokeStyle = 'rgba(38,105,38,0.5)'
      g.lineWidth = Math.max(2, gs * 0.3)
      g.lineCap = 'round'
      g.beginPath()
      g.moveTo(gx, gy)
      g.lineTo(gx, gy - gs * 1.3)
      g.moveTo(gx, gy)
      g.lineTo(gx - gs * 0.7, gy - gs * 0.9)
      g.moveTo(gx, gy)
      g.lineTo(gx + gs * 0.7, gy - gs * 0.9)
      g.stroke()
    }

    tree(g, w * 0.08, hy + h * 0.03, h * 0.38, null)
    tree(g, w * 0.94, hy + h * 0.015, h * 0.3, null)
  }

  /* ── trains ────────────────────────────────────────────────────────────── */

  /**
   * The track a train stands on.
   *
   * Drawn by the game rather than baked into the scene, so the sleepers and the
   * wheels agree. Sleepers first, then two rails over them, which is the order
   * they are built in and the order that reads correctly.
   */
  function rails(ctx, y, w, gauge) {
    var i
    ctx.save()
    for (i = -1; i * gauge * 0.9 < w + gauge; i++) {
      var x = i * gauge * 0.9
      ctx.beginPath()
      ctx.roundRect(x, y - gauge * 0.06, gauge * 0.42, gauge * 0.52, gauge * 0.06)
      inkedOn(ctx, '#8a6234', LINE, 2.5)
    }
    ctx.beginPath()
    ctx.rect(-10, y - gauge * 0.02, w + 20, gauge * 0.1)
    inkedOn(ctx, '#b9bec6', LINE, 2.5)
    ctx.beginPath()
    ctx.rect(-10, y + gauge * 0.32, w + 20, gauge * 0.1)
    inkedOn(ctx, '#9aa0a8', LINE, 2.5)
    ctx.restore()
  }

  /**
   * Two wheels under a body of width `w`, sitting on the rail at `railY`.
   *
   * `spin` turns them, and it matters more than it sounds: a train that slides
   * across the screen on motionless wheels reads as a picture being dragged.
   * The spokes are the only part that can show rotation, because a plain disc
   * looks identical at every angle. Three spokes and not eight: at this size
   * more of them blur into a grey smudge and the turning disappears again.
   */
  function wheels(ctx, x, w, railY, r, spin) {
    for (var s = -1; s <= 1; s += 2) {
      var wx = x + s * w * 0.28
      ctx.beginPath()
      ctx.arc(wx, railY, r, 0, Math.PI * 2)
      inkedOn(ctx, '#3d4a57', LINE, 3)

      if (spin) {
        ctx.save()
        ctx.translate(wx, railY)
        ctx.rotate(spin)
        ctx.strokeStyle = '#e8b64c'
        ctx.lineWidth = Math.max(2, r * 0.16)
        ctx.lineCap = 'round'
        for (var k = 0; k < 3; k++) {
          var a = k * Math.PI / 3
          ctx.beginPath()
          ctx.moveTo(-Math.cos(a) * r * 0.72, -Math.sin(a) * r * 0.72)
          ctx.lineTo(Math.cos(a) * r * 0.72, Math.sin(a) * r * 0.72)
          ctx.stroke()
        }
        ctx.restore()
      }

      ctx.beginPath()
      ctx.arc(wx, railY, r * 0.42, 0, Math.PI * 2)
      inkedOn(ctx, '#e8b64c', LINE, 2)
    }
  }

  /**
   * One carriage: an open wagon with a panel on the side.
   *
   * The panel is where the letter or the number goes, and it is a lighter
   * colour than the wagon so whatever sits on it always has contrast, whichever
   * colour the wagon happens to be. Without it a yellow numeral on a yellow
   * wagon disappears, and picking wagon colours that never clash with content
   * is a rule somebody would eventually break.
   */
  function carriage(ctx, x, y, w, h, colour, opts) {
    var o = opts || {}
    var railY = y + h * 0.5

    if (o.coupling !== false) {
      ctx.beginPath()
      ctx.rect(x - w * 0.56, y + h * 0.16, w * 0.14, h * 0.1)
      inkedOn(ctx, '#6d7680', LINE, 2)
    }

    /* The body. */
    ctx.beginPath()
    ctx.roundRect(x - w / 2, y - h / 2, w, h, h * 0.16)
    inkedOn(ctx, colour, LINE, 3.5)

    /* A darker skirt along the bottom, which gives the wagon a base instead of
       floating above its own wheels. */
    ctx.save()
    ctx.beginPath()
    ctx.roundRect(x - w / 2, y - h / 2, w, h, h * 0.16)
    ctx.clip()
    ctx.fillStyle = 'rgba(0,0,0,0.18)'
    ctx.fillRect(x - w / 2, y + h * 0.22, w, h * 0.3)
    ctx.restore()

    /* The panel the content sits on. */
    if (o.panel !== false) {
      ctx.beginPath()
      ctx.roundRect(x - w * 0.34, y - h * 0.3, w * 0.68, h * 0.56, h * 0.12)
      inkedOn(ctx, o.empty ? 'rgba(255,255,255,0.35)' : '#fffaf0', LINE, 2.5)
    }

    wheels(ctx, x, w, railY, h * 0.22, o.spin || 0)
  }

  /** The engine at the front: boiler, cab, funnel. */
  function engine(ctx, x, y, w, h, spin) {
    var railY = y + h * 0.5

    /* Cab. */
    ctx.beginPath()
    ctx.roundRect(x - w * 0.1, y - h * 0.78, w * 0.52, h * 1.28, h * 0.14)
    inkedOn(ctx, '#d6402e', LINE, 3.5)
    /* Window. */
    ctx.beginPath()
    ctx.roundRect(x + w * 0.02, y - h * 0.58, w * 0.3, h * 0.42, h * 0.1)
    inkedOn(ctx, '#bfe8fb', LINE, 2.5)

    /* Boiler. */
    ctx.beginPath()
    ctx.roundRect(x - w * 0.56, y - h * 0.34, w * 0.62, h * 0.84, h * 0.16)
    inkedOn(ctx, '#e8543c', LINE, 3.5)

    /* Funnel, with a puff of smoke: the one thing that says this is a train and
       not a red box on wheels. */
    ctx.beginPath()
    ctx.moveTo(x - w * 0.5, y - h * 0.34)
    ctx.lineTo(x - w * 0.44, y - h * 0.74)
    ctx.lineTo(x - w * 0.2, y - h * 0.74)
    ctx.lineTo(x - w * 0.14, y - h * 0.34)
    ctx.closePath()
    inkedOn(ctx, '#3d4a57', LINE, 3)
    blobOn(ctx, [
      [x - w * 0.34, y - h * 1.0, h * 0.2],
      [x - w * 0.12, y - h * 1.22, h * 0.16],
      [x + w * 0.08, y - h * 1.36, h * 0.12]
    ], '#ffffff', 0)

    wheels(ctx, x - w * 0.04, w * 1.1, railY, h * 0.26, spin)
  }

  /* ── shapes ────────────────────────────────────────────────────────────── */

  /**
   * The shapes a child of this age is taught, as paths.
   *
   * ── Why they are paths and not glyphs ─────────────────────────────────────
   *
   * A triangle typed as a character is a different triangle on every phone, and
   * some of them are not triangles at all. These are identical everywhere, they
   * can be outlined to match the rest of the style, and the same path serves as
   * both the piece and the hole it goes in, which is what makes a shape sorter
   * look like it was made rather than assembled.
   *
   * ── Why the star has five points and the heart is fat ─────────────────────
   *
   * Because that is what a four year old draws. A geometrically elegant star is
   * not the star in their head, and the one in their head is the one they are
   * being asked to recognise.
   *
   * Each is drawn centred on the origin and fits inside a circle of radius `r`,
   * so any shape can be swapped for any other without the layout moving.
   */
  var SHAPES = {
    circle: function (g, r) {
      g.arc(0, 0, r, 0, Math.PI * 2)
    },
    square: function (g, r) {
      var a = r * 0.82
      g.roundRect(-a, -a, a * 2, a * 2, r * 0.1)
    },
    triangle: function (g, r) {
      /* Sitting on its base rather than centred on its centroid, because a
         triangle balanced on a point looks like it is falling over. */
      g.moveTo(0, -r)
      g.lineTo(r * 0.92, r * 0.72)
      g.lineTo(-r * 0.92, r * 0.72)
      g.closePath()
    },
    star: function (g, r) {
      for (var i = 0; i < 10; i++) {
        var a = -Math.PI / 2 + i * Math.PI / 5
        var rr = i % 2 ? r * 0.46 : r
        var x = Math.cos(a) * rr
        var y = Math.sin(a) * rr
        if (i === 0) g.moveTo(x, y)
        else g.lineTo(x, y)
      }
      g.closePath()
    },
    heart: function (g, r) {
      g.moveTo(0, r * 0.86)
      g.bezierCurveTo(-r * 1.28, r * 0.06, -r * 0.62, -r * 1.04, 0, -r * 0.34)
      g.bezierCurveTo(r * 0.62, -r * 1.04, r * 1.28, r * 0.06, 0, r * 0.86)
      g.closePath()
    },
    diamond: function (g, r) {
      g.moveTo(0, -r)
      g.lineTo(r * 0.78, 0)
      g.lineTo(0, r)
      g.lineTo(-r * 0.78, 0)
      g.closePath()
    },
  }

  /** What a child is told each one is called. */
  var SHAPE_NAMES = {
    circle: 'circle', square: 'square', triangle: 'triangle',
    star: 'star', heart: 'heart', diamond: 'diamond',
  }

  /**
   * Draw one, filled and inked.
   *
   * `hole: true` draws it as a socket instead: dark, sunk, no outline round the
   * outside. A hole has to read as an absence, and the way to do that is to
   * make it darker than the thing it is cut into rather than to outline it,
   * because an outlined shape looks like a piece lying flat.
   */
  function shape(g, name, x, y, r, fill, opts) {
    var f = SHAPES[name]
    if (!f) return
    var o = opts || {}
    g.save()
    g.translate(x, y)
    if (o.turn) g.rotate(o.turn)

    if (o.hole) {
      g.beginPath()
      f(g, r)
      g.fillStyle = fill || 'rgba(60,36,14,0.55)'
      g.fill()
      /* A light lip along the top edge of the socket, which is what makes it
         look cut into the board rather than painted onto it. */
      g.save()
      g.clip()
      g.fillStyle = 'rgba(255,255,255,0.22)'
      g.fillRect(-r * 1.2, r * 0.45, r * 2.4, r * 0.9)
      g.restore()
      g.restore()
      return
    }

    g.beginPath()
    f(g, r)
    g.fillStyle = fill
    g.fill()
    g.strokeStyle = LINE
    g.lineWidth = o.line === undefined ? 3.5 : o.line
    g.lineJoin = 'round'
    g.stroke()

    /* One highlight, top left, the same light as everything else. */
    if (o.gloss !== false) {
      g.save()
      g.globalAlpha = 0.28
      g.beginPath()
      f(g, r)
      g.clip()
      g.fillStyle = '#ffffff'
      g.beginPath()
      g.ellipse(-r * 0.36, -r * 0.42, r * 0.5, r * 0.3, -0.5, 0, Math.PI * 2)
      g.fill()
      g.restore()
    }
    g.restore()
  }

  /**
   * A bright room, for the games that happen indoors.
   *
   * The floor line sits on the same horizon as every outdoor scene, so a game
   * can be moved between them without its layout collapsing. A window rather
   * than a blank wall: a flat coloured rectangle behind a game is the same
   * mistake as the flat brown field, and one window with sky in it does most of
   * the work of making a room feel like somewhere.
   */
  SCENES.room = function (g, w, h) {
    var hy = groundY(h)

    /* Wall. */
    var wall = g.createLinearGradient(0, 0, 0, hy)
    wall.addColorStop(0, '#ffe9b8')
    wall.addColorStop(1, '#ffd98f')
    g.fillStyle = wall
    g.fillRect(0, 0, w, hy)

    /* Window, with sky and a cloud in it. */
    var ww = Math.min(w * 0.26, h * 0.38)
    var wh = ww * 0.78
    var wx = w * 0.5 - ww / 2
    var wy = hy * 0.22
    g.beginPath()
    g.roundRect(wx, wy, ww, wh, ww * 0.06)
    inkedOn(g, '#8fd2f5', '#8a5a2b', 5)
    g.save()
    g.beginPath()
    g.roundRect(wx, wy, ww, wh, ww * 0.06)
    g.clip()
    cloud(g, wx + ww * 0.34, wy + wh * 0.34, wh * 0.16)
    g.fillStyle = '#7ccc4c'
    g.fillRect(wx, wy + wh * 0.72, ww, wh * 0.28)
    g.restore()
    /* Frame bars, which is what turns a blue rectangle into a window. */
    g.strokeStyle = '#8a5a2b'
    g.lineWidth = 5
    g.beginPath()
    g.moveTo(wx + ww / 2, wy)
    g.lineTo(wx + ww / 2, wy + wh)
    g.moveTo(wx, wy + wh / 2)
    g.lineTo(wx + ww, wy + wh / 2)
    g.stroke()

    /* Skirting, then the floor. */
    g.beginPath()
    g.rect(0, hy - h * 0.035, w, h * 0.035)
    inkedOn(g, '#f3e3c2', LINE, 3)

    var floor = g.createLinearGradient(0, hy, 0, h)
    floor.addColorStop(0, '#c98f4e')
    floor.addColorStop(1, '#e0ab68')
    g.fillStyle = floor
    g.fillRect(0, hy, w, h - hy)

    /* Boards, fanning very slightly so the floor recedes. */
    g.strokeStyle = 'rgba(110,64,20,0.28)'
    g.lineWidth = 3
    var planks = 9
    for (var i = 0; i <= planks; i++) {
      var t = i / planks
      g.beginPath()
      g.moveTo(w * (0.18 + t * 0.64), hy)
      g.lineTo(w * (t * 1.4 - 0.2), h)
      g.stroke()
    }
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()
  }

  /**
   * A pond, seen from the bank.
   *
   * ── Why the water starts at the same horizon ──────────────────────────────
   *
   * Every scene puts its ground on `groundY`, and this one puts the water
   * there instead. That means a game written for the garden can be moved onto
   * the pond without its layout collapsing, and it means the far bank sits
   * where a far wall or a fence sits in every other scene, so the eye reads the
   * depth the same way.
   *
   * ── Why the water is banded and not a gradient ────────────────────────────
   *
   * Flat bands of blue with hard edges read as water in this style; a smooth
   * blend reads as a blue wall. The ripples are a few pale strokes, not a
   * texture, for the same reason: detail that is too fine disappears on a phone
   * and only muddies the colour.
   */
  SCENES.pond = function (g, w, h) {
    var hy = groundY(h)

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#4fb6ef')
    sky.addColorStop(1, '#c4eafc')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)

    for (var c = 0; c < 4; c++) {
      cloud(g, fixed(c * 19 + 7, w), hy * (0.16 + fixed(c * 13, 0.36)),
        h * (0.032 + fixed(c * 5, 0.022)))
    }

    /* The far bank: trees, then a strip of grass the water meets. */
    var far = []
    for (var t = 0; t <= 13; t++) {
      far.push([(t / 13) * (w + 40) - 20, hy - h * 0.05, h * (0.05 + fixed(t * 7, 0.026))])
    }
    blobOn(g, far, '#2e7a33', 3)

    g.beginPath()
    g.rect(0, hy - h * 0.045, w, h * 0.05)
    inkedOn(g, '#6cbf42', LINE, 3)

    /* The water. Three flat bands, palest at the far edge. */
    var bands = [
      [hy, h * 0.13, '#2f8fd0'],
      [hy + h * 0.13, h * 0.16, '#2a7fc0'],
      [hy + h * 0.29, h - hy, '#246fae']
    ]
    for (var b = 0; b < bands.length; b++) {
      g.fillStyle = bands[b][2]
      g.fillRect(0, bands[b][0], w, bands[b][1])
    }
    /* A bright lip where the water meets the bank, which is the one place a
       pond catches the sky. */
    g.fillStyle = '#6fc6ea'
    g.fillRect(0, hy, w, h * 0.014)
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()

    /* Ripples: short pale strokes, sparse, and wider lower down so the surface
       recedes. */
    g.strokeStyle = 'rgba(255,255,255,0.3)'
    g.lineCap = 'round'
    for (var r = 0; r < 26; r++) {
      var ry = hy + h * 0.04 + fixed(r * 13 + 5, h - hy)
      var depth = (ry - hy) / Math.max(1, h - hy)
      var rw = w * (0.03 + depth * 0.05)
      g.lineWidth = 2 + depth * 3
      g.beginPath()
      g.moveTo(fixed(r * 7 + 3, w), ry)
      g.lineTo(fixed(r * 7 + 3, w) + rw, ry)
      g.stroke()
    }

    /* Lily pads: a disc with a wedge cut out, which is the only thing that
       makes a green circle read as a leaf. */
    for (var l = 0; l < 4; l++) {
      var lx = fixed(l * 29 + 11, w)
      var ly = hy + h * 0.1 + fixed(l * 17 + 3, (h - hy) * 0.7)
      var lr = h * (0.03 + fixed(l * 5, 0.018))
      var a0 = fixed(l * 3, Math.PI * 2)
      g.beginPath()
      g.moveTo(lx, ly)
      g.arc(lx, ly, lr, a0 + 0.5, a0 + Math.PI * 2 - 0.05)
      g.closePath()
      inkedOn(g, '#3f9e3a', LINE, 3)
    }

    /* Reeds along the near edges, so the pond has banks and not just borders. */
    for (var s2 = 0; s2 < 14; s2++) {
      var sx = s2 < 7 ? fixed(s2 * 11 + 2, w * 0.2) : w - fixed(s2 * 11 + 2, w * 0.2)
      var sy = hy + h * 0.02 + fixed(s2 * 19, h * 0.06)
      var sh = h * (0.05 + fixed(s2 * 3, 0.04))
      g.strokeStyle = '#3f8f38'
      g.lineWidth = Math.max(3, h * 0.008)
      g.lineCap = 'round'
      g.beginPath()
      g.moveTo(sx, sy)
      g.quadraticCurveTo(sx + sh * 0.2, sy - sh * 0.6, sx + sh * 0.1, sy - sh)
      g.stroke()
    }
  }

  /**
   * Open sea.
   *
   * ── Why the sea is empty ──────────────────────────────────────────────────
   *
   * Every other scene here is a place with things in it, because the KG games
   * are about looking at what is in front of you. This one is a distance to be
   * crossed, and the whole point is that there is nothing in the way yet. What
   * fills it is what the child earns.
   *
   * So the ship, the island and the stepping stones are not drawn here. They
   * move with the camera and the game owns them. The backdrop is the water and
   * the sky, and it is baked once.
   *
   * ── Why the water is banded and not shaded ────────────────────────────────
   *
   * Flat bands, palest at the horizon, is how this whole style says depth: a
   * gradient reads as fog. The bands also give the eye a horizontal rhythm to
   * measure progress against, which a smooth wash would not.
   */
  /**
   * Where the sea meets the sky.
   *
   * ── Why this is not `groundY` ─────────────────────────────────────────────
   *
   * Every other scene is a place seen from the front, with a horizon a little
   * over halfway down, and on a phone held upright that is fine because the
   * thing being looked at is near the bottom anyway.
   *
   * Open water is different. There is nothing in the sky, so half a tall
   * screen of it is half a tall screen of nothing, and everything that matters
   * gets crushed into a band at the bottom. On a portrait screen the horizon
   * comes up to a third, which roughly doubles the water and is also how an
   * actual seascape is composed.
   */
  function seaY(w, h) {
    var sky = h > w * 1.15 ? h * 0.32 : h * 0.52
    /* And never so much sky that the water left under it is thinner than the
       things that have to float in it. A phone held sideways is the case that
       breaks: the screen is short, the answer row takes a fixed slice of the
       bottom, and a horizon at half way leaves a puddle. */
    var room = h - tileRow(h)
    return Math.min(sky, room - h * 0.34)
  }

  SCENES.sea = function (g, w, h) {
    var hy = seaY(w, h)

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#2ea8e8')
    sky.addColorStop(1, '#b8e8fb')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)

    for (var c = 0; c < 6; c++) {
      cloud(g, fixed(c * 17 + 4, w), hy * (0.12 + fixed(c * 11, 0.4)),
        h * (0.028 + fixed(c * 5, 0.026)))
    }

    /* Flat bands, lightest where the water meets the sky. */
    var bands = [
      [0.00, 0.10, '#66c8ec'],
      [0.10, 0.22, '#3aa3dc'],
      [0.22, 0.40, '#2b85c6'],
      [0.40, 0.66, '#2270b0'],
      [0.66, 1.00, '#1b5f99'],
    ]
    var deep = h - hy
    for (var b = 0; b < bands.length; b++) {
      g.fillStyle = bands[b][2]
      g.fillRect(0, hy + deep * bands[b][0], w, deep * (bands[b][1] - bands[b][0]) + 1)
    }

    /* The horizon takes a deep blue line, not the outline colour every other
       scene uses. That colour is a dark green, which is right against grass
       and reads as a painted stripe across open water. */
    g.strokeStyle = '#17527f'
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()

    /* Swell: shallow humps along each band edge, so the bands are water and
       not a flag. */
    for (var s2 = 1; s2 < bands.length; s2++) {
      var sy = hy + deep * bands[s2][0]
      g.fillStyle = bands[s2 - 1][2]
      g.beginPath()
      g.moveTo(-10, sy)
      var humps = 5 + s2
      for (var q = 0; q <= humps; q++) {
        var qx = -10 + (q / humps) * (w + 20)
        g.quadraticCurveTo(qx, sy - deep * 0.035, qx + (w + 20) / humps / 2, sy)
      }
      g.lineTo(w + 10, sy - 1)
      g.lineTo(-10, sy - 1)
      g.closePath()
      g.fill()
    }

    /* Whitecaps, sparser near the horizon because distance flattens them. */
    g.strokeStyle = 'rgba(255,255,255,0.45)'
    g.lineCap = 'round'
    for (var r = 0; r < 34; r++) {
      var depth = fixed(r * 13 + 5, 1)
      var ry = hy + deep * (0.06 + depth * depth * 0.92)
      var rw = w * (0.02 + depth * 0.06)
      g.lineWidth = 2 + depth * 4
      g.beginPath()
      g.moveTo(fixed(r * 7 + 3, w), ry)
      g.lineTo(fixed(r * 7 + 3, w) + rw, ry)
      g.stroke()
    }
  }

  /**
   * A street with a crossing.
   *
   * ── Why the crossing is drawn into the scene ──────────────────────────────
   *
   * Because it never moves and it is most of the picture. What moves is the
   * light and whoever is crossing, and those are the game's business.
   *
   * ── Why the road is grey and not black ────────────────────────────────────
   *
   * A black band across a bright scene reads as a hole in it. Tarmac in this
   * style is a mid grey with a hard edge, and the white markings do the work of
   * saying road: the dashes down the middle and the stripes of the crossing are
   * what a child recognises, not the colour.
   */
  /**
   * Savannah.
   *
   * Flat-topped acacias, dry grass, a low sun. The one Ghanaian landscape that
   * is not a garden or a street, and the only place in the set where the light
   * is warm rather than midday, which is most of why it reads as somewhere
   * else rather than the garden in different colours.
   */
  SCENES.savannah = function (g, w, h) {
    var hy = groundY(h)

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#f5a83c')
    sky.addColorStop(0.55, '#f7c96b')
    sky.addColorStop(1, '#fbe3a8')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)

    /* The sun, low and fat. */
    g.beginPath()
    g.arc(w * 0.74, hy * 0.62, Math.min(w, h) * 0.075, 0, Math.PI * 2)
    inkedOn(g, '#ffe07a', LINE, 4)

    /* Distant hills, hazy. */
    var far = []
    for (var t = 0; t <= 10; t++) {
      far.push([(t / 10) * (w + 60) - 30, hy - h * 0.01, h * (0.03 + fixed(t * 7, 0.03))])
    }
    blobOn(g, far, '#b8813f', 3)

    /* Ground, two bands so the near grass is warmer. */
    g.fillStyle = '#d9ab5c'
    g.fillRect(0, hy, w, h - hy)
    g.fillStyle = '#c69a4e'
    g.fillRect(0, hy + (h - hy) * 0.45, w, h - hy)
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()

    /* Acacias: a bare trunk and a flat crown, which is the whole silhouette. */
    for (var a = 0; a < 3; a++) {
      var ax = fixed(a * 31 + 9, w)
      var ah = h * (0.14 + fixed(a * 13, 0.08))
      var ay = hy - h * 0.005
      g.strokeStyle = '#6b4a22'
      g.lineWidth = Math.max(5, ah * 0.1)
      g.lineCap = 'round'
      g.beginPath()
      g.moveTo(ax, ay)
      g.lineTo(ax, ay - ah * 0.62)
      g.moveTo(ax, ay - ah * 0.5)
      g.lineTo(ax - ah * 0.22, ay - ah * 0.66)
      g.moveTo(ax, ay - ah * 0.5)
      g.lineTo(ax + ah * 0.22, ay - ah * 0.66)
      g.stroke()
      g.beginPath()
      g.ellipse(ax, ay - ah * 0.78, ah * 0.62, ah * 0.2, 0, 0, Math.PI * 2)
      inkedOn(g, '#4f8f3a', LINE, 3.5)
      g.beginPath()
      g.ellipse(ax - ah * 0.2, ay - ah * 0.9, ah * 0.34, ah * 0.14, 0, 0, Math.PI * 2)
      inkedOn(g, '#5fa344', LINE, 3)
    }

    /* Tufts of dry grass. */
    g.strokeStyle = 'rgba(120,88,34,0.55)'
    g.lineCap = 'round'
    for (var t2 = 0; t2 < 30; t2++) {
      var tx = fixed(t2 * 11 + 3, w)
      var ty = hy + h * 0.02 + fixed(t2 * 17, (h - hy) * 0.85)
      var th = h * (0.012 + fixed(t2 * 5, 0.016))
      g.lineWidth = Math.max(2, th * 0.3)
      for (var b = -1; b <= 1; b++) {
        g.beginPath()
        g.moveTo(tx, ty)
        g.lineTo(tx + b * th * 0.5, ty - th)
        g.stroke()
      }
    }
  }

  /**
   * A cave.
   *
   * Dark, warm, and lit from a fire off to one side. The only interior in the
   * set that is not a classroom, and the point of it is that something lives
   * here: it has to feel like somewhere you would find a monster rather than
   * somewhere you would find a whiteboard.
   */
  SCENES.cave = function (g, w, h) {
    var hy = groundY(h)

    g.fillStyle = '#3a2a3f'
    g.fillRect(0, 0, w, h)

    /* The mouth of the cave behind, a lighter arch, so there is a way out. */
    var mw = w * 0.42
    g.beginPath()
    g.moveTo(w * 0.5 - mw / 2, hy)
    g.quadraticCurveTo(w * 0.5, hy - h * 0.46, w * 0.5 + mw / 2, hy)
    g.closePath()
    g.fillStyle = '#4e3a55'
    g.fill()

    /* Stalactites, uneven, biting down from the top. */
    for (var i = 0; i < 9; i++) {
      var sx = fixed(i * 23 + 5, w)
      var sh = h * (0.06 + fixed(i * 11, 0.13))
      var sw = h * (0.022 + fixed(i * 7, 0.022))
      g.beginPath()
      g.moveTo(sx - sw, -2)
      g.lineTo(sx, sh)
      g.lineTo(sx + sw, -2)
      g.closePath()
      inkedOn(g, '#5a4463', LINE, 3)
    }

    /* Floor. */
    g.fillStyle = '#6b5240'
    g.fillRect(0, hy, w, h - hy)
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()
    g.fillStyle = '#7d6149'
    g.fillRect(0, hy + (h - hy) * 0.5, w, h - hy)

    /* Rocks on the floor. */
    for (var r = 0; r < 6; r++) {
      var rx = fixed(r * 29 + 11, w)
      var ry = hy + h * 0.03 + fixed(r * 13, (h - hy) * 0.7)
      var rr = h * (0.018 + fixed(r * 5, 0.022))
      g.beginPath()
      g.ellipse(rx, ry, rr * 1.4, rr, fixed(r * 3, 1), 0, Math.PI * 2)
      inkedOn(g, '#5f4a3a', LINE, 2.5)
    }

    /* Firelight from the left, which is what keeps it from being a black box. */
    var fire = g.createRadialGradient(w * 0.08, hy * 0.9, 0, w * 0.08, hy * 0.9, w * 0.5)
    fire.addColorStop(0, 'rgba(255,170,60,0.34)')
    fire.addColorStop(1, 'rgba(255,170,60,0)')
    g.fillStyle = fire
    g.fillRect(0, 0, w, h)
  }

  /**
   * A kitchen counter.
   *
   * Tiles behind, a wooden worktop, and a shelf. Everything happens on the
   * worktop, so the worktop is where the light is and the tiles are quiet: a
   * busy splashback would fight whatever is being counted out on it.
   */
  SCENES.kitchen = function (g, w, h) {
    var hy = groundY(h)

    g.fillStyle = '#f3e7d2'
    g.fillRect(0, 0, w, hy)

    /* Tiles, in a grid, pale. */
    var ts = Math.max(28, Math.min(w, h) * 0.07)
    g.strokeStyle = 'rgba(160,130,95,0.35)'
    g.lineWidth = 2
    for (var x = 0; x < w + ts; x += ts) {
      g.beginPath()
      g.moveTo(x, 0)
      g.lineTo(x, hy)
      g.stroke()
    }
    for (var y = 0; y < hy; y += ts) {
      g.beginPath()
      g.moveTo(0, y)
      g.lineTo(w, y)
      g.stroke()
    }

    /* A shelf with jars, high up and out of the way. */
    var shy = hy * 0.3
    g.beginPath()
    g.rect(w * 0.05, shy, w * 0.34, h * 0.018)
    inkedOn(g, '#a9703c', LINE, 3)
    for (var j = 0; j < 3; j++) {
      var jx = w * 0.09 + j * w * 0.1
      var jh = h * (0.05 + fixed(j * 7, 0.03))
      g.beginPath()
      g.roundRect(jx, shy - jh, w * 0.055, jh, w * 0.012)
      inkedOn(g, ['#e0679f', '#6cbf42', '#3f9ede'][j], LINE, 3)
    }

    /* The worktop. */
    g.fillStyle = '#c99457'
    g.fillRect(0, hy, w, h - hy)
    g.strokeStyle = LINE
    g.lineWidth = 3.5
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()
    /* Grain. */
    g.strokeStyle = 'rgba(120,80,36,0.3)'
    g.lineWidth = 2
    for (var gr = 0; gr < 7; gr++) {
      var gy = hy + (h - hy) * (gr + 1) / 8
      g.beginPath()
      g.moveTo(0, gy)
      g.lineTo(w, gy)
      g.stroke()
    }
    /* A lip along the front edge. */
    g.fillStyle = '#b07f44'
    g.fillRect(0, hy, w, h * 0.012)
  }

  /**
   * A market stall.
   *
   * ── Why this one matters ──────────────────────────────────────────────────
   *
   * It is the only scene in the set a Ghanaian child will recognise as theirs
   * rather than as a generic cartoon place: a striped canopy, produce in
   * baskets, a wooden table to count money out on. Money Shop is about cedis
   * and pesewas, and putting cedis in a supermarket would undo half of that.
   */
  SCENES.market = function (g, w, h) {
    var hy = groundY(h)

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#4fb6ef')
    sky.addColorStop(1, '#cfeefc')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)
    for (var c = 0; c < 3; c++) {
      cloud(g, fixed(c * 27 + 8, w), hy * 0.16, h * 0.03)
    }

    /* The canopy: a scalloped stripe across the top. */
    var ch = h * 0.17
    var bands = 9
    for (var b = 0; b < bands; b++) {
      g.fillStyle = b % 2 ? '#e0483a' : '#f6f1e2'
      g.fillRect(b * (w / bands), 0, w / bands + 1, ch)
    }
    g.beginPath()
    g.moveTo(0, ch)
    for (var sc = 0; sc < bands * 2; sc++) {
      var sw = w / (bands * 2)
      g.arc(sc * sw + sw / 2, ch, sw / 2, Math.PI, 0, true)
    }
    g.lineTo(w, ch - 1)
    g.lineTo(0, ch - 1)
    g.closePath()
    g.fillStyle = '#e0483a'
    g.fill()
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, ch)
    g.lineTo(w, ch)
    g.stroke()

    /* Poles holding it up. */
    g.strokeStyle = '#8a5a2b'
    g.lineWidth = Math.max(6, w * 0.012)
    g.lineCap = 'round'
    for (var pl = 0; pl < 2; pl++) {
      var px = pl ? w * 0.94 : w * 0.06
      g.beginPath()
      g.moveTo(px, ch)
      g.lineTo(px, hy)
      g.stroke()
    }

    /* Baskets of produce along the back. */
    for (var k = 0; k < 4; k++) {
      var bx = w * 0.16 + k * w * 0.2
      var br = Math.min(w * 0.055, h * 0.075)
      g.beginPath()
      g.ellipse(bx, hy - br * 0.1, br, br * 0.5, 0, Math.PI, 0)
      g.closePath()
      inkedOn(g, '#c08a4a', LINE, 3)
      for (var f = 0; f < 4; f++) {
        g.beginPath()
        g.arc(bx - br * 0.5 + f * br * 0.33, hy - br * 0.28 - (f % 2) * br * 0.16,
          br * 0.26, 0, Math.PI * 2)
        inkedOn(g, ['#e8543c', '#f2c33b', '#6cbf42', '#e8913c'][k], LINE, 2.5)
      }
    }

    /* The table. */
    g.fillStyle = '#c99457'
    g.fillRect(0, hy, w, h - hy)
    g.strokeStyle = LINE
    g.lineWidth = 3.5
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()
    g.fillStyle = '#b07f44'
    g.fillRect(0, hy, w, h * 0.014)
    g.strokeStyle = 'rgba(120,80,36,0.28)'
    g.lineWidth = 2
    for (var gr2 = 0; gr2 < 6; gr2++) {
      var gy2 = hy + (h - hy) * (gr2 + 1) / 7
      g.beginPath()
      g.moveTo(0, gy2)
      g.lineTo(w, gy2)
      g.stroke()
    }
  }

  /**
   * A school yard.
   *
   * A wall, a mango tree for shade, and swept red earth. Where the bins live,
   * which is the point: sorting rubbish belongs outside next to the actual
   * bins and not on a worksheet.
   */
  SCENES.yard = function (g, w, h) {
    var hy = groundY(h)

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#4fb6ef')
    sky.addColorStop(1, '#cfeefc')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)
    for (var c = 0; c < 4; c++) {
      cloud(g, fixed(c * 19 + 6, w), hy * (0.14 + fixed(c * 11, 0.3)), h * 0.032)
    }

    /* A block wall along the back. */
    var wallH = h * 0.14
    g.fillStyle = '#e8d9b8'
    g.fillRect(0, hy - wallH, w, wallH)
    g.strokeStyle = 'rgba(150,120,80,0.45)'
    g.lineWidth = 2
    var bw = Math.max(40, w * 0.06)
    var bh = wallH / 3
    for (var row = 0; row < 3; row++) {
      var oy = hy - wallH + row * bh
      g.beginPath()
      g.moveTo(0, oy)
      g.lineTo(w, oy)
      g.stroke()
      for (var col = 0; col * bw < w + bw; col++) {
        var ox = col * bw + (row % 2 ? bw / 2 : 0)
        g.beginPath()
        g.moveTo(ox, oy)
        g.lineTo(ox, oy + bh)
        g.stroke()
      }
    }
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.strokeRect(0, hy - wallH, w, wallH)

    /* A mango tree leaning in from the left. */
    tree(g, w * 0.1, hy - wallH * 0.2, h * 0.3, true)

    /* Swept earth. */
    g.fillStyle = '#d08a5e'
    g.fillRect(0, hy, w, h - hy)
    g.fillStyle = '#c47f55'
    g.fillRect(0, hy + (h - hy) * 0.5, w, h - hy)
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()
    /* Broom marks, which is what says swept rather than empty. */
    g.strokeStyle = 'rgba(150,90,55,0.4)'
    g.lineWidth = 2
    for (var m = 0; m < 14; m++) {
      var my = hy + h * 0.02 + fixed(m * 17, (h - hy) * 0.9)
      var mx = fixed(m * 11, w)
      g.beginPath()
      g.moveTo(mx, my)
      g.quadraticCurveTo(mx + w * 0.06, my - h * 0.012, mx + w * 0.12, my)
      g.stroke()
    }
  }

  SCENES.road = function (g, w, h) {
    var hy = groundY(h)
    var kerbFar = hy + h * 0.06
    var kerbNear = h * 0.84

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#4fb6ef')
    sky.addColorStop(1, '#c4eafc')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)

    for (var c = 0; c < 4; c++) {
      cloud(g, fixed(c * 21 + 5, w), hy * (0.15 + fixed(c * 11, 0.34)),
        h * (0.032 + fixed(c * 5, 0.02)))
    }

    /* Houses along the far side, so the street goes somewhere. */
    for (var b = 0; b < 5; b++) {
      var bw = w * (0.11 + fixed(b * 7, 0.05))
      var bx = w * 0.04 + b * (w * 0.19)
      var bh = h * (0.12 + fixed(b * 13, 0.09))
      g.beginPath()
      g.rect(bx, hy - bh, bw, bh)
      inkedOn(g, ['#f5d7a8', '#e8bfa0', '#f0e2bb', '#dcc6e8', '#cfe2c0'][b % 5], LINE, 3.5)
      /* Roof. */
      g.beginPath()
      g.moveTo(bx - bw * 0.08, hy - bh)
      g.lineTo(bx + bw * 0.5, hy - bh - h * 0.05)
      g.lineTo(bx + bw * 1.08, hy - bh)
      g.closePath()
      inkedOn(g, ['#c4442e', '#8a5ccf', '#26a86a', '#3f9ede', '#e8913c'][b % 5], LINE, 3.5)
      /* Two windows, so it is a house and not a box. */
      for (var win = 0; win < 2; win++) {
        g.beginPath()
        g.roundRect(bx + bw * (0.18 + win * 0.42), hy - bh * 0.66, bw * 0.24, bh * 0.28,
          bw * 0.04)
        inkedOn(g, '#bfe8fb', LINE, 2.5)
      }
    }

    /* Far pavement. */
    g.fillStyle = '#d8d3c6'
    g.fillRect(0, hy, w, kerbFar - hy)
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()

    /* The road. */
    g.fillStyle = '#6f757e'
    g.fillRect(0, kerbFar, w, kerbNear - kerbFar)
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, kerbFar)
    g.lineTo(w, kerbFar)
    g.moveTo(0, kerbNear)
    g.lineTo(w, kerbNear)
    g.stroke()

    /* Near pavement. */
    g.fillStyle = '#d8d3c6'
    g.fillRect(0, kerbNear, w, h - kerbNear)

    /* The crossing: fat white stripes across the road, which is the one thing
       that makes this a place you are allowed to cross. */
    var cx = w * 0.5
    var cw = Math.min(w * 0.3, h * 0.42)
    var stripes = 5
    for (var t = 0; t < stripes; t++) {
      var sw = cw / (stripes * 2 - 1)
      g.fillStyle = '#f3f1e8'
      g.fillRect(cx - cw / 2 + t * sw * 2, kerbFar + 2, sw, kerbNear - kerbFar - 4)
    }

    /* Centre line, broken, and stopping either side of the crossing. */
    g.strokeStyle = '#f3f1e8'
    g.lineWidth = Math.max(3, h * 0.008)
    g.setLineDash([w * 0.035, w * 0.03])
    g.beginPath()
    g.moveTo(0, (kerbFar + kerbNear) / 2)
    g.lineTo(cx - cw * 0.62, (kerbFar + kerbNear) / 2)
    g.moveTo(cx + cw * 0.62, (kerbFar + kerbNear) / 2)
    g.lineTo(w, (kerbFar + kerbNear) / 2)
    g.stroke()
    g.setLineDash([])
  }

  /**
   * Where the kerbs are, so a game and the scene agree about the road.
   *
   * The near pavement is deep enough to stand somebody on. At a sixth of the
   * height it was about a hundred pixels, and the character waiting to cross
   * had his legs off the bottom of the screen.
   */
  function kerbs(h) {
    return { far: groundY(h) + h * 0.06, near: h * 0.78 }
  }

  /* ── a race track ──────────────────────────────────────────────────────── */

  /**
   * A track with lanes, seen from the side.
   *
   * For the Primary games that are a journey: something moves left to right and
   * getting things right is what moves it. The lanes are drawn here because
   * they never change; who is in them is the game's business.
   */
  SCENES.track = function (g, w, h) {
    var hy = groundY(h)

    var sky = g.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, '#4fb6ef')
    sky.addColorStop(1, '#c4eafc')
    g.fillStyle = sky
    g.fillRect(0, 0, w, hy)

    for (var c = 0; c < 4; c++) {
      cloud(g, fixed(c * 23 + 6, w), hy * (0.14 + fixed(c * 11, 0.34)),
        h * (0.03 + fixed(c * 5, 0.02)))
    }

    /* Bunting across the sky, which is what says race rather than road. */
    var flags = 14
    g.strokeStyle = 'rgba(60,40,20,0.45)'
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(-10, hy * 0.2)
    g.quadraticCurveTo(w / 2, hy * 0.33, w + 10, hy * 0.2)
    g.stroke()
    for (var f = 0; f <= flags; f++) {
      var t = f / flags
      var fx = -10 + t * (w + 20)
      /* Following the sag of the line, so the flags hang from it rather than
         floating near it. */
      var fy = hy * 0.2 + Math.sin(Math.PI * t) * hy * 0.1
      g.beginPath()
      g.moveTo(fx - h * 0.014, fy)
      g.lineTo(fx + h * 0.014, fy)
      g.lineTo(fx, fy + h * 0.04)
      g.closePath()
      inkedOn(g, ['#e8543c', '#f2c33b', '#3f9ede', '#26a86a', '#e0679f'][f % 5], LINE, 2.5)
    }

    /* Far hills and a crowd line, so the track is somewhere people came to. */
    var far = []
    for (var t2 = 0; t2 <= 12; t2++) {
      far.push([(t2 / 12) * (w + 40) - 20, hy - h * 0.02, h * (0.045 + fixed(t2 * 7, 0.025))])
    }
    blobOn(g, far, '#2e7a33', 3)

    /* Grass, then the track surface. */
    g.fillStyle = '#6cbf42'
    g.fillRect(0, hy, w, h - hy)
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, hy)
    g.lineTo(w, hy)
    g.stroke()

    var L = lanes(h)
    var top = L.top
    var bottom = L.bottom

    /* Laterite, not sand. A running track in Ghana is red earth, and a tan
       band with a dashed line down it reads as a road: the colour is most of
       what says people run here. */
    g.fillStyle = '#c4623f'
    g.fillRect(0, top, w, bottom - top)
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.beginPath()
    g.moveTo(0, top)
    g.lineTo(w, top)
    g.moveTo(0, bottom)
    g.lineTo(w, bottom)
    g.stroke()

    /* Solid lane lines, not a dashed centre line. A dashed line down the
       middle of a strip is a road marking and nothing else. */
    g.strokeStyle = 'rgba(255,255,255,0.8)'
    g.lineWidth = Math.max(3, h * 0.006)
    g.beginPath()
    g.moveTo(0, (top + bottom) / 2)
    g.lineTo(w, (top + bottom) / 2)
    g.stroke()

    /* Rake marks along the running direction, which is what gives a flat
       colour a grain and a sense of speed once anything moves over it. */
    g.strokeStyle = 'rgba(150,66,38,0.45)'
    g.lineWidth = 2
    for (var rk = 1; rk < 8; rk++) {
      var ry = top + (bottom - top) * rk / 8
      g.beginPath()
      g.moveTo(0, ry)
      g.lineTo(w, ry)
      g.stroke()
    }

    /* The finish, chequered, at the right. */
    var fw = Math.min(w * 0.05, h * 0.07)
    var rows = 6
    var cell = (bottom - top) / rows
    for (var rr = 0; rr < rows; rr++) {
      for (var cc = 0; cc < 2; cc++) {
        g.fillStyle = (rr + cc) % 2 ? '#2b2b2b' : '#f3f1e8'
        g.fillRect(w - fw + cc * fw / 2, top + rr * cell, fw / 2, cell)
      }
    }
    g.strokeStyle = LINE
    g.lineWidth = 3
    g.strokeRect(w - fw, top, fw, bottom - top)
  }

  /**
   * The two lanes of the track, so a game and the scene agree.
   *
   * Measured down to the top of the answer row rather than to the bottom of
   * the screen. It used to run to the bottom, which put the far lane
   * underneath the answers: the rival was drawn every frame and never once
   * seen, so the race had no opponent in it.
   */
  function lanes(h) {
    var hy = groundY(h)
    var floor = h - tileRow(h)
    var top = hy + (floor - hy) * 0.14
    var bottom = floor - (floor - hy) * 0.06
    return { top: top, bottom: bottom, one: top + (bottom - top) * 0.3,
      two: top + (bottom - top) * 0.74 }
  }

  /* ── answer tiles ──────────────────────────────────────────────────────── */

  /**
   * A row of answers along the bottom.
   *
   * ── Why this is in the kit ────────────────────────────────────────────────
   *
   * Because eight of the fifteen Primary games are the same shape underneath: a
   * question, a handful of answers, pick one. Addition, subtraction, times
   * tables, money, telling the time, spelling, floats or sinks, magnetic or
   * not. Writing that row eight times would mean eight places to get the touch
   * target wrong.
   *
   * ── Why the tiles are this big ────────────────────────────────────────────
   *
   * They are the only thing on screen a child touches, and a seven year old
   * using a shared phone is aiming with a thumb. The row takes a fixed slice of
   * the bottom of the screen and the tiles divide it, so four answers on a
   * phone are still comfortably wide, and the game above has to lay itself out
   * in what is left rather than the other way round.
   *
   * ── Why a wrong answer stays on screen ────────────────────────────────────
   *
   * The tile that was tapped goes red and the right one goes green, together.
   * Hiding the mistake is how a child learns nothing from it; showing both at
   * once is how they see what they should have picked.
   */
  function tileRow(h) { return clamp(h * 0.19, 86, 150) }

  function tileRect(w, h, i, n) {
    var row = tileRow(h)
    var gap = Math.min(w * 0.02, 18)
    var pad = Math.min(w * 0.04, 40)
    var tw = (w - pad * 2 - gap * (n - 1)) / n
    var th = Math.min(row * 0.66, tw * 0.9)
    return {
      x: pad + i * (tw + gap), y: h - row * 0.5 - th * 0.5,
      w: tw, h: th,
    }
  }

  /** Which tile a point is on, or -1. */
  function tileAt(w, h, n, px, py) {
    for (var i = 0; i < n; i++) {
      var r = tileRect(w, h, i, n)
      /* A margin round each, because a thumb that lands just outside a button
         meant to be pressed by a thumb should still count. */
      if (px >= r.x - 6 && px <= r.x + r.w + 6
        && py >= r.y - 10 && py <= r.y + r.h + 10) return i
    }
    return -1
  }

  /**
   * Draw one.
   *
   * `state` is 'idle', 'right', 'wrong' or 'dim'. The colours are deliberately
   * not subtle: at this age the feedback has to be legible from across a room
   * and unmistakable at a glance.
   */
  function drawTile(ctx, w, h, i, n, label, state, font) {
    var r = tileRect(w, h, i, n)
    var face = '#f3a12e'
    var edge = '#c06f10'
    if (state === 'right') { face = '#23b862'; edge = '#0a6336' }
    else if (state === 'wrong') { face = '#e0483a'; edge = '#9b2417' }

    ctx.save()
    if (state === 'dim') ctx.globalAlpha = 0.4

    /* The edge underneath, which is what gives it thickness to press. */
    ctx.beginPath()
    ctx.roundRect(r.x, r.y + r.h * 0.11, r.w, r.h, r.h * 0.26)
    ctx.fillStyle = edge
    ctx.fill()
    ctx.strokeStyle = LINE
    ctx.lineWidth = 3.5
    ctx.stroke()

    ctx.beginPath()
    ctx.roundRect(r.x, r.y, r.w, r.h, r.h * 0.26)
    ctx.fillStyle = face
    ctx.fill()
    ctx.strokeStyle = LINE
    ctx.lineWidth = 3.5
    ctx.stroke()

    ctx.save()
    ctx.beginPath()
    ctx.roundRect(r.x, r.y, r.w, r.h, r.h * 0.26)
    ctx.clip()
    ctx.fillStyle = 'rgba(255,255,255,0.26)'
    ctx.beginPath()
    ctx.roundRect(r.x + r.h * 0.2, r.y + r.h * 0.12, r.w - r.h * 0.4, r.h * 0.22, r.h * 0.11)
    ctx.fill()
    ctx.restore()

    /* The label, sized to fit however long it is: "12" and "half past three"
       both have to sit on the same tile. */
    var size = r.h * 0.52
    ctx.font = '600 ' + Math.round(size) + 'px ' + font
    while (ctx.measureText(label).width > r.w * 0.82 && size > r.h * 0.2) {
      size *= 0.9
      ctx.font = '600 ' + Math.round(size) + 'px ' + font
    }
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.lineJoin = 'round'
    ctx.miterLimit = 2
    ctx.strokeStyle = LINE
    ctx.lineWidth = size * 0.16
    ctx.strokeText(label, r.x + r.w / 2, r.y + r.h * 0.52)
    ctx.fillStyle = '#ffffff'
    ctx.fillText(label, r.x + r.w / 2, r.y + r.h * 0.52)
    ctx.restore()
  }

  /* ── sound ─────────────────────────────────────────────────────────────── */

  /**
   * Noise, from recordings.
   *
   * These were synthesised once: oscillators and an envelope each. It cost
   * nothing to download and it sounded exactly like that. A chunky physical
   * thud is most of what makes an action satisfying, and no amount of filter
   * work on a sine wave gets there. The set is public domain, fifteen
   * kilobytes, and better than anything written by hand.
   *
   * Nothing loads until the first touch: a browser refuses audio until the
   * person has interacted, which is half of why every game opens on a card.
   */
  function makeSound() {
    var NAMES = ['lift', 'thud', 'win', 'oops', 'steal', 'poke', 'cover']
    var pool = {}
    var music = null
    var woke = false
    var ducked = 0
    var muted = false
    var BED = 0.34

    function load() {
      for (var i = 0; i < NAMES.length; i++) {
        var n = NAMES[i]
        /* Three of each, so rapid repeats do not cut each other off. A single
           element restarted mid-play is the sound of a game with one hand. */
        pool[n] = { at: 0, clips: [] }
        for (var k = 0; k < 3; k++) {
          var a = new Audio('sfx/' + n + '.mp3')
          a.preload = 'auto'
          a.volume = 0.75
          pool[n].clips.push(a)
        }
      }
      music = new Audio('music/theme.mp3')
      music.loop = true
      music.volume = 0
      music.preload = 'auto'
      /* No track supplied. Not a failure: there is no music, and nothing else
         changes. */
      music.onerror = function () { music = null }
    }

    return {
      touched: function () {
        if (woke) return
        woke = true
        load()
        if (music) {
          var p = music.play()
          if (p && p.catch) p.catch(function () { music = null })
          music.volume = BED
        }
      },

      /**
       * Silence, when the page that framed this game asks for it.
       *
       * The app owns one mute switch across the games, the videos and the
       * lessons, rather than three that argue. A game opened on its own never
       * hears from anybody and stays audible.
       */
      mute: function (on) {
        muted = !!on
        if (music) music.volume = muted ? 0 : (ducked > 0 ? BED * 0.22 : BED)
      },

      play: function (what) {
        var slot = pool[what]
        if (muted || !woke || !slot) return
        var a = slot.clips[slot.at % slot.clips.length]
        slot.at++
        try { a.currentTime = 0; var p = a.play(); if (p && p.catch) p.catch(function () {}) }
        catch (e) { /* a sound that will not play is not worth a broken round */ }
      },

      /**
       * Pull the music down while somebody is talking.
       *
       * Counted rather than toggled, because two lines can overlap and a
       * boolean would let the first to finish raise the music over the second.
       */
      duck: function (down) {
        ducked = Math.max(0, ducked + (down ? 1 : -1))
        if (!music || muted) return
        var want = ducked > 0 ? BED * 0.22 : BED
        var from = music.volume
        var t0 = performance.now()
        var glide = function () {
          if (!music) return
          var k = Math.min(1, (performance.now() - t0) / 260)
          music.volume = from + (want - from) * k
          if (k < 1) requestAnimationFrame(glide)
        }
        glide()
      },
    }
  }

  /* ── voice ─────────────────────────────────────────────────────────────── */

  /**
   * What the character says.
   *
   * Recordings first, the device voice as the fallback. A child who cannot read
   * has only the voice, so a phone with no speech engine must not leave the
   * game silent, and a line nobody thought to record must still be spoken.
   */
  function makeVoice(sound) {
    var index = null, playing = null, turn = 0
    fetch('/games/voice/index.json')
      .then(function (r) { return r.ok ? r.json() : null })
      .then(function (j) { index = j || {} })
      .catch(function () { index = {} })

    function tidy(s) { return String(s || '').trim().replace(/\s+/g, ' ') }

    function synth(line, done) {
      if (!('speechSynthesis' in window)) { if (done) done(); return }
      try {
        var u = new SpeechSynthesisUtterance(line)
        u.rate = 0.95
        u.pitch = 1.15
        if (done) { u.onend = done; u.onerror = done }
        window.speechSynthesis.speak(u)
      } catch (e) { if (done) done() }
    }

    return function say(line) {
      var text = tidy(line)
      if (!text) return
      turn++
      var mine = turn
      if (playing) { try { playing.pause() } catch (e) {} playing = null }
      try { window.speechSynthesis && window.speechSynthesis.cancel() } catch (e) {}

      sound.duck(true)
      var undone = false
      var release = function () { if (undone) return; undone = true; sound.duck(false) }

      var key = index && index[text]
      if (!key) { synth(text, release); return }
      var a = new Audio('/games/voice/' + key + '.mp3')
      playing = a
      a.onended = release
      a.onerror = function () { release(); if (mine === turn) synth(text, null) }
      var p = a.play()
      if (p && p.catch) p.catch(function () { release(); if (mine === turn) synth(text, null) })
      /* A clip that never fires `ended`, which happens on some mobile
         browsers, must not leave the music quiet for the rest of the game. */
      setTimeout(release, 9000)
    }
  }


  /* ── the harness ───────────────────────────────────────────────────────── */

  /**
   * Everything a game does not have to think about.
   *
   * A game hands in a description and gets back a running game: a title card
   * that unlocks the audio, a scene, a round loop, a banner, a commit button, a
   * progress row, an end card, particles, screen shake, sound, voice and the
   * frame loop. What it supplies is only its own idea.
   *
   * ── Where the line is ──────────────────────────────────────────────────────
   *
   * The harness never knows what the answer is. It asks the game to `judge`
   * when the child commits, and the game works the truth out from the board at
   * that moment. The harness records what it is told and shows it. There is no
   * answer stored anywhere for anybody to get wrong, and nothing in this file
   * could be edited to make a wrong answer pass, because nothing in this file
   * knows what right would be.
   *
   * ── The hooks ──────────────────────────────────────────────────────────────
   *
   *   begin(K)        start a round: lay out the board, choose the target
   *   ask(K)          what the banner says: { head, num, tail }
   *   ready(K)        may the child commit yet
   *   judge(K)        is the board correct, worked out now
   *   down/move/up    pointer, in scene coordinates
   *   step(K, dt)     per frame
   *   paint(K)        draw the game's own objects
   *   props(K,g,w,h)  extra scenery baked into the backdrop
   */
  function run(def) {
    var canvas = document.getElementById('stage')
    var ctx = canvas.getContext('2d')
    var W = 0, H = 0, last = 0, now = 0
    var backdrop = null, backdropFor = ''

    var him = new Ananse(ctx)
    var sound = makeSound()
    var say = makeVoice(sound)

    var FONT = '"Fredoka", "Baloo 2", ui-rounded, "Segoe UI Rounded", system-ui, sans-serif'
    var ROUNDS = def.rounds || 5

    /**
     * An endless game.
     *
     * ── Why the kit needs to know ─────────────────────────────────────────
     *
     * The KG games are a fixed set of questions and the corner shows a pip per
     * question, which is exactly right when a child can see the end from the
     * start. An older child has the patience for a run that goes until they
     * drop it, and a row of pips cannot show that: there is no denominator.
     *
     * So an endless game trades the pips for a readout, and trades finishing
     * for lives. Everything else is the same harness: the same `judge`, the
     * same rounds, the same commit. `round` simply never runs out.
     */
    var ENDLESS = def.endless === true
    var LIVES = def.lives || 3


    var shake = { x: 0, y: 0, power: 0 }
    var bits = []

    /* ── lettering ───────────────────────────────────────────────────────── */

    /**
     * Outlined lettering, the signature of the genre.
     *
     * A white sentence takes a dark outline and nothing else. Giving it a white
     * ring as well means white ringed by white ringed by dark, and the letters
     * come out hollow because the only thing visible is the outline.
     *
     * A coloured number takes all three, dark then white then the colour, and
     * that white band is what makes a yellow numeral pop off green grass.
     *
     * The widths are small on purpose. Heavier strokes close up the counters of
     * a rounded face until it is texture rather than words.
     */
    function stroked(text, x, y, size, fill, ring, align) {
      ctx.save()
      ctx.font = '600 ' + Math.round(size) + 'px ' + FONT
      ctx.textAlign = align || 'center'
      ctx.textBaseline = 'middle'
      ctx.lineJoin = 'round'
      ctx.miterLimit = 2
      ctx.strokeStyle = LINE
      ctx.lineWidth = size * (ring ? 0.19 : 0.1)
      ctx.strokeText(text, x, y)
      if (ring) {
        ctx.strokeStyle = ring
        ctx.lineWidth = size * 0.1
        ctx.strokeText(text, x, y)
      }
      ctx.fillStyle = fill
      ctx.fillText(text, x, y)
      ctx.restore()
    }
    function shout(t, x, y, s, f, r) { stroked(t, x, y, s, f, r, 'center') }
    function shoutLeft(t, x, y, s, f, r) { stroked(t, x, y, s, f, r, 'left') }
    function shoutWidth(t, s) {
      ctx.save()
      ctx.font = '600 ' + Math.round(s) + 'px ' + FONT
      var w = ctx.measureText(t).width
      ctx.restore()
      return w
    }

    /* ── layout ──────────────────────────────────────────────────────────── */

    /** The band at the bottom that belongs to the button, never to objects. */
    function bandH() { return clamp(H * 0.16, 76, 124) }
    function ground() { return groundY(H) }
    function askSize() { return clamp(Math.min(W, H) * 0.052, 19, 36) }
    /** Where a game may lay things out: below the banner, above the button. */
    function tallyY() { return H * 0.085 + askSize() * 1.9 }

    function buttonRect() {
      var h = bandH() * 0.7
      var w = Math.min(W * 0.52, h * 4.6)
      return { x: W / 2 - w / 2, y: H - bandH() * 0.86, w: w, h: h }
    }

    /* ── state ───────────────────────────────────────────────────────────── */

    var K = {
      ctx: null, W: 0, H: 0, him: him, say: say, sound: sound,
      shout: shout, shoutLeft: shoutLeft, shoutWidth: shoutWidth, FONT: FONT,
      LINE: LINE, inked: null, blob: null,
      ground: ground, bandH: bandH, tallyY: tallyY, buttonRect: buttonRect,
      /* The game's own scratch space. The harness never reads it. */
      own: {},
      round: 0, results: [], phase: 'start', target: 0,
      /* Endless games only. `score` is whatever the game counts; the kit adds
         one per round won and never reads it back. */
      lives: LIVES, livesMax: LIVES, score: 0, best: 0, endless: ENDLESS,
      /** Seconds the board must be left alone before it may be committed. */
      settleFor: 0,
      now: 0,
    }
    K.inked = function (fill, line, width) { inkedOn(ctx, fill, line, width) }
    K.blob = function (circles, fill, width) { blobOn(ctx, circles, fill, width) }

    /**
     * A puff of particles.
     *
     * Every game wants dust when something lands and colour when something is
     * won, and neither is worth writing twice.
     */
    K.puff = function (x, y, n, colour) {
      for (var i = 0; i < n; i++) {
        bits.push({
          x: x, y: y,
          vx: rand(-90, 90), vy: rand(-170, -40),
          r: rand(3, 8), life: 1, fade: rand(1.4, 2.6),
          colour: colour || 'rgba(120,80,40,0.5)',
        })
      }
    }
    K.cheer = function (x, y) {
      for (var i = 0; i < 26; i++) {
        bits.push({
          x: x + rand(-40, 40), y: y,
          vx: rand(-170, 170), vy: rand(-430, -170),
          r: rand(3, 7), life: 1, fade: rand(0.8, 1.4),
          colour: ['#f2d024', '#ffd07a', '#d6402e', '#0f8a4d'][i % 4],
        })
      }
    }
    K.kick = function (power) { shake.power = Math.max(shake.power, power || 5) }
    /**
     * Answer now.
     *
     * For games where a single tap is the whole answer, so there is no button
     * to press and nothing to confirm. It still routes through the same
     * `judge`: the kit does not learn the answer just because the game asked
     * to be judged early.
     */
    K.commit = function () { if (K.phase === 'play') commit() }
    /** Hold the commit button shut for a beat, so the board can be seen. */
    K.settle = function (seconds) { K.settleFor = Math.max(K.settleFor, seconds) }

    /* ── rounds ──────────────────────────────────────────────────────────── */

    /**
     * Whether the game has been set up at all yet.
     *
     * ── Why the harness has to track this ─────────────────────────────────
     *
     * `step` and `move` were called from the first frame the page drew, which
     * is while the title card is still up and before `begin` has ever run. A
     * game whose `step` touches its own state, which is most of them, threw on
     * every single frame until the child tapped to start. Nothing was visibly
     * broken, because the title card is drawn by the kit, so it went unnoticed
     * until two games were caught doing it.
     *
     * Guarding it in every game means remembering it in every game. Guarding
     * it here means it cannot happen again.
     */
    var begun = false

    function newRound() {
      K.phase = 'play'
      K.settleFor = 0
      bits.length = 0
      begun = true
      def.begin(K)
    }

    function ready() {
      if (K.phase !== 'play' || K.settleFor > 0) return false
      return def.ready ? def.ready(K) : true
    }

    /**
     * The child has committed. Ask the game whether the board is right.
     *
     * A round already failed stays failed. Without the guard a second attempt
     * overwrote the miss with a star, so a child who guessed, was told the
     * answer and gave it back scored the same as one who knew it, and the
     * record is what decides what they are shown next.
     */
    function commit() {
      var right = !!def.judge(K)
      /* Reported before anything else happens, so a host records the attempt
         even if the game then throws while drawing the celebration. */
      report({ type: 'attempt', correct: right })
      if (right) {
        K.phase = 'won'
        if (K.results[K.round] !== false) K.results[K.round] = true
        him.setMood('happy')
        him.hop(320)
        sound.play('win')
        K.kick(6)
        if (def.onWin) def.onWin(K)
        setTimeout(nextRound, 2600)
      } else {
        K.results[K.round] = false
        K.phase = 'seen'
        him.setMood('caught')
        sound.play('oops')
        K.kick(5)
        if (def.onMiss) def.onMiss(K)

        /* In an endless game a miss costs a life, and the last one ends the
           run there and then. The game still gets its `onMiss` first, so the
           crate has already sunk and the child has seen why. */
        if (ENDLESS) {
          K.lives--
          if (K.lives <= 0) {
            setTimeout(function () {
              if (K.phase !== 'seen') return
              K.phase = 'over'
              rememberBest()
              him.setMood('sleepy')
              if (def.onOver) def.onOver(K)
              report(Object.assign({ type: 'done' }, tally()))
            }, 1400)
            return
          }
        }
        /* Not a dead end: the board stays as it is and they can fix it. The
           miss is already recorded, so a second try costs the star and still
           teaches the answer, which is the right way round. */
        setTimeout(function () {
          if (K.phase === 'seen') { K.phase = 'play'; him.setMood(def.restMood || 'hungry') }
        }, 2600)
      }
    }

    function nextRound() {
      K.round++
      if (ENDLESS) { K.score++; newRound(); return }
      if (K.round >= ROUNDS) {
        K.phase = 'over'
        him.setMood('happy')
        if (def.onOver) def.onOver(K)
        report(Object.assign({ type: 'done' }, tally()))
        return
      }
      newRound()
    }

    /**
     * The furthest this device has got.
     *
     * Kept in the browser, which is a per-viewer convenience and nothing more:
     * a shared classroom tablet mixes every child together and clearing the
     * browser loses it. That is acceptable for a number whose only job is to
     * give the next run something to beat. Real progress belongs to the level
     * map and its account, and this moves there when that exists.
     */
    var BEST_KEY = 'ananse.best.' + (def.title || 'game')
    try {
      K.best = parseInt(window.localStorage.getItem(BEST_KEY) || '0', 10) || 0
    } catch (e) { K.best = 0 }

    function rememberBest() {
      if (K.score <= K.best) return
      K.best = K.score
      try { window.localStorage.setItem(BEST_KEY, String(K.score)) } catch (e) {}
    }

    function restart() {
      K.round = 0
      K.results = []
      K.lives = LIVES
      K.score = 0
      newRound()
    }

    /* ── talking to the page that framed us ──────────────────────────────── */

    /**
     * Report to the host, when there is one.
     *
     * ── Why this protocol and not a new one ───────────────────────────────
     *
     * `src/components/HeavyGame.tsx` already hosts games in a sandboxed frame
     * and already listens for `ready`, `attempt` and `done`, validating every
     * field before any of it reaches the mastery record. These games are
     * standalone HTML pages and reported nothing to anybody, which is why a
     * child could play one for ten minutes and the platform would not know
     * they had.
     *
     * Speaking the protocol that already exists means the lesson page gets
     * progress from an Ananse game the same way it gets it from a generated
     * one, through the same validation. A second protocol would mean a second
     * host and a second place to write the mastery record wrongly.
     *
     * ── Why it is silent when unframed ────────────────────────────────────
     *
     * Every one of these is also a page a child can open on its own, and that
     * has to keep working. `window.parent === window` when nothing framed us,
     * and then this does nothing at all.
     */
    function report(msg) {
      if (window.parent === window) return
      try {
        window.parent.postMessage(Object.assign({ nx: 1 }, msg), '*')
      } catch (e) { /* A host that has gone away is not this game's problem. */ }
    }

    /**
     * How many rounds were right, and how many were asked.
     *
     * An endless run has no denominator, so it reports what it earned against
     * the rounds it actually played. A fixed set reports against its length.
     */
    function tally() {
      var right = 0
      for (var i = 0; i < K.results.length; i++) if (K.results[i]) right++
      return { right: right, rounds: ENDLESS ? K.results.length : ROUNDS }
    }

    /* One mute switch across the games, the videos and the lessons, owned by
       the app rather than argued about in three places. */
    window.addEventListener('message', function (e) {
      var d = e.data
      if (!d || d.nx !== 1) return
      if (d.type === 'sound') sound.mute(!d.on)
    })

    /* ── input ───────────────────────────────────────────────────────────── */

    canvas.addEventListener('pointerdown', function (e) {
      sound.touched()
      /* Every tap is a chance to ask for the real thing, because the ask only
         works inside a gesture and the first one is often refused while the
         page is still settling. It costs nothing once it has been granted. */
      goLandscape()

      var p = point(e)
      var x = p.x, y = p.y
      him.look(x, y)

      if (K.phase === 'start') { newRound(); return }
      if (K.phase === 'over') { restart(); return }
      if (K.phase !== 'play') return

      /**
       * The commit button, when there is one.
       *
       * Games where the child builds an answer need it: nothing else can tell
       * "I have finished" from "I am still going", and without it the game
       * answers itself. Games where a single tap *is* the answer must not have
       * one, because a button there would ask the child to confirm something
       * they have already said.
       */
      if (def.button !== false) {
        var b = buttonRect()
        if (x >= b.x && x <= b.x + b.w && y >= b.y && y <= b.y + b.h) {
          if (ready()) { sound.play('cover'); commit() }
          else if (def.onEmpty) def.onEmpty(K)
          return
        }
      }

      if (def.down && def.down(K, x, y)) return

      /* Tapping the character is never an answer, and he should mind. */
      if (him.hit(x, y)) {
        him.poke()
        sound.play('poke')
        if (def.onPoke) def.onPoke(K)
      }
    })

    canvas.addEventListener('pointermove', function (e) {
      var p = point(e)
      him.look(p.x, p.y)
      if (begun && def.move) def.move(K, p.x, p.y)
    })
    function up() { if (begun && def.up) def.up(K) }
    canvas.addEventListener('pointerup', up)
    canvas.addEventListener('pointercancel', up)

    /* ── drawing ─────────────────────────────────────────────────────────── */

    function ensureBackdrop() {
      var want = Math.round(W) + 'x' + Math.round(H)
      if (backdrop && backdropFor === want) return
      var dpr = Math.min(window.devicePixelRatio || 1, 2)
      var off = document.createElement('canvas')
      off.width = Math.max(1, Math.round(W * dpr))
      off.height = Math.max(1, Math.round(H * dpr))
      var g = off.getContext('2d')
      g.scale(dpr, dpr)
      ;(SCENES[def.scene] || SCENES.garden)(g, W, H)
      if (def.props) def.props(K, g, W, H)
      backdrop = off
      backdropFor = want
    }

    /**
     * The question, on a banner.
     *
     * White lettering floating on a pale sky is unreadable: the fill and the
     * background are the same value, so the only thing the eye catches is the
     * outline and the words read as hollow shapes. Every game in this category
     * puts the instruction on a solid bar, and it is not decoration: the banner
     * guarantees the contrast so the words can stay open.
     */
    function drawAsk() {
      if (K.phase === 'start' || K.phase === 'over') return
      var a = def.ask(K)
      if (!a) return
      var size = askSize()
      var y = H * 0.085

      var head = a.head || ''
      var num = a.num === undefined || a.num === null ? '' : String(a.num)
      var tail = a.tail || ''
      var wHead = shoutWidth(head, size)
      var wNum = num ? shoutWidth(num, size * 1.45) : 0
      var wTail = shoutWidth(tail, size)
      var inner = wHead + wNum + wTail

      var bw = Math.min(W * 0.94, inner + size * 2.2)
      var bh = size * 2.1
      var bx = W / 2 - bw / 2

      /* Out of both corners' way. They belong to the lives and the readouts,
         and on a narrow screen a full width banner reaches into one or the
         other. Shrinking the question to fit the gap would make it
         unreadable, so the banner steps down below them instead. */
      var plate = progressBox()
      var reads = readoutBox()
      var clash = bx < plate.x + plate.w + 8
        || (reads && bx + bw > reads.x - 8)
      if (clash) {
        var below = Math.max(plate.y + plate.h, reads ? reads.y + reads.h : 0)
        y = below + bh * 0.5 + 8
      }
      var by = y - bh / 2

      ctx.save()
      /* A darker slab under it, so the banner has a thickness. */
      ctx.beginPath()
      ctx.roundRect(bx, by + bh * 0.12, bw, bh, bh * 0.42)
      ctx.fillStyle = '#9e2f16'
      ctx.fill()
      ctx.strokeStyle = LINE
      ctx.lineWidth = 3.5
      ctx.stroke()

      ctx.beginPath()
      ctx.roundRect(bx, by, bw, bh, bh * 0.42)
      ctx.fillStyle = '#e05128'
      ctx.fill()
      ctx.strokeStyle = LINE
      ctx.lineWidth = 3.5
      ctx.stroke()

      ctx.save()
      ctx.beginPath()
      ctx.roundRect(bx, by, bw, bh, bh * 0.42)
      ctx.clip()
      ctx.fillStyle = 'rgba(255,255,255,0.2)'
      ctx.beginPath()
      ctx.roundRect(bx + bh * 0.22, by + bh * 0.13, bw - bh * 0.44, bh * 0.22, bh * 0.11)
      ctx.fill()
      ctx.restore()
      ctx.restore()

      var x = W / 2 - inner / 2
      shoutLeft(head, x, y, size, '#ffffff')
      /* The number is bigger, yellow, and the only thing on the line with a
         white band round it, because it is the thing being asked about. */
      if (num) shoutLeft(num, x + wHead, y, size * 1.45, '#ffd93b', '#ffffff')
      shoutLeft(tail, x + wHead + wNum, y, size, '#ffffff')
    }

    /**
     * How far through the set we are.
     *
     * ── Why it lives in the corner ────────────────────────────────────────
     *
     * It was centred under the banner, which is fine until a game puts
     * something in the middle of its own screen. It landed on a house roof in
     * Shape Hunt and across a window in Shape Puzzle, and every game after
     * those would have had to work around it.
     *
     * The corner belongs to the kit and the middle belongs to the game. That
     * rule costs nothing here and saves a collision in every game still to be
     * built. It is also where these apps conventionally put it.
     */
    /**
     * Where the progress row sits.
     *
     * Read by the banner as well as by the row itself. On a phone the banner
     * is nearly the full width of the screen, so the two used to land on top
     * of one another and the child could read neither.
     */
    function progressBox() {
      var r = clamp(Math.min(W, H) * 0.018, 7, 13)
      var gap = r * 2.7
      /* A long game cannot have a long row.
         Five pips at this spacing is a neat corner badge. Twelve is a third of
         the screen, and the row is a status light, not the game. So past a
         handful the pips close up and shrink until the whole row fits in a
         quarter of the width, which stays legible down to about twenty. */
      var count = ENDLESS ? LIVES : ROUNDS
      var wide = W * 0.26
      if (gap * count > wide) {
        gap = wide / count
        r = Math.min(r, gap * 0.42)
      }
      var x0 = Math.max(r * 2.4, W * 0.025)
      var cy = H * 0.085
      return {
        x: x0 - r * 1.7, y: cy - r * 1.5,
        w: gap * count + r * 0.4, h: r * 3,
        r: r, gap: gap, x0: x0, cy: cy, count: count,
      }
    }

    function drawProgress() {
      if (K.phase === 'start') return
      var box = progressBox()
      var r = box.r
      var gap = box.gap
      var x0 = box.x0
      var y = box.cy
      ctx.save()
      /* A soft plate behind them, so white pips read on a bright sky and on a
         red roof alike. The same reasoning as the banner. */
      ctx.fillStyle = 'rgba(16,42,66,0.42)'
      ctx.beginPath()
      ctx.roundRect(box.x, box.y, box.w, box.h, r * 1.5)
      ctx.fill()

      /**
       * Lives, when the run has no end.
       *
       * A pip per question cannot show an endless game: there is no
       * denominator. What a child needs to see instead is how much rope is
       * left, so the row becomes hearts, and a spent one stays in place as an
       * outline rather than disappearing, because three going to two is only
       * legible if the gap is still there.
       */
      if (ENDLESS) {
        for (var L = 0; L < LIVES; L++) {
          ctx.save()
          ctx.translate(x0 + L * gap, y)
          ctx.beginPath()
          SHAPES.heart(ctx, r * 0.95)
          if (L < K.lives) {
            ctx.fillStyle = '#e0483a'
            ctx.fill()
            ctx.strokeStyle = LINE
          } else {
            ctx.globalAlpha = 0.5
            ctx.strokeStyle = 'rgba(255,255,255,0.85)'
          }
          ctx.lineWidth = Math.max(2, r * 0.26)
          ctx.lineJoin = 'round'
          ctx.stroke()
          ctx.restore()
        }
        ctx.restore()
        return
      }

      for (var i = 0; i < ROUNDS; i++) {
        var x = x0 + i * gap
        if (K.results[i] === true) {
          blobOn(ctx, [[x, y, r * 0.7]], '#ffd93b', 2.5)
        } else {
          ctx.strokeStyle = K.results[i] === false
            ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.85)'
          ctx.lineWidth = Math.max(2, r * 0.26)
          var pulse = i === K.round ? 1 + Math.sin(now * 0.005) * 0.16 : 1
          ctx.beginPath()
          ctx.arc(x, y, r * 0.66 * pulse, 0, Math.PI * 2)
          ctx.stroke()
        }
      }
      ctx.restore()
    }

    /**
     * The readouts, in the opposite corner.
     *
     * Every endless game has one or two running numbers: how far, how much.
     * They go top right because that is where these apps put them and because
     * the top left already belongs to the lives. The game says what they are;
     * the kit only lays them out, so no game has to think about where a score
     * goes or how to keep it legible over its own artwork.
     */
    /** The readouts' rectangle, so the banner can stay out of it. */
    function readoutBox() {
      if (!def.hud || K.phase === 'start') return null
      var rows = def.hud(K)
      if (!rows || !rows.length) return null

      var size = clamp(Math.min(W, H) * 0.028, 13, 22)
      var pad = size * 0.7
      var parts = []
      var total = 0
      ctx.save()
      ctx.font = '600 ' + Math.round(size) + 'px ' + FONT
      for (var i = 0; i < rows.length; i++) {
        var text = rows[i].label ? rows[i].label + ' ' + rows[i].value : String(rows[i].value)
        var tw = ctx.measureText(text).width
        parts.push({ text: text, w: tw })
        total += tw + (i ? pad * 1.6 : 0)
      }
      ctx.restore()

      var bh = size * 2.4
      var bw = total + pad * 2
      return {
        x: W - Math.max(size * 1.2, W * 0.025) - bw, y: H * 0.085 - bh / 2,
        w: bw, h: bh, size: size, pad: pad, parts: parts,
      }
    }

    function drawReadouts() {
      var b = readoutBox()
      if (!b) return
      ctx.save()
      ctx.fillStyle = 'rgba(16,42,66,0.42)'
      ctx.beginPath()
      ctx.roundRect(b.x, b.y, b.w, b.h, b.h * 0.5)
      ctx.fill()
      var x = b.x + b.pad
      for (var j = 0; j < b.parts.length; j++) {
        shoutLeft(b.parts[j].text, x, H * 0.085, b.size, '#ffffff')
        x += b.parts[j].w + b.pad * 1.6
      }
      ctx.restore()
    }

    /**
     * The commit button.
     *
     * A fat rounded pill with a hard dark rim and a darker slab underneath, so
     * it has a physical edge to press. It sits down onto its shadow when it is
     * live, which is most of what makes a button look pressable.
     */
    function drawButton() {
      if (def.button === false) return
      if (K.phase === 'start' || K.phase === 'over') return
      var r = buttonRect()
      var live = ready()
      var lift = live ? r.h * (0.1 + Math.sin(now * 0.005) * 0.02) : r.h * 0.1

      ctx.save()
      ctx.globalAlpha = live ? 1 : 0.4
      ctx.beginPath()
      ctx.roundRect(r.x, r.y + lift, r.w, r.h, r.h * 0.42)
      ctx.fillStyle = '#0a6336'
      ctx.fill()
      ctx.strokeStyle = LINE
      ctx.lineWidth = 3.5
      ctx.stroke()

      ctx.beginPath()
      ctx.roundRect(r.x, r.y, r.w, r.h, r.h * 0.42)
      ctx.fillStyle = '#23b862'
      ctx.fill()
      ctx.strokeStyle = LINE
      ctx.lineWidth = 3.5
      ctx.stroke()

      ctx.save()
      ctx.beginPath()
      ctx.roundRect(r.x, r.y, r.w, r.h, r.h * 0.42)
      ctx.clip()
      ctx.fillStyle = 'rgba(255,255,255,0.28)'
      ctx.beginPath()
      ctx.roundRect(r.x + r.h * 0.22, r.y + r.h * 0.13, r.w - r.h * 0.44, r.h * 0.24, r.h * 0.12)
      ctx.fill()
      ctx.restore()

      shout(def.buttonLabel || 'Done!', r.x + r.w / 2, r.y + r.h * 0.55, r.h * 0.44, '#ffffff')
      ctx.restore()
    }

    /**
     * The title card.
     *
     * Not only for the look of it. A browser refuses to play audio until the
     * person has touched the page, so a game that opened by speaking its
     * instruction had that line blocked every single time and the child arrived
     * at a board with no idea why. A tap to begin unlocks the sound, and gives
     * the character a moment on screen first, which is what they came for.
     */
    function drawTitle() {
      ctx.save()
      /* Light enough that the scene behind still reads as the bright place it
         is. At half black it looked like the game had been switched off. */
      ctx.fillStyle = 'rgba(20,50,80,0.3)'
      ctx.fillRect(0, 0, W, H)
      var size = clamp(Math.min(W, H) * 0.085, 26, 54)
      shout(def.title, W / 2, H * 0.17, size * 1.15, '#ffd93b', '#ffffff')
      ctx.globalAlpha = 0.65 + Math.sin(now * 0.004) * 0.3
      shout('Tap to play', W / 2, H * 0.9, size * 0.55, '#ffffff')
      ctx.restore()
    }

    /* ── landscape ───────────────────────────────────────────────────────── */

    /**
     * Ask the phone to turn round.
     *
     * ── Why this cannot simply be done ────────────────────────────────────
     *
     * A web page is not allowed to rotate a phone on its own. The orientation
     * lock only works while the document is fullscreen, fullscreen itself only
     * works inside a user gesture, and Safari on iOS supports neither: there
     * is no way at all to rotate an iPhone from a web page.
     *
     * So this is best effort and there is a fallback for when it fails, which
     * on a good fraction of the devices in a Ghanaian classroom it will. The
     * gesture used is the tap on the title card, which is the same tap that
     * already has to happen to let the sound play.
     */
    function goLandscape() {
      if (def.landscape === false) return
      var el = document.documentElement
      var full = el.requestFullscreen || el.webkitRequestFullscreen
        || el.mozRequestFullScreen || el.msRequestFullscreen

      function lock() {
        try {
          var o = window.screen && window.screen.orientation
          if (o && o.lock) {
            var p = o.lock('landscape')
            if (p && p.catch) p.catch(function () {})
          }
        } catch (e) {}
      }

      if (!full) { lock(); return }
      try {
        var p = full.call(el)
        if (p && p.then) p.then(lock, lock)
        else lock()
      } catch (e) { lock() }
    }

    function drawOver() {
      var won = 0
      for (var i = 0; i < K.results.length; i++) if (K.results[i]) won++
      ctx.save()
      ctx.fillStyle = 'rgba(20,50,80,0.45)'
      ctx.fillRect(0, 0, W, H)
      var size = clamp(Math.min(W, H) * 0.075, 24, 46)
      var title = ENDLESS ? (def.overTitle || 'Run over!') : (def.overTitle || 'Well done!')
      shout(title, W / 2, H * 0.3, size, '#ffd93b', '#ffffff')
      if (ENDLESS) {
        /* How far, and the number to beat. A run with nothing to beat is a
           run with no reason to be taken twice. */
        shout((def.scoreLabel || 'score') + ' ' + K.score,
          W / 2, H * 0.3 + size * 1.35, size * 0.8, '#ffffff')
        shout('best ' + K.best, W / 2, H * 0.3 + size * 2.3, size * 0.55,
          K.score >= K.best ? '#ffd93b' : 'rgba(255,255,255,0.75)')
      } else {
        shout(won + ' of ' + ROUNDS, W / 2, H * 0.3 + size * 1.4, size * 0.7, '#ffffff')
      }
      ctx.globalAlpha = 0.6 + Math.sin(now * 0.004) * 0.3
      shout('Tap to play again', W / 2, H * 0.3 + size * (ENDLESS ? 3.4 : 2.6),
        size * 0.55, '#ffffff')
      ctx.restore()
    }

    function draw() {
      ensureBackdrop()
      ctx.save()
      ctx.translate(shake.x, shake.y)
      if (backdrop) ctx.drawImage(backdrop, 0, 0, W, H)

      if (K.phase === 'start') {
        /* Centre stage and larger while the title is up. He is the reason a
           child opened this. Higher than mid screen so his contact shadow
           clears the invitation to tap, which was unreadable over it. */
        var tr = clamp(Math.min(W, H) * 0.19, 66, 150)
        him.draw(W / 2, H * 0.47, tr, H * 0.47 + tr * 1.45)
      } else if (def.paint) {
        def.paint(K)
      }

      for (var b = 0; b < bits.length; b++) {
        var p = bits[b]
        ctx.save()
        ctx.globalAlpha = clamp(p.life, 0, 1)
        ctx.fillStyle = p.colour
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
      ctx.restore()

      drawAsk()
      if (def.overlay) def.overlay(K)
      drawProgress()
      drawReadouts()
      drawButton()
      if (K.phase === 'start') drawTitle()
      if (K.phase === 'over') drawOver()
    }

    /* ── the clock ───────────────────────────────────────────────────────── */

    function frame(t) {
      requestAnimationFrame(frame)
      var dt = last ? Math.min((t - last) / 1000, 0.05) : 0.016
      last = t
      now = t
      K.now = t

      him.step(dt)
      shake.power = Math.max(0, shake.power - dt * 22)
      shake.x = rand(-1, 1) * shake.power
      shake.y = rand(-1, 1) * shake.power
      if (K.phase === 'play') K.settleFor = Math.max(0, K.settleFor - dt)

      for (var b = bits.length - 1; b >= 0; b--) {
        var p = bits[b]
        p.vy += 1500 * dt
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.life -= dt * p.fade
        if (p.life <= 0) bits.splice(b, 1)
      }

      if (begun && def.step) def.step(K, dt)
      draw()
    }

    /**
     * Whether the picture is being drawn across a screen that is upright.
     *
     * ── Why the picture turns and not the phone ───────────────────────────
     *
     * A web page cannot rotate a phone. It can ask, and `goLandscape` asks,
     * and on Android inside fullscreen the ask is usually granted. On an
     * iPhone it is never granted, because Safari has no orientation lock at
     * all.
     *
     * The obvious fallback is a screen that says "turn your phone", and that
     * is what a page puts up when it has given up. Games do not do that. They
     * draw themselves sideways, and the player turns the phone because the
     * picture is already the right way round once they do. Nothing has to be
     * explained, nothing is blocked, and a child who never turns it still has
     * the whole game, only tilted.
     *
     * Everything above this line then works in one coordinate system and has
     * no idea any of it happened. The only thing that has to know is where a
     * finger landed.
     */
    var turned = false

    function fit() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2)
      var vw = window.innerWidth || canvas.clientWidth || 1
      var vh = window.innerHeight || canvas.clientHeight || 1

      /* Only on something hand sized. A desktop window that happens to be
         taller than it is wide is not a phone held upright, and turning the
         picture on one would be baffling. */
      turned = def.landscape !== false && vh > vw * 1.02 && vw < 820

      W = turned ? vh : vw
      H = turned ? vw : vh

      canvas.style.width = W + 'px'
      canvas.style.height = H + 'px'
      canvas.style.transformOrigin = '0 0'
      /* Rotate about the top left, then walk the canvas back down its own
         height, which lands it exactly over the viewport. */
      canvas.style.transform = turned ? 'rotate(90deg) translate(0, -100%)' : 'none'

      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      backdrop = null
      K.ctx = ctx
      K.W = W
      K.H = H
      if (def.resize) def.resize(K)
    }

    /**
     * Where a finger actually landed, in the game's coordinates.
     *
     * The canvas is rotated by the browser, so the browser reports the touch
     * in screen coordinates and the game thinks in turned ones. This is the
     * one seam, and every pointer event goes through it.
     */
    function point(e) {
      if (!turned) return { x: e.clientX, y: e.clientY }
      return { x: e.clientY, y: H - e.clientX }
    }

    /**
     * A window onto the state, for testing.
     *
     * Read only and inert. It exists because a round once appeared to end
     * without the button being pressed, and no amount of looking at screenshots
     * can tell "the round advanced" from "I misread the number". Guessing at a
     * correctness bug in the judging is the wrong way to spend time when
     * fourteen more games are built on it.
     */
    window.__kit = function () {
      return {
        phase: K.phase, round: K.round, target: K.target,
        results: K.results.slice(),
        settleFor: Math.round(K.settleFor * 100) / 100,
        lives: K.lives, score: K.score, best: K.best, endless: ENDLESS,
        own: def.peek ? def.peek(K) : null,
      }
    }

    window.addEventListener('resize', fit)
    fit()
    /* The host waits for this before it sends anything, and uses it to know
       the frame loaded at all rather than failing silently. */
    report({ type: 'ready' })
    him.setMood('hello')
    requestAnimationFrame(frame)
    return K
  }

  global.AnanseKit = {
    clamp: clamp, lerp: lerp, rand: rand, randInt: randInt, pick: pick, fixed: fixed,
    Spring: Spring,
    LINE: LINE, inkedOn: inkedOn, blobOn: blobOn, cloud: cloud, tree: tree, bush: bush,
    SCENES: SCENES, groundY: groundY, seaY: seaY, scatter: scatter, kerbs: kerbs, lanes: lanes,
    tileRow: tileRow, tileRect: tileRect, tileAt: tileAt, drawTile: drawTile,
    shape: shape, SHAPES: SHAPES, SHAPE_NAMES: SHAPE_NAMES,
    rails: rails, carriage: carriage, engine: engine, wheels: wheels,
    makeSound: makeSound, makeVoice: makeVoice,
    run: run,
  }
}(window))
