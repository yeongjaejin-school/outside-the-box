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
      var _this3 = this;
      var dx = 0;
      var dy = 0;
      if (this.direction === "up") dy = -1;
      if (this.direction === "down") dy = 1;
      if (this.direction === "left") dx = -1;
      if (this.direction === "right") dx = 1;
      var candidateX = this.clampValue(this.x + dx * this.dashDistance, this.bounds.minX, this.bounds.maxX);
      var candidateY = this.clampValue(this.y + dy * this.dashDistance, this.bounds.minY, this.bounds.maxY);
      var otherBlocks = this.blocks.filter(function (block) {
        return block !== _this3.heldBlock;
      });
      if (this.collidesWithAnyBlock(candidateX, candidateY, otherBlocks)) {
        return;
      }
      if (this.heldBlock) {
        this.clearAnswerSlotForBlock(this.heldBlock);
        var heldPosition = this.getHeldBlockPosition(candidateX, candidateY, this.direction);
        this.heldBlock.moveTo(heldPosition.x, heldPosition.y);
      }
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
          this.detachHeldBlock();
          return;
        }
        if (this.collidesWithAnyBlock(this.heldBlock.x, this.heldBlock.y, otherBlocks)) {
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
      this.clearAnswerSlotForBlock(block);
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
      var _this5 = this;
      return blocks.some(function (block) {
        return block.collidesWithRect(x, y, _this5.width, _this5.height);
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
var _EventEmitter = require("./Helpers/Events/EventEmitter");
var _InputManager = require("./Helpers/InputManager");
var _PlayerControl = require("./Helpers/PlayerControl");
var _NormalBlock = require("./Helpers/objects/NormalBlock");
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
  gc.logo.src = "./assets/GameLogo.png";
  gc.gameplayFrame.src = "./assets/gameplay-frame.png";
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

},{"./Helpers/Events/EventEmitter":2,"./Helpers/InputManager":4,"./Helpers/PlayerControl":5,"./Helpers/objects/NormalBlock":7,"./layout":8,"./overlays/ControlsOverlay":14,"./overlays/GameOverOverlay":15,"./overlays/PauseOverlay":16,"./renderer":17,"./screens/Level":18,"./screens/LevelSelect":19,"./screens/MainMenu":20}],14:[function(require,module,exports){
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
    ctx.fillStyle = timerColor;
    ctx.fillText("Time Left: ".concat(timerText), 28, movementLayout.bottomFrameY + 102, 180);
    ctx.fillStyle = t.fg;
    ctx.fillText("Your Answer: ".concat(currentAnswer), 28, movementLayout.bottomFrameY + 130, movementLayout.bottomFrameWidth * 0.52);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9IZWxwZXJzL0V2ZW50cy9FdmVudC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvRXZlbnRzL0V2ZW50RW1pdHRlci50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvRXZlbnRzL0V2ZW50TGlzdGVuZXIudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9IZWxwZXJzL0lucHV0TWFuYWdlci50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvUGxheWVyQ29udHJvbC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvb2JqZWN0cy9CbG9jay50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL0hlbHBlcnMvb2JqZWN0cy9Ob3JtYWxCbG9jay50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xheW91dC50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVsRGF0YS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL2xldmVscy9MZXZlbDEudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9sZXZlbHMvTGV2ZWwyLnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvbGV2ZWxzL0xldmVsMy50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL21haW4udHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9vdmVybGF5cy9Db250cm9sc092ZXJsYXkudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9vdmVybGF5cy9HYW1lT3Zlck92ZXJsYXkudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9vdmVybGF5cy9QYXVzZU92ZXJsYXkudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9yZW5kZXJlci50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3NjcmVlbnMvTGV2ZWwudHMiLCJvdXRzaWRlLXRoZS1ib3gvYmVuY2htYXJrMi9zY3JlZW5zL0xldmVsU2VsZWN0LnRzIiwib3V0c2lkZS10aGUtYm94L2JlbmNobWFyazIvc2NyZWVucy9NYWluTWVudS50cyIsIm91dHNpZGUtdGhlLWJveC9iZW5jaG1hcmsyL3RoZW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQVksU0FBUyxHQUFBLE9BQUEsQ0FBQSxTQUFBLDBCQUFULFNBQVM7RUFBVCxTQUFTO0VBQVQsU0FBUztFQUFULFNBQVM7RUFBQSxPQUFULFNBQVM7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VSLFlBQVksR0FBQSxPQUFBLENBQUEsWUFBQTtFQUFBLFNBQUEsYUFBQTtJQUFBLGVBQUEsT0FBQSxZQUFBO0lBQUEsZUFBQSxvQkFDNkIsSUFBSSxHQUFHLENBQUMsQ0FBQztFQUFBO0VBQUEsT0FBQSxZQUFBLENBQUEsWUFBQTtJQUFBLEdBQUE7SUFBQSxLQUFBLEVBRTNELFNBQU8sRUFBRSxDQUFJLEtBQWEsRUFBRSxRQUEwQixFQUFFO01BQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQ2pDO01BQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM3QztFQUFDO0lBQUEsR0FBQTtJQUFBLEtBQUEsRUFFRCxTQUFPLEdBQUcsQ0FBSSxLQUFhLEVBQUUsUUFBMEIsRUFBRTtNQUNyRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7TUFDM0MsSUFBSSxDQUFDLFNBQVMsRUFBRTtN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LENBQUEsR0FBQSwyQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxJQUFBLFdBQUEsSUFBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLDhCQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsMkJBQUEsQ0FBQSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSw2QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSwrQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxDQUFBLFVBQUEsQ0FBQTtBQUFBLFNBQUEsZ0JBQUEsQ0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxhQUFBLFNBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsVUFBQSxHQUFBLENBQUEsQ0FBQSxVQUFBLFFBQUEsQ0FBQSxDQUFBLFlBQUEsa0JBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxRQUFBLFFBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLEVBQUEsY0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEdBQUEsQ0FBQTtBQUFBLFNBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsaUJBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsQ0FBQSxpQkFBQSxRQUFBLFNBQUEsQ0FBQTtBQUFBLFNBQUEsV0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsV0FBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLENBQUEsR0FBQSwwQkFBQSxDQUFBLENBQUEsRUFBQSx5QkFBQSxLQUFBLE9BQUEsQ0FBQSxTQUFBLENB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QSxDQUFBLFNBQUEsRUFBQSxDQUFBLEdBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsaUJBQUEsUUFBQSxTQUFBLENBQUE7QUFBQSxTQUFBLGVBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxZQUFBLENBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBO0FBQUEsU0FBQSxhQUFBLENBQUEsRUFBQSxDQUFBLG9CQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxTQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLGtCQUFBLENBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxnQ0FBQSxPQUFBLENBQUEsQ0FBQSxVQUFBLENBQUEsWUFBQSxTQUFBLHlFQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGdCQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsYUFBQSxTQUFBO0FBQUEsU0FBQSxXQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxlQUFBLENBQUEsQ0FBQSxHQUFBLDBCQUFBLENBQUEsQ0FBQSxFQUFBLHlCQUFBLEtBQUEsT0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLGVBQUEsQ0FBQSxDQUFBLEVBQUEsV0FBQSxJQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLDJCQUFBLENBQUEsRUFBQSxDQUFBLFFBQUEsQ0FBQSxpQkFBQSxPQUFBLENBQUEsQ0FBQSwwQkFBQSxDQUFBLFVBQUEsQ0FBQSxpQkFBQSxDQUFBLFlBQUEsU0FBQSxxRUFBQSxzQkFBQSxDQUFBLENBQUE7QUFBQSxTQUFBLHVCQUFBLENBQUEsbUJBQUEsQ0FBQSxZQUFBLGNBQUEs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QUcsQ0FBQyxFQUNyQztFQUNFLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsS0FBSyxFQUFFLENBQUMsOEJBQThCO0FBQ3hDLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsS0FBSyxFQUFFLENBQUMsOEJBQThCO0FBQ3hDLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsS0FBSyxFQUFFLENBQUMsOEJBQThCO0FBQ3hDLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsS0FBSyxFQUFFLENBQUMsOEJBQThCO0FBQ3hDLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsS0FBSyxFQUFFLENBQUMsOEJBQThCO0FBQ3hDLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSwyQkFBMkI7RUFDbEMsS0FBSyxFQUFFLENBQUMsOEJBQThCO0FBQ3hDLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSw0QkFBNEI7RUFDbkMsS0FBSyxFQUFFLENBQUMsOEJBQThCO0FBQ3hDLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSxtQkFBbUI7RUFDMUIsS0FBSyxFQUFFLENBQUMsd0NBQXdDLEVBQUUsOENBQThDO0FBQ2xHLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSxtQkFBbUI7RUFDMUIsS0FBSyxFQUFFLENBQUMsd0NBQXdDLEVBQUUsOENBQThDO0FBQ2xHLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSxtQkFBbUI7RUFDMUIsS0FBSyxFQUFFLENBQUMsd0NBQXdDLEVBQUUsOENBQThDO0FBQ2xHLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSxtQkFBbUI7RUFDMUIsS0FBSyxFQUFFLENBQUMsd0NBQXdDLEVBQUUsOENBQThDO0FBQ2xHLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSxtQkFBbUI7RUFDMUIsS0FBSyxFQUFFLENBQUMsd0NBQXdDLEVBQUUsOENBQThDO0FBQ2xHLENBQUMsRUFDRDtFQUNFLEtBQUssRUFBRSxtQkFBbUI7RUFDMUIsS0FBSyxF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Q0FBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxJQUFBLFdBQUEsSUFBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLDhCQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsMkJBQUEsQ0FBQSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLE1BQUEsUUFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLEVBQUEsS0FBQSw2QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLFdBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLGFBQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsb0JBQUEsQ0FBQSwrQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUE7QUFBQSxTQUFBLGtCQUFBLENBQUEsRUFBQSxDQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxNQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsTUFBQSxZQUFBLENBQUEsTUFB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O0FBQ0EsSUFBQSxPQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsVUFBQSxHQUFBLE9BQUE7QUFBMkMsU0FBQSwyQkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEseUJBQUEsTUFBQSxJQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsUUFBQSxLQUFBLENBQUEscUJBQUEsQ0FBQSxRQUFBLEtBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSwyQkFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUEsTUFBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLEVBQUEsTUFBQSxDQUFBLFlBQUEsRUFBQSxlQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxFQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsS0FBQSxJQUFBLFdBQUEsSUFBQSxNQUFBLEtBQUEsRUFBQSxDQUFBLENBQUEsRUFBQSxVQUFBLENBQUEsV0FBQSxFQUFBLENBQUEsVUFBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsZ0JBQUEsU0FBQSxpSkFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsZ0JBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsV0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxXQUFBLEVBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxLQUFBLENBQUEsV0FBQSxFQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBLDhCQUFBLENBQUEsUUFBQSxDQUFBO0FBQUEsU0FBQSw0QkFBQSxDQUFBLEVBQUEsQ0FBQSxRQUFBLENBQUEsMkJBQUEsQ0FBQSxTQUFBLGlCQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxD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QUUscUJBQXFCO0lBQ2hDLE9BQU8sRUFBRTtFQUNYLENBQUMsR0FDRDtJQUNFLEVBQUUsRUFBRSxTQUFTO0lBQ2IsRUFBRSxFQUFFLFNBQVM7SUFDYixLQUFLLEVBQUUsU0FBUztJQUNoQixLQUFLLEVBQUUsU0FBUztJQUNoQixNQUFNLEVBQUUsU0FBUztJQUNqQixTQUFTLEVBQUUsd0JBQXdCO0lBQ25DLE9BQU8sRUFBRTtFQUNYLENBQUM7QUFBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBlbnVtIEdhbWVFdmVudCB7XG4gICAgTU9WRSA9IFwiTU9WRVwiLFxuICAgIERBU0ggPSBcIkRBU0hcIixcbiAgICBIT0xEID0gXCJIT0xEXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlRXZlbnRQYXlsb2FkIHtcbiAgICBkeDogbnVtYmVyO1xuICAgIGR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGFzaEV2ZW50UGF5bG9hZCB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIEhvbGRFdmVudFBheWxvYWQge31cbiIsInR5cGUgRXZlbnRDYWxsYmFjazxUID0gYW55PiA9IChwYXlsb2FkOiBUKSA9PiB2b2lkO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRFbWl0dGVyIHtcbiAgICBwcml2YXRlIGxpc3RlbmVyczogTWFwPHN0cmluZywgRXZlbnRDYWxsYmFja1tdPiA9IG5ldyBNYXAoKTtcblxuICAgIHB1YmxpYyBvbjxUPihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRXZlbnRDYWxsYmFjazxUPikge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzLmhhcyhldmVudCkpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNldChldmVudCwgW10pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmdldChldmVudCkhLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHB1YmxpYyBvZmY8VD4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEV2ZW50Q2FsbGJhY2s8VD4pIHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5saXN0ZW5lcnMuZ2V0KGV2ZW50KTtcbiAgICAgICAgaWYgKCFjYWxsYmFja3MpIHJldHVybjtcblxuICAgICAgICB0aGlzLmxpc3RlbmVycy5zZXQoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGNhbGxiYWNrcy5maWx0ZXIoKGNiKSA9PiBjYiAhPT0gY2FsbGJhY2spXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcHVibGljIGVtaXQ8VD4oZXZlbnQ6IHN0cmluZywgcGF5bG9hZDogVCkge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmxpc3RlbmVycy5nZXQoZXZlbnQpO1xuICAgICAgICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuO1xuXG4gICAgICAgIGZvciAoY29uc3QgY2Igb2YgY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICBjYihwYXlsb2FkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0V2ZW50RW1pdHRlclwiO1xuXG5leHBvcnQgY2xhc3MgRXZlbnRMaXN0ZW5lciB7XG4gICAgcHJvdGVjdGVkIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjtcblxuICAgIGNvbnN0cnVjdG9yKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBsaXN0ZW48VD4oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IChwYXlsb2FkOiBUKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5vbihldmVudCwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzdG9wTGlzdGVuaW5nPFQ+KGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiAocGF5bG9hZDogVCkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLmVtaXR0ZXIub2ZmKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIi4vRXZlbnRzL0V2ZW50RW1pdHRlclwiO1xuaW1wb3J0IHsgR2FtZUV2ZW50IH0gZnJvbSBcIi4vRXZlbnRzL0V2ZW50LnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXIge1xuICAgIHByaXZhdGUga2V5czogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcbiAgICBwcml2YXRlIGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjtcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vdmVtZW50S2V5cyA9IG5ldyBTZXQoW1wid1wiLCBcImFcIiwgXCJzXCIsIFwiZFwiLCBcIiBcIiwgXCJoXCJdKTtcblxuICAgIGNvbnN0cnVjdG9yKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIgPSBlbWl0dGVyO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4gdGhpcy5vbktleURvd24oZSkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB0aGlzLm9uS2V5VXAoZSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB3YXNQcmVzc2VkID0gdGhpcy5rZXlzW2tleV0gPT09IHRydWU7XG4gICAgICAgIHRoaXMua2V5c1trZXldID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5tb3ZlbWVudEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXdhc1ByZXNzZWQpIHtcbiAgICAgICAgICAgIGlmIChrZXkgPT09IFwiIFwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoR2FtZUV2ZW50LkRBU0gsIHt9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGtleSA9PT0gXCJoXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChHYW1lRXZlbnQuSE9MRCwge30pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbktleVVwKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB0aGlzLmtleXNba2V5XSA9IGZhbHNlO1xuXG4gICAgICAgIGlmICh0aGlzLm1vdmVtZW50S2V5cy5oYXMoa2V5KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIGxldCBkeCA9IDA7XG4gICAgICAgIGxldCBkeSA9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMua2V5c1tcIndcIl0pIGR5IC09IDE7XG4gICAgICAgIGlmICh0aGlzLmtleXNbXCJzXCJdKSBkeSArPSAxO1xuICAgICAgICBpZiAodGhpcy5rZXlzW1wiYVwiXSkgZHggLT0gMTtcbiAgICAgICAgaWYgKHRoaXMua2V5c1tcImRcIl0pIGR4ICs9IDE7XG5cbiAgICAgICAgaWYgKGR4ICE9PSAwIHx8IGR5ICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChHYW1lRXZlbnQuTU9WRSwgeyBkeCwgZHkgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vRXZlbnRzL0V2ZW50TGlzdGVuZXJcIjtcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0V2ZW50cy9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCB7IEdhbWVFdmVudCwgTW92ZUV2ZW50UGF5bG9hZCB9IGZyb20gXCIuL0V2ZW50cy9FdmVudC50c1wiO1xuaW1wb3J0IHsgQmxvY2sgfSBmcm9tIFwiLi9vYmplY3RzL0Jsb2NrXCI7XG5pbXBvcnQgdHlwZSB7IEFuc3dlclNsb3RFbnRpdHkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxudHlwZSBEaXJlY3Rpb24gPSBcInVwXCIgfCBcImRvd25cIiB8IFwibGVmdFwiIHwgXCJyaWdodFwiO1xuXG50eXBlIEJvdW5kcyA9IHtcbiAgICBtaW5YOiBudW1iZXI7XG4gICAgbWF4WDogbnVtYmVyO1xuICAgIG1pblk6IG51bWJlcjtcbiAgICBtYXhZOiBudW1iZXI7XG59O1xuXG5leHBvcnQgY2xhc3MgUGxheWVyQ29udHJvbCBleHRlbmRzIEV2ZW50TGlzdGVuZXIge1xuICAgIHB1YmxpYyB4ID0gMDtcbiAgICBwdWJsaWMgeSA9IDA7XG4gICAgcHVibGljIHJlYWRvbmx5IHdpZHRoID0gNDg7XG4gICAgcHVibGljIHJlYWRvbmx5IGhlaWdodCA9IDQ4O1xuXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGVlZCA9IDU7XG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXNoRGlzdGFuY2UgPSA1NjtcbiAgICBwcml2YXRlIGRpcmVjdGlvbjogRGlyZWN0aW9uID0gXCJkb3duXCI7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzcHJpdGVzOiBSZWNvcmQ8RGlyZWN0aW9uLCBIVE1MSW1hZ2VFbGVtZW50PjtcbiAgICBwcml2YXRlIGJvdW5kczogQm91bmRzID0ge1xuICAgICAgICBtaW5YOiAwLFxuICAgICAgICBtYXhYOiBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgICAgIG1pblk6IDAsXG4gICAgICAgIG1heFk6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICB9O1xuICAgIHByaXZhdGUgYmxvY2tzOiBCbG9ja1tdID0gW107XG4gICAgcHJpdmF0ZSBhbnN3ZXJTbG90czogQW5zd2VyU2xvdEVudGl0eVtdID0gW107XG4gICAgcHJpdmF0ZSBoZWxkQmxvY2s6IEJsb2NrIHwgbnVsbCA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3RvcihlbWl0dGVyOiBFdmVudEVtaXR0ZXIpIHtcbiAgICAgICAgc3VwZXIoZW1pdHRlcik7XG5cbiAgICAgICAgdGhpcy5zcHJpdGVzID0ge1xuICAgICAgICAgICAgdXA6IHRoaXMubG9hZFNwcml0ZShcIi4vYXNzZXRzL1BsYXllci9QbGF5ZXJfVXAucG5nXCIpLFxuICAgICAgICAgICAgZG93bjogdGhpcy5sb2FkU3ByaXRlKFwiLi9hc3NldHMvUGxheWVyL1BsYXllcl9Eb3duLnBuZ1wiKSxcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMubG9hZFNwcml0ZShcIi4vYXNzZXRzL1BsYXllci9QbGF5ZXJfTGVmdC5wbmdcIiksXG4gICAgICAgICAgICByaWdodDogdGhpcy5sb2FkU3ByaXRlKFwiLi9hc3NldHMvUGxheWVyL1BsYXllcl9SaWdodC5wbmdcIiksXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy54ID0gNDAwO1xuICAgICAgICB0aGlzLnkgPSAzMDA7XG5cbiAgICAgICAgdGhpcy5saXN0ZW48TW92ZUV2ZW50UGF5bG9hZD4oR2FtZUV2ZW50Lk1PVkUsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoZGF0YSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGlzdGVuKEdhbWVFdmVudC5EQVNILCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRhc2goKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW4oR2FtZUV2ZW50LkhPTEQsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlSG9sZCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKCkge31cblxuICAgIHB1YmxpYyBkcmF3KGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IHRoaXMuc3ByaXRlc1t0aGlzLmRpcmVjdGlvbl07XG5cbiAgICAgICAgaWYgKHNwcml0ZS5jb21wbGV0ZSAmJiBzcHJpdGUubmF0dXJhbFdpZHRoID4gMCkge1xuICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShzcHJpdGUsIHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjZTUzOTM1XCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCb3VuZHMobWluWDogbnVtYmVyLCBtaW5ZOiBudW1iZXIsIG1heFg6IG51bWJlciwgbWF4WTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuYm91bmRzID0geyBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZIH07XG4gICAgICAgIHRoaXMuY2xhbXBUb0JvdW5kcygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRCbG9ja3MoYmxvY2tzOiBCbG9ja1tdKSB7XG4gICAgICAgIHRoaXMuYmxvY2tzID0gYmxvY2tzO1xuXG4gICAgICAgIGlmICh0aGlzLmhlbGRCbG9jayAmJiAhYmxvY2tzLmluY2x1ZGVzKHRoaXMuaGVsZEJsb2NrKSkge1xuICAgICAgICAgICAgdGhpcy5oZWxkQmxvY2sgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHNldEFuc3dlclNsb3RzKHNsb3RzOiBBbnN3ZXJTbG90RW50aXR5W10pIHtcbiAgICAgICAgdGhpcy5hbnN3ZXJTbG90cyA9IHNsb3RzO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyLCBkaXJlY3Rpb246IERpcmVjdGlvbiA9IFwiZG93blwiKSB7XG4gICAgICAgIGlmICh0aGlzLmhlbGRCbG9jaykge1xuICAgICAgICAgICAgdGhpcy5kZXRhY2hIZWxkQmxvY2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICAgICAgICB0aGlzLmNsYW1wVG9Cb3VuZHMoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0RmFjaW5nRGlyZWN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kaXJlY3Rpb247XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkU3ByaXRlKHNyYzogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBzcHJpdGUuc3JjID0gc3JjO1xuICAgICAgICByZXR1cm4gc3ByaXRlO1xuICAgIH1cblxuICAgIHByaXZhdGUgbW92ZShkYXRhOiBNb3ZlRXZlbnRQYXlsb2FkKSB7XG4gICAgICAgIGNvbnN0IG5leHREaXJlY3Rpb24gPSB0aGlzLnJlc29sdmVEaXJlY3Rpb24oZGF0YSk7XG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gbmV4dERpcmVjdGlvbjtcblxuICAgICAgICBjb25zdCBjYW5kaWRhdGVYID0gdGhpcy5jbGFtcFZhbHVlKHRoaXMueCArIGRhdGEuZHggKiB0aGlzLnNwZWVkLCB0aGlzLmJvdW5kcy5taW5YLCB0aGlzLmJvdW5kcy5tYXhYKTtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlWSA9IHRoaXMuY2xhbXBWYWx1ZSh0aGlzLnkgKyBkYXRhLmR5ICogdGhpcy5zcGVlZCwgdGhpcy5ib3VuZHMubWluWSwgdGhpcy5ib3VuZHMubWF4WSk7XG4gICAgICAgIGNvbnN0IG90aGVyQmxvY2tzID0gdGhpcy5ibG9ja3MuZmlsdGVyKChibG9jaykgPT4gYmxvY2sgIT09IHRoaXMuaGVsZEJsb2NrKTtcblxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlc1dpdGhBbnlCbG9jayhjYW5kaWRhdGVYLCBjYW5kaWRhdGVZLCBvdGhlckJsb2NrcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhlbGRCbG9jaykge1xuICAgICAgICAgICAgdGhpcy5jbGVhckFuc3dlclNsb3RGb3JCbG9jayh0aGlzLmhlbGRCbG9jayk7XG4gICAgICAgICAgICBjb25zdCBoZWxkUG9zaXRpb24gPSB0aGlzLmdldEhlbGRCbG9ja1Bvc2l0aW9uKGNhbmRpZGF0ZVgsIGNhbmRpZGF0ZVksIG5leHREaXJlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5oZWxkQmxvY2subW92ZVRvKGhlbGRQb3NpdGlvbi54LCBoZWxkUG9zaXRpb24ueSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnggPSBjYW5kaWRhdGVYO1xuICAgICAgICB0aGlzLnkgPSBjYW5kaWRhdGVZO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGFzaCgpIHtcbiAgICAgICAgbGV0IGR4ID0gMDtcbiAgICAgICAgbGV0IGR5ID0gMDtcblxuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwidXBcIikgZHkgPSAtMTtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcImRvd25cIikgZHkgPSAxO1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiKSBkeCA9IC0xO1xuICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIikgZHggPSAxO1xuXG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVggPSB0aGlzLmNsYW1wVmFsdWUodGhpcy54ICsgZHggKiB0aGlzLmRhc2hEaXN0YW5jZSwgdGhpcy5ib3VuZHMubWluWCwgdGhpcy5ib3VuZHMubWF4WCk7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZVkgPSB0aGlzLmNsYW1wVmFsdWUodGhpcy55ICsgZHkgKiB0aGlzLmRhc2hEaXN0YW5jZSwgdGhpcy5ib3VuZHMubWluWSwgdGhpcy5ib3VuZHMubWF4WSk7XG4gICAgICAgIGNvbnN0IG90aGVyQmxvY2tzID0gdGhpcy5ibG9ja3MuZmlsdGVyKChibG9jaykgPT4gYmxvY2sgIT09IHRoaXMuaGVsZEJsb2NrKTtcblxuICAgICAgICBpZiAodGhpcy5jb2xsaWRlc1dpdGhBbnlCbG9jayhjYW5kaWRhdGVYLCBjYW5kaWRhdGVZLCBvdGhlckJsb2NrcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhlbGRCbG9jaykge1xuICAgICAgICAgICAgdGhpcy5jbGVhckFuc3dlclNsb3RGb3JCbG9jayh0aGlzLmhlbGRCbG9jayk7XG4gICAgICAgICAgICBjb25zdCBoZWxkUG9zaXRpb24gPSB0aGlzLmdldEhlbGRCbG9ja1Bvc2l0aW9uKGNhbmRpZGF0ZVgsIGNhbmRpZGF0ZVksIHRoaXMuZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuaGVsZEJsb2NrLm1vdmVUbyhoZWxkUG9zaXRpb24ueCwgaGVsZFBvc2l0aW9uLnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy54ID0gY2FuZGlkYXRlWDtcbiAgICAgICAgdGhpcy55ID0gY2FuZGlkYXRlWTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZUhvbGQoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlbGRCbG9jaykge1xuICAgICAgICAgICAgY29uc3QgcmVsZWFzZVNsb3QgPSB0aGlzLmdldEludGVyc2VjdGluZ0VtcHR5QW5zd2VyU2xvdCh0aGlzLmhlbGRCbG9jayk7XG4gICAgICAgICAgICBjb25zdCBvdGhlckJsb2NrcyA9IHRoaXMuYmxvY2tzLmZpbHRlcigoY2FuZGlkYXRlKSA9PiBjYW5kaWRhdGUgIT09IHRoaXMuaGVsZEJsb2NrKTtcblxuICAgICAgICAgICAgaWYgKHJlbGVhc2VTbG90KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckFuc3dlclNsb3RGb3JCbG9jayh0aGlzLmhlbGRCbG9jayk7XG4gICAgICAgICAgICAgICAgcmVsZWFzZVNsb3QuYmxvY2sgPSB0aGlzLmhlbGRCbG9jaztcbiAgICAgICAgICAgICAgICB0aGlzLmhlbGRCbG9jay5tb3ZlVG8ocmVsZWFzZVNsb3QueCwgcmVsZWFzZVNsb3QueSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRhY2hIZWxkQmxvY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNvbGxpZGVzV2l0aEFueUJsb2NrKHRoaXMuaGVsZEJsb2NrLngsIHRoaXMuaGVsZEJsb2NrLnksIG90aGVyQmxvY2tzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlY3RGaXRzQm91bmRzKHRoaXMuaGVsZEJsb2NrLngsIHRoaXMuaGVsZEJsb2NrLnksIHRoaXMuaGVsZEJsb2NrLnNpemUsIHRoaXMuaGVsZEJsb2NrLnNpemUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmRldGFjaEhlbGRCbG9jaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYmxvY2sgPSB0aGlzLmZpbmROZWFyYnlGYWNpbmdCbG9jaygpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyQW5zd2VyU2xvdEZvckJsb2NrKGJsb2NrKTtcbiAgICAgICAgdGhpcy5oZWxkQmxvY2sgPSBibG9jaztcbiAgICAgICAgYmxvY2suc2V0SGVsZCh0cnVlKTtcbiAgICAgICAgY29uc3QgaGVsZFBvc2l0aW9uID0gdGhpcy5nZXRIZWxkQmxvY2tQb3NpdGlvbih0aGlzLngsIHRoaXMueSwgdGhpcy5kaXJlY3Rpb24pO1xuICAgICAgICBibG9jay5tb3ZlVG8oaGVsZFBvc2l0aW9uLngsIGhlbGRQb3NpdGlvbi55KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGZpbmROZWFyYnlGYWNpbmdCbG9jaygpIHtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIGNvbnN0IHBsYXllckNlbnRlclggPSB0aGlzLnggKyB0aGlzLndpZHRoIC8gMjtcbiAgICAgICAgY29uc3QgcGxheWVyQ2VudGVyWSA9IHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjtcblxuICAgICAgICBsZXQgY2xvc2VzdEJsb2NrOiBCbG9jayB8IG51bGwgPSBudWxsO1xuICAgICAgICBsZXQgY2xvc2VzdERpc3RhbmNlID0gTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZO1xuXG4gICAgICAgIGZvciAoY29uc3QgYmxvY2sgb2YgdGhpcy5ibG9ja3MpIHtcbiAgICAgICAgICAgIGlmIChibG9jay5oZWxkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGJsb2NrQ2VudGVyWCA9IGJsb2NrLnggKyBibG9jay5zaXplIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrQ2VudGVyWSA9IGJsb2NrLnkgKyBibG9jay5zaXplIC8gMjtcbiAgICAgICAgICAgIGNvbnN0IGhvcml6b250YWxEaXN0YW5jZSA9IE1hdGguYWJzKGJsb2NrQ2VudGVyWCAtIHBsYXllckNlbnRlclgpO1xuICAgICAgICAgICAgY29uc3QgdmVydGljYWxEaXN0YW5jZSA9IE1hdGguYWJzKGJsb2NrQ2VudGVyWSAtIHBsYXllckNlbnRlclkpO1xuXG4gICAgICAgICAgICBsZXQgZGlzdGFuY2UgPSBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgYmxvY2sueSA+PSB0aGlzLnkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGdlR2FwID0gYmxvY2sueSAtICh0aGlzLnkgKyB0aGlzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgaWYgKGhvcml6b250YWxEaXN0YW5jZSA8PSB0aHJlc2hvbGQgJiYgZWRnZUdhcCA+PSAwICYmIGVkZ2VHYXAgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBlZGdlR2FwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSBcInVwXCIgJiYgYmxvY2sueSArIGJsb2NrLnNpemUgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGdlR2FwID0gdGhpcy55IC0gKGJsb2NrLnkgKyBibG9jay5zaXplKTtcbiAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbERpc3RhbmNlIDw9IHRocmVzaG9sZCAmJiBlZGdlR2FwID49IDAgJiYgZWRnZUdhcCA8IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGVkZ2VHYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwicmlnaHRcIiAmJiBibG9jay54ID49IHRoaXMueCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVkZ2VHYXAgPSBibG9jay54IC0gKHRoaXMueCArIHRoaXMud2lkdGgpO1xuICAgICAgICAgICAgICAgIGlmICh2ZXJ0aWNhbERpc3RhbmNlIDw9IHRocmVzaG9sZCAmJiBlZGdlR2FwID49IDAgJiYgZWRnZUdhcCA8IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZSA9IGVkZ2VHYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09IFwibGVmdFwiICYmIGJsb2NrLnggKyBibG9jay5zaXplIDw9IHRoaXMueCArIHRoaXMud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlZGdlR2FwID0gdGhpcy54IC0gKGJsb2NrLnggKyBibG9jay5zaXplKTtcbiAgICAgICAgICAgICAgICBpZiAodmVydGljYWxEaXN0YW5jZSA8PSB0aHJlc2hvbGQgJiYgZWRnZUdhcCA+PSAwICYmIGVkZ2VHYXAgPCB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBlZGdlR2FwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgY2xvc2VzdERpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgY2xvc2VzdERpc3RhbmNlID0gZGlzdGFuY2U7XG4gICAgICAgICAgICAgICAgY2xvc2VzdEJsb2NrID0gYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2xvc2VzdEJsb2NrO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzb2x2ZURpcmVjdGlvbihkYXRhOiBNb3ZlRXZlbnRQYXlsb2FkKTogRGlyZWN0aW9uIHtcbiAgICAgICAgaWYgKGRhdGEuZHggPiAwKSByZXR1cm4gXCJyaWdodFwiO1xuICAgICAgICBpZiAoZGF0YS5keCA8IDApIHJldHVybiBcImxlZnRcIjtcbiAgICAgICAgaWYgKGRhdGEuZHkgPiAwKSByZXR1cm4gXCJkb3duXCI7XG4gICAgICAgIHJldHVybiBcInVwXCI7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRIZWxkQmxvY2tQb3NpdGlvbihwbGF5ZXJYOiBudW1iZXIsIHBsYXllclk6IG51bWJlciwgZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHBsYXllclgsIHk6IHBsYXllclkgLSB0aGlzLmhlaWdodCB9O1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICByZXR1cm4geyB4OiBwbGF5ZXJYLCB5OiBwbGF5ZXJZICsgdGhpcy5oZWlnaHQgfTtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgeDogcGxheWVyWCAtIHRoaXMud2lkdGgsIHk6IHBsYXllclkgfTtcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB7IHg6IHBsYXllclggKyB0aGlzLndpZHRoLCB5OiBwbGF5ZXJZIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEludGVyc2VjdGluZ0VtcHR5QW5zd2VyU2xvdChibG9jazogQmxvY2spIHtcbiAgICAgICAgY29uc3QgYmxvY2tDZW50ZXJYID0gYmxvY2sueCArIGJsb2NrLnNpemUgLyAyO1xuICAgICAgICBjb25zdCBibG9ja0NlbnRlclkgPSBibG9jay55ICsgYmxvY2suc2l6ZSAvIDI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYW5zd2VyU2xvdHMuZmluZCgoc2xvdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb2NjdXBpZWRCeU90aGVyQmxvY2sgPSBzbG90LmJsb2NrICE9PSBudWxsICYmIHNsb3QuYmxvY2sgIT09IGJsb2NrO1xuICAgICAgICAgICAgaWYgKG9jY3VwaWVkQnlPdGhlckJsb2NrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIGJsb2NrQ2VudGVyWCA+PSBzbG90LnggJiZcbiAgICAgICAgICAgICAgICBibG9ja0NlbnRlclggPD0gc2xvdC54ICsgc2xvdC5zaXplICYmXG4gICAgICAgICAgICAgICAgYmxvY2tDZW50ZXJZID49IHNsb3QueSAmJlxuICAgICAgICAgICAgICAgIGJsb2NrQ2VudGVyWSA8PSBzbG90LnkgKyBzbG90LnNpemVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pID8/IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjbGVhckFuc3dlclNsb3RGb3JCbG9jayhibG9jazogQmxvY2spIHtcbiAgICAgICAgZm9yIChjb25zdCBzbG90IG9mIHRoaXMuYW5zd2VyU2xvdHMpIHtcbiAgICAgICAgICAgIGlmIChzbG90LmJsb2NrID09PSBibG9jaykge1xuICAgICAgICAgICAgICAgIHNsb3QuYmxvY2sgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkZXRhY2hIZWxkQmxvY2soKSB7XG4gICAgICAgIGlmICghdGhpcy5oZWxkQmxvY2spIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGVsZEJsb2NrLnNldEhlbGQoZmFsc2UpO1xuICAgICAgICB0aGlzLmhlbGRCbG9jayA9IG51bGw7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb2xsaWRlc1dpdGhBbnlCbG9jayh4OiBudW1iZXIsIHk6IG51bWJlciwgYmxvY2tzOiBCbG9ja1tdKSB7XG4gICAgICAgIHJldHVybiBibG9ja3Muc29tZSgoYmxvY2spID0+IGJsb2NrLmNvbGxpZGVzV2l0aFJlY3QoeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY3RGaXRzQm91bmRzKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgeCA+PSB0aGlzLmJvdW5kcy5taW5YICYmXG4gICAgICAgICAgICB5ID49IHRoaXMuYm91bmRzLm1pblkgJiZcbiAgICAgICAgICAgIHggKyB3aWR0aCA8PSB0aGlzLmJvdW5kcy5tYXhYICsgd2lkdGggJiZcbiAgICAgICAgICAgIHkgKyBoZWlnaHQgPD0gdGhpcy5ib3VuZHMubWF4WSArIGhlaWdodFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xhbXBUb0JvdW5kcygpIHtcbiAgICAgICAgdGhpcy54ID0gdGhpcy5jbGFtcFZhbHVlKHRoaXMueCwgdGhpcy5ib3VuZHMubWluWCwgdGhpcy5ib3VuZHMubWF4WCk7XG4gICAgICAgIHRoaXMueSA9IHRoaXMuY2xhbXBWYWx1ZSh0aGlzLnksIHRoaXMuYm91bmRzLm1pblksIHRoaXMuYm91bmRzLm1heFkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2xhbXBWYWx1ZSh2YWx1ZTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCB0eXBlIEJsb2NrVHlwZSA9IFwibm9ybWFsXCI7XG5cbmNvbnN0IGlzVmFsaWRWYWx1ZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKC9eW2Etel0kL2kudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKC9eXFxkezEsMn0kLy50ZXN0KHZhbHVlKSkge1xuICAgICAgICBjb25zdCBudW1lcmljVmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICByZXR1cm4gbnVtZXJpY1ZhbHVlID49IDAgJiYgbnVtZXJpY1ZhbHVlIDw9IDk5O1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCbG9jayB7XG4gICAgcHVibGljIHg6IG51bWJlcjtcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xuICAgIHB1YmxpYyByZWFkb25seSBzaXplOiBudW1iZXI7XG4gICAgcHVibGljIHJlYWRvbmx5IGNvbG9yOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBzdHJpbmc7XG4gICAgcHVibGljIHJlYWRvbmx5IHR5cGU6IEJsb2NrVHlwZTtcbiAgICBwdWJsaWMgaGVsZCA9IGZhbHNlO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHR5cGU6IEJsb2NrVHlwZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNpemU6IG51bWJlciwgY29sb3I6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlcikge1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVmFsdWUgPSBgJHt2YWx1ZX1gLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghaXNWYWxpZFZhbHVlKG5vcm1hbGl6ZWRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBibG9jayB2YWx1ZSBcIiR7dmFsdWV9XCIuIEJsb2NrcyBtdXN0IHVzZSBvbmUgbGV0dGVyIG9yIGEgbnVtYmVyIGZyb20gMCB0byA5OS5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5vcm1hbGl6ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZHJhdyhjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnNpemUsIHRoaXMuc2l6ZSk7XG5cbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5oZWxkID8gXCIjM2EzYTNhXCIgOiBcIiMxMTExMTFcIjtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuaGVsZCA/IDMgOiAyO1xuICAgICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xuXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxMTExMTFcIjtcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgICAgICBjdHguZm9udCA9IGBib2xkICR7TWF0aC5tYXgoMTgsIE1hdGguZmxvb3IodGhpcy5zaXplICogMC40MikpfXB4IFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWZgO1xuICAgICAgICBjdHguZmlsbFRleHQodGhpcy52YWx1ZSwgdGhpcy54ICsgdGhpcy5zaXplIC8gMiwgdGhpcy55ICsgdGhpcy5zaXplIC8gMik7XG4gICAgfVxuXG4gICAgcHVibGljIGNvbGxpZGVzV2l0aFJlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB4IDwgdGhpcy54ICsgdGhpcy5zaXplICYmXG4gICAgICAgICAgICB4ICsgd2lkdGggPiB0aGlzLnggJiZcbiAgICAgICAgICAgIHkgPCB0aGlzLnkgKyB0aGlzLnNpemUgJiZcbiAgICAgICAgICAgIHkgKyBoZWlnaHQgPiB0aGlzLnlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZVRvKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldEhlbGQoaGVsZDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmhlbGQgPSBoZWxkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEJsb2NrIH0gZnJvbSBcIi4vQmxvY2tcIjtcblxuZXhwb3J0IGNsYXNzIE5vcm1hbEJsb2NrIGV4dGVuZHMgQmxvY2sge1xuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzaXplOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoXCJub3JtYWxcIiwgeCwgeSwgc2l6ZSwgY29sb3IsIHZhbHVlKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgZ2V0TGF5b3V0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gIGNvbnN0IHcgPSBjdHguY2FudmFzLndpZHRoO1xuICBjb25zdCBoID0gY3R4LmNhbnZhcy5oZWlnaHQ7XG5cbiAgY29uc3QgY29udGVudFdpZHRoID0gdyAqIDAuODQ7XG4gIGNvbnN0IGNvbnRlbnRYID0gKHcgLSBjb250ZW50V2lkdGgpIC8gMjtcbiAgY29uc3QgbG9nb1kgPSBoICogMC4wODtcblxuICBjb25zdCB0b3BCb3hXaWR0aCA9IGNvbnRlbnRXaWR0aDtcbiAgY29uc3QgdG9wQm94SGVpZ2h0ID0gaCAqIDAuNDg7XG4gIGNvbnN0IHRvcEJveFggPSBjb250ZW50WDtcbiAgY29uc3QgdG9wQm94WSA9IGggKiAwLjE4O1xuXG4gIGNvbnN0IHRvcElubmVyV2lkdGggPSB0b3BCb3hXaWR0aCAqIDAuNDI7XG4gIGNvbnN0IHRvcElubmVySGVpZ2h0ID0gdG9wQm94SGVpZ2h0ICogMC42MjtcbiAgY29uc3QgdG9wSW5uZXJYID0gdyAvIDIgLSB0b3BJbm5lcldpZHRoIC8gMjtcbiAgY29uc3QgdG9wSW5uZXJZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTY7XG5cbiAgY29uc3QgbW92ZW1lbnRBcmVhV2lkdGggPSB0b3BCb3hXaWR0aCAqIDAuNDI7XG4gIGNvbnN0IG1vdmVtZW50QXJlYUhlaWdodCA9IHRvcEJveEhlaWdodCAqIDAuNjI7XG4gIGNvbnN0IG1vdmVtZW50QXJlYVggPSB0b3BJbm5lclg7XG4gIGNvbnN0IG1vdmVtZW50QXJlYVkgPSB0b3BJbm5lclk7XG5cbiAgY29uc3QgZ2FwID0gaCAqIDAuMDQ7XG4gIGNvbnN0IGJvdHRvbUJveFkgPSB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICsgZ2FwO1xuICBjb25zdCBib3R0b21Cb3hIZWlnaHQgPSBoICogMC4yMjtcblxuICByZXR1cm4ge1xuICAgIHcsXG4gICAgaCxcbiAgICBjb250ZW50V2lkdGgsXG4gICAgY29udGVudFgsXG4gICAgbG9nb1ksXG4gICAgdG9wQm94WCxcbiAgICB0b3BCb3hZLFxuICAgIHRvcEJveFdpZHRoLFxuICAgIHRvcEJveEhlaWdodCxcbiAgICB0b3BJbm5lclgsXG4gICAgdG9wSW5uZXJZLFxuICAgIHRvcElubmVyV2lkdGgsXG4gICAgdG9wSW5uZXJIZWlnaHQsXG4gICAgbW92ZW1lbnRBcmVhWCxcbiAgICBtb3ZlbWVudEFyZWFZLFxuICAgIG1vdmVtZW50QXJlYVdpZHRoLFxuICAgIG1vdmVtZW50QXJlYUhlaWdodCxcbiAgICBib3R0b21Cb3hZLFxuICAgIGJvdHRvbUJveEhlaWdodCxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZlbWVudExheW91dCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICBjb25zdCB3ID0gY3R4LmNhbnZhcy53aWR0aDtcbiAgY29uc3QgaCA9IGN0eC5jYW52YXMuaGVpZ2h0O1xuXG4gIGNvbnN0IGdhbWVGcmFtZVggPSB3ICogMC4wNTtcbiAgY29uc3QgZ2FtZUZyYW1lWSA9IGggKiAwLjA1O1xuICBjb25zdCBnYW1lRnJhbWVXaWR0aCA9IHcgKiAwLjk7XG4gIGNvbnN0IGdhbWVGcmFtZUhlaWdodCA9IGggKiAwLjY1O1xuXG4gIGNvbnN0IGJvdHRvbUZyYW1lWCA9IDA7XG4gIGNvbnN0IGJvdHRvbUZyYW1lWSA9IGggKiAwLjc7XG4gIGNvbnN0IGJvdHRvbUZyYW1lV2lkdGggPSB3O1xuICBjb25zdCBib3R0b21GcmFtZUhlaWdodCA9IGggKiAwLjM7XG5cbiAgY29uc3QgZnJhbWVQYWRkaW5nWCA9IDI0O1xuICBjb25zdCBmcmFtZVBhZGRpbmdUb3AgPSAyNDtcbiAgY29uc3QgZnJhbWVQYWRkaW5nQm90dG9tID0gNTY7XG4gIGNvbnN0IG1vdmVtZW50QXJlYVggPSBnYW1lRnJhbWVYICsgZnJhbWVQYWRkaW5nWDtcbiAgY29uc3QgbW92ZW1lbnRBcmVhWSA9IGdhbWVGcmFtZVkgKyBmcmFtZVBhZGRpbmdUb3A7XG4gIGNvbnN0IG1vdmVtZW50QXJlYVdpZHRoID0gZ2FtZUZyYW1lV2lkdGggLSBmcmFtZVBhZGRpbmdYICogMjtcbiAgY29uc3QgbW92ZW1lbnRBcmVhSGVpZ2h0ID0gZ2FtZUZyYW1lSGVpZ2h0IC0gZnJhbWVQYWRkaW5nVG9wIC0gZnJhbWVQYWRkaW5nQm90dG9tO1xuXG4gIHJldHVybiB7XG4gICAgdyxcbiAgICBoLFxuICAgIGdhbWVGcmFtZVgsXG4gICAgZ2FtZUZyYW1lWSxcbiAgICBnYW1lRnJhbWVXaWR0aCxcbiAgICBnYW1lRnJhbWVIZWlnaHQsXG4gICAgYm90dG9tRnJhbWVYLFxuICAgIGJvdHRvbUZyYW1lWSxcbiAgICBib3R0b21GcmFtZVdpZHRoLFxuICAgIGJvdHRvbUZyYW1lSGVpZ2h0LFxuICAgIG1vdmVtZW50QXJlYVgsXG4gICAgbW92ZW1lbnRBcmVhWSxcbiAgICBtb3ZlbWVudEFyZWFXaWR0aCxcbiAgICBtb3ZlbWVudEFyZWFIZWlnaHQsXG4gIH07XG59O1xuIiwiZXhwb3J0IGNvbnN0IExFVkVMX0NPVU5UID0gMjA7XHJcblxyXG5leHBvcnQgY29uc3QgTEVWRUxfREFUQTogeyB0aXRsZTogc3RyaW5nOyBsaW5lczogc3RyaW5nW10gfVtdID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBcIldoYXQncyB5b3VyIG5hbWU/XCIsXHJcbiAgICBsaW5lczogW1wiRW50ZXIgeW91ciBuYW1lIGJlbG93LlwiLCBcIkxlYXZlIGl0IGJsYW5rIGFuZCB3ZSdsbCBjYWxsIHlvdSBCb3guXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV2hhdCBpcyAxNSArIDE1P1wiLFxyXG4gICAgbGluZXM6IFtcIlBpY2sgdGhlIGNvcnJlY3QgYW5zd2VyIGZyb20gdGhlIG9wdGlvbnMgYWJvdmUuXCJdLFxyXG4gIH0sXHJcbiAgeyB0aXRsZTogXCJDbGljayB0aGUgZG90XCIsIGxpbmVzOiBbXSB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDQgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgNSBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA2IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDcgaW5zdHJ1Y3Rpb24gaGVyZS5cIixcclxuICAgIGxpbmVzOiBbXCJQbGFjZWhvbGRlciAtIHRvIGJlIHdyaXR0ZW4uXCJdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiTGV2ZWwgOCBpbnN0cnVjdGlvbiBoZXJlLlwiLFxyXG4gICAgbGluZXM6IFtcIlBsYWNlaG9sZGVyIC0gdG8gYmUgd3JpdHRlbi5cIl0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJMZXZlbCA5IGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkxldmVsIDEwIGluc3RydWN0aW9uIGhlcmUuXCIsXHJcbiAgICBsaW5lczogW1wiUGxhY2Vob2xkZXIgLSB0byBiZSB3cml0dGVuLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIk1vdmVtZW50IFByYWN0aWNlXCIsXHJcbiAgICBsaW5lczogW1wiVXNlIFcsIEEsIFMsIGFuZCBEIHRvIG1vdmUgdGhlIHBsYXllci5cIiwgXCJUaGUgc3ByaXRlIGNoYW5nZXMgZGlyZWN0aW9uIHdpdGggZWFjaCBtb3ZlLlwiXSxcclxuICB9LFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3TmFtZUVudHJ5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUHJvbXB0XHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJXaGF0J3MgeW91ciBuYW1lP1wiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMik7XHJcblxyXG4gIGN0eC5mb250ID0gYDE4cHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIFwiTGVhdmUgaXQgYmxhbmsgYW5kIHdlJ2xsIGNhbGwgeW91IEJveC5cIixcclxuICAgIGN4LFxyXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMzIsXHJcbiAgICB0b3BCb3hXaWR0aCAqIDAuNjUsXHJcbiAgKTtcclxuXHJcbiAgLy8gSW5wdXQgYm94XHJcbiAgY29uc3QgaW5wdXRXID0gdG9wQm94V2lkdGggKiAwLjU7XHJcbiAgY29uc3QgaW5wdXRIID0gNTI7XHJcbiAgY29uc3QgaW5wdXRYID0gY3ggLSBpbnB1dFcgLyAyO1xyXG4gIGNvbnN0IGlucHV0WSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjQyO1xyXG5cclxuICBjdHguc3Ryb2tlU3R5bGUgPSBzdGF0ZS5uYW1lRm9jdXNlZFxyXG4gICAgPyBzdGF0ZS5kYXJrTW9kZVxyXG4gICAgICA/IFwiI2ZmZmZmZlwiXHJcbiAgICAgIDogXCIjMTExMTExXCJcclxuICAgIDogdC5kaXZpZGVyO1xyXG4gIGN0eC5saW5lV2lkdGggPSBzdGF0ZS5uYW1lRm9jdXNlZCA/IDMgOiAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KGlucHV0WCwgaW5wdXRZLCBpbnB1dFcsIGlucHV0SCk7XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlUZXh0ID1cclxuICAgIHN0YXRlLm5hbWVJbnB1dC5sZW5ndGggPiAwXHJcbiAgICAgID8gc3RhdGUubmFtZUlucHV0XHJcbiAgICAgIDogc3RhdGUubmFtZUZvY3VzZWRcclxuICAgICAgICA/IFwiXCJcclxuICAgICAgICA6IFwiVHlwZSB5b3VyIG5hbWXigKZcIjtcclxuICBjdHguZmlsbFN0eWxlID0gc3RhdGUubmFtZUlucHV0Lmxlbmd0aCA+IDAgPyB0LmZnIDogdC5mZ0RpbTtcclxuICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgMjJweCAke2JvZHlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KGRpc3BsYXlUZXh0LCBpbnB1dFggKyAxNCwgaW5wdXRZICsgaW5wdXRIIC8gMiwgaW5wdXRXIC0gMjgpO1xyXG5cclxuICAvLyBCbGlua2luZyBjdXJzb3JcclxuICBpZiAoc3RhdGUubmFtZUZvY3VzZWQpIHtcclxuICAgIGNvbnN0IG1lYXN1cmVkID0gY3R4Lm1lYXN1cmVUZXh0KHN0YXRlLm5hbWVJbnB1dCkud2lkdGg7XHJcbiAgICBjb25zdCBjdXJzb3JYID0gaW5wdXRYICsgMTQgKyBNYXRoLm1pbihtZWFzdXJlZCwgaW5wdXRXIC0gMjgpO1xyXG4gICAgY29uc3QgY3Vyc29yWSA9IGlucHV0WSArIGlucHV0SCAqIDAuMjtcclxuICAgIGNvbnN0IGN1cnNvckggPSBpbnB1dEggKiAwLjY7XHJcbiAgICBjb25zdCBibGluayA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDUzMCkgJSAyID09PSAwO1xyXG4gICAgaWYgKGJsaW5rKSB7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuZmc7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgIGN0eC5tb3ZlVG8oY3Vyc29yWCwgY3Vyc29yWSk7XHJcbiAgICAgIGN0eC5saW5lVG8oY3Vyc29yWCwgY3Vyc29yWSArIGN1cnNvckgpO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBJbnB1dCBib3ggaGl0IGFyZWFcclxuICBnYy5oaXRBcmVhcy5wdXNoKHtcclxuICAgIHg6IGlucHV0WCxcclxuICAgIHk6IGlucHV0WSxcclxuICAgIHc6IGlucHV0VyxcclxuICAgIGg6IGlucHV0SCxcclxuICAgIGFjdGlvbjogKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IHRydWU7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gQ29uZmlybSBidXR0b25cclxuICBjb25zdCBjb25maXJtVyA9IDE4MDtcclxuICBjb25zdCBjb25maXJtSCA9IDQ4O1xyXG4gIGRyYXdCdXR0b24oXHJcbiAgICBnYyxcclxuICAgIFwiQ09ORklSTSDihpJcIixcclxuICAgIGN4IC0gY29uZmlybVcgLyAyLFxyXG4gICAgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNjIsXHJcbiAgICBjb25maXJtVyxcclxuICAgIGNvbmZpcm1ILFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5wbGF5ZXJOYW1lID0gc3RhdGUubmFtZUlucHV0LnRyaW0oKSB8fCBcIkJveFwiO1xyXG4gICAgICBzdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xyXG4gICAgICBnYy5yZW5kZXIoKTtcclxuICAgIH0sXHJcbiAgICAyMCxcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMiA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgLy8gUXVlc3Rpb24gaGVhZGVyXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJXaGF0IGlzIDE1ICsgMTU/XCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNCk7XHJcblxyXG4gIC8vIDLDlzIgYW5zd2VyIGdyaWRcclxuICBjb25zdCBhbnN3ZXJzID0gW1xyXG4gICAgeyBsYWJlbDogXCIyNVwiLCBjb3JyZWN0OiBmYWxzZSB9LFxyXG4gICAgeyBsYWJlbDogXCIzMFwiLCBjb3JyZWN0OiB0cnVlIH0sXHJcbiAgICB7IGxhYmVsOiBcIjI4XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgICB7IGxhYmVsOiBcIjM1XCIsIGNvcnJlY3Q6IGZhbHNlIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgY29scyA9IDI7XHJcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcclxuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XHJcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcclxuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcclxuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFuc3dlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IGNvbCA9IGkgJSBjb2xzO1xyXG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XHJcbiAgICBjb25zdCB0eCA9IGdyaWRYICsgY29sICogKHRpbGVXICsgaEdhcCk7XHJcbiAgICBjb25zdCB0eSA9IGdyaWRZICsgcm93ICogKHRpbGVIICsgdkdhcCk7XHJcbiAgICBjb25zdCBhbnMgPSBhbnN3ZXJzW2ldO1xyXG5cclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgICBjdHguc3Ryb2tlUmVjdCh0eCwgdHksIHRpbGVXLCB0aWxlSCk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gICAgY3R4LmZvbnQgPSBgYm9sZCAzNnB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChhbnMubGFiZWwsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XHJcblxyXG4gICAgY29uc3QgY2FwdHVyZWQgPSBhbnMuY29ycmVjdDtcclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcHR1cmVkKSB7XHJcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAzO1xyXG4gICAgICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGdjLmxvc2VMaWZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRUaGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd0xldmVsMyA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XHJcbiAgY29uc3QgeyB3LCB0b3BCb3hYLCB0b3BCb3hZLCB0b3BCb3hXaWR0aCwgdG9wQm94SGVpZ2h0LCBib3R0b21Cb3hZIH0gPVxyXG4gICAgZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xyXG5cclxuICAvLyAyw5cyIGdyaWQgb2YgZGVjb3kgb3B0aW9ucyDigJQgYWxsIHdyb25nXHJcbiAgY29uc3QgY29scyA9IDI7XHJcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMztcclxuICBjb25zdCB0aWxlSCA9IHRvcEJveEhlaWdodCAqIDAuMjI7XHJcbiAgY29uc3QgaEdhcCA9IHRvcEJveFdpZHRoICogMC4wNjtcclxuICBjb25zdCB2R2FwID0gdG9wQm94SGVpZ2h0ICogMC4wNjtcclxuICBjb25zdCBncmlkVyA9IGNvbHMgKiB0aWxlVyArIGhHYXA7XHJcbiAgY29uc3QgZ3JpZFggPSBjeCAtIGdyaWRXIC8gMjtcclxuICBjb25zdCBncmlkWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjI2O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgY29uc3QgY29sID0gaSAlIGNvbHM7XHJcbiAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKGkgLyBjb2xzKTtcclxuICAgIGNvbnN0IHR4ID0gZ3JpZFggKyBjb2wgKiAodGlsZVcgKyBoR2FwKTtcclxuICAgIGNvbnN0IHR5ID0gZ3JpZFkgKyByb3cgKiAodGlsZUggKyB2R2FwKTtcclxuXHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICAgIGN0eC5saW5lV2lkdGggPSAzO1xyXG4gICAgY3R4LnN0cm9rZVJlY3QodHgsIHR5LCB0aWxlVywgdGlsZUgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuXHJcbiAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAvLyBUaGUgd29yZCBcImRvdFwiXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcImRvdFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAvIDIpO1xyXG4gICAgfSBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgIC8vIEEgbGl0ZXJhbCBkb3RcclxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICBjdHguYXJjKHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMiwgMTAsIDAsIE1hdGguUEkgKiAyKTtcclxuICAgICAgY3R4LmZpbGwoKTtcclxuICAgIH0gZWxzZSBpZiAoaSA9PT0gMikge1xyXG4gICAgICAvLyBUaHJlZSBkb3RzXHJcbiAgICAgIGN0eC5mb250ID0gYGJvbGQgMzZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsVGV4dChcIuKAoiDigKIg4oCiXCIsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIIC8gMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBEZXBhcnRtZW50IG9mIFNhbml0YXRpb25cclxuICAgICAgY3R4LmZvbnQgPSBgYm9sZCAxNXB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICAgICAgY3R4LmZpbGxUZXh0KFwiRGVwYXJ0bWVudFwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuMzQsIHRpbGVXIC0gMTYpO1xyXG4gICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgXCJvZiBTYW5pdGF0aW9uXCIsXHJcbiAgICAgICAgdHggKyB0aWxlVyAvIDIsXHJcbiAgICAgICAgdHkgKyB0aWxlSCAqIDAuNTcsXHJcbiAgICAgICAgdGlsZVcgLSAxNixcclxuICAgICAgKTtcclxuICAgICAgY3R4LmZvbnQgPSBgMTNweCAke2JvZHlGb250fWA7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xyXG4gICAgICBjdHguZmlsbFRleHQoXCIoRC5PLlMuKVwiLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuNzgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgICB4OiB0eCxcclxuICAgICAgeTogdHksXHJcbiAgICAgIHc6IHRpbGVXLFxyXG4gICAgICBoOiB0aWxlSCxcclxuICAgICAgYWN0aW9uOiAoKSA9PiBnYy5sb3NlTGlmZSgpLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBIaWRkZW4gaGl0IGFyZWE6IHRoZSB0aXR0bGUgKGRvdCkgb24gdGhlICdpJyBpbiBcIkNsaWNrXCIgaW4gdGhlIGJvdHRvbSBwYW5lbC5cclxuICAvLyBCb3R0b20gcGFuZWwgdGl0bGUgXCJDbGljayB0aGUgZG90LlwiIGlzIGRyYXduIGJvbGQgMzBweCwgY2VudGVyZWQgYXQgKHcvMiwgYm90dG9tQm94WSsxOCksXHJcbiAgLy8gdGV4dEJhc2VsaW5lPVwidG9wXCIuIFdlIG1lYXN1cmUgdG8gZmluZCB0aGUgJ2knIHgtcG9zaXRpb24sIHRoZW4gZXN0aW1hdGUgdGhlIHRpdHRsZSdzIHkuXHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjb25zdCBmdWxsU3RyID0gXCJDbGljayB0aGUgZG90XCI7XHJcbiAgY29uc3QgZnVsbFcgPSBjdHgubWVhc3VyZVRleHQoZnVsbFN0cikud2lkdGg7XHJcbiAgY29uc3QgdGV4dExlZnQgPSBjeCAtIGZ1bGxXIC8gMjtcclxuICBjb25zdCBwcmVmaXhXID0gY3R4Lm1lYXN1cmVUZXh0KFwiQ2xcIikud2lkdGg7XHJcbiAgY29uc3QgaUNoYXJXID0gY3R4Lm1lYXN1cmVUZXh0KFwiaVwiKS53aWR0aDtcclxuICBjb25zdCBpRG90Q1ggPSB0ZXh0TGVmdCArIHByZWZpeFcgKyBpQ2hhclcgLyAyO1xyXG4gIGNvbnN0IGlEb3RDWSA9IGJvdHRvbUJveFkgKyAxOCArIDU7IC8vIH41cHggYmVsb3cgdG9wIGJhc2VsaW5lIOKJiCB0aXR0bGUgcG9zaXRpb25cclxuICBjb25zdCBoaXRSID0gMTA7XHJcblxyXG4gIGdjLmhpdEFyZWFzLnB1c2goe1xyXG4gICAgeDogaURvdENYIC0gaGl0UixcclxuICAgIHk6IGlEb3RDWSAtIGhpdFIsXHJcbiAgICB3OiBoaXRSICogMixcclxuICAgIGg6IGhpdFIgKiAyLFxyXG4gICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDQ7XHJcbiAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgfSxcclxuICB9KTtcclxufTtcclxuIiwiY29uc29sZS5sb2coXCJCRU5DSE1BUksgMiBNQUlOIExPQURFRFwiKTtcblxuaW1wb3J0IHsgR2FtZUNvbnRleHQsIEdhbWVTdGF0ZSwgTW92ZW1lbnRBcmVhIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IGRyYXdCYWNrZ3JvdW5kLCBkcmF3TG9nbywgZHJhd0dhbWVwbGF5RnJhbWUsIGRyYXdCb3R0b21QYW5lbCB9IGZyb20gXCIuL3JlbmRlcmVyXCI7XG5pbXBvcnQgeyBkcmF3TWFpbk1lbnUgfSBmcm9tIFwiLi9zY3JlZW5zL01haW5NZW51XCI7XG5pbXBvcnQgeyBkcmF3TGV2ZWxTZWxlY3QgfSBmcm9tIFwiLi9zY3JlZW5zL0xldmVsU2VsZWN0XCI7XG5pbXBvcnQgeyBkcmF3TGV2ZWwgfSBmcm9tIFwiLi9zY3JlZW5zL0xldmVsXCI7XG5pbXBvcnQgeyBkcmF3UGF1c2VPdmVybGF5IH0gZnJvbSBcIi4vb3ZlcmxheXMvUGF1c2VPdmVybGF5XCI7XG5pbXBvcnQgeyBkcmF3Q29udHJvbHNPdmVybGF5IH0gZnJvbSBcIi4vb3ZlcmxheXMvQ29udHJvbHNPdmVybGF5XCI7XG5pbXBvcnQgeyBkcmF3R2FtZU92ZXJPdmVybGF5IH0gZnJvbSBcIi4vb3ZlcmxheXMvR2FtZU92ZXJPdmVybGF5XCI7XG5pbXBvcnQgeyBnZXRMYXlvdXQsIGdldE1vdmVtZW50TGF5b3V0IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gXCIuL0hlbHBlcnMvRXZlbnRzL0V2ZW50RW1pdHRlclwiO1xuaW1wb3J0IHsgSW5wdXRNYW5hZ2VyIH0gZnJvbSBcIi4vSGVscGVycy9JbnB1dE1hbmFnZXJcIjtcbmltcG9ydCB7IFBsYXllckNvbnRyb2wgfSBmcm9tIFwiLi9IZWxwZXJzL1BsYXllckNvbnRyb2xcIjtcbmltcG9ydCB7IE5vcm1hbEJsb2NrIH0gZnJvbSBcIi4vSGVscGVycy9vYmplY3RzL05vcm1hbEJsb2NrXCI7XG5cbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcbiAgY29uc3QgZGVidWdDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlYnVnLWNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGw7XG4gIGNvbnN0IHRleHRDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHQtY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcblxuICBpZiAoIWdhbWVDYW52YXMgfHwgIWRlYnVnQ2FudmFzIHx8ICF0ZXh0Q2FudmFzKSB7XG4gICAgY29uc29sZS5lcnJvcihcIk1pc3Npbmcgb25lIG9yIG1vcmUgY2FudmFzIGVsZW1lbnRzLlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjdHggPSBnYW1lQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgaWYgKCFjdHgpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGdldCAyRCBjb250ZXh0LlwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBzdGF0ZTogR2FtZVN0YXRlID0ge1xuICAgIGN1cnJlbnRTY3JlZW46IFwibWFpbm1lbnVcIixcbiAgICBjdXJyZW50TGV2ZWw6IDEsXG4gICAgbGl2ZXM6IDMsXG4gICAgcGF1c2VkOiBmYWxzZSxcbiAgICBjb250cm9sc09wZW46IGZhbHNlLFxuICAgIGRhcmtNb2RlOiB0cnVlLFxuICAgIHN0b3J5VGl0bGU6IFwiT3V0c2lkZS10aGUtQm94IFRoaW5raW5nIENlcnRpZmljYXRpb25cIixcbiAgICBzdG9yeUxpbmVzOiBbXG4gICAgICBcIkNvbXBsZXRlIHRoaXMgYXNzZXNzbWVudCB0byBlYXJuIHlvdXIgT3RCIFRoaW5raW5nIENlcnRpZmljYXRlLlwiLFxuICAgICAgXCJEZW1vbnN0cmF0ZSB5b3VyIGFiaWxpdHkgdG8gYXBwcm9hY2ggcHJvYmxlbXMgZnJvbSB1bmNvbnZlbnRpb25hbCBhbmdsZXMuXCIsXG4gICAgICBcIkNhbmRpZGF0ZXMgd2hvIHBhc3MgbWF5IGxpc3QgdGhpcyBjcmVkZW50aWFsIG9uIHRoZWlyIExpbmtlZEluIG9yIHJlc3VtZS5cIixcbiAgICBdLFxuICAgIHBsYXllck5hbWU6IFwiQm94XCIsXG4gICAgbmFtZUlucHV0OiBcIlwiLFxuICAgIG5hbWVGb2N1c2VkOiBmYWxzZSxcbiAgICBwbGF5TW9kZTogXCJwbGF5XCIsXG4gICAgZ2FtZU92ZXI6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0IGVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIGNvbnN0IGlucHV0ID0gbmV3IElucHV0TWFuYWdlcihlbWl0dGVyKTtcbiAgY29uc3QgcGxheWVyID0gbmV3IFBsYXllckNvbnRyb2woZW1pdHRlcik7XG4gIGxldCBwcmV2aW91c0xldmVsID0gc3RhdGUuY3VycmVudExldmVsO1xuICBsZXQgcHJldmlvdXNTY3JlZW4gPSBzdGF0ZS5jdXJyZW50U2NyZWVuO1xuICBsZXQgbmVlZHNNb3ZlbWVudFJlc2V0ID0gZmFsc2U7XG4gIGxldCBsYXN0VGltZXJUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgY29uc3QgZGVmYXVsdE1vdmVtZW50QXJlYTogTW92ZW1lbnRBcmVhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH07XG5cbiAgY29uc3QgZ2M6IEdhbWVDb250ZXh0ID0ge1xuICAgIGN0eCxcbiAgICBzdGF0ZSxcbiAgICBoaXRBcmVhczogW10sXG4gICAgcmVuZGVyOiAoKSA9PiB7fSxcbiAgICBsb3NlTGlmZTogKCkgPT4ge30sXG4gICAgcmVzZXRQbGF5ZXJOYW1lOiAoKSA9PiB7fSxcbiAgICBzdWJtaXRNb3ZlbWVudEFuc3dlcjogKCkgPT4ge30sXG4gICAgZ2V0Q3VycmVudEFuc3dlcjogKCkgPT4gXCJcIixcbiAgICBkaXNwbGF5Rm9udDogYFwiVHJlYnVjaGV0IE1TXCIsIFwiVmVyZGFuYVwiLCBzYW5zLXNlcmlmYCxcbiAgICBib2R5Rm9udDogYFwiVHJlYnVjaGV0IE1TXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZmAsXG4gICAgbG9nbzogbmV3IEltYWdlKCksXG4gICAgZ2FtZXBsYXlGcmFtZTogbmV3IEltYWdlKCksXG4gICAgbG9nb0xvYWRlZDogZmFsc2UsXG4gICAgZ2FtZXBsYXlGcmFtZUxvYWRlZDogZmFsc2UsXG4gICAgcGxheWVyLFxuICAgIGJsb2NrczogW10sXG4gICAgYW5zd2VyU2xvdHM6IFtdLFxuICAgIG1vdmVtZW50QXJlYTogZGVmYXVsdE1vdmVtZW50QXJlYSxcbiAgICBxdWl6QW5zd2VyOiBcIkFCN1wiLFxuICAgIHRpbWVMZWZ0U2Vjb25kczogMzAsXG4gIH07XG5cbiAgY29uc3QgaXNNb3ZlbWVudExldmVsID0gKGxldmVsOiBudW1iZXIpID0+IGxldmVsID49IDExICYmIGxldmVsIDw9IDIwO1xuXG4gIGNvbnN0IHN5bmNNb3ZlbWVudEFyZWEgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZW1lbnRMYXlvdXQgPSBnZXRNb3ZlbWVudExheW91dChjdHgpO1xuICAgIGNvbnN0IHNsb3RHYXAgPSAxMDtcbiAgICBjb25zdCBzbG90U2l6ZSA9IHBsYXllci53aWR0aDtcbiAgICBjb25zdCBhbnN3ZXJDb3VudCA9IDEwO1xuICAgIGNvbnN0IGFuc3dlclpvbmVXaWR0aCA9IGFuc3dlckNvdW50ICogc2xvdFNpemUgKyAoYW5zd2VyQ291bnQgLSAxKSAqIHNsb3RHYXA7XG4gICAgY29uc3QgYW5zd2VyWm9uZVggPSBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVYICsgKG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVdpZHRoIC0gYW5zd2VyWm9uZVdpZHRoKSAvIDI7XG4gICAgY29uc3QgYW5zd2VyWm9uZVkgPSBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVZICsgMjg7XG5cbiAgICBnYy5hbnN3ZXJTbG90cyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGFuc3dlckNvdW50IH0sIChfLCBpbmRleCkgPT4gKHtcbiAgICAgIHg6IGFuc3dlclpvbmVYICsgaW5kZXggKiAoc2xvdFNpemUgKyBzbG90R2FwKSxcbiAgICAgIHk6IGFuc3dlclpvbmVZLFxuICAgICAgc2l6ZTogc2xvdFNpemUsXG4gICAgICBibG9jazogbnVsbCxcbiAgICB9KSk7XG5cbiAgICBnYy5tb3ZlbWVudEFyZWEgPSB7XG4gICAgICB4OiBtb3ZlbWVudExheW91dC5tb3ZlbWVudEFyZWFYLFxuICAgICAgeTogbW92ZW1lbnRMYXlvdXQubW92ZW1lbnRBcmVhWSxcbiAgICAgIHdpZHRoOiBtb3ZlbWVudExheW91dC5tb3ZlbWVudEFyZWFXaWR0aCxcbiAgICAgIGhlaWdodDogbW92ZW1lbnRMYXlvdXQubW92ZW1lbnRBcmVhSGVpZ2h0LFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgYnVpbGRNb3ZlbWVudEJsb2NrcyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGdjLm1vdmVtZW50QXJlYTtcbiAgICBjb25zdCBzaXplID0gcGxheWVyLndpZHRoO1xuICAgIGNvbnN0IHN0YXJ0WCA9IHggKyB3aWR0aCAqIDAuMTg7XG4gICAgY29uc3Qgc3RhcnRZID0geSArIGhlaWdodCAqIDAuMjI7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IE5vcm1hbEJsb2NrKHN0YXJ0WCwgc3RhcnRZLCBzaXplLCBcIiNmZmZmZmZcIiwgXCJBXCIpLFxuICAgICAgbmV3IE5vcm1hbEJsb2NrKHN0YXJ0WCArIHNpemUgKiAyLjIsIHN0YXJ0WSwgc2l6ZSwgXCIjZmZmZmZmXCIsIFwiQlwiKSxcbiAgICAgIG5ldyBOb3JtYWxCbG9jayhzdGFydFggKyBzaXplICogNC40LCBzdGFydFksIHNpemUsIFwiI2ZmZmZmZlwiLCBcIjdcIiksXG4gICAgICBuZXcgTm9ybWFsQmxvY2soc3RhcnRYICsgc2l6ZSAqIDEuMSwgc3RhcnRZICsgc2l6ZSAqIDIuMSwgc2l6ZSwgXCIjZmZmZmZmXCIsIFwiQ1wiKSxcbiAgICAgIG5ldyBOb3JtYWxCbG9jayhzdGFydFggKyBzaXplICogMy41LCBzdGFydFkgKyBzaXplICogMi4xLCBzaXplLCBcIiNmZmZmZmZcIiwgXCI1XCIpLFxuICAgIF07XG4gIH07XG5cbiAgZ2MuZ2V0Q3VycmVudEFuc3dlciA9ICgpID0+IHtcbiAgICBsZXQgYW5zd2VyID0gXCJcIjtcblxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBnYy5hbnN3ZXJTbG90cykge1xuICAgICAgaWYgKCFzbG90LmJsb2NrKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBhbnN3ZXIgKz0gc2xvdC5ibG9jay52YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYW5zd2VyO1xuICB9O1xuXG4gIGdjLnN1Ym1pdE1vdmVtZW50QW5zd2VyID0gKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRBbnN3ZXIgPSBnYy5nZXRDdXJyZW50QW5zd2VyKCk7XG4gICAgaWYgKGN1cnJlbnRBbnN3ZXIgIT09IGdjLnF1aXpBbnN3ZXIpIHtcbiAgICAgIGdjLmxvc2VMaWZlKCk7XG4gICAgICBuZWVkc01vdmVtZW50UmVzZXQgPSB0cnVlO1xuICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gMzA7XG4gICAgICBsYXN0VGltZXJUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZ2Muc3RhdGUuY3VycmVudExldmVsIDwgMjApIHtcbiAgICAgIGdjLnN0YXRlLmN1cnJlbnRMZXZlbCsrO1xuICAgICAgbmVlZHNNb3ZlbWVudFJlc2V0ID0gdHJ1ZTtcbiAgICAgIGdjLnRpbWVMZWZ0U2Vjb25kcyA9IDMwO1xuICAgICAgbGFzdFRpbWVyVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ2Muc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxzZWxlY3RcIjtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcblxuICBjb25zdCBzeW5jTW92ZW1lbnRTY2VuZSA9IChyZXNldFNjZW5lID0gZmFsc2UpID0+IHtcbiAgICBzeW5jTW92ZW1lbnRBcmVhKCk7XG5cbiAgICBjb25zdCBtaW5YID0gZ2MubW92ZW1lbnRBcmVhLng7XG4gICAgY29uc3QgbWluWSA9IGdjLm1vdmVtZW50QXJlYS55O1xuICAgIGNvbnN0IG1heFggPSBnYy5tb3ZlbWVudEFyZWEueCArIGdjLm1vdmVtZW50QXJlYS53aWR0aCAtIHBsYXllci53aWR0aDtcbiAgICBjb25zdCBtYXhZID0gZ2MubW92ZW1lbnRBcmVhLnkgKyBnYy5tb3ZlbWVudEFyZWEuaGVpZ2h0IC0gcGxheWVyLmhlaWdodDtcblxuICAgIHBsYXllci5zZXRCb3VuZHMobWluWCwgbWluWSwgbWF4WCwgbWF4WSk7XG4gICAgcGxheWVyLnNldEFuc3dlclNsb3RzKGdjLmFuc3dlclNsb3RzKTtcblxuICAgIGlmIChyZXNldFNjZW5lKSB7XG4gICAgICBnYy5ibG9ja3MgPSBidWlsZE1vdmVtZW50QmxvY2tzKCk7XG4gICAgICBwbGF5ZXIuc2V0QmxvY2tzKGdjLmJsb2Nrcyk7XG4gICAgICBwbGF5ZXIucmVzZXRQb3NpdGlvbihcbiAgICAgICAgbWluWCArIHBsYXllci53aWR0aCxcbiAgICAgICAgbWluWSArIGdjLm1vdmVtZW50QXJlYS5oZWlnaHQgLyAyIC0gcGxheWVyLmhlaWdodCAvIDIsXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBsYXllci5zZXRCbG9ja3MoZ2MuYmxvY2tzKTtcbiAgfTtcblxuICBnYy5yZXNldFBsYXllck5hbWUgPSAoKSA9PiB7XG4gICAgZ2Muc3RhdGUucGxheWVyTmFtZSA9IFwiQm94XCI7XG4gICAgZ2Muc3RhdGUubmFtZUlucHV0ID0gXCJcIjtcbiAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xuICB9O1xuXG4gIGdjLmxvc2VMaWZlID0gKCkgPT4ge1xuICAgIGdjLnN0YXRlLmxpdmVzLS07XG4gICAgaWYgKGdjLnN0YXRlLmxpdmVzIDw9IDApIHtcbiAgICAgIGdjLnN0YXRlLmxpdmVzID0gMDtcbiAgICAgIGdjLnN0YXRlLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgZ2MucmVuZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdmVtZW50TGV2ZWxBY3RpdmUgPSBnYy5zdGF0ZS5jdXJyZW50U2NyZWVuID09PSBcImxldmVsXCIgJiYgaXNNb3ZlbWVudExldmVsKGdjLnN0YXRlLmN1cnJlbnRMZXZlbCk7XG4gICAgY29uc3QgZW50ZXJpbmdNb3ZlbWVudExldmVsID1cbiAgICAgIG1vdmVtZW50TGV2ZWxBY3RpdmUgJiYgKHByZXZpb3VzU2NyZWVuICE9PSBcImxldmVsXCIgfHwgcHJldmlvdXNMZXZlbCAhPT0gZ2Muc3RhdGUuY3VycmVudExldmVsKTtcblxuICAgIGlmIChtb3ZlbWVudExldmVsQWN0aXZlKSB7XG4gICAgICBzeW5jTW92ZW1lbnRTY2VuZShlbnRlcmluZ01vdmVtZW50TGV2ZWwgfHwgZ2MuYmxvY2tzLmxlbmd0aCA9PT0gMCB8fCBuZWVkc01vdmVtZW50UmVzZXQpO1xuICAgICAgbmVlZHNNb3ZlbWVudFJlc2V0ID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdjLmJsb2NrcyA9IFtdO1xuICAgICAgZ2MuYW5zd2VyU2xvdHMgPSBbXTtcbiAgICAgIHBsYXllci5zZXRCbG9ja3MoW10pO1xuICAgICAgcGxheWVyLnNldEFuc3dlclNsb3RzKFtdKTtcbiAgICAgIGdjLnRpbWVMZWZ0U2Vjb25kcyA9IDMwO1xuICAgICAgbGFzdFRpbWVyVGljayA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgY29uc3QgeyBtb3ZlbWVudEFyZWFYLCBtb3ZlbWVudEFyZWFZLCBtb3ZlbWVudEFyZWFXaWR0aCwgbW92ZW1lbnRBcmVhSGVpZ2h0IH0gPSBnZXRMYXlvdXQoY3R4KTtcbiAgICAgIGdjLm1vdmVtZW50QXJlYSA9IHtcbiAgICAgICAgeDogbW92ZW1lbnRBcmVhWCxcbiAgICAgICAgeTogbW92ZW1lbnRBcmVhWSxcbiAgICAgICAgd2lkdGg6IG1vdmVtZW50QXJlYVdpZHRoLFxuICAgICAgICBoZWlnaHQ6IG1vdmVtZW50QXJlYUhlaWdodCxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZ2MuaGl0QXJlYXMgPSBbXTtcbiAgICBkcmF3QmFja2dyb3VuZChnYyk7XG5cbiAgICBpZiAoIW1vdmVtZW50TGV2ZWxBY3RpdmUpIHtcbiAgICAgIGRyYXdMb2dvKGdjKTtcbiAgICAgIGRyYXdHYW1lcGxheUZyYW1lKGdjKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGdjLnN0YXRlLmN1cnJlbnRTY3JlZW4pIHtcbiAgICAgIGNhc2UgXCJtYWlubWVudVwiOlxuICAgICAgICBkcmF3TWFpbk1lbnUoZ2MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZXZlbHNlbGVjdFwiOlxuICAgICAgICBkcmF3TGV2ZWxTZWxlY3QoZ2MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZXZlbFwiOlxuICAgICAgICBkcmF3TGV2ZWwoZ2MpO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkcmF3Qm90dG9tUGFuZWwoZ2MpO1xuXG4gICAgaWYgKGdjLnN0YXRlLnBhdXNlZCkgZHJhd1BhdXNlT3ZlcmxheShnYyk7XG4gICAgaWYgKGdjLnN0YXRlLmNvbnRyb2xzT3BlbikgZHJhd0NvbnRyb2xzT3ZlcmxheShnYyk7XG4gICAgaWYgKGdjLnN0YXRlLmdhbWVPdmVyKSBkcmF3R2FtZU92ZXJPdmVybGF5KGdjKTtcblxuICAgIHByZXZpb3VzTGV2ZWwgPSBnYy5zdGF0ZS5jdXJyZW50TGV2ZWw7XG4gICAgcHJldmlvdXNTY3JlZW4gPSBnYy5zdGF0ZS5jdXJyZW50U2NyZWVuO1xuICB9O1xuXG4gIGNvbnN0IHJlc2l6ZUNhbnZhc2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjb25zdCBoID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGdhbWVDYW52YXMud2lkdGggPSBkZWJ1Z0NhbnZhcy53aWR0aCA9IHc7XG4gICAgZ2FtZUNhbnZhcy5oZWlnaHQgPSBkZWJ1Z0NhbnZhcy5oZWlnaHQgPSBoO1xuICAgIG5lZWRzTW92ZW1lbnRSZXNldCA9IHRydWU7XG4gIH07XG5cbiAgY29uc3QgdG9DYW52YXMgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuICAgIGNvbnN0IHJlY3QgPSBnYW1lQ2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHNjYWxlWCA9IGdhbWVDYW52YXMud2lkdGggLyByZWN0LndpZHRoO1xuICAgIGNvbnN0IHNjYWxlWSA9IGdhbWVDYW52YXMuaGVpZ2h0IC8gcmVjdC5oZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgeDogKGUuY2xpZW50WCAtIHJlY3QubGVmdCkgKiBzY2FsZVgsXG4gICAgICB5OiAoZS5jbGllbnRZIC0gcmVjdC50b3ApICogc2NhbGVZLFxuICAgIH07XG4gIH07XG5cbiAgZ2FtZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRvQ2FudmFzKGUpO1xuICAgIGZvciAoY29uc3QgYXJlYSBvZiBnYy5oaXRBcmVhcykge1xuICAgICAgaWYgKHggPj0gYXJlYS54ICYmIHggPD0gYXJlYS54ICsgYXJlYS53ICYmIHkgPj0gYXJlYS55ICYmIHkgPD0gYXJlYS55ICsgYXJlYS5oKSB7XG4gICAgICAgIGFyZWEuYWN0aW9uKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZ2FtZUNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0b0NhbnZhcyhlKTtcbiAgICBjb25zdCBvdmVyID0gZ2MuaGl0QXJlYXMuc29tZShcbiAgICAgIChhcmVhKSA9PiB4ID49IGFyZWEueCAmJiB4IDw9IGFyZWEueCArIGFyZWEudyAmJiB5ID49IGFyZWEueSAmJiB5IDw9IGFyZWEueSArIGFyZWEuaCxcbiAgICApO1xuICAgIGdhbWVDYW52YXMuc3R5bGUuY3Vyc29yID0gb3ZlciA/IFwicG9pbnRlclwiIDogXCJkZWZhdWx0XCI7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChnYy5zdGF0ZS5uYW1lRm9jdXNlZCAmJiAhZ2Muc3RhdGUucGF1c2VkICYmICFnYy5zdGF0ZS5jb250cm9sc09wZW4pIHtcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBnYy5zdGF0ZS5wbGF5ZXJOYW1lID0gZ2Muc3RhdGUubmFtZUlucHV0LnRyaW0oKSB8fCBcIkJveFwiO1xuICAgICAgICBnYy5zdGF0ZS5uYW1lRm9jdXNlZCA9IGZhbHNlO1xuICAgICAgICBnYy5zdGF0ZS5jdXJyZW50TGV2ZWwgPSAyO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIpIHtcbiAgICAgICAgZ2Muc3RhdGUubmFtZUlucHV0ID0gZ2Muc3RhdGUubmFtZUlucHV0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgZ2MucmVuZGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUua2V5Lmxlbmd0aCA9PT0gMSAmJiBnYy5zdGF0ZS5uYW1lSW5wdXQubGVuZ3RoIDwgMjQpIHtcbiAgICAgICAgZ2Muc3RhdGUubmFtZUlucHV0ICs9IGUua2V5O1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICBpZiAoZ2Muc3RhdGUuY29udHJvbHNPcGVuKSB7XG4gICAgICAgIGdjLnN0YXRlLmNvbnRyb2xzT3BlbiA9IGZhbHNlO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2Muc3RhdGUucGF1c2VkKSB7XG4gICAgICAgIGdjLnN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHtcbiAgICByZXNpemVDYW52YXNlcygpO1xuICAgIGdjLnJlbmRlcigpO1xuICB9KTtcblxuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKGdjLnN0YXRlLm5hbWVGb2N1c2VkKSBnYy5yZW5kZXIoKTtcbiAgfSwgNTMwKTtcblxuICBnYy5sb2dvLm9ubG9hZCA9ICgpID0+IHtcbiAgICBnYy5sb2dvTG9hZGVkID0gdHJ1ZTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcbiAgZ2MubG9nby5vbmVycm9yID0gKCkgPT4ge1xuICAgIGdjLmxvZ29Mb2FkZWQgPSBmYWxzZTtcbiAgICBnYy5yZW5kZXIoKTtcbiAgfTtcbiAgZ2MuZ2FtZXBsYXlGcmFtZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgZ2MuZ2FtZXBsYXlGcmFtZUxvYWRlZCA9IHRydWU7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH07XG4gIGdjLmdhbWVwbGF5RnJhbWUub25lcnJvciA9ICgpID0+IHtcbiAgICBnYy5nYW1lcGxheUZyYW1lTG9hZGVkID0gZmFsc2U7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH07XG5cbiAgZ2MubG9nby5zcmMgPSBcIi4vYXNzZXRzL0dhbWVMb2dvLnBuZ1wiO1xuICBnYy5nYW1lcGxheUZyYW1lLnNyYyA9IFwiLi9hc3NldHMvZ2FtZXBsYXktZnJhbWUucG5nXCI7XG5cbiAgcmVzaXplQ2FudmFzZXMoKTtcbiAgZ2MucmVuZGVyKCk7XG5cbiAgY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gICAgY29uc3QgbW92ZW1lbnRMZXZlbEFjdGl2ZSA9IGdjLnN0YXRlLmN1cnJlbnRTY3JlZW4gPT09IFwibGV2ZWxcIiAmJiBpc01vdmVtZW50TGV2ZWwoZ2Muc3RhdGUuY3VycmVudExldmVsKTtcblxuICAgIGlmIChcbiAgICAgIG1vdmVtZW50TGV2ZWxBY3RpdmUgJiZcbiAgICAgICFnYy5zdGF0ZS5wYXVzZWQgJiZcbiAgICAgICFnYy5zdGF0ZS5jb250cm9sc09wZW4gJiZcbiAgICAgICFnYy5zdGF0ZS5nYW1lT3ZlclxuICAgICkge1xuICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBpZiAobm93IC0gbGFzdFRpbWVyVGljayA+PSAxMDAwKSB7XG4gICAgICAgIGNvbnN0IGVsYXBzZWRTZWNvbmRzID0gTWF0aC5mbG9vcigobm93IC0gbGFzdFRpbWVyVGljaykgLyAxMDAwKTtcbiAgICAgICAgZ2MudGltZUxlZnRTZWNvbmRzID0gTWF0aC5tYXgoMCwgZ2MudGltZUxlZnRTZWNvbmRzIC0gZWxhcHNlZFNlY29uZHMpO1xuICAgICAgICBsYXN0VGltZXJUaWNrICs9IGVsYXBzZWRTZWNvbmRzICogMTAwMDtcblxuICAgICAgICBpZiAoZ2MudGltZUxlZnRTZWNvbmRzID09PSAwKSB7XG4gICAgICAgICAgZ2MubG9zZUxpZmUoKTtcbiAgICAgICAgICBuZWVkc01vdmVtZW50UmVzZXQgPSB0cnVlO1xuICAgICAgICAgIGdjLnRpbWVMZWZ0U2Vjb25kcyA9IDMwO1xuICAgICAgICAgIGxhc3RUaW1lclRpY2sgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpbnB1dC51cGRhdGUoKTtcbiAgICAgIHBsYXllci51cGRhdGUoKTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0VGltZXJUaWNrID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcbiAgfTtcblxuICBnYW1lTG9vcCgpO1xufTtcbiIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gZnJvbSBcIi4uL3RoZW1lXCI7XHJcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3Q29udHJvbHNPdmVybGF5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIGNvbnN0IHBhZCA9IHRvcEJveFdpZHRoICogMC4wNTtcclxuICBjb25zdCBveCA9IHRvcEJveFggKyBwYWQ7XHJcbiAgY29uc3Qgb3kgPSB0b3BCb3hZICsgcGFkO1xyXG4gIGNvbnN0IG93ID0gdG9wQm94V2lkdGggLSBwYWQgKiAyO1xyXG4gIGNvbnN0IG9oID0gdG9wQm94SGVpZ2h0IC0gcGFkICogMjtcclxuICBjb25zdCBjeCA9IG94ICsgb3cgLyAyO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5vdmVybGF5Qmc7XHJcbiAgY3R4LmZpbGxSZWN0KG94LCBveSwgb3csIG9oKTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcclxuICBjdHgubGluZVdpZHRoID0gMjtcclxuICBjdHguc3Ryb2tlUmVjdChveCwgb3ksIG93LCBvaCk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgMzBweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiQkFTSUMgQ09OVFJPTFNcIiwgY3gsIG95ICsgb2ggKiAwLjExKTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5kaXZpZGVyO1xyXG4gIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubW92ZVRvKG94ICsgb3cgKiAwLjA2LCBveSArIG9oICogMC4yKTtcclxuICBjdHgubGluZVRvKG94ICsgb3cgKiAwLjk0LCBveSArIG9oICogMC4yKTtcclxuICBjdHguc3Ryb2tlKCk7XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xzID0gW1xyXG4gICAgeyBrZXk6IFwiVyAvIEEgLyBTIC8gRFwiLCBkZXNjOiBcIk1vdmUgLyBOYXZpZ2F0ZVwiIH0sXHJcbiAgICB7IGtleTogXCJIXCIsIGRlc2M6IFwiSG9sZCAvIFJlbGVhc2UgQmxvY2tzXCIgfSxcclxuICAgIHsga2V5OiBcIkNMSUNLXCIsIGRlc2M6IFwiSW50ZXJhY3QgLyBTZWxlY3QgYW5zd2VyXCIgfSxcclxuICAgIHsga2V5OiBcIkVTQ1wiLCBkZXNjOiBcIkNsb3NlIHRoaXMgcGFuZWxcIiB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IGxpc3RZID0gb3kgKyBvaCAqIDAuMjk7XHJcbiAgY29uc3Qgcm93SCA9IG9oICogMC4xNTtcclxuICBjb25zdCBrZXlCb3hXID0gb3cgKiAwLjM7XHJcbiAgY29uc3Qga2V5Qm94SCA9IHJvd0ggKiAwLjc7XHJcbiAgY29uc3Qga2V5Qm94WCA9IG94ICsgb3cgKiAwLjA4O1xyXG4gIGNvbnN0IGRlc2NYID0gb3ggKyBvdyAqIDAuNTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250cm9scy5sZW5ndGg7IGkrKykge1xyXG4gICAgY29uc3Qgcm93WSA9IGxpc3RZICsgaSAqIHJvd0g7XHJcbiAgICBjb25zdCBib3hDZW50ZXJZID0gcm93WSArIGtleUJveEggLyAyO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSBzdGF0ZS5kYXJrTW9kZSA/IFwiIzJhMmEyYVwiIDogXCIjZGRkZGRkXCI7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LmRpdmlkZXI7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMTtcclxuICAgIGN0eC5maWxsUmVjdChrZXlCb3hYLCByb3dZLCBrZXlCb3hXLCBrZXlCb3hIKTtcclxuICAgIGN0eC5zdHJva2VSZWN0KGtleUJveFgsIHJvd1ksIGtleUJveFcsIGtleUJveEgpO1xyXG5cclxuICAgIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICAgIGN0eC5mb250ID0gYGJvbGQgMTZweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgIGNvbnRyb2xzW2ldLmtleSxcclxuICAgICAga2V5Qm94WCArIGtleUJveFcgLyAyLFxyXG4gICAgICBib3hDZW50ZXJZLFxyXG4gICAgICBrZXlCb3hXIC0gOCxcclxuICAgICk7XHJcblxyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdNaWQ7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBjdHguZm9udCA9IGAxN3B4ICR7Ym9keUZvbnR9YDtcclxuICAgIGN0eC5maWxsVGV4dChjb250cm9sc1tpXS5kZXNjLCBkZXNjWCwgYm94Q2VudGVyWSk7XHJcbiAgfVxyXG5cclxuICBjdHguZmlsbFN0eWxlID0gdC5mZ0RpbTtcclxuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcclxuICBjdHguZm9udCA9IGAxM3B4ICR7Ym9keUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJDb250cm9scyBtYXkgdmFyeSBiZXR3ZWVuIGxldmVscy5cIiwgY3gsIG95ICsgb2ggKiAwLjkpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkcmF3R2FtZU92ZXJPdmVybGF5ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQsIGJvZHlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIGggfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IGN4ID0gdyAvIDI7XHJcbiAgY29uc3QgY3kgPSBoIC8gMjtcclxuXHJcbiAgLy8gRnVsbC1jYW52YXMgZGltXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwwLjgyKVwiO1xyXG4gIGN0eC5maWxsUmVjdCgwLCAwLCB3LCBoKTtcclxuXHJcbiAgLy8gUGFuZWxcclxuICBjb25zdCBwYW5lbFcgPSBNYXRoLm1pbih3ICogMC41NSwgNTIwKTtcclxuICBjb25zdCBwYW5lbEggPSBoICogMC41MjtcclxuICBjb25zdCBwYW5lbFggPSBjeCAtIHBhbmVsVyAvIDI7XHJcbiAgY29uc3QgcGFuZWxZID0gY3kgLSBwYW5lbEggLyAyO1xyXG5cclxuICBjdHguZmlsbFN0eWxlID0gXCIjMGEwYTBhXCI7XHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCIjY2MyMjIyXCI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDM7XHJcbiAgY3R4LmZpbGxSZWN0KHBhbmVsWCwgcGFuZWxZLCBwYW5lbFcsIHBhbmVsSCk7XHJcbiAgY3R4LnN0cm9rZVJlY3QocGFuZWxYLCBwYW5lbFksIHBhbmVsVywgcGFuZWxIKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiI2NjMjIyMlwiO1xyXG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xyXG4gIGN0eC5mb250ID0gYGJvbGQgNTJweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiR0FNRSBPVkVSXCIsIGN4LCBwYW5lbFkgKyBwYW5lbEggKiAwLjIyKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IFwiIzg4ODg4OFwiO1xyXG4gIGN0eC5mb250ID0gYDIwcHggJHtib2R5Rm9udH1gO1xyXG4gIGN0eC5maWxsVGV4dChcclxuICAgIGBCZXR0ZXIgbHVjayBuZXh0IHRpbWUsICR7c3RhdGUucGxheWVyTmFtZX0uYCxcclxuICAgIGN4LFxyXG4gICAgcGFuZWxZICsgcGFuZWxIICogMC40MixcclxuICAgIHBhbmVsVyAqIDAuODIsXHJcbiAgKTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gXCIjMzMzMzMzXCI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8ocGFuZWxYICsgcGFuZWxXICogMC4xLCBwYW5lbFkgKyBwYW5lbEggKiAwLjU0KTtcclxuICBjdHgubGluZVRvKHBhbmVsWCArIHBhbmVsVyAqIDAuOSwgcGFuZWxZICsgcGFuZWxIICogMC41NCk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICBnYy5oaXRBcmVhcyA9IFtdO1xyXG5cclxuICBjb25zdCBidG5XID0gMjAwO1xyXG4gIGNvbnN0IGJ0bkggPSA0ODtcclxuXHJcbiAgaWYgKHN0YXRlLnBsYXlNb2RlID09PSBcInBsYXlcIikge1xyXG4gICAgZHJhd0J1dHRvbihcclxuICAgICAgZ2MsXHJcbiAgICAgIFwiVFJZIEFHQUlOXCIsXHJcbiAgICAgIGN4IC0gYnRuVyAvIDIsXHJcbiAgICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNjEsXHJcbiAgICAgIGJ0blcsXHJcbiAgICAgIGJ0bkgsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzdGF0ZS5saXZlcyA9IDM7XHJcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwgPSAxO1xyXG4gICAgICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICB9LFxyXG4gICAgICAyMCxcclxuICAgICk7XHJcblxyXG4gICAgZHJhd0J1dHRvbihcclxuICAgICAgZ2MsXHJcbiAgICAgIFwiTUFJTiBNRU5VXCIsXHJcbiAgICAgIGN4IC0gYnRuVyAvIDIsXHJcbiAgICAgIHBhbmVsWSArIHBhbmVsSCAqIDAuNzgsXHJcbiAgICAgIGJ0blcsXHJcbiAgICAgIGJ0bkgsXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBzdGF0ZS5saXZlcyA9IDM7XHJcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xyXG4gICAgICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgICAgIGdjLnJlbmRlcigpO1xyXG4gICAgICB9LFxyXG4gICAgICAyMCxcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRyYXdCdXR0b24oXHJcbiAgICAgIGdjLFxyXG4gICAgICBcIk1BSU4gTUVOVVwiLFxyXG4gICAgICBjeCAtIGJ0blcgLyAyLFxyXG4gICAgICBwYW5lbFkgKyBwYW5lbEggKiAwLjY4LFxyXG4gICAgICBidG5XLFxyXG4gICAgICBidG5ILFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xyXG4gICAgICAgIHN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcclxuICAgICAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcclxuICAgICAgICBnYy5yZW5kZXIoKTtcclxuICAgICAgfSxcclxuICAgICAgMjAsXHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgZ2V0TGF5b3V0IH0gZnJvbSBcIi4uL2xheW91dFwiO1xyXG5pbXBvcnQgeyBkcmF3QnV0dG9uIH0gZnJvbSBcIi4uL3JlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZHJhd1BhdXNlT3ZlcmxheSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHRvcEJveFgsIHRvcEJveFksIHRvcEJveFdpZHRoLCB0b3BCb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xyXG4gIGNvbnN0IHBhZCA9IHRvcEJveFdpZHRoICogMC4wNTtcclxuICBjb25zdCBveCA9IHRvcEJveFggKyBwYWQ7XHJcbiAgY29uc3Qgb3kgPSB0b3BCb3hZICsgcGFkO1xyXG4gIGNvbnN0IG93ID0gdG9wQm94V2lkdGggLSBwYWQgKiAyO1xyXG4gIGNvbnN0IG9oID0gdG9wQm94SGVpZ2h0IC0gcGFkICogMjtcclxuICBjb25zdCBjeCA9IG94ICsgb3cgLyAyO1xyXG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XHJcblxyXG4gIGN0eC5maWxsU3R5bGUgPSB0Lm92ZXJsYXlCZztcclxuICBjdHguZmlsbFJlY3Qob3gsIG95LCBvdywgb2gpO1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xyXG4gIGN0eC5saW5lV2lkdGggPSAyO1xyXG4gIGN0eC5zdHJva2VSZWN0KG94LCBveSwgb3csIG9oKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcbiAgY3R4LmZvbnQgPSBgYm9sZCAzOHB4ICR7ZGlzcGxheUZvbnR9YDtcclxuICBjdHguZmlsbFRleHQoXCJQQVVTRURcIiwgY3gsIG95ICsgb2ggKiAwLjE4KTtcclxuXHJcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5kaXZpZGVyO1xyXG4gIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHgubW92ZVRvKG94ICsgb3cgKiAwLjEsIG95ICsgb2ggKiAwLjMpO1xyXG4gIGN0eC5saW5lVG8ob3ggKyBvdyAqIDAuOSwgb3kgKyBvaCAqIDAuMyk7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG5cclxuICAvLyBDbGVhciBhbGwgdW5kZXJseWluZyBoaXQgYXJlYXMgc28gdGhlIGdhbWUgYmVoaW5kIGlzIGJsb2NrZWRcclxuICBnYy5oaXRBcmVhcyA9IFtdO1xyXG5cclxuICBjb25zdCBidG5XID0gMjIwO1xyXG4gIGNvbnN0IGJ0bkggPSA0ODtcclxuICBjb25zdCBidG5YID0gY3ggLSBidG5XIC8gMjtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJSRVNVTUVcIiwgYnRuWCwgb3kgKyBvaCAqIDAuMzYsIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiUVVJVCBUTyBNRU5VXCIsIGJ0blgsIG95ICsgb2ggKiAwLjUzLCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcclxuICAgIHN0YXRlLmxpdmVzID0gMztcclxuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibWFpbm1lbnVcIjtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVMYWJlbCA9IHN0YXRlLmRhcmtNb2RlID8gXCLimIAgIExJR0hUIE1PREVcIiA6IFwi8J+MmSAgREFSSyBNT0RFXCI7XHJcbiAgZHJhd0J1dHRvbihcclxuICAgIGdjLFxyXG4gICAgdG9nZ2xlTGFiZWwsXHJcbiAgICBidG5YLFxyXG4gICAgb3kgKyBvaCAqIDAuNyxcclxuICAgIGJ0blcsXHJcbiAgICBidG5ILFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICBzdGF0ZS5kYXJrTW9kZSA9ICFzdGF0ZS5kYXJrTW9kZTtcclxuICAgICAgZ2MucmVuZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgMTgsXHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi90aGVtZVwiO1xuaW1wb3J0IHsgZ2V0TGF5b3V0LCBnZXRNb3ZlbWVudExheW91dCB9IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IHsgTEVWRUxfREFUQSB9IGZyb20gXCIuL2xldmVsRGF0YVwiO1xuXG5leHBvcnQgY29uc3QgZHJhd0JhY2tncm91bmQgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSB9ID0gZ2M7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZCA9IHQuYmc7XG4gIGN0eC5maWxsU3R5bGUgPSB0LmJnO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgY3R4LmNhbnZhcy53aWR0aCwgY3R4LmNhbnZhcy5oZWlnaHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdMb2dvID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGxvZ28sIGxvZ29Mb2FkZWQsIGRpc3BsYXlGb250IH0gPSBnYztcbiAgY29uc3QgeyB3LCBsb2dvWSB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGlmIChsb2dvTG9hZGVkICYmIGxvZ28ubmF0dXJhbFdpZHRoID4gMCkge1xuICAgIGNvbnN0IGxvZ29XID0gdyAqIDAuMTU7XG4gICAgY29uc3QgbG9nb0ggPSBsb2dvVyAqIChsb2dvLm5hdHVyYWxIZWlnaHQgLyBsb2dvLm5hdHVyYWxXaWR0aCk7XG4gICAgY3R4LmRyYXdJbWFnZShsb2dvLCB3IC8gMiAtIGxvZ29XIC8gMiwgbG9nb1kgLSBsb2dvSCAvIDIsIGxvZ29XLCBsb2dvSCk7XG4gIH0gZWxzZSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdldFRoZW1lKHN0YXRlKS5mZztcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICBjdHguZm9udCA9IGBib2xkIDU0cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgIGN0eC5maWxsVGV4dChcIk91dHNpZGUtdGhlLUJveFwiLCB3IC8gMiwgbG9nb1kpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0dhbWVwbGF5RnJhbWUgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZ2FtZXBsYXlGcmFtZSwgZ2FtZXBsYXlGcmFtZUxvYWRlZCB9ID0gZ2M7XG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGlmIChnYW1lcGxheUZyYW1lTG9hZGVkICYmIGdhbWVwbGF5RnJhbWUubmF0dXJhbFdpZHRoID4gMCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoXG4gICAgICBnYW1lcGxheUZyYW1lLFxuICAgICAgNDQwLFxuICAgICAgMTgwLFxuICAgICAgNjg4LFxuICAgICAgNTcyLFxuICAgICAgdG9wQm94WCxcbiAgICAgIHRvcEJveFksXG4gICAgICB0b3BCb3hXaWR0aCxcbiAgICAgIHRvcEJveEhlaWdodCxcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGdldFRoZW1lKHN0YXRlKS5zdHJva2U7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDQ7XG4gICAgY3R4LnN0cm9rZVJlY3QodG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3QnV0dG9uID0gKFxuICBnYzogR2FtZUNvbnRleHQsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICB3OiBudW1iZXIsXG4gIGg6IG51bWJlcixcbiAgYWN0aW9uOiAoKSA9PiB2b2lkLFxuICBmb250U2l6ZSA9IDIyLFxuKSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gIGN0eC5zdHJva2VSZWN0KHgsIHksIHcsIGgpO1xuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkICR7Zm9udFNpemV9cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQobGFiZWwsIHggKyB3IC8gMiwgeSArIGggLyAyLCB3IC0gMTYpO1xuICBnYy5oaXRBcmVhcy5wdXNoKHsgeCwgeSwgdywgaCwgYWN0aW9uIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdCb3R0b21QYW5lbCA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjdHgsIHN0YXRlLCBkaXNwbGF5Rm9udCwgYm9keUZvbnQgfSA9IGdjO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuICBjb25zdCBpc01vdmVtZW50TGV2ZWwgPSBzdGF0ZS5jdXJyZW50U2NyZWVuID09PSBcImxldmVsXCIgJiYgc3RhdGUuY3VycmVudExldmVsID49IDExICYmIHN0YXRlLmN1cnJlbnRMZXZlbCA8PSAyMDtcblxuICBpZiAoaXNNb3ZlbWVudExldmVsKSB7XG4gICAgY29uc3QgbW92ZW1lbnRMYXlvdXQgPSBnZXRNb3ZlbWVudExheW91dChjdHgpO1xuICAgIGNvbnN0IGN1cnJlbnRBbnN3ZXIgPSBnYy5nZXRDdXJyZW50QW5zd2VyKCkgfHwgXCIoZW1wdHkpXCI7XG4gICAgY29uc3QgdGltZXJUZXh0ID0gYCR7U3RyaW5nKGdjLnRpbWVMZWZ0U2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpfXNgO1xuICAgIGNvbnN0IHRpbWVyQ29sb3IgPSBnYy50aW1lTGVmdFNlY29uZHMgPCAxMCA/IFwiI2ZmNTI1MlwiIDogdC5mZ01pZDtcbiAgICBjb25zdCBzdWJtaXRXID0gMTYwO1xuICAgIGNvbnN0IHN1Ym1pdEggPSA0ODtcbiAgICBjb25zdCBzdWJtaXRYID0gbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAtIHN1Ym1pdFcgLSAzMjtcbiAgICBjb25zdCBzdWJtaXRZID0gbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVZICsgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVIZWlnaHQgLyAyIC0gc3VibWl0SCAvIDI7XG5cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSB0LnN0cm9rZTtcbiAgICBjdHgubGluZVdpZHRoID0gNDtcbiAgICBjdHguc3Ryb2tlUmVjdChcbiAgICAgIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWCxcbiAgICAgIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSxcbiAgICAgIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lV2lkdGgsXG4gICAgICBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZUhlaWdodCxcbiAgICApO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICAgIGN0eC5mb250ID0gYGJvbGQgMjhweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KFwiQXJyYW5nZSBUaGUgQmxvY2tzXCIsIDI4LCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVkgKyAyMiwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAqIDAuNSk7XG5cbiAgICBjdHguZm9udCA9IGAxN3B4ICR7Ym9keUZvbnR9YDtcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZ01pZDtcbiAgICBjdHguZmlsbFRleHQoYFF1aXo6IHNwZWxsICR7Z2MucXVpekFuc3dlcn0gaW4gdGhlIGFuc3dlciB6b25lLmAsIDI4LCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVkgKyA2MiwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAqIDAuNTYpO1xuXG4gICAgY3R4LmZvbnQgPSBgMTVweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRpbWVyQ29sb3I7XG4gICAgY3R4LmZpbGxUZXh0KGBUaW1lIExlZnQ6ICR7dGltZXJUZXh0fWAsIDI4LCBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVkgKyAxMDIsIDE4MCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgICBjdHguZmlsbFRleHQoYFlvdXIgQW5zd2VyOiAke2N1cnJlbnRBbnN3ZXJ9YCwgMjgsIG1vdmVtZW50TGF5b3V0LmJvdHRvbUZyYW1lWSArIDEzMCwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAqIDAuNTIpO1xuXG4gICAgZHJhd0J1dHRvbihnYywgXCJTVUJNSVRcIiwgc3VibWl0WCwgc3VibWl0WSwgc3VibWl0Vywgc3VibWl0SCwgKCkgPT4ge1xuICAgICAgZ2Muc3VibWl0TW92ZW1lbnRBbnN3ZXIoKTtcbiAgICB9LCAxOCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgeyB3LCBjb250ZW50WCwgY29udGVudFdpZHRoLCBib3R0b21Cb3hZLCBib3R0b21Cb3hIZWlnaHQgfSA9IGdldExheW91dChjdHgpO1xuXG4gIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICBjdHgubGluZVdpZHRoID0gNDtcbiAgY3R4LnN0cm9rZVJlY3QoY29udGVudFgsIGJvdHRvbUJveFksIGNvbnRlbnRXaWR0aCwgYm90dG9tQm94SGVpZ2h0KTtcblxuICBjb25zdCBjZW50ZXJYID0gdyAvIDI7XG4gIGNvbnN0IHRleHRXaWR0aCA9IGNvbnRlbnRXaWR0aCAqIDAuNzQ7XG5cbiAgY29uc3QgbGV2ZWxEYXRhID1cbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID09PSBcImxldmVsXCJcbiAgICAgID8gTEVWRUxfREFUQVtzdGF0ZS5jdXJyZW50TGV2ZWwgLSAxXVxuICAgICAgOiB7IHRpdGxlOiBzdGF0ZS5zdG9yeVRpdGxlLCBsaW5lczogc3RhdGUuc3RvcnlMaW5lcyB9O1xuXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwidG9wXCI7XG5cbiAgY3R4LmZvbnQgPSBgYm9sZCAzMHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KGxldmVsRGF0YS50aXRsZSwgY2VudGVyWCwgYm90dG9tQm94WSArIDE4LCB0ZXh0V2lkdGgpO1xuXG4gIGN0eC5mb250ID0gYDIwcHggJHtib2R5Rm9udH1gO1xuICBjb25zdCBsaW5lR2FwID0gMzA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxEYXRhLmxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY3R4LmZpbGxUZXh0KGxldmVsRGF0YS5saW5lc1tpXSwgY2VudGVyWCwgYm90dG9tQm94WSArIDY4ICsgaSAqIGxpbmVHYXAsIHRleHRXaWR0aCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3TGV2ZWxIVUQgPSAoZ2M6IEdhbWVDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSwgZGlzcGxheUZvbnQgfSA9IGdjO1xuICBjb25zdCB0ID0gZ2V0VGhlbWUoc3RhdGUpO1xuICBjb25zdCBpc01vdmVtZW50TGV2ZWwgPSBzdGF0ZS5jdXJyZW50U2NyZWVuID09PSBcImxldmVsXCIgJiYgc3RhdGUuY3VycmVudExldmVsID49IDExICYmIHN0YXRlLmN1cnJlbnRMZXZlbCA8PSAyMDtcblxuICBpZiAoaXNNb3ZlbWVudExldmVsKSB7XG4gICAgY29uc3QgbW92ZW1lbnRMYXlvdXQgPSBnZXRNb3ZlbWVudExheW91dChjdHgpO1xuICAgIGNvbnN0IHBhZFggPSAyODtcbiAgICBjb25zdCBwYWRZID0gMjg7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgYm9sZCAyNHB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgICBjdHguZmlsbFRleHQoYFEuJHtzdGF0ZS5jdXJyZW50TGV2ZWx9YCwgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWCArIHBhZFgsIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVkgKyBwYWRZKTtcblxuICAgIGNvbnN0IHBhdXNlVyA9IDQ4O1xuICAgIGNvbnN0IHBhdXNlSCA9IDM0O1xuICAgIGNvbnN0IHBhdXNlWCA9IG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVdpZHRoIC0gcGFkWCAtIHBhdXNlVztcbiAgICBjb25zdCBwYXVzZVkgPSBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVZICsgcGFkWSAtIHBhdXNlSCAvIDI7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnN0cm9rZVJlY3QocGF1c2VYLCBwYXVzZVksIHBhdXNlVywgcGF1c2VIKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgICBjdHguZm9udCA9IGBib2xkIDE2cHggJHtkaXNwbGF5Rm9udH1gO1xuICAgIGN0eC5maWxsVGV4dChcIklJXCIsIHBhdXNlWCArIHBhdXNlVyAvIDIsIHBhdXNlWSArIHBhdXNlSCAvIDIpO1xuICAgIGdjLmhpdEFyZWFzLnB1c2goe1xuICAgICAgeDogcGF1c2VYLFxuICAgICAgeTogcGF1c2VZLFxuICAgICAgdzogcGF1c2VXLFxuICAgICAgaDogcGF1c2VILFxuICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICAgIGdjLnJlbmRlcigpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYXJ0U2l6ZSA9IDI0O1xuICAgIGNvbnN0IGhlYXJ0R2FwID0gNjtcbiAgICBjb25zdCBsaXZlc1kgPSBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVIZWlnaHQgLSBwYWRZO1xuICAgIGNvbnN0IHRvdGFsVyA9IDMgKiBoZWFydFNpemUgKyAyICogaGVhcnRHYXA7XG4gICAgY29uc3QgbGl2ZXNYID0gbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lV2lkdGggLSBwYWRYIC0gdG90YWxXO1xuXG4gICAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XG4gICAgY3R4LmZvbnQgPSBgJHtoZWFydFNpemV9cHggc2Fucy1zZXJpZmA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBpIDwgc3RhdGUubGl2ZXMgPyBcIiNlMDMwMzBcIiA6IHN0YXRlLmRhcmtNb2RlID8gXCIjNDQ0NDQ0XCIgOiBcIiNiYmJiYmJcIjtcbiAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICAgIGN0eC5maWxsVGV4dChcIlxcdTI2NjVcIiwgbGl2ZXNYICsgaSAqIChoZWFydFNpemUgKyBoZWFydEdhcCksIGxpdmVzWSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IHBhZFggPSB0b3BCb3hXaWR0aCAqIDAuMDU7XG4gIGNvbnN0IHBhZFkgPSB0b3BCb3hIZWlnaHQgKiAwLjA4O1xuXG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnO1xuICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkIDI2cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoYFEuJHtzdGF0ZS5jdXJyZW50TGV2ZWx9YCwgdG9wQm94WCArIHBhZFgsIHRvcEJveFkgKyBwYWRZKTtcblxuICBjb25zdCBwYXVzZVcgPSA0ODtcbiAgY29uc3QgcGF1c2VIID0gMzQ7XG4gIGNvbnN0IHBhdXNlWCA9IHRvcEJveFggKyB0b3BCb3hXaWR0aCAtIHBhZFggLSBwYXVzZVc7XG4gIGNvbnN0IHBhdXNlWSA9IHRvcEJveFkgKyBwYWRZIC0gcGF1c2VIIC8gMjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gdC5zdHJva2U7XG4gIGN0eC5saW5lV2lkdGggPSAyO1xuICBjdHguc3Ryb2tlUmVjdChwYXVzZVgsIHBhdXNlWSwgcGF1c2VXLCBwYXVzZUgpO1xuICBjdHguZmlsbFN0eWxlID0gdC5mZztcbiAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGBib2xkIDE2cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoXCJJSVwiLCBwYXVzZVggKyBwYXVzZVcgLyAyLCBwYXVzZVkgKyBwYXVzZUggLyAyKTtcbiAgZ2MuaGl0QXJlYXMucHVzaCh7XG4gICAgeDogcGF1c2VYLFxuICAgIHk6IHBhdXNlWSxcbiAgICB3OiBwYXVzZVcsXG4gICAgaDogcGF1c2VILFxuICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgc3RhdGUucGF1c2VkID0gdHJ1ZTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGhlYXJ0U2l6ZSA9IDI0O1xuICBjb25zdCBoZWFydEdhcCA9IDY7XG4gIGNvbnN0IGxpdmVzWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgLSBwYWRZO1xuICBjb25zdCB0b3RhbFcgPSAzICogaGVhcnRTaXplICsgMiAqIGhlYXJ0R2FwO1xuICBjb25zdCBsaXZlc1ggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggLSBwYWRYIC0gdG90YWxXO1xuXG4gIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICBjdHguZm9udCA9IGAke2hlYXJ0U2l6ZX1weCBzYW5zLXNlcmlmYDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjdHguZmlsbFN0eWxlID0gaSA8IHN0YXRlLmxpdmVzID8gXCIjZTAzMDMwXCIgOiBzdGF0ZS5kYXJrTW9kZSA/IFwiIzQ0NDQ0NFwiIDogXCIjYmJiYmJiXCI7XG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGN0eC5maWxsVGV4dChcIlxcdTI2NjVcIiwgbGl2ZXNYICsgaSAqIChoZWFydFNpemUgKyBoZWFydEdhcCksIGxpdmVzWSk7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGdldExheW91dCwgZ2V0TW92ZW1lbnRMYXlvdXQgfSBmcm9tIFwiLi4vbGF5b3V0XCI7XG5pbXBvcnQgeyBkcmF3QnV0dG9uLCBkcmF3TGV2ZWxIVUQgfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB7IGRyYXdOYW1lRW50cnkgfSBmcm9tIFwiLi4vbGV2ZWxzL0xldmVsMVwiO1xuaW1wb3J0IHsgZHJhd0xldmVsMiB9IGZyb20gXCIuLi9sZXZlbHMvTGV2ZWwyXCI7XG5pbXBvcnQgeyBkcmF3TGV2ZWwzIH0gZnJvbSBcIi4uL2xldmVscy9MZXZlbDNcIjtcbmltcG9ydCB7IExFVkVMX0NPVU5UIH0gZnJvbSBcIi4uL2xldmVsRGF0YVwiO1xuXG5jb25zdCBkcmF3TGV2ZWxOYXZpZ2F0aW9uID0gKGdjOiBHYW1lQ29udGV4dCwgbmF2WU92ZXJyaWRlPzogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHsgY3R4LCBzdGF0ZSB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgdG9wQm94WCwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCwgdG9wQm94WSB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IGN4ID0gdyAvIDI7XG4gIGNvbnN0IG5hdkJ0bkggPSA0MjtcbiAgY29uc3QgbmF2QnRuVyA9IDE1MDtcbiAgY29uc3QgbmF2WSA9IG5hdllPdmVycmlkZSA/PyB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC43OTtcblxuICBpZiAoc3RhdGUucGxheU1vZGUgIT09IFwibGV2ZWxzZWxlY3RcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzdGF0ZS5jdXJyZW50TGV2ZWwgPiAxKSB7XG4gICAgZHJhd0J1dHRvbihnYywgXCI8LSBQUkVWXCIsIHRvcEJveFggKyB0b3BCb3hXaWR0aCAqIDAuMDUsIG5hdlksIG5hdkJ0blcsIG5hdkJ0bkgsICgpID0+IHtcbiAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbC0tO1xuICAgICAgZ2MucmVuZGVyKCk7XG4gICAgfSwgMTgpO1xuICB9XG5cbiAgZHJhd0J1dHRvbihnYywgXCJMRVZFTCBTRUxFQ1RcIiwgY3ggLSBuYXZCdG5XIC8gMiwgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0sIDE2KTtcblxuICBpZiAoc3RhdGUuY3VycmVudExldmVsIDwgTEVWRUxfQ09VTlQpIHtcbiAgICBkcmF3QnV0dG9uKGdjLCBcIk5FWFQgLT5cIiwgdG9wQm94WCArIHRvcEJveFdpZHRoICogMC43NywgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xuICAgICAgc3RhdGUuY3VycmVudExldmVsKys7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LCAxOCk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYXdNb3ZlbWVudExldmVsTmF2aWdhdGlvbiA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBzdGF0ZSB9ID0gZ2M7XG4gIGNvbnN0IG1vdmVtZW50TGF5b3V0ID0gZ2V0TW92ZW1lbnRMYXlvdXQoZ2MuY3R4KTtcbiAgY29uc3QgbmF2QnRuSCA9IDQyO1xuICBjb25zdCBuYXZCdG5XID0gMTUwO1xuICBjb25zdCBuYXZZID0gbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVZICsgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVIZWlnaHQgLSBuYXZCdG5IIC0gMjI7XG4gIGNvbnN0IGNlbnRlclggPSBtb3ZlbWVudExheW91dC5ib3R0b21GcmFtZVdpZHRoIC8gMjtcblxuICBpZiAoc3RhdGUucGxheU1vZGUgIT09IFwibGV2ZWxzZWxlY3RcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzdGF0ZS5jdXJyZW50TGV2ZWwgPiAxKSB7XG4gICAgZHJhd0J1dHRvbihnYywgXCI8LSBQUkVWXCIsIDI2LCBuYXZZLCBuYXZCdG5XLCBuYXZCdG5ILCAoKSA9PiB7XG4gICAgICBzdGF0ZS5jdXJyZW50TGV2ZWwtLTtcbiAgICAgIGdjLnJlbmRlcigpO1xuICAgIH0sIDE4KTtcbiAgfVxuXG4gIGRyYXdCdXR0b24oZ2MsIFwiTEVWRUwgU0VMRUNUXCIsIGNlbnRlclggLSBuYXZCdG5XIC8gMiwgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xuICAgIGdjLnJlc2V0UGxheWVyTmFtZSgpO1xuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XG4gICAgZ2MucmVuZGVyKCk7XG4gIH0sIDE2KTtcblxuICBpZiAoc3RhdGUuY3VycmVudExldmVsIDwgTEVWRUxfQ09VTlQpIHtcbiAgICBkcmF3QnV0dG9uKGdjLCBcIk5FWFQgLT5cIiwgbW92ZW1lbnRMYXlvdXQuYm90dG9tRnJhbWVXaWR0aCAtIG5hdkJ0blcgLSAyNiwgbmF2WSwgbmF2QnRuVywgbmF2QnRuSCwgKCkgPT4ge1xuICAgICAgc3RhdGUuY3VycmVudExldmVsKys7XG4gICAgICBnYy5yZW5kZXIoKTtcbiAgICB9LCAxOCk7XG4gIH1cbn07XG5cbmNvbnN0IGRyYXdBbnN3ZXJab25lID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCB9ID0gZ2M7XG5cbiAgZm9yIChjb25zdCBzbG90IG9mIGdjLmFuc3dlclNsb3RzKSB7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOTIpXCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gICAgY3R4LnNldExpbmVEYXNoKFs0LCA0XSk7XG4gICAgY3R4LnN0cm9rZVJlY3Qoc2xvdC54LCBzbG90LnksIHNsb3Quc2l6ZSwgc2xvdC5zaXplKTtcbiAgICBjdHguc2V0TGluZURhc2goW10pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0xldmVsID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IGN4ID0gdyAvIDI7XG4gIGNvbnN0IGx2bCA9IHN0YXRlLmN1cnJlbnRMZXZlbDtcbiAgY29uc3QgdCA9IGdldFRoZW1lKHN0YXRlKTtcblxuICBpZiAobHZsID09PSAxKSB7XG4gICAgZHJhd05hbWVFbnRyeShnYyk7XG4gICAgZHJhd0xldmVsSFVEKGdjKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobHZsID09PSAyKSB7XG4gICAgZHJhd0xldmVsMihnYyk7XG4gICAgZHJhd0xldmVsSFVEKGdjKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobHZsID09PSAzKSB7XG4gICAgZHJhd0xldmVsMyhnYyk7XG4gICAgZHJhd0xldmVsSFVEKGdjKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAobHZsID49IDExICYmIGx2bCA8PSAyMCkge1xuICAgIGNvbnN0IG1vdmVtZW50TGF5b3V0ID0gZ2V0TW92ZW1lbnRMYXlvdXQoY3R4KTtcblxuICAgIGN0eC5zdHJva2VTdHlsZSA9IHQuc3Ryb2tlO1xuICAgIGN0eC5saW5lV2lkdGggPSA0O1xuICAgIGN0eC5zdHJva2VSZWN0KFxuICAgICAgbW92ZW1lbnRMYXlvdXQuZ2FtZUZyYW1lWCxcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVksXG4gICAgICBtb3ZlbWVudExheW91dC5nYW1lRnJhbWVXaWR0aCxcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZUhlaWdodCxcbiAgICApO1xuXG4gICAgZHJhd0Fuc3dlclpvbmUoZ2MpO1xuXG4gICAgZm9yIChjb25zdCBibG9jayBvZiBnYy5ibG9ja3MpIHtcbiAgICAgIGJsb2NrLmRyYXcoY3R4KTtcbiAgICB9XG5cbiAgICBnYy5wbGF5ZXIuZHJhdyhjdHgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSBcIm1pZGRsZVwiO1xuICAgIGN0eC5mb250ID0gYDE0cHggJHtib2R5Rm9udH1gO1xuICAgIGN0eC5maWxsVGV4dChcbiAgICAgIGBGYWNpbmc6ICR7Z2MucGxheWVyLmdldEZhY2luZ0RpcmVjdGlvbigpLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZVggKyAyNCxcbiAgICAgIG1vdmVtZW50TGF5b3V0LmdhbWVGcmFtZUhlaWdodCAtIDI0LFxuICAgICk7XG5cbiAgICBkcmF3TW92ZW1lbnRMZXZlbE5hdmlnYXRpb24oZ2MpO1xuICAgIGRyYXdMZXZlbEhVRChnYyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICBjdHguZm9udCA9IGBib2xkIDM0cHggJHtkaXNwbGF5Rm9udH1gO1xuICBjdHguZmlsbFRleHQoYExFVkVMICR7bHZsfWAsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xNik7XG5cbiAgY3R4LmZvbnQgPSBgMjJweCAke2JvZHlGb250fWA7XG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnTWlkO1xuICBjdHguZmlsbFRleHQoXCJUaGlzIGxldmVsIGlzIHVuZGVyIGNvbnN0cnVjdGlvbi5cIiwgY3gsIHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjM4LCB0b3BCb3hXaWR0aCAqIDAuNik7XG5cbiAgY3R4LmZvbnQgPSBgMTZweCAke2JvZHlGb250fWA7XG4gIGN0eC5maWxsU3R5bGUgPSB0LmZnRGltO1xuICBjdHguZmlsbFRleHQoXCJRdWVzdGlvbnMsIGNob2ljZXMsIGFuZCBpbnRlcmFjdGlvbnMgd2lsbCBiZSB3aXJlZCBpbiBoZXJlLlwiLCBjeCwgdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuNTIsIHRvcEJveFdpZHRoICogMC42KTtcblxuICBkcmF3TGV2ZWxOYXZpZ2F0aW9uKGdjKTtcbiAgZHJhd0xldmVsSFVEKGdjKTtcbn07XG4iLCJpbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0VGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcbmltcG9ydCB7IGdldExheW91dCB9IGZyb20gXCIuLi9sYXlvdXRcIjtcbmltcG9ydCB7IGRyYXdCdXR0b24gfSBmcm9tIFwiLi4vcmVuZGVyZXJcIjtcbmltcG9ydCB7IExFVkVMX0NPVU5UIH0gZnJvbSBcIi4uL2xldmVsRGF0YVwiO1xuXG5leHBvcnQgY29uc3QgZHJhd0xldmVsU2VsZWN0ID0gKGdjOiBHYW1lQ29udGV4dCkgPT4ge1xuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250LCBib2R5Rm9udCB9ID0gZ2M7XG4gIGNvbnN0IHsgdywgdG9wQm94WCwgdG9wQm94WSwgdG9wQm94V2lkdGgsIHRvcEJveEhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XG4gIGNvbnN0IGN4ID0gdyAvIDI7XG4gIGNvbnN0IHQgPSBnZXRUaGVtZShzdGF0ZSk7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IHQuZmc7XG4gIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcbiAgY3R4LmZvbnQgPSBgYm9sZCAzNnB4ICR7ZGlzcGxheUZvbnR9YDtcbiAgY3R4LmZpbGxUZXh0KFwiTEVWRUwgU0VMRUNUXCIsIGN4LCB0b3BCb3hZICsgdG9wQm94SGVpZ2h0ICogMC4xKTtcblxuICBjb25zdCBjb2xzID0gNTtcbiAgY29uc3QgdGlsZVcgPSB0b3BCb3hXaWR0aCAqIDAuMTM7XG4gIGNvbnN0IHRpbGVIID0gdG9wQm94SGVpZ2h0ICogMC4xNDtcbiAgY29uc3QgaEdhcCA9ICh0b3BCb3hXaWR0aCAqIDAuNzggLSB0aWxlVyAqIGNvbHMpIC8gKGNvbHMgLSAxKTtcbiAgY29uc3QgdkdhcCA9IHRvcEJveEhlaWdodCAqIDAuMDQ7XG4gIGNvbnN0IGdyaWRXID0gdGlsZVcgKiBjb2xzICsgaEdhcCAqIChjb2xzIC0gMSk7XG4gIGNvbnN0IGdyaWRYID0gY3ggLSBncmlkVyAvIDI7XG4gIGNvbnN0IGdyaWRZID0gdG9wQm94WSArIHRvcEJveEhlaWdodCAqIDAuMTg7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBMRVZFTF9DT1VOVDsgaSsrKSB7XG4gICAgY29uc3QgY29sID0gaSAlIGNvbHM7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihpIC8gY29scyk7XG4gICAgY29uc3QgdHggPSBncmlkWCArIGNvbCAqICh0aWxlVyArIGhHYXApO1xuICAgIGNvbnN0IHR5ID0gZ3JpZFkgKyByb3cgKiAodGlsZUggKyB2R2FwKTtcbiAgICBjb25zdCBsdmwgPSBpICsgMTtcbiAgICBjb25zdCBpc01vdmVtZW50TGV2ZWwgPSBsdmwgPj0gMTEgJiYgbHZsIDw9IDIwO1xuXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gaXNNb3ZlbWVudExldmVsID8gdC5kaXZpZGVyIDogdC5zdHJva2U7XG4gICAgY3R4LmxpbmVXaWR0aCA9IGlzTW92ZW1lbnRMZXZlbCA/IDIgOiAzO1xuICAgIGN0eC5zdHJva2VSZWN0KHR4LCB0eSwgdGlsZVcsIHRpbGVIKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBpc01vdmVtZW50TGV2ZWwgPyB0LmZnTWlkIDogdC5mZztcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gXCJtaWRkbGVcIjtcblxuICAgIGN0eC5mb250ID0gYGJvbGQgMjBweCAke2Rpc3BsYXlGb250fWA7XG4gICAgY3R4LmZpbGxUZXh0KGAke2x2bH1gLCB0eCArIHRpbGVXIC8gMiwgdHkgKyB0aWxlSCAqIDAuMzgpO1xuXG4gICAgY3R4LmZvbnQgPSBgMTBweCAke2JvZHlGb250fWA7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHQuZmdEaW07XG4gICAgY3R4LmZpbGxUZXh0KGlzTW92ZW1lbnRMZXZlbCA/IFwibW92ZVwiIDogYExFVkVMICR7bHZsfWAsIHR4ICsgdGlsZVcgLyAyLCB0eSArIHRpbGVIICogMC43NCk7XG5cbiAgICBjb25zdCBjYXB0dXJlZCA9IGx2bDtcbiAgICBnYy5oaXRBcmVhcy5wdXNoKHtcbiAgICAgIHg6IHR4LFxuICAgICAgeTogdHksXG4gICAgICB3OiB0aWxlVyxcbiAgICAgIGg6IHRpbGVILFxuICAgICAgYWN0aW9uOiAoKSA9PiB7XG4gICAgICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IGNhcHR1cmVkO1xuICAgICAgICBzdGF0ZS5wbGF5TW9kZSA9IFwibGV2ZWxzZWxlY3RcIjtcbiAgICAgICAgc3RhdGUuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubGl2ZXMgPSAzO1xuICAgICAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJsZXZlbFwiO1xuICAgICAgICBnYy5yZW5kZXIoKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBiYWNrVyA9IDE1MDtcbiAgY29uc3QgYmFja0ggPSA0MjtcbiAgY29uc3QgYmFja1ggPSB0b3BCb3hYICsgdG9wQm94V2lkdGggKiAwLjA0O1xuICBjb25zdCBiYWNrWSA9IHRvcEJveFkgKyB0b3BCb3hIZWlnaHQgKiAwLjgyO1xuICBkcmF3QnV0dG9uKGdjLCBcIjwtIEJBQ0tcIiwgYmFja1gsIGJhY2tZLCBiYWNrVywgYmFja0gsICgpID0+IHtcbiAgICBnYy5yZXNldFBsYXllck5hbWUoKTtcbiAgICBzdGF0ZS5jdXJyZW50U2NyZWVuID0gXCJtYWlubWVudVwiO1xuICAgIGdjLnJlbmRlcigpO1xuICB9LCAxOCk7XG59O1xuIiwiaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IGdldFRoZW1lIH0gICAgZnJvbSAnLi4vdGhlbWUnO1xyXG5pbXBvcnQgeyBnZXRMYXlvdXQgfSAgIGZyb20gJy4uL2xheW91dCc7XHJcbmltcG9ydCB7IGRyYXdCdXR0b24gfSAgZnJvbSAnLi4vcmVuZGVyZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRyYXdNYWluTWVudSA9IChnYzogR2FtZUNvbnRleHQpID0+IHtcclxuICBjb25zdCB7IGN0eCwgc3RhdGUsIGRpc3BsYXlGb250IH0gPSBnYztcclxuICBjb25zdCB7IHcsIHRvcElubmVyWCwgdG9wSW5uZXJZLCB0b3BJbm5lcldpZHRoLCB0b3BJbm5lckhlaWdodCB9ID0gZ2V0TGF5b3V0KGN0eCk7XHJcbiAgY29uc3QgY3ggPSB3IC8gMjtcclxuICBjb25zdCB0ICA9IGdldFRoZW1lKHN0YXRlKTtcclxuXHJcbiAgY3R4LmZpbGxTdHlsZSAgICA9IHQuZmc7XHJcbiAgY3R4LnRleHRBbGlnbiAgICA9IFwiY2VudGVyXCI7XHJcbiAgY3R4LnRleHRCYXNlbGluZSA9IFwibWlkZGxlXCI7XHJcblxyXG4gIGN0eC5mb250ID0gYGJvbGQgNDJweCAke2Rpc3BsYXlGb250fWA7XHJcbiAgY3R4LmZpbGxUZXh0KFwiTUFJTiBNRU5VXCIsIGN4LCB0b3BJbm5lclkgKyB0b3BJbm5lckhlaWdodCAqIDAuMTUpO1xyXG5cclxuICBjb25zdCBidG5XICAgPSBNYXRoLm1pbigzMDAsIHRvcElubmVyV2lkdGggKiAwLjc4KTtcclxuICBjb25zdCBidG5IICAgPSA1MDtcclxuICBjb25zdCBidG5YICAgPSBjeCAtIGJ0blcgLyAyO1xyXG4gIGNvbnN0IHN0YXJ0WSA9IHRvcElubmVyWSArIHRvcElubmVySGVpZ2h0ICogMC4zMjtcclxuICBjb25zdCBzdHJpZGUgPSBidG5IICsgMTQ7XHJcblxyXG4gIGRyYXdCdXR0b24oZ2MsIFwiU1RBUlQgRVhBTVwiLCBidG5YLCBzdGFydFksIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLmN1cnJlbnRMZXZlbCA9IDE7XHJcbiAgICBzdGF0ZS5saXZlcyAgICAgICAgPSAzO1xyXG4gICAgc3RhdGUucGF1c2VkICAgICAgID0gZmFsc2U7XHJcbiAgICBzdGF0ZS5nYW1lT3ZlciAgICAgPSBmYWxzZTtcclxuICAgIHN0YXRlLnBsYXlNb2RlICAgICA9IFwicGxheVwiO1xyXG4gICAgc3RhdGUuY3VycmVudFNjcmVlbiA9IFwibGV2ZWxcIjtcclxuICAgIGdjLnJlbmRlcigpO1xyXG4gIH0pO1xyXG5cclxuICBkcmF3QnV0dG9uKGdjLCBcIkxFVkVMIFNFTEVDVFwiLCBidG5YLCBzdGFydFkgKyBzdHJpZGUsIGJ0blcsIGJ0bkgsICgpID0+IHtcclxuICAgIHN0YXRlLmN1cnJlbnRTY3JlZW4gPSBcImxldmVsc2VsZWN0XCI7XHJcbiAgICBnYy5yZW5kZXIoKTtcclxuICB9KTtcclxuXHJcbiAgZHJhd0J1dHRvbihnYywgXCJDT05UUk9MU1wiLCBidG5YLCBzdGFydFkgKyBzdHJpZGUgKiAyLCBidG5XLCBidG5ILCAoKSA9PiB7XHJcbiAgICBzdGF0ZS5jb250cm9sc09wZW4gPSB0cnVlO1xyXG4gICAgZ2MucmVuZGVyKCk7XHJcbiAgfSk7XHJcbn07XHJcbiIsImltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGhlbWUgPSAoc3RhdGU6IEdhbWVTdGF0ZSkgPT5cclxuICBzdGF0ZS5kYXJrTW9kZVxyXG4gICAgPyB7XHJcbiAgICAgICAgYmc6IFwiIzExMTExMVwiLFxyXG4gICAgICAgIGZnOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBmZ01pZDogXCIjY2NjY2NjXCIsXHJcbiAgICAgICAgZmdEaW06IFwiIzg4ODg4OFwiLFxyXG4gICAgICAgIHN0cm9rZTogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgb3ZlcmxheUJnOiBcInJnYmEoMTAsMTAsMTAsMC45MClcIixcclxuICAgICAgICBkaXZpZGVyOiBcIiM0NDQ0NDRcIixcclxuICAgICAgfVxyXG4gICAgOiB7XHJcbiAgICAgICAgYmc6IFwiI2YwZjBmMFwiLFxyXG4gICAgICAgIGZnOiBcIiMxMTExMTFcIixcclxuICAgICAgICBmZ01pZDogXCIjMzMzMzMzXCIsXHJcbiAgICAgICAgZmdEaW06IFwiIzY2NjY2NlwiLFxyXG4gICAgICAgIHN0cm9rZTogXCIjMTExMTExXCIsXHJcbiAgICAgICAgb3ZlcmxheUJnOiBcInJnYmEoMjIwLDIyMCwyMjAsMC45MylcIixcclxuICAgICAgICBkaXZpZGVyOiBcIiNhYWFhYWFcIixcclxuICAgICAgfTtcclxuIl19
