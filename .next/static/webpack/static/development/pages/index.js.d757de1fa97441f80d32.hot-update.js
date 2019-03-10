webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MySouvenirs.js":
/*!***********************************!*\
  !*** ./components/MySouvenirs.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/brandontsegai/Desktop/myProjects/School/souvenir/components/MySouvenirs.js";


var ElementContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "MySouvenirs__ElementContainer",
  componentId: "sc-1ldl8qa-0"
})(["display:flex;justify-content:", ";padding:", ";font-family:'Ubuntu',sans-serif;"], function (props) {
  return props.center ? "center" : props.end ? "flex-end" : "flex-start";
}, function (props) {
  return props.center ? 0 : props.end ? "0 20px 0 0" : "0 0 0 20px";
});

var MySouvenirs = function MySouvenirs(_ref) {
  var souvenirs = _ref.souvenirs,
      showCollection = _ref.showCollection;
  var souvenirList = souvenirs.map(function (souvenir) {
    if (souvenir !== 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post",
        key: Math.random(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, souvenir.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, souvenir.location)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, souvenir.color)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ElementContainer, {
        center: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, souvenir.souvenirStory))));
    } else {
      return null;
    }
  });

  if (showCollection) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, souvenirList);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (MySouvenirs);

/***/ })

})
//# sourceMappingURL=index.js.d757de1fa97441f80d32.hot-update.js.map