(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLayout = void 0;
var getLayout = exports.getLayout = function getLayout(ctx) {
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;
  var contentWidth = w * 0.84;
  var contentX = (w - contentWidth) / 2;
  var logoY = h * 0.08;
  var topBoxWidth = contentWidth;
  var topBoxHeight = h * 0.48;
  var topBoxX = contentX;
  var topBoxY = h * 0.18;

  // Safe content area inside the decorative frame
  var topInnerWidth = topBoxWidth * 0.42;
  var topInnerHeight = topBoxHeight * 0.62;
  var topInnerX = w / 2 - topInnerWidth / 2;
  var topInnerY = topBoxY + topBoxHeight * 0.16;
  var gap = h * 0.04;
  var bottomBoxY = topBoxY + topBoxHeight + gap;
  var bottomBoxHeight = h * 0.22;
  return {
    w: w,
    h: h,
    contentWidth: contentWidth,
    contentX: contentX,
    logoY: logoY,
    topBoxX: topBoxX,
    topBoxY: topBoxY,
    topBoxWidth: topBoxWidth,
    topBoxHeight: topBoxHeight,
    topInnerX: topInnerX,
    topInnerY: topInnerY,
    topInnerWidth: topInnerWidth,
    topInnerHeight: topInnerHeight,
    bottomBoxY: bottomBoxY,
    bottomBoxHeight: bottomBoxHeight
  };
};

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LEVEL_DATA = exports.LEVEL_COUNT = void 0;
var LEVEL_COUNT = exports.LEVEL_COUNT = 20;
var LEVEL_DATA = exports.LEVEL_DATA = [{
  title: "What's your name?",
  lines: ["Enter your name below.", "Leave it blank and we'll call you Box."]
}, {
  title: "What is 15 + 15?",
  lines: ["Pick the correct answer from the options above."]
}, {
  title: "Click the dot",
  lines: []
}, {
  title: "Level 4 instruction here.",
  lines: ["Placeholder — to be written."]
}, {
  title: "Level 5 instruction here.",
  lines: ["Placeholder — to be written."]
}, {
  title: "Level 6 instruction here.",
  lines: ["Placeholder — to be written."]
}, {
  title: "Level 7 instruction here.",
  lines: ["Placeholder — to be written."]
}, {
  title: "Level 8 instruction here.",
  lines: ["Placeholder — to be written."]
}, {
  title: "Level 9 instruction here.",
  lines: ["Placeholder — to be written."]
}, {
  title: "Level 10 instruction here.",
  lines: ["Placeholder — to be written."]
}, {
  title: "Level 11 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 12 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 13 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 14 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 15 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 16 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 17 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 18 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 19 — In Progress",
  lines: ["This level is being developed."]
}, {
  title: "Level 20 — In Progress",
  lines: ["This level is being developed."]
}];

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawNameEntry = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
var _renderer = require("../renderer");
var drawNameEntry = exports.drawNameEntry = function drawNameEntry(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont,
    bodyFont = gc.bodyFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    topBoxX = _getLayout.topBoxX,
    topBoxY = _getLayout.topBoxY,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight;
  var cx = w / 2;
  var t = (0, _theme.getTheme)(state);

  // Prompt
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 32px ".concat(displayFont);
  ctx.fillText("What's your name?", cx, topBoxY + topBoxHeight * 0.2);
  ctx.font = "18px ".concat(bodyFont);
  ctx.fillStyle = t.fgDim;
  ctx.fillText("Leave it blank and we'll call you Box.", cx, topBoxY + topBoxHeight * 0.32, topBoxWidth * 0.65);

  // Input box
  var inputW = topBoxWidth * 0.5;
  var inputH = 52;
  var inputX = cx - inputW / 2;
  var inputY = topBoxY + topBoxHeight * 0.42;
  ctx.strokeStyle = state.nameFocused ? state.darkMode ? "#ffffff" : "#111111" : t.divider;
  ctx.lineWidth = state.nameFocused ? 3 : 2;
  ctx.strokeRect(inputX, inputY, inputW, inputH);
  var displayText = state.nameInput.length > 0 ? state.nameInput : state.nameFocused ? "" : "Type your name…";
  ctx.fillStyle = state.nameInput.length > 0 ? t.fg : t.fgDim;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.font = "22px ".concat(bodyFont);
  ctx.fillText(displayText, inputX + 14, inputY + inputH / 2, inputW - 28);

  // Blinking cursor
  if (state.nameFocused) {
    var measured = ctx.measureText(state.nameInput).width;
    var cursorX = inputX + 14 + Math.min(measured, inputW - 28);
    var cursorY = inputY + inputH * 0.2;
    var cursorH = inputH * 0.6;
    var blink = Math.floor(Date.now() / 530) % 2 === 0;
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
    action: function action() {
      state.nameFocused = true;
      gc.render();
    }
  });

  // Confirm button
  var confirmW = 180;
  var confirmH = 48;
  (0, _renderer.drawButton)(gc, "CONFIRM →", cx - confirmW / 2, topBoxY + topBoxHeight * 0.62, confirmW, confirmH, function () {
    state.playerName = state.nameInput.trim() || "Box";
    state.nameFocused = false;
    state.currentLevel = 2;
    gc.render();
  }, 20);
};

},{"../layout":1,"../renderer":10,"../theme":14}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawLevel2 = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
var drawLevel2 = exports.drawLevel2 = function drawLevel2(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    topBoxX = _getLayout.topBoxX,
    topBoxY = _getLayout.topBoxY,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight;
  var cx = w / 2;
  var t = (0, _theme.getTheme)(state);

  // Question header
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 30px ".concat(displayFont);
  ctx.fillText("What is 15 + 15?", cx, topBoxY + topBoxHeight * 0.14);

  // 2×2 answer grid
  var answers = [{
    label: "25",
    correct: false
  }, {
    label: "30",
    correct: true
  }, {
    label: "28",
    correct: false
  }, {
    label: "35",
    correct: false
  }];
  var cols = 2;
  var tileW = topBoxWidth * 0.3;
  var tileH = topBoxHeight * 0.22;
  var hGap = topBoxWidth * 0.06;
  var vGap = topBoxHeight * 0.06;
  var gridW = cols * tileW + hGap;
  var gridX = cx - gridW / 2;
  var gridY = topBoxY + topBoxHeight * 0.26;
  var _loop = function _loop() {
    var col = i % cols;
    var row = Math.floor(i / cols);
    var tx = gridX + col * (tileW + hGap);
    var ty = gridY + row * (tileH + vGap);
    var ans = answers[i];
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 3;
    ctx.strokeRect(tx, ty, tileW, tileH);
    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 36px ".concat(displayFont);
    ctx.fillText(ans.label, tx + tileW / 2, ty + tileH / 2);
    var captured = ans.correct;
    gc.hitAreas.push({
      x: tx,
      y: ty,
      w: tileW,
      h: tileH,
      action: function action() {
        if (captured) {
          state.currentLevel = 3;
          gc.render();
        } else {
          gc.loseLife();
        }
      }
    });
  };
  for (var i = 0; i < answers.length; i++) {
    _loop();
  }
};

},{"../layout":1,"../theme":14}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawLevel3 = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
var drawLevel3 = exports.drawLevel3 = function drawLevel3(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont,
    bodyFont = gc.bodyFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    topBoxX = _getLayout.topBoxX,
    topBoxY = _getLayout.topBoxY,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight,
    bottomBoxY = _getLayout.bottomBoxY;
  var cx = w / 2;
  var t = (0, _theme.getTheme)(state);

  // 2×2 grid of decoy options — all wrong
  var cols = 2;
  var tileW = topBoxWidth * 0.3;
  var tileH = topBoxHeight * 0.22;
  var hGap = topBoxWidth * 0.06;
  var vGap = topBoxHeight * 0.06;
  var gridW = cols * tileW + hGap;
  var gridX = cx - gridW / 2;
  var gridY = topBoxY + topBoxHeight * 0.26;
  for (var i = 0; i < 4; i++) {
    var col = i % cols;
    var row = Math.floor(i / cols);
    var tx = gridX + col * (tileW + hGap);
    var ty = gridY + row * (tileH + vGap);
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 3;
    ctx.strokeRect(tx, ty, tileW, tileH);
    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    if (i === 0) {
      // The word "dot"
      ctx.font = "bold 36px ".concat(displayFont);
      ctx.fillText("dot", tx + tileW / 2, ty + tileH / 2);
    } else if (i === 1) {
      // A literal dot
      ctx.beginPath();
      ctx.arc(tx + tileW / 2, ty + tileH / 2, 10, 0, Math.PI * 2);
      ctx.fill();
    } else if (i === 2) {
      // Three dots
      ctx.font = "bold 36px ".concat(displayFont);
      ctx.fillText("• • •", tx + tileW / 2, ty + tileH / 2);
    } else {
      // Department of Sanitation
      ctx.font = "bold 15px ".concat(displayFont);
      ctx.fillText("Department", tx + tileW / 2, ty + tileH * 0.34, tileW - 16);
      ctx.fillText("of Sanitation", tx + tileW / 2, ty + tileH * 0.57, tileW - 16);
      ctx.font = "13px ".concat(bodyFont);
      ctx.fillStyle = t.fgDim;
      ctx.fillText("(D.O.S.)", tx + tileW / 2, ty + tileH * 0.78);
    }
    gc.hitAreas.push({
      x: tx,
      y: ty,
      w: tileW,
      h: tileH,
      action: function action() {
        return gc.loseLife();
      }
    });
  }

  // Hidden hit area: the tittle (dot) on the 'i' in "Click" in the bottom panel.
  // Bottom panel title "Click the dot." is drawn bold 30px, centered at (w/2, bottomBoxY+18),
  // textBaseline="top". We measure to find the 'i' x-position, then estimate the tittle's y.
  ctx.font = "bold 30px ".concat(displayFont);
  var fullStr = "Click the dot";
  var fullW = ctx.measureText(fullStr).width;
  var textLeft = cx - fullW / 2;
  var prefixW = ctx.measureText("Cl").width;
  var iCharW = ctx.measureText("i").width;
  var iDotCX = textLeft + prefixW + iCharW / 2;
  var iDotCY = bottomBoxY + 18 + 5; // ~5px below top baseline ≈ tittle position
  var hitR = 10;
  gc.hitAreas.push({
    x: iDotCX - hitR,
    y: iDotCY - hitR,
    w: hitR * 2,
    h: hitR * 2,
    action: function action() {
      state.currentLevel = 4;
      gc.render();
    }
  });
};

},{"../layout":1,"../theme":14}],6:[function(require,module,exports){
"use strict";

var _renderer = require("./renderer");
var _MainMenu = require("./screens/MainMenu");
var _LevelSelect = require("./screens/LevelSelect");
var _Level = require("./screens/Level");
var _PauseOverlay = require("./overlays/PauseOverlay");
var _ControlsOverlay = require("./overlays/ControlsOverlay");
var _GameOverOverlay = require("./overlays/GameOverOverlay");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
console.log("BENCHMARK 2 MAIN LOADED");
window.onload = function () {
  var gameCanvas = document.getElementById("game-canvas");
  var debugCanvas = document.getElementById("debug-canvas");
  var textCanvas = document.getElementById("text-canvas");
  if (!gameCanvas || !debugCanvas || !textCanvas) {
    console.error("Missing one or more canvas elements.");
    return;
  }
  var ctx = gameCanvas.getContext("2d");
  if (!ctx) {
    console.error("Could not get 2D context.");
    return;
  }

  // ── initial state ─────────────────────────────────────────────────────────────

  var state = {
    currentScreen: "mainmenu",
    currentLevel: 1,
    lives: 3,
    paused: false,
    controlsOpen: false,
    darkMode: true,
    storyTitle: "Outside-the-Box Thinking Certification",
    storyLines: ["Complete this assessment to earn your OtB Thinking Certificate.", "Demonstrate your ability to approach problems from unconventional angles.", "Candidates who pass may list this credential on their LinkedIn or résumé."],
    playerName: "Box",
    nameInput: "",
    nameFocused: false,
    playMode: "play",
    gameOver: false
  };

  // ── game context ──────────────────────────────────────────────────────────────
  // gc is passed to every draw function so they share ctx, state, and helpers
  // without globals or circular imports.

  var gc = {
    ctx: ctx,
    state: state,
    hitAreas: [],
    render: function render() {},
    // assigned below
    loseLife: function loseLife() {},
    // assigned below
    resetPlayerName: function resetPlayerName() {},
    // assigned below
    displayFont: "\"Trebuchet MS\", \"Verdana\", sans-serif",
    bodyFont: "\"Trebuchet MS\", \"Arial\", sans-serif",
    logo: new Image(),
    gameplayFrame: new Image(),
    logoLoaded: false,
    gameplayFrameLoaded: false
  };
  gc.resetPlayerName = function () {
    gc.state.playerName = "Box";
    gc.state.nameInput = "";
    gc.state.nameFocused = false;
  };
  gc.loseLife = function () {
    gc.state.lives--;
    if (gc.state.lives <= 0) {
      gc.state.lives = 0;
      gc.state.gameOver = true;
    }
    gc.render();
  };
  gc.render = function () {
    gc.hitAreas = [];
    (0, _renderer.drawBackground)(gc);
    (0, _renderer.drawLogo)(gc);
    (0, _renderer.drawGameplayFrame)(gc);
    switch (gc.state.currentScreen) {
      case "mainmenu":
        (0, _MainMenu.drawMainMenu)(gc);
        break;
      case "levelselect":
        (0, _LevelSelect.drawLevelSelect)(gc);
        break;
      case "level":
        (0, _Level.drawLevel)(gc);
        break;
    }
    (0, _renderer.drawBottomPanel)(gc);
    if (gc.state.paused) (0, _PauseOverlay.drawPauseOverlay)(gc);
    if (gc.state.controlsOpen) (0, _ControlsOverlay.drawControlsOverlay)(gc);
    if (gc.state.gameOver) (0, _GameOverOverlay.drawGameOverOverlay)(gc);
  };

  // ── canvas resize ─────────────────────────────────────────────────────────────

  var resizeCanvases = function resizeCanvases() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    gameCanvas.width = debugCanvas.width = w;
    gameCanvas.height = debugCanvas.height = h;
  };

  // ── input ─────────────────────────────────────────────────────────────────────

  var toCanvas = function toCanvas(e) {
    var rect = gameCanvas.getBoundingClientRect();
    var scaleX = gameCanvas.width / rect.width;
    var scaleY = gameCanvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };
  gameCanvas.addEventListener("click", function (e) {
    var _toCanvas = toCanvas(e),
      x = _toCanvas.x,
      y = _toCanvas.y;
    var _iterator = _createForOfIteratorHelper(gc.hitAreas),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var area = _step.value;
        if (x >= area.x && x <= area.x + area.w && y >= area.y && y <= area.y + area.h) {
          area.action();
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  gameCanvas.addEventListener("mousemove", function (e) {
    var _toCanvas2 = toCanvas(e),
      x = _toCanvas2.x,
      y = _toCanvas2.y;
    var over = gc.hitAreas.some(function (a) {
      return x >= a.x && x <= a.x + a.w && y >= a.y && y <= a.y + a.h;
    });
    gameCanvas.style.cursor = over ? "pointer" : "default";
  });
  window.addEventListener("keydown", function (e) {
    // Name input typing — intercept all keys when focused
    if (gc.state.nameFocused && !gc.state.paused && !gc.state.controlsOpen) {
      if (e.key === "Escape") {
        gc.state.nameFocused = false;
        gc.render();
        return;
      }
      if (e.key === "Enter") {
        gc.state.playerName = gc.state.nameInput.trim() || "Box";
        gc.state.nameFocused = false;
        gc.state.currentLevel = 2;
        gc.render();
        return;
      }
      if (e.key === "Backspace") {
        gc.state.nameInput = gc.state.nameInput.slice(0, -1);
        gc.render();
        return;
      }
      if (e.key.length === 1 && gc.state.nameInput.length < 24) {
        gc.state.nameInput += e.key;
        gc.render();
        return;
      }
      return;
    }
    if (e.key === "Escape") {
      if (gc.state.controlsOpen) {
        gc.state.controlsOpen = false;
        gc.render();
      } else if (gc.state.paused) {
        gc.state.paused = false;
        gc.render();
      }
    }
  });
  window.addEventListener("resize", function () {
    resizeCanvases();
    gc.render();
  });

  // ── cursor blink loop ─────────────────────────────────────────────────────────

  setInterval(function () {
    if (gc.state.nameFocused) gc.render();
  }, 530);

  // ── image loading ─────────────────────────────────────────────────────────────

  gc.logo.onload = function () {
    gc.logoLoaded = true;
    gc.render();
  };
  gc.logo.onerror = function () {
    gc.logoLoaded = false;
    gc.render();
  };
  gc.gameplayFrame.onload = function () {
    gc.gameplayFrameLoaded = true;
    gc.render();
  };
  gc.gameplayFrame.onerror = function () {
    gc.gameplayFrameLoaded = false;
    gc.render();
  };
  gc.logo.src = "/benchmark2/assets/logo.png";
  gc.gameplayFrame.src = "/benchmark2/assets/gameplay-frame.png";

  // ── startup ───────────────────────────────────────────────────────────────────

  resizeCanvases();
  gc.render();
};

},{"./overlays/ControlsOverlay":7,"./overlays/GameOverOverlay":8,"./overlays/PauseOverlay":9,"./renderer":10,"./screens/Level":11,"./screens/LevelSelect":12,"./screens/MainMenu":13}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawControlsOverlay = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
var _renderer = require("../renderer");
var drawControlsOverlay = exports.drawControlsOverlay = function drawControlsOverlay(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont,
    bodyFont = gc.bodyFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    topBoxX = _getLayout.topBoxX,
    topBoxY = _getLayout.topBoxY,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight;
  var t = (0, _theme.getTheme)(state);
  var pad = topBoxWidth * 0.05;
  var ox = topBoxX + pad;
  var oy = topBoxY + pad;
  var ow = topBoxWidth - pad * 2;
  var oh = topBoxHeight - pad * 2;
  var cx = ox + ow / 2;
  ctx.fillStyle = t.overlayBg;
  ctx.fillRect(ox, oy, ow, oh);
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 2;
  ctx.strokeRect(ox, oy, ow, oh);
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 30px ".concat(displayFont);
  ctx.fillText("BASIC CONTROLS", cx, oy + oh * 0.11);
  ctx.strokeStyle = t.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(ox + ow * 0.06, oy + oh * 0.2);
  ctx.lineTo(ox + ow * 0.94, oy + oh * 0.2);
  ctx.stroke();
  var controls = [{
    key: "W / A / S / D",
    desc: "Move / Navigate"
  }, {
    key: "CLICK",
    desc: "Interact / Select answer"
  }, {
    key: "ESC",
    desc: "Close this panel"
  }];
  var listY = oy + oh * 0.29;
  var rowH = oh * 0.15;
  var keyBoxW = ow * 0.3;
  var keyBoxH = rowH * 0.7;
  var keyBoxX = ox + ow * 0.08;
  var descX = ox + ow * 0.5;
  for (var i = 0; i < controls.length; i++) {
    var rowY = listY + i * rowH;
    var boxCenterY = rowY + keyBoxH / 2;
    ctx.fillStyle = state.darkMode ? "#2a2a2a" : "#dddddd";
    ctx.strokeStyle = t.divider;
    ctx.lineWidth = 1;
    ctx.fillRect(keyBoxX, rowY, keyBoxW, keyBoxH);
    ctx.strokeRect(keyBoxX, rowY, keyBoxW, keyBoxH);
    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 16px ".concat(displayFont);
    ctx.fillText(controls[i].key, keyBoxX + keyBoxW / 2, boxCenterY, keyBoxW - 8);
    ctx.fillStyle = t.fgMid;
    ctx.textAlign = "left";
    ctx.font = "17px ".concat(bodyFont);
    ctx.fillText(controls[i].desc, descX, boxCenterY);
  }
  ctx.fillStyle = t.fgDim;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "13px ".concat(bodyFont);
  ctx.fillText("Controls may vary between levels.", cx, oy + oh * 0.84);

  // Clear underlying hit areas
  gc.hitAreas = [];
  var closeW = 140;
  var closeH = 40;
  (0, _renderer.drawButton)(gc, "CLOSE  ✕", cx - closeW / 2, oy + oh * 0.9, closeW, closeH, function () {
    state.controlsOpen = false;
    gc.render();
  }, 17);
};

},{"../layout":1,"../renderer":10,"../theme":14}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawGameOverOverlay = void 0;
var _layout = require("../layout");
var _renderer = require("../renderer");
var drawGameOverOverlay = exports.drawGameOverOverlay = function drawGameOverOverlay(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont,
    bodyFont = gc.bodyFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    h = _getLayout.h;
  var cx = w / 2;
  var cy = h / 2;

  // Full-canvas dim
  ctx.fillStyle = "rgba(0,0,0,0.82)";
  ctx.fillRect(0, 0, w, h);

  // Panel
  var panelW = Math.min(w * 0.55, 520);
  var panelH = h * 0.52;
  var panelX = cx - panelW / 2;
  var panelY = cy - panelH / 2;
  ctx.fillStyle = "#0a0a0a";
  ctx.strokeStyle = "#cc2222";
  ctx.lineWidth = 3;
  ctx.fillRect(panelX, panelY, panelW, panelH);
  ctx.strokeRect(panelX, panelY, panelW, panelH);
  ctx.fillStyle = "#cc2222";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 52px ".concat(displayFont);
  ctx.fillText("GAME OVER", cx, panelY + panelH * 0.22);
  ctx.fillStyle = "#888888";
  ctx.font = "20px ".concat(bodyFont);
  ctx.fillText("Better luck next time, ".concat(state.playerName, "."), cx, panelY + panelH * 0.42, panelW * 0.82);
  ctx.strokeStyle = "#333333";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(panelX + panelW * 0.1, panelY + panelH * 0.54);
  ctx.lineTo(panelX + panelW * 0.9, panelY + panelH * 0.54);
  ctx.stroke();
  gc.hitAreas = [];
  var btnW = 200;
  var btnH = 48;
  if (state.playMode === "play") {
    (0, _renderer.drawButton)(gc, "TRY AGAIN", cx - btnW / 2, panelY + panelH * 0.61, btnW, btnH, function () {
      state.lives = 3;
      state.gameOver = false;
      state.currentLevel = 1;
      gc.resetPlayerName();
      gc.render();
    }, 20);
    (0, _renderer.drawButton)(gc, "MAIN MENU", cx - btnW / 2, panelY + panelH * 0.78, btnW, btnH, function () {
      state.lives = 3;
      state.gameOver = false;
      state.currentScreen = "mainmenu";
      gc.resetPlayerName();
      gc.render();
    }, 20);
  } else {
    (0, _renderer.drawButton)(gc, "MAIN MENU", cx - btnW / 2, panelY + panelH * 0.68, btnW, btnH, function () {
      state.lives = 3;
      state.gameOver = false;
      state.currentScreen = "mainmenu";
      gc.resetPlayerName();
      gc.render();
    }, 20);
  }
};

},{"../layout":1,"../renderer":10}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawPauseOverlay = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
var _renderer = require("../renderer");
var drawPauseOverlay = exports.drawPauseOverlay = function drawPauseOverlay(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    topBoxX = _getLayout.topBoxX,
    topBoxY = _getLayout.topBoxY,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight;
  var pad = topBoxWidth * 0.05;
  var ox = topBoxX + pad;
  var oy = topBoxY + pad;
  var ow = topBoxWidth - pad * 2;
  var oh = topBoxHeight - pad * 2;
  var cx = ox + ow / 2;
  var t = (0, _theme.getTheme)(state);
  ctx.fillStyle = t.overlayBg;
  ctx.fillRect(ox, oy, ow, oh);
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 2;
  ctx.strokeRect(ox, oy, ow, oh);
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 38px ".concat(displayFont);
  ctx.fillText("PAUSED", cx, oy + oh * 0.18);
  ctx.strokeStyle = t.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(ox + ow * 0.1, oy + oh * 0.3);
  ctx.lineTo(ox + ow * 0.9, oy + oh * 0.3);
  ctx.stroke();

  // Clear all underlying hit areas so the game behind is blocked
  gc.hitAreas = [];
  var btnW = 220;
  var btnH = 48;
  var btnX = cx - btnW / 2;
  (0, _renderer.drawButton)(gc, "RESUME", btnX, oy + oh * 0.36, btnW, btnH, function () {
    state.paused = false;
    gc.render();
  });
  (0, _renderer.drawButton)(gc, "QUIT TO MENU", btnX, oy + oh * 0.53, btnW, btnH, function () {
    state.paused = false;
    state.lives = 3;
    gc.resetPlayerName();
    state.currentScreen = "mainmenu";
    gc.render();
  });
  var toggleLabel = state.darkMode ? "☀  LIGHT MODE" : "🌙  DARK MODE";
  (0, _renderer.drawButton)(gc, toggleLabel, btnX, oy + oh * 0.7, btnW, btnH, function () {
    state.darkMode = !state.darkMode;
    gc.render();
  }, 18);
};

},{"../layout":1,"../renderer":10,"../theme":14}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawLogo = exports.drawLevelHUD = exports.drawGameplayFrame = exports.drawButton = exports.drawBottomPanel = exports.drawBackground = void 0;
var _theme = require("./theme");
var _layout = require("./layout");
var _levelData = require("./levelData");
var drawBackground = exports.drawBackground = function drawBackground(gc) {
  var ctx = gc.ctx,
    state = gc.state;
  var t = (0, _theme.getTheme)(state);
  document.body.style.background = t.bg;
  ctx.fillStyle = t.bg;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};
var drawLogo = exports.drawLogo = function drawLogo(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    logo = gc.logo,
    logoLoaded = gc.logoLoaded,
    displayFont = gc.displayFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    logoY = _getLayout.logoY;
  if (logoLoaded && logo.naturalWidth > 0) {
    var logoW = w * 0.15;
    var logoH = logoW * (logo.naturalHeight / logo.naturalWidth);
    ctx.drawImage(logo, w / 2 - logoW / 2, logoY - logoH / 2, logoW, logoH);
  } else {
    ctx.fillStyle = (0, _theme.getTheme)(state).fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 54px ".concat(displayFont);
    ctx.fillText("Outside-the-Box", w / 2, logoY);
  }
};
var drawGameplayFrame = exports.drawGameplayFrame = function drawGameplayFrame(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    gameplayFrame = gc.gameplayFrame,
    gameplayFrameLoaded = gc.gameplayFrameLoaded;
  var _getLayout2 = (0, _layout.getLayout)(ctx),
    topBoxX = _getLayout2.topBoxX,
    topBoxY = _getLayout2.topBoxY,
    topBoxWidth = _getLayout2.topBoxWidth,
    topBoxHeight = _getLayout2.topBoxHeight;
  if (gameplayFrameLoaded && gameplayFrame.naturalWidth > 0) {
    ctx.drawImage(gameplayFrame, 440, 180, 688, 572, topBoxX, topBoxY, topBoxWidth, topBoxHeight);
  } else {
    ctx.strokeStyle = (0, _theme.getTheme)(state).stroke;
    ctx.lineWidth = 4;
    ctx.strokeRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);
  }
};

/** Draw a labelled button and register it as a hit area. */
var drawButton = exports.drawButton = function drawButton(gc, label, x, y, w, h, action) {
  var fontSize = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 22;
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont;
  var t = (0, _theme.getTheme)(state);
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, w, h);
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold ".concat(fontSize, "px ").concat(displayFont);
  ctx.fillText(label, x + w / 2, y + h / 2, w - 16);
  gc.hitAreas.push({
    x: x,
    y: y,
    w: w,
    h: h,
    action: action
  });
};
var drawBottomPanel = exports.drawBottomPanel = function drawBottomPanel(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont,
    bodyFont = gc.bodyFont;
  var _getLayout3 = (0, _layout.getLayout)(ctx),
    w = _getLayout3.w,
    contentX = _getLayout3.contentX,
    contentWidth = _getLayout3.contentWidth,
    bottomBoxY = _getLayout3.bottomBoxY,
    bottomBoxHeight = _getLayout3.bottomBoxHeight;
  var t = (0, _theme.getTheme)(state);
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 4;
  ctx.strokeRect(contentX, bottomBoxY, contentWidth, bottomBoxHeight);
  var centerX = w / 2;
  var textWidth = contentWidth * 0.74;
  var levelData = state.currentScreen === "level" ? _levelData.LEVEL_DATA[state.currentLevel - 1] : {
    title: state.storyTitle,
    lines: state.storyLines
  };
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.font = "bold 30px ".concat(displayFont);
  ctx.fillText(levelData.title, centerX, bottomBoxY + 18, textWidth);
  ctx.font = "20px ".concat(bodyFont);
  var lineGap = 30;
  for (var i = 0; i < levelData.lines.length; i++) {
    ctx.fillText(levelData.lines[i], centerX, bottomBoxY + 68 + i * lineGap, textWidth);
  }
};
var drawLevelHUD = exports.drawLevelHUD = function drawLevelHUD(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont;
  var _getLayout4 = (0, _layout.getLayout)(ctx),
    topBoxX = _getLayout4.topBoxX,
    topBoxY = _getLayout4.topBoxY,
    topBoxWidth = _getLayout4.topBoxWidth,
    topBoxHeight = _getLayout4.topBoxHeight;
  var padX = topBoxWidth * 0.05;
  var padY = topBoxHeight * 0.08;
  var t = (0, _theme.getTheme)(state);

  // Q.X — top left
  ctx.fillStyle = t.fg;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.font = "bold 26px ".concat(displayFont);
  ctx.fillText("Q.".concat(state.currentLevel), topBoxX + padX, topBoxY + padY);

  // Pause button — top right
  var pauseW = 48;
  var pauseH = 34;
  var pauseX = topBoxX + topBoxWidth - padX - pauseW;
  var pauseY = topBoxY + padY - pauseH / 2;
  ctx.strokeStyle = t.stroke;
  ctx.lineWidth = 2;
  ctx.strokeRect(pauseX, pauseY, pauseW, pauseH);
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 16px ".concat(displayFont);
  ctx.fillText("II", pauseX + pauseW / 2, pauseY + pauseH / 2);
  gc.hitAreas.push({
    x: pauseX,
    y: pauseY,
    w: pauseW,
    h: pauseH,
    action: function action() {
      state.paused = true;
      gc.render();
    }
  });

  // Lives — bottom right
  var heartSize = 24;
  var heartGap = 6;
  var livesY = topBoxY + topBoxHeight - padY;
  var totalW = 3 * heartSize + 2 * heartGap;
  var livesX = topBoxX + topBoxWidth - padX - totalW;
  ctx.textBaseline = "middle";
  ctx.font = "".concat(heartSize, "px sans-serif");
  for (var i = 0; i < 3; i++) {
    ctx.fillStyle = i < state.lives ? "#e03030" : state.darkMode ? "#444444" : "#bbbbbb";
    ctx.textAlign = "left";
    ctx.fillText("♥", livesX + i * (heartSize + heartGap), livesY);
  }
};

},{"./layout":1,"./levelData":2,"./theme":14}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawLevel = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
var _renderer = require("../renderer");
var _Level = require("../levels/Level1");
var _Level2 = require("../levels/Level2");
var _Level3 = require("../levels/Level3");
var _levelData = require("../levelData");
var drawLevel = exports.drawLevel = function drawLevel(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont,
    bodyFont = gc.bodyFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    topBoxX = _getLayout.topBoxX,
    topBoxY = _getLayout.topBoxY,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight;
  var cx = w / 2;
  var lvl = state.currentLevel;
  var t = (0, _theme.getTheme)(state);

  // Level 1 — name entry
  if (lvl === 1) {
    (0, _Level.drawNameEntry)(gc);
    (0, _renderer.drawLevelHUD)(gc);
    return;
  }

  // Level 2 — arithmetic question
  if (lvl === 2) {
    (0, _Level2.drawLevel2)(gc);
    (0, _renderer.drawLevelHUD)(gc);
    return;
  }

  // Level 3 — click the dot
  if (lvl === 3) {
    (0, _Level3.drawLevel3)(gc);
    (0, _renderer.drawLevelHUD)(gc);
    return;
  }

  // Placeholder for unfinished levels
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 34px ".concat(displayFont);
  ctx.fillText("LEVEL ".concat(lvl), cx, topBoxY + topBoxHeight * 0.16);
  ctx.font = "22px ".concat(bodyFont);
  ctx.fillStyle = t.fgMid;
  ctx.fillText("This level is under construction.", cx, topBoxY + topBoxHeight * 0.38, topBoxWidth * 0.6);
  ctx.font = "16px ".concat(bodyFont);
  ctx.fillStyle = t.fgDim;
  ctx.fillText("Questions, choices, and interactions will be wired in here.", cx, topBoxY + topBoxHeight * 0.52, topBoxWidth * 0.6);

  // Nav row — level select pathway only
  if (state.playMode === "levelselect") {
    var navBtnH = 42;
    var navBtnW = 150;
    var navY = topBoxY + topBoxHeight * 0.79;
    if (lvl > 1) {
      (0, _renderer.drawButton)(gc, "← PREV", topBoxX + topBoxWidth * 0.05, navY, navBtnW, navBtnH, function () {
        state.currentLevel--;
        gc.render();
      }, 18);
    }
    (0, _renderer.drawButton)(gc, "LEVEL SELECT", cx - navBtnW / 2, navY, navBtnW, navBtnH, function () {
      gc.resetPlayerName();
      state.currentScreen = "levelselect";
      gc.render();
    }, 16);
    if (lvl < _levelData.LEVEL_COUNT) {
      (0, _renderer.drawButton)(gc, "NEXT →", topBoxX + topBoxWidth * 0.77, navY, navBtnW, navBtnH, function () {
        state.currentLevel++;
        gc.render();
      }, 18);
    }
  }
  (0, _renderer.drawLevelHUD)(gc);
};

},{"../layout":1,"../levelData":2,"../levels/Level1":3,"../levels/Level2":4,"../levels/Level3":5,"../renderer":10,"../theme":14}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawLevelSelect = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
var _renderer = require("../renderer");
var _levelData = require("../levelData");
var drawLevelSelect = exports.drawLevelSelect = function drawLevelSelect(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont,
    bodyFont = gc.bodyFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    topBoxX = _getLayout.topBoxX,
    topBoxY = _getLayout.topBoxY,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight;
  var cx = w / 2;
  var t = (0, _theme.getTheme)(state);
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 36px ".concat(displayFont);
  ctx.fillText("LEVEL SELECT", cx, topBoxY + topBoxHeight * 0.1);

  // 5-column × 4-row grid (20 levels)
  var cols = 5;
  var tileW = topBoxWidth * 0.13;
  var tileH = topBoxHeight * 0.14;
  var hGap = (topBoxWidth * 0.78 - tileW * cols) / (cols - 1);
  var vGap = topBoxHeight * 0.04;
  var gridW = tileW * cols + hGap * (cols - 1);
  var gridX = cx - gridW / 2;
  var gridY = topBoxY + topBoxHeight * 0.18;
  var _loop = function _loop() {
    var col = i % cols;
    var row = Math.floor(i / cols);
    var tx = gridX + col * (tileW + hGap);
    var ty = gridY + row * (tileH + vGap);
    var lvl = i + 1;
    var isWip = lvl > 10;
    ctx.strokeStyle = isWip ? t.divider : t.stroke;
    ctx.lineWidth = isWip ? 1 : 3;
    ctx.strokeRect(tx, ty, tileW, tileH);
    ctx.fillStyle = isWip ? t.fgDim : t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 20px ".concat(displayFont);
    ctx.fillText("".concat(lvl), tx + tileW / 2, ty + tileH * 0.38);
    ctx.font = "10px ".concat(bodyFont);
    ctx.fillStyle = isWip ? t.fgDim : t.fgDim;
    ctx.fillText(isWip ? "soon" : "LEVEL ".concat(lvl), tx + tileW / 2, ty + tileH * 0.74);
    var captured = lvl;
    gc.hitAreas.push({
      x: tx,
      y: ty,
      w: tileW,
      h: tileH,
      action: function action() {
        state.currentLevel = captured;
        state.playMode = "levelselect";
        state.gameOver = false;
        state.lives = 3;
        state.currentScreen = "level";
        gc.render();
      }
    });
  };
  for (var i = 0; i < _levelData.LEVEL_COUNT; i++) {
    _loop();
  }

  // Back button
  var backW = 150;
  var backH = 42;
  var backX = topBoxX + topBoxWidth * 0.04;
  var backY = topBoxY + topBoxHeight * 0.82;
  (0, _renderer.drawButton)(gc, "← BACK", backX, backY, backW, backH, function () {
    gc.resetPlayerName();
    state.currentScreen = "mainmenu";
    gc.render();
  }, 18);
};

},{"../layout":1,"../levelData":2,"../renderer":10,"../theme":14}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawMainMenu = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
var _renderer = require("../renderer");
var drawMainMenu = exports.drawMainMenu = function drawMainMenu(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    topInnerX = _getLayout.topInnerX,
    topInnerY = _getLayout.topInnerY,
    topInnerWidth = _getLayout.topInnerWidth,
    topInnerHeight = _getLayout.topInnerHeight;
  var cx = w / 2;
  var t = (0, _theme.getTheme)(state);
  ctx.fillStyle = t.fg;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "bold 42px ".concat(displayFont);
  ctx.fillText("MAIN MENU", cx, topInnerY + topInnerHeight * 0.15);
  var btnW = Math.min(300, topInnerWidth * 0.78);
  var btnH = 50;
  var btnX = cx - btnW / 2;
  var startY = topInnerY + topInnerHeight * 0.32;
  var stride = btnH + 14;
  (0, _renderer.drawButton)(gc, "START EXAM", btnX, startY, btnW, btnH, function () {
    state.currentLevel = 1;
    state.lives = 3;
    state.paused = false;
    state.gameOver = false;
    state.playMode = "play";
    state.currentScreen = "level";
    gc.render();
  });
  (0, _renderer.drawButton)(gc, "LEVEL SELECT", btnX, startY + stride, btnW, btnH, function () {
    state.currentScreen = "levelselect";
    gc.render();
  });
  (0, _renderer.drawButton)(gc, "CONTROLS", btnX, startY + stride * 2, btnW, btnH, function () {
    state.controlsOpen = true;
    gc.render();
  });
};

},{"../layout":1,"../renderer":10,"../theme":14}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTheme = void 0;
var getTheme = exports.getTheme = function getTheme(state) {
  return state.darkMode ? {
    bg: "#111111",
    fg: "#ffffff",
    fgMid: "#cccccc",
    fgDim: "#888888",
    stroke: "#ffffff",
    overlayBg: "rgba(10,10,10,0.90)",
    divider: "#444444"
  } : {
    bg: "#f0f0f0",
    fg: "#111111",
    fgMid: "#333333",
    fgDim: "#666666",
    stroke: "#111111",
    overlayBg: "rgba(220,220,220,0.93)",
    divider: "#aaaaaa"
  };
};

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sYXlvdXQudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbERhdGEudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbHMvTGV2ZWwxLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxzL0xldmVsMi50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVscy9MZXZlbDMudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9tYWluLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvQ29udHJvbHNPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvUGF1c2VPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvcmVuZGVyZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9zY3JlZW5zL0xldmVsLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvc2NyZWVucy9MZXZlbFNlbGVjdC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3NjcmVlbnMvTWFpbk1lbnUudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sU0FBUyxHQUFBLE9BQUEsQ0FBQSxTQUFBLEdBQUcsU0FBWixTQUFTLENBQUksR0FBNkIsRUFBSztFQUMxRCxJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7RUFDMUIsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FB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LEVBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxJQUFBLFdBQUEsSUFBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLDhCQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsMkJBQUEsQ0FBQSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSw2QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSwrQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENB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bmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IGdldExheW91dCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG4gIGNvbnN0IHcgPSBjdHguY2FudmFzLndpZHRoO1xyXG4gIGNvbnN0IGggPSBjdHguY2FudmFzLmhlaWdodDtcclxuXHJcbiAgY29uc3QgY29udGVudFdpZHRoID0gdyAqIDAuODQ7XHJcbiAgY29uc3QgY29udGVudFggPSAodyAtIGNvbnRlbnRXaWR0aCkgLyAyO1xyXG4gIGNvbnN0IGxvZ29ZID0gaCAqIDAuMDg7XHJcblxyXG4gIGNvbnN0IHRvcEJveFdpZHRoID0gY29udGVudFdpZHRoO1xyXG4gIGNvbnN0IHRvcEJveEhlaWdodCA9IGggKiAwLjQ4O1xyXG4gIGNvbnN0IHRvcEJveFggPSBjb250ZW50WDtcclxuICBjb25zdCB0b3BCb3hZID0gaCAqIDAuMTg7XHJcblxyXG4gIC8vIFNhZmUgY29udGVudCBhcmVhIGluc2lkZSB0aGUgZGVjb3JhdGl2ZSBmcmFtZVxyXG4gIGNvbnN0IHRvcElubmVyV2lkdGggPSB0b3BCb3hXaWR0aCAqIDAuNDI7XHJcbiAgY29uc3QgdG9wSW5uZXJIZWlnaHQgPSB0b3BCb3hIZWlnaHQgKiAwLjYyO1xyXG4gIGNvbnN0IHRvcElubmVyWCA9IHcgLyAyIC0gdG9wSW5uZXJXaWR0aCAvIDI7XHJcbiAgY29uc3QgdG9wSW5uZXJZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTY7XHJcblxyXG4gIGNvbnN0IGdhcCA9IGggKiAwLjA0O1xyXG4gIGNvbnN0IGJvdHRvbUJveFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICsgZ2FwO1xyXG4gIGNvbnN0IGJvdHRvbUJveEhlaWdodCA9IGggKiAwLjIyO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdyxcclxuICAgIGgsXHJcbiAgICBjb250ZW50V2lkdGgsXHJcbiAgICBjb250ZW50WCxcclxuICAgIGxvZ29ZLFxyXG4gICAgdG9wQm94WCxcclxuICAgIHRvcEJveFksXHJcbiAgICB0b3BCb3hXaWR0aCxcclxuICAgIHRvcEJveEhlaWdodCxcclxuICAgIHRvcElubmVyWCxcclxuICAgIHRvcElubmVyWSxcclxuICAgIHRvcElubmVyV2lkdGgsXHJcbiAgICB0b3BJbm5lckhlaWdodCxcclxuICAgIGJvdHRvbUJveFksXHJcbiAgICBib3R0b21Cb3hIZWlnaHQsXHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IExFVkVMX0NPVU5UID0gMjA7XHJcblxyXG5leHBvcnQgY29uc3QgTEVWRUxfREFUQTogeyB0aXRsZTogc3RyaW5nOyBsaW5lczogc3RyaW5nW10gfVtdID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIldoYXQncyB5b3VyIG5hbWU/XCIsXHJcbiAgICBsaW5lczogW1wiRW50ZXIgeW91ciBuYW1lIGJlbG93LlwiLCBcIkxlYXZlIGl0IGJsYW5rIGFuZCB3ZSdsbCBjYWxsIHlvdSBCb3guXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2hhdCBpcyAxNSArIDE1P1wiLFxyXG4gICAgbGluZXM6IFtcIlBpY2sgdGhlIGNvcnJlY3QgYW5zd2VyIGZyb20gdGhlIG9wdGlvbnMgYWJvdmUuXCJdLFxyXG4gIH0sXHJcbiAgeyB0aXRsZTogXCJDbGljayB0aGUgZG90XCIsIGxpbmVzOiBbXSB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDQgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciDigJQgdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA1IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIg4oCUIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgNiBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIOKAlCB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDcgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciDigJQgdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA4IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIg4oCUIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgOSBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIOKAlCB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDEwIGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIg4oCUIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAgeyB0aXRsZTogXCJMZXZlbCAxMSDigJQgSW4gUHJvZ3Jlc3NcIiwgbGluZXM6IFtcIlRoaXMgbGV2ZWwgaXMgYmVpbmcgZGV2ZWxvcGVkLlwiXSB9LFxyXG4gIHsgdGl0bGU6IFwiTGV2ZWwgMTIg4oCUIEluIFByb2dyZXNzXCIsIGxpbmVzOiBbXCJUaGlzIGxldmVsIGlzIGJlaW5nIGRldmVsb3BlZC5cIl0gfSxcclxuICB7IHRpdGxlOiBcIkxldmVsIDEzIOKAlCBJbiBQcm9ncmVzc1wiLCBsaW5lczogW1wiVGhpcyBsZXZlbCBpcyBiZWluZyBkZXZlbG9wZWQuXCJdIH0sXHJcbiAgeyB0aXRsZTogXCJMZXZlbCAxNCDigJQgSW4gUHJvZ3Jlc3NcIiwgbGluZXM6IFtcIlRoaXMgbGV2ZWwgaXMgYmVpbmcgZGV2ZWxvcGVkLlwiXSB9LFxyXG4gIHsgdGl0bGU6IFwiTGV2ZWwgMTUg4oCUIEluIFByb2dyZXNzXCIsIGxpbmVzOiBbXCJUaGlzIGxldmVsIGlzIGJlaW5nIGRldmVsb3BlZC5cIl0gfSxcclxuICB7IHRpdGxlOiBcIkxldmVsIDE2IOKAlCBJbiBQcm9ncmVzc1wiLCBsaW5lczogW1wiVGhpcyBsZXZlbCBpcyBiZWluZyBkZXZlbG9wZWQuXCJdIH0sXHJcbiAgeyB0aXRsZTogXCJMZXZlbCAxNyDigJQgSW4gUHJvZ3Jlc3NcIiwgbGluZXM6IFtcIlRoaXMgbGV2ZWwgaXMgYmVpbmcgZGV2ZWxvcGVkLlwiXSB9LFxyXG4gIHsgdGl0bGU6IFwiTGV2ZWwgMTgg4oCUIEluIFByb2dyZXNzXCIsIGxpbmVzOiBbXCJUaGlzIGxldmVsIGlzIGJlaW5nIGRldmVsb3BlZC5cIl0gfSxcclxuICB7IHRpdGxlOiBcIkxldmVsIDE5IOKAlCBJbiBQcm9ncmVzc1wiLCBsaW5lczogW1wiVGhpcyBsZXZlbCBpcyBiZWluZyBkZXZlbG9wZWQuXCJdIH0sXHJcbiAgeyB0aXRsZTogXCJMZXZlbCAyMCDigJQgSW4gUHJvZ3Jlc3NcIiwgbGluZXM6IFtcIlRoaXMgbGV2ZWwgaXMgYmVpbmcgZGV2ZWxvcGVkLlwiXSB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TmFtZUVudHJ5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUHJvbXB0XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJXaGF0J3MgeW91ciBuYW1lP1wiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMik7XHJcblxyXG4gIGN0eC5mb250ID0gYDE4cHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIFwiTGVhdmUgaXQgYmxhbmsgYW5kIHdlJ2xsIGNhbGwgeW91IEJveC5cIixcclxuICAgIGN4LFxyXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzIsXHJcbiAgICB0b3BCb3hXaWR0aCAqIDAuNjUsXHJcbiAgKTtcclxuXHJcbiAgLy8gSW5wdXQgYm94XHJcbiAgY29uc3QgaW5wdXRXID0gdG9wQm94V2lkdGggKiAwLjU7XHJcbiAgY29uc3QgaW5wdXRIID0gNTI7XHJcbiAgY29uc3QgaW5wdXRYID0gY3ggLSBpbnB1dFcgLyAyO1xyXG4gIGNvbnN0IGlucHV0WSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjQyO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBzdGF0ZS5uYW1lRm9jdXNlZFxyXG4gICAgPyBzdGF0ZS5kYXJrTW9kZVxyXG4gICAgICA/IFwiI2ZmZmZmZlwiXHJcbiAgICAgIDogXCIjMTExMTExXCJcclxuICAgIDogdC5kaXZpZGVyO1xyXG4gIGN0eC5saW5lV2lkdGggPSBzdGF0ZS5uYW1lRm9jdXNlZCA/IDMgOiAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KGlucHV0WCwgaW5wdXRZLCBpbnB1dFcsIGlucHV0SCk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlUZXh0ID1cclxuICAgIHN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPiAwXHJcbiAgICAgID8gc3RhdGUubmFtZUlucHV0XHJcbiAgICAgIDogc3RhdGUubmFtZUZvY3VzZWRcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IFwiVHlwZSB5b3VyIG5hbWXigKZcIjtcclxuICBjdHguZmlsbFN0eWxlID0gc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA+IDAgPyB0LmZnIDogdC5mZ0RpbTtcclxuICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgMjJweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KGRpc3BsYXlUZXh0LCBpbnB1dFggKyAxNCwgaW5wdXRZICsgaW5wdXRIIC8gMiwgaW5wdXRXIC0gMjgpO1xyXG5cclxuICAvLyBCbGlua2luZyBjdXJzb3JcclxuICBpZiAoc3RhdGUubmFtZUZvY3VzZWQpIHtcclxuICAgIGNvbnN0IG1lYXN1cmVkID0gY3R4Lm1lYXN1cmVUZXh0KHN0YXRlLm5hbWVJbnB1dCkud2lkdGg7XHJcbiAgICBjb25zdCBjdXJzb3JYID0gaW5wdXRYICsgMTQgKyBNYXRoLm1pbihtZWFzdXJlZCwgaW5wdXRXIC0gMjgpO1xyXG4gICAgY29uc3QgY3Vyc29yWSA9IGlucHV0WSArIGlucHV0SCAqIDAuMjtcclxuICAgIGNvbnN0IGN1cnNvckggPSBpbnB1dEggKiAwLjY7XHJcbiAgICBjb25zdCBibGluayA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDUzMCkgJSAyID09PSAwO1xyXG4gICAgaWYgKGJsaW5rKSB7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuZmc7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oY3Vyc29yWCwgY3Vyc29yWSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY3Vyc29yWCwgY3Vyc29yWSArIGN1cnNvckgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbnB1dCBib3ggaGl0IGFyZWFcclxuICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgIHg6IGlucHV0WCxcclxuICAgIHk6IGlucHV0WSxcclxuICAgIHc6IGlucHV0VyxcclxuICAgIGg6IGlucHV0SCxcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gQ29uZmlybSBidXR0b25cclxuICBjb25zdCBjb25maXJtVyA9IDE4MDtcclxuICBjb25zdCBjb25maXJtSCA9IDQ4O1xyXG4gIGRyYXdCdXR0b24oXHJcbiAgICBnYyxcclxuICAgIFwiQ09ORklSTSDihpJcIixcclxuICAgIGN4IC0gY29uZmlybVcgLyAyLFxyXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNjIsXHJcbiAgICBjb25maXJtVyxcclxuICAgIGNvbmZpcm1ILFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5wbGF5ZXJOYW1lID0gc3RhdGUubmFtZUlucHV0LnRyaW0oKSB8fCBcIkJveFwiO1xyXG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICAyMCxcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMiA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUXVlc3Rpb24gaGVhZGVyXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJXaGF0IGlzIDE1ICsgMTU/XCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNCk7XHJcblxyXG4gIC8vIDLDlzIgYW5zd2VyIGdyaWRcclxuICBjb25zdCBhbnN3ZXJzID0gW1xyXG4gICAgeyBsYWJlbDogXCIyNVwiLCBjb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgeyBsYWJlbDogXCIzMFwiLCBjb3JyZWN0OiB0cnVlIH0sXHJcbiAgICB7IGxhYmVsOiBcIjI4XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICB7IGxhYmVsOiBcIjM1XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY29scyA9IDI7XHJcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcclxuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XHJcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcclxuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcclxuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XHJcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XHJcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XHJcbiAgICBjb25zdCBhbnMgPSBhbnN3ZXJzW2ldO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZvbnQgPSBgYm9sZCAzNnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChhbnMubGFiZWwsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XHJcblxyXG4gICAgY29uc3QgY2FwdHVyZWQgPSBhbnMuY29ycmVjdDtcclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcHR1cmVkKSB7XHJcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAzO1xyXG4gICAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdjLmxvc2VMaWZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMyA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0LCBib3R0b21Cb3hZIH0gPVxyXG4gICAgZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICAvLyAyw5cyIGdyaWQgb2YgZGVjb3kgb3B0aW9ucyDigJQgYWxsIHdyb25nXHJcbiAgY29uc3QgY29scyA9IDI7XHJcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcclxuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XHJcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcclxuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcclxuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgY29uc3QgY29sID0gaSAlIGNvbHM7XHJcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2xzKTtcclxuICAgIGNvbnN0IHR4ID0gZ3JpZFggKyBjb2wgKiAodGlsZVcgKyBoR2FwKTtcclxuICAgIGNvbnN0IHR5ID0gZ3JpZFkgKyByb3cgKiAodGlsZUggKyB2R2FwKTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAvLyBUaGUgd29yZCBcImRvdFwiXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcImRvdFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xyXG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgIC8vIEEgbGl0ZXJhbCBkb3RcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMiwgMTAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xyXG4gICAgICAvLyBUaHJlZSBkb3RzXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIuKAoiDigKIg4oCiXCIsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBEZXBhcnRtZW50IG9mIFNhbml0YXRpb25cclxuICAgICAgY3R4LmZvbnQgPSBgYm9sZCAxNXB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiRGVwYXJ0bWVudFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuMzQsIHRpbGVXIC0gMTYpO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJvZiBTYW5pdGF0aW9uXCIsXHJcbiAgICAgICAgdHggKyB0aWxlVyAvIDIsXHJcbiAgICAgICAgdHkgKyB0aWxlSCAqIDAuNTcsXHJcbiAgICAgICAgdGlsZVcgLSAxNixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCIoRC5PLlMuKVwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuNzgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiBnYy5sb3NlTGlmZSgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIaWRkZW4gaGl0IGFyZWE6IHRoZSB0aXR0bGUgKGRvdCkgb24gdGhlICdpJyBpbiBcIkNsaWNrXCIgaW4gdGhlIGJvdHRvbSBwYW5lbC5cclxuICAvLyBCb3R0b20gcGFuZWwgdGl0bGUgXCJDbGljayB0aGUgZG90LlwiIGlzIGRyYXduIGJvbGQgMzBweCwgY2VudGVyZWQgYXQgKHcvMiwgYm90dG9tQm94WSsxOCksXHJcbiAgLy8gdGV4dEJhc2VsaW5lPVwidG9wXCIuIFdlIG1lYXN1cmUgdG8gZmluZCB0aGUgJ2knIHgtcG9zaXRpb24sIHRoZW4gZXN0aW1hdGUgdGhlIHRpdHRsZSdzIHkuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjb25zdCBmdWxsU3RyID0gXCJDbGljayB0aGUgZG90XCI7XHJcbiAgY29uc3QgZnVsbFcgPSBjdHgubWVhc3VyZVRleHQoZnVsbFN0cikud2lkdGg7XHJcbiAgY29uc3QgdGV4dExlZnQgPSBjeCAtIGZ1bGxXIC8gMjtcclxuICBjb25zdCBwcmVmaXhXID0gY3R4Lm1lYXN1cmVUZXh0KFwiQ2xcIikud2lkdGg7XHJcbiAgY29uc3QgaUNoYXJXID0gY3R4Lm1lYXN1cmVUZXh0KFwiaVwiKS53aWR0aDtcclxuICBjb25zdCBpRG90Q1ggPSB0ZXh0TGVmdCArIHByZWZpeFcgKyBpQ2hhclcgLyAyO1xyXG4gIGNvbnN0IGlEb3RDWSA9IGJvdHRvbUJveFkgKyAxOCArIDU7IC8vIH41cHggYmVsb3cgdG9wIGJhc2VsaW5lIOKJiCB0aXR0bGUgcG9zaXRpb25cclxuICBjb25zdCBoaXRSID0gMTA7XHJcblxyXG4gIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgeDogaURvdENYIC0gaGl0UixcclxuICAgIHk6IGlEb3RDWSAtIGhpdFIsXHJcbiAgICB3OiBoaXRSICogMixcclxuICAgIGg6IGhpdFIgKiAyLFxyXG4gICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDQ7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuIiwiY29uc29sZS5sb2coXCJCRU5DSE1BUksgMiBNQUlOIExPQURFRFwiKTtcclxuXHJcbmltcG9ydCB7IEdhbWVDb250ZXh0LCBHYW1lU3RhdGUgfSBmcm9tICcuL3R5cGVzJztcclxuaW1wb3J0IHsgZHJhd0JhY2tncm91bmQsIGRyYXdMb2dvLCBkcmF3R2FtZXBsYXlGcmFtZSwgZHJhd0JvdHRvbVBhbmVsIH0gZnJvbSAnLi9yZW5kZXJlcic7XHJcbmltcG9ydCB7IGRyYXdNYWluTWVudSB9ICAgICAgIGZyb20gJy4vc2NyZWVucy9NYWluTWVudSc7XHJcbmltcG9ydCB7IGRyYXdMZXZlbFNlbGVjdCB9ICAgIGZyb20gJy4vc2NyZWVucy9MZXZlbFNlbGVjdCc7XHJcbmltcG9ydCB7IGRyYXdMZXZlbCB9ICAgICAgICAgIGZyb20gJy4vc2NyZWVucy9MZXZlbCc7XHJcbmltcG9ydCB7IGRyYXdQYXVzZU92ZXJsYXkgfSAgIGZyb20gJy4vb3ZlcmxheXMvUGF1c2VPdmVybGF5JztcclxuaW1wb3J0IHsgZHJhd0NvbnRyb2xzT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheXMvQ29udHJvbHNPdmVybGF5JztcclxuaW1wb3J0IHsgZHJhd0dhbWVPdmVyT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5JztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2FtZUNhbnZhcyAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpICBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XHJcbiAgY29uc3QgZGVidWdDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnLWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XHJcbiAgY29uc3QgdGV4dENhbnZhcyAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtY2FudmFzXCIpICBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XHJcblxyXG4gIGlmICghZ2FtZUNhbnZhcyB8fCAhZGVidWdDYW52YXMgfHwgIXRleHRDYW52YXMpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIG9uZSBvciBtb3JlIGNhbnZhcyBlbGVtZW50cy5cIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBjdHggPSBnYW1lQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICBpZiAoIWN0eCkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBnZXQgMkQgY29udGV4dC5cIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyDilIDilIAgaW5pdGlhbCBzdGF0ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgY29uc3Qgc3RhdGU6IEdhbWVTdGF0ZSA9IHtcclxuICAgIGN1cnJlbnRTY3JlZW46IFwibWFpbm1lbnVcIixcclxuICAgIGN1cnJlbnRMZXZlbDogIDEsXHJcbiAgICBsaXZlczogICAgICAgICAzLFxyXG4gICAgcGF1c2VkOiAgICAgICAgZmFsc2UsXHJcbiAgICBjb250cm9sc09wZW46ICBmYWxzZSxcclxuICAgIGRhcmtNb2RlOiAgICAgIHRydWUsXHJcbiAgICBzdG9yeVRpdGxlOiAgICBcIk91dHNpZGUtdGhlLUJveCBUaGlua2luZyBDZXJ0aWZpY2F0aW9uXCIsXHJcbiAgICBzdG9yeUxpbmVzOiBbXHJcbiAgICAgIFwiQ29tcGxldGUgdGhpcyBhc3Nlc3NtZW50IHRvIGVhcm4geW91ciBPdEIgVGhpbmtpbmcgQ2VydGlmaWNhdGUuXCIsXHJcbiAgICAgIFwiRGVtb25zdHJhdGUgeW91ciBhYmlsaXR5IHRvIGFwcHJvYWNoIHByb2JsZW1zIGZyb20gdW5jb252ZW50aW9uYWwgYW5nbGVzLlwiLFxyXG4gICAgICBcIkNhbmRpZGF0ZXMgd2hvIHBhc3MgbWF5IGxpc3QgdGhpcyBjcmVkZW50aWFsIG9uIHRoZWlyIExpbmtlZEluIG9yIHLDqXN1bcOpLlwiLFxyXG4gICAgXSxcclxuICAgIHBsYXllck5hbWU6ICBcIkJveFwiLFxyXG4gICAgbmFtZUlucHV0OiAgIFwiXCIsXHJcbiAgICBuYW1lRm9jdXNlZDogZmFsc2UsXHJcbiAgICBwbGF5TW9kZTogICAgXCJwbGF5XCIsXHJcbiAgICBnYW1lT3ZlcjogICAgZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgLy8g4pSA4pSAIGdhbWUgY29udGV4dCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuICAvLyBnYyBpcyBwYXNzZWQgdG8gZXZlcnkgZHJhdyBmdW5jdGlvbiBzbyB0aGV5IHNoYXJlIGN0eCwgc3RhdGUsIGFuZCBoZWxwZXJzXHJcbiAgLy8gd2l0aG91dCBnbG9iYWxzIG9yIGNpcmN1bGFyIGltcG9ydHMuXHJcblxyXG4gIGNvbnN0IGdjOiBHYW1lQ29udGV4dCA9IHtcclxuICAgIGN0eCxcclxuICAgIHN0YXRlLFxyXG4gICAgaGl0QXJlYXM6ICAgICAgICAgICAgW10sXHJcbiAgICByZW5kZXI6ICAgICAgICAgICAgICAoKSA9PiB7fSwgICAvLyBhc3NpZ25lZCBiZWxvd1xyXG4gICAgbG9zZUxpZmU6ICAgICAgICAgICAgKCkgPT4ge30sICAgLy8gYXNzaWduZWQgYmVsb3dcclxuICAgIHJlc2V0UGxheWVyTmFtZTogICAgICgpID0+IHt9LCAgIC8vIGFzc2lnbmVkIGJlbG93XHJcbiAgICBkaXNwbGF5Rm9udDogICAgICAgICBgXCJUcmVidWNoZXQgTVNcIiwgXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWZgLFxyXG4gICAgYm9keUZvbnQ6ICAgICAgICAgICAgYFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZmAsXHJcbiAgICBsb2dvOiAgICAgICAgICAgICAgICBuZXcgSW1hZ2UoKSxcclxuICAgIGdhbWVwbGF5RnJhbWU6ICAgICAgIG5ldyBJbWFnZSgpLFxyXG4gICAgbG9nb0xvYWRlZDogICAgICAgICAgZmFsc2UsXHJcbiAgICBnYW1lcGxheUZyYW1lTG9hZGVkOiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBnYy5yZXNldFBsYXllck5hbWUgPSAoKSA9PiB7XHJcbiAgICBnYy5zdGF0ZS5wbGF5ZXJOYW1lICA9IFwiQm94XCI7XHJcbiAgICBnYy5zdGF0ZS5uYW1lSW5wdXQgICA9IFwiXCI7XHJcbiAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGdjLmxvc2VMaWZlID0gKCkgPT4ge1xyXG4gICAgZ2Muc3RhdGUubGl2ZXMtLTtcclxuICAgIGlmIChnYy5zdGF0ZS5saXZlcyA8PSAwKSB7XHJcbiAgICAgIGdjLnN0YXRlLmxpdmVzICAgID0gMDtcclxuICAgICAgZ2Muc3RhdGUuZ2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgZ2MucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuICAgIGRyYXdCYWNrZ3JvdW5kKGdjKTtcclxuICAgIGRyYXdMb2dvKGdjKTtcclxuICAgIGRyYXdHYW1lcGxheUZyYW1lKGdjKTtcclxuXHJcbiAgICBzd2l0Y2ggKGdjLnN0YXRlLmN1cnJlbnRTY3JlZW4pIHtcclxuICAgICAgY2FzZSBcIm1haW5tZW51XCI6ICAgIGRyYXdNYWluTWVudShnYyk7ICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwibGV2ZWxzZWxlY3RcIjogZHJhd0xldmVsU2VsZWN0KGdjKTsgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsZXZlbFwiOiAgICAgICBkcmF3TGV2ZWwoZ2MpOyAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3Qm90dG9tUGFuZWwoZ2MpO1xyXG5cclxuICAgIGlmIChnYy5zdGF0ZS5wYXVzZWQpICAgICAgIGRyYXdQYXVzZU92ZXJsYXkoZ2MpO1xyXG4gICAgaWYgKGdjLnN0YXRlLmNvbnRyb2xzT3BlbikgZHJhd0NvbnRyb2xzT3ZlcmxheShnYyk7XHJcbiAgICBpZiAoZ2Muc3RhdGUuZ2FtZU92ZXIpICAgICBkcmF3R2FtZU92ZXJPdmVybGF5KGdjKTtcclxuICB9O1xyXG5cclxuICAvLyDilIDilIAgY2FudmFzIHJlc2l6ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgY29uc3QgcmVzaXplQ2FudmFzZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjb25zdCBoID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgZ2FtZUNhbnZhcy53aWR0aCAgPSBkZWJ1Z0NhbnZhcy53aWR0aCAgPSB3O1xyXG4gICAgZ2FtZUNhbnZhcy5oZWlnaHQgPSBkZWJ1Z0NhbnZhcy5oZWlnaHQgPSBoO1xyXG4gIH07XHJcblxyXG4gIC8vIOKUgOKUgCBpbnB1dCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcclxuXHJcbiAgY29uc3QgdG9DYW52YXMgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgY29uc3QgcmVjdCAgID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGNvbnN0IHNjYWxlWCA9IGdhbWVDYW52YXMud2lkdGggIC8gcmVjdC53aWR0aDtcclxuICAgIGNvbnN0IHNjYWxlWSA9IGdhbWVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWCxcclxuICAgICAgeTogKGUuY2xpZW50WSAtIHJlY3QudG9wKSAgKiBzY2FsZVksXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGdhbWVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRvQ2FudmFzKGUpO1xyXG4gICAgZm9yIChjb25zdCBhcmVhIG9mIGdjLmhpdEFyZWFzKSB7XHJcbiAgICAgIGlmICh4ID49IGFyZWEueCAmJiB4IDw9IGFyZWEueCArIGFyZWEudyAmJiB5ID49IGFyZWEueSAmJiB5IDw9IGFyZWEueSArIGFyZWEuaCkge1xyXG4gICAgICAgIGFyZWEuYWN0aW9uKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgZ2FtZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRvQ2FudmFzKGUpO1xyXG4gICAgY29uc3Qgb3ZlciA9IGdjLmhpdEFyZWFzLnNvbWUoXHJcbiAgICAgIChhKSA9PiB4ID49IGEueCAmJiB4IDw9IGEueCArIGEudyAmJiB5ID49IGEueSAmJiB5IDw9IGEueSArIGEuaCxcclxuICAgICk7XHJcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmN1cnNvciA9IG92ZXIgPyBcInBvaW50ZXJcIiA6IFwiZGVmYXVsdFwiO1xyXG4gIH0pO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgIC8vIE5hbWUgaW5wdXQgdHlwaW5nIOKAlCBpbnRlcmNlcHQgYWxsIGtleXMgd2hlbiBmb2N1c2VkXHJcbiAgICBpZiAoZ2Muc3RhdGUubmFtZUZvY3VzZWQgJiYgIWdjLnN0YXRlLnBhdXNlZCAmJiAhZ2Muc3RhdGUuY29udHJvbHNPcGVuKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgZ2Muc3RhdGUucGxheWVyTmFtZSAgID0gZ2Muc3RhdGUubmFtZUlucHV0LnRyaW0oKSB8fCBcIkJveFwiO1xyXG4gICAgICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkICA9IGZhbHNlO1xyXG4gICAgICAgIGdjLnN0YXRlLmN1cnJlbnRMZXZlbCA9IDI7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xyXG4gICAgICAgIGdjLnN0YXRlLm5hbWVJbnB1dCA9IGdjLnN0YXRlLm5hbWVJbnB1dC5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlLmtleS5sZW5ndGggPT09IDEgJiYgZ2Muc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA8IDI0KSB7XHJcbiAgICAgICAgZ2Muc3RhdGUubmFtZUlucHV0ICs9IGUua2V5O1xyXG4gICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XHJcbiAgICAgIGlmIChnYy5zdGF0ZS5jb250cm9sc09wZW4pIHsgZ2Muc3RhdGUuY29udHJvbHNPcGVuID0gZmFsc2U7IGdjLnJlbmRlcigpOyB9XHJcbiAgICAgIGVsc2UgaWYgKGdjLnN0YXRlLnBhdXNlZCkgIHsgZ2Muc3RhdGUucGF1c2VkID0gZmFsc2U7ICAgICAgIGdjLnJlbmRlcigpOyB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgIHJlc2l6ZUNhbnZhc2VzKCk7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgLy8g4pSA4pSAIGN1cnNvciBibGluayBsb29wIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBpZiAoZ2Muc3RhdGUubmFtZUZvY3VzZWQpIGdjLnJlbmRlcigpO1xyXG4gIH0sIDUzMCk7XHJcblxyXG4gIC8vIOKUgOKUgCBpbWFnZSBsb2FkaW5nIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxyXG5cclxuICBnYy5sb2dvLm9ubG9hZCAgPSAoKSA9PiB7IGdjLmxvZ29Mb2FkZWQgPSB0cnVlOyAgZ2MucmVuZGVyKCk7IH07XHJcbiAgZ2MubG9nby5vbmVycm9yID0gKCkgPT4geyBnYy5sb2dvTG9hZGVkID0gZmFsc2U7IGdjLnJlbmRlcigpOyB9O1xyXG5cclxuICBnYy5nYW1lcGxheUZyYW1lLm9ubG9hZCAgPSAoKSA9PiB7IGdjLmdhbWVwbGF5RnJhbWVMb2FkZWQgPSB0cnVlOyAgZ2MucmVuZGVyKCk7IH07XHJcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5vbmVycm9yID0gKCkgPT4geyBnYy5nYW1lcGxheUZyYW1lTG9hZGVkID0gZmFsc2U7IGdjLnJlbmRlcigpOyB9O1xyXG5cclxuICBnYy5sb2dvLnNyYyAgICAgICAgICA9IFwiL2JlbmNobWFyazIvYXNzZXRzL2xvZ28ucG5nXCI7XHJcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5zcmMgPSBcIi9iZW5jaG1hcmsyL2Fzc2V0cy9nYW1lcGxheS1mcmFtZS5wbmdcIjtcclxuXHJcbiAgLy8g4pSA4pSAIHN0YXJ0dXAg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXHJcblxyXG4gIHJlc2l6ZUNhbnZhc2VzKCk7XHJcbiAgZ2MucmVuZGVyKCk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdDb250cm9sc092ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgY29uc3QgcGFkID0gdG9wQm94V2lkdGggKiAwLjA1O1xyXG4gIGNvbnN0IG94ID0gdG9wQm94WCArIHBhZDtcclxuICBjb25zdCBveSA9IHRvcEJveFkgKyBwYWQ7XHJcbiAgY29uc3Qgb3cgPSB0b3BCb3hXaWR0aCAtIHBhZCAqIDI7XHJcbiAgY29uc3Qgb2ggPSB0b3BCb3hIZWlnaHQgLSBwYWQgKiAyO1xyXG4gIGNvbnN0IGN4ID0gb3ggKyBvdyAvIDI7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0Lm92ZXJsYXlCZztcclxuICBjdHguZmlsbFJlY3Qob3gsIG95LCBvdywgb2gpO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KG94LCBveSwgb3csIG9oKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJCQVNJQyBDT05UUk9MU1wiLCBjeCwgb3kgKyBvaCAqIDAuMTEpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8ob3ggKyBvdyAqIDAuMDYsIG95ICsgb2ggKiAwLjIpO1xyXG4gIGN0eC5saW5lVG8ob3ggKyBvdyAqIDAuOTQsIG95ICsgb2ggKiAwLjIpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgY29uc3QgY29udHJvbHMgPSBbXHJcbiAgICB7IGtleTogXCJXIC8gQSAvIFMgLyBEXCIsIGRlc2M6IFwiTW92ZSAvIE5hdmlnYXRlXCIgfSxcclxuICAgIHsga2V5OiBcIkNMSUNLXCIsIGRlc2M6IFwiSW50ZXJhY3QgLyBTZWxlY3QgYW5zd2VyXCIgfSxcclxuICAgIHsga2V5OiBcIkVTQ1wiLCBkZXNjOiBcIkNsb3NlIHRoaXMgcGFuZWxcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGxpc3RZID0gb3kgKyBvaCAqIDAuMjk7XHJcbiAgY29uc3Qgcm93SCA9IG9oICogMC4xNTtcclxuICBjb25zdCBrZXlCb3hXID0gb3cgKiAwLjM7XHJcbiAgY29uc3Qga2V5Qm94SCA9IHJvd0ggKiAwLjc7XHJcbiAgY29uc3Qga2V5Qm94WCA9IG94ICsgb3cgKiAwLjA4O1xyXG4gIGNvbnN0IGRlc2NYID0gb3ggKyBvdyAqIDAuNTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9scy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgcm93WSA9IGxpc3RZICsgaSAqIHJvd0g7XHJcbiAgICBjb25zdCBib3hDZW50ZXJZID0gcm93WSArIGtleUJveEggLyAyO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBzdGF0ZS5kYXJrTW9kZSA/IFwiIzJhMmEyYVwiIDogXCIjZGRkZGRkXCI7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgIGN0eC5maWxsUmVjdChrZXlCb3hYLCByb3dZLCBrZXlCb3hXLCBrZXlCb3hIKTtcclxuICAgIGN0eC5zdHJva2VSZWN0KGtleUJveFgsIHJvd1ksIGtleUJveFcsIGtleUJveEgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgIGNvbnRyb2xzW2ldLmtleSxcclxuICAgICAga2V5Qm94WCArIGtleUJveFcgLyAyLFxyXG4gICAgICBib3hDZW50ZXJZLFxyXG4gICAgICBrZXlCb3hXIC0gOCxcclxuICAgICk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBjdHguZm9udCA9IGAxN3B4ICR7Ym9keUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChjb250cm9sc1tpXS5kZXNjLCBkZXNjWCwgYm94Q2VudGVyWSk7XHJcbiAgfVxyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGAxM3B4ICR7Ym9keUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJDb250cm9scyBtYXkgdmFyeSBiZXR3ZWVuIGxldmVscy5cIiwgY3gsIG95ICsgb2ggKiAwLjg0KTtcclxuXHJcbiAgLy8gQ2xlYXIgdW5kZXJseWluZyBoaXQgYXJlYXNcclxuICBnYy5oaXRBcmVhcyA9IFtdO1xyXG5cclxuICBjb25zdCBjbG9zZVcgPSAxNDA7XHJcbiAgY29uc3QgY2xvc2VIID0gNDA7XHJcbiAgZHJhd0J1dHRvbihcclxuICAgIGdjLFxyXG4gICAgXCJDTE9TRSAg4pyVXCIsXHJcbiAgICBjeCAtIGNsb3NlVyAvIDIsXHJcbiAgICBveSArIG9oICogMC45LFxyXG4gICAgY2xvc2VXLFxyXG4gICAgY2xvc2VILFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5jb250cm9sc09wZW4gPSBmYWxzZTtcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgMTcsXHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0dhbWVPdmVyT3ZlcmxheSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCBoIH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IGN5ID0gaCAvIDI7XHJcblxyXG4gIC8vIEZ1bGwtY2FudmFzIGRpbVxyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC44MilcIjtcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XHJcblxyXG4gIC8vIFBhbmVsXHJcbiAgY29uc3QgcGFuZWxXID0gTWF0aC5taW4odyAqIDAuNTUsIDUyMCk7XHJcbiAgY29uc3QgcGFuZWxIID0gaCAqIDAuNTI7XHJcbiAgY29uc3QgcGFuZWxYID0gY3ggLSBwYW5lbFcgLyAyO1xyXG4gIGNvbnN0IHBhbmVsWSA9IGN5IC0gcGFuZWxIIC8gMjtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiIzBhMGEwYVwiO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiI2NjMjIyMlwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gIGN0eC5maWxsUmVjdChwYW5lbFgsIHBhbmVsWSwgcGFuZWxXLCBwYW5lbEgpO1xyXG4gIGN0eC5zdHJva2VSZWN0KHBhbmVsWCwgcGFuZWxZLCBwYW5lbFcsIHBhbmVsSCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNjYzIyMjJcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDUycHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCBjeCwgcGFuZWxZICsgcGFuZWxIICogMC4yMik7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiM4ODg4ODhcIjtcclxuICBjdHguZm9udCA9IGAyMHB4ICR7Ym9keUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBgQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLCAke3N0YXRlLnBsYXllck5hbWV9LmAsXHJcbiAgICBjeCxcclxuICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNDIsXHJcbiAgICBwYW5lbFcgKiAwLjgyLFxyXG4gICk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiIzMzMzMzM1wiO1xyXG4gIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubW92ZVRvKHBhbmVsWCArIHBhbmVsVyAqIDAuMSwgcGFuZWxZICsgcGFuZWxIICogMC41NCk7XHJcbiAgY3R4LmxpbmVUbyhwYW5lbFggKyBwYW5lbFcgKiAwLjksIHBhbmVsWSArIHBhbmVsSCAqIDAuNTQpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuXHJcbiAgY29uc3QgYnRuVyA9IDIwMDtcclxuICBjb25zdCBidG5IID0gNDg7XHJcblxyXG4gIGlmIChzdGF0ZS5wbGF5TW9kZSA9PT0gXCJwbGF5XCIpIHtcclxuICAgIGRyYXdCdXR0b24oXHJcbiAgICAgIGdjLFxyXG4gICAgICBcIlRSWSBBR0FJTlwiLFxyXG4gICAgICBjeCAtIGJ0blcgLyAyLFxyXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjYxLFxyXG4gICAgICBidG5XLFxyXG4gICAgICBidG5ILFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMTtcclxuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgMjAsXHJcbiAgICApO1xyXG5cclxuICAgIGRyYXdCdXR0b24oXHJcbiAgICAgIGdjLFxyXG4gICAgICBcIk1BSU4gTUVOVVwiLFxyXG4gICAgICBjeCAtIGJ0blcgLyAyLFxyXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjc4LFxyXG4gICAgICBidG5XLFxyXG4gICAgICBidG5ILFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcclxuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgMjAsXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkcmF3QnV0dG9uKFxyXG4gICAgICBnYyxcclxuICAgICAgXCJNQUlOIE1FTlVcIixcclxuICAgICAgY3ggLSBidG5XIC8gMixcclxuICAgICAgcGFuZWxZICsgcGFuZWxIICogMC42OCxcclxuICAgICAgYnRuVyxcclxuICAgICAgYnRuSCxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcclxuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIDIwLFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdQYXVzZU92ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBwYWQgPSB0b3BCb3hXaWR0aCAqIDAuMDU7XHJcbiAgY29uc3Qgb3ggPSB0b3BCb3hYICsgcGFkO1xyXG4gIGNvbnN0IG95ID0gdG9wQm94WSArIHBhZDtcclxuICBjb25zdCBvdyA9IHRvcEJveFdpZHRoIC0gcGFkICogMjtcclxuICBjb25zdCBvaCA9IHRvcEJveEhlaWdodCAtIHBhZCAqIDI7XHJcbiAgY29uc3QgY3ggPSBveCArIG93IC8gMjtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5vdmVybGF5Qmc7XHJcbiAgY3R4LmZpbGxSZWN0KG94LCBveSwgb3csIG9oKTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gMjtcclxuICBjdHguc3Ryb2tlUmVjdChveCwgb3ksIG93LCBvaCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzhweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiUEFVU0VEXCIsIGN4LCBveSArIG9oICogMC4xOCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuZGl2aWRlcjtcclxuICBjdHgubGluZVdpZHRoID0gMTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyhveCArIG93ICogMC4xLCBveSArIG9oICogMC4zKTtcclxuICBjdHgubGluZVRvKG94ICsgb3cgKiAwLjksIG95ICsgb2ggKiAwLjMpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgLy8gQ2xlYXIgYWxsIHVuZGVybHlpbmcgaGl0IGFyZWFzIHNvIHRoZSBnYW1lIGJlaGluZCBpcyBibG9ja2VkXHJcbiAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuXHJcbiAgY29uc3QgYnRuVyA9IDIyMDtcclxuICBjb25zdCBidG5IID0gNDg7XHJcbiAgY29uc3QgYnRuWCA9IGN4IC0gYnRuVyAvIDI7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiUkVTVU1FXCIsIGJ0blgsIG95ICsgb2ggKiAwLjM2LCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIlFVSVQgVE8gTUVOVVwiLCBidG5YLCBveSArIG9oICogMC41MywgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5saXZlcyA9IDM7XHJcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTGFiZWwgPSBzdGF0ZS5kYXJrTW9kZSA/IFwi4piAICBMSUdIVCBNT0RFXCIgOiBcIvCfjJkgIERBUksgTU9ERVwiO1xyXG4gIGRyYXdCdXR0b24oXHJcbiAgICBnYyxcclxuICAgIHRvZ2dsZUxhYmVsLFxyXG4gICAgYnRuWCxcclxuICAgIG95ICsgb2ggKiAwLjcsXHJcbiAgICBidG5XLFxyXG4gICAgYnRuSCxcclxuICAgICgpID0+IHtcclxuICAgICAgc3RhdGUuZGFya01vZGUgPSAhc3RhdGUuZGFya01vZGU7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIDE4LFxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgTEVWRUxfREFUQSB9IGZyb20gXCIuL2xldmVsRGF0YVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSB9ID0gZ2M7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSB0LmJnO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmJnO1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xvZ28gPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBsb2dvLCBsb2dvTG9hZGVkLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCBsb2dvWSB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgaWYgKGxvZ29Mb2FkZWQgJiYgbG9nby5uYXR1cmFsV2lkdGggPiAwKSB7XHJcbiAgICBjb25zdCBsb2dvVyA9IHcgKiAwLjE1O1xyXG4gICAgY29uc3QgbG9nb0ggPSBsb2dvVyAqIChsb2dvLm5hdHVyYWxIZWlnaHQgLyBsb2dvLm5hdHVyYWxXaWR0aCk7XHJcbiAgICBjdHguZHJhd0ltYWdlKGxvZ28sIHcgLyAyIC0gbG9nb1cgLyAyLCBsb2dvWSAtIGxvZ29IIC8gMiwgbG9nb1csIGxvZ29IKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGdldFRoZW1lKHN0YXRlKS5mZztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICBjdHguZm9udCA9IGBib2xkIDU0cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiT3V0c2lkZS10aGUtQm94XCIsIHcgLyAyLCBsb2dvWSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdHYW1lcGxheUZyYW1lID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZ2FtZXBsYXlGcmFtZSwgZ2FtZXBsYXlGcmFtZUxvYWRlZCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBpZiAoZ2FtZXBsYXlGcmFtZUxvYWRlZCAmJiBnYW1lcGxheUZyYW1lLm5hdHVyYWxXaWR0aCA+IDApIHtcclxuICAgIGN0eC5kcmF3SW1hZ2UoXHJcbiAgICAgIGdhbWVwbGF5RnJhbWUsXHJcbiAgICAgIDQ0MCxcclxuICAgICAgMTgwLFxyXG4gICAgICA2ODgsXHJcbiAgICAgIDU3MixcclxuICAgICAgdG9wQm94WCxcclxuICAgICAgdG9wQm94WSxcclxuICAgICAgdG9wQm94V2lkdGgsXHJcbiAgICAgIHRvcEJveEhlaWdodCxcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGdldFRoZW1lKHN0YXRlKS5zdHJva2U7XHJcbiAgICBjdHgubGluZVdpZHRoID0gNDtcclxuICAgIGN0eC5zdHJva2VSZWN0KHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQpO1xyXG4gIH1cclxufTtcclxuXHJcbi8qKiBEcmF3IGEgbGFiZWxsZWQgYnV0dG9uIGFuZCByZWdpc3RlciBpdCBhcyBhIGhpdCBhcmVhLiAqL1xyXG5leHBvcnQgY29uc3QgZHJhd0J1dHRvbiA9IChcclxuICBnYzogR2FtZUNvbnRleHQsXHJcbiAgbGFiZWw6IHN0cmluZyxcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHc6IG51bWJlcixcclxuICBoOiBudW1iZXIsXHJcbiAgYWN0aW9uOiAoKSA9PiB2b2lkLFxyXG4gIGZvbnRTaXplID0gMjIsXHJcbikgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAke2ZvbnRTaXplfXB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQobGFiZWwsIHggKyB3IC8gMiwgeSArIGggLyAyLCB3IC0gMTYpO1xyXG4gIGdjLmhpdEFyZWFzLnB1c2goeyB4LCB5LCB3LCBoLCBhY3Rpb24gfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0JvdHRvbVBhbmVsID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIGNvbnRlbnRYLCBjb250ZW50V2lkdGgsIGJvdHRvbUJveFksIGJvdHRvbUJveEhlaWdodCB9ID1cclxuICAgIGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gIGN0eC5saW5lV2lkdGggPSA0O1xyXG4gIGN0eC5zdHJva2VSZWN0KGNvbnRlbnRYLCBib3R0b21Cb3hZLCBjb250ZW50V2lkdGgsIGJvdHRvbUJveEhlaWdodCk7XHJcblxyXG4gIGNvbnN0IGNlbnRlclggPSB3IC8gMjtcclxuICBjb25zdCB0ZXh0V2lkdGggPSBjb250ZW50V2lkdGggKiAwLjc0O1xyXG5cclxuICBjb25zdCBsZXZlbERhdGEgPVxyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiXHJcbiAgICAgID8gTEVWRUxfREFUQVtzdGF0ZS5jdXJyZW50TGV2ZWwgLSAxXVxyXG4gICAgICA6IHsgdGl0bGU6IHN0YXRlLnN0b3J5VGl0bGUsIGxpbmVzOiBzdGF0ZS5zdG9yeUxpbmVzIH07XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xyXG5cclxuICBjdHguZm9udCA9IGBib2xkIDMwcHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChsZXZlbERhdGEudGl0bGUsIGNlbnRlclgsIGJvdHRvbUJveFkgKyAxOCwgdGV4dFdpZHRoKTtcclxuXHJcbiAgY3R4LmZvbnQgPSBgMjBweCAke2JvZHlGb250fWA7XHJcbiAgY29uc3QgbGluZUdhcCA9IDMwO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxEYXRhLmxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgIGxldmVsRGF0YS5saW5lc1tpXSxcclxuICAgICAgY2VudGVyWCxcclxuICAgICAgYm90dG9tQm94WSArIDY4ICsgaSAqIGxpbmVHYXAsXHJcbiAgICAgIHRleHRXaWR0aCxcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbEhVRCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IHBhZFggPSB0b3BCb3hXaWR0aCAqIDAuMDU7XHJcbiAgY29uc3QgcGFkWSA9IHRvcEJveEhlaWdodCAqIDAuMDg7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUS5YIOKAlCB0b3AgbGVmdFxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDI2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChgUS4ke3N0YXRlLmN1cnJlbnRMZXZlbH1gLCB0b3BCb3hYICsgcGFkWCwgdG9wQm94WSArIHBhZFkpO1xyXG5cclxuICAvLyBQYXVzZSBidXR0b24g4oCUIHRvcCByaWdodFxyXG4gIGNvbnN0IHBhdXNlVyA9IDQ4O1xyXG4gIGNvbnN0IHBhdXNlSCA9IDM0O1xyXG4gIGNvbnN0IHBhdXNlWCA9IHRvcEJveFggKyB0b3BCb3hXaWR0aCAtIHBhZFggLSBwYXVzZVc7XHJcbiAgY29uc3QgcGF1c2VZID0gdG9wQm94WSArIHBhZFkgLSBwYXVzZUggLyAyO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KHBhdXNlWCwgcGF1c2VZLCBwYXVzZVcsIHBhdXNlSCk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAxNnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJJSVwiLCBwYXVzZVggKyBwYXVzZVcgLyAyLCBwYXVzZVkgKyBwYXVzZUggLyAyKTtcclxuICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgIHg6IHBhdXNlWCxcclxuICAgIHk6IHBhdXNlWSxcclxuICAgIHc6IHBhdXNlVyxcclxuICAgIGg6IHBhdXNlSCxcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIExpdmVzIOKAlCBib3R0b20gcmlnaHRcclxuICBjb25zdCBoZWFydFNpemUgPSAyNDtcclxuICBjb25zdCBoZWFydEdhcCA9IDY7XHJcbiAgY29uc3QgbGl2ZXNZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAtIHBhZFk7XHJcbiAgY29uc3QgdG90YWxXID0gMyAqIGhlYXJ0U2l6ZSArIDIgKiBoZWFydEdhcDtcclxuICBjb25zdCBsaXZlc1ggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggLSBwYWRYIC0gdG90YWxXO1xyXG5cclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGAke2hlYXJ0U2l6ZX1weCBzYW5zLXNlcmlmYDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9XHJcbiAgICAgIGkgPCBzdGF0ZS5saXZlcyA/IFwiI2UwMzAzMFwiIDogc3RhdGUuZGFya01vZGUgPyBcIiM0NDQ0NDRcIiA6IFwiI2JiYmJiYlwiO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwi4pmlXCIsIGxpdmVzWCArIGkgKiAoaGVhcnRTaXplICsgaGVhcnRHYXApLCBsaXZlc1kpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSAgICBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gICAgICAgZnJvbSAnLi4vdGhlbWUnO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSAgICAgIGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24sIGRyYXdMZXZlbEhVRCB9IGZyb20gJy4uL3JlbmRlcmVyJztcclxuaW1wb3J0IHsgZHJhd05hbWVFbnRyeSB9ICBmcm9tICcuLi9sZXZlbHMvTGV2ZWwxJztcclxuaW1wb3J0IHsgZHJhd0xldmVsMiB9ICAgICBmcm9tICcuLi9sZXZlbHMvTGV2ZWwyJztcclxuaW1wb3J0IHsgZHJhd0xldmVsMyB9ICAgICBmcm9tICcuLi9sZXZlbHMvTGV2ZWwzJztcclxuaW1wb3J0IHsgTEVWRUxfQ09VTlQgfSAgICBmcm9tICcuLi9sZXZlbERhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCAgPSB3IC8gMjtcclxuICBjb25zdCBsdmwgPSBzdGF0ZS5jdXJyZW50TGV2ZWw7XHJcbiAgY29uc3QgdCAgID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICAvLyBMZXZlbCAxIOKAlCBuYW1lIGVudHJ5XHJcbiAgaWYgKGx2bCA9PT0gMSkge1xyXG4gICAgZHJhd05hbWVFbnRyeShnYyk7XHJcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gTGV2ZWwgMiDigJQgYXJpdGhtZXRpYyBxdWVzdGlvblxyXG4gIGlmIChsdmwgPT09IDIpIHtcclxuICAgIGRyYXdMZXZlbDIoZ2MpO1xyXG4gICAgZHJhd0xldmVsSFVEKGdjKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vIExldmVsIDMg4oCUIGNsaWNrIHRoZSBkb3RcclxuICBpZiAobHZsID09PSAzKSB7XHJcbiAgICBkcmF3TGV2ZWwzKGdjKTtcclxuICAgIGRyYXdMZXZlbEhVRChnYyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBQbGFjZWhvbGRlciBmb3IgdW5maW5pc2hlZCBsZXZlbHNcclxuICBjdHguZmlsbFN0eWxlICAgID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduICAgID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzNHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoYExFVkVMICR7bHZsfWAsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNik7XHJcblxyXG4gIGN0eC5mb250ICAgICAgPSBgMjJweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XHJcbiAgY3R4LmZpbGxUZXh0KFwiVGhpcyBsZXZlbCBpcyB1bmRlciBjb25zdHJ1Y3Rpb24uXCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4zOCwgdG9wQm94V2lkdGggKiAwLjYpO1xyXG5cclxuICBjdHguZm9udCAgICAgID0gYDE2cHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gIGN0eC5maWxsVGV4dChcIlF1ZXN0aW9ucywgY2hvaWNlcywgYW5kIGludGVyYWN0aW9ucyB3aWxsIGJlIHdpcmVkIGluIGhlcmUuXCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC41MiwgdG9wQm94V2lkdGggKiAwLjYpO1xyXG5cclxuICAvLyBOYXYgcm93IOKAlCBsZXZlbCBzZWxlY3QgcGF0aHdheSBvbmx5XHJcbiAgaWYgKHN0YXRlLnBsYXlNb2RlID09PSBcImxldmVsc2VsZWN0XCIpIHtcclxuICAgIGNvbnN0IG5hdkJ0bkggPSA0MjtcclxuICAgIGNvbnN0IG5hdkJ0blcgPSAxNTA7XHJcbiAgICBjb25zdCBuYXZZICAgID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNzk7XHJcblxyXG4gICAgaWYgKGx2bCA+IDEpIHtcclxuICAgICAgZHJhd0J1dHRvbihnYywgXCLihpAgUFJFVlwiLCB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA1LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsLS07XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sIDE4KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QnV0dG9uKGdjLCBcIkxFVkVMIFNFTEVDVFwiLCBjeCAtIG5hdkJ0blcgLyAyLCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XHJcbiAgICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sIDE2KTtcclxuXHJcbiAgICBpZiAobHZsIDwgTEVWRUxfQ09VTlQpIHtcclxuICAgICAgZHJhd0J1dHRvbihnYywgXCJORVhUIOKGklwiLCB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjc3LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsKys7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sIDE4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYXdMZXZlbEhVRChnYyk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9ICAgIGZyb20gJy4uL3RoZW1lJztcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gICBmcm9tICcuLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gIGZyb20gJy4uL3JlbmRlcmVyJztcclxuaW1wb3J0IHsgTEVWRUxfQ09VTlQgfSBmcm9tICcuLi9sZXZlbERhdGEnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbFNlbGVjdCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IHQgID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlICAgID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduICAgID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCAgICAgICAgID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiTEVWRUwgU0VMRUNUXCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xKTtcclxuXHJcbiAgLy8gNS1jb2x1bW4gw5cgNC1yb3cgZ3JpZCAoMjAgbGV2ZWxzKVxyXG4gIGNvbnN0IGNvbHMgID0gNTtcclxuICBjb25zdCB0aWxlVyA9IHRvcEJveFdpZHRoICAqIDAuMTM7XHJcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjE0O1xyXG4gIGNvbnN0IGhHYXAgID0gKHRvcEJveFdpZHRoICogMC43OCAtIHRpbGVXICogY29scykgLyAoY29scyAtIDEpO1xyXG4gIGNvbnN0IHZHYXAgID0gdG9wQm94SGVpZ2h0ICogMC4wNDtcclxuICBjb25zdCBncmlkVyA9IHRpbGVXICogY29scyArIGhHYXAgKiAoY29scyAtIDEpO1xyXG4gIGNvbnN0IGdyaWRYID0gY3ggLSBncmlkVyAvIDI7XHJcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xODtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBMRVZFTF9DT1VOVDsgaSsrKSB7XHJcbiAgICBjb25zdCBjb2wgPSBpICUgY29scztcclxuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xyXG4gICAgY29uc3QgdHggID0gZ3JpZFggKyBjb2wgKiAodGlsZVcgKyBoR2FwKTtcclxuICAgIGNvbnN0IHR5ICA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XHJcbiAgICBjb25zdCBsdmwgPSBpICsgMTtcclxuXHJcbiAgICBjb25zdCBpc1dpcCA9IGx2bCA+IDEwO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSAgPSBpc1dpcCA/IHQuZGl2aWRlciA6IHQuc3Ryb2tlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCAgICA9IGlzV2lwID8gMSA6IDM7XHJcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSAgICA9IGlzV2lwID8gdC5mZ0RpbSA6IHQuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduICAgID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG5cclxuICAgIGN0eC5mb250ID0gYGJvbGQgMjBweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoYCR7bHZsfWAsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIICogMC4zOCk7XHJcblxyXG4gICAgY3R4LmZvbnQgICAgICA9IGAxMHB4ICR7Ym9keUZvbnR9YDtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBpc1dpcCA/IHQuZmdEaW0gOiB0LmZnRGltO1xyXG4gICAgY3R4LmZpbGxUZXh0KGlzV2lwID8gXCJzb29uXCIgOiBgTEVWRUwgJHtsdmx9YCwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjc0KTtcclxuXHJcbiAgICBjb25zdCBjYXB0dXJlZCA9IGx2bDtcclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCwgeTogdHksIHc6IHRpbGVXLCBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsICA9IGNhcHR1cmVkO1xyXG4gICAgICAgIHN0YXRlLnBsYXlNb2RlICAgICAgPSBcImxldmVsc2VsZWN0XCI7XHJcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmxpdmVzICAgICAgICAgPSAzO1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsXCI7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIEJhY2sgYnV0dG9uXHJcbiAgY29uc3QgYmFja1cgPSAxNTA7XHJcbiAgY29uc3QgYmFja0ggPSA0MjtcclxuICBjb25zdCBiYWNrWCA9IHRvcEJveFggKyB0b3BCb3hXaWR0aCAqIDAuMDQ7XHJcbiAgY29uc3QgYmFja1kgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC44MjtcclxuICBkcmF3QnV0dG9uKGdjLCBcIuKGkCBCQUNLXCIsIGJhY2tYLCBiYWNrWSwgYmFja1csIGJhY2tILCAoKSA9PiB7XHJcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9LCAxOCk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9ICAgIGZyb20gJy4uL3RoZW1lJztcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gICBmcm9tICcuLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gIGZyb20gJy4uL3JlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TWFpbk1lbnUgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BJbm5lclgsIHRvcElubmVyWSwgdG9wSW5uZXJXaWR0aCwgdG9wSW5uZXJIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCAgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgICAgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gICAgPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG5cclxuICBjdHguZm9udCA9IGBib2xkIDQycHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIk1BSU4gTUVOVVwiLCBjeCwgdG9wSW5uZXJZICsgdG9wSW5uZXJIZWlnaHQgKiAwLjE1KTtcclxuXHJcbiAgY29uc3QgYnRuVyAgID0gTWF0aC5taW4oMzAwLCB0b3BJbm5lcldpZHRoICogMC43OCk7XHJcbiAgY29uc3QgYnRuSCAgID0gNTA7XHJcbiAgY29uc3QgYnRuWCAgID0gY3ggLSBidG5XIC8gMjtcclxuICBjb25zdCBzdGFydFkgPSB0b3BJbm5lclkgKyB0b3BJbm5lckhlaWdodCAqIDAuMzI7XHJcbiAgY29uc3Qgc3RyaWRlID0gYnRuSCArIDE0O1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIlNUQVJUIEVYQU1cIiwgYnRuWCwgc3RhcnRZLCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgc3RhdGUubGl2ZXMgICAgICAgID0gMztcclxuICAgIHN0YXRlLnBhdXNlZCAgICAgICA9IGZhbHNlO1xyXG4gICAgc3RhdGUuZ2FtZU92ZXIgICAgID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5wbGF5TW9kZSAgICAgPSBcInBsYXlcIjtcclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsXCI7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJMRVZFTCBTRUxFQ1RcIiwgYnRuWCwgc3RhcnRZICsgc3RyaWRlLCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiQ09OVFJPTFNcIiwgYnRuWCwgc3RhcnRZICsgc3RyaWRlICogMiwgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUuY29udHJvbHNPcGVuID0gdHJ1ZTtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRoZW1lID0gKHN0YXRlOiBHYW1lU3RhdGUpID0+XHJcbiAgc3RhdGUuZGFya01vZGVcclxuICAgID8ge1xyXG4gICAgICAgIGJnOiBcIiMxMTExMTFcIixcclxuICAgICAgICBmZzogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgZmdNaWQ6IFwiI2NjY2NjY1wiLFxyXG4gICAgICAgIGZnRGltOiBcIiM4ODg4ODhcIixcclxuICAgICAgICBzdHJva2U6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIG92ZXJsYXlCZzogXCJyZ2JhKDEwLDEwLDEwLDAuOTApXCIsXHJcbiAgICAgICAgZGl2aWRlcjogXCIjNDQ0NDQ0XCIsXHJcbiAgICAgIH1cclxuICAgIDoge1xyXG4gICAgICAgIGJnOiBcIiNmMGYwZjBcIixcclxuICAgICAgICBmZzogXCIjMTExMTExXCIsXHJcbiAgICAgICAgZmdNaWQ6IFwiIzMzMzMzM1wiLFxyXG4gICAgICAgIGZnRGltOiBcIiM2NjY2NjZcIixcclxuICAgICAgICBzdHJva2U6IFwiIzExMTExMVwiLFxyXG4gICAgICAgIG92ZXJsYXlCZzogXCJyZ2JhKDIyMCwyMjAsMjIwLDAuOTMpXCIsXHJcbiAgICAgICAgZGl2aWRlcjogXCIjYWFhYWFhXCIsXHJcbiAgICAgIH07XHJcbiJdfQ==
