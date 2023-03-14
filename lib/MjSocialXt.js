"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mjmlCore = require("mjml-core");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MjSocialXt = /*#__PURE__*/function (_BodyComponent) {
  _inherits(MjSocialXt, _BodyComponent);
  var _super = _createSuper(MjSocialXt);
  function MjSocialXt() {
    _classCallCheck(this, MjSocialXt);
    return _super.apply(this, arguments);
  }
  _createClass(MjSocialXt, [{
    key: "getStyles",
    value:
    // eslint-disable-next-line class-methods-use-this
    function getStyles() {
      return {
        tableVertical: {
          margin: '0px'
        }
      };
    }
  }, {
    key: "getSocialElementAttributes",
    value: function getSocialElementAttributes() {
      var _this = this;
      var base = {};
      if (this.getAttribute('inner-padding')) {
        base.padding = this.getAttribute('inner-padding');
      }
      return ['border-radius', 'color', 'font-family', 'font-size', 'font-weight', 'font-style', 'icon-size', 'icon-height', 'icon-padding', 'text-padding', 'line-height', 'text-decoration'].reduce(function (res, attr) {
        res[attr] = _this.getAttribute(attr);
        return res;
      }, base);
    }
  }, {
    key: "renderHorizontal",
    value: function renderHorizontal() {
      var _this2 = this;
      var children = this.props.children;
      return "\n     <!--[if mso | IE]>\n      <table\n        ".concat(this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation'
      }), "\n      >\n        <tr>\n      <![endif]-->\n      ").concat(this.renderChildren(children, {
        attributes: this.getSocialElementAttributes(),
        renderer: function renderer(component) {
          return component.constructor.isRawElement() ? component.render() : "\n            <!--[if mso | IE]>\n              <td\n                ".concat(_this2.htmlAttributes({
            "class": _this2.getAttribute('element-ghost-td-css-class')
          }), "\n              >\n            <![endif]-->\n              <table\n                ").concat(component.htmlAttributes({
            align: _this2.getAttribute('align'),
            border: '0',
            "class": _this2.getAttribute('element-css-class'),
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: {
              "float": 'none',
              display: 'inline-table'
            }
          }), "\n              >\n                <tbody>\n                  ").concat(component.render(), "\n                </tbody>\n              </table>\n            <!--[if mso | IE]>\n              </td>\n            <![endif]-->\n          ");
        }
      }), "\n      <!--[if mso | IE]>\n          </tr>\n        </table>\n      <![endif]-->\n    ");
    }
  }, {
    key: "renderVertical",
    value: function renderVertical() {
      var children = this.props.children;
      return "\n      <table\n        ".concat(this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'tableVertical'
      }), "\n      >\n        <tbody>\n          ").concat(this.renderChildren(children, {
        attributes: this.getSocialElementAttributes()
      }), "\n        </tbody>\n      </table>\n    ");
    }
  }, {
    key: "render",
    value: function render() {
      return "\n      ".concat(this.getAttribute('mode') === 'horizontal' ? this.renderHorizontal() : this.renderVertical(), "\n    ");
    }
  }]);
  return MjSocialXt;
}(_mjmlCore.BodyComponent);
exports["default"] = MjSocialXt;
_defineProperty(MjSocialXt, "componentName", 'mj-social-xt');
_defineProperty(MjSocialXt, "allowedAttributes", {
  align: 'enum(left,right,center)',
  'border-radius': 'unit(px,%)',
  'container-background-color': 'color',
  color: 'color',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-style': 'string',
  'font-weight': 'string',
  'icon-size': 'unit(px,%)',
  'icon-height': 'unit(px,%)',
  'icon-padding': 'unit(px,%){1,4}',
  'inner-padding': 'unit(px,%){1,4}',
  'line-height': 'unit(px,%,)',
  mode: 'enum(horizontal,vertical)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'table-layout': 'enum(auto,fixed)',
  'text-padding': 'unit(px,%){1,4}',
  'text-decoration': 'string',
  'vertical-align': 'enum(top,bottom,middle)'
});
_defineProperty(MjSocialXt, "defaultAttributes", {
  align: 'center',
  'border-radius': '3px',
  color: '#333333',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'icon-size': '20px',
  'inner-padding': null,
  'line-height': '22px',
  mode: 'horizontal',
  padding: '10px 25px',
  'text-decoration': 'none'
});