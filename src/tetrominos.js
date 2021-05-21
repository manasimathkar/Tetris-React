export const TETROMINOS = {
  0: { shape: [[0]], color: "255, 255, 255" },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "255,213,0", //Yellow
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "255,107,107", //Red
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "45,106,79", //Green
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "123,82,174", //Purple
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "246,102,151", //Pink
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "46,196,182", //Turquiose
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "255,123,0", //Orange
  },
  A: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "255,107,107", //Red
  },
  B: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "255,213,0", //Yellow
  },
  C: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "123,82,174", //Purple
  },
  D: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "246,102,151", //Pink
  },
  E: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "46,196,182", //Turquiose
  },
  F: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "255,123,0", //Orange
  },
  G: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "255,213,0", //Yellow
  },
};

export const randomTetromino = () => {
  const tetrominos = "IJLOSTZABCDEFGID";
  const randTetromino =
    tetrominos[Math.floor(Math.random() * tetrominos.length)];
  return TETROMINOS[randTetromino];
};
