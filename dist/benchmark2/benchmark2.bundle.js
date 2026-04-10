(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

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
  var logo = new Image();
  var gameplayFrame = new Image();
  var logoLoaded = false;
  var gameplayFrameLoaded = false;
  var state = {
    currentScreen: "mainmenu",
    currentLevel: 1,
    controlsOpen: false,
    storyTitle: "WELCOME TO OUTSIDE-THE-BOX",
    storyLines: ["Nothing in this world is as straightforward as it first appears.", "Each level presents what looks like a simple task, question, or instruction.", "But the obvious answer is often the wrong one.", "Read carefully. Think differently. Break the pattern."]
  };
  var LEVEL_COUNT = 10;
  var hitAreas = [];
  var displayFont = "\"Trebuchet MS\", \"Verdana\", sans-serif";
  var bodyFont = "\"Trebuchet MS\", \"Arial\", sans-serif";

  // ── canvas helpers ──────────────────────────────────────────────────────────

  var resizeCanvases = function resizeCanvases() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    gameCanvas.width = debugCanvas.width = w;
    gameCanvas.height = debugCanvas.height = h;
  };
  var getLayout = function getLayout() {
    var w = gameCanvas.width;
    var h = gameCanvas.height;
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

  /** Map a mouse event's client position to canvas pixel coordinates. */
  var toCanvas = function toCanvas(e) {
    var rect = gameCanvas.getBoundingClientRect();
    var scaleX = gameCanvas.width / rect.width;
    var scaleY = gameCanvas.height / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  // ── drawing primitives ──────────────────────────────────────────────────────

  var drawBackground = function drawBackground() {
    ctx.fillStyle = "#111111";
    ctx.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
  };
  var drawLogo = function drawLogo() {
    var _getLayout = getLayout(),
      w = _getLayout.w,
      logoY = _getLayout.logoY;
    if (logoLoaded && logo.naturalWidth > 0) {
      var logoW = w * 0.15;
      var logoH = logoW * (logo.naturalHeight / logo.naturalWidth);
      ctx.drawImage(logo, w / 2 - logoW / 2, logoY - logoH / 2, logoW, logoH);
    } else {
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 54px ".concat(displayFont);
      ctx.fillText("Outside-the-Box", w / 2, logoY);
    }
  };
  var drawGameplayFrame = function drawGameplayFrame() {
    var _getLayout2 = getLayout(),
      topBoxX = _getLayout2.topBoxX,
      topBoxY = _getLayout2.topBoxY,
      topBoxWidth = _getLayout2.topBoxWidth,
      topBoxHeight = _getLayout2.topBoxHeight;
    if (gameplayFrameLoaded && gameplayFrame.naturalWidth > 0) {
      // Source region clipped to the actual frame corners (analysed: TL 440,180 → BR 1128,752)
      ctx.drawImage(gameplayFrame, 440, 180, 688, 572, topBoxX, topBoxY, topBoxWidth, topBoxHeight);
    } else {
      // Fallback white border when image hasn't loaded
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4;
      ctx.strokeRect(topBoxX, topBoxY, topBoxWidth, topBoxHeight);
    }
  };
  var drawBottomPanel = function drawBottomPanel() {
    var _getLayout3 = getLayout(),
      w = _getLayout3.w,
      contentX = _getLayout3.contentX,
      contentWidth = _getLayout3.contentWidth,
      bottomBoxY = _getLayout3.bottomBoxY,
      bottomBoxHeight = _getLayout3.bottomBoxHeight;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 4;
    ctx.strokeRect(contentX, bottomBoxY, contentWidth, bottomBoxHeight);
    var centerX = w / 2;
    var textWidth = contentWidth * 0.74;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.font = "bold 30px ".concat(displayFont);
    ctx.fillText(state.storyTitle, centerX, bottomBoxY + 18, textWidth);
    ctx.font = "20px ".concat(bodyFont);
    var lineGap = 30;
    for (var i = 0; i < state.storyLines.length; i++) {
      ctx.fillText(state.storyLines[i], centerX, bottomBoxY + 68 + i * lineGap, textWidth);
    }
  };

  /** Draw a labelled button and register it as a hit area. */
  var drawButton = function drawButton(label, x, y, w, h, action) {
    var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 22;
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold ".concat(fontSize, "px ").concat(displayFont);
    ctx.fillText(label, x + w / 2, y + h / 2, w - 16);
    hitAreas.push({
      x: x,
      y: y,
      w: w,
      h: h,
      action: action
    });
  };

  // ── screens ─────────────────────────────────────────────────────────────────

  var drawMainMenu = function drawMainMenu() {
    var _getLayout4 = getLayout(),
      w = _getLayout4.w,
      topInnerX = _getLayout4.topInnerX,
      topInnerY = _getLayout4.topInnerY,
      topInnerWidth = _getLayout4.topInnerWidth,
      topInnerHeight = _getLayout4.topInnerHeight;
    var cx = w / 2;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 42px ".concat(displayFont);
    ctx.fillText("MAIN MENU", cx, topInnerY + topInnerHeight * 0.08);
    ctx.font = "20px ".concat(bodyFont);
    ctx.fillText("A game built around misdirection, observation, and weird logic.", cx, topInnerY + topInnerHeight * 0.22, topInnerWidth * 0.95);
    var btnW = Math.min(300, topInnerWidth * 0.78);
    var btnH = 50;
    var btnX = cx - btnW / 2;
    var startY = topInnerY + topInnerHeight * 0.36;
    var btnGap = 14;
    var stride = btnH + btnGap;
    drawButton("PLAY", btnX, startY, btnW, btnH, function () {
      state.currentLevel = 1;
      state.currentScreen = "level";
      render();
    });
    drawButton("LEVEL SELECT", btnX, startY + stride, btnW, btnH, function () {
      state.currentScreen = "levelselect";
      render();
    });
    drawButton("CONTROLS", btnX, startY + stride * 2, btnW, btnH, function () {
      state.controlsOpen = true;
      render();
    });
  };
  var drawLevelSelect = function drawLevelSelect() {
    var _getLayout5 = getLayout(),
      w = _getLayout5.w,
      topBoxX = _getLayout5.topBoxX,
      topBoxY = _getLayout5.topBoxY,
      topBoxWidth = _getLayout5.topBoxWidth,
      topBoxHeight = _getLayout5.topBoxHeight;
    var cx = w / 2;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 36px ".concat(displayFont);
    ctx.fillText("LEVEL SELECT", cx, topBoxY + topBoxHeight * 0.1);

    // 5-column × 2-row grid
    var cols = 5;
    var rows = 2;
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
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.strokeRect(tx, ty, tileW, tileH);
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 28px ".concat(displayFont);
      ctx.fillText("".concat(lvl), tx + tileW / 2, ty + tileH * 0.38);
      ctx.font = "12px ".concat(bodyFont);
      ctx.fillStyle = "#bbbbbb";
      ctx.fillText("LEVEL ".concat(lvl), tx + tileW / 2, ty + tileH * 0.7);
      var captured = lvl;
      hitAreas.push({
        x: tx,
        y: ty,
        w: tileW,
        h: tileH,
        action: function action() {
          state.currentLevel = captured;
          state.currentScreen = "level";
          render();
        }
      });
    };
    for (var i = 0; i < LEVEL_COUNT; i++) {
      _loop();
    }

    // Back button
    var backH = 42;
    var backW = 150;
    var backX = topBoxX + topBoxWidth * 0.04;
    var backY = topBoxY + topBoxHeight * 0.82;
    drawButton("← BACK", backX, backY, backW, backH, function () {
      state.currentScreen = "mainmenu";
      render();
    }, 18);
  };
  var drawLevel = function drawLevel() {
    var _getLayout6 = getLayout(),
      w = _getLayout6.w,
      topBoxX = _getLayout6.topBoxX,
      topBoxY = _getLayout6.topBoxY,
      topBoxWidth = _getLayout6.topBoxWidth,
      topBoxHeight = _getLayout6.topBoxHeight;
    var cx = w / 2;
    var lvl = state.currentLevel;
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 34px ".concat(displayFont);
    ctx.fillText("LEVEL ".concat(lvl), cx, topBoxY + topBoxHeight * 0.16);
    ctx.font = "22px ".concat(bodyFont);
    ctx.fillStyle = "#dddddd";
    ctx.fillText("This level is under construction.", cx, topBoxY + topBoxHeight * 0.38, topBoxWidth * 0.6);
    ctx.font = "16px ".concat(bodyFont);
    ctx.fillStyle = "#888888";
    ctx.fillText("Questions, choices, and interactions will be wired in here.", cx, topBoxY + topBoxHeight * 0.52, topBoxWidth * 0.6);

    // ── bottom nav row ──
    var navBtnH = 42;
    var navBtnW = 150;
    var navY = topBoxY + topBoxHeight * 0.79;

    // PREV (only if not first level)
    if (lvl > 1) {
      drawButton("← PREV", topBoxX + topBoxWidth * 0.05, navY, navBtnW, navBtnH, function () {
        state.currentLevel--;
        render();
      }, 18);
    }

    // Centre: back to level select
    drawButton("LEVEL SELECT", cx - navBtnW / 2, navY, navBtnW, navBtnH, function () {
      state.currentScreen = "levelselect";
      render();
    }, 16);

    // NEXT (only if not last level)
    if (lvl < LEVEL_COUNT) {
      drawButton("NEXT →", topBoxX + topBoxWidth * 0.77, navY, navBtnW, navBtnH, function () {
        state.currentLevel++;
        render();
      }, 18);
    }
  };
  var drawControlsOverlay = function drawControlsOverlay() {
    var _getLayout7 = getLayout(),
      topBoxX = _getLayout7.topBoxX,
      topBoxY = _getLayout7.topBoxY,
      topBoxWidth = _getLayout7.topBoxWidth,
      topBoxHeight = _getLayout7.topBoxHeight;

    // Overlay rect — slightly inset from the playing field
    var pad = topBoxWidth * 0.05;
    var ox = topBoxX + pad;
    var oy = topBoxY + pad;
    var ow = topBoxWidth - pad * 2;
    var oh = topBoxHeight - pad * 2;
    var cx = ox + ow / 2;

    // Semi-transparent dark fill (game shows behind it)
    ctx.fillStyle = "rgba(10, 10, 10, 0.88)";
    ctx.fillRect(ox, oy, ow, oh);
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 2;
    ctx.strokeRect(ox, oy, ow, oh);

    // Title
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 30px ".concat(displayFont);
    ctx.fillText("BASIC CONTROLS", cx, oy + oh * 0.11);

    // Divider
    ctx.strokeStyle = "#444444";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(ox + ow * 0.06, oy + oh * 0.2);
    ctx.lineTo(ox + ow * 0.94, oy + oh * 0.2);
    ctx.stroke();

    // Controls list
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

      // Key pill
      ctx.fillStyle = "#2a2a2a";
      ctx.strokeStyle = "#666666";
      ctx.lineWidth = 1;
      ctx.fillRect(keyBoxX, rowY, keyBoxW, keyBoxH);
      ctx.strokeRect(keyBoxX, rowY, keyBoxW, keyBoxH);
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 16px ".concat(displayFont);
      ctx.fillText(controls[i].key, keyBoxX + keyBoxW / 2, boxCenterY, keyBoxW - 8);

      // Description
      ctx.fillStyle = "#cccccc";
      ctx.textAlign = "left";
      ctx.font = "17px ".concat(bodyFont);
      ctx.fillText(controls[i].desc, descX, boxCenterY);
    }

    // Note
    ctx.fillStyle = "#666666";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "13px ".concat(bodyFont);
    ctx.fillText("Controls may vary between levels.", cx, oy + oh * 0.84);

    // Close button — clear all hit areas first so underlying buttons are blocked
    hitAreas = [];
    var closeW = 140;
    var closeH = 40;
    drawButton("CLOSE  ✕", cx - closeW / 2, oy + oh * 0.9, closeW, closeH, function () {
      state.controlsOpen = false;
      render();
    }, 17);
  };

  // ── render ──────────────────────────────────────────────────────────────────

  var render = function render() {
    hitAreas = [];
    drawBackground();
    drawLogo();
    drawGameplayFrame();
    switch (state.currentScreen) {
      case "mainmenu":
        drawMainMenu();
        break;
      case "levelselect":
        drawLevelSelect();
        break;
      case "level":
        drawLevel();
        break;
    }
    drawBottomPanel();
    if (state.controlsOpen) drawControlsOverlay();
  };

  // ── input ────────────────────────────────────────────────────────────────────

  gameCanvas.addEventListener("click", function (e) {
    var _toCanvas = toCanvas(e),
      x = _toCanvas.x,
      y = _toCanvas.y;
    var rect = gameCanvas.getBoundingClientRect();
    console.log("[click] client(".concat(e.clientX, ", ").concat(e.clientY, ") \u2192 canvas(").concat(x.toFixed(1), ", ").concat(y.toFixed(1), ") | canvasAttr=").concat(gameCanvas.width, "x").concat(gameCanvas.height, " | cssRect=").concat(rect.width.toFixed(0), "x").concat(rect.height.toFixed(0)));
    console.log("[click] hitAreas(".concat(hitAreas.length, "):"), hitAreas.map(function (a) {
      return "x".concat(a.x.toFixed(0), " y").concat(a.y.toFixed(0), " w").concat(a.w.toFixed(0), " h").concat(a.h.toFixed(0));
    }));
    for (var _i = 0, _hitAreas = hitAreas; _i < _hitAreas.length; _i++) {
      var area = _hitAreas[_i];
      if (x >= area.x && x <= area.x + area.w && y >= area.y && y <= area.y + area.h) {
        area.action();
        break;
      }
    }
  });
  gameCanvas.addEventListener("mousemove", function (e) {
    var _toCanvas2 = toCanvas(e),
      x = _toCanvas2.x,
      y = _toCanvas2.y;
    var over = hitAreas.some(function (a) {
      return x >= a.x && x <= a.x + a.w && y >= a.y && y <= a.y + a.h;
    });
    gameCanvas.style.cursor = over ? "pointer" : "default";
  });

  // ── startup ──────────────────────────────────────────────────────────────────

  resizeCanvases();
  render();
  logo.onload = function () {
    logoLoaded = true;
    render();
  };
  logo.onerror = function () {
    logoLoaded = false;
    render();
  };
  gameplayFrame.onload = function () {
    gameplayFrameLoaded = true;
    render();
  };
  gameplayFrame.onerror = function () {
    gameplayFrameLoaded = false;
    render();
  };
  logo.src = "/benchmark2/assets/logo.png";
  gameplayFrame.src = "/benchmark2/assets/gameplay-frame.png";
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && state.controlsOpen) {
      state.controlsOpen = false;
      render();
    }
  });
  window.addEventListener("resize", function () {
    resizeCanvases();
    render();
  });
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDO0FBb0J0QyxNQUFNLENBQUMsTUFBTSxHQUFHLFlBQU07RUFDcEIsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDeEMsYUFDRixDQUE2QjtFQUM3QixJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUN6QyxjQUNGLENBQTZCO0VBQzdCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ3hDLGFBQ0YsQ0FBNkI7RUFFN0IsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFVBQVUsRUFBRTtJQUM5QyxPQUFPLENBQUMsS0FBSyxDQUFDLHNDQUFzQyxDQUFDO0lBQ3JEO0VBQ0Y7RUFFQSxJQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztFQUN2QyxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQztJQUMxQztFQUNGO0VBRUEsSUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFLLENBQUMsQ0FBQztFQUN4QixJQUFNLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxDQUFDO0VBQ2pDLElBQUksVUFBVSxHQUFHLEtBQUs7RUFDdEIsSUFBSSxtQkFBbUIsR0FBRyxLQUFLO0VBRS9CLElBQU0sS0FBZ0IsR0FBRztJQUN2QixhQUFhLEVBQUUsVUFBVTtJQUN6QixZQUFZLEVBQUUsQ0FBQztJQUNmLFlBQVksRUFBRSxLQUFLO0lBQ25CLFVBQVUsRUFBRSw0QkFBNEI7SUFDeEMsVUFBVSxFQUFFLENBQ1Ysa0VBQWtFLEVBQ2xFLDhFQUE4RSxFQUM5RSxnREFBZ0QsRUFDaEQsdURBQXVEO0VB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QUFDO0VBQ1YsQ0FBQztFQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBTTtJQUNuQixVQUFVLEdBQUcsS0FBSztJQUNsQixNQUFNLENBQUMsQ0FBQztFQUNWLENBQUM7RUFDRCxhQUFhLENBQUMsTUFBTSxHQUFHLFlBQU07SUFDM0IsbUJBQW1CLEdBQUcsSUFBSTtJQUMxQixNQUFNLENBQUMsQ0FBQztFQUNWLENBQUM7RUFDRCxhQUFhLENBQUMsT0FBTyxHQUFHLFlBQU07SUFDNUIsbUJBQW1CLEdBQUcsS0FBSztJQUMzQixNQUFNLENBQUMsQ0FBQztFQUNWLENBQUM7RUFFRCxJQUFJLENBQUMsR0FBRyxHQUFHLDZCQUE2QjtFQUN4QyxhQUFhLENBQUMsR0FBRyxHQUFHLHVDQUF1QztFQUUzRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0lBQ3hDLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtNQUM1QyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUs7TUFDMUIsTUFBTSxDQUFDLENBQUM7SUFDVjtFQUNGLENBQUMsQ0FBQztFQUVGLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtJQUN0QyxjQUFjLENBQUMsQ0FBQztJQUNoQixNQUFNLENBQUMsQ0FBQztFQUNWLENBQUMsQ0FBQztBQUNKLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zb2xlLmxvZyhcIkJFTkNITUFSSyAyIE1BSU4gTE9BREVEXCIpO1xuXG50eXBlIEdhbWVTY3JlZW4gPSBcIm1haW5tZW51XCIgfCBcImxldmVsc2VsZWN0XCIgfCBcImxldmVsXCI7XG5cbmludGVyZmFjZSBHYW1lU3RhdGUge1xuICBjdXJyZW50U2NyZWVuOiBHYW1lU2NyZWVuO1xuICBjdXJyZW50TGV2ZWw6IG51bWJlcjtcbiAgY29udHJvbHNPcGVuOiBib29sZWFuO1xuICBzdG9yeVRpdGxlOiBzdHJpbmc7XG4gIHN0b3J5TGluZXM6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgSGl0QXJlYSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3OiBudW1iZXI7XG4gIGg6IG51bWJlcjtcbiAgYWN0aW9uOiAoKSA9PiB2b2lkO1xufVxuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJnYW1lLWNhbnZhc1wiLFxuICApIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgZGVidWdDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImRlYnVnLWNhbnZhc1wiLFxuICApIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgdGV4dENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwidGV4dC1jYW52YXNcIixcbiAgKSBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XG5cbiAgaWYgKCFnYW1lQ2FudmFzIHx8ICFkZWJ1Z0NhbnZhcyB8fCAhdGV4dENhbnZhcykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIG9uZSBvciBtb3JlIGNhbnZhcyBlbGVtZW50cy5cIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3R4ID0gZ2FtZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSB7XG4gICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBnZXQgMkQgY29udGV4dC5cIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBnYW1lcGxheUZyYW1lID0gbmV3IEltYWdlKCk7XG4gIGxldCBsb2dvTG9hZGVkID0gZmFsc2U7XG4gIGxldCBnYW1lcGxheUZyYW1lTG9hZGVkID0gZmFsc2U7XG5cbiAgY29uc3Qgc3RhdGU6IEdhbWVTdGF0ZSA9IHtcbiAgICBjdXJyZW50U2NyZWVuOiBcIm1haW5tZW51XCIsXG4gICAgY3VycmVudExldmVsOiAxLFxuICAgIGNvbnRyb2xzT3BlbjogZmFsc2UsXG4gICAgc3RvcnlUaXRsZTogXCJXRUxDT01FIFRPIE9VVFNJREUtVEhFLUJPWFwiLFxuICAgIHN0b3J5TGluZXM6IFtcbiAgICAgIFwiTm90aGluZyBpbiB0aGlzIHdvcmxkIGlzIGFzIHN0cmFpZ2h0Zm9yd2FyZCBhcyBpdCBmaXJzdCBhcHBlYXJzLlwiLFxuICAgICAgXCJFYWNoIGxldmVsIHByZXNlbnRzIHdoYXQgbG9va3MgbGlrZSBhIHNpbXBsZSB0YXNrLCBxdWVzdGlvbiwgb3IgaW5zdHJ1Y3Rpb24uXCIsXG4gICAgICBcIkJ1dCB0aGUgb2J2aW91cyBhbnN3ZXIgaXMgb2Z0ZW4gdGhlIHdyb25nIG9uZS5cIixcbiAgICAgIFwiUmVhZCBjYXJlZnVsbHkuIFRoaW5rIGRpZmZlcmVudGx5LiBCcmVhayB0aGUgcGF0dGVybi5cIixcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IExFVkVMX0NPVU5UID0gMTA7XG5cbiAgbGV0IGhpdEFyZWFzOiBIaXRBcmVhW10gPSBbXTtcblxuICBjb25zdCBkaXNwbGF5Rm9udCA9IGBcIlRyZWJ1Y2hldCBNU1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZmA7XG4gIGNvbnN0IGJvZHlGb250ID0gYFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZmA7XG5cbiAgLy8g4pSA4pSAIGNhbnZhcyBoZWxwZXJzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gIGNvbnN0IHJlc2l6ZUNhbnZhc2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGdhbWVDYW52YXMud2lkdGggID0gZGVidWdDYW52YXMud2lkdGggID0gdztcbiAgICBnYW1lQ2FudmFzLmhlaWdodCA9IGRlYnVnQ2FudmFzLmhlaWdodCA9IGg7XG4gIH07XG5cbiAgY29uc3QgZ2V0TGF5b3V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHcgPSBnYW1lQ2FudmFzLndpZHRoO1xuICAgIGNvbnN0IGggPSBnYW1lQ2FudmFzLmhlaWdodDtcblxuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHcgKiAwLjg0O1xuICAgIGNvbnN0IGNvbnRlbnRYID0gKHcgLSBjb250ZW50V2lkdGgpIC8gMjtcbiAgICBjb25zdCBsb2dvWSA9IGggKiAwLjA4O1xuXG4gICAgY29uc3QgdG9wQm94V2lkdGggPSBjb250ZW50V2lkdGg7XG4gICAgY29uc3QgdG9wQm94SGVpZ2h0ID0gaCAqIDAuNDg7XG4gICAgY29uc3QgdG9wQm94WCA9IGNvbnRlbnRYO1xuICAgIGNvbnN0IHRvcEJveFkgPSBoICogMC4xODtcblxuICAgIC8vIFNhZmUgY29udGVudCBhcmVhIGluc2lkZSB0aGUgZGVjb3JhdGl2ZSBmcmFtZVxuICAgIGNvbnN0IHRvcElubmVyV2lkdGggPSB0b3BCb3hXaWR0aCAqIDAuNDI7XG4gICAgY29uc3QgdG9wSW5uZXJIZWlnaHQgPSB0b3BCb3hIZWlnaHQgKiAwLjYyO1xuICAgIGNvbnN0IHRvcElubmVyWCA9IHcgLyAyIC0gdG9wSW5uZXJXaWR0aCAvIDI7XG4gICAgY29uc3QgdG9wSW5uZXJZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTY7XG5cbiAgICBjb25zdCBnYXAgPSBoICogMC4wNDtcbiAgICBjb25zdCBib3R0b21Cb3hZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCArIGdhcDtcbiAgICBjb25zdCBib3R0b21Cb3hIZWlnaHQgPSBoICogMC4yMjtcblxuICAgIHJldHVybiB7XG4gICAgICB3LFxuICAgICAgaCxcbiAgICAgIGNvbnRlbnRXaWR0aCxcbiAgICAgIGNvbnRlbnRYLFxuICAgICAgbG9nb1ksXG4gICAgICB0b3BCb3hYLFxuICAgICAgdG9wQm94WSxcbiAgICAgIHRvcEJveFdpZHRoLFxuICAgICAgdG9wQm94SGVpZ2h0LFxuICAgICAgdG9wSW5uZXJYLFxuICAgICAgdG9wSW5uZXJZLFxuICAgICAgdG9wSW5uZXJXaWR0aCxcbiAgICAgIHRvcElubmVySGVpZ2h0LFxuICAgICAgYm90dG9tQm94WSxcbiAgICAgIGJvdHRvbUJveEhlaWdodCxcbiAgICB9O1xuICB9O1xuXG4gIC8qKiBNYXAgYSBtb3VzZSBldmVudCdzIGNsaWVudCBwb3NpdGlvbiB0byBjYW52YXMgcGl4ZWwgY29vcmRpbmF0ZXMuICovXG4gIGNvbnN0IHRvQ2FudmFzID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzY2FsZVggPSBnYW1lQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSBnYW1lQ2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuICAgIHJldHVybiB7XG4gICAgICB4OiAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWCxcbiAgICAgIHk6IChlLmNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVksXG4gICAgfTtcbiAgfTtcblxuICAvLyDilIDilIAgZHJhd2luZyBwcmltaXRpdmVzIOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgOKUgFxuXG4gIGNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKCkgPT4ge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxMTExMTFcIjtcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgZ2FtZUNhbnZhcy53aWR0aCwgZ2FtZUNhbnZhcy5oZWlnaHQpO1xuICB9O1xuXG4gIGNvbnN0IGRyYXdMb2dvID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdywgbG9nb1kgfSA9IGdldExheW91dCgpO1xuICAgIGlmIChsb2dvTG9hZGVkICYmIGxvZ28ubmF0dXJhbFdpZHRoID4gMCkge1xuICAgICAgY29uc3QgbG9nb1cgPSB3ICogMC4xNTtcbiAgICAgIGNvbnN0IGxvZ29IID0gbG9nb1cgKiAobG9nby5uYXR1cmFsSGVpZ2h0IC8gbG9nby5uYXR1cmFsV2lkdGgpO1xuICAgICAgY3R4LmRyYXdJbWFnZShsb2dvLCB3IC8gMiAtIGxvZ29XIC8gMiwgbG9nb1kgLSBsb2dvSCAvIDIsIGxvZ29XLCBsb2dvSCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICBjdHguZm9udCA9IGBib2xkIDU0cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiT3V0c2lkZS10aGUtQm94XCIsIHcgLyAyLCBsb2dvWSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYXdHYW1lcGxheUZyYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KCk7XG4gICAgaWYgKGdhbWVwbGF5RnJhbWVMb2FkZWQgJiYgZ2FtZXBsYXlGcmFtZS5uYXR1cmFsV2lkdGggPiAwKSB7XG4gICAgICAvLyBTb3VyY2UgcmVnaW9uIGNsaXBwZWQgdG8gdGhlIGFjdHVhbCBmcmFtZSBjb3JuZXJzIChhbmFseXNlZDogVEwgNDQwLDE4MCDihpIgQlIgMTEyOCw3NTIpXG4gICAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgICBnYW1lcGxheUZyYW1lLFxuICAgICAgICA0NDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjg4LFxuICAgICAgICA1NzIsXG4gICAgICAgIHRvcEJveFgsXG4gICAgICAgIHRvcEJveFksXG4gICAgICAgIHRvcEJveFdpZHRoLFxuICAgICAgICB0b3BCb3hIZWlnaHQsXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBGYWxsYmFjayB3aGl0ZSBib3JkZXIgd2hlbiBpbWFnZSBoYXNuJ3QgbG9hZGVkXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgICAgY3R4LnN0cm9rZVJlY3QodG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYXdCb3R0b21QYW5lbCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHcsIGNvbnRlbnRYLCBjb250ZW50V2lkdGgsIGJvdHRvbUJveFksIGJvdHRvbUJveEhlaWdodCB9ID1cbiAgICAgIGdldExheW91dCgpO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIGN0eC5zdHJva2VSZWN0KGNvbnRlbnRYLCBib3R0b21Cb3hZLCBjb250ZW50V2lkdGgsIGJvdHRvbUJveEhlaWdodCk7XG5cbiAgICBjb25zdCBjZW50ZXJYID0gdyAvIDI7XG4gICAgY29uc3QgdGV4dFdpZHRoID0gY29udGVudFdpZHRoICogMC43NDtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcblxuICAgIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KHN0YXRlLnN0b3J5VGl0bGUsIGNlbnRlclgsIGJvdHRvbUJveFkgKyAxOCwgdGV4dFdpZHRoKTtcblxuICAgIGN0eC5mb250ID0gYDIwcHggJHtib2R5Rm9udH1gO1xuICAgIGNvbnN0IGxpbmVHYXAgPSAzMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLnN0b3J5TGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGN0eC5maWxsVGV4dChcbiAgICAgICAgc3RhdGUuc3RvcnlMaW5lc1tpXSxcbiAgICAgICAgY2VudGVyWCxcbiAgICAgICAgYm90dG9tQm94WSArIDY4ICsgaSAqIGxpbmVHYXAsXG4gICAgICAgIHRleHRXaWR0aCxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIC8qKiBEcmF3IGEgbGFiZWxsZWQgYnV0dG9uIGFuZCByZWdpc3RlciBpdCBhcyBhIGhpdCBhcmVhLiAqL1xuICBjb25zdCBkcmF3QnV0dG9uID0gKFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgeDogbnVtYmVyLFxuICAgIHk6IG51bWJlcixcbiAgICB3OiBudW1iZXIsXG4gICAgaDogbnVtYmVyLFxuICAgIGFjdGlvbjogKCkgPT4gdm9pZCxcbiAgICBmb250U2l6ZSA9IDIyLFxuICApID0+IHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMztcbiAgICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAke2ZvbnRTaXplfXB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQobGFiZWwsIHggKyB3IC8gMiwgeSArIGggLyAyLCB3IC0gMTYpO1xuICAgIGhpdEFyZWFzLnB1c2goeyB4LCB5LCB3LCBoLCBhY3Rpb24gfSk7XG4gIH07XG5cbiAgLy8g4pSA4pSAIHNjcmVlbnMg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbiAgY29uc3QgZHJhd01haW5NZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdywgdG9wSW5uZXJYLCB0b3BJbm5lclksIHRvcElubmVyV2lkdGgsIHRvcElubmVySGVpZ2h0IH0gPVxuICAgICAgZ2V0TGF5b3V0KCk7XG4gICAgY29uc3QgY3ggPSB3IC8gMjtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICAgIGN0eC5mb250ID0gYGJvbGQgNDJweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFwiTUFJTiBNRU5VXCIsIGN4LCB0b3BJbm5lclkgKyB0b3BJbm5lckhlaWdodCAqIDAuMDgpO1xuXG4gICAgY3R4LmZvbnQgPSBgMjBweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgXCJBIGdhbWUgYnVpbHQgYXJvdW5kIG1pc2RpcmVjdGlvbiwgb2JzZXJ2YXRpb24sIGFuZCB3ZWlyZCBsb2dpYy5cIixcbiAgICAgIGN4LFxuICAgICAgdG9wSW5uZXJZICsgdG9wSW5uZXJIZWlnaHQgKiAwLjIyLFxuICAgICAgdG9wSW5uZXJXaWR0aCAqIDAuOTUsXG4gICAgKTtcblxuICAgIGNvbnN0IGJ0blcgPSBNYXRoLm1pbigzMDAsIHRvcElubmVyV2lkdGggKiAwLjc4KTtcbiAgICBjb25zdCBidG5IID0gNTA7XG4gICAgY29uc3QgYnRuWCA9IGN4IC0gYnRuVyAvIDI7XG4gICAgY29uc3Qgc3RhcnRZID0gdG9wSW5uZXJZICsgdG9wSW5uZXJIZWlnaHQgKiAwLjM2O1xuICAgIGNvbnN0IGJ0bkdhcCA9IDE0O1xuICAgIGNvbnN0IHN0cmlkZSA9IGJ0bkggKyBidG5HYXA7XG5cbiAgICBkcmF3QnV0dG9uKFwiUExBWVwiLCBidG5YLCBzdGFydFksIGJ0blcsIGJ0bkgsICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbFwiO1xuICAgICAgcmVuZGVyKCk7XG4gICAgfSk7XG4gICAgZHJhd0J1dHRvbihcIkxFVkVMIFNFTEVDVFwiLCBidG5YLCBzdGFydFkgKyBzdHJpZGUsIGJ0blcsIGJ0bkgsICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XG4gICAgICByZW5kZXIoKTtcbiAgICB9KTtcbiAgICBkcmF3QnV0dG9uKFwiQ09OVFJPTFNcIiwgYnRuWCwgc3RhcnRZICsgc3RyaWRlICogMiwgYnRuVywgYnRuSCwgKCkgPT4ge1xuICAgICAgc3RhdGUuY29udHJvbHNPcGVuID0gdHJ1ZTtcbiAgICAgIHJlbmRlcigpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRyYXdMZXZlbFNlbGVjdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dCgpO1xuICAgIGNvbnN0IGN4ID0gdyAvIDI7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAzNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoXCJMRVZFTCBTRUxFQ1RcIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjEpO1xuXG4gICAgLy8gNS1jb2x1bW4gw5cgMi1yb3cgZ3JpZFxuICAgIGNvbnN0IGNvbHMgPSA1O1xuICAgIGNvbnN0IHJvd3MgPSAyO1xuICAgIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggKiAwLjEzO1xuICAgIGNvbnN0IHRpbGVIID0gdG9wQm94SGVpZ2h0ICogMC4yNDtcbiAgICBjb25zdCBoR2FwID0gKHRvcEJveFdpZHRoICogMC43OCAtIHRpbGVXICogY29scykgLyAoY29scyAtIDEpO1xuICAgIGNvbnN0IHZHYXAgPSB0b3BCb3hIZWlnaHQgKiAwLjA3O1xuICAgIGNvbnN0IGdyaWRXID0gdGlsZVcgKiBjb2xzICsgaEdhcCAqIChjb2xzIC0gMSk7XG4gICAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcbiAgICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjIxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMRVZFTF9DT1VOVDsgaSsrKSB7XG4gICAgICBjb25zdCBjb2wgPSBpICUgY29scztcbiAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xuICAgICAgY29uc3QgdHggPSBncmlkWCArIGNvbCAqICh0aWxlVyArIGhHYXApO1xuICAgICAgY29uc3QgdHkgPSBncmlkWSArIHJvdyAqICh0aWxlSCArIHZHYXApO1xuICAgICAgY29uc3QgbHZsID0gaSArIDE7XG5cbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiI2ZmZmZmZlwiO1xuICAgICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XG5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG5cbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMjhweCAke2Rpc3BsYXlGb250fWA7XG4gICAgICBjdHguZmlsbFRleHQoYCR7bHZsfWAsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIICogMC4zOCk7XG5cbiAgICAgIGN0eC5mb250ID0gYDEycHggJHtib2R5Rm9udH1gO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2JiYmJiYlwiO1xuICAgICAgY3R4LmZpbGxUZXh0KGBMRVZFTCAke2x2bH1gLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuNyk7XG5cbiAgICAgIGNvbnN0IGNhcHR1cmVkID0gbHZsO1xuICAgICAgaGl0QXJlYXMucHVzaCh7XG4gICAgICAgIHg6IHR4LFxuICAgICAgICB5OiB0eSxcbiAgICAgICAgdzogdGlsZVcsXG4gICAgICAgIGg6IHRpbGVILFxuICAgICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSBjYXB0dXJlZDtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbFwiO1xuICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQmFjayBidXR0b25cbiAgICBjb25zdCBiYWNrSCA9IDQyO1xuICAgIGNvbnN0IGJhY2tXID0gMTUwO1xuICAgIGNvbnN0IGJhY2tYID0gdG9wQm94WCArIHRvcEJveFdpZHRoICogMC4wNDtcbiAgICBjb25zdCBiYWNrWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjgyO1xuICAgIGRyYXdCdXR0b24oXG4gICAgICBcIuKGkCBCQUNLXCIsXG4gICAgICBiYWNrWCxcbiAgICAgIGJhY2tZLFxuICAgICAgYmFja1csXG4gICAgICBiYWNrSCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcbiAgICAgICAgcmVuZGVyKCk7XG4gICAgICB9LFxuICAgICAgMTgsXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBkcmF3TGV2ZWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoKTtcbiAgICBjb25zdCBjeCA9IHcgLyAyO1xuICAgIGNvbnN0IGx2bCA9IHN0YXRlLmN1cnJlbnRMZXZlbDtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICAgIGN0eC5mb250ID0gYGJvbGQgMzRweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KGBMRVZFTCAke2x2bH1gLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTYpO1xuXG4gICAgY3R4LmZvbnQgPSBgMjJweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiI2RkZGRkZFwiO1xuICAgIGN0eC5maWxsVGV4dChcbiAgICAgIFwiVGhpcyBsZXZlbCBpcyB1bmRlciBjb25zdHJ1Y3Rpb24uXCIsXG4gICAgICBjeCxcbiAgICAgIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjM4LFxuICAgICAgdG9wQm94V2lkdGggKiAwLjYsXG4gICAgKTtcblxuICAgIGN0eC5mb250ID0gYDE2cHggJHtib2R5Rm9udH1gO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiM4ODg4ODhcIjtcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBcIlF1ZXN0aW9ucywgY2hvaWNlcywgYW5kIGludGVyYWN0aW9ucyB3aWxsIGJlIHdpcmVkIGluIGhlcmUuXCIsXG4gICAgICBjeCxcbiAgICAgIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjUyLFxuICAgICAgdG9wQm94V2lkdGggKiAwLjYsXG4gICAgKTtcblxuICAgIC8vIOKUgOKUgCBib3R0b20gbmF2IHJvdyDilIDilIBcbiAgICBjb25zdCBuYXZCdG5IID0gNDI7XG4gICAgY29uc3QgbmF2QnRuVyA9IDE1MDtcbiAgICBjb25zdCBuYXZZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNzk7XG5cbiAgICAvLyBQUkVWIChvbmx5IGlmIG5vdCBmaXJzdCBsZXZlbClcbiAgICBpZiAobHZsID4gMSkge1xuICAgICAgZHJhd0J1dHRvbihcbiAgICAgICAgXCLihpAgUFJFVlwiLFxuICAgICAgICB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA1LFxuICAgICAgICBuYXZZLFxuICAgICAgICBuYXZCdG5XLFxuICAgICAgICBuYXZCdG5ILFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgc3RhdGUuY3VycmVudExldmVsLS07XG4gICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIDE4LFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDZW50cmU6IGJhY2sgdG8gbGV2ZWwgc2VsZWN0XG4gICAgZHJhd0J1dHRvbihcbiAgICAgIFwiTEVWRUwgU0VMRUNUXCIsXG4gICAgICBjeCAtIG5hdkJ0blcgLyAyLFxuICAgICAgbmF2WSxcbiAgICAgIG5hdkJ0blcsXG4gICAgICBuYXZCdG5ILFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgICAgICByZW5kZXIoKTtcbiAgICAgIH0sXG4gICAgICAxNixcbiAgICApO1xuXG4gICAgLy8gTkVYVCAob25seSBpZiBub3QgbGFzdCBsZXZlbClcbiAgICBpZiAobHZsIDwgTEVWRUxfQ09VTlQpIHtcbiAgICAgIGRyYXdCdXR0b24oXG4gICAgICAgIFwiTkVYVCDihpJcIixcbiAgICAgICAgdG9wQm94WCArIHRvcEJveFdpZHRoICogMC43NyxcbiAgICAgICAgbmF2WSxcbiAgICAgICAgbmF2QnRuVyxcbiAgICAgICAgbmF2QnRuSCxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgICAgIHJlbmRlcigpO1xuICAgICAgICB9LFxuICAgICAgICAxOCxcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYXdDb250cm9sc092ZXJsYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoKTtcblxuICAgIC8vIE92ZXJsYXkgcmVjdCDigJQgc2xpZ2h0bHkgaW5zZXQgZnJvbSB0aGUgcGxheWluZyBmaWVsZFxuICAgIGNvbnN0IHBhZCA9IHRvcEJveFdpZHRoICogMC4wNTtcbiAgICBjb25zdCBveCA9IHRvcEJveFggKyBwYWQ7XG4gICAgY29uc3Qgb3kgPSB0b3BCb3hZICsgcGFkO1xuICAgIGNvbnN0IG93ID0gdG9wQm94V2lkdGggLSBwYWQgKiAyO1xuICAgIGNvbnN0IG9oID0gdG9wQm94SGVpZ2h0IC0gcGFkICogMjtcbiAgICBjb25zdCBjeCA9IG94ICsgb3cgLyAyO1xuXG4gICAgLy8gU2VtaS10cmFuc3BhcmVudCBkYXJrIGZpbGwgKGdhbWUgc2hvd3MgYmVoaW5kIGl0KVxuICAgIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMTAsIDEwLCAxMCwgMC44OClcIjtcbiAgICBjdHguZmlsbFJlY3Qob3gsIG95LCBvdywgb2gpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVJlY3Qob3gsIG95LCBvdywgb2gpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjZmZmZmZmXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoXCJCQVNJQyBDT05UUk9MU1wiLCBjeCwgb3kgKyBvaCAqIDAuMTEpO1xuXG4gICAgLy8gRGl2aWRlclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiIzQ0NDQ0NFwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKG94ICsgb3cgKiAwLjA2LCBveSArIG9oICogMC4yKTtcbiAgICBjdHgubGluZVRvKG94ICsgb3cgKiAwLjk0LCBveSArIG9oICogMC4yKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICAvLyBDb250cm9scyBsaXN0XG4gICAgY29uc3QgY29udHJvbHMgPSBbXG4gICAgICB7IGtleTogXCJXIC8gQSAvIFMgLyBEXCIsIGRlc2M6IFwiTW92ZSAvIE5hdmlnYXRlXCIgfSxcbiAgICAgIHsga2V5OiBcIkNMSUNLXCIsIGRlc2M6IFwiSW50ZXJhY3QgLyBTZWxlY3QgYW5zd2VyXCIgfSxcbiAgICAgIHsga2V5OiBcIkVTQ1wiLCBkZXNjOiBcIkNsb3NlIHRoaXMgcGFuZWxcIiB9LFxuICAgIF07XG5cbiAgICBjb25zdCBsaXN0WSA9IG95ICsgb2ggKiAwLjI5O1xuICAgIGNvbnN0IHJvd0ggPSBvaCAqIDAuMTU7XG4gICAgY29uc3Qga2V5Qm94VyA9IG93ICogMC4zO1xuICAgIGNvbnN0IGtleUJveEggPSByb3dIICogMC43O1xuICAgIGNvbnN0IGtleUJveFggPSBveCArIG93ICogMC4wODtcbiAgICBjb25zdCBkZXNjWCA9IG94ICsgb3cgKiAwLjU7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCByb3dZID0gbGlzdFkgKyBpICogcm93SDtcbiAgICAgIGNvbnN0IGJveENlbnRlclkgPSByb3dZICsga2V5Qm94SCAvIDI7XG5cbiAgICAgIC8vIEtleSBwaWxsXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjMmEyYTJhXCI7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiM2NjY2NjZcIjtcbiAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgY3R4LmZpbGxSZWN0KGtleUJveFgsIHJvd1ksIGtleUJveFcsIGtleUJveEgpO1xuICAgICAgY3R4LnN0cm9rZVJlY3Qoa2V5Qm94WCwgcm93WSwga2V5Qm94Vywga2V5Qm94SCk7XG5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICBjdHguZm9udCA9IGBib2xkIDE2cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICBjb250cm9sc1tpXS5rZXksXG4gICAgICAgIGtleUJveFggKyBrZXlCb3hXIC8gMixcbiAgICAgICAgYm94Q2VudGVyWSxcbiAgICAgICAga2V5Qm94VyAtIDgsXG4gICAgICApO1xuXG4gICAgICAvLyBEZXNjcmlwdGlvblxuICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2NjY2NjY1wiO1xuICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgY3R4LmZvbnQgPSBgMTdweCAke2JvZHlGb250fWA7XG4gICAgICBjdHguZmlsbFRleHQoY29udHJvbHNbaV0uZGVzYywgZGVzY1gsIGJveENlbnRlclkpO1xuICAgIH1cblxuICAgIC8vIE5vdGVcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjNjY2NjY2XCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFwiQ29udHJvbHMgbWF5IHZhcnkgYmV0d2VlbiBsZXZlbHMuXCIsIGN4LCBveSArIG9oICogMC44NCk7XG5cbiAgICAvLyBDbG9zZSBidXR0b24g4oCUIGNsZWFyIGFsbCBoaXQgYXJlYXMgZmlyc3Qgc28gdW5kZXJseWluZyBidXR0b25zIGFyZSBibG9ja2VkXG4gICAgaGl0QXJlYXMgPSBbXTtcbiAgICBjb25zdCBjbG9zZVcgPSAxNDA7XG4gICAgY29uc3QgY2xvc2VIID0gNDA7XG4gICAgZHJhd0J1dHRvbihcbiAgICAgIFwiQ0xPU0UgIOKclVwiLFxuICAgICAgY3ggLSBjbG9zZVcgLyAyLFxuICAgICAgb3kgKyBvaCAqIDAuOSxcbiAgICAgIGNsb3NlVyxcbiAgICAgIGNsb3NlSCxcbiAgICAgICgpID0+IHtcbiAgICAgICAgc3RhdGUuY29udHJvbHNPcGVuID0gZmFsc2U7XG4gICAgICAgIHJlbmRlcigpO1xuICAgICAgfSxcbiAgICAgIDE3LFxuICAgICk7XG4gIH07XG5cbiAgLy8g4pSA4pSAIHJlbmRlciDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gICAgaGl0QXJlYXMgPSBbXTtcbiAgICBkcmF3QmFja2dyb3VuZCgpO1xuICAgIGRyYXdMb2dvKCk7XG4gICAgZHJhd0dhbWVwbGF5RnJhbWUoKTtcblxuICAgIHN3aXRjaCAoc3RhdGUuY3VycmVudFNjcmVlbikge1xuICAgICAgY2FzZSBcIm1haW5tZW51XCI6XG4gICAgICAgIGRyYXdNYWluTWVudSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZXZlbHNlbGVjdFwiOlxuICAgICAgICBkcmF3TGV2ZWxTZWxlY3QoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGV2ZWxcIjpcbiAgICAgICAgZHJhd0xldmVsKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRyYXdCb3R0b21QYW5lbCgpO1xuXG4gICAgaWYgKHN0YXRlLmNvbnRyb2xzT3BlbikgZHJhd0NvbnRyb2xzT3ZlcmxheSgpO1xuICB9O1xuXG4gIC8vIOKUgOKUgCBpbnB1dCDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIDilIBcblxuICBnYW1lQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdG9DYW52YXMoZSk7XG4gICAgY29uc3QgcmVjdCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc29sZS5sb2coXG4gICAgICBgW2NsaWNrXSBjbGllbnQoJHtlLmNsaWVudFh9LCAke2UuY2xpZW50WX0pIOKGkiBjYW52YXMoJHt4LnRvRml4ZWQoMSl9LCAke3kudG9GaXhlZCgxKX0pIHwgY2FudmFzQXR0cj0ke2dhbWVDYW52YXMud2lkdGh9eCR7Z2FtZUNhbnZhcy5oZWlnaHR9IHwgY3NzUmVjdD0ke3JlY3Qud2lkdGgudG9GaXhlZCgwKX14JHtyZWN0LmhlaWdodC50b0ZpeGVkKDApfWAsXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBbY2xpY2tdIGhpdEFyZWFzKCR7aGl0QXJlYXMubGVuZ3RofSk6YCxcbiAgICAgIGhpdEFyZWFzLm1hcChcbiAgICAgICAgKGEpID0+XG4gICAgICAgICAgYHgke2EueC50b0ZpeGVkKDApfSB5JHthLnkudG9GaXhlZCgwKX0gdyR7YS53LnRvRml4ZWQoMCl9IGgke2EuaC50b0ZpeGVkKDApfWAsXG4gICAgICApLFxuICAgICk7XG4gICAgZm9yIChjb25zdCBhcmVhIG9mIGhpdEFyZWFzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHggPj0gYXJlYS54ICYmXG4gICAgICAgIHggPD0gYXJlYS54ICsgYXJlYS53ICYmXG4gICAgICAgIHkgPj0gYXJlYS55ICYmXG4gICAgICAgIHkgPD0gYXJlYS55ICsgYXJlYS5oXG4gICAgICApIHtcbiAgICAgICAgYXJlYS5hY3Rpb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBnYW1lQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRvQ2FudmFzKGUpO1xuICAgIGNvbnN0IG92ZXIgPSBoaXRBcmVhcy5zb21lKFxuICAgICAgKGEpID0+IHggPj0gYS54ICYmIHggPD0gYS54ICsgYS53ICYmIHkgPj0gYS55ICYmIHkgPD0gYS55ICsgYS5oLFxuICAgICk7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5jdXJzb3IgPSBvdmVyID8gXCJwb2ludGVyXCIgOiBcImRlZmF1bHRcIjtcbiAgfSk7XG5cbiAgLy8g4pSA4pSAIHN0YXJ0dXAg4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSA4pSAXG5cbiAgcmVzaXplQ2FudmFzZXMoKTtcbiAgcmVuZGVyKCk7XG5cbiAgbG9nby5vbmxvYWQgPSAoKSA9PiB7XG4gICAgbG9nb0xvYWRlZCA9IHRydWU7XG4gICAgcmVuZGVyKCk7XG4gIH07XG4gIGxvZ28ub25lcnJvciA9ICgpID0+IHtcbiAgICBsb2dvTG9hZGVkID0gZmFsc2U7XG4gICAgcmVuZGVyKCk7XG4gIH07XG4gIGdhbWVwbGF5RnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgIGdhbWVwbGF5RnJhbWVMb2FkZWQgPSB0cnVlO1xuICAgIHJlbmRlcigpO1xuICB9O1xuICBnYW1lcGxheUZyYW1lLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgZ2FtZXBsYXlGcmFtZUxvYWRlZCA9IGZhbHNlO1xuICAgIHJlbmRlcigpO1xuICB9O1xuXG4gIGxvZ28uc3JjID0gXCIvYmVuY2htYXJrMi9hc3NldHMvbG9nby5wbmdcIjtcbiAgZ2FtZXBsYXlGcmFtZS5zcmMgPSBcIi9iZW5jaG1hcmsyL2Fzc2V0cy9nYW1lcGxheS1mcmFtZS5wbmdcIjtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIgJiYgc3RhdGUuY29udHJvbHNPcGVuKSB7XG4gICAgICBzdGF0ZS5jb250cm9sc09wZW4gPSBmYWxzZTtcbiAgICAgIHJlbmRlcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIHJlc2l6ZUNhbnZhc2VzKCk7XG4gICAgcmVuZGVyKCk7XG4gIH0pO1xufTtcbiJdfQ==
