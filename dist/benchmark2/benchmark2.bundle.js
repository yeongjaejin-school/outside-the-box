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

},{"../layout":8,"../theme":21}],15:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9FdmVudHMvRXZlbnQudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9FdmVudHMvRXZlbnRFbWl0dGVyLnRzIiwib3V0c2lkZS10aGUtYm94L0hlbHBlcnMvRXZlbnRzL0V2ZW50TGlzdGVuZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9JbnB1dE1hbmFnZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvSGVscGVycy9QbGF5ZXJDb250cm9sLnRzIiwib3V0c2lkZS10aGUtYm94L0hlbHBlcnMvb2JqZWN0cy9CbG9jay50cyIsIm91dHNpZGUtdGhlLWJveC9IZWxwZXJzL29iamVjdHMvTm9ybWFsQmxvY2sudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sYXlvdXQudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbERhdGEudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbHMvTGV2ZWwxLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxzL0xldmVsMi50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVscy9MZXZlbDMudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9tYWluLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvQ29udHJvbHNPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvb3ZlcmxheXMvUGF1c2VPdmVybGF5LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvcmVuZGVyZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9zY3JlZW5zL0xldmVsLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvc2NyZWVucy9MZXZlbFNlbGVjdC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3NjcmVlbnMvTWFpbk1lbnUudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi90aGVtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBO0FBQUEsSUFFWSxTQUFTLEdBQUEsT0FBQSxDQUFBLFNBQUEsMEJBQVQsU0FBUztFQUFULFNBQVM7RUFBVCxTQUFTO0VBQVQsU0FBUztFQUFBLE9BQVQsU0FBUztBQUFBLE9BTXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQSxJQUlhLFlBQVksR0FBQSxPQUFBLENBQUEsWUFBQTtFQUFBLFNBQUEsYUFBQTtJQUFBLGVBQUEsT0FBQSxZQUFBO0lBQUEsZUFBQSxvQkFDNkIsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUFBO0VBQUEsT0FBQSxZQUFBLENBQUEsWUFBQTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBRTNELFNBQU8sRUFBRSxDQUFJLEtBQWEsRUFBRSxRQUEwQixFQUFFO01BQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQ2pDO01BQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM3QztFQUFDO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFFRCxTQUFPLEdBQUcsQ0FBSSxLQUFhLEVBQUUsUUFBMEIsRUFBRTtNQUNyRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDM0MsSUFBSSxDQUFDLFNBQVMsRUFBRTtNQUVoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FDZCxLQUFLLEVBQ0wsU0FBUyxD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QSxDQUFBLHVCQUFBLENBQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsRUFBQSxNQUFBLENBQUEsWUFBQSxFQUFBLGVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxLQUFBLElBQUEsV0FBQSxJQUFBLE1BQUEsS0FBQSxFQUFBLENBQUEsQ0FBQSxFQUFBLFVBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQSxnQkFBQSxTQUFBLGlKQUFBLENBQUEsRUFBQSxDQUFBLE9BQUEsQ0FBQSxnQkFBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsRUFBQSxRQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxXQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxFQUFBLENBQUEsS0FBQSxDQUFBLFdBQUEsRUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxjQUFBLENBQUEsOEJBQUEsQ0FBQSxRQUFBLENBQUE7QUFBQSxTQUFBLDRCQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSwyQkFBQSxDQUFBLFNBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsTUFBQSxRQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsRUFBQSxLQUFBLDZCQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsV0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsYUFBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxvQkFBQSxDQUFBLCtDQUFBLElBQUEsQ0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQTtBQUFBLFNBQUEsa0JBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLENBQUEsVUFBQSxDQUFBO0FBQUEsU0FBQSxnQkFBQSxDQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxDQUFBLGFBQUEsU0FBQTtBQUFBLFNBQUEsa0JBQUEsQ0FBQSxFQUFBLENBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLEdBQUEsQ0FBQSxDQUFBLFVBQUEsUUFBQSxDQUFBLENBQUEsWUFBQSxrQkFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLFFBQUEsUUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsRUFBQSxjQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxpQkFBQSxDQUFBLENBQUEsQ0FBQSxTQUFBLEVBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxpQkFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLGlCQUFBLFFBQUEsU0FBQSxDQUFBO0FBQUEsU0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxlQUFBLENBQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsQ0FBQSxFQUFBLHlCQUFBLEtBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLEVB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RUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBTTtJQUN0RSxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUk7SUFDekIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ2IsQ0FBQyxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7O0FDekNNLElBQU0sUUFBUSxHQUFBLE9BQUEsQ0FBQSxRQUFBLEdBQUcsU0FBWCxRQUFRLENBQUksS0FBZ0I7RUFBQSxPQUN2QyxLQUFLLENBQUMsUUFBUSxHQUNWO0lBQ0UsRUFBRSxFQUFFLFNBQVM7SUFDYixFQUFFLEVBQUUsU0FBUztJQUNiLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsT0FBTyxFQUFFO0VBQ1gsQ0FBQyxHQUNEO0lBQ0UsRUFBRSxFQUFFLFNBQVM7SUFDYixFQUFFLEVBQUUsU0FBUztJQUNiLEtBQUssRUFBRSxTQUFTO0lBQ2hCLEtBQUssRUFBRSxTQUFTO0lBQ2hCLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLFNBQVMsRUFBRSx3QkFBd0I7SUFDbkMsT0FBTyxFQUFFO0VBQ1gsQ0FBQztBQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy8gRXZlbnRzLnRzXHJcblxyXG5leHBvcnQgZW51bSBHYW1lRXZlbnQge1xyXG4gICAgTU9WRSA9IFwiTU9WRVwiLFxyXG4gICAgREFTSCA9IFwiREFTSFwiLFxyXG4gICAgSE9MRCA9IFwiSE9MRFwiXHJcbn1cclxuXHJcbi8vIFBheWxvYWQgdHlwZXMgZm9yIGVhY2ggZXZlbnRcclxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRXZlbnRQYXlsb2FkIHtcclxuICAgIGR4OiBudW1iZXI7XHJcbiAgICBkeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhc2hFdmVudFBheWxvYWQge31cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9sZEV2ZW50UGF5bG9hZCB7fSIsIi8vIEV2ZW50RW1pdHRlci50c1xyXG5cclxudHlwZSBFdmVudENhbGxiYWNrPFQgPSBhbnk+ID0gKHBheWxvYWQ6IFQpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICAgIHByaXZhdGUgbGlzdGVuZXJzOiBNYXA8c3RyaW5nLCBFdmVudENhbGxiYWNrW10+ID0gbmV3IE1hcCgpO1xyXG5cclxuICAgIHB1YmxpYyBvbjxUPihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRDYWxsYmFjazxUPikge1xyXG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnMuaGFzKGV2ZW50KSkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQoZXZlbnQsIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KSEucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZjxUPihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRDYWxsYmFjazxUPikge1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMubGlzdGVuZXJzLmdldChldmVudCk7XHJcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuc2V0KFxyXG4gICAgICAgICAgICBldmVudCxcclxuICAgICAgICAgICAgY2FsbGJhY2tzLmZpbHRlcihjYiA9PiBjYiAhPT0gY2FsbGJhY2spXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZW1pdDxUPihldmVudDogc3RyaW5nLCBwYXlsb2FkOiBUKSB7XHJcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KTtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNiIG9mIGNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICBjYihwYXlsb2FkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBFdmVudExpc3RlbmVyLnRzXHJcblxyXG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi9FdmVudEVtaXR0ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmVudExpc3RlbmVyIHtcclxuICAgIHByb3RlY3RlZCBlbWl0dGVyOiBFdmVudEVtaXR0ZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZW1pdHRlcjogRXZlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbGlzdGVuPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAocGF5bG9hZDogVCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihldmVudCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdG9wTGlzdGVuaW5nPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAocGF5bG9hZDogVCkgPT4gdm9pZCkge1xyXG4gICAgICAgIHRoaXMuZW1pdHRlci5vZmYoZXZlbnQsIGNhbGxiYWNrKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0V2ZW50cy9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCB7IEdhbWVFdmVudCB9IGZyb20gXCIuL0V2ZW50cy9FdmVudC50c1wiO1xuXG5leHBvcnQgY2xhc3MgSW5wdXRNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGtleXM6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XG4gICAgcHJpdmF0ZSBlbWl0dGVyOiBFdmVudEVtaXR0ZXI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBtb3ZlbWVudEtleXMgPSBuZXcgU2V0KFtcIndcIiwgXCJhXCIsIFwic1wiLCBcImRcIiwgXCIgXCIsIFwiaFwiXSk7XG5cbiAgICBjb25zdHJ1Y3RvcihlbWl0dGVyOiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgICAgdGhpcy5lbWl0dGVyID0gZW1pdHRlcjtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHRoaXMub25LZXlEb3duKGUpKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCAoZSkgPT4gdGhpcy5vbktleVVwKGUpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3Qgd2FzUHJlc3NlZCA9IHRoaXMua2V5c1trZXldID09PSB0cnVlO1xuICAgICAgICB0aGlzLmtleXNba2V5XSA9IHRydWU7XG5cbiAgICAgICAgaWYgKHRoaXMubW92ZW1lbnRLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF3YXNQcmVzc2VkKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcIiBcIikge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KEdhbWVFdmVudC5EQVNILCB7fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiaFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoR2FtZUV2ZW50LkhPTEQsIHt9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlVcChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBjb25zdCBrZXkgPSBldmVudC5rZXkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgdGhpcy5rZXlzW2tleV0gPSBmYWxzZTtcblxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge1xuICAgICAgICBsZXQgZHggPSAwO1xuICAgICAgICBsZXQgZHkgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJ3XCJdKSBkeSAtPSAxO1xuICAgICAgICBpZiAodGhpcy5rZXlzW1wic1wiXSkgZHkgKz0gMTtcbiAgICAgICAgaWYgKHRoaXMua2V5c1tcImFcIl0pIGR4IC09IDE7XG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJkXCJdKSBkeCArPSAxO1xuXG4gICAgICAgIGlmIChkeCAhPT0gMCB8fCBkeSAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoR2FtZUV2ZW50Lk1PVkUsIHsgZHgsIGR5IH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL0V2ZW50cy9FdmVudExpc3RlbmVyXCI7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiLi9FdmVudHMvRXZlbnRFbWl0dGVyXCI7XG5pbXBvcnQgeyBHYW1lRXZlbnQsIE1vdmVFdmVudFBheWxvYWQgfSBmcm9tIFwiLi9FdmVudHMvRXZlbnQudHNcIjtcbmltcG9ydCB7IEJsb2NrIH0gZnJvbSBcIi4vb2JqZWN0cy9CbG9ja1wiO1xuaW1wb3J0IHR5cGUgeyBBbnN3ZXJTbG90RW50aXR5IH0gZnJvbSBcIi4uL2JlbmNobWFyazIvdHlwZXNcIjtcblxudHlwZSBEaXJlY3Rpb24gPSBcInVwXCIgfCBcImRvd25cIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG50eXBlIEJvdW5kcyA9IHtcbiAgICBtaW5YOiBudW1iZXI7XG4gICAgbWF4WDogbnVtYmVyO1xuICAgIG1pblk6IG51bWJlcjtcbiAgICBtYXhZOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbCBleHRlbmRzIEV2ZW50TGlzdGVuZXIge1xuICAgIHB1YmxpYyB4ID0gMDtcbiAgICBwdWJsaWMgeSA9IDA7XG4gICAgcHVibGljIHJlYWRvbmx5IHdpZHRoID0gNDg7XG4gICAgcHVibGljIHJlYWRvbmx5IGhlaWdodCA9IDQ4O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZCA9IDU7XG4gICAgcHJpdmF0ZSBkaXJlY3Rpb246IERpcmVjdGlvbiA9IFwiZG93blwiO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3ByaXRlczogUmVjb3JkPERpcmVjdGlvbiwgSFRNTEltYWdlRWxlbWVudD47XG4gICAgcHJpdmF0ZSBib3VuZHM6IEJvdW5kcyA9IHtcbiAgICAgICAgbWluWDogMCxcbiAgICAgICAgbWF4WDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICBtaW5ZOiAwLFxuICAgICAgICBtYXhZOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgfTtcbiAgICBwcml2YXRlIGJsb2NrczogQmxvY2tbXSA9IFtdO1xuICAgIHByaXZhdGUgYW5zd2VyU2xvdHM6IEFuc3dlclNsb3RFbnRpdHlbXSA9IFtdO1xuICAgIHByaXZhdGUgaGVsZEJsb2NrOiBCbG9jayB8IG51bGwgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoZW1pdHRlcjogRXZlbnRFbWl0dGVyKSB7XG4gICAgICAgIHN1cGVyKGVtaXR0ZXIpO1xuXG4gICAgICAgIHRoaXMuc3ByaXRlcyA9IHtcbiAgICAgICAgICAgIHVwOiB0aGlzLmxvYWRTcHJpdGUoXCIvYmVuY2htYXJrMi9hc3NldHMvcGxheWVyL1BsYXllcl9VcC5wbmdcIiksXG4gICAgICAgICAgICBkb3duOiB0aGlzLmxvYWRTcHJpdGUoXCIvYmVuY2htYXJrMi9hc3NldHMvcGxheWVyL1BsYXllcl9Eb3duLnBuZ1wiKSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubG9hZFNwcml0ZShcIi9iZW5jaG1hcmsyL2Fzc2V0cy9wbGF5ZXIvUGxheWVyX0xlZnQucG5nXCIpLFxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMubG9hZFNwcml0ZShcIi9iZW5jaG1hcmsyL2Fzc2V0cy9wbGF5ZXIvUGxheWVyX1JpZ2h0LnBuZ1wiKSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnggPSA0MDA7XG4gICAgICAgIHRoaXMueSA9IDMwMDtcblxuICAgICAgICB0aGlzLmxpc3RlbjxNb3ZlRXZlbnRQYXlsb2FkPihHYW1lRXZlbnQuTU9WRSwgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZShkYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW4oR2FtZUV2ZW50LkhPTEQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSG9sZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge31cblxuICAgIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuc3ByaXRlc1t0aGlzLmRpcmVjdGlvbl07XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jb21wbGV0ZSAmJiBzcHJpdGUubmF0dXJhbFdpZHRoID4gMCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZTUzOTM1XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCb3VuZHMobWluWDogbnVtYmVyLCBtaW5ZOiBudW1iZXIsIG1heFg6IG51bWJlciwgbWF4WTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYm91bmRzID0geyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZIH07XG4gICAgICAgIHRoaXMuY2xhbXBUb0JvdW5kcygpO1xuXG4gICAgICAgIGlmICh0aGlzLmhlbGRCbG9jaykge1xuICAgICAgICAgICAgY29uc3QgaGVsZFBvc2l0aW9uID0gdGhpcy5nZXRIZWxkQmxvY2tQb3NpdGlvbih0aGlzLngsIHRoaXMueSwgdGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5oZWxkQmxvY2subW92ZVRvKGhlbGRQb3NpdGlvbi54LCBoZWxkUG9zaXRpb24ueSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0QmxvY2tzKGJsb2NrczogQmxvY2tbXSkge1xuICAgICAgICB0aGlzLmJsb2NrcyA9IGJsb2NrcztcblxuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2sgJiYgIWJsb2Nrcy5pbmNsdWRlcyh0aGlzLmhlbGRCbG9jaykpIHtcbiAgICAgICAgICAgIHRoaXMuaGVsZEJsb2NrID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRBbnN3ZXJTbG90cyhzbG90czogQW5zd2VyU2xvdEVudGl0eVtdKSB7XG4gICAgICAgIHRoaXMuYW5zd2VyU2xvdHMgPSBzbG90cztcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBcImRvd25cIikge1xuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2spIHtcbiAgICAgICAgICAgIHRoaXMuZGV0YWNoSGVsZEJsb2NrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5jbGFtcFRvQm91bmRzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldEZhY2luZ0RpcmVjdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZFNwcml0ZShzcmM6IHN0cmluZykge1xuICAgICAgICBjb25zdCBzcHJpdGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgc3ByaXRlLnNyYyA9IHNyYztcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1vdmUoZGF0YTogTW92ZUV2ZW50UGF5bG9hZCkge1xuICAgICAgICBjb25zdCBuZXh0RGlyZWN0aW9uID0gdGhpcy5yZXNvbHZlRGlyZWN0aW9uKGRhdGEpO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG5leHREaXJlY3Rpb247XG5cbiAgICAgICAgY29uc3QgY2FuZGlkYXRlWCA9IHRoaXMuY2xhbXBWYWx1ZSh0aGlzLnggKyBkYXRhLmR4ICogdGhpcy5zcGVlZCwgdGhpcy5ib3VuZHMubWluWCwgdGhpcy5ib3VuZHMubWF4WCk7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVkgPSB0aGlzLmNsYW1wVmFsdWUodGhpcy55ICsgZGF0YS5keSAqIHRoaXMuc3BlZWQsIHRoaXMuYm91bmRzLm1pblksIHRoaXMuYm91bmRzLm1heFkpO1xuICAgICAgICBjb25zdCBvdGhlckJsb2NrcyA9IHRoaXMuYmxvY2tzLmZpbHRlcigoYmxvY2spID0+IGJsb2NrICE9PSB0aGlzLmhlbGRCbG9jayk7XG5cbiAgICAgICAgaWYgKHRoaXMuY29sbGlkZXNXaXRoQW55QmxvY2soY2FuZGlkYXRlWCwgY2FuZGlkYXRlWSwgb3RoZXJCbG9ja3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGhlbGRQb3NpdGlvbiA9IHRoaXMuZ2V0SGVsZEJsb2NrUG9zaXRpb24oY2FuZGlkYXRlWCwgY2FuZGlkYXRlWSwgbmV4dERpcmVjdGlvbik7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5yZWN0Rml0c0JvdW5kcyhoZWxkUG9zaXRpb24ueCwgaGVsZFBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlkZXNXaXRoQW55QmxvY2soaGVsZFBvc2l0aW9uLngsIGhlbGRQb3NpdGlvbi55LCBvdGhlckJsb2NrcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuY2xlYXJBbnN3ZXJTbG90Rm9yQmxvY2sodGhpcy5oZWxkQmxvY2spO1xuICAgICAgICAgICAgdGhpcy54ID0gY2FuZGlkYXRlWDtcbiAgICAgICAgICAgIHRoaXMueSA9IGNhbmRpZGF0ZVk7XG4gICAgICAgICAgICB0aGlzLmhlbGRCbG9jay5tb3ZlVG8oaGVsZFBvc2l0aW9uLngsIGhlbGRQb3NpdGlvbi55KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IGNhbmRpZGF0ZVg7XG4gICAgICAgIHRoaXMueSA9IGNhbmRpZGF0ZVk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVIb2xkKCkge1xuICAgICAgICBpZiAodGhpcy5oZWxkQmxvY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbGVhc2VTbG90ID0gdGhpcy5nZXRJbnRlcnNlY3RpbmdFbXB0eUFuc3dlclNsb3QodGhpcy5oZWxkQmxvY2spO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJCbG9ja3MgPSB0aGlzLmJsb2Nrcy5maWx0ZXIoKGNhbmRpZGF0ZSkgPT4gY2FuZGlkYXRlICE9PSB0aGlzLmhlbGRCbG9jayk7XG5cbiAgICAgICAgICAgIGlmIChyZWxlYXNlU2xvdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJBbnN3ZXJTbG90Rm9yQmxvY2sodGhpcy5oZWxkQmxvY2spO1xuICAgICAgICAgICAgICAgIHJlbGVhc2VTbG90LmJsb2NrID0gdGhpcy5oZWxkQmxvY2s7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWxkQmxvY2subW92ZVRvKHJlbGVhc2VTbG90LngsIHJlbGVhc2VTbG90LnkpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0YWNoSGVsZEJsb2NrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xsaWRlc1dpdGhBbnlCbG9jayh0aGlzLmhlbGRCbG9jay54LCB0aGlzLmhlbGRCbG9jay55LCBvdGhlckJsb2NrcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5yZWN0Rml0c0JvdW5kcyh0aGlzLmhlbGRCbG9jay54LCB0aGlzLmhlbGRCbG9jay55LCB0aGlzLmhlbGRCbG9jay5zaXplLCB0aGlzLmhlbGRCbG9jay5zaXplKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5kZXRhY2hIZWxkQmxvY2soKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJsb2NrID0gdGhpcy5maW5kTmVhcmJ5RmFjaW5nQmxvY2soKTtcbiAgICAgICAgaWYgKCFibG9jaykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGVsZFBvc2l0aW9uID0gdGhpcy5nZXRIZWxkQmxvY2tQb3NpdGlvbih0aGlzLngsIHRoaXMueSwgdGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICBjb25zdCBvdGhlckJsb2NrcyA9IHRoaXMuYmxvY2tzLmZpbHRlcigoY2FuZGlkYXRlKSA9PiBjYW5kaWRhdGUgIT09IGJsb2NrKTtcblxuICAgICAgICBpZiAoIXRoaXMucmVjdEZpdHNCb3VuZHMoaGVsZFBvc2l0aW9uLngsIGhlbGRQb3NpdGlvbi55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbGxpZGVzV2l0aEFueUJsb2NrKGhlbGRQb3NpdGlvbi54LCBoZWxkUG9zaXRpb24ueSwgb3RoZXJCbG9ja3MpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyQW5zd2VyU2xvdEZvckJsb2NrKGJsb2NrKTtcbiAgICAgICAgdGhpcy5oZWxkQmxvY2sgPSBibG9jaztcbiAgICAgICAgYmxvY2suc2V0SGVsZCh0cnVlKTtcbiAgICAgICAgYmxvY2subW92ZVRvKGhlbGRQb3NpdGlvbi54LCBoZWxkUG9zaXRpb24ueSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBmaW5kTmVhcmJ5RmFjaW5nQmxvY2soKSB7XG4gICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICBjb25zdCBwbGF5ZXJDZW50ZXJYID0gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHBsYXllckNlbnRlclkgPSB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7XG5cbiAgICAgICAgbGV0IGNsb3Nlc3RCbG9jazogQmxvY2sgfCBudWxsID0gbnVsbDtcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0YW5jZSA9IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcblxuICAgICAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIHRoaXMuYmxvY2tzKSB7XG4gICAgICAgICAgICBpZiAoYmxvY2suaGVsZCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBibG9ja0NlbnRlclggPSBibG9jay54ICsgYmxvY2suc2l6ZSAvIDI7XG4gICAgICAgICAgICBjb25zdCBibG9ja0NlbnRlclkgPSBibG9jay55ICsgYmxvY2suc2l6ZSAvIDI7XG4gICAgICAgICAgICBjb25zdCBob3Jpem9udGFsRGlzdGFuY2UgPSBNYXRoLmFicyhibG9ja0NlbnRlclggLSBwbGF5ZXJDZW50ZXJYKTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2FsRGlzdGFuY2UgPSBNYXRoLmFicyhibG9ja0NlbnRlclkgLSBwbGF5ZXJDZW50ZXJZKTtcblxuICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwiZG93blwiICYmIGJsb2NrLnkgPj0gdGhpcy55KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRnZUdhcCA9IGJsb2NrLnkgLSAodGhpcy55ICsgdGhpcy5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIGlmIChob3Jpem9udGFsRGlzdGFuY2UgPD0gdGhyZXNob2xkICYmIGVkZ2VHYXAgPj0gMCAmJiBlZGdlR2FwIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gZWRnZUdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJ1cFwiICYmIGJsb2NrLnkgKyBibG9jay5zaXplIDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRnZUdhcCA9IHRoaXMueSAtIChibG9jay55ICsgYmxvY2suc2l6ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGhvcml6b250YWxEaXN0YW5jZSA8PSB0aHJlc2hvbGQgJiYgZWRnZUdhcCA+PSAwICYmIGVkZ2VHYXAgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBlZGdlR2FwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgJiYgYmxvY2sueCA+PSB0aGlzLngpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGdlR2FwID0gYmxvY2sueCAtICh0aGlzLnggKyB0aGlzLndpZHRoKTtcbiAgICAgICAgICAgICAgICBpZiAodmVydGljYWxEaXN0YW5jZSA8PSB0aHJlc2hvbGQgJiYgZWRnZUdhcCA+PSAwICYmIGVkZ2VHYXAgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBlZGdlR2FwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiBibG9jay54ICsgYmxvY2suc2l6ZSA8PSB0aGlzLnggKyB0aGlzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWRnZUdhcCA9IHRoaXMueCAtIChibG9jay54ICsgYmxvY2suc2l6ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHZlcnRpY2FsRGlzdGFuY2UgPD0gdGhyZXNob2xkICYmIGVkZ2VHYXAgPj0gMCAmJiBlZGdlR2FwIDwgdGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlID0gZWRnZUdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IGNsb3Nlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICAgIGNsb3Nlc3RCbG9jayA9IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3RCbG9jaztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEhlbGRCbG9ja1Bvc2l0aW9uKHBsYXllclg6IG51bWJlciwgcGxheWVyWTogbnVtYmVyLCBkaXJlY3Rpb246IERpcmVjdGlvbikge1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogcGxheWVyWCwgeTogcGxheWVyWSAtIHRoaXMuaGVpZ2h0IH07XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHBsYXllclgsIHk6IHBsYXllclkgKyB0aGlzLmhlaWdodCB9O1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBwbGF5ZXJYIC0gdGhpcy53aWR0aCwgeTogcGxheWVyWSB9O1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogcGxheWVyWCArIHRoaXMud2lkdGgsIHk6IHBsYXllclkgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzb2x2ZURpcmVjdGlvbihkYXRhOiBNb3ZlRXZlbnRQYXlsb2FkKTogRGlyZWN0aW9uIHtcbiAgICAgICAgaWYgKGRhdGEuZHggPiAwKSByZXR1cm4gXCJyaWdodFwiO1xuICAgICAgICBpZiAoZGF0YS5keCA8IDApIHJldHVybiBcImxlZnRcIjtcbiAgICAgICAgaWYgKGRhdGEuZHkgPiAwKSByZXR1cm4gXCJkb3duXCI7XG4gICAgICAgIHJldHVybiBcInVwXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJbnRlcnNlY3RpbmdFbXB0eUFuc3dlclNsb3QoYmxvY2s6IEJsb2NrKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrQ2VudGVyWCA9IGJsb2NrLnggKyBibG9jay5zaXplIC8gMjtcbiAgICAgICAgY29uc3QgYmxvY2tDZW50ZXJZID0gYmxvY2sueSArIGJsb2NrLnNpemUgLyAyO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmFuc3dlclNsb3RzLmZpbmQoKHNsb3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9jY3VwaWVkQnlPdGhlckJsb2NrID0gc2xvdC5ibG9jayAhPT0gbnVsbCAmJiBzbG90LmJsb2NrICE9PSBibG9jaztcbiAgICAgICAgICAgIGlmIChvY2N1cGllZEJ5T3RoZXJCbG9jaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBibG9ja0NlbnRlclggPj0gc2xvdC54ICYmXG4gICAgICAgICAgICAgICAgYmxvY2tDZW50ZXJYIDw9IHNsb3QueCArIHNsb3Quc2l6ZSAmJlxuICAgICAgICAgICAgICAgIGJsb2NrQ2VudGVyWSA+PSBzbG90LnkgJiZcbiAgICAgICAgICAgICAgICBibG9ja0NlbnRlclkgPD0gc2xvdC55ICsgc2xvdC5zaXplXG4gICAgICAgICAgICApO1xuICAgICAgICB9KSA/PyBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xlYXJBbnN3ZXJTbG90Rm9yQmxvY2soYmxvY2s6IEJsb2NrKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2xvdCBvZiB0aGlzLmFuc3dlclNsb3RzKSB7XG4gICAgICAgICAgICBpZiAoc2xvdC5ibG9jayA9PT0gYmxvY2spIHtcbiAgICAgICAgICAgICAgICBzbG90LmJsb2NrID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZGV0YWNoSGVsZEJsb2NrKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVsZEJsb2NrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhlbGRCbG9jay5zZXRIZWxkKGZhbHNlKTtcbiAgICAgICAgdGhpcy5oZWxkQmxvY2sgPSBudWxsO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29sbGlkZXNXaXRoQW55QmxvY2soeDogbnVtYmVyLCB5OiBudW1iZXIsIGJsb2NrczogQmxvY2tbXSkge1xuICAgICAgICByZXR1cm4gYmxvY2tzLnNvbWUoKGJsb2NrKSA9PiBibG9jay5jb2xsaWRlc1dpdGhSZWN0KHgsIHksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWN0Rml0c0JvdW5kcyh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHggPj0gdGhpcy5ib3VuZHMubWluWCAmJlxuICAgICAgICAgICAgeSA+PSB0aGlzLmJvdW5kcy5taW5ZICYmXG4gICAgICAgICAgICB4ICsgd2lkdGggPD0gdGhpcy5ib3VuZHMubWF4WCArIHdpZHRoICYmXG4gICAgICAgICAgICB5ICsgaGVpZ2h0IDw9IHRoaXMuYm91bmRzLm1heFkgKyBoZWlnaHRcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsYW1wVG9Cb3VuZHMoKSB7XG4gICAgICAgIHRoaXMueCA9IHRoaXMuY2xhbXBWYWx1ZSh0aGlzLngsIHRoaXMuYm91bmRzLm1pblgsIHRoaXMuYm91bmRzLm1heFgpO1xuICAgICAgICB0aGlzLnkgPSB0aGlzLmNsYW1wVmFsdWUodGhpcy55LCB0aGlzLmJvdW5kcy5taW5ZLCB0aGlzLmJvdW5kcy5tYXhZKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNsYW1wVmFsdWUodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgbWluKSwgbWF4KTtcbiAgICB9XG59XG4iLCJleHBvcnQgdHlwZSBCbG9ja1R5cGUgPSBcIm5vcm1hbFwiO1xuXG5jb25zdCBpc1ZhbGlkVmFsdWUgPSAodmFsdWU6IHN0cmluZykgPT4ge1xuICAgIGlmICgvXlthLXpdJC9pLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICgvXlxcZHsxLDJ9JC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbnVtZXJpY1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG51bWVyaWNWYWx1ZSA+PSAwICYmIG51bWVyaWNWYWx1ZSA8PSA5OTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmxvY2sge1xuICAgIHB1YmxpYyB4OiBudW1iZXI7XG4gICAgcHVibGljIHk6IG51bWJlcjtcbiAgICBwdWJsaWMgcmVhZG9ubHkgc2l6ZTogbnVtYmVyO1xuICAgIHB1YmxpYyByZWFkb25seSBjb2xvcjogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSB0eXBlOiBCbG9ja1R5cGU7XG4gICAgcHVibGljIGhlbGQgPSBmYWxzZTtcblxuICAgIHByb3RlY3RlZCBjb25zdHJ1Y3Rvcih0eXBlOiBCbG9ja1R5cGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFZhbHVlID0gYCR7dmFsdWV9YC50cmltKCkudG9VcHBlckNhc2UoKTtcblxuICAgICAgICBpZiAoIWlzVmFsaWRWYWx1ZShub3JtYWxpemVkVmFsdWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgYmxvY2sgdmFsdWUgXCIke3ZhbHVlfVwiLiBCbG9ja3MgbXVzdCB1c2Ugb25lIGxldHRlciBvciBhIG51bWJlciBmcm9tIDAgdG8gOTkuYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMudmFsdWUgPSBub3JtYWxpemVkVmFsdWU7XG4gICAgfVxuXG4gICAgcHVibGljIGRyYXcoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpIHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuaGVsZCA/IFwiIzNhM2EzYVwiIDogXCIjMTExMTExXCI7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmhlbGQgPyAzIDogMjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMTExMTExXCI7XG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICAgICAgY3R4LmZvbnQgPSBgYm9sZCAke01hdGgubWF4KDE4LCBNYXRoLmZsb29yKHRoaXMuc2l6ZSAqIDAuNDIpKX1weCBcIlRyZWJ1Y2hldCBNU1wiLCBzYW5zLXNlcmlmYDtcbiAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMudmFsdWUsIHRoaXMueCArIHRoaXMuc2l6ZSAvIDIsIHRoaXMueSArIHRoaXMuc2l6ZSAvIDIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjb2xsaWRlc1dpdGhSZWN0KHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgeCA8IHRoaXMueCArIHRoaXMuc2l6ZSAmJlxuICAgICAgICAgICAgeCArIHdpZHRoID4gdGhpcy54ICYmXG4gICAgICAgICAgICB5IDwgdGhpcy55ICsgdGhpcy5zaXplICYmXG4gICAgICAgICAgICB5ICsgaGVpZ2h0ID4gdGhpcy55XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVUbyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRIZWxkKGhlbGQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5oZWxkID0gaGVsZDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCbG9jayB9IGZyb20gXCIuL0Jsb2NrXCI7XG5cbmV4cG9ydCBjbGFzcyBOb3JtYWxCbG9jayBleHRlbmRzIEJsb2NrIHtcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2l6ZTogbnVtYmVyLCBjb2xvcjogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKFwibm9ybWFsXCIsIHgsIHksIHNpemUsIGNvbG9yLCB2YWx1ZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGdldExheW91dCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICBjb25zdCB3ID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgY29uc3QgaCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHcgKiAwLjg0O1xuICBjb25zdCBjb250ZW50WCA9ICh3IC0gY29udGVudFdpZHRoKSAvIDI7XG4gIGNvbnN0IGxvZ29ZID0gaCAqIDAuMDg7XG5cbiAgY29uc3QgdG9wQm94V2lkdGggPSBjb250ZW50V2lkdGg7XG4gIGNvbnN0IHRvcEJveEhlaWdodCA9IGggKiAwLjQ4O1xuICBjb25zdCB0b3BCb3hYID0gY29udGVudFg7XG4gIGNvbnN0IHRvcEJveFkgPSBoICogMC4xODtcblxuICBjb25zdCB0b3BJbm5lcldpZHRoID0gdG9wQm94V2lkdGggKiAwLjQyO1xuICBjb25zdCB0b3BJbm5lckhlaWdodCA9IHRvcEJveEhlaWdodCAqIDAuNjI7XG4gIGNvbnN0IHRvcElubmVyWCA9IHcgLyAyIC0gdG9wSW5uZXJXaWR0aCAvIDI7XG4gIGNvbnN0IHRvcElubmVyWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjE2O1xuXG4gIGNvbnN0IG1vdmVtZW50QXJlYVdpZHRoID0gdG9wQm94V2lkdGggKiAwLjQyO1xuICBjb25zdCBtb3ZlbWVudEFyZWFIZWlnaHQgPSB0b3BCb3hIZWlnaHQgKiAwLjYyO1xuICBjb25zdCBtb3ZlbWVudEFyZWFYID0gdG9wSW5uZXJYO1xuICBjb25zdCBtb3ZlbWVudEFyZWFZID0gdG9wSW5uZXJZO1xuXG4gIGNvbnN0IGdhcCA9IGggKiAwLjA0O1xuICBjb25zdCBib3R0b21Cb3hZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCArIGdhcDtcbiAgY29uc3QgYm90dG9tQm94SGVpZ2h0ID0gaCAqIDAuMjI7XG5cbiAgcmV0dXJuIHtcbiAgICB3LFxuICAgIGgsXG4gICAgY29udGVudFdpZHRoLFxuICAgIGNvbnRlbnRYLFxuICAgIGxvZ29ZLFxuICAgIHRvcEJveFgsXG4gICAgdG9wQm94WSxcbiAgICB0b3BCb3hXaWR0aCxcbiAgICB0b3BCb3hIZWlnaHQsXG4gICAgdG9wSW5uZXJYLFxuICAgIHRvcElubmVyWSxcbiAgICB0b3BJbm5lcldpZHRoLFxuICAgIHRvcElubmVySGVpZ2h0LFxuICAgIG1vdmVtZW50QXJlYVgsXG4gICAgbW92ZW1lbnRBcmVhWSxcbiAgICBtb3ZlbWVudEFyZWFXaWR0aCxcbiAgICBtb3ZlbWVudEFyZWFIZWlnaHQsXG4gICAgYm90dG9tQm94WSxcbiAgICBib3R0b21Cb3hIZWlnaHQsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0TW92ZW1lbnRMYXlvdXQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgY29uc3QgdyA9IGN0eC5jYW52YXMud2lkdGg7XG4gIGNvbnN0IGggPSBjdHguY2FudmFzLmhlaWdodDtcblxuICBjb25zdCBnYW1lRnJhbWVYID0gMDtcbiAgY29uc3QgZ2FtZUZyYW1lWSA9IDA7XG4gIGNvbnN0IGdhbWVGcmFtZVdpZHRoID0gdztcbiAgY29uc3QgZ2FtZUZyYW1lSGVpZ2h0ID0gaCAqIDAuNztcblxuICBjb25zdCBib3R0b21GcmFtZVggPSAwO1xuICBjb25zdCBib3R0b21GcmFtZVkgPSBnYW1lRnJhbWVIZWlnaHQ7XG4gIGNvbnN0IGJvdHRvbUZyYW1lV2lkdGggPSB3O1xuICBjb25zdCBib3R0b21GcmFtZUhlaWdodCA9IGggLSBnYW1lRnJhbWVIZWlnaHQ7XG5cbiAgY29uc3QgZnJhbWVQYWRkaW5nWCA9IDI0O1xuICBjb25zdCBmcmFtZVBhZGRpbmdUb3AgPSAyNDtcbiAgY29uc3QgZnJhbWVQYWRkaW5nQm90dG9tID0gNTY7XG4gIGNvbnN0IG1vdmVtZW50QXJlYVggPSBnYW1lRnJhbWVYICsgZnJhbWVQYWRkaW5nWDtcbiAgY29uc3QgbW92ZW1lbnRBcmVhWSA9IGdhbWVGcmFtZVkgKyBmcmFtZVBhZGRpbmdUb3A7XG4gIGNvbnN0IG1vdmVtZW50QXJlYVdpZHRoID0gZ2FtZUZyYW1lV2lkdGggLSBmcmFtZVBhZGRpbmdYICogMjtcbiAgY29uc3QgbW92ZW1lbnRBcmVhSGVpZ2h0ID0gZ2FtZUZyYW1lSGVpZ2h0IC0gZnJhbWVQYWRkaW5nVG9wIC0gZnJhbWVQYWRkaW5nQm90dG9tO1xuXG4gIHJldHVybiB7XG4gICAgdyxcbiAgICBoLFxuICAgIGdhbWVGcmFtZVgsXG4gICAgZ2FtZUZyYW1lWSxcbiAgICBnYW1lRnJhbWVXaWR0aCxcbiAgICBnYW1lRnJhbWVIZWlnaHQsXG4gICAgYm90dG9tRnJhbWVYLFxuICAgIGJvdHRvbUZyYW1lWSxcbiAgICBib3R0b21GcmFtZVdpZHRoLFxuICAgIGJvdHRvbUZyYW1lSGVpZ2h0LFxuICAgIG1vdmVtZW50QXJlYVgsXG4gICAgbW92ZW1lbnRBcmVhWSxcbiAgICBtb3ZlbWVudEFyZWFXaWR0aCxcbiAgICBtb3ZlbWVudEFyZWFIZWlnaHQsXG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IExFVkVMX0NPVU5UID0gMjA7XHJcblxyXG5leHBvcnQgY29uc3QgTEVWRUxfREFUQTogeyB0aXRsZTogc3RyaW5nOyBsaW5lczogc3RyaW5nW10gfVtdID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIldoYXQncyB5b3VyIG5hbWU/XCIsXHJcbiAgICBsaW5lczogW1wiRW50ZXIgeW91ciBuYW1lIGJlbG93LlwiLCBcIkxlYXZlIGl0IGJsYW5rIGFuZCB3ZSdsbCBjYWxsIHlvdSBCb3guXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2hhdCBpcyAxNSArIDE1P1wiLFxyXG4gICAgbGluZXM6IFtcIlBpY2sgdGhlIGNvcnJlY3QgYW5zd2VyIGZyb20gdGhlIG9wdGlvbnMgYWJvdmUuXCJdLFxyXG4gIH0sXHJcbiAgeyB0aXRsZTogXCJDbGljayB0aGUgZG90XCIsIGxpbmVzOiBbXSB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDQgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgNSBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA2IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDcgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgOCBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA5IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDEwIGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TmFtZUVudHJ5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUHJvbXB0XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJXaGF0J3MgeW91ciBuYW1lP1wiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMik7XHJcblxyXG4gIGN0eC5mb250ID0gYDE4cHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIFwiTGVhdmUgaXQgYmxhbmsgYW5kIHdlJ2xsIGNhbGwgeW91IEJveC5cIixcclxuICAgIGN4LFxyXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzIsXHJcbiAgICB0b3BCb3hXaWR0aCAqIDAuNjUsXHJcbiAgKTtcclxuXHJcbiAgLy8gSW5wdXQgYm94XHJcbiAgY29uc3QgaW5wdXRXID0gdG9wQm94V2lkdGggKiAwLjU7XHJcbiAgY29uc3QgaW5wdXRIID0gNTI7XHJcbiAgY29uc3QgaW5wdXRYID0gY3ggLSBpbnB1dFcgLyAyO1xyXG4gIGNvbnN0IGlucHV0WSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjQyO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBzdGF0ZS5uYW1lRm9jdXNlZFxyXG4gICAgPyBzdGF0ZS5kYXJrTW9kZVxyXG4gICAgICA/IFwiI2ZmZmZmZlwiXHJcbiAgICAgIDogXCIjMTExMTExXCJcclxuICAgIDogdC5kaXZpZGVyO1xyXG4gIGN0eC5saW5lV2lkdGggPSBzdGF0ZS5uYW1lRm9jdXNlZCA/IDMgOiAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KGlucHV0WCwgaW5wdXRZLCBpbnB1dFcsIGlucHV0SCk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlUZXh0ID1cclxuICAgIHN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPiAwXHJcbiAgICAgID8gc3RhdGUubmFtZUlucHV0XHJcbiAgICAgIDogc3RhdGUubmFtZUZvY3VzZWRcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IFwiVHlwZSB5b3VyIG5hbWXigKZcIjtcclxuICBjdHguZmlsbFN0eWxlID0gc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA+IDAgPyB0LmZnIDogdC5mZ0RpbTtcclxuICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgMjJweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KGRpc3BsYXlUZXh0LCBpbnB1dFggKyAxNCwgaW5wdXRZICsgaW5wdXRIIC8gMiwgaW5wdXRXIC0gMjgpO1xyXG5cclxuICAvLyBCbGlua2luZyBjdXJzb3JcclxuICBpZiAoc3RhdGUubmFtZUZvY3VzZWQpIHtcclxuICAgIGNvbnN0IG1lYXN1cmVkID0gY3R4Lm1lYXN1cmVUZXh0KHN0YXRlLm5hbWVJbnB1dCkud2lkdGg7XHJcbiAgICBjb25zdCBjdXJzb3JYID0gaW5wdXRYICsgMTQgKyBNYXRoLm1pbihtZWFzdXJlZCwgaW5wdXRXIC0gMjgpO1xyXG4gICAgY29uc3QgY3Vyc29yWSA9IGlucHV0WSArIGlucHV0SCAqIDAuMjtcclxuICAgIGNvbnN0IGN1cnNvckggPSBpbnB1dEggKiAwLjY7XHJcbiAgICBjb25zdCBibGluayA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDUzMCkgJSAyID09PSAwO1xyXG4gICAgaWYgKGJsaW5rKSB7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuZmc7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oY3Vyc29yWCwgY3Vyc29yWSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY3Vyc29yWCwgY3Vyc29yWSArIGN1cnNvckgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbnB1dCBib3ggaGl0IGFyZWFcclxuICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgIHg6IGlucHV0WCxcclxuICAgIHk6IGlucHV0WSxcclxuICAgIHc6IGlucHV0VyxcclxuICAgIGg6IGlucHV0SCxcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gQ29uZmlybSBidXR0b25cclxuICBjb25zdCBjb25maXJtVyA9IDE4MDtcclxuICBjb25zdCBjb25maXJtSCA9IDQ4O1xyXG4gIGRyYXdCdXR0b24oXHJcbiAgICBnYyxcclxuICAgIFwiQ09ORklSTSDihpJcIixcclxuICAgIGN4IC0gY29uZmlybVcgLyAyLFxyXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNjIsXHJcbiAgICBjb25maXJtVyxcclxuICAgIGNvbmZpcm1ILFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5wbGF5ZXJOYW1lID0gc3RhdGUubmFtZUlucHV0LnRyaW0oKSB8fCBcIkJveFwiO1xyXG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICAyMCxcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMiA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUXVlc3Rpb24gaGVhZGVyXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJXaGF0IGlzIDE1ICsgMTU/XCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNCk7XHJcblxyXG4gIC8vIDLDlzIgYW5zd2VyIGdyaWRcclxuICBjb25zdCBhbnN3ZXJzID0gW1xyXG4gICAgeyBsYWJlbDogXCIyNVwiLCBjb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgeyBsYWJlbDogXCIzMFwiLCBjb3JyZWN0OiB0cnVlIH0sXHJcbiAgICB7IGxhYmVsOiBcIjI4XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICB7IGxhYmVsOiBcIjM1XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY29scyA9IDI7XHJcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcclxuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XHJcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcclxuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcclxuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XHJcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XHJcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XHJcbiAgICBjb25zdCBhbnMgPSBhbnN3ZXJzW2ldO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZvbnQgPSBgYm9sZCAzNnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChhbnMubGFiZWwsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XHJcblxyXG4gICAgY29uc3QgY2FwdHVyZWQgPSBhbnMuY29ycmVjdDtcclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcHR1cmVkKSB7XHJcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAzO1xyXG4gICAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdjLmxvc2VMaWZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMyA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0LCBib3R0b21Cb3hZIH0gPVxyXG4gICAgZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICAvLyAyw5cyIGdyaWQgb2YgZGVjb3kgb3B0aW9ucyDigJQgYWxsIHdyb25nXHJcbiAgY29uc3QgY29scyA9IDI7XHJcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcclxuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XHJcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcclxuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcclxuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgY29uc3QgY29sID0gaSAlIGNvbHM7XHJcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2xzKTtcclxuICAgIGNvbnN0IHR4ID0gZ3JpZFggKyBjb2wgKiAodGlsZVcgKyBoR2FwKTtcclxuICAgIGNvbnN0IHR5ID0gZ3JpZFkgKyByb3cgKiAodGlsZUggKyB2R2FwKTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAvLyBUaGUgd29yZCBcImRvdFwiXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcImRvdFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xyXG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgIC8vIEEgbGl0ZXJhbCBkb3RcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMiwgMTAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xyXG4gICAgICAvLyBUaHJlZSBkb3RzXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIuKAoiDigKIg4oCiXCIsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBEZXBhcnRtZW50IG9mIFNhbml0YXRpb25cclxuICAgICAgY3R4LmZvbnQgPSBgYm9sZCAxNXB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiRGVwYXJ0bWVudFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuMzQsIHRpbGVXIC0gMTYpO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJvZiBTYW5pdGF0aW9uXCIsXHJcbiAgICAgICAgdHggKyB0aWxlVyAvIDIsXHJcbiAgICAgICAgdHkgKyB0aWxlSCAqIDAuNTcsXHJcbiAgICAgICAgdGlsZVcgLSAxNixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCIoRC5PLlMuKVwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuNzgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiBnYy5sb3NlTGlmZSgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIaWRkZW4gaGl0IGFyZWE6IHRoZSB0aXR0bGUgKGRvdCkgb24gdGhlICdpJyBpbiBcIkNsaWNrXCIgaW4gdGhlIGJvdHRvbSBwYW5lbC5cclxuICAvLyBCb3R0b20gcGFuZWwgdGl0bGUgXCJDbGljayB0aGUgZG90LlwiIGlzIGRyYXduIGJvbGQgMzBweCwgY2VudGVyZWQgYXQgKHcvMiwgYm90dG9tQm94WSsxOCksXHJcbiAgLy8gdGV4dEJhc2VsaW5lPVwidG9wXCIuIFdlIG1lYXN1cmUgdG8gZmluZCB0aGUgJ2knIHgtcG9zaXRpb24sIHRoZW4gZXN0aW1hdGUgdGhlIHRpdHRsZSdzIHkuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjb25zdCBmdWxsU3RyID0gXCJDbGljayB0aGUgZG90XCI7XHJcbiAgY29uc3QgZnVsbFcgPSBjdHgubWVhc3VyZVRleHQoZnVsbFN0cikud2lkdGg7XHJcbiAgY29uc3QgdGV4dExlZnQgPSBjeCAtIGZ1bGxXIC8gMjtcclxuICBjb25zdCBwcmVmaXhXID0gY3R4Lm1lYXN1cmVUZXh0KFwiQ2xcIikud2lkdGg7XHJcbiAgY29uc3QgaUNoYXJXID0gY3R4Lm1lYXN1cmVUZXh0KFwiaVwiKS53aWR0aDtcclxuICBjb25zdCBpRG90Q1ggPSB0ZXh0TGVmdCArIHByZWZpeFcgKyBpQ2hhclcgLyAyO1xyXG4gIGNvbnN0IGlEb3RDWSA9IGJvdHRvbUJveFkgKyAxOCArIDU7IC8vIH41cHggYmVsb3cgdG9wIGJhc2VsaW5lIOKJiCB0aXR0bGUgcG9zaXRpb25cclxuICBjb25zdCBoaXRSID0gMTA7XHJcblxyXG4gIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgeDogaURvdENYIC0gaGl0UixcclxuICAgIHk6IGlEb3RDWSAtIGhpdFIsXHJcbiAgICB3OiBoaXRSICogMixcclxuICAgIGg6IGhpdFIgKiAyLFxyXG4gICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDQ7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuIiwiY29uc29sZS5sb2coXCJCRU5DSE1BUksgMiBNQUlOIExPQURFRFwiKTtcblxuaW1wb3J0IHsgR2FtZUNvbnRleHQsIEdhbWVTdGF0ZSwgTW92ZW1lbnRBcmVhIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGRyYXdCYWNrZ3JvdW5kLCBkcmF3TG9nbywgZHJhd0dhbWVwbGF5RnJhbWUsIGRyYXdCb3R0b21QYW5lbCB9IGZyb20gXCIuL3JlbmRlcmVyXCI7XG5pbXBvcnQgeyBkcmF3TWFpbk1lbnUgfSBmcm9tIFwiLi9zY3JlZW5zL01haW5NZW51XCI7XG5pbXBvcnQgeyBkcmF3TGV2ZWxTZWxlY3QgfSBmcm9tIFwiLi9zY3JlZW5zL0xldmVsU2VsZWN0XCI7XG5pbXBvcnQgeyBkcmF3TGV2ZWwgfSBmcm9tIFwiLi9zY3JlZW5zL0xldmVsXCI7XG5pbXBvcnQgeyBkcmF3UGF1c2VPdmVybGF5IH0gZnJvbSBcIi4vb3ZlcmxheXMvUGF1c2VPdmVybGF5XCI7XG5pbXBvcnQgeyBkcmF3Q29udHJvbHNPdmVybGF5IH0gZnJvbSBcIi4vb3ZlcmxheXMvQ29udHJvbHNPdmVybGF5XCI7XG5pbXBvcnQgeyBkcmF3R2FtZU92ZXJPdmVybGF5IH0gZnJvbSBcIi4vb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5XCI7XG5pbXBvcnQgeyBnZXRMYXlvdXQsIGdldE1vdmVtZW50TGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuLi9IZWxwZXJzL0V2ZW50cy9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCB7IElucHV0TWFuYWdlciB9IGZyb20gXCIuLi9IZWxwZXJzL0lucHV0TWFuYWdlclwiO1xuaW1wb3J0IHsgUGxheWVyQ29udHJvbCB9IGZyb20gXCIuLi9IZWxwZXJzL1BsYXllckNvbnRyb2xcIjtcbmltcG9ydCB7IE5vcm1hbEJsb2NrIH0gZnJvbSBcIi4uL0hlbHBlcnMvb2JqZWN0cy9Ob3JtYWxCbG9ja1wiO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XG4gIGNvbnN0IGRlYnVnQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZWJ1Zy1jYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsO1xuICBjb25zdCB0ZXh0Q2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0LWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XG5cbiAgaWYgKCFnYW1lQ2FudmFzIHx8ICFkZWJ1Z0NhbnZhcyB8fCAhdGV4dENhbnZhcykge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIG9uZSBvciBtb3JlIGNhbnZhcyBlbGVtZW50cy5cIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY3R4ID0gZ2FtZUNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gIGlmICghY3R4KSB7XG4gICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBnZXQgMkQgY29udGV4dC5cIik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgc3RhdGU6IEdhbWVTdGF0ZSA9IHtcbiAgICBjdXJyZW50U2NyZWVuOiBcIm1haW5tZW51XCIsXG4gICAgY3VycmVudExldmVsOiAxLFxuICAgIGxpdmVzOiAzLFxuICAgIHBhdXNlZDogZmFsc2UsXG4gICAgY29udHJvbHNPcGVuOiBmYWxzZSxcbiAgICBkYXJrTW9kZTogdHJ1ZSxcbiAgICBzdG9yeVRpdGxlOiBcIk91dHNpZGUtdGhlLUJveCBUaGlua2luZyBDZXJ0aWZpY2F0aW9uXCIsXG4gICAgc3RvcnlMaW5lczogW1xuICAgICAgXCJDb21wbGV0ZSB0aGlzIGFzc2Vzc21lbnQgdG8gZWFybiB5b3VyIE90QiBUaGlua2luZyBDZXJ0aWZpY2F0ZS5cIixcbiAgICAgIFwiRGVtb25zdHJhdGUgeW91ciBhYmlsaXR5IHRvIGFwcHJvYWNoIHByb2JsZW1zIGZyb20gdW5jb252ZW50aW9uYWwgYW5nbGVzLlwiLFxuICAgICAgXCJDYW5kaWRhdGVzIHdobyBwYXNzIG1heSBsaXN0IHRoaXMgY3JlZGVudGlhbCBvbiB0aGVpciBMaW5rZWRJbiBvciByZXN1bWUuXCIsXG4gICAgXSxcbiAgICBwbGF5ZXJOYW1lOiBcIkJveFwiLFxuICAgIG5hbWVJbnB1dDogXCJcIixcbiAgICBuYW1lRm9jdXNlZDogZmFsc2UsXG4gICAgcGxheU1vZGU6IFwicGxheVwiLFxuICAgIGdhbWVPdmVyOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdCBlbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBjb25zdCBpbnB1dCA9IG5ldyBJbnB1dE1hbmFnZXIoZW1pdHRlcik7XG4gIGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXJDb250cm9sKGVtaXR0ZXIpO1xuICBsZXQgcHJldmlvdXNMZXZlbCA9IHN0YXRlLmN1cnJlbnRMZXZlbDtcbiAgbGV0IHByZXZpb3VzU2NyZWVuID0gc3RhdGUuY3VycmVudFNjcmVlbjtcbiAgbGV0IG5lZWRzTW92ZW1lbnRSZXNldCA9IGZhbHNlO1xuICBsZXQgbGFzdFRpbWVyVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuXG4gIGNvbnN0IGRlZmF1bHRNb3ZlbWVudEFyZWE6IE1vdmVtZW50QXJlYSA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9O1xuXG4gIGNvbnN0IGdjOiBHYW1lQ29udGV4dCA9IHtcbiAgICBjdHgsXG4gICAgc3RhdGUsXG4gICAgaGl0QXJlYXM6IFtdLFxuICAgIHJlbmRlcjogKCkgPT4ge30sXG4gICAgbG9zZUxpZmU6ICgpID0+IHt9LFxuICAgIHJlc2V0UGxheWVyTmFtZTogKCkgPT4ge30sXG4gICAgc3VibWl0TW92ZW1lbnRBbnN3ZXI6ICgpID0+IHt9LFxuICAgIGdldEN1cnJlbnRBbnN3ZXI6ICgpID0+IFwiXCIsXG4gICAgZGlzcGxheUZvbnQ6IGBcIlRyZWJ1Y2hldCBNU1wiLCBcIlZlcmRhbmFcIiwgc2Fucy1zZXJpZmAsXG4gICAgYm9keUZvbnQ6IGBcIlRyZWJ1Y2hldCBNU1wiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWZgLFxuICAgIGxvZ286IG5ldyBJbWFnZSgpLFxuICAgIGdhbWVwbGF5RnJhbWU6IG5ldyBJbWFnZSgpLFxuICAgIGxvZ29Mb2FkZWQ6IGZhbHNlLFxuICAgIGdhbWVwbGF5RnJhbWVMb2FkZWQ6IGZhbHNlLFxuICAgIHBsYXllcixcbiAgICBibG9ja3M6IFtdLFxuICAgIGFuc3dlclNsb3RzOiBbXSxcbiAgICBtb3ZlbWVudEFyZWE6IGRlZmF1bHRNb3ZlbWVudEFyZWEsXG4gICAgcXVpekFuc3dlcjogXCJBQjdcIixcbiAgICB0aW1lTGVmdFNlY29uZHM6IDMwLFxuICB9O1xuXG4gIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IChsZXZlbDogbnVtYmVyKSA9PiBsZXZlbCA+PSAxMSAmJiBsZXZlbCA8PSAyMDtcblxuICBjb25zdCBzeW5jTW92ZW1lbnRBcmVhID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVtZW50TGF5b3V0ID0gZ2V0TW92ZW1lbnRMYXlvdXQoY3R4KTtcbiAgICBjb25zdCBzbG90R2FwID0gMTA7XG4gICAgY29uc3Qgc2xvdFNpemUgPSBwbGF5ZXIud2lkdGg7XG4gICAgY29uc3QgYW5zd2VyQ291bnQgPSAxMDtcbiAgICBjb25zdCBhbnN3ZXJab25lV2lkdGggPSBhbnN3ZXJDb3VudCAqIHNsb3RTaXplICsgKGFuc3dlckNvdW50IC0gMSkgKiBzbG90R2FwO1xuICAgIGNvbnN0IGFuc3dlclpvbmVYID0gbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWCArIChtb3ZlbWVudExheW91dC5nYW1lRnJhbWVXaWR0aCAtIGFuc3dlclpvbmVXaWR0aCkgLyAyO1xuICAgIGNvbnN0IGFuc3dlclpvbmVZID0gbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWSArIDI4O1xuXG4gICAgZ2MuYW5zd2VyU2xvdHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBhbnN3ZXJDb3VudCB9LCAoXywgaW5kZXgpID0+ICh7XG4gICAgICB4OiBhbnN3ZXJab25lWCArIGluZGV4ICogKHNsb3RTaXplICsgc2xvdEdhcCksXG4gICAgICB5OiBhbnN3ZXJab25lWSxcbiAgICAgIHNpemU6IHNsb3RTaXplLFxuICAgICAgYmxvY2s6IG51bGwsXG4gICAgfSkpO1xuXG4gICAgZ2MubW92ZW1lbnRBcmVhID0ge1xuICAgICAgeDogbW92ZW1lbnRMYXlvdXQubW92ZW1lbnRBcmVhWCxcbiAgICAgIHk6IG1vdmVtZW50TGF5b3V0Lm1vdmVtZW50QXJlYVksXG4gICAgICB3aWR0aDogbW92ZW1lbnRMYXlvdXQubW92ZW1lbnRBcmVhV2lkdGgsXG4gICAgICBoZWlnaHQ6IG1vdmVtZW50TGF5b3V0Lm1vdmVtZW50QXJlYUhlaWdodCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGJ1aWxkTW92ZW1lbnRCbG9ja3MgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5LCB3aWR0aCwgaGVpZ2h0IH0gPSBnYy5tb3ZlbWVudEFyZWE7XG4gICAgY29uc3Qgc2l6ZSA9IHBsYXllci53aWR0aDtcbiAgICBjb25zdCBzdGFydFggPSB4ICsgd2lkdGggKiAwLjE4O1xuICAgIGNvbnN0IHN0YXJ0WSA9IHkgKyBoZWlnaHQgKiAwLjIyO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5ldyBOb3JtYWxCbG9jayhzdGFydFgsIHN0YXJ0WSwgc2l6ZSwgXCIjZmZmZmZmXCIsIFwiQVwiKSxcbiAgICAgIG5ldyBOb3JtYWxCbG9jayhzdGFydFggKyBzaXplICogMi4yLCBzdGFydFksIHNpemUsIFwiI2ZmZmZmZlwiLCBcIkJcIiksXG4gICAgICBuZXcgTm9ybWFsQmxvY2soc3RhcnRYICsgc2l6ZSAqIDQuNCwgc3RhcnRZLCBzaXplLCBcIiNmZmZmZmZcIiwgXCI3XCIpLFxuICAgICAgbmV3IE5vcm1hbEJsb2NrKHN0YXJ0WCArIHNpemUgKiAxLjEsIHN0YXJ0WSArIHNpemUgKiAyLjEsIHNpemUsIFwiI2ZmZmZmZlwiLCBcIkNcIiksXG4gICAgICBuZXcgTm9ybWFsQmxvY2soc3RhcnRYICsgc2l6ZSAqIDMuNSwgc3RhcnRZICsgc2l6ZSAqIDIuMSwgc2l6ZSwgXCIjZmZmZmZmXCIsIFwiNVwiKSxcbiAgICBdO1xuICB9O1xuXG4gIGdjLmdldEN1cnJlbnRBbnN3ZXIgPSAoKSA9PiB7XG4gICAgbGV0IGFuc3dlciA9IFwiXCI7XG5cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgZ2MuYW5zd2VyU2xvdHMpIHtcbiAgICAgIGlmICghc2xvdC5ibG9jaykge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgYW5zd2VyICs9IHNsb3QuYmxvY2sudmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFuc3dlcjtcbiAgfTtcblxuICBnYy5zdWJtaXRNb3ZlbWVudEFuc3dlciA9ICgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50QW5zd2VyID0gZ2MuZ2V0Q3VycmVudEFuc3dlcigpO1xuICAgIGlmIChjdXJyZW50QW5zd2VyICE9PSBnYy5xdWl6QW5zd2VyKSB7XG4gICAgICBnYy5sb3NlTGlmZSgpO1xuICAgICAgbmVlZHNNb3ZlbWVudFJlc2V0ID0gdHJ1ZTtcbiAgICAgIGdjLnRpbWVMZWZ0U2Vjb25kcyA9IDMwO1xuICAgICAgbGFzdFRpbWVyVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGdjLnN0YXRlLmN1cnJlbnRMZXZlbCA8IDIwKSB7XG4gICAgICBnYy5zdGF0ZS5jdXJyZW50TGV2ZWwrKztcbiAgICAgIG5lZWRzTW92ZW1lbnRSZXNldCA9IHRydWU7XG4gICAgICBnYy50aW1lTGVmdFNlY29uZHMgPSAzMDtcbiAgICAgIGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdjLnN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH07XG5cbiAgY29uc3Qgc3luY01vdmVtZW50U2NlbmUgPSAocmVzZXRTY2VuZSA9IGZhbHNlKSA9PiB7XG4gICAgc3luY01vdmVtZW50QXJlYSgpO1xuXG4gICAgY29uc3QgbWluWCA9IGdjLm1vdmVtZW50QXJlYS54O1xuICAgIGNvbnN0IG1pblkgPSBnYy5tb3ZlbWVudEFyZWEueTtcbiAgICBjb25zdCBtYXhYID0gZ2MubW92ZW1lbnRBcmVhLnggKyBnYy5tb3ZlbWVudEFyZWEud2lkdGggLSBwbGF5ZXIud2lkdGg7XG4gICAgY29uc3QgbWF4WSA9IGdjLm1vdmVtZW50QXJlYS55ICsgZ2MubW92ZW1lbnRBcmVhLmhlaWdodCAtIHBsYXllci5oZWlnaHQ7XG5cbiAgICBwbGF5ZXIuc2V0Qm91bmRzKG1pblgsIG1pblksIG1heFgsIG1heFkpO1xuICAgIHBsYXllci5zZXRBbnN3ZXJTbG90cyhnYy5hbnN3ZXJTbG90cyk7XG5cbiAgICBpZiAocmVzZXRTY2VuZSkge1xuICAgICAgZ2MuYmxvY2tzID0gYnVpbGRNb3ZlbWVudEJsb2NrcygpO1xuICAgICAgcGxheWVyLnNldEJsb2NrcyhnYy5ibG9ja3MpO1xuICAgICAgcGxheWVyLnJlc2V0UG9zaXRpb24oXG4gICAgICAgIG1pblggKyBwbGF5ZXIud2lkdGgsXG4gICAgICAgIG1pblkgKyBnYy5tb3ZlbWVudEFyZWEuaGVpZ2h0IC8gMiAtIHBsYXllci5oZWlnaHQgLyAyLFxuICAgICAgKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwbGF5ZXIuc2V0QmxvY2tzKGdjLmJsb2Nrcyk7XG4gIH07XG5cbiAgZ2MucmVzZXRQbGF5ZXJOYW1lID0gKCkgPT4ge1xuICAgIGdjLnN0YXRlLnBsYXllck5hbWUgPSBcIkJveFwiO1xuICAgIGdjLnN0YXRlLm5hbWVJbnB1dCA9IFwiXCI7XG4gICAgZ2Muc3RhdGUubmFtZUZvY3VzZWQgPSBmYWxzZTtcbiAgfTtcblxuICBnYy5sb3NlTGlmZSA9ICgpID0+IHtcbiAgICBnYy5zdGF0ZS5saXZlcy0tO1xuICAgIGlmIChnYy5zdGF0ZS5saXZlcyA8PSAwKSB7XG4gICAgICBnYy5zdGF0ZS5saXZlcyA9IDA7XG4gICAgICBnYy5zdGF0ZS5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICB9O1xuXG4gIGdjLnJlbmRlciA9ICgpID0+IHtcbiAgICBjb25zdCBtb3ZlbWVudExldmVsQWN0aXZlID0gZ2Muc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiICYmIGlzTW92ZW1lbnRMZXZlbChnYy5zdGF0ZS5jdXJyZW50TGV2ZWwpO1xuICAgIGNvbnN0IGVudGVyaW5nTW92ZW1lbnRMZXZlbCA9XG4gICAgICBtb3ZlbWVudExldmVsQWN0aXZlICYmIChwcmV2aW91c1NjcmVlbiAhPT0gXCJsZXZlbFwiIHx8IHByZXZpb3VzTGV2ZWwgIT09IGdjLnN0YXRlLmN1cnJlbnRMZXZlbCk7XG5cbiAgICBpZiAobW92ZW1lbnRMZXZlbEFjdGl2ZSkge1xuICAgICAgc3luY01vdmVtZW50U2NlbmUoZW50ZXJpbmdNb3ZlbWVudExldmVsIHx8IGdjLmJsb2Nrcy5sZW5ndGggPT09IDAgfHwgbmVlZHNNb3ZlbWVudFJlc2V0KTtcbiAgICAgIG5lZWRzTW92ZW1lbnRSZXNldCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYy5ibG9ja3MgPSBbXTtcbiAgICAgIGdjLmFuc3dlclNsb3RzID0gW107XG4gICAgICBwbGF5ZXIuc2V0QmxvY2tzKFtdKTtcbiAgICAgIHBsYXllci5zZXRBbnN3ZXJTbG90cyhbXSk7XG4gICAgICBnYy50aW1lTGVmdFNlY29uZHMgPSAzMDtcbiAgICAgIGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGNvbnN0IHsgbW92ZW1lbnRBcmVhWCwgbW92ZW1lbnRBcmVhWSwgbW92ZW1lbnRBcmVhV2lkdGgsIG1vdmVtZW50QXJlYUhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gICAgICBnYy5tb3ZlbWVudEFyZWEgPSB7XG4gICAgICAgIHg6IG1vdmVtZW50QXJlYVgsXG4gICAgICAgIHk6IG1vdmVtZW50QXJlYVksXG4gICAgICAgIHdpZHRoOiBtb3ZlbWVudEFyZWFXaWR0aCxcbiAgICAgICAgaGVpZ2h0OiBtb3ZlbWVudEFyZWFIZWlnaHQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGdjLmhpdEFyZWFzID0gW107XG4gICAgZHJhd0JhY2tncm91bmQoZ2MpO1xuXG4gICAgaWYgKCFtb3ZlbWVudExldmVsQWN0aXZlKSB7XG4gICAgICBkcmF3TG9nbyhnYyk7XG4gICAgICBkcmF3R2FtZXBsYXlGcmFtZShnYyk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChnYy5zdGF0ZS5jdXJyZW50U2NyZWVuKSB7XG4gICAgICBjYXNlIFwibWFpbm1lbnVcIjpcbiAgICAgICAgZHJhd01haW5NZW51KGdjKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGV2ZWxzZWxlY3RcIjpcbiAgICAgICAgZHJhd0xldmVsU2VsZWN0KGdjKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGV2ZWxcIjpcbiAgICAgICAgZHJhd0xldmVsKGdjKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZHJhd0JvdHRvbVBhbmVsKGdjKTtcblxuICAgIGlmIChnYy5zdGF0ZS5wYXVzZWQpIGRyYXdQYXVzZU92ZXJsYXkoZ2MpO1xuICAgIGlmIChnYy5zdGF0ZS5jb250cm9sc09wZW4pIGRyYXdDb250cm9sc092ZXJsYXkoZ2MpO1xuICAgIGlmIChnYy5zdGF0ZS5nYW1lT3ZlcikgZHJhd0dhbWVPdmVyT3ZlcmxheShnYyk7XG5cbiAgICBwcmV2aW91c0xldmVsID0gZ2Muc3RhdGUuY3VycmVudExldmVsO1xuICAgIHByZXZpb3VzU2NyZWVuID0gZ2Muc3RhdGUuY3VycmVudFNjcmVlbjtcbiAgfTtcblxuICBjb25zdCByZXNpemVDYW52YXNlcyA9ICgpID0+IHtcbiAgICBjb25zdCB3ID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgY29uc3QgaCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBnYW1lQ2FudmFzLndpZHRoID0gZGVidWdDYW52YXMud2lkdGggPSB3O1xuICAgIGdhbWVDYW52YXMuaGVpZ2h0ID0gZGVidWdDYW52YXMuaGVpZ2h0ID0gaDtcbiAgICBuZWVkc01vdmVtZW50UmVzZXQgPSB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IHRvQ2FudmFzID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCByZWN0ID0gZ2FtZUNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBzY2FsZVggPSBnYW1lQ2FudmFzLndpZHRoIC8gcmVjdC53aWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSBnYW1lQ2FudmFzLmhlaWdodCAvIHJlY3QuaGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IChlLmNsaWVudFggLSByZWN0LmxlZnQpICogc2NhbGVYLFxuICAgICAgeTogKGUuY2xpZW50WSAtIHJlY3QudG9wKSAqIHNjYWxlWSxcbiAgICB9O1xuICB9O1xuXG4gIGdhbWVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0b0NhbnZhcyhlKTtcbiAgICBmb3IgKGNvbnN0IGFyZWEgb2YgZ2MuaGl0QXJlYXMpIHtcbiAgICAgIGlmICh4ID49IGFyZWEueCAmJiB4IDw9IGFyZWEueCArIGFyZWEudyAmJiB5ID49IGFyZWEueSAmJiB5IDw9IGFyZWEueSArIGFyZWEuaCkge1xuICAgICAgICBhcmVhLmFjdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGdhbWVDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdG9DYW52YXMoZSk7XG4gICAgY29uc3Qgb3ZlciA9IGdjLmhpdEFyZWFzLnNvbWUoXG4gICAgICAoYXJlYSkgPT4geCA+PSBhcmVhLnggJiYgeCA8PSBhcmVhLnggKyBhcmVhLncgJiYgeSA+PSBhcmVhLnkgJiYgeSA8PSBhcmVhLnkgKyBhcmVhLmgsXG4gICAgKTtcbiAgICBnYW1lQ2FudmFzLnN0eWxlLmN1cnNvciA9IG92ZXIgPyBcInBvaW50ZXJcIiA6IFwiZGVmYXVsdFwiO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZ2Muc3RhdGUubmFtZUZvY3VzZWQgJiYgIWdjLnN0YXRlLnBhdXNlZCAmJiAhZ2Muc3RhdGUuY29udHJvbHNPcGVuKSB7XG4gICAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICAgICAgZ2Muc3RhdGUubmFtZUZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgZ2Muc3RhdGUucGxheWVyTmFtZSA9IGdjLnN0YXRlLm5hbWVJbnB1dC50cmltKCkgfHwgXCJCb3hcIjtcbiAgICAgICAgZ2Muc3RhdGUubmFtZUZvY3VzZWQgPSBmYWxzZTtcbiAgICAgICAgZ2Muc3RhdGUuY3VycmVudExldmVsID0gMjtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiKSB7XG4gICAgICAgIGdjLnN0YXRlLm5hbWVJbnB1dCA9IGdjLnN0YXRlLm5hbWVJbnB1dC5zbGljZSgwLCAtMSk7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlLmtleS5sZW5ndGggPT09IDEgJiYgZ2Muc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA8IDI0KSB7XG4gICAgICAgIGdjLnN0YXRlLm5hbWVJbnB1dCArPSBlLmtleTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgaWYgKGdjLnN0YXRlLmNvbnRyb2xzT3Blbikge1xuICAgICAgICBnYy5zdGF0ZS5jb250cm9sc09wZW4gPSBmYWxzZTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICB9IGVsc2UgaWYgKGdjLnN0YXRlLnBhdXNlZCkge1xuICAgICAgICBnYy5zdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB7XG4gICAgcmVzaXplQ2FudmFzZXMoKTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfSk7XG5cbiAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGlmIChnYy5zdGF0ZS5uYW1lRm9jdXNlZCkgZ2MucmVuZGVyKCk7XG4gIH0sIDUzMCk7XG5cbiAgZ2MubG9nby5vbmxvYWQgPSAoKSA9PiB7XG4gICAgZ2MubG9nb0xvYWRlZCA9IHRydWU7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH07XG4gIGdjLmxvZ28ub25lcnJvciA9ICgpID0+IHtcbiAgICBnYy5sb2dvTG9hZGVkID0gZmFsc2U7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH07XG4gIGdjLmdhbWVwbGF5RnJhbWUub25sb2FkID0gKCkgPT4ge1xuICAgIGdjLmdhbWVwbGF5RnJhbWVMb2FkZWQgPSB0cnVlO1xuICAgIGdjLnJlbmRlcigpO1xuICB9O1xuICBnYy5nYW1lcGxheUZyYW1lLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgZ2MuZ2FtZXBsYXlGcmFtZUxvYWRlZCA9IGZhbHNlO1xuICAgIGdjLnJlbmRlcigpO1xuICB9O1xuXG4gIGdjLmxvZ28uc3JjID0gXCIvYmVuY2htYXJrMi9hc3NldHMvbG9nby5wbmdcIjtcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5zcmMgPSBcIi9iZW5jaG1hcmsyL2Fzc2V0cy9nYW1lcGxheS1mcmFtZS5wbmdcIjtcblxuICByZXNpemVDYW52YXNlcygpO1xuICBnYy5yZW5kZXIoKTtcblxuICBjb25zdCBnYW1lTG9vcCA9ICgpID0+IHtcbiAgICBjb25zdCBtb3ZlbWVudExldmVsQWN0aXZlID0gZ2Muc3RhdGUuY3VycmVudFNjcmVlbiA9PT0gXCJsZXZlbFwiICYmIGlzTW92ZW1lbnRMZXZlbChnYy5zdGF0ZS5jdXJyZW50TGV2ZWwpO1xuXG4gICAgaWYgKFxuICAgICAgbW92ZW1lbnRMZXZlbEFjdGl2ZSAmJlxuICAgICAgIWdjLnN0YXRlLnBhdXNlZCAmJlxuICAgICAgIWdjLnN0YXRlLmNvbnRyb2xzT3BlbiAmJlxuICAgICAgIWdjLnN0YXRlLmdhbWVPdmVyXG4gICAgKSB7XG4gICAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGlmIChub3cgLSBsYXN0VGltZXJUaWNrID49IDEwMDApIHtcbiAgICAgICAgY29uc3QgZWxhcHNlZFNlY29uZHMgPSBNYXRoLmZsb29yKChub3cgLSBsYXN0VGltZXJUaWNrKSAvIDEwMDApO1xuICAgICAgICBnYy50aW1lTGVmdFNlY29uZHMgPSBNYXRoLm1heCgwLCBnYy50aW1lTGVmdFNlY29uZHMgLSBlbGFwc2VkU2Vjb25kcyk7XG4gICAgICAgIGxhc3RUaW1lclRpY2sgKz0gZWxhcHNlZFNlY29uZHMgKiAxMDAwO1xuXG4gICAgICAgIGlmIChnYy50aW1lTGVmdFNlY29uZHMgPT09IDApIHtcbiAgICAgICAgICBnYy5sb3NlTGlmZSgpO1xuICAgICAgICAgIG5lZWRzTW92ZW1lbnRSZXNldCA9IHRydWU7XG4gICAgICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gMzA7XG4gICAgICAgICAgbGFzdFRpbWVyVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlucHV0LnVwZGF0ZSgpO1xuICAgICAgcGxheWVyLnVwZGF0ZSgpO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuICB9O1xuXG4gIGdhbWVMb29wKCk7XG59O1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdDb250cm9sc092ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgY29uc3QgcGFkID0gdG9wQm94V2lkdGggKiAwLjA1O1xyXG4gIGNvbnN0IG94ID0gdG9wQm94WCArIHBhZDtcclxuICBjb25zdCBveSA9IHRvcEJveFkgKyBwYWQ7XHJcbiAgY29uc3Qgb3cgPSB0b3BCb3hXaWR0aCAtIHBhZCAqIDI7XHJcbiAgY29uc3Qgb2ggPSB0b3BCb3hIZWlnaHQgLSBwYWQgKiAyO1xyXG4gIGNvbnN0IGN4ID0gb3ggKyBvdyAvIDI7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0Lm92ZXJsYXlCZztcclxuICBjdHguZmlsbFJlY3Qob3gsIG95LCBvdywgb2gpO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KG94LCBveSwgb3csIG9oKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJCQVNJQyBDT05UUk9MU1wiLCBjeCwgb3kgKyBvaCAqIDAuMTEpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8ob3ggKyBvdyAqIDAuMDYsIG95ICsgb2ggKiAwLjIpO1xyXG4gIGN0eC5saW5lVG8ob3ggKyBvdyAqIDAuOTQsIG95ICsgb2ggKiAwLjIpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuXHJcbiAgY29uc3QgY29udHJvbHMgPSBbXHJcbiAgICB7IGtleTogXCJXIC8gQSAvIFMgLyBEXCIsIGRlc2M6IFwiTW92ZSAvIE5hdmlnYXRlXCIgfSxcclxuICAgIHsga2V5OiBcIkhcIiwgZGVzYzogXCJIb2xkIC8gUmVsZWFzZSBCbG9ja3NcIiB9LFxyXG4gICAgeyBrZXk6IFwiQ0xJQ0tcIiwgZGVzYzogXCJJbnRlcmFjdCAvIFNlbGVjdCBhbnN3ZXJcIiB9LFxyXG4gICAgeyBrZXk6IFwiRVNDXCIsIGRlc2M6IFwiQ2xvc2UgdGhpcyBwYW5lbFwiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgbGlzdFkgPSBveSArIG9oICogMC4yOTtcclxuICBjb25zdCByb3dIID0gb2ggKiAwLjE1O1xyXG4gIGNvbnN0IGtleUJveFcgPSBvdyAqIDAuMztcclxuICBjb25zdCBrZXlCb3hIID0gcm93SCAqIDAuNztcclxuICBjb25zdCBrZXlCb3hYID0gb3ggKyBvdyAqIDAuMDg7XHJcbiAgY29uc3QgZGVzY1ggPSBveCArIG93ICogMC41O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRyb2xzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCByb3dZID0gbGlzdFkgKyBpICogcm93SDtcclxuICAgIGNvbnN0IGJveENlbnRlclkgPSByb3dZICsga2V5Qm94SCAvIDI7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHN0YXRlLmRhcmtNb2RlID8gXCIjMmEyYTJhXCIgOiBcIiNkZGRkZGRcIjtcclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuZGl2aWRlcjtcclxuICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgY3R4LmZpbGxSZWN0KGtleUJveFgsIHJvd1ksIGtleUJveFcsIGtleUJveEgpO1xyXG4gICAgY3R4LnN0cm9rZVJlY3Qoa2V5Qm94WCwgcm93WSwga2V5Qm94Vywga2V5Qm94SCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZvbnQgPSBgYm9sZCAxNnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgY29udHJvbHNbaV0ua2V5LFxyXG4gICAgICBrZXlCb3hYICsga2V5Qm94VyAvIDIsXHJcbiAgICAgIGJveENlbnRlclksXHJcbiAgICAgIGtleUJveFcgLSA4LFxyXG4gICAgKTtcclxuXHJcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZ01pZDtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIGN0eC5mb250ID0gYDE3cHggJHtib2R5Rm9udH1gO1xyXG4gICAgY3R4LmZpbGxUZXh0KGNvbnRyb2xzW2ldLmRlc2MsIGRlc2NYLCBib3hDZW50ZXJZKTtcclxuICB9XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYDEzcHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIkNvbnRyb2xzIG1heSB2YXJ5IGJldHdlZW4gbGV2ZWxzLlwiLCBjeCwgb3kgKyBvaCAqIDAuOSk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdHYW1lT3Zlck92ZXJsYXkgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgaCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCBjeSA9IGggLyAyO1xyXG5cclxuICAvLyBGdWxsLWNhbnZhcyBkaW1cclxuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLDAuODIpXCI7XHJcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHcsIGgpO1xyXG5cclxuICAvLyBQYW5lbFxyXG4gIGNvbnN0IHBhbmVsVyA9IE1hdGgubWluKHcgKiAwLjU1LCA1MjApO1xyXG4gIGNvbnN0IHBhbmVsSCA9IGggKiAwLjUyO1xyXG4gIGNvbnN0IHBhbmVsWCA9IGN4IC0gcGFuZWxXIC8gMjtcclxuICBjb25zdCBwYW5lbFkgPSBjeSAtIHBhbmVsSCAvIDI7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSBcIiMwYTBhMGFcIjtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNjYzIyMjJcIjtcclxuICBjdHgubGluZVdpZHRoID0gMztcclxuICBjdHguZmlsbFJlY3QocGFuZWxYLCBwYW5lbFksIHBhbmVsVywgcGFuZWxIKTtcclxuICBjdHguc3Ryb2tlUmVjdChwYW5lbFgsIHBhbmVsWSwgcGFuZWxXLCBwYW5lbEgpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCIjY2MyMjIyXCI7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCA1MnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgY3gsIHBhbmVsWSArIHBhbmVsSCAqIDAuMjIpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCIjODg4ODg4XCI7XHJcbiAgY3R4LmZvbnQgPSBgMjBweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFxyXG4gICAgYEJldHRlciBsdWNrIG5leHQgdGltZSwgJHtzdGF0ZS5wbGF5ZXJOYW1lfS5gLFxyXG4gICAgY3gsXHJcbiAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjQyLFxyXG4gICAgcGFuZWxXICogMC44MixcclxuICApO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcIiMzMzMzMzNcIjtcclxuICBjdHgubGluZVdpZHRoID0gMTtcclxuICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgY3R4Lm1vdmVUbyhwYW5lbFggKyBwYW5lbFcgKiAwLjEsIHBhbmVsWSArIHBhbmVsSCAqIDAuNTQpO1xyXG4gIGN0eC5saW5lVG8ocGFuZWxYICsgcGFuZWxXICogMC45LCBwYW5lbFkgKyBwYW5lbEggKiAwLjU0KTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGdjLmhpdEFyZWFzID0gW107XHJcblxyXG4gIGNvbnN0IGJ0blcgPSAyMDA7XHJcbiAgY29uc3QgYnRuSCA9IDQ4O1xyXG5cclxuICBpZiAoc3RhdGUucGxheU1vZGUgPT09IFwicGxheVwiKSB7XHJcbiAgICBkcmF3QnV0dG9uKFxyXG4gICAgICBnYyxcclxuICAgICAgXCJUUlkgQUdBSU5cIixcclxuICAgICAgY3ggLSBidG5XIC8gMixcclxuICAgICAgcGFuZWxZICsgcGFuZWxIICogMC42MSxcclxuICAgICAgYnRuVyxcclxuICAgICAgYnRuSCxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcclxuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIDIwLFxyXG4gICAgKTtcclxuXHJcbiAgICBkcmF3QnV0dG9uKFxyXG4gICAgICBnYyxcclxuICAgICAgXCJNQUlOIE1FTlVcIixcclxuICAgICAgY3ggLSBidG5XIC8gMixcclxuICAgICAgcGFuZWxZICsgcGFuZWxIICogMC43OCxcclxuICAgICAgYnRuVyxcclxuICAgICAgYnRuSCxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHN0YXRlLmxpdmVzID0gMztcclxuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XHJcbiAgICAgICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIDIwLFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZHJhd0J1dHRvbihcclxuICAgICAgZ2MsXHJcbiAgICAgIFwiTUFJTiBNRU5VXCIsXHJcbiAgICAgIGN4IC0gYnRuVyAvIDIsXHJcbiAgICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNjgsXHJcbiAgICAgIGJ0blcsXHJcbiAgICAgIGJ0bkgsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzdGF0ZS5saXZlcyA9IDM7XHJcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xyXG4gICAgICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICB9LFxyXG4gICAgICAyMCxcclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3UGF1c2VPdmVybGF5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgcGFkID0gdG9wQm94V2lkdGggKiAwLjA1O1xyXG4gIGNvbnN0IG94ID0gdG9wQm94WCArIHBhZDtcclxuICBjb25zdCBveSA9IHRvcEJveFkgKyBwYWQ7XHJcbiAgY29uc3Qgb3cgPSB0b3BCb3hXaWR0aCAtIHBhZCAqIDI7XHJcbiAgY29uc3Qgb2ggPSB0b3BCb3hIZWlnaHQgLSBwYWQgKiAyO1xyXG4gIGNvbnN0IGN4ID0gb3ggKyBvdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQub3ZlcmxheUJnO1xyXG4gIGN0eC5maWxsUmVjdChveCwgb3ksIG93LCBvaCk7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XHJcbiAgY3R4LnN0cm9rZVJlY3Qob3gsIG95LCBvdywgb2gpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGBib2xkIDM4cHggJHtkaXNwbGF5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcIlBBVVNFRFwiLCBjeCwgb3kgKyBvaCAqIDAuMTgpO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8ob3ggKyBvdyAqIDAuMSwgb3kgKyBvaCAqIDAuMyk7XHJcbiAgY3R4LmxpbmVUbyhveCArIG93ICogMC45LCBveSArIG9oICogMC4zKTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIC8vIENsZWFyIGFsbCB1bmRlcmx5aW5nIGhpdCBhcmVhcyBzbyB0aGUgZ2FtZSBiZWhpbmQgaXMgYmxvY2tlZFxyXG4gIGdjLmhpdEFyZWFzID0gW107XHJcblxyXG4gIGNvbnN0IGJ0blcgPSAyMjA7XHJcbiAgY29uc3QgYnRuSCA9IDQ4O1xyXG4gIGNvbnN0IGJ0blggPSBjeCAtIGJ0blcgLyAyO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIlJFU1VNRVwiLCBidG5YLCBveSArIG9oICogMC4zNiwgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJRVUlUIFRPIE1FTlVcIiwgYnRuWCwgb3kgKyBvaCAqIDAuNTMsIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XHJcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUxhYmVsID0gc3RhdGUuZGFya01vZGUgPyBcIuKYgCAgTElHSFQgTU9ERVwiIDogXCLwn4yZICBEQVJLIE1PREVcIjtcclxuICBkcmF3QnV0dG9uKFxyXG4gICAgZ2MsXHJcbiAgICB0b2dnbGVMYWJlbCxcclxuICAgIGJ0blgsXHJcbiAgICBveSArIG9oICogMC43LFxyXG4gICAgYnRuVyxcclxuICAgIGJ0bkgsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmRhcmtNb2RlID0gIXN0YXRlLmRhcmtNb2RlO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICAxOCxcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuL3RoZW1lXCI7XG5pbXBvcnQgeyBnZXRMYXlvdXQsIGdldE1vdmVtZW50TGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBMRVZFTF9EQVRBIH0gZnJvbSBcIi4vbGV2ZWxEYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3QmFja2dyb3VuZCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlIH0gPSBnYztcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kID0gdC5iZztcbiAgY3R4LmZpbGxTdHlsZSA9IHQuYmc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBjdHguY2FudmFzLndpZHRoLCBjdHguY2FudmFzLmhlaWdodCk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0xvZ28gPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgbG9nbywgbG9nb0xvYWRlZCwgZGlzcGxheUZvbnQgfSA9IGdjO1xuICBjb25zdCB7IHcsIGxvZ29ZIH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgaWYgKGxvZ29Mb2FkZWQgJiYgbG9nby5uYXR1cmFsV2lkdGggPiAwKSB7XG4gICAgY29uc3QgbG9nb1cgPSB3ICogMC4xNTtcbiAgICBjb25zdCBsb2dvSCA9IGxvZ29XICogKGxvZ28ubmF0dXJhbEhlaWdodCAvIGxvZ28ubmF0dXJhbFdpZHRoKTtcbiAgICBjdHguZHJhd0ltYWdlKGxvZ28sIHcgLyAyIC0gbG9nb1cgLyAyLCBsb2dvWSAtIGxvZ29IIC8gMiwgbG9nb1csIGxvZ29IKTtcbiAgfSBlbHNlIHtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2V0VGhlbWUoc3RhdGUpLmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5mb250ID0gYGJvbGQgNTRweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFwiT3V0c2lkZS10aGUtQm94XCIsIHcgLyAyLCBsb2dvWSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3R2FtZXBsYXlGcmFtZSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBnYW1lcGxheUZyYW1lLCBnYW1lcGxheUZyYW1lTG9hZGVkIH0gPSBnYztcbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgaWYgKGdhbWVwbGF5RnJhbWVMb2FkZWQgJiYgZ2FtZXBsYXlGcmFtZS5uYXR1cmFsV2lkdGggPiAwKSB7XG4gICAgY3R4LmRyYXdJbWFnZShcbiAgICAgIGdhbWVwbGF5RnJhbWUsXG4gICAgICA0NDAsXG4gICAgICAxODAsXG4gICAgICA2ODgsXG4gICAgICA1NzIsXG4gICAgICB0b3BCb3hYLFxuICAgICAgdG9wQm94WSxcbiAgICAgIHRvcEJveFdpZHRoLFxuICAgICAgdG9wQm94SGVpZ2h0LFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gZ2V0VGhlbWUoc3RhdGUpLnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguc3Ryb2tlUmVjdCh0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdCdXR0b24gPSAoXG4gIGdjOiBHYW1lQ29udGV4dCxcbiAgbGFiZWw6IHN0cmluZyxcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIHc6IG51bWJlcixcbiAgaDogbnVtYmVyLFxuICBhY3Rpb246ICgpID0+IHZvaWQsXG4gIGZvbnRTaXplID0gMjIsXG4pID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICBjdHgubGluZVdpZHRoID0gMztcbiAgY3R4LnN0cm9rZVJlY3QoeCwgeSwgdywgaCk7XG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYGJvbGQgJHtmb250U2l6ZX1weCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChsYWJlbCwgeCArIHcgLyAyLCB5ICsgaCAvIDIsIHcgLSAxNik7XG4gIGdjLmhpdEFyZWFzLnB1c2goeyB4LCB5LCB3LCBoLCBhY3Rpb24gfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0JvdHRvbVBhbmVsID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG4gIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IHN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIiAmJiBzdGF0ZS5jdXJyZW50TGV2ZWwgPj0gMTEgJiYgc3RhdGUuY3VycmVudExldmVsIDw9IDIwO1xuXG4gIGlmIChpc01vdmVtZW50TGV2ZWwpIHtcbiAgICBjb25zdCBtb3ZlbWVudExheW91dCA9IGdldE1vdmVtZW50TGF5b3V0KGN0eCk7XG4gICAgY29uc3QgY3VycmVudEFuc3dlciA9IGdjLmdldEN1cnJlbnRBbnN3ZXIoKSB8fCBcIihlbXB0eSlcIjtcbiAgICBjb25zdCB0aW1lclRleHQgPSBgJHtTdHJpbmcoZ2MudGltZUxlZnRTZWNvbmRzKS5wYWRTdGFydCgyLCBcIjBcIil9c2A7XG4gICAgY29uc3QgdGltZXJDb2xvciA9IGdjLnRpbWVMZWZ0U2Vjb25kcyA8IDEwID8gXCIjZmY1MjUyXCIgOiB0LmZnTWlkO1xuICAgIGNvbnN0IHN1Ym1pdFcgPSAxNjA7XG4gICAgY29uc3Qgc3VibWl0SCA9IDQ4O1xuICAgIGNvbnN0IHN1Ym1pdFggPSBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVdpZHRoIC0gc3VibWl0VyAtIDMyO1xuICAgIGNvbnN0IHN1Ym1pdFkgPSBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVkgKyBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZUhlaWdodCAvIDIgLSBzdWJtaXRIIC8gMjtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIGN0eC5zdHJva2VSZWN0KFxuICAgICAgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVYLFxuICAgICAgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVZLFxuICAgICAgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCxcbiAgICAgIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lSGVpZ2h0LFxuICAgICk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAyOHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoXCJBcnJhbmdlIFRoZSBCbG9ja3NcIiwgMjgsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIDIyLCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVdpZHRoICogMC41KTtcblxuICAgIGN0eC5mb250ID0gYDE3cHggJHtib2R5Rm9udH1gO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnTWlkO1xuICAgIGN0eC5maWxsVGV4dChgUXVpejogc3BlbGwgJHtnYy5xdWl6QW5zd2VyfSBpbiB0aGUgYW5zd2VyIHpvbmUuYCwgMjgsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIDYyLCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVdpZHRoICogMC41Nik7XG5cbiAgICBjdHguZm9udCA9IGAxNXB4ICR7Ym9keUZvbnR9YDtcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgICBjdHguZmlsbFRleHQoYEN1cnJlbnQgQW5zd2VyOiAke2N1cnJlbnRBbnN3ZXJ9YCwgMjgsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIDEwMiwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAqIDAuNTIpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRpbWVyQ29sb3I7XG4gICAgY3R4LmZpbGxUZXh0KGBUaW1lIExlZnQ6ICR7dGltZXJUZXh0fWAsIDI4LCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVkgKyAxMzAsIDE4MCk7XG5cbiAgICBkcmF3QnV0dG9uKGdjLCBcIlNVQk1JVFwiLCBzdWJtaXRYLCBzdWJtaXRZLCBzdWJtaXRXLCBzdWJtaXRILCAoKSA9PiB7XG4gICAgICBnYy5zdWJtaXRNb3ZlbWVudEFuc3dlcigpO1xuICAgIH0sIDE4KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB7IHcsIGNvbnRlbnRYLCBjb250ZW50V2lkdGgsIGJvdHRvbUJveFksIGJvdHRvbUJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG5cbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gIGN0eC5saW5lV2lkdGggPSA0O1xuICBjdHguc3Ryb2tlUmVjdChjb250ZW50WCwgYm90dG9tQm94WSwgY29udGVudFdpZHRoLCBib3R0b21Cb3hIZWlnaHQpO1xuXG4gIGNvbnN0IGNlbnRlclggPSB3IC8gMjtcbiAgY29uc3QgdGV4dFdpZHRoID0gY29udGVudFdpZHRoICogMC43NDtcblxuICBjb25zdCBsZXZlbERhdGEgPVxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIlxuICAgICAgPyBMRVZFTF9EQVRBW3N0YXRlLmN1cnJlbnRMZXZlbCAtIDFdXG4gICAgICA6IHsgdGl0bGU6IHN0YXRlLnN0b3J5VGl0bGUsIGxpbmVzOiBzdGF0ZS5zdG9yeUxpbmVzIH07XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcblxuICBjdHguZm9udCA9IGBib2xkIDMwcHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQobGV2ZWxEYXRhLnRpdGxlLCBjZW50ZXJYLCBib3R0b21Cb3hZICsgMTgsIHRleHRXaWR0aCk7XG5cbiAgY3R4LmZvbnQgPSBgMjBweCAke2JvZHlGb250fWA7XG4gIGNvbnN0IGxpbmVHYXAgPSAzMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbERhdGEubGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjdHguZmlsbFRleHQobGV2ZWxEYXRhLmxpbmVzW2ldLCBjZW50ZXJYLCBib3R0b21Cb3hZICsgNjggKyBpICogbGluZUdhcCwgdGV4dFdpZHRoKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdMZXZlbEhVRCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG4gIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IHN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIiAmJiBzdGF0ZS5jdXJyZW50TGV2ZWwgPj0gMTEgJiYgc3RhdGUuY3VycmVudExldmVsIDw9IDIwO1xuXG4gIGlmIChpc01vdmVtZW50TGV2ZWwpIHtcbiAgICBjb25zdCBtb3ZlbWVudExheW91dCA9IGdldE1vdmVtZW50TGF5b3V0KGN0eCk7XG4gICAgY29uc3QgcGFkWCA9IDI4O1xuICAgIGNvbnN0IHBhZFkgPSAyODtcblxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICBjdHguZm9udCA9IGBib2xkIDI0cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgIGN0eC5maWxsVGV4dChgUS4ke3N0YXRlLmN1cnJlbnRMZXZlbH1gLCBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVYICsgcGFkWCwgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWSArIHBhZFkpO1xuXG4gICAgY29uc3QgcGF1c2VXID0gNDg7XG4gICAgY29uc3QgcGF1c2VIID0gMzQ7XG4gICAgY29uc3QgcGF1c2VYID0gbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lV2lkdGggLSBwYWRYIC0gcGF1c2VXO1xuICAgIGNvbnN0IHBhdXNlWSA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVkgKyBwYWRZIC0gcGF1c2VIIC8gMjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc3Ryb2tlUmVjdChwYXVzZVgsIHBhdXNlWSwgcGF1c2VXLCBwYXVzZUgpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFwiSUlcIiwgcGF1c2VYICsgcGF1c2VXIC8gMiwgcGF1c2VZICsgcGF1c2VIIC8gMik7XG4gICAgZ2MuaGl0QXJlYXMucHVzaCh7XG4gICAgICB4OiBwYXVzZVgsXG4gICAgICB5OiBwYXVzZVksXG4gICAgICB3OiBwYXVzZVcsXG4gICAgICBoOiBwYXVzZUgsXG4gICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhcnRTaXplID0gMjQ7XG4gICAgY29uc3QgaGVhcnRHYXAgPSA2O1xuICAgIGNvbnN0IGxpdmVzWSA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZUhlaWdodCAtIHBhZFk7XG4gICAgY29uc3QgdG90YWxXID0gMyAqIGhlYXJ0U2l6ZSArIDIgKiBoZWFydEdhcDtcbiAgICBjb25zdCBsaXZlc1ggPSBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVXaWR0aCAtIHBhZFggLSB0b3RhbFc7XG5cbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICBjdHguZm9udCA9IGAke2hlYXJ0U2l6ZX1weCBzYW5zLXNlcmlmYDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGkgPCBzdGF0ZS5saXZlcyA/IFwiI2UwMzAzMFwiIDogc3RhdGUuZGFya01vZGUgPyBcIiM0NDQ0NDRcIiA6IFwiI2JiYmJiYlwiO1xuICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgY3R4LmZpbGxUZXh0KFwiXFx1MjY2NVwiLCBsaXZlc1ggKyBpICogKGhlYXJ0U2l6ZSArIGhlYXJ0R2FwKSwgbGl2ZXNZKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgcGFkWCA9IHRvcEJveFdpZHRoICogMC4wNTtcbiAgY29uc3QgcGFkWSA9IHRvcEJveEhlaWdodCAqIDAuMDg7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYGJvbGQgMjZweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChgUS4ke3N0YXRlLmN1cnJlbnRMZXZlbH1gLCB0b3BCb3hYICsgcGFkWCwgdG9wQm94WSArIHBhZFkpO1xuXG4gIGNvbnN0IHBhdXNlVyA9IDQ4O1xuICBjb25zdCBwYXVzZUggPSAzNDtcbiAgY29uc3QgcGF1c2VYID0gdG9wQm94WCArIHRvcEJveFdpZHRoIC0gcGFkWCAtIHBhdXNlVztcbiAgY29uc3QgcGF1c2VZID0gdG9wQm94WSArIHBhZFkgLSBwYXVzZUggLyAyO1xuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5zdHJva2VSZWN0KHBhdXNlWCwgcGF1c2VZLCBwYXVzZVcsIHBhdXNlSCk7XG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChcIklJXCIsIHBhdXNlWCArIHBhdXNlVyAvIDIsIHBhdXNlWSArIHBhdXNlSCAvIDIpO1xuICBnYy5oaXRBcmVhcy5wdXNoKHtcbiAgICB4OiBwYXVzZVgsXG4gICAgeTogcGF1c2VZLFxuICAgIHc6IHBhdXNlVyxcbiAgICBoOiBwYXVzZUgsXG4gICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICBzdGF0ZS5wYXVzZWQgPSB0cnVlO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgaGVhcnRTaXplID0gMjQ7XG4gIGNvbnN0IGhlYXJ0R2FwID0gNjtcbiAgY29uc3QgbGl2ZXNZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAtIHBhZFk7XG4gIGNvbnN0IHRvdGFsVyA9IDMgKiBoZWFydFNpemUgKyAyICogaGVhcnRHYXA7XG4gIGNvbnN0IGxpdmVzWCA9IHRvcEJveFggKyB0b3BCb3hXaWR0aCAtIHBhZFggLSB0b3RhbFc7XG5cbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gIGN0eC5mb250ID0gYCR7aGVhcnRTaXplfXB4IHNhbnMtc2VyaWZgO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgIGN0eC5maWxsU3R5bGUgPSBpIDwgc3RhdGUubGl2ZXMgPyBcIiNlMDMwMzBcIiA6IHN0YXRlLmRhcmtNb2RlID8gXCIjNDQ0NDQ0XCIgOiBcIiNiYmJiYmJcIjtcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiXFx1MjY2NVwiLCBsaXZlc1ggKyBpICogKGhlYXJ0U2l6ZSArIGhlYXJ0R2FwKSwgbGl2ZXNZKTtcbiAgfVxufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0LCBnZXRNb3ZlbWVudExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcbmltcG9ydCB7IGRyYXdCdXR0b24sIGRyYXdMZXZlbEhVRCB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IHsgZHJhd05hbWVFbnRyeSB9IGZyb20gXCIuLi9sZXZlbHMvTGV2ZWwxXCI7XG5pbXBvcnQgeyBkcmF3TGV2ZWwyIH0gZnJvbSBcIi4uL2xldmVscy9MZXZlbDJcIjtcbmltcG9ydCB7IGRyYXdMZXZlbDMgfSBmcm9tIFwiLi4vbGV2ZWxzL0xldmVsM1wiO1xuaW1wb3J0IHsgTEVWRUxfQ09VTlQgfSBmcm9tIFwiLi4vbGV2ZWxEYXRhXCI7XG5cbmNvbnN0IGRyYXdMZXZlbE5hdmlnYXRpb24gPSAoZ2M6IEdhbWVDb250ZXh0LCBuYXZZT3ZlcnJpZGU/OiBudW1iZXIpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlIH0gPSBnYztcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0LCB0b3BCb3hZIH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgbmF2QnRuSCA9IDQyO1xuICBjb25zdCBuYXZCdG5XID0gMTUwO1xuICBjb25zdCBuYXZZID0gbmF2WU92ZXJyaWRlID8/IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjc5O1xuXG4gIGlmIChzdGF0ZS5wbGF5TW9kZSAhPT0gXCJsZXZlbHNlbGVjdFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA+IDEpIHtcbiAgICBkcmF3QnV0dG9uKGdjLCBcIjwtIFBSRVZcIiwgdG9wQm94WCArIHRvcEJveFdpZHRoICogMC4wNSwgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xuICAgICAgc3RhdGUuY3VycmVudExldmVsLS07XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LCAxOCk7XG4gIH1cblxuICBkcmF3QnV0dG9uKGdjLCBcIkxFVkVMIFNFTEVDVFwiLCBjeCAtIG5hdkJ0blcgLyAyLCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxzZWxlY3RcIjtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfSwgMTYpO1xuXG4gIGlmIChzdGF0ZS5jdXJyZW50TGV2ZWwgPCBMRVZFTF9DT1VOVCkge1xuICAgIGRyYXdCdXR0b24oZ2MsIFwiTkVYVCAtPlwiLCB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjc3LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwrKztcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sIDE4KTtcbiAgfVxufTtcblxuY29uc3QgZHJhd01vdmVtZW50TGV2ZWxOYXZpZ2F0aW9uID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IHN0YXRlIH0gPSBnYztcbiAgY29uc3QgbW92ZW1lbnRMYXlvdXQgPSBnZXRNb3ZlbWVudExheW91dChnYy5jdHgpO1xuICBjb25zdCBuYXZCdG5IID0gNDI7XG4gIGNvbnN0IG5hdkJ0blcgPSAxNTA7XG4gIGNvbnN0IG5hdlkgPSBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVkgKyBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZUhlaWdodCAtIG5hdkJ0bkggLSAyMjtcbiAgY29uc3QgY2VudGVyWCA9IG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lV2lkdGggLyAyO1xuXG4gIGlmIChzdGF0ZS5wbGF5TW9kZSAhPT0gXCJsZXZlbHNlbGVjdFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHN0YXRlLmN1cnJlbnRMZXZlbCA+IDEpIHtcbiAgICBkcmF3QnV0dG9uKGdjLCBcIjwtIFBSRVZcIiwgMjYsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbC0tO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSwgMTgpO1xuICB9XG5cbiAgZHJhd0J1dHRvbihnYywgXCJMRVZFTCBTRUxFQ1RcIiwgY2VudGVyWCAtIG5hdkJ0blcgLyAyLCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgZ2MucmVzZXRQbGF5ZXJOYW1lKCk7XG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxzZWxlY3RcIjtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfSwgMTYpO1xuXG4gIGlmIChzdGF0ZS5jdXJyZW50TGV2ZWwgPCBMRVZFTF9DT1VOVCkge1xuICAgIGRyYXdCdXR0b24oZ2MsIFwiTkVYVCAtPlwiLCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVdpZHRoIC0gbmF2QnRuVyAtIDI2LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwrKztcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sIDE4KTtcbiAgfVxufTtcblxuY29uc3QgZHJhd0Fuc3dlclpvbmUgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4IH0gPSBnYztcblxuICBmb3IgKGNvbnN0IHNsb3Qgb2YgZ2MuYW5zd2VyU2xvdHMpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJnYmEoMjU1LDI1NSwyNTUsMC45MilcIjtcbiAgICBjdHgubGluZVdpZHRoID0gMjtcbiAgICBjdHguc2V0TGluZURhc2goWzQsIDRdKTtcbiAgICBjdHguc3Ryb2tlUmVjdChzbG90LngsIHNsb3QueSwgc2xvdC5zaXplLCBzbG90LnNpemUpO1xuICAgIGN0eC5zZXRMaW5lRGFzaChbXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWwgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgbHZsID0gc3RhdGUuY3VycmVudExldmVsO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuXG4gIGlmIChsdmwgPT09IDEpIHtcbiAgICBkcmF3TmFtZUVudHJ5KGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChsdmwgPT09IDIpIHtcbiAgICBkcmF3TGV2ZWwyKGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChsdmwgPT09IDMpIHtcbiAgICBkcmF3TGV2ZWwzKGdjKTtcbiAgICBkcmF3TGV2ZWxIVUQoZ2MpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChsdmwgPj0gMTEgJiYgbHZsIDw9IDIwKSB7XG4gICAgY29uc3QgbW92ZW1lbnRMYXlvdXQgPSBnZXRNb3ZlbWVudExheW91dChjdHgpO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgY3R4LnN0cm9rZVJlY3QoXG4gICAgICBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVYLFxuICAgICAgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWSxcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVdpZHRoLFxuICAgICAgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lSGVpZ2h0LFxuICAgICk7XG5cbiAgICBkcmF3QW5zd2VyWm9uZShnYyk7XG5cbiAgICBmb3IgKGNvbnN0IGJsb2NrIG9mIGdjLmJsb2Nrcykge1xuICAgICAgYmxvY2suZHJhdyhjdHgpO1xuICAgIH1cblxuICAgIGdjLnBsYXllci5kcmF3KGN0eCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgMTRweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFxuICAgICAgYEZhY2luZzogJHtnYy5wbGF5ZXIuZ2V0RmFjaW5nRGlyZWN0aW9uKCkudG9VcHBlckNhc2UoKX1gLFxuICAgICAgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWCArIDI0LFxuICAgICAgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lSGVpZ2h0IC0gMjQsXG4gICAgKTtcblxuICAgIGRyYXdNb3ZlbWVudExldmVsTmF2aWdhdGlvbihnYyk7XG4gICAgZHJhd0xldmVsSFVEKGdjKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuXG4gIGN0eC5mb250ID0gYGJvbGQgMzRweCAke2Rpc3BsYXlGb250fWA7XG4gIGN0eC5maWxsVGV4dChgTEVWRUwgJHtsdmx9YCwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjE2KTtcblxuICBjdHguZm9udCA9IGAyMnB4ICR7Ym9keUZvbnR9YDtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XG4gIGN0eC5maWxsVGV4dChcIlRoaXMgbGV2ZWwgaXMgdW5kZXIgY29uc3RydWN0aW9uLlwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzgsIHRvcEJveFdpZHRoICogMC42KTtcblxuICBjdHguZm9udCA9IGAxNnB4ICR7Ym9keUZvbnR9YDtcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XG4gIGN0eC5maWxsVGV4dChcIlF1ZXN0aW9ucywgY2hvaWNlcywgYW5kIGludGVyYWN0aW9ucyB3aWxsIGJlIHdpcmVkIGluIGhlcmUuXCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC41MiwgdG9wQm94V2lkdGggKiAwLjYpO1xuXG4gIGRyYXdMZXZlbE5hdmlnYXRpb24oZ2MpO1xuICBkcmF3TGV2ZWxIVUQoZ2MpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xuaW1wb3J0IHsgZHJhd0J1dHRvbiB9IGZyb20gXCIuLi9yZW5kZXJlclwiO1xuaW1wb3J0IHsgTEVWRUxfQ09VTlQgfSBmcm9tIFwiLi4vbGV2ZWxEYXRhXCI7XG5cbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWxTZWxlY3QgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgY29uc3QgY3ggPSB3IC8gMjtcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcblxuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkIDM2cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJMRVZFTCBTRUxFQ1RcIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjEpO1xuXG4gIGNvbnN0IGNvbHMgPSA1O1xuICBjb25zdCB0aWxlVyA9IHRvcEJveFdpZHRoICogMC4xMztcbiAgY29uc3QgdGlsZUggPSB0b3BCb3hIZWlnaHQgKiAwLjE0O1xuICBjb25zdCBoR2FwID0gKHRvcEJveFdpZHRoICogMC43OCAtIHRpbGVXICogY29scykgLyAoY29scyAtIDEpO1xuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNDtcbiAgY29uc3QgZ3JpZFcgPSB0aWxlVyAqIGNvbHMgKyBoR2FwICogKGNvbHMgLSAxKTtcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcbiAgY29uc3QgZ3JpZFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xODtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IExFVkVMX0NPVU5UOyBpKyspIHtcbiAgICBjb25zdCBjb2wgPSBpICUgY29scztcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2xzKTtcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XG4gICAgY29uc3QgdHkgPSBncmlkWSArIHJvdyAqICh0aWxlSCArIHZHYXApO1xuICAgIGNvbnN0IGx2bCA9IGkgKyAxO1xuICAgIGNvbnN0IGlzTW92ZW1lbnRMZXZlbCA9IGx2bCA+PSAxMSAmJiBsdmwgPD0gMjA7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBpc01vdmVtZW50TGV2ZWwgPyB0LmRpdmlkZXIgOiB0LnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoID0gaXNNb3ZlbWVudExldmVsID8gMiA6IDM7XG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGlzTW92ZW1lbnRMZXZlbCA/IHQuZmdNaWQgOiB0LmZnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuXG4gICAgY3R4LmZvbnQgPSBgYm9sZCAyMHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoYCR7bHZsfWAsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIICogMC4zOCk7XG5cbiAgICBjdHguZm9udCA9IGAxMHB4ICR7Ym9keUZvbnR9YDtcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcbiAgICBjdHguZmlsbFRleHQoaXNNb3ZlbWVudExldmVsID8gXCJtb3ZlXCIgOiBgTEVWRUwgJHtsdmx9YCwgdHggKyB0aWxlVyAvIDIsIHR5ICsgdGlsZUggKiAwLjc0KTtcblxuICAgIGNvbnN0IGNhcHR1cmVkID0gbHZsO1xuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgICAgeDogdHgsXG4gICAgICB5OiB0eSxcbiAgICAgIHc6IHRpbGVXLFxuICAgICAgaDogdGlsZUgsXG4gICAgICBhY3Rpb246ICgpID0+IHtcbiAgICAgICAgc3RhdGUuY3VycmVudExldmVsID0gY2FwdHVyZWQ7XG4gICAgICAgIHN0YXRlLnBsYXlNb2RlID0gXCJsZXZlbHNlbGVjdFwiO1xuICAgICAgICBzdGF0ZS5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5saXZlcyA9IDM7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsXCI7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGJhY2tXID0gMTUwO1xuICBjb25zdCBiYWNrSCA9IDQyO1xuICBjb25zdCBiYWNrWCA9IHRvcEJveFggKyB0b3BCb3hXaWR0aCAqIDAuMDQ7XG4gIGNvbnN0IGJhY2tZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuODI7XG4gIGRyYXdCdXR0b24oZ2MsIFwiPC0gQkFDS1wiLCBiYWNrWCwgYmFja1ksIGJhY2tXLCBiYWNrSCwgKCkgPT4ge1xuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcIm1haW5tZW51XCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0sIDE4KTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSAgICBmcm9tICcuLi90aGVtZSc7XHJcbmltcG9ydCB7IGdldExheW91dCB9ICAgZnJvbSAnLi4vbGF5b3V0JztcclxuaW1wb3J0IHsgZHJhd0J1dHRvbiB9ICBmcm9tICcuLi9yZW5kZXJlcic7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd01haW5NZW51ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xyXG4gIGNvbnN0IHsgdywgdG9wSW5uZXJYLCB0b3BJbm5lclksIHRvcElubmVyV2lkdGgsIHRvcElubmVySGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcclxuICBjb25zdCBjeCA9IHcgLyAyO1xyXG4gIGNvbnN0IHQgID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICBjdHguZmlsbFN0eWxlICAgID0gdC5mZztcclxuICBjdHgudGV4dEFsaWduICAgID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCA0MnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJNQUlOIE1FTlVcIiwgY3gsIHRvcElubmVyWSArIHRvcElubmVySGVpZ2h0ICogMC4xNSk7XHJcblxyXG4gIGNvbnN0IGJ0blcgICA9IE1hdGgubWluKDMwMCwgdG9wSW5uZXJXaWR0aCAqIDAuNzgpO1xyXG4gIGNvbnN0IGJ0bkggICA9IDUwO1xyXG4gIGNvbnN0IGJ0blggICA9IGN4IC0gYnRuVyAvIDI7XHJcbiAgY29uc3Qgc3RhcnRZID0gdG9wSW5uZXJZICsgdG9wSW5uZXJIZWlnaHQgKiAwLjMyO1xyXG4gIGNvbnN0IHN0cmlkZSA9IGJ0bkggKyAxNDtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJTVEFSVCBFWEFNXCIsIGJ0blgsIHN0YXJ0WSwgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUuY3VycmVudExldmVsID0gMTtcclxuICAgIHN0YXRlLmxpdmVzICAgICAgICA9IDM7XHJcbiAgICBzdGF0ZS5wYXVzZWQgICAgICAgPSBmYWxzZTtcclxuICAgIHN0YXRlLmdhbWVPdmVyICAgICA9IGZhbHNlO1xyXG4gICAgc3RhdGUucGxheU1vZGUgICAgID0gXCJwbGF5XCI7XHJcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbFwiO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGJ0blgsIHN0YXJ0WSArIHN0cmlkZSwgYnRuVywgYnRuSCwgKCkgPT4ge1xyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxzZWxlY3RcIjtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIkNPTlRST0xTXCIsIGJ0blgsIHN0YXJ0WSArIHN0cmlkZSAqIDIsIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLmNvbnRyb2xzT3BlbiA9IHRydWU7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUaGVtZSA9IChzdGF0ZTogR2FtZVN0YXRlKSA9PlxyXG4gIHN0YXRlLmRhcmtNb2RlXHJcbiAgICA/IHtcclxuICAgICAgICBiZzogXCIjMTExMTExXCIsXHJcbiAgICAgICAgZmc6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIGZnTWlkOiBcIiNjY2NjY2NcIixcclxuICAgICAgICBmZ0RpbTogXCIjODg4ODg4XCIsXHJcbiAgICAgICAgc3Ryb2tlOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBvdmVybGF5Qmc6IFwicmdiYSgxMCwxMCwxMCwwLjkwKVwiLFxyXG4gICAgICAgIGRpdmlkZXI6IFwiIzQ0NDQ0NFwiLFxyXG4gICAgICB9XHJcbiAgICA6IHtcclxuICAgICAgICBiZzogXCIjZjBmMGYwXCIsXHJcbiAgICAgICAgZmc6IFwiIzExMTExMVwiLFxyXG4gICAgICAgIGZnTWlkOiBcIiMzMzMzMzNcIixcclxuICAgICAgICBmZ0RpbTogXCIjNjY2NjY2XCIsXHJcbiAgICAgICAgc3Ryb2tlOiBcIiMxMTExMTFcIixcclxuICAgICAgICBvdmVybGF5Qmc6IFwicmdiYSgyMjAsMjIwLDIyMCwwLjkzKVwiLFxyXG4gICAgICAgIGRpdmlkZXI6IFwiI2FhYWFhYVwiLFxyXG4gICAgICB9O1xyXG4iXX0=
