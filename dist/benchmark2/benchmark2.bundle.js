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
var LEVEL_COUNT = exports.LEVEL_COUNT = 10;
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

  // 5-column × 2-row grid
  var cols = 5;
  var tileW = topBoxWidth * 0.13;
  var tileH = topBoxHeight * 0.24;
  var hGap = (topBoxWidth * 0.78 - tileW * cols) / (cols - 1);
  var vGap = topBoxHeight * 0.07;
  var gridW = tileW * cols + hGap * (cols - 1);
  var gridX = cx - gridW / 2;
  var gridY = topBoxY + topBoxHeight * 0.21;
  var _loop = function _loop() {
    var col = i % cols;
    var row = Math.floor(i / cols);
    var tx = gridX + col * (tileW + hGap);
    var ty = gridY + row * (tileH + vGap);
    var lvl = i + 1;
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 3;
    ctx.strokeRect(tx, ty, tileW, tileH);
    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 28px ".concat(displayFont);
    ctx.fillText("".concat(lvl), tx + tileW / 2, ty + tileH * 0.38);
    ctx.font = "12px ".concat(bodyFont);
    ctx.fillStyle = t.fgDim;
    ctx.fillText("LEVEL ".concat(lvl), tx + tileW / 2, ty + tileH * 0.7);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sYXlvdXQudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbERhdGEudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbHMvTGV2ZWwxLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxzL0xldmVsMi50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVscy9MZXZlbDMudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9tYWluLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvQ29udHJvbHNPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvUGF1c2VPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvcmVuZGVyZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9zY3JlZW5zL0xldmVsLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvc2NyZWVucy9MZXZlbFNlbGVjdC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3NjcmVlbnMvTWFpbk1lbnUudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLElBQU0sU0FBUyxHQUFBLE9BQUEsQ0FBQSxTQUFBLEdBQUcsU0FBWixTQUFTLENBQUksR0FBNkIsRUFBSztFQUMxRCxJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUs7RUFDMUIsSUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FB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QSxDQUFBLHlCQUFBLE1BQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLHFCQUFBLENBQUEsUUFBQSxLQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsMkJBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsdUJBQUEsQ0FBQSxDQUFBLE1BQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsT0FBQSxFQUFBLE1BQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsSUFBQSxXQUFBLElBQUEsTUFBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFNBQUEsaUpBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLFdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxVQUFBLENBQUEsWUFBQSxDQUFBLGNBQUEsQ0FBQSw4QkFBQSxDQUFBLFFBQUEsQ0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLDJCQUFBLENBQUEsU0FBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsNkJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLEtBQUEsQ0FBQSxH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QUFNLEVBQUUsU0FBUztJQUNqQixTQUFTLEVBQUUsd0JBQXdCO0lBQ25DLE9BQU8sRUFBRTtFQUNYLENBQUM7QUFBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjb25zdCBnZXRMYXlvdXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgY29uc3QgdyA9IGN0eC5jYW52YXMud2lkdGg7XG4gIGNvbnN0IGggPSBjdHguY2FudmFzLmhlaWdodDtcblxuICBjb25zdCBjb250ZW50V2lkdGggPSB3ICogMC44NDtcbiAgY29uc3QgY29udGVudFggPSAodyAtIGNvbnRlbnRXaWR0aCkgLyAyO1xuICBjb25zdCBsb2dvWSA9IGggKiAwLjA4O1xuXG4gIGNvbnN0IHRvcEJveFdpZHRoID0gY29udGVudFdpZHRoO1xuICBjb25zdCB0b3BCb3hIZWlnaHQgPSBoICogMC40ODtcbiAgY29uc3QgdG9wQm94WCA9IGNvbnRlbnRYO1xuICBjb25zdCB0b3BCb3hZID0gaCAqIDAuMTg7XG5cbiAgLy8gU2FmZSBjb250ZW50IGFyZWEgaW5zaWRlIHRoZSBkZWNvcmF0aXZlIGZyYW1lXG4gIGNvbnN0IHRvcElubmVyV2lkdGggPSB0b3BCb3hXaWR0aCAqIDAuNDI7XG4gIGNvbnN0IHRvcElubmVySGVpZ2h0ID0gdG9wQm94SGVpZ2h0ICogMC42MjtcbiAgY29uc3QgdG9wSW5uZXJYID0gdyAvIDIgLSB0b3BJbm5lcldpZHRoIC8gMjtcbiAgY29uc3QgdG9wSW5uZXJZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTY7XG5cbiAgY29uc3QgZ2FwID0gaCAqIDAuMDQ7XG4gIGNvbnN0IGJvdHRvbUJveFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICsgZ2FwO1xuICBjb25zdCBib3R0b21Cb3hIZWlnaHQgPSBoICogMC4yMjtcblxuICByZXR1cm4ge1xuICAgIHcsXG4gICAgaCxcbiAgICBjb250ZW50V2lkdGgsXG4gICAgY29udGVudFgsXG4gICAgbG9nb1ksXG4gICAgdG9wQm94WCxcbiAgICB0b3BCb3hZLFxuICAgIHRvcEJveFdpZHRoLFxuICAgIHRvcEJveEhlaWdodCxcbiAgICB0b3BJbm5lclgsXG4gICAgdG9wSW5uZXJZLFxuICAgIHRvcElubmVyV2lkdGgsXG4gICAgdG9wSW5uZXJIZWlnaHQsXG4gICAgYm90dG9tQm94WSxcbiAgICBib3R0b21Cb3hIZWlnaHQsXG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IExFVkVMX0NPVU5UID0gMTA7XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9EQVRBOiB7IHRpdGxlOiBzdHJpbmc7IGxpbmVzOiBzdHJpbmdbXSB9W10gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJXaGF0J3MgeW91ciBuYW1lP1wiLFxuICAgIGxpbmVzOiBbXCJFbnRlciB5b3VyIG5hbWUgYmVsb3cuXCIsIFwiTGVhdmUgaXQgYmxhbmsgYW5kIHdlJ2xsIGNhbGwgeW91IEJveC5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJXaGF0IGlzIDE1ICsgMTU/XCIsXG4gICAgbGluZXM6IFtcIlBpY2sgdGhlIGNvcnJlY3QgYW5zd2VyIGZyb20gdGhlIG9wdGlvbnMgYWJvdmUuXCJdLFxuICB9LFxuICB7IHRpdGxlOiBcIkNsaWNrIHRoZSBkb3RcIiwgbGluZXM6IFtdIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA0IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIOKAlCB0byBiZSB3cml0dGVuLlwiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxldmVsIDUgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIg4oCUIHRvIGJlIHdyaXR0ZW4uXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGV2ZWwgNiBpbnN0cnVjdGlvbiBoZXJlLlwiLFxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciDigJQgdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA3IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIOKAlCB0byBiZSB3cml0dGVuLlwiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxldmVsIDggaW5zdHJ1Y3Rpb24gaGVyZS5cIixcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIg4oCUIHRvIGJlIHdyaXR0ZW4uXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGV2ZWwgOSBpbnN0cnVjdGlvbiBoZXJlLlwiLFxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciDigJQgdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCAxMCBpbnN0cnVjdGlvbiBoZXJlLlwiLFxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciDigJQgdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG5dO1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3TmFtZUVudHJ5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IGN4ID0gdyAvIDI7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgLy8gUHJvbXB0XG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYGJvbGQgMzJweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChcIldoYXQncyB5b3VyIG5hbWU/XCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4yKTtcblxuICBjdHguZm9udCA9IGAxOHB4ICR7Ym9keUZvbnR9YDtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XG4gIGN0eC5maWxsVGV4dChcbiAgICBcIkxlYXZlIGl0IGJsYW5rIGFuZCB3ZSdsbCBjYWxsIHlvdSBCb3guXCIsXG4gICAgY3gsXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzIsXG4gICAgdG9wQm94V2lkdGggKiAwLjY1LFxuICApO1xuXG4gIC8vIElucHV0IGJveFxuICBjb25zdCBpbnB1dFcgPSB0b3BCb3hXaWR0aCAqIDAuNTtcbiAgY29uc3QgaW5wdXRIID0gNTI7XG4gIGNvbnN0IGlucHV0WCA9IGN4IC0gaW5wdXRXIC8gMjtcbiAgY29uc3QgaW5wdXRZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNDI7XG5cbiAgY3R4LnN0cm9rZVN0eWxlID0gc3RhdGUubmFtZUZvY3VzZWRcbiAgICA/IHN0YXRlLmRhcmtNb2RlXG4gICAgICA/IFwiI2ZmZmZmZlwiXG4gICAgICA6IFwiIzExMTExMVwiXG4gICAgOiB0LmRpdmlkZXI7XG4gIGN0eC5saW5lV2lkdGggPSBzdGF0ZS5uYW1lRm9jdXNlZCA/IDMgOiAyO1xuICBjdHguc3Ryb2tlUmVjdChpbnB1dFgsIGlucHV0WSwgaW5wdXRXLCBpbnB1dEgpO1xuXG4gIGNvbnN0IGRpc3BsYXlUZXh0ID1cbiAgICBzdGF0ZS5uYW1lSW5wdXQubGVuZ3RoID4gMFxuICAgICAgPyBzdGF0ZS5uYW1lSW5wdXRcbiAgICAgIDogc3RhdGUubmFtZUZvY3VzZWRcbiAgICAgICAgPyBcIlwiXG4gICAgICAgIDogXCJUeXBlIHlvdXIgbmFtZeKAplwiO1xuICBjdHguZmlsbFN0eWxlID0gc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA+IDAgPyB0LmZnIDogdC5mZ0RpbTtcbiAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgMjJweCAke2JvZHlGb250fWA7XG4gIGN0eC5maWxsVGV4dChkaXNwbGF5VGV4dCwgaW5wdXRYICsgMTQsIGlucHV0WSArIGlucHV0SCAvIDIsIGlucHV0VyAtIDI4KTtcblxuICAvLyBCbGlua2luZyBjdXJzb3JcbiAgaWYgKHN0YXRlLm5hbWVGb2N1c2VkKSB7XG4gICAgY29uc3QgbWVhc3VyZWQgPSBjdHgubWVhc3VyZVRleHQoc3RhdGUubmFtZUlucHV0KS53aWR0aDtcbiAgICBjb25zdCBjdXJzb3JYID0gaW5wdXRYICsgMTQgKyBNYXRoLm1pbihtZWFzdXJlZCwgaW5wdXRXIC0gMjgpO1xuICAgIGNvbnN0IGN1cnNvclkgPSBpbnB1dFkgKyBpbnB1dEggKiAwLjI7XG4gICAgY29uc3QgY3Vyc29ySCA9IGlucHV0SCAqIDAuNjtcbiAgICBjb25zdCBibGluayA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDUzMCkgJSAyID09PSAwO1xuICAgIGlmIChibGluaykge1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdC5mZztcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4Lm1vdmVUbyhjdXJzb3JYLCBjdXJzb3JZKTtcbiAgICAgIGN0eC5saW5lVG8oY3Vyc29yWCwgY3Vyc29yWSArIGN1cnNvckgpO1xuICAgICAgY3R4LnN0cm9rZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIElucHV0IGJveCBoaXQgYXJlYVxuICBnYy5oaXRBcmVhcy5wdXNoKHtcbiAgICB4OiBpbnB1dFgsXG4gICAgeTogaW5wdXRZLFxuICAgIHc6IGlucHV0VyxcbiAgICBoOiBpbnB1dEgsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IHRydWU7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LFxuICB9KTtcblxuICAvLyBDb25maXJtIGJ1dHRvblxuICBjb25zdCBjb25maXJtVyA9IDE4MDtcbiAgY29uc3QgY29uZmlybUggPSA0ODtcbiAgZHJhd0J1dHRvbihcbiAgICBnYyxcbiAgICBcIkNPTkZJUk0g4oaSXCIsXG4gICAgY3ggLSBjb25maXJtVyAvIDIsXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNjIsXG4gICAgY29uZmlybVcsXG4gICAgY29uZmlybUgsXG4gICAgKCkgPT4ge1xuICAgICAgc3RhdGUucGxheWVyTmFtZSA9IHN0YXRlLm5hbWVJbnB1dC50cmltKCkgfHwgXCJCb3hcIjtcbiAgICAgIHN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSxcbiAgICAyMCxcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbDIgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCA9IHcgLyAyO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIC8vIFF1ZXN0aW9uIGhlYWRlclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkIDMwcHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJXaGF0IGlzIDE1ICsgMTU/XCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNCk7XG5cbiAgLy8gMsOXMiBhbnN3ZXIgZ3JpZFxuICBjb25zdCBhbnN3ZXJzID0gW1xuICAgIHsgbGFiZWw6IFwiMjVcIiwgY29ycmVjdDogZmFsc2UgfSxcbiAgICB7IGxhYmVsOiBcIjMwXCIsIGNvcnJlY3Q6IHRydWUgfSxcbiAgICB7IGxhYmVsOiBcIjI4XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXG4gICAgeyBsYWJlbDogXCIzNVwiLCBjb3JyZWN0OiBmYWxzZSB9LFxuICBdO1xuXG4gIGNvbnN0IGNvbHMgPSAyO1xuICBjb25zdCB0aWxlVyA9IHRvcEJveFdpZHRoICogMC4zO1xuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XG4gIGNvbnN0IGhHYXAgPSB0b3BCb3hXaWR0aCAqIDAuMDY7XG4gIGNvbnN0IHZHYXAgPSB0b3BCb3hIZWlnaHQgKiAwLjA2O1xuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XG4gIGNvbnN0IGdyaWRYID0gY3ggLSBncmlkVyAvIDI7XG4gIGNvbnN0IGdyaWRZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMjY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29sID0gaSAlIGNvbHM7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XG4gICAgY29uc3QgdHggPSBncmlkWCArIGNvbCAqICh0aWxlVyArIGhHYXApO1xuICAgIGNvbnN0IHR5ID0gZ3JpZFkgKyByb3cgKiAodGlsZUggKyB2R2FwKTtcbiAgICBjb25zdCBhbnMgPSBhbnN3ZXJzW2ldO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAzNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoYW5zLmxhYmVsLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xuXG4gICAgY29uc3QgY2FwdHVyZWQgPSBhbnMuY29ycmVjdDtcbiAgICBnYy5oaXRBcmVhcy5wdXNoKHtcbiAgICAgIHg6IHR4LFxuICAgICAgeTogdHksXG4gICAgICB3OiB0aWxlVyxcbiAgICAgIGg6IHRpbGVILFxuICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIGlmIChjYXB0dXJlZCkge1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDM7XG4gICAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZ2MubG9zZUxpZmUoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMyA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQsIGJvdHRvbUJveFkgfSA9XG4gICAgZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IGN4ID0gdyAvIDI7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgLy8gMsOXMiBncmlkIG9mIGRlY295IG9wdGlvbnMg4oCUIGFsbCB3cm9uZ1xuICBjb25zdCBjb2xzID0gMjtcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjIyO1xuICBjb25zdCBoR2FwID0gdG9wQm94V2lkdGggKiAwLjA2O1xuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcbiAgY29uc3QgZ3JpZFcgPSBjb2xzICogdGlsZVcgKyBoR2FwO1xuICBjb25zdCBncmlkWCA9IGN4IC0gZ3JpZFcgLyAyO1xuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgY29uc3QgY29sID0gaSAlIGNvbHM7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XG4gICAgY29uc3QgdHggPSBncmlkWCArIGNvbCAqICh0aWxlVyArIGhHYXApO1xuICAgIGNvbnN0IHR5ID0gZ3JpZFkgKyByb3cgKiAodGlsZUggKyB2R2FwKTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICAgIGN0eC5saW5lV2lkdGggPSAzO1xuICAgIGN0eC5zdHJva2VSZWN0KHR4LCB0eSwgdGlsZVcsIHRpbGVIKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuXG4gICAgaWYgKGkgPT09IDApIHtcbiAgICAgIC8vIFRoZSB3b3JkIFwiZG90XCJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XG4gICAgICBjdHguZmlsbFRleHQoXCJkb3RcIiwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggLyAyKTtcbiAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcbiAgICAgIC8vIEEgbGl0ZXJhbCBkb3RcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmModHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggLyAyLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcbiAgICAgIC8vIFRocmVlIGRvdHNcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XG4gICAgICBjdHguZmlsbFRleHQoXCLigKIg4oCiIOKAolwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZXBhcnRtZW50IG9mIFNhbml0YXRpb25cbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMTVweCAke2Rpc3BsYXlGb250fWA7XG4gICAgICBjdHguZmlsbFRleHQoXCJEZXBhcnRtZW50XCIsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIICogMC4zNCwgdGlsZVcgLSAxNik7XG4gICAgICBjdHguZmlsbFRleHQoXG4gICAgICAgIFwib2YgU2FuaXRhdGlvblwiLFxuICAgICAgICB0eCArIHRpbGVXIC8gMixcbiAgICAgICAgdHkgKyB0aWxlSCAqIDAuNTcsXG4gICAgICAgIHRpbGVXIC0gMTYsXG4gICAgICApO1xuICAgICAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XG4gICAgICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcbiAgICAgIGN0eC5maWxsVGV4dChcIihELk8uUy4pXCIsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIICogMC43OCk7XG4gICAgfVxuXG4gICAgZ2MuaGl0QXJlYXMucHVzaCh7XG4gICAgICB4OiB0eCxcbiAgICAgIHk6IHR5LFxuICAgICAgdzogdGlsZVcsXG4gICAgICBoOiB0aWxlSCxcbiAgICAgIGFjdGlvbjogKCkgPT4gZ2MubG9zZUxpZmUoKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEhpZGRlbiBoaXQgYXJlYTogdGhlIHRpdHRsZSAoZG90KSBvbiB0aGUgJ2knIGluIFwiQ2xpY2tcIiBpbiB0aGUgYm90dG9tIHBhbmVsLlxuICAvLyBCb3R0b20gcGFuZWwgdGl0bGUgXCJDbGljayB0aGUgZG90LlwiIGlzIGRyYXduIGJvbGQgMzBweCwgY2VudGVyZWQgYXQgKHcvMiwgYm90dG9tQm94WSsxOCksXG4gIC8vIHRleHRCYXNlbGluZT1cInRvcFwiLiBXZSBtZWFzdXJlIHRvIGZpbmQgdGhlICdpJyB4LXBvc2l0aW9uLCB0aGVuIGVzdGltYXRlIHRoZSB0aXR0bGUncyB5LlxuICBjdHguZm9udCA9IGBib2xkIDMwcHggJHtkaXNwbGF5Rm9udH1gO1xuICBjb25zdCBmdWxsU3RyID0gXCJDbGljayB0aGUgZG90XCI7XG4gIGNvbnN0IGZ1bGxXID0gY3R4Lm1lYXN1cmVUZXh0KGZ1bGxTdHIpLndpZHRoO1xuICBjb25zdCB0ZXh0TGVmdCA9IGN4IC0gZnVsbFcgLyAyO1xuICBjb25zdCBwcmVmaXhXID0gY3R4Lm1lYXN1cmVUZXh0KFwiQ2xcIikud2lkdGg7XG4gIGNvbnN0IGlDaGFyVyA9IGN0eC5tZWFzdXJlVGV4dChcImlcIikud2lkdGg7XG4gIGNvbnN0IGlEb3RDWCA9IHRleHRMZWZ0ICsgcHJlZml4VyArIGlDaGFyVyAvIDI7XG4gIGNvbnN0IGlEb3RDWSA9IGJvdHRvbUJveFkgKyAxOCArIDU7IC8vIH41cHggYmVsb3cgdG9wIGJhc2VsaW5lIOKJiCB0aXR0bGUgcG9zaXRpb25cbiAgY29uc3QgaGl0UiA9IDEwO1xuXG4gIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgIHg6IGlEb3RDWCAtIGhpdFIsXG4gICAgeTogaURvdENZIC0gaGl0UixcbiAgICB3OiBoaXRSICogMixcbiAgICBoOiBoaXRSICogMixcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDQ7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LFxuICB9KTtcbn07XG4iLCJjb25zb2xlLmxvZyhcIkJFTkNITUFSSyAyIE1BSU4gTE9BREVEXCIpO1xuXG5pbXBvcnQgeyBHYW1lQ29udGV4dCwgR2FtZVN0YXRlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBkcmF3QmFja2dyb3VuZCwgZHJhd0xvZ28sIGRyYXdHYW1lcGxheUZyYW1lLCBkcmF3Qm90dG9tUGFuZWwgfSBmcm9tICcuL3JlbmRlcmVyJztcbmltcG9ydCB7IGRyYXdNYWluTWVudSB9ICAgICAgIGZyb20gJy4vc2NyZWVucy9NYWluTWVudSc7XG5pbXBvcnQgeyBkcmF3TGV2ZWxTZWxlY3QgfSAgICBmcm9tICcuL3NjcmVlbnMvTGV2ZWxTZWxlY3QnO1xuaW1wb3J0IHsgZHJhd0xldmVsIH0gICAgICAgICAgZnJvbSAnLi9zY3JlZW5zL0xldmVsJztcbmltcG9ydCB7IGRyYXdQYXVzZU92ZXJsYXkgfSAgIGZyb20gJy4vb3ZlcmxheXMvUGF1c2VPdmVybGF5JztcbmltcG9ydCB7IGRyYXdDb250cm9sc092ZXJsYXkgfSBmcm9tICcuL292ZXJsYXlzL0NvbnRyb2xzT3ZlcmxheSc7XG5pbXBvcnQgeyBkcmF3R2FtZU92ZXJPdmVybGF5IH0gZnJvbSAnLi9vdmVybGF5cy9HYW1lT3Zlck92ZXJsYXknO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lQ2FudmFzICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIikgIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgZGVidWdDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnLWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XG4gIGNvbnN0IHRleHRDYW52YXMgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWNhbnZhc1wiKSAgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuXG4gIGlmICghZ2FtZUNhbnZhcyB8fCAhZGVidWdDYW52YXMgfHwgIXRleHRDYW52YXMpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBvbmUgb3IgbW9yZSBjYW52YXMgZWxlbWVudHMuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZ2V0IDJEIGNvbnRleHQuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIOKUgOKUgCBpbml0aWFsIHN0YXRlIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gIGNvbnN0IHN0YXRlOiBHYW1lU3RhdGUgPSB7XG4gICAgY3VycmVudFNjcmVlbjogXCJtYWlubWVudVwiLFxuICAgIGN1cnJlbnRMZXZlbDogIDEsXG4gICAgbGl2ZXM6ICAgICAgICAgMyxcbiAgICBwYXVzZWQ6ICAgICAgICBmYWxzZSxcbiAgICBjb250cm9sc09wZW46ICBmYWxzZSxcbiAgICBkYXJrTW9kZTogICAgICB0cnVlLFxuICAgIHN0b3J5VGl0bGU6ICAgIFwiT3V0c2lkZS10aGUtQm94IFRoaW5raW5nIENlcnRpZmljYXRpb25cIixcbiAgICBzdG9yeUxpbmVzOiBbXG4gICAgICBcIkNvbXBsZXRlIHRoaXMgYXNzZXNzbWVudCB0byBlYXJuIHlvdXIgT3RCIFRoaW5raW5nIENlcnRpZmljYXRlLlwiLFxuICAgICAgXCJEZW1vbnN0cmF0ZSB5b3VyIGFiaWxpdHkgdG8gYXBwcm9hY2ggcHJvYmxlbXMgZnJvbSB1bmNvbnZlbnRpb25hbCBhbmdsZXMuXCIsXG4gICAgICBcIkNhbmRpZGF0ZXMgd2hvIHBhc3MgbWF5IGxpc3QgdGhpcyBjcmVkZW50aWFsIG9uIHRoZWlyIExpbmtlZEluIG9yIHLDqXN1bcOpLlwiLFxuICAgIF0sXG4gICAgcGxheWVyTmFtZTogIFwiQm94XCIsXG4gICAgbmFtZUlucHV0OiAgIFwiXCIsXG4gICAgbmFtZUZvY3VzZWQ6IGZhbHNlLFxuICAgIHBsYXlNb2RlOiAgICBcInBsYXlcIixcbiAgICBnYW1lT3ZlcjogICAgZmFsc2UsXG4gIH07XG5cbiAgLy8g4pSA4pSAIGdhbWUgY29udGV4dCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcbiAgLy8gZ2MgaXMgcGFzc2VkIHRvIGV2ZXJ5IGRyYXcgZnVuY3Rpb24gc28gdGhleSBzaGFyZSBjdHgsIHN0YXRlLCBhbmQgaGVscGVyc1xuICAvLyB3aXRob3V0IGdsb2JhbHMgb3IgY2lyY3VsYXIgaW1wb3J0cy5cblxuICBjb25zdCBnYzogR2FtZUNvbnRleHQgPSB7XG4gICAgY3R4LFxuICAgIHN0YXRlLFxuICAgIGhpdEFyZWFzOiAgICAgICAgICAgIFtdLFxuICAgIHJlbmRlcjogICAgICAgICAgICAgICgpID0+IHt9LCAgIC8vIGFzc2lnbmVkIGJlbG93XG4gICAgbG9zZUxpZmU6ICAgICAgICAgICAgKCkgPT4ge30sICAgLy8gYXNzaWduZWQgYmVsb3dcbiAgICByZXNldFBsYXllck5hbWU6ICAgICAoKSA9PiB7fSwgICAvLyBhc3NpZ25lZCBiZWxvd1xuICAgIGRpc3BsYXlGb250OiAgICAgICAgIGBcIlRyZWJ1Y2hldCBNU1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZmAsXG4gICAgYm9keUZvbnQ6ICAgICAgICAgICAgYFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZmAsXG4gICAgbG9nbzogICAgICAgICAgICAgICAgbmV3IEltYWdlKCksXG4gICAgZ2FtZXBsYXlGcmFtZTogICAgICAgbmV3IEltYWdlKCksXG4gICAgbG9nb0xvYWRlZDogICAgICAgICAgZmFsc2UsXG4gICAgZ2FtZXBsYXlGcmFtZUxvYWRlZDogZmFsc2UsXG4gIH07XG5cbiAgZ2MucmVzZXRQbGF5ZXJOYW1lID0gKCkgPT4ge1xuICAgIGdjLnN0YXRlLnBsYXllck5hbWUgID0gXCJCb3hcIjtcbiAgICBnYy5zdGF0ZS5uYW1lSW5wdXQgICA9IFwiXCI7XG4gICAgZ2Muc3RhdGUubmFtZUZvY3VzZWQgPSBmYWxzZTtcbiAgfTtcblxuICBnYy5sb3NlTGlmZSA9ICgpID0+IHtcbiAgICBnYy5zdGF0ZS5saXZlcy0tO1xuICAgIGlmIChnYy5zdGF0ZS5saXZlcyA8PSAwKSB7XG4gICAgICBnYy5zdGF0ZS5saXZlcyAgICA9IDA7XG4gICAgICBnYy5zdGF0ZS5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGdjLnJlbmRlcigpO1xuICB9O1xuXG4gIGdjLnJlbmRlciA9ICgpID0+IHtcbiAgICBnYy5oaXRBcmVhcyA9IFtdO1xuICAgIGRyYXdCYWNrZ3JvdW5kKGdjKTtcbiAgICBkcmF3TG9nbyhnYyk7XG4gICAgZHJhd0dhbWVwbGF5RnJhbWUoZ2MpO1xuXG4gICAgc3dpdGNoIChnYy5zdGF0ZS5jdXJyZW50U2NyZWVuKSB7XG4gICAgICBjYXNlIFwibWFpbm1lbnVcIjogICAgZHJhd01haW5NZW51KGdjKTsgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGV2ZWxzZWxlY3RcIjogZHJhd0xldmVsU2VsZWN0KGdjKTsgYnJlYWs7XG4gICAgICBjYXNlIFwibGV2ZWxcIjogICAgICAgZHJhd0xldmVsKGdjKTsgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbVBhbmVsKGdjKTtcblxuICAgIGlmIChnYy5zdGF0ZS5wYXVzZWQpICAgICAgIGRyYXdQYXVzZU92ZXJsYXkoZ2MpO1xuICAgIGlmIChnYy5zdGF0ZS5jb250cm9sc09wZW4pIGRyYXdDb250cm9sc092ZXJsYXkoZ2MpO1xuICAgIGlmIChnYy5zdGF0ZS5nYW1lT3ZlcikgICAgIGRyYXdHYW1lT3Zlck92ZXJsYXkoZ2MpO1xuICB9O1xuXG4gIC8vIOKUgOKUgCBjYW52YXMgcmVzaXplIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gIGNvbnN0IHJlc2l6ZUNhbnZhc2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGdhbWVDYW52YXMud2lkdGggID0gZGVidWdDYW52YXMud2lkdGggID0gdztcbiAgICBnYW1lQ2FudmFzLmhlaWdodCA9IGRlYnVnQ2FudmFzLmhlaWdodCA9IGg7XG4gIH07XG5cbiAgLy8g4pSA4pSAIGlucHV0IOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gIGNvbnN0IHRvQ2FudmFzID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCByZWN0ICAgPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjYWxlWCA9IGdhbWVDYW52YXMud2lkdGggIC8gcmVjdC53aWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSBnYW1lQ2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICB4OiAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWCxcbiAgICAgIHk6IChlLmNsaWVudFkgLSByZWN0LnRvcCkgICogc2NhbGVZLFxuICAgIH07XG4gIH07XG5cbiAgZ2FtZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRvQ2FudmFzKGUpO1xuICAgIGZvciAoY29uc3QgYXJlYSBvZiBnYy5oaXRBcmVhcykge1xuICAgICAgaWYgKHggPj0gYXJlYS54ICYmIHggPD0gYXJlYS54ICsgYXJlYS53ICYmIHkgPj0gYXJlYS55ICYmIHkgPD0gYXJlYS55ICsgYXJlYS5oKSB7XG4gICAgICAgIGFyZWEuYWN0aW9uKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZ2FtZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0b0NhbnZhcyhlKTtcbiAgICBjb25zdCBvdmVyID0gZ2MuaGl0QXJlYXMuc29tZShcbiAgICAgIChhKSA9PiB4ID49IGEueCAmJiB4IDw9IGEueCArIGEudyAmJiB5ID49IGEueSAmJiB5IDw9IGEueSArIGEuaCxcbiAgICApO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuY3Vyc29yID0gb3ZlciA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCI7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIC8vIE5hbWUgaW5wdXQgdHlwaW5nIOKAlCBpbnRlcmNlcHQgYWxsIGtleXMgd2hlbiBmb2N1c2VkXG4gICAgaWYgKGdjLnN0YXRlLm5hbWVGb2N1c2VkICYmICFnYy5zdGF0ZS5wYXVzZWQgJiYgIWdjLnN0YXRlLmNvbnRyb2xzT3Blbikge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBnYy5zdGF0ZS5wbGF5ZXJOYW1lICAgPSBnYy5zdGF0ZS5uYW1lSW5wdXQudHJpbSgpIHx8IFwiQm94XCI7XG4gICAgICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkICA9IGZhbHNlO1xuICAgICAgICBnYy5zdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgIGdjLnN0YXRlLm5hbWVJbnB1dCA9IGdjLnN0YXRlLm5hbWVJbnB1dC5zbGljZSgwLCAtMSk7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZS5rZXkubGVuZ3RoID09PSAxICYmIGdjLnN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPCAyNCkge1xuICAgICAgICBnYy5zdGF0ZS5uYW1lSW5wdXQgKz0gZS5rZXk7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBpZiAoZ2Muc3RhdGUuY29udHJvbHNPcGVuKSB7IGdjLnN0YXRlLmNvbnRyb2xzT3BlbiA9IGZhbHNlOyBnYy5yZW5kZXIoKTsgfVxuICAgICAgZWxzZSBpZiAoZ2Muc3RhdGUucGF1c2VkKSAgeyBnYy5zdGF0ZS5wYXVzZWQgPSBmYWxzZTsgICAgICAgZ2MucmVuZGVyKCk7IH1cbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICByZXNpemVDYW52YXNlcygpO1xuICAgIGdjLnJlbmRlcigpO1xuICB9KTtcblxuICAvLyDilIDilIAgY3Vyc29yIGJsaW5rIGxvb3Ag4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChnYy5zdGF0ZS5uYW1lRm9jdXNlZCkgZ2MucmVuZGVyKCk7XG4gIH0sIDUzMCk7XG5cbiAgLy8g4pSA4pSAIGltYWdlIGxvYWRpbmcg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbiAgZ2MubG9nby5vbmxvYWQgID0gKCkgPT4geyBnYy5sb2dvTG9hZGVkID0gdHJ1ZTsgIGdjLnJlbmRlcigpOyB9O1xuICBnYy5sb2dvLm9uZXJyb3IgPSAoKSA9PiB7IGdjLmxvZ29Mb2FkZWQgPSBmYWxzZTsgZ2MucmVuZGVyKCk7IH07XG5cbiAgZ2MuZ2FtZXBsYXlGcmFtZS5vbmxvYWQgID0gKCkgPT4geyBnYy5nYW1lcGxheUZyYW1lTG9hZGVkID0gdHJ1ZTsgIGdjLnJlbmRlcigpOyB9O1xuICBnYy5nYW1lcGxheUZyYW1lLm9uZXJyb3IgPSAoKSA9PiB7IGdjLmdhbWVwbGF5RnJhbWVMb2FkZWQgPSBmYWxzZTsgZ2MucmVuZGVyKCk7IH07XG5cbiAgZ2MubG9nby5zcmMgICAgICAgICAgPSBcIi9iZW5jaG1hcmsyL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICBnYy5nYW1lcGxheUZyYW1lLnNyYyA9IFwiL2JlbmNobWFyazIvYXNzZXRzL2dhbWVwbGF5LWZyYW1lLnBuZ1wiO1xuXG4gIC8vIOKUgOKUgCBzdGFydHVwIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gIHJlc2l6ZUNhbnZhc2VzKCk7XG4gIGdjLnJlbmRlcigpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgY29uc3QgZHJhd0NvbnRyb2xzT3ZlcmxheSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIGNvbnN0IHBhZCA9IHRvcEJveFdpZHRoICogMC4wNTtcbiAgY29uc3Qgb3ggPSB0b3BCb3hYICsgcGFkO1xuICBjb25zdCBveSA9IHRvcEJveFkgKyBwYWQ7XG4gIGNvbnN0IG93ID0gdG9wQm94V2lkdGggLSBwYWQgKiAyO1xuICBjb25zdCBvaCA9IHRvcEJveEhlaWdodCAtIHBhZCAqIDI7XG4gIGNvbnN0IGN4ID0gb3ggKyBvdyAvIDI7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQub3ZlcmxheUJnO1xuICBjdHguZmlsbFJlY3Qob3gsIG95LCBvdywgb2gpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5zdHJva2VSZWN0KG94LCBveSwgb3csIG9oKTtcblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkIDMwcHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJCQVNJQyBDT05UUk9MU1wiLCBjeCwgb3kgKyBvaCAqIDAuMTEpO1xuXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuZGl2aWRlcjtcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyhveCArIG93ICogMC4wNiwgb3kgKyBvaCAqIDAuMik7XG4gIGN0eC5saW5lVG8ob3ggKyBvdyAqIDAuOTQsIG95ICsgb2ggKiAwLjIpO1xuICBjdHguc3Ryb2tlKCk7XG5cbiAgY29uc3QgY29udHJvbHMgPSBbXG4gICAgeyBrZXk6IFwiVyAvIEEgLyBTIC8gRFwiLCBkZXNjOiBcIk1vdmUgLyBOYXZpZ2F0ZVwiIH0sXG4gICAgeyBrZXk6IFwiQ0xJQ0tcIiwgZGVzYzogXCJJbnRlcmFjdCAvIFNlbGVjdCBhbnN3ZXJcIiB9LFxuICAgIHsga2V5OiBcIkVTQ1wiLCBkZXNjOiBcIkNsb3NlIHRoaXMgcGFuZWxcIiB9LFxuICBdO1xuXG4gIGNvbnN0IGxpc3RZID0gb3kgKyBvaCAqIDAuMjk7XG4gIGNvbnN0IHJvd0ggPSBvaCAqIDAuMTU7XG4gIGNvbnN0IGtleUJveFcgPSBvdyAqIDAuMztcbiAgY29uc3Qga2V5Qm94SCA9IHJvd0ggKiAwLjc7XG4gIGNvbnN0IGtleUJveFggPSBveCArIG93ICogMC4wODtcbiAgY29uc3QgZGVzY1ggPSBveCArIG93ICogMC41O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCByb3dZID0gbGlzdFkgKyBpICogcm93SDtcbiAgICBjb25zdCBib3hDZW50ZXJZID0gcm93WSArIGtleUJveEggLyAyO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHN0YXRlLmRhcmtNb2RlID8gXCIjMmEyYTJhXCIgOiBcIiNkZGRkZGRcIjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgY3R4LmZpbGxSZWN0KGtleUJveFgsIHJvd1ksIGtleUJveFcsIGtleUJveEgpO1xuICAgIGN0eC5zdHJva2VSZWN0KGtleUJveFgsIHJvd1ksIGtleUJveFcsIGtleUJveEgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAxNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBjb250cm9sc1tpXS5rZXksXG4gICAgICBrZXlCb3hYICsga2V5Qm94VyAvIDIsXG4gICAgICBib3hDZW50ZXJZLFxuICAgICAga2V5Qm94VyAtIDgsXG4gICAgKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnTWlkO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBjdHguZm9udCA9IGAxN3B4ICR7Ym9keUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoY29udHJvbHNbaV0uZGVzYywgZGVzY1gsIGJveENlbnRlclkpO1xuICB9XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XG4gIGN0eC5maWxsVGV4dChcIkNvbnRyb2xzIG1heSB2YXJ5IGJldHdlZW4gbGV2ZWxzLlwiLCBjeCwgb3kgKyBvaCAqIDAuODQpO1xuXG4gIC8vIENsZWFyIHVuZGVybHlpbmcgaGl0IGFyZWFzXG4gIGdjLmhpdEFyZWFzID0gW107XG5cbiAgY29uc3QgY2xvc2VXID0gMTQwO1xuICBjb25zdCBjbG9zZUggPSA0MDtcbiAgZHJhd0J1dHRvbihcbiAgICBnYyxcbiAgICBcIkNMT1NFICDinJVcIixcbiAgICBjeCAtIGNsb3NlVyAvIDIsXG4gICAgb3kgKyBvaCAqIDAuOSxcbiAgICBjbG9zZVcsXG4gICAgY2xvc2VILFxuICAgICgpID0+IHtcbiAgICAgIHN0YXRlLmNvbnRyb2xzT3BlbiA9IGZhbHNlO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSxcbiAgICAxNyxcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgY29uc3QgZHJhd0dhbWVPdmVyT3ZlcmxheSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIGggfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCA9IHcgLyAyO1xuICBjb25zdCBjeSA9IGggLyAyO1xuXG4gIC8vIEZ1bGwtY2FudmFzIGRpbVxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuODIpXCI7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcblxuICAvLyBQYW5lbFxuICBjb25zdCBwYW5lbFcgPSBNYXRoLm1pbih3ICogMC41NSwgNTIwKTtcbiAgY29uc3QgcGFuZWxIID0gaCAqIDAuNTI7XG4gIGNvbnN0IHBhbmVsWCA9IGN4IC0gcGFuZWxXIC8gMjtcbiAgY29uc3QgcGFuZWxZID0gY3kgLSBwYW5lbEggLyAyO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiMwYTBhMGFcIjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCIjY2MyMjIyXCI7XG4gIGN0eC5saW5lV2lkdGggPSAzO1xuICBjdHguZmlsbFJlY3QocGFuZWxYLCBwYW5lbFksIHBhbmVsVywgcGFuZWxIKTtcbiAgY3R4LnN0cm9rZVJlY3QocGFuZWxYLCBwYW5lbFksIHBhbmVsVywgcGFuZWxIKTtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjY2MyMjIyXCI7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCA1MnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIGN4LCBwYW5lbFkgKyBwYW5lbEggKiAwLjIyKTtcblxuICBjdHguZmlsbFN0eWxlID0gXCIjODg4ODg4XCI7XG4gIGN0eC5mb250ID0gYDIwcHggJHtib2R5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXG4gICAgYEJldHRlciBsdWNrIG5leHQgdGltZSwgJHtzdGF0ZS5wbGF5ZXJOYW1lfS5gLFxuICAgIGN4LFxuICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNDIsXG4gICAgcGFuZWxXICogMC44MixcbiAgKTtcblxuICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMzMzMzMzNcIjtcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbyhwYW5lbFggKyBwYW5lbFcgKiAwLjEsIHBhbmVsWSArIHBhbmVsSCAqIDAuNTQpO1xuICBjdHgubGluZVRvKHBhbmVsWCArIHBhbmVsVyAqIDAuOSwgcGFuZWxZICsgcGFuZWxIICogMC41NCk7XG4gIGN0eC5zdHJva2UoKTtcblxuICBnYy5oaXRBcmVhcyA9IFtdO1xuXG4gIGNvbnN0IGJ0blcgPSAyMDA7XG4gIGNvbnN0IGJ0bkggPSA0ODtcblxuICBpZiAoc3RhdGUucGxheU1vZGUgPT09IFwicGxheVwiKSB7XG4gICAgZHJhd0J1dHRvbihcbiAgICAgIGdjLFxuICAgICAgXCJUUlkgQUdBSU5cIixcbiAgICAgIGN4IC0gYnRuVyAvIDIsXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjYxLFxuICAgICAgYnRuVyxcbiAgICAgIGJ0bkgsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMTtcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfSxcbiAgICAgIDIwLFxuICAgICk7XG5cbiAgICBkcmF3QnV0dG9uKFxuICAgICAgZ2MsXG4gICAgICBcIk1BSU4gTUVOVVwiLFxuICAgICAgY3ggLSBidG5XIC8gMixcbiAgICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNzgsXG4gICAgICBidG5XLFxuICAgICAgYnRuSCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICB9LFxuICAgICAgMjAsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBkcmF3QnV0dG9uKFxuICAgICAgZ2MsXG4gICAgICBcIk1BSU4gTUVOVVwiLFxuICAgICAgY3ggLSBidG5XIC8gMixcbiAgICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNjgsXG4gICAgICBidG5XLFxuICAgICAgYnRuSCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICB9LFxuICAgICAgMjAsXG4gICAgKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuXG5leHBvcnQgY29uc3QgZHJhd1BhdXNlT3ZlcmxheSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IHBhZCA9IHRvcEJveFdpZHRoICogMC4wNTtcbiAgY29uc3Qgb3ggPSB0b3BCb3hYICsgcGFkO1xuICBjb25zdCBveSA9IHRvcEJveFkgKyBwYWQ7XG4gIGNvbnN0IG93ID0gdG9wQm94V2lkdGggLSBwYWQgKiAyO1xuICBjb25zdCBvaCA9IHRvcEJveEhlaWdodCAtIHBhZCAqIDI7XG4gIGNvbnN0IGN4ID0gb3ggKyBvdyAvIDI7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQub3ZlcmxheUJnO1xuICBjdHguZmlsbFJlY3Qob3gsIG95LCBvdywgb2gpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5zdHJva2VSZWN0KG94LCBveSwgb3csIG9oKTtcblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkIDM4cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJQQVVTRURcIiwgY3gsIG95ICsgb2ggKiAwLjE4KTtcblxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XG4gIGN0eC5saW5lV2lkdGggPSAxO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8ob3ggKyBvdyAqIDAuMSwgb3kgKyBvaCAqIDAuMyk7XG4gIGN0eC5saW5lVG8ob3ggKyBvdyAqIDAuOSwgb3kgKyBvaCAqIDAuMyk7XG4gIGN0eC5zdHJva2UoKTtcblxuICAvLyBDbGVhciBhbGwgdW5kZXJseWluZyBoaXQgYXJlYXMgc28gdGhlIGdhbWUgYmVoaW5kIGlzIGJsb2NrZWRcbiAgZ2MuaGl0QXJlYXMgPSBbXTtcblxuICBjb25zdCBidG5XID0gMjIwO1xuICBjb25zdCBidG5IID0gNDg7XG4gIGNvbnN0IGJ0blggPSBjeCAtIGJ0blcgLyAyO1xuXG4gIGRyYXdCdXR0b24oZ2MsIFwiUkVTVU1FXCIsIGJ0blgsIG95ICsgb2ggKiAwLjM2LCBidG5XLCBidG5ILCAoKSA9PiB7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRyYXdCdXR0b24oZ2MsIFwiUVVJVCBUTyBNRU5VXCIsIGJ0blgsIG95ICsgb2ggKiAwLjUzLCBidG5XLCBidG5ILCAoKSA9PiB7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgc3RhdGUubGl2ZXMgPSAzO1xuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZUxhYmVsID0gc3RhdGUuZGFya01vZGUgPyBcIuKYgCAgTElHSFQgTU9ERVwiIDogXCLwn4yZICBEQVJLIE1PREVcIjtcbiAgZHJhd0J1dHRvbihcbiAgICBnYyxcbiAgICB0b2dnbGVMYWJlbCxcbiAgICBidG5YLFxuICAgIG95ICsgb2ggKiAwLjcsXG4gICAgYnRuVyxcbiAgICBidG5ILFxuICAgICgpID0+IHtcbiAgICAgIHN0YXRlLmRhcmtNb2RlID0gIXN0YXRlLmRhcmtNb2RlO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSxcbiAgICAxOCxcbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IExFVkVMX0RBVEEgfSBmcm9tIFwiLi9sZXZlbERhdGFcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUgfSA9IGdjO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSB0LmJnO1xuICBjdHguZmlsbFN0eWxlID0gdC5iZztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3TG9nbyA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBsb2dvLCBsb2dvTG9hZGVkLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgbG9nb1kgfSA9IGdldExheW91dChjdHgpO1xuICBpZiAobG9nb0xvYWRlZCAmJiBsb2dvLm5hdHVyYWxXaWR0aCA+IDApIHtcbiAgICBjb25zdCBsb2dvVyA9IHcgKiAwLjE1O1xuICAgIGNvbnN0IGxvZ29IID0gbG9nb1cgKiAobG9nby5uYXR1cmFsSGVpZ2h0IC8gbG9nby5uYXR1cmFsV2lkdGgpO1xuICAgIGN0eC5kcmF3SW1hZ2UobG9nbywgdyAvIDIgLSBsb2dvVyAvIDIsIGxvZ29ZIC0gbG9nb0ggLyAyLCBsb2dvVywgbG9nb0gpO1xuICB9IGVsc2Uge1xuICAgIGN0eC5maWxsU3R5bGUgPSBnZXRUaGVtZShzdGF0ZSkuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCA1NHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoXCJPdXRzaWRlLXRoZS1Cb3hcIiwgdyAvIDIsIGxvZ29ZKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdHYW1lcGxheUZyYW1lID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGdhbWVwbGF5RnJhbWUsIGdhbWVwbGF5RnJhbWVMb2FkZWQgfSA9IGdjO1xuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBpZiAoZ2FtZXBsYXlGcmFtZUxvYWRlZCAmJiBnYW1lcGxheUZyYW1lLm5hdHVyYWxXaWR0aCA+IDApIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZ2FtZXBsYXlGcmFtZSxcbiAgICAgIDQ0MCxcbiAgICAgIDE4MCxcbiAgICAgIDY4OCxcbiAgICAgIDU3MixcbiAgICAgIHRvcEJveFgsXG4gICAgICB0b3BCb3hZLFxuICAgICAgdG9wQm94V2lkdGgsXG4gICAgICB0b3BCb3hIZWlnaHQsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBnZXRUaGVtZShzdGF0ZSkuc3Ryb2tlO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIGN0eC5zdHJva2VSZWN0KHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQpO1xuICB9XG59O1xuXG4vKiogRHJhdyBhIGxhYmVsbGVkIGJ1dHRvbiBhbmQgcmVnaXN0ZXIgaXQgYXMgYSBoaXQgYXJlYS4gKi9cbmV4cG9ydCBjb25zdCBkcmF3QnV0dG9uID0gKFxuICBnYzogR2FtZUNvbnRleHQsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICB3OiBudW1iZXIsXG4gIGg6IG51bWJlcixcbiAgYWN0aW9uOiAoKSA9PiB2b2lkLFxuICBmb250U2l6ZSA9IDIyLFxuKSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gIGN0eC5zdHJva2VSZWN0KHgsIHksIHcsIGgpO1xuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkICR7Zm9udFNpemV9cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQobGFiZWwsIHggKyB3IC8gMiwgeSArIGggLyAyLCB3IC0gMTYpO1xuICBnYy5oaXRBcmVhcy5wdXNoKHsgeCwgeSwgdywgaCwgYWN0aW9uIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdCb3R0b21QYW5lbCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIGNvbnRlbnRYLCBjb250ZW50V2lkdGgsIGJvdHRvbUJveFksIGJvdHRvbUJveEhlaWdodCB9ID1cbiAgICBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcblxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gIGN0eC5zdHJva2VSZWN0KGNvbnRlbnRYLCBib3R0b21Cb3hZLCBjb250ZW50V2lkdGgsIGJvdHRvbUJveEhlaWdodCk7XG5cbiAgY29uc3QgY2VudGVyWCA9IHcgLyAyO1xuICBjb25zdCB0ZXh0V2lkdGggPSBjb250ZW50V2lkdGggKiAwLjc0O1xuXG4gIGNvbnN0IGxldmVsRGF0YSA9XG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiXG4gICAgICA/IExFVkVMX0RBVEFbc3RhdGUuY3VycmVudExldmVsIC0gMV1cbiAgICAgIDogeyB0aXRsZTogc3RhdGUuc3RvcnlUaXRsZSwgbGluZXM6IHN0YXRlLnN0b3J5TGluZXMgfTtcblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuXG4gIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChsZXZlbERhdGEudGl0bGUsIGNlbnRlclgsIGJvdHRvbUJveFkgKyAxOCwgdGV4dFdpZHRoKTtcblxuICBjdHguZm9udCA9IGAyMHB4ICR7Ym9keUZvbnR9YDtcbiAgY29uc3QgbGluZUdhcCA9IDMwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsRGF0YS5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGN0eC5maWxsVGV4dChcbiAgICAgIGxldmVsRGF0YS5saW5lc1tpXSxcbiAgICAgIGNlbnRlclgsXG4gICAgICBib3R0b21Cb3hZICsgNjggKyBpICogbGluZUdhcCxcbiAgICAgIHRleHRXaWR0aCxcbiAgICApO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0xldmVsSFVEID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgcGFkWCA9IHRvcEJveFdpZHRoICogMC4wNTtcbiAgY29uc3QgcGFkWSA9IHRvcEJveEhlaWdodCAqIDAuMDg7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgLy8gUS5YIOKAlCB0b3AgbGVmdFxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAyNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KGBRLiR7c3RhdGUuY3VycmVudExldmVsfWAsIHRvcEJveFggKyBwYWRYLCB0b3BCb3hZICsgcGFkWSk7XG5cbiAgLy8gUGF1c2UgYnV0dG9uIOKAlCB0b3AgcmlnaHRcbiAgY29uc3QgcGF1c2VXID0gNDg7XG4gIGNvbnN0IHBhdXNlSCA9IDM0O1xuICBjb25zdCBwYXVzZVggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggLSBwYWRYIC0gcGF1c2VXO1xuICBjb25zdCBwYXVzZVkgPSB0b3BCb3hZICsgcGFkWSAtIHBhdXNlSCAvIDI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICBjdHgubGluZVdpZHRoID0gMjtcbiAgY3R4LnN0cm9rZVJlY3QocGF1c2VYLCBwYXVzZVksIHBhdXNlVywgcGF1c2VIKTtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAxNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KFwiSUlcIiwgcGF1c2VYICsgcGF1c2VXIC8gMiwgcGF1c2VZICsgcGF1c2VIIC8gMik7XG4gIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgIHg6IHBhdXNlWCxcbiAgICB5OiBwYXVzZVksXG4gICAgdzogcGF1c2VXLFxuICAgIGg6IHBhdXNlSCxcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LFxuICB9KTtcblxuICAvLyBMaXZlcyDigJQgYm90dG9tIHJpZ2h0XG4gIGNvbnN0IGhlYXJ0U2l6ZSA9IDI0O1xuICBjb25zdCBoZWFydEdhcCA9IDY7XG4gIGNvbnN0IGxpdmVzWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgLSBwYWRZO1xuICBjb25zdCB0b3RhbFcgPSAzICogaGVhcnRTaXplICsgMiAqIGhlYXJ0R2FwO1xuICBjb25zdCBsaXZlc1ggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggLSBwYWRYIC0gdG90YWxXO1xuXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGAke2hlYXJ0U2l6ZX1weCBzYW5zLXNlcmlmYDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjdHguZmlsbFN0eWxlID1cbiAgICAgIGkgPCBzdGF0ZS5saXZlcyA/IFwiI2UwMzAzMFwiIDogc3RhdGUuZGFya01vZGUgPyBcIiM0NDQ0NDRcIiA6IFwiI2JiYmJiYlwiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBjdHguZmlsbFRleHQoXCLimaVcIiwgbGl2ZXNYICsgaSAqIChoZWFydFNpemUgKyBoZWFydEdhcCksIGxpdmVzWSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9ICAgIGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGdldFRoZW1lIH0gICAgICAgZnJvbSAnLi4vdGhlbWUnO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gICAgICBmcm9tICcuLi9sYXlvdXQnO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiwgZHJhd0xldmVsSFVEIH0gZnJvbSAnLi4vcmVuZGVyZXInO1xuaW1wb3J0IHsgZHJhd05hbWVFbnRyeSB9ICBmcm9tICcuLi9sZXZlbHMvTGV2ZWwxJztcbmltcG9ydCB7IGRyYXdMZXZlbDIgfSAgICAgZnJvbSAnLi4vbGV2ZWxzL0xldmVsMic7XG5pbXBvcnQgeyBkcmF3TGV2ZWwzIH0gICAgIGZyb20gJy4uL2xldmVscy9MZXZlbDMnO1xuaW1wb3J0IHsgTEVWRUxfQ09VTlQgfSAgICBmcm9tICcuLi9sZXZlbERhdGEnO1xuXG5leHBvcnQgY29uc3QgZHJhd0xldmVsID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IGN4ICA9IHcgLyAyO1xuICBjb25zdCBsdmwgPSBzdGF0ZS5jdXJyZW50TGV2ZWw7XG4gIGNvbnN0IHQgICA9IGdldFRoZW1lKHN0YXRlKTtcblxuICAvLyBMZXZlbCAxIOKAlCBuYW1lIGVudHJ5XG4gIGlmIChsdmwgPT09IDEpIHtcbiAgICBkcmF3TmFtZUVudHJ5KGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIExldmVsIDIg4oCUIGFyaXRobWV0aWMgcXVlc3Rpb25cbiAgaWYgKGx2bCA9PT0gMikge1xuICAgIGRyYXdMZXZlbDIoZ2MpO1xuICAgIGRyYXdMZXZlbEhVRChnYyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gTGV2ZWwgMyDigJQgY2xpY2sgdGhlIGRvdFxuICBpZiAobHZsID09PSAzKSB7XG4gICAgZHJhd0xldmVsMyhnYyk7XG4gICAgZHJhd0xldmVsSFVEKGdjKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQbGFjZWhvbGRlciBmb3IgdW5maW5pc2hlZCBsZXZlbHNcbiAgY3R4LmZpbGxTdHlsZSAgICA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gICAgPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICBjdHguZm9udCA9IGBib2xkIDM0cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoYExFVkVMICR7bHZsfWAsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNik7XG5cbiAgY3R4LmZvbnQgICAgICA9IGAyMnB4ICR7Ym9keUZvbnR9YDtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XG4gIGN0eC5maWxsVGV4dChcIlRoaXMgbGV2ZWwgaXMgdW5kZXIgY29uc3RydWN0aW9uLlwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzgsIHRvcEJveFdpZHRoICogMC42KTtcblxuICBjdHguZm9udCAgICAgID0gYDE2cHggJHtib2R5Rm9udH1gO1xuICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcbiAgY3R4LmZpbGxUZXh0KFwiUXVlc3Rpb25zLCBjaG9pY2VzLCBhbmQgaW50ZXJhY3Rpb25zIHdpbGwgYmUgd2lyZWQgaW4gaGVyZS5cIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjUyLCB0b3BCb3hXaWR0aCAqIDAuNik7XG5cbiAgLy8gTmF2IHJvdyDigJQgbGV2ZWwgc2VsZWN0IHBhdGh3YXkgb25seVxuICBpZiAoc3RhdGUucGxheU1vZGUgPT09IFwibGV2ZWxzZWxlY3RcIikge1xuICAgIGNvbnN0IG5hdkJ0bkggPSA0MjtcbiAgICBjb25zdCBuYXZCdG5XID0gMTUwO1xuICAgIGNvbnN0IG5hdlkgICAgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC43OTtcblxuICAgIGlmIChsdmwgPiAxKSB7XG4gICAgICBkcmF3QnV0dG9uKGdjLCBcIuKGkCBQUkVWXCIsIHRvcEJveFggKyB0b3BCb3hXaWR0aCAqIDAuMDUsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsLS07XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfSwgMTgpO1xuICAgIH1cblxuICAgIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGN4IC0gbmF2QnRuVyAvIDIsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xuICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxzZWxlY3RcIjtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sIDE2KTtcblxuICAgIGlmIChsdmwgPCBMRVZFTF9DT1VOVCkge1xuICAgICAgZHJhd0J1dHRvbihnYywgXCJORVhUIOKGklwiLCB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjc3LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0sIDE4KTtcbiAgICB9XG4gIH1cblxuICBkcmF3TGV2ZWxIVUQoZ2MpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSAgICBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgeyBnZXRMYXlvdXQgfSAgIGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gIGZyb20gJy4uL3JlbmRlcmVyJztcbmltcG9ydCB7IExFVkVMX0NPVU5UIH0gZnJvbSAnLi4vbGV2ZWxEYXRhJztcblxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbFNlbGVjdCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCA9IHcgLyAyO1xuICBjb25zdCB0ICA9IGdldFRoZW1lKHN0YXRlKTtcblxuICBjdHguZmlsbFN0eWxlICAgID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiAgICA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCAgICAgICAgID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChcIkxFVkVMIFNFTEVDVFwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMSk7XG5cbiAgLy8gNS1jb2x1bW4gw5cgMi1yb3cgZ3JpZFxuICBjb25zdCBjb2xzICA9IDU7XG4gIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggICogMC4xMztcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjI0O1xuICBjb25zdCBoR2FwICA9ICh0b3BCb3hXaWR0aCAqIDAuNzggLSB0aWxlVyAqIGNvbHMpIC8gKGNvbHMgLSAxKTtcbiAgY29uc3QgdkdhcCAgPSB0b3BCb3hIZWlnaHQgKiAwLjA3O1xuICBjb25zdCBncmlkVyA9IHRpbGVXICogY29scyArIGhHYXAgKiAoY29scyAtIDEpO1xuICBjb25zdCBncmlkWCA9IGN4IC0gZ3JpZFcgLyAyO1xuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjIxO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTEVWRUxfQ09VTlQ7IGkrKykge1xuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xuICAgIGNvbnN0IHR4ICA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XG4gICAgY29uc3QgdHkgID0gZ3JpZFkgKyByb3cgKiAodGlsZUggKyB2R2FwKTtcbiAgICBjb25zdCBsdmwgPSBpICsgMTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSAgPSB0LnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoICAgID0gMztcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XG5cbiAgICBjdHguZmlsbFN0eWxlICAgID0gdC5mZztcbiAgICBjdHgudGV4dEFsaWduICAgID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICAgIGN0eC5mb250ID0gYGJvbGQgMjhweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KGAke2x2bH1gLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuMzgpO1xuXG4gICAgY3R4LmZvbnQgICAgICA9IGAxMnB4ICR7Ym9keUZvbnR9YDtcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcbiAgICBjdHguZmlsbFRleHQoYExFVkVMICR7bHZsfWAsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIICogMC43KTtcblxuICAgIGNvbnN0IGNhcHR1cmVkID0gbHZsO1xuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgICAgeDogdHgsIHk6IHR5LCB3OiB0aWxlVywgaDogdGlsZUgsXG4gICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsICA9IGNhcHR1cmVkO1xuICAgICAgICBzdGF0ZS5wbGF5TW9kZSAgICAgID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgICAgICBzdGF0ZS5nYW1lT3ZlciAgICAgID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxpdmVzICAgICAgICAgPSAzO1xuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbFwiO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyBCYWNrIGJ1dHRvblxuICBjb25zdCBiYWNrVyA9IDE1MDtcbiAgY29uc3QgYmFja0ggPSA0MjtcbiAgY29uc3QgYmFja1ggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA0O1xuICBjb25zdCBiYWNrWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjgyO1xuICBkcmF3QnV0dG9uKGdjLCBcIuKGkCBCQUNLXCIsIGJhY2tYLCBiYWNrWSwgYmFja1csIGJhY2tILCAoKSA9PiB7XG4gICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfSwgMTgpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSAgICBmcm9tICcuLi90aGVtZSc7XG5pbXBvcnQgeyBnZXRMYXlvdXQgfSAgIGZyb20gJy4uL2xheW91dCc7XG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gIGZyb20gJy4uL3JlbmRlcmVyJztcblxuZXhwb3J0IGNvbnN0IGRyYXdNYWluTWVudSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgdG9wSW5uZXJYLCB0b3BJbm5lclksIHRvcElubmVyV2lkdGgsIHRvcElubmVySGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgdCAgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgY3R4LmZpbGxTdHlsZSAgICA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gICAgPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICBjdHguZm9udCA9IGBib2xkIDQycHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJNQUlOIE1FTlVcIiwgY3gsIHRvcElubmVyWSArIHRvcElubmVySGVpZ2h0ICogMC4xNSk7XG5cbiAgY29uc3QgYnRuVyAgID0gTWF0aC5taW4oMzAwLCB0b3BJbm5lcldpZHRoICogMC43OCk7XG4gIGNvbnN0IGJ0bkggICA9IDUwO1xuICBjb25zdCBidG5YICAgPSBjeCAtIGJ0blcgLyAyO1xuICBjb25zdCBzdGFydFkgPSB0b3BJbm5lclkgKyB0b3BJbm5lckhlaWdodCAqIDAuMzI7XG4gIGNvbnN0IHN0cmlkZSA9IGJ0bkggKyAxNDtcblxuICBkcmF3QnV0dG9uKGdjLCBcIlNUQVJUIEVYQU1cIiwgYnRuWCwgc3RhcnRZLCBidG5XLCBidG5ILCAoKSA9PiB7XG4gICAgc3RhdGUuY3VycmVudExldmVsID0gMTtcbiAgICBzdGF0ZS5saXZlcyAgICAgICAgPSAzO1xuICAgIHN0YXRlLnBhdXNlZCAgICAgICA9IGZhbHNlO1xuICAgIHN0YXRlLmdhbWVPdmVyICAgICA9IGZhbHNlO1xuICAgIHN0YXRlLnBsYXlNb2RlICAgICA9IFwicGxheVwiO1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsXCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGJ0blgsIHN0YXJ0WSArIHN0cmlkZSwgYnRuVywgYnRuSCwgKCkgPT4ge1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xuXG4gIGRyYXdCdXR0b24oZ2MsIFwiQ09OVFJPTFNcIiwgYnRuWCwgc3RhcnRZICsgc3RyaWRlICogMiwgYnRuVywgYnRuSCwgKCkgPT4ge1xuICAgIHN0YXRlLmNvbnRyb2xzT3BlbiA9IHRydWU7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xufTtcbiIsImltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRUaGVtZSA9IChzdGF0ZTogR2FtZVN0YXRlKSA9PlxuICBzdGF0ZS5kYXJrTW9kZVxuICAgID8ge1xuICAgICAgICBiZzogXCIjMTExMTExXCIsXG4gICAgICAgIGZnOiBcIiNmZmZmZmZcIixcbiAgICAgICAgZmdNaWQ6IFwiI2NjY2NjY1wiLFxuICAgICAgICBmZ0RpbTogXCIjODg4ODg4XCIsXG4gICAgICAgIHN0cm9rZTogXCIjZmZmZmZmXCIsXG4gICAgICAgIG92ZXJsYXlCZzogXCJyZ2JhKDEwLDEwLDEwLDAuOTApXCIsXG4gICAgICAgIGRpdmlkZXI6IFwiIzQ0NDQ0NFwiLFxuICAgICAgfVxuICAgIDoge1xuICAgICAgICBiZzogXCIjZjBmMGYwXCIsXG4gICAgICAgIGZnOiBcIiMxMTExMTFcIixcbiAgICAgICAgZmdNaWQ6IFwiIzMzMzMzM1wiLFxuICAgICAgICBmZ0RpbTogXCIjNjY2NjY2XCIsXG4gICAgICAgIHN0cm9rZTogXCIjMTExMTExXCIsXG4gICAgICAgIG92ZXJsYXlCZzogXCJyZ2JhKDIyMCwyMjAsMjIwLDAuOTMpXCIsXG4gICAgICAgIGRpdmlkZXI6IFwiI2FhYWFhYVwiLFxuICAgICAgfTtcbiJdfQ==
