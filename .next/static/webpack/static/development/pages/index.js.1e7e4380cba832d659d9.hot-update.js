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
})(["@import url('https://fonts.googleapis.com/css?family=Oswald');font-family:'Oswald',cursive;font-size:4.6rem;color:#FFF;text-align:center;"]);
var HeroBg = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__HeroBg",
  componentId: "sc-1kp3y8c-1"
})(["display:flex;flex-direction:column;justify-content:space-around;align-items:center;background-image:linear-gradient(to right,#000000,#434343);min-width:100vw;min-height:200vh;overflow:scroll;"]);
var NavSite = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__NavSite",
  componentId: "sc-1kp3y8c-2"
})(["position:relative;background-image:linear-gradient(to right,#000000,#434343);min-width:100vw;min-height:20vh;"]);
var scrollIt = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var HeroSlogan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Hero__HeroSlogan",
  componentId: "sc-1kp3y8c-3"
})(["@import url('https://fonts.googleapis.com/css?family=Abril+Fatface|Amatic+SC:700|Lobster');font-family:'Amatic SC',cursive;color:white;text-align:center;margin:-1px;"]);
var ScrollDown = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Hero__ScrollDown",
  componentId: "sc-1kp3y8c-4"
})(["animation:", " 1.5s linear infinite;"], scrollIt);

var Hero = function Hero(_ref) {
  var scrollFade = _ref.scrollFade;

  var imgSrc = __webpack_require__(/*! ../images/scroll-arrow-light.png */ "./images/scroll-arrow-light.png");

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onScroll: scrollFade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroBg, {
    onScroll: scrollFade,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, " Souvenir "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroSlogan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "Write it down. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "Read it out loud. Listen closely. ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "Feel it all over again.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ScrollDown, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imgSrc,
    alt: "Scroll down to view more",
    width: "120px",
    height: "40px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Markup that will be revealed on scroll"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavSite, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeroSlogan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, " Hey there")));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./node_modules/react-reveal/Fade.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/Fade.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.distance,t=e.left,p=e.right,a=e.up,l=e.down,i=e.top,u=e.bottom,n=e.big,s=e.mirror,d=e.opposite,_=(r?r.toString():0)+((t?1:0)|(p?2:0)|(i||l?4:0)|(u||a?8:0)|(s?16:0)|(d?32:0)|(o?64:0)|(n?128:0));if(lookup.hasOwnProperty(_))return lookup[_];var f=t||p||a||l||i||u,y=void 0,b=void 0;if(f){if(!s!=!(o&&d)){var v=[p,t,u,i,l,a];t=v[0],p=v[1],i=v[2],u=v[3],a=v[4],l=v[5]}var c=r||(n?"2000px":"100%");y=t?"-"+c:p?c:"0",b=l||i?"-"+c:a||u?c:"0"}return lookup[_]=(0,_globals.animation)((o?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+y+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {opacity: 1;transform: none;} "),lookup[_]}function Fade(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o.children,t=(o.out,o.forever),p=o.timeout,a=o.duration,l=void 0===a?_globals.defaults.duration:a,i=o.delay,u=void 0===i?_globals.defaults.delay:i,n=o.count,s=void 0===n?_globals.defaults.count:n,d=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),_={make:make,duration:void 0===p?l:p,delay:u,forever:t,count:s,style:{animationFillMode:"both"},reverse:d.left};return e?(0,_wrap2.default)(d,_,_,r):_}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,distance:_propTypes.string,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Fade.propTypes=propTypes,exports.default=Fade,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/Zoom.js":
false

})
//# sourceMappingURL=index.js.1e7e4380cba832d659d9.hot-update.js.map