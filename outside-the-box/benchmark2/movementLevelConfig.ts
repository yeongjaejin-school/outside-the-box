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
  time: number;
  blocks: MovementBlockConfig[];
};

export const MOVEMENT_LEVEL_CONFIG: Record<number, MovementLevelConfig> = {
  11: {
    prompt: "Spell CAT in the answer zone.",
    answer: "CAT",
    time: 35,
    blocks: [
      { x: 0.16, y: 0.26, value: "C", type: "normal" },
      { x: 0.31, y: 0.48, value: "A", type: "normal" },
      { x: 0.58, y: 0.36, value: "T", type: "normal" },
      { x: 0.74, y: 0.54, value: "9", type: "normal" },
    ],
  },
  12: {
    prompt: "Find the hidden block and spell MAP.",
    answer: "MAP",
    time: 40,
    blocks: [
      { x: 0.18, y: 0.32, value: "M", type: "normal" },
      { x: 0.42, y: 0.45, value: "A", type: "invisible" },
      { x: 0.64, y: 0.26, value: "P", type: "normal" },
      { x: 0.74, y: 0.56, value: "7", type: "normal" },
    ],
  },
  13: {
    prompt: "Carry the heavy blocks and spell BOX.",
    answer: "BOX",
    time: 45,
    blocks: [
      { x: 0.16, y: 0.30, value: "B", type: "heavy" },
      { x: 0.36, y: 0.50, value: "O", type: "heavy" },
      { x: 0.64, y: 0.30, value: "X", type: "normal" },
      { x: 0.78, y: 0.52, value: "L", type: "normal" },
    ],
  },
  14: {
    prompt: "Use the fragile block only once to spell SKY.",
    answer: "SKY",
    time: 40,
    blocks: [
      { x: 0.18, y: 0.32, value: "S", type: "glass" },
      { x: 0.42, y: 0.42, value: "K", type: "normal" },
      { x: 0.64, y: 0.30, value: "Y", type: "normal" },
      { x: 0.74, y: 0.56, value: "2", type: "normal" },
    ],
  },
  15: {
    prompt: "Hold the orange countdown blocks and spell 123.",
    answer: "123",
    time: 32,
    blocks: [
      { x: 0.18, y: 0.26, value: 1, type: "countdown" },
      { x: 0.38, y: 0.48, value: 2, type: "countdown" },
      { x: 0.60, y: 0.30, value: 3, type: "countdown" },
      { x: 0.78, y: 0.52, value: "A", type: "normal" },
    ],
  },
  16: {
    prompt: "Spell HID using mixed block types.",
    answer: "HID",
    time: 42,
    blocks: [
      { x: 0.16, y: 0.28, value: "H", type: "heavy" },
      { x: 0.42, y: 0.52, value: "I", type: "invisible" },
      { x: 0.66, y: 0.30, value: "D", type: "glass" },
      { x: 0.78, y: 0.54, value: "8", type: "normal" },
    ],
  },
  17: {
    prompt: "Keep the countdown safe and spell RUN.",
    answer: "RUN",
    time: 38,
    blocks: [
      { x: 0.16, y: 0.28, value: "R", type: "normal" },
      { x: 0.38, y: 0.42, value: "U", type: "countdown" },
      { x: 0.62, y: 0.30, value: "N", type: "normal" },
      { x: 0.76, y: 0.56, value: "4", type: "countdown" },
    ],
  },
  18: {
    prompt: "Spell FOG and test the hidden glass block.",
    answer: "FOG",
    time: 42,
    blocks: [
      { x: 0.14, y: 0.30, value: "F", type: "normal" },
      { x: 0.36, y: 0.48, value: "O", type: "glass" },
      { x: 0.62, y: 0.30, value: "G", type: "invisible" },
      { x: 0.78, y: 0.56, value: "6", type: "normal" },
    ],
  },
  19: {
    prompt: "Spell 908 before the timer gets tight.",
    answer: "908",
    time: 34,
    blocks: [
      { x: 0.18, y: 0.28, value: 9, type: "countdown" },
      { x: 0.40, y: 0.48, value: 0, type: "normal" },
      { x: 0.62, y: 0.30, value: 8, type: "heavy" },
      { x: 0.78, y: 0.56, value: "B", type: "normal" },
    ],
  },
  20: {
    prompt: "Final playtest: spell MIX with every block family present.",
    answer: "MIX",
    time: 48,
    blocks: [
      { x: 0.14, y: 0.28, value: "M", type: "normal" },
      { x: 0.32, y: 0.48, value: "I", type: "invisible" },
      { x: 0.52, y: 0.28, value: "X", type: "glass" },
      { x: 0.70, y: 0.48, value: 5, type: "countdown" },
      { x: 0.82, y: 0.30, value: "H", type: "heavy" },
    ],
  },
};
