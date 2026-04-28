export type MovementBlockType = "normal" | "invisible" | "countdown" | "heavy" | "glass";

export type MovementBlockConfig = {
  x: number;
  y: number;
  value: string | number;
  type: MovementBlockType;
};

export type MovementLevelConfig = {
  prompt: string;
  answer: string;
  answerMode?: "fixed" | "timeLeftFloor";
  time: number;
  blocks: MovementBlockConfig[];
};

export const MOVEMENT_LEVEL_CONFIG: Record<number, MovementLevelConfig> = {
  11: {
    prompt: "Meow?",
    answer: "CAT",
    time: 60,
    blocks: [
      { x: 0.15, y: 0.25, value: "C", type: "normal" },
      { x: 0.40, y: 0.55, value: "A", type: "normal" },
      { x: 0.65, y: 0.30, value: "T", type: "normal" },
      { x: 0.80, y: 0.70, value: "c", type: "normal" },
    ],
  },

  12: {
    prompt: "Google",
    answer: "MAP",
    time: 60,
    blocks: [
      { x: 0.15, y: 0.30, value: "M", type: "normal" },
      { x: 0.38, y: 0.60, value: "A", type: "invisible" },
      { x: 0.65, y: 0.25, value: "P", type: "normal" },
      { x: 0.80, y: 0.50, value: "A", type: "invisible" },
    ],
  },

  13: {
    prompt: "The answer is not justabox.",
    answer: "BOX",
    time: 60,
    blocks: [
      { x: 0.15, y: 0.30, value: "B", type: "heavy" },
      { x: 0.40, y: 0.55, value: "O", type: "heavy" },
      { x: 0.65, y: 0.30, value: "X", type: "invisible" },
      { x: 0.80, y: 0.60, value: "A", type: "normal" },
      { x: 0.25, y: 0.75, value: "J", type: "normal" },
    ],
  },

  14: {
    prompt: "Sky is",
    answer: "SKY",
    time: 60,
    blocks: [
      { x: 0.15, y: 0.30, value: "S", type: "invisible" },
      { x: 0.40, y: 0.40, value: "K", type: "glass" },
      { x: 0.65, y: 0.30, value: "Y", type: "invisible" },
      { x: 0.80, y: 0.60, value: "B", type: "normal" },
      { x: 0.65, y: 0.80, value: "L", type: "glass" },
      { x: 0.15, y: 0.80, value: "U", type: "glass" },
      { x: 0.30, y: 0.55, value: "E", type: "normal" },
    ],
  },

  15: {
    prompt: "3 + sqrt(9) * 10 + 90",
    answer: "123",
    time: 60,
    blocks: [
      { x: 0.15, y: 0.25, value: 7, type: "countdown" },
      { x: 0.35, y: 0.55, value: 3, type: "countdown" },
      { x: 0.60, y: 0.30, value: 4, type: "countdown" },
      { x: 0.20, y: 0.85, value: "1", type: "invisible"},
      { x: 0.80, y: 0.60, value: "2", type: "normal" },
    ],
  },

  16: {
    prompt: "Spell lIlIlI",
    answer: "lIlIlI",
    time: 60,
    blocks: [
      { x: 0.15, y: 0.30, value: "l", type: "heavy" },
      { x: 0.40, y: 0.60, value: "I", type: "invisible" },
      { x: 0.65, y: 0.30, value: "l", type: "glass" },
      { x: 0.80, y: 0.60, value: "I", type: "glass" },
      { x: 0.20, y: 0.85, value: "l", type: "invisible" },
      { x: 0.90, y: 0.20, value: "I", type: "heavy" },
    ],
  },

  17: {
    prompt: "Run, rUn, ruN!!",
    answer: "RUNX3",
    time: 60,
    blocks: [
      { x: 0.15, y: 0.30, value: "R", type: "heavy" },
      { x: 0.35, y: 0.45, value: "U", type: "normal" },
      { x: 0.60, y: 0.30, value: "N", type: "heavy" },
      { x: 0.75, y: 0.60, value: "6", type: "countdown" },
      { x: 0.85, y: 0.25, value: "X", type: "invisible" },
    ],
  },

  18: {
    prompt: "I have no more blocks. Just type 1.",
    answer: "ONE",
    time: 60,
    blocks: [
      { x: 0.15, y: 0.30, value: "O", type: "invisible" },
      { x: 0.35, y: 0.55, value: "N", type: "invisible" },
      { x: 0.60, y: 0.30, value: "E", type: "invisible" },
      { x: 0.80, y: 0.60, value: "3", type: "countdown" },
    ],
  },
  19: {
    prompt: "... ... ...!",
    answer: "RED",
    time: 60,
    blocks: [
      { x: 0.18, y: 0.28, value: "A", type: "heavy" },
      { x: 0.40, y: 0.48, value: "D", type: "heavy" },
      { x: 0.62, y: 0.30, value: "E", type: "heavy" },
      { x: 0.78, y: 0.56, value: "R", type: "invisible" },
    ],
  },
  20: {
    prompt: "We are almost running out of time...How many seconds left?",
    answer: "",
    answerMode: "timeLeftFloor",
    time: 60,
    blocks: [
      { x: 0.14, y: 0.28, value: 10, type: "countdown" },
      { x: 0.32, y: 0.48, value: 4, type: "normal" },
      { x: 0.52, y: 0.28, value: 11, type: "countdown" },
      { x: 0.70, y: 0.48, value: 5, type: "countdown" },
      { x: 0.82, y: 0.30, value: 7, type: "countdown" },
    ],
  },
};
