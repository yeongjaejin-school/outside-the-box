import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';
import Vec2            from '../../../Wolfie2D/DataTypes/Vec2';

// ── Constants ─────────────────────────────────────────────────────────────────
const PADDLE_H      = 0.22;   // fraction of court height
const PADDLE_W      = 0.018;  // fraction of court width
const BALL_R        = 0.013;  // fraction of court width
const PLAYER_LEFT   = 0.025;  // left edge of player paddle (normalised)
const AI_RIGHT      = 0.975;  // right edge of AI paddle (normalised)
const SPEED_INIT    = 0.48;   // initial ball speed (court-widths / sec)
const SPEED_MAX     = 0.95;
const PLAYER_SPEED  = 1.1;    // court-heights / sec for keyboard movement
const AI_SPEED      = 0.52;   // max AI movement per sec (reduced for beatable)
const AI_LERP       = 6.0;    // AI smoothing (lerp factor per second)
const WIN_SCORE     = 3;

// ── Game state ────────────────────────────────────────────────────────────────
let animId6      = 0;
let lastTime     = 0;
let ballPos      = new Vec2(0.5, 0.5);
let ballVel      = new Vec2(0, 0);
let playerY      = 0.5;
let aiY          = 0.5;
let aiTargetY    = 0.5;
let playerScore  = 0;
let aiScore      = 0;
let rallying     = false;

function resetPong() {
  ballPos     = new Vec2(0.5, 0.5);
  ballVel     = new Vec2(0, 0);
  playerY     = 0.5;
  aiY         = 0.5;
  aiTargetY   = 0.5;
  playerScore = 0;
  aiScore     = 0;
  rallying    = false;
  lastTime    = 0;
}

function serve(towardAI: boolean) {
  ballPos = new Vec2(0.5, 0.5);
  const angle = (Math.random() - 0.5) * 0.6;
  const dir   = towardAI ? 1 : -1;
  ballVel = new Vec2(
    dir * SPEED_INIT * Math.cos(angle),
    SPEED_INIT * Math.sin(angle),
  );
  rallying = true;
}

export const drawLevel6 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = w / 2;

  // ── Initialise on fresh entry ─────────────────────────────────────────────
  if (state.levelSubPhase !== "active" && state.levelSubPhase !== "win") {
    resetPong();
    state.levelSubPhase = "active";
  }

  const cw = topBoxWidth;
  const ch = topBoxHeight;
  const ox = topBoxX;
  const oy = topBoxY;

  // ── Win screen ─────────────────────────────────────────────────────────────
  if (state.levelSubPhase === "win") {
    cancelAnimationFrame(animId6);
    ctx.fillStyle    = t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.font         = `bold 44px ${displayFont}`;
    ctx.fillText("YOU WIN!", cx, oy + ch * 0.34);
    ctx.font      = `24px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText(`${playerScore}  —  ${aiScore}`, cx, oy + ch * 0.50);
    drawButton(gc, "CONTINUE  →", cx - 100, oy + ch * 0.65, 200, 48, () => {
      state.currentLevel  = 7;
      state.levelSubPhase = "";
      gc.render();
    });
    return;
  }

  // ── Court decorations ─────────────────────────────────────────────────────
  ctx.strokeStyle = t.divider;
  ctx.lineWidth   = 2;
  ctx.setLineDash([10, 10]);
  ctx.beginPath();
  ctx.moveTo(ox + cw / 2, oy + 6);
  ctx.lineTo(ox + cw / 2, oy + ch - 6);
  ctx.stroke();
  ctx.setLineDash([]);

  // Scores
  ctx.fillStyle    = t.fgDim;
  ctx.textAlign    = "center";
  ctx.textBaseline = "top";
  ctx.font         = `bold 40px ${displayFont}`;
  ctx.fillText(`${playerScore}`, ox + cw * 0.26, oy + 10);
  ctx.fillText(`${aiScore}`,     ox + cw * 0.74, oy + 10);
  ctx.font = `11px ${bodyFont}`;
  ctx.fillText("YOU",  ox + cw * 0.26, oy + 58);
  ctx.fillText("A.I.", ox + cw * 0.74, oy + 58);

  // ── Control hint ──────────────────────────────────────────────────────────
  ctx.fillStyle    = t.fgDim;
  ctx.font         = `11px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "bottom";
  ctx.fillText("W/S or ↑/↓ to move   |   SPACE to serve", cx, oy + ch - 6);

  // ── Serve prompt ──────────────────────────────────────────────────────────
  if (!rallying) {
    ctx.fillStyle    = t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.font         = `bold 19px ${displayFont}`;
    ctx.fillText("PRESS SPACE TO SERVE", cx, oy + ch * 0.5);
  }

  // ── Paddles ───────────────────────────────────────────────────────────────
  const pPxH = PADDLE_H * ch;
  const pPxW = PADDLE_W * cw;
  const bPxR = BALL_R   * cw;

  ctx.fillStyle = t.fg;
  ctx.fillRect(ox + PLAYER_LEFT * cw, oy + (playerY - PADDLE_H / 2) * ch, pPxW, pPxH);
  ctx.fillRect(ox + (AI_RIGHT - PADDLE_W) * cw, oy + (aiY - PADDLE_H / 2) * ch, pPxW, pPxH);

  // ── Ball ──────────────────────────────────────────────────────────────────
  if (rallying) {
    ctx.beginPath();
    ctx.arc(ox + ballPos.x * cw, oy + ballPos.y * ch, bPxR, 0, Math.PI * 2);
    ctx.fill();
  }

  // ── Physics loop ──────────────────────────────────────────────────────────
  cancelAnimationFrame(animId6);
  if (state.levelSubPhase !== "active") return;

  animId6 = requestAnimationFrame((ts: number) => {
    if (gc.state.currentLevel !== 6 || gc.state.currentScreen !== "level") return;

    const dt = lastTime ? Math.min((ts - lastTime) / 1000, 0.05) : 0.016;
    lastTime = ts;

    // Spacebar serve
    if (!rallying) {
      if (gc.keysDown.has(' ') || gc.keysDown.has('Spacebar')) {
        serve(true);
      }
      gc.render();
      return;
    }

    // ── Player keyboard movement ─────────────────────────────────────────
    const up   = gc.keysDown.has('w') || gc.keysDown.has('W') || gc.keysDown.has('ArrowUp');
    const down = gc.keysDown.has('s') || gc.keysDown.has('S') || gc.keysDown.has('ArrowDown');
    if (up)   playerY -= PLAYER_SPEED * dt;
    if (down) playerY += PLAYER_SPEED * dt;
    playerY = Math.max(PADDLE_H / 2, Math.min(1 - PADDLE_H / 2, playerY));

    // ── Ball physics (Vec2) ──────────────────────────────────────────────
    ballPos = new Vec2(
      ballPos.x + ballVel.x * dt,
      ballPos.y + ballVel.y * dt,
    );

    // Top / bottom walls
    if (ballPos.y - BALL_R < 0) {
      ballPos = new Vec2(ballPos.x, BALL_R);
      ballVel = new Vec2(ballVel.x, Math.abs(ballVel.y));
    }
    if (ballPos.y + BALL_R > 1) {
      ballPos = new Vec2(ballPos.x, 1 - BALL_R);
      ballVel = new Vec2(ballVel.x, -Math.abs(ballVel.y));
    }

    // Player paddle — right face at PLAYER_LEFT + PADDLE_W
    const playerRight = PLAYER_LEFT + PADDLE_W;
    if (ballVel.x < 0 &&
        ballPos.x - BALL_R < playerRight &&
        ballPos.x + BALL_R > PLAYER_LEFT &&
        Math.abs(ballPos.y - playerY) < PADDLE_H / 2 + BALL_R) {
      const newSpeed = Math.min(SPEED_MAX, Math.abs(ballVel.x) * 1.05);
      const deflect  = ((ballPos.y - playerY) / (PADDLE_H / 2)) * 0.65;
      ballPos = new Vec2(playerRight + BALL_R, ballPos.y);
      ballVel = new Vec2(newSpeed, deflect);
    }

    // AI paddle — left face at AI_RIGHT - PADDLE_W
    const aiLeft = AI_RIGHT - PADDLE_W;
    if (ballVel.x > 0 &&
        ballPos.x + BALL_R > aiLeft &&
        ballPos.x - BALL_R < AI_RIGHT &&
        Math.abs(ballPos.y - aiY) < PADDLE_H / 2 + BALL_R) {
      const newSpeed = Math.min(SPEED_MAX, Math.abs(ballVel.x) * 1.05);
      const deflect  = ((ballPos.y - aiY) / (PADDLE_H / 2)) * 0.65;
      ballPos = new Vec2(aiLeft - BALL_R, ballPos.y);
      ballVel = new Vec2(-newSpeed, deflect);
    }

    // AI tracking — smoothly lerps toward target with imperfection
    // Only update target when ball is heading toward AI
    if (ballVel.x > 0) {
      aiTargetY = ballPos.y + (Math.random() - 0.5) * 0.10;
    }
    const diff = aiTargetY - aiY;
    const maxStep = AI_SPEED * dt;
    aiY += Math.sign(diff) * Math.min(Math.abs(diff) * AI_LERP * dt, maxStep);
    aiY  = Math.max(PADDLE_H / 2, Math.min(1 - PADDLE_H / 2, aiY));

    // Scoring
    if (ballPos.x < 0) {
      aiScore++;
      rallying = false;
      if (aiScore >= WIN_SCORE) {
        gc.state.levelSubPhase = "";
        gc.loseLife();
        return;
      }
    }
    if (ballPos.x > 1) {
      playerScore++;
      rallying = false;
      if (playerScore >= WIN_SCORE) {
        gc.state.levelSubPhase = "win";
      }
    }

    gc.render();
  });
};
