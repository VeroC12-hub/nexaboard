# Three backgrounds to choose between

Generate all three, drop them in this folder, then open the game with
`?art=a`, `?art=b` or `?art=c` to see each one under the real game.

    http://localhost:5173/ananse/mangoes.html?art=a
    http://localhost:5173/ananse/mangoes.html?art=b
    http://localhost:5173/ananse/mangoes.html?art=c

Save them as **`compound-a.jpg`**, **`compound-b.jpg`**, **`compound-c.jpg`** in
`public/ananse/art/`. Whichever wins, rename it to `compound.jpg` and it becomes
the default with no code change.

Any generator works: ChatGPT, Gemini, Leonardo, Canva. Paste a whole block.

---

## Why the composition rules matter

They are not style preferences, they are what the game needs to work:

- **The ground starts at 52% down.** The code stands the fruit on that line. If
  the painting puts its horizon somewhere else the mangoes will float in the air
  or sink into the wall.
- **The bottom half stays empty.** That is where the mangoes, Ananse and the
  button live. A busy floor makes the fruit impossible to pick out, and picking
  the fruit out is the game.
- **Light from the upper left.** Ananse and the mangoes are lit that way and
  cannot be relit. A background lit from the right makes them look pasted on.
- **Nothing important at the edges.** The image is drawn to cover, so on a
  phone the left and right get cropped.
- **No people.** Ananse is drawn on top, and a painted person would place a
  specific child in a way the whole character design avoids.

---

## A — Storybook painting

```
A wide 16:9 landscape illustration, 1920x1080, in the style of a warm
children's picture book painted in gouache and watercolour.

Scene: a Ghanaian family compound in the golden light of late afternoon.
On the left, a mango tree heavy with ripe orange-red mangoes, its canopy
reaching into the top of the frame. On the right, a low sun-warmed earth
wall the colour of dried clay, with a simple wooden doorway in it. Behind
the wall, soft hazy hills. Across the whole foreground, open swept
red-brown earth.

Style: soft painterly brushwork with visible texture, warm saturated
colour, gentle dappled light, soft edges, no hard black outlines. Cosy and
inviting, like a page from a beloved bedtime book.

Composition, important: the ground must begin just above the middle of the
image, about 52 percent down. The entire bottom half must be open empty
ground with nothing on it. Light comes from the upper left. Nothing
important near the left or right edges.

No people, no animals, no text, no letters, no logos, no watermark,
no frame or border.
```

## B — Bold flat cartoon

```
A wide 16:9 landscape illustration, 1920x1080, in a bold flat cartoon
style for a young children's game.

Scene: a Ghanaian family compound in the afternoon. On the left, a mango
tree with ripe orange-red mangoes, its canopy reaching into the top of the
frame. On the right, a low earth wall with a simple wooden doorway.
Behind the wall, simple rolling hills. Across the whole foreground, open
red-brown earth.

Style: thick confident dark outlines, flat saturated colour blocks, chunky
simplified shapes, no gradients, no texture, no shading. Bright, graphic
and playful, like a modern preschool cartoon.

Composition, important: the ground must begin just above the middle of the
image, about 52 percent down. The entire bottom half must be open empty
ground with nothing on it. Light comes from the upper left. Nothing
important near the left or right edges.

No people, no animals, no text, no letters, no logos, no watermark,
no frame or border.
```

## C — Cut paper collage

```
A wide 16:9 landscape illustration, 1920x1080, made to look like a cut
and torn paper collage.

Scene: a Ghanaian family compound in the afternoon. On the left, a mango
tree with ripe orange-red mangoes, its canopy reaching into the top of the
frame. On the right, a low earth wall with a simple wooden doorway.
Behind the wall, layered paper hills. Across the whole foreground, open
red-brown earth.

Style: every element is a separate piece of torn or cut coloured paper,
layered up with soft drop shadows between the layers. Visible paper grain
and fibre at the torn edges. Warm, handmade and tactile, in the spirit of
Eric Carle or the show Sarah and Duck.

Composition, important: the ground must begin just above the middle of the
image, about 52 percent down. The entire bottom half must be open empty
ground with nothing on it. Light comes from the upper left. Nothing
important near the left or right edges.

No people, no animals, no text, no letters, no logos, no watermark,
no frame or border.
```

---

## If a generator will not respect the horizon

Most will get it wrong at least once. Two fixes, in order of ease:

1. Ask again with: *"the horizon line must sit just above the vertical centre,
   and the bottom half of the image must be empty ground"*.
2. Keep the image anyway and change one number: `groundY()` in `mangoes.html`
   returns `H * 0.52`. Set it to wherever the painting actually puts the ground.
