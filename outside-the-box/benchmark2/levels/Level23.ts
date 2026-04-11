// Level 23 — The Screensaver
// A "SCREENSAVER" logo bounces around the box using Vec2.
// A PAUSE button sits at the bottom. When the logo is near a corner (within 34px),
// the logo glows. Clicking PAUSE while glowing = win. Clicking PAUSE otherwise = loseLife.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import Vec2            from '../../../Wolfie2D/DataTypes/Vec2';

const LOGO_W  = 148;
const LOGO_H  = 38;
const SPEED   = 90;   // px / sec
const CORNER_DIST = 40;

let animId23  = 0;
let lastT23   = 0;
let pos       = new Vec2(0, 0);
let vel       = new Vec2(0, 0);
let initialized23 = false;
let nearCorner    = false;
let missedFlashes = 0;  // failed clicks while glowing counts as misses for pressure

function reset23(ox: number, oy: number, cw: number, ch: number) {
  pos  = new Vec2(ox + cw * 0.3, oy + ch * 0.4);
  // angle ~30° downward-right, deterministic start so logo reliably hits a corner
  const angle = Math.PI / 6;
  vel  = new Vec2(SPEED * Math.cos(angle), SPEED * Math.sin(angle));
  initialized23 = true;
  nearCorner    = false;
  missedFlashes = 0;
  lastT23 = 0;
}

export const drawLevel23 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  // Fresh entry
  if (state.levelSubPhase !== "active" && state.levelSubPhase !== "won") {
    reset23(topBoxX, topBoxY, topBoxWidth, topBoxHeight * 0.82);
    state.levelSubPhase = "active";
  }

  const cw = topBoxWidth;
  const ch = topBoxHeight * 0.82;  // reserve bottom strip for controls
  const ox = topBoxX;
  const oy = topBoxY;

  // ── Win screen ──────────────────────────────────────────────────────────────
  if (state.levelSubPhase === "won") {
    cancelAnimationFrame(animId23);
    ctx.fillStyle    = t.fg;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.font         = `bold 30px ${displayFont}`;
    ctx.fillText("IT HIT THE CORNER.", cx, oy + ch * 0.38);
    ctx.font      = `18px ${bodyFont}`;
    ctx.fillStyle = t.fgMid;
    ctx.fillText("Seventeen years. One moment. You were there.", cx, oy + ch * 0.54);

    gc.hitAreas.push({
      x: ox, y: oy, w: cw, h: ch,
      action: () => {
        initialized23 = false;
        state.currentLevel  = 24;
        state.levelSubPhase = "";
        gc.render();
      },
    });
    ctx.font      = `12px ${bodyFont}`;
    ctx.fillStyle = t.fgDim;
    ctx.fillText("[ click anywhere to continue ]", cx, oy + ch * 0.70);
    return;
  }

  // ── Bounce box border (visible) ──────────────────────────────────────────────
  ctx.strokeStyle = t.divider;
  ctx.lineWidth   = 1;
  ctx.strokeRect(ox, oy, cw, ch);

  // ── Corner indicators ─────────────────────────────────────────────────────────
  const corners = [
    new Vec2(ox,          oy),
    new Vec2(ox + cw,     oy),
    new Vec2(ox,          oy + ch),
    new Vec2(ox + cw,     oy + ch),
  ];
  corners.forEach(c => {
    const dx = pos.x + LOGO_W / 2 - c.x;
    const dy = pos.y + LOGO_H / 2 - c.y;
    const d  = Math.sqrt(dx * dx + dy * dy);
    const glow = d < CORNER_DIST * 2.5;
    ctx.strokeStyle = glow ? (state.darkMode ? "#ffe066" : "#d4a000") : t.divider;
    ctx.lineWidth   = glow ? 2 : 0.5;
    ctx.strokeRect(c.x - 12, c.y - 12, 24, 24);
  });

  // ── Logo ──────────────────────────────────────────────────────────────────────
  const lx = pos.x;
  const ly = pos.y;

  // Detect near-corner
  let minCornerDist = Infinity;
  corners.forEach(c => {
    const dx = lx + LOGO_W / 2 - c.x;
    const dy = ly + LOGO_H / 2 - c.y;
    const d  = Math.sqrt(dx * dx + dy * dy);
    if (d < minCornerDist) minCornerDist = d;
  });
  nearCorner = minCornerDist < CORNER_DIST;

  const logoColor = nearCorner
    ? (state.darkMode ? "#ffe066" : "#d4a000")
    : (state.darkMode ? "#4488ff" : "#1144cc");

  ctx.fillStyle   = logoColor;
  ctx.fillRect(lx, ly, LOGO_W, LOGO_H);
  ctx.fillStyle    = state.darkMode ? "#000" : "#fff";
  ctx.font         = `bold 16px ${displayFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("SCREENSAVER", lx + LOGO_W / 2, ly + LOGO_H / 2);

  if (nearCorner) {
    // Pulsing ring
    ctx.strokeStyle = logoColor;
    ctx.lineWidth   = 2;
    ctx.strokeRect(lx - 4, ly - 4, LOGO_W + 8, LOGO_H + 8);
  }

  // ── Status text ───────────────────────────────────────────────────────────────
  ctx.fillStyle    = nearCorner ? (state.darkMode ? "#ffe066" : "#d4a000") : t.fgDim;
  ctx.font         = `bold 13px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  const statusY    = oy + ch + (topBoxHeight - ch) * 0.3;
  ctx.fillText(
    nearCorner ? "◉  CORNER PROXIMITY DETECTED — PAUSE NOW" : "Watching... waiting...",
    cx, statusY,
  );

  // ── PAUSE button ──────────────────────────────────────────────────────────────
  const btnW = 160;
  const btnH = 36;
  const btnX = cx - btnW / 2;
  const btnY = oy + ch + (topBoxHeight - ch) * 0.55;

  ctx.strokeStyle = t.stroke;
  ctx.lineWidth   = 2;
  ctx.strokeRect(btnX, btnY, btnW, btnH);
  ctx.fillStyle    = t.fg;
  ctx.font         = `bold 16px ${displayFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("⏸  PAUSE", btnX + btnW / 2, btnY + btnH / 2);

  gc.hitAreas.push({
    x: btnX, y: btnY, w: btnW, h: btnH,
    action: () => {
      if (nearCorner) {
        cancelAnimationFrame(animId23);
        state.levelSubPhase = "won";
        gc.render();
      } else {
        gc.loseLife();
      }
    },
  });

  // ── Physics loop ──────────────────────────────────────────────────────────────
  cancelAnimationFrame(animId23);
  if (state.levelSubPhase !== "active") return;

  animId23 = requestAnimationFrame((ts: number) => {
    if (gc.state.currentLevel !== 23 || gc.state.currentScreen !== "level") return;
    const dt = lastT23 ? Math.min((ts - lastT23) / 1000, 0.05) : 0.016;
    lastT23  = ts;

    pos = new Vec2(pos.x + vel.x * dt, pos.y + vel.y * dt);

    // Bounce off walls (keep logo within ox,oy .. ox+cw-LOGO_W, oy+ch-LOGO_H)
    if (pos.x < ox)              { pos = new Vec2(ox, pos.y);              vel = new Vec2(Math.abs(vel.x), vel.y); }
    if (pos.x > ox + cw - LOGO_W){ pos = new Vec2(ox + cw - LOGO_W, pos.y); vel = new Vec2(-Math.abs(vel.x), vel.y); }
    if (pos.y < oy)              { pos = new Vec2(pos.x, oy);              vel = new Vec2(vel.x, Math.abs(vel.y)); }
    if (pos.y > oy + ch - LOGO_H){ pos = new Vec2(pos.x, oy + ch - LOGO_H); vel = new Vec2(vel.x, -Math.abs(vel.y)); }

    gc.render();
  });
};
