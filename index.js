// First coord is diatonic steps, second is semitones. Distances are relative to c
var notes = {
  c: [0, 0],
  d: [1, 2],
  e: [2, 4],
  f: [3, 5],
  g: [4, 7],
  a: [5, 9],
  b: [6, 11],
  h: [6, 11]
};

module.exports = function(name) {
  return name in notes ? [notes[name][0], notes[name][1]] : null;
};

module.exports.notes = notes;
module.exports.A4 = [33, 57]; // Relative to C0 (scientic notation, ~16.35Hz)
module.exports.sharp = [0, 1];
