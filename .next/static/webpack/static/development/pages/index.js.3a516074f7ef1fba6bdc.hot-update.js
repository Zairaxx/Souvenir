webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/SouvenirForm.js":
/*!************************************!*\
  !*** ./components/SouvenirForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SouvenirForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/brandontsegai/Desktop/myProjects/School/souvenir/components/SouvenirForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    from {\n        right:0;\n    }\n\n    to {\n        right:100vw;\n    }"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var InputField = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "SouvenirForm__InputField",
  componentId: "sc-1929zk0-0"
})(["text-align:center;margin-bottom:2em;width:30em;"]);
var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var slideIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject2());
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SouvenirForm__Flex",
  componentId: "sc-1929zk0-1"
})(["border:1px black solid;background-color:", ";display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";top:", ";min-width:", ";left:", ";right:", ";overflow:hidden;"], function (props) {
  return props.bgColor || "auto";
}, function (props) {
  return props.display || "flex";
}, function (props) {
  return props.position || "auto";
}, function (props) {
  return props.direction || "column";
}, function (props) {
  return props.alignItems || "center";
}, function (props) {
  return props.justify || "center";
}, function (props) {
  return props.width || "auto";
}, function (props) {
  return props.top || "0";
}, function (props) {
  return props.minWidth || "auto";
}, function (props) {
  return props.left || "auto";
}, function (props) {
  return props.right || "auto";
});
var FlexSlider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SouvenirForm__FlexSlider",
  componentId: "sc-1929zk0-2"
})(["border:1px black solid;background-color:", ";display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";top:", ";min-width:", ";left:", ";right:", ";overflow:hidden;animation:", " 1s 2 alternate;"], function (props) {
  return props.bgColor || "auto";
}, function (props) {
  return props.display || "flex";
}, function (props) {
  return props.position || "auto";
}, function (props) {
  return props.direction || "column";
}, function (props) {
  return props.alignItems || "center";
}, function (props) {
  return props.justify || "center";
}, function (props) {
  return props.width || "auto";
}, function (props) {
  return props.top || "0";
}, function (props) {
  return props.minWidth || "auto";
}, function (props) {
  return props.left || "auto";
}, function (props) {
  return props.right || "auto";
}, slideIn);
var ColorBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "SouvenirForm__ColorBox",
  componentId: "sc-1929zk0-3"
})(["display:flex;width:13px;height:13px;background-color:", ";border:1px solid black;margin-left:5px;border-radius:3px;cursor:pointer;animation:", " 3s infinite alternate;&:hover{border:3px solid black;}"], function (props) {
  return props.color || "white";
}, rotate);

var SouvenirForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SouvenirForm, _Component);

  function SouvenirForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SouvenirForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SouvenirForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      name: "",
      location: "",
      color: "",
      audio: "",
      pageTwo: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pickColor", function (color) {
      _this.setState({
        color: color
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      _this.setState(_defineProperty({}, e.target.id, e.target.value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "nextPage", function () {
      _this.setState(function (prevState) {
        return {
          pageTwo: !prevState.check
        };
      });
    });

    return _this;
  }

  _createClass(SouvenirForm, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexSlider, {
        direction: "row",
        minWidth: "100%",
        position: "relative",
        justify: "row",
        animation: "3s ${rotate} infinite linear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        minWidth: "100vw",
        position: "relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
        type: "text",
        placeholder: "Name",
        id: "name",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
        type: "text",
        placeholder: "Location",
        id: "location",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
        type: "text",
        placeholder: "Add audio link",
        id: "audio",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        animation: "${rotate} 3s infinite alternate",
        color: "#DC143C",
        onClick: function onClick() {
          return _this2.pickColor("#DC143C");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#87CEFA",
        onClick: function onClick() {
          return _this2.pickColor("#87CEFA");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#1E90FF",
        onClick: function onClick() {
          return _this2.pickColor("#1E90FF");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#00FF7F",
        onClick: function onClick() {
          return _this2.pickColor("#00FF7F");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#FA8072",
        onClick: function onClick() {
          return _this2.pickColor("#FA8072");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: this.state.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.nextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "Start writing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, this.state.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, this.state.location), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, this.state.audio)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        display: this.state.pageTwo ? "flex" : "none",
        minWidth: "100vw",
        bgColor: "blue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Heya"));
    }
  }]);

  return SouvenirForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.3a516074f7ef1fba6bdc.hot-update.js.map