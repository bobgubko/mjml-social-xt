"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mjmlCore = require("mjml-core");
var _lodash = require("lodash");
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
  /**
   * @description Initializes a new object by calling the parent class's constructor
   * using `_super.apply(this, arguments)`. This ensures proper inheritance and
   * initialization of properties from the superclass. The function is likely part of
   * a class definition written in ES6 syntax.
   *
   * @returns {MjSocialXt} An instance of its class and the result of calling
   * `_super.apply(this, arguments)`.
   */
  function MjSocialXt() {
    _classCallCheck(this, MjSocialXt);
    return _super.apply(this, arguments);
  }
  _createClass(MjSocialXt, [{
    key: "getStyles",
    /**
     * @description Defines and returns an object that contains CSS styles, specifically
     * for a table with vertical alignment. The returned object has one property,
     * `tableVertical`, which holds another object with one style property: `margin`, set
     * to '0px'.
     *
     * @returns {any} An object containing a single property 'tableVertical' with its own
     * properties: margin set to a string '0px'.
     */
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
    /**
     * @description Extracts and returns a subset of HTML element attributes as an object.
     * It filters out attributes that are not present on the element, and uses Lodash's
     * `_lodash.isNil` to check for null or undefined values.
     *
     * @returns {object} A collection of social element attributes, including padding,
     * border radius, color, font family, and others, with their respective values as
     * properties of the object.
     */
    value: function getSocialElementAttributes() {
      var _this = this;
      var base = {};
      if (this.getAttribute('inner-padding')) {
        base.padding = this.getAttribute('inner-padding');
      }
      return ['border-radius', 'color', 'font-family', 'font-size', 'font-weight', 'font-style', 'icon-size', 'icon-height', 'icon-padding', 'text-padding', 'line-height', 'text-decoration'].filter(function (e) {
        // Checks for non-nil attribute values.
        return !(0, _lodash.isNil)(_this.getAttribute(e));
      }).reduce(function (res, attr) {
        // Accumulates attributes.
        res[attr] = _this.getAttribute(attr);
        return res;
      }, base);
    }
  }, {
    key: "renderHorizontal",
    /**
     * @description Renders horizontal content for an email template, handling child
     * elements and attributes while adhering to Microsoft Outlook (mso) and Internet
     * Explorer (IE) compatibility requirements through conditional statements.
     *
     * @returns {string} A HTML markup snippet consisting of nested tables and table data
     * cells containing child components rendered as inline tables.
     */
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
        /**
         * @description Generates HTML for rendering a component. It checks if the component
         * is a raw element, and if so, it returns the result of calling the `render` method
         * on that element. Otherwise, it creates a table with specific attributes to display
         * the component's contents.
         *
         * @param {object} component - Used to render HTML elements.
         *
         * @returns {string} An HTML snippet that represents a table structure. It includes
         * a raw element's render result wrapped inside conditional comments for MS Office
         * and Internet Explorer compatibility.
         */
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
    /**
     * @description Renders a vertical table based on its children elements and returns
     * the HTML code as a string.
     * It takes into account specific attributes for accessibility and styling.
     * It uses the `htmlAttributes` method to generate the table element with presentation
     * role.
     *
     * @returns {string} A HTML table structure rendered vertically with given children
     * elements and attributes applied. The returned HTML includes a table element, its
     * body, and optionally child elements within it.
     */
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
    /**
     * @description Renders HTML content based on an attribute 'mode'. If the mode is
     * 'horizontal', it returns the result of `renderHorizontal()`, otherwise it returns
     * the result of `renderVertical()`. The rendered content is formatted with newline
     * characters and spaces for indentation.
     *
     * @returns {string} A concatenation of two values separated by newline characters
     * and containing whitespace.
     */
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