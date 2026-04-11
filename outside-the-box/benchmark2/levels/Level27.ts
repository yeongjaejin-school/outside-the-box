// Level 27 — The Ballot
// Vote for Head Examination Officer. Four candidates, all identical platforms.
// Voting for any named candidate: loseLife.
// Write-in: the player's own name → advances.
// Any other write-in text → loseLife.
import { GameContext } from '../types';
import { getTheme }    from '../theme';
import { getLayout }   from '../layout';
import { drawButton }  from '../renderer';

const CANDIDATES = [
  { name: "Reginald Pompsworth III",  platform: "Tough on inefficiency. Strong on process. Neutral on outcomes." },
  { name: "Dr. Constance Drool",      platform: "Science-based. Evidence-adjacent. Committed to asking questions." },
  { name: "The Machine",              platform: "Consistent. Impartial. Has never once eaten lunch." },
  { name: "Brick",                    platform: "Brick." },
];

let writeInInput = "";
let wiFocused    = false;

export const drawLevel27 = (gc: GameContext) => {
  const { ctx, state, displayFont, bodyFont } = gc;
  const { topBoxX, topBoxY, topBoxWidth, topBoxHeight } = getLayout(ctx);
  const t  = getTheme(state);
  const cx = topBoxX + topBoxWidth / 2;

  if (state.levelSubPhase !== "active") {
    writeInInput = "";
    wiFocused    = false;
    state.levelSubPhase = "active";
  }

  // ── Ballot header ─────────────────────────────────────────────────────────────
  ctx.fillStyle    = t.fg;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.font         = `bold 17px ${displayFont}`;
  ctx.fillText("OFFICIAL BALLOT — HEAD EXAMINATION OFFICER", cx, topBoxY + topBoxHeight * 0.07);
  ctx.font      = `11px ${bodyFont}`;
  ctx.fillStyle = t.fgDim;
  ctx.fillText("Select one candidate. This vote is binding, permanent, and will haunt you.", cx, topBoxY + topBoxHeight * 0.13);

  // ── Candidate rows ────────────────────────────────────────────────────────────
  const rowH   = topBoxHeight * 0.11;
  const startY = topBoxY + topBoxHeight * 0.17;
  const rowX   = topBoxX + topBoxWidth * 0.04;
  const rowW   = topBoxWidth * 0.92;

  CANDIDATES.forEach((cand, i) => {
    const ry = startY + i * (rowH + topBoxHeight * 0.015);

    // Row background
    ctx.strokeStyle = t.divider;
    ctx.lineWidth   = 0.5;
    ctx.strokeRect(rowX, ry, rowW, rowH);

    // Radio button (always hollow)
    const radioX = rowX + 18;
    const radioY = ry + rowH / 2;
    ctx.strokeStyle = state.darkMode ? "#888" : "#666";
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.arc(radioX, radioY, 9, 0, Math.PI * 2);
    ctx.stroke();

    // Candidate name + platform
    ctx.fillStyle    = t.fg;
    ctx.font         = `bold 14px ${displayFont}`;
    ctx.textAlign    = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(cand.name, rowX + 38, ry + rowH * 0.34);

    ctx.fillStyle = t.fgDim;
    ctx.font      = `11px ${bodyFont}`;
    ctx.fillText(cand.platform, rowX + 38, ry + rowH * 0.68);

    // VOTE button
    const vbW = 88;
    const vbH = 30;
    const vbX = rowX + rowW - vbW - 8;
    const vbY = ry + (rowH - vbH) / 2;

    ctx.strokeStyle = state.darkMode ? "#666" : "#aaa";
    ctx.lineWidth   = 1.5;
    ctx.strokeRect(vbX, vbY, vbW, vbH);
    ctx.fillStyle    = t.fg;
    ctx.font         = `12px ${bodyFont}`;
    ctx.textAlign    = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("VOTE", vbX + vbW / 2, vbY + vbH / 2);

    gc.hitAreas.push({
      x: vbX, y: vbY, w: vbW, h: vbH,
      action: () => { gc.loseLife(); },
    });
  });

  // ── Write-in ──────────────────────────────────────────────────────────────────
  const wiY    = startY + CANDIDATES.length * (rowH + topBoxHeight * 0.015) + topBoxHeight * 0.015;
  const wiRowH = topBoxHeight * 0.11;

  ctx.strokeStyle = wiFocused ? (state.darkMode ? "#4488ff" : "#1144cc") : t.divider;
  ctx.lineWidth   = wiFocused ? 1.5 : 0.5;
  ctx.strokeRect(rowX, wiY, rowW, wiRowH);

  ctx.fillStyle    = t.fgDim;
  ctx.font         = `11px ${bodyFont}`;
  ctx.textAlign    = "left";
  ctx.textBaseline = "middle";
  ctx.fillText("Write-in candidate:", rowX + 38, wiY + wiRowH * 0.3);

  // Input field
  const fiX = rowX + 38;
  const fiY = wiY + wiRowH * 0.52;
  const fiW = rowW * 0.54;
  const fiH = 26;

  ctx.strokeStyle = state.darkMode ? "#444" : "#ccc";
  ctx.lineWidth   = 1;
  ctx.strokeRect(fiX, fiY, fiW, fiH);
  ctx.fillStyle   = state.darkMode ? "#111" : "#fff";
  ctx.fillRect(fiX + 1, fiY + 1, fiW - 2, fiH - 2);

  const cursor27 = wiFocused && state.guideCursor ? "|" : "";
  ctx.fillStyle    = t.fg;
  ctx.font         = `12px ${bodyFont}`;
  ctx.textAlign    = "left";
  ctx.textBaseline = "middle";
  ctx.fillText(writeInInput + cursor27, fiX + 6, fiY + fiH / 2);

  gc.hitAreas.push({
    x: fiX, y: fiY, w: fiW, h: fiH,
    action: () => { wiFocused = true; gc.render(); },
  });

  // Handle typing in write-in when focused
  if (wiFocused) {
    gc.keysDown.forEach(k => {
      if (k === "Backspace") { writeInInput = writeInInput.slice(0, -1); gc.keysDown.delete(k); }
      else if (k.length === 1 && writeInInput.length < 28) { writeInInput += k; gc.keysDown.delete(k); }
    });
  }

  // Submit write-in button
  const svW = 88;
  const svH = 30;
  const svX = rowX + rowW - svW - 8;
  const svY = wiY + (wiRowH - svH) / 2;

  ctx.strokeStyle = state.darkMode ? "#666" : "#aaa";
  ctx.lineWidth   = 1.5;
  ctx.strokeRect(svX, svY, svW, svH);
  ctx.fillStyle    = t.fg;
  ctx.font         = `12px ${bodyFont}`;
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("VOTE", svX + svW / 2, svY + svH / 2);

  gc.hitAreas.push({
    x: svX, y: svY, w: svW, h: svH,
    action: () => {
      wiFocused = false;
      const typed = writeInInput.trim().toLowerCase();
      const pname = state.playerName.toLowerCase();
      if (typed === pname || typed === "box") {
        writeInInput = "";
        state.currentLevel  = 28;
        state.levelSubPhase = "";
        gc.render();
      } else {
        gc.loseLife();
      }
    },
  });
};
