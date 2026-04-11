export type GameScreen = "mainmenu" | "levelselect" | "level";

export interface GameState {
  currentScreen: GameScreen;
  currentLevel: number;
  lives: number;
  paused: boolean;
  controlsOpen: boolean;
  darkMode: boolean;
  storyTitle: string;
  storyLines: string[];
  playerName: string;
  nameInput: string;
  nameFocused: boolean;
  playMode: "play" | "levelselect";
  gameOver: boolean;
}

export interface HitArea {
  x: number;
  y: number;
  w: number;
  h: number;
  action: () => void;
}

export interface BlockEntity {
  x: number;
  y: number;
  size: number;
  color: string;
  value: string;
  type: string;
  held: boolean;
  draw: (ctx: CanvasRenderingContext2D) => void;
  collidesWithRect: (x: number, y: number, width: number, height: number) => boolean;
  moveTo: (x: number, y: number) => void;
  setHeld: (held: boolean) => void;
}

export interface AnswerSlotEntity {
  x: number;
  y: number;
  size: number;
  block: BlockEntity | null;
}

export interface PlayerEntity {
  x: number;
  y: number;
  width: number;
  height: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  setBounds: (minX: number, minY: number, maxX: number, maxY: number) => void;
  setBlocks: (blocks: BlockEntity[]) => void;
  setAnswerSlots: (slots: AnswerSlotEntity[]) => void;
  resetPosition: (x: number, y: number) => void;
  getFacingDirection: () => "up" | "down" | "left" | "right";
}

export interface MovementArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface GameContext {
  ctx: CanvasRenderingContext2D;
  state: GameState;
  hitAreas: HitArea[];
  render: () => void;
  loseLife: () => void;
  resetPlayerName: () => void;
  submitMovementAnswer: () => void;
  getCurrentAnswer: () => string;
  displayFont: string;
  bodyFont: string;
  logo: HTMLImageElement;
  gameplayFrame: HTMLImageElement;
  logoLoaded: boolean;
  gameplayFrameLoaded: boolean;
  player: PlayerEntity;
  blocks: BlockEntity[];
  answerSlots: AnswerSlotEntity[];
  movementArea: MovementArea;
  quizAnswer: string;
  timeLeftSeconds: number;
}
