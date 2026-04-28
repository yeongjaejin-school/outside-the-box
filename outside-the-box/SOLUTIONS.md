# Outside-the-Box Thinking Certification — Level Solutions Guide

> **For graders and playtesters.** This document explains the intended solution to every level in the benchmark2 build. Each level is designed around a trap that punishes instinctive/conventional behaviour, and a solution that rewards careful observation or lateral thinking.

---

## How to Run

Open `benchmark2/index.html` in a browser (or serve via local HTTP). The game runs entirely in the browser via a bundled canvas app. No install required.

---

## General UI Notes

- **Lives:** 3 hearts, shown in the top-right HUD. Losing all 3 triggers Game Over.
- **Skips:** Unlocked at Q.9+. Lets you skip a question without a penalty (limited supply).
- **Dark mode** is default. The game frame and bottom robot-guide panel are always visible.
- **The robot guide** at the bottom types out the level's flavour text. It is flavour only — the real instructions are in the visual puzzle.
- **Level Select** is accessible from the main menu and shows all 30 levels in a 6×5 grid. Levels 11–20 are stubs (marked "soon"); levels 23–24 and 26–30 are also stubs.
- **Pause menu** (ESC): resume, controls, quit, toggle dark/light mode. The overlay is semi-transparent — content behind it remains faintly visible.

---

## Implementation Status

| Range | Status |
|-------|--------|
| Q.1 – Q.10 | Fully implemented |
| Q.11 – Q.20 | Stubs (under construction) |
| Q.21 – Q.25 | Fully implemented |
| Q.26 – Q.30 | Stubs (under construction) |

**15 levels implemented total.**

---

## Level Solutions

---

### Q.1 — Name Entry
**Prompt:** "Hello, candidate. Please enter your name below."

**What you see:** A text input field.

**Solution:** Type any name and press Enter or click CONFIRM. Leaving it blank assigns the default name "Box". Your name is referenced in later levels.

---

### Q.2 — Terms of Service
**Prompt:** "Accept the terms to proceed."

**What you see:** A scroll box filled with ~400 lines of dense lore text. Below it: an "I Accept" checkbox and a "Decline" button.

**Trap:** Clicking "I Accept" before reaching the bottom → **strike.** Clicking "Decline" resets the scroll to the top.

**Solution:** **Scroll all the way to the bottom** using the scroll wheel. Once the very last line is visible, clicking "I Accept" advances to Q.3.

---

### Q.3 — Click the Dot
**Prompt:** "Click the dot."

**What you see:** A small dot somewhere on screen.

**Solution:** **Click the dot.** Palette cleanser.

---

### Q.4 — Reaction Window
**Prompt:** "Watch the button. Press it only when it tells you to."

**What you see:** A button that initially reads "WAIT..." with a red background.

**Trap:** Clicking the button while it still says "WAIT..." → **strike** and the timer resets.

**Solution:** Wait. At a random point during the 2–20 second timer, the button turns green and reads **"CLICK ME QUICKLY"** — you have a **500ms window** to click it. Clicking during that window advances to Q.5. Missing the window (or clicking while red) resets with a new random timer.

**Notes:** Each failed attempt generates a new random wait duration (2–20s), so you can't memorise the timing.

---

### Q.5 — Catch Me If You Can
**Prompt:** "There is a button up there. You know what to do with it."

**What you see:** A button that **flees** from your cursor with velocity physics whenever you get close. When you hover over it, it reads "DONT CLICK" instead of "CLICK ME."

**Trap:** Clicking the fleeing button → **strike.**

**Solution:** Ignore the fleeing button entirely. Find the **tiny near-invisible dot** in the lower-right area of the box (approximately 87% x, 76% y). The dot blends into the background and the cursor does **not** change to a pointer over it. Click it to advance.

---

### Q.6 — Pong (Frodrick Round 1)
**Prompt:** "A brief intermission, candidate. Defeat Frodrick Rederer to proceed."

**What you see:** A Pong court. You are the left paddle vs. Frodrick Rederer (a perfectly beatable AI).

**Controls:** `W` / `↑` — up, `S` / `↓` — down, `Spacebar` — serve.

**Goal:** First to 3 points wins.

**Solution:** Win the pong match. Frodrick has limited tracking speed, a reaction delay, and slight positional noise — he is intentionally beatable. Aim returns toward the edges. Losing 3 points → strike and reset.

---

### Q.7 — How Many F's?
**Prompt:** "I think we are counting something here?"

**What you see:** A chalkboard covered in 33 scattered letters (F, E, T, P, I, L, etc.). Below it: a desk with an eraser and answer buttons: 8, 11, 15, 0.

**Trap:** There are 13 F's on the board — but 13 isn't one of the options. None of the visible numbers (8, 11, 15) are correct. The "0" button is greyed out until the board is cleared.

**Solution:**
1. Pick up the **eraser** (click it on the desk).
2. Drag it across the entire chalkboard until ≥85% of the letters are erased.
3. Once sufficiently cleared, the **"0"** button activates.
4. Click **0** — after erasing, zero letters remain. That's the correct answer.

---

### Q.8 — The Stranger *(unlabelled)*
**Prompt:** "An unregistered individual has approached you during the examination."

**What you see:** A figure claiming his daughter needs a heart transplant. He offers 3 skips for one of your lives. Buttons: **"Give Heart"** and **"Let a Child Die"**.

**Trap:** "Give Heart" → **strike** (there was no daughter).

**Solution:** Click **"Let a Child Die."** The follow-up reveals the scam. This level is not labelled in the HUD and cannot be skipped.

---

### Q.9 — Calculus
**Prompt:** "Focus, candidate. Show all work."

**What you see:** The integral `∫₀³ x√(9−x²) dx` and four wrong answer buttons (27, 18, 0, 6).

**Trap:** The real answer is **9** — not one of the buttons. Clicking any visible button → strike.

**Solution:** The correct answer is **9**. **Click the "9" in the "Q.9" label** in the top-right HUD. The cursor does not change. Maths: u-substitution with u = 9−x² gives 9.

---

### Q.10 — The Maze
**Prompt:** "Navigate to the exit. The path is yours to find."

**What you see:** A procedurally generated maze (new layout every attempt). You control a small blue dot. Entry door at the **bottom centre**, exit glowing green at the **top centre**.

**Controls:** `WASD` or arrow keys.

**Trap:** Touching a wall **rewinds your position ~1.5 seconds** of progress (not back to the start, but a meaningful setback). A **45-second countdown** runs independently — when it expires you lose a life but your position is unchanged, and the clock resets.

**Solution:** Navigate the dot from the bottom entry to the glowing green exit at the top. Take your time and hug walls carefully. The setback mechanic punishes rushing.

---

### Q.11 – Q.20 — *(Stubs)*
**Status:** Under construction. All show placeholder screens.

---

### Q.21 — Pong (Frodrick Round 2)
**Prompt:** "He is back. Frodrick seems to have trained a lot... maybe this time you need to cheat on the exam for once???"

**What you see:** Pong again — but Frodrick's paddle is now absurdly tall (more than twice the player's height) and tracks perfectly with zero delay or noise. Beating him fairly is functionally impossible.

**Controls:** Same as Q.6. `Spacebar` to serve.

**Trap:** Playing normally → you will never score.

**Solution:** **Hold your left mouse button down on Frodrick's paddle** to freeze it in place. His paddle turns red while frozen. With Frodrick pinned, score 3 points to win. The win screen reads "YOU CHEATED!"

**Notes:** You must keep holding while the ball is in play. Releasing the mouse unfreezes him immediately.

---

### Q.22 — Did You Catch That?
**Prompt:** "did you catch that??"

**What you see:** The screen shows "Stay alert." for a random duration (3–8 seconds). Then a **10-digit number** flashes on screen in large bold text for just **0.75 seconds**. After the flash, an input box appears asking you to enter the sequence.

**Trap:** 10 digits in 0.75 seconds is impossible to memorise. Typing from memory → almost certain strike. Each wrong answer generates a fresh code and restarts the wait.

**Solution:** **Pause the game (ESC) the moment the digits appear.** The flash timer freezes while paused, and the digits remain visible through the semi-transparent pause overlay. Read/write them down, then unpause and type the sequence into the input box.

**Notes:** The wait duration is randomised each attempt so you cannot anticipate the flash by counting. Type digits 0–9; Backspace to erase; Enter or SUBMIT to confirm.

---

### Q.23 — Case File #7
**Prompt:** "Logic before instinct, candidate. Prove your reasoning, then draw your conclusion."

**What you see:** A scenario — the vault security system has two conditions: **P** (vault is sealed) and **Q** (guard is on duty). The protocol passes when **(P → Q) ∧ (Q → P)**. A 5-column truth table is shown (P and Q fixed, three fillable columns), and four conclusion options below.

**Trap:** Clicking any wrong conclusion (A, B, D) → **strike.** Clicking the correct conclusion (C) before filling the table → feedback message only, no penalty, no advance.

**Solution:**
1. Click the fillable cells (columns P→Q, Q→P, Result) to cycle each through T / F / —.
2. Fill in the correct values:

| P | Q | P→Q | Q→P | Result |
|---|---|-----|-----|--------|
| T | T |  T  |  T  |   T    |
| T | F |  F  |  T  |   F    |
| F | T |  T  |  F  |   F    |
| F | F |  T  |  T  |   T    |

3. Once the table is correct, option **C** highlights green: *"Satisfied when both conditions match."*
4. Click **C** to advance.

**Notes:** The expression (P→Q)∧(Q→P) is the biconditional P↔Q — true when P and Q have the same value.

---

### Q.24 — Easy One
**Prompt:** "This should be an easy one..."

**What you see:** The question **15 + 15 = ?** displayed large. Four answer buttons: 25, **30**, 35, 1515. Plus roughly ten additional buttons scattered across the screen — HINT, CALCULATE, EASY MODE ON, SHOW STEPS, SKIP, CONFIRM, CHECK ANSWER, USE CALCULATOR, SUBMIT ALL, SOLVE.

**Trap:** Every button on screen except **30** → **strike.** The decoys are sized and positioned to look like legitimate UI elements.

**Solution:** Click **30**. That's it. 15 + 15 = 30.

---

### Q.25 — The Invisible Maze
**Prompt:** "Some walls are only visible under the right conditions. Toggle your perspective to navigate."

**What you see:** A static maze (same layout every attempt). Some walls are visible, but there are invisible passages and hidden walls — walls that only show in **dark mode** or only in **light mode**.

**Controls:** `WASD` or arrow keys. Wall collision rewinds ~1.5 seconds of progress.

**Trap:** Navigating using only one mode → you'll hit invisible walls and keep getting set back. An **80-second countdown** runs; hitting zero loses a life and resets the timer (not your position).

**Solution:**
1. Open the **pause menu** (ESC) and toggle dark/light mode at least once. This reveals a **◐ TOGGLE** button in the top-right of the maze.
2. Use the toggle button freely to switch between modes while navigating — each mode reveals a different set of walls.
3. Reach the glowing green exit at the top centre.

**Notes:** All walls are physically solid regardless of visibility. The toggle button does not appear until you've used the pause menu to switch modes — a hint that the pause menu is relevant.

---

### Q.26 – Q.30 — *(Stubs)*
**Status:** Under construction.

---

## Quick Reference Cheat Sheet

| Q | Name | Solution in one line |
|---|------|----------------------|
| 1 | Name Entry | Type a name and press Enter |
| 2 | Terms of Service | Scroll to the very bottom, then click I Accept |
| 3 | Click the Dot | Click the dot |
| 4 | Reaction Window | Wait for button to turn green ("CLICK ME QUICKLY"), click within 500ms |
| 5 | Fleeing Button | Ignore the button; click the hidden dot at ~87% x, ~76% y |
| 6 | Pong Round 1 | Beat Frodrick Rederer to 3 points (W/S or arrows, Space to serve) |
| 7 | F Count | Drag eraser to clear board, then click 0 |
| 8 | The Stranger | Click "Let a Child Die" |
| 9 | Calculus | Click the "9" in the Q.9 HUD label |
| 10 | The Maze | Navigate dot (WASD) from bottom entry to glowing green top exit |
| 11 |  |  |
| 12 |  |  |
| 13 |  |  |
| 14 |  |  |
| 15 |  |  |
| 16 |  |  |
| 17 |  |  |
| 18 |  |  |
| 19 |  |  |
| 20 |  |  |
| 21 | Pong Round 2 | Hold mouse on Frodrick's paddle to freeze it, score 3 points |
| 22 | Did You Catch That? | Pause during the 0.75s flash, read the 10-digit code, type it in |
| 23 | Case File #7 | Fill truth table correctly, then click C |
| 24 | Easy One | Click 30 (ignore every other button) |
| 25 | Invisible Maze | Toggle dark/light mode via pause menu, then use ◐ TOGGLE button to navigate |
| 26–30 | Stubs | N/A |

---

## Design Philosophy

Every level punishes the most instinctive response:

- **Q.2** — Everyone skips ToS. Reading it is never the expected move.
- **Q.4** — Instinct is to click immediately. The level rewards restraint and timing.
- **Q.5** — The obvious button is the trap. The goal is something you'd only notice if you stopped chasing the distraction.
- **Q.7** — The answer isn't to count carefully. It's to stop counting entirely.
- **Q.8** — Emotional manipulation. Conventional compassion is the wrong call.
- **Q.9** — The question tells you the answer if you read the frame, not the content.
- **Q.10** — The maze punishes wall-hugging rushers with a setback, not a reset. Patience is the mechanic.
- **Q.21** — Trying harder is not the solution. The game gives you a tool (the mouse) that the rules don't mention.
- **Q.22** — Human memory has limits. The system (pause) is the memory aid — the candidate must realise the UI itself is the answer.
- **Q.25** — Perspective is literally the mechanic. You need to look at the same problem two different ways to find a path through it.

The certification is awarded to candidates who, repeatedly and across varied contexts, notice what is **actually** happening rather than what they expect to be happening.
