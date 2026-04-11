// Level 25 — The Password
// A password creation screen with deliberately impossible requirements.
// "Submit" always loses a life. "Forgot Password?" advances.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

const REQUIREMENTS = [
  "At least 16 characters",
  "Must include uppercase AND lowercase letters",
  "Must include at least two numbers",
  "Must include a special character (!@#$%^&*)",
  "Must NOT contain any letters in your name",
  "Must NOT contain any common English words",
  "Must be palindromic (reads the same backwards)",
  "Must not start or end with a number",
  "Must contain at least one letter from a dead language",
  "Must be pronounceable in one breath",
];

let inputText   = "";
let isFocused   = false;

export const drawLevel25 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  if (state.levelSubPhase !== "active") {
    inputText   = "";
    isFocused   = false;
    state.levelSubPhase = "active";
  }

  // Handle typing while focused
  if (isFocused && gc.keysDown.size > 0) {
    // Handled via rendered state — actual input is irrelevant; we consume nothing
  }

  // ── Title ─────────────────────────────────────────────────────────────────────
  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.font         = `bold 20px ${displayFont}`;
  ctx.fillText("CREATE A PASSWORD TO CONTINUE", cx, topBoxY + topBoxHeight * 0.07);

  // ── Requirements box ──────────────────────────────────────────────────────────
  const reqX = topBoxX + topBoxWidth * 0.04;
  const reqY = topBoxY + topBoxHeight * 0.12;
  const reqW = topBoxWidth * 0.44;
  const reqH = topBoxHeight * 0.60;

  ctx.strokeStyle = state.darkMode ? "#444" : "#ccc";
  ctx.lineWidth   = 1;
  ctx.strokeRect(reqX, reqY, reqW, reqH);

  ctx.fillStyle    = t.fgDim;
  ctx.font         = `bold 10px ${bodyFont}`;
  ctx.textAlign    = "left";
  ctx.textBaseline = "top";
  ctx.fillText("PASSWORD REQUIREMENTS:", reqX + 10, reqY + 10);

  REQUIREMENTS.forEach((req, i) => {
    ctx.fillStyle = state.darkMode ? "#cc4444" : "#cc2222";
    ctx.font      = `10px ${bodyFont}`;
    ctx.fillText(`✗  ${req}`, reqX + 10, reqY + 26 + i * 17);
  });

  // ── Input area ────────────────────────────────────────────────────────────────
  const inpX = topBoxX + topBoxWidth * 0.52;
  const inpY = topBoxY + topBoxHeight * 0.12;
  const inpW = topBoxWidth * 0.44;

  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "left";
  ctx.textBaseline = "top";
  ctx.font         = `13px ${bodyFont}`;
  ctx.fillText("New Password:", inpX, inpY);

  const fieldY = inpY + 20;
  const fieldH = 36;

  ctx.strokeStyle = isFocused ? (state.darkMode ? "#4488ff" : "#1144cc") : (state.darkMode ? "#555" : "#ccc");
  ctx.lineWidth   = 1.5;
  ctx.strokeRect(inpX, fieldY, inpW, fieldH);
  ctx.fillStyle   = state.darkMode ? "#111" : "#fff";
  ctx.fillRect(inpX + 1, fieldY + 1, inpW - 2, fieldH - 2);

  // Show dots for typed text
  const dots = "•".repeat(Math.min(inputText.length, 24));
  const cursor = isFocused && state.guideCursor ? "|" : "";
  ctx.fillStyle    = t.fg;
  ctx.font         = `14px ${bodyFont}`;
  ctx.textAlign    = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(dots + cursor, inpX + 8, fieldY + fieldH / 2);

  gc.hitAreas.push({
    x: inpX, y: fieldY, w: inpW, h: fieldH,
    action: () => { isFocused = true; gc.render(); },
  });

  // Strength meter (always "INSUFFICIENT")
  ctx.fillStyle    = t.fgDim;
  ctx.font         = `10px ${bodyFont}`;
  ctx.textAlign    = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Strength:", inpX, fieldY + fieldH + 8);
  ctx.fillStyle = state.darkMode ? "#cc4444" : "#cc2222";
  ctx.fillText("INSUFFICIENT", inpX + 58, fieldY + fieldH + 8);

  ctx.fillStyle    = t.fgDim;
  ctx.font         = `10px ${bodyFont}`;
  ctx.fillText("Confirm Password:", inpX, fieldY + fieldH + 32);
  const cf = fieldY + fieldH + 48;
  ctx.strokeStyle = state.darkMode ? "#555" : "#ccc"; ctx.lineWidth = 1.5;
  ctx.strokeRect(inpX, cf, inpW, 36);
  ctx.fillStyle = state.darkMode ? "#111" : "#fff";
  ctx.fillRect(inpX + 1, cf + 1, inpW - 2, 34);

  // Submit button (always loseLife)
  drawButton(gc, "CREATE PASSWORD", inpX, cf + 48, inpW, 38, () => {
    isFocused = false;
    gc.loseLife();
  }, 13);

  // ── Password hint ─────────────────────────────────────────────────────────────
  const hintY = cf + 96;
  ctx.fillStyle    = state.darkMode ? "#2255aa" : "#1144cc";
  ctx.font         = `11px ${bodyFont}`;
  ctx.textAlign    = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Forgot Password?", inpX, hintY);

  // Underline
  const fw = ctx.measureText("Forgot Password?").width;
  ctx.strokeStyle = state.darkMode ? "#2255aa" : "#1144cc";
  ctx.lineWidth   = 0.8;
  ctx.beginPath();
  ctx.moveTo(inpX, hintY + 12);
  ctx.lineTo(inpX + fw, hintY + 12);
  ctx.stroke();

  gc.hitAreas.push({
    x: inpX, y: hintY, w: fw + 4, h: 14,
    action: () => {
      isFocused   = false;
      inputText   = "";
      state.currentLevel  = 26;
      state.levelSubPhase = "";
      gc.render();
    },
  });

  // Note about impossible requirements
  ctx.fillStyle    = t.fgDim;
  ctx.font         = `10px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Requirements updated 4 times during your session. We apologize for the inconvenience.",
    cx, topBoxY + topBoxHeight * 0.88);
};
