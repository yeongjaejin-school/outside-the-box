(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameEvent = void 0;
var GameEvent = exports.GameEvent = /*#__PURE__*/function (GameEvent) {
  GameEvent["MOVE"] = "MOVE";
  GameEvent["DASH"] = "DASH";
  GameEvent["HOLD"] = "HOLD";
  return GameEvent;
}({});

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
      var wasPressed = this.keys[key] === true;
      this.keys[key] = true;
      if (this.movementKeys.has(key)) {
        event.preventDefault();
      }
      if (!wasPressed) {
        if (key === " ") {
          this.emitter.emit(_Event.GameEvent.DASH, {});
        }
        if (key === "h") {
          this.emitter.emit(_Event.GameEvent.HOLD, {});
        }
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
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
    _defineProperty(_this, "dashDistance", 56);
    _defineProperty(_this, "direction", "down");
    _defineProperty(_this, "bounds", {
      minX: 0,
      maxX: Number.POSITIVE_INFINITY,
      minY: 0,
      maxY: Number.POSITIVE_INFINITY
    });
    _defineProperty(_this, "blocks", []);
    _defineProperty(_this, "answerSlots", []);
    _defineProperty(_this, "heldBlock", null);
    _defineProperty(_this, "afterimages", []);
    _this.sprites = {
      up: _this.loadSprite("./assets/Player/Player_Up.png"),
      down: _this.loadSprite("./assets/Player/Player_Down.png"),
      left: _this.loadSprite("./assets/Player/Player_Left.png"),
      right: _this.loadSprite("./assets/Player/Player_Right.png")
    };
    _this.x = 400;
    _this.y = 300;
    _this.listen(_Event.GameEvent.MOVE, function (data) {
      _this.move(data);
    });
    _this.listen(_Event.GameEvent.DASH, function () {
      _this.dash();
    });
    _this.listen(_Event.GameEvent.HOLD, function () {
      _this.toggleHold();
    });
    return _this;
  }
  _inherits(PlayerControl, _EventListener);
  return _createClass(PlayerControl, [{
    key: "update",
    value: function update() {
      var _this$heldBlock;
      if ((_this$heldBlock = this.heldBlock) !== null && _this$heldBlock !== void 0 && _this$heldBlock.destroyed) {
        this.detachHeldBlock();
      }
      this.afterimages = this.afterimages.map(function (image) {
        return _objectSpread(_objectSpread({}, image), {}, {
          alpha: image.alpha - 0.12
        });
      }).filter(function (image) {
        return image.alpha > 0;
      });
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var sprite = this.sprites[this.direction];
      if (sprite.complete && sprite.naturalWidth > 0) {
        var _iterator = _createForOfIteratorHelper(this.afterimages),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var image = _step.value;
            ctx.save();
            ctx.globalAlpha = image.alpha;
            ctx.drawImage(sprite, image.x, image.y, this.width, this.height);
            ctx.restore();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ctx.drawImage(sprite, this.x, this.y, this.width, this.height);
        return;
      }
      var _iterator2 = _createForOfIteratorHelper(this.afterimages),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _image = _step2.value;
          ctx.save();
          ctx.globalAlpha = _image.alpha;
          ctx.fillStyle = "#f28b82";
          ctx.fillRect(_image.x, _image.y, this.width, this.height);
          ctx.restore();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      ctx.fillStyle = "#e53935";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
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
    key: "setBlocks",
    value: function setBlocks(blocks) {
      this.blocks = blocks;
      if (this.heldBlock && !blocks.includes(this.heldBlock)) {
        this.heldBlock = null;
      }
    }
  }, {
    key: "setAnswerSlots",
    value: function setAnswerSlots(slots) {
      this.answerSlots = slots;
    }
  }, {
    key: "resetPosition",
    value: function resetPosition(x, y) {
      var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "down";
      if (this.heldBlock) {
        this.detachHeldBlock();
      }
      this.x = x;
      this.y = y;
      this.direction = direction;
      this.afterimages = [];
      this.clampToBounds();
    }
  }, {
    key: "getFacingDirection",
    value: function getFacingDirection() {
      return this.direction;
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
      var _this$heldBlock$getMo,
        _this$heldBlock2,
        _this2 = this;
      var nextDirection = this.resolveDirection(data);
      this.direction = nextDirection;
      var speedMultiplier = (_this$heldBlock$getMo = (_this$heldBlock2 = this.heldBlock) === null || _this$heldBlock2 === void 0 ? void 0 : _this$heldBlock2.getMoveSpeedMultiplier()) !== null && _this$heldBlock$getMo !== void 0 ? _this$heldBlock$getMo : 1;
      var moveSpeed = this.speed * speedMultiplier;
      var candidateX = this.clampValue(this.x + data.dx * moveSpeed, this.bounds.minX, this.bounds.maxX);
      var candidateY = this.clampValue(this.y + data.dy * moveSpeed, this.bounds.minY, this.bounds.maxY);
      var otherBlocks = this.blocks.filter(function (block) {
        return block !== _this2.heldBlock;
      });
      if (this.collidesWithBlockingBlock(candidateX, candidateY, otherBlocks)) {
        return;
      }
      if (this.heldBlock) {
        this.clearAnswerSlotForBlock(this.heldBlock);
        var heldPosition = this.getHeldBlockPosition(candidateX, candidateY, nextDirection);
        this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
      }
      this.x = candidateX;
      this.y = candidateY;
    }
  }, {
    key: "dash",
    value: function dash() {
      var _this$heldBlock$getMo2,
        _this$heldBlock3,
        _this3 = this;
      var dx = 0;
      var dy = 0;
      if (this.direction === "up") dy = -1;
      if (this.direction === "down") dy = 1;
      if (this.direction === "left") dx = -1;
      if (this.direction === "right") dx = 1;
      var speedMultiplier = (_this$heldBlock$getMo2 = (_this$heldBlock3 = this.heldBlock) === null || _this$heldBlock3 === void 0 ? void 0 : _this$heldBlock3.getMoveSpeedMultiplier()) !== null && _this$heldBlock$getMo2 !== void 0 ? _this$heldBlock$getMo2 : 1;
      var dashDistance = this.dashDistance * speedMultiplier;
      var startX = this.x;
      var startY = this.y;
      var candidateX = this.clampValue(this.x + dx * dashDistance, this.bounds.minX, this.bounds.maxX);
      var candidateY = this.clampValue(this.y + dy * dashDistance, this.bounds.minY, this.bounds.maxY);
      var otherBlocks = this.blocks.filter(function (block) {
        return block !== _this3.heldBlock;
      });
      if (this.collidesWithBlockingBlock(candidateX, candidateY, otherBlocks)) {
        return;
      }
      if (this.heldBlock) {
        this.clearAnswerSlotForBlock(this.heldBlock);
        var heldPosition = this.getHeldBlockPosition(candidateX, candidateY, this.direction);
        this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
      }
      this.spawnDashAfterimages(startX, startY, dx, dy);
      this.x = candidateX;
      this.y = candidateY;
    }
  }, {
    key: "toggleHold",
    value: function toggleHold() {
      var _this4 = this;
      if (this.heldBlock) {
        var releaseSlot = this.getIntersectingEmptyAnswerSlot(this.heldBlock);
        var otherBlocks = this.blocks.filter(function (candidate) {
          return candidate !== _this4.heldBlock;
        });
        if (releaseSlot) {
          this.clearAnswerSlotForBlock(this.heldBlock);
          releaseSlot.block = this.heldBlock;
          this.heldBlock.moveTo(releaseSlot.x, releaseSlot.y);
          this.heldBlock.onReleased();
          this.detachHeldBlock();
          return;
        }
        if (this.collidesWithAnyBlock(this.heldBlock.x, this.heldBlock.y, otherBlocks)) {
          return;
        }
        if (!this.rectFitsBounds(this.heldBlock.x, this.heldBlock.y, this.heldBlock.size, this.heldBlock.size)) {
          return;
        }
        this.heldBlock.onReleased();
        this.detachHeldBlock();
        return;
      }
      var block = this.findNearbyFacingBlock();
      if (!block || !block.canBePickedUp()) {
        return;
      }
      this.clearAnswerSlotForBlock(block);
      if (!block.onPickedUp()) {
        return;
      }
      this.heldBlock = block;
      block.setHeld(true);
      var heldPosition = this.getHeldBlockPosition(this.x, this.y, this.direction);
      block.moveTo(heldPosition.x, heldPosition.y);
    }
  }, {
    key: "findNearbyFacingBlock",
    value: function findNearbyFacingBlock() {
      var threshold = this.width / 2;
      var playerCenterX = this.x + this.width / 2;
      var playerCenterY = this.y + this.height / 2;
      var closestBlock = null;
      var closestDistance = Number.POSITIVE_INFINITY;
      var _iterator3 = _createForOfIteratorHelper(this.blocks),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var block = _step3.value;
          if (block.held) {
            continue;
          }
          if (block.destroyed) {
            continue;
          }
          var blockCenterX = block.x + block.size / 2;
          var blockCenterY = block.y + block.size / 2;
          var horizontalDistance = Math.abs(blockCenterX - playerCenterX);
          var verticalDistance = Math.abs(blockCenterY - playerCenterY);
          var distance = Number.POSITIVE_INFINITY;
          if (this.direction === "down" && block.y >= this.y) {
            var edgeGap = block.y - (this.y + this.height);
            if (horizontalDistance <= threshold && edgeGap >= 0 && edgeGap < threshold) {
              distance = edgeGap;
            }
          }
          if (this.direction === "up" && block.y + block.size <= this.y + this.height) {
            var _edgeGap = this.y - (block.y + block.size);
            if (horizontalDistance <= threshold && _edgeGap >= 0 && _edgeGap < threshold) {
              distance = _edgeGap;
            }
          }
          if (this.direction === "right" && block.x >= this.x) {
            var _edgeGap2 = block.x - (this.x + this.width);
            if (verticalDistance <= threshold && _edgeGap2 >= 0 && _edgeGap2 < threshold) {
              distance = _edgeGap2;
            }
          }
          if (this.direction === "left" && block.x + block.size <= this.x + this.width) {
            var _edgeGap3 = this.x - (block.x + block.size);
            if (verticalDistance <= threshold && _edgeGap3 >= 0 && _edgeGap3 < threshold) {
              distance = _edgeGap3;
            }
          }
          if (distance < closestDistance) {
            closestDistance = distance;
            closestBlock = block;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return closestBlock;
    }
  }, {
    key: "resolveDirection",
    value: function resolveDirection(data) {
      if (data.dx > 0) return "right";
      if (data.dx < 0) return "left";
      if (data.dy > 0) return "down";
      return "up";
    }
  }, {
    key: "getHeldBlockPosition",
    value: function getHeldBlockPosition(playerX, playerY, direction) {
      switch (direction) {
        case "up":
          return {
            x: playerX,
            y: playerY - this.height
          };
        case "down":
          return {
            x: playerX,
            y: playerY + this.height
          };
        case "left":
          return {
            x: playerX - this.width,
            y: playerY
          };
        case "right":
          return {
            x: playerX + this.width,
            y: playerY
          };
      }
    }
  }, {
    key: "getIntersectingEmptyAnswerSlot",
    value: function getIntersectingEmptyAnswerSlot(block) {
      var _this$answerSlots$fin;
      var blockCenterX = block.x + block.size / 2;
      var blockCenterY = block.y + block.size / 2;
      return (_this$answerSlots$fin = this.answerSlots.find(function (slot) {
        var occupiedByOtherBlock = slot.block !== null && slot.block !== block;
        if (occupiedByOtherBlock) {
          return false;
        }
        return blockCenterX >= slot.x && blockCenterX <= slot.x + slot.size && blockCenterY >= slot.y && blockCenterY <= slot.y + slot.size;
      })) !== null && _this$answerSlots$fin !== void 0 ? _this$answerSlots$fin : null;
    }
  }, {
    key: "clearAnswerSlotForBlock",
    value: function clearAnswerSlotForBlock(block) {
      var _iterator4 = _createForOfIteratorHelper(this.answerSlots),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var slot = _step4.value;
          if (slot.block === block) {
            slot.block = null;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "isBlockInAnswerZone",
    value: function isBlockInAnswerZone(block) {
      return this.answerSlots.some(function (slot) {
        return slot.block === block;
      });
    }
  }, {
    key: "detachHeldBlock",
    value: function detachHeldBlock() {
      if (!this.heldBlock) {
        return;
      }
      this.heldBlock.setHeld(false);
      this.heldBlock = null;
    }
  }, {
    key: "collidesWithBlockingBlock",
    value: function collidesWithBlockingBlock(x, y, blocks) {
      var _this5 = this;
      return blocks.some(function (block) {
        if (_this5.isBlockInAnswerZone(block)) {
          return false;
        }
        return block.collidesWithRect(x, y, _this5.width, _this5.height);
      });
    }
  }, {
    key: "collidesWithAnyBlock",
    value: function collidesWithAnyBlock(x, y, blocks) {
      var _this6 = this;
      return blocks.some(function (block) {
        return block.collidesWithRect(x, y, _this6.width, _this6.height);
      });
    }
  }, {
    key: "rectFitsBounds",
    value: function rectFitsBounds(x, y, width, height) {
      return x >= this.bounds.minX && y >= this.bounds.minY && x + width <= this.bounds.maxX + width && y + height <= this.bounds.maxY + height;
    }
  }, {
    key: "spawnDashAfterimages",
    value: function spawnDashAfterimages(startX, startY, dx, dy) {
      var count = 3;
      for (var i = 1; i <= count; i++) {
        this.afterimages.push({
          x: startX - dx * i * 18,
          y: startY - dy * i * 18,
          alpha: 0.42 - i * 0.08
        });
      }
    }
  }, {
    key: "clampToBounds",
    value: function clampToBounds() {
      this.x = this.clampValue(this.x, this.bounds.minX, this.bounds.maxX);
      this.y = this.clampValue(this.y, this.bounds.minY, this.bounds.maxY);
    }
  }, {
    key: "clampValue",
    value: function clampValue(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
  }]);
}(_EventListener2.EventListener);

},{"./Events/Event.ts":1,"./Events/EventListener":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeBlockValue = exports.assertNumericBlockValue = exports.assertAlphaNumericValue = exports.Block = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var isValidAlphaNumericValue = function isValidAlphaNumericValue(value) {
  if (/^[a-z]$/i.test(value)) {
    return true;
  }
  if (/^\d{1,2}$/.test(value)) {
    var numericValue = Number(value);
    return numericValue >= 0 && numericValue <= 99;
  }
  return false;
};
var normalizeBlockValue = exports.normalizeBlockValue = function normalizeBlockValue(value) {
  return "".concat(value).trim().toUpperCase();
};
var assertAlphaNumericValue = exports.assertAlphaNumericValue = function assertAlphaNumericValue(value) {
  var normalizedValue = normalizeBlockValue(value);
  if (!isValidAlphaNumericValue(normalizedValue)) {
    throw new Error("Invalid block value \"".concat(value, "\". Blocks must use one letter or a number from 0 to 99."));
  }
  return normalizedValue;
};
var assertNumericBlockValue = exports.assertNumericBlockValue = function assertNumericBlockValue(value) {
  var normalizedValue = normalizeBlockValue(value);
  if (!/^\d{1,2}$/.test(normalizedValue)) {
    throw new Error("Invalid countdown value \"".concat(value, "\". Countdown blocks must use a number from 0 to 99."));
  }
  var numericValue = Number(normalizedValue);
  if (numericValue < 0 || numericValue > 99) {
    throw new Error("Invalid countdown value \"".concat(value, "\". Countdown blocks must use a number from 0 to 99."));
  }
  return numericValue;
};
var Block = exports.Block = /*#__PURE__*/function () {
  function Block(type, x, y, size, color, value) {
    var textColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "#111111";
    _classCallCheck(this, Block);
    _defineProperty(this, "held", false);
    _defineProperty(this, "destroyed", false);
    this.type = type;
    this.x = x;
    this.y = y;
    this.size = size;
    this.baseColor = color;
    this.baseTextColor = textColor;
    this.storedValue = normalizeBlockValue(value);
  }
  return _createClass(Block, [{
    key: "value",
    get: function get() {
      return this.storedValue;
    }
  }, {
    key: "getMoveSpeedMultiplier",
    value: function getMoveSpeedMultiplier() {
      return 1;
    }
  }, {
    key: "canBePickedUp",
    value: function canBePickedUp() {
      return !this.destroyed;
    }
  }, {
    key: "onPickedUp",
    value: function onPickedUp() {
      return true;
    }
  }, {
    key: "onReleased",
    value: function onReleased() {}
  }, {
    key: "update",
    value: function update(_deltaSeconds, _blocks) {}
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.destroyed) {
        return;
      }
      ctx.save();
      ctx.fillStyle = this.getFillStyle();
      ctx.fillRect(this.x, this.y, this.size, this.size);
      var strokeStyle = this.getStrokeStyle();
      if (strokeStyle) {
        ctx.strokeStyle = strokeStyle;
        ctx.lineWidth = this.held ? 3 : 2;
        ctx.strokeRect(this.x, this.y, this.size, this.size);
      }
      var textStyle = this.getTextStyle();
      if (textStyle) {
        ctx.fillStyle = textStyle;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "bold ".concat(Math.max(18, Math.floor(this.size * 0.42)), "px \"Trebuchet MS\", sans-serif");
        ctx.fillText(this.getDisplayValue(), this.x + this.size / 2, this.y + this.size / 2);
      }
      ctx.restore();
    }
  }, {
    key: "collidesWithRect",
    value: function collidesWithRect(x, y, width, height) {
      if (this.destroyed) {
        return false;
      }
      return x < this.x + this.size && x + width > this.x && y < this.y + this.size && y + height > this.y;
    }
  }, {
    key: "moveTo",
    value: function moveTo(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "setHeld",
    value: function setHeld(held) {
      this.held = held;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.destroyed = true;
      this.held = false;
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue() {
      return this.storedValue;
    }
  }, {
    key: "getFillStyle",
    value: function getFillStyle() {
      return this.baseColor;
    }
  }, {
    key: "getStrokeStyle",
    value: function getStrokeStyle() {
      return this.held ? "#3a3a3a" : "#111111";
    }
  }, {
    key: "getTextStyle",
    value: function getTextStyle() {
      return this.baseTextColor;
    }
  }]);
}();

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CountdownNumberBlock = void 0;
var _Block2 = require("./Block");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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
var CountdownNumberBlock = exports.CountdownNumberBlock = /*#__PURE__*/function (_Block) {
  function CountdownNumberBlock(x, y, size, value) {
    var _this;
    _classCallCheck(this, CountdownNumberBlock);
    var normalizedValue = (0, _Block2.assertNumericBlockValue)(value);
    _this = _callSuper(this, CountdownNumberBlock, ["countdown", x, y, size, "#f4a340", normalizedValue]);
    _defineProperty(_this, "blinkVisible", true);
    _defineProperty(_this, "blinkAccumulator", 0);
    _this.numericValue = normalizedValue;
    return _this;
  }
  _inherits(CountdownNumberBlock, _Block);
  return _createClass(CountdownNumberBlock, [{
    key: "update",
    value: function update(deltaSeconds, blocks) {
      if (this.destroyed) {
        return;
      }
      if (this.held) {
        this.numericValue -= deltaSeconds;
        this.storedValue = this.getDisplayValue();
      }
      if (this.numericValue < 3) {
        this.blinkAccumulator += deltaSeconds;
        if (this.blinkAccumulator >= 0.18) {
          this.blinkVisible = !this.blinkVisible;
          this.blinkAccumulator = 0;
        }
      } else {
        this.blinkVisible = true;
        this.blinkAccumulator = 0;
      }
      if (this.numericValue < 0) {
        this.explode(blocks);
      }
    }
  }, {
    key: "getDisplayValue",
    value: function getDisplayValue() {
      return "".concat(Math.max(0, Math.floor(this.numericValue)));
    }
  }, {
    key: "getFillStyle",
    value: function getFillStyle() {
      return this.numericValue < 5 ? "#d73a31" : "#f4a340";
    }
  }, {
    key: "getTextStyle",
    value: function getTextStyle() {
      if (this.numericValue < 3 && !this.blinkVisible) {
        return null;
      }
      return this.numericValue < 5 ? "#ffffff" : "#111111";
    }
  }, {
    key: "explode",
    value: function explode(blocks) {
      var radius = this.size * 1.5;
      var centerX = this.x + this.size / 2;
      var centerY = this.y + this.size / 2;
      this.destroy();
      var _iterator = _createForOfIteratorHelper(blocks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var block = _step.value;
          if (block === this || block.destroyed) {
            continue;
          }
          var blockCenterX = block.x + block.size / 2;
          var blockCenterY = block.y + block.size / 2;
          var distance = Math.hypot(blockCenterX - centerX, blockCenterY - centerY);
          if (distance <= radius) {
            block.destroy();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }]);
}(_Block2.Block);

},{"./Block":6}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlassBlock = void 0;
var _Block2 = require("./Block");
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
var GlassBlock = exports.GlassBlock = /*#__PURE__*/function (_Block) {
  function GlassBlock(x, y, size, value) {
    var _this;
    _classCallCheck(this, GlassBlock);
    _this = _callSuper(this, GlassBlock, ["glass", x, y, size, "rgba(120, 196, 255, 0.5)", (0, _Block2.assertAlphaNumericValue)(value)]);
    _defineProperty(_this, "wasReleased", false);
    return _this;
  }
  _inherits(GlassBlock, _Block);
  return _createClass(GlassBlock, [{
    key: "canBePickedUp",
    value: function canBePickedUp() {
      return !this.destroyed;
    }
  }, {
    key: "onPickedUp",
    value: function onPickedUp() {
      if (this.wasReleased) {
        this.destroy();
        return false;
      }
      return true;
    }
  }, {
    key: "onReleased",
    value: function onReleased() {
      this.wasReleased = true;
    }
  }]);
}(_Block2.Block);

},{"./Block":6}],9:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeavyBlock = void 0;
var _Block2 = require("./Block");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var HeavyBlock = exports.HeavyBlock = /*#__PURE__*/function (_Block) {
  function HeavyBlock(x, y, size, value) {
    _classCallCheck(this, HeavyBlock);
    return _callSuper(this, HeavyBlock, ["heavy", x, y, size, "#8f8f8f", (0, _Block2.assertAlphaNumericValue)(value)]);
  }
  _inherits(HeavyBlock, _Block);
  return _createClass(HeavyBlock, [{
    key: "getMoveSpeedMultiplier",
    value: function getMoveSpeedMultiplier() {
      return 0.25;
    }
  }]);
}(_Block2.Block);

},{"./Block":6}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InvisibleBlock = void 0;
var _Block2 = require("./Block");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var InvisibleBlock = exports.InvisibleBlock = /*#__PURE__*/function (_Block) {
  function InvisibleBlock(x, y, size, value) {
    var _this;
    _classCallCheck(this, InvisibleBlock);
    _this = _callSuper(this, InvisibleBlock, ["invisible", x, y, size, "#ffffff", (0, _Block2.assertAlphaNumericValue)(value)]);
    _defineProperty(_this, "revealed", false);
    return _this;
  }
  _inherits(InvisibleBlock, _Block);
  return _createClass(InvisibleBlock, [{
    key: "onPickedUp",
    value: function onPickedUp() {
      this.revealed = true;
      return true;
    }
  }, {
    key: "getFillStyle",
    value: function getFillStyle() {
      return this.revealed ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)";
    }
  }, {
    key: "getStrokeStyle",
    value: function getStrokeStyle() {
      if (!this.revealed) {
        return "rgba(17,17,17,0)";
      }
      return _superPropGet(InvisibleBlock, "getStrokeStyle", this, 3)([]);
    }
  }, {
    key: "getTextStyle",
    value: function getTextStyle() {
      return this.revealed ? "#111111" : "rgba(17,17,17,0)";
    }
  }]);
}(_Block2.Block);

},{"./Block":6}],11:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NormalBlock = void 0;
var _Block2 = require("./Block");
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var NormalBlock = exports.NormalBlock = /*#__PURE__*/function (_Block) {
  function NormalBlock(x, y, size, value) {
    _classCallCheck(this, NormalBlock);
    return _callSuper(this, NormalBlock, ["normal", x, y, size, "#ffffff", (0, _Block2.assertAlphaNumericValue)(value)]);
  }
  _inherits(NormalBlock, _Block);
  return _createClass(NormalBlock);
}(_Block2.Block);

},{"./Block":6}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovementLayout = exports.getLayout = void 0;
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
  var topInnerWidth = topBoxWidth * 0.42;
  var topInnerHeight = topBoxHeight * 0.62;
  var topInnerX = w / 2 - topInnerWidth / 2;
  var topInnerY = topBoxY + topBoxHeight * 0.16;
  var movementAreaWidth = topBoxWidth * 0.42;
  var movementAreaHeight = topBoxHeight * 0.62;
  var movementAreaX = topInnerX;
  var movementAreaY = topInnerY;
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
    movementAreaX: movementAreaX,
    movementAreaY: movementAreaY,
    movementAreaWidth: movementAreaWidth,
    movementAreaHeight: movementAreaHeight,
    bottomBoxY: bottomBoxY,
    bottomBoxHeight: bottomBoxHeight
  };
};
var getMovementLayout = exports.getMovementLayout = function getMovementLayout(ctx) {
  var w = ctx.canvas.width;
  var h = ctx.canvas.height;
  var gameFrameX = w * 0.05;
  var gameFrameY = h * 0.05;
  var gameFrameWidth = w * 0.9;
  var gameFrameHeight = h * 0.65;
  var bottomFrameX = 0;
  var bottomFrameY = h * 0.7;
  var bottomFrameWidth = w;
  var bottomFrameHeight = h * 0.3;
  var framePaddingX = 24;
  var framePaddingTop = 24;
  var framePaddingBottom = 56;
  var movementAreaX = gameFrameX + framePaddingX;
  var movementAreaY = gameFrameY + framePaddingTop;
  var movementAreaWidth = gameFrameWidth - framePaddingX * 2;
  var movementAreaHeight = gameFrameHeight - framePaddingTop - framePaddingBottom;
  return {
    w: w,
    h: h,
    gameFrameX: gameFrameX,
    gameFrameY: gameFrameY,
    gameFrameWidth: gameFrameWidth,
    gameFrameHeight: gameFrameHeight,
    bottomFrameX: bottomFrameX,
    bottomFrameY: bottomFrameY,
    bottomFrameWidth: bottomFrameWidth,
    bottomFrameHeight: bottomFrameHeight,
    movementAreaX: movementAreaX,
    movementAreaY: movementAreaY,
    movementAreaWidth: movementAreaWidth,
    movementAreaHeight: movementAreaHeight
  };
};

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"../layout":12,"../renderer":22,"../theme":26}],15:[function(require,module,exports){
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

},{"../layout":12,"../theme":26}],16:[function(require,module,exports){
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

},{"../layout":12,"../theme":26}],17:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _renderer = require("./renderer");
var _MainMenu = require("./screens/MainMenu");
var _LevelSelect = require("./screens/LevelSelect");
var _Level = require("./screens/Level");
var _PauseOverlay = require("./overlays/PauseOverlay");
var _ControlsOverlay = require("./overlays/ControlsOverlay");
var _GameOverOverlay = require("./overlays/GameOverOverlay");
var _layout = require("./layout");
var _EventEmitter = require("./Helpers/Events/EventEmitter");
var _InputManager = require("./Helpers/InputManager");
var _PlayerControl = require("./Helpers/PlayerControl");
var _NormalBlock = require("./Helpers/objects/NormalBlock");
var _InvisibleBlock = require("./Helpers/objects/InvisibleBlock");
var _CountdownNumberBlock = require("./Helpers/objects/CountdownNumberBlock");
var _HeavyBlock = require("./Helpers/objects/HeavyBlock");
var _GlassBlock = require("./Helpers/objects/GlassBlock");
var _movementLevelConfig = require("./movementLevelConfig");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
  var needsMovementReset = false;
  var lastTimerTick = performance.now();
  var lastFrameTick = performance.now();
  var defaultMovementArea = {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  };
  var gc = {
    ctx: ctx,
    state: state,
    hitAreas: [],
    render: function render() {},
    loseLife: function loseLife() {},
    resetPlayerName: function resetPlayerName() {},
    resetMovementLevel: function resetMovementLevel() {},
    submitMovementAnswer: function submitMovementAnswer() {},
    getCurrentAnswer: function getCurrentAnswer() {
      return "";
    },
    displayFont: "\"Trebuchet MS\", \"Verdana\", sans-serif",
    bodyFont: "\"Trebuchet MS\", \"Arial\", sans-serif",
    logo: new Image(),
    gameplayFrame: new Image(),
    logoLoaded: false,
    gameplayFrameLoaded: false,
    player: player,
    blocks: [],
    answerSlots: [],
    movementArea: defaultMovementArea,
    quizPrompt: "Spell AB7 in the answer zone.",
    quizAnswer: "AB7",
    timeLeftSeconds: _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11].time
  };
  var isMovementLevel = function isMovementLevel(level) {
    return level >= 11 && level <= 20;
  };
  var syncMovementArea = function syncMovementArea() {
    var resetSlots = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var movementLayout = (0, _layout.getMovementLayout)(ctx);
    var slotGap = 10;
    var slotSize = player.width;
    var answerCount = 10;
    var answerZoneWidth = answerCount * slotSize + (answerCount - 1) * slotGap;
    var answerZoneX = movementLayout.gameFrameX + (movementLayout.gameFrameWidth - answerZoneWidth) / 2;
    var answerZoneY = movementLayout.gameFrameY + 28;
    var previousSlots = gc.answerSlots;
    gc.answerSlots = Array.from({
      length: answerCount
    }, function (_, index) {
      var _previousSlots$index$, _previousSlots$index;
      return {
        x: answerZoneX + index * (slotSize + slotGap),
        y: answerZoneY,
        size: slotSize,
        block: resetSlots ? null : (_previousSlots$index$ = (_previousSlots$index = previousSlots[index]) === null || _previousSlots$index === void 0 ? void 0 : _previousSlots$index.block) !== null && _previousSlots$index$ !== void 0 ? _previousSlots$index$ : null
      };
    });
    gc.movementArea = {
      x: movementLayout.movementAreaX,
      y: movementLayout.movementAreaY,
      width: movementLayout.movementAreaWidth,
      height: movementLayout.movementAreaHeight
    };
  };
  var buildMovementBlocks = function buildMovementBlocks() {
    var _MOVEMENT_LEVEL_CONFI;
    var config = (_MOVEMENT_LEVEL_CONFI = _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel]) !== null && _MOVEMENT_LEVEL_CONFI !== void 0 ? _MOVEMENT_LEVEL_CONFI : _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11];
    var _gc$movementArea = gc.movementArea,
      x = _gc$movementArea.x,
      y = _gc$movementArea.y,
      width = _gc$movementArea.width,
      height = _gc$movementArea.height;
    var size = player.width;
    return config.blocks.map(function (block) {
      var blockX = x + width * block.x;
      var blockY = y + height * block.y;
      switch (block.type) {
        case "invisible":
          return new _InvisibleBlock.InvisibleBlock(blockX, blockY, size, block.value);
        case "countdown":
          return new _CountdownNumberBlock.CountdownNumberBlock(blockX, blockY, size, block.value);
        case "heavy":
          return new _HeavyBlock.HeavyBlock(blockX, blockY, size, block.value);
        case "glass":
          return new _GlassBlock.GlassBlock(blockX, blockY, size, block.value);
        case "normal":
        default:
          return new _NormalBlock.NormalBlock(blockX, blockY, size, block.value);
      }
    });
  };
  gc.getCurrentAnswer = function () {
    var answer = "";
    var _iterator = _createForOfIteratorHelper(gc.answerSlots),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var slot = _step.value;
        if (!slot.block) {
          break;
        }
        answer += slot.block.value;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return answer;
  };
  gc.submitMovementAnswer = function () {
    var _MOVEMENT_LEVEL_CONFI2;
    var currentAnswer = gc.getCurrentAnswer();
    var config = (_MOVEMENT_LEVEL_CONFI2 = _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel]) !== null && _MOVEMENT_LEVEL_CONFI2 !== void 0 ? _MOVEMENT_LEVEL_CONFI2 : _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11];
    if (currentAnswer !== gc.quizAnswer) {
      gc.loseLife();
      needsMovementReset = true;
      gc.timeLeftSeconds = config.time;
      lastTimerTick = performance.now();
      lastFrameTick = performance.now();
      gc.render();
      return;
    }
    if (gc.state.currentLevel < 20) {
      var _MOVEMENT_LEVEL_CONFI3;
      gc.state.currentLevel++;
      needsMovementReset = true;
      var nextConfig = (_MOVEMENT_LEVEL_CONFI3 = _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel]) !== null && _MOVEMENT_LEVEL_CONFI3 !== void 0 ? _MOVEMENT_LEVEL_CONFI3 : _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11];
      gc.timeLeftSeconds = nextConfig.time;
      lastTimerTick = performance.now();
      lastFrameTick = performance.now();
      gc.render();
      return;
    }
    gc.state.currentScreen = "levelselect";
    gc.render();
  };
  gc.resetMovementLevel = function () {
    if (!isMovementLevel(gc.state.currentLevel)) {
      return;
    }
    needsMovementReset = true;
    gc.render();
  };
  var syncMovementScene = function syncMovementScene() {
    var _MOVEMENT_LEVEL_CONFI4;
    var resetScene = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var config = (_MOVEMENT_LEVEL_CONFI4 = _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel]) !== null && _MOVEMENT_LEVEL_CONFI4 !== void 0 ? _MOVEMENT_LEVEL_CONFI4 : _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11];
    gc.quizPrompt = config.prompt;
    gc.quizAnswer = config.answer;
    syncMovementArea(resetScene);
    var minX = gc.movementArea.x;
    var minY = gc.movementArea.y;
    var maxX = gc.movementArea.x + gc.movementArea.width - player.width;
    var maxY = gc.movementArea.y + gc.movementArea.height - player.height;
    player.setBounds(minX, minY, maxX, maxY);
    player.setAnswerSlots(gc.answerSlots);
    if (resetScene) {
      gc.blocks = buildMovementBlocks();
      player.setBlocks(gc.blocks);
      player.resetPosition(minX + player.width, minY + gc.movementArea.height / 2 - player.height / 2);
      return;
    }
    player.setBlocks(gc.blocks);
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
  };
  gc.render = function () {
    var movementLevelActive = gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel);
    var enteringMovementLevel = movementLevelActive && (previousScreen !== "level" || previousLevel !== gc.state.currentLevel);
    if (movementLevelActive) {
      if (enteringMovementLevel) {
        var _MOVEMENT_LEVEL_CONFI5;
        var config = (_MOVEMENT_LEVEL_CONFI5 = _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel]) !== null && _MOVEMENT_LEVEL_CONFI5 !== void 0 ? _MOVEMENT_LEVEL_CONFI5 : _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11];
        gc.timeLeftSeconds = config.time;
        lastTimerTick = performance.now();
        lastFrameTick = performance.now();
      }
      syncMovementScene(enteringMovementLevel || gc.blocks.length === 0 || needsMovementReset);
      needsMovementReset = false;
    } else {
      gc.blocks = [];
      gc.answerSlots = [];
      player.setBlocks([]);
      player.setAnswerSlots([]);
      gc.timeLeftSeconds = _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11].time;
      lastTimerTick = performance.now();
      lastFrameTick = performance.now();
      var _getLayout = (0, _layout.getLayout)(ctx),
        movementAreaX = _getLayout.movementAreaX,
        movementAreaY = _getLayout.movementAreaY,
        movementAreaWidth = _getLayout.movementAreaWidth,
        movementAreaHeight = _getLayout.movementAreaHeight;
      gc.movementArea = {
        x: movementAreaX,
        y: movementAreaY,
        width: movementAreaWidth,
        height: movementAreaHeight
      };
    }
    gc.hitAreas = [];
    (0, _renderer.drawBackground)(gc);
    if (!movementLevelActive) {
      (0, _renderer.drawLogo)(gc);
      (0, _renderer.drawGameplayFrame)(gc);
    }
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
    needsMovementReset = true;
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
    var _iterator2 = _createForOfIteratorHelper(gc.hitAreas),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var area = _step2.value;
        if (x >= area.x && x <= area.x + area.w && y >= area.y && y <= area.y + area.h) {
          area.action();
          break;
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
  gc.gameplayFrame.onload = function () {
    gc.gameplayFrameLoaded = true;
    gc.render();
  };
  gc.gameplayFrame.onerror = function () {
    gc.gameplayFrameLoaded = false;
    gc.render();
  };
  gc.logo.src = "./assets/GameLogo.png";
  gc.gameplayFrame.src = "./assets/gameplay-frame.png";
  resizeCanvases();
  gc.timeLeftSeconds = _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11].time;
  gc.render();
  var _gameLoop = function gameLoop() {
    var movementLevelActive = gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel);
    if (movementLevelActive && !gc.state.paused && !gc.state.controlsOpen && !gc.state.gameOver) {
      var now = performance.now();
      var deltaSeconds = Math.max(0, (now - lastFrameTick) / 1000);
      lastFrameTick = now;
      if (now - lastTimerTick >= 1000) {
        var elapsedSeconds = Math.floor((now - lastTimerTick) / 1000);
        gc.timeLeftSeconds = Math.max(0, gc.timeLeftSeconds - elapsedSeconds);
        lastTimerTick += elapsedSeconds * 1000;
        if (gc.timeLeftSeconds === 0) {
          var _MOVEMENT_LEVEL_CONFI6;
          gc.loseLife();
          needsMovementReset = true;
          var config = (_MOVEMENT_LEVEL_CONFI6 = _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[gc.state.currentLevel]) !== null && _MOVEMENT_LEVEL_CONFI6 !== void 0 ? _MOVEMENT_LEVEL_CONFI6 : _movementLevelConfig.MOVEMENT_LEVEL_CONFIG[11];
          gc.timeLeftSeconds = config.time;
          lastTimerTick = performance.now();
          lastFrameTick = performance.now();
        }
      }
      var _iterator3 = _createForOfIteratorHelper(gc.blocks),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var block = _step3.value;
          block.update(deltaSeconds, gc.blocks);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      gc.blocks = gc.blocks.filter(function (block) {
        return !block.destroyed;
      });
      gc.answerSlots = gc.answerSlots.map(function (slot) {
        return _objectSpread(_objectSpread({}, slot), {}, {
          block: slot.block && !slot.block.destroyed ? slot.block : null
        });
      });
      player.setBlocks(gc.blocks);
      player.setAnswerSlots(gc.answerSlots);
      input.update();
      player.update();
      gc.render();
    } else {
      lastTimerTick = performance.now();
      lastFrameTick = performance.now();
    }
    requestAnimationFrame(_gameLoop);
  };
  _gameLoop();
};

},{"./Helpers/Events/EventEmitter":2,"./Helpers/InputManager":4,"./Helpers/PlayerControl":5,"./Helpers/objects/CountdownNumberBlock":7,"./Helpers/objects/GlassBlock":8,"./Helpers/objects/HeavyBlock":9,"./Helpers/objects/InvisibleBlock":10,"./Helpers/objects/NormalBlock":11,"./layout":12,"./movementLevelConfig":18,"./overlays/ControlsOverlay":19,"./overlays/GameOverOverlay":20,"./overlays/PauseOverlay":21,"./renderer":22,"./screens/Level":23,"./screens/LevelSelect":24,"./screens/MainMenu":25}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MOVEMENT_LEVEL_CONFIG = void 0;
var MOVEMENT_LEVEL_CONFIG = exports.MOVEMENT_LEVEL_CONFIG = {
  11: {
    prompt: "Spell CAT in the answer zone.",
    answer: "CAT",
    time: 35,
    blocks: [{
      x: 0.16,
      y: 0.26,
      value: "C",
      type: "normal"
    }, {
      x: 0.31,
      y: 0.48,
      value: "A",
      type: "normal"
    }, {
      x: 0.58,
      y: 0.36,
      value: "T",
      type: "normal"
    }, {
      x: 0.74,
      y: 0.54,
      value: "9",
      type: "normal"
    }]
  },
  12: {
    prompt: "Find the hidden block and spell MAP.",
    answer: "MAP",
    time: 40,
    blocks: [{
      x: 0.18,
      y: 0.32,
      value: "M",
      type: "normal"
    }, {
      x: 0.42,
      y: 0.45,
      value: "A",
      type: "invisible"
    }, {
      x: 0.64,
      y: 0.26,
      value: "P",
      type: "normal"
    }, {
      x: 0.74,
      y: 0.56,
      value: "7",
      type: "normal"
    }]
  },
  13: {
    prompt: "Carry the heavy blocks and spell BOX.",
    answer: "BOX",
    time: 45,
    blocks: [{
      x: 0.16,
      y: 0.30,
      value: "B",
      type: "heavy"
    }, {
      x: 0.36,
      y: 0.50,
      value: "O",
      type: "heavy"
    }, {
      x: 0.64,
      y: 0.30,
      value: "X",
      type: "normal"
    }, {
      x: 0.78,
      y: 0.52,
      value: "L",
      type: "normal"
    }]
  },
  14: {
    prompt: "Use the fragile block only once to spell SKY.",
    answer: "SKY",
    time: 40,
    blocks: [{
      x: 0.18,
      y: 0.32,
      value: "S",
      type: "glass"
    }, {
      x: 0.42,
      y: 0.42,
      value: "K",
      type: "normal"
    }, {
      x: 0.64,
      y: 0.30,
      value: "Y",
      type: "normal"
    }, {
      x: 0.74,
      y: 0.56,
      value: "2",
      type: "normal"
    }]
  },
  15: {
    prompt: "Hold the orange countdown blocks and spell 123.",
    answer: "123",
    time: 32,
    blocks: [{
      x: 0.18,
      y: 0.26,
      value: 1,
      type: "countdown"
    }, {
      x: 0.38,
      y: 0.48,
      value: 2,
      type: "countdown"
    }, {
      x: 0.60,
      y: 0.30,
      value: 3,
      type: "countdown"
    }, {
      x: 0.78,
      y: 0.52,
      value: "A",
      type: "normal"
    }]
  },
  16: {
    prompt: "Spell HID using mixed block types.",
    answer: "HID",
    time: 42,
    blocks: [{
      x: 0.16,
      y: 0.28,
      value: "H",
      type: "heavy"
    }, {
      x: 0.42,
      y: 0.52,
      value: "I",
      type: "invisible"
    }, {
      x: 0.66,
      y: 0.30,
      value: "D",
      type: "glass"
    }, {
      x: 0.78,
      y: 0.54,
      value: "8",
      type: "normal"
    }]
  },
  17: {
    prompt: "Keep the countdown safe and spell RUN.",
    answer: "RUN",
    time: 38,
    blocks: [{
      x: 0.16,
      y: 0.28,
      value: "R",
      type: "normal"
    }, {
      x: 0.38,
      y: 0.42,
      value: "U",
      type: "countdown"
    }, {
      x: 0.62,
      y: 0.30,
      value: "N",
      type: "normal"
    }, {
      x: 0.76,
      y: 0.56,
      value: "4",
      type: "countdown"
    }]
  },
  18: {
    prompt: "Spell FOG and test the hidden glass block.",
    answer: "FOG",
    time: 42,
    blocks: [{
      x: 0.14,
      y: 0.30,
      value: "F",
      type: "normal"
    }, {
      x: 0.36,
      y: 0.48,
      value: "O",
      type: "glass"
    }, {
      x: 0.62,
      y: 0.30,
      value: "G",
      type: "invisible"
    }, {
      x: 0.78,
      y: 0.56,
      value: "6",
      type: "normal"
    }]
  },
  19: {
    prompt: "Spell 908 before the timer gets tight.",
    answer: "908",
    time: 34,
    blocks: [{
      x: 0.18,
      y: 0.28,
      value: 9,
      type: "countdown"
    }, {
      x: 0.40,
      y: 0.48,
      value: 0,
      type: "normal"
    }, {
      x: 0.62,
      y: 0.30,
      value: 8,
      type: "heavy"
    }, {
      x: 0.78,
      y: 0.56,
      value: "B",
      type: "normal"
    }]
  },
  20: {
    prompt: "Final playtest: spell MIX with every block family present.",
    answer: "MIX",
    time: 48,
    blocks: [{
      x: 0.14,
      y: 0.28,
      value: "M",
      type: "normal"
    }, {
      x: 0.32,
      y: 0.48,
      value: "I",
      type: "invisible"
    }, {
      x: 0.52,
      y: 0.28,
      value: "X",
      type: "glass"
    }, {
      x: 0.70,
      y: 0.48,
      value: 5,
      type: "countdown"
    }, {
      x: 0.82,
      y: 0.30,
      value: "H",
      type: "heavy"
    }]
  }
};

},{}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawControlsOverlay = void 0;
var _theme = require("../theme");
var _layout = require("../layout");
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
    key: "H",
    desc: "Hold / Release Blocks"
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
  ctx.fillText("Controls may vary between levels.", cx, oy + oh * 0.9);
};

},{"../layout":12,"../theme":26}],20:[function(require,module,exports){
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

},{"../layout":12,"../renderer":22}],21:[function(require,module,exports){
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

},{"../layout":12,"../renderer":22,"../theme":26}],22:[function(require,module,exports){
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
  var t = (0, _theme.getTheme)(state);
  var isMovementLevel = state.currentScreen === "level" && state.currentLevel >= 11 && state.currentLevel <= 20;
  if (isMovementLevel) {
    var movementLayout = (0, _layout.getMovementLayout)(ctx);
    var currentAnswer = gc.getCurrentAnswer() || "(empty)";
    var timerText = "".concat(String(gc.timeLeftSeconds).padStart(2, "0"), "s");
    var timerColor = gc.timeLeftSeconds < 10 ? "#ff5252" : t.fgMid;
    var submitW = 160;
    var submitH = 48;
    var submitX = movementLayout.bottomFrameWidth - submitW - 32;
    var submitY = movementLayout.bottomFrameY + movementLayout.bottomFrameHeight / 2 - submitH / 2;
    var resetW = 100;
    var resetH = 34;
    var resetX = movementLayout.bottomFrameWidth - resetW - 46;
    var resetY = movementLayout.bottomFrameY + 28;
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 4;
    ctx.strokeRect(movementLayout.bottomFrameX, movementLayout.bottomFrameY, movementLayout.bottomFrameWidth, movementLayout.bottomFrameHeight);
    ctx.fillStyle = t.fg;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = "bold 28px ".concat(displayFont);
    ctx.fillText("Arrange The Blocks", 28, movementLayout.bottomFrameY + 22, movementLayout.bottomFrameWidth * 0.5);
    ctx.font = "17px ".concat(bodyFont);
    ctx.fillStyle = t.fgMid;
    ctx.fillText("Quiz: ".concat(gc.quizPrompt), 28, movementLayout.bottomFrameY + 62, movementLayout.bottomFrameWidth * 0.56);
    ctx.font = "15px ".concat(bodyFont);
    ctx.fillStyle = timerColor;
    ctx.fillText("Time Left: ".concat(timerText), 28, movementLayout.bottomFrameY + 102, 180);
    ctx.fillStyle = t.fg;
    ctx.fillText("Your Answer: ".concat(currentAnswer), 28, movementLayout.bottomFrameY + 130, movementLayout.bottomFrameWidth * 0.52);
    drawButton(gc, "RESET", resetX, resetY, resetW, resetH, function () {
      gc.resetMovementLevel();
    }, 14);
    drawButton(gc, "SUBMIT", submitX, submitY, submitW, submitH, function () {
      gc.submitMovementAnswer();
    }, 18);
    return;
  }
  var _getLayout3 = (0, _layout.getLayout)(ctx),
    w = _getLayout3.w,
    contentX = _getLayout3.contentX,
    contentWidth = _getLayout3.contentWidth,
    bottomBoxY = _getLayout3.bottomBoxY,
    bottomBoxHeight = _getLayout3.bottomBoxHeight;
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
  var t = (0, _theme.getTheme)(state);
  var isMovementLevel = state.currentScreen === "level" && state.currentLevel >= 11 && state.currentLevel <= 20;
  if (isMovementLevel) {
    var movementLayout = (0, _layout.getMovementLayout)(ctx);
    var _padX = 28;
    var _padY = 28;
    ctx.fillStyle = t.fg;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.font = "bold 24px ".concat(displayFont);
    ctx.fillText("Q.".concat(state.currentLevel), movementLayout.gameFrameX + _padX, movementLayout.gameFrameY + _padY);
    var _pauseW = 48;
    var _pauseH = 34;
    var _pauseX = movementLayout.gameFrameWidth - _padX - _pauseW;
    var _pauseY = movementLayout.gameFrameY + _padY - _pauseH / 2;
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 2;
    ctx.strokeRect(_pauseX, _pauseY, _pauseW, _pauseH);
    ctx.fillStyle = t.fg;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 16px ".concat(displayFont);
    ctx.fillText("II", _pauseX + _pauseW / 2, _pauseY + _pauseH / 2);
    gc.hitAreas.push({
      x: _pauseX,
      y: _pauseY,
      w: _pauseW,
      h: _pauseH,
      action: function action() {
        state.paused = true;
        gc.render();
      }
    });
    var _heartSize = 24;
    var _heartGap = 6;
    var _livesY = movementLayout.gameFrameHeight - _padY;
    var _totalW = 3 * _heartSize + 2 * _heartGap;
    var _livesX = movementLayout.gameFrameWidth - _padX - _totalW;
    ctx.textBaseline = "middle";
    ctx.font = "".concat(_heartSize, "px sans-serif");
    for (var i = 0; i < 3; i++) {
      ctx.fillStyle = i < state.lives ? "#e03030" : state.darkMode ? "#444444" : "#bbbbbb";
      ctx.textAlign = "left";
      ctx.fillText("\u2665", _livesX + i * (_heartSize + _heartGap), _livesY);
    }
    return;
  }
  var _getLayout4 = (0, _layout.getLayout)(ctx),
    topBoxX = _getLayout4.topBoxX,
    topBoxY = _getLayout4.topBoxY,
    topBoxWidth = _getLayout4.topBoxWidth,
    topBoxHeight = _getLayout4.topBoxHeight;
  var padX = topBoxWidth * 0.05;
  var padY = topBoxHeight * 0.08;
  ctx.fillStyle = t.fg;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.font = "bold 26px ".concat(displayFont);
  ctx.fillText("Q.".concat(state.currentLevel), topBoxX + padX, topBoxY + padY);
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
  var heartSize = 24;
  var heartGap = 6;
  var livesY = topBoxY + topBoxHeight - padY;
  var totalW = 3 * heartSize + 2 * heartGap;
  var livesX = topBoxX + topBoxWidth - padX - totalW;
  ctx.textBaseline = "middle";
  ctx.font = "".concat(heartSize, "px sans-serif");
  for (var _i = 0; _i < 3; _i++) {
    ctx.fillStyle = _i < state.lives ? "#e03030" : state.darkMode ? "#444444" : "#bbbbbb";
    ctx.textAlign = "left";
    ctx.fillText("\u2665", livesX + _i * (heartSize + heartGap), livesY);
  }
};

},{"./layout":12,"./levelData":13,"./theme":26}],23:[function(require,module,exports){
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
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var drawLevelNavigation = function drawLevelNavigation(gc, navYOverride) {
  var ctx = gc.ctx,
    state = gc.state;
  var _getLayout = (0, _layout.getLayout)(ctx),
    w = _getLayout.w,
    topBoxX = _getLayout.topBoxX,
    topBoxWidth = _getLayout.topBoxWidth,
    topBoxHeight = _getLayout.topBoxHeight,
    topBoxY = _getLayout.topBoxY;
  var cx = w / 2;
  var navBtnH = 42;
  var navBtnW = 150;
  var navY = navYOverride !== null && navYOverride !== void 0 ? navYOverride : topBoxY + topBoxHeight * 0.79;
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
var drawMovementLevelNavigation = function drawMovementLevelNavigation(gc) {
  var state = gc.state;
  var movementLayout = (0, _layout.getMovementLayout)(gc.ctx);
  var navBtnH = 42;
  var navBtnW = 150;
  var navY = movementLayout.bottomFrameY + movementLayout.bottomFrameHeight - navBtnH - 22;
  var centerX = movementLayout.bottomFrameWidth / 2;
  if (state.playMode !== "levelselect") {
    return;
  }
  if (state.currentLevel > 1) {
    (0, _renderer.drawButton)(gc, "<- PREV", 26, navY, navBtnW, navBtnH, function () {
      state.currentLevel--;
      gc.render();
    }, 18);
  }
  (0, _renderer.drawButton)(gc, "LEVEL SELECT", centerX - navBtnW / 2, navY, navBtnW, navBtnH, function () {
    gc.resetPlayerName();
    state.currentScreen = "levelselect";
    gc.render();
  }, 16);
  if (state.currentLevel < _levelData.LEVEL_COUNT) {
    (0, _renderer.drawButton)(gc, "NEXT ->", movementLayout.bottomFrameWidth - navBtnW - 26, navY, navBtnW, navBtnH, function () {
      state.currentLevel++;
      gc.render();
    }, 18);
  }
};
var drawAnswerZone = function drawAnswerZone(gc) {
  var ctx = gc.ctx;
  var _iterator = _createForOfIteratorHelper(gc.answerSlots),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var slot = _step.value;
      ctx.strokeStyle = "rgba(255,255,255,0.92)";
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 4]);
      ctx.strokeRect(slot.x, slot.y, slot.size, slot.size);
      ctx.setLineDash([]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
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
    topBoxHeight = _getLayout2.topBoxHeight;
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
    var movementLayout = (0, _layout.getMovementLayout)(ctx);
    ctx.strokeStyle = t.stroke;
    ctx.lineWidth = 4;
    ctx.strokeRect(movementLayout.gameFrameX, movementLayout.gameFrameY, movementLayout.gameFrameWidth, movementLayout.gameFrameHeight);
    drawAnswerZone(gc);
    var _iterator2 = _createForOfIteratorHelper(gc.blocks),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var block = _step2.value;
        block.draw(ctx);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    gc.player.draw(ctx);
    ctx.fillStyle = t.fgDim;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.font = "14px ".concat(bodyFont);
    ctx.fillText("Facing: ".concat(gc.player.getFacingDirection().toUpperCase()), movementLayout.gameFrameX + 24, movementLayout.gameFrameHeight - 24);
    drawMovementLevelNavigation(gc);
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

},{"../layout":12,"../levelData":13,"../levels/Level1":14,"../levels/Level2":15,"../levels/Level3":16,"../renderer":22,"../theme":26}],24:[function(require,module,exports){
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

},{"../layout":12,"../levelData":13,"../renderer":22,"../theme":26}],25:[function(require,module,exports){
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

},{"../layout":12,"../renderer":22,"../theme":26}],26:[function(require,module,exports){
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

},{}]},{},[17])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9IZWxwZXJzL0V2ZW50cy9FdmVudC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvRXZlbnRzL0V2ZW50RW1pdHRlci50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvRXZlbnRzL0V2ZW50TGlzdGVuZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9IZWxwZXJzL0lucHV0TWFuYWdlci50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvUGxheWVyQ29udHJvbC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvb2JqZWN0cy9CbG9jay50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvb2JqZWN0cy9Db3VudGRvd25OdW1iZXJCbG9jay50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvb2JqZWN0cy9HbGFzc0Jsb2NrLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvSGVscGVycy9vYmplY3RzL0hlYXZ5QmxvY2sudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9IZWxwZXJzL29iamVjdHMvSW52aXNpYmxlQmxvY2sudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9IZWxwZXJzL29iamVjdHMvTm9ybWFsQmxvY2sudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sYXlvdXQudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbERhdGEudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbHMvTGV2ZWwxLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxzL0xldmVsMi50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVscy9MZXZlbDMudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9tYWluLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbW92ZW1lbnRMZXZlbENvbmZpZy50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL292ZXJsYXlzL0NvbnRyb2xzT3ZlcmxheS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL292ZXJsYXlzL0dhbWVPdmVyT3ZlcmxheS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL292ZXJsYXlzL1BhdXNlT3ZlcmxheS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3JlbmRlcmVyLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvc2NyZWVucy9MZXZlbC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3NjcmVlbnMvTGV2ZWxTZWxlY3QudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9zY3JlZW5zL01haW5NZW51LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvdGhlbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7SUNBWSxTQUFTLEdBQUEsT0FBQSxDQUFBLFNBQUEsMEJBQVQsU0FBUztFQUFULFNBQVM7RUFBVCxTQUFTO0VBQVQsU0FBUztFQUFBLE9BQVQsU0FBUztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRVIsWUFBWSxHQUFBLE9BQUEsQ0FBQSxZQUFBO0VBQUEsU0FBQSxhQUFBO0lBQUEsZUFBQSxPQUFBLFlBQUE7SUFBQSxlQUFBLG9CQUM2QixJQUFJLEdBQUcsQ0FBQyxDQUFDO0VBQUE7RUFBQSxPQUFBLFlBQUEsQ0FBQSxZQUFBO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFFM0QsU0FBTyxFQUFFLENBQUksS0FBYSxFQUFFLFFBQTBCLEVBQUU7TUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUss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dUJBQUEsTUFBQSxDQUFBLFFBQUEsYUFBQSxDQUFBLGtCQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEseUJBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLEtBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxxQkFBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLENBQUE7QUFBQSxTQUFBLDJCQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSx5QkFBQSxNQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLEtBQUEsQ0FBQSxxQkFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLDJCQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLHVCQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsWUFBQSxFQUFBLGVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLElBQUEsV0FBQSxJQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxXQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxFQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxjQUFBLENBQUEsOEJBQUEsQ0FBQSxRQUFBLENBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSwyQkFBQSxDQUFBLFNBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLDZCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxvQkFBQSxDQUFBLCtDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsa0JBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBO0FBQUEsU0FBQSxRQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxPQUFBLE1BQUEsQ0FBQSxxQkFBQSxRQUFBLENBQUEsR0FBQSxNQUFBLENBQUEscUJBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxXQUFBLENBQUEsV0FBQSxNQUFBLENBQUEsd0JBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLFVBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUE7QUFBQSxTQUFBLGNBQUEsQ0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsU0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLFNBQUEsQ0FBQSxDQUFBLElBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLE9BQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLE9BQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLE1BQUEsQ0FBQSx5QkFBQSxHQUFBLE1BQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUEsRUFBQSxNQUFBLENBQUEseUJBQUEsQ0FBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsT0FBQSxXQUFBLENBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsaUJBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxhQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLFlBQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsY0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEs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LENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLDhCQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsMkJBQUEsQ0FBQSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSw2QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSwrQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxhQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLFlBQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsY0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxpQkFBQSxRQUFBLFNBQUEsQ0FBQTtBQUFBLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLFdBQUEsSUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsaUJBQUEsT0FBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxVQUFBLENBQUEsaUJBQUEsQ0FBQSxZQUFBLFNBQUEscUVBQUEsc0JBQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSx1QkFBQSxDQUFBLG1CQUFBLENBQUEsWUFBQSxjQUFBLHNFQUFBLENBQUE7QUFBQSxTQUFBLDBCQUFBLGNBQUEsQ0FBQSxJQUFBLE9BQUEsQ0FBQSxTQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsaUNBQUEsQ0FBQSxhQUFBLHlCQUFBLFlBQUEsMEJBQUEsYUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLFdBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLE1BQUEsZUFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLFVBQUEsQ0FBQSxFQUFBLENBQUEsNkJBQUEsQ0FBQSxhQUFBLENBQUEsWUFBQSxTQUFBLHdEQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQSxXQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxRQUFBLE1BQUEsWUFBQSxXQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxpQkFBQSxRQUFBLFNBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxlQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLElBQUEsZUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsS0FBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsR0FBQSxjQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE1BQUEsWUFBQSxNQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSxlQUFBLENB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LEVBekVxQyxhQUFLOzs7Ozs7Ozs7QUNGL0MsSUFBQSxPQUFBLEdBQUEsT0FBQTtBQUF5RCxTQUFBLFFBQUEsQ0FBQSxzQ0FBQSxPQUFBLHdCQUFBLE1BQUEsdUJBQUEsTUFBQSxDQUFBLFFBQUEsYUFBQSxDQUFBLGtCQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLENBQUEseUJBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxXQUFBLEtBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxNQUFBLENBQUEsU0FBQSxxQkFBQSxDQUFBLEtBQUEsT0FBQSxDQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsYUFBQSxTQUFBO0FBQUEsU0FBQSxrQkFBQSxDQUFBLEVBQUEsQ0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxRQUFBLENBQUEsQ0FBQSxZQUFBLGtCQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsUUFBQSxRQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLGNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxHQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsaUJBQUEsUUFBQSxTQUFBLENBQUE7QUFBQSxTQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxDQUFBLEVBQUEseUJBQUEsS0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLGlCQUFBLE9BQUEsQ0FBQSxDQUFBLDBCQUFBLENBQUEsVUFBQSxDQUFBLGlCQUFBLENBQUEsWUFBQSxTQUFBLHFFQUFBLHNCQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEsdUJBQUEsQ0FBQSxtQkFBQSxDQUFBLFlBQUEsY0FBQSxzRUFBQSxDQUFBO0FBQUEsU0FBQSwwQkFBQSxjQUFBLENBQUEsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxPQUFBLGlDQUFBLENBQUEsYUFBQSx5QkFBQSxZQUFBLDBCQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxXQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxNQUFBLGVBQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxVQUFBLENBQUEsRUFBQSxDQUFBLDZCQUFBLENBQUEsYUFBQSxDQUFBLFlBQUEsU0FBQSx3REFBQSxDQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxNQUFBLFlBQUEsV0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsaUJBQUEsUUFBQSxTQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFB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LEVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxjQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsT0FBQSxJQUFBLENBQUEsS0FBQSxPQUFBLFNBQUE7QUFBQSxTQUFBLGVBQUEsQ0FBQSxFQUFBLENBQUEsZUFBQSxjQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLGFBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxXQUFBLGVBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxNQUFBLGVBQUEsQ0FBQSxDQUFBO0FBQUEsU0FBQSxVQUFBLENBQUEsRUFBQSxDQUFBLDZCQUFBLENBQUEsYUFBQSxDQUFBLFlBQUEsU0FBQSx3REFBQSxDQUFBLENBQUEsU0FBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsV0FBQSxJQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsUUFBQSxNQUFBLFlBQUEsV0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsaUJBQUEsUUFBQSxTQUFBLENBQUEsSUFBQSxlQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsZUFBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxJQUFBLGVBQUEsQ0FBQSxFQUFBLENBQUEsV0FB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QUEsV0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxpQkFBQSxRQUFBLFNBQUEsQ0FBQTtBQUFBLFNBQUEsZUFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLFlBQUEsQ0FBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUE7QUFBQSxTQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsb0JBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFNBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsa0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGdDQUFBLE9BQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLFNBQUEseUVBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxhQUFBLFNBQUE7QUFBQSxTQUFBLFdBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxDQUFBLEdBQUEsMEJBQUEsQ0FBQSxDQUFBLEVBQUEseUJBQUEsS0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxXQUFBLElBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsMkJBQUEsQ0FBQSxFQUFBLENBQUEsUUFBQSxDQUFBLGlCQUFBLE9BQUEsQ0FBQSxDQUFBLDBCQUFBLENBQUEsVUFBQSxDQUFBLGlCQUFBLENBQUEsWUFBQSxTQUFBLHFFQUFBLHNCQUFBLENBQUEsQ0FBQTtBQUFBLFNBQUEs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QyxFQUNEO0VBQUUsS0FBSyxFQUFFLGVBQWU7RUFBRSxLQUFLLEVBQUU7QUFBRyxDQUFDLEVBQ3JDO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDJCQUEyQjtFQUNsQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLDRCQUE0QjtFQUNuQyxLQUFLLEVBQUUsQ0FBQyw4QkFBOEI7QUFDeEMsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcsQ0FBQyxFQUNEO0VBQ0UsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQixLQUFLLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRSw4Q0FBOEM7QUFDbEcs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QUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsV0FBQSxDQUFBLFdBQUEsTUFBQSxDQUFBLHdCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE9BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsWUFBQSxDQUFBO0FBQUEsU0FBQSxjQUFBLENBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFNBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsV0FBQSxTQUFBLENBQUEsQ0FBQSxJQUFBLFNBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSxPQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxPQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsZUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxNQUFBLENBQUEseUJBQUEsR0FBQSxNQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBLEVBQUEsTUFBQSxDQUFBLHlCQUFBLENBQUEsQ0FBQSxLQUFBLE9BQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxHQUFBLE9BQUEsV0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLE1BQUEsQ0FBQSx3QkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLGlCQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxZQUFBLENBQUEsR0FBQSxjQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLElBQUEsS0FBQSxFQUFBLENBQUEsRUFBQSxVQUFBLE1BQUEsWUFBQSxNQUFBLFFBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSxlQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxvQkFBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxrQkFBQSxDQUFBLFFBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsZ0NBQUEsT0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsU0FBQSx5RUFBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLE1BQUEsRUFBQSxDQUFBO0FBQUEsU0FBQSwyQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEseUJBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxLQUFBLENBQUEscUJBQUEsQ0FBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSwyQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxJQUFBLFdBQUEsSUFBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxD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LENBQUEsRUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLDhCQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsMkJBQUEsQ0FBQSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSw2QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSwrQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENB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QUFDLGFBQWEsR0FBRyxhQUFhO0lBQ25DLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNiLENBQUMsQ0FBQztFQUVGLElBQUEsb0JBQVUsRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFlBQU07SUFDdEUsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJO0lBQ3pCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNiLENBQUMsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7OztBQ3pDTSxJQUFNLFFBQVEsR0FBQSxPQUFBLENBQUEsUUFBQSxHQUFHLFNBQVgsUUFBUSxDQUFJLEtBQWdCO0VBQUEsT0FDdkMsS0FBSyxDQUFDLFFBQVEsR0FDVjtJQUNFLEVBQUUsRUFBRSxTQUFTO0lBQ2IsRUFBRSxFQUFFLFNBQVM7SUFDYixLQUFLLEVBQUUsU0FBUztJQUNoQixLQUFLLEVBQUUsU0FBUztJQUNoQixNQUFNLEVBQUUsU0FBUztJQUNqQixTQUFTLEVBQUUscUJBQXFCO0lBQ2hDLE9BQU8sRUFBRTtFQUNYLENBQUMsR0FDRDtJQUNFLEVBQUUsRUFBRSxTQUFTO0lBQ2IsRUFBRSxFQUFFLFNBQVM7SUFDYixLQUFLLEVBQUUsU0FBUztJQUNoQixLQUFLLEVBQUUsU0FBUztJQUNoQixNQUFNLEVBQUUsU0FBUztJQUNqQixTQUFTLEVBQUUsd0JBQXdCO0lBQ25DLE9BQU8sRUFBRTtFQUNYLENBQUM7QUFBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBlbnVtIEdhbWVFdmVudCB7XHJcbiAgICBNT1ZFID0gXCJNT1ZFXCIsXHJcbiAgICBEQVNIID0gXCJEQVNIXCIsXHJcbiAgICBIT0xEID0gXCJIT0xEXCJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRXZlbnRQYXlsb2FkIHtcclxuICAgIGR4OiBudW1iZXI7XHJcbiAgICBkeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhc2hFdmVudFBheWxvYWQge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9sZEV2ZW50UGF5bG9hZCB7fVxyXG4iLCJ0eXBlIEV2ZW50Q2FsbGJhY2s8VCA9IGFueT4gPSAocGF5bG9hZDogVCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudEVtaXR0ZXIge1xyXG4gICAgcHJpdmF0ZSBsaXN0ZW5lcnM6IE1hcDxzdHJpbmcsIEV2ZW50Q2FsbGJhY2tbXT4gPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgcHVibGljIG9uPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudENhbGxiYWNrPFQ+KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxpc3RlbmVycy5oYXMoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChldmVudCwgW10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpIS5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb2ZmPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBFdmVudENhbGxiYWNrPFQ+KSB7XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KTtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQoXHJcbiAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICBjYWxsYmFja3MuZmlsdGVyKChjYikgPT4gY2IgIT09IGNhbGxiYWNrKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVtaXQ8VD4oZXZlbnQ6IHN0cmluZywgcGF5bG9hZDogVCkge1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMubGlzdGVuZXJzLmdldChldmVudCk7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjYiBvZiBjYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgY2IocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0V2ZW50RW1pdHRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXIge1xyXG4gICAgcHJvdGVjdGVkIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbWl0dGVyOiBFdmVudEVtaXR0ZXIpIHtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsaXN0ZW48VD4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IChwYXlsb2FkOiBUKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLm9uKGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0b3BMaXN0ZW5pbmc8VD4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IChwYXlsb2FkOiBUKSA9PiB2b2lkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyLm9mZihldmVudCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0V2ZW50cy9FdmVudEVtaXR0ZXJcIjtcclxuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4vRXZlbnRzL0V2ZW50LnRzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcclxuICAgIHByaXZhdGUga2V5czogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuICAgIHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtb3ZlbWVudEtleXMgPSBuZXcgU2V0KFtcIndcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCIgXCIsIFwiaFwiXSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW1pdHRlcjogRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcclxuXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB0aGlzLm9uS2V5RG93bihlKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4gdGhpcy5vbktleVVwKGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnN0IHdhc1ByZXNzZWQgPSB0aGlzLmtleXNba2V5XSA9PT0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmtleXNba2V5XSA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50S2V5cy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF3YXNQcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChHYW1lRXZlbnQuREFTSCwge30pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImhcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoR2FtZUV2ZW50LkhPTEQsIHt9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLmtleXNba2V5XSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudEtleXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICBsZXQgZHggPSAwO1xyXG4gICAgICAgIGxldCBkeSA9IDA7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJ3XCJdKSBkeSAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJzXCJdKSBkeSArPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJhXCJdKSBkeCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJkXCJdKSBkeCArPSAxO1xyXG5cclxuICAgICAgICBpZiAoZHggIT09IDAgfHwgZHkgIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoR2FtZUV2ZW50Lk1PVkUsIHsgZHgsIGR5IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vRXZlbnRzL0V2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0V2ZW50cy9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCB7IEdhbWVFdmVudCwgTW92ZUV2ZW50UGF5bG9hZCB9IGZyb20gXCIuL0V2ZW50cy9FdmVudC50c1wiO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwiLi9vYmplY3RzL0Jsb2NrXCI7XG5pbXBvcnQgdHlwZSB7IEFuc3dlclNsb3RFbnRpdHkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBEaXJlY3Rpb24gPSBcInVwXCIgfCBcImRvd25cIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG50eXBlIEJvdW5kcyA9IHtcbiAgICBtaW5YOiBudW1iZXI7XG4gICAgbWF4WDogbnVtYmVyO1xuICAgIG1pblk6IG51bWJlcjtcbiAgICBtYXhZOiBudW1iZXI7XG59O1xuXG50eXBlIEFmdGVyaW1hZ2UgPSB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBhbHBoYTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIFBsYXllckNvbnRyb2wgZXh0ZW5kcyBFdmVudExpc3RlbmVyIHtcbiAgICBwdWJsaWMgeCA9IDA7XG4gICAgcHVibGljIHkgPSAwO1xuICAgIHB1YmxpYyByZWFkb25seSB3aWR0aCA9IDQ4O1xuICAgIHB1YmxpYyByZWFkb25seSBoZWlnaHQgPSA0ODtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQgPSA1O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZGFzaERpc3RhbmNlID0gNTY7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IERpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3ByaXRlczogUmVjb3JkPERpcmVjdGlvbiwgSFRNTEltYWdlRWxlbWVudD47XG4gICAgcHJpdmF0ZSBib3VuZHM6IEJvdW5kcyA9IHtcbiAgICAgICAgbWluWDogMCxcbiAgICAgICAgbWF4WDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICBtaW5ZOiAwLFxuICAgICAgICBtYXhZOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgfTtcbiAgICBwcml2YXRlIGJsb2NrczogQmxvY2tbXSA9IFtdO1xuICAgIHByaXZhdGUgYW5zd2VyU2xvdHM6IEFuc3dlclNsb3RFbnRpdHlbXSA9IFtdO1xuICAgIHByaXZhdGUgaGVsZEJsb2NrOiBCbG9jayB8IG51bGwgPSBudWxsO1xuICAgIHByaXZhdGUgYWZ0ZXJpbWFnZXM6IEFmdGVyaW1hZ2VbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoZW1pdHRlcjogRXZlbnRFbWl0dGVyKSB7XG4gICAgICAgIHN1cGVyKGVtaXR0ZXIpO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IHtcbiAgICAgICAgICAgIHVwOiB0aGlzLmxvYWRTcHJpdGUoXCIuL2Fzc2V0cy9QbGF5ZXIvUGxheWVyX1VwLnBuZ1wiKSxcbiAgICAgICAgICAgIGRvd246IHRoaXMubG9hZFNwcml0ZShcIi4vYXNzZXRzL1BsYXllci9QbGF5ZXJfRG93bi5wbmdcIiksXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxvYWRTcHJpdGUoXCIuL2Fzc2V0cy9QbGF5ZXIvUGxheWVyX0xlZnQucG5nXCIpLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMubG9hZFNwcml0ZShcIi4vYXNzZXRzL1BsYXllci9QbGF5ZXJfUmlnaHQucG5nXCIpLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMueCA9IDQwMDtcbiAgICAgICAgdGhpcy55ID0gMzAwO1xuXG4gICAgICAgIHRoaXMubGlzdGVuPE1vdmVFdmVudFBheWxvYWQ+KEdhbWVFdmVudC5NT1ZFLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKGRhdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxpc3RlbihHYW1lRXZlbnQuREFTSCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kYXNoKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuKEdhbWVFdmVudC5IT0xELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUhvbGQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVsZEJsb2NrPy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoSGVsZEJsb2NrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFmdGVyaW1hZ2VzID0gdGhpcy5hZnRlcmltYWdlc1xuICAgICAgICAgICAgLm1hcCgoaW1hZ2UpID0+ICh7IC4uLmltYWdlLCBhbHBoYTogaW1hZ2UuYWxwaGEgLSAwLjEyIH0pKVxuICAgICAgICAgICAgLmZpbHRlcigoaW1hZ2UpID0+IGltYWdlLmFscGhhID4gMCk7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gdGhpcy5zcHJpdGVzW3RoaXMuZGlyZWN0aW9uXTtcblxuICAgICAgICBpZiAoc3ByaXRlLmNvbXBsZXRlICYmIHNwcml0ZS5uYXR1cmFsV2lkdGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHRoaXMuYWZ0ZXJpbWFnZXMpIHtcbiAgICAgICAgICAgICAgICBjdHguc2F2ZSgpO1xuICAgICAgICAgICAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IGltYWdlLmFscGhhO1xuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlLCBpbWFnZS54LCBpbWFnZS55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGltYWdlIG9mIHRoaXMuYWZ0ZXJpbWFnZXMpIHtcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSBpbWFnZS5hbHBoYTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmMjhiODJcIjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdChpbWFnZS54LCBpbWFnZS55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2U1MzkzNVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Qm91bmRzKG1pblg6IG51bWJlciwgbWluWTogbnVtYmVyLCBtYXhYOiBudW1iZXIsIG1heFk6IG51bWJlcikge1xuICAgICAgICB0aGlzLmJvdW5kcyA9IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSB9O1xuICAgICAgICB0aGlzLmNsYW1wVG9Cb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmxvY2tzKGJsb2NrczogQmxvY2tbXSkge1xuICAgICAgICB0aGlzLmJsb2NrcyA9IGJsb2NrcztcblxuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2sgJiYgIWJsb2Nrcy5pbmNsdWRlcyh0aGlzLmhlbGRCbG9jaykpIHtcbiAgICAgICAgICAgIHRoaXMuaGVsZEJsb2NrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBbnN3ZXJTbG90cyhzbG90czogQW5zd2VyU2xvdEVudGl0eVtdKSB7XG4gICAgICAgIHRoaXMuYW5zd2VyU2xvdHMgPSBzbG90cztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBcImRvd25cIikge1xuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2spIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoSGVsZEJsb2NrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5hZnRlcmltYWdlcyA9IFtdO1xuICAgICAgICB0aGlzLmNsYW1wVG9Cb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmFjaW5nRGlyZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU3ByaXRlKHNyYzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzcHJpdGUuc3JjID0gc3JjO1xuICAgICAgICByZXR1cm4gc3ByaXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZShkYXRhOiBNb3ZlRXZlbnRQYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IG5leHREaXJlY3Rpb24gPSB0aGlzLnJlc29sdmVEaXJlY3Rpb24oZGF0YSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV4dERpcmVjdGlvbjtcbiAgICAgICAgY29uc3Qgc3BlZWRNdWx0aXBsaWVyID0gdGhpcy5oZWxkQmxvY2s/LmdldE1vdmVTcGVlZE11bHRpcGxpZXIoKSA/PyAxO1xuICAgICAgICBjb25zdCBtb3ZlU3BlZWQgPSB0aGlzLnNwZWVkICogc3BlZWRNdWx0aXBsaWVyO1xuXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVggPSB0aGlzLmNsYW1wVmFsdWUodGhpcy54ICsgZGF0YS5keCAqIG1vdmVTcGVlZCwgdGhpcy5ib3VuZHMubWluWCwgdGhpcy5ib3VuZHMubWF4WCk7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVkgPSB0aGlzLmNsYW1wVmFsdWUodGhpcy55ICsgZGF0YS5keSAqIG1vdmVTcGVlZCwgdGhpcy5ib3VuZHMubWluWSwgdGhpcy5ib3VuZHMubWF4WSk7XG4gICAgICAgIGNvbnN0IG90aGVyQmxvY2tzID0gdGhpcy5ibG9ja3MuZmlsdGVyKChibG9jaykgPT4gYmxvY2sgIT09IHRoaXMuaGVsZEJsb2NrKTtcblxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlc1dpdGhCbG9ja2luZ0Jsb2NrKGNhbmRpZGF0ZVgsIGNhbmRpZGF0ZVksIG90aGVyQmxvY2tzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGVsZEJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyQW5zd2VyU2xvdEZvckJsb2NrKHRoaXMuaGVsZEJsb2NrKTtcbiAgICAgICAgICAgIGNvbnN0IGhlbGRQb3NpdGlvbiA9IHRoaXMuZ2V0SGVsZEJsb2NrUG9zaXRpb24oY2FuZGlkYXRlWCwgY2FuZGlkYXRlWSwgbmV4dERpcmVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmhlbGRCbG9jay5tb3ZlVG8oaGVsZFBvc2l0aW9uLngsIGhlbGRQb3NpdGlvbi55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IGNhbmRpZGF0ZVg7XG4gICAgICAgIHRoaXMueSA9IGNhbmRpZGF0ZVk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkYXNoKCkge1xuICAgICAgICBsZXQgZHggPSAwO1xuICAgICAgICBsZXQgZHkgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJ1cFwiKSBkeSA9IC0xO1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwiZG93blwiKSBkeSA9IDE7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIpIGR4ID0gLTE7XG4gICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiKSBkeCA9IDE7XG4gICAgICAgIGNvbnN0IHNwZWVkTXVsdGlwbGllciA9IHRoaXMuaGVsZEJsb2NrPy5nZXRNb3ZlU3BlZWRNdWx0aXBsaWVyKCkgPz8gMTtcbiAgICAgICAgY29uc3QgZGFzaERpc3RhbmNlID0gdGhpcy5kYXNoRGlzdGFuY2UgKiBzcGVlZE11bHRpcGxpZXI7XG5cbiAgICAgICAgY29uc3Qgc3RhcnRYID0gdGhpcy54O1xuICAgICAgICBjb25zdCBzdGFydFkgPSB0aGlzLnk7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVggPSB0aGlzLmNsYW1wVmFsdWUodGhpcy54ICsgZHggKiBkYXNoRGlzdGFuY2UsIHRoaXMuYm91bmRzLm1pblgsIHRoaXMuYm91bmRzLm1heFgpO1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVZID0gdGhpcy5jbGFtcFZhbHVlKHRoaXMueSArIGR5ICogZGFzaERpc3RhbmNlLCB0aGlzLmJvdW5kcy5taW5ZLCB0aGlzLmJvdW5kcy5tYXhZKTtcbiAgICAgICAgY29uc3Qgb3RoZXJCbG9ja3MgPSB0aGlzLmJsb2Nrcy5maWx0ZXIoKGJsb2NrKSA9PiBibG9jayAhPT0gdGhpcy5oZWxkQmxvY2spO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGVzV2l0aEJsb2NraW5nQmxvY2soY2FuZGlkYXRlWCwgY2FuZGlkYXRlWSwgb3RoZXJCbG9ja3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2spIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBbnN3ZXJTbG90Rm9yQmxvY2sodGhpcy5oZWxkQmxvY2spO1xuICAgICAgICAgICAgY29uc3QgaGVsZFBvc2l0aW9uID0gdGhpcy5nZXRIZWxkQmxvY2tQb3NpdGlvbihjYW5kaWRhdGVYLCBjYW5kaWRhdGVZLCB0aGlzLmRpcmVjdGlvbik7XG4gICAgICAgICAgICB0aGlzLmhlbGRCbG9jay5tb3ZlVG8oaGVsZFBvc2l0aW9uLngsIGhlbGRQb3NpdGlvbi55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3Bhd25EYXNoQWZ0ZXJpbWFnZXMoc3RhcnRYLCBzdGFydFksIGR4LCBkeSk7XG4gICAgICAgIHRoaXMueCA9IGNhbmRpZGF0ZVg7XG4gICAgICAgIHRoaXMueSA9IGNhbmRpZGF0ZVk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVIb2xkKCkge1xuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGVhc2VTbG90ID0gdGhpcy5nZXRJbnRlcnNlY3RpbmdFbXB0eUFuc3dlclNsb3QodGhpcy5oZWxkQmxvY2spO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJCbG9ja3MgPSB0aGlzLmJsb2Nrcy5maWx0ZXIoKGNhbmRpZGF0ZSkgPT4gY2FuZGlkYXRlICE9PSB0aGlzLmhlbGRCbG9jayk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlU2xvdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJBbnN3ZXJTbG90Rm9yQmxvY2sodGhpcy5oZWxkQmxvY2spO1xuICAgICAgICAgICAgICAgIHJlbGVhc2VTbG90LmJsb2NrID0gdGhpcy5oZWxkQmxvY2s7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWxkQmxvY2subW92ZVRvKHJlbGVhc2VTbG90LngsIHJlbGVhc2VTbG90LnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVsZEJsb2NrLm9uUmVsZWFzZWQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFjaEhlbGRCbG9jaygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlkZXNXaXRoQW55QmxvY2sodGhpcy5oZWxkQmxvY2sueCwgdGhpcy5oZWxkQmxvY2sueSwgb3RoZXJCbG9ja3MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjdEZpdHNCb3VuZHModGhpcy5oZWxkQmxvY2sueCwgdGhpcy5oZWxkQmxvY2sueSwgdGhpcy5oZWxkQmxvY2suc2l6ZSwgdGhpcy5oZWxkQmxvY2suc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaGVsZEJsb2NrLm9uUmVsZWFzZWQoKTtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoSGVsZEJsb2NrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuZmluZE5lYXJieUZhY2luZ0Jsb2NrKCk7XG4gICAgICAgIGlmICghYmxvY2sgfHwgIWJsb2NrLmNhbkJlUGlja2VkVXAoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhckFuc3dlclNsb3RGb3JCbG9jayhibG9jayk7XG4gICAgICAgIGlmICghYmxvY2sub25QaWNrZWRVcCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5oZWxkQmxvY2sgPSBibG9jaztcbiAgICAgICAgYmxvY2suc2V0SGVsZCh0cnVlKTtcbiAgICAgICAgY29uc3QgaGVsZFBvc2l0aW9uID0gdGhpcy5nZXRIZWxkQmxvY2tQb3NpdGlvbih0aGlzLngsIHRoaXMueSwgdGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICBibG9jay5tb3ZlVG8oaGVsZFBvc2l0aW9uLngsIGhlbGRQb3NpdGlvbi55KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmROZWFyYnlGYWNpbmdCbG9jaygpIHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHBsYXllckNlbnRlclggPSB0aGlzLnggKyB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgcGxheWVyQ2VudGVyWSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcblxuICAgICAgICBsZXQgY2xvc2VzdEJsb2NrOiBCbG9jayB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgY2xvc2VzdERpc3RhbmNlID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgICAgICAgIGlmIChibG9jay5oZWxkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChibG9jay5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYmxvY2tDZW50ZXJYID0gYmxvY2sueCArIGJsb2NrLnNpemUgLyAyO1xuICAgICAgICAgICAgY29uc3QgYmxvY2tDZW50ZXJZID0gYmxvY2sueSArIGJsb2NrLnNpemUgLyAyO1xuICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbERpc3RhbmNlID0gTWF0aC5hYnMoYmxvY2tDZW50ZXJYIC0gcGxheWVyQ2VudGVyWCk7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbERpc3RhbmNlID0gTWF0aC5hYnMoYmxvY2tDZW50ZXJZIC0gcGxheWVyQ2VudGVyWSk7XG5cbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiBibG9jay55ID49IHRoaXMueSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkZ2VHYXAgPSBibG9jay55IC0gKHRoaXMueSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbERpc3RhbmNlIDw9IHRocmVzaG9sZCAmJiBlZGdlR2FwID49IDAgJiYgZWRnZUdhcCA8IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGVkZ2VHYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwidXBcIiAmJiBibG9jay55ICsgYmxvY2suc2l6ZSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkZ2VHYXAgPSB0aGlzLnkgLSAoYmxvY2sueSArIGJsb2NrLnNpemUpO1xuICAgICAgICAgICAgICAgIGlmIChob3Jpem9udGFsRGlzdGFuY2UgPD0gdGhyZXNob2xkICYmIGVkZ2VHYXAgPj0gMCAmJiBlZGdlR2FwIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gZWRnZUdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIGJsb2NrLnggPj0gdGhpcy54KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRnZUdhcCA9IGJsb2NrLnggLSAodGhpcy54ICsgdGhpcy53aWR0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHZlcnRpY2FsRGlzdGFuY2UgPD0gdGhyZXNob2xkICYmIGVkZ2VHYXAgPj0gMCAmJiBlZGdlR2FwIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gZWRnZUdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgYmxvY2sueCArIGJsb2NrLnNpemUgPD0gdGhpcy54ICsgdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkZ2VHYXAgPSB0aGlzLnggLSAoYmxvY2sueCArIGJsb2NrLnNpemUpO1xuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbERpc3RhbmNlIDw9IHRocmVzaG9sZCAmJiBlZGdlR2FwID49IDAgJiYgZWRnZUdhcCA8IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGVkZ2VHYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBjbG9zZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBjbG9zZXN0QmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0QmxvY2s7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNvbHZlRGlyZWN0aW9uKGRhdGE6IE1vdmVFdmVudFBheWxvYWQpOiBEaXJlY3Rpb24ge1xuICAgICAgICBpZiAoZGF0YS5keCA+IDApIHJldHVybiBcInJpZ2h0XCI7XG4gICAgICAgIGlmIChkYXRhLmR4IDwgMCkgcmV0dXJuIFwibGVmdFwiO1xuICAgICAgICBpZiAoZGF0YS5keSA+IDApIHJldHVybiBcImRvd25cIjtcbiAgICAgICAgcmV0dXJuIFwidXBcIjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEhlbGRCbG9ja1Bvc2l0aW9uKHBsYXllclg6IG51bWJlciwgcGxheWVyWTogbnVtYmVyLCBkaXJlY3Rpb246IERpcmVjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogcGxheWVyWCwgeTogcGxheWVyWSAtIHRoaXMuaGVpZ2h0IH07XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHBsYXllclgsIHk6IHBsYXllclkgKyB0aGlzLmhlaWdodCB9O1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBwbGF5ZXJYIC0gdGhpcy53aWR0aCwgeTogcGxheWVyWSB9O1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogcGxheWVyWCArIHRoaXMud2lkdGgsIHk6IHBsYXllclkgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SW50ZXJzZWN0aW5nRW1wdHlBbnN3ZXJTbG90KGJsb2NrOiBCbG9jaykge1xuICAgICAgICBjb25zdCBibG9ja0NlbnRlclggPSBibG9jay54ICsgYmxvY2suc2l6ZSAvIDI7XG4gICAgICAgIGNvbnN0IGJsb2NrQ2VudGVyWSA9IGJsb2NrLnkgKyBibG9jay5zaXplIC8gMjtcblxuICAgICAgICByZXR1cm4gdGhpcy5hbnN3ZXJTbG90cy5maW5kKChzbG90KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvY2N1cGllZEJ5T3RoZXJCbG9jayA9IHNsb3QuYmxvY2sgIT09IG51bGwgJiYgc2xvdC5ibG9jayAhPT0gYmxvY2s7XG4gICAgICAgICAgICBpZiAob2NjdXBpZWRCeU90aGVyQmxvY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgYmxvY2tDZW50ZXJYID49IHNsb3QueCAmJlxuICAgICAgICAgICAgICAgIGJsb2NrQ2VudGVyWCA8PSBzbG90LnggKyBzbG90LnNpemUgJiZcbiAgICAgICAgICAgICAgICBibG9ja0NlbnRlclkgPj0gc2xvdC55ICYmXG4gICAgICAgICAgICAgICAgYmxvY2tDZW50ZXJZIDw9IHNsb3QueSArIHNsb3Quc2l6ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFyQW5zd2VyU2xvdEZvckJsb2NrKGJsb2NrOiBCbG9jaykge1xuICAgICAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgdGhpcy5hbnN3ZXJTbG90cykge1xuICAgICAgICAgICAgaWYgKHNsb3QuYmxvY2sgPT09IGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgc2xvdC5ibG9jayA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGlzQmxvY2tJbkFuc3dlclpvbmUoYmxvY2s6IEJsb2NrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuc3dlclNsb3RzLnNvbWUoKHNsb3QpID0+IHNsb3QuYmxvY2sgPT09IGJsb2NrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRldGFjaEhlbGRCbG9jaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlbGRCbG9jaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oZWxkQmxvY2suc2V0SGVsZChmYWxzZSk7XG4gICAgICAgIHRoaXMuaGVsZEJsb2NrID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbGxpZGVzV2l0aEJsb2NraW5nQmxvY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrczogQmxvY2tbXSkge1xuICAgICAgICByZXR1cm4gYmxvY2tzLnNvbWUoKGJsb2NrKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0Jsb2NrSW5BbnN3ZXJab25lKGJsb2NrKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGJsb2NrLmNvbGxpZGVzV2l0aFJlY3QoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbGxpZGVzV2l0aEFueUJsb2NrKHg6IG51bWJlciwgeTogbnVtYmVyLCBibG9ja3M6IEJsb2NrW10pIHtcbiAgICAgICAgcmV0dXJuIGJsb2Nrcy5zb21lKChibG9jaykgPT4gYmxvY2suY29sbGlkZXNXaXRoUmVjdCh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVjdEZpdHNCb3VuZHMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB4ID49IHRoaXMuYm91bmRzLm1pblggJiZcbiAgICAgICAgICAgIHkgPj0gdGhpcy5ib3VuZHMubWluWSAmJlxuICAgICAgICAgICAgeCArIHdpZHRoIDw9IHRoaXMuYm91bmRzLm1heFggKyB3aWR0aCAmJlxuICAgICAgICAgICAgeSArIGhlaWdodCA8PSB0aGlzLmJvdW5kcy5tYXhZICsgaGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGF3bkRhc2hBZnRlcmltYWdlcyhzdGFydFg6IG51bWJlciwgc3RhcnRZOiBudW1iZXIsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgY291bnQgPSAzO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJpbWFnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgeDogc3RhcnRYIC0gZHggKiBpICogMTgsXG4gICAgICAgICAgICAgICAgeTogc3RhcnRZIC0gZHkgKiBpICogMTgsXG4gICAgICAgICAgICAgICAgYWxwaGE6IDAuNDIgLSBpICogMC4wOCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGFtcFRvQm91bmRzKCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLmNsYW1wVmFsdWUodGhpcy54LCB0aGlzLmJvdW5kcy5taW5YLCB0aGlzLmJvdW5kcy5tYXhYKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jbGFtcFZhbHVlKHRoaXMueSwgdGhpcy5ib3VuZHMubWluWSwgdGhpcy5ib3VuZHMubWF4WSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGFtcFZhbHVlKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHR5cGUgQmxvY2tUeXBlID0gXCJub3JtYWxcIiB8IFwiaW52aXNpYmxlXCIgfCBcImNvdW50ZG93blwiIHwgXCJoZWF2eVwiIHwgXCJnbGFzc1wiO1xuXG5jb25zdCBpc1ZhbGlkQWxwaGFOdW1lcmljVmFsdWUgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICgvXlthLXpdJC9pLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICgvXlxcZHsxLDJ9JC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG51bWVyaWNWYWx1ZSA+PSAwICYmIG51bWVyaWNWYWx1ZSA8PSA5OTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplQmxvY2tWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSA9PiBgJHt2YWx1ZX1gLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuXG5leHBvcnQgY29uc3QgYXNzZXJ0QWxwaGFOdW1lcmljVmFsdWUgPSAodmFsdWU6IHN0cmluZyB8IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IG5vcm1hbGl6ZUJsb2NrVmFsdWUodmFsdWUpO1xuXG4gICAgaWYgKCFpc1ZhbGlkQWxwaGFOdW1lcmljVmFsdWUobm9ybWFsaXplZFZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYmxvY2sgdmFsdWUgXCIke3ZhbHVlfVwiLiBCbG9ja3MgbXVzdCB1c2Ugb25lIGxldHRlciBvciBhIG51bWJlciBmcm9tIDAgdG8gOTkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRWYWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBhc3NlcnROdW1lcmljQmxvY2tWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gbm9ybWFsaXplQmxvY2tWYWx1ZSh2YWx1ZSk7XG5cbiAgICBpZiAoIS9eXFxkezEsMn0kLy50ZXN0KG5vcm1hbGl6ZWRWYWx1ZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvdW50ZG93biB2YWx1ZSBcIiR7dmFsdWV9XCIuIENvdW50ZG93biBibG9ja3MgbXVzdCB1c2UgYSBudW1iZXIgZnJvbSAwIHRvIDk5LmApO1xuICAgIH1cblxuICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcihub3JtYWxpemVkVmFsdWUpO1xuICAgIGlmIChudW1lcmljVmFsdWUgPCAwIHx8IG51bWVyaWNWYWx1ZSA+IDk5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBjb3VudGRvd24gdmFsdWUgXCIke3ZhbHVlfVwiLiBDb3VudGRvd24gYmxvY2tzIG11c3QgdXNlIGEgbnVtYmVyIGZyb20gMCB0byA5OS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVtZXJpY1ZhbHVlO1xufTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJsb2NrIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTogQmxvY2tUeXBlO1xuICAgIHB1YmxpYyBoZWxkID0gZmFsc2U7XG4gICAgcHVibGljIGRlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBiYXNlQ29sb3I6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgYmFzZVRleHRDb2xvcjogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBzdG9yZWRWYWx1ZTogc3RyaW5nO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHR5cGU6IEJsb2NrVHlwZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNpemU6IG51bWJlciwgY29sb3I6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciwgdGV4dENvbG9yID0gXCIjMTExMTExXCIpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5iYXNlQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5iYXNlVGV4dENvbG9yID0gdGV4dENvbG9yO1xuICAgICAgICB0aGlzLnN0b3JlZFZhbHVlID0gbm9ybWFsaXplQmxvY2tWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcmVkVmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1vdmVTcGVlZE11bHRpcGxpZXIoKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHB1YmxpYyBjYW5CZVBpY2tlZFVwKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuZGVzdHJveWVkO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblBpY2tlZFVwKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25SZWxlYXNlZCgpIHt9XG5cbiAgICBwdWJsaWMgdXBkYXRlKF9kZWx0YVNlY29uZHM6IG51bWJlciwgX2Jsb2NrczogQmxvY2tbXSkge31cblxuICAgIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuZ2V0RmlsbFN0eWxlKCk7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuXG4gICAgICAgIGNvbnN0IHN0cm9rZVN0eWxlID0gdGhpcy5nZXRTdHJva2VTdHlsZSgpO1xuICAgICAgICBpZiAoc3Ryb2tlU3R5bGUpIHtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuaGVsZCA/IDMgOiAyO1xuICAgICAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRleHRTdHlsZSA9IHRoaXMuZ2V0VGV4dFN0eWxlKCk7XG4gICAgICAgIGlmICh0ZXh0U3R5bGUpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0ZXh0U3R5bGU7XG4gICAgICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICAgICAgY3R4LmZvbnQgPSBgYm9sZCAke01hdGgubWF4KDE4LCBNYXRoLmZsb29yKHRoaXMuc2l6ZSAqIDAuNDIpKX1weCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmYDtcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLmdldERpc3BsYXlWYWx1ZSgpLCB0aGlzLnggKyB0aGlzLnNpemUgLyAyLCB0aGlzLnkgKyB0aGlzLnNpemUgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb2xsaWRlc1dpdGhSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB4IDwgdGhpcy54ICsgdGhpcy5zaXplICYmXG4gICAgICAgICAgICB4ICsgd2lkdGggPiB0aGlzLnggJiZcbiAgICAgICAgICAgIHkgPCB0aGlzLnkgKyB0aGlzLnNpemUgJiZcbiAgICAgICAgICAgIHkgKyBoZWlnaHQgPiB0aGlzLnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhlbGQoaGVsZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmhlbGQgPSBoZWxkO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGVsZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXREaXNwbGF5VmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JlZFZhbHVlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRGaWxsU3R5bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VDb2xvcjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2V0U3Ryb2tlU3R5bGUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlbGQgPyBcIiMzYTNhM2FcIiA6IFwiIzExMTExMVwiO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRUZXh0U3R5bGUoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VUZXh0Q29sb3I7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYXNzZXJ0TnVtZXJpY0Jsb2NrVmFsdWUsIEJsb2NrIH0gZnJvbSBcIi4vQmxvY2tcIjtcblxuZXhwb3J0IGNsYXNzIENvdW50ZG93bk51bWJlckJsb2NrIGV4dGVuZHMgQmxvY2sge1xuICAgIHByaXZhdGUgbnVtZXJpY1ZhbHVlOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBibGlua1Zpc2libGUgPSB0cnVlO1xuICAgIHByaXZhdGUgYmxpbmtBY2N1bXVsYXRvciA9IDA7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IGFzc2VydE51bWVyaWNCbG9ja1ZhbHVlKHZhbHVlKTtcbiAgICAgICAgc3VwZXIoXCJjb3VudGRvd25cIiwgeCwgeSwgc2l6ZSwgXCIjZjRhMzQwXCIsIG5vcm1hbGl6ZWRWYWx1ZSk7XG4gICAgICAgIHRoaXMubnVtZXJpY1ZhbHVlID0gbm9ybWFsaXplZFZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBvdmVycmlkZSB1cGRhdGUoZGVsdGFTZWNvbmRzOiBudW1iZXIsIGJsb2NrczogQmxvY2tbXSkge1xuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhlbGQpIHtcbiAgICAgICAgICAgIHRoaXMubnVtZXJpY1ZhbHVlIC09IGRlbHRhU2Vjb25kcztcbiAgICAgICAgICAgIHRoaXMuc3RvcmVkVmFsdWUgPSB0aGlzLmdldERpc3BsYXlWYWx1ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtZXJpY1ZhbHVlIDwgMykge1xuICAgICAgICAgICAgdGhpcy5ibGlua0FjY3VtdWxhdG9yICs9IGRlbHRhU2Vjb25kcztcbiAgICAgICAgICAgIGlmICh0aGlzLmJsaW5rQWNjdW11bGF0b3IgPj0gMC4xOCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmxpbmtWaXNpYmxlID0gIXRoaXMuYmxpbmtWaXNpYmxlO1xuICAgICAgICAgICAgICAgIHRoaXMuYmxpbmtBY2N1bXVsYXRvciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmJsaW5rVmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJsaW5rQWNjdW11bGF0b3IgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubnVtZXJpY1ZhbHVlIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5leHBsb2RlKGJsb2Nrcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0RGlzcGxheVZhbHVlKCkge1xuICAgICAgICByZXR1cm4gYCR7TWF0aC5tYXgoMCwgTWF0aC5mbG9vcih0aGlzLm51bWVyaWNWYWx1ZSkpfWA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldEZpbGxTdHlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubnVtZXJpY1ZhbHVlIDwgNSA/IFwiI2Q3M2EzMVwiIDogXCIjZjRhMzQwXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFRleHRTdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubnVtZXJpY1ZhbHVlIDwgMyAmJiAhdGhpcy5ibGlua1Zpc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubnVtZXJpY1ZhbHVlIDwgNSA/IFwiI2ZmZmZmZlwiIDogXCIjMTExMTExXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHBsb2RlKGJsb2NrczogQmxvY2tbXSkge1xuICAgICAgICBjb25zdCByYWRpdXMgPSB0aGlzLnNpemUgKiAxLjU7XG4gICAgICAgIGNvbnN0IGNlbnRlclggPSB0aGlzLnggKyB0aGlzLnNpemUgLyAyO1xuICAgICAgICBjb25zdCBjZW50ZXJZID0gdGhpcy55ICsgdGhpcy5zaXplIC8gMjtcblxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGJsb2Nrcykge1xuICAgICAgICAgICAgaWYgKGJsb2NrID09PSB0aGlzIHx8IGJsb2NrLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBibG9ja0NlbnRlclggPSBibG9jay54ICsgYmxvY2suc2l6ZSAvIDI7XG4gICAgICAgICAgICBjb25zdCBibG9ja0NlbnRlclkgPSBibG9jay55ICsgYmxvY2suc2l6ZSAvIDI7XG4gICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguaHlwb3QoYmxvY2tDZW50ZXJYIC0gY2VudGVyWCwgYmxvY2tDZW50ZXJZIC0gY2VudGVyWSk7XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8PSByYWRpdXMpIHtcbiAgICAgICAgICAgICAgICBibG9jay5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhc3NlcnRBbHBoYU51bWVyaWNWYWx1ZSwgQmxvY2sgfSBmcm9tIFwiLi9CbG9ja1wiO1xuXG5leHBvcnQgY2xhc3MgR2xhc3NCbG9jayBleHRlbmRzIEJsb2NrIHtcbiAgICBwcml2YXRlIHdhc1JlbGVhc2VkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKFwiZ2xhc3NcIiwgeCwgeSwgc2l6ZSwgXCJyZ2JhKDEyMCwgMTk2LCAyNTUsIDAuNSlcIiwgYXNzZXJ0QWxwaGFOdW1lcmljVmFsdWUodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgY2FuQmVQaWNrZWRVcCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmRlc3Ryb3llZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgb25QaWNrZWRVcCgpIHtcbiAgICAgICAgaWYgKHRoaXMud2FzUmVsZWFzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIG9uUmVsZWFzZWQoKSB7XG4gICAgICAgIHRoaXMud2FzUmVsZWFzZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGFzc2VydEFscGhhTnVtZXJpY1ZhbHVlLCBCbG9jayB9IGZyb20gXCIuL0Jsb2NrXCI7XG5cbmV4cG9ydCBjbGFzcyBIZWF2eUJsb2NrIGV4dGVuZHMgQmxvY2sge1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoXCJoZWF2eVwiLCB4LCB5LCBzaXplLCBcIiM4ZjhmOGZcIiwgYXNzZXJ0QWxwaGFOdW1lcmljVmFsdWUodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb3ZlcnJpZGUgZ2V0TW92ZVNwZWVkTXVsdGlwbGllcigpIHtcbiAgICAgICAgcmV0dXJuIDAuMjU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgYXNzZXJ0QWxwaGFOdW1lcmljVmFsdWUsIEJsb2NrIH0gZnJvbSBcIi4vQmxvY2tcIjtcblxuZXhwb3J0IGNsYXNzIEludmlzaWJsZUJsb2NrIGV4dGVuZHMgQmxvY2sge1xuICAgIHByaXZhdGUgcmV2ZWFsZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoXCJpbnZpc2libGVcIiwgeCwgeSwgc2l6ZSwgXCIjZmZmZmZmXCIsIGFzc2VydEFscGhhTnVtZXJpY1ZhbHVlKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcHVibGljIG92ZXJyaWRlIG9uUGlja2VkVXAoKSB7XG4gICAgICAgIHRoaXMucmV2ZWFsZWQgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0RmlsbFN0eWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXZlYWxlZCA/IFwicmdiYSgyNTUsMjU1LDI1NSwxKVwiIDogXCJyZ2JhKDI1NSwyNTUsMjU1LDApXCI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldFN0cm9rZVN0eWxlKCkge1xuICAgICAgICBpZiAoIXRoaXMucmV2ZWFsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBcInJnYmEoMTcsMTcsMTcsMClcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdXBlci5nZXRTdHJva2VTdHlsZSgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvdmVycmlkZSBnZXRUZXh0U3R5bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJldmVhbGVkID8gXCIjMTExMTExXCIgOiBcInJnYmEoMTcsMTcsMTcsMClcIjtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBhc3NlcnRBbHBoYU51bWVyaWNWYWx1ZSwgQmxvY2sgfSBmcm9tIFwiLi9CbG9ja1wiO1xuXG5leHBvcnQgY2xhc3MgTm9ybWFsQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNpemU6IG51bWJlciwgdmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICBzdXBlcihcIm5vcm1hbFwiLCB4LCB5LCBzaXplLCBcIiNmZmZmZmZcIiwgYXNzZXJ0QWxwaGFOdW1lcmljVmFsdWUodmFsdWUpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgZ2V0TGF5b3V0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XHJcbiAgY29uc3QgdyA9IGN0eC5jYW52YXMud2lkdGg7XHJcbiAgY29uc3QgaCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xyXG5cclxuICBjb25zdCBjb250ZW50V2lkdGggPSB3ICogMC44NDtcclxuICBjb25zdCBjb250ZW50WCA9ICh3IC0gY29udGVudFdpZHRoKSAvIDI7XHJcbiAgY29uc3QgbG9nb1kgPSBoICogMC4wODtcclxuXHJcbiAgY29uc3QgdG9wQm94V2lkdGggPSBjb250ZW50V2lkdGg7XHJcbiAgY29uc3QgdG9wQm94SGVpZ2h0ID0gaCAqIDAuNDg7XHJcbiAgY29uc3QgdG9wQm94WCA9IGNvbnRlbnRYO1xyXG4gIGNvbnN0IHRvcEJveFkgPSBoICogMC4xODtcclxuXHJcbiAgY29uc3QgdG9wSW5uZXJXaWR0aCA9IHRvcEJveFdpZHRoICogMC40MjtcclxuICBjb25zdCB0b3BJbm5lckhlaWdodCA9IHRvcEJveEhlaWdodCAqIDAuNjI7XHJcbiAgY29uc3QgdG9wSW5uZXJYID0gdyAvIDIgLSB0b3BJbm5lcldpZHRoIC8gMjtcclxuICBjb25zdCB0b3BJbm5lclkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNjtcclxuXHJcbiAgY29uc3QgbW92ZW1lbnRBcmVhV2lkdGggPSB0b3BCb3hXaWR0aCAqIDAuNDI7XHJcbiAgY29uc3QgbW92ZW1lbnRBcmVhSGVpZ2h0ID0gdG9wQm94SGVpZ2h0ICogMC42MjtcclxuICBjb25zdCBtb3ZlbWVudEFyZWFYID0gdG9wSW5uZXJYO1xyXG4gIGNvbnN0IG1vdmVtZW50QXJlYVkgPSB0b3BJbm5lclk7XHJcblxyXG4gIGNvbnN0IGdhcCA9IGggKiAwLjA0O1xyXG4gIGNvbnN0IGJvdHRvbUJveFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICsgZ2FwO1xyXG4gIGNvbnN0IGJvdHRvbUJveEhlaWdodCA9IGggKiAwLjIyO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdyxcclxuICAgIGgsXHJcbiAgICBjb250ZW50V2lkdGgsXHJcbiAgICBjb250ZW50WCxcclxuICAgIGxvZ29ZLFxyXG4gICAgdG9wQm94WCxcclxuICAgIHRvcEJveFksXHJcbiAgICB0b3BCb3hXaWR0aCxcclxuICAgIHRvcEJveEhlaWdodCxcclxuICAgIHRvcElubmVyWCxcclxuICAgIHRvcElubmVyWSxcclxuICAgIHRvcElubmVyV2lkdGgsXHJcbiAgICB0b3BJbm5lckhlaWdodCxcclxuICAgIG1vdmVtZW50QXJlYVgsXHJcbiAgICBtb3ZlbWVudEFyZWFZLFxyXG4gICAgbW92ZW1lbnRBcmVhV2lkdGgsXHJcbiAgICBtb3ZlbWVudEFyZWFIZWlnaHQsXHJcbiAgICBib3R0b21Cb3hZLFxyXG4gICAgYm90dG9tQm94SGVpZ2h0LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW92ZW1lbnRMYXlvdXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcclxuICBjb25zdCB3ID0gY3R4LmNhbnZhcy53aWR0aDtcclxuICBjb25zdCBoID0gY3R4LmNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gIGNvbnN0IGdhbWVGcmFtZVggPSB3ICogMC4wNTtcclxuICBjb25zdCBnYW1lRnJhbWVZID0gaCAqIDAuMDU7XHJcbiAgY29uc3QgZ2FtZUZyYW1lV2lkdGggPSB3ICogMC45O1xyXG4gIGNvbnN0IGdhbWVGcmFtZUhlaWdodCA9IGggKiAwLjY1O1xyXG5cclxuICBjb25zdCBib3R0b21GcmFtZVggPSAwO1xyXG4gIGNvbnN0IGJvdHRvbUZyYW1lWSA9IGggKiAwLjc7XHJcbiAgY29uc3QgYm90dG9tRnJhbWVXaWR0aCA9IHc7XHJcbiAgY29uc3QgYm90dG9tRnJhbWVIZWlnaHQgPSBoICogMC4zO1xyXG5cclxuICBjb25zdCBmcmFtZVBhZGRpbmdYID0gMjQ7XHJcbiAgY29uc3QgZnJhbWVQYWRkaW5nVG9wID0gMjQ7XHJcbiAgY29uc3QgZnJhbWVQYWRkaW5nQm90dG9tID0gNTY7XHJcbiAgY29uc3QgbW92ZW1lbnRBcmVhWCA9IGdhbWVGcmFtZVggKyBmcmFtZVBhZGRpbmdYO1xyXG4gIGNvbnN0IG1vdmVtZW50QXJlYVkgPSBnYW1lRnJhbWVZICsgZnJhbWVQYWRkaW5nVG9wO1xyXG4gIGNvbnN0IG1vdmVtZW50QXJlYVdpZHRoID0gZ2FtZUZyYW1lV2lkdGggLSBmcmFtZVBhZGRpbmdYICogMjtcclxuICBjb25zdCBtb3ZlbWVudEFyZWFIZWlnaHQgPSBnYW1lRnJhbWVIZWlnaHQgLSBmcmFtZVBhZGRpbmdUb3AgLSBmcmFtZVBhZGRpbmdCb3R0b207XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3LFxyXG4gICAgaCxcclxuICAgIGdhbWVGcmFtZVgsXHJcbiAgICBnYW1lRnJhbWVZLFxyXG4gICAgZ2FtZUZyYW1lV2lkdGgsXHJcbiAgICBnYW1lRnJhbWVIZWlnaHQsXHJcbiAgICBib3R0b21GcmFtZVgsXHJcbiAgICBib3R0b21GcmFtZVksXHJcbiAgICBib3R0b21GcmFtZVdpZHRoLFxyXG4gICAgYm90dG9tRnJhbWVIZWlnaHQsXHJcbiAgICBtb3ZlbWVudEFyZWFYLFxyXG4gICAgbW92ZW1lbnRBcmVhWSxcclxuICAgIG1vdmVtZW50QXJlYVdpZHRoLFxyXG4gICAgbW92ZW1lbnRBcmVhSGVpZ2h0LFxyXG4gIH07XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBMRVZFTF9DT1VOVCA9IDIwO1xyXG5cclxuZXhwb3J0IGNvbnN0IExFVkVMX0RBVEE6IHsgdGl0bGU6IHN0cmluZzsgbGluZXM6IHN0cmluZ1tdIH1bXSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJXaGF0J3MgeW91ciBuYW1lP1wiLFxyXG4gICAgbGluZXM6IFtcIkVudGVyIHlvdXIgbmFtZSBiZWxvdy5cIiwgXCJMZWF2ZSBpdCBibGFuayBhbmQgd2UnbGwgY2FsbCB5b3UgQm94LlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIldoYXQgaXMgMTUgKyAxNT9cIixcclxuICAgIGxpbmVzOiBbXCJQaWNrIHRoZSBjb3JyZWN0IGFuc3dlciBmcm9tIHRoZSBvcHRpb25zIGFib3ZlLlwiXSxcclxuICB9LFxyXG4gIHsgdGl0bGU6IFwiQ2xpY2sgdGhlIGRvdFwiLCBsaW5lczogW10gfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA0IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDUgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgNiBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA3IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDggaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgOSBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCAxMCBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd05hbWVFbnRyeSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIC8vIFByb21wdFxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzJweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiV2hhdCdzIHlvdXIgbmFtZT9cIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjIpO1xyXG5cclxuICBjdHguZm9udCA9IGAxOHB4ICR7Ym9keUZvbnR9YDtcclxuICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBcIkxlYXZlIGl0IGJsYW5rIGFuZCB3ZSdsbCBjYWxsIHlvdSBCb3guXCIsXHJcbiAgICBjeCxcclxuICAgIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjMyLFxyXG4gICAgdG9wQm94V2lkdGggKiAwLjY1LFxyXG4gICk7XHJcblxyXG4gIC8vIElucHV0IGJveFxyXG4gIGNvbnN0IGlucHV0VyA9IHRvcEJveFdpZHRoICogMC41O1xyXG4gIGNvbnN0IGlucHV0SCA9IDUyO1xyXG4gIGNvbnN0IGlucHV0WCA9IGN4IC0gaW5wdXRXIC8gMjtcclxuICBjb25zdCBpbnB1dFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC40MjtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gc3RhdGUubmFtZUZvY3VzZWRcclxuICAgID8gc3RhdGUuZGFya01vZGVcclxuICAgICAgPyBcIiNmZmZmZmZcIlxyXG4gICAgICA6IFwiIzExMTExMVwiXHJcbiAgICA6IHQuZGl2aWRlcjtcclxuICBjdHgubGluZVdpZHRoID0gc3RhdGUubmFtZUZvY3VzZWQgPyAzIDogMjtcclxuICBjdHguc3Ryb2tlUmVjdChpbnB1dFgsIGlucHV0WSwgaW5wdXRXLCBpbnB1dEgpO1xyXG5cclxuICBjb25zdCBkaXNwbGF5VGV4dCA9XHJcbiAgICBzdGF0ZS5uYW1lSW5wdXQubGVuZ3RoID4gMFxyXG4gICAgICA/IHN0YXRlLm5hbWVJbnB1dFxyXG4gICAgICA6IHN0YXRlLm5hbWVGb2N1c2VkXHJcbiAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgOiBcIlR5cGUgeW91ciBuYW1l4oCmXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPiAwID8gdC5mZyA6IHQuZmdEaW07XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYDIycHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChkaXNwbGF5VGV4dCwgaW5wdXRYICsgMTQsIGlucHV0WSArIGlucHV0SCAvIDIsIGlucHV0VyAtIDI4KTtcclxuXHJcbiAgLy8gQmxpbmtpbmcgY3Vyc29yXHJcbiAgaWYgKHN0YXRlLm5hbWVGb2N1c2VkKSB7XHJcbiAgICBjb25zdCBtZWFzdXJlZCA9IGN0eC5tZWFzdXJlVGV4dChzdGF0ZS5uYW1lSW5wdXQpLndpZHRoO1xyXG4gICAgY29uc3QgY3Vyc29yWCA9IGlucHV0WCArIDE0ICsgTWF0aC5taW4obWVhc3VyZWQsIGlucHV0VyAtIDI4KTtcclxuICAgIGNvbnN0IGN1cnNvclkgPSBpbnB1dFkgKyBpbnB1dEggKiAwLjI7XHJcbiAgICBjb25zdCBjdXJzb3JIID0gaW5wdXRIICogMC42O1xyXG4gICAgY29uc3QgYmxpbmsgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyA1MzApICUgMiA9PT0gMDtcclxuICAgIGlmIChibGluaykge1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LmZnO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKGN1cnNvclgsIGN1cnNvclkpO1xyXG4gICAgICBjdHgubGluZVRvKGN1cnNvclgsIGN1cnNvclkgKyBjdXJzb3JIKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSW5wdXQgYm94IGhpdCBhcmVhXHJcbiAgZ2MuaGl0QXJlYXMucHVzaCh7XHJcbiAgICB4OiBpbnB1dFgsXHJcbiAgICB5OiBpbnB1dFksXHJcbiAgICB3OiBpbnB1dFcsXHJcbiAgICBoOiBpbnB1dEgsXHJcbiAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgc3RhdGUubmFtZUZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIENvbmZpcm0gYnV0dG9uXHJcbiAgY29uc3QgY29uZmlybVcgPSAxODA7XHJcbiAgY29uc3QgY29uZmlybUggPSA0ODtcclxuICBkcmF3QnV0dG9uKFxyXG4gICAgZ2MsXHJcbiAgICBcIkNPTkZJUk0g4oaSXCIsXHJcbiAgICBjeCAtIGNvbmZpcm1XIC8gMixcclxuICAgIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjYyLFxyXG4gICAgY29uZmlybVcsXHJcbiAgICBjb25maXJtSCxcclxuICAgICgpID0+IHtcclxuICAgICAgc3RhdGUucGxheWVyTmFtZSA9IHN0YXRlLm5hbWVJbnB1dC50cmltKCkgfHwgXCJCb3hcIjtcclxuICAgICAgc3RhdGUubmFtZUZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMjtcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgMjAsXHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbDIgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIC8vIFF1ZXN0aW9uIGhlYWRlclxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiV2hhdCBpcyAxNSArIDE1P1wiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTQpO1xyXG5cclxuICAvLyAyw5cyIGFuc3dlciBncmlkXHJcbiAgY29uc3QgYW5zd2VycyA9IFtcclxuICAgIHsgbGFiZWw6IFwiMjVcIiwgY29ycmVjdDogZmFsc2UgfSxcclxuICAgIHsgbGFiZWw6IFwiMzBcIiwgY29ycmVjdDogdHJ1ZSB9LFxyXG4gICAgeyBsYWJlbDogXCIyOFwiLCBjb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgeyBsYWJlbDogXCIzNVwiLCBjb3JyZWN0OiBmYWxzZSB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNvbHMgPSAyO1xyXG4gIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggKiAwLjM7XHJcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjIyO1xyXG4gIGNvbnN0IGhHYXAgPSB0b3BCb3hXaWR0aCAqIDAuMDY7XHJcbiAgY29uc3QgdkdhcCA9IHRvcEJveEhlaWdodCAqIDAuMDY7XHJcbiAgY29uc3QgZ3JpZFcgPSBjb2xzICogdGlsZVcgKyBoR2FwO1xyXG4gIGNvbnN0IGdyaWRYID0gY3ggLSBncmlkVyAvIDI7XHJcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4yNjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjb2wgPSBpICUgY29scztcclxuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xyXG4gICAgY29uc3QgdHggPSBncmlkWCArIGNvbCAqICh0aWxlVyArIGhHYXApO1xyXG4gICAgY29uc3QgdHkgPSBncmlkWSArIHJvdyAqICh0aWxlSCArIHZHYXApO1xyXG4gICAgY29uc3QgYW5zID0gYW5zd2Vyc1tpXTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoYW5zLmxhYmVsLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xyXG5cclxuICAgIGNvbnN0IGNhcHR1cmVkID0gYW5zLmNvcnJlY3Q7XHJcbiAgICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgICAgeDogdHgsXHJcbiAgICAgIHk6IHR5LFxyXG4gICAgICB3OiB0aWxlVyxcclxuICAgICAgaDogdGlsZUgsXHJcbiAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXB0dXJlZCkge1xyXG4gICAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMztcclxuICAgICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBnYy5sb3NlTGlmZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbDMgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCwgYm90dG9tQm94WSB9ID1cclxuICAgIGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gMsOXMiBncmlkIG9mIGRlY295IG9wdGlvbnMg4oCUIGFsbCB3cm9uZ1xyXG4gIGNvbnN0IGNvbHMgPSAyO1xyXG4gIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggKiAwLjM7XHJcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjIyO1xyXG4gIGNvbnN0IGhHYXAgPSB0b3BCb3hXaWR0aCAqIDAuMDY7XHJcbiAgY29uc3QgdkdhcCA9IHRvcEJveEhlaWdodCAqIDAuMDY7XHJcbiAgY29uc3QgZ3JpZFcgPSBjb2xzICogdGlsZVcgKyBoR2FwO1xyXG4gIGNvbnN0IGdyaWRYID0gY3ggLSBncmlkVyAvIDI7XHJcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4yNjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XHJcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XHJcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMztcclxuICAgIGN0eC5zdHJva2VSZWN0KHR4LCB0eSwgdGlsZVcsIHRpbGVIKTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcblxyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgLy8gVGhlIHdvcmQgXCJkb3RcIlxyXG4gICAgICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCJkb3RcIiwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggLyAyKTtcclxuICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAvLyBBIGxpdGVyYWwgZG90XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIsIDEwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcclxuICAgICAgLy8gVGhyZWUgZG90c1xyXG4gICAgICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCLigKIg4oCiIOKAolwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRGVwYXJ0bWVudCBvZiBTYW5pdGF0aW9uXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMTVweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkRlcGFydG1lbnRcIiwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjM0LCB0aWxlVyAtIDE2KTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwib2YgU2FuaXRhdGlvblwiLFxyXG4gICAgICAgIHR4ICsgdGlsZVcgLyAyLFxyXG4gICAgICAgIHR5ICsgdGlsZUggKiAwLjU3LFxyXG4gICAgICAgIHRpbGVXIC0gMTYsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5mb250ID0gYDEzcHggJHtib2R5Rm9udH1gO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiKEQuTy5TLilcIiwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjc4KTtcclxuICAgIH1cclxuXHJcbiAgICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgICAgeDogdHgsXHJcbiAgICAgIHk6IHR5LFxyXG4gICAgICB3OiB0aWxlVyxcclxuICAgICAgaDogdGlsZUgsXHJcbiAgICAgIGFjdGlvbjogKCkgPT4gZ2MubG9zZUxpZmUoKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gSGlkZGVuIGhpdCBhcmVhOiB0aGUgdGl0dGxlIChkb3QpIG9uIHRoZSAnaScgaW4gXCJDbGlja1wiIGluIHRoZSBib3R0b20gcGFuZWwuXHJcbiAgLy8gQm90dG9tIHBhbmVsIHRpdGxlIFwiQ2xpY2sgdGhlIGRvdC5cIiBpcyBkcmF3biBib2xkIDMwcHgsIGNlbnRlcmVkIGF0ICh3LzIsIGJvdHRvbUJveFkrMTgpLFxyXG4gIC8vIHRleHRCYXNlbGluZT1cInRvcFwiLiBXZSBtZWFzdXJlIHRvIGZpbmQgdGhlICdpJyB4LXBvc2l0aW9uLCB0aGVuIGVzdGltYXRlIHRoZSB0aXR0bGUncyB5LlxyXG4gIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY29uc3QgZnVsbFN0ciA9IFwiQ2xpY2sgdGhlIGRvdFwiO1xyXG4gIGNvbnN0IGZ1bGxXID0gY3R4Lm1lYXN1cmVUZXh0KGZ1bGxTdHIpLndpZHRoO1xyXG4gIGNvbnN0IHRleHRMZWZ0ID0gY3ggLSBmdWxsVyAvIDI7XHJcbiAgY29uc3QgcHJlZml4VyA9IGN0eC5tZWFzdXJlVGV4dChcIkNsXCIpLndpZHRoO1xyXG4gIGNvbnN0IGlDaGFyVyA9IGN0eC5tZWFzdXJlVGV4dChcImlcIikud2lkdGg7XHJcbiAgY29uc3QgaURvdENYID0gdGV4dExlZnQgKyBwcmVmaXhXICsgaUNoYXJXIC8gMjtcclxuICBjb25zdCBpRG90Q1kgPSBib3R0b21Cb3hZICsgMTggKyA1OyAvLyB+NXB4IGJlbG93IHRvcCBiYXNlbGluZSDiiYggdGl0dGxlIHBvc2l0aW9uXHJcbiAgY29uc3QgaGl0UiA9IDEwO1xyXG5cclxuICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgIHg6IGlEb3RDWCAtIGhpdFIsXHJcbiAgICB5OiBpRG90Q1kgLSBoaXRSLFxyXG4gICAgdzogaGl0UiAqIDIsXHJcbiAgICBoOiBoaXRSICogMixcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSA0O1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiIsImNvbnNvbGUubG9nKFwiQkVOQ0hNQVJLIDIgTUFJTiBMT0FERURcIik7XHJcblxyXG5pbXBvcnQgeyBHYW1lQ29udGV4dCwgR2FtZVN0YXRlLCBNb3ZlbWVudEFyZWEgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBkcmF3QmFja2dyb3VuZCwgZHJhd0xvZ28sIGRyYXdHYW1lcGxheUZyYW1lLCBkcmF3Qm90dG9tUGFuZWwgfSBmcm9tIFwiLi9yZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBkcmF3TWFpbk1lbnUgfSBmcm9tIFwiLi9zY3JlZW5zL01haW5NZW51XCI7XHJcbmltcG9ydCB7IGRyYXdMZXZlbFNlbGVjdCB9IGZyb20gXCIuL3NjcmVlbnMvTGV2ZWxTZWxlY3RcIjtcclxuaW1wb3J0IHsgZHJhd0xldmVsIH0gZnJvbSBcIi4vc2NyZWVucy9MZXZlbFwiO1xyXG5pbXBvcnQgeyBkcmF3UGF1c2VPdmVybGF5IH0gZnJvbSBcIi4vb3ZlcmxheXMvUGF1c2VPdmVybGF5XCI7XHJcbmltcG9ydCB7IGRyYXdDb250cm9sc092ZXJsYXkgfSBmcm9tIFwiLi9vdmVybGF5cy9Db250cm9sc092ZXJsYXlcIjtcclxuaW1wb3J0IHsgZHJhd0dhbWVPdmVyT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlzL0dhbWVPdmVyT3ZlcmxheVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQsIGdldE1vdmVtZW50TGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi9IZWxwZXJzL0V2ZW50cy9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuL0hlbHBlcnMvSW5wdXRNYW5hZ2VyXCI7XG5pbXBvcnQgeyBQbGF5ZXJDb250cm9sIH0gZnJvbSBcIi4vSGVscGVycy9QbGF5ZXJDb250cm9sXCI7XG5pbXBvcnQgeyBOb3JtYWxCbG9jayB9IGZyb20gXCIuL0hlbHBlcnMvb2JqZWN0cy9Ob3JtYWxCbG9ja1wiO1xuaW1wb3J0IHsgSW52aXNpYmxlQmxvY2sgfSBmcm9tIFwiLi9IZWxwZXJzL29iamVjdHMvSW52aXNpYmxlQmxvY2tcIjtcbmltcG9ydCB7IENvdW50ZG93bk51bWJlckJsb2NrIH0gZnJvbSBcIi4vSGVscGVycy9vYmplY3RzL0NvdW50ZG93bk51bWJlckJsb2NrXCI7XG5pbXBvcnQgeyBIZWF2eUJsb2NrIH0gZnJvbSBcIi4vSGVscGVycy9vYmplY3RzL0hlYXZ5QmxvY2tcIjtcbmltcG9ydCB7IEdsYXNzQmxvY2sgfSBmcm9tIFwiLi9IZWxwZXJzL29iamVjdHMvR2xhc3NCbG9ja1wiO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwiLi9IZWxwZXJzL29iamVjdHMvQmxvY2tcIjtcbmltcG9ydCB7IE1PVkVNRU5UX0xFVkVMX0NPTkZJRyB9IGZyb20gXCIuL21vdmVtZW50TGV2ZWxDb25maWdcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xyXG4gIGNvbnN0IGRlYnVnQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Zy1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xyXG4gIGNvbnN0IHRleHRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcclxuXHJcbiAgaWYgKCFnYW1lQ2FudmFzIHx8ICFkZWJ1Z0NhbnZhcyB8fCAhdGV4dENhbnZhcykge1xyXG4gICAgY29uc29sZS5lcnJvcihcIk1pc3Npbmcgb25lIG9yIG1vcmUgY2FudmFzIGVsZW1lbnRzLlwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGN0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gIGlmICghY3R4KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGdldCAyRCBjb250ZXh0LlwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXRlOiBHYW1lU3RhdGUgPSB7XHJcbiAgICBjdXJyZW50U2NyZWVuOiBcIm1haW5tZW51XCIsXHJcbiAgICBjdXJyZW50TGV2ZWw6IDEsXHJcbiAgICBsaXZlczogMyxcclxuICAgIHBhdXNlZDogZmFsc2UsXHJcbiAgICBjb250cm9sc09wZW46IGZhbHNlLFxyXG4gICAgZGFya01vZGU6IHRydWUsXHJcbiAgICBzdG9yeVRpdGxlOiBcIk91dHNpZGUtdGhlLUJveCBUaGlua2luZyBDZXJ0aWZpY2F0aW9uXCIsXHJcbiAgICBzdG9yeUxpbmVzOiBbXHJcbiAgICAgIFwiQ29tcGxldGUgdGhpcyBhc3Nlc3NtZW50IHRvIGVhcm4geW91ciBPdEIgVGhpbmtpbmcgQ2VydGlmaWNhdGUuXCIsXHJcbiAgICAgIFwiRGVtb25zdHJhdGUgeW91ciBhYmlsaXR5IHRvIGFwcHJvYWNoIHByb2JsZW1zIGZyb20gdW5jb252ZW50aW9uYWwgYW5nbGVzLlwiLFxyXG4gICAgICBcIkNhbmRpZGF0ZXMgd2hvIHBhc3MgbWF5IGxpc3QgdGhpcyBjcmVkZW50aWFsIG9uIHRoZWlyIExpbmtlZEluIG9yIHJlc3VtZS5cIixcclxuICAgIF0sXHJcbiAgICBwbGF5ZXJOYW1lOiBcIkJveFwiLFxyXG4gICAgbmFtZUlucHV0OiBcIlwiLFxyXG4gICAgbmFtZUZvY3VzZWQ6IGZhbHNlLFxyXG4gICAgcGxheU1vZGU6IFwicGxheVwiLFxyXG4gICAgZ2FtZU92ZXI6IGZhbHNlLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgY29uc3QgaW5wdXQgPSBuZXcgSW5wdXRNYW5hZ2VyKGVtaXR0ZXIpO1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyQ29udHJvbChlbWl0dGVyKTtcbiAgbGV0IHByZXZpb3VzTGV2ZWwgPSBzdGF0ZS5jdXJyZW50TGV2ZWw7XG4gIGxldCBwcmV2aW91c1NjcmVlbiA9IHN0YXRlLmN1cnJlbnRTY3JlZW47XG4gIGxldCBuZWVkc01vdmVtZW50UmVzZXQgPSBmYWxzZTtcbiAgbGV0IGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgbGV0IGxhc3RGcmFtZVRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxyXG4gIGNvbnN0IGRlZmF1bHRNb3ZlbWVudEFyZWE6IE1vdmVtZW50QXJlYSA9IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gICAgd2lkdGg6IDAsXHJcbiAgICBoZWlnaHQ6IDAsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2M6IEdhbWVDb250ZXh0ID0ge1xyXG4gICAgY3R4LFxyXG4gICAgc3RhdGUsXHJcbiAgICBoaXRBcmVhczogW10sXHJcbiAgICByZW5kZXI6ICgpID0+IHt9LFxuICAgIGxvc2VMaWZlOiAoKSA9PiB7fSxcbiAgICByZXNldFBsYXllck5hbWU6ICgpID0+IHt9LFxuICAgIHJlc2V0TW92ZW1lbnRMZXZlbDogKCkgPT4ge30sXG4gICAgc3VibWl0TW92ZW1lbnRBbnN3ZXI6ICgpID0+IHt9LFxuICAgIGdldEN1cnJlbnRBbnN3ZXI6ICgpID0+IFwiXCIsXG4gICAgZGlzcGxheUZvbnQ6IGBcIlRyZWJ1Y2hldCBNU1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZmAsXHJcbiAgICBib2R5Rm9udDogYFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZmAsXHJcbiAgICBsb2dvOiBuZXcgSW1hZ2UoKSxcclxuICAgIGdhbWVwbGF5RnJhbWU6IG5ldyBJbWFnZSgpLFxyXG4gICAgbG9nb0xvYWRlZDogZmFsc2UsXHJcbiAgICBnYW1lcGxheUZyYW1lTG9hZGVkOiBmYWxzZSxcclxuICAgIHBsYXllcixcclxuICAgIGJsb2NrczogW10sXG4gICAgYW5zd2VyU2xvdHM6IFtdLFxuICAgIG1vdmVtZW50QXJlYTogZGVmYXVsdE1vdmVtZW50QXJlYSxcbiAgICBxdWl6UHJvbXB0OiBcIlNwZWxsIEFCNyBpbiB0aGUgYW5zd2VyIHpvbmUuXCIsXG4gICAgcXVpekFuc3dlcjogXCJBQjdcIixcbiAgICB0aW1lTGVmdFNlY29uZHM6IE1PVkVNRU5UX0xFVkVMX0NPTkZJR1sxMV0udGltZSxcbiAgfTtcblxyXG4gIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IChsZXZlbDogbnVtYmVyKSA9PiBsZXZlbCA+PSAxMSAmJiBsZXZlbCA8PSAyMDtcclxuXHJcbiAgY29uc3Qgc3luY01vdmVtZW50QXJlYSA9IChyZXNldFNsb3RzID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBtb3ZlbWVudExheW91dCA9IGdldE1vdmVtZW50TGF5b3V0KGN0eCk7XG4gICAgY29uc3Qgc2xvdEdhcCA9IDEwO1xuICAgIGNvbnN0IHNsb3RTaXplID0gcGxheWVyLndpZHRoO1xuICAgIGNvbnN0IGFuc3dlckNvdW50ID0gMTA7XG4gICAgY29uc3QgYW5zd2VyWm9uZVdpZHRoID0gYW5zd2VyQ291bnQgKiBzbG90U2l6ZSArIChhbnN3ZXJDb3VudCAtIDEpICogc2xvdEdhcDtcbiAgICBjb25zdCBhbnN3ZXJab25lWCA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVggKyAobW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lV2lkdGggLSBhbnN3ZXJab25lV2lkdGgpIC8gMjtcbiAgICBjb25zdCBhbnN3ZXJab25lWSA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVkgKyAyODtcbiAgICBjb25zdCBwcmV2aW91c1Nsb3RzID0gZ2MuYW5zd2VyU2xvdHM7XG5cbiAgICBnYy5hbnN3ZXJTbG90cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGFuc3dlckNvdW50IH0sIChfLCBpbmRleCkgPT4gKHtcbiAgICAgIHg6IGFuc3dlclpvbmVYICsgaW5kZXggKiAoc2xvdFNpemUgKyBzbG90R2FwKSxcbiAgICAgIHk6IGFuc3dlclpvbmVZLFxuICAgICAgc2l6ZTogc2xvdFNpemUsXG4gICAgICBibG9jazogcmVzZXRTbG90cyA/IG51bGwgOiBwcmV2aW91c1Nsb3RzW2luZGV4XT8uYmxvY2sgPz8gbnVsbCxcbiAgICB9KSk7XG5cclxuICAgIGdjLm1vdmVtZW50QXJlYSA9IHtcclxuICAgICAgeDogbW92ZW1lbnRMYXlvdXQubW92ZW1lbnRBcmVhWCxcclxuICAgICAgeTogbW92ZW1lbnRMYXlvdXQubW92ZW1lbnRBcmVhWSxcclxuICAgICAgd2lkdGg6IG1vdmVtZW50TGF5b3V0Lm1vdmVtZW50QXJlYVdpZHRoLFxyXG4gICAgICBoZWlnaHQ6IG1vdmVtZW50TGF5b3V0Lm1vdmVtZW50QXJlYUhlaWdodCxcclxuICAgIH07XHJcbiAgfTtcblxuICBjb25zdCBidWlsZE1vdmVtZW50QmxvY2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IE1PVkVNRU5UX0xFVkVMX0NPTkZJR1tnYy5zdGF0ZS5jdXJyZW50TGV2ZWxdID8/IE1PVkVNRU5UX0xFVkVMX0NPTkZJR1sxMV07XG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBnYy5tb3ZlbWVudEFyZWE7XG4gICAgY29uc3Qgc2l6ZSA9IHBsYXllci53aWR0aDtcbiAgICByZXR1cm4gY29uZmlnLmJsb2Nrcy5tYXAoKGJsb2NrKTogQmxvY2sgPT4ge1xuICAgICAgY29uc3QgYmxvY2tYID0geCArIHdpZHRoICogYmxvY2sueDtcbiAgICAgIGNvbnN0IGJsb2NrWSA9IHkgKyBoZWlnaHQgKiBibG9jay55O1xuXG4gICAgICBzd2l0Y2ggKGJsb2NrLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImludmlzaWJsZVwiOlxuICAgICAgICAgIHJldHVybiBuZXcgSW52aXNpYmxlQmxvY2soYmxvY2tYLCBibG9ja1ksIHNpemUsIGJsb2NrLnZhbHVlKTtcbiAgICAgICAgY2FzZSBcImNvdW50ZG93blwiOlxuICAgICAgICAgIHJldHVybiBuZXcgQ291bnRkb3duTnVtYmVyQmxvY2soYmxvY2tYLCBibG9ja1ksIHNpemUsIGJsb2NrLnZhbHVlKTtcbiAgICAgICAgY2FzZSBcImhlYXZ5XCI6XG4gICAgICAgICAgcmV0dXJuIG5ldyBIZWF2eUJsb2NrKGJsb2NrWCwgYmxvY2tZLCBzaXplLCBibG9jay52YWx1ZSk7XG4gICAgICAgIGNhc2UgXCJnbGFzc1wiOlxuICAgICAgICAgIHJldHVybiBuZXcgR2xhc3NCbG9jayhibG9ja1gsIGJsb2NrWSwgc2l6ZSwgYmxvY2sudmFsdWUpO1xuICAgICAgICBjYXNlIFwibm9ybWFsXCI6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIG5ldyBOb3JtYWxCbG9jayhibG9ja1gsIGJsb2NrWSwgc2l6ZSwgYmxvY2sudmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXHJcbiAgZ2MuZ2V0Q3VycmVudEFuc3dlciA9ICgpID0+IHtcclxuICAgIGxldCBhbnN3ZXIgPSBcIlwiO1xyXG5cclxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBnYy5hbnN3ZXJTbG90cykge1xyXG4gICAgICBpZiAoIXNsb3QuYmxvY2spIHtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgYW5zd2VyICs9IHNsb3QuYmxvY2sudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFuc3dlcjtcclxuICB9O1xyXG5cclxuICBnYy5zdWJtaXRNb3ZlbWVudEFuc3dlciA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50QW5zd2VyID0gZ2MuZ2V0Q3VycmVudEFuc3dlcigpO1xuICAgIGNvbnN0IGNvbmZpZyA9IE1PVkVNRU5UX0xFVkVMX0NPTkZJR1tnYy5zdGF0ZS5jdXJyZW50TGV2ZWxdID8/IE1PVkVNRU5UX0xFVkVMX0NPTkZJR1sxMV07XG4gICAgaWYgKGN1cnJlbnRBbnN3ZXIgIT09IGdjLnF1aXpBbnN3ZXIpIHtcbiAgICAgIGdjLmxvc2VMaWZlKCk7XG4gICAgICBuZWVkc01vdmVtZW50UmVzZXQgPSB0cnVlO1xuICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gY29uZmlnLnRpbWU7XG4gICAgICBsYXN0VGltZXJUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBsYXN0RnJhbWVUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZ2Muc3RhdGUuY3VycmVudExldmVsIDwgMjApIHtcbiAgICAgIGdjLnN0YXRlLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgbmVlZHNNb3ZlbWVudFJlc2V0ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IG5leHRDb25maWcgPSBNT1ZFTUVOVF9MRVZFTF9DT05GSUdbZ2Muc3RhdGUuY3VycmVudExldmVsXSA/PyBNT1ZFTUVOVF9MRVZFTF9DT05GSUdbMTFdO1xuICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gbmV4dENvbmZpZy50aW1lO1xuICAgICAgbGFzdFRpbWVyVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgbGFzdEZyYW1lVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXHJcbiAgICBnYy5zdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgIGdjLnJlbmRlcigpO1xuICB9O1xuXG4gIGdjLnJlc2V0TW92ZW1lbnRMZXZlbCA9ICgpID0+IHtcbiAgICBpZiAoIWlzTW92ZW1lbnRMZXZlbChnYy5zdGF0ZS5jdXJyZW50TGV2ZWwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbmVlZHNNb3ZlbWVudFJlc2V0ID0gdHJ1ZTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcblxuICBjb25zdCBzeW5jTW92ZW1lbnRTY2VuZSA9IChyZXNldFNjZW5lID0gZmFsc2UpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBNT1ZFTUVOVF9MRVZFTF9DT05GSUdbZ2Muc3RhdGUuY3VycmVudExldmVsXSA/PyBNT1ZFTUVOVF9MRVZFTF9DT05GSUdbMTFdO1xuICAgIGdjLnF1aXpQcm9tcHQgPSBjb25maWcucHJvbXB0O1xuICAgIGdjLnF1aXpBbnN3ZXIgPSBjb25maWcuYW5zd2VyO1xuICAgIHN5bmNNb3ZlbWVudEFyZWEocmVzZXRTY2VuZSk7XG5cbiAgICBjb25zdCBtaW5YID0gZ2MubW92ZW1lbnRBcmVhLng7XG4gICAgY29uc3QgbWluWSA9IGdjLm1vdmVtZW50QXJlYS55O1xyXG4gICAgY29uc3QgbWF4WCA9IGdjLm1vdmVtZW50QXJlYS54ICsgZ2MubW92ZW1lbnRBcmVhLndpZHRoIC0gcGxheWVyLndpZHRoO1xyXG4gICAgY29uc3QgbWF4WSA9IGdjLm1vdmVtZW50QXJlYS55ICsgZ2MubW92ZW1lbnRBcmVhLmhlaWdodCAtIHBsYXllci5oZWlnaHQ7XHJcblxyXG4gICAgcGxheWVyLnNldEJvdW5kcyhtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZKTtcclxuICAgIHBsYXllci5zZXRBbnN3ZXJTbG90cyhnYy5hbnN3ZXJTbG90cyk7XHJcblxyXG4gICAgaWYgKHJlc2V0U2NlbmUpIHtcclxuICAgICAgZ2MuYmxvY2tzID0gYnVpbGRNb3ZlbWVudEJsb2NrcygpO1xuICAgICAgcGxheWVyLnNldEJsb2NrcyhnYy5ibG9ja3MpO1xuICAgICAgcGxheWVyLnJlc2V0UG9zaXRpb24oXHJcbiAgICAgICAgbWluWCArIHBsYXllci53aWR0aCxcclxuICAgICAgICBtaW5ZICsgZ2MubW92ZW1lbnRBcmVhLmhlaWdodCAvIDIgLSBwbGF5ZXIuaGVpZ2h0IC8gMixcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xuICAgIH1cblxyXG4gICAgcGxheWVyLnNldEJsb2NrcyhnYy5ibG9ja3MpO1xyXG4gIH07XHJcblxyXG4gIGdjLnJlc2V0UGxheWVyTmFtZSA9ICgpID0+IHtcclxuICAgIGdjLnN0YXRlLnBsYXllck5hbWUgPSBcIkJveFwiO1xyXG4gICAgZ2Muc3RhdGUubmFtZUlucHV0ID0gXCJcIjtcclxuICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgZ2MubG9zZUxpZmUgPSAoKSA9PiB7XHJcbiAgICBnYy5zdGF0ZS5saXZlcy0tO1xyXG4gICAgaWYgKGdjLnN0YXRlLmxpdmVzIDw9IDApIHtcclxuICAgICAgZ2Muc3RhdGUubGl2ZXMgPSAwO1xyXG4gICAgICBnYy5zdGF0ZS5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZ2MucmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVtZW50TGV2ZWxBY3RpdmUgPSBnYy5zdGF0ZS5jdXJyZW50U2NyZWVuID09PSBcImxldmVsXCIgJiYgaXNNb3ZlbWVudExldmVsKGdjLnN0YXRlLmN1cnJlbnRMZXZlbCk7XG4gICAgY29uc3QgZW50ZXJpbmdNb3ZlbWVudExldmVsID1cbiAgICAgIG1vdmVtZW50TGV2ZWxBY3RpdmUgJiYgKHByZXZpb3VzU2NyZWVuICE9PSBcImxldmVsXCIgfHwgcHJldmlvdXNMZXZlbCAhPT0gZ2Muc3RhdGUuY3VycmVudExldmVsKTtcblxuICAgIGlmIChtb3ZlbWVudExldmVsQWN0aXZlKSB7XG4gICAgICBpZiAoZW50ZXJpbmdNb3ZlbWVudExldmVsKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE1PVkVNRU5UX0xFVkVMX0NPTkZJR1tnYy5zdGF0ZS5jdXJyZW50TGV2ZWxdID8/IE1PVkVNRU5UX0xFVkVMX0NPTkZJR1sxMV07XG4gICAgICAgIGdjLnRpbWVMZWZ0U2Vjb25kcyA9IGNvbmZpZy50aW1lO1xuICAgICAgICBsYXN0VGltZXJUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGxhc3RGcmFtZVRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIH1cbiAgICAgIHN5bmNNb3ZlbWVudFNjZW5lKGVudGVyaW5nTW92ZW1lbnRMZXZlbCB8fCBnYy5ibG9ja3MubGVuZ3RoID09PSAwIHx8IG5lZWRzTW92ZW1lbnRSZXNldCk7XG4gICAgICBuZWVkc01vdmVtZW50UmVzZXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2MuYmxvY2tzID0gW107XG4gICAgICBnYy5hbnN3ZXJTbG90cyA9IFtdO1xuICAgICAgcGxheWVyLnNldEJsb2NrcyhbXSk7XG4gICAgICBwbGF5ZXIuc2V0QW5zd2VyU2xvdHMoW10pO1xuICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gTU9WRU1FTlRfTEVWRUxfQ09ORklHWzExXS50aW1lO1xuICAgICAgbGFzdFRpbWVyVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgbGFzdEZyYW1lVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgY29uc3QgeyBtb3ZlbWVudEFyZWFYLCBtb3ZlbWVudEFyZWFZLCBtb3ZlbWVudEFyZWFXaWR0aCwgbW92ZW1lbnRBcmVhSGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgICAgIGdjLm1vdmVtZW50QXJlYSA9IHtcbiAgICAgICAgeDogbW92ZW1lbnRBcmVhWCxcbiAgICAgICAgeTogbW92ZW1lbnRBcmVhWSxcclxuICAgICAgICB3aWR0aDogbW92ZW1lbnRBcmVhV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiBtb3ZlbWVudEFyZWFIZWlnaHQsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuICAgIGRyYXdCYWNrZ3JvdW5kKGdjKTtcclxuXHJcbiAgICBpZiAoIW1vdmVtZW50TGV2ZWxBY3RpdmUpIHtcclxuICAgICAgZHJhd0xvZ28oZ2MpO1xyXG4gICAgICBkcmF3R2FtZXBsYXlGcmFtZShnYyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoIChnYy5zdGF0ZS5jdXJyZW50U2NyZWVuKSB7XHJcbiAgICAgIGNhc2UgXCJtYWlubWVudVwiOlxyXG4gICAgICAgIGRyYXdNYWluTWVudShnYyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsZXZlbHNlbGVjdFwiOlxyXG4gICAgICAgIGRyYXdMZXZlbFNlbGVjdChnYyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJsZXZlbFwiOlxyXG4gICAgICAgIGRyYXdMZXZlbChnYyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0JvdHRvbVBhbmVsKGdjKTtcclxuXHJcbiAgICBpZiAoZ2Muc3RhdGUucGF1c2VkKSBkcmF3UGF1c2VPdmVybGF5KGdjKTtcclxuICAgIGlmIChnYy5zdGF0ZS5jb250cm9sc09wZW4pIGRyYXdDb250cm9sc092ZXJsYXkoZ2MpO1xyXG4gICAgaWYgKGdjLnN0YXRlLmdhbWVPdmVyKSBkcmF3R2FtZU92ZXJPdmVybGF5KGdjKTtcclxuXHJcbiAgICBwcmV2aW91c0xldmVsID0gZ2Muc3RhdGUuY3VycmVudExldmVsO1xyXG4gICAgcHJldmlvdXNTY3JlZW4gPSBnYy5zdGF0ZS5jdXJyZW50U2NyZWVuO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlc2l6ZUNhbnZhc2VzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgY29uc3QgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIGdhbWVDYW52YXMud2lkdGggPSBkZWJ1Z0NhbnZhcy53aWR0aCA9IHc7XHJcbiAgICBnYW1lQ2FudmFzLmhlaWdodCA9IGRlYnVnQ2FudmFzLmhlaWdodCA9IGg7XHJcbiAgICBuZWVkc01vdmVtZW50UmVzZXQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvQ2FudmFzID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHJlY3QgPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgY29uc3Qgc2NhbGVYID0gZ2FtZUNhbnZhcy53aWR0aCAvIHJlY3Qud2lkdGg7XHJcbiAgICBjb25zdCBzY2FsZVkgPSBnYW1lQ2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHg6IChlLmNsaWVudFggLSByZWN0LmxlZnQpICogc2NhbGVYLFxyXG4gICAgICB5OiAoZS5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZLFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBnYW1lQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0b0NhbnZhcyhlKTtcclxuICAgIGZvciAoY29uc3QgYXJlYSBvZiBnYy5oaXRBcmVhcykge1xyXG4gICAgICBpZiAoeCA+PSBhcmVhLnggJiYgeCA8PSBhcmVhLnggKyBhcmVhLncgJiYgeSA+PSBhcmVhLnkgJiYgeSA8PSBhcmVhLnkgKyBhcmVhLmgpIHtcclxuICAgICAgICBhcmVhLmFjdGlvbigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGdhbWVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyB4LCB5IH0gPSB0b0NhbnZhcyhlKTtcclxuICAgIGNvbnN0IG92ZXIgPSBnYy5oaXRBcmVhcy5zb21lKFxyXG4gICAgICAoYXJlYSkgPT4geCA+PSBhcmVhLnggJiYgeCA8PSBhcmVhLnggKyBhcmVhLncgJiYgeSA+PSBhcmVhLnkgJiYgeSA8PSBhcmVhLnkgKyBhcmVhLmgsXHJcbiAgICApO1xyXG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5jdXJzb3IgPSBvdmVyID8gXCJwb2ludGVyXCIgOiBcImRlZmF1bHRcIjtcclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZ2Muc3RhdGUubmFtZUZvY3VzZWQgJiYgIWdjLnN0YXRlLnBhdXNlZCAmJiAhZ2Muc3RhdGUuY29udHJvbHNPcGVuKSB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIGdjLnN0YXRlLnBsYXllck5hbWUgPSBnYy5zdGF0ZS5uYW1lSW5wdXQudHJpbSgpIHx8IFwiQm94XCI7XHJcbiAgICAgICAgZ2Muc3RhdGUubmFtZUZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgICBnYy5zdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xyXG4gICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XHJcbiAgICAgICAgZ2Muc3RhdGUubmFtZUlucHV0ID0gZ2Muc3RhdGUubmFtZUlucHV0LnNsaWNlKDAsIC0xKTtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlLmtleS5sZW5ndGggPT09IDEgJiYgZ2Muc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA8IDI0KSB7XHJcbiAgICAgICAgZ2Muc3RhdGUubmFtZUlucHV0ICs9IGUua2V5O1xyXG4gICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICBpZiAoZ2Muc3RhdGUuY29udHJvbHNPcGVuKSB7XHJcbiAgICAgICAgZ2Muc3RhdGUuY29udHJvbHNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZ2Muc3RhdGUucGF1c2VkKSB7XHJcbiAgICAgICAgZ2Muc3RhdGUucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgcmVzaXplQ2FudmFzZXMoKTtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBpZiAoZ2Muc3RhdGUubmFtZUZvY3VzZWQpIGdjLnJlbmRlcigpO1xyXG4gIH0sIDUzMCk7XHJcblxyXG4gIGdjLmxvZ28ub25sb2FkID0gKCkgPT4ge1xyXG4gICAgZ2MubG9nb0xvYWRlZCA9IHRydWU7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9O1xyXG4gIGdjLmxvZ28ub25lcnJvciA9ICgpID0+IHtcclxuICAgIGdjLmxvZ29Mb2FkZWQgPSBmYWxzZTtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH07XHJcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBnYy5nYW1lcGxheUZyYW1lTG9hZGVkID0gdHJ1ZTtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH07XHJcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgZ2MuZ2FtZXBsYXlGcmFtZUxvYWRlZCA9IGZhbHNlO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgZ2MubG9nby5zcmMgPSBcIi4vYXNzZXRzL0dhbWVMb2dvLnBuZ1wiO1xyXG4gIGdjLmdhbWVwbGF5RnJhbWUuc3JjID0gXCIuL2Fzc2V0cy9nYW1lcGxheS1mcmFtZS5wbmdcIjtcclxuXHJcbiAgcmVzaXplQ2FudmFzZXMoKTtcbiAgZ2MudGltZUxlZnRTZWNvbmRzID0gTU9WRU1FTlRfTEVWRUxfQ09ORklHWzExXS50aW1lO1xuICBnYy5yZW5kZXIoKTtcblxyXG4gIGNvbnN0IGdhbWVMb29wID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbW92ZW1lbnRMZXZlbEFjdGl2ZSA9IGdjLnN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIiAmJiBpc01vdmVtZW50TGV2ZWwoZ2Muc3RhdGUuY3VycmVudExldmVsKTtcclxuXHJcbiAgICBpZiAoXG4gICAgICBtb3ZlbWVudExldmVsQWN0aXZlICYmXG4gICAgICAhZ2Muc3RhdGUucGF1c2VkICYmXG4gICAgICAhZ2Muc3RhdGUuY29udHJvbHNPcGVuICYmXG4gICAgICAhZ2Muc3RhdGUuZ2FtZU92ZXJcbiAgICApIHtcbiAgICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgY29uc3QgZGVsdGFTZWNvbmRzID0gTWF0aC5tYXgoMCwgKG5vdyAtIGxhc3RGcmFtZVRpY2spIC8gMTAwMCk7XG4gICAgICBsYXN0RnJhbWVUaWNrID0gbm93O1xuICAgICAgaWYgKG5vdyAtIGxhc3RUaW1lclRpY2sgPj0gMTAwMCkge1xuICAgICAgICBjb25zdCBlbGFwc2VkU2Vjb25kcyA9IE1hdGguZmxvb3IoKG5vdyAtIGxhc3RUaW1lclRpY2spIC8gMTAwMCk7XG4gICAgICAgIGdjLnRpbWVMZWZ0U2Vjb25kcyA9IE1hdGgubWF4KDAsIGdjLnRpbWVMZWZ0U2Vjb25kcyAtIGVsYXBzZWRTZWNvbmRzKTtcbiAgICAgICAgbGFzdFRpbWVyVGljayArPSBlbGFwc2VkU2Vjb25kcyAqIDEwMDA7XG5cbiAgICAgICAgaWYgKGdjLnRpbWVMZWZ0U2Vjb25kcyA9PT0gMCkge1xuICAgICAgICAgIGdjLmxvc2VMaWZlKCk7XG4gICAgICAgICAgbmVlZHNNb3ZlbWVudFJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjb25maWcgPSBNT1ZFTUVOVF9MRVZFTF9DT05GSUdbZ2Muc3RhdGUuY3VycmVudExldmVsXSA/PyBNT1ZFTUVOVF9MRVZFTF9DT05GSUdbMTFdO1xuICAgICAgICAgIGdjLnRpbWVMZWZ0U2Vjb25kcyA9IGNvbmZpZy50aW1lO1xuICAgICAgICAgIGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICBsYXN0RnJhbWVUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZm9yIChjb25zdCBibG9jayBvZiBnYy5ibG9ja3MpIHtcbiAgICAgICAgYmxvY2sudXBkYXRlKGRlbHRhU2Vjb25kcywgZ2MuYmxvY2tzKTtcbiAgICAgIH1cblxuICAgICAgZ2MuYmxvY2tzID0gZ2MuYmxvY2tzLmZpbHRlcigoYmxvY2spID0+ICFibG9jay5kZXN0cm95ZWQpO1xuICAgICAgZ2MuYW5zd2VyU2xvdHMgPSBnYy5hbnN3ZXJTbG90cy5tYXAoKHNsb3QpID0+ICh7XG4gICAgICAgIC4uLnNsb3QsXG4gICAgICAgIGJsb2NrOiBzbG90LmJsb2NrICYmICFzbG90LmJsb2NrLmRlc3Ryb3llZCA/IHNsb3QuYmxvY2sgOiBudWxsLFxuICAgICAgfSkpO1xuICAgICAgcGxheWVyLnNldEJsb2NrcyhnYy5ibG9ja3MpO1xuICAgICAgcGxheWVyLnNldEFuc3dlclNsb3RzKGdjLmFuc3dlclNsb3RzKTtcbiAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgcGxheWVyLnVwZGF0ZSgpO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGxhc3RGcmFtZVRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgfTtcclxuXHJcbiAgZ2FtZUxvb3AoKTtcclxufTtcclxuIiwiZXhwb3J0IHR5cGUgTW92ZW1lbnRCbG9ja1R5cGUgPSBcIm5vcm1hbFwiIHwgXCJpbnZpc2libGVcIiB8IFwiY291bnRkb3duXCIgfCBcImhlYXZ5XCIgfCBcImdsYXNzXCI7XG5cbmV4cG9ydCB0eXBlIE1vdmVtZW50QmxvY2tDb25maWcgPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyO1xuICB0eXBlOiBNb3ZlbWVudEJsb2NrVHlwZTtcbn07XG5cbmV4cG9ydCB0eXBlIE1vdmVtZW50TGV2ZWxDb25maWcgPSB7XG4gIHByb21wdDogc3RyaW5nO1xuICBhbnN3ZXI6IHN0cmluZztcbiAgdGltZTogbnVtYmVyO1xuICBibG9ja3M6IE1vdmVtZW50QmxvY2tDb25maWdbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBNT1ZFTUVOVF9MRVZFTF9DT05GSUc6IFJlY29yZDxudW1iZXIsIE1vdmVtZW50TGV2ZWxDb25maWc+ID0ge1xuICAxMToge1xuICAgIHByb21wdDogXCJTcGVsbCBDQVQgaW4gdGhlIGFuc3dlciB6b25lLlwiLFxuICAgIGFuc3dlcjogXCJDQVRcIixcbiAgICB0aW1lOiAzNSxcbiAgICBibG9ja3M6IFtcbiAgICAgIHsgeDogMC4xNiwgeTogMC4yNiwgdmFsdWU6IFwiQ1wiLCB0eXBlOiBcIm5vcm1hbFwiIH0sXG4gICAgICB7IHg6IDAuMzEsIHk6IDAuNDgsIHZhbHVlOiBcIkFcIiwgdHlwZTogXCJub3JtYWxcIiB9LFxuICAgICAgeyB4OiAwLjU4LCB5OiAwLjM2LCB2YWx1ZTogXCJUXCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICAgIHsgeDogMC43NCwgeTogMC41NCwgdmFsdWU6IFwiOVwiLCB0eXBlOiBcIm5vcm1hbFwiIH0sXG4gICAgXSxcbiAgfSxcbiAgMTI6IHtcbiAgICBwcm9tcHQ6IFwiRmluZCB0aGUgaGlkZGVuIGJsb2NrIGFuZCBzcGVsbCBNQVAuXCIsXG4gICAgYW5zd2VyOiBcIk1BUFwiLFxuICAgIHRpbWU6IDQwLFxuICAgIGJsb2NrczogW1xuICAgICAgeyB4OiAwLjE4LCB5OiAwLjMyLCB2YWx1ZTogXCJNXCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICAgIHsgeDogMC40MiwgeTogMC40NSwgdmFsdWU6IFwiQVwiLCB0eXBlOiBcImludmlzaWJsZVwiIH0sXG4gICAgICB7IHg6IDAuNjQsIHk6IDAuMjYsIHZhbHVlOiBcIlBcIiwgdHlwZTogXCJub3JtYWxcIiB9LFxuICAgICAgeyB4OiAwLjc0LCB5OiAwLjU2LCB2YWx1ZTogXCI3XCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICBdLFxuICB9LFxuICAxMzoge1xuICAgIHByb21wdDogXCJDYXJyeSB0aGUgaGVhdnkgYmxvY2tzIGFuZCBzcGVsbCBCT1guXCIsXG4gICAgYW5zd2VyOiBcIkJPWFwiLFxuICAgIHRpbWU6IDQ1LFxuICAgIGJsb2NrczogW1xuICAgICAgeyB4OiAwLjE2LCB5OiAwLjMwLCB2YWx1ZTogXCJCXCIsIHR5cGU6IFwiaGVhdnlcIiB9LFxuICAgICAgeyB4OiAwLjM2LCB5OiAwLjUwLCB2YWx1ZTogXCJPXCIsIHR5cGU6IFwiaGVhdnlcIiB9LFxuICAgICAgeyB4OiAwLjY0LCB5OiAwLjMwLCB2YWx1ZTogXCJYXCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICAgIHsgeDogMC43OCwgeTogMC41MiwgdmFsdWU6IFwiTFwiLCB0eXBlOiBcIm5vcm1hbFwiIH0sXG4gICAgXSxcbiAgfSxcbiAgMTQ6IHtcbiAgICBwcm9tcHQ6IFwiVXNlIHRoZSBmcmFnaWxlIGJsb2NrIG9ubHkgb25jZSB0byBzcGVsbCBTS1kuXCIsXG4gICAgYW5zd2VyOiBcIlNLWVwiLFxuICAgIHRpbWU6IDQwLFxuICAgIGJsb2NrczogW1xuICAgICAgeyB4OiAwLjE4LCB5OiAwLjMyLCB2YWx1ZTogXCJTXCIsIHR5cGU6IFwiZ2xhc3NcIiB9LFxuICAgICAgeyB4OiAwLjQyLCB5OiAwLjQyLCB2YWx1ZTogXCJLXCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICAgIHsgeDogMC42NCwgeTogMC4zMCwgdmFsdWU6IFwiWVwiLCB0eXBlOiBcIm5vcm1hbFwiIH0sXG4gICAgICB7IHg6IDAuNzQsIHk6IDAuNTYsIHZhbHVlOiBcIjJcIiwgdHlwZTogXCJub3JtYWxcIiB9LFxuICAgIF0sXG4gIH0sXG4gIDE1OiB7XG4gICAgcHJvbXB0OiBcIkhvbGQgdGhlIG9yYW5nZSBjb3VudGRvd24gYmxvY2tzIGFuZCBzcGVsbCAxMjMuXCIsXG4gICAgYW5zd2VyOiBcIjEyM1wiLFxuICAgIHRpbWU6IDMyLFxuICAgIGJsb2NrczogW1xuICAgICAgeyB4OiAwLjE4LCB5OiAwLjI2LCB2YWx1ZTogMSwgdHlwZTogXCJjb3VudGRvd25cIiB9LFxuICAgICAgeyB4OiAwLjM4LCB5OiAwLjQ4LCB2YWx1ZTogMiwgdHlwZTogXCJjb3VudGRvd25cIiB9LFxuICAgICAgeyB4OiAwLjYwLCB5OiAwLjMwLCB2YWx1ZTogMywgdHlwZTogXCJjb3VudGRvd25cIiB9LFxuICAgICAgeyB4OiAwLjc4LCB5OiAwLjUyLCB2YWx1ZTogXCJBXCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICBdLFxuICB9LFxuICAxNjoge1xuICAgIHByb21wdDogXCJTcGVsbCBISUQgdXNpbmcgbWl4ZWQgYmxvY2sgdHlwZXMuXCIsXG4gICAgYW5zd2VyOiBcIkhJRFwiLFxuICAgIHRpbWU6IDQyLFxuICAgIGJsb2NrczogW1xuICAgICAgeyB4OiAwLjE2LCB5OiAwLjI4LCB2YWx1ZTogXCJIXCIsIHR5cGU6IFwiaGVhdnlcIiB9LFxuICAgICAgeyB4OiAwLjQyLCB5OiAwLjUyLCB2YWx1ZTogXCJJXCIsIHR5cGU6IFwiaW52aXNpYmxlXCIgfSxcbiAgICAgIHsgeDogMC42NiwgeTogMC4zMCwgdmFsdWU6IFwiRFwiLCB0eXBlOiBcImdsYXNzXCIgfSxcbiAgICAgIHsgeDogMC43OCwgeTogMC41NCwgdmFsdWU6IFwiOFwiLCB0eXBlOiBcIm5vcm1hbFwiIH0sXG4gICAgXSxcbiAgfSxcbiAgMTc6IHtcbiAgICBwcm9tcHQ6IFwiS2VlcCB0aGUgY291bnRkb3duIHNhZmUgYW5kIHNwZWxsIFJVTi5cIixcbiAgICBhbnN3ZXI6IFwiUlVOXCIsXG4gICAgdGltZTogMzgsXG4gICAgYmxvY2tzOiBbXG4gICAgICB7IHg6IDAuMTYsIHk6IDAuMjgsIHZhbHVlOiBcIlJcIiwgdHlwZTogXCJub3JtYWxcIiB9LFxuICAgICAgeyB4OiAwLjM4LCB5OiAwLjQyLCB2YWx1ZTogXCJVXCIsIHR5cGU6IFwiY291bnRkb3duXCIgfSxcbiAgICAgIHsgeDogMC42MiwgeTogMC4zMCwgdmFsdWU6IFwiTlwiLCB0eXBlOiBcIm5vcm1hbFwiIH0sXG4gICAgICB7IHg6IDAuNzYsIHk6IDAuNTYsIHZhbHVlOiBcIjRcIiwgdHlwZTogXCJjb3VudGRvd25cIiB9LFxuICAgIF0sXG4gIH0sXG4gIDE4OiB7XG4gICAgcHJvbXB0OiBcIlNwZWxsIEZPRyBhbmQgdGVzdCB0aGUgaGlkZGVuIGdsYXNzIGJsb2NrLlwiLFxuICAgIGFuc3dlcjogXCJGT0dcIixcbiAgICB0aW1lOiA0MixcbiAgICBibG9ja3M6IFtcbiAgICAgIHsgeDogMC4xNCwgeTogMC4zMCwgdmFsdWU6IFwiRlwiLCB0eXBlOiBcIm5vcm1hbFwiIH0sXG4gICAgICB7IHg6IDAuMzYsIHk6IDAuNDgsIHZhbHVlOiBcIk9cIiwgdHlwZTogXCJnbGFzc1wiIH0sXG4gICAgICB7IHg6IDAuNjIsIHk6IDAuMzAsIHZhbHVlOiBcIkdcIiwgdHlwZTogXCJpbnZpc2libGVcIiB9LFxuICAgICAgeyB4OiAwLjc4LCB5OiAwLjU2LCB2YWx1ZTogXCI2XCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICBdLFxuICB9LFxuICAxOToge1xuICAgIHByb21wdDogXCJTcGVsbCA5MDggYmVmb3JlIHRoZSB0aW1lciBnZXRzIHRpZ2h0LlwiLFxuICAgIGFuc3dlcjogXCI5MDhcIixcbiAgICB0aW1lOiAzNCxcbiAgICBibG9ja3M6IFtcbiAgICAgIHsgeDogMC4xOCwgeTogMC4yOCwgdmFsdWU6IDksIHR5cGU6IFwiY291bnRkb3duXCIgfSxcbiAgICAgIHsgeDogMC40MCwgeTogMC40OCwgdmFsdWU6IDAsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICAgIHsgeDogMC42MiwgeTogMC4zMCwgdmFsdWU6IDgsIHR5cGU6IFwiaGVhdnlcIiB9LFxuICAgICAgeyB4OiAwLjc4LCB5OiAwLjU2LCB2YWx1ZTogXCJCXCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICBdLFxuICB9LFxuICAyMDoge1xuICAgIHByb21wdDogXCJGaW5hbCBwbGF5dGVzdDogc3BlbGwgTUlYIHdpdGggZXZlcnkgYmxvY2sgZmFtaWx5IHByZXNlbnQuXCIsXG4gICAgYW5zd2VyOiBcIk1JWFwiLFxuICAgIHRpbWU6IDQ4LFxuICAgIGJsb2NrczogW1xuICAgICAgeyB4OiAwLjE0LCB5OiAwLjI4LCB2YWx1ZTogXCJNXCIsIHR5cGU6IFwibm9ybWFsXCIgfSxcbiAgICAgIHsgeDogMC4zMiwgeTogMC40OCwgdmFsdWU6IFwiSVwiLCB0eXBlOiBcImludmlzaWJsZVwiIH0sXG4gICAgICB7IHg6IDAuNTIsIHk6IDAuMjgsIHZhbHVlOiBcIlhcIiwgdHlwZTogXCJnbGFzc1wiIH0sXG4gICAgICB7IHg6IDAuNzAsIHk6IDAuNDgsIHZhbHVlOiA1LCB0eXBlOiBcImNvdW50ZG93blwiIH0sXG4gICAgICB7IHg6IDAuODIsIHk6IDAuMzAsIHZhbHVlOiBcIkhcIiwgdHlwZTogXCJoZWF2eVwiIH0sXG4gICAgXSxcbiAgfSxcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0NvbnRyb2xzT3ZlcmxheSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjb25zdCBwYWQgPSB0b3BCb3hXaWR0aCAqIDAuMDU7XHJcbiAgY29uc3Qgb3ggPSB0b3BCb3hYICsgcGFkO1xyXG4gIGNvbnN0IG95ID0gdG9wQm94WSArIHBhZDtcclxuICBjb25zdCBvdyA9IHRvcEJveFdpZHRoIC0gcGFkICogMjtcclxuICBjb25zdCBvaCA9IHRvcEJveEhlaWdodCAtIHBhZCAqIDI7XHJcbiAgY29uc3QgY3ggPSBveCArIG93IC8gMjtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQub3ZlcmxheUJnO1xyXG4gIGN0eC5maWxsUmVjdChveCwgb3ksIG93LCBvaCk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgY3R4LnN0cm9rZVJlY3Qob3gsIG95LCBvdywgb2gpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDMwcHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIkJBU0lDIENPTlRST0xTXCIsIGN4LCBveSArIG9oICogMC4xMSk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuZGl2aWRlcjtcclxuICBjdHgubGluZVdpZHRoID0gMTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyhveCArIG93ICogMC4wNiwgb3kgKyBvaCAqIDAuMik7XHJcbiAgY3R4LmxpbmVUbyhveCArIG93ICogMC45NCwgb3kgKyBvaCAqIDAuMik7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBjb25zdCBjb250cm9scyA9IFtcclxuICAgIHsga2V5OiBcIlcgLyBBIC8gUyAvIERcIiwgZGVzYzogXCJNb3ZlIC8gTmF2aWdhdGVcIiB9LFxyXG4gICAgeyBrZXk6IFwiSFwiLCBkZXNjOiBcIkhvbGQgLyBSZWxlYXNlIEJsb2Nrc1wiIH0sXHJcbiAgICB7IGtleTogXCJDTElDS1wiLCBkZXNjOiBcIkludGVyYWN0IC8gU2VsZWN0IGFuc3dlclwiIH0sXHJcbiAgICB7IGtleTogXCJFU0NcIiwgZGVzYzogXCJDbG9zZSB0aGlzIHBhbmVsXCIgfSxcclxuICBdO1xyXG5cclxuICBjb25zdCBsaXN0WSA9IG95ICsgb2ggKiAwLjI5O1xyXG4gIGNvbnN0IHJvd0ggPSBvaCAqIDAuMTU7XHJcbiAgY29uc3Qga2V5Qm94VyA9IG93ICogMC4zO1xyXG4gIGNvbnN0IGtleUJveEggPSByb3dIICogMC43O1xyXG4gIGNvbnN0IGtleUJveFggPSBveCArIG93ICogMC4wODtcclxuICBjb25zdCBkZXNjWCA9IG94ICsgb3cgKiAwLjU7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29udHJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHJvd1kgPSBsaXN0WSArIGkgKiByb3dIO1xyXG4gICAgY29uc3QgYm94Q2VudGVyWSA9IHJvd1kgKyBrZXlCb3hIIC8gMjtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gc3RhdGUuZGFya01vZGUgPyBcIiMyYTJhMmFcIiA6IFwiI2RkZGRkZFwiO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5kaXZpZGVyO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICBjdHguZmlsbFJlY3Qoa2V5Qm94WCwgcm93WSwga2V5Qm94Vywga2V5Qm94SCk7XHJcbiAgICBjdHguc3Ryb2tlUmVjdChrZXlCb3hYLCByb3dZLCBrZXlCb3hXLCBrZXlCb3hIKTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICBjdHguZm9udCA9IGBib2xkIDE2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICBjb250cm9sc1tpXS5rZXksXHJcbiAgICAgIGtleUJveFggKyBrZXlCb3hXIC8gMixcclxuICAgICAgYm94Q2VudGVyWSxcclxuICAgICAga2V5Qm94VyAtIDgsXHJcbiAgICApO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnTWlkO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgY3R4LmZvbnQgPSBgMTdweCAke2JvZHlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoY29udHJvbHNbaV0uZGVzYywgZGVzY1gsIGJveENlbnRlclkpO1xyXG4gIH1cclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiQ29udHJvbHMgbWF5IHZhcnkgYmV0d2VlbiBsZXZlbHMuXCIsIGN4LCBveSArIG9oICogMC45KTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0dhbWVPdmVyT3ZlcmxheSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCBoIH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IGN5ID0gaCAvIDI7XHJcblxyXG4gIC8vIEZ1bGwtY2FudmFzIGRpbVxyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC44MilcIjtcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XHJcblxyXG4gIC8vIFBhbmVsXHJcbiAgY29uc3QgcGFuZWxXID0gTWF0aC5taW4odyAqIDAuNTUsIDUyMCk7XHJcbiAgY29uc3QgcGFuZWxIID0gaCAqIDAuNTI7XHJcbiAgY29uc3QgcGFuZWxYID0gY3ggLSBwYW5lbFcgLyAyO1xyXG4gIGNvbnN0IHBhbmVsWSA9IGN5IC0gcGFuZWxIIC8gMjtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiIzBhMGEwYVwiO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiI2NjMjIyMlwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gIGN0eC5maWxsUmVjdChwYW5lbFgsIHBhbmVsWSwgcGFuZWxXLCBwYW5lbEgpO1xyXG4gIGN0eC5zdHJva2VSZWN0KHBhbmVsWCwgcGFuZWxZLCBwYW5lbFcsIHBhbmVsSCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNjYzIyMjJcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDUycHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCBjeCwgcGFuZWxZICsgcGFuZWxIICogMC4yMik7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiM4ODg4ODhcIjtcclxuICBjdHguZm9udCA9IGAyMHB4ICR7Ym9keUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBgQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLCAke3N0YXRlLnBsYXllck5hbWV9LmAsXHJcbiAgICBjeCxcclxuICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNDIsXHJcbiAgICBwYW5lbFcgKiAwLjgyLFxyXG4gICk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiIzMzMzMzM1wiO1xyXG4gIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubW92ZVRvKHBhbmVsWCArIHBhbmVsVyAqIDAuMSwgcGFuZWxZICsgcGFuZWxIICogMC41NCk7XHJcbiAgY3R4LmxpbmVUbyhwYW5lbFggKyBwYW5lbFcgKiAwLjksIHBhbmVsWSArIHBhbmVsSCAqIDAuNTQpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuXHJcbiAgY29uc3QgYnRuVyA9IDIwMDtcclxuICBjb25zdCBidG5IID0gNDg7XHJcblxyXG4gIGlmIChzdGF0ZS5wbGF5TW9kZSA9PT0gXCJwbGF5XCIpIHtcclxuICAgIGRyYXdCdXR0b24oXHJcbiAgICAgIGdjLFxyXG4gICAgICBcIlRSWSBBR0FJTlwiLFxyXG4gICAgICBjeCAtIGJ0blcgLyAyLFxyXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjYxLFxyXG4gICAgICBidG5XLFxyXG4gICAgICBidG5ILFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMTtcclxuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgMjAsXHJcbiAgICApO1xyXG5cclxuICAgIGRyYXdCdXR0b24oXHJcbiAgICAgIGdjLFxyXG4gICAgICBcIk1BSU4gTUVOVVwiLFxyXG4gICAgICBjeCAtIGJ0blcgLyAyLFxyXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjc4LFxyXG4gICAgICBidG5XLFxyXG4gICAgICBidG5ILFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcclxuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgMjAsXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkcmF3QnV0dG9uKFxyXG4gICAgICBnYyxcclxuICAgICAgXCJNQUlOIE1FTlVcIixcclxuICAgICAgY3ggLSBidG5XIC8gMixcclxuICAgICAgcGFuZWxZICsgcGFuZWxIICogMC42OCxcclxuICAgICAgYnRuVyxcclxuICAgICAgYnRuSCxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcclxuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIDIwLFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdQYXVzZU92ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBwYWQgPSB0b3BCb3hXaWR0aCAqIDAuMDU7XHJcbiAgY29uc3Qgb3ggPSB0b3BCb3hYICsgcGFkO1xyXG4gIGNvbnN0IG95ID0gdG9wQm94WSArIHBhZDtcclxuICBjb25zdCBvdyA9IHRvcEJveFdpZHRoIC0gcGFkICogMjtcclxuICBjb25zdCBvaCA9IHRvcEJveEhlaWdodCAtIHBhZCAqIDI7XHJcbiAgY29uc3QgY3ggPSBveCArIG93IC8gMjtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5vdmVybGF5Qmc7XHJcbiAgY3R4LmZpbGxSZWN0KG94LCBveSwgb3csIG9oKTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gMjtcclxuICBjdHguc3Ryb2tlUmVjdChveCwgb3ksIG93LCBvaCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzhweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiUEFVU0VEXCIsIGN4LCBveSArIG9oICogMC4xOCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuZGl2aWRlcjtcclxuICBjdHgubGluZVdpZHRoID0gMTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyhveCArIG93ICogMC4xLCBveSArIG9oICogMC4zKTtcclxuICBjdHgubGluZVRvKG94ICsgb3cgKiAwLjksIG95ICsgb2ggKiAwLjMpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgLy8gQ2xlYXIgYWxsIHVuZGVybHlpbmcgaGl0IGFyZWFzIHNvIHRoZSBnYW1lIGJlaGluZCBpcyBibG9ja2VkXHJcbiAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuXHJcbiAgY29uc3QgYnRuVyA9IDIyMDtcclxuICBjb25zdCBidG5IID0gNDg7XHJcbiAgY29uc3QgYnRuWCA9IGN4IC0gYnRuVyAvIDI7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiUkVTVU1FXCIsIGJ0blgsIG95ICsgb2ggKiAwLjM2LCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIlFVSVQgVE8gTUVOVVwiLCBidG5YLCBveSArIG9oICogMC41MywgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5saXZlcyA9IDM7XHJcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTGFiZWwgPSBzdGF0ZS5kYXJrTW9kZSA/IFwi4piAICBMSUdIVCBNT0RFXCIgOiBcIvCfjJkgIERBUksgTU9ERVwiO1xyXG4gIGRyYXdCdXR0b24oXHJcbiAgICBnYyxcclxuICAgIHRvZ2dsZUxhYmVsLFxyXG4gICAgYnRuWCxcclxuICAgIG95ICsgb2ggKiAwLjcsXHJcbiAgICBidG5XLFxyXG4gICAgYnRuSCxcclxuICAgICgpID0+IHtcclxuICAgICAgc3RhdGUuZGFya01vZGUgPSAhc3RhdGUuZGFya01vZGU7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIDE4LFxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQsIGdldE1vdmVtZW50TGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IExFVkVMX0RBVEEgfSBmcm9tIFwiLi9sZXZlbERhdGFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3QmFja2dyb3VuZCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUgfSA9IGdjO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gdC5iZztcclxuICBjdHguZmlsbFN0eWxlID0gdC5iZztcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMb2dvID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgbG9nbywgbG9nb0xvYWRlZCwgZGlzcGxheUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgbG9nb1kgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGlmIChsb2dvTG9hZGVkICYmIGxvZ28ubmF0dXJhbFdpZHRoID4gMCkge1xyXG4gICAgY29uc3QgbG9nb1cgPSB3ICogMC4xNTtcclxuICAgIGNvbnN0IGxvZ29IID0gbG9nb1cgKiAobG9nby5uYXR1cmFsSGVpZ2h0IC8gbG9nby5uYXR1cmFsV2lkdGgpO1xyXG4gICAgY3R4LmRyYXdJbWFnZShsb2dvLCB3IC8gMiAtIGxvZ29XIC8gMiwgbG9nb1kgLSBsb2dvSCAvIDIsIGxvZ29XLCBsb2dvSCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBnZXRUaGVtZShzdGF0ZSkuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZvbnQgPSBgYm9sZCA1NHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChcIk91dHNpZGUtdGhlLUJveFwiLCB3IC8gMiwgbG9nb1kpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3R2FtZXBsYXlGcmFtZSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGdhbWVwbGF5RnJhbWUsIGdhbWVwbGF5RnJhbWVMb2FkZWQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgaWYgKGdhbWVwbGF5RnJhbWVMb2FkZWQgJiYgZ2FtZXBsYXlGcmFtZS5uYXR1cmFsV2lkdGggPiAwKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKFxyXG4gICAgICBnYW1lcGxheUZyYW1lLFxyXG4gICAgICA0NDAsXHJcbiAgICAgIDE4MCxcclxuICAgICAgNjg4LFxyXG4gICAgICA1NzIsXHJcbiAgICAgIHRvcEJveFgsXHJcbiAgICAgIHRvcEJveFksXHJcbiAgICAgIHRvcEJveFdpZHRoLFxyXG4gICAgICB0b3BCb3hIZWlnaHQsXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBnZXRUaGVtZShzdGF0ZSkuc3Ryb2tlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XHJcbiAgICBjdHguc3Ryb2tlUmVjdCh0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0J1dHRvbiA9IChcclxuICBnYzogR2FtZUNvbnRleHQsXHJcbiAgbGFiZWw6IHN0cmluZyxcclxuICB4OiBudW1iZXIsXHJcbiAgeTogbnVtYmVyLFxyXG4gIHc6IG51bWJlcixcclxuICBoOiBudW1iZXIsXHJcbiAgYWN0aW9uOiAoKSA9PiB2b2lkLFxyXG4gIGZvbnRTaXplID0gMjIsXHJcbikgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAke2ZvbnRTaXplfXB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQobGFiZWwsIHggKyB3IC8gMiwgeSArIGggLyAyLCB3IC0gMTYpO1xyXG4gIGdjLmhpdEFyZWFzLnB1c2goeyB4LCB5LCB3LCBoLCBhY3Rpb24gfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0JvdHRvbVBhbmVsID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG4gIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IHN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIiAmJiBzdGF0ZS5jdXJyZW50TGV2ZWwgPj0gMTEgJiYgc3RhdGUuY3VycmVudExldmVsIDw9IDIwO1xyXG5cclxuICBpZiAoaXNNb3ZlbWVudExldmVsKSB7XHJcbiAgICBjb25zdCBtb3ZlbWVudExheW91dCA9IGdldE1vdmVtZW50TGF5b3V0KGN0eCk7XHJcbiAgICBjb25zdCBjdXJyZW50QW5zd2VyID0gZ2MuZ2V0Q3VycmVudEFuc3dlcigpIHx8IFwiKGVtcHR5KVwiO1xyXG4gICAgY29uc3QgdGltZXJUZXh0ID0gYCR7U3RyaW5nKGdjLnRpbWVMZWZ0U2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpfXNgO1xuICAgIGNvbnN0IHRpbWVyQ29sb3IgPSBnYy50aW1lTGVmdFNlY29uZHMgPCAxMCA/IFwiI2ZmNTI1MlwiIDogdC5mZ01pZDtcbiAgICBjb25zdCBzdWJtaXRXID0gMTYwO1xuICAgIGNvbnN0IHN1Ym1pdEggPSA0ODtcbiAgICBjb25zdCBzdWJtaXRYID0gbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAtIHN1Ym1pdFcgLSAzMjtcbiAgICBjb25zdCBzdWJtaXRZID0gbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVZICsgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVIZWlnaHQgLyAyIC0gc3VibWl0SCAvIDI7XG4gICAgY29uc3QgcmVzZXRXID0gMTAwO1xuICAgIGNvbnN0IHJlc2V0SCA9IDM0O1xuICAgIGNvbnN0IHJlc2V0WCA9IG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lV2lkdGggLSByZXNldFcgLSA0NjtcbiAgICBjb25zdCByZXNldFkgPSBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVkgKyAyODtcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgICBjdHgubGluZVdpZHRoID0gNDtcclxuICAgIGN0eC5zdHJva2VSZWN0KFxyXG4gICAgICBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVgsXHJcbiAgICAgIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSxcclxuICAgICAgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCxcclxuICAgICAgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVIZWlnaHQsXHJcbiAgICApO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XHJcbiAgICBjdHguZm9udCA9IGBib2xkIDI4cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiQXJyYW5nZSBUaGUgQmxvY2tzXCIsIDI4LCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVkgKyAyMiwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAqIDAuNSk7XHJcblxyXG4gICAgY3R4LmZvbnQgPSBgMTdweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XG4gICAgY3R4LmZpbGxUZXh0KGBRdWl6OiAke2djLnF1aXpQcm9tcHR9YCwgMjgsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIDYyLCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVdpZHRoICogMC41Nik7XG5cclxuICAgIGN0eC5mb250ID0gYDE1cHggJHtib2R5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRpbWVyQ29sb3I7XHJcbiAgICBjdHguZmlsbFRleHQoYFRpbWUgTGVmdDogJHt0aW1lclRleHR9YCwgMjgsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIDEwMiwgMTgwKTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgICBjdHguZmlsbFRleHQoYFlvdXIgQW5zd2VyOiAke2N1cnJlbnRBbnN3ZXJ9YCwgMjgsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIDEzMCwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAqIDAuNTIpO1xuXG4gICAgZHJhd0J1dHRvbihnYywgXCJSRVNFVFwiLCByZXNldFgsIHJlc2V0WSwgcmVzZXRXLCByZXNldEgsICgpID0+IHtcbiAgICAgIGdjLnJlc2V0TW92ZW1lbnRMZXZlbCgpO1xuICAgIH0sIDE0KTtcblxuICAgIGRyYXdCdXR0b24oZ2MsIFwiU1VCTUlUXCIsIHN1Ym1pdFgsIHN1Ym1pdFksIHN1Ym1pdFcsIHN1Ym1pdEgsICgpID0+IHtcbiAgICAgIGdjLnN1Ym1pdE1vdmVtZW50QW5zd2VyKCk7XG4gICAgfSwgMTgpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgeyB3LCBjb250ZW50WCwgY29udGVudFdpZHRoLCBib3R0b21Cb3hZLCBib3R0b21Cb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gNDtcclxuICBjdHguc3Ryb2tlUmVjdChjb250ZW50WCwgYm90dG9tQm94WSwgY29udGVudFdpZHRoLCBib3R0b21Cb3hIZWlnaHQpO1xyXG5cclxuICBjb25zdCBjZW50ZXJYID0gdyAvIDI7XHJcbiAgY29uc3QgdGV4dFdpZHRoID0gY29udGVudFdpZHRoICogMC43NDtcclxuXHJcbiAgY29uc3QgbGV2ZWxEYXRhID1cclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIlxyXG4gICAgICA/IExFVkVMX0RBVEFbc3RhdGUuY3VycmVudExldmVsIC0gMV1cclxuICAgICAgOiB7IHRpdGxlOiBzdGF0ZS5zdG9yeVRpdGxlLCBsaW5lczogc3RhdGUuc3RvcnlMaW5lcyB9O1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcclxuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQobGV2ZWxEYXRhLnRpdGxlLCBjZW50ZXJYLCBib3R0b21Cb3hZICsgMTgsIHRleHRXaWR0aCk7XHJcblxyXG4gIGN0eC5mb250ID0gYDIwcHggJHtib2R5Rm9udH1gO1xyXG4gIGNvbnN0IGxpbmVHYXAgPSAzMDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsRGF0YS5saW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY3R4LmZpbGxUZXh0KGxldmVsRGF0YS5saW5lc1tpXSwgY2VudGVyWCwgYm90dG9tQm94WSArIDY4ICsgaSAqIGxpbmVHYXAsIHRleHRXaWR0aCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbEhVRCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG4gIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IHN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIiAmJiBzdGF0ZS5jdXJyZW50TGV2ZWwgPj0gMTEgJiYgc3RhdGUuY3VycmVudExldmVsIDw9IDIwO1xyXG5cclxuICBpZiAoaXNNb3ZlbWVudExldmVsKSB7XHJcbiAgICBjb25zdCBtb3ZlbWVudExheW91dCA9IGdldE1vdmVtZW50TGF5b3V0KGN0eCk7XHJcbiAgICBjb25zdCBwYWRYID0gMjg7XHJcbiAgICBjb25zdCBwYWRZID0gMjg7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgIGN0eC5mb250ID0gYGJvbGQgMjRweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoYFEuJHtzdGF0ZS5jdXJyZW50TGV2ZWx9YCwgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWCArIHBhZFgsIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVkgKyBwYWRZKTtcclxuXHJcbiAgICBjb25zdCBwYXVzZVcgPSA0ODtcclxuICAgIGNvbnN0IHBhdXNlSCA9IDM0O1xyXG4gICAgY29uc3QgcGF1c2VYID0gbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lV2lkdGggLSBwYWRYIC0gcGF1c2VXO1xyXG4gICAgY29uc3QgcGF1c2VZID0gbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWSArIHBhZFkgLSBwYXVzZUggLyAyO1xyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgIGN0eC5zdHJva2VSZWN0KHBhdXNlWCwgcGF1c2VZLCBwYXVzZVcsIHBhdXNlSCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgICBjdHguZm9udCA9IGBib2xkIDE2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiSUlcIiwgcGF1c2VYICsgcGF1c2VXIC8gMiwgcGF1c2VZICsgcGF1c2VIIC8gMik7XHJcbiAgICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgICAgeDogcGF1c2VYLFxyXG4gICAgICB5OiBwYXVzZVksXHJcbiAgICAgIHc6IHBhdXNlVyxcclxuICAgICAgaDogcGF1c2VILFxyXG4gICAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGVhcnRTaXplID0gMjQ7XHJcbiAgICBjb25zdCBoZWFydEdhcCA9IDY7XHJcbiAgICBjb25zdCBsaXZlc1kgPSBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVIZWlnaHQgLSBwYWRZO1xyXG4gICAgY29uc3QgdG90YWxXID0gMyAqIGhlYXJ0U2l6ZSArIDIgKiBoZWFydEdhcDtcclxuICAgIGNvbnN0IGxpdmVzWCA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVdpZHRoIC0gcGFkWCAtIHRvdGFsVztcclxuXHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgIGN0eC5mb250ID0gYCR7aGVhcnRTaXplfXB4IHNhbnMtc2VyaWZgO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9IGkgPCBzdGF0ZS5saXZlcyA/IFwiI2UwMzAzMFwiIDogc3RhdGUuZGFya01vZGUgPyBcIiM0NDQ0NDRcIiA6IFwiI2JiYmJiYlwiO1xyXG4gICAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIlxcdTI2NjVcIiwgbGl2ZXNYICsgaSAqIChoZWFydFNpemUgKyBoZWFydEdhcCksIGxpdmVzWSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IHBhZFggPSB0b3BCb3hXaWR0aCAqIDAuMDU7XHJcbiAgY29uc3QgcGFkWSA9IHRvcEJveEhlaWdodCAqIDAuMDg7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDI2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChgUS4ke3N0YXRlLmN1cnJlbnRMZXZlbH1gLCB0b3BCb3hYICsgcGFkWCwgdG9wQm94WSArIHBhZFkpO1xyXG5cclxuICBjb25zdCBwYXVzZVcgPSA0ODtcclxuICBjb25zdCBwYXVzZUggPSAzNDtcclxuICBjb25zdCBwYXVzZVggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggLSBwYWRYIC0gcGF1c2VXO1xyXG4gIGNvbnN0IHBhdXNlWSA9IHRvcEJveFkgKyBwYWRZIC0gcGF1c2VIIC8gMjtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gMjtcclxuICBjdHguc3Ryb2tlUmVjdChwYXVzZVgsIHBhdXNlWSwgcGF1c2VXLCBwYXVzZUgpO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiSUlcIiwgcGF1c2VYICsgcGF1c2VXIC8gMiwgcGF1c2VZICsgcGF1c2VIIC8gMik7XHJcbiAgZ2MuaGl0QXJlYXMucHVzaCh7XHJcbiAgICB4OiBwYXVzZVgsXHJcbiAgICB5OiBwYXVzZVksXHJcbiAgICB3OiBwYXVzZVcsXHJcbiAgICBoOiBwYXVzZUgsXHJcbiAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoZWFydFNpemUgPSAyNDtcclxuICBjb25zdCBoZWFydEdhcCA9IDY7XHJcbiAgY29uc3QgbGl2ZXNZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAtIHBhZFk7XHJcbiAgY29uc3QgdG90YWxXID0gMyAqIGhlYXJ0U2l6ZSArIDIgKiBoZWFydEdhcDtcclxuICBjb25zdCBsaXZlc1ggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggLSBwYWRYIC0gdG90YWxXO1xyXG5cclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGAke2hlYXJ0U2l6ZX1weCBzYW5zLXNlcmlmYDtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGkgPCBzdGF0ZS5saXZlcyA/IFwiI2UwMzAzMFwiIDogc3RhdGUuZGFya01vZGUgPyBcIiM0NDQ0NDRcIiA6IFwiI2JiYmJiYlwiO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiXFx1MjY2NVwiLCBsaXZlc1ggKyBpICogKGhlYXJ0U2l6ZSArIGhlYXJ0R2FwKSwgbGl2ZXNZKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldExheW91dCwgZ2V0TW92ZW1lbnRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24sIGRyYXdMZXZlbEhVRCB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBkcmF3TmFtZUVudHJ5IH0gZnJvbSBcIi4uL2xldmVscy9MZXZlbDFcIjtcclxuaW1wb3J0IHsgZHJhd0xldmVsMiB9IGZyb20gXCIuLi9sZXZlbHMvTGV2ZWwyXCI7XHJcbmltcG9ydCB7IGRyYXdMZXZlbDMgfSBmcm9tIFwiLi4vbGV2ZWxzL0xldmVsM1wiO1xyXG5pbXBvcnQgeyBMRVZFTF9DT1VOVCB9IGZyb20gXCIuLi9sZXZlbERhdGFcIjtcclxuXHJcbmNvbnN0IGRyYXdMZXZlbE5hdmlnYXRpb24gPSAoZ2M6IEdhbWVDb250ZXh0LCBuYXZZT3ZlcnJpZGU/OiBudW1iZXIpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgdG9wQm94WCwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCwgdG9wQm94WSB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCBuYXZCdG5IID0gNDI7XHJcbiAgY29uc3QgbmF2QnRuVyA9IDE1MDtcclxuICBjb25zdCBuYXZZID0gbmF2WU92ZXJyaWRlID8/IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjc5O1xyXG5cclxuICBpZiAoc3RhdGUucGxheU1vZGUgIT09IFwibGV2ZWxzZWxlY3RcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA+IDEpIHtcclxuICAgIGRyYXdCdXR0b24oZ2MsIFwiPC0gUFJFVlwiLCB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA1LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbC0tO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sIDE4KTtcclxuICB9XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGN4IC0gbmF2QnRuVyAvIDIsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcclxuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxzZWxlY3RcIjtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0sIDE2KTtcclxuXHJcbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA8IExFVkVMX0NPVU5UKSB7XHJcbiAgICBkcmF3QnV0dG9uKGdjLCBcIk5FWFQgLT5cIiwgdG9wQm94WCArIHRvcEJveFdpZHRoICogMC43NywgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LCAxOCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZHJhd01vdmVtZW50TGV2ZWxOYXZpZ2F0aW9uID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgc3RhdGUgfSA9IGdjO1xyXG4gIGNvbnN0IG1vdmVtZW50TGF5b3V0ID0gZ2V0TW92ZW1lbnRMYXlvdXQoZ2MuY3R4KTtcclxuICBjb25zdCBuYXZCdG5IID0gNDI7XHJcbiAgY29uc3QgbmF2QnRuVyA9IDE1MDtcclxuICBjb25zdCBuYXZZID0gbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVZICsgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVIZWlnaHQgLSBuYXZCdG5IIC0gMjI7XHJcbiAgY29uc3QgY2VudGVyWCA9IG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lV2lkdGggLyAyO1xyXG5cclxuICBpZiAoc3RhdGUucGxheU1vZGUgIT09IFwibGV2ZWxzZWxlY3RcIikge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA+IDEpIHtcclxuICAgIGRyYXdCdXR0b24oZ2MsIFwiPC0gUFJFVlwiLCAyNiwgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwtLTtcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LCAxOCk7XHJcbiAgfVxyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIkxFVkVMIFNFTEVDVFwiLCBjZW50ZXJYIC0gbmF2QnRuVyAvIDIsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcclxuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxzZWxlY3RcIjtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0sIDE2KTtcclxuXHJcbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA8IExFVkVMX0NPVU5UKSB7XHJcbiAgICBkcmF3QnV0dG9uKGdjLCBcIk5FWFQgLT5cIiwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAtIG5hdkJ0blcgLSAyNiwgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwrKztcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LCAxOCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZHJhd0Fuc3dlclpvbmUgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHggfSA9IGdjO1xyXG5cclxuICBmb3IgKGNvbnN0IHNsb3Qgb2YgZ2MuYW5zd2VyU2xvdHMpIHtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkyKVwiO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgICBjdHguc2V0TGluZURhc2goWzQsIDRdKTtcclxuICAgIGN0eC5zdHJva2VSZWN0KHNsb3QueCwgc2xvdC55LCBzbG90LnNpemUsIHNsb3Quc2l6ZSk7XHJcbiAgICBjdHguc2V0TGluZURhc2goW10pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWwgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCBsdmwgPSBzdGF0ZS5jdXJyZW50TGV2ZWw7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgaWYgKGx2bCA9PT0gMSkge1xyXG4gICAgZHJhd05hbWVFbnRyeShnYyk7XHJcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGx2bCA9PT0gMikge1xyXG4gICAgZHJhd0xldmVsMihnYyk7XHJcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGx2bCA9PT0gMykge1xyXG4gICAgZHJhd0xldmVsMyhnYyk7XHJcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGx2bCA+PSAxMSAmJiBsdmwgPD0gMjApIHtcclxuICAgIGNvbnN0IG1vdmVtZW50TGF5b3V0ID0gZ2V0TW92ZW1lbnRMYXlvdXQoY3R4KTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICAgIGN0eC5saW5lV2lkdGggPSA0O1xyXG4gICAgY3R4LnN0cm9rZVJlY3QoXHJcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVgsXHJcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVksXHJcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVdpZHRoLFxyXG4gICAgICBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVIZWlnaHQsXHJcbiAgICApO1xyXG5cclxuICAgIGRyYXdBbnN3ZXJab25lKGdjKTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGdjLmJsb2Nrcykge1xyXG4gICAgICBibG9jay5kcmF3KGN0eCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2MucGxheWVyLmRyYXcoY3R4KTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZvbnQgPSBgMTRweCAke2JvZHlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgIGBGYWNpbmc6ICR7Z2MucGxheWVyLmdldEZhY2luZ0RpcmVjdGlvbigpLnRvVXBwZXJDYXNlKCl9YCxcclxuICAgICAgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWCArIDI0LFxyXG4gICAgICBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVIZWlnaHQgLSAyNCxcclxuICAgICk7XHJcblxyXG4gICAgZHJhd01vdmVtZW50TGV2ZWxOYXZpZ2F0aW9uKGdjKTtcclxuICAgIGRyYXdMZXZlbEhVRChnYyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzNHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoYExFVkVMICR7bHZsfWAsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNik7XHJcblxyXG4gIGN0eC5mb250ID0gYDIycHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnTWlkO1xyXG4gIGN0eC5maWxsVGV4dChcIlRoaXMgbGV2ZWwgaXMgdW5kZXIgY29uc3RydWN0aW9uLlwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzgsIHRvcEJveFdpZHRoICogMC42KTtcclxuXHJcbiAgY3R4LmZvbnQgPSBgMTZweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XHJcbiAgY3R4LmZpbGxUZXh0KFwiUXVlc3Rpb25zLCBjaG9pY2VzLCBhbmQgaW50ZXJhY3Rpb25zIHdpbGwgYmUgd2lyZWQgaW4gaGVyZS5cIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjUyLCB0b3BCb3hXaWR0aCAqIDAuNik7XHJcblxyXG4gIGRyYXdMZXZlbE5hdmlnYXRpb24oZ2MpO1xyXG4gIGRyYXdMZXZlbEhVRChnYyk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5pbXBvcnQgeyBMRVZFTF9DT1VOVCB9IGZyb20gXCIuLi9sZXZlbERhdGFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWxTZWxlY3QgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIkxFVkVMIFNFTEVDVFwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMSk7XHJcblxyXG4gIGNvbnN0IGNvbHMgPSA1O1xyXG4gIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggKiAwLjEzO1xyXG4gIGNvbnN0IHRpbGVIID0gdG9wQm94SGVpZ2h0ICogMC4xNDtcclxuICBjb25zdCBoR2FwID0gKHRvcEJveFdpZHRoICogMC43OCAtIHRpbGVXICogY29scykgLyAoY29scyAtIDEpO1xyXG4gIGNvbnN0IHZHYXAgPSB0b3BCb3hIZWlnaHQgKiAwLjA0O1xyXG4gIGNvbnN0IGdyaWRXID0gdGlsZVcgKiBjb2xzICsgaEdhcCAqIChjb2xzIC0gMSk7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjE4O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IExFVkVMX0NPVU5UOyBpKyspIHtcclxuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XHJcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XHJcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XHJcbiAgICBjb25zdCBsdmwgPSBpICsgMTtcclxuICAgIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IGx2bCA+PSAxMSAmJiBsdmwgPD0gMjA7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gaXNNb3ZlbWVudExldmVsID8gdC5kaXZpZGVyIDogdC5zdHJva2U7XHJcbiAgICBjdHgubGluZVdpZHRoID0gaXNNb3ZlbWVudExldmVsID8gMiA6IDM7XHJcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGlzTW92ZW1lbnRMZXZlbCA/IHQuZmdNaWQgOiB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgICBjdHguZm9udCA9IGBib2xkIDIwcHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxUZXh0KGAke2x2bH1gLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuMzgpO1xyXG5cclxuICAgIGN0eC5mb250ID0gYDEwcHggJHtib2R5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XHJcbiAgICBjdHguZmlsbFRleHQoaXNNb3ZlbWVudExldmVsID8gXCJtb3ZlXCIgOiBgTEVWRUwgJHtsdmx9YCwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjc0KTtcclxuXHJcbiAgICBjb25zdCBjYXB0dXJlZCA9IGx2bDtcclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gY2FwdHVyZWQ7XHJcbiAgICAgICAgc3RhdGUucGxheU1vZGUgPSBcImxldmVsc2VsZWN0XCI7XHJcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5saXZlcyA9IDM7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxcIjtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYmFja1cgPSAxNTA7XHJcbiAgY29uc3QgYmFja0ggPSA0MjtcclxuICBjb25zdCBiYWNrWCA9IHRvcEJveFggKyB0b3BCb3hXaWR0aCAqIDAuMDQ7XHJcbiAgY29uc3QgYmFja1kgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC44MjtcclxuICBkcmF3QnV0dG9uKGdjLCBcIjwtIEJBQ0tcIiwgYmFja1gsIGJhY2tZLCBiYWNrVywgYmFja0gsICgpID0+IHtcclxuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0sIDE4KTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gICAgZnJvbSAnLi4vdGhlbWUnO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSAgIGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSAgZnJvbSAnLi4vcmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdNYWluTWVudSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcElubmVyWCwgdG9wSW5uZXJZLCB0b3BJbm5lcldpZHRoLCB0b3BJbm5lckhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCB0ICA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSAgICA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiAgICA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcblxyXG4gIGN0eC5mb250ID0gYGJvbGQgNDJweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiTUFJTiBNRU5VXCIsIGN4LCB0b3BJbm5lclkgKyB0b3BJbm5lckhlaWdodCAqIDAuMTUpO1xyXG5cclxuICBjb25zdCBidG5XICAgPSBNYXRoLm1pbigzMDAsIHRvcElubmVyV2lkdGggKiAwLjc4KTtcclxuICBjb25zdCBidG5IICAgPSA1MDtcclxuICBjb25zdCBidG5YICAgPSBjeCAtIGJ0blcgLyAyO1xyXG4gIGNvbnN0IHN0YXJ0WSA9IHRvcElubmVyWSArIHRvcElubmVySGVpZ2h0ICogMC4zMjtcclxuICBjb25zdCBzdHJpZGUgPSBidG5IICsgMTQ7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiU1RBUlQgRVhBTVwiLCBidG5YLCBzdGFydFksIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICBzdGF0ZS5saXZlcyAgICAgICAgPSAzO1xyXG4gICAgc3RhdGUucGF1c2VkICAgICAgID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5nYW1lT3ZlciAgICAgPSBmYWxzZTtcclxuICAgIHN0YXRlLnBsYXlNb2RlICAgICA9IFwicGxheVwiO1xyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxcIjtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIkxFVkVMIFNFTEVDVFwiLCBidG5YLCBzdGFydFkgKyBzdHJpZGUsIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJDT05UUk9MU1wiLCBidG5YLCBzdGFydFkgKyBzdHJpZGUgKiAyLCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5jb250cm9sc09wZW4gPSB0cnVlO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGhlbWUgPSAoc3RhdGU6IEdhbWVTdGF0ZSkgPT5cclxuICBzdGF0ZS5kYXJrTW9kZVxyXG4gICAgPyB7XHJcbiAgICAgICAgYmc6IFwiIzExMTExMVwiLFxyXG4gICAgICAgIGZnOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBmZ01pZDogXCIjY2NjY2NjXCIsXHJcbiAgICAgICAgZmdEaW06IFwiIzg4ODg4OFwiLFxyXG4gICAgICAgIHN0cm9rZTogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgb3ZlcmxheUJnOiBcInJnYmEoMTAsMTAsMTAsMC45MClcIixcclxuICAgICAgICBkaXZpZGVyOiBcIiM0NDQ0NDRcIixcclxuICAgICAgfVxyXG4gICAgOiB7XHJcbiAgICAgICAgYmc6IFwiI2YwZjBmMFwiLFxyXG4gICAgICAgIGZnOiBcIiMxMTExMTFcIixcclxuICAgICAgICBmZ01pZDogXCIjMzMzMzMzXCIsXHJcbiAgICAgICAgZmdEaW06IFwiIzY2NjY2NlwiLFxyXG4gICAgICAgIHN0cm9rZTogXCIjMTExMTExXCIsXHJcbiAgICAgICAgb3ZlcmxheUJnOiBcInJnYmEoMjIwLDIyMCwyMjAsMC45MylcIixcclxuICAgICAgICBkaXZpZGVyOiBcIiNhYWFhYWFcIixcclxuICAgICAgfTtcclxuIl19
