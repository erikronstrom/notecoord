# notecoord

A data package containing the relative intervals between notes in the Western music system.
The coordinates are in the format of an array: `[steps, semitones]` relative to C.

Thus `c`'s coord is `[0, 0]`, while `d`'s is `[1, 2]` because going to the
note `d` in the same octave as `c` requires going one diatonic step and two
semitones up.

```js
var coords = require('notecoord');

// Get the coord of a note name (relative to C)
coords('a') // -> [5, 9]

// Get the coord of note A4 (relative to C0)
coords.A4 // -> [33, 57]

// Access all the notes
coords.notes /* -> {
  c: [0, 0],
  d: [1, 2],
  e: [2, 4],
  f: [3, 5],
  g: [4, 7],
  a: [5, 9],
  b: [6, 11],
  h: [6, 11]
} */
```


Above is **everything** this module does.
