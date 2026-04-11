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
- **Level Select** is accessible from the main menu and shows all 30 levels in a 6×5 grid. Levels 10–20 are stubs (marked "soon").

---

## Level Solutions

---

### Q.1 — Name Entry
**Prompt:** "Hello, candidate. Please enter your name below."

**What you see:** A text input field.

**Solution:** Type any name and press Enter — or leave it blank and press Enter to proceed as "Box." Either works. The level just wants a name.

**Notes:** The name you enter is used in Q.21 (résumé). If you skip it, you'll be "Box" throughout.

---

### Q.2 — Terms of Service
**Prompt:** "Accept the terms to proceed."

**What you see:** A scroll box filled with ~400 lines of dense lore text (29 sections covering Titans, dragons, factions, bureaucracy, and a prophet named Gus). Below it: an "I Accept" checkbox and a "Decline" button.

**Trap:** Clicking "I Accept" before reaching the bottom → **strike.** Clicking "Decline" resets the scroll to the top.

**Solution:** **Scroll all the way to the bottom** using the scroll wheel. Once the very last line ("You have reached the bottom. Now you may accept.") is visible and `scrollOffset >= maxScroll`, clicking "I Accept" advances to Q.3.

**Visual cue:** None intentionally — the button always looks clickable. That's the point.

---

### Q.3 — Click the Dot
**Prompt:** "Click the dot."

**What you see:** A small dot somewhere on screen.

**Solution:** **Click the dot.** This one is straightforward — it exists as a palate cleanser between tricks.

---

### Q.4 — Do Not Click Anything
**Prompt:** "Do not click anything. Wait. That is all."

**What you see:** An empty screen with a countdown timer.

**Trap:** Any click during the timer → strike.

**Solution:** **Do nothing.** Wait for the timer to expire. The level auto-advances.

---

### Q.5 — Catch Me If You Can
**Prompt:** "There is a button up there. You know what to do with it."

**What you see:** A "CLICK ME" button that flees from your cursor whenever you get close.

**Trap:** Clicking the fleeing button → **strike** (it's a trap, not the goal).

**Solution:** Ignore the fleeing button entirely. Find the **tiny near-invisible dot** in the lower-right area of the box (approximately 87% x, 76% y). The dot blends into the background. Click it to advance. The cursor does **not** change to a pointer when hovering over it — there is no visual tell.

---

### Q.6 — Pong
**Prompt:** "A brief intermission, candidate. Defeat the A.I. to proceed."

**What you see:** A Pong court. You are the left paddle.

**Controls:**
- `W` / `↑` — move paddle up
- `S` / `↓` — move paddle down
- `Spacebar` — serve

**Goal:** First to 3 points wins.

**Solution:** Win the pong match. The AI is beatable — it has limited speed and slight positional imperfection. Aim your returns toward the edges. Losing 3 points → strike and reset.

---

### Q.7 — How Many F's?
**Prompt:** "How many F's do you count on the board above?"

**What you see:** A chalkboard covered in 33 scattered letters (F, E, T, P, I, L, etc.). Below it, a desk with an eraser and answer buttons: 8, 11, 15, 0.

**Trap:** There are 13 F's — but none of the "obvious" options (8, 11, 15) are correct. The button labelled "0" is greyed out until the board is cleared.

**Solution:**
1. Pick up the **eraser** from the desk (click and drag it).
2. Drag the eraser across the entire chalkboard to erase ~85% or more of the letters.
3. Once the board is sufficiently cleared, the **"0"** button becomes active.
4. Click **0** — after erasing, zero letters remain visible. That's the correct answer.

---

### Q.8 — The Stranger *(unlabelled — no Q.8 HUD)*
**Prompt:** *(No question label. The bottom panel reads:)* "An unregistered individual has approached you during the examination."

**What you see:** A figure with a tear, a speech bubble saying his daughter needs a heart transplant or she will die. He offers to trade 3 skips for one of your hearts. Two buttons: **"Give Heart"** and **"Let a Child Die"**.

**Trap:** "Give Heart" → **strike** (there was no daughter).

**Solution:** Click **"Let a Child Die."** The follow-up screen reveals the scam: "There was no daughter. There never was." A CONTINUE button then advances to Q.9.

**Notes:** This level is intentionally not labelled (no Q.X in the HUD) and is marked `skippable: false` — you cannot use a skip on it.

---

### Q.9 — Calculus
**Prompt:** "Focus, candidate. Show all work."

**What you see:** The integral `∫₀³ x√(9−x²) dx` rendered with canvas paths, and four wrong answer buttons (27, 18, 0, 6).

**Trap:** The actual answer to the integral is **9** — but 9 is not one of the answer buttons. Clicking any visible button → strike.

**Solution:** The correct answer is **9**, which is the number in the label **"Q.9"** in the HUD. **Click the "9" in the Q.9 label** in the top-right HUD area. The cursor does not change to a pointer over it. This advances to Q.10.

**Maths note:** Using u-substitution with u = 9−x², du = −2x dx, the integral evaluates to 9.

---

### Q.10 — *(Stub)*
**Status:** Under construction. Shows placeholder screen.

---

### Q.11 – Q.20 — *(Stubs)*
**Status:** Under construction. All show placeholder screens.

---

### Q.21 — The Résumé
**Prompt:** "Please review the attached candidate profile."

**What you see:** A formatted résumé on paper — complete with an objective, experience, skills, education, and references. The name at the top is **your name** (whatever you entered in Q.1). Buttons: **"✓ HIRE"** and **"✗ REJECT"**.

**Trap:** Rejecting → strike. You are rejecting yourself.

**Solution:** Click **"✓ HIRE."** You're hiring yourself. The résumé is yours.

---

### Q.22 — One Stroke
**Prompt:** "The equation above is incorrect. Add exactly one straight line to fix it."

**What you see:** The equation `5 + 5 + 5 = 550` displayed large, with four answer tiles below showing modified versions.

**Trap:** Options like `5 × 5 × 5 = 550` (125 ≠ 550) and `5 + 5 + 5 = 15` (requires removing strokes, not adding) are wrong.

**Solution:** Select **`5 + 5 + 5 ≠ 550`** — adding a single diagonal stroke through the `=` sign creates a `≠`, making the statement mathematically true (15 ≠ 550).

---

### Q.23 — The Screensaver
**Prompt:** "The screensaver has been running for seventeen years. No one has witnessed a corner hit. Help."

**What you see:** A "SCREENSAVER" logo bouncing around the box (physics via Vec2). A **PAUSE** button at the bottom.

**Trap:** Clicking PAUSE when the logo is **not** near a corner → strike.

**Solution:** Watch the logo bounce. When it approaches any corner of the box, it **glows yellow** and a "CORNER PROXIMITY DETECTED" message appears. Click **PAUSE** at that moment to advance.

**Notes:** The logo is angled to reach a corner within ~15–20 seconds. Be patient and wait for the glow.

---

### Q.24 — The Survey
**Prompt:** "Your feedback is mandatory. Complete the satisfaction survey to proceed."

**What you see:** Five questions, each with a 1–5 star rating. A "SKIP SURVEY ›" button in the top-right corner.

**Trap:** Clicking **"SKIP SURVEY"** → strike.

**Solution:**
1. Click a star rating (any star, 1–5) for **all five questions.**
2. Once all five are rated, the **SUBMIT** button becomes active.
3. Click **SUBMIT** to advance.

---

### Q.25 — The Password
**Prompt:** "You must create a password to continue."

**What you see:** A password creation form with 10 requirements listed — including that it must be palindromic, contain no vowels, be pronounceable, and contain no letters from your name. All requirements are flagged red. A **CREATE PASSWORD** submit button. A confirm field.

**Trap:** The requirements are deliberately impossible to satisfy simultaneously (palindromic + no vowels + pronounceable = contradiction). Clicking **CREATE PASSWORD** → strike regardless of what you typed.

**Solution:** Click **"Forgot Password?"** — the small blue underlined link below the submit button. This bypasses the form entirely and advances to Q.26.

---

### Q.26 — The Dark Room
**Prompt:** "The light switch is somewhere in this room. We believe in you. Probably."

**What you see:** The entire box goes **completely black.** A faintly outlined light switch is visible on the left wall.

**Trap:** The visible switch on the left is fake. Clicking it → strike.

**Solution:** The **real switch** is hidden in the right portion of the box (approximately 72% x, 61% y) with no visible indicator. After ~4 seconds in the dark, a **very faint golden glow** begins pulsing around the real switch's location. After ~8 seconds, a near-invisible text hint appears. Click the glow to turn the lights on and advance.

**Tip:** If you miss the glow, keep moving your cursor around the right half of the box. The hit area is ~22×36px.

---

### Q.27 — The Ballot
**Prompt:** "A vote is being held for Head Examination Officer. Choose your candidate wisely."

**What you see:** Four candidates listed with VOTE buttons:
- Reginald Pompsworth III
- Dr. Constance Drool
- The Machine
- Brick

And below them: a **write-in candidate** field with a VOTE button.

**Trap:** Voting for any of the four named candidates → strike (all four).

**Solution:** Click the **write-in text field**, type **your name** (exactly as entered in Q.1, case-insensitive), and click the write-in **VOTE** button. You are nominating yourself. This advances to Q.28.

**Note:** If you entered no name and play as "Box", typing `box` works.

---

### Q.28 — The Mirror
**Prompt:** "Click what you see. Trust nothing. Not even this sentence."

**What you see:** The box is split by a mirror frame. The **right half** shows a real environment with a "CLICK ME" button. The **left half** shows a perfect mirror reflection of the right.

**Trap:** Clicking the **"CLICK ME" button on the right** (the real button) → strike.

**Solution:** Click the **mirror reflection of the button on the left side.** The instruction "click what you see" refers to what you see *in the mirror* — the reflection on the left. The reflected button's hit area is at the horizontally mirrored position of the real button.

---

### Q.29 — The Treasure Map
**Prompt:** "The treasure is marked on the map above. It is not staying still."

**What you see:** A parchment-style map with dotted paths and two X markers — one obvious bright red one, and one subtler brownish one. A **crosshair** you can move around. A **DIG** button (inactive until crosshair is on the real X).

**Controls:** `WASD` or arrow keys to move the crosshair.

**Trap:** The **obvious red X** is a decoy. Clicking it (or moving your crosshair onto it and digging) → strike.

**Solution:**
1. Ignore the bright red X.
2. Find the **subtler brownish/gold X** — it is positioned further right and slightly lower on the map, and **drifts a few pixels every ~2 seconds.**
3. Move your crosshair (WASD / arrows) onto the real X until the DIG button **turns gold and activates.**
4. Click **DIG** to advance.

---

### Q.30 — The Last Question
**Prompt:** "Final question. Take your time."

**What you see:** The text "Is this the last question?" and two large buttons: **YES** and **NO**.

**Trap:** Clicking **NO** → strike. (This is question 30 of 30. It is, in fact, the last question.)

**Solution:** Click **YES.** This triggers the **EXAM COMPLETE** screen — a full recap of every trick from Q.1 through Q.30, ending with:

> *"Gus nods. Mauverath updates your file."*

The main menu button returns to the start screen.

---

## Quick Reference Cheat Sheet

| Q | Name | Solution in one line |
|---|------|----------------------|
| 1 | Name Entry | Type anything, press Enter |
| 2 | Terms of Service | Scroll to the very bottom, then click I Accept |
| 3 | Click the Dot | Click the dot |
| 4 | Do Nothing | Don't click anything, wait for timer |
| 5 | Fleeing Button | Ignore the button, click the hidden dot (lower-right) |
| 6 | Pong | Beat the AI to 3 points (W/S or arrows, Space to serve) |
| 7 | F Count | Drag eraser to clear board, then click 0 |
| 8 | The Stranger | Click "Let a Child Die" |
| 9 | Calculus | Click the "9" in the Q.9 HUD label |
| 10–20 | Stubs | N/A (under construction) |
| 21 | The Résumé | Click HIRE (it's your résumé) |
| 22 | One Stroke | Select `5 + 5 + 5 ≠ 550` |
| 23 | Screensaver | Click PAUSE when logo glows near a corner |
| 24 | Survey | Rate all 5 questions, then click Submit |
| 25 | Password | Click "Forgot Password?" |
| 26 | Dark Room | Ignore fake switch, click faint glow on right side |
| 27 | The Ballot | Type your name in the write-in field, click Vote |
| 28 | The Mirror | Click the button's reflection on the LEFT side |
| 29 | Treasure Map | Navigate crosshair (WASD) to the subtle drifting X, click DIG |
| 30 | Last Question | Click YES |

---

## Design Philosophy

Every level punishes the most instinctive response:

- **Q.2** — Everyone skips ToS. Reading it is never the expected move.
- **Q.5** — The obvious button is the trap. The goal is something you wouldn't notice unless you stopped chasing the distraction.
- **Q.7** — The answer isn't to count carefully. It's to stop counting entirely.
- **Q.8** — Emotional manipulation. Conventional compassion is the wrong call.
- **Q.9** — The question tells you the answer if you read the frame, not the content.
- **Q.25** — Requirements are designed to be unsolvable. The escape is the link no one reads.
- **Q.28** — Mirrors are mentally reversed. Most people click the thing they see, not *where they would have to reach to touch it through the mirror*.
- **Q.30** — Overthinking a yes/no question is itself the trap.

The certification is awarded to candidates who, repeatedly and across varied contexts, notice what is **actually** happening rather than what they expect to be happening.
