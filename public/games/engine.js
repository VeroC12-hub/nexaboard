/**
 * The engine that plays any generated game.
 *
 * ── What this file is for ───────────────────────────────────────────────────
 *
 * The app sends a spec: a verb, a subject, a motion, a scene, some objects.
 * This builds a playable game out of it. There are thousands of valid specs,
 * so there are thousands of games, and none of them had to be written, tested
 * or deployed one at a time.
 *
 * ── The one rule ────────────────────────────────────────────────────────────
 *
 * **The spec never carries an answer, and this file never trusts one.**
 *
 * Every round is laid out first, and the truth is then computed from what was
 * actually laid out: the items really on the screen, counted here, at the
 * moment the child answers. A spec can ask for a counting game about mangoes
 * at the market. It cannot tell this file how many mangoes there are, so it
 * cannot be wrong about it, and a generated game can therefore never mark a
 * child wrong for being right.
 *
 * That is the whole reason the app can let a model invent games for a five year
 * old who cannot read the screen and cannot argue back.
 *
 * ── How a subject becomes a game ────────────────────────────────────────────
 *
 * Every item carries a `value` and a way of being shown. That is the trick
 * that keeps this file small while the number of games stays large:
 *
 * | Subject | The item is | Its value |
 * |---|---|---|
 * | count | a cluster of things | how many |
 * | numeral | a written number | the number |
 * | compare | a cluster of things | how many |
 * | sequence | a written number | the number |
 * | letter | a picture of a thing | the sound it starts with |
 * | shape | a shape | how many corners |
 * | size | a thing, drawn large or small | how large |
 * | sum | a cluster of things | how many |
 *
 * Once an item has a value, every verb works on it without knowing what it is
 * about: collecting is reaching a total, ordering is sorting by value, matching
 * is finding equal values shown two different ways, the balance is comparing
 * two sums. Eight subjects and seven verbs out of one small amount of code.
 *
 * ── Sandbox ─────────────────────────────────────────────────────────────────
 *
 * This runs with an opaque origin. There is no storage, no cookie and no way
 * back into the app except the four messages in the protocol. Nothing here
 * tries to use any of it.
 */

;(function () {
  'use strict'

  /**
   * A window on the current round, for testing.
   *
   * There is no other way to check that this engine is laying out what it says
   * it is: the whole game is one canvas, so an automated test can read pixels
   * or it can read this. It exposes the board and nothing else, and it lives
   * inside a sandboxed frame with no access to a learner, an account or a
   * session, so there is nothing here worth reaching.
   */
  function expose() {
    window.__nx = function () {
      if (!spec || !round) return null
      var inBasket = 0, placed = 0
      for (var i = 0; i < round.items.length; i++) {
        if (round.items[i].inBasket) inBasket++
        if (round.items[i].slot != null) placed++
      }
      return {
        goal: spec.goal, subject: spec.subject, motion: spec.motion, scene: spec.scene,
        ask: round.ask, phase: phase, roundIndex: roundIndex, right: right,
        items: round.items.length, inBasket: inBasket, placed: placed,
        ready: round.ready ? !!round.ready() : true,
        truth: round.check ? !!round.check() : null,
        values: round.items.map(function (it) { return it.value }),
        /* Where things actually are, so a test can put a finger on one. */
        at: round.items.map(function (it) {
          return {
            x: Math.round(it.x), y: Math.round(it.y), r: Math.round(it.r),
            value: it.value, slot: it.slot,
            inBasket: !!it.inBasket, fixed: !!it.fixed,
          }
        }),
        basket: round.basket ? {
          x: Math.round(round.basket.x), y: Math.round(round.basket.y),
          w: Math.round(round.basket.w), h: Math.round(round.basket.h),
        } : null,
        done: (function () {
          var b = doneButton()
          return b ? { x: Math.round(b.x + b.w / 2), y: Math.round(b.y + b.h / 2) } : null
        })(),
      }
    }
  }

  /* ── talking to the app ──────────────────────────────────────────────────── */

  /**
   * The app's origin, learned from the setup message rather than assumed.
   *
   * `ready` has to go out with a wildcard, because at that point we have not
   * heard from anybody and a sandboxed frame cannot read its parent's origin.
   * Everything after it is addressed, so a page that framed us to listen in
   * gets one content-free message instead of a child's whole session.
   */
  var origin = null

  function post(msg) {
    msg.nx = 1
    try {
      window.parent.postMessage(msg, origin || '*')
    } catch (e) {
      /* Nothing to be done from in here, and throwing would end the game. */
    }
  }

  /** Read this line out. The app owns the voice, and owns the mute switch. */
  function say(text) {
    if (text) post({ type: 'say', text: String(text) })
  }

  /* ── the state ───────────────────────────────────────────────────────────── */

  var spec = null
  var canvas = document.getElementById('stage')
  var ctx = canvas.getContext('2d')
  var wait = document.getElementById('wait')

  var W = 0, H = 0
  var now = 0

  var round = null
  var roundIndex = 0
  var right = 0
  /** 'play' while they can answer, 'verdict' while the answer is being shown. */
  var phase = 'play'
  var verdictAt = 0
  var wasRight = false
  var sparks = []
  /**
   * Whether this round ends with a Done button.
   *
   * Known before the round is built, because the builders ask how much room
   * they have and the answer depends on it. Verbs answered by one tap say no.
   */
  var needsButton = false

  /** Eased, so the balance settles instead of snapping. */
  var beamTilt = 0
  /** What the face is doing: 'idle', 'happy' or 'sad'. */
  var mood = 'idle'

  /* ── small helpers ───────────────────────────────────────────────────────── */

  function rand(lo, hi) { return lo + Math.floor(Math.random() * (hi - lo + 1)) }
  function pick(xs) { return xs[Math.floor(Math.random() * xs.length)] }
  function shuffle(xs) { return xs.slice().sort(function () { return Math.random() - 0.5 }) }
  function clamp(v, lo, hi) { return v < lo ? lo : v > hi ? hi : v }

  /** The number ceiling, kept to what fits on a screen as well as in a year. */
  function ceiling() {
    var m = spec && spec.max ? spec.max : 5
    /* Eight things is already a crowded phone screen, and a child counting
       past it is counting pixels rather than objects. The year's real ceiling
       still governs written work; this is only what gets drawn. */
    return clamp(m, 3, spec && spec.tiny ? 6 : 9)
  }

  /* ── the scenes ──────────────────────────────────────────────────────────── */

  /**
   * Places a Ghanaian child has been.
   *
   * Two colours and a horizon each, drawn rather than loaded. A scene is the
   * cheapest variety in the whole system: it changes how a game feels and
   * costs no bytes and no time.
   */
  var SCENES = {
    market: { sky: ['#ffd89b', '#ff9a6c'], ground: '#b4622f', horizon: 0.62, props: 'stalls' },
    farm: { sky: ['#bfe6ff', '#8fd18a'], ground: '#6b8f3a', horizon: 0.66, props: 'rows' },
    road: { sky: ['#cfe4f7', '#9bb6cc'], ground: '#5d6370', horizon: 0.70, props: 'road' },
    river: { sky: ['#cbeeff', '#7ec7e8'], ground: '#2f7f9e', horizon: 0.64, props: 'water' },
    school: { sky: ['#f2ead6', '#dcd0b4'], ground: '#8b7350', horizon: 0.68, props: 'board' },
    yard: { sky: ['#ffe9c4', '#f2c58a'], ground: '#a9793f', horizon: 0.66, props: 'tree' },
    beach: { sky: ['#ffeec2', '#ffd08a'], ground: '#e8cf9a', horizon: 0.63, props: 'water' },
    night: { sky: ['#1b2a4a', '#2c3f6b'], ground: '#243049', horizon: 0.68, props: 'stars' },
  }

  function scene() { return SCENES[spec && spec.scene] || SCENES.yard }

  function drawScene() {
    var s = scene()
    var hy = H * s.horizon

    var sky = ctx.createLinearGradient(0, 0, 0, hy)
    sky.addColorStop(0, s.sky[0])
    sky.addColorStop(1, s.sky[1])
    ctx.fillStyle = sky
    ctx.fillRect(0, 0, W, hy)

    ctx.fillStyle = s.ground
    ctx.fillRect(0, hy, W, H - hy)

    ctx.save()
    ctx.globalAlpha = 0.22
    ctx.fillStyle = '#000'

    if (s.props === 'stalls') {
      for (var i = 0; i < 5; i++) {
        var x = (i + 0.5) * (W / 5)
        ctx.fillRect(x - W * 0.06, hy - H * 0.10, W * 0.12, H * 0.10)
      }
    } else if (s.props === 'rows') {
      for (var r = 0; r < 4; r++) {
        var y = hy + (H - hy) * (0.2 + r * 0.22)
        ctx.fillRect(0, y, W, 2)
      }
    } else if (s.props === 'road') {
      ctx.fillRect(0, hy + (H - hy) * 0.45, W, 3)
      ctx.globalAlpha = 0.5
      for (var d = 0; d < 8; d++) {
        ctx.fillStyle = '#fff'
        ctx.fillRect(d * (W / 8) + W / 32, hy + (H - hy) * 0.45 - 1, W / 22, 5)
      }
    } else if (s.props === 'water') {
      /* Short curved strokes, scattered, rather than full width rules. The
         first version drew lines across the whole width and the river read as
         a sheet of ruled paper. */
      ctx.strokeStyle = '#fff'
      ctx.globalAlpha = 0.30
      ctx.lineWidth = 3
      for (var w = 0; w < 14; w++) {
        var wx = ((w * 167) % 100) / 100 * W
        var wy = hy + (H - hy) * (0.08 + ((w * 37) % 80) / 100)
        var len = W * 0.05
        ctx.beginPath()
        ctx.moveTo(wx, wy)
        ctx.quadraticCurveTo(wx + len / 2, wy - 5, wx + len, wy)
        ctx.stroke()
      }
    } else if (s.props === 'board') {
      ctx.fillRect(W * 0.1, H * 0.1, W * 0.8, hy - H * 0.2)
    } else if (s.props === 'tree') {
      ctx.fillRect(W * 0.12, hy - H * 0.18, W * 0.03, H * 0.18)
      ctx.beginPath()
      ctx.arc(W * 0.135, hy - H * 0.20, W * 0.08, 0, Math.PI * 2)
      ctx.fill()
    } else if (s.props === 'stars') {
      ctx.globalAlpha = 0.8
      ctx.fillStyle = '#fff'
      for (var t = 0; t < 30; t++) {
        /* Fixed by index rather than random, so they do not twinkle about
           between frames. */
        var sx = ((t * 137) % 100) / 100 * W
        var sy = ((t * 71) % 100) / 100 * hy
        ctx.fillRect(sx, sy, 2, 2)
      }
    }
    ctx.restore()
  }

  /* ── drawing an item ─────────────────────────────────────────────────────── */

  function emojiFont(size) {
    return size + 'px "Segoe UI Emoji","Noto Color Emoji","Apple Color Emoji",system-ui,sans-serif'
  }

  function roundRect(x, y, w, h, r) {
    ctx.beginPath()
    ctx.moveTo(x + r, y)
    ctx.arcTo(x + w, y, x + w, y + h, r)
    ctx.arcTo(x + w, y + h, x, y + h, r)
    ctx.arcTo(x, y + h, x, y, r)
    ctx.arcTo(x, y, x + w, y, r)
    ctx.closePath()
  }

  var SHAPE_NAMES = { 3: 'triangle', 4: 'square', 0: 'circle' }

  function drawShape(corners, cx, cy, r, fill) {
    ctx.fillStyle = fill
    ctx.beginPath()
    if (corners === 0) {
      ctx.arc(cx, cy, r, 0, Math.PI * 2)
    } else {
      for (var i = 0; i < corners; i++) {
        var a = -Math.PI / 2 + i * (Math.PI * 2 / corners)
        var px = cx + Math.cos(a) * r
        var py = cy + Math.sin(a) * r
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py)
      }
      ctx.closePath()
    }
    ctx.fill()
  }

  /**
   * One item, drawn according to how it shows its value.
   *
   * A cluster of things is laid out on a small fixed grid rather than at
   * random, because a child counting five mangoes needs them countable, and
   * five mangoes in a heap is a harder question than the one being asked.
   */
  /**
   * One item.
   *
   * The `look` is why this matters. The first version drew every item in every
   * game as the same white rounded card, so seven different verbs all looked
   * like one game with a different instruction at the top. A child noticed
   * immediately, and they were right. A thing to pop is a balloon, a thing to
   * weigh sits loose in a pan, a thing to sort is a card you pick up: what it
   * looks like should tell you what to do with it before anybody says a word.
   */
  function drawItem(it) {
    var r = it.r

    /* Arriving. A short spring, and nothing is drawn before its turn. */
    var age = (now - it.born) / 1000
    if (age < 0) return
    var arrive = age < 0.42 ? 1 - Math.pow(1 - age / 0.42, 3) : 1
    var overshoot = age < 0.42 ? 1 + Math.sin(age / 0.42 * Math.PI) * 0.12 : 1

    /* Touched. Decays on its own, so nothing has to clean it up. */
    if (it.pulse > 0) it.pulse = Math.max(0, it.pulse - 0.06)
    var squash = 1 - it.pulse * 0.16

    var lifted = (it.drag ? 1.08 : 1) * arrive * overshoot * squash

    ctx.save()
    ctx.translate(it.x, it.y)

    /* A shadow, so things sit on the scene instead of floating over it. It
       grows while an item is held, which is the whole cue that it is picked
       up rather than stuck down. */
    ctx.save()
    ctx.globalAlpha = it.drag ? 0.22 : 0.13
    ctx.fillStyle = '#000'
    ctx.beginPath()
    ctx.ellipse(it.drag ? r * 0.18 : 0, r * (it.drag ? 1.15 : 0.98),
      r * (it.drag ? 0.82 : 0.7), r * 0.2, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()

    ctx.scale(lifted, lifted)

    if (it.look === 'balloon') {
      /* A balloon on a string. Popping something is the one interaction a
         child does not need explaining. */
      var g = ctx.createRadialGradient(-r * 0.3, -r * 0.35, r * 0.1, 0, 0, r)
      g.addColorStop(0, it.tint ? it.tint[0] : '#ffe08a')
      g.addColorStop(1, it.tint ? it.tint[1] : '#f2b517')
      ctx.strokeStyle = 'rgba(20,36,58,0.25)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, r * 0.95)
      ctx.quadraticCurveTo(r * 0.22, r * 1.35, 0, r * 1.7)
      ctx.stroke()
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.ellipse(0, 0, r * 0.88, r * 0.98, 0, 0, Math.PI * 2)
      ctx.fill()
      if (it.wrong || it.good) {
        ctx.strokeStyle = it.wrong ? '#d6402e' : '#0f8a4d'
        ctx.lineWidth = 5
        ctx.stroke()
      }
      /* The catch light. Two ellipses and it reads as a real balloon. */
      ctx.globalAlpha = 0.45
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.ellipse(-r * 0.3, -r * 0.38, r * 0.2, r * 0.3, -0.4, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1

    } else if (it.look === 'bare') {
      /* Nothing under it. For the balance, where a card in a pan would read
         as the thing being weighed. */
      if (it.good || it.wrong) {
        ctx.strokeStyle = it.wrong ? '#d6402e' : '#0f8a4d'
        ctx.lineWidth = 4
        ctx.beginPath()
        ctx.arc(0, 0, r * 0.92, 0, Math.PI * 2)
        ctx.stroke()
      }

    } else if (it.card !== false) {
      /* The card. Something to aim a finger at, and a clear edge for the eye. */
      ctx.fillStyle = it.held ? '#ffffff' : 'rgba(255,255,255,0.93)'
      ctx.strokeStyle = it.wrong ? '#d6402e' : it.good ? '#0f8a4d' : 'rgba(20,36,58,0.16)'
      ctx.lineWidth = it.wrong || it.good ? 4 : 2
      roundRect(-r, -r, r * 2, r * 2, r * 0.3)
      ctx.fill()
      ctx.stroke()
    }

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    if (it.shownAs === 'numeral') {
      ctx.fillStyle = '#14243a'
      ctx.font = '700 ' + Math.round(r * 1.15) + 'px system-ui, sans-serif'
      ctx.fillText(String(it.value), 0, r * 0.06)

    } else if (it.shownAs === 'letter') {
      ctx.fillStyle = '#14243a'
      ctx.font = '700 ' + Math.round(r * 1.2) + 'px system-ui, sans-serif'
      ctx.fillText(String(it.value).toLowerCase(), 0, r * 0.06)

    } else if (it.shownAs === 'shape') {
      drawShape(it.value, 0, 0, r * 0.62, '#f2b517')

    } else if (it.shownAs === 'scaled') {
      ctx.font = emojiFont(Math.round(r * 0.5 + r * 0.9 * (it.value / 5)))
      ctx.fillText(it.glyph, 0, 0)

    } else if (it.shownAs === 'picture') {
      ctx.font = emojiFont(Math.round(r * 1.05))
      ctx.fillText(it.glyph, 0, 0)

    } else {
      /**
       * A group: `value` copies of the glyph.
       *
       * **Every copy is the same size, whatever the count.** The first version
       * divided the card between however many there were, so a group of one
       * was drawn as a single enormous mango and a group of six as six small
       * ones. In a game that asks which side has more, that is not a cosmetic
       * problem: the child is shown one big thing against two small ones and
       * the picture argues for the wrong answer. Counting games must vary the
       * count and nothing else.
       */
      var n = Math.max(1, Math.min(12, it.value))
      var cols = n <= 2 ? n : n <= 6 ? 3 : 4
      var rows = Math.ceil(n / cols)
      var cell = r * 0.56
      ctx.font = emojiFont(Math.round(cell * 0.95))
      for (var i = 0; i < n; i++) {
        var cx = (i % cols - (cols - 1) / 2) * cell
        var cy = (Math.floor(i / cols) - (rows - 1) / 2) * cell
        ctx.fillText(it.glyph, cx, cy)
      }
    }

    ctx.restore()
  }

  /* ── motion ──────────────────────────────────────────────────────────────── */

  /**
   * How the things behave.
   *
   * Motion changes the feel of a game and never its answer. Nothing here can
   * carry an item out of reach: falling wraps back to the top and drifting
   * wraps across, so a child who is slow, distracted or three years old is
   * never punished by the clock. That is deliberate. A timer on a counting
   * game teaches a child that they are bad at counting.
   */
  function move(it, dt) {
    if (it.drag || it.slot != null || it.parked) return
    var slow = spec.tiny ? 0.62 : 1

    if (spec.motion === 'fall') {
      it.y += it.speed * dt * slow
      if (it.y - it.r > H) { it.y = -it.r; it.x = clamp(it.x + rand(-40, 40), it.r, W - it.r) }

    } else if (spec.motion === 'drift') {
      it.x += it.speed * dt * slow * it.dir
      if (it.x - it.r > W) it.x = -it.r
      if (it.x + it.r < 0) it.x = W + it.r

    } else if (spec.motion === 'bob') {
      it.y = it.homeY + Math.sin(now * 0.0016 * slow + it.phase) * it.r * 0.42

    } else if (spec.motion === 'orbit') {
      var a = now * 0.0009 * slow + it.phase
      it.x = it.homeX + Math.cos(a) * it.r * 0.9
      it.y = it.homeY + Math.sin(a) * it.r * 0.55
    }
  }

  /* ── laying a round out ──────────────────────────────────────────────────── */

  /** Things to count, named. Falls back if a spec arrives with none usable. */
  function things() {
    var ts = (spec.things && spec.things.length) ? spec.things : null
    return ts || [{ emoji: '🥭', one: 'mango', many: 'mangoes' }]
  }

  function itemSize() {
    var base = Math.min(W, H)
    /* A four year old's finger, not a mouse. Never below 46 real pixels. */
    return clamp(base * (spec.tiny ? 0.115 : 0.095), 30, 82)
  }

  function newItem(o) {
    var r = o.r || itemSize()
    var it = {
      x: o.x, y: o.y, r: r,
      homeX: o.x, homeY: o.y,
      value: o.value,
      glyph: o.glyph || '',
      shownAs: o.shownAs || 'glyphs',
      word: o.word || '',
      speed: (o.speed || (H * 0.055)) * (0.7 + Math.random() * 0.6),
      dir: Math.random() < 0.5 ? -1 : 1,
      phase: Math.random() * Math.PI * 2,
      slot: null, drag: false, held: false, parked: !!o.parked,
      good: false, wrong: false,
      card: o.card,
      /* For the pop in when a round starts, so a board arrives rather than
         simply being there. A child watching things appear one after another
         is already paying attention before the question is asked. */
      born: now + (o.delay || 0),
      /* Squash when touched. Nothing teaches a small child that a thing is
         tappable faster than it moving when they tap it. */
      pulse: 0,
      look: o.look || 'card',
    }
    return it
  }

  /** A row of places to put items, across the width. */
  function spread(n, y, r) {
    var out = []
    var gap = W / (n + 1)
    for (var i = 0; i < n; i++) out.push({ x: gap * (i + 1), y: y, r: r })
    return out
  }

  /**
   * Places for n things over the play area.
   *
   * A grid of cells, shuffled, with the thing jittered inside its cell.
   *
   * Not random positions. Random positions bunch: four balloons on a wide
   * screen came out as three overlapping on the left and one alone on the
   * right, which looks like a mistake and, worse, hides one group behind
   * another in a game about counting groups. A shuffled grid spreads things
   * over the whole area, and the jitter inside each cell keeps it from looking
   * like a spreadsheet.
   *
   * It also cannot fail to terminate, which the rejection sampling version
   * could when the area was too small for the things asked of it.
   */
  function scatter(n, r, top, bottom) {
    var areaH = Math.max(bottom - top, r * 2.2)
    /* Enough cells for everything, shaped to the area rather than square, so a
       wide landscape screen gets columns and a tall phone gets rows. */
    var cols = Math.max(1, Math.min(n, Math.round(Math.sqrt(n * (W / areaH)))))
    var rows = Math.ceil(n / cols)

    var cellW = W / cols
    var cellH = areaH / rows

    var cells = []
    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) cells.push({ row: row, col: col })
    }
    cells = shuffle(cells)

    var out = []
    for (var i = 0; i < n; i++) {
      var c = cells[i % cells.length]
      /**
       * How far a thing may wander inside its own cell.
       *
       * Capped well inside the cell, not merely at its edge. At the edge two
       * things in neighbouring cells can each wander towards the other and end
       * up touching, which happened: two balloons overlapped and one group of
       * eggs was hidden behind another in a game about counting groups.
       */
      var slackX = Math.min(Math.max(0, cellW / 2 - r * 1.15), cellW * 0.16)
      var slackY = Math.min(Math.max(0, cellH / 2 - r * 1.15), cellH * 0.16)
      var cx = cellW * (c.col + 0.5) + (Math.random() * 2 - 1) * slackX
      var cy = top + cellH * (c.row + 0.5) + (Math.random() * 2 - 1) * slackY
      out.push({
        x: clamp(cx, r + 4, W - r - 4),
        y: clamp(cy, top + r, bottom - r),
      })
    }
    return out
  }

  /** The top of the area a round may use: under the question. */
  function playTop() { return bands().top + 8 }

  /** The bottom of it: above the Done button, and above the bowl if there is one. */
  function playBottom() { return bands().bottom - 10 }

  /* what an item is, for each subject */

  var LETTERS = 'abcdefghijklmnoprstuvwy'.split('')

  /**
   * A number of different values in 1..max.
   *
   * Written as a shuffled range rather than as random tries. The first version
   * drew randoms until it had enough distinct ones, which never ends when more
   * are asked for than exist: four different numbers from 1 to 3 is an
   * infinite loop, and a three year old's ceiling is exactly 3. A hang inside
   * a game a child is holding is the worst failure in this file, so it is not
   * left to whether the callers happen to ask sensibly.
   */
  function valuesFor(count, max) {
    var all = []
    for (var v = 1; v <= Math.max(1, max); v++) all.push(v)
    all = shuffle(all)
    var out = all.slice(0, Math.min(count, all.length))
    /* More asked for than the range holds: repeat rather than refuse, because
       a board with two 3s on it still plays. */
    while (out.length < count) out.push(all[out.length % all.length])
    return out
  }

  /**
   * Build one item for a subject, given the value it should carry.
   *
   * This is where a subject becomes something on a screen, and the only place
   * that knows the difference between the eight of them.
   */
  function itemFor(subject, value, at, thing) {
    var t = thing || pick(things())
    if (subject === 'numeral' || subject === 'sequence') {
      return newItem({ x: at.x, y: at.y, r: at.r, value: value, shownAs: 'numeral' })
    }
    if (subject === 'letter') {
      return newItem({
        x: at.x, y: at.y, r: at.r, value: value, shownAs: 'picture',
        glyph: t.emoji, word: t.one,
      })
    }
    if (subject === 'shape') {
      return newItem({ x: at.x, y: at.y, r: at.r, value: value, shownAs: 'shape' })
    }
    if (subject === 'size') {
      return newItem({
        x: at.x, y: at.y, r: at.r, value: value, shownAs: 'scaled', glyph: t.emoji,
      })
    }
    /* count, compare, sum: a cluster you can actually count. */
    return newItem({
      x: at.x, y: at.y, r: at.r, value: value, shownAs: 'glyphs',
      glyph: t.emoji, word: value === 1 ? t.one : t.many,
    })
  }

  /** What an item's value is called, when the answer has to be spoken. */
  function nameOf(it) {
    if (it.shownAs === 'shape') return SHAPE_NAMES[it.value] || 'shape'
    if (it.shownAs === 'letter' || it.shownAs === 'picture') return String(it.value)
    if (it.shownAs === 'scaled') return it.value >= 4 ? 'the big one' : 'the small one'
    return String(it.value)
  }

  /* ── the verbs ───────────────────────────────────────────────────────────── */

  /*
   * Each builder returns a round:
   *
   *   ask       spoken and shown, naming the number this layout actually has
   *   items     everything on the board
   *   bins      places to drop things, when the verb needs them
   *   basket    one place to drop things, when the verb needs one
   *   needDone  whether a Done button ends the round, or a single tap does
   *   onTap     what a tap on an item means, for the verbs answered by tapping
   *   check     computes the truth from the board, at the moment it is called
   *   tell      what to say when they get it wrong
   */

  /**
   * The bands of the screen, in real pixels.
   *
   * Worked out from the actual height rather than from fractions, because the
   * first version had the Done button sitting on top of the basket on a
   * landscape phone: both were placed as a fraction of the height and the two
   * fractions overlapped. A child could not drop a mango without pressing
   * Done, which ended the round they were still answering.
   */
  function bands() {
    var btnH = Math.max(H * 0.085, 54)
    var btnPad = Math.max(H * 0.02, 10)
    var askH = clamp(Math.min(W, H) * 0.055, 17, 30) * 2.4 + Math.max(H * 0.02, 8)

    /**
     * The band at the bottom is only reserved when something will be in it.
     *
     * The verbs answered by a single tap have no Done button, and reserving
     * its space anyway left a third of the screen empty underneath a game
     * played in the top two thirds. On a phone that is the difference between
     * a balloon the size of a thumb and one the size of a thumbnail.
     */
    var reserve = needsButton ? btnH + btnPad * 2 : btnPad
    return {
      top: askH,
      btnH: btnH,
      btnPad: btnPad,
      /* Everything answerable stops here, so nothing lands under the button. */
      bottom: H - reserve,
    }
  }

  function buildCollect() {
    var subject = spec.subject
    var max = ceiling()
    var t = pick(things())
    /* The bowl sits at the bottom of the play area and the loose things go
       above it. Both from the same measurement, because the first version
       placed them as independent fractions of the height and on a landscape
       phone the Done button landed on top of the bowl. */
    var band = bands()
    var basketH = clamp(H * 0.17, 74, 130)
    var basket = {
      x: W / 2, y: band.bottom - basketH / 2,
      w: Math.min(W * 0.62, 420), h: basketH,
    }
    var fieldBottom = basket.y - basketH / 2 - 12

    var want, pool = [], ask, tell, have = 0

    if (subject === 'letter') {
      /* Collect everything starting with one sound, and nothing else. */
      var all = shuffle(things()).slice(0, 5)
      var target = all[0].one[0].toLowerCase()
      var wanted = all.filter(function (x) { return x.one[0].toLowerCase() === target })
      var others = all.filter(function (x) { return x.one[0].toLowerCase() !== target })
      var set = []
      for (var i = 0; i < Math.max(2, wanted.length); i++) set.push(wanted[i % wanted.length])
      for (var k = 0; k < 3 && k < others.length; k++) set.push(others[k])
      var spots = scatter(set.length, itemSize(), playTop(), fieldBottom)
      for (var s = 0; s < set.length; s++) {
        var one = set[s]
        pool.push(newItem({
          x: spots[s].x, y: spots[s].y, value: one.one[0].toLowerCase(),
          shownAs: 'picture', glyph: one.emoji, word: one.one,
        }))
      }
      want = pool.filter(function (p) { return p.value === target }).length
      ask = 'Put the things that start with ' + target + ' in the basket.'
      tell = 'They all start with ' + target + '.'
      return {
        items: pool, basket: basket, needDone: true, ask: ask, tell: tell,
        /* Whether pressing Done means anything yet. A child of four presses
           every button on the screen, and without this the first press is
           recorded as a wrong answer to a round they had not started. */
        ready: function () {
          return pool.some(function (p) { return p.inBasket && !p.fixed })
        },
        check: function () {
          var inb = pool.filter(function (p) { return p.inBasket })
          if (!inb.length) return false
          for (var i2 = 0; i2 < inb.length; i2++) if (inb[i2].value !== target) return false
          return inb.length === want
        },
      }
    }

    if (subject === 'numeral') {
      var vals = valuesFor(Math.min(5, max), max)
      var target2 = pick(vals)
      var spots2 = spread(vals.length, (playTop() + fieldBottom) / 2, itemSize())
      for (var v = 0; v < vals.length; v++) {
        pool.push(itemFor('numeral', vals[v], spots2[v]))
      }
      ask = 'Put the number ' + target2 + ' in the basket.'
      tell = 'That was not ' + target2 + '.'
      return {
        items: pool, basket: basket, needDone: true, ask: ask, tell: tell,
        /* Whether pressing Done means anything yet. A child of four presses
           every button on the screen, and without this the first press is
           recorded as a wrong answer to a round they had not started. */
        ready: function () {
          return pool.some(function (p) { return p.inBasket && !p.fixed })
        },
        check: function () {
          var inb = pool.filter(function (p) { return p.inBasket })
          return inb.length === 1 && inb[0].value === target2
        },
      }
    }

    /* count and sum: put a number of things in, sometimes on top of some that
       are already there, which is addition a child can see. */
    want = rand(2, max)
    if (subject === 'sum' && want > 2) have = rand(1, want - 1)

    var loose = want - have + rand(2, 3)
    var spots3 = scatter(loose, itemSize(), playTop(), fieldBottom)
    for (var p2 = 0; p2 < loose; p2++) {
      pool.push(newItem({
        x: spots3[p2].x, y: spots3[p2].y, value: 1,
        shownAs: 'picture', glyph: t.emoji, word: t.one,
      }))
    }
    /* Pre-filled ones are in the basket from the start and cannot be dragged
       out, so "make it five" stays the question it was asked as. */
    for (var f = 0; f < have; f++) {
      var it = newItem({
        x: basket.x - basket.w / 2 + basket.w * (f + 0.5) / Math.max(have, 1),
        y: basket.y, value: 1, shownAs: 'picture', glyph: t.emoji, parked: true,
      })
      it.inBasket = true
      it.fixed = true
      pool.push(it)
    }

    ask = have
      ? (have === 1 ? 'There is already 1. Make it ' + want + '.'
        : 'There are already ' + have + '. Make it ' + want + '.')
      : 'Put ' + want + ' ' + (want === 1 ? t.one : t.many) + ' in the basket.'
    tell = 'It needed to be ' + want + '.'

    return {
      items: pool, basket: basket, needDone: true, ask: ask, tell: tell,
        /* Whether pressing Done means anything yet. A child of four presses
           every button on the screen, and without this the first press is
           recorded as a wrong answer to a round they had not started. */
      ready: function () {
        return pool.some(function (p) { return p.inBasket && !p.fixed })
      },
      check: function () {
        /* Counted from the board, not from a stored answer. */
        return pool.filter(function (p) { return p.inBasket }).length === want
      },
    }
  }

  function buildPop() {
    var subject = spec.subject
    var max = ceiling()
    var t = pick(things())
    var n = spec.tiny ? 3 : 4
    /* Falling things start higher, so there is time to look at them before
       they reach the bottom and wrap round again. */
    var spots = scatter(n, itemSize(), playTop(),
      spec.motion === 'fall' ? playTop() + (playBottom() - playTop()) * 0.55 : playBottom())
    var items = [], ask, tell, target

    if (subject === 'sequence') {
      /* A run with the next one missing, and the choices are the items. */
      var step = max > 20 ? pick([1, 2, 5, 10]) : 1
      var from = rand(1, Math.max(2, max - step * 4))
      var run = [0, 1, 2].map(function (i) { return from + i * step })
      target = from + 3 * step
      var vals = shuffle([target].concat([target + step, target - step, target + 2 * step]
        .filter(function (v) { return v > 0 && v !== target })).slice(0, n))
      for (var i = 0; i < vals.length; i++) items.push(itemFor('sequence', vals[i], spots[i]))
      ask = run.join(', ') + ', then what?'
      tell = 'It was ' + target + '.'

    } else if (subject === 'compare') {
      var a = rand(1, max), b = rand(1, max)
      while (b === a) b = rand(1, max)
      var two = spread(2, (playTop() + playBottom()) / 2, itemSize() * 1.25)
      items.push(itemFor('compare', a, two[0], t))
      items.push(itemFor('compare', b, two[1], t))
      var more = Math.random() < 0.5
      target = more ? Math.max(a, b) : Math.min(a, b)
      ask = more ? 'Tap the side with more.' : 'Tap the side with fewer.'
      tell = 'It was the one with ' + target + '.'

    } else if (subject === 'shape') {
      var corners = shuffle([0, 3, 4]).slice(0, Math.min(3, n))
      while (corners.length < n) corners.push(pick([0, 3, 4]))
      target = pick(corners)
      for (var c = 0; c < corners.length; c++) items.push(itemFor('shape', corners[c], spots[c]))
      ask = 'Tap the ' + (SHAPE_NAMES[target] || 'shape') + '.'
      tell = 'That was not the ' + (SHAPE_NAMES[target] || 'shape') + '.'

    } else if (subject === 'size') {
      var sizes = shuffle([1, 2, 3, 4, 5]).slice(0, n)
      var big = Math.random() < 0.5
      target = big ? Math.max.apply(null, sizes) : Math.min.apply(null, sizes)
      for (var z = 0; z < sizes.length; z++) items.push(itemFor('size', sizes[z], spots[z], t))
      ask = big ? 'Tap the biggest one.' : 'Tap the smallest one.'
      tell = big ? 'The biggest was the other one.' : 'The smallest was the other one.'

    } else if (subject === 'letter') {
      var set = shuffle(things()).slice(0, n)
      var chosen = set[0]
      target = chosen.one[0].toLowerCase()
      for (var l = 0; l < set.length; l++) {
        items.push(newItem({
          x: spots[l].x, y: spots[l].y, value: set[l].one[0].toLowerCase(),
          shownAs: 'picture', glyph: set[l].emoji, word: set[l].one,
        }))
      }
      ask = 'Tap the one that starts with ' + target + '.'
      tell = 'It was the ' + chosen.one + '.'

    } else if (subject === 'numeral') {
      var nums = valuesFor(n, max)
      target = pick(nums)
      for (var q = 0; q < nums.length; q++) items.push(itemFor('numeral', nums[q], spots[q]))
      ask = 'Tap the number ' + target + '.'
      tell = 'That was not ' + target + '.'

    } else {
      /* count: several groups, tap the one holding the number asked for. */
      var counts = valuesFor(n, max)
      target = pick(counts)
      for (var g = 0; g < counts.length; g++) items.push(itemFor('count', counts[g], spots[g], t))
      ask = 'Tap the group with ' + target + ' ' + (target === 1 ? t.one : t.many) + '.'
      tell = 'It was the group with ' + target + '.'
    }

    return {
      items: items, needDone: false, ask: ask, tell: tell,
      onTap: function (it) {
        /* The truth is the item's own value, read off the board. */
        return it.value === target
      },
    }
  }

  function buildSort() {
    var subject = spec.subject
    var max = ceiling()
    var t = pick(things())
    var binCount = spec.tiny ? 2 : 3
    var bins = [], items = [], ask, tell

    function bin(i, label, accepts) {
      var w = W / binCount
      var h = clamp(H * 0.2, 86, 150)
      return {
        x: w * i + w * 0.08, y: playBottom() - h, w: w * 0.84, h: h,
        label: label, accepts: accepts, style: 'crate',
      }
    }

    /* The things to be sorted go above the crates, never over them. */
    var cratesTop = playBottom() - clamp(H * 0.2, 86, 150) - 34

    if (subject === 'shape') {
      var corners = [0, 3, 4].slice(0, binCount)
      bins = corners.map(function (c, i) {
        return bin(i, SHAPE_NAMES[c], (function (cc) {
          return function (it) { return it.value === cc }
        })(c))
      })
      var many = shuffle(corners.concat(corners, corners)).slice(0, binCount * 2)
      var spots = scatter(many.length, itemSize() * 0.9, playTop(), cratesTop)
      for (var i = 0; i < many.length; i++) items.push(itemFor('shape', many[i], spots[i]))
      ask = 'Put each shape in its own box.'
      tell = 'Look at the corners.'

    } else if (subject === 'size') {
      bins = [
        bin(0, 'small', function (it) { return it.value <= 2 }),
        bin(1, 'big', function (it) { return it.value >= 4 }),
      ]
      if (binCount === 3) bins = [bins[0], bins[1]]
      var sizes = shuffle([1, 1, 2, 4, 5, 5]).slice(0, 6)
      var spots2 = scatter(sizes.length, itemSize() * 0.9, playTop(), cratesTop)
      for (var z = 0; z < sizes.length; z++) items.push(itemFor('size', sizes[z], spots2[z], t))
      ask = 'Put the big ones and the small ones apart.'
      tell = 'Big on one side, small on the other.'

    } else if (subject === 'compare') {
      var split = Math.max(2, Math.round(max / 2))
      bins = [
        bin(0, 'fewer than ' + split, function (it) { return it.value < split }),
        bin(1, split + ' or more', function (it) { return it.value >= split }),
      ]
      var counts = []
      for (var c2 = 0; c2 < 6; c2++) counts.push(rand(1, max))
      var spots3 = scatter(counts.length, itemSize() * 0.9, playTop(), cratesTop)
      for (var k = 0; k < counts.length; k++) {
        items.push(itemFor('compare', counts[k], spots3[k], t))
      }
      ask = 'Fewer than ' + split + ' on one side, ' + split + ' or more on the other.'
      tell = 'Count them again.'

    } else {
      /* letter: two sounds, and the pictures go under the sound they start with. */
      var set = shuffle(things()).slice(0, 2)
      var a = set[0].one[0].toLowerCase()
      var b = set[1].one[0].toLowerCase()
      bins = [
        bin(0, a, function (it) { return it.value === a }),
        bin(1, b, function (it) { return it.value === b }),
      ]
      var mix = shuffle([set[0], set[0], set[0], set[1], set[1], set[1]])
      var spots4 = scatter(mix.length, itemSize() * 0.9, playTop(), cratesTop)
      for (var m = 0; m < mix.length; m++) {
        items.push(newItem({
          x: spots4[m].x, y: spots4[m].y, value: mix[m].one[0].toLowerCase(),
          shownAs: 'picture', glyph: mix[m].emoji, word: mix[m].one,
        }))
      }
      ask = 'Put each one under the sound it starts with.'
      tell = 'Say the word out loud first.'
    }

    /**
     * Space the crates across the whole width, whatever the subject chose.
     *
     * `bin()` lays them out against `binCount`, but a subject may end up with
     * fewer: sorting by sound uses two whatever the year, and that left two
     * crates occupying two thirds of the screen with an empty third where a
     * child would reasonably try to drop something.
     */
    for (var bi = 0; bi < bins.length; bi++) {
      var bw = W / bins.length
      bins[bi].x = bw * bi + bw * 0.08
      bins[bi].w = bw * 0.84
    }

    return {
      items: items, bins: bins, needDone: true, ask: ask, tell: tell,
      /* Every one of them has to be somewhere before this is an answer. */
      ready: function () {
        return items.every(function (it) { return it.slot != null })
      },
      check: function () {
        for (var i = 0; i < items.length; i++) {
          var it = items[i]
          if (it.slot == null) return false
          if (!bins[it.slot].accepts(it)) return false
        }
        return true
      },
    }
  }

  function buildOrder() {
    var subject = spec.subject
    var max = ceiling()
    var t = pick(things())
    var n = spec.tiny ? 3 : 4
    var vals

    if (subject === 'shape') {
      vals = shuffle([0, 3, 4]).slice(0, Math.min(3, n))
    } else if (subject === 'size') {
      vals = shuffle([1, 2, 3, 4, 5]).slice(0, n)
    } else {
      vals = valuesFor(n, max)
    }

    var slots = [], sw = Math.min(W / (vals.length + 0.6), itemSize() * 2.4)
    for (var i = 0; i < vals.length; i++) {
      slots.push({
        x: W / 2 - (vals.length * sw) / 2 + sw * i + sw * 0.08,
        y: playBottom() - sw * 0.9, w: sw * 0.84, h: sw * 0.84,
        label: String(i + 1), accepts: null, style: 'slot',
      })
    }

    var items = []
    var loose = spread(vals.length, playTop() + itemSize() * 1.15, itemSize())
    var order = shuffle(vals)
    for (var v = 0; v < order.length; v++) {
      items.push(itemFor(subject === 'sequence' ? 'numeral' : subject, order[v], loose[v], t))
    }

    var ask = subject === 'shape'
      ? 'Line them up, fewest corners first.'
      : subject === 'size'
        ? 'Line them up, smallest first.'
        : 'Put the numbers in order, smallest first.'

    return {
      items: items, bins: slots, needDone: true, ask: ask, tell: 'Smallest goes first.',
      /* Every slot filled. A half filled shelf is not an order. */
      ready: function () {
        for (var s2 = 0; s2 < slots.length; s2++) {
          var any = false
          for (var i3 = 0; i3 < items.length; i3++) if (items[i3].slot === s2) any = true
          if (!any) return false
        }
        return true
      },
      check: function () {
        var placed = []
        for (var s = 0; s < slots.length; s++) {
          var found = null
          for (var i2 = 0; i2 < items.length; i2++) if (items[i2].slot === s) found = items[i2]
          if (!found) return false
          placed.push(found.value)
        }
        for (var p = 1; p < placed.length; p++) if (placed[p] < placed[p - 1]) return false
        return true
      },
    }
  }

  function buildMatch() {
    var subject = spec.subject
    var max = ceiling()
    var t = pick(things())
    var n = spec.tiny ? 3 : 4
    var vals = valuesFor(n, max)
    var target = vals[0]
    var items = []

    /* The one to match, shown one way, parked at the top and not answerable. */
    var showAs = subject === 'letter' ? 'picture' : subject === 'shape' ? 'shape' : 'glyphs'
    var answerAs = subject === 'letter' ? 'letter' : subject === 'shape' ? 'shape' : 'numeral'

    var ask, tell
    if (subject === 'letter') {
      var set = shuffle(things()).slice(0, n)
      var chosen = set[0]
      target = chosen.one[0].toLowerCase()
      var q = newItem({
        x: W / 2, y: playTop() + itemSize() * 1.35, r: itemSize() * 1.25, value: target,
        shownAs: 'picture', glyph: chosen.emoji, word: chosen.one, parked: true,
      })
      q.fixed = true
      q.question = true
      items.push(q)
      var lets = shuffle([target].concat(shuffle(LETTERS.filter(function (l) {
        return l !== target
      })).slice(0, n - 1)))
      var spots = spread(lets.length, playBottom() - itemSize() * 1.2, itemSize())
      for (var i = 0; i < lets.length; i++) {
        items.push(newItem({
          x: spots[i].x, y: spots[i].y, value: lets[i], shownAs: 'letter',
        }))
      }
      ask = 'Which letter does ' + chosen.one + ' start with?'
      tell = chosen.one + ' starts with ' + target + '.'

    } else if (subject === 'shape') {
      var corners = shuffle([0, 3, 4])
      target = corners[0]
      var qs = itemFor('shape', target, { x: W / 2, y: playTop() + itemSize() * 1.35, r: itemSize() * 1.25 })
      qs.fixed = true
      qs.parked = true
      qs.question = true
      items.push(qs)
      var opts = shuffle([0, 3, 4])
      var spots2 = spread(opts.length, playBottom() - itemSize() * 1.2, itemSize())
      for (var c = 0; c < opts.length; c++) items.push(itemFor('shape', opts[c], spots2[c]))
      ask = 'Find the same shape.'
      tell = 'It was the ' + (SHAPE_NAMES[target] || 'shape') + '.'

    } else {
      /* A pile of things, and the written number that says how many. */
      var qc = itemFor('count', target, { x: W / 2, y: playTop() + itemSize() * 1.35, r: itemSize() * 1.35 }, t)
      qc.fixed = true
      qc.parked = true
      qc.question = true
      items.push(qc)
      var spots3 = spread(vals.length, playBottom() - itemSize() * 1.2, itemSize())
      var order = shuffle(vals)
      for (var v = 0; v < order.length; v++) {
        items.push(itemFor('numeral', order[v], spots3[v]))
      }
      ask = 'How many? Tap the number.'
      tell = 'There were ' + target + '.'
    }

    return {
      items: items, needDone: false, ask: ask, tell: tell,
      onTap: function (it) {
        if (it.question) return null
        return it.value === target
      },
    }
  }

  function buildBalance() {
    var max = ceiling()
    var t = pick(things())
    var equal = spec.subject === 'sum' || spec.subject === 'size'

    var a = rand(1, max), b = rand(1, max)
    while (b === a) b = rand(1, max)

    var panW = Math.min(W * 0.34, 260)
    var panH = clamp(H * 0.2, 80, 150)
    var pans = [
      { x: W * 0.5 - panW - 20, y: H * 0.5, w: panW, h: panH, label: '', accepts: null, style: 'pan' },
      { x: W * 0.5 + 20, y: H * 0.5, w: panW, h: panH, label: '', accepts: null, style: 'pan' },
    ]

    var items = []

    if (!equal) {
      /* Tap the heavier side. The pans hold the groups. */
      var left = itemFor('compare', a, { x: pans[0].x + pans[0].w / 2, y: pans[0].y + pans[0].h / 2, r: itemSize() * 1.2 }, t)
      var right2 = itemFor('compare', b, { x: pans[1].x + pans[1].w / 2, y: pans[1].y + pans[1].h / 2, r: itemSize() * 1.2 }, t)
      left.parked = right2.parked = true
      left.side = 0
      right2.side = 1
      items.push(left, right2)
      var more = Math.random() < 0.5
      var answer = more ? (a > b ? 0 : 1) : (a < b ? 0 : 1)
      return {
        items: items, bins: pans, needDone: false, beam: true, ask: more
          ? 'Tap the side with more.' : 'Tap the side with fewer.',
        tell: 'It was the other side.',
        onTap: function (it) { return it.side === answer },
      }
    }

    /* Make both sides the same: drag things across until they match. */
    var total = rand(4, Math.max(4, max))
    if (total % 2 === 1) total += 1
    var split = rand(1, total - 1)
    var made = 0
    for (var s = 0; s < total; s++) {
      var side = s < split ? 0 : 1
      var pan = pans[side]
      var it = newItem({
        x: pan.x + pan.w * (0.15 + 0.7 * ((s % 4) / 3)),
        y: pan.y + pan.h * (s < 4 ? 0.35 : 0.7),
        r: itemSize() * 0.78,
        value: 1, shownAs: 'picture', glyph: t.emoji,
      })
      it.slot = side
      items.push(it)
      made++
    }

    return {
      items: items, bins: pans, needDone: true, beam: true,
      ask: 'Move them across until both sides are the same.',
      tell: 'Both sides needed ' + (made / 2) + '.',
      check: function () {
        var l = 0, r2 = 0
        for (var i = 0; i < items.length; i++) {
          if (items[i].slot === 0) l++
          else if (items[i].slot === 1) r2++
        }
        return l === r2 && l > 0
      },
    }
  }

  function buildBuild() {
    var max = ceiling()
    var t = pick(things())
    var want = rand(3, Math.max(3, max))
    var trayH = clamp(H * 0.2, 84, 150)
    var tray = {
      x: W * 0.12, y: playBottom() - trayH, w: W * 0.76, h: trayH,
      label: '', accepts: null, style: 'tray',
    }

    /* Parts, some of which add to the target and some of which do not, so the
       child chooses rather than dropping everything in. */
    var parts = []
    var left = want
    while (left > 0) {
      var p = Math.min(left, rand(1, 3))
      parts.push(p)
      left -= p
    }
    parts.push(rand(1, 3), rand(1, 3))

    var spots = spread(parts.length, playTop() + itemSize() * 1.2, itemSize())
    var items = []
    var order = shuffle(parts)
    for (var i = 0; i < order.length; i++) {
      items.push(itemFor('count', order[i], spots[i], t))
    }

    return {
      items: items, bins: [tray], needDone: true,
      ready: function () {
        return items.some(function (it) { return it.slot === 0 })
      },
      ask: 'Make ' + want + '. Drag groups into the tray.',
      tell: 'It needed to add up to ' + want + '.',
      total: want,
      check: function () {
        var sum = 0
        for (var j = 0; j < items.length; j++) if (items[j].slot === 0) sum += items[j].value
        return sum === want
      },
    }
  }

  var BUILDERS = {
    collect: buildCollect,
    pop: buildPop,
    sort: buildSort,
    order: buildOrder,
    match: buildMatch,
    balance: buildBalance,
    build: buildBuild,
  }

  /* ── running a round ─────────────────────────────────────────────────────── */

  /** Balloon colours, so a board of them is not one colour repeated. */
  var TINTS = [
    ['#ffe08a', '#f2b517'], ['#ffc2b5', '#e8674f'], ['#c7e9ff', '#5aa9e6'],
    ['#d6f5c8', '#5fbd63'], ['#e8d5ff', '#9b6fd1'],
  ]

  /**
   * How a round looks, decided once, after it is built.
   *
   * Kept out of the builders on purpose. A builder's job is what the question
   * is and what the truth is; this is what it looks like. Separating them is
   * what lets one small set of builders produce games that do not feel alike.
   */
  function dress() {
    var look = spec.goal === 'pop' ? 'balloon'
      : spec.goal === 'balance' ? 'bare'
        : 'card'

    for (var i = 0; i < round.items.length; i++) {
      var it = round.items[i]
      if (!it.question) it.look = look
      if (it.look === 'balloon') it.tint = TINTS[i % TINTS.length]
      /* One after another rather than all at once. A board that assembles
         itself is watched; a board that is simply there is not. */
      it.born = now + i * 70
    }
  }

  /** The verbs that are finished by pressing Done rather than by one tap. */
  function wantsButton() {
    if (spec.goal === 'collect' || spec.goal === 'sort'
      || spec.goal === 'order' || spec.goal === 'build') return true
    /* The balance is two games: tapping the heavier side needs no button,
       making the sides match does. */
    if (spec.goal === 'balance') return spec.subject === 'sum' || spec.subject === 'size'
    return false
  }

  function nextRound() {
    phase = 'play'
    sparks = []
    mood = 'idle'
    needsButton = wantsButton()
    var make = BUILDERS[spec.goal] || buildPop
    round = make()
    dress()
    expose()
    say(round.ask)
  }

  function finish(correct) {
    phase = 'verdict'
    verdictAt = now
    wasRight = correct
    mood = correct ? 'happy' : 'sad'
    if (correct) right++
    post({ type: 'attempt', correct: !!correct })
    say(correct ? pick(['Yes. Well done.', 'That is right.', 'Good.'])
      : 'Not quite. ' + (round.tell || ''))

    if (correct) {
      for (var i = 0; i < 18; i++) {
        sparks.push({
          x: W / 2, y: H * 0.5,
          vx: (Math.random() - 0.5) * W * 0.9,
          vy: -Math.random() * H * 0.7,
          life: 1,
        })
      }
    }
  }

  /**
   * On to the next round, or finish.
   *
   * `phase` moves to 'over' and stays there, which is the point of this
   * function rather than an implementation detail. The first version simply
   * posted `done` and returned, but it is called from the frame loop while the
   * verdict is showing, so once the last round ended it posted `done` again
   * sixty times a second. The app answers that message by starting the next
   * game, so the finish of one set was an endless spawn of new ones.
   */
  function advance() {
    if (phase === 'over') return

    roundIndex++
    if (roundIndex >= spec.rounds) {
      phase = 'over'
      /* However it went, the last thing a child sees is not a frown. */
      mood = right === 0 ? 'idle' : 'happy'
      post({ type: 'done', right: right, rounds: spec.rounds })
      return
    }
    nextRound()
  }

  /** The end of a set: what they got, and the face pleased about it. */
  function drawOver() {
    ctx.fillStyle = 'rgba(255,253,245,0.90)'
    var w = Math.min(W * 0.8, 460)
    var h = Math.min(H * 0.34, 190)
    roundRect(W / 2 - w / 2, H / 2 - h / 2, w, h, 22)
    ctx.fill()

    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#14243a'
    ctx.font = '800 ' + Math.round(clamp(Math.min(W, H) * 0.075, 22, 42)) + 'px system-ui, sans-serif'
    ctx.fillText(right + ' of ' + spec.rounds, W / 2, H / 2 - h * 0.12)

    /**
     * What to say about it.
     *
     * "Well played" over a score of nought is worse than saying nothing: a
     * child who got everything wrong is being told by the app that it did not
     * notice. And nobody is told they did badly. The honest and kind reading
     * of a bad round at this age is that the round was too hard, which is true
     * and which is the platform's job to fix, not the child's.
     */
    var line = right === spec.rounds ? 'Every one right'
      : right === 0 ? 'That one was hard. Try another.'
        : right >= spec.rounds / 2 ? 'Well played'
          : 'Getting there'
    ctx.font = '600 ' + Math.round(clamp(Math.min(W, H) * 0.042, 15, 24)) + 'px system-ui, sans-serif'
    ctx.fillText(line, W / 2, H / 2 + h * 0.2)
  }

  /* ── input ───────────────────────────────────────────────────────────────── */

  var held = null
  var grabDX = 0, grabDY = 0
  var downAt = null

  function point(e) {
    var box = canvas.getBoundingClientRect()
    return { x: e.clientX - box.left, y: e.clientY - box.top }
  }

  function hit(p) {
    /* Last drawn is on top, so search backwards. */
    for (var i = round.items.length - 1; i >= 0; i--) {
      var it = round.items[i]
      var r = it.r * 1.05
      if (Math.abs(p.x - it.x) <= r && Math.abs(p.y - it.y) <= r) return it
    }
    return null
  }

  function doneButton() {
    if (!round || !round.needDone) return null
    var b = bands()
    var w = Math.min(W * 0.42, 260)
    return { x: W / 2 - w / 2, y: H - b.btnH - b.btnPad, w: w, h: b.btnH }
  }

  function inRect(p, r) {
    return p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h
  }

  function down(e) {
    if (!spec || !round) return
    var p = point(e)

    if (phase === 'over') return

    if (phase === 'verdict') {
      /* A tap moves on, so a child who is ready does not wait for the pause. */
      if (now - verdictAt > 450) advance()
      return
    }

    var btn = doneButton()
    if (btn && inRect(p, btn)) {
      /**
       * Nothing to answer yet.
       *
       * Without this, a tap on Done before the child has moved anything is
       * recorded as a wrong answer on a round they never attempted, and that
       * goes into their mastery record and shapes the next lesson. A child of
       * four presses every button on the screen, so this is the normal case,
       * not the edge case.
       */
      if (round.ready && !round.ready()) {
        say('Move some first, then press Done.')
        return
      }
      finish(!!(round.check && round.check()))
      return
    }

    var it = hit(p)
    if (!it) return

    if (!round.needDone && round.onTap) {
      var verdict = round.onTap(it)
      if (verdict === null) return
      it.pulse = 1
      it[verdict ? 'good' : 'wrong'] = true
      finish(verdict)
      return
    }

    if (it.fixed) return
    it.pulse = 1
    held = it
    it.drag = true
    it.held = true
    grabDX = it.x - p.x
    grabDY = it.y - p.y
    downAt = p
  }

  function moveEv(e) {
    if (!held) return
    var p = point(e)
    held.x = clamp(p.x + grabDX, held.r, W - held.r)
    held.y = clamp(p.y + grabDY, held.r, H - held.r)
  }

  function up() {
    if (!held) return
    var it = held
    it.drag = false
    it.held = false
    held = null

    /* Where did it land? A basket, a bin, or back where it came from. */
    if (round.basket) {
      var b = round.basket
      var inside = Math.abs(it.x - b.x) <= b.w / 2 + it.r * 0.5
        && Math.abs(it.y - b.y) <= b.h / 2 + it.r * 0.8
      it.inBasket = inside
      if (inside) {
        it.parked = true
      } else {
        it.parked = false
      }
      return
    }

    if (round.bins) {
      for (var i = 0; i < round.bins.length; i++) {
        var bin = round.bins[i]
        /* A hanging pan is not where it was laid out, so the target is where
           it currently is. Without this, dropping into the raised pan of a
           balance misses by however far the beam has tilted. */
        var bx = bin.liveX != null ? bin.liveX : bin.x
        var by = bin.liveY != null ? bin.liveY : bin.y
        var bw = bin.liveW != null ? bin.liveW : bin.w
        var bh = bin.liveH != null ? bin.liveH : bin.h
        /* A pan is caught generously above its surface, because a finger lets
           go over a pan rather than inside it. */
        var reach = bin.style === 'pan' ? it.r * 2.2 : it.r * 0.6
        if (it.x >= bx - it.r * 0.4 && it.x <= bx + bw + it.r * 0.4
          && it.y >= by - reach && it.y <= by + bh + reach) {
          it.slot = i
          it.parked = true
          return
        }
      }
      /* Dropped outside every bin: taken back out, which is how a child undoes
         a mistake. Being able to change your mind matters more at four than at
         any other age. */
      it.slot = null
      it.parked = false
    }
  }

  canvas.addEventListener('pointerdown', function (e) {
    /**
     * Capture the pointer, but never at the cost of the tap.
     *
     * `setPointerCapture` throws when the browser does not recognise the
     * pointer id, and it used to run before the handler, so a throw here ate
     * the tap entirely. On a device where that happens nothing in the game
     * responds at all, which is indistinguishable from the game being broken.
     * Capture is a convenience for dragging past the edge of the canvas; the
     * tap is the whole product.
     */
    try { canvas.setPointerCapture(e.pointerId) } catch (err) { /* not fatal */ }
    down(e)
  })
  canvas.addEventListener('pointermove', moveEv)
  canvas.addEventListener('pointerup', up)
  canvas.addEventListener('pointercancel', up)

  /* ── drawing ─────────────────────────────────────────────────────────────── */

  function wrapText(text, maxWidth) {
    var words = String(text).split(' ')
    var lines = [], line = ''
    for (var i = 0; i < words.length; i++) {
      var test = line ? line + ' ' + words[i] : words[i]
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line)
        line = words[i]
      } else {
        line = test
      }
    }
    if (line) lines.push(line)
    return lines
  }

  function drawAsk() {
    var size = clamp(Math.min(W, H) * 0.055, 17, 30)
    ctx.font = '700 ' + size + 'px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'

    var lines = wrapText(round.ask, W * 0.9)
    var pad = size * 0.5
    var boxH = lines.length * size * 1.22 + pad * 1.4

    ctx.fillStyle = 'rgba(255,255,255,0.86)'
    roundRect(W * 0.04, Math.max(H * 0.02, 8), W * 0.92, boxH, 14)
    ctx.fill()

    ctx.fillStyle = '#14243a'
    for (var i = 0; i < lines.length; i++) {
      ctx.fillText(lines[i], W / 2, Math.max(H * 0.02, 8) + pad * 0.7 + i * size * 1.22)
    }
  }

  /**
   * The furniture each verb plays on.
   *
   * This is the other half of the fix that `drawItem` starts. A dashed
   * rectangle is not a basket, a crate or a pan, and when every verb was given
   * the same dashed rectangle every verb looked the same. A child should be
   * able to tell what a game wants from them with the sound off and the
   * instruction unread.
   */
  function drawCrate(b, label) {
    /* Slats and a rim: something things go into, not a dotted outline. */
    ctx.fillStyle = 'rgba(92,58,30,0.82)'
    roundRect(b.x, b.y, b.w, b.h, 10)
    ctx.fill()

    ctx.save()
    ctx.globalAlpha = 0.18
    ctx.fillStyle = '#000'
    for (var i = 1; i < 4; i++) {
      ctx.fillRect(b.x + 6, b.y + b.h * (i / 4), b.w - 12, 3)
    }
    ctx.restore()

    ctx.strokeStyle = 'rgba(255,255,255,0.35)'
    ctx.lineWidth = 3
    roundRect(b.x, b.y, b.w, b.h, 10)
    ctx.stroke()

    if (label) {
      /* On a plate above the crate, so a label is never mistaken for one of
         the things inside it. */
      var lh = Math.round(clamp(b.h * 0.3, 18, 34))
      ctx.fillStyle = '#fffdf5'
      roundRect(b.x + b.w * 0.12, b.y - lh * 1.05, b.w * 0.76, lh * 1.25, 8)
      ctx.fill()
      ctx.fillStyle = '#14243a'
      ctx.font = '800 ' + lh + 'px system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(String(label), b.x + b.w / 2, b.y - lh * 0.4)
    }
  }

  /** A numbered place on a shelf, for lining things up. */
  function drawSlot(b, label) {
    ctx.fillStyle = 'rgba(20,36,58,0.16)'
    roundRect(b.x, b.y, b.w, b.h, 12)
    ctx.fill()
    ctx.strokeStyle = 'rgba(255,255,255,0.7)'
    ctx.lineWidth = 3
    ctx.setLineDash([8, 6])
    roundRect(b.x, b.y, b.w, b.h, 12)
    ctx.stroke()
    ctx.setLineDash([])

    /* The shelf itself, under the row. */
    ctx.fillStyle = 'rgba(92,58,30,0.75)'
    ctx.fillRect(b.x - 4, b.y + b.h, b.w + 8, Math.max(b.h * 0.1, 7))

    if (label) {
      ctx.fillStyle = 'rgba(20,36,58,0.5)'
      ctx.font = '800 ' + Math.round(clamp(b.h * 0.26, 14, 26)) + 'px system-ui, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(String(label), b.x + b.w / 2, b.y + b.h / 2)
    }
  }

  /** A tray, with the running total written beside it. */
  function drawTray(b, total, want) {
    ctx.fillStyle = 'rgba(255,253,245,0.9)'
    roundRect(b.x, b.y, b.w, b.h, 14)
    ctx.fill()
    ctx.strokeStyle = 'rgba(20,36,58,0.25)'
    ctx.lineWidth = 3
    roundRect(b.x, b.y, b.w, b.h, 14)
    ctx.stroke()

    /* The sum as it stands, next to the one being aimed at. Watching the
       number change as things go in is the whole lesson. */
    var size = Math.round(clamp(b.h * 0.34, 18, 40))
    ctx.font = '800 ' + size + 'px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = total === want ? '#0f8a4d' : '#14243a'
    ctx.fillText(total + ' of ' + want, b.x + b.w / 2, b.y + b.h * 0.5)
  }

  function drawBin(b, label) {
    if (b.style === 'slot') drawSlot(b, label)
    else if (b.style === 'pan') { /* drawn by the beam, which has to tilt it */ }
    else if (b.style === 'tray') {
      var total = 0
      for (var i = 0; i < round.items.length; i++) {
        if (round.items[i].slot === 0) total += round.items[i].value
      }
      drawTray(b, total, round.total || 0)
    } else drawCrate(b, label)
  }

  /**
   * The bowl, drawn in two halves.
   *
   * The back before the items and the rim after them, so a mango dropped in
   * sits behind the front of the bowl. That one detail is the difference
   * between things being in the bowl and things being on top of a picture of a
   * bowl, and a child reads it instantly.
   */
  function drawBasket(b) {
    var x = b.x - b.w / 2, y = b.y - b.h / 2
    ctx.fillStyle = 'rgba(120,76,38,0.92)'
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + b.w, y)
    ctx.lineTo(x + b.w - b.w * 0.09, y + b.h)
    ctx.lineTo(x + b.w * 0.09, y + b.h)
    ctx.closePath()
    ctx.fill()

    ctx.save()
    ctx.globalAlpha = 0.16
    ctx.fillStyle = '#000'
    for (var i = 1; i < 5; i++) ctx.fillRect(x + 8, y + b.h * (i / 5), b.w - 16, 3)
    ctx.restore()
  }

  /** The front of the bowl, and the count, over the items sitting in it. */
  function drawBasketFront(b, count) {
    var x = b.x - b.w / 2, y = b.y - b.h / 2
    ctx.fillStyle = 'rgba(146,94,48,0.97)'
    roundRect(x - b.w * 0.03, y - b.h * 0.07, b.w * 1.06, b.h * 0.2, b.h * 0.1)
    ctx.fill()
    ctx.strokeStyle = 'rgba(20,36,58,0.2)'
    ctx.lineWidth = 2
    roundRect(x - b.w * 0.03, y - b.h * 0.07, b.w * 1.06, b.h * 0.2, b.h * 0.1)
    ctx.stroke()

    /* The running count, in numerals, on the bowl. A child who cannot read
       still learns the shape of the number by watching it change as they drop
       things in. */
    var size = Math.round(clamp(b.h * 0.42, 20, 44))
    var cx = clamp(b.x + b.w / 2 + size * 0.9, size, W - size * 0.7)
    ctx.fillStyle = '#fffdf5'
    ctx.beginPath()
    ctx.arc(cx, b.y, size * 0.62, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = 'rgba(20,36,58,0.2)'
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.fillStyle = '#14243a'
    ctx.font = '800 ' + size + 'px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(String(count), cx, b.y + 1)
  }

  /**
   * The balance, with pans that actually hang.
   *
   * The beam tilts towards the heavier side and the pans hang from its ends,
   * which is how a balance behaves and how a child has seen one at a market
   * stall. The tilt is the answer being shown rather than told.
   */
  function drawBeam() {
    var l = 0, r2 = 0
    for (var i = 0; i < round.items.length; i++) {
      var it = round.items[i]
      var side = it.side != null ? it.side : it.slot
      if (side === 0) l += it.value
      else if (side === 1) r2 += it.value
    }

    var want = clamp((l - r2) * 0.055, -0.15, 0.15)
    /* Eased rather than snapped, so the beam settles like a real one. */
    beamTilt += (want - beamTilt) * 0.08

    /* Centred in the play area rather than at a fixed fraction of the page,
       so the pans have room to swing without meeting the Done button. */
    var top = playTop()
    var cx = W / 2
    var cy = top + (playBottom() - top) * 0.22
    var arm = Math.min(W * 0.33, 300)

    ctx.fillStyle = 'rgba(70,45,24,0.9)'
    ctx.fillRect(cx - 8, cy, 16, H * 0.2)
    roundRect(cx - arm * 0.22, cy + H * 0.2, arm * 0.44, 14, 7)
    ctx.fill()

    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(beamTilt)
    ctx.fillStyle = 'rgba(70,45,24,0.95)'
    roundRect(-arm, -6, arm * 2, 12, 6)
    ctx.fill()
    ctx.restore()

    for (var sideIx = 0; sideIx < 2; sideIx++) {
      var dir = sideIx === 0 ? -1 : 1
      var ex = cx + Math.cos(beamTilt) * arm * dir
      var ey = cy + Math.sin(beamTilt) * arm * dir
      var pan = round.bins && round.bins[sideIx]
      if (!pan) continue

      var panW = pan.w
      var panH = pan.h
      var px = ex - panW / 2
      var py = ey + H * 0.12

      ctx.strokeStyle = 'rgba(70,45,24,0.75)'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(ex, ey)
      ctx.lineTo(px + panW * 0.12, py)
      ctx.moveTo(ex, ey)
      ctx.lineTo(px + panW * 0.88, py)
      ctx.stroke()

      ctx.fillStyle = 'rgba(190,150,96,0.95)'
      roundRect(px, py, panW, panH * 0.34, 10)
      ctx.fill()
      ctx.strokeStyle = 'rgba(20,36,58,0.25)'
      ctx.lineWidth = 2
      roundRect(px, py, panW, panH * 0.34, 10)
      ctx.stroke()

      /* Where the pan actually ended up, so dropping into it works and the
         things in it move with it. `liveTop` is the surface things rest on,
         which is the only measurement `seatPans` needs and the one the first
         version guessed at, leaving everything hovering above the pan. */
      pan.liveX = px
      pan.liveTop = py
      pan.liveW = panW
      pan.liveH = panH * 0.34
      /* The catch area for a drop reaches above the surface, because a finger
         lets go over the pan rather than inside it. */
      pan.liveY = py - panH * 0.9
    }
  }

  /**
   * Somebody to play with.
   *
   * A face in the corner that reacts. It is a circle, two eyes and a curve,
   * and it turns the game from a test into somebody asking you something. For
   * a four year old that difference is most of whether they keep playing, and
   * it costs about forty lines.
   */
  function drawFace() {
    var r = clamp(Math.min(W, H) * 0.07, 24, 54)
    var x = W - r - 14
    var y = H * 0.26
    var blink = (now % 4200) < 140

    ctx.save()
    /* A small bounce when pleased, a slump when not. */
    var bob = mood === 'happy' ? Math.abs(Math.sin(now * 0.008)) * r * 0.16
      : mood === 'sad' ? r * 0.1 : Math.sin(now * 0.0015) * r * 0.04
    ctx.translate(x, y + bob)

    ctx.fillStyle = '#f2b517'
    ctx.beginPath()
    ctx.arc(0, 0, r, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = 'rgba(20,36,58,0.22)'
    ctx.lineWidth = 3
    ctx.stroke()

    ctx.fillStyle = '#14243a'
    if (blink && mood !== 'sad') {
      ctx.fillRect(-r * 0.42, -r * 0.16, r * 0.26, 4)
      ctx.fillRect(r * 0.16, -r * 0.16, r * 0.26, 4)
    } else {
      ctx.beginPath()
      ctx.arc(-r * 0.29, -r * 0.16, r * 0.11, 0, Math.PI * 2)
      ctx.arc(r * 0.29, -r * 0.16, r * 0.11, 0, Math.PI * 2)
      ctx.fill()
    }

    ctx.strokeStyle = '#14243a'
    ctx.lineWidth = Math.max(3, r * 0.09)
    ctx.beginPath()
    if (mood === 'sad') {
      ctx.arc(0, r * 0.52, r * 0.34, Math.PI * 1.15, Math.PI * 1.85)
    } else if (mood === 'happy') {
      ctx.arc(0, r * 0.14, r * 0.42, 0.18 * Math.PI, 0.82 * Math.PI)
    } else {
      ctx.arc(0, r * 0.18, r * 0.34, 0.22 * Math.PI, 0.78 * Math.PI)
    }
    ctx.stroke()
    ctx.restore()
  }

  function drawDone() {
    var b = doneButton()
    if (!b) return
    /* Dimmed until there is something to answer, so the button says whether
       pressing it means anything. */
    var ready = round.ready ? !!round.ready() : true
    ctx.fillStyle = ready ? '#14243a' : 'rgba(20,36,58,0.45)'
    roundRect(b.x, b.y, b.w, b.h, b.h / 2)
    ctx.fill()
    ctx.fillStyle = '#fff'
    ctx.font = '700 ' + Math.round(b.h * 0.38) + 'px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('Done', b.x + b.w / 2, b.y + b.h / 2)
  }

  function drawVerdict() {
    ctx.fillStyle = wasRight ? 'rgba(15,138,77,0.20)' : 'rgba(214,64,46,0.18)'
    ctx.fillRect(0, 0, W, H)

    var size = Math.min(W, H) * 0.30
    ctx.font = '700 ' + size + 'px system-ui, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = wasRight ? '#0f8a4d' : '#d6402e'
    ctx.fillText(wasRight ? '✓' : '✗', W / 2, H * 0.44)

    if (!wasRight && round.tell) {
      ctx.font = '700 ' + clamp(Math.min(W, H) * 0.05, 16, 26) + 'px system-ui, sans-serif'
      ctx.fillStyle = '#14243a'
      var lines = wrapText(round.tell, W * 0.8)
      for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], W / 2, H * 0.62 + i * 28)
      }
    }
  }

  function drawSparks(dt) {
    for (var i = sparks.length - 1; i >= 0; i--) {
      var s = sparks[i]
      s.x += s.vx * dt
      s.y += s.vy * dt
      s.vy += H * 1.2 * dt
      s.life -= dt * 0.9
      if (s.life <= 0) { sparks.splice(i, 1); continue }
      ctx.globalAlpha = clamp(s.life, 0, 1)
      ctx.fillStyle = pick(['#f2b517', '#0f8a4d', '#fff'])
      ctx.fillRect(s.x, s.y, 7, 7)
    }
    ctx.globalAlpha = 1
  }

  /**
   * Seat whatever is in a pan, inside the pan, wherever it has swung to.
   *
   * Called after the beam is drawn, because the beam is what decides where the
   * pans are. Items being dragged are left where the finger is.
   */
  function seatPans() {
    if (!round.bins) return
    for (var sideIx = 0; sideIx < round.bins.length; sideIx++) {
      var pan = round.bins[sideIx]
      if (pan.style !== 'pan' || pan.liveX == null) continue

      var mine = []
      for (var i = 0; i < round.items.length; i++) {
        var it = round.items[i]
        var side = it.side != null ? it.side : it.slot
        if (side === sideIx && !it.drag) mine.push(it)
      }
      /* Rows of four, resting on the surface and stacking upwards, so a pan
         with six things in it reads as more than a pan with two. */
      var cols = Math.max(1, Math.min(4, mine.length))
      for (var m = 0; m < mine.length; m++) {
        var row = Math.floor(m / cols)
        var col = m % cols
        var r = mine[m].r
        mine[m].x = pan.liveX + pan.liveW * ((col + 0.5) / cols)
        mine[m].y = pan.liveTop - r * 0.92 - row * r * 1.8
      }
    }
  }

  /* ── the loop ────────────────────────────────────────────────────────────── */

  var last = 0

  /**
   * One frame.
   *
   * The next frame is asked for **first**, before anything is drawn.
   *
   * This is not a style preference. With the request at the end, any exception
   * anywhere in the drawing stops the loop for good: the canvas freezes on
   * whatever was last painted while the game underneath carries on taking
   * taps, so a child is left tapping a still picture. That happened here. One
   * bad frame should cost one frame.
   */
  function frame(t) {
    requestAnimationFrame(frame)

    var dt = last ? Math.min((t - last) / 1000, 0.05) : 0.016
    last = t
    now = t

    if (!spec || !round) return

    try {
      for (var i = 0; i < round.items.length; i++) move(round.items[i], dt)

      drawScene()

      if (round.beam) { drawBeam(); seatPans() }
      if (round.bins) {
        for (var b = 0; b < round.bins.length; b++) drawBin(round.bins[b], round.bins[b].label)
      }
      /* The back of the bowl, then the things in it, then the front of the
         bowl over them. */
      if (round.basket) drawBasket(round.basket)

      for (var d = 0; d < round.items.length; d++) drawItem(round.items[d])

      if (round.basket) {
        var inb = 0
        for (var c = 0; c < round.items.length; c++) if (round.items[c].inBasket) inb++
        drawBasketFront(round.basket, inb)
      }

      drawFace()
      /* The question, until there is no longer a question. */
      if (phase !== 'over') drawAsk()
      if (phase === 'play') drawDone()
      if (phase === 'over') drawOver()
      if (phase === 'verdict') {
        drawVerdict()
        drawSparks(dt)
        /* Long enough to see what happened, short enough not to be a wait. */
        if (now - verdictAt > (wasRight ? 1500 : 2600)) advance()
      }
    } catch (e) {
      /* Reported once, so a fault is findable, and then the loop carries on.
         A game that drops a frame is better than a game that stops. */
      if (!window.__nxError) {
        window.__nxError = String((e && e.stack) || e)
        try { console.error('game frame failed:', e) } catch (ignored) { /* no console */ }
      }
    }
  }

  /* ── size ────────────────────────────────────────────────────────────────── */

  /**
   * Take the size of the frame.
   *
   * A round is laid out in real pixels, so a change of size has to be dealt
   * with. The first version rebuilt the round, which is wrong and was worse
   * than it sounds: a phone hiding its address bar fires a resize, so a child
   * who had dragged four mangoes into the basket would watch the whole round
   * start again for no reason they could see. It happened twice during the
   * first test of a single drag.
   *
   * So a small change moves what is on the board in proportion and keeps the
   * round. Only a real change of shape, a rotation or a window dragged to a
   * different size, starts again, because at that point the layout genuinely
   * no longer fits.
   */
  function fit() {
    var dpr = Math.min(window.devicePixelRatio || 1, 2)
    var wasW = W, wasH = H

    W = canvas.clientWidth || window.innerWidth
    H = canvas.clientHeight || window.innerHeight
    canvas.width = Math.round(W * dpr)
    canvas.height = Math.round(H * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (!spec || !round || !wasW || !wasH) return
    if (W === wasW && H === wasH) return

    var ratioW = W / wasW
    var ratioH = H / wasH
    /* A fifth either way, or a flip between portrait and landscape, is a
       different screen rather than the same screen moving. */
    var big = ratioW < 0.8 || ratioW > 1.25 || ratioH < 0.8 || ratioH > 1.25
      || (wasW > wasH) !== (W > H)

    if (big) { nextRound(); return }

    /* Everything that was placed keeps its place, in proportion. */
    for (var i = 0; i < round.items.length; i++) {
      var it = round.items[i]
      it.x *= ratioW
      it.y *= ratioH
      it.homeX *= ratioW
      it.homeY *= ratioH
    }
    if (round.basket) {
      round.basket.x *= ratioW
      round.basket.y *= ratioH
    }
    if (round.bins) {
      for (var b = 0; b < round.bins.length; b++) {
        round.bins[b].x *= ratioW
        round.bins[b].y *= ratioH
        round.bins[b].w *= ratioW
        round.bins[b].h *= ratioH
      }
    }
  }

  var fitTimer = null
  window.addEventListener('resize', function () {
    /* Debounced, because a rotation fires a burst of these, and skipped while
       a finger is down so that a resize cannot move a thing out from under the
       hand holding it. */
    clearTimeout(fitTimer)
    fitTimer = setTimeout(function () {
      if (held) { fitTimer = setTimeout(fit, 300); return }
      fit()
    }, 220)
  })

  /* ── setup ───────────────────────────────────────────────────────────────── */

  window.addEventListener('message', function (e) {
    var d = e.data
    if (!d || d.nx !== 1 || d.type !== 'setup' || !d.spec) return
    /* Learned once, and everything after this is addressed to it. */
    if (!origin) origin = e.origin && e.origin !== 'null' ? e.origin : null

    spec = d.spec
    roundIndex = 0
    right = 0
    wait.className = 'gone'
    fit()
    nextRound()
  })

  fit()
  requestAnimationFrame(frame)
  post({ type: 'ready' })
})()
