/**
 * The things that get counted, and the numbers they stand for.
 *
 * ── Why this is its own file, outside both the video and the games ───────────
 *
 * A lesson video that teaches counting with one mango and a game that tests it
 * with a different mango are two products, and a child can tell. The drawing
 * has to be the same drawing, from the same file, or the handover at the end of
 * the video is a change of subject rather than a continuation.
 *
 * So the countable objects live here, in plain browser JavaScript with no build
 * step, because that is the only form both halves can read. The games load it
 * with a script tag next to `kit.js`. The video imports it for its side effect
 * into the Remotion bundle. Neither owns it.
 *
 * ── Why the objects have faces ───────────────────────────────────────────────
 *
 * Numberblocks is the best teaching idea in children's television and it is one
 * idea: the number is a character. Five is not a numeral next to five things,
 * five is a thing with a face that is made of five. A child who has watched it
 * counts by recognising the shape of a group, not by pointing.
 *
 * `face` is how that arrives here. Every object can be drawn plain, for when it
 * is scenery, or with eyes and a mouth, for when it is the thing being counted.
 * The same mango, the same file, one flag.
 */
(function (global) {
  'use strict'

  /** Read late, so load order between this and the kit does not matter. */
  function kit() { return global.AnanseKit }
  function LINE() { return kit().LINE }
  function inked(ctx, fill, width) { kit().inkedOn(ctx, fill, LINE(), width || 3.5) }

  /* ── the face ──────────────────────────────────────────────────────────── */

  /**
   * Eyes and a mouth, laid over whatever has just been drawn.
   *
   * Drawn from the object's centre at its own radius, so it does not care what
   * it is sitting on: a mango, a ball and a drum all take the same face and all
   * come out looking like the same family of creature, which is the point.
   *
   * `blink` is a number of seconds, not a boolean, because a face that never
   * blinks is a mask. It is closed for a tenth of a second every few seconds
   * and the phase is offset per object so a row of ten does not blink in
   * unison, which reads as a glitch rather than as ten creatures.
   */
  function face(ctx, r, opts) {
    var o = opts || {}
    var t = o.t || 0
    var i = o.index || 0
    var mouth = o.mouth === undefined ? 'smile' : o.mouth

    /* Blink: a short closure on a slow cycle, offset per object. */
    var cycle = 3.1 + (i % 4) * 0.47
    var phase = (t + i * 0.83) % cycle
    var shut = phase > cycle - 0.11

    /* Bigger than looks right on paper. At counting size a face drawn to
       polite proportions turns into two dots, and the whole reason these have
       faces is that a child reads a face faster than a shape. */
    var ex = r * 0.32
    var ey = -r * 0.16
    var er = r * 0.23

    for (var s = -1; s <= 1; s += 2) {
      if (shut) {
        ctx.strokeStyle = LINE()
        ctx.lineWidth = Math.max(2, r * 0.07)
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(s * ex - er * 0.7, ey)
        ctx.lineTo(s * ex + er * 0.7, ey)
        ctx.stroke()
        continue
      }
      ctx.beginPath()
      ctx.arc(s * ex, ey, er, 0, Math.PI * 2)
      inked(ctx, '#ffffff', 2.5)
      ctx.beginPath()
      ctx.arc(s * ex + er * 0.18, ey + er * 0.1, er * 0.46, 0, Math.PI * 2)
      ctx.fillStyle = '#25321a'
      ctx.fill()
      /* One highlight, which is most of what makes an eye look alive. */
      ctx.beginPath()
      ctx.arc(s * ex + er * 0.02, ey - er * 0.26, er * 0.16, 0, Math.PI * 2)
      ctx.fillStyle = '#ffffff'
      ctx.fill()
    }

    ctx.strokeStyle = LINE()
    ctx.lineWidth = Math.max(2.5, r * 0.08)
    ctx.lineCap = 'round'
    ctx.beginPath()
    if (mouth === 'open') {
      ctx.ellipse(0, r * 0.3, r * 0.2, r * 0.17, 0, 0, Math.PI * 2)
      inked(ctx, '#8a2f28', 2.5)
    } else {
      ctx.arc(0, r * 0.16, r * 0.26, 0.28 * Math.PI, 0.72 * Math.PI)
      ctx.stroke()
    }
  }

  /* ── the things ────────────────────────────────────────────────────────── */

  /**
   * One mango.
   *
   * ── Why this is the game's drawing and not the video's ────────────────────
   *
   * There were two. The game had this one, shipped and shown to children; the
   * video had a flatter one written later. Two mangoes is the exact problem
   * this file exists to end, so one had to go, and it was the newer one: this
   * silhouette is better and it is the one children have already seen.
   *
   * It keeps its gradients, which the flat house style would normally refuse.
   * That was a deliberate exception when it was written, the fruit is the only
   * thing in the product with any depth in it, and re-flattening it now would
   * change what a child sees in a game that is already verified. The rule is
   * worth less than the consistency.
   *
   * The shape is the whole job: an ellipse is an orange. A mango is fat and
   * round at the stem end, tapers to a blunt point, and has a slight kidney
   * curve along the top.
   */
  function mango(ctx, r) {

    var g = ctx.createRadialGradient(-r * 0.3, -r * 0.42, r * 0.06, 0, 0, r * 1.2)
    g.addColorStop(0, '#ffe9a0')
    g.addColorStop(0.4, '#f5a623')
    g.addColorStop(0.76, '#e2621b')
    g.addColorStop(1, '#a8320f')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.moveTo(-r * 0.86, -r * 0.3)
    ctx.bezierCurveTo(-r * 0.5, -r * 0.92, r * 0.34, -r * 0.86, r * 0.92, -r * 0.24)
    ctx.quadraticCurveTo(r * 1.08, r * 0.02, r * 0.86, r * 0.26)
    ctx.bezierCurveTo(r * 0.3, r * 0.86, -r * 0.5, r * 0.82, -r * 0.84, r * 0.2)
    ctx.quadraticCurveTo(-r * 0.98, -r * 0.06, -r * 0.86, -r * 0.3)
    ctx.closePath()
    ctx.fill()
    /* The outline. Without it the fruit is the only thing on screen that is not
       inked, and it reads as belonging to a different picture. */
    ctx.strokeStyle = LINE()
    ctx.lineWidth = Math.max(2, r * 0.1)
    ctx.lineJoin = 'round'
    ctx.stroke()

    /* A blush on the shoulder, which is what a ripe mango looks like and what
       stops it reading as an orange. */
    ctx.save()
    ctx.globalAlpha = 0.45
    var b = ctx.createRadialGradient(-r * 0.3, -r * 0.42, 0, -r * 0.3, -r * 0.42, r * 0.95)
    b.addColorStop(0, '#d6402e')
    b.addColorStop(1, 'rgba(214,64,46,0)')
    ctx.fillStyle = b
    ctx.fill()
    ctx.restore()

    ctx.strokeStyle = '#6b4322'
    ctx.lineWidth = Math.max(2, r * 0.09)
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(-r * 0.66, -r * 0.44)
    ctx.quadraticCurveTo(-r * 0.84, -r * 0.66, -r * 0.74, -r * 0.86)
    ctx.stroke()

    var lg = ctx.createLinearGradient(-r * 0.7, -r * 0.8, -r * 0.1, -r * 0.55)
    lg.addColorStop(0, '#5fc47f')
    lg.addColorStop(1, '#2a8a4a')
    ctx.fillStyle = lg
    ctx.beginPath()
    ctx.moveTo(-r * 0.66, -r * 0.76)
    ctx.quadraticCurveTo(-r * 0.1, -r * 1.02, r * 0.1, -r * 0.62)
    ctx.quadraticCurveTo(-r * 0.3, -r * 0.6, -r * 0.66, -r * 0.76)
    ctx.closePath()
    ctx.fill()

    /* One specular highlight, top left, matching every other object in the
       platform. One light across a product is the difference between a set of
       objects and a pile of them. */
    ctx.save()
    ctx.globalAlpha = 0.5
    ctx.fillStyle = '#fff'
    ctx.translate(-r * 0.3, -r * 0.3)
    ctx.rotate(-0.5)
    ctx.beginPath()
    ctx.ellipse(0, 0, r * 0.26, r * 0.13, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

  }

  function orange(ctx, r) {
    ctx.beginPath()
    ctx.arc(0, 0, r * 0.84, 0, Math.PI * 2)
    inked(ctx, '#f28a2e', 4)
    ctx.save()
    ctx.globalAlpha = 0.28
    ctx.strokeStyle = '#a34f12'
    ctx.lineWidth = Math.max(2, r * 0.05)
    for (var i = 0; i < 3; i++) {
      ctx.beginPath()
      ctx.arc(-r * 0.3 + i * r * 0.3, r * 0.1, r * 0.5, -0.9, 0.9)
      ctx.stroke()
    }
    ctx.restore()
    ctx.beginPath()
    ctx.ellipse(r * 0.3, -r * 0.92, r * 0.26, r * 0.12, -0.6, 0, Math.PI * 2)
    inked(ctx, '#3fae4c', 2.5)
  }

  function ball(ctx, r) {
    ctx.beginPath()
    ctx.arc(0, 0, r * 0.84, 0, Math.PI * 2)
    inked(ctx, '#f6f1e2', 4)
    /* Two panels, which is enough to say football without a whole net of
       pentagons that turns to mud at counting size. */
    ctx.save()
    ctx.beginPath()
    ctx.arc(0, 0, r * 0.84, 0, Math.PI * 2)
    ctx.clip()
    ctx.fillStyle = '#2f3a2a'
    ctx.beginPath()
    ctx.moveTo(-r * 0.1, -r * 0.84)
    ctx.lineTo(r * 0.46, -r * 0.4)
    ctx.lineTo(r * 0.24, r * 0.3)
    ctx.lineTo(-r * 0.44, r * 0.22)
    ctx.lineTo(-r * 0.52, -r * 0.46)
    ctx.closePath()
    ctx.fill()
    ctx.restore()
  }

  function fish(ctx, r) {
    ctx.beginPath()
    ctx.moveTo(-r * 0.56, 0)
    ctx.lineTo(-r * 0.98, -r * 0.42)
    ctx.quadraticCurveTo(-r * 0.74, 0, -r * 0.98, r * 0.42)
    ctx.closePath()
    inked(ctx, '#d97016', 3)
    ctx.beginPath()
    ctx.ellipse(r * 0.04, 0, r * 0.8, r * 0.56, 0, 0, Math.PI * 2)
    inked(ctx, '#ffa63d', 4)
    ctx.beginPath()
    ctx.ellipse(-r * 0.04, r * 0.12, r * 0.28, r * 0.18, -0.3, 0, Math.PI * 2)
    inked(ctx, '#f2c33b', 2.5)
  }

  function drum(ctx, r) {
    /* A djembe, because the objects a Ghanaian child counts should include one
       thing that is theirs and not a stock apple. */
    ctx.beginPath()
    ctx.moveTo(-r * 0.66, -r * 0.6)
    ctx.quadraticCurveTo(-r * 0.3, r * 0.1, -r * 0.4, r * 0.92)
    ctx.lineTo(r * 0.4, r * 0.92)
    ctx.quadraticCurveTo(r * 0.3, r * 0.1, r * 0.66, -r * 0.6)
    ctx.closePath()
    inked(ctx, '#a9703c', 4)
    ctx.beginPath()
    ctx.ellipse(0, -r * 0.6, r * 0.68, r * 0.2, 0, 0, Math.PI * 2)
    inked(ctx, '#f0e0c2', 3.5)
    /* Tuning ropes: two verticals, which is all that reads at this size. */
    ctx.strokeStyle = 'rgba(70,44,14,0.5)'
    ctx.lineWidth = Math.max(2, r * 0.06)
    for (var s = -1; s <= 1; s += 2) {
      ctx.beginPath()
      ctx.moveTo(s * r * 0.4, -r * 0.5)
      ctx.lineTo(s * r * 0.26, r * 0.3)
      ctx.stroke()
    }
  }

  function star(ctx, r) {
    ctx.beginPath()
    kit().SHAPES.star(ctx, r * 0.92)
    inked(ctx, '#f2d024', 4)
  }

  var THINGS = {
    mango: { one: 'mango', many: 'mangoes', draw: mango },
    orange: { one: 'orange', many: 'oranges', draw: orange },
    ball: { one: 'ball', many: 'balls', draw: ball },
    fish: { one: 'fish', many: 'fish', draw: fish },
    drum: { one: 'drum', many: 'drums', draw: drum },
    star: { one: 'star', many: 'stars', draw: star }
  }

  var NAMES = Object.keys(THINGS)

  /**
   * Draw one, at `r`, centred on the current origin.
   *
   * `opts.face` gives it eyes. `opts.t` is the time in seconds, used by the
   * blink and the idle bob so that a row of them is alive rather than printed.
   */
  function draw(name, ctx, r, opts) {
    var thing = THINGS[name]
    if (!thing) return
    var o = opts || {}
    ctx.save()
    if (o.bob || o.party) {
      /* `party` is the same bob, louder and out of step, which is what a group
         of ten celebrating looks like without any new code. */
      var amp = o.party ? 0.15 : 0.06
      var lift = Math.sin((o.t || 0) * (o.party ? 4.2 : 2.4) + (o.index || 0) * 0.7) * r * amp
      ctx.translate(0, -Math.abs(lift))
    }
    if (o.pop !== undefined) {
      /* Arriving: overshoot a little and settle, which is the difference
         between a thing landing and a thing being pasted on. */
      var p = Math.max(0, Math.min(1, o.pop))
      var s = p < 1 ? 1 + Math.sin(p * Math.PI) * 0.22 : 1
      ctx.scale(p * s, p * s)
      ctx.globalAlpha = Math.min(1, p * 1.6)
    }
    /* Spin and squash belong to the fruit, not to its face: a mango tumbling
       into a spider's mouth still looks at you the right way up. */
    ctx.save()
    if (o.spin) ctx.rotate(o.spin)
    if (o.squash) ctx.scale(o.squash, 1 / o.squash)
    thing.draw(ctx, r)
    ctx.restore()
    if (o.face) face(ctx, r, o)
    ctx.restore()
  }

  /* ── where a group stands ──────────────────────────────────────────────── */

  /**
   * Positions for `n` things inside a box, in rows.
   *
   * ── Why rows of five ─────────────────────────────────────────────────────
   *
   * Ten in a line is a line a child has to count along. Ten as two fives is a
   * shape a child can come to recognise without counting, which is the whole
   * skill that comes after counting, and it is also how fingers work. So the
   * row breaks at five, always, even when the box is wide enough for ten.
   */
  function row(n, box, per) {
    var perRow = per || 5
    var rows = Math.ceil(n / perRow)
    var cols = Math.min(n, perRow)
    var gapX = box.w / (cols + 0.6)
    var gapY = rows > 1 ? box.h / (rows + 0.35) : 0
    var out = []
    for (var i = 0; i < n; i++) {
      var r0 = Math.floor(i / perRow)
      var c = i - r0 * perRow
      var inRow = Math.min(perRow, n - r0 * perRow)
      var spanX = (inRow - 1) * gapX
      out.push({
        x: box.x + box.w / 2 - spanX / 2 + c * gapX,
        y: rows > 1
          ? box.y + box.h / 2 - ((rows - 1) * gapY) / 2 + r0 * gapY
          : box.y + box.h / 2,
        index: i
      })
    }
    return out
  }

  /**
   * How big one loose object is on a screen of this size.
   *
   * Moved here from the game unchanged, so the mango a child picks up is the
   * same size as the mango they were shown. It is the scattered case; `sizeFor`
   * is the case where a known number has to fit a box.
   */
  function unitR(w, h) {
    return Math.max(26, Math.min(52, Math.min(w, h) * 0.062))
  }

  /** How big each one should be so `n` of them fit the box without touching. */
  function sizeFor(n, box, per) {
    var perRow = per || 5
    var cols = Math.min(n, perRow)
    var rows = Math.ceil(n / perRow)
    /* The things being counted are the lesson, so they get the room. The old
       figures left ten mangoes smaller than the spider watching them, which
       puts the presenter above the point of the video. */
    /* The vertical divisor is the larger of the two on purpose. Rows have to
       clear each other by more than nothing: at `rows + 0.15` ten mangoes came
       out 111 across in rows 112 apart, which is two rows that touch. */
    return Math.min(box.w / (cols + 0.6) * 0.46, box.h / (rows + 0.5) * 0.46)
  }

  /* ── the lesson ────────────────────────────────────────────────────────── */

  /**
   * Counting one to ten, as data.
   *
   * The video reads this to know what to draw and what to say. A counting game
   * reads the same thing to know what to ask. Neither holds its own copy, so
   * the mango the child watches being counted is the mango they are then asked
   * to count, and the handover at the end of the video is a continuation rather
   * than a change of subject.
   */
  var LESSON = {
    id: 'count-1-to-10',
    title: 'Counting 1 to 10',
    thing: 'mango',
    upTo: 10,
    /* The groups shown as characters, chosen rather than every number: three
       is the first a child subitises, five is a hand, ten is two hands. */
    groups: [3, 5, 10],
    /**
     * The game the video hands over to.
     *
     * ── On the gap between `upTo` and `asks` ──────────────────────────────
     *
     * The video teaches one to ten. Feed Ananse asks for two to five. They do
     * not match, and writing both numbers down here is the point: the mismatch
     * now lives in one file where it can be seen, instead of being a constant
     * in the video and a different constant buried in the game.
     *
     * The honest fix is a counting game that goes to ten, which does not exist
     * yet. Until it does, the handover is to a game that asks a smaller
     * question than the lesson taught, and the narration says what that game
     * actually asks rather than what the lesson covered.
     */
    game: { file: 'mangoes.html', asks: [2, 5] }
  }

  var WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine', 'ten']

  global.AnanseCount = {
    THINGS: THINGS, NAMES: NAMES, WORDS: WORDS, LESSON: LESSON,
    draw: draw, face: face, row: row, sizeFor: sizeFor, unitR: unitR
  }
}(typeof window !== 'undefined' ? window : globalThis))
