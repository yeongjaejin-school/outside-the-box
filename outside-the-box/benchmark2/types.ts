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
  levelTimerEnd: number;   // ms timestamp; 0 = no active timer
  skips: number;
  levelSubPhase: string;   // reusable per-level sub-state, reset to "" on level change
  guideTarget:  string;    // joined lines — used to detect text changes
  guideReveal:  number;    // characters revealed by the typewriter
  guideCursor:  boolean;   // blinking cursor visibility
}

export interface HitArea {
  x: number;
  y: number;
  w: number;
  h: number;
  action: () => void;
  noCursor?: boolean;   // if true, hovering won't change the cursor to pointer
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
  mouseX:       number;
  mouseY:       number;
  mouseDown:    boolean;
  keysDown:     Set<string>;
  wheelDeltaY:  number;
}
