import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';

const BTN_W = 162;
const BTN_H = 52;
const DOT_R = 5;

let btnX = -1;
let btnY = -1;

export const drawLevel5 = (gc: GameContext) => {
  const { ctx, state, displayFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t = getTheme(state);

  // Initialise button at centre on first entry
  if (btnX < 0) {
    btnX = topBoxX + topBoxWidth  * 0.5 - BTN_W / 2;
    btnY = topBoxY + topBoxHeight * 0.42 - BTN_H / 2;
  }

  // ── Button flees from cursor ──────────────────────────────────────────────
  const btnCX = btnX + BTN_W / 2;
  const btnCY = btnY + BTN_H / 2;
  const dx    = gc.mouseX - btnCX;
  const dy    = gc.mouseY - btnCY;
  const dist  = Math.sqrt(dx * dx + dy * dy);
  const FLEE  = 190;

  if (dist < FLEE && dist > 1) {
    const strength = ((FLEE - dist) / FLEE) * 22;
    btnX -= (dx / dist) * strength;
    btnY -= (dy / dist) * strength;
    const pad = 24;
    btnX = Math.max(topBoxX + pad, Math.min(topBoxX + topBoxWidth  - pad - BTN_W, btnX));
    btnY = Math.max(topBoxY + pad, Math.min(topBoxY + topBoxHeight - pad - BTN_H, btnY));
  }

  // Draw button
  ctx.strokeStyle  = t.stroke;
  ctx.lineWidth    = 3;
  ctx.strokeRect(btnX, btnY, BTN_W, BTN_H);
  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.font         = `bold 22px ${displayFont}`;
  ctx.fillText("CLICK ME", btnX + BTN_W / 2, btnY + BTN_H / 2);

  gc.hitAreas.push({
    x: btnX, y: btnY, w: BTN_W, h: BTN_H,
    action: () => { gc.loseLife(); },
  });

  // ── Hidden target dot ─────────────────────────────────────────────────────
  // Nearly invisible — matches background, larger hit area than visible dot
  const dotCX = topBoxX + topBoxWidth  * 0.87;
  const dotCY = topBoxY + topBoxHeight * 0.76;

  ctx.fillStyle = state.darkMode ? "#1e1e1e" : "#e8e8e8";
  ctx.beginPath();
  ctx.arc(dotCX, dotCY, DOT_R, 0, Math.PI * 2);
  ctx.fill();

  gc.hitAreas.push({
    x: dotCX - 18, y: dotCY - 18, w: 36, h: 36,
    noCursor: true,
    action: () => {
      btnX = -1;  // reset for re-entry
      state.currentLevel  = 6;
      state.levelSubPhase = "";
      state.levelTimerEnd = 0;
      gc.render();
    },
  });
};
