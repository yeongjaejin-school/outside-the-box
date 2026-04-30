import { GameContext } from "../types";
import { getLayout } from "../layout";
import { drawButton } from "../renderer";

export const drawGameOverOverlay = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, h } = getLayout(ctx);
  const cx = w / 2;
  const cy = h / 2;

  // Full-canvas dim
  ctx.fillStyle = "rgba(0,0,0,0.82)";
  ctx.fillRect(0, 0, w, h);

  // Panel
  const panelW = Math.min(w * 0.55, 520);
  const panelH = h * 0.52;
  const panelX = cx - panelW / 2;
  const panelY = cy - panelH / 2;

  ctx.fillStyle = "#0a0a0a";
  ctx.strokeStyle = "#cc2222";
  ctx.lineWidth = 3;
  ctx.fillRect(panelX, panelY, panelW, panelH);
  ctx.strokeRect(panelX, panelY, panelW, panelH);

  ctx.fillStyle = "#cc2222";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 52px ${displayFont}`;
  ctx.fillText("GAME OVER", cx, panelY + panelH * 0.22);

  ctx.fillStyle = "#888888";
  ctx.font = `20px ${bodyFont}`;
  ctx.fillText(
    `Better luck next time, ${state.playerName}.`,
    cx,
    panelY + panelH * 0.42,
    panelW * 0.82,
  );

  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(panelX + panelW * 0.1, panelY + panelH * 0.54);
  ctx.lineTo(panelX + panelW * 0.9, panelY + panelH * 0.54);
  ctx.stroke();

  gc.hitAreas = [];

  const btnW = 200;
  const btnH = 48;

  if (state.playMode === "play") {
    drawButton(
      gc,
      "TRY AGAIN",
      cx - btnW / 2,
      panelY + panelH * 0.61,
      btnW,
      btnH,
      () => {
        state.lives = 3;
        state.gameOver = false;
        state.currentLevel = 1;
        gc.resetPlayerName();
        gc.render();
      },
      20,
    );

    drawButton(
      gc,
      "MAIN MENU",
      cx - btnW / 2,
      panelY + panelH * 0.78,
      btnW,
      btnH,
      () => {
        state.lives = 3;
        state.gameOver = false;
        state.currentScreen = "mainmenu";
        gc.resetPlayerName();
        gc.render();
      },
      20,
    );
  } else {
    drawButton(
      gc,
      "MAIN MENU",
      cx - btnW / 2,
      panelY + panelH * 0.68,
      btnW,
      btnH,
      () => {
        state.lives = 3;
        state.gameOver = false;
        state.currentScreen = "mainmenu";
        gc.resetPlayerName();
        gc.render();
      },
      20,
    );
  }
};
