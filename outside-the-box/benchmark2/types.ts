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

export interface PlayerEntity {
  x: number;
  y: number;
  width: number;
  height: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
  setBounds: (minX: number, minY: number, maxX: number, maxY: number) => void;
  resetPosition: (x: number, y: number) => void;
}

export interface GameContext {
  ctx: CanvasRenderingContext2D;
  state: GameState;
  hitAreas: HitArea[];
  render: () => void;
  loseLife: () => void;
  resetPlayerName: () => void;
  displayFont: string;
  bodyFont: string;
  logo: HTMLImageElement;
  gameplayFrame: HTMLImageElement;
  logoLoaded: boolean;
  gameplayFrameLoaded: boolean;
  player: PlayerEntity;
}
