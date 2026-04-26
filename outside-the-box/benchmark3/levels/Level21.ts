import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';
import Vec2            from '../../../Wolfie2D/DataTypes/Vec2';
import StateMachine    from '../../../Wolfie2D/DataTypes/State/StateMachine';
import State           from '../../../Wolfie2D/DataTypes/State/State';
import GameEvent       from '../../../Wolfie2D/Events/GameEvent';

// ── Constants ─────────────────────────────────────────────────────────────────
const PLAYER_H    = 0.18;   // player paddle height (fraction of court)
const FRODRICK_H  = 0.46;   // Frodrick's paddle — absurdly long
const PADDLE_W    = 0.018;
const BALL_R      = 0.013;
const PLAYER_LEFT = 0.025;
const AI_RIGHT    = 0.975;
const SPEED_INIT  = 0.48;
const SPEED_MAX   = 0.95;
const PLAYER_SPEED = 1.1;
const FRODRICK_SPEED = 4.8;  // near-instant tracking — essentially unbeatable
const WIN_SCORE   = 3;

// ── Mouse-hold tracking (module-level, added once) ────────────────────────────
let frodMouseDown = false;
let frodListenersAdded = false;
function ensureFrodListeners() {
  if (frodListenersAdded) return;
  frodListenersAdded = true;
  document.addEventListener('mousedown', (e) => { if (e.button === 0) frodMouseDown = true; });
  document.addEventListener('mouseup',   (e) => { if (e.button === 0) frodMouseDown = false; });
}

// ── Wolfie2D AI data ──────────────────────────────────────────────────────────
interface FrodrickData {
  ballPos: Vec2;
  ballVel: Vec2;
  aiY:     number;
  frozen:  boolean;   // true when player is holding the paddle
}

// ── Wolfie2D States ───────────────────────────────────────────────────────────

/** Ball heading away — Frodrick drifts back to center */
class FrodrickIdleState extends State {
  onEnter(_o: Record<string, any>): void {}
  onExit():  Record<string, any> { return {}; }
  handleInput(_e: GameEvent): void {}

  update(dt: number): void {
    const d = (this.parent as FrodrickAI).data;
    if (d.frozen) return;
    const diff = 0.5 - d.aiY;
    d.aiY += Math.sign(diff) * Math.min(Math.abs(diff) * 6 * dt, FRODRICK_SPEED * dt);
    d.aiY  = Math.max(FRODRICK_H / 2, Math.min(1 - FRODRICK_H / 2, d.aiY));
    if (d.ballVel.x > 0) this.finished('chase');
  }
}

/** Ball heading toward Frodrick — perfect tracking, no delay, no noise */
class FrodrickChaseState extends State {
  onEnter(_o: Record<string, any>): void {}
  onExit():  Record<string, any> { return {}; }
  handleInput(_e: GameEvent): void {}

  update(dt: number): void {
    const d = (this.parent as FrodrickAI).data;
    if (d.frozen) return;
    // Perfect: directly track ball Y every frame
    const diff    = d.ballPos.y - d.aiY;
    const maxStep = FRODRICK_SPEED * dt;
    d.aiY += Math.sign(diff) * Math.min(Math.abs(diff), maxStep);
    d.aiY  = Math.max(FRODRICK_H / 2, Math.min(1 - FRODRICK_H / 2, d.aiY));
    if (d.ballVel.x <= 0) this.finished('idle');
  }
}

class FrodrickAI extends StateMachine {
  data: FrodrickData = {
    ballPos: new Vec2(0.5, 0.5),
    ballVel: new Vec2(0, 0),
    aiY:     0.5,
    frozen:  false,
  };
  constructor() {
    super();
    this.addState('idle',  new FrodrickIdleState(this));
    this.addState('chase', new FrodrickChaseState(this));
    this.initialize('idle', {});
  }
  reset() {
    this.data.aiY    = 0.5;
    this.data.frozen = false;
    this.initialize('idle', {});
  }
}

// ── Game state ────────────────────────────────────────────────────────────────
let animId21     = 0;
let lastTime21   = 0;
let ballPos21    = new Vec2(0.5, 0.5);
let ballVel21    = new Vec2(0, 0);
let playerY21    = 0.5;
let playerScore21 = 0;
let aiScore21    = 0;
let rallying21   = false;
let frodrick     = new FrodrickAI();

function resetPong21() {
  ballPos21     = new Vec2(0.5, 0.5);
  ballVel21     = new Vec2(0, 0);
  playerY21     = 0.5;
  playerScore21 = 0;
  aiScore21     = 0;
  rallying21    = false;
  lastTime21    = 0;
  frodrick      = new FrodrickAI();
}

function serve21(towardAI: boolean) {
  ballPos21 = new Vec2(0.5, 0.5);
  const angle = (Math.random() - 0.5) * 0.6;
  const dir   = towardAI ? 1 : -1;
  ballVel21 = new Vec2(
    dir * SPEED_INIT * Math.cos(angle),
    SPEED_INIT * Math.sin(angle),
  );
  rallying21 = true;
}

// ── Draw function ─────────────────────────────────────────────────────────────
export const drawLevel21 = (gc: GameContext) => {
  ensureFrodListeners();

  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = w / 2;

  if (state.levelSubPhase !== 'active' && state.levelSubPhase !== 'win') {
    resetPong21();
    state.levelSubPhase = 'active';
  }

  const cw = topBoxWidth;
  const ch = topBoxHeight;
  const ox = topBoxX;
  const oy = topBoxY;

  // ── Win screen ─────────────────────────────────────────────────────────────
  if (state.levelSubPhase === 'win') {
    cancelAnimationFrame(animId21);
    ctx.fillStyle    = t.fg;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.font         = `bold 44px ${displayFont}`;
    ctx.fillText('YOU CHEATED!', cx, oy + ch * 0.30);
    ctx.font      = `22px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText('Frodrick never saw it coming.', cx, oy + ch * 0.46);
    ctx.font      = `16px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText(`${playerScore21}  —  ${aiScore21}`, cx, oy + ch * 0.56);
    drawButton(gc, 'CONTINUE  →', cx - 100, oy + ch * 0.68, 200, 48, () => {
      state.currentLevel  = 22;
      state.levelSubPhase = '';
      gc.render();
    });
    return;
  }

  // ── Court centre line ──────────────────────────────────────────────────────
  ctx.strokeStyle = t.divider;
  ctx.lineWidth   = 2;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(ox + cw / 2, oy + 6);
  ctx.lineTo(ox + cw / 2, oy + ch - 6);
  ctx.stroke();
  ctx.setLineDash([]);

  // ── Scores ─────────────────────────────────────────────────────────────────
  ctx.fillStyle    = t.fgDim;
  ctx.textAlign    = 'center';
  ctx.textBaseline = 'top';
  ctx.font         = `bold 40px ${displayFont}`;
  ctx.fillText(`${playerScore21}`, ox + cw * 0.26, oy + 10);
  ctx.fillText(`${aiScore21}`,     ox + cw * 0.74, oy + 10);
  ctx.font = `11px ${bodyFont}`;
  ctx.fillText('YOU',      ox + cw * 0.26, oy + 58);
  ctx.fillText('Frodrick', ox + cw * 0.74, oy + 58);

  // ── Control hint ──────────────────────────────────────────────────────────
  ctx.fillStyle    = t.fgDim;
  ctx.font         = `11px ${bodyFont}`;
  ctx.textAlign    = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('W/S or ↑/↓ to move   |   SPACE to serve', cx, oy + ch - 6);

  // ── Serve prompt ──────────────────────────────────────────────────────────
  if (!rallying21) {
    ctx.fillStyle    = t.fg;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'middle';
    ctx.font         = `bold 19px ${displayFont}`;
    ctx.fillText('PRESS SPACE TO SERVE', cx, oy + ch * 0.5);
  }

  // ── Paddle dimensions in pixels ───────────────────────────────────────────
  const pPxH  = PLAYER_H   * ch;
  const fPxH  = FRODRICK_H * ch;
  const pPxW  = PADDLE_W   * cw;
  const bPxR  = BALL_R     * cw;

  // Frodrick's paddle pixel bounds (for hover detection)
  const frodPxX = ox + (AI_RIGHT - PADDLE_W) * cw;
  const frodPxY = oy + (frodrick.data.aiY - FRODRICK_H / 2) * ch;

  // Is the player holding their mouse down on Frodrick's paddle?
  const overFrodrick = gc.mouseX >= frodPxX && gc.mouseX <= frodPxX + pPxW &&
                       gc.mouseY >= frodPxY && gc.mouseY <= frodPxY + fPxH;
  frodrick.data.frozen = frodMouseDown && overFrodrick;

  // ── Draw player paddle ────────────────────────────────────────────────────
  ctx.fillStyle = t.fg;
  ctx.fillRect(ox + PLAYER_LEFT * cw, oy + (playerY21 - PLAYER_H / 2) * ch, pPxW, pPxH);

  // ── Draw Frodrick's paddle (red tint when frozen) ─────────────────────────
  ctx.fillStyle = frodrick.data.frozen ? '#dd3333' : t.fg;
  ctx.fillRect(frodPxX, frodPxY, pPxW, fPxH);

  // Cursor hint: pointer over Frodrick's paddle
  gc.hitAreas.push({
    x: frodPxX, y: frodPxY, w: pPxW, h: fPxH,
    action: () => {},   // no click action — hold is what matters
  });

  // ── Ball ──────────────────────────────────────────────────────────────────
  if (rallying21) {
    ctx.fillStyle = t.fg;
    ctx.beginPath();
    ctx.arc(ox + ballPos21.x * cw, oy + ballPos21.y * ch, bPxR, 0, Math.PI * 2);
    ctx.fill();
  }

  // ── RAF / physics loop ────────────────────────────────────────────────────
  cancelAnimationFrame(animId21);
  if (state.levelSubPhase !== 'active') return;

  animId21 = requestAnimationFrame((ts: number) => {
    if (gc.state.currentLevel !== 21 || gc.state.currentScreen !== 'level') return;

    const dt = lastTime21 ? Math.min((ts - lastTime21) / 1000, 0.05) : 0.016;
    lastTime21 = ts;

    // Serve
    if (!rallying21) {
      if (gc.keysDown.has(' ') || gc.keysDown.has('Spacebar')) serve21(true);
      gc.render();
      return;
    }

    // Player movement
    const up   = gc.keysDown.has('w') || gc.keysDown.has('W') || gc.keysDown.has('ArrowUp');
    const down = gc.keysDown.has('s') || gc.keysDown.has('S') || gc.keysDown.has('ArrowDown');
    if (up)   playerY21 -= PLAYER_SPEED * dt;
    if (down) playerY21 += PLAYER_SPEED * dt;
    playerY21 = Math.max(PLAYER_H / 2, Math.min(1 - PLAYER_H / 2, playerY21));

    // Ball physics
    ballPos21 = new Vec2(
      ballPos21.x + ballVel21.x * dt,
      ballPos21.y + ballVel21.y * dt,
    );

    // Walls
    if (ballPos21.y - BALL_R < 0) {
      ballPos21 = new Vec2(ballPos21.x, BALL_R);
      ballVel21 = new Vec2(ballVel21.x, Math.abs(ballVel21.y));
    }
    if (ballPos21.y + BALL_R > 1) {
      ballPos21 = new Vec2(ballPos21.x, 1 - BALL_R);
      ballVel21 = new Vec2(ballVel21.x, -Math.abs(ballVel21.y));
    }

    // Player paddle collision
    const playerRight = PLAYER_LEFT + PADDLE_W;
    if (ballVel21.x < 0 &&
        ballPos21.x - BALL_R < playerRight &&
        ballPos21.x + BALL_R > PLAYER_LEFT &&
        Math.abs(ballPos21.y - playerY21) < PLAYER_H / 2 + BALL_R) {
      const newSpeed = Math.min(SPEED_MAX, Math.abs(ballVel21.x) * 1.05);
      const deflect  = ((ballPos21.y - playerY21) / (PLAYER_H / 2)) * 0.65;
      ballPos21 = new Vec2(playerRight + BALL_R, ballPos21.y);
      ballVel21 = new Vec2(newSpeed, deflect);
    }

    // Frodrick paddle collision
    const aiLeft = AI_RIGHT - PADDLE_W;
    if (ballVel21.x > 0 &&
        ballPos21.x + BALL_R > aiLeft &&
        ballPos21.x - BALL_R < AI_RIGHT &&
        Math.abs(ballPos21.y - frodrick.data.aiY) < FRODRICK_H / 2 + BALL_R) {
      const newSpeed = Math.min(SPEED_MAX, Math.abs(ballVel21.x) * 1.05);
      const deflect  = ((ballPos21.y - frodrick.data.aiY) / (FRODRICK_H / 2)) * 0.65;
      ballPos21 = new Vec2(aiLeft - BALL_R, ballPos21.y);
      ballVel21 = new Vec2(-newSpeed, deflect);
    }

    // ── Wolfie2D StateMachine drives Frodrick ────────────────────────────────
    frodrick.data.ballPos = ballPos21;
    frodrick.data.ballVel = ballVel21;
    // Recheck freeze with latest paddle position
    const fPxY2 = oy + (frodrick.data.aiY - FRODRICK_H / 2) * (topBoxHeight);
    const fPxX2 = topBoxX + (AI_RIGHT - PADDLE_W) * topBoxWidth;
    const fPxW2 = PADDLE_W * topBoxWidth;
    const fPxH2 = FRODRICK_H * topBoxHeight;
    const over2 = gc.mouseX >= fPxX2 && gc.mouseX <= fPxX2 + fPxW2 &&
                  gc.mouseY >= fPxY2 && gc.mouseY <= fPxY2 + fPxH2;
    frodrick.data.frozen = frodMouseDown && over2;
    frodrick.update(dt);

    // Scoring
    if (ballPos21.x < 0) {
      aiScore21++;
      rallying21 = false;
      if (aiScore21 >= WIN_SCORE) {
        gc.state.levelSubPhase = '';
        gc.loseLife();
        return;
      }
    }
    if (ballPos21.x > 1) {
      playerScore21++;
      rallying21 = false;
      if (playerScore21 >= WIN_SCORE) {
        gc.state.levelSubPhase = 'win';
      }
    }

    gc.render();
  });
};
