import { GameContext } from "../types";
import { getTheme } from "../theme";
import { getLayout } from "../layout";
import { drawButton } from "../renderer";

export const drawNameEntry = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { w, topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const cx = w / 2;
  const t = getTheme(state);

  // Prompt
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `bold 32px ${displayFont}`;
  ctx.fillText("What's your name?", cx, topBoxY + topBoxHeight * 0.2);

  // Input box
  const inputW = topBoxWidth * 0.5;
  const inputH = 52;
  const inputX = cx - inputW / 2;
  const inputY = topBoxY + topBoxHeight * 0.42;

  ctx.strokeStyle = state.nameFocused
    ? state.darkMode
      ? "#ffffff"
      : "#111111"
    : t.divider;
  ctx.lineWidth = state.nameFocused ? 3 : 2;
  ctx.strokeRect(inputX, inputY, inputW, inputH);

  const displayText =
    state.nameInput.length > 0
      ? state.nameInput
      : state.nameFocused
        ? ""
        : "Type your name…";
  ctx.fillStyle = state.nameInput.length > 0 ? t.fg : t.fgDim;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.font = `22px ${bodyFont}`;
  ctx.fillText(displayText, inputX + 14, inputY + inputH / 2, inputW - 28);

  // Blinking cursor
  if (state.nameFocused) {
    const measured = ctx.measureText(state.nameInput).width;
    const cursorX = inputX + 14 + Math.min(measured, inputW - 28);
    const cursorY = inputY + inputH * 0.2;
    const cursorH = inputH * 0.6;
    const blink = Math.floor(Date.now() / 530) % 2 === 0;
    if (blink) {
      ctx.strokeStyle = t.fg;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cursorX, cursorY);
      ctx.lineTo(cursorX, cursorY + cursorH);
      ctx.stroke();
    }
  }

  // Input box hit area
  gc.hitAreas.push({
    x: inputX,
    y: inputY,
    w: inputW,
    h: inputH,
    action: () => {
      state.nameFocused = true;
      gc.render();
    },
  });

  // Confirm button
  const confirmW = 180;
  const confirmH = 48;
  drawButton(
    gc,
    "CONFIRM →",
    cx - confirmW / 2,
    topBoxY + topBoxHeight * 0.62,
    confirmW,
    confirmH,
    () => {
      state.playerName = state.nameInput.trim() || "Box";
      state.nameFocused = false;
      state.currentLevel = 2;
      if (state.playMode === "play" && state.examStartTime === 0) {
        state.examStartTime = performance.now();
      }
      gc.render();
    },
    20,
  );
};
