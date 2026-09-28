Drop a painted background here as `compound.jpg`.

The game loads it automatically and uses it instead of the drawn scene. If it
is missing the drawn scene is used, so nothing breaks: the picture is quality,
never a dependency.

What it needs to be:

  A Ghanaian compound in the late afternoon. A wall with a doorway on the
  right, a mango tree on the left, open red earth across the bottom.

  Wide, at least 1600 x 900. It is drawn to cover, so the middle survives on
  every phone shape and the edges may be cropped.

  Horizon on the middle line. The code stands the fruit on H * 0.52, so the
  ground has to start about there. If the painting puts it elsewhere, change
  `groundY()` in mangoes.html to match.

  The bottom half nearly empty. That is where the mangoes, the basket, the
  cloth and Ananse go, and a busy floor makes the fruit impossible to pick out.

  Light from the upper left, to match Ananse and the mangoes, which are lit
  that way and cannot be relit.
