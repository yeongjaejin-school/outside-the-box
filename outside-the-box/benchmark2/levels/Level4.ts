import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

const TIMER_DURATION = 10000; // ms

// Module-level animation frame handle so we never stack multiple loops
let animFrameId = 0;

export const drawLevel4 = (gc: GameContext) => {
  const { ctx, state, displayFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const cx = w / 2;
  const t  = getTheme(state);

  // Start the timer on first entry (or after a reset)
  if (state.levelTimerEnd === 0) {
    state.levelTimerEnd = Date.now() + TIMER_DURATION;
  }

  const remaining = Math.max(0, state.levelTimerEnd - Date.now());
  const seconds   = Math.ceil(remaining / 1000);
  const progress  = remaining / TIMER_DURATION; // 1.0 → 0.0

  // Timer expired — advance to next level
  if (remaining <= 0 && state.currentLevel === 4) {
    cancelAnimationFrame(animFrameId);
    state.levelTimerEnd = 0;
    state.currentLevel  = 5;
    gc.render();
    return;
  }

  // Schedule next frame (cancels any previous to avoid stacking)
  cancelAnimationFrame(animFrameId);
  animFrameId = requestAnimationFrame(() => {
    if (
      state.currentLevel   === 4 &&
      !state.paused         &&
      !state.gameOver       &&
      !state.controlsOpen
    ) {
      gc.render();
    }
  });

  // ── Big countdown number ──
  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.font         = `bold 110px ${displayFont}`;
  ctx.fillText(`${seconds}`, cx, topBoxY + topBoxHeight * 0.36);

  // ── Progress bar ──
  const barW = topBoxWidth * 0.58;
  const barH = 14;
  const barX = cx - barW / 2;
  const barY = topBoxY + topBoxHeight * 0.60;

  // Track
  ctx.strokeStyle = t.divider;
  ctx.lineWidth   = 1;
  ctx.strokeRect(barX, barY, barW, barH);

  // Fill — green → red as time runs out
  const barColor = progress > 0.5
    ? `hsl(120, 70%, 45%)`
    : progress > 0.25
      ? `hsl(${Math.round(progress * 2 * 120)}, 70%, 45%)`
      : `hsl(0, 70%, 45%)`;
  ctx.fillStyle = barColor;
  ctx.fillRect(barX + 1, barY + 1, (barW - 2) * progress, barH - 2);

  // ── Decoy button ──
  const btnW = 220;
  const btnH = 46;
  drawButton(gc, "DO NOT PRESS", cx - btnW / 2, topBoxY + topBoxHeight * 0.74, btnW, btnH, () => {
    gc.loseLife();
  }, 18);
};
