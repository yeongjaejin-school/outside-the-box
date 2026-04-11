// Level 26 — The Dark Room
// The box goes black. There is a hidden light switch (invisible at first).
// After 4 seconds a very faint glow pulses around it.
// A FAKE light switch is painted on the wall — clicking it loses a life.
// Clicking the real switch advances.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';

let enteredAt   = 0;
let switchX     = 0;
let switchY     = 0;
let fakeSX      = 0;
let fakeSY      = 0;
let glowPhase   = 0;
let animId26    = 0;
let lastT26     = 0;

function placeSwitch(ox: number, oy: number, cw: number, ch: number) {
  // Real switch: a pseudo-random but fixed position deep in a corner
  switchX = ox + cw * 0.72;
  switchY = oy + ch * 0.61;
  // Fake switch: visually obvious, on the left wall
  fakeSX  = ox + cw * 0.14;
  fakeSY  = oy + ch * 0.42;
}

export const drawLevel26 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  if (state.levelSubPhase !== "active" && state.levelSubPhase !== "lit") {
    placeSwitch(topBoxX, topBoxY, topBoxWidth, topBoxHeight);
    enteredAt  = Date.now();
    glowPhase  = 0;
    lastT26    = 0;
    state.levelSubPhase = "active";
  }

  if (state.levelSubPhase === "lit") {
    cancelAnimationFrame(animId26);
    // Lights on — normal room revealed
    ctx.fillStyle = state.darkMode ? "#1a1a1a" : "#f0ece0";
    ctx.fillRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);

    ctx.fillStyle    = t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.font         = `bold 28px ${displayFont}`;
    ctx.fillText("Ah. There it is.", cx, topBoxY + topBoxHeight * 0.36);
    ctx.font      = `16px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText("It was in the corner the whole time.", cx, topBoxY + topBoxHeight * 0.50);
    ctx.font      = `12px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText("The obvious switch was a suggestion. The real one never advertises itself.", cx, topBoxY + topBoxHeight * 0.62);

    gc.hitAreas.push({
      x: topBoxX, y: topBoxY, w: topBoxWidth, h: topBoxHeight,
      action: () => {
        state.currentLevel  = 27;
        state.levelSubPhase = "";
        gc.render();
      },
    });
    ctx.font      = `11px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText("[ click to continue ]", cx, topBoxY + topBoxHeight * 0.78);
    return;
  }

  const elapsed = (Date.now() - enteredAt) / 1000;

  // ── Black room ─────────────────────────────────────────────────────────────
  ctx.fillStyle = "#000";
  ctx.fillRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);

  // ── Fake switch (visible even in dark — it's "glow-in-the-dark" labelled) ───
  const fsW = 28, fsH = 44;
  ctx.strokeStyle = "rgba(180,180,180,0.35)";
  ctx.lineWidth   = 1;
  ctx.strokeRect(fakeSX - fsW / 2, fakeSY - fsH / 2, fsW, fsH);
  // Toggle bump
  ctx.fillStyle = "rgba(160,160,160,0.25)";
  ctx.fillRect(fakeSX - 6, fakeSY - 8, 12, 16);
  ctx.fillStyle    = "rgba(120,120,120,0.3)";
  ctx.font         = `8px sans-serif`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("ON", fakeSX, fakeSY + 20);

  gc.hitAreas.push({
    x: fakeSX - fsW / 2, y: fakeSY - fsH / 2, w: fsW, h: fsH,
    action: () => { gc.loseLife(); },
  });

  // ── Real switch — invisible initially, then faint glow after 4s ──────────────
  const SW = 22;
  const SH = 36;

  if (elapsed > 4) {
    const pulse = 0.04 + 0.06 * Math.sin(glowPhase);
    ctx.fillStyle = `rgba(255, 220, 120, ${pulse})`;
    ctx.beginPath();
    ctx.arc(switchX, switchY, 28, 0, Math.PI * 2);
    ctx.fill();
  }

  gc.hitAreas.push({
    x: switchX - SW / 2, y: switchY - SH / 2, w: SW, h: SH,
    noCursor: true,
    action: () => {
      cancelAnimationFrame(animId26);
      state.levelSubPhase = "lit";
      gc.render();
    },
  });

  // ── Tip text (very faint, appears after 8s) ──────────────────────────────────
  if (elapsed > 8) {
    ctx.fillStyle    = "rgba(255,255,255,0.08)";
    ctx.font         = `11px sans-serif`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("the obvious one is never the right one", cx, topBoxY + topBoxHeight * 0.92);
  }

  // ── Animation loop ─────────────────────────────────────────────────────────
  cancelAnimationFrame(animId26);
  if (state.levelSubPhase !== "active") return;

  animId26 = requestAnimationFrame((ts: number) => {
    if (gc.state.currentLevel !== 26 || gc.state.currentScreen !== "level") return;
    const dt = lastT26 ? Math.min((ts - lastT26) / 1000, 0.05) : 0.016;
    lastT26  = ts;
    glowPhase += dt * 2.5;
    gc.render();
  });
};
