webpackHotUpdate("static/development/pages/newSouvenir.js",{

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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    from {\n        left:100vw;\n    }\n\n    to {\n        left:0vw;\n    }"]);

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
var slideIn = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SouvenirForm__Flex",
  componentId: "sc-1929zk0-1"
})(["background-color:", ";display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";height:", ";top:", ";min-width:", ";left:", ";right:", ";overflow = ", ";"], function (props) {
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
  return props.height || "auto";
}, function (props) {
  return props.top || "0";
}, function (props) {
  return props.minWidth || "auto";
}, function (props) {
  return props.left || "auto";
}, function (props) {
  return props.right || "auto";
}, function (props) {
  return props.overflow || "auto";
});
var FlexSlider = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "SouvenirForm__FlexSlider",
  componentId: "sc-1929zk0-2"
})(["background-color:", ";display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";top:", ";min-width:", ";left:", ";right:", ";overflow-x:hidden;overflow-y:auto;z-index:", ";padding:", ";"], function (props) {
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
}, function (props) {
  return props.zIndex || "0";
}, function (props) {
  return props.padding || "0";
});
var ColorBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "SouvenirForm__ColorBox",
  componentId: "sc-1929zk0-3"
})(["display:", ";width:13px;height:13px;background-color:", ";border:1px solid black;margin-left:5px;border-radius:3px;cursor:", ";&:hover{border:", ";}"], function (props) {
  return props.display || "flex";
}, function (props) {
  return props.color || "white";
}, function (props) {
  return props.cursor || "pointer";
}, function (props) {
  return props.hover || "3px solid black";
});
var SouvenirText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "SouvenirForm__SouvenirText",
  componentId: "sc-1929zk0-4"
})(["font-size:", ";color:", ";font-style:", ";"], function (props) {
  return props.size || "1rem";
}, function (props) {
  return props.color || "black";
}, function (props) {
  return props.fontStyle || "normal";
});
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea.withConfig({
  displayName: "SouvenirForm__TextArea",
  componentId: "sc-1929zk0-5"
})(["resize:none;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "SouvenirForm__Form",
  componentId: "sc-1929zk0-6"
})(["display:flex;"]);

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
      souvenirStory: ""
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
      document.getElementById('pageTwo').setAttribute('style', 'left:0');
      document.getElementById('flex-slider-wrapper').setAttribute('style', 'overflow:visible');
      document.getElementById('next-page').setAttribute('style', "display:none"); //For Firefox

      console.log("hi");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "prevPage", function () {
      document.getElementById('pageTwo').setAttribute('style', 'left:100vw');
      document.getElementById('flex-slider-wrapper').setAttribute('style', 'overflow:hidden');
      document.getElementById('next-page').setAttribute('style', "display:auto");
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function () {
      event.preventDefault();
      console.log(_this.state);
    });

    return _this;
  }

  _createClass(SouvenirForm, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _React$createElement;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlexSlider, {
        id: "flex-slider-wrapper",
        direction: "row",
        minWidth: "100%",
        position: "relative",
        justify: "center",
        overflow: "auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Form, {
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        minWidth: "100%",
        position: "relative",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
        type: "text",
        placeholder: "Name",
        id: "name",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
        type: "text",
        placeholder: "Location",
        id: "location",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputField, {
        type: "text",
        placeholder: "Add audio link",
        id: "audio",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, " Color: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        cursor: "auto",
        hover: "auto",
        color: this.state.color,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        direction: "row",
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#DC143C",
        onClick: function onClick() {
          return _this2.pickColor("#DC143C");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#87CEFA",
        onClick: function onClick() {
          return _this2.pickColor("#87CEFA");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#1E90FF",
        onClick: function onClick() {
          return _this2.pickColor("#1E90FF");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#00FF7F",
        onClick: function onClick() {
          return _this2.pickColor("#00FF7F");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorBox, {
        color: "#FA8072",
        onClick: function onClick() {
          return _this2.pickColor("#FA8072");
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        id: "next-page",
        onClick: this.nextPage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Start writing")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, (_React$createElement = {
        id: "pageTwo",
        zIndex: "999",
        position: "absolute",
        padding: "1200px",
        left: "100vw",
        minWidth: "100%",
        bgColor: this.state.color || "white"
      }, _defineProperty(_React$createElement, "id", "pageTwo"), _defineProperty(_React$createElement, "__source", {
        fileName: _jsxFileName,
        lineNumber: 154
      }), _defineProperty(_React$createElement, "__self", this), _React$createElement), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        bgColor: "black",
        minWidth: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SouvenirText, {
        size: "1.5rem",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, this.state.location)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, "Write your story:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SouvenirText, {
        fontStyle: "oblique",
        color: "white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, this.state.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {
        cols: "50",
        rows: "15",
        id: "souvenirStory",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        direction: "row",
        justify: "space-around",
        minWidth: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "button",
        id: "prev-page",
        onClick: this.prevPage,
        value: "Previous page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Submit story",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      })))));
    }
  }]);

  return SouvenirForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=newSouvenir.js.600d35aa96e69bcb5e37.hot-update.js.map