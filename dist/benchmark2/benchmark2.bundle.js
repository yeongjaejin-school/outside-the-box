(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameEvent = void 0;
// Events.ts
var GameEvent = exports.GameEvent = /*#__PURE__*/function (GameEvent) {
  GameEvent["MOVE"] = "MOVE";
  GameEvent["DASH"] = "DASH";
  GameEvent["HOLD"] = "HOLD";
  return GameEvent;
}({}); // Payload types for each event

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventEmitter = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// EventEmitter.ts
var EventEmitter = exports.EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    _defineProperty(this, "listeners", new Map());
  }
  return _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, callback) {
      if (!this.listeners.has(event)) {
        this.listeners.set(event, []);
      }
      this.listeners.get(event).push(callback);
    }
  }, {
    key: "off",
    value: function off(event, callback) {
      var callbacks = this.listeners.get(event);
      if (!callbacks) return;
      this.listeners.set(event, callbacks.filter(function (cb) {
        return cb !== callback;
      }));
    }
  }, {
    key: "emit",
    value: function emit(event, payload) {
      var callbacks = this.listeners.get(event);
      if (!callbacks) return;
      var _iterator = _createForOfIteratorHelper(callbacks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var cb = _step.value;
          cb(payload);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
}();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EventListener = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// EventListener.ts
var EventListener = exports.EventListener = /*#__PURE__*/function () {
  function EventListener(emitter) {
    _classCallCheck(this, EventListener);
    this.emitter = emitter;
  }
  return _createClass(EventListener, [{
    key: "listen",
    value: function listen(event, callback) {
      this.emitter.on(event, callback);
    }
  }, {
    key: "stopListening",
    value: function stopListening(event, callback) {
      this.emitter.off(event, callback);
    }
  }]);
}();

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputManager = void 0;
var _Event = require("./Events/Event.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var InputManager = exports.InputManager = /*#__PURE__*/function () {
  function InputManager(emitter) {
    var _this = this;
    _classCallCheck(this, InputManager);
    _defineProperty(this, "keys", {});
    _defineProperty(this, "movementKeys", new Set(["w", "a", "s", "d", " ", "h"]));
    this.emitter = emitter;
    window.addEventListener("keydown", function (e) {
      return _this.onKeyDown(e);
    });
    window.addEventListener("keyup", function (e) {
      return _this.onKeyUp(e);
    });
  }
  return _createClass(InputManager, [{
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var key = event.key.toLowerCase();
      this.keys[key] = true;
      if (this.movementKeys.has(key)) {
        event.preventDefault();
      }
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var key = event.key.toLowerCase();
      this.keys[key] = false;
      if (this.movementKeys.has(key)) {
        event.preventDefault();
      }
    }
  }, {
    key: "update",
    value: function update() {
      var dx = 0;
      var dy = 0;
      if (this.keys["w"]) dy -= 1;
      if (this.keys["s"]) dy += 1;
      if (this.keys["a"]) dx -= 1;
      if (this.keys["d"]) dx += 1;
      if (dx !== 0 || dy !== 0) {
        this.emitter.emit(_Event.GameEvent.MOVE, {
          dx: dx,
          dy: dy
        });
      }
      if (this.keys[" "]) {
        this.emitter.emit(_Event.GameEvent.DASH, {});
      }
      if (this.keys["h"]) {
        this.emitter.emit(_Event.GameEvent.HOLD, {});
      }
    }
  }]);
}();

},{"./Events/Event.ts":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerControl = void 0;
var _EventListener2 = require("./Events/EventListener");
var _Event = require("./Events/Event.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PlayerControl = exports.PlayerControl = /*#__PURE__*/function (_EventListener) {
  function PlayerControl(emitter) {
    var _this;
    _classCallCheck(this, PlayerControl);
    _this = _callSuper(this, PlayerControl, [emitter]);
    _defineProperty(_this, "x", 0);
    _defineProperty(_this, "y", 0);
    _defineProperty(_this, "width", 48);
    _defineProperty(_this, "height", 48);
    _defineProperty(_this, "speed", 5);
    _defineProperty(_this, "direction", "down");
    _defineProperty(_this, "bounds", {
      minX: 0,
      maxX: Number.POSITIVE_INFINITY,
      minY: 0,
      maxY: Number.POSITIVE_INFINITY
    });
    _this.sprites = {
      up: _this.loadSprite("/benchmark2/assets/player/Player_Up.png"),
      down: _this.loadSprite("/benchmark2/assets/player/Player_Down.png"),
      left: _this.loadSprite("/benchmark2/assets/player/Player_Left.png"),
      right: _this.loadSprite("/benchmark2/assets/player/Player_Right.png")
    };
    _this.x = 400;
    _this.y = 300;
    _this.listen(_Event.GameEvent.MOVE, function (data) {
      _this.move(data);
    });
    _this.listen(_Event.GameEvent.DASH, function () {
      console.log("Dash triggered");
    });
    _this.listen(_Event.GameEvent.HOLD, function () {
      console.log("Special triggered");
    });
    return _this;
  }
  _inherits(PlayerControl, _EventListener);
  return _createClass(PlayerControl, [{
    key: "update",
    value: function update() {}
  }, {
    key: "setBounds",
    value: function setBounds(minX, minY, maxX, maxY) {
      this.bounds = {
        minX: minX,
        minY: minY,
        maxX: maxX,
        maxY: maxY
      };
      this.clampToBounds();
    }
  }, {
    key: "resetPosition",
    value: function resetPosition(x, y) {
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "down";
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.clampToBounds();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var sprite = this.sprites[this.direction];
      if (sprite.complete && sprite.naturalWidth > 0) {
        ctx.drawImage(sprite, this.x, this.y, this.width, this.height);
        return;
      }
      ctx.fillStyle = "#e53935";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "loadSprite",
    value: function loadSprite(src) {
      var sprite = new Image();
      sprite.src = src;
      return sprite;
    }
  }, {
    key: "move",
    value: function move(data) {
      if (data.dx > 0) this.direction = "right";else if (data.dx < 0) this.direction = "left";else if (data.dy > 0) this.direction = "down";else if (data.dy < 0) this.direction = "up";
      this.x += data.dx * this.speed;
      this.y += data.dy * this.speed;
      this.clampToBounds();
    }
  }, {
    key: "clampToBounds",
    value: function clampToBounds() {
      this.x = Math.min(Math.max(this.x, this.bounds.minX), this.bounds.maxX);
      this.y = Math.min(Math.max(this.y, this.bounds.minY), this.bounds.maxY);
    }
  }]);
}(_EventListener2.EventListener);

},{"./Events/Event.ts":1,"./Events/EventListener":3}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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
  lines: ["Placeholder - to be written."]
}, {
  title: "Level 5 instruction here.",
  lines: ["Placeholder - to be written."]
}, {
  title: "Level 6 instruction here.",
  lines: ["Placeholder - to be written."]
}, {
  title: "Level 7 instruction here.",
  lines: ["Placeholder - to be written."]
}, {
  title: "Level 8 instruction here.",
  lines: ["Placeholder - to be written."]
}, {
  title: "Level 9 instruction here.",
  lines: ["Placeholder - to be written."]
}, {
  title: "Level 10 instruction here.",
  lines: ["Placeholder - to be written."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}, {
  title: "Movement Practice",
  lines: ["Use W, A, S, and D to move the player.", "The sprite changes direction with each move."]
}];

},{}],8:[function(require,module,exports){
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

},{"../layout":6,"../renderer":15,"../theme":19}],9:[function(require,module,exports){
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

},{"../layout":6,"../theme":19}],10:[function(require,module,exports){
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

},{"../layout":6,"../theme":19}],11:[function(require,module,exports){
"use strict";

var _renderer = require("./renderer");
var _MainMenu = require("./screens/MainMenu");
var _LevelSelect = require("./screens/LevelSelect");
var _Level = require("./screens/Level");
var _PauseOverlay = require("./overlays/PauseOverlay");
var _ControlsOverlay = require("./overlays/ControlsOverlay");
var _GameOverOverlay = require("./overlays/GameOverOverlay");
var _layout = require("./layout");
var _EventEmitter = require("../Helpers/Events/EventEmitter");
var _InputManager = require("../Helpers/InputManager");
var _PlayerControl = require("../Helpers/PlayerControl");
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
  var state = {
    currentScreen: "mainmenu",
    currentLevel: 1,
    lives: 3,
    paused: false,
    controlsOpen: false,
    darkMode: true,
    storyTitle: "Outside-the-Box Thinking Certification",
    storyLines: ["Complete this assessment to earn your OtB Thinking Certificate.", "Demonstrate your ability to approach problems from unconventional angles.", "Candidates who pass may list this credential on their LinkedIn or resume."],
    playerName: "Box",
    nameInput: "",
    nameFocused: false,
    playMode: "play",
    gameOver: false
  };
  var emitter = new _EventEmitter.EventEmitter();
  var input = new _InputManager.InputManager(emitter);
  var player = new _PlayerControl.PlayerControl(emitter);
  var previousLevel = state.currentLevel;
  var previousScreen = state.currentScreen;
  var gc = {
    ctx: ctx,
    state: state,
    hitAreas: [],
    render: function render() {},
    loseLife: function loseLife() {},
    resetPlayerName: function resetPlayerName() {},
    displayFont: "\"Trebuchet MS\", \"Verdana\", sans-serif",
    bodyFont: "\"Trebuchet MS\", \"Arial\", sans-serif",
    logo: new Image(),
    gameplayFrame: new Image(),
    logoLoaded: false,
    gameplayFrameLoaded: false,
    player: player
  };
  var isMovementLevel = function isMovementLevel(level) {
    return level >= 11 && level <= 20;
  };
  var syncPlayerToLayout = function syncPlayerToLayout() {
    var resetPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var _getLayout = (0, _layout.getLayout)(ctx),
      topInnerX = _getLayout.topInnerX,
      topInnerY = _getLayout.topInnerY,
      topInnerWidth = _getLayout.topInnerWidth,
      topInnerHeight = _getLayout.topInnerHeight;
    var minX = topInnerX;
    var minY = topInnerY;
    var maxX = topInnerX + topInnerWidth - player.width;
    var maxY = topInnerY + topInnerHeight - player.height;
    player.setBounds(minX, minY, maxX, maxY);
    if (resetPosition) {
      player.resetPosition(minX + (topInnerWidth - player.width) / 2, minY + (topInnerHeight - player.height) / 2);
    }
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
    var enteringMovementLevel = gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel) && (previousScreen !== "level" || previousLevel !== gc.state.currentLevel);
    if (enteringMovementLevel) {
      syncPlayerToLayout(true);
    } else if (gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel)) {
      syncPlayerToLayout(false);
    }
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
    previousLevel = gc.state.currentLevel;
    previousScreen = gc.state.currentScreen;
  };
  var resizeCanvases = function resizeCanvases() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    gameCanvas.width = debugCanvas.width = w;
    gameCanvas.height = debugCanvas.height = h;
    syncPlayerToLayout(false);
  };
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
    var over = gc.hitAreas.some(function (area) {
      return x >= area.x && x <= area.x + area.w && y >= area.y && y <= area.y + area.h;
    });
    gameCanvas.style.cursor = over ? "pointer" : "default";
  });
  window.addEventListener("keydown", function (e) {
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
  setInterval(function () {
    if (gc.state.nameFocused) gc.render();
  }, 530);
  gc.logo.onload = function () {
    gc.logoLoaded = true;
    gc.render();
  };
  gc.logo.onerror = function () {
    gc.logoLoaded = false;
    gc.render();
  };
  gc.logo.src = "/benchmark2/assets/logo.png";
  resizeCanvases();
  gc.render();
  var _gameLoop = function gameLoop() {
    if (gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel) && !gc.state.paused && !gc.state.controlsOpen && !gc.state.gameOver) {
      input.update();
      player.update();
      gc.render();
    }
    requestAnimationFrame(_gameLoop);
  };
  _gameLoop();
};

},{"../Helpers/Events/EventEmitter":2,"../Helpers/InputManager":4,"../Helpers/PlayerControl":5,"./layout":6,"./overlays/ControlsOverlay":12,"./overlays/GameOverOverlay":13,"./overlays/PauseOverlay":14,"./renderer":15,"./screens/Level":16,"./screens/LevelSelect":17,"./screens/MainMenu":18}],12:[function(require,module,exports){
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

},{"../layout":6,"../renderer":15,"../theme":19}],13:[function(require,module,exports){
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

},{"../layout":6,"../renderer":15}],14:[function(require,module,exports){
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

},{"../layout":6,"../renderer":15,"../theme":19}],15:[function(require,module,exports){
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

},{"./layout":6,"./levelData":7,"./theme":19}],16:[function(require,module,exports){
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
var drawLevelNavigation = function drawLevelNavigation(gc) {
  var ctx = gc.ctx,
    state = gc.state;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    topBoxX = _getLayout.topBoxX,
    topBoxY = _getLayout.topBoxY,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight;
  var cx = w / 2;
  var navBtnH = 42;
  var navBtnW = 150;
  var navY = topBoxY + topBoxHeight * 0.79;
  if (state.playMode !== "levelselect") {
    return;
  }
  if (state.currentLevel > 1) {
    (0, _renderer.drawButton)(gc, "<- PREV", topBoxX + topBoxWidth * 0.05, navY, navBtnW, navBtnH, function () {
      state.currentLevel--;
      gc.render();
    }, 18);
  }
  (0, _renderer.drawButton)(gc, "LEVEL SELECT", cx - navBtnW / 2, navY, navBtnW, navBtnH, function () {
    gc.resetPlayerName();
    state.currentScreen = "levelselect";
    gc.render();
  }, 16);
  if (state.currentLevel < _levelData.LEVEL_COUNT) {
    (0, _renderer.drawButton)(gc, "NEXT ->", topBoxX + topBoxWidth * 0.77, navY, navBtnW, navBtnH, function () {
      state.currentLevel++;
      gc.render();
    }, 18);
  }
};
var drawLevel = exports.drawLevel = function drawLevel(gc) {
  var ctx = gc.ctx,
    state = gc.state,
    displayFont = gc.displayFont,
    bodyFont = gc.bodyFont;
  var _getLayout2 = (0, _layout.getLayout)(ctx),
    w = _getLayout2.w,
    topBoxY = _getLayout2.topBoxY,
    topBoxWidth = _getLayout2.topBoxWidth,
    topBoxHeight = _getLayout2.topBoxHeight,
    topInnerX = _getLayout2.topInnerX,
    topInnerY = _getLayout2.topInnerY,
    topInnerWidth = _getLayout2.topInnerWidth,
    topInnerHeight = _getLayout2.topInnerHeight;
  var cx = w / 2;
  var lvl = state.currentLevel;
  var t = (0, _theme.getTheme)(state);
  if (lvl === 1) {
    (0, _Level.drawNameEntry)(gc);
    (0, _renderer.drawLevelHUD)(gc);
    return;
  }
  if (lvl === 2) {
    (0, _Level2.drawLevel2)(gc);
    (0, _renderer.drawLevelHUD)(gc);
    return;
  }
  if (lvl === 3) {
    (0, _Level3.drawLevel3)(gc);
    (0, _renderer.drawLevelHUD)(gc);
    return;
  }
  if (lvl >= 11 && lvl <= 20) {
    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 34px ".concat(displayFont);
    ctx.fillText("LEVEL ".concat(lvl), cx, topBoxY + topBoxHeight * 0.12);
    ctx.font = "21px ".concat(bodyFont);
    ctx.fillStyle = t.fgMid;
    ctx.fillText("Use WASD to move the player inside the frame.", cx, topBoxY + topBoxHeight * 0.22, topBoxWidth * 0.72);
    ctx.strokeStyle = t.divider;
    ctx.lineWidth = 2;
    ctx.strokeRect(topInnerX, topInnerY, topInnerWidth, topInnerHeight);
    gc.player.draw(ctx);
    drawLevelNavigation(gc);
    (0, _renderer.drawLevelHUD)(gc);
    return;
  }
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
  drawLevelNavigation(gc);
  (0, _renderer.drawLevelHUD)(gc);
};

},{"../layout":6,"../levelData":7,"../levels/Level1":8,"../levels/Level2":9,"../levels/Level3":10,"../renderer":15,"../theme":19}],17:[function(require,module,exports){
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
    var isMovementLevel = lvl >= 11 && lvl <= 20;
    ctx.strokeStyle = isMovementLevel ? t.divider : t.stroke;
    ctx.lineWidth = isMovementLevel ? 2 : 3;
    ctx.strokeRect(tx, ty, tileW, tileH);
    ctx.fillStyle = isMovementLevel ? t.fgMid : t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 20px ".concat(displayFont);
    ctx.fillText("".concat(lvl), tx + tileW / 2, ty + tileH * 0.38);
    ctx.font = "10px ".concat(bodyFont);
    ctx.fillStyle = t.fgDim;
    ctx.fillText(isMovementLevel ? "move" : "LEVEL ".concat(lvl), tx + tileW / 2, ty + tileH * 0.74);
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
  var backW = 150;
  var backH = 42;
  var backX = topBoxX + topBoxWidth * 0.04;
  var backY = topBoxY + topBoxHeight * 0.82;
  (0, _renderer.drawButton)(gc, "<- BACK", backX, backY, backW, backH, function () {
    gc.resetPlayerName();
    state.currentScreen = "mainmenu";
    gc.render();
  }, 18);
};

},{"../layout":6,"../levelData":7,"../renderer":15,"../theme":19}],18:[function(require,module,exports){
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

},{"../layout":6,"../renderer":15,"../theme":19}],19:[function(require,module,exports){
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

},{}]},{},[11])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9FdmVudHMvRXZlbnQudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9FdmVudHMvRXZlbnRFbWl0dGVyLnRzIiwib3V0c2lkZS10aGUtYm94L0hlbHBlcnMvRXZlbnRzL0V2ZW50TGlzdGVuZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9JbnB1dE1hbmFnZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9QbGF5ZXJDb250cm9sLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGF5b3V0LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxEYXRhLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxzL0xldmVsMS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVscy9MZXZlbDIudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbHMvTGV2ZWwzLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbWFpbi50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL292ZXJsYXlzL0NvbnRyb2xzT3ZlcmxheS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL292ZXJsYXlzL0dhbWVPdmVyT3ZlcmxheS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL292ZXJsYXlzL1BhdXNlT3ZlcmxheS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3JlbmRlcmVyLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvc2NyZWVucy9MZXZlbC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3NjcmVlbnMvTGV2ZWxTZWxlY3QudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9zY3JlZW5zL01haW5NZW51LnRz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d0JBQUEsTUFBQSx1QkFBQSxNQUFBLENBQUEsUUFBQSxhQUFBLENBQUEsa0JBQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsQ0FBQSx5QkFBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLE1BQUEsQ0FBQSxTQUFBLHFCQUFBLENBQUEsS0FBQSxPQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxhQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLFlBQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsY0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxpQkFBQSxRQUFBLFNBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFlBQUEsQ0FBQSxHQUFBLGNBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsTUFBQSxZQUFBLE1BQUEsUUFBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxFQUFBLENB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QUFBLENBQUEsNkJBQUEsQ0FBQSxhQUFBLENBQUEsWUFBQSxTQUFBLHdEQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQSxXQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLE1BQUEsWUFBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxpQkFBQSxRQUFBLFNBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsS0FBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsR0FBQSxjQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE1BQUEsWUFBQSxNQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxrQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0NB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QUFLLEVBQUUsQ0FBQyxpREFBaUQ7QUFDM0QsQ0FBQyxFQUNEO0VBQUUsS0FBSyxFQUFFLGVBQWU7RUFBRSxLQUFLLEVBQUU7QUFBRyxDQUFDLEVBQ3JDO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDRCQUE0QjtFQUNuQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUs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QUFBLE1BQUEsQ0FBQSxZQUFBLEVBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLEtBQUEsSUFBQSxXQUFBLElBQUEsTUFBQSxLQUFBLEVBQUEsQ0FBQSxDQUFBLEVBQUEsVUFBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxLQUFBLENBQUEsRUFBQSxDQUFBLGdCQUFBLFNBQUEsaUpBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLGdCQUFBLENBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLFdBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLEVBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxVQUFBLENBQUEsWUFBQSxDQUFBLGNBQUEsQ0FBQSw4QkFBQSxDQUFBLFFBQUEsQ0FBQTtBQUFBLFNBQUEsNEJBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLDJCQUFBLENBQUEsU0FBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLEtBQUEsNkJBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLG9CQUFBLENBQUEsK0NBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSxrQkFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFB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QUFFLHdCQUF3QjtJQUNuQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0FBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBFdmVudHMudHNcclxuXHJcbmV4cG9ydCBlbnVtIEdhbWVFdmVudCB7XHJcbiAgICBNT1ZFID0gXCJNT1ZFXCIsXHJcbiAgICBEQVNIID0gXCJEQVNIXCIsXHJcbiAgICBIT0xEID0gXCJIT0xEXCJcclxufVxyXG5cclxuLy8gUGF5bG9hZCB0eXBlcyBmb3IgZWFjaCBldmVudFxyXG5leHBvcnQgaW50ZXJmYWNlIE1vdmVFdmVudFBheWxvYWQge1xyXG4gICAgZHg6IG51bWJlcjtcclxuICAgIGR5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGFzaEV2ZW50UGF5bG9hZCB7fVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb2xkRXZlbnRQYXlsb2FkIHt9IiwiLy8gRXZlbnRFbWl0dGVyLnRzXHJcblxyXG50eXBlIEV2ZW50Q2FsbGJhY2s8VCA9IGFueT4gPSAocGF5bG9hZDogVCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IE1hcDxzdHJpbmcsIEV2ZW50Q2FsbGJhY2tbXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgcHVibGljIG9uPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudENhbGxiYWNrPFQ+KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChldmVudCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpIS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudENhbGxiYWNrPFQ+KSB7XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KTtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQoXHJcbiAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICBjYWxsYmFja3MuZmlsdGVyKGNiID0+IGNiICE9PSBjYWxsYmFjaylcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbWl0PFQ+KGV2ZW50OiBzdHJpbmcsIHBheWxvYWQ6IFQpIHtcclxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpO1xyXG4gICAgICAgIGlmICghY2FsbGJhY2tzKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2Igb2YgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIGNiKHBheWxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEV2ZW50TGlzdGVuZXIudHNcclxuXHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0V2ZW50RW1pdHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXIge1xyXG4gICAgcHJvdGVjdGVkIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbWl0dGVyOiBFdmVudEVtaXR0ZXIpIHtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsaXN0ZW48VD4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IChwYXlsb2FkOiBUKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLm9uKGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0b3BMaXN0ZW5pbmc8VD4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IChwYXlsb2FkOiBUKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLm9mZihldmVudCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vRXZlbnRzL0V2ZW50RW1pdHRlclwiO1xyXG5pbXBvcnQgeyBHYW1lRXZlbnQsIE1vdmVFdmVudFBheWxvYWQgfSBmcm9tIFwiLi9FdmVudHMvRXZlbnQudHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xuICAgIHByaXZhdGUga2V5czogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgICBwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vdmVtZW50S2V5cyA9IG5ldyBTZXQoW1wid1wiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcIiBcIiwgXCJoXCJdKTtcblxyXG4gICAgY29uc3RydWN0b3IoZW1pdHRlcjogRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB0aGlzLm9uS2V5RG93bihlKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4gdGhpcy5vbktleVVwKGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5rZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50S2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5rZXlzW2tleV0gPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IGR4ID0gMDtcclxuICAgICAgICBsZXQgZHkgPSAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wid1wiXSkgZHkgLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wic1wiXSkgZHkgKz0gMTtcclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiYVwiXSkgZHggLT0gMTtcclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiZFwiXSkgZHggKz0gMTtcclxuXHJcbiAgICAgICAgaWYgKGR4ICE9PSAwIHx8IGR5ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KEdhbWVFdmVudC5NT1ZFLCB7IGR4LCBkeSB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCIgXCJdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KEdhbWVFdmVudC5EQVNILCB7fSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5rZXlzW1wiaFwiXSkge1xyXG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChHYW1lRXZlbnQuSE9MRCwge30pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuIiwiaW1wb3J0IHsgRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL0V2ZW50cy9FdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi9FdmVudHMvRXZlbnRFbWl0dGVyXCI7XG5pbXBvcnQgeyBHYW1lRXZlbnQsIE1vdmVFdmVudFBheWxvYWQgfSBmcm9tIFwiLi9FdmVudHMvRXZlbnQudHNcIjtcblxudHlwZSBEaXJlY3Rpb24gPSBcInVwXCIgfCBcImRvd25cIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbCBleHRlbmRzIEV2ZW50TGlzdGVuZXIge1xuICAgIHB1YmxpYyB4ID0gMDtcbiAgICBwdWJsaWMgeSA9IDA7XG4gICAgcHVibGljIHJlYWRvbmx5IHdpZHRoID0gNDg7XG4gICAgcHVibGljIHJlYWRvbmx5IGhlaWdodCA9IDQ4O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZCA9IDU7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IERpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3ByaXRlczogUmVjb3JkPERpcmVjdGlvbiwgSFRNTEltYWdlRWxlbWVudD47XG4gICAgcHJpdmF0ZSBib3VuZHMgPSB7XG4gICAgICAgIG1pblg6IDAsXG4gICAgICAgIG1heFg6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICAgICAgbWluWTogMCxcbiAgICAgICAgbWF4WTogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihlbWl0dGVyOiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgICAgc3VwZXIoZW1pdHRlcik7XG5cbiAgICAgICAgdGhpcy5zcHJpdGVzID0ge1xuICAgICAgICAgICAgdXA6IHRoaXMubG9hZFNwcml0ZShcIi9iZW5jaG1hcmsyL2Fzc2V0cy9wbGF5ZXIvUGxheWVyX1VwLnBuZ1wiKSxcbiAgICAgICAgICAgIGRvd246IHRoaXMubG9hZFNwcml0ZShcIi9iZW5jaG1hcmsyL2Fzc2V0cy9wbGF5ZXIvUGxheWVyX0Rvd24ucG5nXCIpLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5sb2FkU3ByaXRlKFwiL2JlbmNobWFyazIvYXNzZXRzL3BsYXllci9QbGF5ZXJfTGVmdC5wbmdcIiksXG4gICAgICAgICAgICByaWdodDogdGhpcy5sb2FkU3ByaXRlKFwiL2JlbmNobWFyazIvYXNzZXRzL3BsYXllci9QbGF5ZXJfUmlnaHQucG5nXCIpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMueCA9IDQwMDtcbiAgICAgICAgdGhpcy55ID0gMzAwO1xuXG4gICAgICAgIHRoaXMubGlzdGVuPE1vdmVFdmVudFBheWxvYWQ+KEdhbWVFdmVudC5NT1ZFLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpc3RlbihHYW1lRXZlbnQuREFTSCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEYXNoIHRyaWdnZXJlZFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW4oR2FtZUV2ZW50LkhPTEQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3BlY2lhbCB0cmlnZ2VyZWRcIik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKSB7fVxuXG4gICAgcHVibGljIHNldEJvdW5kcyhtaW5YOiBudW1iZXIsIG1pblk6IG51bWJlciwgbWF4WDogbnVtYmVyLCBtYXhZOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5ib3VuZHMgPSB7IG1pblgsIG1pblksIG1heFgsIG1heFkgfTtcbiAgICAgICAgdGhpcy5jbGFtcFRvQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uID0gXCJkb3duXCIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuY2xhbXBUb0JvdW5kcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuc3ByaXRlc1t0aGlzLmRpcmVjdGlvbl07XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jb21wbGV0ZSAmJiBzcHJpdGUubmF0dXJhbFdpZHRoID4gMCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZTUzOTM1XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNwcml0ZShzcmM6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3ByaXRlLnNyYyA9IHNyYztcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmUoZGF0YTogTW92ZUV2ZW50UGF5bG9hZCkge1xuICAgICAgICBpZiAoZGF0YS5keCA+IDApIHRoaXMuZGlyZWN0aW9uID0gXCJyaWdodFwiO1xuICAgICAgICBlbHNlIGlmIChkYXRhLmR4IDwgMCkgdGhpcy5kaXJlY3Rpb24gPSBcImxlZnRcIjtcbiAgICAgICAgZWxzZSBpZiAoZGF0YS5keSA+IDApIHRoaXMuZGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgICAgIGVsc2UgaWYgKGRhdGEuZHkgPCAwKSB0aGlzLmRpcmVjdGlvbiA9IFwidXBcIjtcblxuICAgICAgICB0aGlzLnggKz0gZGF0YS5keCAqIHRoaXMuc3BlZWQ7XG4gICAgICAgIHRoaXMueSArPSBkYXRhLmR5ICogdGhpcy5zcGVlZDtcbiAgICAgICAgdGhpcy5jbGFtcFRvQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGFtcFRvQm91bmRzKCkge1xuICAgICAgICB0aGlzLnggPSBNYXRoLm1pbihNYXRoLm1heCh0aGlzLngsIHRoaXMuYm91bmRzLm1pblgpLCB0aGlzLmJvdW5kcy5tYXhYKTtcbiAgICAgICAgdGhpcy55ID0gTWF0aC5taW4oTWF0aC5tYXgodGhpcy55LCB0aGlzLmJvdW5kcy5taW5ZKSwgdGhpcy5ib3VuZHMubWF4WSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGdldExheW91dCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xyXG4gIGNvbnN0IHcgPSBjdHguY2FudmFzLndpZHRoO1xyXG4gIGNvbnN0IGggPSBjdHguY2FudmFzLmhlaWdodDtcclxuXHJcbiAgY29uc3QgY29udGVudFdpZHRoID0gdyAqIDAuODQ7XHJcbiAgY29uc3QgY29udGVudFggPSAodyAtIGNvbnRlbnRXaWR0aCkgLyAyO1xyXG4gIGNvbnN0IGxvZ29ZID0gaCAqIDAuMDg7XHJcblxyXG4gIGNvbnN0IHRvcEJveFdpZHRoID0gY29udGVudFdpZHRoO1xyXG4gIGNvbnN0IHRvcEJveEhlaWdodCA9IGggKiAwLjQ4O1xyXG4gIGNvbnN0IHRvcEJveFggPSBjb250ZW50WDtcclxuICBjb25zdCB0b3BCb3hZID0gaCAqIDAuMTg7XHJcblxyXG4gIC8vIFNhZmUgY29udGVudCBhcmVhIGluc2lkZSB0aGUgZGVjb3JhdGl2ZSBmcmFtZVxyXG4gIGNvbnN0IHRvcElubmVyV2lkdGggPSB0b3BCb3hXaWR0aCAqIDAuNDI7XHJcbiAgY29uc3QgdG9wSW5uZXJIZWlnaHQgPSB0b3BCb3hIZWlnaHQgKiAwLjYyO1xyXG4gIGNvbnN0IHRvcElubmVyWCA9IHcgLyAyIC0gdG9wSW5uZXJXaWR0aCAvIDI7XHJcbiAgY29uc3QgdG9wSW5uZXJZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTY7XHJcblxyXG4gIGNvbnN0IGdhcCA9IGggKiAwLjA0O1xyXG4gIGNvbnN0IGJvdHRvbUJveFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICsgZ2FwO1xyXG4gIGNvbnN0IGJvdHRvbUJveEhlaWdodCA9IGggKiAwLjIyO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdyxcclxuICAgIGgsXHJcbiAgICBjb250ZW50V2lkdGgsXHJcbiAgICBjb250ZW50WCxcclxuICAgIGxvZ29ZLFxyXG4gICAgdG9wQm94WCxcclxuICAgIHRvcEJveFksXHJcbiAgICB0b3BCb3hXaWR0aCxcclxuICAgIHRvcEJveEhlaWdodCxcclxuICAgIHRvcElubmVyWCxcclxuICAgIHRvcElubmVyWSxcclxuICAgIHRvcElubmVyV2lkdGgsXHJcbiAgICB0b3BJbm5lckhlaWdodCxcclxuICAgIGJvdHRvbUJveFksXHJcbiAgICBib3R0b21Cb3hIZWlnaHQsXHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGNvbnN0IExFVkVMX0NPVU5UID0gMjA7XG5cbmV4cG9ydCBjb25zdCBMRVZFTF9EQVRBOiB7IHRpdGxlOiBzdHJpbmc7IGxpbmVzOiBzdHJpbmdbXSB9W10gPSBbXG4gIHtcbiAgICB0aXRsZTogXCJXaGF0J3MgeW91ciBuYW1lP1wiLFxuICAgIGxpbmVzOiBbXCJFbnRlciB5b3VyIG5hbWUgYmVsb3cuXCIsIFwiTGVhdmUgaXQgYmxhbmsgYW5kIHdlJ2xsIGNhbGwgeW91IEJveC5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJXaGF0IGlzIDE1ICsgMTU/XCIsXG4gICAgbGluZXM6IFtcIlBpY2sgdGhlIGNvcnJlY3QgYW5zd2VyIGZyb20gdGhlIG9wdGlvbnMgYWJvdmUuXCJdLFxuICB9LFxuICB7IHRpdGxlOiBcIkNsaWNrIHRoZSBkb3RcIiwgbGluZXM6IFtdIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA0IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA1IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA2IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA3IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA4IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCA5IGluc3RydWN0aW9uIGhlcmUuXCIsXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMZXZlbCAxMCBpbnN0cnVjdGlvbiBoZXJlLlwiLFxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTW92ZW1lbnQgUHJhY3RpY2VcIixcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxuICAgIGxpbmVzOiBbXCJVc2UgVywgQSwgUywgYW5kIEQgdG8gbW92ZSB0aGUgcGxheWVyLlwiLCBcIlRoZSBzcHJpdGUgY2hhbmdlcyBkaXJlY3Rpb24gd2l0aCBlYWNoIG1vdmUuXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTW92ZW1lbnQgUHJhY3RpY2VcIixcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxuICAgIGxpbmVzOiBbXCJVc2UgVywgQSwgUywgYW5kIEQgdG8gbW92ZSB0aGUgcGxheWVyLlwiLCBcIlRoZSBzcHJpdGUgY2hhbmdlcyBkaXJlY3Rpb24gd2l0aCBlYWNoIG1vdmUuXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTW92ZW1lbnQgUHJhY3RpY2VcIixcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxuICAgIGxpbmVzOiBbXCJVc2UgVywgQSwgUywgYW5kIEQgdG8gbW92ZSB0aGUgcGxheWVyLlwiLCBcIlRoZSBzcHJpdGUgY2hhbmdlcyBkaXJlY3Rpb24gd2l0aCBlYWNoIG1vdmUuXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTW92ZW1lbnQgUHJhY3RpY2VcIixcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcbiAgfSxcbl07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TmFtZUVudHJ5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUHJvbXB0XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJXaGF0J3MgeW91ciBuYW1lP1wiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMik7XHJcblxyXG4gIGN0eC5mb250ID0gYDE4cHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIFwiTGVhdmUgaXQgYmxhbmsgYW5kIHdlJ2xsIGNhbGwgeW91IEJveC5cIixcclxuICAgIGN4LFxyXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzIsXHJcbiAgICB0b3BCb3hXaWR0aCAqIDAuNjUsXHJcbiAgKTtcclxuXHJcbiAgLy8gSW5wdXQgYm94XHJcbiAgY29uc3QgaW5wdXRXID0gdG9wQm94V2lkdGggKiAwLjU7XHJcbiAgY29uc3QgaW5wdXRIID0gNTI7XHJcbiAgY29uc3QgaW5wdXRYID0gY3ggLSBpbnB1dFcgLyAyO1xyXG4gIGNvbnN0IGlucHV0WSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjQyO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBzdGF0ZS5uYW1lRm9jdXNlZFxyXG4gICAgPyBzdGF0ZS5kYXJrTW9kZVxyXG4gICAgICA/IFwiI2ZmZmZmZlwiXHJcbiAgICAgIDogXCIjMTExMTExXCJcclxuICAgIDogdC5kaXZpZGVyO1xyXG4gIGN0eC5saW5lV2lkdGggPSBzdGF0ZS5uYW1lRm9jdXNlZCA/IDMgOiAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KGlucHV0WCwgaW5wdXRZLCBpbnB1dFcsIGlucHV0SCk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlUZXh0ID1cclxuICAgIHN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPiAwXHJcbiAgICAgID8gc3RhdGUubmFtZUlucHV0XHJcbiAgICAgIDogc3RhdGUubmFtZUZvY3VzZWRcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IFwiVHlwZSB5b3VyIG5hbWXigKZcIjtcclxuICBjdHguZmlsbFN0eWxlID0gc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA+IDAgPyB0LmZnIDogdC5mZ0RpbTtcclxuICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgMjJweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KGRpc3BsYXlUZXh0LCBpbnB1dFggKyAxNCwgaW5wdXRZICsgaW5wdXRIIC8gMiwgaW5wdXRXIC0gMjgpO1xyXG5cclxuICAvLyBCbGlua2luZyBjdXJzb3JcclxuICBpZiAoc3RhdGUubmFtZUZvY3VzZWQpIHtcclxuICAgIGNvbnN0IG1lYXN1cmVkID0gY3R4Lm1lYXN1cmVUZXh0KHN0YXRlLm5hbWVJbnB1dCkud2lkdGg7XHJcbiAgICBjb25zdCBjdXJzb3JYID0gaW5wdXRYICsgMTQgKyBNYXRoLm1pbihtZWFzdXJlZCwgaW5wdXRXIC0gMjgpO1xyXG4gICAgY29uc3QgY3Vyc29yWSA9IGlucHV0WSArIGlucHV0SCAqIDAuMjtcclxuICAgIGNvbnN0IGN1cnNvckggPSBpbnB1dEggKiAwLjY7XHJcbiAgICBjb25zdCBibGluayA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDUzMCkgJSAyID09PSAwO1xyXG4gICAgaWYgKGJsaW5rKSB7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuZmc7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oY3Vyc29yWCwgY3Vyc29yWSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY3Vyc29yWCwgY3Vyc29yWSArIGN1cnNvckgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbnB1dCBib3ggaGl0IGFyZWFcclxuICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgIHg6IGlucHV0WCxcclxuICAgIHk6IGlucHV0WSxcclxuICAgIHc6IGlucHV0VyxcclxuICAgIGg6IGlucHV0SCxcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gQ29uZmlybSBidXR0b25cclxuICBjb25zdCBjb25maXJtVyA9IDE4MDtcclxuICBjb25zdCBjb25maXJtSCA9IDQ4O1xyXG4gIGRyYXdCdXR0b24oXHJcbiAgICBnYyxcclxuICAgIFwiQ09ORklSTSDihpJcIixcclxuICAgIGN4IC0gY29uZmlybVcgLyAyLFxyXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNjIsXHJcbiAgICBjb25maXJtVyxcclxuICAgIGNvbmZpcm1ILFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5wbGF5ZXJOYW1lID0gc3RhdGUubmFtZUlucHV0LnRyaW0oKSB8fCBcIkJveFwiO1xyXG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICAyMCxcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMiA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUXVlc3Rpb24gaGVhZGVyXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJXaGF0IGlzIDE1ICsgMTU/XCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNCk7XHJcblxyXG4gIC8vIDLDlzIgYW5zd2VyIGdyaWRcclxuICBjb25zdCBhbnN3ZXJzID0gW1xyXG4gICAgeyBsYWJlbDogXCIyNVwiLCBjb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgeyBsYWJlbDogXCIzMFwiLCBjb3JyZWN0OiB0cnVlIH0sXHJcbiAgICB7IGxhYmVsOiBcIjI4XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICB7IGxhYmVsOiBcIjM1XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY29scyA9IDI7XHJcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcclxuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XHJcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcclxuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcclxuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XHJcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XHJcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XHJcbiAgICBjb25zdCBhbnMgPSBhbnN3ZXJzW2ldO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZvbnQgPSBgYm9sZCAzNnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChhbnMubGFiZWwsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XHJcblxyXG4gICAgY29uc3QgY2FwdHVyZWQgPSBhbnMuY29ycmVjdDtcclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcHR1cmVkKSB7XHJcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAzO1xyXG4gICAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdjLmxvc2VMaWZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMyA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0LCBib3R0b21Cb3hZIH0gPVxyXG4gICAgZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICAvLyAyw5cyIGdyaWQgb2YgZGVjb3kgb3B0aW9ucyDigJQgYWxsIHdyb25nXHJcbiAgY29uc3QgY29scyA9IDI7XHJcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcclxuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XHJcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcclxuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcclxuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgY29uc3QgY29sID0gaSAlIGNvbHM7XHJcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2xzKTtcclxuICAgIGNvbnN0IHR4ID0gZ3JpZFggKyBjb2wgKiAodGlsZVcgKyBoR2FwKTtcclxuICAgIGNvbnN0IHR5ID0gZ3JpZFkgKyByb3cgKiAodGlsZUggKyB2R2FwKTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAvLyBUaGUgd29yZCBcImRvdFwiXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcImRvdFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xyXG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgIC8vIEEgbGl0ZXJhbCBkb3RcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMiwgMTAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xyXG4gICAgICAvLyBUaHJlZSBkb3RzXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIuKAoiDigKIg4oCiXCIsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBEZXBhcnRtZW50IG9mIFNhbml0YXRpb25cclxuICAgICAgY3R4LmZvbnQgPSBgYm9sZCAxNXB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiRGVwYXJ0bWVudFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuMzQsIHRpbGVXIC0gMTYpO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJvZiBTYW5pdGF0aW9uXCIsXHJcbiAgICAgICAgdHggKyB0aWxlVyAvIDIsXHJcbiAgICAgICAgdHkgKyB0aWxlSCAqIDAuNTcsXHJcbiAgICAgICAgdGlsZVcgLSAxNixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCIoRC5PLlMuKVwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuNzgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiBnYy5sb3NlTGlmZSgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIaWRkZW4gaGl0IGFyZWE6IHRoZSB0aXR0bGUgKGRvdCkgb24gdGhlICdpJyBpbiBcIkNsaWNrXCIgaW4gdGhlIGJvdHRvbSBwYW5lbC5cclxuICAvLyBCb3R0b20gcGFuZWwgdGl0bGUgXCJDbGljayB0aGUgZG90LlwiIGlzIGRyYXduIGJvbGQgMzBweCwgY2VudGVyZWQgYXQgKHcvMiwgYm90dG9tQm94WSsxOCksXHJcbiAgLy8gdGV4dEJhc2VsaW5lPVwidG9wXCIuIFdlIG1lYXN1cmUgdG8gZmluZCB0aGUgJ2knIHgtcG9zaXRpb24sIHRoZW4gZXN0aW1hdGUgdGhlIHRpdHRsZSdzIHkuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjb25zdCBmdWxsU3RyID0gXCJDbGljayB0aGUgZG90XCI7XHJcbiAgY29uc3QgZnVsbFcgPSBjdHgubWVhc3VyZVRleHQoZnVsbFN0cikud2lkdGg7XHJcbiAgY29uc3QgdGV4dExlZnQgPSBjeCAtIGZ1bGxXIC8gMjtcclxuICBjb25zdCBwcmVmaXhXID0gY3R4Lm1lYXN1cmVUZXh0KFwiQ2xcIikud2lkdGg7XHJcbiAgY29uc3QgaUNoYXJXID0gY3R4Lm1lYXN1cmVUZXh0KFwiaVwiKS53aWR0aDtcclxuICBjb25zdCBpRG90Q1ggPSB0ZXh0TGVmdCArIHByZWZpeFcgKyBpQ2hhclcgLyAyO1xyXG4gIGNvbnN0IGlEb3RDWSA9IGJvdHRvbUJveFkgKyAxOCArIDU7IC8vIH41cHggYmVsb3cgdG9wIGJhc2VsaW5lIOKJiCB0aXR0bGUgcG9zaXRpb25cclxuICBjb25zdCBoaXRSID0gMTA7XHJcblxyXG4gIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgeDogaURvdENYIC0gaGl0UixcclxuICAgIHk6IGlEb3RDWSAtIGhpdFIsXHJcbiAgICB3OiBoaXRSICogMixcclxuICAgIGg6IGhpdFIgKiAyLFxyXG4gICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDQ7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuIiwiY29uc29sZS5sb2coXCJCRU5DSE1BUksgMiBNQUlOIExPQURFRFwiKTtcblxuaW1wb3J0IHsgR2FtZUNvbnRleHQsIEdhbWVTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBkcmF3QmFja2dyb3VuZCwgZHJhd0xvZ28sIGRyYXdHYW1lcGxheUZyYW1lLCBkcmF3Qm90dG9tUGFuZWwgfSBmcm9tIFwiLi9yZW5kZXJlclwiO1xuaW1wb3J0IHsgZHJhd01haW5NZW51IH0gZnJvbSBcIi4vc2NyZWVucy9NYWluTWVudVwiO1xuaW1wb3J0IHsgZHJhd0xldmVsU2VsZWN0IH0gZnJvbSBcIi4vc2NyZWVucy9MZXZlbFNlbGVjdFwiO1xuaW1wb3J0IHsgZHJhd0xldmVsIH0gZnJvbSBcIi4vc2NyZWVucy9MZXZlbFwiO1xuaW1wb3J0IHsgZHJhd1BhdXNlT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlzL1BhdXNlT3ZlcmxheVwiO1xuaW1wb3J0IHsgZHJhd0NvbnRyb2xzT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlzL0NvbnRyb2xzT3ZlcmxheVwiO1xuaW1wb3J0IHsgZHJhd0dhbWVPdmVyT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlzL0dhbWVPdmVyT3ZlcmxheVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuLi9IZWxwZXJzL0V2ZW50cy9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuLi9IZWxwZXJzL0lucHV0TWFuYWdlclwiO1xuaW1wb3J0IHsgUGxheWVyQ29udHJvbCB9IGZyb20gXCIuLi9IZWxwZXJzL1BsYXllckNvbnRyb2xcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuICBjb25zdCBkZWJ1Z0NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWctY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgdGV4dENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuXG4gIGlmICghZ2FtZUNhbnZhcyB8fCAhZGVidWdDYW52YXMgfHwgIXRleHRDYW52YXMpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBvbmUgb3IgbW9yZSBjYW52YXMgZWxlbWVudHMuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZ2V0IDJEIGNvbnRleHQuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN0YXRlOiBHYW1lU3RhdGUgPSB7XG4gICAgY3VycmVudFNjcmVlbjogXCJtYWlubWVudVwiLFxuICAgIGN1cnJlbnRMZXZlbDogMSxcbiAgICBsaXZlczogMyxcbiAgICBwYXVzZWQ6IGZhbHNlLFxuICAgIGNvbnRyb2xzT3BlbjogZmFsc2UsXG4gICAgZGFya01vZGU6IHRydWUsXG4gICAgc3RvcnlUaXRsZTogXCJPdXRzaWRlLXRoZS1Cb3ggVGhpbmtpbmcgQ2VydGlmaWNhdGlvblwiLFxuICAgIHN0b3J5TGluZXM6IFtcbiAgICAgIFwiQ29tcGxldGUgdGhpcyBhc3Nlc3NtZW50IHRvIGVhcm4geW91ciBPdEIgVGhpbmtpbmcgQ2VydGlmaWNhdGUuXCIsXG4gICAgICBcIkRlbW9uc3RyYXRlIHlvdXIgYWJpbGl0eSB0byBhcHByb2FjaCBwcm9ibGVtcyBmcm9tIHVuY29udmVudGlvbmFsIGFuZ2xlcy5cIixcbiAgICAgIFwiQ2FuZGlkYXRlcyB3aG8gcGFzcyBtYXkgbGlzdCB0aGlzIGNyZWRlbnRpYWwgb24gdGhlaXIgTGlua2VkSW4gb3IgcmVzdW1lLlwiLFxuICAgIF0sXG4gICAgcGxheWVyTmFtZTogXCJCb3hcIixcbiAgICBuYW1lSW5wdXQ6IFwiXCIsXG4gICAgbmFtZUZvY3VzZWQ6IGZhbHNlLFxuICAgIHBsYXlNb2RlOiBcInBsYXlcIixcbiAgICBnYW1lT3ZlcjogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3QgaW5wdXQgPSBuZXcgSW5wdXRNYW5hZ2VyKGVtaXR0ZXIpO1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyQ29udHJvbChlbWl0dGVyKTtcbiAgbGV0IHByZXZpb3VzTGV2ZWwgPSBzdGF0ZS5jdXJyZW50TGV2ZWw7XG4gIGxldCBwcmV2aW91c1NjcmVlbiA9IHN0YXRlLmN1cnJlbnRTY3JlZW47XG5cbiAgY29uc3QgZ2M6IEdhbWVDb250ZXh0ID0ge1xuICAgIGN0eCxcbiAgICBzdGF0ZSxcbiAgICBoaXRBcmVhczogW10sXG4gICAgcmVuZGVyOiAoKSA9PiB7fSxcbiAgICBsb3NlTGlmZTogKCkgPT4ge30sXG4gICAgcmVzZXRQbGF5ZXJOYW1lOiAoKSA9PiB7fSxcbiAgICBkaXNwbGF5Rm9udDogYFwiVHJlYnVjaGV0IE1TXCIsIFwiVmVyZGFuYVwiLCBzYW5zLXNlcmlmYCxcbiAgICBib2R5Rm9udDogYFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZmAsXG4gICAgbG9nbzogbmV3IEltYWdlKCksXG4gICAgZ2FtZXBsYXlGcmFtZTogbmV3IEltYWdlKCksXG4gICAgbG9nb0xvYWRlZDogZmFsc2UsXG4gICAgZ2FtZXBsYXlGcmFtZUxvYWRlZDogZmFsc2UsXG4gICAgcGxheWVyLFxuICB9O1xuXG4gIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IChsZXZlbDogbnVtYmVyKSA9PiBsZXZlbCA+PSAxMSAmJiBsZXZlbCA8PSAyMDtcblxuICBjb25zdCBzeW5jUGxheWVyVG9MYXlvdXQgPSAocmVzZXRQb3NpdGlvbiA9IGZhbHNlKSA9PiB7XG4gICAgY29uc3QgeyB0b3BJbm5lclgsIHRvcElubmVyWSwgdG9wSW5uZXJXaWR0aCwgdG9wSW5uZXJIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICAgIGNvbnN0IG1pblggPSB0b3BJbm5lclg7XG4gICAgY29uc3QgbWluWSA9IHRvcElubmVyWTtcbiAgICBjb25zdCBtYXhYID0gdG9wSW5uZXJYICsgdG9wSW5uZXJXaWR0aCAtIHBsYXllci53aWR0aDtcbiAgICBjb25zdCBtYXhZID0gdG9wSW5uZXJZICsgdG9wSW5uZXJIZWlnaHQgLSBwbGF5ZXIuaGVpZ2h0O1xuXG4gICAgcGxheWVyLnNldEJvdW5kcyhtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZKTtcblxuICAgIGlmIChyZXNldFBvc2l0aW9uKSB7XG4gICAgICBwbGF5ZXIucmVzZXRQb3NpdGlvbihcbiAgICAgICAgbWluWCArICh0b3BJbm5lcldpZHRoIC0gcGxheWVyLndpZHRoKSAvIDIsXG4gICAgICAgIG1pblkgKyAodG9wSW5uZXJIZWlnaHQgLSBwbGF5ZXIuaGVpZ2h0KSAvIDIsXG4gICAgICApO1xuICAgIH1cbiAgfTtcblxuICBnYy5yZXNldFBsYXllck5hbWUgPSAoKSA9PiB7XG4gICAgZ2Muc3RhdGUucGxheWVyTmFtZSA9IFwiQm94XCI7XG4gICAgZ2Muc3RhdGUubmFtZUlucHV0ID0gXCJcIjtcbiAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xuICB9O1xuXG4gIGdjLmxvc2VMaWZlID0gKCkgPT4ge1xuICAgIGdjLnN0YXRlLmxpdmVzLS07XG4gICAgaWYgKGdjLnN0YXRlLmxpdmVzIDw9IDApIHtcbiAgICAgIGdjLnN0YXRlLmxpdmVzID0gMDtcbiAgICAgIGdjLnN0YXRlLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgZ2MucmVuZGVyKCk7XG4gIH07XG5cbiAgZ2MucmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGVudGVyaW5nTW92ZW1lbnRMZXZlbCA9XG4gICAgICBnYy5zdGF0ZS5jdXJyZW50U2NyZWVuID09PSBcImxldmVsXCIgJiZcbiAgICAgIGlzTW92ZW1lbnRMZXZlbChnYy5zdGF0ZS5jdXJyZW50TGV2ZWwpICYmXG4gICAgICAocHJldmlvdXNTY3JlZW4gIT09IFwibGV2ZWxcIiB8fCBwcmV2aW91c0xldmVsICE9PSBnYy5zdGF0ZS5jdXJyZW50TGV2ZWwpO1xuXG4gICAgaWYgKGVudGVyaW5nTW92ZW1lbnRMZXZlbCkge1xuICAgICAgc3luY1BsYXllclRvTGF5b3V0KHRydWUpO1xuICAgIH0gZWxzZSBpZiAoZ2Muc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiICYmIGlzTW92ZW1lbnRMZXZlbChnYy5zdGF0ZS5jdXJyZW50TGV2ZWwpKSB7XG4gICAgICBzeW5jUGxheWVyVG9MYXlvdXQoZmFsc2UpO1xuICAgIH1cblxuICAgIGdjLmhpdEFyZWFzID0gW107XG4gICAgZHJhd0JhY2tncm91bmQoZ2MpO1xuICAgIGRyYXdMb2dvKGdjKTtcbiAgICBkcmF3R2FtZXBsYXlGcmFtZShnYyk7XG5cbiAgICBzd2l0Y2ggKGdjLnN0YXRlLmN1cnJlbnRTY3JlZW4pIHtcbiAgICAgIGNhc2UgXCJtYWlubWVudVwiOlxuICAgICAgICBkcmF3TWFpbk1lbnUoZ2MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZXZlbHNlbGVjdFwiOlxuICAgICAgICBkcmF3TGV2ZWxTZWxlY3QoZ2MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZXZlbFwiOlxuICAgICAgICBkcmF3TGV2ZWwoZ2MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkcmF3Qm90dG9tUGFuZWwoZ2MpO1xuXG4gICAgaWYgKGdjLnN0YXRlLnBhdXNlZCkgZHJhd1BhdXNlT3ZlcmxheShnYyk7XG4gICAgaWYgKGdjLnN0YXRlLmNvbnRyb2xzT3BlbikgZHJhd0NvbnRyb2xzT3ZlcmxheShnYyk7XG4gICAgaWYgKGdjLnN0YXRlLmdhbWVPdmVyKSBkcmF3R2FtZU92ZXJPdmVybGF5KGdjKTtcblxuICAgIHByZXZpb3VzTGV2ZWwgPSBnYy5zdGF0ZS5jdXJyZW50TGV2ZWw7XG4gICAgcHJldmlvdXNTY3JlZW4gPSBnYy5zdGF0ZS5jdXJyZW50U2NyZWVuO1xuICB9O1xuXG4gIGNvbnN0IHJlc2l6ZUNhbnZhc2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGdhbWVDYW52YXMud2lkdGggPSBkZWJ1Z0NhbnZhcy53aWR0aCA9IHc7XG4gICAgZ2FtZUNhbnZhcy5oZWlnaHQgPSBkZWJ1Z0NhbnZhcy5oZWlnaHQgPSBoO1xuICAgIHN5bmNQbGF5ZXJUb0xheW91dChmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgdG9DYW52YXMgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjYWxlWCA9IGdhbWVDYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICAgIGNvbnN0IHNjYWxlWSA9IGdhbWVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVgsXG4gICAgICB5OiAoZS5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZLFxuICAgIH07XG4gIH07XG5cbiAgZ2FtZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRvQ2FudmFzKGUpO1xuICAgIGZvciAoY29uc3QgYXJlYSBvZiBnYy5oaXRBcmVhcykge1xuICAgICAgaWYgKHggPj0gYXJlYS54ICYmIHggPD0gYXJlYS54ICsgYXJlYS53ICYmIHkgPj0gYXJlYS55ICYmIHkgPD0gYXJlYS55ICsgYXJlYS5oKSB7XG4gICAgICAgIGFyZWEuYWN0aW9uKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZ2FtZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0b0NhbnZhcyhlKTtcbiAgICBjb25zdCBvdmVyID0gZ2MuaGl0QXJlYXMuc29tZShcbiAgICAgIChhcmVhKSA9PiB4ID49IGFyZWEueCAmJiB4IDw9IGFyZWEueCArIGFyZWEudyAmJiB5ID49IGFyZWEueSAmJiB5IDw9IGFyZWEueSArIGFyZWEuaCxcbiAgICApO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuY3Vyc29yID0gb3ZlciA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCI7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChnYy5zdGF0ZS5uYW1lRm9jdXNlZCAmJiAhZ2Muc3RhdGUucGF1c2VkICYmICFnYy5zdGF0ZS5jb250cm9sc09wZW4pIHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBnYy5zdGF0ZS5wbGF5ZXJOYW1lID0gZ2Muc3RhdGUubmFtZUlucHV0LnRyaW0oKSB8fCBcIkJveFwiO1xuICAgICAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICBnYy5zdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgZ2Muc3RhdGUubmFtZUlucHV0ID0gZ2Muc3RhdGUubmFtZUlucHV0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5Lmxlbmd0aCA9PT0gMSAmJiBnYy5zdGF0ZS5uYW1lSW5wdXQubGVuZ3RoIDwgMjQpIHtcbiAgICAgICAgZ2Muc3RhdGUubmFtZUlucHV0ICs9IGUua2V5O1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBpZiAoZ2Muc3RhdGUuY29udHJvbHNPcGVuKSB7XG4gICAgICAgIGdjLnN0YXRlLmNvbnRyb2xzT3BlbiA9IGZhbHNlO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2Muc3RhdGUucGF1c2VkKSB7XG4gICAgICAgIGdjLnN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICByZXNpemVDYW52YXNlcygpO1xuICAgIGdjLnJlbmRlcigpO1xuICB9KTtcblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKGdjLnN0YXRlLm5hbWVGb2N1c2VkKSBnYy5yZW5kZXIoKTtcbiAgfSwgNTMwKTtcblxuICBnYy5sb2dvLm9ubG9hZCA9ICgpID0+IHtcbiAgICBnYy5sb2dvTG9hZGVkID0gdHJ1ZTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcbiAgZ2MubG9nby5vbmVycm9yID0gKCkgPT4ge1xuICAgIGdjLmxvZ29Mb2FkZWQgPSBmYWxzZTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcblxuICBnYy5sb2dvLnNyYyA9IFwiL2JlbmNobWFyazIvYXNzZXRzL2xvZ28ucG5nXCI7XG5cbiAgcmVzaXplQ2FudmFzZXMoKTtcbiAgZ2MucmVuZGVyKCk7XG5cbiAgY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgZ2Muc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiICYmXG4gICAgICBpc01vdmVtZW50TGV2ZWwoZ2Muc3RhdGUuY3VycmVudExldmVsKSAmJlxuICAgICAgIWdjLnN0YXRlLnBhdXNlZCAmJlxuICAgICAgIWdjLnN0YXRlLmNvbnRyb2xzT3BlbiAmJlxuICAgICAgIWdjLnN0YXRlLmdhbWVPdmVyXG4gICAgKSB7XG4gICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgIHBsYXllci51cGRhdGUoKTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XG4gIH07XG5cbiAgZ2FtZUxvb3AoKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3Q29udHJvbHNPdmVybGF5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIGNvbnN0IHBhZCA9IHRvcEJveFdpZHRoICogMC4wNTtcclxuICBjb25zdCBveCA9IHRvcEJveFggKyBwYWQ7XHJcbiAgY29uc3Qgb3kgPSB0b3BCb3hZICsgcGFkO1xyXG4gIGNvbnN0IG93ID0gdG9wQm94V2lkdGggLSBwYWQgKiAyO1xyXG4gIGNvbnN0IG9oID0gdG9wQm94SGVpZ2h0IC0gcGFkICogMjtcclxuICBjb25zdCBjeCA9IG94ICsgb3cgLyAyO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5vdmVybGF5Qmc7XHJcbiAgY3R4LmZpbGxSZWN0KG94LCBveSwgb3csIG9oKTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gMjtcclxuICBjdHguc3Ryb2tlUmVjdChveCwgb3ksIG93LCBvaCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiQkFTSUMgQ09OVFJPTFNcIiwgY3gsIG95ICsgb2ggKiAwLjExKTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5kaXZpZGVyO1xyXG4gIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubW92ZVRvKG94ICsgb3cgKiAwLjA2LCBveSArIG9oICogMC4yKTtcclxuICBjdHgubGluZVRvKG94ICsgb3cgKiAwLjk0LCBveSArIG9oICogMC4yKTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xzID0gW1xyXG4gICAgeyBrZXk6IFwiVyAvIEEgLyBTIC8gRFwiLCBkZXNjOiBcIk1vdmUgLyBOYXZpZ2F0ZVwiIH0sXHJcbiAgICB7IGtleTogXCJDTElDS1wiLCBkZXNjOiBcIkludGVyYWN0IC8gU2VsZWN0IGFuc3dlclwiIH0sXHJcbiAgICB7IGtleTogXCJFU0NcIiwgZGVzYzogXCJDbG9zZSB0aGlzIHBhbmVsXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBsaXN0WSA9IG95ICsgb2ggKiAwLjI5O1xyXG4gIGNvbnN0IHJvd0ggPSBvaCAqIDAuMTU7XHJcbiAgY29uc3Qga2V5Qm94VyA9IG93ICogMC4zO1xyXG4gIGNvbnN0IGtleUJveEggPSByb3dIICogMC43O1xyXG4gIGNvbnN0IGtleUJveFggPSBveCArIG93ICogMC4wODtcclxuICBjb25zdCBkZXNjWCA9IG94ICsgb3cgKiAwLjU7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHJvd1kgPSBsaXN0WSArIGkgKiByb3dIO1xyXG4gICAgY29uc3QgYm94Q2VudGVyWSA9IHJvd1kgKyBrZXlCb3hIIC8gMjtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gc3RhdGUuZGFya01vZGUgPyBcIiMyYTJhMmFcIiA6IFwiI2RkZGRkZFwiO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5kaXZpZGVyO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICBjdHguZmlsbFJlY3Qoa2V5Qm94WCwgcm93WSwga2V5Qm94Vywga2V5Qm94SCk7XHJcbiAgICBjdHguc3Ryb2tlUmVjdChrZXlCb3hYLCByb3dZLCBrZXlCb3hXLCBrZXlCb3hIKTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICBjdHguZm9udCA9IGBib2xkIDE2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICBjb250cm9sc1tpXS5rZXksXHJcbiAgICAgIGtleUJveFggKyBrZXlCb3hXIC8gMixcclxuICAgICAgYm94Q2VudGVyWSxcclxuICAgICAga2V5Qm94VyAtIDgsXHJcbiAgICApO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnTWlkO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgY3R4LmZvbnQgPSBgMTdweCAke2JvZHlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoY29udHJvbHNbaV0uZGVzYywgZGVzY1gsIGJveENlbnRlclkpO1xyXG4gIH1cclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiQ29udHJvbHMgbWF5IHZhcnkgYmV0d2VlbiBsZXZlbHMuXCIsIGN4LCBveSArIG9oICogMC44NCk7XHJcblxyXG4gIC8vIENsZWFyIHVuZGVybHlpbmcgaGl0IGFyZWFzXHJcbiAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuXHJcbiAgY29uc3QgY2xvc2VXID0gMTQwO1xyXG4gIGNvbnN0IGNsb3NlSCA9IDQwO1xyXG4gIGRyYXdCdXR0b24oXHJcbiAgICBnYyxcclxuICAgIFwiQ0xPU0UgIOKclVwiLFxyXG4gICAgY3ggLSBjbG9zZVcgLyAyLFxyXG4gICAgb3kgKyBvaCAqIDAuOSxcclxuICAgIGNsb3NlVyxcclxuICAgIGNsb3NlSCxcclxuICAgICgpID0+IHtcclxuICAgICAgc3RhdGUuY29udHJvbHNPcGVuID0gZmFsc2U7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIDE3LFxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdHYW1lT3Zlck92ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgaCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCBjeSA9IGggLyAyO1xyXG5cclxuICAvLyBGdWxsLWNhbnZhcyBkaW1cclxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuODIpXCI7XHJcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xyXG5cclxuICAvLyBQYW5lbFxyXG4gIGNvbnN0IHBhbmVsVyA9IE1hdGgubWluKHcgKiAwLjU1LCA1MjApO1xyXG4gIGNvbnN0IHBhbmVsSCA9IGggKiAwLjUyO1xyXG4gIGNvbnN0IHBhbmVsWCA9IGN4IC0gcGFuZWxXIC8gMjtcclxuICBjb25zdCBwYW5lbFkgPSBjeSAtIHBhbmVsSCAvIDI7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiMwYTBhMGFcIjtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNjYzIyMjJcIjtcclxuICBjdHgubGluZVdpZHRoID0gMztcclxuICBjdHguZmlsbFJlY3QocGFuZWxYLCBwYW5lbFksIHBhbmVsVywgcGFuZWxIKTtcclxuICBjdHguc3Ryb2tlUmVjdChwYW5lbFgsIHBhbmVsWSwgcGFuZWxXLCBwYW5lbEgpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCIjY2MyMjIyXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCA1MnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgY3gsIHBhbmVsWSArIHBhbmVsSCAqIDAuMjIpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCIjODg4ODg4XCI7XHJcbiAgY3R4LmZvbnQgPSBgMjBweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFxyXG4gICAgYEJldHRlciBsdWNrIG5leHQgdGltZSwgJHtzdGF0ZS5wbGF5ZXJOYW1lfS5gLFxyXG4gICAgY3gsXHJcbiAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjQyLFxyXG4gICAgcGFuZWxXICogMC44MixcclxuICApO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMzMzMzMzNcIjtcclxuICBjdHgubGluZVdpZHRoID0gMTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyhwYW5lbFggKyBwYW5lbFcgKiAwLjEsIHBhbmVsWSArIHBhbmVsSCAqIDAuNTQpO1xyXG4gIGN0eC5saW5lVG8ocGFuZWxYICsgcGFuZWxXICogMC45LCBwYW5lbFkgKyBwYW5lbEggKiAwLjU0KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGdjLmhpdEFyZWFzID0gW107XHJcblxyXG4gIGNvbnN0IGJ0blcgPSAyMDA7XHJcbiAgY29uc3QgYnRuSCA9IDQ4O1xyXG5cclxuICBpZiAoc3RhdGUucGxheU1vZGUgPT09IFwicGxheVwiKSB7XHJcbiAgICBkcmF3QnV0dG9uKFxyXG4gICAgICBnYyxcclxuICAgICAgXCJUUlkgQUdBSU5cIixcclxuICAgICAgY3ggLSBidG5XIC8gMixcclxuICAgICAgcGFuZWxZICsgcGFuZWxIICogMC42MSxcclxuICAgICAgYnRuVyxcclxuICAgICAgYnRuSCxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcclxuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIDIwLFxyXG4gICAgKTtcclxuXHJcbiAgICBkcmF3QnV0dG9uKFxyXG4gICAgICBnYyxcclxuICAgICAgXCJNQUlOIE1FTlVcIixcclxuICAgICAgY3ggLSBidG5XIC8gMixcclxuICAgICAgcGFuZWxZICsgcGFuZWxIICogMC43OCxcclxuICAgICAgYnRuVyxcclxuICAgICAgYnRuSCxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcclxuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIDIwLFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZHJhd0J1dHRvbihcclxuICAgICAgZ2MsXHJcbiAgICAgIFwiTUFJTiBNRU5VXCIsXHJcbiAgICAgIGN4IC0gYnRuVyAvIDIsXHJcbiAgICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNjgsXHJcbiAgICAgIGJ0blcsXHJcbiAgICAgIGJ0bkgsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzdGF0ZS5saXZlcyA9IDM7XHJcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xyXG4gICAgICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICB9LFxyXG4gICAgICAyMCxcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3UGF1c2VPdmVybGF5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgcGFkID0gdG9wQm94V2lkdGggKiAwLjA1O1xyXG4gIGNvbnN0IG94ID0gdG9wQm94WCArIHBhZDtcclxuICBjb25zdCBveSA9IHRvcEJveFkgKyBwYWQ7XHJcbiAgY29uc3Qgb3cgPSB0b3BCb3hXaWR0aCAtIHBhZCAqIDI7XHJcbiAgY29uc3Qgb2ggPSB0b3BCb3hIZWlnaHQgLSBwYWQgKiAyO1xyXG4gIGNvbnN0IGN4ID0gb3ggKyBvdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQub3ZlcmxheUJnO1xyXG4gIGN0eC5maWxsUmVjdChveCwgb3ksIG93LCBvaCk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgY3R4LnN0cm9rZVJlY3Qob3gsIG95LCBvdywgb2gpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDM4cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIlBBVVNFRFwiLCBjeCwgb3kgKyBvaCAqIDAuMTgpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8ob3ggKyBvdyAqIDAuMSwgb3kgKyBvaCAqIDAuMyk7XHJcbiAgY3R4LmxpbmVUbyhveCArIG93ICogMC45LCBveSArIG9oICogMC4zKTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIC8vIENsZWFyIGFsbCB1bmRlcmx5aW5nIGhpdCBhcmVhcyBzbyB0aGUgZ2FtZSBiZWhpbmQgaXMgYmxvY2tlZFxyXG4gIGdjLmhpdEFyZWFzID0gW107XHJcblxyXG4gIGNvbnN0IGJ0blcgPSAyMjA7XHJcbiAgY29uc3QgYnRuSCA9IDQ4O1xyXG4gIGNvbnN0IGJ0blggPSBjeCAtIGJ0blcgLyAyO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIlJFU1VNRVwiLCBidG5YLCBveSArIG9oICogMC4zNiwgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJRVUlUIFRPIE1FTlVcIiwgYnRuWCwgb3kgKyBvaCAqIDAuNTMsIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUxhYmVsID0gc3RhdGUuZGFya01vZGUgPyBcIuKYgCAgTElHSFQgTU9ERVwiIDogXCLwn4yZICBEQVJLIE1PREVcIjtcclxuICBkcmF3QnV0dG9uKFxyXG4gICAgZ2MsXHJcbiAgICB0b2dnbGVMYWJlbCxcclxuICAgIGJ0blgsXHJcbiAgICBveSArIG9oICogMC43LFxyXG4gICAgYnRuVyxcclxuICAgIGJ0bkgsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmRhcmtNb2RlID0gIXN0YXRlLmRhcmtNb2RlO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICAxOCxcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IExFVkVMX0RBVEEgfSBmcm9tIFwiLi9sZXZlbERhdGFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3QmFja2dyb3VuZCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUgfSA9IGdjO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gdC5iZztcclxuICBjdHguZmlsbFN0eWxlID0gdC5iZztcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMb2dvID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgbG9nbywgbG9nb0xvYWRlZCwgZGlzcGxheUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgbG9nb1kgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGlmIChsb2dvTG9hZGVkICYmIGxvZ28ubmF0dXJhbFdpZHRoID4gMCkge1xyXG4gICAgY29uc3QgbG9nb1cgPSB3ICogMC4xNTtcclxuICAgIGNvbnN0IGxvZ29IID0gbG9nb1cgKiAobG9nby5uYXR1cmFsSGVpZ2h0IC8gbG9nby5uYXR1cmFsV2lkdGgpO1xyXG4gICAgY3R4LmRyYXdJbWFnZShsb2dvLCB3IC8gMiAtIGxvZ29XIC8gMiwgbG9nb1kgLSBsb2dvSCAvIDIsIGxvZ29XLCBsb2dvSCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBnZXRUaGVtZShzdGF0ZSkuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZvbnQgPSBgYm9sZCA1NHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChcIk91dHNpZGUtdGhlLUJveFwiLCB3IC8gMiwgbG9nb1kpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3R2FtZXBsYXlGcmFtZSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGdhbWVwbGF5RnJhbWUsIGdhbWVwbGF5RnJhbWVMb2FkZWQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgaWYgKGdhbWVwbGF5RnJhbWVMb2FkZWQgJiYgZ2FtZXBsYXlGcmFtZS5uYXR1cmFsV2lkdGggPiAwKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBnYW1lcGxheUZyYW1lLFxyXG4gICAgICA0NDAsXHJcbiAgICAgIDE4MCxcclxuICAgICAgNjg4LFxyXG4gICAgICA1NzIsXHJcbiAgICAgIHRvcEJveFgsXHJcbiAgICAgIHRvcEJveFksXHJcbiAgICAgIHRvcEJveFdpZHRoLFxyXG4gICAgICB0b3BCb3hIZWlnaHQsXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBnZXRUaGVtZShzdGF0ZSkuc3Ryb2tlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XHJcbiAgICBjdHguc3Ryb2tlUmVjdCh0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0KTtcclxuICB9XHJcbn07XHJcblxyXG4vKiogRHJhdyBhIGxhYmVsbGVkIGJ1dHRvbiBhbmQgcmVnaXN0ZXIgaXQgYXMgYSBoaXQgYXJlYS4gKi9cclxuZXhwb3J0IGNvbnN0IGRyYXdCdXR0b24gPSAoXHJcbiAgZ2M6IEdhbWVDb250ZXh0LFxyXG4gIGxhYmVsOiBzdHJpbmcsXHJcbiAgeDogbnVtYmVyLFxyXG4gIHk6IG51bWJlcixcclxuICB3OiBudW1iZXIsXHJcbiAgaDogbnVtYmVyLFxyXG4gIGFjdGlvbjogKCkgPT4gdm9pZCxcclxuICBmb250U2l6ZSA9IDIyLFxyXG4pID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gIGN0eC5zdHJva2VSZWN0KHgsIHksIHcsIGgpO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgJHtmb250U2l6ZX1weCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KGxhYmVsLCB4ICsgdyAvIDIsIHkgKyBoIC8gMiwgdyAtIDE2KTtcclxuICBnYy5oaXRBcmVhcy5wdXNoKHsgeCwgeSwgdywgaCwgYWN0aW9uIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdCb3R0b21QYW5lbCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCBjb250ZW50WCwgY29udGVudFdpZHRoLCBib3R0b21Cb3hZLCBib3R0b21Cb3hIZWlnaHQgfSA9XHJcbiAgICBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gNDtcclxuICBjdHguc3Ryb2tlUmVjdChjb250ZW50WCwgYm90dG9tQm94WSwgY29udGVudFdpZHRoLCBib3R0b21Cb3hIZWlnaHQpO1xyXG5cclxuICBjb25zdCBjZW50ZXJYID0gdyAvIDI7XHJcbiAgY29uc3QgdGV4dFdpZHRoID0gY29udGVudFdpZHRoICogMC43NDtcclxuXHJcbiAgY29uc3QgbGV2ZWxEYXRhID1cclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIlxyXG4gICAgICA/IExFVkVMX0RBVEFbc3RhdGUuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgOiB7IHRpdGxlOiBzdGF0ZS5zdG9yeVRpdGxlLCBsaW5lczogc3RhdGUuc3RvcnlMaW5lcyB9O1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQobGV2ZWxEYXRhLnRpdGxlLCBjZW50ZXJYLCBib3R0b21Cb3hZICsgMTgsIHRleHRXaWR0aCk7XHJcblxyXG4gIGN0eC5mb250ID0gYDIwcHggJHtib2R5Rm9udH1gO1xyXG4gIGNvbnN0IGxpbmVHYXAgPSAzMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsRGF0YS5saW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICBsZXZlbERhdGEubGluZXNbaV0sXHJcbiAgICAgIGNlbnRlclgsXHJcbiAgICAgIGJvdHRvbUJveFkgKyA2OCArIGkgKiBsaW5lR2FwLFxyXG4gICAgICB0ZXh0V2lkdGgsXHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWxIVUQgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBwYWRYID0gdG9wQm94V2lkdGggKiAwLjA1O1xyXG4gIGNvbnN0IHBhZFkgPSB0b3BCb3hIZWlnaHQgKiAwLjA4O1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIC8vIFEuWCDigJQgdG9wIGxlZnRcclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAyNnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoYFEuJHtzdGF0ZS5jdXJyZW50TGV2ZWx9YCwgdG9wQm94WCArIHBhZFgsIHRvcEJveFkgKyBwYWRZKTtcclxuXHJcbiAgLy8gUGF1c2UgYnV0dG9uIOKAlCB0b3AgcmlnaHRcclxuICBjb25zdCBwYXVzZVcgPSA0ODtcclxuICBjb25zdCBwYXVzZUggPSAzNDtcclxuICBjb25zdCBwYXVzZVggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggLSBwYWRYIC0gcGF1c2VXO1xyXG4gIGNvbnN0IHBhdXNlWSA9IHRvcEJveFkgKyBwYWRZIC0gcGF1c2VIIC8gMjtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gMjtcclxuICBjdHguc3Ryb2tlUmVjdChwYXVzZVgsIHBhdXNlWSwgcGF1c2VXLCBwYXVzZUgpO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiSUlcIiwgcGF1c2VYICsgcGF1c2VXIC8gMiwgcGF1c2VZICsgcGF1c2VIIC8gMik7XHJcbiAgZ2MuaGl0QXJlYXMucHVzaCh7XHJcbiAgICB4OiBwYXVzZVgsXHJcbiAgICB5OiBwYXVzZVksXHJcbiAgICB3OiBwYXVzZVcsXHJcbiAgICBoOiBwYXVzZUgsXHJcbiAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICAvLyBMaXZlcyDigJQgYm90dG9tIHJpZ2h0XHJcbiAgY29uc3QgaGVhcnRTaXplID0gMjQ7XHJcbiAgY29uc3QgaGVhcnRHYXAgPSA2O1xyXG4gIGNvbnN0IGxpdmVzWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgLSBwYWRZO1xyXG4gIGNvbnN0IHRvdGFsVyA9IDMgKiBoZWFydFNpemUgKyAyICogaGVhcnRHYXA7XHJcbiAgY29uc3QgbGl2ZXNYID0gdG9wQm94WCArIHRvcEJveFdpZHRoIC0gcGFkWCAtIHRvdGFsVztcclxuXHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgJHtoZWFydFNpemV9cHggc2Fucy1zZXJpZmA7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPVxyXG4gICAgICBpIDwgc3RhdGUubGl2ZXMgPyBcIiNlMDMwMzBcIiA6IHN0YXRlLmRhcmtNb2RlID8gXCIjNDQ0NDQ0XCIgOiBcIiNiYmJiYmJcIjtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIGN0eC5maWxsVGV4dChcIuKZpVwiLCBsaXZlc1ggKyBpICogKGhlYXJ0U2l6ZSArIGhlYXJ0R2FwKSwgbGl2ZXNZKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiwgZHJhd0xldmVsSFVEIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgeyBkcmF3TmFtZUVudHJ5IH0gZnJvbSBcIi4uL2xldmVscy9MZXZlbDFcIjtcbmltcG9ydCB7IGRyYXdMZXZlbDIgfSBmcm9tIFwiLi4vbGV2ZWxzL0xldmVsMlwiO1xuaW1wb3J0IHsgZHJhd0xldmVsMyB9IGZyb20gXCIuLi9sZXZlbHMvTGV2ZWwzXCI7XG5pbXBvcnQgeyBMRVZFTF9DT1VOVCB9IGZyb20gXCIuLi9sZXZlbERhdGFcIjtcblxuY29uc3QgZHJhd0xldmVsTmF2aWdhdGlvbiA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlIH0gPSBnYztcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgbmF2QnRuSCA9IDQyO1xuICBjb25zdCBuYXZCdG5XID0gMTUwO1xuICBjb25zdCBuYXZZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNzk7XG5cbiAgaWYgKHN0YXRlLnBsYXlNb2RlICE9PSBcImxldmVsc2VsZWN0XCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUuY3VycmVudExldmVsID4gMSkge1xuICAgIGRyYXdCdXR0b24oZ2MsIFwiPC0gUFJFVlwiLCB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA1LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwtLTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sIDE4KTtcbiAgfVxuXG4gIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGN4IC0gbmF2QnRuVyAvIDIsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgIGdjLnJlbmRlcigpO1xuICB9LCAxNik7XG5cbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA8IExFVkVMX0NPVU5UKSB7XG4gICAgZHJhd0J1dHRvbihnYywgXCJORVhUIC0+XCIsIHRvcEJveFggKyB0b3BCb3hXaWR0aCAqIDAuNzcsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSwgMTgpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0xldmVsID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCwgdG9wSW5uZXJYLCB0b3BJbm5lclksIHRvcElubmVyV2lkdGgsIHRvcElubmVySGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgbHZsID0gc3RhdGUuY3VycmVudExldmVsO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIGlmIChsdmwgPT09IDEpIHtcbiAgICBkcmF3TmFtZUVudHJ5KGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChsdmwgPT09IDIpIHtcbiAgICBkcmF3TGV2ZWwyKGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChsdmwgPT09IDMpIHtcbiAgICBkcmF3TGV2ZWwzKGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChsdmwgPj0gMTEgJiYgbHZsIDw9IDIwKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG5cbiAgICBjdHguZm9udCA9IGBib2xkIDM0cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgIGN0eC5maWxsVGV4dChgTEVWRUwgJHtsdmx9YCwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjEyKTtcblxuICAgIGN0eC5mb250ID0gYDIxcHggJHtib2R5Rm9udH1gO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnTWlkO1xuICAgIGN0eC5maWxsVGV4dChcIlVzZSBXQVNEIHRvIG1vdmUgdGhlIHBsYXllciBpbnNpZGUgdGhlIGZyYW1lLlwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMjIsIHRvcEJveFdpZHRoICogMC43Mik7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVJlY3QodG9wSW5uZXJYLCB0b3BJbm5lclksIHRvcElubmVyV2lkdGgsIHRvcElubmVySGVpZ2h0KTtcblxuICAgIGdjLnBsYXllci5kcmF3KGN0eCk7XG4gICAgZHJhd0xldmVsTmF2aWdhdGlvbihnYyk7XG4gICAgZHJhd0xldmVsSFVEKGdjKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuXG4gIGN0eC5mb250ID0gYGJvbGQgMzRweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChgTEVWRUwgJHtsdmx9YCwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjE2KTtcblxuICBjdHguZm9udCA9IGAyMnB4ICR7Ym9keUZvbnR9YDtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XG4gIGN0eC5maWxsVGV4dChcIlRoaXMgbGV2ZWwgaXMgdW5kZXIgY29uc3RydWN0aW9uLlwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzgsIHRvcEJveFdpZHRoICogMC42KTtcblxuICBjdHguZm9udCA9IGAxNnB4ICR7Ym9keUZvbnR9YDtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XG4gIGN0eC5maWxsVGV4dChcIlF1ZXN0aW9ucywgY2hvaWNlcywgYW5kIGludGVyYWN0aW9ucyB3aWxsIGJlIHdpcmVkIGluIGhlcmUuXCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC41MiwgdG9wQm94V2lkdGggKiAwLjYpO1xuXG4gIGRyYXdMZXZlbE5hdmlnYXRpb24oZ2MpO1xuICBkcmF3TGV2ZWxIVUQoZ2MpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IHsgTEVWRUxfQ09VTlQgfSBmcm9tIFwiLi4vbGV2ZWxEYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWxTZWxlY3QgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJMRVZFTCBTRUxFQ1RcIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjEpO1xuXG4gIGNvbnN0IGNvbHMgPSA1O1xuICBjb25zdCB0aWxlVyA9IHRvcEJveFdpZHRoICogMC4xMztcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjE0O1xuICBjb25zdCBoR2FwID0gKHRvcEJveFdpZHRoICogMC43OCAtIHRpbGVXICogY29scykgLyAoY29scyAtIDEpO1xuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNDtcbiAgY29uc3QgZ3JpZFcgPSB0aWxlVyAqIGNvbHMgKyBoR2FwICogKGNvbHMgLSAxKTtcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IExFVkVMX0NPVU5UOyBpKyspIHtcbiAgICBjb25zdCBjb2wgPSBpICUgY29scztcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2xzKTtcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XG4gICAgY29uc3QgdHkgPSBncmlkWSArIHJvdyAqICh0aWxlSCArIHZHYXApO1xuICAgIGNvbnN0IGx2bCA9IGkgKyAxO1xuICAgIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IGx2bCA+PSAxMSAmJiBsdmwgPD0gMjA7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBpc01vdmVtZW50TGV2ZWwgPyB0LmRpdmlkZXIgOiB0LnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoID0gaXNNb3ZlbWVudExldmVsID8gMiA6IDM7XG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGlzTW92ZW1lbnRMZXZlbCA/IHQuZmdNaWQgOiB0LmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuXG4gICAgY3R4LmZvbnQgPSBgYm9sZCAyMHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoYCR7bHZsfWAsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIICogMC4zOCk7XG5cbiAgICBjdHguZm9udCA9IGAxMHB4ICR7Ym9keUZvbnR9YDtcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcbiAgICBjdHguZmlsbFRleHQoaXNNb3ZlbWVudExldmVsID8gXCJtb3ZlXCIgOiBgTEVWRUwgJHtsdmx9YCwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjc0KTtcblxuICAgIGNvbnN0IGNhcHR1cmVkID0gbHZsO1xuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgICAgeDogdHgsXG4gICAgICB5OiB0eSxcbiAgICAgIHc6IHRpbGVXLFxuICAgICAgaDogdGlsZUgsXG4gICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gY2FwdHVyZWQ7XG4gICAgICAgIHN0YXRlLnBsYXlNb2RlID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5saXZlcyA9IDM7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsXCI7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGJhY2tXID0gMTUwO1xuICBjb25zdCBiYWNrSCA9IDQyO1xuICBjb25zdCBiYWNrWCA9IHRvcEJveFggKyB0b3BCb3hXaWR0aCAqIDAuMDQ7XG4gIGNvbnN0IGJhY2tZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuODI7XG4gIGRyYXdCdXR0b24oZ2MsIFwiPC0gQkFDS1wiLCBiYWNrWCwgYmFja1ksIGJhY2tXLCBiYWNrSCwgKCkgPT4ge1xuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0sIDE4KTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSAgICBmcm9tICcuLi90aGVtZSc7XHJcbmltcG9ydCB7IGdldExheW91dCB9ICAgZnJvbSAnLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9ICBmcm9tICcuLi9yZW5kZXJlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd01haW5NZW51ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgdG9wSW5uZXJYLCB0b3BJbm5lclksIHRvcElubmVyV2lkdGgsIHRvcElubmVySGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IHQgID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlICAgID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduICAgID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCA0MnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJNQUlOIE1FTlVcIiwgY3gsIHRvcElubmVyWSArIHRvcElubmVySGVpZ2h0ICogMC4xNSk7XHJcblxyXG4gIGNvbnN0IGJ0blcgICA9IE1hdGgubWluKDMwMCwgdG9wSW5uZXJXaWR0aCAqIDAuNzgpO1xyXG4gIGNvbnN0IGJ0bkggICA9IDUwO1xyXG4gIGNvbnN0IGJ0blggICA9IGN4IC0gYnRuVyAvIDI7XHJcbiAgY29uc3Qgc3RhcnRZID0gdG9wSW5uZXJZICsgdG9wSW5uZXJIZWlnaHQgKiAwLjMyO1xyXG4gIGNvbnN0IHN0cmlkZSA9IGJ0bkggKyAxNDtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJTVEFSVCBFWEFNXCIsIGJ0blgsIHN0YXJ0WSwgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUuY3VycmVudExldmVsID0gMTtcclxuICAgIHN0YXRlLmxpdmVzICAgICAgICA9IDM7XHJcbiAgICBzdGF0ZS5wYXVzZWQgICAgICAgPSBmYWxzZTtcclxuICAgIHN0YXRlLmdhbWVPdmVyICAgICA9IGZhbHNlO1xyXG4gICAgc3RhdGUucGxheU1vZGUgICAgID0gXCJwbGF5XCI7XHJcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbFwiO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGJ0blgsIHN0YXJ0WSArIHN0cmlkZSwgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxzZWxlY3RcIjtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIkNPTlRST0xTXCIsIGJ0blgsIHN0YXJ0WSArIHN0cmlkZSAqIDIsIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLmNvbnRyb2xzT3BlbiA9IHRydWU7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUaGVtZSA9IChzdGF0ZTogR2FtZVN0YXRlKSA9PlxyXG4gIHN0YXRlLmRhcmtNb2RlXHJcbiAgICA/IHtcclxuICAgICAgICBiZzogXCIjMTExMTExXCIsXHJcbiAgICAgICAgZmc6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGZnTWlkOiBcIiNjY2NjY2NcIixcclxuICAgICAgICBmZ0RpbTogXCIjODg4ODg4XCIsXHJcbiAgICAgICAgc3Ryb2tlOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBvdmVybGF5Qmc6IFwicmdiYSgxMCwxMCwxMCwwLjkwKVwiLFxyXG4gICAgICAgIGRpdmlkZXI6IFwiIzQ0NDQ0NFwiLFxyXG4gICAgICB9XHJcbiAgICA6IHtcclxuICAgICAgICBiZzogXCIjZjBmMGYwXCIsXHJcbiAgICAgICAgZmc6IFwiIzExMTExMVwiLFxyXG4gICAgICAgIGZnTWlkOiBcIiMzMzMzMzNcIixcclxuICAgICAgICBmZ0RpbTogXCIjNjY2NjY2XCIsXHJcbiAgICAgICAgc3Ryb2tlOiBcIiMxMTExMTFcIixcclxuICAgICAgICBvdmVybGF5Qmc6IFwicmdiYSgyMjAsMjIwLDIyMCwwLjkzKVwiLFxyXG4gICAgICAgIGRpdmlkZXI6IFwiI2FhYWFhYVwiLFxyXG4gICAgICB9O1xyXG4iXX0=
