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
    _defineProperty(_this, "blocks", []);
    _defineProperty(_this, "answerSlots", []);
    _defineProperty(_this, "heldBlock", null);
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
    _this.listen(_Event.GameEvent.HOLD, function () {
      _this.toggleHold();
    });
    return _this;
  }
  _inherits(PlayerControl, _EventListener);
  return _createClass(PlayerControl, [{
    key: "update",
    value: function update() {}
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
    key: "setBounds",
    value: function setBounds(minX, minY, maxX, maxY) {
      this.bounds = {
        minX: minX,
        minY: minY,
        maxX: maxX,
        maxY: maxY
      };
      this.clampToBounds();
      if (this.heldBlock) {
        var heldPosition = this.getHeldBlockPosition(this.x, this.y, this.direction);
        this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
      }
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
      var _this2 = this;
      var nextDirection = this.resolveDirection(data);
      this.direction = nextDirection;
      var candidateX = this.clampValue(this.x + data.dx * this.speed, this.bounds.minX, this.bounds.maxX);
      var candidateY = this.clampValue(this.y + data.dy * this.speed, this.bounds.minY, this.bounds.maxY);
      var otherBlocks = this.blocks.filter(function (block) {
        return block !== _this2.heldBlock;
      });
      if (this.collidesWithAnyBlock(candidateX, candidateY, otherBlocks)) {
        return;
      }
      if (this.heldBlock) {
        var heldPosition = this.getHeldBlockPosition(candidateX, candidateY, nextDirection);
        if (!this.rectFitsBounds(heldPosition.x, heldPosition.y, this.width, this.height)) {
          return;
        }
        if (this.collidesWithAnyBlock(heldPosition.x, heldPosition.y, otherBlocks)) {
          return;
        }
        this.clearAnswerSlotForBlock(this.heldBlock);
        this.x = candidateX;
        this.y = candidateY;
        this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
        return;
      }
      this.x = candidateX;
      this.y = candidateY;
    }
  }, {
    key: "toggleHold",
    value: function toggleHold() {
      var _this3 = this;
      if (this.heldBlock) {
        var releaseSlot = this.getIntersectingEmptyAnswerSlot(this.heldBlock);
        var _otherBlocks = this.blocks.filter(function (candidate) {
          return candidate !== _this3.heldBlock;
        });
        if (releaseSlot) {
          this.clearAnswerSlotForBlock(this.heldBlock);
          releaseSlot.block = this.heldBlock;
          this.heldBlock.moveTo(releaseSlot.x, releaseSlot.y);
          this.detachHeldBlock();
          return;
        }
        if (this.collidesWithAnyBlock(this.heldBlock.x, this.heldBlock.y, _otherBlocks)) {
          return;
        }
        if (!this.rectFitsBounds(this.heldBlock.x, this.heldBlock.y, this.heldBlock.size, this.heldBlock.size)) {
          return;
        }
        this.detachHeldBlock();
        return;
      }
      var block = this.findNearbyFacingBlock();
      if (!block) {
        return;
      }
      var heldPosition = this.getHeldBlockPosition(this.x, this.y, this.direction);
      var otherBlocks = this.blocks.filter(function (candidate) {
        return candidate !== block;
      });
      if (!this.rectFitsBounds(heldPosition.x, heldPosition.y, this.width, this.height)) {
        return;
      }
      if (this.collidesWithAnyBlock(heldPosition.x, heldPosition.y, otherBlocks)) {
        return;
      }
      this.clearAnswerSlotForBlock(block);
      this.heldBlock = block;
      block.setHeld(true);
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
      var _iterator = _createForOfIteratorHelper(this.blocks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var block = _step.value;
          if (block.held) {
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
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return closestBlock;
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
    key: "resolveDirection",
    value: function resolveDirection(data) {
      if (data.dx > 0) return "right";
      if (data.dx < 0) return "left";
      if (data.dy > 0) return "down";
      return "up";
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
      var _iterator2 = _createForOfIteratorHelper(this.answerSlots),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var slot = _step2.value;
          if (slot.block === block) {
            slot.block = null;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
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
    key: "collidesWithAnyBlock",
    value: function collidesWithAnyBlock(x, y, blocks) {
      var _this4 = this;
      return blocks.some(function (block) {
        return block.collidesWithRect(x, y, _this4.width, _this4.height);
      });
    }
  }, {
    key: "rectFitsBounds",
    value: function rectFitsBounds(x, y, width, height) {
      return x >= this.bounds.minX && y >= this.bounds.minY && x + width <= this.bounds.maxX + width && y + height <= this.bounds.maxY + height;
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
exports.Block = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var isValidValue = function isValidValue(value) {
  if (/^[a-z]$/i.test(value)) {
    return true;
  }
  if (/^\d{1,2}$/.test(value)) {
    var numericValue = Number(value);
    return numericValue >= 0 && numericValue <= 99;
  }
  return false;
};
var Block = exports.Block = /*#__PURE__*/function () {
  function Block(type, x, y, size, color, value) {
    _classCallCheck(this, Block);
    _defineProperty(this, "held", false);
    var normalizedValue = "".concat(value).trim().toUpperCase();
    if (!isValidValue(normalizedValue)) {
      throw new Error("Invalid block value \"".concat(value, "\". Blocks must use one letter or a number from 0 to 99."));
    }
    this.type = type;
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.value = normalizedValue;
  }
  return _createClass(Block, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.size, this.size);
      ctx.strokeStyle = this.held ? "#3a3a3a" : "#111111";
      ctx.lineWidth = this.held ? 3 : 2;
      ctx.strokeRect(this.x, this.y, this.size, this.size);
      ctx.fillStyle = "#111111";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold ".concat(Math.max(18, Math.floor(this.size * 0.42)), "px \"Trebuchet MS\", sans-serif");
      ctx.fillText(this.value, this.x + this.size / 2, this.y + this.size / 2);
    }
  }, {
    key: "collidesWithRect",
    value: function collidesWithRect(x, y, width, height) {
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
  }]);
}();

},{}],7:[function(require,module,exports){
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
  function NormalBlock(x, y, size, color, value) {
    _classCallCheck(this, NormalBlock);
    return _callSuper(this, NormalBlock, ["normal", x, y, size, color, value]);
  }
  _inherits(NormalBlock, _Block);
  return _createClass(NormalBlock);
}(_Block2.Block);

},{"./Block":6}],8:[function(require,module,exports){
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
  var gameFrameX = 0;
  var gameFrameY = 0;
  var gameFrameWidth = w;
  var gameFrameHeight = h * 0.7;
  var bottomFrameX = 0;
  var bottomFrameY = gameFrameHeight;
  var bottomFrameWidth = w;
  var bottomFrameHeight = h - gameFrameHeight;
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

},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{"../layout":8,"../renderer":17,"../theme":21}],11:[function(require,module,exports){
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

},{"../layout":8,"../theme":21}],12:[function(require,module,exports){
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

},{"../layout":8,"../theme":21}],13:[function(require,module,exports){
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
var _NormalBlock = require("../Helpers/objects/NormalBlock");
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
    quizAnswer: "AB7",
    timeLeftSeconds: 30
  };
  var isMovementLevel = function isMovementLevel(level) {
    return level >= 11 && level <= 20;
  };
  var syncMovementArea = function syncMovementArea() {
    var movementLayout = (0, _layout.getMovementLayout)(ctx);
    var slotGap = 10;
    var slotSize = player.width;
    var answerCount = 10;
    var answerZoneWidth = answerCount * slotSize + (answerCount - 1) * slotGap;
    var answerZoneX = movementLayout.gameFrameX + (movementLayout.gameFrameWidth - answerZoneWidth) / 2;
    var answerZoneY = movementLayout.gameFrameY + 28;
    gc.answerSlots = Array.from({
      length: answerCount
    }, function (_, index) {
      return {
        x: answerZoneX + index * (slotSize + slotGap),
        y: answerZoneY,
        size: slotSize,
        block: null
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
    var _gc$movementArea = gc.movementArea,
      x = _gc$movementArea.x,
      y = _gc$movementArea.y,
      width = _gc$movementArea.width,
      height = _gc$movementArea.height;
    var size = player.width;
    var startX = x + width * 0.18;
    var startY = y + height * 0.22;
    return [new _NormalBlock.NormalBlock(startX, startY, size, "#ffffff", "A"), new _NormalBlock.NormalBlock(startX + size * 2.2, startY, size, "#ffffff", "B"), new _NormalBlock.NormalBlock(startX + size * 4.4, startY, size, "#ffffff", "7"), new _NormalBlock.NormalBlock(startX + size * 1.1, startY + size * 2.1, size, "#ffffff", "C"), new _NormalBlock.NormalBlock(startX + size * 3.5, startY + size * 2.1, size, "#ffffff", "5")];
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
    var currentAnswer = gc.getCurrentAnswer();
    if (currentAnswer !== gc.quizAnswer) {
      gc.loseLife();
      needsMovementReset = true;
      gc.timeLeftSeconds = 30;
      lastTimerTick = performance.now();
      gc.render();
      return;
    }
    if (gc.state.currentLevel < 20) {
      gc.state.currentLevel++;
      needsMovementReset = true;
      gc.timeLeftSeconds = 30;
      lastTimerTick = performance.now();
      gc.render();
      return;
    }
    gc.state.currentScreen = "levelselect";
    gc.render();
  };
  var syncMovementScene = function syncMovementScene() {
    var resetScene = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    syncMovementArea();
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
      syncMovementScene(enteringMovementLevel || gc.blocks.length === 0 || needsMovementReset);
      needsMovementReset = false;
    } else {
      gc.blocks = [];
      gc.answerSlots = [];
      player.setBlocks([]);
      player.setAnswerSlots([]);
      gc.timeLeftSeconds = 30;
      lastTimerTick = performance.now();
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
  gc.logo.src = "/benchmark2/assets/logo.png";
  gc.gameplayFrame.src = "/benchmark2/assets/gameplay-frame.png";
  resizeCanvases();
  gc.render();
  var _gameLoop = function gameLoop() {
    var movementLevelActive = gc.state.currentScreen === "level" && isMovementLevel(gc.state.currentLevel);
    if (movementLevelActive && !gc.state.paused && !gc.state.controlsOpen && !gc.state.gameOver) {
      var now = performance.now();
      if (now - lastTimerTick >= 1000) {
        var elapsedSeconds = Math.floor((now - lastTimerTick) / 1000);
        gc.timeLeftSeconds = Math.max(0, gc.timeLeftSeconds - elapsedSeconds);
        lastTimerTick += elapsedSeconds * 1000;
        if (gc.timeLeftSeconds === 0) {
          gc.loseLife();
          needsMovementReset = true;
          gc.timeLeftSeconds = 30;
          lastTimerTick = performance.now();
        }
      }
      input.update();
      player.update();
      gc.render();
    } else {
      lastTimerTick = performance.now();
    }
    requestAnimationFrame(_gameLoop);
  };
  _gameLoop();
};

},{"../Helpers/Events/EventEmitter":2,"../Helpers/InputManager":4,"../Helpers/PlayerControl":5,"../Helpers/objects/NormalBlock":7,"./layout":8,"./overlays/ControlsOverlay":14,"./overlays/GameOverOverlay":15,"./overlays/PauseOverlay":16,"./renderer":17,"./screens/Level":18,"./screens/LevelSelect":19,"./screens/MainMenu":20}],14:[function(require,module,exports){
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

},{"../layout":8,"../renderer":17,"../theme":21}],15:[function(require,module,exports){
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

},{"../layout":8,"../renderer":17}],16:[function(require,module,exports){
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

},{"../layout":8,"../renderer":17,"../theme":21}],17:[function(require,module,exports){
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
    ctx.fillText("Quiz: spell ".concat(gc.quizAnswer, " in the answer zone."), 28, movementLayout.bottomFrameY + 62, movementLayout.bottomFrameWidth * 0.56);
    ctx.font = "15px ".concat(bodyFont);
    ctx.fillStyle = t.fg;
    ctx.fillText("Current Answer: ".concat(currentAnswer), 28, movementLayout.bottomFrameY + 102, movementLayout.bottomFrameWidth * 0.52);
    ctx.fillStyle = timerColor;
    ctx.fillText("Time Left: ".concat(timerText), 28, movementLayout.bottomFrameY + 130, 180);
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

},{"./layout":8,"./levelData":9,"./theme":21}],18:[function(require,module,exports){
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

},{"../layout":8,"../levelData":9,"../levels/Level1":10,"../levels/Level2":11,"../levels/Level3":12,"../renderer":17,"../theme":21}],19:[function(require,module,exports){
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

},{"../layout":8,"../levelData":9,"../renderer":17,"../theme":21}],20:[function(require,module,exports){
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

},{"../layout":8,"../renderer":17,"../theme":21}],21:[function(require,module,exports){
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

},{}]},{},[13])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9FdmVudHMvRXZlbnQudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9FdmVudHMvRXZlbnRFbWl0dGVyLnRzIiwib3V0c2lkZS10aGUtYm94L0hlbHBlcnMvRXZlbnRzL0V2ZW50TGlzdGVuZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9JbnB1dE1hbmFnZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9QbGF5ZXJDb250cm9sLnRzIiwib3V0c2lkZS10aGUtYm94L0hlbHBlcnMvb2JqZWN0cy9CbG9jay50cyIsIm91dHNpZGUtdGhlLWJveC9IZWxwZXJzL29iamVjdHMvTm9ybWFsQmxvY2sudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sYXlvdXQudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbERhdGEudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbHMvTGV2ZWwxLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxzL0xldmVsMi50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVscy9MZXZlbDMudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9tYWluLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvQ29udHJvbHNPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvUGF1c2VPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvcmVuZGVyZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9zY3JlZW5zL0xldmVsLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvc2NyZWVucy9MZXZlbFNlbGVjdC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3NjcmVlbnMvTWFpbk1lbnUudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBQUEsSUFFWSxTQUFTLEdBQUEsT0FBQSxDQUFBLFNBQUEsMEJBQVQsU0FBUztFQUFULFNBQVM7RUFBVCxTQUFTO0VBQVQsU0FBUztFQUFBLE9BQVQsU0FBUztBQUFBLE9BTXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQSxJQUlhLFlBQVksR0FBQSxPQUFBLENBQUEsWUFBQTtFQUFBLFNBQUEsYUFBQTtJQUFBLGVBQUEsT0FBQSxZQUFBO0lBQUEsZUFBQSxvQkFDNkIsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUFBO0VBQUEsT0FBQSxZQUFBLENBQUEsWUFBQTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBRTNELFNBQU8sRUFBRSxDQUFJLEtBQWEsRUFBRSxRQUEwQixFQUFFO01BQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQ2pDO01BQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM3QztFQUFDO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFFRCxTQUFPLEdBQUcsQ0FBSSxLQUFhLEVBQUUsUUFBMEIsRUFBRTtNQUNyRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDM0MsSUFBSSxDQUFDLFNBQVMsRUFBRTtNQUVoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDZCxLQUFLLEVBQ0wsU0FBUyxD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QSxDQUFBLHVCQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsWUFBQSxFQUFBLGVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLElBQUEsV0FBQSxJQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxXQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxFQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxjQUFBLENBQUEsOEJBQUEsQ0FBQSxRQUFBLENBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSwyQkFBQSxDQUFBLFNBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLDZCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxvQkFBQSxDQUFBLCtDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsa0JBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxDQUFBLGFBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLENBQUEsWUFBQSxrQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxjQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxpQkFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLGlCQUFBLFFBQUEsU0FBQSxDQUFBO0FBQUEsU0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxlQUFBLENBQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsQ0FBQSxFQUFBLHlCQUFBLEtBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLEVB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QUFBLENBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxJQUFBLFdBQUEsSUFBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLDhCQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsMkJBQUEsQ0FBQSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSw2QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSwrQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGtCQUFB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c0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIEV2ZW50cy50c1xyXG5cclxuZXhwb3J0IGVudW0gR2FtZUV2ZW50IHtcclxuICAgIE1PVkUgPSBcIk1PVkVcIixcclxuICAgIERBU0ggPSBcIkRBU0hcIixcclxuICAgIEhPTEQgPSBcIkhPTERcIlxyXG59XHJcblxyXG4vLyBQYXlsb2FkIHR5cGVzIGZvciBlYWNoIGV2ZW50XHJcbmV4cG9ydCBpbnRlcmZhY2UgTW92ZUV2ZW50UGF5bG9hZCB7XHJcbiAgICBkeDogbnVtYmVyO1xyXG4gICAgZHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXNoRXZlbnRQYXlsb2FkIHt9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhvbGRFdmVudFBheWxvYWQge30iLCIvLyBFdmVudEVtaXR0ZXIudHNcclxuXHJcbnR5cGUgRXZlbnRDYWxsYmFjazxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2ZW50RW1pdHRlciB7XHJcbiAgICBwcml2YXRlIGxpc3RlbmVyczogTWFwPHN0cmluZywgRXZlbnRDYWxsYmFja1tdPiA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICBwdWJsaWMgb248VD4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2s8VD4pIHtcclxuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhldmVudCkpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KGV2ZW50LCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmY8VD4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2s8VD4pIHtcclxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpO1xyXG4gICAgICAgIGlmICghY2FsbGJhY2tzKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChcclxuICAgICAgICAgICAgZXZlbnQsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrcy5maWx0ZXIoY2IgPT4gY2IgIT09IGNhbGxiYWNrKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVtaXQ8VD4oZXZlbnQ6IHN0cmluZywgcGF5bG9hZDogVCkge1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMubGlzdGVuZXJzLmdldChldmVudCk7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjYiBvZiBjYWxsYmFja3MpIHtcclxuICAgICAgICAgICAgY2IocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gRXZlbnRMaXN0ZW5lci50c1xyXG5cclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vRXZlbnRFbWl0dGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lciB7XHJcbiAgICBwcm90ZWN0ZWQgZW1pdHRlcjogRXZlbnRFbWl0dGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcikge1xyXG4gICAgICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGxpc3RlbjxUPihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKHBheWxvYWQ6IFQpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIub24oZXZlbnQsIGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RvcExpc3RlbmluZzxUPihldmVudDogc3RyaW5nLCBjYWxsYmFjazogKHBheWxvYWQ6IFQpID0+IHZvaWQpIHtcclxuICAgICAgICB0aGlzLmVtaXR0ZXIub2ZmKGV2ZW50LCBjYWxsYmFjayk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi9FdmVudHMvRXZlbnRFbWl0dGVyXCI7XG5pbXBvcnQgeyBHYW1lRXZlbnQgfSBmcm9tIFwiLi9FdmVudHMvRXZlbnQudHNcIjtcblxuZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlciB7XG4gICAgcHJpdmF0ZSBrZXlzOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xuICAgIHByaXZhdGUgZW1pdHRlcjogRXZlbnRFbWl0dGVyO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbW92ZW1lbnRLZXlzID0gbmV3IFNldChbXCJ3XCIsIFwiYVwiLCBcInNcIiwgXCJkXCIsIFwiIFwiLCBcImhcIl0pO1xuXG4gICAgY29uc3RydWN0b3IoZW1pdHRlcjogRXZlbnRFbWl0dGVyKSB7XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB0aGlzLm9uS2V5RG93bihlKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHRoaXMub25LZXlVcChlKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHdhc1ByZXNzZWQgPSB0aGlzLmtleXNba2V5XSA9PT0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rZXlzW2tleV0gPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50S2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghd2FzUHJlc3NlZCkge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChHYW1lRXZlbnQuREFTSCwge30pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcImhcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KEdhbWVFdmVudC5IT0xELCB7fSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5VXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQua2V5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHRoaXMua2V5c1trZXldID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnRLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcbiAgICAgICAgbGV0IGR4ID0gMDtcbiAgICAgICAgbGV0IGR5ID0gMDtcblxuICAgICAgICBpZiAodGhpcy5rZXlzW1wid1wiXSkgZHkgLT0gMTtcbiAgICAgICAgaWYgKHRoaXMua2V5c1tcInNcIl0pIGR5ICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJhXCJdKSBkeCAtPSAxO1xuICAgICAgICBpZiAodGhpcy5rZXlzW1wiZFwiXSkgZHggKz0gMTtcblxuICAgICAgICBpZiAoZHggIT09IDAgfHwgZHkgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KEdhbWVFdmVudC5NT1ZFLCB7IGR4LCBkeSB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9FdmVudHMvRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vRXZlbnRzL0V2ZW50RW1pdHRlclwiO1xuaW1wb3J0IHsgR2FtZUV2ZW50LCBNb3ZlRXZlbnRQYXlsb2FkIH0gZnJvbSBcIi4vRXZlbnRzL0V2ZW50LnRzXCI7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCIuL29iamVjdHMvQmxvY2tcIjtcbmltcG9ydCB0eXBlIHsgQW5zd2VyU2xvdEVudGl0eSB9IGZyb20gXCIuLi9iZW5jaG1hcmsyL3R5cGVzXCI7XG5cbnR5cGUgRGlyZWN0aW9uID0gXCJ1cFwiIHwgXCJkb3duXCIgfCBcImxlZnRcIiB8IFwicmlnaHRcIjtcblxudHlwZSBCb3VuZHMgPSB7XG4gICAgbWluWDogbnVtYmVyO1xuICAgIG1heFg6IG51bWJlcjtcbiAgICBtaW5ZOiBudW1iZXI7XG4gICAgbWF4WTogbnVtYmVyO1xufTtcblxuZXhwb3J0IGNsYXNzIFBsYXllckNvbnRyb2wgZXh0ZW5kcyBFdmVudExpc3RlbmVyIHtcbiAgICBwdWJsaWMgeCA9IDA7XG4gICAgcHVibGljIHkgPSAwO1xuICAgIHB1YmxpYyByZWFkb25seSB3aWR0aCA9IDQ4O1xuICAgIHB1YmxpYyByZWFkb25seSBoZWlnaHQgPSA0ODtcblxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWQgPSA1O1xuICAgIHByaXZhdGUgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBcImRvd25cIjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZXM6IFJlY29yZDxEaXJlY3Rpb24sIEhUTUxJbWFnZUVsZW1lbnQ+O1xuICAgIHByaXZhdGUgYm91bmRzOiBCb3VuZHMgPSB7XG4gICAgICAgIG1pblg6IDAsXG4gICAgICAgIG1heFg6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICAgICAgbWluWTogMCxcbiAgICAgICAgbWF4WTogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgIH07XG4gICAgcHJpdmF0ZSBibG9ja3M6IEJsb2NrW10gPSBbXTtcbiAgICBwcml2YXRlIGFuc3dlclNsb3RzOiBBbnN3ZXJTbG90RW50aXR5W10gPSBbXTtcbiAgICBwcml2YXRlIGhlbGRCbG9jazogQmxvY2sgfCBudWxsID0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcikge1xuICAgICAgICBzdXBlcihlbWl0dGVyKTtcblxuICAgICAgICB0aGlzLnNwcml0ZXMgPSB7XG4gICAgICAgICAgICB1cDogdGhpcy5sb2FkU3ByaXRlKFwiL2JlbmNobWFyazIvYXNzZXRzL3BsYXllci9QbGF5ZXJfVXAucG5nXCIpLFxuICAgICAgICAgICAgZG93bjogdGhpcy5sb2FkU3ByaXRlKFwiL2JlbmNobWFyazIvYXNzZXRzL3BsYXllci9QbGF5ZXJfRG93bi5wbmdcIiksXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLmxvYWRTcHJpdGUoXCIvYmVuY2htYXJrMi9hc3NldHMvcGxheWVyL1BsYXllcl9MZWZ0LnBuZ1wiKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLmxvYWRTcHJpdGUoXCIvYmVuY2htYXJrMi9hc3NldHMvcGxheWVyL1BsYXllcl9SaWdodC5wbmdcIiksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy54ID0gNDAwO1xuICAgICAgICB0aGlzLnkgPSAzMDA7XG5cbiAgICAgICAgdGhpcy5saXN0ZW48TW92ZUV2ZW50UGF5bG9hZD4oR2FtZUV2ZW50Lk1PVkUsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuKEdhbWVFdmVudC5IT0xELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUhvbGQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSgpIHt9XG5cbiAgICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLnNwcml0ZXNbdGhpcy5kaXJlY3Rpb25dO1xuXG4gICAgICAgIGlmIChzcHJpdGUuY29tcGxldGUgJiYgc3ByaXRlLm5hdHVyYWxXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2Uoc3ByaXRlLCB0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiI2U1MzkzNVwiO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Qm91bmRzKG1pblg6IG51bWJlciwgbWluWTogbnVtYmVyLCBtYXhYOiBudW1iZXIsIG1heFk6IG51bWJlcikge1xuICAgICAgICB0aGlzLmJvdW5kcyA9IHsgbWluWCwgbWluWSwgbWF4WCwgbWF4WSB9O1xuICAgICAgICB0aGlzLmNsYW1wVG9Cb3VuZHMoKTtcblxuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGhlbGRQb3NpdGlvbiA9IHRoaXMuZ2V0SGVsZEJsb2NrUG9zaXRpb24odGhpcy54LCB0aGlzLnksIHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuaGVsZEJsb2NrLm1vdmVUbyhoZWxkUG9zaXRpb24ueCwgaGVsZFBvc2l0aW9uLnkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldEJsb2NrcyhibG9ja3M6IEJsb2NrW10pIHtcbiAgICAgICAgdGhpcy5ibG9ja3MgPSBibG9ja3M7XG5cbiAgICAgICAgaWYgKHRoaXMuaGVsZEJsb2NrICYmICFibG9ja3MuaW5jbHVkZXModGhpcy5oZWxkQmxvY2spKSB7XG4gICAgICAgICAgICB0aGlzLmhlbGRCbG9jayA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QW5zd2VyU2xvdHMoc2xvdHM6IEFuc3dlclNsb3RFbnRpdHlbXSkge1xuICAgICAgICB0aGlzLmFuc3dlclNsb3RzID0gc2xvdHM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIsIGRpcmVjdGlvbjogRGlyZWN0aW9uID0gXCJkb3duXCIpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVsZEJsb2NrKSB7XG4gICAgICAgICAgICB0aGlzLmRldGFjaEhlbGRCbG9jaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuY2xhbXBUb0JvdW5kcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRGYWNpbmdEaXJlY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRTcHJpdGUoc3JjOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qgc3ByaXRlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHNwcml0ZS5zcmMgPSBzcmM7XG4gICAgICAgIHJldHVybiBzcHJpdGU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZlKGRhdGE6IE1vdmVFdmVudFBheWxvYWQpIHtcbiAgICAgICAgY29uc3QgbmV4dERpcmVjdGlvbiA9IHRoaXMucmVzb2x2ZURpcmVjdGlvbihkYXRhKTtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXh0RGlyZWN0aW9uO1xuXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVggPSB0aGlzLmNsYW1wVmFsdWUodGhpcy54ICsgZGF0YS5keCAqIHRoaXMuc3BlZWQsIHRoaXMuYm91bmRzLm1pblgsIHRoaXMuYm91bmRzLm1heFgpO1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVZID0gdGhpcy5jbGFtcFZhbHVlKHRoaXMueSArIGRhdGEuZHkgKiB0aGlzLnNwZWVkLCB0aGlzLmJvdW5kcy5taW5ZLCB0aGlzLmJvdW5kcy5tYXhZKTtcbiAgICAgICAgY29uc3Qgb3RoZXJCbG9ja3MgPSB0aGlzLmJsb2Nrcy5maWx0ZXIoKGJsb2NrKSA9PiBibG9jayAhPT0gdGhpcy5oZWxkQmxvY2spO1xuXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGVzV2l0aEFueUJsb2NrKGNhbmRpZGF0ZVgsIGNhbmRpZGF0ZVksIG90aGVyQmxvY2tzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaGVsZEJsb2NrKSB7XG4gICAgICAgICAgICBjb25zdCBoZWxkUG9zaXRpb24gPSB0aGlzLmdldEhlbGRCbG9ja1Bvc2l0aW9uKGNhbmRpZGF0ZVgsIGNhbmRpZGF0ZVksIG5leHREaXJlY3Rpb24pO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjdEZpdHNCb3VuZHMoaGVsZFBvc2l0aW9uLngsIGhlbGRQb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpZGVzV2l0aEFueUJsb2NrKGhlbGRQb3NpdGlvbi54LCBoZWxkUG9zaXRpb24ueSwgb3RoZXJCbG9ja3MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmNsZWFyQW5zd2VyU2xvdEZvckJsb2NrKHRoaXMuaGVsZEJsb2NrKTtcbiAgICAgICAgICAgIHRoaXMueCA9IGNhbmRpZGF0ZVg7XG4gICAgICAgICAgICB0aGlzLnkgPSBjYW5kaWRhdGVZO1xuICAgICAgICAgICAgdGhpcy5oZWxkQmxvY2subW92ZVRvKGhlbGRQb3NpdGlvbi54LCBoZWxkUG9zaXRpb24ueSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSBjYW5kaWRhdGVYO1xuICAgICAgICB0aGlzLnkgPSBjYW5kaWRhdGVZO1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlSG9sZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVsZEJsb2NrKSB7XG4gICAgICAgICAgICBjb25zdCByZWxlYXNlU2xvdCA9IHRoaXMuZ2V0SW50ZXJzZWN0aW5nRW1wdHlBbnN3ZXJTbG90KHRoaXMuaGVsZEJsb2NrKTtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyQmxvY2tzID0gdGhpcy5ibG9ja3MuZmlsdGVyKChjYW5kaWRhdGUpID0+IGNhbmRpZGF0ZSAhPT0gdGhpcy5oZWxkQmxvY2spO1xuXG4gICAgICAgICAgICBpZiAocmVsZWFzZVNsb3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQW5zd2VyU2xvdEZvckJsb2NrKHRoaXMuaGVsZEJsb2NrKTtcbiAgICAgICAgICAgICAgICByZWxlYXNlU2xvdC5ibG9jayA9IHRoaXMuaGVsZEJsb2NrO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVsZEJsb2NrLm1vdmVUbyhyZWxlYXNlU2xvdC54LCByZWxlYXNlU2xvdC55KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGFjaEhlbGRCbG9jaygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlkZXNXaXRoQW55QmxvY2sodGhpcy5oZWxkQmxvY2sueCwgdGhpcy5oZWxkQmxvY2sueSwgb3RoZXJCbG9ja3MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVjdEZpdHNCb3VuZHModGhpcy5oZWxkQmxvY2sueCwgdGhpcy5oZWxkQmxvY2sueSwgdGhpcy5oZWxkQmxvY2suc2l6ZSwgdGhpcy5oZWxkQmxvY2suc2l6ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZGV0YWNoSGVsZEJsb2NrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBibG9jayA9IHRoaXMuZmluZE5lYXJieUZhY2luZ0Jsb2NrKCk7XG4gICAgICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhlbGRQb3NpdGlvbiA9IHRoaXMuZ2V0SGVsZEJsb2NrUG9zaXRpb24odGhpcy54LCB0aGlzLnksIHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgY29uc3Qgb3RoZXJCbG9ja3MgPSB0aGlzLmJsb2Nrcy5maWx0ZXIoKGNhbmRpZGF0ZSkgPT4gY2FuZGlkYXRlICE9PSBibG9jayk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnJlY3RGaXRzQm91bmRzKGhlbGRQb3NpdGlvbi54LCBoZWxkUG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlc1dpdGhBbnlCbG9jayhoZWxkUG9zaXRpb24ueCwgaGVsZFBvc2l0aW9uLnksIG90aGVyQmxvY2tzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jbGVhckFuc3dlclNsb3RGb3JCbG9jayhibG9jayk7XG4gICAgICAgIHRoaXMuaGVsZEJsb2NrID0gYmxvY2s7XG4gICAgICAgIGJsb2NrLnNldEhlbGQodHJ1ZSk7XG4gICAgICAgIGJsb2NrLm1vdmVUbyhoZWxkUG9zaXRpb24ueCwgaGVsZFBvc2l0aW9uLnkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZmluZE5lYXJieUZhY2luZ0Jsb2NrKCkge1xuICAgICAgICBjb25zdCB0aHJlc2hvbGQgPSB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgcGxheWVyQ2VudGVyWCA9IHRoaXMueCArIHRoaXMud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBwbGF5ZXJDZW50ZXJZID0gdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyO1xuXG4gICAgICAgIGxldCBjbG9zZXN0QmxvY2s6IEJsb2NrIHwgbnVsbCA9IG51bGw7XG4gICAgICAgIGxldCBjbG9zZXN0RGlzdGFuY2UgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgICAgZm9yIChjb25zdCBibG9jayBvZiB0aGlzLmJsb2Nrcykge1xuICAgICAgICAgICAgaWYgKGJsb2NrLmhlbGQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYmxvY2tDZW50ZXJYID0gYmxvY2sueCArIGJsb2NrLnNpemUgLyAyO1xuICAgICAgICAgICAgY29uc3QgYmxvY2tDZW50ZXJZID0gYmxvY2sueSArIGJsb2NrLnNpemUgLyAyO1xuICAgICAgICAgICAgY29uc3QgaG9yaXpvbnRhbERpc3RhbmNlID0gTWF0aC5hYnMoYmxvY2tDZW50ZXJYIC0gcGxheWVyQ2VudGVyWCk7XG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNhbERpc3RhbmNlID0gTWF0aC5hYnMoYmxvY2tDZW50ZXJZIC0gcGxheWVyQ2VudGVyWSk7XG5cbiAgICAgICAgICAgIGxldCBkaXN0YW5jZSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiBibG9jay55ID49IHRoaXMueSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkZ2VHYXAgPSBibG9jay55IC0gKHRoaXMueSArIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbERpc3RhbmNlIDw9IHRocmVzaG9sZCAmJiBlZGdlR2FwID49IDAgJiYgZWRnZUdhcCA8IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGVkZ2VHYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwidXBcIiAmJiBibG9jay55ICsgYmxvY2suc2l6ZSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkZ2VHYXAgPSB0aGlzLnkgLSAoYmxvY2sueSArIGJsb2NrLnNpemUpO1xuICAgICAgICAgICAgICAgIGlmIChob3Jpem9udGFsRGlzdGFuY2UgPD0gdGhyZXNob2xkICYmIGVkZ2VHYXAgPj0gMCAmJiBlZGdlR2FwIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gZWRnZUdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIGJsb2NrLnggPj0gdGhpcy54KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRnZUdhcCA9IGJsb2NrLnggLSAodGhpcy54ICsgdGhpcy53aWR0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHZlcnRpY2FsRGlzdGFuY2UgPD0gdGhyZXNob2xkICYmIGVkZ2VHYXAgPj0gMCAmJiBlZGdlR2FwIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gZWRnZUdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgYmxvY2sueCArIGJsb2NrLnNpemUgPD0gdGhpcy54ICsgdGhpcy53aWR0aCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkZ2VHYXAgPSB0aGlzLnggLSAoYmxvY2sueCArIGJsb2NrLnNpemUpO1xuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbERpc3RhbmNlIDw9IHRocmVzaG9sZCAmJiBlZGdlR2FwID49IDAgJiYgZWRnZUdhcCA8IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGVkZ2VHYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBjbG9zZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICBjbG9zZXN0QmxvY2sgPSBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0QmxvY2s7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIZWxkQmxvY2tQb3NpdGlvbihwbGF5ZXJYOiBudW1iZXIsIHBsYXllclk6IG51bWJlciwgZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHBsYXllclgsIHk6IHBsYXllclkgLSB0aGlzLmhlaWdodCB9O1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBwbGF5ZXJYLCB5OiBwbGF5ZXJZICsgdGhpcy5oZWlnaHQgfTtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogcGxheWVyWCAtIHRoaXMud2lkdGgsIHk6IHBsYXllclkgfTtcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHBsYXllclggKyB0aGlzLndpZHRoLCB5OiBwbGF5ZXJZIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlc29sdmVEaXJlY3Rpb24oZGF0YTogTW92ZUV2ZW50UGF5bG9hZCk6IERpcmVjdGlvbiB7XG4gICAgICAgIGlmIChkYXRhLmR4ID4gMCkgcmV0dXJuIFwicmlnaHRcIjtcbiAgICAgICAgaWYgKGRhdGEuZHggPCAwKSByZXR1cm4gXCJsZWZ0XCI7XG4gICAgICAgIGlmIChkYXRhLmR5ID4gMCkgcmV0dXJuIFwiZG93blwiO1xuICAgICAgICByZXR1cm4gXCJ1cFwiO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SW50ZXJzZWN0aW5nRW1wdHlBbnN3ZXJTbG90KGJsb2NrOiBCbG9jaykge1xuICAgICAgICBjb25zdCBibG9ja0NlbnRlclggPSBibG9jay54ICsgYmxvY2suc2l6ZSAvIDI7XG4gICAgICAgIGNvbnN0IGJsb2NrQ2VudGVyWSA9IGJsb2NrLnkgKyBibG9jay5zaXplIC8gMjtcblxuICAgICAgICByZXR1cm4gdGhpcy5hbnN3ZXJTbG90cy5maW5kKChzbG90KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvY2N1cGllZEJ5T3RoZXJCbG9jayA9IHNsb3QuYmxvY2sgIT09IG51bGwgJiYgc2xvdC5ibG9jayAhPT0gYmxvY2s7XG4gICAgICAgICAgICBpZiAob2NjdXBpZWRCeU90aGVyQmxvY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgYmxvY2tDZW50ZXJYID49IHNsb3QueCAmJlxuICAgICAgICAgICAgICAgIGJsb2NrQ2VudGVyWCA8PSBzbG90LnggKyBzbG90LnNpemUgJiZcbiAgICAgICAgICAgICAgICBibG9ja0NlbnRlclkgPj0gc2xvdC55ICYmXG4gICAgICAgICAgICAgICAgYmxvY2tDZW50ZXJZIDw9IHNsb3QueSArIHNsb3Quc2l6ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSkgPz8gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsZWFyQW5zd2VyU2xvdEZvckJsb2NrKGJsb2NrOiBCbG9jaykge1xuICAgICAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgdGhpcy5hbnN3ZXJTbG90cykge1xuICAgICAgICAgICAgaWYgKHNsb3QuYmxvY2sgPT09IGJsb2NrKSB7XG4gICAgICAgICAgICAgICAgc2xvdC5ibG9jayA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRldGFjaEhlbGRCbG9jaygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlbGRCbG9jaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oZWxkQmxvY2suc2V0SGVsZChmYWxzZSk7XG4gICAgICAgIHRoaXMuaGVsZEJsb2NrID0gbnVsbDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbGxpZGVzV2l0aEFueUJsb2NrKHg6IG51bWJlciwgeTogbnVtYmVyLCBibG9ja3M6IEJsb2NrW10pIHtcbiAgICAgICAgcmV0dXJuIGJsb2Nrcy5zb21lKChibG9jaykgPT4gYmxvY2suY29sbGlkZXNXaXRoUmVjdCh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVjdEZpdHNCb3VuZHMoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB4ID49IHRoaXMuYm91bmRzLm1pblggJiZcbiAgICAgICAgICAgIHkgPj0gdGhpcy5ib3VuZHMubWluWSAmJlxuICAgICAgICAgICAgeCArIHdpZHRoIDw9IHRoaXMuYm91bmRzLm1heFggKyB3aWR0aCAmJlxuICAgICAgICAgICAgeSArIGhlaWdodCA8PSB0aGlzLmJvdW5kcy5tYXhZICsgaGVpZ2h0XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGFtcFRvQm91bmRzKCkge1xuICAgICAgICB0aGlzLnggPSB0aGlzLmNsYW1wVmFsdWUodGhpcy54LCB0aGlzLmJvdW5kcy5taW5YLCB0aGlzLmJvdW5kcy5tYXhYKTtcbiAgICAgICAgdGhpcy55ID0gdGhpcy5jbGFtcFZhbHVlKHRoaXMueSwgdGhpcy5ib3VuZHMubWluWSwgdGhpcy5ib3VuZHMubWF4WSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGFtcFZhbHVlKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIG1pbiksIG1heCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IHR5cGUgQmxvY2tUeXBlID0gXCJub3JtYWxcIjtcblxuY29uc3QgaXNWYWxpZFZhbHVlID0gKHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoL15bYS16XSQvaS50ZXN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoL15cXGR7MSwyfSQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcih2YWx1ZSk7XG4gICAgICAgIHJldHVybiBudW1lcmljVmFsdWUgPj0gMCAmJiBudW1lcmljVmFsdWUgPD0gOTk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJsb2NrIHtcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xuICAgIHB1YmxpYyB5OiBudW1iZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IHNpemU6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29sb3I6IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZG9ubHkgdHlwZTogQmxvY2tUeXBlO1xuICAgIHB1YmxpYyBoZWxkID0gZmFsc2U7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IodHlwZTogQmxvY2tUeXBlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IGAke3ZhbHVlfWAudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCFpc1ZhbGlkVmFsdWUobm9ybWFsaXplZFZhbHVlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGJsb2NrIHZhbHVlIFwiJHt2YWx1ZX1cIi4gQmxvY2tzIG11c3QgdXNlIG9uZSBsZXR0ZXIgb3IgYSBudW1iZXIgZnJvbSAwIHRvIDk5LmApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLnZhbHVlID0gbm9ybWFsaXplZFZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcblxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmhlbGQgPyBcIiMzYTNhM2FcIiA6IFwiIzExMTExMVwiO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5oZWxkID8gMyA6IDI7XG4gICAgICAgIGN0eC5zdHJva2VSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG5cbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzExMTExMVwiO1xuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgICAgIGN0eC5mb250ID0gYGJvbGQgJHtNYXRoLm1heCgxOCwgTWF0aC5mbG9vcih0aGlzLnNpemUgKiAwLjQyKSl9cHggXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZmA7XG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnZhbHVlLCB0aGlzLnggKyB0aGlzLnNpemUgLyAyLCB0aGlzLnkgKyB0aGlzLnNpemUgLyAyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29sbGlkZXNXaXRoUmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHggPCB0aGlzLnggKyB0aGlzLnNpemUgJiZcbiAgICAgICAgICAgIHggKyB3aWR0aCA+IHRoaXMueCAmJlxuICAgICAgICAgICAgeSA8IHRoaXMueSArIHRoaXMuc2l6ZSAmJlxuICAgICAgICAgICAgeSArIGhlaWdodCA+IHRoaXMueVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlVG8oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SGVsZChoZWxkOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuaGVsZCA9IGhlbGQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwiLi9CbG9ja1wiO1xuXG5leHBvcnQgY2xhc3MgTm9ybWFsQmxvY2sgZXh0ZW5kcyBCbG9jayB7XG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNpemU6IG51bWJlciwgY29sb3I6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICBzdXBlcihcIm5vcm1hbFwiLCB4LCB5LCBzaXplLCBjb2xvciwgdmFsdWUpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjb25zdCBnZXRMYXlvdXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgY29uc3QgdyA9IGN0eC5jYW52YXMud2lkdGg7XG4gIGNvbnN0IGggPSBjdHguY2FudmFzLmhlaWdodDtcblxuICBjb25zdCBjb250ZW50V2lkdGggPSB3ICogMC44NDtcbiAgY29uc3QgY29udGVudFggPSAodyAtIGNvbnRlbnRXaWR0aCkgLyAyO1xuICBjb25zdCBsb2dvWSA9IGggKiAwLjA4O1xuXG4gIGNvbnN0IHRvcEJveFdpZHRoID0gY29udGVudFdpZHRoO1xuICBjb25zdCB0b3BCb3hIZWlnaHQgPSBoICogMC40ODtcbiAgY29uc3QgdG9wQm94WCA9IGNvbnRlbnRYO1xuICBjb25zdCB0b3BCb3hZID0gaCAqIDAuMTg7XG5cbiAgY29uc3QgdG9wSW5uZXJXaWR0aCA9IHRvcEJveFdpZHRoICogMC40MjtcbiAgY29uc3QgdG9wSW5uZXJIZWlnaHQgPSB0b3BCb3hIZWlnaHQgKiAwLjYyO1xuICBjb25zdCB0b3BJbm5lclggPSB3IC8gMiAtIHRvcElubmVyV2lkdGggLyAyO1xuICBjb25zdCB0b3BJbm5lclkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNjtcblxuICBjb25zdCBtb3ZlbWVudEFyZWFXaWR0aCA9IHRvcEJveFdpZHRoICogMC40MjtcbiAgY29uc3QgbW92ZW1lbnRBcmVhSGVpZ2h0ID0gdG9wQm94SGVpZ2h0ICogMC42MjtcbiAgY29uc3QgbW92ZW1lbnRBcmVhWCA9IHRvcElubmVyWDtcbiAgY29uc3QgbW92ZW1lbnRBcmVhWSA9IHRvcElubmVyWTtcblxuICBjb25zdCBnYXAgPSBoICogMC4wNDtcbiAgY29uc3QgYm90dG9tQm94WSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKyBnYXA7XG4gIGNvbnN0IGJvdHRvbUJveEhlaWdodCA9IGggKiAwLjIyO1xuXG4gIHJldHVybiB7XG4gICAgdyxcbiAgICBoLFxuICAgIGNvbnRlbnRXaWR0aCxcbiAgICBjb250ZW50WCxcbiAgICBsb2dvWSxcbiAgICB0b3BCb3hYLFxuICAgIHRvcEJveFksXG4gICAgdG9wQm94V2lkdGgsXG4gICAgdG9wQm94SGVpZ2h0LFxuICAgIHRvcElubmVyWCxcbiAgICB0b3BJbm5lclksXG4gICAgdG9wSW5uZXJXaWR0aCxcbiAgICB0b3BJbm5lckhlaWdodCxcbiAgICBtb3ZlbWVudEFyZWFYLFxuICAgIG1vdmVtZW50QXJlYVksXG4gICAgbW92ZW1lbnRBcmVhV2lkdGgsXG4gICAgbW92ZW1lbnRBcmVhSGVpZ2h0LFxuICAgIGJvdHRvbUJveFksXG4gICAgYm90dG9tQm94SGVpZ2h0LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmVtZW50TGF5b3V0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gIGNvbnN0IHcgPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBoID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG5cbiAgY29uc3QgZ2FtZUZyYW1lWCA9IDA7XG4gIGNvbnN0IGdhbWVGcmFtZVkgPSAwO1xuICBjb25zdCBnYW1lRnJhbWVXaWR0aCA9IHc7XG4gIGNvbnN0IGdhbWVGcmFtZUhlaWdodCA9IGggKiAwLjc7XG5cbiAgY29uc3QgYm90dG9tRnJhbWVYID0gMDtcbiAgY29uc3QgYm90dG9tRnJhbWVZID0gZ2FtZUZyYW1lSGVpZ2h0O1xuICBjb25zdCBib3R0b21GcmFtZVdpZHRoID0gdztcbiAgY29uc3QgYm90dG9tRnJhbWVIZWlnaHQgPSBoIC0gZ2FtZUZyYW1lSGVpZ2h0O1xuXG4gIGNvbnN0IGZyYW1lUGFkZGluZ1ggPSAyNDtcbiAgY29uc3QgZnJhbWVQYWRkaW5nVG9wID0gMjQ7XG4gIGNvbnN0IGZyYW1lUGFkZGluZ0JvdHRvbSA9IDU2O1xuICBjb25zdCBtb3ZlbWVudEFyZWFYID0gZ2FtZUZyYW1lWCArIGZyYW1lUGFkZGluZ1g7XG4gIGNvbnN0IG1vdmVtZW50QXJlYVkgPSBnYW1lRnJhbWVZICsgZnJhbWVQYWRkaW5nVG9wO1xuICBjb25zdCBtb3ZlbWVudEFyZWFXaWR0aCA9IGdhbWVGcmFtZVdpZHRoIC0gZnJhbWVQYWRkaW5nWCAqIDI7XG4gIGNvbnN0IG1vdmVtZW50QXJlYUhlaWdodCA9IGdhbWVGcmFtZUhlaWdodCAtIGZyYW1lUGFkZGluZ1RvcCAtIGZyYW1lUGFkZGluZ0JvdHRvbTtcblxuICByZXR1cm4ge1xuICAgIHcsXG4gICAgaCxcbiAgICBnYW1lRnJhbWVYLFxuICAgIGdhbWVGcmFtZVksXG4gICAgZ2FtZUZyYW1lV2lkdGgsXG4gICAgZ2FtZUZyYW1lSGVpZ2h0LFxuICAgIGJvdHRvbUZyYW1lWCxcbiAgICBib3R0b21GcmFtZVksXG4gICAgYm90dG9tRnJhbWVXaWR0aCxcbiAgICBib3R0b21GcmFtZUhlaWdodCxcbiAgICBtb3ZlbWVudEFyZWFYLFxuICAgIG1vdmVtZW50QXJlYVksXG4gICAgbW92ZW1lbnRBcmVhV2lkdGgsXG4gICAgbW92ZW1lbnRBcmVhSGVpZ2h0LFxuICB9O1xufTtcbiIsImV4cG9ydCBjb25zdCBMRVZFTF9DT1VOVCA9IDIwO1xyXG5cclxuZXhwb3J0IGNvbnN0IExFVkVMX0RBVEE6IHsgdGl0bGU6IHN0cmluZzsgbGluZXM6IHN0cmluZ1tdIH1bXSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJXaGF0J3MgeW91ciBuYW1lP1wiLFxyXG4gICAgbGluZXM6IFtcIkVudGVyIHlvdXIgbmFtZSBiZWxvdy5cIiwgXCJMZWF2ZSBpdCBibGFuayBhbmQgd2UnbGwgY2FsbCB5b3UgQm94LlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIldoYXQgaXMgMTUgKyAxNT9cIixcclxuICAgIGxpbmVzOiBbXCJQaWNrIHRoZSBjb3JyZWN0IGFuc3dlciBmcm9tIHRoZSBvcHRpb25zIGFib3ZlLlwiXSxcclxuICB9LFxyXG4gIHsgdGl0bGU6IFwiQ2xpY2sgdGhlIGRvdFwiLCBsaW5lczogW10gfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA0IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDUgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgNiBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA3IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDggaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgOSBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCAxMCBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb3ZlbWVudCBQcmFjdGljZVwiLFxyXG4gICAgbGluZXM6IFtcIlVzZSBXLCBBLCBTLCBhbmQgRCB0byBtb3ZlIHRoZSBwbGF5ZXIuXCIsIFwiVGhlIHNwcml0ZSBjaGFuZ2VzIGRpcmVjdGlvbiB3aXRoIGVhY2ggbW92ZS5cIl0sXHJcbiAgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd05hbWVFbnRyeSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIC8vIFByb21wdFxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzJweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiV2hhdCdzIHlvdXIgbmFtZT9cIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjIpO1xyXG5cclxuICBjdHguZm9udCA9IGAxOHB4ICR7Ym9keUZvbnR9YDtcclxuICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBcIkxlYXZlIGl0IGJsYW5rIGFuZCB3ZSdsbCBjYWxsIHlvdSBCb3guXCIsXHJcbiAgICBjeCxcclxuICAgIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjMyLFxyXG4gICAgdG9wQm94V2lkdGggKiAwLjY1LFxyXG4gICk7XHJcblxyXG4gIC8vIElucHV0IGJveFxyXG4gIGNvbnN0IGlucHV0VyA9IHRvcEJveFdpZHRoICogMC41O1xyXG4gIGNvbnN0IGlucHV0SCA9IDUyO1xyXG4gIGNvbnN0IGlucHV0WCA9IGN4IC0gaW5wdXRXIC8gMjtcclxuICBjb25zdCBpbnB1dFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC40MjtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gc3RhdGUubmFtZUZvY3VzZWRcclxuICAgID8gc3RhdGUuZGFya01vZGVcclxuICAgICAgPyBcIiNmZmZmZmZcIlxyXG4gICAgICA6IFwiIzExMTExMVwiXHJcbiAgICA6IHQuZGl2aWRlcjtcclxuICBjdHgubGluZVdpZHRoID0gc3RhdGUubmFtZUZvY3VzZWQgPyAzIDogMjtcclxuICBjdHguc3Ryb2tlUmVjdChpbnB1dFgsIGlucHV0WSwgaW5wdXRXLCBpbnB1dEgpO1xyXG5cclxuICBjb25zdCBkaXNwbGF5VGV4dCA9XHJcbiAgICBzdGF0ZS5uYW1lSW5wdXQubGVuZ3RoID4gMFxyXG4gICAgICA/IHN0YXRlLm5hbWVJbnB1dFxyXG4gICAgICA6IHN0YXRlLm5hbWVGb2N1c2VkXHJcbiAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgOiBcIlR5cGUgeW91ciBuYW1l4oCmXCI7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPiAwID8gdC5mZyA6IHQuZmdEaW07XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYDIycHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChkaXNwbGF5VGV4dCwgaW5wdXRYICsgMTQsIGlucHV0WSArIGlucHV0SCAvIDIsIGlucHV0VyAtIDI4KTtcclxuXHJcbiAgLy8gQmxpbmtpbmcgY3Vyc29yXHJcbiAgaWYgKHN0YXRlLm5hbWVGb2N1c2VkKSB7XHJcbiAgICBjb25zdCBtZWFzdXJlZCA9IGN0eC5tZWFzdXJlVGV4dChzdGF0ZS5uYW1lSW5wdXQpLndpZHRoO1xyXG4gICAgY29uc3QgY3Vyc29yWCA9IGlucHV0WCArIDE0ICsgTWF0aC5taW4obWVhc3VyZWQsIGlucHV0VyAtIDI4KTtcclxuICAgIGNvbnN0IGN1cnNvclkgPSBpbnB1dFkgKyBpbnB1dEggKiAwLjI7XHJcbiAgICBjb25zdCBjdXJzb3JIID0gaW5wdXRIICogMC42O1xyXG4gICAgY29uc3QgYmxpbmsgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyA1MzApICUgMiA9PT0gMDtcclxuICAgIGlmIChibGluaykge1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LmZnO1xyXG4gICAgICBjdHgubGluZVdpZHRoID0gMjtcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHgubW92ZVRvKGN1cnNvclgsIGN1cnNvclkpO1xyXG4gICAgICBjdHgubGluZVRvKGN1cnNvclgsIGN1cnNvclkgKyBjdXJzb3JIKTtcclxuICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gSW5wdXQgYm94IGhpdCBhcmVhXHJcbiAgZ2MuaGl0QXJlYXMucHVzaCh7XHJcbiAgICB4OiBpbnB1dFgsXHJcbiAgICB5OiBpbnB1dFksXHJcbiAgICB3OiBpbnB1dFcsXHJcbiAgICBoOiBpbnB1dEgsXHJcbiAgICBhY3Rpb246ICgpID0+IHtcclxuICAgICAgc3RhdGUubmFtZUZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIC8vIENvbmZpcm0gYnV0dG9uXHJcbiAgY29uc3QgY29uZmlybVcgPSAxODA7XHJcbiAgY29uc3QgY29uZmlybUggPSA0ODtcclxuICBkcmF3QnV0dG9uKFxyXG4gICAgZ2MsXHJcbiAgICBcIkNPTkZJUk0g4oaSXCIsXHJcbiAgICBjeCAtIGNvbmZpcm1XIC8gMixcclxuICAgIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjYyLFxyXG4gICAgY29uZmlybVcsXHJcbiAgICBjb25maXJtSCxcclxuICAgICgpID0+IHtcclxuICAgICAgc3RhdGUucGxheWVyTmFtZSA9IHN0YXRlLm5hbWVJbnB1dC50cmltKCkgfHwgXCJCb3hcIjtcclxuICAgICAgc3RhdGUubmFtZUZvY3VzZWQgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMjtcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgMjAsXHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbDIgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIC8vIFF1ZXN0aW9uIGhlYWRlclxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiV2hhdCBpcyAxNSArIDE1P1wiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTQpO1xyXG5cclxuICAvLyAyw5cyIGFuc3dlciBncmlkXHJcbiAgY29uc3QgYW5zd2VycyA9IFtcclxuICAgIHsgbGFiZWw6IFwiMjVcIiwgY29ycmVjdDogZmFsc2UgfSxcclxuICAgIHsgbGFiZWw6IFwiMzBcIiwgY29ycmVjdDogdHJ1ZSB9LFxyXG4gICAgeyBsYWJlbDogXCIyOFwiLCBjb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgeyBsYWJlbDogXCIzNVwiLCBjb3JyZWN0OiBmYWxzZSB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGNvbHMgPSAyO1xyXG4gIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggKiAwLjM7XHJcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjIyO1xyXG4gIGNvbnN0IGhHYXAgPSB0b3BCb3hXaWR0aCAqIDAuMDY7XHJcbiAgY29uc3QgdkdhcCA9IHRvcEJveEhlaWdodCAqIDAuMDY7XHJcbiAgY29uc3QgZ3JpZFcgPSBjb2xzICogdGlsZVcgKyBoR2FwO1xyXG4gIGNvbnN0IGdyaWRYID0gY3ggLSBncmlkVyAvIDI7XHJcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4yNjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbnN3ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBjb2wgPSBpICUgY29scztcclxuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xyXG4gICAgY29uc3QgdHggPSBncmlkWCArIGNvbCAqICh0aWxlVyArIGhHYXApO1xyXG4gICAgY29uc3QgdHkgPSBncmlkWSArIHJvdyAqICh0aWxlSCArIHZHYXApO1xyXG4gICAgY29uc3QgYW5zID0gYW5zd2Vyc1tpXTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoYW5zLmxhYmVsLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xyXG5cclxuICAgIGNvbnN0IGNhcHR1cmVkID0gYW5zLmNvcnJlY3Q7XHJcbiAgICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgICAgeDogdHgsXHJcbiAgICAgIHk6IHR5LFxyXG4gICAgICB3OiB0aWxlVyxcclxuICAgICAgaDogdGlsZUgsXHJcbiAgICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXB0dXJlZCkge1xyXG4gICAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMztcclxuICAgICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBnYy5sb3NlTGlmZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbDMgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCwgYm90dG9tQm94WSB9ID1cclxuICAgIGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gMsOXMiBncmlkIG9mIGRlY295IG9wdGlvbnMg4oCUIGFsbCB3cm9uZ1xyXG4gIGNvbnN0IGNvbHMgPSAyO1xyXG4gIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggKiAwLjM7XHJcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjIyO1xyXG4gIGNvbnN0IGhHYXAgPSB0b3BCb3hXaWR0aCAqIDAuMDY7XHJcbiAgY29uc3QgdkdhcCA9IHRvcEJveEhlaWdodCAqIDAuMDY7XHJcbiAgY29uc3QgZ3JpZFcgPSBjb2xzICogdGlsZVcgKyBoR2FwO1xyXG4gIGNvbnN0IGdyaWRYID0gY3ggLSBncmlkVyAvIDI7XHJcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4yNjtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XHJcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XHJcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XHJcblxyXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMztcclxuICAgIGN0eC5zdHJva2VSZWN0KHR4LCB0eSwgdGlsZVcsIHRpbGVIKTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcblxyXG4gICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgLy8gVGhlIHdvcmQgXCJkb3RcIlxyXG4gICAgICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCJkb3RcIiwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggLyAyKTtcclxuICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAvLyBBIGxpdGVyYWwgZG90XHJcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgY3R4LmFyYyh0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIsIDEwLCAwLCBNYXRoLlBJICogMik7XHJcbiAgICAgIGN0eC5maWxsKCk7XHJcbiAgICB9IGVsc2UgaWYgKGkgPT09IDIpIHtcclxuICAgICAgLy8gVGhyZWUgZG90c1xyXG4gICAgICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCLigKIg4oCiIOKAolwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gRGVwYXJ0bWVudCBvZiBTYW5pdGF0aW9uXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMTVweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIkRlcGFydG1lbnRcIiwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjM0LCB0aWxlVyAtIDE2KTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgIFwib2YgU2FuaXRhdGlvblwiLFxyXG4gICAgICAgIHR4ICsgdGlsZVcgLyAyLFxyXG4gICAgICAgIHR5ICsgdGlsZUggKiAwLjU3LFxyXG4gICAgICAgIHRpbGVXIC0gMTYsXHJcbiAgICAgICk7XHJcbiAgICAgIGN0eC5mb250ID0gYDEzcHggJHtib2R5Rm9udH1gO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiKEQuTy5TLilcIiwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjc4KTtcclxuICAgIH1cclxuXHJcbiAgICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgICAgeDogdHgsXHJcbiAgICAgIHk6IHR5LFxyXG4gICAgICB3OiB0aWxlVyxcclxuICAgICAgaDogdGlsZUgsXHJcbiAgICAgIGFjdGlvbjogKCkgPT4gZ2MubG9zZUxpZmUoKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gSGlkZGVuIGhpdCBhcmVhOiB0aGUgdGl0dGxlIChkb3QpIG9uIHRoZSAnaScgaW4gXCJDbGlja1wiIGluIHRoZSBib3R0b20gcGFuZWwuXHJcbiAgLy8gQm90dG9tIHBhbmVsIHRpdGxlIFwiQ2xpY2sgdGhlIGRvdC5cIiBpcyBkcmF3biBib2xkIDMwcHgsIGNlbnRlcmVkIGF0ICh3LzIsIGJvdHRvbUJveFkrMTgpLFxyXG4gIC8vIHRleHRCYXNlbGluZT1cInRvcFwiLiBXZSBtZWFzdXJlIHRvIGZpbmQgdGhlICdpJyB4LXBvc2l0aW9uLCB0aGVuIGVzdGltYXRlIHRoZSB0aXR0bGUncyB5LlxyXG4gIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY29uc3QgZnVsbFN0ciA9IFwiQ2xpY2sgdGhlIGRvdFwiO1xyXG4gIGNvbnN0IGZ1bGxXID0gY3R4Lm1lYXN1cmVUZXh0KGZ1bGxTdHIpLndpZHRoO1xyXG4gIGNvbnN0IHRleHRMZWZ0ID0gY3ggLSBmdWxsVyAvIDI7XHJcbiAgY29uc3QgcHJlZml4VyA9IGN0eC5tZWFzdXJlVGV4dChcIkNsXCIpLndpZHRoO1xyXG4gIGNvbnN0IGlDaGFyVyA9IGN0eC5tZWFzdXJlVGV4dChcImlcIikud2lkdGg7XHJcbiAgY29uc3QgaURvdENYID0gdGV4dExlZnQgKyBwcmVmaXhXICsgaUNoYXJXIC8gMjtcclxuICBjb25zdCBpRG90Q1kgPSBib3R0b21Cb3hZICsgMTggKyA1OyAvLyB+NXB4IGJlbG93IHRvcCBiYXNlbGluZSDiiYggdGl0dGxlIHBvc2l0aW9uXHJcbiAgY29uc3QgaGl0UiA9IDEwO1xyXG5cclxuICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgIHg6IGlEb3RDWCAtIGhpdFIsXHJcbiAgICB5OiBpRG90Q1kgLSBoaXRSLFxyXG4gICAgdzogaGl0UiAqIDIsXHJcbiAgICBoOiBoaXRSICogMixcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSA0O1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcbiIsImNvbnNvbGUubG9nKFwiQkVOQ0hNQVJLIDIgTUFJTiBMT0FERURcIik7XG5cbmltcG9ydCB7IEdhbWVDb250ZXh0LCBHYW1lU3RhdGUsIE1vdmVtZW50QXJlYSB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBkcmF3QmFja2dyb3VuZCwgZHJhd0xvZ28sIGRyYXdHYW1lcGxheUZyYW1lLCBkcmF3Qm90dG9tUGFuZWwgfSBmcm9tIFwiLi9yZW5kZXJlclwiO1xuaW1wb3J0IHsgZHJhd01haW5NZW51IH0gZnJvbSBcIi4vc2NyZWVucy9NYWluTWVudVwiO1xuaW1wb3J0IHsgZHJhd0xldmVsU2VsZWN0IH0gZnJvbSBcIi4vc2NyZWVucy9MZXZlbFNlbGVjdFwiO1xuaW1wb3J0IHsgZHJhd0xldmVsIH0gZnJvbSBcIi4vc2NyZWVucy9MZXZlbFwiO1xuaW1wb3J0IHsgZHJhd1BhdXNlT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlzL1BhdXNlT3ZlcmxheVwiO1xuaW1wb3J0IHsgZHJhd0NvbnRyb2xzT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlzL0NvbnRyb2xzT3ZlcmxheVwiO1xuaW1wb3J0IHsgZHJhd0dhbWVPdmVyT3ZlcmxheSB9IGZyb20gXCIuL292ZXJsYXlzL0dhbWVPdmVyT3ZlcmxheVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0LCBnZXRNb3ZlbWVudExheW91dCB9IGZyb20gXCIuL2xheW91dFwiO1xuXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi4vSGVscGVycy9FdmVudHMvRXZlbnRFbWl0dGVyXCI7XG5pbXBvcnQgeyBJbnB1dE1hbmFnZXIgfSBmcm9tIFwiLi4vSGVscGVycy9JbnB1dE1hbmFnZXJcIjtcbmltcG9ydCB7IFBsYXllckNvbnRyb2wgfSBmcm9tIFwiLi4vSGVscGVycy9QbGF5ZXJDb250cm9sXCI7XG5pbXBvcnQgeyBOb3JtYWxCbG9jayB9IGZyb20gXCIuLi9IZWxwZXJzL29iamVjdHMvTm9ybWFsQmxvY2tcIjtcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuICBjb25zdCBkZWJ1Z0NhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVidWctY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgdGV4dENhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGV4dC1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuXG4gIGlmICghZ2FtZUNhbnZhcyB8fCAhZGVidWdDYW52YXMgfHwgIXRleHRDYW52YXMpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBvbmUgb3IgbW9yZSBjYW52YXMgZWxlbWVudHMuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN0eCA9IGdhbWVDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBpZiAoIWN0eCkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgZ2V0IDJEIGNvbnRleHQuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHN0YXRlOiBHYW1lU3RhdGUgPSB7XG4gICAgY3VycmVudFNjcmVlbjogXCJtYWlubWVudVwiLFxuICAgIGN1cnJlbnRMZXZlbDogMSxcbiAgICBsaXZlczogMyxcbiAgICBwYXVzZWQ6IGZhbHNlLFxuICAgIGNvbnRyb2xzT3BlbjogZmFsc2UsXG4gICAgZGFya01vZGU6IHRydWUsXG4gICAgc3RvcnlUaXRsZTogXCJPdXRzaWRlLXRoZS1Cb3ggVGhpbmtpbmcgQ2VydGlmaWNhdGlvblwiLFxuICAgIHN0b3J5TGluZXM6IFtcbiAgICAgIFwiQ29tcGxldGUgdGhpcyBhc3Nlc3NtZW50IHRvIGVhcm4geW91ciBPdEIgVGhpbmtpbmcgQ2VydGlmaWNhdGUuXCIsXG4gICAgICBcIkRlbW9uc3RyYXRlIHlvdXIgYWJpbGl0eSB0byBhcHByb2FjaCBwcm9ibGVtcyBmcm9tIHVuY29udmVudGlvbmFsIGFuZ2xlcy5cIixcbiAgICAgIFwiQ2FuZGlkYXRlcyB3aG8gcGFzcyBtYXkgbGlzdCB0aGlzIGNyZWRlbnRpYWwgb24gdGhlaXIgTGlua2VkSW4gb3IgcmVzdW1lLlwiLFxuICAgIF0sXG4gICAgcGxheWVyTmFtZTogXCJCb3hcIixcbiAgICBuYW1lSW5wdXQ6IFwiXCIsXG4gICAgbmFtZUZvY3VzZWQ6IGZhbHNlLFxuICAgIHBsYXlNb2RlOiBcInBsYXlcIixcbiAgICBnYW1lT3ZlcjogZmFsc2UsXG4gIH07XG5cbiAgY29uc3QgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3QgaW5wdXQgPSBuZXcgSW5wdXRNYW5hZ2VyKGVtaXR0ZXIpO1xuICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyQ29udHJvbChlbWl0dGVyKTtcbiAgbGV0IHByZXZpb3VzTGV2ZWwgPSBzdGF0ZS5jdXJyZW50TGV2ZWw7XG4gIGxldCBwcmV2aW91c1NjcmVlbiA9IHN0YXRlLmN1cnJlbnRTY3JlZW47XG4gIGxldCBuZWVkc01vdmVtZW50UmVzZXQgPSBmYWxzZTtcbiAgbGV0IGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBjb25zdCBkZWZhdWx0TW92ZW1lbnRBcmVhOiBNb3ZlbWVudEFyZWEgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgfTtcblxuICBjb25zdCBnYzogR2FtZUNvbnRleHQgPSB7XG4gICAgY3R4LFxuICAgIHN0YXRlLFxuICAgIGhpdEFyZWFzOiBbXSxcbiAgICByZW5kZXI6ICgpID0+IHt9LFxuICAgIGxvc2VMaWZlOiAoKSA9PiB7fSxcbiAgICByZXNldFBsYXllck5hbWU6ICgpID0+IHt9LFxuICAgIHN1Ym1pdE1vdmVtZW50QW5zd2VyOiAoKSA9PiB7fSxcbiAgICBnZXRDdXJyZW50QW5zd2VyOiAoKSA9PiBcIlwiLFxuICAgIGRpc3BsYXlGb250OiBgXCJUcmVidWNoZXQgTVNcIiwgXCJWZXJkYW5hXCIsIHNhbnMtc2VyaWZgLFxuICAgIGJvZHlGb250OiBgXCJUcmVidWNoZXQgTVNcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmYCxcbiAgICBsb2dvOiBuZXcgSW1hZ2UoKSxcbiAgICBnYW1lcGxheUZyYW1lOiBuZXcgSW1hZ2UoKSxcbiAgICBsb2dvTG9hZGVkOiBmYWxzZSxcbiAgICBnYW1lcGxheUZyYW1lTG9hZGVkOiBmYWxzZSxcbiAgICBwbGF5ZXIsXG4gICAgYmxvY2tzOiBbXSxcbiAgICBhbnN3ZXJTbG90czogW10sXG4gICAgbW92ZW1lbnRBcmVhOiBkZWZhdWx0TW92ZW1lbnRBcmVhLFxuICAgIHF1aXpBbnN3ZXI6IFwiQUI3XCIsXG4gICAgdGltZUxlZnRTZWNvbmRzOiAzMCxcbiAgfTtcblxuICBjb25zdCBpc01vdmVtZW50TGV2ZWwgPSAobGV2ZWw6IG51bWJlcikgPT4gbGV2ZWwgPj0gMTEgJiYgbGV2ZWwgPD0gMjA7XG5cbiAgY29uc3Qgc3luY01vdmVtZW50QXJlYSA9ICgpID0+IHtcbiAgICBjb25zdCBtb3ZlbWVudExheW91dCA9IGdldE1vdmVtZW50TGF5b3V0KGN0eCk7XG4gICAgY29uc3Qgc2xvdEdhcCA9IDEwO1xuICAgIGNvbnN0IHNsb3RTaXplID0gcGxheWVyLndpZHRoO1xuICAgIGNvbnN0IGFuc3dlckNvdW50ID0gMTA7XG4gICAgY29uc3QgYW5zd2VyWm9uZVdpZHRoID0gYW5zd2VyQ291bnQgKiBzbG90U2l6ZSArIChhbnN3ZXJDb3VudCAtIDEpICogc2xvdEdhcDtcbiAgICBjb25zdCBhbnN3ZXJab25lWCA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVggKyAobW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lV2lkdGggLSBhbnN3ZXJab25lV2lkdGgpIC8gMjtcbiAgICBjb25zdCBhbnN3ZXJab25lWSA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVkgKyAyODtcblxuICAgIGdjLmFuc3dlclNsb3RzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogYW5zd2VyQ291bnQgfSwgKF8sIGluZGV4KSA9PiAoe1xuICAgICAgeDogYW5zd2VyWm9uZVggKyBpbmRleCAqIChzbG90U2l6ZSArIHNsb3RHYXApLFxuICAgICAgeTogYW5zd2VyWm9uZVksXG4gICAgICBzaXplOiBzbG90U2l6ZSxcbiAgICAgIGJsb2NrOiBudWxsLFxuICAgIH0pKTtcblxuICAgIGdjLm1vdmVtZW50QXJlYSA9IHtcbiAgICAgIHg6IG1vdmVtZW50TGF5b3V0Lm1vdmVtZW50QXJlYVgsXG4gICAgICB5OiBtb3ZlbWVudExheW91dC5tb3ZlbWVudEFyZWFZLFxuICAgICAgd2lkdGg6IG1vdmVtZW50TGF5b3V0Lm1vdmVtZW50QXJlYVdpZHRoLFxuICAgICAgaGVpZ2h0OiBtb3ZlbWVudExheW91dC5tb3ZlbWVudEFyZWFIZWlnaHQsXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBidWlsZE1vdmVtZW50QmxvY2tzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSwgd2lkdGgsIGhlaWdodCB9ID0gZ2MubW92ZW1lbnRBcmVhO1xuICAgIGNvbnN0IHNpemUgPSBwbGF5ZXIud2lkdGg7XG4gICAgY29uc3Qgc3RhcnRYID0geCArIHdpZHRoICogMC4xODtcbiAgICBjb25zdCBzdGFydFkgPSB5ICsgaGVpZ2h0ICogMC4yMjtcblxuICAgIHJldHVybiBbXG4gICAgICBuZXcgTm9ybWFsQmxvY2soc3RhcnRYLCBzdGFydFksIHNpemUsIFwiI2ZmZmZmZlwiLCBcIkFcIiksXG4gICAgICBuZXcgTm9ybWFsQmxvY2soc3RhcnRYICsgc2l6ZSAqIDIuMiwgc3RhcnRZLCBzaXplLCBcIiNmZmZmZmZcIiwgXCJCXCIpLFxuICAgICAgbmV3IE5vcm1hbEJsb2NrKHN0YXJ0WCArIHNpemUgKiA0LjQsIHN0YXJ0WSwgc2l6ZSwgXCIjZmZmZmZmXCIsIFwiN1wiKSxcbiAgICAgIG5ldyBOb3JtYWxCbG9jayhzdGFydFggKyBzaXplICogMS4xLCBzdGFydFkgKyBzaXplICogMi4xLCBzaXplLCBcIiNmZmZmZmZcIiwgXCJDXCIpLFxuICAgICAgbmV3IE5vcm1hbEJsb2NrKHN0YXJ0WCArIHNpemUgKiAzLjUsIHN0YXJ0WSArIHNpemUgKiAyLjEsIHNpemUsIFwiI2ZmZmZmZlwiLCBcIjVcIiksXG4gICAgXTtcbiAgfTtcblxuICBnYy5nZXRDdXJyZW50QW5zd2VyID0gKCkgPT4ge1xuICAgIGxldCBhbnN3ZXIgPSBcIlwiO1xuXG4gICAgZm9yIChjb25zdCBzbG90IG9mIGdjLmFuc3dlclNsb3RzKSB7XG4gICAgICBpZiAoIXNsb3QuYmxvY2spIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGFuc3dlciArPSBzbG90LmJsb2NrLnZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBhbnN3ZXI7XG4gIH07XG5cbiAgZ2Muc3VibWl0TW92ZW1lbnRBbnN3ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudEFuc3dlciA9IGdjLmdldEN1cnJlbnRBbnN3ZXIoKTtcbiAgICBpZiAoY3VycmVudEFuc3dlciAhPT0gZ2MucXVpekFuc3dlcikge1xuICAgICAgZ2MubG9zZUxpZmUoKTtcbiAgICAgIG5lZWRzTW92ZW1lbnRSZXNldCA9IHRydWU7XG4gICAgICBnYy50aW1lTGVmdFNlY29uZHMgPSAzMDtcbiAgICAgIGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChnYy5zdGF0ZS5jdXJyZW50TGV2ZWwgPCAyMCkge1xuICAgICAgZ2Muc3RhdGUuY3VycmVudExldmVsKys7XG4gICAgICBuZWVkc01vdmVtZW50UmVzZXQgPSB0cnVlO1xuICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gMzA7XG4gICAgICBsYXN0VGltZXJUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBnYy5zdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgIGdjLnJlbmRlcigpO1xuICB9O1xuXG4gIGNvbnN0IHN5bmNNb3ZlbWVudFNjZW5lID0gKHJlc2V0U2NlbmUgPSBmYWxzZSkgPT4ge1xuICAgIHN5bmNNb3ZlbWVudEFyZWEoKTtcblxuICAgIGNvbnN0IG1pblggPSBnYy5tb3ZlbWVudEFyZWEueDtcbiAgICBjb25zdCBtaW5ZID0gZ2MubW92ZW1lbnRBcmVhLnk7XG4gICAgY29uc3QgbWF4WCA9IGdjLm1vdmVtZW50QXJlYS54ICsgZ2MubW92ZW1lbnRBcmVhLndpZHRoIC0gcGxheWVyLndpZHRoO1xuICAgIGNvbnN0IG1heFkgPSBnYy5tb3ZlbWVudEFyZWEueSArIGdjLm1vdmVtZW50QXJlYS5oZWlnaHQgLSBwbGF5ZXIuaGVpZ2h0O1xuXG4gICAgcGxheWVyLnNldEJvdW5kcyhtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZKTtcbiAgICBwbGF5ZXIuc2V0QW5zd2VyU2xvdHMoZ2MuYW5zd2VyU2xvdHMpO1xuXG4gICAgaWYgKHJlc2V0U2NlbmUpIHtcbiAgICAgIGdjLmJsb2NrcyA9IGJ1aWxkTW92ZW1lbnRCbG9ja3MoKTtcbiAgICAgIHBsYXllci5zZXRCbG9ja3MoZ2MuYmxvY2tzKTtcbiAgICAgIHBsYXllci5yZXNldFBvc2l0aW9uKFxuICAgICAgICBtaW5YICsgcGxheWVyLndpZHRoLFxuICAgICAgICBtaW5ZICsgZ2MubW92ZW1lbnRBcmVhLmhlaWdodCAvIDIgLSBwbGF5ZXIuaGVpZ2h0IC8gMixcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGxheWVyLnNldEJsb2NrcyhnYy5ibG9ja3MpO1xuICB9O1xuXG4gIGdjLnJlc2V0UGxheWVyTmFtZSA9ICgpID0+IHtcbiAgICBnYy5zdGF0ZS5wbGF5ZXJOYW1lID0gXCJCb3hcIjtcbiAgICBnYy5zdGF0ZS5uYW1lSW5wdXQgPSBcIlwiO1xuICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XG4gIH07XG5cbiAgZ2MubG9zZUxpZmUgPSAoKSA9PiB7XG4gICAgZ2Muc3RhdGUubGl2ZXMtLTtcbiAgICBpZiAoZ2Muc3RhdGUubGl2ZXMgPD0gMCkge1xuICAgICAgZ2Muc3RhdGUubGl2ZXMgPSAwO1xuICAgICAgZ2Muc3RhdGUuZ2FtZU92ZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBnYy5yZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZW1lbnRMZXZlbEFjdGl2ZSA9IGdjLnN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIiAmJiBpc01vdmVtZW50TGV2ZWwoZ2Muc3RhdGUuY3VycmVudExldmVsKTtcbiAgICBjb25zdCBlbnRlcmluZ01vdmVtZW50TGV2ZWwgPVxuICAgICAgbW92ZW1lbnRMZXZlbEFjdGl2ZSAmJiAocHJldmlvdXNTY3JlZW4gIT09IFwibGV2ZWxcIiB8fCBwcmV2aW91c0xldmVsICE9PSBnYy5zdGF0ZS5jdXJyZW50TGV2ZWwpO1xuXG4gICAgaWYgKG1vdmVtZW50TGV2ZWxBY3RpdmUpIHtcbiAgICAgIHN5bmNNb3ZlbWVudFNjZW5lKGVudGVyaW5nTW92ZW1lbnRMZXZlbCB8fCBnYy5ibG9ja3MubGVuZ3RoID09PSAwIHx8IG5lZWRzTW92ZW1lbnRSZXNldCk7XG4gICAgICBuZWVkc01vdmVtZW50UmVzZXQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2MuYmxvY2tzID0gW107XG4gICAgICBnYy5hbnN3ZXJTbG90cyA9IFtdO1xuICAgICAgcGxheWVyLnNldEJsb2NrcyhbXSk7XG4gICAgICBwbGF5ZXIuc2V0QW5zd2VyU2xvdHMoW10pO1xuICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gMzA7XG4gICAgICBsYXN0VGltZXJUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBjb25zdCB7IG1vdmVtZW50QXJlYVgsIG1vdmVtZW50QXJlYVksIG1vdmVtZW50QXJlYVdpZHRoLCBtb3ZlbWVudEFyZWFIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICAgICAgZ2MubW92ZW1lbnRBcmVhID0ge1xuICAgICAgICB4OiBtb3ZlbWVudEFyZWFYLFxuICAgICAgICB5OiBtb3ZlbWVudEFyZWFZLFxuICAgICAgICB3aWR0aDogbW92ZW1lbnRBcmVhV2lkdGgsXG4gICAgICAgIGhlaWdodDogbW92ZW1lbnRBcmVhSGVpZ2h0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBnYy5oaXRBcmVhcyA9IFtdO1xuICAgIGRyYXdCYWNrZ3JvdW5kKGdjKTtcblxuICAgIGlmICghbW92ZW1lbnRMZXZlbEFjdGl2ZSkge1xuICAgICAgZHJhd0xvZ28oZ2MpO1xuICAgICAgZHJhd0dhbWVwbGF5RnJhbWUoZ2MpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZ2Muc3RhdGUuY3VycmVudFNjcmVlbikge1xuICAgICAgY2FzZSBcIm1haW5tZW51XCI6XG4gICAgICAgIGRyYXdNYWluTWVudShnYyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxldmVsc2VsZWN0XCI6XG4gICAgICAgIGRyYXdMZXZlbFNlbGVjdChnYyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxldmVsXCI6XG4gICAgICAgIGRyYXdMZXZlbChnYyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRyYXdCb3R0b21QYW5lbChnYyk7XG5cbiAgICBpZiAoZ2Muc3RhdGUucGF1c2VkKSBkcmF3UGF1c2VPdmVybGF5KGdjKTtcbiAgICBpZiAoZ2Muc3RhdGUuY29udHJvbHNPcGVuKSBkcmF3Q29udHJvbHNPdmVybGF5KGdjKTtcbiAgICBpZiAoZ2Muc3RhdGUuZ2FtZU92ZXIpIGRyYXdHYW1lT3Zlck92ZXJsYXkoZ2MpO1xuXG4gICAgcHJldmlvdXNMZXZlbCA9IGdjLnN0YXRlLmN1cnJlbnRMZXZlbDtcbiAgICBwcmV2aW91c1NjcmVlbiA9IGdjLnN0YXRlLmN1cnJlbnRTY3JlZW47XG4gIH07XG5cbiAgY29uc3QgcmVzaXplQ2FudmFzZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGNvbnN0IGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgZ2FtZUNhbnZhcy53aWR0aCA9IGRlYnVnQ2FudmFzLndpZHRoID0gdztcbiAgICBnYW1lQ2FudmFzLmhlaWdodCA9IGRlYnVnQ2FudmFzLmhlaWdodCA9IGg7XG4gICAgbmVlZHNNb3ZlbWVudFJlc2V0ID0gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCB0b0NhbnZhcyA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgY29uc3QgcmVjdCA9IGdhbWVDYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3Qgc2NhbGVYID0gZ2FtZUNhbnZhcy53aWR0aCAvIHJlY3Qud2lkdGg7XG4gICAgY29uc3Qgc2NhbGVZID0gZ2FtZUNhbnZhcy5oZWlnaHQgLyByZWN0LmhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiAoZS5jbGllbnRYIC0gcmVjdC5sZWZ0KSAqIHNjYWxlWCxcbiAgICAgIHk6IChlLmNsaWVudFkgLSByZWN0LnRvcCkgKiBzY2FsZVksXG4gICAgfTtcbiAgfTtcblxuICBnYW1lQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdG9DYW52YXMoZSk7XG4gICAgZm9yIChjb25zdCBhcmVhIG9mIGdjLmhpdEFyZWFzKSB7XG4gICAgICBpZiAoeCA+PSBhcmVhLnggJiYgeCA8PSBhcmVhLnggKyBhcmVhLncgJiYgeSA+PSBhcmVhLnkgJiYgeSA8PSBhcmVhLnkgKyBhcmVhLmgpIHtcbiAgICAgICAgYXJlYS5hY3Rpb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBnYW1lQ2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGUpID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRvQ2FudmFzKGUpO1xuICAgIGNvbnN0IG92ZXIgPSBnYy5oaXRBcmVhcy5zb21lKFxuICAgICAgKGFyZWEpID0+IHggPj0gYXJlYS54ICYmIHggPD0gYXJlYS54ICsgYXJlYS53ICYmIHkgPj0gYXJlYS55ICYmIHkgPD0gYXJlYS55ICsgYXJlYS5oLFxuICAgICk7XG4gICAgZ2FtZUNhbnZhcy5zdHlsZS5jdXJzb3IgPSBvdmVyID8gXCJwb2ludGVyXCIgOiBcImRlZmF1bHRcIjtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGdjLnN0YXRlLm5hbWVGb2N1c2VkICYmICFnYy5zdGF0ZS5wYXVzZWQgJiYgIWdjLnN0YXRlLmNvbnRyb2xzT3Blbikge1xuICAgICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgIGdjLnN0YXRlLnBsYXllck5hbWUgPSBnYy5zdGF0ZS5uYW1lSW5wdXQudHJpbSgpIHx8IFwiQm94XCI7XG4gICAgICAgIGdjLnN0YXRlLm5hbWVGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIGdjLnN0YXRlLmN1cnJlbnRMZXZlbCA9IDI7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIikge1xuICAgICAgICBnYy5zdGF0ZS5uYW1lSW5wdXQgPSBnYy5zdGF0ZS5uYW1lSW5wdXQuc2xpY2UoMCwgLTEpO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkubGVuZ3RoID09PSAxICYmIGdjLnN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPCAyNCkge1xuICAgICAgICBnYy5zdGF0ZS5uYW1lSW5wdXQgKz0gZS5rZXk7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgIGlmIChnYy5zdGF0ZS5jb250cm9sc09wZW4pIHtcbiAgICAgICAgZ2Muc3RhdGUuY29udHJvbHNPcGVuID0gZmFsc2U7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfSBlbHNlIGlmIChnYy5zdGF0ZS5wYXVzZWQpIHtcbiAgICAgICAgZ2Muc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4ge1xuICAgIHJlc2l6ZUNhbnZhc2VzKCk7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0pO1xuXG4gIHNldEludGVydmFsKCgpID0+IHtcbiAgICBpZiAoZ2Muc3RhdGUubmFtZUZvY3VzZWQpIGdjLnJlbmRlcigpO1xuICB9LCA1MzApO1xuXG4gIGdjLmxvZ28ub25sb2FkID0gKCkgPT4ge1xuICAgIGdjLmxvZ29Mb2FkZWQgPSB0cnVlO1xuICAgIGdjLnJlbmRlcigpO1xuICB9O1xuICBnYy5sb2dvLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgZ2MubG9nb0xvYWRlZCA9IGZhbHNlO1xuICAgIGdjLnJlbmRlcigpO1xuICB9O1xuICBnYy5nYW1lcGxheUZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICBnYy5nYW1lcGxheUZyYW1lTG9hZGVkID0gdHJ1ZTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5vbmVycm9yID0gKCkgPT4ge1xuICAgIGdjLmdhbWVwbGF5RnJhbWVMb2FkZWQgPSBmYWxzZTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcblxuICBnYy5sb2dvLnNyYyA9IFwiL2JlbmNobWFyazIvYXNzZXRzL2xvZ28ucG5nXCI7XG4gIGdjLmdhbWVwbGF5RnJhbWUuc3JjID0gXCIvYmVuY2htYXJrMi9hc3NldHMvZ2FtZXBsYXktZnJhbWUucG5nXCI7XG5cbiAgcmVzaXplQ2FudmFzZXMoKTtcbiAgZ2MucmVuZGVyKCk7XG5cbiAgY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZW1lbnRMZXZlbEFjdGl2ZSA9IGdjLnN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIiAmJiBpc01vdmVtZW50TGV2ZWwoZ2Muc3RhdGUuY3VycmVudExldmVsKTtcblxuICAgIGlmIChcbiAgICAgIG1vdmVtZW50TGV2ZWxBY3RpdmUgJiZcbiAgICAgICFnYy5zdGF0ZS5wYXVzZWQgJiZcbiAgICAgICFnYy5zdGF0ZS5jb250cm9sc09wZW4gJiZcbiAgICAgICFnYy5zdGF0ZS5nYW1lT3ZlclxuICAgICkge1xuICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBpZiAobm93IC0gbGFzdFRpbWVyVGljayA+PSAxMDAwKSB7XG4gICAgICAgIGNvbnN0IGVsYXBzZWRTZWNvbmRzID0gTWF0aC5mbG9vcigobm93IC0gbGFzdFRpbWVyVGljaykgLyAxMDAwKTtcbiAgICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gTWF0aC5tYXgoMCwgZ2MudGltZUxlZnRTZWNvbmRzIC0gZWxhcHNlZFNlY29uZHMpO1xuICAgICAgICBsYXN0VGltZXJUaWNrICs9IGVsYXBzZWRTZWNvbmRzICogMTAwMDtcblxuICAgICAgICBpZiAoZ2MudGltZUxlZnRTZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgZ2MubG9zZUxpZmUoKTtcbiAgICAgICAgICBuZWVkc01vdmVtZW50UmVzZXQgPSB0cnVlO1xuICAgICAgICAgIGdjLnRpbWVMZWZ0U2Vjb25kcyA9IDMwO1xuICAgICAgICAgIGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgIHBsYXllci51cGRhdGUoKTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0VGltZXJUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfTtcblxuICBnYW1lTG9vcCgpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdDb250cm9sc092ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgY29uc3QgcGFkID0gdG9wQm94V2lkdGggKiAwLjA1O1xyXG4gIGNvbnN0IG94ID0gdG9wQm94WCArIHBhZDtcclxuICBjb25zdCBveSA9IHRvcEJveFkgKyBwYWQ7XHJcbiAgY29uc3Qgb3cgPSB0b3BCb3hXaWR0aCAtIHBhZCAqIDI7XHJcbiAgY29uc3Qgb2ggPSB0b3BCb3hIZWlnaHQgLSBwYWQgKiAyO1xyXG4gIGNvbnN0IGN4ID0gb3ggKyBvdyAvIDI7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0Lm92ZXJsYXlCZztcclxuICBjdHguZmlsbFJlY3Qob3gsIG95LCBvdywgb2gpO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KG94LCBveSwgb3csIG9oKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJCQVNJQyBDT05UUk9MU1wiLCBjeCwgb3kgKyBvaCAqIDAuMTEpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8ob3ggKyBvdyAqIDAuMDYsIG95ICsgb2ggKiAwLjIpO1xyXG4gIGN0eC5saW5lVG8ob3ggKyBvdyAqIDAuOTQsIG95ICsgb2ggKiAwLjIpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgY29uc3QgY29udHJvbHMgPSBbXHJcbiAgICB7IGtleTogXCJXIC8gQSAvIFMgLyBEXCIsIGRlc2M6IFwiTW92ZSAvIE5hdmlnYXRlXCIgfSxcclxuICAgIHsga2V5OiBcIkNMSUNLXCIsIGRlc2M6IFwiSW50ZXJhY3QgLyBTZWxlY3QgYW5zd2VyXCIgfSxcclxuICAgIHsga2V5OiBcIkVTQ1wiLCBkZXNjOiBcIkNsb3NlIHRoaXMgcGFuZWxcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGxpc3RZID0gb3kgKyBvaCAqIDAuMjk7XHJcbiAgY29uc3Qgcm93SCA9IG9oICogMC4xNTtcclxuICBjb25zdCBrZXlCb3hXID0gb3cgKiAwLjM7XHJcbiAgY29uc3Qga2V5Qm94SCA9IHJvd0ggKiAwLjc7XHJcbiAgY29uc3Qga2V5Qm94WCA9IG94ICsgb3cgKiAwLjA4O1xyXG4gIGNvbnN0IGRlc2NYID0gb3ggKyBvdyAqIDAuNTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9scy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgcm93WSA9IGxpc3RZICsgaSAqIHJvd0g7XHJcbiAgICBjb25zdCBib3hDZW50ZXJZID0gcm93WSArIGtleUJveEggLyAyO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBzdGF0ZS5kYXJrTW9kZSA/IFwiIzJhMmEyYVwiIDogXCIjZGRkZGRkXCI7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgIGN0eC5maWxsUmVjdChrZXlCb3hYLCByb3dZLCBrZXlCb3hXLCBrZXlCb3hIKTtcclxuICAgIGN0eC5zdHJva2VSZWN0KGtleUJveFgsIHJvd1ksIGtleUJveFcsIGtleUJveEgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgIGNvbnRyb2xzW2ldLmtleSxcclxuICAgICAga2V5Qm94WCArIGtleUJveFcgLyAyLFxyXG4gICAgICBib3hDZW50ZXJZLFxyXG4gICAgICBrZXlCb3hXIC0gOCxcclxuICAgICk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBjdHguZm9udCA9IGAxN3B4ICR7Ym9keUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChjb250cm9sc1tpXS5kZXNjLCBkZXNjWCwgYm94Q2VudGVyWSk7XHJcbiAgfVxyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGAxM3B4ICR7Ym9keUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJDb250cm9scyBtYXkgdmFyeSBiZXR3ZWVuIGxldmVscy5cIiwgY3gsIG95ICsgb2ggKiAwLjg0KTtcclxuXHJcbiAgLy8gQ2xlYXIgdW5kZXJseWluZyBoaXQgYXJlYXNcclxuICBnYy5oaXRBcmVhcyA9IFtdO1xyXG5cclxuICBjb25zdCBjbG9zZVcgPSAxNDA7XHJcbiAgY29uc3QgY2xvc2VIID0gNDA7XHJcbiAgZHJhd0J1dHRvbihcclxuICAgIGdjLFxyXG4gICAgXCJDTE9TRSAg4pyVXCIsXHJcbiAgICBjeCAtIGNsb3NlVyAvIDIsXHJcbiAgICBveSArIG9oICogMC45LFxyXG4gICAgY2xvc2VXLFxyXG4gICAgY2xvc2VILFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5jb250cm9sc09wZW4gPSBmYWxzZTtcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgMTcsXHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0dhbWVPdmVyT3ZlcmxheSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCBoIH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IGN5ID0gaCAvIDI7XHJcblxyXG4gIC8vIEZ1bGwtY2FudmFzIGRpbVxyXG4gIGN0eC5maWxsU3R5bGUgPSBcInJnYmEoMCwwLDAsMC44MilcIjtcclxuICBjdHguZmlsbFJlY3QoMCwgMCwgdywgaCk7XHJcblxyXG4gIC8vIFBhbmVsXHJcbiAgY29uc3QgcGFuZWxXID0gTWF0aC5taW4odyAqIDAuNTUsIDUyMCk7XHJcbiAgY29uc3QgcGFuZWxIID0gaCAqIDAuNTI7XHJcbiAgY29uc3QgcGFuZWxYID0gY3ggLSBwYW5lbFcgLyAyO1xyXG4gIGNvbnN0IHBhbmVsWSA9IGN5IC0gcGFuZWxIIC8gMjtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiIzBhMGEwYVwiO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiI2NjMjIyMlwiO1xyXG4gIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gIGN0eC5maWxsUmVjdChwYW5lbFgsIHBhbmVsWSwgcGFuZWxXLCBwYW5lbEgpO1xyXG4gIGN0eC5zdHJva2VSZWN0KHBhbmVsWCwgcGFuZWxZLCBwYW5lbFcsIHBhbmVsSCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiNjYzIyMjJcIjtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDUycHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIkdBTUUgT1ZFUlwiLCBjeCwgcGFuZWxZICsgcGFuZWxIICogMC4yMik7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiM4ODg4ODhcIjtcclxuICBjdHguZm9udCA9IGAyMHB4ICR7Ym9keUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXHJcbiAgICBgQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLCAke3N0YXRlLnBsYXllck5hbWV9LmAsXHJcbiAgICBjeCxcclxuICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNDIsXHJcbiAgICBwYW5lbFcgKiAwLjgyLFxyXG4gICk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IFwiIzMzMzMzM1wiO1xyXG4gIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubW92ZVRvKHBhbmVsWCArIHBhbmVsVyAqIDAuMSwgcGFuZWxZICsgcGFuZWxIICogMC41NCk7XHJcbiAgY3R4LmxpbmVUbyhwYW5lbFggKyBwYW5lbFcgKiAwLjksIHBhbmVsWSArIHBhbmVsSCAqIDAuNTQpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuXHJcbiAgY29uc3QgYnRuVyA9IDIwMDtcclxuICBjb25zdCBidG5IID0gNDg7XHJcblxyXG4gIGlmIChzdGF0ZS5wbGF5TW9kZSA9PT0gXCJwbGF5XCIpIHtcclxuICAgIGRyYXdCdXR0b24oXHJcbiAgICAgIGdjLFxyXG4gICAgICBcIlRSWSBBR0FJTlwiLFxyXG4gICAgICBjeCAtIGJ0blcgLyAyLFxyXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjYxLFxyXG4gICAgICBidG5XLFxyXG4gICAgICBidG5ILFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gMTtcclxuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgMjAsXHJcbiAgICApO1xyXG5cclxuICAgIGRyYXdCdXR0b24oXHJcbiAgICAgIGdjLFxyXG4gICAgICBcIk1BSU4gTUVOVVwiLFxyXG4gICAgICBjeCAtIGJ0blcgLyAyLFxyXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjc4LFxyXG4gICAgICBidG5XLFxyXG4gICAgICBidG5ILFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcclxuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgMjAsXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkcmF3QnV0dG9uKFxyXG4gICAgICBnYyxcclxuICAgICAgXCJNQUlOIE1FTlVcIixcclxuICAgICAgY3ggLSBidG5XIC8gMixcclxuICAgICAgcGFuZWxZICsgcGFuZWxIICogMC42OCxcclxuICAgICAgYnRuVyxcclxuICAgICAgYnRuSCxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcclxuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIDIwLFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdQYXVzZU92ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBwYWQgPSB0b3BCb3hXaWR0aCAqIDAuMDU7XHJcbiAgY29uc3Qgb3ggPSB0b3BCb3hYICsgcGFkO1xyXG4gIGNvbnN0IG95ID0gdG9wQm94WSArIHBhZDtcclxuICBjb25zdCBvdyA9IHRvcEJveFdpZHRoIC0gcGFkICogMjtcclxuICBjb25zdCBvaCA9IHRvcEJveEhlaWdodCAtIHBhZCAqIDI7XHJcbiAgY29uc3QgY3ggPSBveCArIG93IC8gMjtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5vdmVybGF5Qmc7XHJcbiAgY3R4LmZpbGxSZWN0KG94LCBveSwgb3csIG9oKTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gMjtcclxuICBjdHguc3Ryb2tlUmVjdChveCwgb3ksIG93LCBvaCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzhweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiUEFVU0VEXCIsIGN4LCBveSArIG9oICogMC4xOCk7XHJcblxyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuZGl2aWRlcjtcclxuICBjdHgubGluZVdpZHRoID0gMTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyhveCArIG93ICogMC4xLCBveSArIG9oICogMC4zKTtcclxuICBjdHgubGluZVRvKG94ICsgb3cgKiAwLjksIG95ICsgb2ggKiAwLjMpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgLy8gQ2xlYXIgYWxsIHVuZGVybHlpbmcgaGl0IGFyZWFzIHNvIHRoZSBnYW1lIGJlaGluZCBpcyBibG9ja2VkXHJcbiAgZ2MuaGl0QXJlYXMgPSBbXTtcclxuXHJcbiAgY29uc3QgYnRuVyA9IDIyMDtcclxuICBjb25zdCBidG5IID0gNDg7XHJcbiAgY29uc3QgYnRuWCA9IGN4IC0gYnRuVyAvIDI7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiUkVTVU1FXCIsIGJ0blgsIG95ICsgb2ggKiAwLjM2LCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIlFVSVQgVE8gTUVOVVwiLCBidG5YLCBveSArIG9oICogMC41MywgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5saXZlcyA9IDM7XHJcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlTGFiZWwgPSBzdGF0ZS5kYXJrTW9kZSA/IFwi4piAICBMSUdIVCBNT0RFXCIgOiBcIvCfjJkgIERBUksgTU9ERVwiO1xyXG4gIGRyYXdCdXR0b24oXHJcbiAgICBnYyxcclxuICAgIHRvZ2dsZUxhYmVsLFxyXG4gICAgYnRuWCxcclxuICAgIG95ICsgb2ggKiAwLjcsXHJcbiAgICBidG5XLFxyXG4gICAgYnRuSCxcclxuICAgICgpID0+IHtcclxuICAgICAgc3RhdGUuZGFya01vZGUgPSAhc3RhdGUuZGFya01vZGU7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICAgIDE4LFxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4vdGhlbWVcIjtcbmltcG9ydCB7IGdldExheW91dCwgZ2V0TW92ZW1lbnRMYXlvdXQgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCB7IExFVkVMX0RBVEEgfSBmcm9tIFwiLi9sZXZlbERhdGFcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdCYWNrZ3JvdW5kID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUgfSA9IGdjO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmQgPSB0LmJnO1xuICBjdHguZmlsbFN0eWxlID0gdC5iZztcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIGN0eC5jYW52YXMud2lkdGgsIGN0eC5jYW52YXMuaGVpZ2h0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3TG9nbyA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBsb2dvLCBsb2dvTG9hZGVkLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgbG9nb1kgfSA9IGdldExheW91dChjdHgpO1xuICBpZiAobG9nb0xvYWRlZCAmJiBsb2dvLm5hdHVyYWxXaWR0aCA+IDApIHtcbiAgICBjb25zdCBsb2dvVyA9IHcgKiAwLjE1O1xuICAgIGNvbnN0IGxvZ29IID0gbG9nb1cgKiAobG9nby5uYXR1cmFsSGVpZ2h0IC8gbG9nby5uYXR1cmFsV2lkdGgpO1xuICAgIGN0eC5kcmF3SW1hZ2UobG9nbywgdyAvIDIgLSBsb2dvVyAvIDIsIGxvZ29ZIC0gbG9nb0ggLyAyLCBsb2dvVywgbG9nb0gpO1xuICB9IGVsc2Uge1xuICAgIGN0eC5maWxsU3R5bGUgPSBnZXRUaGVtZShzdGF0ZSkuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCA1NHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoXCJPdXRzaWRlLXRoZS1Cb3hcIiwgdyAvIDIsIGxvZ29ZKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdHYW1lcGxheUZyYW1lID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGdhbWVwbGF5RnJhbWUsIGdhbWVwbGF5RnJhbWVMb2FkZWQgfSA9IGdjO1xuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBpZiAoZ2FtZXBsYXlGcmFtZUxvYWRlZCAmJiBnYW1lcGxheUZyYW1lLm5hdHVyYWxXaWR0aCA+IDApIHtcbiAgICBjdHguZHJhd0ltYWdlKFxuICAgICAgZ2FtZXBsYXlGcmFtZSxcbiAgICAgIDQ0MCxcbiAgICAgIDE4MCxcbiAgICAgIDY4OCxcbiAgICAgIDU3MixcbiAgICAgIHRvcEJveFgsXG4gICAgICB0b3BCb3hZLFxuICAgICAgdG9wQm94V2lkdGgsXG4gICAgICB0b3BCb3hIZWlnaHQsXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBnZXRUaGVtZShzdGF0ZSkuc3Ryb2tlO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIGN0eC5zdHJva2VSZWN0KHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0J1dHRvbiA9IChcbiAgZ2M6IEdhbWVDb250ZXh0LFxuICBsYWJlbDogc3RyaW5nLFxuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgdzogbnVtYmVyLFxuICBoOiBudW1iZXIsXG4gIGFjdGlvbjogKCkgPT4gdm9pZCxcbiAgZm9udFNpemUgPSAyMixcbikgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gIGN0eC5saW5lV2lkdGggPSAzO1xuICBjdHguc3Ryb2tlUmVjdCh4LCB5LCB3LCBoKTtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAke2ZvbnRTaXplfXB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KGxhYmVsLCB4ICsgdyAvIDIsIHkgKyBoIC8gMiwgdyAtIDE2KTtcbiAgZ2MuaGl0QXJlYXMucHVzaCh7IHgsIHksIHcsIGgsIGFjdGlvbiB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3Qm90dG9tUGFuZWwgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcbiAgY29uc3QgaXNNb3ZlbWVudExldmVsID0gc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiICYmIHN0YXRlLmN1cnJlbnRMZXZlbCA+PSAxMSAmJiBzdGF0ZS5jdXJyZW50TGV2ZWwgPD0gMjA7XG5cbiAgaWYgKGlzTW92ZW1lbnRMZXZlbCkge1xuICAgIGNvbnN0IG1vdmVtZW50TGF5b3V0ID0gZ2V0TW92ZW1lbnRMYXlvdXQoY3R4KTtcbiAgICBjb25zdCBjdXJyZW50QW5zd2VyID0gZ2MuZ2V0Q3VycmVudEFuc3dlcigpIHx8IFwiKGVtcHR5KVwiO1xuICAgIGNvbnN0IHRpbWVyVGV4dCA9IGAke1N0cmluZyhnYy50aW1lTGVmdFNlY29uZHMpLnBhZFN0YXJ0KDIsIFwiMFwiKX1zYDtcbiAgICBjb25zdCB0aW1lckNvbG9yID0gZ2MudGltZUxlZnRTZWNvbmRzIDwgMTAgPyBcIiNmZjUyNTJcIiA6IHQuZmdNaWQ7XG4gICAgY29uc3Qgc3VibWl0VyA9IDE2MDtcbiAgICBjb25zdCBzdWJtaXRIID0gNDg7XG4gICAgY29uc3Qgc3VibWl0WCA9IG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lV2lkdGggLSBzdWJtaXRXIC0gMzI7XG4gICAgY29uc3Qgc3VibWl0WSA9IG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lSGVpZ2h0IC8gMiAtIHN1Ym1pdEggLyAyO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgY3R4LnN0cm9rZVJlY3QoXG4gICAgICBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVgsXG4gICAgICBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVksXG4gICAgICBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVdpZHRoLFxuICAgICAgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVIZWlnaHQsXG4gICAgKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICBjdHguZm9udCA9IGBib2xkIDI4cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgIGN0eC5maWxsVGV4dChcIkFycmFuZ2UgVGhlIEJsb2Nrc1wiLCAyOCwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVZICsgMjIsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lV2lkdGggKiAwLjUpO1xuXG4gICAgY3R4LmZvbnQgPSBgMTdweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XG4gICAgY3R4LmZpbGxUZXh0KGBRdWl6OiBzcGVsbCAke2djLnF1aXpBbnN3ZXJ9IGluIHRoZSBhbnN3ZXIgem9uZS5gLCAyOCwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVZICsgNjIsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lV2lkdGggKiAwLjU2KTtcblxuICAgIGN0eC5mb250ID0gYDE1cHggJHtib2R5Rm9udH1gO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICAgIGN0eC5maWxsVGV4dChgQ3VycmVudCBBbnN3ZXI6ICR7Y3VycmVudEFuc3dlcn1gLCAyOCwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVZICsgMTAyLCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVdpZHRoICogMC41Mik7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdGltZXJDb2xvcjtcbiAgICBjdHguZmlsbFRleHQoYFRpbWUgTGVmdDogJHt0aW1lclRleHR9YCwgMjgsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIDEzMCwgMTgwKTtcblxuICAgIGRyYXdCdXR0b24oZ2MsIFwiU1VCTUlUXCIsIHN1Ym1pdFgsIHN1Ym1pdFksIHN1Ym1pdFcsIHN1Ym1pdEgsICgpID0+IHtcbiAgICAgIGdjLnN1Ym1pdE1vdmVtZW50QW5zd2VyKCk7XG4gICAgfSwgMTgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgdywgY29udGVudFgsIGNvbnRlbnRXaWR0aCwgYm90dG9tQm94WSwgYm90dG9tQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcblxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gIGN0eC5zdHJva2VSZWN0KGNvbnRlbnRYLCBib3R0b21Cb3hZLCBjb250ZW50V2lkdGgsIGJvdHRvbUJveEhlaWdodCk7XG5cbiAgY29uc3QgY2VudGVyWCA9IHcgLyAyO1xuICBjb25zdCB0ZXh0V2lkdGggPSBjb250ZW50V2lkdGggKiAwLjc0O1xuXG4gIGNvbnN0IGxldmVsRGF0YSA9XG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiXG4gICAgICA/IExFVkVMX0RBVEFbc3RhdGUuY3VycmVudExldmVsIC0gMV1cbiAgICAgIDogeyB0aXRsZTogc3RhdGUuc3RvcnlUaXRsZSwgbGluZXM6IHN0YXRlLnN0b3J5TGluZXMgfTtcblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuXG4gIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChsZXZlbERhdGEudGl0bGUsIGNlbnRlclgsIGJvdHRvbUJveFkgKyAxOCwgdGV4dFdpZHRoKTtcblxuICBjdHguZm9udCA9IGAyMHB4ICR7Ym9keUZvbnR9YDtcbiAgY29uc3QgbGluZUdhcCA9IDMwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsRGF0YS5saW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGN0eC5maWxsVGV4dChsZXZlbERhdGEubGluZXNbaV0sIGNlbnRlclgsIGJvdHRvbUJveFkgKyA2OCArIGkgKiBsaW5lR2FwLCB0ZXh0V2lkdGgpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0xldmVsSFVEID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcbiAgY29uc3QgaXNNb3ZlbWVudExldmVsID0gc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiICYmIHN0YXRlLmN1cnJlbnRMZXZlbCA+PSAxMSAmJiBzdGF0ZS5jdXJyZW50TGV2ZWwgPD0gMjA7XG5cbiAgaWYgKGlzTW92ZW1lbnRMZXZlbCkge1xuICAgIGNvbnN0IG1vdmVtZW50TGF5b3V0ID0gZ2V0TW92ZW1lbnRMYXlvdXQoY3R4KTtcbiAgICBjb25zdCBwYWRYID0gMjg7XG4gICAgY29uc3QgcGFkWSA9IDI4O1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5mb250ID0gYGJvbGQgMjRweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KGBRLiR7c3RhdGUuY3VycmVudExldmVsfWAsIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVggKyBwYWRYLCBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVZICsgcGFkWSk7XG5cbiAgICBjb25zdCBwYXVzZVcgPSA0ODtcbiAgICBjb25zdCBwYXVzZUggPSAzNDtcbiAgICBjb25zdCBwYXVzZVggPSBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVXaWR0aCAtIHBhZFggLSBwYXVzZVc7XG4gICAgY29uc3QgcGF1c2VZID0gbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWSArIHBhZFkgLSBwYXVzZUggLyAyO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zdHJva2VSZWN0KHBhdXNlWCwgcGF1c2VZLCBwYXVzZVcsIHBhdXNlSCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAxNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoXCJJSVwiLCBwYXVzZVggKyBwYXVzZVcgLyAyLCBwYXVzZVkgKyBwYXVzZUggLyAyKTtcbiAgICBnYy5oaXRBcmVhcy5wdXNoKHtcbiAgICAgIHg6IHBhdXNlWCxcbiAgICAgIHk6IHBhdXNlWSxcbiAgICAgIHc6IHBhdXNlVyxcbiAgICAgIGg6IHBhdXNlSCxcbiAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFydFNpemUgPSAyNDtcbiAgICBjb25zdCBoZWFydEdhcCA9IDY7XG4gICAgY29uc3QgbGl2ZXNZID0gbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lSGVpZ2h0IC0gcGFkWTtcbiAgICBjb25zdCB0b3RhbFcgPSAzICogaGVhcnRTaXplICsgMiAqIGhlYXJ0R2FwO1xuICAgIGNvbnN0IGxpdmVzWCA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVdpZHRoIC0gcGFkWCAtIHRvdGFsVztcblxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5mb250ID0gYCR7aGVhcnRTaXplfXB4IHNhbnMtc2VyaWZgO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gaSA8IHN0YXRlLmxpdmVzID8gXCIjZTAzMDMwXCIgOiBzdGF0ZS5kYXJrTW9kZSA/IFwiIzQ0NDQ0NFwiIDogXCIjYmJiYmJiXCI7XG4gICAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICBjdHguZmlsbFRleHQoXCJcXHUyNjY1XCIsIGxpdmVzWCArIGkgKiAoaGVhcnRTaXplICsgaGVhcnRHYXApLCBsaXZlc1kpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBwYWRYID0gdG9wQm94V2lkdGggKiAwLjA1O1xuICBjb25zdCBwYWRZID0gdG9wQm94SGVpZ2h0ICogMC4wODtcblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAyNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KGBRLiR7c3RhdGUuY3VycmVudExldmVsfWAsIHRvcEJveFggKyBwYWRYLCB0b3BCb3hZICsgcGFkWSk7XG5cbiAgY29uc3QgcGF1c2VXID0gNDg7XG4gIGNvbnN0IHBhdXNlSCA9IDM0O1xuICBjb25zdCBwYXVzZVggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggLSBwYWRYIC0gcGF1c2VXO1xuICBjb25zdCBwYXVzZVkgPSB0b3BCb3hZICsgcGFkWSAtIHBhdXNlSCAvIDI7XG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICBjdHgubGluZVdpZHRoID0gMjtcbiAgY3R4LnN0cm9rZVJlY3QocGF1c2VYLCBwYXVzZVksIHBhdXNlVywgcGF1c2VIKTtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAxNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KFwiSUlcIiwgcGF1c2VYICsgcGF1c2VXIC8gMiwgcGF1c2VZICsgcGF1c2VIIC8gMik7XG4gIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgIHg6IHBhdXNlWCxcbiAgICB5OiBwYXVzZVksXG4gICAgdzogcGF1c2VXLFxuICAgIGg6IHBhdXNlSCxcbiAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoZWFydFNpemUgPSAyNDtcbiAgY29uc3QgaGVhcnRHYXAgPSA2O1xuICBjb25zdCBsaXZlc1kgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0IC0gcGFkWTtcbiAgY29uc3QgdG90YWxXID0gMyAqIGhlYXJ0U2l6ZSArIDIgKiBoZWFydEdhcDtcbiAgY29uc3QgbGl2ZXNYID0gdG9wQm94WCArIHRvcEJveFdpZHRoIC0gcGFkWCAtIHRvdGFsVztcblxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgJHtoZWFydFNpemV9cHggc2Fucy1zZXJpZmA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGkgPCBzdGF0ZS5saXZlcyA/IFwiI2UwMzAzMFwiIDogc3RhdGUuZGFya01vZGUgPyBcIiM0NDQ0NDRcIiA6IFwiI2JiYmJiYlwiO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBjdHguZmlsbFRleHQoXCJcXHUyNjY1XCIsIGxpdmVzWCArIGkgKiAoaGVhcnRTaXplICsgaGVhcnRHYXApLCBsaXZlc1kpO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyBnZXRMYXlvdXQsIGdldE1vdmVtZW50TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiwgZHJhd0xldmVsSFVEIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgeyBkcmF3TmFtZUVudHJ5IH0gZnJvbSBcIi4uL2xldmVscy9MZXZlbDFcIjtcbmltcG9ydCB7IGRyYXdMZXZlbDIgfSBmcm9tIFwiLi4vbGV2ZWxzL0xldmVsMlwiO1xuaW1wb3J0IHsgZHJhd0xldmVsMyB9IGZyb20gXCIuLi9sZXZlbHMvTGV2ZWwzXCI7XG5pbXBvcnQgeyBMRVZFTF9DT1VOVCB9IGZyb20gXCIuLi9sZXZlbERhdGFcIjtcblxuY29uc3QgZHJhd0xldmVsTmF2aWdhdGlvbiA9IChnYzogR2FtZUNvbnRleHQsIG5hdllPdmVycmlkZT86IG51bWJlcikgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUgfSA9IGdjO1xuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQsIHRvcEJveFkgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCA9IHcgLyAyO1xuICBjb25zdCBuYXZCdG5IID0gNDI7XG4gIGNvbnN0IG5hdkJ0blcgPSAxNTA7XG4gIGNvbnN0IG5hdlkgPSBuYXZZT3ZlcnJpZGUgPz8gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNzk7XG5cbiAgaWYgKHN0YXRlLnBsYXlNb2RlICE9PSBcImxldmVsc2VsZWN0XCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUuY3VycmVudExldmVsID4gMSkge1xuICAgIGRyYXdCdXR0b24oZ2MsIFwiPC0gUFJFVlwiLCB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA1LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwtLTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sIDE4KTtcbiAgfVxuXG4gIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGN4IC0gbmF2QnRuVyAvIDIsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgIGdjLnJlbmRlcigpO1xuICB9LCAxNik7XG5cbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA8IExFVkVMX0NPVU5UKSB7XG4gICAgZHJhd0J1dHRvbihnYywgXCJORVhUIC0+XCIsIHRvcEJveFggKyB0b3BCb3hXaWR0aCAqIDAuNzcsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSwgMTgpO1xuICB9XG59O1xuXG5jb25zdCBkcmF3TW92ZW1lbnRMZXZlbE5hdmlnYXRpb24gPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc3RhdGUgfSA9IGdjO1xuICBjb25zdCBtb3ZlbWVudExheW91dCA9IGdldE1vdmVtZW50TGF5b3V0KGdjLmN0eCk7XG4gIGNvbnN0IG5hdkJ0bkggPSA0MjtcbiAgY29uc3QgbmF2QnRuVyA9IDE1MDtcbiAgY29uc3QgbmF2WSA9IG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lSGVpZ2h0IC0gbmF2QnRuSCAtIDIyO1xuICBjb25zdCBjZW50ZXJYID0gbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAvIDI7XG5cbiAgaWYgKHN0YXRlLnBsYXlNb2RlICE9PSBcImxldmVsc2VsZWN0XCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc3RhdGUuY3VycmVudExldmVsID4gMSkge1xuICAgIGRyYXdCdXR0b24oZ2MsIFwiPC0gUFJFVlwiLCAyNiwgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xuICAgICAgc3RhdGUuY3VycmVudExldmVsLS07XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LCAxOCk7XG4gIH1cblxuICBkcmF3QnV0dG9uKGdjLCBcIkxFVkVMIFNFTEVDVFwiLCBjZW50ZXJYIC0gbmF2QnRuVyAvIDIsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgIGdjLnJlbmRlcigpO1xuICB9LCAxNik7XG5cbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA8IExFVkVMX0NPVU5UKSB7XG4gICAgZHJhd0J1dHRvbihnYywgXCJORVhUIC0+XCIsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lV2lkdGggLSBuYXZCdG5XIC0gMjYsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSwgMTgpO1xuICB9XG59O1xuXG5jb25zdCBkcmF3QW5zd2VyWm9uZSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHggfSA9IGdjO1xuXG4gIGZvciAoY29uc3Qgc2xvdCBvZiBnYy5hbnN3ZXJTbG90cykge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkyKVwiO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zZXRMaW5lRGFzaChbNCwgNF0pO1xuICAgIGN0eC5zdHJva2VSZWN0KHNsb3QueCwgc2xvdC55LCBzbG90LnNpemUsIHNsb3Quc2l6ZSk7XG4gICAgY3R4LnNldExpbmVEYXNoKFtdKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCA9IHcgLyAyO1xuICBjb25zdCBsdmwgPSBzdGF0ZS5jdXJyZW50TGV2ZWw7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgaWYgKGx2bCA9PT0gMSkge1xuICAgIGRyYXdOYW1lRW50cnkoZ2MpO1xuICAgIGRyYXdMZXZlbEhVRChnYyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGx2bCA9PT0gMikge1xuICAgIGRyYXdMZXZlbDIoZ2MpO1xuICAgIGRyYXdMZXZlbEhVRChnYyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGx2bCA9PT0gMykge1xuICAgIGRyYXdMZXZlbDMoZ2MpO1xuICAgIGRyYXdMZXZlbEhVRChnYyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGx2bCA+PSAxMSAmJiBsdmwgPD0gMjApIHtcbiAgICBjb25zdCBtb3ZlbWVudExheW91dCA9IGdldE1vdmVtZW50TGF5b3V0KGN0eCk7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguc3Ryb2tlUmVjdChcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVgsXG4gICAgICBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVZLFxuICAgICAgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lV2lkdGgsXG4gICAgICBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVIZWlnaHQsXG4gICAgKTtcblxuICAgIGRyYXdBbnN3ZXJab25lKGdjKTtcblxuICAgIGZvciAoY29uc3QgYmxvY2sgb2YgZ2MuYmxvY2tzKSB7XG4gICAgICBibG9jay5kcmF3KGN0eCk7XG4gICAgfVxuXG4gICAgZ2MucGxheWVyLmRyYXcoY3R4KTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICBjdHguZm9udCA9IGAxNHB4ICR7Ym9keUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoXG4gICAgICBgRmFjaW5nOiAke2djLnBsYXllci5nZXRGYWNpbmdEaXJlY3Rpb24oKS50b1VwcGVyQ2FzZSgpfWAsXG4gICAgICBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVYICsgMjQsXG4gICAgICBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVIZWlnaHQgLSAyNCxcbiAgICApO1xuXG4gICAgZHJhd01vdmVtZW50TGV2ZWxOYXZpZ2F0aW9uKGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG5cbiAgY3R4LmZvbnQgPSBgYm9sZCAzNHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KGBMRVZFTCAke2x2bH1gLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTYpO1xuXG4gIGN0eC5mb250ID0gYDIycHggJHtib2R5Rm9udH1gO1xuICBjdHguZmlsbFN0eWxlID0gdC5mZ01pZDtcbiAgY3R4LmZpbGxUZXh0KFwiVGhpcyBsZXZlbCBpcyB1bmRlciBjb25zdHJ1Y3Rpb24uXCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4zOCwgdG9wQm94V2lkdGggKiAwLjYpO1xuXG4gIGN0eC5mb250ID0gYDE2cHggJHtib2R5Rm9udH1gO1xuICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcbiAgY3R4LmZpbGxUZXh0KFwiUXVlc3Rpb25zLCBjaG9pY2VzLCBhbmQgaW50ZXJhY3Rpb25zIHdpbGwgYmUgd2lyZWQgaW4gaGVyZS5cIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjUyLCB0b3BCb3hXaWR0aCAqIDAuNik7XG5cbiAgZHJhd0xldmVsTmF2aWdhdGlvbihnYyk7XG4gIGRyYXdMZXZlbEhVRChnYyk7XG59O1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XG5pbXBvcnQgeyBMRVZFTF9DT1VOVCB9IGZyb20gXCIuLi9sZXZlbERhdGFcIjtcblxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbFNlbGVjdCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuICBjb25zdCBjeCA9IHcgLyAyO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChcIkxFVkVMIFNFTEVDVFwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMSk7XG5cbiAgY29uc3QgY29scyA9IDU7XG4gIGNvbnN0IHRpbGVXID0gdG9wQm94V2lkdGggKiAwLjEzO1xuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMTQ7XG4gIGNvbnN0IGhHYXAgPSAodG9wQm94V2lkdGggKiAwLjc4IC0gdGlsZVcgKiBjb2xzKSAvIChjb2xzIC0gMSk7XG4gIGNvbnN0IHZHYXAgPSB0b3BCb3hIZWlnaHQgKiAwLjA0O1xuICBjb25zdCBncmlkVyA9IHRpbGVXICogY29scyArIGhHYXAgKiAoY29scyAtIDEpO1xuICBjb25zdCBncmlkWCA9IGN4IC0gZ3JpZFcgLyAyO1xuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjE4O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgTEVWRUxfQ09VTlQ7IGkrKykge1xuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xuICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoaSAvIGNvbHMpO1xuICAgIGNvbnN0IHR4ID0gZ3JpZFggKyBjb2wgKiAodGlsZVcgKyBoR2FwKTtcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XG4gICAgY29uc3QgbHZsID0gaSArIDE7XG4gICAgY29uc3QgaXNNb3ZlbWVudExldmVsID0gbHZsID49IDExICYmIGx2bCA8PSAyMDtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGlzTW92ZW1lbnRMZXZlbCA/IHQuZGl2aWRlciA6IHQuc3Ryb2tlO1xuICAgIGN0eC5saW5lV2lkdGggPSBpc01vdmVtZW50TGV2ZWwgPyAyIDogMztcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gaXNNb3ZlbWVudExldmVsID8gdC5mZ01pZCA6IHQuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG5cbiAgICBjdHguZm9udCA9IGBib2xkIDIwcHggJHtkaXNwbGF5Rm9udH1gO1xuICAgIGN0eC5maWxsVGV4dChgJHtsdmx9YCwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjM4KTtcblxuICAgIGN0eC5mb250ID0gYDEwcHggJHtib2R5Rm9udH1gO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xuICAgIGN0eC5maWxsVGV4dChpc01vdmVtZW50TGV2ZWwgPyBcIm1vdmVcIiA6IGBMRVZFTCAke2x2bH1gLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuNzQpO1xuXG4gICAgY29uc3QgY2FwdHVyZWQgPSBsdmw7XG4gICAgZ2MuaGl0QXJlYXMucHVzaCh7XG4gICAgICB4OiB0eCxcbiAgICAgIHk6IHR5LFxuICAgICAgdzogdGlsZVcsXG4gICAgICBoOiB0aWxlSCxcbiAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSBjYXB0dXJlZDtcbiAgICAgICAgc3RhdGUucGxheU1vZGUgPSBcImxldmVsc2VsZWN0XCI7XG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxcIjtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgYmFja1cgPSAxNTA7XG4gIGNvbnN0IGJhY2tIID0gNDI7XG4gIGNvbnN0IGJhY2tYID0gdG9wQm94WCArIHRvcEJveFdpZHRoICogMC4wNDtcbiAgY29uc3QgYmFja1kgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC44MjtcbiAgZHJhd0J1dHRvbihnYywgXCI8LSBCQUNLXCIsIGJhY2tYLCBiYWNrWSwgYmFja1csIGJhY2tILCAoKSA9PiB7XG4gICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfSwgMTgpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9ICAgIGZyb20gJy4uL3RoZW1lJztcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gICBmcm9tICcuLi9sYXlvdXQnO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gIGZyb20gJy4uL3JlbmRlcmVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TWFpbk1lbnUgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BJbm5lclgsIHRvcElubmVyWSwgdG9wSW5uZXJXaWR0aCwgdG9wSW5uZXJIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCAgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgICAgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gICAgPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG5cclxuICBjdHguZm9udCA9IGBib2xkIDQycHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIk1BSU4gTUVOVVwiLCBjeCwgdG9wSW5uZXJZICsgdG9wSW5uZXJIZWlnaHQgKiAwLjE1KTtcclxuXHJcbiAgY29uc3QgYnRuVyAgID0gTWF0aC5taW4oMzAwLCB0b3BJbm5lcldpZHRoICogMC43OCk7XHJcbiAgY29uc3QgYnRuSCAgID0gNTA7XHJcbiAgY29uc3QgYnRuWCAgID0gY3ggLSBidG5XIC8gMjtcclxuICBjb25zdCBzdGFydFkgPSB0b3BJbm5lclkgKyB0b3BJbm5lckhlaWdodCAqIDAuMzI7XHJcbiAgY29uc3Qgc3RyaWRlID0gYnRuSCArIDE0O1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIlNUQVJUIEVYQU1cIiwgYnRuWCwgc3RhcnRZLCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgc3RhdGUubGl2ZXMgICAgICAgID0gMztcclxuICAgIHN0YXRlLnBhdXNlZCAgICAgICA9IGZhbHNlO1xyXG4gICAgc3RhdGUuZ2FtZU92ZXIgICAgID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5wbGF5TW9kZSAgICAgPSBcInBsYXlcIjtcclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsXCI7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJMRVZFTCBTRUxFQ1RcIiwgYnRuWCwgc3RhcnRZICsgc3RyaWRlLCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbHNlbGVjdFwiO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiQ09OVFJPTFNcIiwgYnRuWCwgc3RhcnRZICsgc3RyaWRlICogMiwgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUuY29udHJvbHNPcGVuID0gdHJ1ZTtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFRoZW1lID0gKHN0YXRlOiBHYW1lU3RhdGUpID0+XHJcbiAgc3RhdGUuZGFya01vZGVcclxuICAgID8ge1xyXG4gICAgICAgIGJnOiBcIiMxMTExMTFcIixcclxuICAgICAgICBmZzogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgZmdNaWQ6IFwiI2NjY2NjY1wiLFxyXG4gICAgICAgIGZnRGltOiBcIiM4ODg4ODhcIixcclxuICAgICAgICBzdHJva2U6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIG92ZXJsYXlCZzogXCJyZ2JhKDEwLDEwLDEwLDAuOTApXCIsXHJcbiAgICAgICAgZGl2aWRlcjogXCIjNDQ0NDQ0XCIsXHJcbiAgICAgIH1cclxuICAgIDoge1xyXG4gICAgICAgIGJnOiBcIiNmMGYwZjBcIixcclxuICAgICAgICBmZzogXCIjMTExMTExXCIsXHJcbiAgICAgICAgZmdNaWQ6IFwiIzMzMzMzM1wiLFxyXG4gICAgICAgIGZnRGltOiBcIiM2NjY2NjZcIixcclxuICAgICAgICBzdHJva2U6IFwiIzExMTExMVwiLFxyXG4gICAgICAgIG92ZXJsYXlCZzogXCJyZ2JhKDIyMCwyMjAsMjIwLDAuOTMpXCIsXHJcbiAgICAgICAgZGl2aWRlcjogXCIjYWFhYWFhXCIsXHJcbiAgICAgIH07XHJcbiJdfQ==
