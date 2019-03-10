webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_SouvenirForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SouvenirForm */ "./components/SouvenirForm.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_MySouvenirs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MySouvenirs */ "./components/MySouvenirs.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_reveal_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-reveal/globals */ "./node_modules/react-reveal/globals.js");
/* harmony import */ var react_reveal_globals__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_reveal_globals__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/brandontsegai/Desktop/myProjects/School/souvenir/components/App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








react_reveal_globals__WEBPACK_IMPORTED_MODULE_6___default()({
  ssrFadeout: true
});
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "App__Flex",
  componentId: "sc-16jexjb-0"
})(["background-color:", ";display:", ";position:", ";flex-direction:", ";align-items:", ";justify-content:", ";width:", ";height:", ";top:", ";min-width:", ";left:", ";right:", ";overflow:", ";overflow-y:", ";"], function (props) {
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
}, function (props) {
  return props.overflowY || "auto";
});

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      souvenirs: [{
        name: "Vietnam livin",
        location: "Ho chi Minh",
        color: "blue",
        audio: "www.spotify.com",
        souvenirStory: "I had fun."
      }],
      showCollection: false,
      createSouvenir: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addSouvenir", function (souvenir) {
      souvenir.id = Math.random();
      souvenir.date = "Today"; // moment().format('MMMM Do YYYY, h:mm:ss a');

      var souvenirs = [].concat(_toConsumableArray(_this.state.souvenirs), [souvenir]);

      _this.setState({
        souvenirs: souvenirs
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCollection", function (e) {
      _this.setState({
        showCollection: !_this.state.showCollection
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "newSouvenir", function (e) {
      _this.setState({
        createSouvenir: !_this.state.createSouvenir
      });
    });

    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        justify: "space-between",
        height: "auto",
        overflow: "visible",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Hero__WEBPACK_IMPORTED_MODULE_1__["default"], {
        scrollFade: this.scrollFade,
        getCollection: this.getCollection,
        showCollection: this.state.showCollection,
        createSouvenir: this.state.createSouvenir,
        newSouvenir: this.newSouvenir,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
        direction: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SouvenirForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
        souvenirs: this.state.souvenirs,
        addSouvenir: this.addSouvenir,
        createSouvenir: this.state.createSouvenir,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MySouvenirs__WEBPACK_IMPORTED_MODULE_4__["default"], {
        souvenirs: this.state.souvenirs,
        showCollection: this.state.showCollection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.28880b59256e1bf95a06.hot-update.js.map