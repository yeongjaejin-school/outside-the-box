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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sYXlvdXQudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbERhdGEudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbHMvTGV2ZWwxLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxzL0xldmVsMi50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVscy9MZXZlbDMudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9tYWluLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvQ29udHJvbHNPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvUGF1c2VPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvcmVuZGVyZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9zY3JlZW5zL0xldmVsLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvc2NyZWVucy9MZXZlbFNlbGVjdC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3NjcmVlbnMvTWFpbk1lbnUudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sU0FBUyxHQUFBLE9BQUEsQ0FBQSxTQUFBLEdBQUcsU0FBWixTQUFTLENBQUksR0FBNkIsRUFBSztFQUMxRCxJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7RUFDMUIsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FB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LEVBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxJQUFBLFdBQUEsSUFBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLDhCQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsMkJBQUEsQ0FBQSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSw2QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSwrQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQTtBQVRqRSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDO0FBV3RDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsWUFBTTtFQUNwQixJQUFNLFVBQVUsR0FBSSxRQUFRLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBOEI7RUFDdkYsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQTZCO0VBQ3ZGLElBQU0sVUFBVSxHQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUE4QjtFQUV2RixJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsVUFBVSxFQUFFO0lBQzlDLE9BQU8sQ0FBQyxLQUFLLENBQUMsc0NBQXNDLENBQUM7SUFDckQ7RUFDRjtFQUVBLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0VBQ3ZDLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDUixPQUFPLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDO0lBQzFDO0VBQ0Y7O0VBRUE7O0VBRUEsSUFBTSxLQUFnQixHQUFHO0lBQ3ZCLGFBQWEsRUFBRSxVQUFVO0lBQ3pCLFlBQVksRUFBRyxDQUFDO0lBQ2hCLEtBQUssRUFBVSxDQUFDO0lBQ2hCLE1BQU0sRUFBUyxLQUFLO0lBQ3BCLFlBQVksRUFBRyxLQUFLO0lBQ3BCLFFBQVEsRUFBTyxJQUFJO0lBQ25CLFVBQVUsRUFBSyx3Q0FBd0M7SUFDdkQsVUFBVSxFQUFFLENBQ1YsaUVBQWlFLEVBQ2pFLDJFQUEyRSxFQUMzRSwyRUFBMkUsQ0FDNUU7SUFDRCxVQUFVLEVBQUcsS0FBSztJQUNsQixTQUFTLEVBQUksRUFBRTtJQUNmLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFFBQVEsRUFBSyxNQUFNO0lBQ25CLFFBQVEsRUFBSztFQUNmLENBQUM7O0VBRUQ7RUFDQTtFQUNBOztFQUVBLElBQU0sRUFBZSxHQUFHO0lBQ3RCLEdBQUcsRUFBSCxHQUFHO0lBQ0gsS0FBSyxFQUFMLEtBQUs7SUFDTCxRQUFRLEVBQWEsRUFBRTtJQUN2QixNQUFNLEVBQWUsU0FBckIsTUFBTSxDQUFBLEVBQXFCLENBQUMsQ0FBQztJQUFJO0lBQ2pDLFFBQVEsRUFBYSxTQUFyQixRQUFRLENBQUEsRUFBbUIsQ0FBQyxDQUFDO0lBQUk7SUFDakMsZUFBZSxFQUFNLFNBQXJCLGVBQWUsQ0FBQSxFQUFZLENBQUMsQ0FBQztJQUFJO0lBQ2pDLFdBQVcsNkNBQWlEO0lBQzVELFFBQVEsMkNBQWtEO0lBQzFELElBQUksRUFBaUIsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNoQyxhQUFhLEVBQVEsSUFBSSxLQUFLLENBQUMsQ0FBQztJQUNoQyxVQUFVLEVBQVcsS0FBSztJQUMxQixtQkFBbUIsRUFBRTtFQUN2QixDQUFDO0VBRUQsRUFBRSxDQUFDLGVBQWUsR0FBRyxZQUFNO0lBQ3pCLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFJLEtBQUs7SUFDNUIsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUssRUFBRTtJQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLO0VBQzlCLENBQUM7RUFFRCxFQUFFLENBQUMsUUFBUSxHQUFHLFlBQU07SUFDbEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7SUFDaEIsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7TUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQU0sQ0FBQztNQUNyQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJO0lBQzFCO0lBQ0EsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ2IsQ0FBQztFQUVELEVBQUUsQ0FBQyxNQUFNLEdBQUcsWUFBTTtJQUNoQixFQUFFLENBQUMsUUFBUSxHQUFHLEVBQUU7SUFDaEIsSUFBQSx3QkFBYyxFQUFDLEVBQUUsQ0FBQztJQUNsQixJQUFBLGtCQUFRLEVBQUMsRUFBRSxDQUFDO0lBQ1osSUFBQSwyQkFBaUIsRUFBQyxFQUFFLENBQUM7SUFFckIsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWE7TUFDNUIsS0FBSyxVQUFVO1FBQUssSUFBQSxzQkFBWSxFQUFDLEVBQUUsQ0FBQztRQUFLO01BQ3pDLEtBQUssYUFBYTtRQUFFLElBQUEsNEJBQWUsRUFBQyxFQUFFLENBQUM7UUFBRTtNQUN6QyxLQUFLLE9BQU87UUFBUSxJQUFBLGdCQUFTLEVBQUMsRUFBRSxDQUFDO1FBQVE7SUFDM0M7SUFFQSxJQUFBLHlCQUFlLEVBQUMsRUFBRSxDQUFDO0lBRW5CLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQVEsSUFBQSw4QkFBZ0IsRUFBQyxFQUFFLENBQUM7SUFDL0MsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFBLG9DQUFtQixFQUFDLEVBQUUsQ0FBQztJQUNsRCxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFNLElBQUEsb0NBQW1CLEVBQUMsRUFBRSxDQUFDO0VBQ3BELENBQUM7O0VBRUQ7O0VBRUEsSUFBTSxjQUFjLEdBQUcsU0FBakIsY0FBYyxDQUFBLEVBQVM7SUFDM0IsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFVBQVU7SUFDM0IsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVc7SUFDNUIsVUFBVSxDQUFDLEtBQUssR0FBSSxXQUFXLENBQUMsS0FBSyxHQUFJLENBQUM7SUFDMUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUM7RUFDNUMsQ0FBQzs7RUFFRDs7RUFFQSxJQUFNLFFBQVEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxDQUFhLEVBQUs7SUFDbEMsSUFBTSxJQUFJLEdBQUssVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakQsSUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBSSxJQUFJLENBQUMsS0FBSztJQUM3QyxJQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNO0lBQzlDLE9BQU87TUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTTtNQUNuQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUs7SUFDL0IsQ0FBQztFQUNILENBQUM7RUFFRCxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0lBQzFDLElBQUEsU0FBQSxHQUFpQixRQUFRLENBQUMsQ0FBQyxDQUFDO01BQXBCLENBQUMsR0FBQSxTQUFBLENBQUQsQ0FBQztNQUFFLENBQUMsR0FBQSxTQUFBLENBQUQsQ0FBQztJQUFpQixJQUFBLFNBQUEsR0FBQSwwQkFBQSxDQUNWLEVBQUUsQ0FBQyxRQUFRO01BQUEsS0FBQTtJQUFBO01BQTlCLEtBQUEsU0FBQSxDQUFBLENBQUEsTUFBQSxLQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsSUFBQSxJQUFBLEdBQWdDO1FBQUEsSUFBckIsSUFBSSxHQUFBLEtBQUEsQ0FBQSxLQUFBO1FBQ2IsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUU7VUFDOUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1VBQ2I7UUFDRjtNQUNGO0lBQUMsU0FBQSxHQUFBO01BQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBO0lBQUE7TUFBQSxTQUFBLENBQUEsQ0FBQTtJQUFBO0VBQ0gsQ0FBQyxDQUFDO0VBRUYsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFDLENBQUMsRUFBSztJQUM5QyxJQUFBLFVBQUEsR0FBaUIsUUFBUSxDQUFDLENBQUMsQ0FBQztNQUFwQixDQUFDLEdBQUEsVUFBQSxDQUFELENBQUM7TUFBRSxDQUFDLEdBQUEsVUFBQSxDQUFELENBQUM7SUFDWixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDM0IsVUFBQyxDQUFDO01BQUEsT0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQUEsQ0FDakUsQ0FBQztJQUNELFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksR0FBRyxTQUFTLEdBQUcsU0FBUztFQUN4RCxDQUFDLENBQUM7RUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0lBQ3hDO0lBQ0EsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7TUFDdEUsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtRQUN0QixFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxLQUFLO1FBQzVCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNYO01BQ0Y7TUFDQSxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFO1FBQ3JCLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSztRQUMxRCxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBSSxLQUFLO1FBQzdCLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUM7UUFDekIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ1g7TUFDRjtNQUNBLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxXQUFXLEVBQUU7UUFDekIsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNwRCxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDWDtNQUNGO01BQ0EsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRTtRQUN4RCxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsR0FBRztRQUMzQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDWDtNQUNGO01BQ0E7SUFDRjtJQUVBLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7TUFDdEIsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRTtRQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUs7UUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7TUFBRSxDQUFDLE1BQ3JFLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUc7UUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLO1FBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQUU7SUFDM0U7RUFDRixDQUFDLENBQUM7RUFFRixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQU07SUFDdEMsY0FBYyxDQUFDLENBQUM7SUFDaEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxDQUFDOztFQUVGOztFQUVBLFdBQVcsQ0FBQyxZQUFNO0lBQ2hCLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3ZDLENBQUMsRUFBRSxHQUFHLENBQUM7O0VBRVA7O0VBRUEsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUksWUFBTTtJQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSTtJQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUFFLENBQUM7RUFDL0QsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBTTtJQUFFLEVBQUUsQ0FBQyxVQUFVLEdBQUcsS0FBSztJQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUFFLENBQUM7RUFFL0QsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUksWUFBTTtJQUFFLEVBQUUsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJO0lBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQUUsQ0FBQztFQUNqRixFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxZQUFNO0lBQUUsRUFBRSxDQUFDLG1CQUFtQixHQUFHLEtBQUs7SUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7RUFBRSxDQUFDO0VBRWpGLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFZLDZCQUE2QjtFQUNwRCxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyx1Q0FBdUM7O0VBRTlEOztFQUVBLGNBQWMsQ0FBQyxDQUFDO0VBQ2hCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNiLENBQUM7Ozs7Ozs7OztBQ3hNRCxJQUFBLE1BQUEsR0FBQSxPQUFBO0FBQ0EsSUFBQSxPQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsU0FBQSxHQUFBLE9BQUE7QUFFTyxJQUFNLG1CQUFtQixHQUFBLE9BQUEsQ0FBQSxtQkFBQSxHQUFHLFNBQXRCLG1CQUFtQixDQUFJLEVBQWUsRUFBSztFQUN0RCxJQUFRLEdBQUcsR0FBbUMsRUFBRSxDQUF4QyxHQUFHO0lBQUUsS0FBSyxHQUE0QixFQUFFLENBQW5DLEtBQUs7SUFBRSxXQUFXLEdBQWUsRUFBRSxDQUE1QixXQUFXO0lBQUUsUUFBUSxHQUFLLEVBQUUsQ0FBZixRQUFRO0VBQ3pDLElBQUEsVUFBQSxHQUF3RCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxDQUFDO0lBQTlELE9BQU8sR0FBQSxVQUFBLENBQVAsT0FBTztJQUFFLE9BQU8sR0FBQSxVQUFBLENBQVAsT0FBTztJQUFFLFdBQVcsR0FBQSxVQUFBLENBQVgsV0FBVztJQUFFLFlBQVksR0FBQSxVQUFBLENBQVosWUFBWTtFQUNuRCxJQUFNLENBQUMsR0FBRyxJQUFBLGVBQVEsRUFBQyxLQUFLLENBQUM7RUFFekIsSUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLElBQUk7RUFDOUIsSUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUc7RUFDeEIsSUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUc7RUFDeEIsSUFBTSxFQUFFLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDO0VBQ2hDLElBQU0sRUFBRSxHQUFHLFlBQVksR0FBRyxHQUFHLEdBQUcsQ0FBQztFQUNqQyxJQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFFdEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsU0FBUztFQUMzQixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUM1QixHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNO0VBQzFCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQztFQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztFQUU5QixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0VBQ3BCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUTtFQUN4QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVE7RUFDM0IsR0FBRyxDQUFDLElBQUksZ0JBQUEsTUFBQSxDQUFnQixXQUFXLENBQUU7RUFDckMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7RUFFbEQsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsT0FBTztFQUMzQixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUM7RUFDakIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztFQUN6QyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0VBQ3pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUVaLElBQU0sUUFBUSxHQUFHLENBQ2Y7SUFBRSxHQUFHLEVBQUUsZUFBZTtJQUFFLElBQUksRUFBRTtFQUFrQixDQUFDLEVBQ2pEO0lBQUUsR0FBRyxFQUFFLE9BQU87SUFBRSxJQUFJLEVBQUU7RUFBMkIsQ0FBQyxFQUNsRDtJQUFFLEdBQUcsRUFBRSxLQUFLO0lBQUUsSUFBSSxFQUFFO0VBQW1CLENBQUMsQ0FDekM7RUFFRCxJQUFNLEtBQUssR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7RUFDNUIsSUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLElBQUk7RUFDdEIsSUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLEdBQUc7RUFDeEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEdBQUc7RUFDMUIsSUFBTSxPQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0VBQzlCLElBQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRztFQUUzQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUN4QyxJQUFNLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxHQUFHLElBQUk7SUFDN0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxDQUFDO0lBRXJDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsU0FBUztJQUN0RCxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPO0lBQzNCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQztJQUNqQixHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUM3QyxHQUFHLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztJQUUvQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ3BCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUTtJQUN4QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVE7SUFDM0IsR0FBRyxDQUFDLElBQUksZ0JBQUEsTUFBQSxDQUFnQixXQUFXLENBQUU7SUFDckMsR0FBRyxDQUFDLFFBQVEsQ0FDVixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUNmLE9BQU8sR0FBRyxPQUFPLEdBQUcsQ0FBQyxFQUNyQixVQUFVLEVBQ1YsT0FBTyxHQUFHLENBQ1osQ0FBQztJQUVELEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUs7SUFDdkIsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNO0lBQ3RCLEdBQUcsQ0FBQyxJQUFJLFdBQUEsTUFBQSxDQUFXLFFBQVEsQ0FBRTtJQUM3QixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQztFQUNuRDtFQUVBLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUs7RUFDdkIsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRO0VBQ3hCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsUUFBUTtFQUMzQixHQUFHLENBQUMsSUFBSSxXQUFBLE1BQUEsQ0FBVyxRQUFRLENBQUU7RUFDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxtQ0FBbUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7O0VBRXJFO0VBQ0EsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFO0VBRWhCLElBQU0sTUFBTSxHQUFHLEdBQUc7RUFDbEIsSUFBTSxNQUFNLEdBQUcsRUFBRTtFQUNqQixJQUFBLG9CQUFVLEVBQ1IsRUFBRSxFQUNGLFVBQVUsRUFDVixFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFDZixFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFDYixNQUFNLEVBQ04sTUFBTSxFQUNOLFlBQU07SUFDSixLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUs7SUFDMUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxFQUNELEVBQ0YsQ0FBQztBQUNILENBQUM7Ozs7Ozs7OztBQ25HRCxJQUFBLE9BQUEsR0FBQSxPQUFBO0FBQ0EsSUFBQSxTQUFBLEdBQUEsT0FBQTtBQUVPLElBQU0sbUJBQW1CLEdBQUEsT0FBQSxDQUFBLG1CQUFBLEdBQUcsU0FBdEIsbUJBQW1CLENBQUksRUFBZSxFQUFLO0VBQ3RELElBQVEsR0FBRyxHQUFtQyxFQUFFLENBQXhDLEdBQUc7SUFBRSxLQUFLLEdBQTRCLEVBQUUsQ0FBbkMsS0FBSztJQUFFLFdBQVcsR0FBZSxFQUFFLENBQTVCLFdBQVc7SUFBRSxRQUFRLEdBQUssRUFBRSxDQUFmLFFBQVE7RUFDekMsSUFBQSxVQUFBLEdBQWlCLElBQUEsaUJBQVMsRUFBQyxHQUFHLENBQUM7SUFBdkIsQ0FBQyxHQUFBLFVBQUEsQ0FBRCxDQUFDO0lBQUUsQ0FBQyxHQUFBLFVBQUEsQ0FBRCxDQUFDO0VBQ1osSUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7RUFDaEIsSUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUM7O0VBRWhCO0VBQ0EsR0FBRyxDQUFDLFNBQVMsR0FBRyxrQkFBa0I7RUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7O0VBRXhCO0VBQ0EsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQztFQUN0QyxJQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsSUFBSTtFQUN2QixJQUFNLE1BQU0sR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLENBQUM7RUFDOUIsSUFBTSxNQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sR0FBRyxDQUFDO0VBRTlCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUztFQUN6QixHQUFHLENBQUMsV0FBVyxHQUFHLFNBQVM7RUFDM0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDO0VBQ2pCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0VBQzVDLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO0VBRTlDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUztFQUN6QixHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVE7RUFDeEIsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO0VBQzNCLEdBQUcsQ0FBQyxJQUFJLGdCQUFBLE1BQUEsQ0FBZ0IsV0FBVyxDQUFFO0VBQ3JDLEdBQUcsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUUsRUFBRSxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztFQUVyRCxHQUFHLENBQUMsU0FBUyxHQUFHLFNBQVM7RUFDekIsR0FBRyxDQUFDLElBQUksV0FBQSxNQUFBLENBQVcsUUFBUSxDQUFFO0VBQzdCLEdBQUcsQ0FBQyxRQUFRLDJCQUFBLE1BQUEsQ0FDZ0IsS0FBSyxDQUFDLFVBQVUsUUFDMUMsRUFBRSxFQUNGLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxFQUN0QixNQUFNLEdBQUcsSUFDWCxDQUFDO0VBRUQsR0FBRyxDQUFDLFdBQVcsR0FBRyxTQUFTO0VBQzNCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQztFQUNqQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDZixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDO0VBQ3pELEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxHQUFHLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUM7RUFDekQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBRVosRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFO0VBRWhCLElBQU0sSUFBSSxHQUFHLEdBQUc7RUFDaEIsSUFBTSxJQUFJLEdBQUcsRUFBRTtFQUVmLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7SUFDN0IsSUFBQSxvQkFBVSxFQUNSLEVBQUUsRUFDRixXQUFXLEVBQ1gsRUFBRSxHQUFHLElBQUksR0FBRyxDQUFDLEVBQ2IsTUFBTSxHQUFHLE1BQU0sR0FBRyxJQUFJLEVBQ3RCLElBQUksRUFDSixJQUFJLEVBQ0osWUFBTTtNQUNKLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQztNQUNmLEtBQUssQ0FBQyxRQUFRLEdBQUcsS0FBSztNQUN0QixLQUFLLENBQUMsWUFBWSxHQUFHLENBQUM7TUFDdEIsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO01BQ3BCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNiLENBQUMsRUFDRCxFQUNGLENBQUM7SUFFRCxJQUFBLG9CQUFVLEVBQ1IsRUFBRSxFQUNGLFdBQVcsRUFDWCxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFDYixNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksRUFDdEIsSUFBSSxFQUNKLElBQUksRUFDSixZQUFNO01BQ0osS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDO01BQ2YsS0FBSyxDQUFDLFFBQVEsR0FBRyxLQUFLO01BQ3RCLEtBQUssQ0FBQyxhQUFhLEdBQUcsVUFBVTtNQUNoQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7TUFDcEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxFQUNELEVBQ0YsQ0FBQztFQUNILENBQUMsTUFBTTtJQUNMLElBQUEsb0JBQVUsRUFDUixFQUFFLEVBQ0YsV0FBVyxFQUNYLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUNiLE1BQU0sR0FBRyxNQUFNLEdBQUcsSUFBSSxFQUN0QixJQUFJLEVBQ0osSUFBSSxFQUNKLFlBQU07TUFDSixLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7TUFDZixLQUFLLENBQUMsUUFBUSxHQUFHLEtBQUs7TUFDdEIsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVO01BQ2hDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztNQUNwQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDYixDQUFDLEVBQ0QsRUFDRixDQUFDO0VBQ0g7QUFDRixDQUFDOzs7Ozs7Ozs7QUN4R0QsSUFBQSxNQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsT0FBQSxHQUFBLE9BQUE7QUFDQSxJQUFBLFNBQUEsR0FBQSxPQUFBO0FBRU8sSUFBTSxnQkFBZ0IsR0FBQSxPQUFBLENBQUEsZ0JBQUEsR0FBRyxTQUFuQixnQkFBZ0IsQ0FBSSxFQUFlLEVBQUs7RUFDbkQsSUFBUSxHQUFHLEdBQXlCLEVBQUUsQ0FBOUIsR0FBRztJQUFFLEtBQUssR0FBa0IsRUFBRSxDQUF6QixLQUFLO0lBQUUsV0FBVyxHQUFLLEVBQUUsQ0FBbEIsV0FBVztFQUMvQixJQUFBLFVBQUEsR0FBd0QsSUFBQSxpQkFBUyxFQUFDLEdBQUcsQ0FBQztJQUE5RCxPQUFPLEdBQUEsVUFBQSxDQUFQLE9BQU87SUFBRSxPQUFPLEdBQUEsVUFBQSxDQUFQLE9BQU87SUFBRSxXQUFXLEdBQUEsVUFBQSxDQUFYLFdBQVc7SUFBRSxZQUFZLEdBQUEsVUFBQSxDQUFaLFlBQVk7RUFDbkQsSUFBTSxHQUFHLEdBQUcsV0FBVyxHQUFHLElBQUk7RUFDOUIsSUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUc7RUFDeEIsSUFBTSxFQUFFLEdBQUcsT0FBTyxHQUFHLEdBQUc7RUFDeEIsSUFBTSxFQUFFLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDO0VBQ2hDLElBQU0sRUFBRSxHQUFHLFlBQVksR0FBRyxHQUFHLEdBQUcsQ0FBQztFQUNqQyxJQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDdEIsSUFBTSxDQUFDLEdBQUcsSUFBQSxlQUFRLEVBQUMsS0FBSyxDQUFDO0VBRXpCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVM7RUFDM0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDNUIsR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTTtFQUMxQixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUM7RUFDakIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFFOUIsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtFQUNwQixHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVE7RUFDeEIsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO0VBQzNCLEdBQUcsQ0FBQyxJQUFJLGdCQUFBLE1BQUEsQ0FBZ0IsV0FBVyxDQUFFO0VBQ3JDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztFQUUxQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPO0VBQzNCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQztFQUNqQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7RUFDZixHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxDQUFDO0VBQ3hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7RUFDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztFQUVaO0VBQ0EsRUFBRSxDQUFDLFFBQVEsR0FBRyxFQUFFO0VBRWhCLElBQU0sSUFBSSxHQUFHLEdBQUc7RUFDaEIsSUFBTSxJQUFJLEdBQUcsRUFBRTtFQUNmLElBQU0sSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsQ0FBQztFQUUxQixJQUFBLG9CQUFVLEVBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFNO0lBQy9ELEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSztJQUNwQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDYixDQUFDLENBQUM7RUFFRixJQUFBLG9CQUFVLEVBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFNO0lBQ3JFLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSztJQUNwQixLQUFLLENBQUMsS0FBSyxHQUFHLENBQUM7SUFDZixFQUFFLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEIsS0FBSyxDQUFDLGFBQWEsR0FBRyxVQUFVO0lBQ2hDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNiLENBQUMsQ0FBQztFQUVGLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsZUFBZSxHQUFHLGVBQWU7RUFDdEUsSUFBQSxvQkFBVSxFQUNSLEVBQUUsRUFDRixXQUFXLEVBQ1gsSUFBSSxFQUNKLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUNiLElBQUksRUFDSixJQUFJLEVBQ0osWUFBTTtJQUNKLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUTtJQUNoQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDYixDQUFDLEVBQ0QsRUFDRixDQUFDO0FBQ0gsQ0FBQzs7Ozs7Ozs7O0FDcEVELElBQUEsTUFBQSxHQUFBLE9BQUE7QUFDQSxJQUFBLE9BQUEsR0FBQSxPQUFBO0FBQ0EsSUFBQSxVQUFBLEdBQUEsT0FBQTtBQUVPLElBQU0sY0FBYyxHQUFBLE9BQUEsQ0FBQSxjQUFBLEdBQUcsU0FBakIsY0FBYyxDQUFJLEVBQWUsRUFBSztFQUNqRCxJQUFRLEdBQUcsR0FBWSxFQUFFLENBQWpCLEdBQUc7SUFBRSxLQUFLLEdBQUssRUFBRSxDQUFaLEtBQUs7RUFDbEIsSUFBTSxDQUFDLEdBQUcsSUFBQSxlQUFRLEVBQUMsS0FBSyxDQUFDO0VBQ3pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRTtFQUNyQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0VBQ3BCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUN6RCxDQUFDO0FBRU0sSUFBTSxRQUFRLEdBQUEsT0FBQSxDQUFBLFFBQUEsR0FBRyxTQUFYLFFBQVEsQ0FBSSxFQUFlLEVBQUs7RUFDM0MsSUFBUSxHQUFHLEdBQTJDLEVBQUUsQ0FBaEQsR0FBRztJQUFFLEtBQUssR0FBb0MsRUFBRSxDQUEzQyxLQUFLO0lBQUUsSUFBSSxHQUE4QixFQUFFLENBQXBDLElBQUk7SUFBRSxVQUFVLEdBQWtCLEVBQUUsQ0FBOUIsVUFBVTtJQUFFLFdBQVcsR0FBSyxFQUFFLENBQWxCLFdBQVc7RUFDakQsSUFBQSxVQUFBLEdBQXFCLElBQUEsaUJBQVMsRUFBQyxHQUFHLENBQUM7SUFBM0IsQ0FBQyxHQUFBLFVBQUEsQ0FBRCxDQUFDO0lBQUUsS0FBSyxHQUFBLFVBQUEsQ0FBTCxLQUFLO0VBQ2hCLElBQUksVUFBVSxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO0lBQ3ZDLElBQU0sS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJO0lBQ3RCLElBQU0sS0FBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDOUQsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7RUFDekUsQ0FBQyxNQUFNO0lBQ0wsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFBLGVBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0lBQ2xDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUTtJQUN4QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVE7SUFDM0IsR0FBRyxDQUFDLElBQUksZ0JBQUEsTUFBQSxDQUFnQixXQUFXLENBQUU7SUFDckMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQztFQUMvQztBQUNGLENBQUM7QUFFTSxJQUFNLGlCQUFpQixHQUFBLE9BQUEsQ0FBQSxpQkFBQSxHQUFHLFNBQXBCLGlCQUFpQixDQUFJLEVBQWUsRUFBSztFQUNwRCxJQUFRLEdBQUcsR0FBZ0QsRUFBRSxDQUFyRCxHQUFHO0lBQUUsS0FBSyxHQUF5QyxFQUFFLENBQWhELEtBQUs7SUFBRSxhQUFhLEdBQTBCLEVBQUUsQ0FBekMsYUFBYTtJQUFFLG1CQUFtQixHQUFLLEVBQUUsQ0FBMUIsbUJBQW1CO0VBQ3RELElBQUEsV0FBQSxHQUF3RCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxDQUFDO0lBQTlELE9BQU8sR0FBQSxXQUFBLENBQVAsT0FBTztJQUFFLE9BQU8sR0FBQSxXQUFBLENBQVAsT0FBTztJQUFFLFdBQVcsR0FBQSxXQUFBLENBQVgsV0FBVztJQUFFLFlBQVksR0FBQSxXQUFBLENBQVosWUFBWTtFQUNuRCxJQUFJLG1CQUFtQixJQUFJLGFBQWEsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFO0lBQ3pELEdBQUcsQ0FBQyxTQUFTLENBQ1gsYUFBYSxFQUNiLEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILEdBQUcsRUFDSCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFdBQVcsRUFDWCxZQUNGLENBQUM7RUFDSCxDQUFDLE1BQU07SUFDTCxHQUFHLENBQUMsV0FBVyxHQUFHLElBQUEsZUFBUSxFQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07SUFDeEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDO0lBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDO0VBQzdEO0FBQ0YsQ0FBQzs7QUFFRDtBQUNPLElBQU0sVUFBVSxHQUFBLE9BQUEsQ0FBQSxVQUFBLEdBQUcsU0FBYixVQUFVLENBQ3JCLEVBQWUsRUFDZixLQUFhLEVBQ2IsQ0FBUyxFQUNULENBQVMsRUFDVCxDQUFTLEVBQ1QsQ0FBUyxFQUNULE1BQWtCLEVBRWY7RUFBQSxJQURILFFBQVEsR0FBQSxTQUFBLENBQUEsTUFBQSxRQUFBLFNBQUEsUUFBQSxTQUFBLEdBQUEsU0FBQSxNQUFHLEVBQUU7RUFFYixJQUFRLEdBQUcsR0FBeUIsRUFBRSxDQUE5QixHQUFHO0lBQUUsS0FBSyxHQUFrQixFQUFFLENBQXpCLEtBQUs7SUFBRSxXQUFXLEdBQUssRUFBRSxDQUFsQixXQUFXO0VBQy9CLElBQU0sQ0FBQyxHQUFHLElBQUEsZUFBUSxFQUFDLEtBQUssQ0FBQztFQUN6QixHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNO0VBQzFCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQztFQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUMxQixHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0VBQ3BCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUTtFQUN4QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVE7RUFDM0IsR0FBRyxDQUFDLElBQUksV0FBQSxNQUFBLENBQVcsUUFBUSxTQUFBLE1BQUEsQ0FBTSxXQUFXLENBQUU7RUFDOUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztFQUNqRCxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUFFLENBQUMsRUFBRCxDQUFDO0lBQUUsQ0FBQyxFQUFELENBQUM7SUFBRSxDQUFDLEVBQUQsQ0FBQztJQUFFLENBQUMsRUFBRCxDQUFDO0lBQUUsTUFBTSxFQUFOO0VBQU8sQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFFTSxJQUFNLGVBQWUsR0FBQSxPQUFBLENBQUEsZUFBQSxHQUFHLFNBQWxCLGVBQWUsQ0FBSSxFQUFlLEVBQUs7RUFDbEQsSUFBUSxHQUFHLEdBQW1DLEVBQUUsQ0FBeEMsR0FBRztJQUFFLEtBQUssR0FBNEIsRUFBRSxDQUFuQyxLQUFLO0lBQUUsV0FBVyxHQUFlLEVBQUUsQ0FBNUIsV0FBVztJQUFFLFFBQVEsR0FBSyxFQUFFLENBQWYsUUFBUTtFQUN6QyxJQUFBLFdBQUEsR0FDRSxJQUFBLGlCQUFTLEVBQUMsR0FBRyxDQUFDO0lBRFIsQ0FBQyxHQUFBLFdBQUEsQ0FBRCxDQUFDO0lBQUUsUUFBUSxHQUFBLFdBQUEsQ0FBUixRQUFRO0lBQUUsWUFBWSxHQUFBLFdBQUEsQ0FBWixZQUFZO0lBQUUsVUFBVSxHQUFBLFdBQUEsQ0FBVixVQUFVO0lBQUUsZUFBZSxHQUFBLFdBQUEsQ0FBZixlQUFlO0VBRTlELElBQU0sQ0FBQyxHQUFHLElBQUEsZUFBUSxFQUFDLEtBQUssQ0FBQztFQUV6QixHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNO0VBQzFCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQztFQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztFQUVuRSxJQUFNLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQztFQUNyQixJQUFNLFNBQVMsR0FBRyxZQUFZLEdBQUcsSUFBSTtFQUVyQyxJQUFNLFNBQVMsR0FDYixLQUFLLENBQUMsYUFBYSxLQUFLLE9BQU8sR0FDM0IscUJBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxHQUNsQztJQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVTtJQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7RUFBVyxDQUFDO0VBRTFELEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7RUFDcEIsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRO0VBQ3hCLEdBQUcsQ0FBQyxZQUFZLEdBQUcsS0FBSztFQUV4QixHQUFHLENBQUMsSUFBSSxnQkFBQSxNQUFBLENBQWdCLFdBQVcsQ0FBRTtFQUNyQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsR0FBRyxFQUFFLEVBQUUsU0FBUyxDQUFDO0VBRWxFLEdBQUcsQ0FBQyxJQUFJLFdBQUEsTUFBQSxDQUFXLFFBQVEsQ0FBRTtFQUM3QixJQUFNLE9BQU8sR0FBRyxFQUFFO0VBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMvQyxHQUFHLENBQUMsUUFBUSxDQUNWLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQ2xCLE9BQU8sRUFDUCxVQUFVLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxPQUFPLEVBQzdCLFNBQ0YsQ0FBQztFQUNIO0FBQ0YsQ0FBQztBQUVNLElBQU0sWUFBWSxHQUFBLE9BQUEsQ0FBQSxZQUFBLEdBQUcsU0FBZixZQUFZLENBQUksRUFBZSxFQUFLO0VBQy9DLElBQVEsR0FBRyxHQUF5QixFQUFFLENBQTlCLEdBQUc7SUFBRSxLQUFLLEdBQWtCLEVBQUUsQ0FBekIsS0FBSztJQUFFLFdBQVcsR0FBSyxFQUFFLENBQWxCLFdBQVc7RUFDL0IsSUFBQSxXQUFBLEdBQXdELElBQUEsaUJBQVMsRUFBQyxHQUFHLENBQUM7SUFBOUQsT0FBTyxHQUFBLFdBQUEsQ0FBUCxPQUFPO0lBQUUsT0FBTyxHQUFBLFdBQUEsQ0FBUCxPQUFPO0lBQUUsV0FBVyxHQUFBLFdBQUEsQ0FBWCxXQUFXO0lBQUUsWUFBWSxHQUFBLFdBQUEsQ0FBWixZQUFZO0VBQ25ELElBQU0sSUFBSSxHQUFHLFdBQVcsR0FBRyxJQUFJO0VBQy9CLElBQU0sSUFBSSxHQUFHLFlBQVksR0FBRyxJQUFJO0VBQ2hDLElBQU0sQ0FBQyxHQUFHLElBQUEsZUFBUSxFQUFDLEtBQUssQ0FBQzs7RUFFekI7RUFDQSxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0VBQ3BCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTTtFQUN0QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVE7RUFDM0IsR0FBRyxDQUFDLElBQUksZ0JBQUEsTUFBQSxDQUFnQixXQUFXLENBQUU7RUFDckMsR0FBRyxDQUFDLFFBQVEsTUFBQSxNQUFBLENBQU0sS0FBSyxDQUFDLFlBQVksR0FBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLE9BQU8sR0FBRyxJQUFJLENBQUM7O0VBRXZFO0VBQ0EsSUFBTSxNQUFNLEdBQUcsRUFBRTtFQUNqQixJQUFNLE1BQU0sR0FBRyxFQUFFO0VBQ2pCLElBQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLE1BQU07RUFDcEQsSUFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksR0FBRyxNQUFNLEdBQUcsQ0FBQztFQUMxQyxHQUFHLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNO0VBQzFCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQztFQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQztFQUM5QyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0VBQ3BCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsUUFBUTtFQUN4QixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVE7RUFDM0IsR0FBRyxDQUFDLElBQUksZ0JBQUEsTUFBQSxDQUFnQixXQUFXLENBQUU7RUFDckMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7RUFDNUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7SUFDZixDQUFDLEVBQUUsTUFBTTtJQUNULENBQUMsRUFBRSxNQUFNO0lBQ1QsQ0FBQyxFQUFFLE1BQU07SUFDVCxDQUFDLEVBQUUsTUFBTTtJQUNULE1BQU0sRUFBRSxTQUFSLE1BQU0sQ0FBQSxFQUFRO01BQ1osS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJO01BQ25CLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNiO0VBQ0YsQ0FBQyxDQUFDOztFQUVGO0VBQ0EsSUFBTSxTQUFTLEdBQUcsRUFBRTtFQUNwQixJQUFNLFFBQVEsR0FBRyxDQUFDO0VBQ2xCLElBQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxZQUFZLEdBQUcsSUFBSTtFQUM1QyxJQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxRQUFRO0VBQzNDLElBQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxXQUFXLEdBQUcsSUFBSSxHQUFHLE1BQU07RUFFcEQsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO0VBQzNCLEdBQUcsQ0FBQyxJQUFJLE1BQUEsTUFBQSxDQUFNLFNBQVMsa0JBQWU7RUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUMxQixHQUFHLENBQUMsU0FBUyxHQUNYLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVMsR0FBRyxTQUFTO0lBQ3RFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTTtJQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxNQUFNLEdBQUcsQ0FBQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsRUFBRSxNQUFNLENBQUM7RUFDaEU7QUFDRixDQUFDOzs7Ozs7Ozs7QUNwS0QsSUFBQSxNQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsT0FBQSxHQUFBLE9BQUE7QUFDQSxJQUFBLFNBQUEsR0FBQSxPQUFBO0FBQ0EsSUFBQSxNQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsT0FBQSxHQUFBLE9BQUE7QUFDQSxJQUFBLE9BQUEsR0FBQSxPQUFBO0FBQ0EsSUFBQSxVQUFBLEdBQUEsT0FBQTtBQUVPLElBQU0sU0FBUyxHQUFBLE9BQUEsQ0FBQSxTQUFBLEdBQUcsU0FBWixTQUFTLENBQUksRUFBZSxFQUFLO0VBQzVDLElBQVEsR0FBRyxHQUFtQyxFQUFFLENBQXhDLEdBQUc7SUFBRSxLQUFLLEdBQTRCLEVBQUUsQ0FBbkMsS0FBSztJQUFFLFdBQVcsR0FBZSxFQUFFLENBQTVCLFdBQVc7SUFBRSxRQUFRLEdBQUssRUFBRSxDQUFmLFFBQVE7RUFDekMsSUFBQSxVQUFBLEdBQTJELElBQUEsaUJBQVMsRUFBQyxHQUFHLENBQUM7SUFBakUsQ0FBQyxHQUFBLFVBQUEsQ0FBRCxDQUFDO0lBQUUsT0FBTyxHQUFBLFVBQUEsQ0FBUCxPQUFPO0lBQUUsT0FBTyxHQUFBLFVBQUEsQ0FBUCxPQUFPO0lBQUUsV0FBVyxHQUFBLFVBQUEsQ0FBWCxXQUFXO0lBQUUsWUFBWSxHQUFBLFVBQUEsQ0FBWixZQUFZO0VBQ3RELElBQU0sRUFBRSxHQUFJLENBQUMsR0FBRyxDQUFDO0VBQ2pCLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxZQUFZO0VBQzlCLElBQU0sQ0FBQyxHQUFLLElBQUEsZUFBUSxFQUFDLEtBQUssQ0FBQzs7RUFFM0I7RUFDQSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7SUFDYixJQUFBLG9CQUFhLEVBQUMsRUFBRSxDQUFDO0lBQ2pCLElBQUEsc0JBQVksRUFBQyxFQUFFLENBQUM7SUFDaEI7RUFDRjs7RUFFQTtFQUNBLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtJQUNiLElBQUEsa0JBQVUsRUFBQyxFQUFFLENBQUM7SUFDZCxJQUFBLHNCQUFZLEVBQUMsRUFBRSxDQUFDO0lBQ2hCO0VBQ0Y7O0VBRUE7RUFDQSxJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7SUFDYixJQUFBLGtCQUFVLEVBQUMsRUFBRSxDQUFDO0lBQ2QsSUFBQSxzQkFBWSxFQUFDLEVBQUUsQ0FBQztJQUNoQjtFQUNGOztFQUVBO0VBQ0EsR0FBRyxDQUFDLFNBQVMsR0FBTSxDQUFDLENBQUMsRUFBRTtFQUN2QixHQUFHLENBQUMsU0FBUyxHQUFNLFFBQVE7RUFDM0IsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO0VBRTNCLEdBQUcsQ0FBQyxJQUFJLGdCQUFBLE1BQUEsQ0FBZ0IsV0FBVyxDQUFFO0VBQ3JDLEdBQUcsQ0FBQyxRQUFRLFVBQUEsTUFBQSxDQUFVLEdBQUcsR0FBSSxFQUFFLEVBQUUsT0FBTyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7RUFFL0QsR0FBRyxDQUFDLElBQUksV0FBQSxNQUFBLENBQWdCLFFBQVEsQ0FBRTtFQUNsQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLO0VBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxFQUFFLE9BQU8sR0FBRyxZQUFZLEdBQUcsSUFBSSxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7RUFFdkcsR0FBRyxDQUFDLElBQUksV0FBQSxNQUFBLENBQWdCLFFBQVEsQ0FBRTtFQUNsQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLO0VBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsNkRBQTZELEVBQUUsRUFBRSxFQUFFLE9BQU8sR0FBRyxZQUFZLEdBQUcsSUFBSSxFQUFFLFdBQVcsR0FBRyxHQUFHLENBQUM7O0VBRWpJO0VBQ0EsSUFBSSxLQUFLLENBQUMsUUFBUSxLQUFLLGFBQWEsRUFBRTtJQUNwQyxJQUFNLE9BQU8sR0FBRyxFQUFFO0lBQ2xCLElBQU0sT0FBTyxHQUFHLEdBQUc7SUFDbkIsSUFBTSxJQUFJLEdBQU0sT0FBTyxHQUFHLFlBQVksR0FBRyxJQUFJO0lBRTdDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtNQUNYLElBQUEsb0JBQVUsRUFBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sR0FBRyxXQUFXLEdBQUcsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQU07UUFDbkYsS0FBSyxDQUFDLFlBQVksRUFBRTtRQUNwQixFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQ1I7SUFFQSxJQUFBLG9CQUFVLEVBQUMsRUFBRSxFQUFFLGNBQWMsRUFBRSxFQUFFLEdBQUcsT0FBTyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFNO01BQzdFLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztNQUNwQixLQUFLLENBQUMsYUFBYSxHQUFHLGFBQWE7TUFDbkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2IsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLElBQUksR0FBRyxHQUFHLHNCQUFXLEVBQUU7TUFDckIsSUFBQSxvQkFBVSxFQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsT0FBTyxHQUFHLFdBQVcsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBTTtRQUNuRixLQUFLLENBQUMsWUFBWSxFQUFFO1FBQ3BCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztNQUNiLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDUjtFQUNGO0VBRUEsSUFBQSxzQkFBWSxFQUFDLEVBQUUsQ0FBQztBQUNsQixDQUFDOzs7Ozs7Ozs7QUNoRkQsSUFBQSxNQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsT0FBQSxHQUFBLE9BQUE7QUFDQSxJQUFBLFNBQUEsR0FBQSxPQUFBO0FBQ0EsSUFBQSxVQUFBLEdBQUEsT0FBQTtBQUVPLElBQU0sZUFBZSxHQUFBLE9BQUEsQ0FBQSxlQUFBLEdBQUcsU0FBbEIsZUFBZSxDQUFJLEVBQWUsRUFBSztFQUNsRCxJQUFRLEdBQUcsR0FBbUMsRUFBRSxDQUF4QyxHQUFHO0lBQUUsS0FBSyxHQUE0QixFQUFFLENBQW5DLEtBQUs7SUFBRSxXQUFXLEdBQWUsRUFBRSxDQUE1QixXQUFXO0lBQUUsUUFBUSxHQUFLLEVBQUUsQ0FBZixRQUFRO0VBQ3pDLElBQUEsVUFBQSxHQUEyRCxJQUFBLGlCQUFTLEVBQUMsR0FBRyxDQUFDO0lBQWpFLENBQUMsR0FBQSxVQUFBLENBQUQsQ0FBQztJQUFFLE9BQU8sR0FBQSxVQUFBLENBQVAsT0FBTztJQUFFLE9BQU8sR0FBQSxVQUFBLENBQVAsT0FBTztJQUFFLFdBQVcsR0FBQSxVQUFBLENBQVgsV0FBVztJQUFFLFlBQVksR0FBQSxVQUFBLENBQVosWUFBWTtFQUN0RCxJQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQztFQUNoQixJQUFNLENBQUMsR0FBSSxJQUFBLGVBQVEsRUFBQyxLQUFLLENBQUM7RUFFMUIsR0FBRyxDQUFDLFNBQVMsR0FBTSxDQUFDLENBQUMsRUFBRTtFQUN2QixHQUFHLENBQUMsU0FBUyxHQUFNLFFBQVE7RUFDM0IsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRO0VBQzNCLEdBQUcsQ0FBQyxJQUFJLGdCQUFBLE1BQUEsQ0FBd0IsV0FBVyxDQUFFO0VBQzdDLEdBQUcsQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUUsRUFBRSxPQUFPLEdBQUcsWUFBWSxHQUFHLEdBQUcsQ0FBQzs7RUFFOUQ7RUFDQSxJQUFNLElBQUksR0FBSSxDQUFDO0VBQ2YsSUFBTSxLQUFLLEdBQUcsV0FBVyxHQUFJLElBQUk7RUFDakMsSUFBTSxLQUFLLEdBQUcsWUFBWSxHQUFHLElBQUk7RUFDakMsSUFBTSxJQUFJLEdBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQztFQUM5RCxJQUFNLElBQUksR0FBSSxZQUFZLEdBQUcsSUFBSTtFQUNqQyxJQUFNLEtBQUssR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDO0VBQzlDLElBQU0sS0FBSyxHQUFHLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQztFQUM1QixJQUFNLEtBQUssR0FBRyxPQUFPLEdBQUcsWUFBWSxHQUFHLElBQUk7RUFBQyxJQUFBLEtBQUEsWUFBQSxNQUFBLEVBRU47SUFDcEMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUk7SUFDcEIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBQ2hDLElBQU0sRUFBRSxHQUFJLEtBQUssR0FBRyxHQUFHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztJQUN4QyxJQUFNLEVBQUUsR0FBSSxLQUFLLEdBQUcsR0FBRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDeEMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFFakIsSUFBTSxLQUFLLEdBQUcsR0FBRyxHQUFHLEVBQUU7SUFFdEIsR0FBRyxDQUFDLFdBQVcsR0FBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsTUFBTTtJQUMvQyxHQUFHLENBQUMsU0FBUyxHQUFNLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQztJQUNoQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztJQUVwQyxHQUFHLENBQUMsU0FBUyxHQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ3pDLEdBQUcsQ0FBQyxTQUFTLEdBQU0sUUFBUTtJQUMzQixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVE7SUFFM0IsR0FBRyxDQUFDLElBQUksZ0JBQUEsTUFBQSxDQUFnQixXQUFXLENBQUU7SUFDckMsR0FBRyxDQUFDLFFBQVEsSUFBQSxNQUFBLENBQUksR0FBRyxHQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBRXpELEdBQUcsQ0FBQyxJQUFJLFdBQUEsTUFBQSxDQUFnQixRQUFRLENBQUU7SUFDbEMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSztJQUN6QyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLFlBQUEsTUFBQSxDQUFZLEdBQUcsQ0FBRSxFQUFFLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBRWhGLElBQU0sUUFBUSxHQUFHLEdBQUc7SUFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7TUFDZixDQUFDLEVBQUUsRUFBRTtNQUFFLENBQUMsRUFBRSxFQUFFO01BQUUsQ0FBQyxFQUFFLEtBQUs7TUFBRSxDQUFDLEVBQUUsS0FBSztNQUNoQyxNQUFNLEVBQUUsU0FBUixNQUFNLENBQUEsRUFBUTtRQUNaLEtBQUssQ0FBQyxZQUFZLEdBQUksUUFBUTtRQUM5QixLQUFLLENBQUMsUUFBUSxHQUFRLGFBQWE7UUFDbkMsS0FBSyxDQUFDLFFBQVEsR0FBUSxLQUFLO1FBQzNCLEtBQUssQ0FBQyxLQUFLLEdBQVcsQ0FBQztRQUN2QixLQUFLLENBQUMsYUFBYSxHQUFHLE9BQU87UUFDN0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQ2I7SUFDRixDQUFDLENBQUM7RUFDSixDQUFDO0VBcENELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBVyxFQUFFLENBQUMsRUFBRTtJQUFBLEtBQUE7RUFBQTs7RUFzQ3BDO0VBQ0EsSUFBTSxLQUFLLEdBQUcsR0FBRztFQUNqQixJQUFNLEtBQUssR0FBRyxFQUFFO0VBQ2hCLElBQU0sS0FBSyxHQUFHLE9BQU8sR0FBRyxXQUFXLEdBQUcsSUFBSTtFQUMxQyxJQUFNLEtBQUssR0FBRyxPQUFPLEdBQUcsWUFBWSxHQUFHLElBQUk7RUFDM0MsSUFBQSxvQkFBVSxFQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFlBQU07SUFDekQsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3BCLEtBQUssQ0FBQyxhQUFhLEdBQUcsVUFBVTtJQUNoQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDYixDQUFDLEVBQUUsRUFBRSxDQUFDO0FBQ1IsQ0FBQzs7Ozs7Ozs7O0FDM0VELElBQUEsTUFBQSxHQUFBLE9BQUE7QUFDQSxJQUFBLE9BQUEsR0FBQSxPQUFBO0FBQ0EsSUFBQSxTQUFBLEdBQUEsT0FBQTtBQUVPLElBQU0sWUFBWSxHQUFBLE9BQUEsQ0FBQSxZQUFBLEdBQUcsU0FBZixZQUFZLENBQUksRUFBZSxFQUFLO0VBQy9DLElBQVEsR0FBRyxHQUF5QixFQUFFLENBQTlCLEdBQUc7SUFBRSxLQUFLLEdBQWtCLEVBQUUsQ0FBekIsS0FBSztJQUFFLFdBQVcsR0FBSyxFQUFFLENBQWxCLFdBQVc7RUFDL0IsSUFBQSxVQUFBLEdBQW1FLElBQUEsaUJBQVMsRUFBQyxHQUFHLENBQUM7SUFBekUsQ0FBQyxHQUFBLFVBQUEsQ0FBRCxDQUFDO0lBQUUsU0FBUyxHQUFBLFVBQUEsQ0FBVCxTQUFTO0lBQUUsU0FBUyxHQUFBLFVBQUEsQ0FBVCxTQUFTO0lBQUUsYUFBYSxHQUFBLFVBQUEsQ0FBYixhQUFhO0lBQUUsY0FBYyxHQUFBLFVBQUEsQ0FBZCxjQUFjO0VBQzlELElBQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDO0VBQ2hCLElBQU0sQ0FBQyxHQUFJLElBQUEsZUFBUSxFQUFDLEtBQUssQ0FBQztFQUUxQixHQUFHLENBQUMsU0FBUyxHQUFNLENBQUMsQ0FBQyxFQUFFO0VBQ3ZCLEdBQUcsQ0FBQyxTQUFTLEdBQU0sUUFBUTtFQUMzQixHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVE7RUFFM0IsR0FBRyxDQUFDLElBQUksZ0JBQUEsTUFBQSxDQUFnQixXQUFXLENBQUU7RUFDckMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDO0VBRWhFLElBQU0sSUFBSSxHQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGFBQWEsR0FBRyxJQUFJLENBQUM7RUFDbEQsSUFBTSxJQUFJLEdBQUssRUFBRTtFQUNqQixJQUFNLElBQUksR0FBSyxFQUFFLEdBQUcsSUFBSSxHQUFHLENBQUM7RUFDNUIsSUFBTSxNQUFNLEdBQUcsU0FBUyxHQUFHLGNBQWMsR0FBRyxJQUFJO0VBQ2hELElBQU0sTUFBTSxHQUFHLElBQUksR0FBRyxFQUFFO0VBRXhCLElBQUEsb0JBQVUsRUFBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFNO0lBQzNELEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQztJQUN0QixLQUFLLENBQUMsS0FBSyxHQUFVLENBQUM7SUFDdEIsS0FBSyxDQUFDLE1BQU0sR0FBUyxLQUFLO0lBQzFCLEtBQUssQ0FBQyxRQUFRLEdBQU8sS0FBSztJQUMxQixLQUFLLENBQUMsUUFBUSxHQUFPLE1BQU07SUFDM0IsS0FBSyxDQUFDLGFBQWEsR0FBRyxPQUFPO0lBQzdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNiLENBQUMsQ0FBQztFQUVGLElBQUEsb0JBQVUsRUFBQyxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBTTtJQUN0RSxLQUFLLENBQUMsYUFBYSxHQUFHLGFBQWE7SUFDbkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxDQUFDO0VBRUYsSUFBQSxvQkFBVSxFQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBTTtJQUN0RSxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUk7SUFDekIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7O0FDekNNLElBQU0sUUFBUSxHQUFBLE9BQUEsQ0FBQSxRQUFBLEdBQUcsU0FBWCxRQUFRLENBQUksS0FBZ0I7RUFBQSxPQUN2QyxLQUFLLENBQUMsUUFBUSxHQUNWO0lBQ0UsRUFBRSxFQUFFLFNBQVM7SUFDYixFQUFFLEVBQUUsU0FBUztJQUNiLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsT0FBTyxFQUFFO0VBQ1gsQ0FBQyxHQUNEO0lBQ0UsRUFBRSxFQUFFLFNBQVM7SUFDYixFQUFFLEVBQUUsU0FBUztJQUNiLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFNBQVMsRUFBRSx3QkFBd0I7SUFDbkMsT0FBTyxFQUFFO0VBQ1gsQ0FBQztBQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGNvbnN0IGdldExheW91dCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICBjb25zdCB3ID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgY29uc3QgaCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHcgKiAwLjg0O1xuICBjb25zdCBjb250ZW50WCA9ICh3IC0gY29udGVudFdpZHRoKSAvIDI7XG4gIGNvbnN0IGxvZ29ZID0gaCAqIDAuMDg7XG5cbiAgY29uc3QgdG9wQm94V2lkdGggPSBjb250ZW50V2lkdGg7XG4gIGNvbnN0IHRvcEJveEhlaWdodCA9IGggKiAwLjQ4O1xuICBjb25zdCB0b3BCb3hYID0gY29udGVudFg7XG4gIGNvbnN0IHRvcEJveFkgPSBoICogMC4xODtcblxuICAvLyBTYWZlIGNvbnRlbnQgYXJlYSBpbnNpZGUgdGhlIGRlY29yYXRpdmUgZnJhbWVcbiAgY29uc3QgdG9wSW5uZXJXaWR0aCA9IHRvcEJveFdpZHRoICogMC40MjtcbiAgY29uc3QgdG9wSW5uZXJIZWlnaHQgPSB0b3BCb3hIZWlnaHQgKiAwLjYyO1xuICBjb25zdCB0b3BJbm5lclggPSB3IC8gMiAtIHRvcElubmVyV2lkdGggLyAyO1xuICBjb25zdCB0b3BJbm5lclkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNjtcblxuICBjb25zdCBnYXAgPSBoICogMC4wNDtcbiAgY29uc3QgYm90dG9tQm94WSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKyBnYXA7XG4gIGNvbnN0IGJvdHRvbUJveEhlaWdodCA9IGggKiAwLjIyO1xuXG4gIHJldHVybiB7XG4gICAgdyxcbiAgICBoLFxuICAgIGNvbnRlbnRXaWR0aCxcbiAgICBjb250ZW50WCxcbiAgICBsb2dvWSxcbiAgICB0b3BCb3hYLFxuICAgIHRvcEJveFksXG4gICAgdG9wQm94V2lkdGgsXG4gICAgdG9wQm94SGVpZ2h0LFxuICAgIHRvcElubmVyWCxcbiAgICB0b3BJbm5lclksXG4gICAgdG9wSW5uZXJXaWR0aCxcbiAgICB0b3BJbm5lckhlaWdodCxcbiAgICBib3R0b21Cb3hZLFxuICAgIGJvdHRvbUJveEhlaWdodCxcbiAgfTtcbn07XG4iLCJleHBvcnQgY29uc3QgTEVWRUxfQ09VTlQgPSAyMDtcblxuZXhwb3J0IGNvbnN0IExFVkVMX0RBVEE6IHsgdGl0bGU6IHN0cmluZzsgbGluZXM6IHN0cmluZ1tdIH1bXSA9IFtcbiAge1xuICAgIHRpdGxlOiBcIldoYXQncyB5b3VyIG5hbWU/XCIsXG4gICAgbGluZXM6IFtcIkVudGVyIHlvdXIgbmFtZSBiZWxvdy5cIiwgXCJMZWF2ZSBpdCBibGFuayBhbmQgd2UnbGwgY2FsbCB5b3UgQm94LlwiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIldoYXQgaXMgMTUgKyAxNT9cIixcbiAgICBsaW5lczogW1wiUGljayB0aGUgY29ycmVjdCBhbnN3ZXIgZnJvbSB0aGUgb3B0aW9ucyBhYm92ZS5cIl0sXG4gIH0sXG4gIHsgdGl0bGU6IFwiQ2xpY2sgdGhlIGRvdFwiLCBsaW5lczogW10gfSxcbiAge1xuICAgIHRpdGxlOiBcIkxldmVsIDQgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIg4oCUIHRvIGJlIHdyaXR0ZW4uXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGV2ZWwgNSBpbnN0cnVjdGlvbiBoZXJlLlwiLFxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciDigJQgdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA2IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIOKAlCB0byBiZSB3cml0dGVuLlwiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxldmVsIDcgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIg4oCUIHRvIGJlIHdyaXR0ZW4uXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGV2ZWwgOCBpbnN0cnVjdGlvbiBoZXJlLlwiLFxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciDigJQgdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA5IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIOKAlCB0byBiZSB3cml0dGVuLlwiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxldmVsIDEwIGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIOKAlCB0byBiZSB3cml0dGVuLlwiXSxcbiAgfSxcbiAgeyB0aXRsZTogXCJMZXZlbCAxMSDigJQgSW4gUHJvZ3Jlc3NcIiwgbGluZXM6IFtcIlRoaXMgbGV2ZWwgaXMgYmVpbmcgZGV2ZWxvcGVkLlwiXSB9LFxuICB7IHRpdGxlOiBcIkxldmVsIDEyIOKAlCBJbiBQcm9ncmVzc1wiLCBsaW5lczogW1wiVGhpcyBsZXZlbCBpcyBiZWluZyBkZXZlbG9wZWQuXCJdIH0sXG4gIHsgdGl0bGU6IFwiTGV2ZWwgMTMg4oCUIEluIFByb2dyZXNzXCIsIGxpbmVzOiBbXCJUaGlzIGxldmVsIGlzIGJlaW5nIGRldmVsb3BlZC5cIl0gfSxcbiAgeyB0aXRsZTogXCJMZXZlbCAxNCDigJQgSW4gUHJvZ3Jlc3NcIiwgbGluZXM6IFtcIlRoaXMgbGV2ZWwgaXMgYmVpbmcgZGV2ZWxvcGVkLlwiXSB9LFxuICB7IHRpdGxlOiBcIkxldmVsIDE1IOKAlCBJbiBQcm9ncmVzc1wiLCBsaW5lczogW1wiVGhpcyBsZXZlbCBpcyBiZWluZyBkZXZlbG9wZWQuXCJdIH0sXG4gIHsgdGl0bGU6IFwiTGV2ZWwgMTYg4oCUIEluIFByb2dyZXNzXCIsIGxpbmVzOiBbXCJUaGlzIGxldmVsIGlzIGJlaW5nIGRldmVsb3BlZC5cIl0gfSxcbiAgeyB0aXRsZTogXCJMZXZlbCAxNyDigJQgSW4gUHJvZ3Jlc3NcIiwgbGluZXM6IFtcIlRoaXMgbGV2ZWwgaXMgYmVpbmcgZGV2ZWxvcGVkLlwiXSB9LFxuICB7IHRpdGxlOiBcIkxldmVsIDE4IOKAlCBJbiBQcm9ncmVzc1wiLCBsaW5lczogW1wiVGhpcyBsZXZlbCBpcyBiZWluZyBkZXZlbG9wZWQuXCJdIH0sXG4gIHsgdGl0bGU6IFwiTGV2ZWwgMTkg4oCUIEluIFByb2dyZXNzXCIsIGxpbmVzOiBbXCJUaGlzIGxldmVsIGlzIGJlaW5nIGRldmVsb3BlZC5cIl0gfSxcbiAgeyB0aXRsZTogXCJMZXZlbCAyMCDigJQgSW4gUHJvZ3Jlc3NcIiwgbGluZXM6IFtcIlRoaXMgbGV2ZWwgaXMgYmVpbmcgZGV2ZWxvcGVkLlwiXSB9LFxuXTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgY29uc3QgZHJhd05hbWVFbnRyeSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCA9IHcgLyAyO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIC8vIFByb21wdFxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkIDMycHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJXaGF0J3MgeW91ciBuYW1lP1wiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMik7XG5cbiAgY3R4LmZvbnQgPSBgMThweCAke2JvZHlGb250fWA7XG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xuICBjdHguZmlsbFRleHQoXG4gICAgXCJMZWF2ZSBpdCBibGFuayBhbmQgd2UnbGwgY2FsbCB5b3UgQm94LlwiLFxuICAgIGN4LFxuICAgIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjMyLFxuICAgIHRvcEJveFdpZHRoICogMC42NSxcbiAgKTtcblxuICAvLyBJbnB1dCBib3hcbiAgY29uc3QgaW5wdXRXID0gdG9wQm94V2lkdGggKiAwLjU7XG4gIGNvbnN0IGlucHV0SCA9IDUyO1xuICBjb25zdCBpbnB1dFggPSBjeCAtIGlucHV0VyAvIDI7XG4gIGNvbnN0IGlucHV0WSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjQyO1xuXG4gIGN0eC5zdHJva2VTdHlsZSA9IHN0YXRlLm5hbWVGb2N1c2VkXG4gICAgPyBzdGF0ZS5kYXJrTW9kZVxuICAgICAgPyBcIiNmZmZmZmZcIlxuICAgICAgOiBcIiMxMTExMTFcIlxuICAgIDogdC5kaXZpZGVyO1xuICBjdHgubGluZVdpZHRoID0gc3RhdGUubmFtZUZvY3VzZWQgPyAzIDogMjtcbiAgY3R4LnN0cm9rZVJlY3QoaW5wdXRYLCBpbnB1dFksIGlucHV0VywgaW5wdXRIKTtcblxuICBjb25zdCBkaXNwbGF5VGV4dCA9XG4gICAgc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA+IDBcbiAgICAgID8gc3RhdGUubmFtZUlucHV0XG4gICAgICA6IHN0YXRlLm5hbWVGb2N1c2VkXG4gICAgICAgID8gXCJcIlxuICAgICAgICA6IFwiVHlwZSB5b3VyIG5hbWXigKZcIjtcbiAgY3R4LmZpbGxTdHlsZSA9IHN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPiAwID8gdC5mZyA6IHQuZmdEaW07XG4gIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYDIycHggJHtib2R5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoZGlzcGxheVRleHQsIGlucHV0WCArIDE0LCBpbnB1dFkgKyBpbnB1dEggLyAyLCBpbnB1dFcgLSAyOCk7XG5cbiAgLy8gQmxpbmtpbmcgY3Vyc29yXG4gIGlmIChzdGF0ZS5uYW1lRm9jdXNlZCkge1xuICAgIGNvbnN0IG1lYXN1cmVkID0gY3R4Lm1lYXN1cmVUZXh0KHN0YXRlLm5hbWVJbnB1dCkud2lkdGg7XG4gICAgY29uc3QgY3Vyc29yWCA9IGlucHV0WCArIDE0ICsgTWF0aC5taW4obWVhc3VyZWQsIGlucHV0VyAtIDI4KTtcbiAgICBjb25zdCBjdXJzb3JZID0gaW5wdXRZICsgaW5wdXRIICogMC4yO1xuICAgIGNvbnN0IGN1cnNvckggPSBpbnB1dEggKiAwLjY7XG4gICAgY29uc3QgYmxpbmsgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyA1MzApICUgMiA9PT0gMDtcbiAgICBpZiAoYmxpbmspIHtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuZmc7XG4gICAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5tb3ZlVG8oY3Vyc29yWCwgY3Vyc29yWSk7XG4gICAgICBjdHgubGluZVRvKGN1cnNvclgsIGN1cnNvclkgKyBjdXJzb3JIKTtcbiAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbnB1dCBib3ggaGl0IGFyZWFcbiAgZ2MuaGl0QXJlYXMucHVzaCh7XG4gICAgeDogaW5wdXRYLFxuICAgIHk6IGlucHV0WSxcbiAgICB3OiBpbnB1dFcsXG4gICAgaDogaW5wdXRILFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgc3RhdGUubmFtZUZvY3VzZWQgPSB0cnVlO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gQ29uZmlybSBidXR0b25cbiAgY29uc3QgY29uZmlybVcgPSAxODA7XG4gIGNvbnN0IGNvbmZpcm1IID0gNDg7XG4gIGRyYXdCdXR0b24oXG4gICAgZ2MsXG4gICAgXCJDT05GSVJNIOKGklwiLFxuICAgIGN4IC0gY29uZmlybVcgLyAyLFxuICAgIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjYyLFxuICAgIGNvbmZpcm1XLFxuICAgIGNvbmZpcm1ILFxuICAgICgpID0+IHtcbiAgICAgIHN0YXRlLnBsYXllck5hbWUgPSBzdGF0ZS5uYW1lSW5wdXQudHJpbSgpIHx8IFwiQm94XCI7XG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMjtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sXG4gICAgMjAsXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWwyID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcblxuICAvLyBRdWVzdGlvbiBoZWFkZXJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KFwiV2hhdCBpcyAxNSArIDE1P1wiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTQpO1xuXG4gIC8vIDLDlzIgYW5zd2VyIGdyaWRcbiAgY29uc3QgYW5zd2VycyA9IFtcbiAgICB7IGxhYmVsOiBcIjI1XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXG4gICAgeyBsYWJlbDogXCIzMFwiLCBjb3JyZWN0OiB0cnVlIH0sXG4gICAgeyBsYWJlbDogXCIyOFwiLCBjb3JyZWN0OiBmYWxzZSB9LFxuICAgIHsgbGFiZWw6IFwiMzVcIiwgY29ycmVjdDogZmFsc2UgfSxcbiAgXTtcblxuICBjb25zdCBjb2xzID0gMjtcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjIyO1xuICBjb25zdCBoR2FwID0gdG9wQm94V2lkdGggKiAwLjA2O1xuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcbiAgY29uc3QgZ3JpZFcgPSBjb2xzICogdGlsZVcgKyBoR2FwO1xuICBjb25zdCBncmlkWCA9IGN4IC0gZ3JpZFcgLyAyO1xuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYW5zd2Vycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xuICAgIGNvbnN0IHR4ID0gZ3JpZFggKyBjb2wgKiAodGlsZVcgKyBoR2FwKTtcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XG4gICAgY29uc3QgYW5zID0gYW5zd2Vyc1tpXTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIGN0eC5zdHJva2VSZWN0KHR4LCB0eSwgdGlsZVcsIHRpbGVIKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KGFucy5sYWJlbCwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggLyAyKTtcblxuICAgIGNvbnN0IGNhcHR1cmVkID0gYW5zLmNvcnJlY3Q7XG4gICAgZ2MuaGl0QXJlYXMucHVzaCh7XG4gICAgICB4OiB0eCxcbiAgICAgIHk6IHR5LFxuICAgICAgdzogdGlsZVcsXG4gICAgICBoOiB0aWxlSCxcbiAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICBpZiAoY2FwdHVyZWQpIHtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAzO1xuICAgICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdjLmxvc2VMaWZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbDMgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0LCBib3R0b21Cb3hZIH0gPVxuICAgIGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCA9IHcgLyAyO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIC8vIDLDlzIgZ3JpZCBvZiBkZWNveSBvcHRpb25zIOKAlCBhbGwgd3JvbmdcbiAgY29uc3QgY29scyA9IDI7XG4gIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggKiAwLjM7XG4gIGNvbnN0IHRpbGVIID0gdG9wQm94SGVpZ2h0ICogMC4yMjtcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcbiAgY29uc3QgdkdhcCA9IHRvcEJveEhlaWdodCAqIDAuMDY7XG4gIGNvbnN0IGdyaWRXID0gY29scyAqIHRpbGVXICsgaEdhcDtcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4yNjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xuICAgIGNvbnN0IHR4ID0gZ3JpZFggKyBjb2wgKiAodGlsZVcgKyBoR2FwKTtcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICAvLyBUaGUgd29yZCBcImRvdFwiXG4gICAgICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiZG90XCIsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XG4gICAgICAvLyBBIGxpdGVyYWwgZG90XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMiwgMTAsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChpID09PSAyKSB7XG4gICAgICAvLyBUaHJlZSBkb3RzXG4gICAgICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgICAgY3R4LmZpbGxUZXh0KFwi4oCiIOKAoiDigKJcIiwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVwYXJ0bWVudCBvZiBTYW5pdGF0aW9uXG4gICAgICBjdHguZm9udCA9IGBib2xkIDE1cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiRGVwYXJ0bWVudFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuMzQsIHRpbGVXIC0gMTYpO1xuICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICBcIm9mIFNhbml0YXRpb25cIixcbiAgICAgICAgdHggKyB0aWxlVyAvIDIsXG4gICAgICAgIHR5ICsgdGlsZUggKiAwLjU3LFxuICAgICAgICB0aWxlVyAtIDE2LFxuICAgICAgKTtcbiAgICAgIGN0eC5mb250ID0gYDEzcHggJHtib2R5Rm9udH1gO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XG4gICAgICBjdHguZmlsbFRleHQoXCIoRC5PLlMuKVwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuNzgpO1xuICAgIH1cblxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgICAgeDogdHgsXG4gICAgICB5OiB0eSxcbiAgICAgIHc6IHRpbGVXLFxuICAgICAgaDogdGlsZUgsXG4gICAgICBhY3Rpb246ICgpID0+IGdjLmxvc2VMaWZlKCksXG4gICAgfSk7XG4gIH1cblxuICAvLyBIaWRkZW4gaGl0IGFyZWE6IHRoZSB0aXR0bGUgKGRvdCkgb24gdGhlICdpJyBpbiBcIkNsaWNrXCIgaW4gdGhlIGJvdHRvbSBwYW5lbC5cbiAgLy8gQm90dG9tIHBhbmVsIHRpdGxlIFwiQ2xpY2sgdGhlIGRvdC5cIiBpcyBkcmF3biBib2xkIDMwcHgsIGNlbnRlcmVkIGF0ICh3LzIsIGJvdHRvbUJveFkrMTgpLFxuICAvLyB0ZXh0QmFzZWxpbmU9XCJ0b3BcIi4gV2UgbWVhc3VyZSB0byBmaW5kIHRoZSAnaScgeC1wb3NpdGlvbiwgdGhlbiBlc3RpbWF0ZSB0aGUgdGl0dGxlJ3MgeS5cbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY29uc3QgZnVsbFN0ciA9IFwiQ2xpY2sgdGhlIGRvdFwiO1xuICBjb25zdCBmdWxsVyA9IGN0eC5tZWFzdXJlVGV4dChmdWxsU3RyKS53aWR0aDtcbiAgY29uc3QgdGV4dExlZnQgPSBjeCAtIGZ1bGxXIC8gMjtcbiAgY29uc3QgcHJlZml4VyA9IGN0eC5tZWFzdXJlVGV4dChcIkNsXCIpLndpZHRoO1xuICBjb25zdCBpQ2hhclcgPSBjdHgubWVhc3VyZVRleHQoXCJpXCIpLndpZHRoO1xuICBjb25zdCBpRG90Q1ggPSB0ZXh0TGVmdCArIHByZWZpeFcgKyBpQ2hhclcgLyAyO1xuICBjb25zdCBpRG90Q1kgPSBib3R0b21Cb3hZICsgMTggKyA1OyAvLyB+NXB4IGJlbG93IHRvcCBiYXNlbGluZSDiiYggdGl0dGxlIHBvc2l0aW9uXG4gIGNvbnN0IGhpdFIgPSAxMDtcblxuICBnYy5oaXRBcmVhcy5wdXNoKHtcbiAgICB4OiBpRG90Q1ggLSBoaXRSLFxuICAgIHk6IGlEb3RDWSAtIGhpdFIsXG4gICAgdzogaGl0UiAqIDIsXG4gICAgaDogaGl0UiAqIDIsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSA0O1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSxcbiAgfSk7XG59O1xuIiwiY29uc29sZS5sb2coXCJCRU5DSE1BUksgMiBNQUlOIExPQURFRFwiKTtcblxuaW1wb3J0IHsgR2FtZUNvbnRleHQsIEdhbWVTdGF0ZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHsgZHJhd0JhY2tncm91bmQsIGRyYXdMb2dvLCBkcmF3R2FtZXBsYXlGcmFtZSwgZHJhd0JvdHRvbVBhbmVsIH0gZnJvbSAnLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBkcmF3TWFpbk1lbnUgfSAgICAgICBmcm9tICcuL3NjcmVlbnMvTWFpbk1lbnUnO1xuaW1wb3J0IHsgZHJhd0xldmVsU2VsZWN0IH0gICAgZnJvbSAnLi9zY3JlZW5zL0xldmVsU2VsZWN0JztcbmltcG9ydCB7IGRyYXdMZXZlbCB9ICAgICAgICAgIGZyb20gJy4vc2NyZWVucy9MZXZlbCc7XG5pbXBvcnQgeyBkcmF3UGF1c2VPdmVybGF5IH0gICBmcm9tICcuL292ZXJsYXlzL1BhdXNlT3ZlcmxheSc7XG5pbXBvcnQgeyBkcmF3Q29udHJvbHNPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5cy9Db250cm9sc092ZXJsYXknO1xuaW1wb3J0IHsgZHJhd0dhbWVPdmVyT3ZlcmxheSB9IGZyb20gJy4vb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5Jztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUNhbnZhcyAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpICBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XG4gIGNvbnN0IGRlYnVnQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Zy1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuICBjb25zdCB0ZXh0Q2FudmFzICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1jYW52YXNcIikgIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcblxuICBpZiAoIWdhbWVDYW52YXMgfHwgIWRlYnVnQ2FudmFzIHx8ICF0ZXh0Q2FudmFzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk1pc3Npbmcgb25lIG9yIG1vcmUgY2FudmFzIGVsZW1lbnRzLlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjdHggPSBnYW1lQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGdldCAyRCBjb250ZXh0LlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyDilIDilIAgaW5pdGlhbCBzdGF0ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICBjb25zdCBzdGF0ZTogR2FtZVN0YXRlID0ge1xuICAgIGN1cnJlbnRTY3JlZW46IFwibWFpbm1lbnVcIixcbiAgICBjdXJyZW50TGV2ZWw6ICAxLFxuICAgIGxpdmVzOiAgICAgICAgIDMsXG4gICAgcGF1c2VkOiAgICAgICAgZmFsc2UsXG4gICAgY29udHJvbHNPcGVuOiAgZmFsc2UsXG4gICAgZGFya01vZGU6ICAgICAgdHJ1ZSxcbiAgICBzdG9yeVRpdGxlOiAgICBcIk91dHNpZGUtdGhlLUJveCBUaGlua2luZyBDZXJ0aWZpY2F0aW9uXCIsXG4gICAgc3RvcnlMaW5lczogW1xuICAgICAgXCJDb21wbGV0ZSB0aGlzIGFzc2Vzc21lbnQgdG8gZWFybiB5b3VyIE90QiBUaGlua2luZyBDZXJ0aWZpY2F0ZS5cIixcbiAgICAgIFwiRGVtb25zdHJhdGUgeW91ciBhYmlsaXR5IHRvIGFwcHJvYWNoIHByb2JsZW1zIGZyb20gdW5jb252ZW50aW9uYWwgYW5nbGVzLlwiLFxuICAgICAgXCJDYW5kaWRhdGVzIHdobyBwYXNzIG1heSBsaXN0IHRoaXMgY3JlZGVudGlhbCBvbiB0aGVpciBMaW5rZWRJbiBvciByw6lzdW3DqS5cIixcbiAgICBdLFxuICAgIHBsYXllck5hbWU6ICBcIkJveFwiLFxuICAgIG5hbWVJbnB1dDogICBcIlwiLFxuICAgIG5hbWVGb2N1c2VkOiBmYWxzZSxcbiAgICBwbGF5TW9kZTogICAgXCJwbGF5XCIsXG4gICAgZ2FtZU92ZXI6ICAgIGZhbHNlLFxuICB9O1xuXG4gIC8vIOKUgOKUgCBnYW1lIGNvbnRleHQg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG4gIC8vIGdjIGlzIHBhc3NlZCB0byBldmVyeSBkcmF3IGZ1bmN0aW9uIHNvIHRoZXkgc2hhcmUgY3R4LCBzdGF0ZSwgYW5kIGhlbHBlcnNcbiAgLy8gd2l0aG91dCBnbG9iYWxzIG9yIGNpcmN1bGFyIGltcG9ydHMuXG5cbiAgY29uc3QgZ2M6IEdhbWVDb250ZXh0ID0ge1xuICAgIGN0eCxcbiAgICBzdGF0ZSxcbiAgICBoaXRBcmVhczogICAgICAgICAgICBbXSxcbiAgICByZW5kZXI6ICAgICAgICAgICAgICAoKSA9PiB7fSwgICAvLyBhc3NpZ25lZCBiZWxvd1xuICAgIGxvc2VMaWZlOiAgICAgICAgICAgICgpID0+IHt9LCAgIC8vIGFzc2lnbmVkIGJlbG93XG4gICAgcmVzZXRQbGF5ZXJOYW1lOiAgICAgKCkgPT4ge30sICAgLy8gYXNzaWduZWQgYmVsb3dcbiAgICBkaXNwbGF5Rm9udDogICAgICAgICBgXCJUcmVidWNoZXQgTVNcIiwgXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWZgLFxuICAgIGJvZHlGb250OiAgICAgICAgICAgIGBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWZgLFxuICAgIGxvZ286ICAgICAgICAgICAgICAgIG5ldyBJbWFnZSgpLFxuICAgIGdhbWVwbGF5RnJhbWU6ICAgICAgIG5ldyBJbWFnZSgpLFxuICAgIGxvZ29Mb2FkZWQ6ICAgICAgICAgIGZhbHNlLFxuICAgIGdhbWVwbGF5RnJhbWVMb2FkZWQ6IGZhbHNlLFxuICB9O1xuXG4gIGdjLnJlc2V0UGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICBnYy5zdGF0ZS5wbGF5ZXJOYW1lICA9IFwiQm94XCI7XG4gICAgZ2Muc3RhdGUubmFtZUlucHV0ICAgPSBcIlwiO1xuICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XG4gIH07XG5cbiAgZ2MubG9zZUxpZmUgPSAoKSA9PiB7XG4gICAgZ2Muc3RhdGUubGl2ZXMtLTtcbiAgICBpZiAoZ2Muc3RhdGUubGl2ZXMgPD0gMCkge1xuICAgICAgZ2Muc3RhdGUubGl2ZXMgICAgPSAwO1xuICAgICAgZ2Muc3RhdGUuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcblxuICBnYy5yZW5kZXIgPSAoKSA9PiB7XG4gICAgZ2MuaGl0QXJlYXMgPSBbXTtcbiAgICBkcmF3QmFja2dyb3VuZChnYyk7XG4gICAgZHJhd0xvZ28oZ2MpO1xuICAgIGRyYXdHYW1lcGxheUZyYW1lKGdjKTtcblxuICAgIHN3aXRjaCAoZ2Muc3RhdGUuY3VycmVudFNjcmVlbikge1xuICAgICAgY2FzZSBcIm1haW5tZW51XCI6ICAgIGRyYXdNYWluTWVudShnYyk7ICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxldmVsc2VsZWN0XCI6IGRyYXdMZXZlbFNlbGVjdChnYyk7IGJyZWFrO1xuICAgICAgY2FzZSBcImxldmVsXCI6ICAgICAgIGRyYXdMZXZlbChnYyk7ICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRyYXdCb3R0b21QYW5lbChnYyk7XG5cbiAgICBpZiAoZ2Muc3RhdGUucGF1c2VkKSAgICAgICBkcmF3UGF1c2VPdmVybGF5KGdjKTtcbiAgICBpZiAoZ2Muc3RhdGUuY29udHJvbHNPcGVuKSBkcmF3Q29udHJvbHNPdmVybGF5KGdjKTtcbiAgICBpZiAoZ2Muc3RhdGUuZ2FtZU92ZXIpICAgICBkcmF3R2FtZU92ZXJPdmVybGF5KGdjKTtcbiAgfTtcblxuICAvLyDilIDilIAgY2FudmFzIHJlc2l6ZSDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICBjb25zdCByZXNpemVDYW52YXNlcyA9ICgpID0+IHtcbiAgICBjb25zdCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBnYW1lQ2FudmFzLndpZHRoICA9IGRlYnVnQ2FudmFzLndpZHRoICA9IHc7XG4gICAgZ2FtZUNhbnZhcy5oZWlnaHQgPSBkZWJ1Z0NhbnZhcy5oZWlnaHQgPSBoO1xuICB9O1xuXG4gIC8vIOKUgOKUgCBpbnB1dCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICBjb25zdCB0b0NhbnZhcyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCAgID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzY2FsZVggPSBnYW1lQ2FudmFzLndpZHRoICAvIHJlY3Qud2lkdGg7XG4gICAgY29uc3Qgc2NhbGVZID0gZ2FtZUNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcbiAgICByZXR1cm4ge1xuICAgICAgeDogKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVgsXG4gICAgICB5OiAoZS5jbGllbnRZIC0gcmVjdC50b3ApICAqIHNjYWxlWSxcbiAgICB9O1xuICB9O1xuXG4gIGdhbWVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0b0NhbnZhcyhlKTtcbiAgICBmb3IgKGNvbnN0IGFyZWEgb2YgZ2MuaGl0QXJlYXMpIHtcbiAgICAgIGlmICh4ID49IGFyZWEueCAmJiB4IDw9IGFyZWEueCArIGFyZWEudyAmJiB5ID49IGFyZWEueSAmJiB5IDw9IGFyZWEueSArIGFyZWEuaCkge1xuICAgICAgICBhcmVhLmFjdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGdhbWVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdG9DYW52YXMoZSk7XG4gICAgY29uc3Qgb3ZlciA9IGdjLmhpdEFyZWFzLnNvbWUoXG4gICAgICAoYSkgPT4geCA+PSBhLnggJiYgeCA8PSBhLnggKyBhLncgJiYgeSA+PSBhLnkgJiYgeSA8PSBhLnkgKyBhLmgsXG4gICAgKTtcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmN1cnNvciA9IG92ZXIgPyBcInBvaW50ZXJcIiA6IFwiZGVmYXVsdFwiO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAvLyBOYW1lIGlucHV0IHR5cGluZyDigJQgaW50ZXJjZXB0IGFsbCBrZXlzIHdoZW4gZm9jdXNlZFxuICAgIGlmIChnYy5zdGF0ZS5uYW1lRm9jdXNlZCAmJiAhZ2Muc3RhdGUucGF1c2VkICYmICFnYy5zdGF0ZS5jb250cm9sc09wZW4pIHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZ2Muc3RhdGUucGxheWVyTmFtZSAgID0gZ2Muc3RhdGUubmFtZUlucHV0LnRyaW0oKSB8fCBcIkJveFwiO1xuICAgICAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCAgPSBmYWxzZTtcbiAgICAgICAgZ2Muc3RhdGUuY3VycmVudExldmVsID0gMjtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICBnYy5zdGF0ZS5uYW1lSW5wdXQgPSBnYy5zdGF0ZS5uYW1lSW5wdXQuc2xpY2UoMCwgLTEpO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5Lmxlbmd0aCA9PT0gMSAmJiBnYy5zdGF0ZS5uYW1lSW5wdXQubGVuZ3RoIDwgMjQpIHtcbiAgICAgICAgZ2Muc3RhdGUubmFtZUlucHV0ICs9IGUua2V5O1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgaWYgKGdjLnN0YXRlLmNvbnRyb2xzT3BlbikgeyBnYy5zdGF0ZS5jb250cm9sc09wZW4gPSBmYWxzZTsgZ2MucmVuZGVyKCk7IH1cbiAgICAgIGVsc2UgaWYgKGdjLnN0YXRlLnBhdXNlZCkgIHsgZ2Muc3RhdGUucGF1c2VkID0gZmFsc2U7ICAgICAgIGdjLnJlbmRlcigpOyB9XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgcmVzaXplQ2FudmFzZXMoKTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfSk7XG5cbiAgLy8g4pSA4pSAIGN1cnNvciBibGluayBsb29wIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoZ2Muc3RhdGUubmFtZUZvY3VzZWQpIGdjLnJlbmRlcigpO1xuICB9LCA1MzApO1xuXG4gIC8vIOKUgOKUgCBpbWFnZSBsb2FkaW5nIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gIGdjLmxvZ28ub25sb2FkICA9ICgpID0+IHsgZ2MubG9nb0xvYWRlZCA9IHRydWU7ICBnYy5yZW5kZXIoKTsgfTtcbiAgZ2MubG9nby5vbmVycm9yID0gKCkgPT4geyBnYy5sb2dvTG9hZGVkID0gZmFsc2U7IGdjLnJlbmRlcigpOyB9O1xuXG4gIGdjLmdhbWVwbGF5RnJhbWUub25sb2FkICA9ICgpID0+IHsgZ2MuZ2FtZXBsYXlGcmFtZUxvYWRlZCA9IHRydWU7ICBnYy5yZW5kZXIoKTsgfTtcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5vbmVycm9yID0gKCkgPT4geyBnYy5nYW1lcGxheUZyYW1lTG9hZGVkID0gZmFsc2U7IGdjLnJlbmRlcigpOyB9O1xuXG4gIGdjLmxvZ28uc3JjICAgICAgICAgID0gXCIvYmVuY2htYXJrMi9hc3NldHMvbG9nby5wbmdcIjtcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5zcmMgPSBcIi9iZW5jaG1hcmsyL2Fzc2V0cy9nYW1lcGxheS1mcmFtZS5wbmdcIjtcblxuICAvLyDilIDilIAgc3RhcnR1cCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICByZXNpemVDYW52YXNlcygpO1xuICBnYy5yZW5kZXIoKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdDb250cm9sc092ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcblxuICBjb25zdCBwYWQgPSB0b3BCb3hXaWR0aCAqIDAuMDU7XG4gIGNvbnN0IG94ID0gdG9wQm94WCArIHBhZDtcbiAgY29uc3Qgb3kgPSB0b3BCb3hZICsgcGFkO1xuICBjb25zdCBvdyA9IHRvcEJveFdpZHRoIC0gcGFkICogMjtcbiAgY29uc3Qgb2ggPSB0b3BCb3hIZWlnaHQgLSBwYWQgKiAyO1xuICBjb25zdCBjeCA9IG94ICsgb3cgLyAyO1xuXG4gIGN0eC5maWxsU3R5bGUgPSB0Lm92ZXJsYXlCZztcbiAgY3R4LmZpbGxSZWN0KG94LCBveSwgb3csIG9oKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHguc3Ryb2tlUmVjdChveCwgb3ksIG93LCBvaCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KFwiQkFTSUMgQ09OVFJPTFNcIiwgY3gsIG95ICsgb2ggKiAwLjExKTtcblxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XG4gIGN0eC5saW5lV2lkdGggPSAxO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8ob3ggKyBvdyAqIDAuMDYsIG95ICsgb2ggKiAwLjIpO1xuICBjdHgubGluZVRvKG94ICsgb3cgKiAwLjk0LCBveSArIG9oICogMC4yKTtcbiAgY3R4LnN0cm9rZSgpO1xuXG4gIGNvbnN0IGNvbnRyb2xzID0gW1xuICAgIHsga2V5OiBcIlcgLyBBIC8gUyAvIERcIiwgZGVzYzogXCJNb3ZlIC8gTmF2aWdhdGVcIiB9LFxuICAgIHsga2V5OiBcIkNMSUNLXCIsIGRlc2M6IFwiSW50ZXJhY3QgLyBTZWxlY3QgYW5zd2VyXCIgfSxcbiAgICB7IGtleTogXCJFU0NcIiwgZGVzYzogXCJDbG9zZSB0aGlzIHBhbmVsXCIgfSxcbiAgXTtcblxuICBjb25zdCBsaXN0WSA9IG95ICsgb2ggKiAwLjI5O1xuICBjb25zdCByb3dIID0gb2ggKiAwLjE1O1xuICBjb25zdCBrZXlCb3hXID0gb3cgKiAwLjM7XG4gIGNvbnN0IGtleUJveEggPSByb3dIICogMC43O1xuICBjb25zdCBrZXlCb3hYID0gb3ggKyBvdyAqIDAuMDg7XG4gIGNvbnN0IGRlc2NYID0gb3ggKyBvdyAqIDAuNTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgcm93WSA9IGxpc3RZICsgaSAqIHJvd0g7XG4gICAgY29uc3QgYm94Q2VudGVyWSA9IHJvd1kgKyBrZXlCb3hIIC8gMjtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBzdGF0ZS5kYXJrTW9kZSA/IFwiIzJhMmEyYVwiIDogXCIjZGRkZGRkXCI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5kaXZpZGVyO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5maWxsUmVjdChrZXlCb3hYLCByb3dZLCBrZXlCb3hXLCBrZXlCb3hIKTtcbiAgICBjdHguc3Ryb2tlUmVjdChrZXlCb3hYLCByb3dZLCBrZXlCb3hXLCBrZXlCb3hIKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgY29udHJvbHNbaV0ua2V5LFxuICAgICAga2V5Qm94WCArIGtleUJveFcgLyAyLFxuICAgICAgYm94Q2VudGVyWSxcbiAgICAgIGtleUJveFcgLSA4LFxuICAgICk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZ01pZDtcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY3R4LmZvbnQgPSBgMTdweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KGNvbnRyb2xzW2ldLmRlc2MsIGRlc2NYLCBib3hDZW50ZXJZKTtcbiAgfVxuXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYDEzcHggJHtib2R5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJDb250cm9scyBtYXkgdmFyeSBiZXR3ZWVuIGxldmVscy5cIiwgY3gsIG95ICsgb2ggKiAwLjg0KTtcblxuICAvLyBDbGVhciB1bmRlcmx5aW5nIGhpdCBhcmVhc1xuICBnYy5oaXRBcmVhcyA9IFtdO1xuXG4gIGNvbnN0IGNsb3NlVyA9IDE0MDtcbiAgY29uc3QgY2xvc2VIID0gNDA7XG4gIGRyYXdCdXR0b24oXG4gICAgZ2MsXG4gICAgXCJDTE9TRSAg4pyVXCIsXG4gICAgY3ggLSBjbG9zZVcgLyAyLFxuICAgIG95ICsgb2ggKiAwLjksXG4gICAgY2xvc2VXLFxuICAgIGNsb3NlSCxcbiAgICAoKSA9PiB7XG4gICAgICBzdGF0ZS5jb250cm9sc09wZW4gPSBmYWxzZTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sXG4gICAgMTcsXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdHYW1lT3Zlck92ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCBoIH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgY3kgPSBoIC8gMjtcblxuICAvLyBGdWxsLWNhbnZhcyBkaW1cbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjgyKVwiO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XG5cbiAgLy8gUGFuZWxcbiAgY29uc3QgcGFuZWxXID0gTWF0aC5taW4odyAqIDAuNTUsIDUyMCk7XG4gIGNvbnN0IHBhbmVsSCA9IGggKiAwLjUyO1xuICBjb25zdCBwYW5lbFggPSBjeCAtIHBhbmVsVyAvIDI7XG4gIGNvbnN0IHBhbmVsWSA9IGN5IC0gcGFuZWxIIC8gMjtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjMGEwYTBhXCI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiI2NjMjIyMlwiO1xuICBjdHgubGluZVdpZHRoID0gMztcbiAgY3R4LmZpbGxSZWN0KHBhbmVsWCwgcGFuZWxZLCBwYW5lbFcsIHBhbmVsSCk7XG4gIGN0eC5zdHJva2VSZWN0KHBhbmVsWCwgcGFuZWxZLCBwYW5lbFcsIHBhbmVsSCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwiI2NjMjIyMlwiO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYGJvbGQgNTJweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCBjeCwgcGFuZWxZICsgcGFuZWxIICogMC4yMik7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwiIzg4ODg4OFwiO1xuICBjdHguZm9udCA9IGAyMHB4ICR7Ym9keUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KFxuICAgIGBCZXR0ZXIgbHVjayBuZXh0IHRpbWUsICR7c3RhdGUucGxheWVyTmFtZX0uYCxcbiAgICBjeCxcbiAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjQyLFxuICAgIHBhbmVsVyAqIDAuODIsXG4gICk7XG5cbiAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMzMzMzMzXCI7XG4gIGN0eC5saW5lV2lkdGggPSAxO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8ocGFuZWxYICsgcGFuZWxXICogMC4xLCBwYW5lbFkgKyBwYW5lbEggKiAwLjU0KTtcbiAgY3R4LmxpbmVUbyhwYW5lbFggKyBwYW5lbFcgKiAwLjksIHBhbmVsWSArIHBhbmVsSCAqIDAuNTQpO1xuICBjdHguc3Ryb2tlKCk7XG5cbiAgZ2MuaGl0QXJlYXMgPSBbXTtcblxuICBjb25zdCBidG5XID0gMjAwO1xuICBjb25zdCBidG5IID0gNDg7XG5cbiAgaWYgKHN0YXRlLnBsYXlNb2RlID09PSBcInBsYXlcIikge1xuICAgIGRyYXdCdXR0b24oXG4gICAgICBnYyxcbiAgICAgIFwiVFJZIEFHQUlOXCIsXG4gICAgICBjeCAtIGJ0blcgLyAyLFxuICAgICAgcGFuZWxZICsgcGFuZWxIICogMC42MSxcbiAgICAgIGJ0blcsXG4gICAgICBidG5ILFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzdGF0ZS5saXZlcyA9IDM7XG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0sXG4gICAgICAyMCxcbiAgICApO1xuXG4gICAgZHJhd0J1dHRvbihcbiAgICAgIGdjLFxuICAgICAgXCJNQUlOIE1FTlVcIixcbiAgICAgIGN4IC0gYnRuVyAvIDIsXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjc4LFxuICAgICAgYnRuVyxcbiAgICAgIGJ0bkgsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfSxcbiAgICAgIDIwLFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgZHJhd0J1dHRvbihcbiAgICAgIGdjLFxuICAgICAgXCJNQUlOIE1FTlVcIixcbiAgICAgIGN4IC0gYnRuVyAvIDIsXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjY4LFxuICAgICAgYnRuVyxcbiAgICAgIGJ0bkgsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfSxcbiAgICAgIDIwLFxuICAgICk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdQYXVzZU92ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBwYWQgPSB0b3BCb3hXaWR0aCAqIDAuMDU7XG4gIGNvbnN0IG94ID0gdG9wQm94WCArIHBhZDtcbiAgY29uc3Qgb3kgPSB0b3BCb3hZICsgcGFkO1xuICBjb25zdCBvdyA9IHRvcEJveFdpZHRoIC0gcGFkICogMjtcbiAgY29uc3Qgb2ggPSB0b3BCb3hIZWlnaHQgLSBwYWQgKiAyO1xuICBjb25zdCBjeCA9IG94ICsgb3cgLyAyO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSB0Lm92ZXJsYXlCZztcbiAgY3R4LmZpbGxSZWN0KG94LCBveSwgb3csIG9oKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHguc3Ryb2tlUmVjdChveCwgb3ksIG93LCBvaCk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAzOHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KFwiUEFVU0VEXCIsIGN4LCBveSArIG9oICogMC4xOCk7XG5cbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5kaXZpZGVyO1xuICBjdHgubGluZVdpZHRoID0gMTtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKG94ICsgb3cgKiAwLjEsIG95ICsgb2ggKiAwLjMpO1xuICBjdHgubGluZVRvKG94ICsgb3cgKiAwLjksIG95ICsgb2ggKiAwLjMpO1xuICBjdHguc3Ryb2tlKCk7XG5cbiAgLy8gQ2xlYXIgYWxsIHVuZGVybHlpbmcgaGl0IGFyZWFzIHNvIHRoZSBnYW1lIGJlaGluZCBpcyBibG9ja2VkXG4gIGdjLmhpdEFyZWFzID0gW107XG5cbiAgY29uc3QgYnRuVyA9IDIyMDtcbiAgY29uc3QgYnRuSCA9IDQ4O1xuICBjb25zdCBidG5YID0gY3ggLSBidG5XIC8gMjtcblxuICBkcmF3QnV0dG9uKGdjLCBcIlJFU1VNRVwiLCBidG5YLCBveSArIG9oICogMC4zNiwgYnRuVywgYnRuSCwgKCkgPT4ge1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIGdjLnJlbmRlcigpO1xuICB9KTtcblxuICBkcmF3QnV0dG9uKGdjLCBcIlFVSVQgVE8gTUVOVVwiLCBidG5YLCBveSArIG9oICogMC41MywgYnRuVywgYnRuSCwgKCkgPT4ge1xuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgIHN0YXRlLmxpdmVzID0gMztcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xuICAgIGdjLnJlbmRlcigpO1xuICB9KTtcblxuICBjb25zdCB0b2dnbGVMYWJlbCA9IHN0YXRlLmRhcmtNb2RlID8gXCLimIAgIExJR0hUIE1PREVcIiA6IFwi8J+MmSAgREFSSyBNT0RFXCI7XG4gIGRyYXdCdXR0b24oXG4gICAgZ2MsXG4gICAgdG9nZ2xlTGFiZWwsXG4gICAgYnRuWCxcbiAgICBveSArIG9oICogMC43LFxuICAgIGJ0blcsXG4gICAgYnRuSCxcbiAgICAoKSA9PiB7XG4gICAgICBzdGF0ZS5kYXJrTW9kZSA9ICFzdGF0ZS5kYXJrTW9kZTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sXG4gICAgMTgsXG4gICk7XG59O1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBMRVZFTF9EQVRBIH0gZnJvbSBcIi4vbGV2ZWxEYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3QmFja2dyb3VuZCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlIH0gPSBnYztcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gdC5iZztcbiAgY3R4LmZpbGxTdHlsZSA9IHQuYmc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0xvZ28gPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgbG9nbywgbG9nb0xvYWRlZCwgZGlzcGxheUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIGxvZ29ZIH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgaWYgKGxvZ29Mb2FkZWQgJiYgbG9nby5uYXR1cmFsV2lkdGggPiAwKSB7XG4gICAgY29uc3QgbG9nb1cgPSB3ICogMC4xNTtcbiAgICBjb25zdCBsb2dvSCA9IGxvZ29XICogKGxvZ28ubmF0dXJhbEhlaWdodCAvIGxvZ28ubmF0dXJhbFdpZHRoKTtcbiAgICBjdHguZHJhd0ltYWdlKGxvZ28sIHcgLyAyIC0gbG9nb1cgLyAyLCBsb2dvWSAtIGxvZ29IIC8gMiwgbG9nb1csIGxvZ29IKTtcbiAgfSBlbHNlIHtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2V0VGhlbWUoc3RhdGUpLmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5mb250ID0gYGJvbGQgNTRweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFwiT3V0c2lkZS10aGUtQm94XCIsIHcgLyAyLCBsb2dvWSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3R2FtZXBsYXlGcmFtZSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBnYW1lcGxheUZyYW1lLCBnYW1lcGxheUZyYW1lTG9hZGVkIH0gPSBnYztcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgaWYgKGdhbWVwbGF5RnJhbWVMb2FkZWQgJiYgZ2FtZXBsYXlGcmFtZS5uYXR1cmFsV2lkdGggPiAwKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGdhbWVwbGF5RnJhbWUsXG4gICAgICA0NDAsXG4gICAgICAxODAsXG4gICAgICA2ODgsXG4gICAgICA1NzIsXG4gICAgICB0b3BCb3hYLFxuICAgICAgdG9wQm94WSxcbiAgICAgIHRvcEJveFdpZHRoLFxuICAgICAgdG9wQm94SGVpZ2h0LFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gZ2V0VGhlbWUoc3RhdGUpLnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguc3Ryb2tlUmVjdCh0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0KTtcbiAgfVxufTtcblxuLyoqIERyYXcgYSBsYWJlbGxlZCBidXR0b24gYW5kIHJlZ2lzdGVyIGl0IGFzIGEgaGl0IGFyZWEuICovXG5leHBvcnQgY29uc3QgZHJhd0J1dHRvbiA9IChcbiAgZ2M6IEdhbWVDb250ZXh0LFxuICBsYWJlbDogc3RyaW5nLFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgdzogbnVtYmVyLFxuICBoOiBudW1iZXIsXG4gIGFjdGlvbjogKCkgPT4gdm9pZCxcbiAgZm9udFNpemUgPSAyMixcbikgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gIGN0eC5saW5lV2lkdGggPSAzO1xuICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAke2ZvbnRTaXplfXB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KGxhYmVsLCB4ICsgdyAvIDIsIHkgKyBoIC8gMiwgdyAtIDE2KTtcbiAgZ2MuaGl0QXJlYXMucHVzaCh7IHgsIHksIHcsIGgsIGFjdGlvbiB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3Qm90dG9tUGFuZWwgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCBjb250ZW50WCwgY29udGVudFdpZHRoLCBib3R0b21Cb3hZLCBib3R0b21Cb3hIZWlnaHQgfSA9XG4gICAgZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gIGN0eC5saW5lV2lkdGggPSA0O1xuICBjdHguc3Ryb2tlUmVjdChjb250ZW50WCwgYm90dG9tQm94WSwgY29udGVudFdpZHRoLCBib3R0b21Cb3hIZWlnaHQpO1xuXG4gIGNvbnN0IGNlbnRlclggPSB3IC8gMjtcbiAgY29uc3QgdGV4dFdpZHRoID0gY29udGVudFdpZHRoICogMC43NDtcblxuICBjb25zdCBsZXZlbERhdGEgPVxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIlxuICAgICAgPyBMRVZFTF9EQVRBW3N0YXRlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICA6IHsgdGl0bGU6IHN0YXRlLnN0b3J5VGl0bGUsIGxpbmVzOiBzdGF0ZS5zdG9yeUxpbmVzIH07XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcblxuICBjdHguZm9udCA9IGBib2xkIDMwcHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQobGV2ZWxEYXRhLnRpdGxlLCBjZW50ZXJYLCBib3R0b21Cb3hZICsgMTgsIHRleHRXaWR0aCk7XG5cbiAgY3R4LmZvbnQgPSBgMjBweCAke2JvZHlGb250fWA7XG4gIGNvbnN0IGxpbmVHYXAgPSAzMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbERhdGEubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBsZXZlbERhdGEubGluZXNbaV0sXG4gICAgICBjZW50ZXJYLFxuICAgICAgYm90dG9tQm94WSArIDY4ICsgaSAqIGxpbmVHYXAsXG4gICAgICB0ZXh0V2lkdGgsXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbEhVRCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IHBhZFggPSB0b3BCb3hXaWR0aCAqIDAuMDU7XG4gIGNvbnN0IHBhZFkgPSB0b3BCb3hIZWlnaHQgKiAwLjA4O1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIC8vIFEuWCDigJQgdG9wIGxlZnRcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYGJvbGQgMjZweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChgUS4ke3N0YXRlLmN1cnJlbnRMZXZlbH1gLCB0b3BCb3hYICsgcGFkWCwgdG9wQm94WSArIHBhZFkpO1xuXG4gIC8vIFBhdXNlIGJ1dHRvbiDigJQgdG9wIHJpZ2h0XG4gIGNvbnN0IHBhdXNlVyA9IDQ4O1xuICBjb25zdCBwYXVzZUggPSAzNDtcbiAgY29uc3QgcGF1c2VYID0gdG9wQm94WCArIHRvcEJveFdpZHRoIC0gcGFkWCAtIHBhdXNlVztcbiAgY29uc3QgcGF1c2VZID0gdG9wQm94WSArIHBhZFkgLSBwYXVzZUggLyAyO1xuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5zdHJva2VSZWN0KHBhdXNlWCwgcGF1c2VZLCBwYXVzZVcsIHBhdXNlSCk7XG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChcIklJXCIsIHBhdXNlWCArIHBhdXNlVyAvIDIsIHBhdXNlWSArIHBhdXNlSCAvIDIpO1xuICBnYy5oaXRBcmVhcy5wdXNoKHtcbiAgICB4OiBwYXVzZVgsXG4gICAgeTogcGF1c2VZLFxuICAgIHc6IHBhdXNlVyxcbiAgICBoOiBwYXVzZUgsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gTGl2ZXMg4oCUIGJvdHRvbSByaWdodFxuICBjb25zdCBoZWFydFNpemUgPSAyNDtcbiAgY29uc3QgaGVhcnRHYXAgPSA2O1xuICBjb25zdCBsaXZlc1kgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0IC0gcGFkWTtcbiAgY29uc3QgdG90YWxXID0gMyAqIGhlYXJ0U2l6ZSArIDIgKiBoZWFydEdhcDtcbiAgY29uc3QgbGl2ZXNYID0gdG9wQm94WCArIHRvcEJveFdpZHRoIC0gcGFkWCAtIHRvdGFsVztcblxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgJHtoZWFydFNpemV9cHggc2Fucy1zZXJpZmA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9XG4gICAgICBpIDwgc3RhdGUubGl2ZXMgPyBcIiNlMDMwMzBcIiA6IHN0YXRlLmRhcmtNb2RlID8gXCIjNDQ0NDQ0XCIgOiBcIiNiYmJiYmJcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwi4pmlXCIsIGxpdmVzWCArIGkgKiAoaGVhcnRTaXplICsgaGVhcnRHYXApLCBsaXZlc1kpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSAgICBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRUaGVtZSB9ICAgICAgIGZyb20gJy4uL3RoZW1lJztcbmltcG9ydCB7IGdldExheW91dCB9ICAgICAgZnJvbSAnLi4vbGF5b3V0JztcbmltcG9ydCB7IGRyYXdCdXR0b24sIGRyYXdMZXZlbEhVRCB9IGZyb20gJy4uL3JlbmRlcmVyJztcbmltcG9ydCB7IGRyYXdOYW1lRW50cnkgfSAgZnJvbSAnLi4vbGV2ZWxzL0xldmVsMSc7XG5pbXBvcnQgeyBkcmF3TGV2ZWwyIH0gICAgIGZyb20gJy4uL2xldmVscy9MZXZlbDInO1xuaW1wb3J0IHsgZHJhd0xldmVsMyB9ICAgICBmcm9tICcuLi9sZXZlbHMvTGV2ZWwzJztcbmltcG9ydCB7IExFVkVMX0NPVU5UIH0gICAgZnJvbSAnLi4vbGV2ZWxEYXRhJztcblxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCAgPSB3IC8gMjtcbiAgY29uc3QgbHZsID0gc3RhdGUuY3VycmVudExldmVsO1xuICBjb25zdCB0ICAgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgLy8gTGV2ZWwgMSDigJQgbmFtZSBlbnRyeVxuICBpZiAobHZsID09PSAxKSB7XG4gICAgZHJhd05hbWVFbnRyeShnYyk7XG4gICAgZHJhd0xldmVsSFVEKGdjKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBMZXZlbCAyIOKAlCBhcml0aG1ldGljIHF1ZXN0aW9uXG4gIGlmIChsdmwgPT09IDIpIHtcbiAgICBkcmF3TGV2ZWwyKGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIExldmVsIDMg4oCUIGNsaWNrIHRoZSBkb3RcbiAgaWYgKGx2bCA9PT0gMykge1xuICAgIGRyYXdMZXZlbDMoZ2MpO1xuICAgIGRyYXdMZXZlbEhVRChnYyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUGxhY2Vob2xkZXIgZm9yIHVuZmluaXNoZWQgbGV2ZWxzXG4gIGN0eC5maWxsU3R5bGUgICAgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduICAgID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG5cbiAgY3R4LmZvbnQgPSBgYm9sZCAzNHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KGBMRVZFTCAke2x2bH1gLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTYpO1xuXG4gIGN0eC5mb250ICAgICAgPSBgMjJweCAke2JvZHlGb250fWA7XG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnTWlkO1xuICBjdHguZmlsbFRleHQoXCJUaGlzIGxldmVsIGlzIHVuZGVyIGNvbnN0cnVjdGlvbi5cIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjM4LCB0b3BCb3hXaWR0aCAqIDAuNik7XG5cbiAgY3R4LmZvbnQgICAgICA9IGAxNnB4ICR7Ym9keUZvbnR9YDtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XG4gIGN0eC5maWxsVGV4dChcIlF1ZXN0aW9ucywgY2hvaWNlcywgYW5kIGludGVyYWN0aW9ucyB3aWxsIGJlIHdpcmVkIGluIGhlcmUuXCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC41MiwgdG9wQm94V2lkdGggKiAwLjYpO1xuXG4gIC8vIE5hdiByb3cg4oCUIGxldmVsIHNlbGVjdCBwYXRod2F5IG9ubHlcbiAgaWYgKHN0YXRlLnBsYXlNb2RlID09PSBcImxldmVsc2VsZWN0XCIpIHtcbiAgICBjb25zdCBuYXZCdG5IID0gNDI7XG4gICAgY29uc3QgbmF2QnRuVyA9IDE1MDtcbiAgICBjb25zdCBuYXZZICAgID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNzk7XG5cbiAgICBpZiAobHZsID4gMSkge1xuICAgICAgZHJhd0J1dHRvbihnYywgXCLihpAgUFJFVlwiLCB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA1LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbC0tO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0sIDE4KTtcbiAgICB9XG5cbiAgICBkcmF3QnV0dG9uKGdjLCBcIkxFVkVMIFNFTEVDVFwiLCBjeCAtIG5hdkJ0blcgLyAyLCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcbiAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LCAxNik7XG5cbiAgICBpZiAobHZsIDwgTEVWRUxfQ09VTlQpIHtcbiAgICAgIGRyYXdCdXR0b24oZ2MsIFwiTkVYVCDihpJcIiwgdG9wQm94WCArIHRvcEJveFdpZHRoICogMC43NywgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xuICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwrKztcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICB9LCAxOCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0xldmVsSFVEKGdjKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGdldFRoZW1lIH0gICAgZnJvbSAnLi4vdGhlbWUnO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gICBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiB9ICBmcm9tICcuLi9yZW5kZXJlcic7XG5pbXBvcnQgeyBMRVZFTF9DT1VOVCB9IGZyb20gJy4uL2xldmVsRGF0YSc7XG5cbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWxTZWxlY3QgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgdCAgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgY3R4LmZpbGxTdHlsZSAgICA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gICAgPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgICAgICAgICA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJMRVZFTCBTRUxFQ1RcIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjEpO1xuXG4gIC8vIDUtY29sdW1uIMOXIDQtcm93IGdyaWQgKDIwIGxldmVscylcbiAgY29uc3QgY29scyAgPSA1O1xuICBjb25zdCB0aWxlVyA9IHRvcEJveFdpZHRoICAqIDAuMTM7XG4gIGNvbnN0IHRpbGVIID0gdG9wQm94SGVpZ2h0ICogMC4xNDtcbiAgY29uc3QgaEdhcCAgPSAodG9wQm94V2lkdGggKiAwLjc4IC0gdGlsZVcgKiBjb2xzKSAvIChjb2xzIC0gMSk7XG4gIGNvbnN0IHZHYXAgID0gdG9wQm94SGVpZ2h0ICogMC4wNDtcbiAgY29uc3QgZ3JpZFcgPSB0aWxlVyAqIGNvbHMgKyBoR2FwICogKGNvbHMgLSAxKTtcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IExFVkVMX0NPVU5UOyBpKyspIHtcbiAgICBjb25zdCBjb2wgPSBpICUgY29scztcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2xzKTtcbiAgICBjb25zdCB0eCAgPSBncmlkWCArIGNvbCAqICh0aWxlVyArIGhHYXApO1xuICAgIGNvbnN0IHR5ICA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XG4gICAgY29uc3QgbHZsID0gaSArIDE7XG5cbiAgICBjb25zdCBpc1dpcCA9IGx2bCA+IDEwO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlICA9IGlzV2lwID8gdC5kaXZpZGVyIDogdC5zdHJva2U7XG4gICAgY3R4LmxpbmVXaWR0aCAgICA9IGlzV2lwID8gMSA6IDM7XG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSAgICA9IGlzV2lwID8gdC5mZ0RpbSA6IHQuZmc7XG4gICAgY3R4LnRleHRBbGlnbiAgICA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG5cbiAgICBjdHguZm9udCA9IGBib2xkIDIwcHggJHtkaXNwbGF5Rm9udH1gO1xuICAgIGN0eC5maWxsVGV4dChgJHtsdmx9YCwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjM4KTtcblxuICAgIGN0eC5mb250ICAgICAgPSBgMTBweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGlzV2lwID8gdC5mZ0RpbSA6IHQuZmdEaW07XG4gICAgY3R4LmZpbGxUZXh0KGlzV2lwID8gXCJzb29uXCIgOiBgTEVWRUwgJHtsdmx9YCwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjc0KTtcblxuICAgIGNvbnN0IGNhcHR1cmVkID0gbHZsO1xuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgICAgeDogdHgsIHk6IHR5LCB3OiB0aWxlVywgaDogdGlsZUgsXG4gICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsICA9IGNhcHR1cmVkO1xuICAgICAgICBzdGF0ZS5wbGF5TW9kZSAgICAgID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgICAgICBzdGF0ZS5nYW1lT3ZlciAgICAgID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxpdmVzICAgICAgICAgPSAzO1xuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbFwiO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyBCYWNrIGJ1dHRvblxuICBjb25zdCBiYWNrVyA9IDE1MDtcbiAgY29uc3QgYmFja0ggPSA0MjtcbiAgY29uc3QgYmFja1ggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA0O1xuICBjb25zdCBiYWNrWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjgyO1xuICBkcmF3QnV0dG9uKGdjLCBcIuKGkCBCQUNLXCIsIGJhY2tYLCBiYWNrWSwgYmFja1csIGJhY2tILCAoKSA9PiB7XG4gICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfSwgMTgpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSAgICBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgeyBnZXRMYXlvdXQgfSAgIGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gIGZyb20gJy4uL3JlbmRlcmVyJztcblxuZXhwb3J0IGNvbnN0IGRyYXdNYWluTWVudSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgdG9wSW5uZXJYLCB0b3BJbm5lclksIHRvcElubmVyV2lkdGgsIHRvcElubmVySGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgdCAgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgY3R4LmZpbGxTdHlsZSAgICA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gICAgPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICBjdHguZm9udCA9IGBib2xkIDQycHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJNQUlOIE1FTlVcIiwgY3gsIHRvcElubmVyWSArIHRvcElubmVySGVpZ2h0ICogMC4xNSk7XG5cbiAgY29uc3QgYnRuVyAgID0gTWF0aC5taW4oMzAwLCB0b3BJbm5lcldpZHRoICogMC43OCk7XG4gIGNvbnN0IGJ0bkggICA9IDUwO1xuICBjb25zdCBidG5YICAgPSBjeCAtIGJ0blcgLyAyO1xuICBjb25zdCBzdGFydFkgPSB0b3BJbm5lclkgKyB0b3BJbm5lckhlaWdodCAqIDAuMzI7XG4gIGNvbnN0IHN0cmlkZSA9IGJ0bkggKyAxNDtcblxuICBkcmF3QnV0dG9uKGdjLCBcIlNUQVJUIEVYQU1cIiwgYnRuWCwgc3RhcnRZLCBidG5XLCBidG5ILCAoKSA9PiB7XG4gICAgc3RhdGUuY3VycmVudExldmVsID0gMTtcbiAgICBzdGF0ZS5saXZlcyAgICAgICAgPSAzO1xuICAgIHN0YXRlLnBhdXNlZCAgICAgICA9IGZhbHNlO1xuICAgIHN0YXRlLmdhbWVPdmVyICAgICA9IGZhbHNlO1xuICAgIHN0YXRlLnBsYXlNb2RlICAgICA9IFwicGxheVwiO1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsXCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGJ0blgsIHN0YXJ0WSArIHN0cmlkZSwgYnRuVywgYnRuSCwgKCkgPT4ge1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRyYXdCdXR0b24oZ2MsIFwiQ09OVFJPTFNcIiwgYnRuWCwgc3RhcnRZICsgc3RyaWRlICogMiwgYnRuVywgYnRuSCwgKCkgPT4ge1xuICAgIHN0YXRlLmNvbnRyb2xzT3BlbiA9IHRydWU7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRUaGVtZSA9IChzdGF0ZTogR2FtZVN0YXRlKSA9PlxuICBzdGF0ZS5kYXJrTW9kZVxuICAgID8ge1xuICAgICAgICBiZzogXCIjMTExMTExXCIsXG4gICAgICAgIGZnOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZmdNaWQ6IFwiI2NjY2NjY1wiLFxuICAgICAgICBmZ0RpbTogXCIjODg4ODg4XCIsXG4gICAgICAgIHN0cm9rZTogXCIjZmZmZmZmXCIsXG4gICAgICAgIG92ZXJsYXlCZzogXCJyZ2JhKDEwLDEwLDEwLDAuOTApXCIsXG4gICAgICAgIGRpdmlkZXI6IFwiIzQ0NDQ0NFwiLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBiZzogXCIjZjBmMGYwXCIsXG4gICAgICAgIGZnOiBcIiMxMTExMTFcIixcbiAgICAgICAgZmdNaWQ6IFwiIzMzMzMzM1wiLFxuICAgICAgICBmZ0RpbTogXCIjNjY2NjY2XCIsXG4gICAgICAgIHN0cm9rZTogXCIjMTExMTExXCIsXG4gICAgICAgIG92ZXJsYXlCZzogXCJyZ2JhKDIyMCwyMjAsMjIwLDAuOTMpXCIsXG4gICAgICAgIGRpdmlkZXI6IFwiI2FhYWFhYVwiLFxuICAgICAgfTtcbiJdfQ==
