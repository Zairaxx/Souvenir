webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/brandontsegai/Desktop/myProjects/School/souvenir/components/Hero.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n      transform:translateY(0px);\n    }\n    50% {\n        transform:translateY(35px);\n    }\n\n    100% {\n      transform:translate(Y)\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var HeroText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "Hero__HeroText",
  componentId: "sc-1kp3y8c-0"
})(["@import url('https://fonts.googleapis.com/css?family=Cinzel');font-family:'Cinzel',serif;font-size:3.6rem;color:#BBB;text-align:center;"]);
var HeroBg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__HeroBg",
  componentId: "sc-1kp3y8c-1"
})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;background-image:linear-gradient(to right,#000,#784343);min-width:100vw;min-height:100vh;overflow:visible;"]);
var scrollIt = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var HeroSlogan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Hero__HeroSlogan",
  componentId: "sc-1kp3y8c-2"
})(["@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC:700|Lobster');font-family:'Amatic SC',cursive;color:white;text-align:center;margin:-1px;"]);
var ScrollDown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__ScrollDown",
  componentId: "sc-1kp3y8c-3"
})(["animation:", " 1.5s linear infinite;"], scrollIt);
var NavSite = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__NavSite",
  componentId: "sc-1kp3y8c-4"
})(["position:relative;background-image:linear-gradient(to right,#000000,#434343);min-width:100vw;min-height:100vh;display:flex;flex-direction:row;justify-content:center;align-items:center;"]);
var NavItem = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__NavItem",
  componentId: "sc-1kp3y8c-5"
})(["margin:0px;border:1px solid white;border-radius:10px;min-width:20vw;min-height:50px;text-align:center;display:flex;justify-content:center;align-items:center;cursor:pointer;margin:0 10px;"]);

var Hero = function Hero(_ref) {
  var scrollFade = _ref.scrollFade;

  var imgSrc = __webpack_require__(/*! ../images/scroll-arrow-light.png */ "./images/scroll-arrow-light.png");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBg, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, " Souvenir ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroSlogan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), "Write it down. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), "Read it out loud. Listen closely. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), "Feel it all over again.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollDown, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgSrc,
    alt: "Scroll down to view more",
    width: "120px",
    height: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavSite, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroSlogan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    right: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Collection")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    right: true,
    cascade: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Create new Souvenir")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ })

})
//# sourceMappingURL=index.js.e38af7407c4718714fad.hot-update.js.map