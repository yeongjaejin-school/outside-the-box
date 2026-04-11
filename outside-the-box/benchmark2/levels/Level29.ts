// Level 29 — The Treasure Map
// A stylised map with an X that slowly drifts every few seconds (Vec2).
// Player moves a crosshair with WASD / arrow keys.
// When crosshair is within 18px of the X, DIG button activates.
// There is also a FAKE X visible — clicking it loses a life.
// Digging on the real X: advances.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import Vec2            from '../../../Wolfie2D/DataTypes/Vec2';

const MOVE_SPEED = 140;  // px / sec
const DRIFT_INTERVAL = 2200; // ms between drifts
const DRIFT_MAG      = 18;   // max px per drift
const HIT_RADIUS     = 22;

let crosshair  = new Vec2(0, 0);
let realX_pos  = new Vec2(0, 0);
let lastDrift  = 0;
let animId29   = 0;
let lastT29    = 0;
let initd29    = false;

function init29(ox: number, oy: number, cw: number, ch: number) {
  crosshair = new Vec2(ox + cw * 0.2, oy + ch * 0.5);
  realX_pos = new Vec2(ox + cw * 0.68, oy + ch * 0.52);
  lastDrift = Date.now();
  initd29   = true;
}

export const drawLevel29 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  if (state.levelSubPhase !== "active" && state.levelSubPhase !== "won") {
    init29(topBoxX, topBoxY, topBoxWidth, topBoxHeight * 0.86);
    state.levelSubPhase = "active";
  }

  const cw = topBoxWidth;
  const ch = topBoxHeight * 0.86;
  const ox = topBoxX;
  const oy = topBoxY;

  // ── Win screen ────────────────────────────────────────────────────────────────
  if (state.levelSubPhase === "won") {
    cancelAnimationFrame(animId29);
    ctx.fillStyle    = t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.font         = `bold 28px ${displayFont}`;
    ctx.fillText("X marks the spot.", cx, oy + ch * 0.36);
    ctx.font      = `16px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText("It took patience. Most things do.", cx, oy + ch * 0.50);
    gc.hitAreas.push({
      x: ox, y: oy, w: cw, h: ch,
      action: () => {
        initd29 = false;
        state.currentLevel  = 30;
        state.levelSubPhase = "";
        gc.render();
      },
    });
    ctx.font      = `11px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText("[ click to continue ]", cx, oy + ch * 0.70);
    return;
  }

  // ── Map background (parchment) ────────────────────────────────────────────────
  ctx.fillStyle = state.darkMode ? "#2a1f0e" : "#e8d9a0";
  ctx.fillRect(ox, oy, cw, ch);

  // Texture — irregular edge lines
  ctx.strokeStyle = state.darkMode ? "#3a2a10" : "#c8b870";
  ctx.lineWidth   = 8;
  ctx.strokeRect(ox, oy, cw, ch);

  // Decorative map features
  const drawIsland = (x: number, y: number, w: number, h: number) => {
    ctx.fillStyle = state.darkMode ? "#3a2810" : "#c8a860";
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
    ctx.fill();
  };
  drawIsland(ox + cw * 0.15, oy + ch * 0.22, cw * 0.09, ch * 0.10);
  drawIsland(ox + cw * 0.82, oy + ch * 0.72, cw * 0.08, ch * 0.09);
  drawIsland(ox + cw * 0.48, oy + ch * 0.18, cw * 0.06, ch * 0.06);

  // Dotted path from start to somewhere
  ctx.strokeStyle = state.darkMode ? "rgba(200,160,80,0.4)" : "rgba(100,60,20,0.35)";
  ctx.lineWidth   = 1.5;
  ctx.setLineDash([6, 8]);
  ctx.beginPath();
  ctx.moveTo(ox + cw * 0.1, oy + ch * 0.85);
  ctx.lineTo(ox + cw * 0.32, oy + ch * 0.60);
  ctx.lineTo(ox + cw * 0.52, oy + ch * 0.45);
  ctx.lineTo(ox + cw * 0.68, oy + ch * 0.52);
  ctx.stroke();
  ctx.setLineDash([]);

  // Compass rose (bottom-right)
  const rosX = ox + cw * 0.88;
  const rosY = oy + ch * 0.82;
  const arms = ["N","S","E","W"];
  const offsets = [[0,-16],[0,16],[16,0],[-16,0]];
  ctx.fillStyle = state.darkMode ? "rgba(200,160,80,0.7)" : "rgba(80,50,10,0.6)";
  ctx.font      = `bold 9px ${bodyFont}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  arms.forEach((a, i) => ctx.fillText(a, rosX + offsets[i][0], rosY + offsets[i][1]));
  ctx.strokeStyle = state.darkMode ? "rgba(200,160,80,0.5)" : "rgba(80,50,10,0.4)";
  ctx.lineWidth   = 0.8;
  ctx.beginPath();
  ctx.moveTo(rosX, rosY - 12); ctx.lineTo(rosX, rosY + 12);
  ctx.moveTo(rosX - 12, rosY); ctx.lineTo(rosX + 12, rosY);
  ctx.stroke();

  // ── FAKE X (obvious, static, trap) ───────────────────────────────────────────
  const fxX = ox + cw * 0.35;
  const fxY = oy + ch * 0.37;
  ctx.strokeStyle = state.darkMode ? "rgba(220,80,80,0.9)" : "rgba(180,30,30,0.9)";
  ctx.lineWidth   = 3;
  ctx.beginPath();
  ctx.moveTo(fxX - 12, fxY - 12); ctx.lineTo(fxX + 12, fxY + 12);
  ctx.moveTo(fxX + 12, fxY - 12); ctx.lineTo(fxX - 12, fxY + 12);
  ctx.stroke();

  gc.hitAreas.push({
    x: fxX - 18, y: fxY - 18, w: 36, h: 36,
    action: () => { gc.loseLife(); },
  });

  // ── Real X (drifts, subtler colour) ──────────────────────────────────────────
  const rx = realX_pos.x;
  const ry = realX_pos.y;

  // Drift logic
  if (Date.now() - lastDrift > DRIFT_INTERVAL) {
    const dx = (Math.random() - 0.5) * 2 * DRIFT_MAG;
    const dy = (Math.random() - 0.5) * 2 * DRIFT_MAG;
    realX_pos = new Vec2(
      Math.max(ox + 20, Math.min(ox + cw - 20, rx + dx)),
      Math.max(oy + 20, Math.min(oy + ch - 20, ry + dy)),
    );
    lastDrift = Date.now();
  }

  ctx.strokeStyle = state.darkMode ? "rgba(180,140,60,0.75)" : "rgba(100,70,10,0.75)";
  ctx.lineWidth   = 2.5;
  ctx.beginPath();
  ctx.moveTo(rx - 10, ry - 10); ctx.lineTo(rx + 10, ry + 10);
  ctx.moveTo(rx + 10, ry - 10); ctx.lineTo(rx - 10, ry + 10);
  ctx.stroke();

  // ── Crosshair ────────────────────────────────────────────────────────────────
  const hx = crosshair.x;
  const hy = crosshair.y;
  const dxr = hx - rx;
  const dyr = hy - ry;
  const dist = Math.sqrt(dxr * dxr + dyr * dyr);
  const onTarget = dist < HIT_RADIUS;

  ctx.strokeStyle = onTarget
    ? (state.darkMode ? "#ffe066" : "#cc8800")
    : (state.darkMode ? "rgba(100,200,100,0.9)" : "rgba(20,120,20,0.9)");
  ctx.lineWidth   = onTarget ? 2.5 : 1.5;

  ctx.beginPath();
  ctx.arc(hx, hy, 10, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(hx - 16, hy); ctx.lineTo(hx + 16, hy);
  ctx.moveTo(hx, hy - 16); ctx.lineTo(hx, hy + 16);
  ctx.stroke();

  // ── Control strip ────────────────────────────────────────────────────────────
  const ctrlY = oy + ch + (topBoxHeight - ch) * 0.25;
  ctx.fillStyle    = t.fgDim;
  ctx.font         = `11px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("WASD / ↑↓←→ to move crosshair", cx, ctrlY);

  // DIG button — only active when on target
  const digW = 120;
  const digH = 34;
  const digX = cx - digW / 2;
  const digY = oy + ch + (topBoxHeight - ch) * 0.58;

  if (onTarget) {
    ctx.strokeStyle = state.darkMode ? "#ffe066" : "#cc8800";
    ctx.lineWidth   = 2;
    ctx.strokeRect(digX, digY, digW, digH);
    ctx.fillStyle    = state.darkMode ? "#ffe066" : "#cc8800";
    ctx.font         = `bold 15px ${displayFont}`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("⛏  DIG", digX + digW / 2, digY + digH / 2);
    gc.hitAreas.push({
      x: digX, y: digY, w: digW, h: digH,
      action: () => {
        cancelAnimationFrame(animId29);
        initd29 = false;
        state.levelSubPhase = "won";
        gc.render();
      },
    });
  } else {
    ctx.strokeStyle = state.darkMode ? "#333" : "#ccc";
    ctx.lineWidth   = 1;
    ctx.strokeRect(digX, digY, digW, digH);
    ctx.fillStyle    = state.darkMode ? "#444" : "#bbb";
    ctx.font         = `bold 15px ${displayFont}`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("⛏  DIG", digX + digW / 2, digY + digH / 2);
  }

  // ── Physics loop ──────────────────────────────────────────────────────────────
  cancelAnimationFrame(animId29);
  if (state.levelSubPhase !== "active") return;

  animId29 = requestAnimationFrame((ts: number) => {
    if (gc.state.currentLevel !== 29 || gc.state.currentScreen !== "level") return;
    const dt = lastT29 ? Math.min((ts - lastT29) / 1000, 0.05) : 0.016;
    lastT29  = ts;

    const up    = gc.keysDown.has("w") || gc.keysDown.has("W") || gc.keysDown.has("ArrowUp");
    const down  = gc.keysDown.has("s") || gc.keysDown.has("S") || gc.keysDown.has("ArrowDown");
    const left  = gc.keysDown.has("a") || gc.keysDown.has("A") || gc.keysDown.has("ArrowLeft");
    const right = gc.keysDown.has("d") || gc.keysDown.has("D") || gc.keysDown.has("ArrowRight");

    let nx = crosshair.x;
    let ny = crosshair.y;
    if (up)    ny -= MOVE_SPEED * dt;
    if (down)  ny += MOVE_SPEED * dt;
    if (left)  nx -= MOVE_SPEED * dt;
    if (right) nx += MOVE_SPEED * dt;

    crosshair = new Vec2(
      Math.max(ox + 2, Math.min(ox + cw - 2, nx)),
      Math.max(oy + 2, Math.min(oy + ch - 2, ny)),
    );

    gc.render();
  });
};
