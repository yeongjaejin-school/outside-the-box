import { GameContext } from "../types";
import { getTheme } from "../theme";
import { getLayout } from "../layout";
import { drawButton } from "../renderer";

export const drawPauseOverlay = (gc: GameContext) => {
  const { ctx, state, displayFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const pad = topBoxWidth * 0.05;
  const ox = topBoxX + pad;
  const oy = topBoxY + pad;
  const ow = topBoxWidth - pad * 2;
  const oh = topBoxHeight - pad * 2;
  const cx = ox + ow / 2;
  const t = getTheme(state);

  ctx.fillStyle = t.overlayBg;
  ctx.fillRect(ox, oy, ow, oh);
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 2;
  ctx.strokeRect(ox, oy, ow, oh);

  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 38px ${displayFont}`;
  ctx.fillText("PAUSED", cx, oy + oh * 0.18);

  ctx.strokeStyle = t.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(ox + ow * 0.1, oy + oh * 0.3);
  ctx.lineTo(ox + ow * 0.9, oy + oh * 0.3);
  ctx.stroke();

  // Clear all underlying hit areas so the game behind is blocked
  gc.hitAreas = [];

  const btnW = 220;
  const btnH = 48;
  const btnX = cx - btnW / 2;

  drawButton(gc, "RESUME", btnX, oy + oh * 0.36, btnW, btnH, () => {
    state.paused = false;
    gc.render();
  });

  drawButton(gc, "QUIT TO MENU", btnX, oy + oh * 0.53, btnW, btnH, () => {
    state.paused = false;
    state.lives = 3;
    gc.resetPlayerName();
    state.currentScreen = "mainmenu";
    gc.render();
  });

  const toggleLabel = state.darkMode ? "☀  LIGHT MODE" : "🌙  DARK MODE";
  drawButton(
    gc,
    toggleLabel,
    btnX,
    oy + oh * 0.7,
    btnW,
    btnH,
    () => {
      state.darkMode = !state.darkMode;
      gc.render();
    },
    18,
  );
};
