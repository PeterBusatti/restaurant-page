/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/rabbit-7040066.svg */ "./src/images/rabbit-7040066.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/facebook.svg */ "./src/images/facebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/instagram.svg */ "./src/images/instagram.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../src/images/twitter.svg */ "./src/images/twitter.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n\n:root {\n    --accent-color: #18F58C;\n    --main-bg-color: #C25100;\n    --hf-bg-color: #F5AC18;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    \n    height: 100vh;\n}\n\n.header, .footer {\n    position: relative;\n    width: inherit;\n    height: 50px;\n    background-color: var(--hf-bg-color);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    font-size: 2.5rem;\n    position: absolute;\n    left: 1rem;\n}\n\nul {\n    width: 50%;\n    height: inherit;\n    list-style: none;\n\n    display: flex; \n    justify-content: center;\n    align-items: center;\n}\n\n.header li {\n    height: inherit;\n    width: 33%;\n    font-size: 1.5rem;\n    background-color: var(--hf-bg-color);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header li:hover, .icon:hover{\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);\n    scale: 1.1;\n}\n\n.icon {\n    position: absolute;\n    right: .75rem;\n    top: .5rem;\n    width: 100px;\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\n    height: 100px;\n\n    background-color: rgba(0, 0, 0, .75);\n    border-radius: 50%;\n}\n\n.footer li {\n    height: 80%;\n    width: 40px;\n    border-radius: 30%;\n}\n\nli:hover , .icon:hover {\n    cursor: pointer;\n}\n\n.footer li:first-child {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center/100%;\n}\n\n.footer li:nth-child(2) {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center/100%;\n}\n\n.footer li:last-child {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center/100%;\n}\n\n.footer li:hover {\n    box-shadow: inset 0px 0px 3px var(--accent-color),\n        0px 0px 3px var(--accent-color);\n    scale: 1.1;\n}\n\n.selected {\n    text-decoration: underline 3px var(--accent-color);\n    font-weight: bold;\n}\n\n.main {\n    flex: 1;\n\n    background-color: var(--main-bg-color);\n    width: inherit;\n    \n    display: flex;\n    justify-content: center;\n}\n\n/* home */\n.home {\n    width: 75%;\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    text-align: center;\n    padding: .5rem 0;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    row-gap: 1rem;\n}\n\n.home img {\n    grid-column-start: 2;\n    grid-row: 1 / span 2;\n\n    height: 700px;\n}\n\n.home p {\n    align-self: start;\n}\n\n/* menu */\n.menu {\n    width: 75%;\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    padding: 2rem;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px ,1fr));\n    gap: 2rem;\n}\n\n.menu .item {\n    height: 300px;\n    border: solid black 1px;\n    padding: .5rem;\n    font-size: 1rem;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: .25rem;\n}\n\n.menu img {\n    height: inherit;\n    grid-row: 1 / span 2;\n}\n\n.item > p:last-child {\n    font-size: 1.5rem;\n    justify-self: end;\n    align-self: end;\n}\n\n\n\n/* contact */\n.contact {\n    box-sizing: border-box;\n    width: 50%;\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    padding: 5rem;\n    text-align: center;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n}\n\n.contact > div > p:nth-child(2n - 1) {\n    font-weight: bold;\n}\n\n.contact p {\n    display: block;\n    line-height: 2rem;\n    background-color: rgba(145, 145, 145, 0.1);\n}\n\n.contact h3 {\n    font-size: 1.5rem;\n    text-decoration: underline 2px;\n    margin: 0 0 -1.5rem 0;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,oCAAoC;;IAEpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,UAAU;IACV,eAAe;IACf,gBAAgB;;IAEhB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,iBAAiB;IACjB,oCAAoC;;IAEpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;IACV,YAAY;IACZ,oEAAkE;IAClE,aAAa;;IAEb,oCAAoC;IACpC,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yEAAiE;AACrE;;AAEA;IACI,yEAAkE;AACtE;;AAEA;IACI,yEAAgE;AACpE;;AAEA;IACI;uCACmC;IACnC,UAAU;AACd;;AAEA;IACI,kDAAkD;IAClD,iBAAiB;AACrB;;AAEA;IACI,OAAO;;IAEP,sCAAsC;IACtC,cAAc;;IAEd,aAAa;IACb,uBAAuB;AAC3B;;AAEA,SAAS;AACT;IACI,UAAU;IACV,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;;IAEhB,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;;IAEpB,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,UAAU;IACV,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,cAAc;IACd,eAAe;;IAEf,aAAa;IACb,+BAA+B;IAC/B,WAAW;AACf;;AAEA;IACI,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;AACnB;;;;AAIA,YAAY;AACZ;IACI,sBAAsB;IACtB,UAAU;IACV,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,kBAAkB;;IAElB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,qBAAqB;AACzB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n}\n\n:root {\n    --accent-color: #18F58C;\n    --main-bg-color: #C25100;\n    --hf-bg-color: #F5AC18;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    \n    height: 100vh;\n}\n\n.header, .footer {\n    position: relative;\n    width: inherit;\n    height: 50px;\n    background-color: var(--hf-bg-color);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    font-size: 2.5rem;\n    position: absolute;\n    left: 1rem;\n}\n\nul {\n    width: 50%;\n    height: inherit;\n    list-style: none;\n\n    display: flex; \n    justify-content: center;\n    align-items: center;\n}\n\n.header li {\n    height: inherit;\n    width: 33%;\n    font-size: 1.5rem;\n    background-color: var(--hf-bg-color);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header li:hover, .icon:hover{\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);\n    scale: 1.1;\n}\n\n.icon {\n    position: absolute;\n    right: .75rem;\n    top: .5rem;\n    width: 100px;\n    background: url(../src/images/rabbit-7040066.svg) no-repeat center;\n    height: 100px;\n\n    background-color: rgba(0, 0, 0, .75);\n    border-radius: 50%;\n}\n\n.footer li {\n    height: 80%;\n    width: 40px;\n    border-radius: 30%;\n}\n\nli:hover , .icon:hover {\n    cursor: pointer;\n}\n\n.footer li:first-child {\n    background: url(../src/images/facebook.svg) no-repeat center/100%;\n}\n\n.footer li:nth-child(2) {\n    background: url(../src/images/instagram.svg) no-repeat center/100%;\n}\n\n.footer li:last-child {\n    background: url(../src/images/twitter.svg) no-repeat center/100%;\n}\n\n.footer li:hover {\n    box-shadow: inset 0px 0px 3px var(--accent-color),\n        0px 0px 3px var(--accent-color);\n    scale: 1.1;\n}\n\n.selected {\n    text-decoration: underline 3px var(--accent-color);\n    font-weight: bold;\n}\n\n.main {\n    flex: 1;\n\n    background-color: var(--main-bg-color);\n    width: inherit;\n    \n    display: flex;\n    justify-content: center;\n}\n\n/* home */\n.home {\n    width: 75%;\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    text-align: center;\n    padding: .5rem 0;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    justify-items: center;\n    row-gap: 1rem;\n}\n\n.home img {\n    grid-column-start: 2;\n    grid-row: 1 / span 2;\n\n    height: 700px;\n}\n\n.home p {\n    align-self: start;\n}\n\n/* menu */\n.menu {\n    width: 75%;\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    padding: 2rem;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px ,1fr));\n    gap: 2rem;\n}\n\n.menu .item {\n    height: 300px;\n    border: solid black 1px;\n    padding: .5rem;\n    font-size: 1rem;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    gap: .25rem;\n}\n\n.menu img {\n    height: inherit;\n    grid-row: 1 / span 2;\n}\n\n.item > p:last-child {\n    font-size: 1.5rem;\n    justify-self: end;\n    align-self: end;\n}\n\n\n\n/* contact */\n.contact {\n    box-sizing: border-box;\n    width: 50%;\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    padding: 5rem;\n    text-align: center;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n}\n\n.contact > div > p:nth-child(2n - 1) {\n    font-weight: bold;\n}\n\n.contact p {\n    display: block;\n    line-height: 2rem;\n    background-color: rgba(145, 145, 145, 0.1);\n}\n\n.contact h3 {\n    font-size: 1.5rem;\n    text-decoration: underline 2px;\n    margin: 0 0 -1.5rem 0;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
function createPairedParagraph(title, content) {
    const first = document.createElement("p");
    first.textContent = title;

    const second = document.createElement("p");
    second.textContent = content;

    return {
        first,
        second
    }
}

const contactSection = (() => {
    const contactTitle = document.createElement("h3");
    contactTitle.textContent = "Contact"

    const detailWrapper = document.createElement("div");
    
    const phone = createPairedParagraph("Phone:", "XXX-XXX-XXXX");
    const email = createPairedParagraph("Email:", "info@haygourmet.com")

    detailWrapper.appendChild(phone.first);
    detailWrapper.appendChild(phone.second);
    detailWrapper.appendChild(email.first);
    detailWrapper.appendChild(email.second);

    return {
        contactTitle,
        detailWrapper,
    }

})();

const directonSection = (() => {
    const directionTitle = document.createElement("h3");
    directionTitle.textContent = "Directions";

    const directionWrapper = document.createElement("div");

    const fakeAreaDirections = createPairedParagraph("From Fake Area:", "Take One Pkwy North to Route 1.5. Take Route 1.5 North to the VERY END in Rabbitville. (Do not take ANY exits off of Route 1.5). In Rabbitville, Route 1.5 runs into and BECOMES Route 2 North (towards Dogtown). Continue North on Route 2 for 1/2 mile. Hay Gourmet will be on your right.");
    const anotherFakeAreaDirections = createPairedParagraph("From Another Fake Area:", "Take 1000 West to Exit 50 into Route 2 North and Dogtown. Drive 1/2 miles and Hay Gourmet will be on your right.");
    const oneMoreMakeAreaDirections = createPairedParagraph("From One More Fake Area:", "Take 1000 East to Exit 40 N (north). Follow signs to Route 2 North and Dogtown. Drive 1/2 miles and Hay Gourmet will be on your right.");

    directionWrapper.appendChild(fakeAreaDirections.first);
    directionWrapper.appendChild(fakeAreaDirections.second);
    directionWrapper.appendChild(anotherFakeAreaDirections.first);
    directionWrapper.appendChild(anotherFakeAreaDirections.second);
    directionWrapper.appendChild(oneMoreMakeAreaDirections.first);
    directionWrapper.appendChild(oneMoreMakeAreaDirections.second);

    return {
        directionTitle,
        directionWrapper,
    }
})();

function loadContact () {
    const main = document.querySelector(".main");
    const contactElement = document.createElement("div");
    contactElement.classList.add("contact");

    contactElement.appendChild(contactSection.contactTitle);
    contactElement.appendChild(contactSection.detailWrapper);
    contactElement.appendChild(directonSection.directionTitle);
    contactElement.appendChild(directonSection.directionWrapper);

    main.appendChild(contactElement);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/guillermo-casales-0rgv5ydipU8-unsplash.jpg */ "./src/images/guillermo-casales-0rgv5ydipU8-unsplash.jpg");


const homeContent = (() => {
    const headline = () => {
        const createHeadline = document.createElement("h2");
        createHeadline.textContent = "Quality sourced ingredients shipped right to your door!";
        return createHeadline;
    }

    const text = () => {
        const createText = document.createElement("p");
        createText.textContent = "This is your one stop shop for your rabbit's nutritional needs.";
        return createText;
    }

    const img = () => {
        const createImg = document.createElement("img");
        createImg.src = _images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;
        createImg.alt = "rabbit eating from bowl";
        return createImg;
    }

    return {
        headline,
        text,
        img,
    }
})();

function loadHome() {
    const main = document.querySelector(".main");
    const home = document.createElement("div");
    home.classList.add("home");

    home.appendChild(homeContent.headline());
    home.appendChild(homeContent.text());
    home.appendChild(homeContent.img());

    main.appendChild(home);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/guillermo-casales-0rgv5ydipU8-unsplash.jpg */ "./src/images/guillermo-casales-0rgv5ydipU8-unsplash.jpg");


function createMenuItem(imageLocation, description, price) {
    const item = document.createElement("div");
    item.classList.add("item");
    
    const imageElement = () => {
        const element = document.createElement("img");
        element.src = imageLocation;
        return element; 
    }

    const descriptElement = () => {
        const element = document.createElement("p");
        element.textContent = description;
        return element;
    }

    const costElement = () => {
        const element = document.createElement("p");
        element.textContent = "$" + price;
        return element;
    }

    item.appendChild(imageElement());
    item.appendChild(descriptElement());
    item.appendChild(costElement());

    return item;
}

const menu = (() => {
    const fullMenu = [];

    const addToMenu = (...item) => {
        item.forEach(item => {
            fullMenu.push(item);
        })
    }

    return {
        fullMenu,
        addToMenu,
    }    
})();

/* add menu items here */
menu.addToMenu(
    createMenuItem(_images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__, 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
    "12"),

    createMenuItem(_images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
    5),

    createMenuItem(_images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    13.4),
    
    createMenuItem(_images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__, 
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    15.99),
)



function loadMenu() {
    const main = document.querySelector(".main");
    const menuElement = document.createElement("div");
    menuElement.classList.add("menu");

    menu.fullMenu.forEach(item => {
        menuElement.appendChild(item);
    });

    main.appendChild(menuElement);
}



/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });


function headerTabItems() {
    const ul = document.createElement("ul");

    const home = document.createElement("li");
    home.textContent = "Home";
    ul.appendChild(home)

    const menu = document.createElement("li");
    menu.textContent = "Menu";
    ul.appendChild(menu)

    const contact = document.createElement("li");
    contact.textContent = "Contact";
    ul.appendChild(contact)

    return ul;
}

function headerTitle() {
    const title = document.createElement("h1");
    title.textContent = "Hay Gourmet";

    return title;
}

function headerIcon() {
    const icon = document.createElement("div");
    icon.classList.add("icon");

    return icon;
}

function createHeader() {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header");
    
    headerContainer.appendChild(headerTitle());

    headerContainer.appendChild(headerTabItems());

    headerContainer.appendChild(headerIcon());

    return headerContainer;
}

function footerItems() {
    const ul = document.createElement("ul");
    
    for(let i = 0; i < 3; i++) {
        const li = document.createElement("li");
        ul.appendChild(li);
    }

    return ul;
}

function createFooter() {
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");

    footerContainer.appendChild(footerItems());

    return footerContainer;
}

function createMain() {
    const main = document.createElement("div")
    main.classList.add("main");

    return main;
}

function pageLoad() {
    const content = document.createElement('div');
    content.classList.add("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    document.body.appendChild(content);
}




/***/ }),

/***/ "./src/images/facebook.svg":
/*!*********************************!*\
  !*** ./src/images/facebook.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d22f82ee0d2779c3f267.svg";

/***/ }),

/***/ "./src/images/guillermo-casales-0rgv5ydipU8-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/images/guillermo-casales-0rgv5ydipU8-unsplash.jpg ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0625e788f3161b6cdb24.jpg";

/***/ }),

/***/ "./src/images/instagram.svg":
/*!**********************************!*\
  !*** ./src/images/instagram.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f2b78dfef81e7fd6b569.svg";

/***/ }),

/***/ "./src/images/rabbit-7040066.svg":
/*!***************************************!*\
  !*** ./src/images/rabbit-7040066.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1adf38993063bd38d0a.svg";

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d02a4827d039b066833.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-load.js */ "./src/page-load.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






(0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();
(0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.loadContact)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q3dFOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUJBQW1CLCtFQUFLO0FBQ3hCO0FBQ0E7O0FBRUEsbUJBQW1CLCtFQUFLO0FBQ3hCO0FBQ0E7O0FBRUEsbUJBQW1CLCtFQUFLO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrRUFBSztBQUN4QjtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJxQjtBQUNtQjtBQUNMO0FBQ0E7QUFDTTs7QUFFekMsdURBQVE7QUFDUix3REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL3JhYmJpdC03MDQwMDY2LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvZmFjZWJvb2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ltYWdlcy90d2l0dGVyLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1hY2NlbnQtY29sb3I6ICMxOEY1OEM7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0MyNTEwMDtcXG4gICAgLS1oZi1iZy1jb2xvcjogI0Y1QUMxODtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1iZy1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFyZW07XFxufVxcblxcbnVsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgbGkge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1iZy1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGxpOmhvdmVyLCAuaWNvbjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcblxcbi5pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLjc1cmVtO1xcbiAgICB0b3A6IC41cmVtO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNzUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mb290ZXIgbGkge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuXFxubGk6aG92ZXIgLCAuaWNvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciBsaTpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlci8xMDAlO1xcbn1cXG5cXG4uZm9vdGVyIGxpOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlci8xMDAlO1xcbn1cXG5cXG4uZm9vdGVyIGxpOmxhc3QtY2hpbGQge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIvMTAwJTtcXG59XFxuXFxuLmZvb3RlciBsaTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IHZhcigtLWFjY2VudC1jb2xvciksXFxuICAgICAgICAwcHggMHB4IDNweCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAzcHggdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIGhvbWUgKi9cXG4uaG9tZSB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtIDA7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaG9tZSBpbWcge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XFxuXFxuICAgIGhlaWdodDogNzAwcHg7XFxufVxcblxcbi5ob21lIHAge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLyogbWVudSAqL1xcbi5tZW51IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHggLDFmcikpO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5tZW51IC5pdGVtIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5cXG4ubWVudSBpbWcge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbn1cXG5cXG4uaXRlbSA+IHA6bGFzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG5cXG5cXG4vKiBjb250YWN0ICovXFxuLmNvbnRhY3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdCA+IGRpdiA+IHA6bnRoLWNoaWxkKDJuIC0gMSkge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhY3QgcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjEpO1xcbn1cXG5cXG4uY29udGFjdCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAycHg7XFxuICAgIG1hcmdpbjogMCAwIC0xLjVyZW0gMDtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixvQ0FBb0M7O0lBRXBDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjs7SUFFaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQ0FBb0M7O0lBRXBDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixvRUFBa0U7SUFDbEUsYUFBYTs7SUFFYixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kseUVBQWlFO0FBQ3JFOztBQUVBO0lBQ0kseUVBQWtFO0FBQ3RFOztBQUVBO0lBQ0kseUVBQWdFO0FBQ3BFOztBQUVBO0lBQ0k7dUNBQ21DO0lBQ25DLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxPQUFPOztJQUVQLHNDQUFzQztJQUN0QyxjQUFjOztJQUVkLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUEsU0FBUztBQUNUO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjs7SUFFcEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQSxTQUFTO0FBQ1Q7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osYUFBYTs7SUFFYixhQUFhO0lBQ2IsMkRBQTJEO0lBQzNELFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLGVBQWU7O0lBRWYsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COzs7O0FBSUEsWUFBWTtBQUNaO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCOztJQUVsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1hY2NlbnQtY29sb3I6ICMxOEY1OEM7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0MyNTEwMDtcXG4gICAgLS1oZi1iZy1jb2xvcjogI0Y1QUMxODtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1iZy1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDFyZW07XFxufVxcblxcbnVsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgbGkge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1iZy1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGxpOmhvdmVyLCAuaWNvbjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcblxcbi5pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLjc1cmVtO1xcbiAgICB0b3A6IC41cmVtO1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9zcmMvaW1hZ2VzL3JhYmJpdC03MDQwMDY2LnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuNzUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5mb290ZXIgbGkge1xcbiAgICBoZWlnaHQ6IDgwJTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcXG59XFxuXFxubGk6aG92ZXIgLCAuaWNvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmZvb3RlciBsaTpmaXJzdC1jaGlsZCB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9zcmMvaW1hZ2VzL2ZhY2Vib29rLnN2Zykgbm8tcmVwZWF0IGNlbnRlci8xMDAlO1xcbn1cXG5cXG4uZm9vdGVyIGxpOm50aC1jaGlsZCgyKSB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguLi9zcmMvaW1hZ2VzL2luc3RhZ3JhbS5zdmcpIG5vLXJlcGVhdCBjZW50ZXIvMTAwJTtcXG59XFxuXFxuLmZvb3RlciBsaTpsYXN0LWNoaWxkIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4uL3NyYy9pbWFnZXMvdHdpdHRlci5zdmcpIG5vLXJlcGVhdCBjZW50ZXIvMTAwJTtcXG59XFxuXFxuLmZvb3RlciBsaTpob3ZlciB7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IHZhcigtLWFjY2VudC1jb2xvciksXFxuICAgICAgICAwcHggMHB4IDNweCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBzY2FsZTogMS4xO1xcbn1cXG5cXG4uc2VsZWN0ZWQge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAzcHggdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZmxleDogMTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qIGhvbWUgKi9cXG4uaG9tZSB7XFxuICAgIHdpZHRoOiA3NSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtIDA7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaG9tZSBpbWcge1xcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyBzcGFuIDI7XFxuXFxuICAgIGhlaWdodDogNzAwcHg7XFxufVxcblxcbi5ob21lIHAge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLyogbWVudSAqL1xcbi5tZW51IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHggLDFmcikpO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5tZW51IC5pdGVtIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIHBhZGRpbmc6IC41cmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdhcDogLjI1cmVtO1xcbn1cXG5cXG4ubWVudSBpbWcge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcbn1cXG5cXG4uaXRlbSA+IHA6bGFzdC1jaGlsZCB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbn1cXG5cXG5cXG5cXG4vKiBjb250YWN0ICovXFxuLmNvbnRhY3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogNXJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uY29udGFjdCA+IGRpdiA+IHA6bnRoLWNoaWxkKDJuIC0gMSkge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvbnRhY3QgcCB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDUsIDE0NSwgMTQ1LCAwLjEpO1xcbn1cXG5cXG4uY29udGFjdCBoMyB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAycHg7XFxuICAgIG1hcmdpbjogMCAwIC0xLjVyZW0gMDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZVBhaXJlZFBhcmFncmFwaCh0aXRsZSwgY29udGVudCkge1xuICAgIGNvbnN0IGZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZmlyc3QudGV4dENvbnRlbnQgPSB0aXRsZTtcblxuICAgIGNvbnN0IHNlY29uZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNlY29uZC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBmaXJzdCxcbiAgICAgICAgc2Vjb25kXG4gICAgfVxufVxuXG5jb25zdCBjb250YWN0U2VjdGlvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGNvbnRhY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiXG5cbiAgICBjb25zdCBkZXRhaWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBjb25zdCBwaG9uZSA9IGNyZWF0ZVBhaXJlZFBhcmFncmFwaChcIlBob25lOlwiLCBcIlhYWC1YWFgtWFhYWFwiKTtcbiAgICBjb25zdCBlbWFpbCA9IGNyZWF0ZVBhaXJlZFBhcmFncmFwaChcIkVtYWlsOlwiLCBcImluZm9AaGF5Z291cm1ldC5jb21cIilcblxuICAgIGRldGFpbFdyYXBwZXIuYXBwZW5kQ2hpbGQocGhvbmUuZmlyc3QpO1xuICAgIGRldGFpbFdyYXBwZXIuYXBwZW5kQ2hpbGQocGhvbmUuc2Vjb25kKTtcbiAgICBkZXRhaWxXcmFwcGVyLmFwcGVuZENoaWxkKGVtYWlsLmZpcnN0KTtcbiAgICBkZXRhaWxXcmFwcGVyLmFwcGVuZENoaWxkKGVtYWlsLnNlY29uZCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb250YWN0VGl0bGUsXG4gICAgICAgIGRldGFpbFdyYXBwZXIsXG4gICAgfVxuXG59KSgpO1xuXG5jb25zdCBkaXJlY3RvblNlY3Rpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGRpcmVjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGRpcmVjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJEaXJlY3Rpb25zXCI7XG5cbiAgICBjb25zdCBkaXJlY3Rpb25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IGZha2VBcmVhRGlyZWN0aW9ucyA9IGNyZWF0ZVBhaXJlZFBhcmFncmFwaChcIkZyb20gRmFrZSBBcmVhOlwiLCBcIlRha2UgT25lIFBrd3kgTm9ydGggdG8gUm91dGUgMS41LiBUYWtlIFJvdXRlIDEuNSBOb3J0aCB0byB0aGUgVkVSWSBFTkQgaW4gUmFiYml0dmlsbGUuIChEbyBub3QgdGFrZSBBTlkgZXhpdHMgb2ZmIG9mIFJvdXRlIDEuNSkuIEluIFJhYmJpdHZpbGxlLCBSb3V0ZSAxLjUgcnVucyBpbnRvIGFuZCBCRUNPTUVTIFJvdXRlIDIgTm9ydGggKHRvd2FyZHMgRG9ndG93bikuIENvbnRpbnVlIE5vcnRoIG9uIFJvdXRlIDIgZm9yIDEvMiBtaWxlLiBIYXkgR291cm1ldCB3aWxsIGJlIG9uIHlvdXIgcmlnaHQuXCIpO1xuICAgIGNvbnN0IGFub3RoZXJGYWtlQXJlYURpcmVjdGlvbnMgPSBjcmVhdGVQYWlyZWRQYXJhZ3JhcGgoXCJGcm9tIEFub3RoZXIgRmFrZSBBcmVhOlwiLCBcIlRha2UgMTAwMCBXZXN0IHRvIEV4aXQgNTAgaW50byBSb3V0ZSAyIE5vcnRoIGFuZCBEb2d0b3duLiBEcml2ZSAxLzIgbWlsZXMgYW5kIEhheSBHb3VybWV0IHdpbGwgYmUgb24geW91ciByaWdodC5cIik7XG4gICAgY29uc3Qgb25lTW9yZU1ha2VBcmVhRGlyZWN0aW9ucyA9IGNyZWF0ZVBhaXJlZFBhcmFncmFwaChcIkZyb20gT25lIE1vcmUgRmFrZSBBcmVhOlwiLCBcIlRha2UgMTAwMCBFYXN0IHRvIEV4aXQgNDAgTiAobm9ydGgpLiBGb2xsb3cgc2lnbnMgdG8gUm91dGUgMiBOb3J0aCBhbmQgRG9ndG93bi4gRHJpdmUgMS8yIG1pbGVzIGFuZCBIYXkgR291cm1ldCB3aWxsIGJlIG9uIHlvdXIgcmlnaHQuXCIpO1xuXG4gICAgZGlyZWN0aW9uV3JhcHBlci5hcHBlbmRDaGlsZChmYWtlQXJlYURpcmVjdGlvbnMuZmlyc3QpO1xuICAgIGRpcmVjdGlvbldyYXBwZXIuYXBwZW5kQ2hpbGQoZmFrZUFyZWFEaXJlY3Rpb25zLnNlY29uZCk7XG4gICAgZGlyZWN0aW9uV3JhcHBlci5hcHBlbmRDaGlsZChhbm90aGVyRmFrZUFyZWFEaXJlY3Rpb25zLmZpcnN0KTtcbiAgICBkaXJlY3Rpb25XcmFwcGVyLmFwcGVuZENoaWxkKGFub3RoZXJGYWtlQXJlYURpcmVjdGlvbnMuc2Vjb25kKTtcbiAgICBkaXJlY3Rpb25XcmFwcGVyLmFwcGVuZENoaWxkKG9uZU1vcmVNYWtlQXJlYURpcmVjdGlvbnMuZmlyc3QpO1xuICAgIGRpcmVjdGlvbldyYXBwZXIuYXBwZW5kQ2hpbGQob25lTW9yZU1ha2VBcmVhRGlyZWN0aW9ucy5zZWNvbmQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aW9uVGl0bGUsXG4gICAgICAgIGRpcmVjdGlvbldyYXBwZXIsXG4gICAgfVxufSkoKTtcblxuZnVuY3Rpb24gbG9hZENvbnRhY3QgKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgY29uc3QgY29udGFjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gICAgY29udGFjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24uY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbi5kZXRhaWxXcmFwcGVyKTtcbiAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChkaXJlY3RvblNlY3Rpb24uZGlyZWN0aW9uVGl0bGUpO1xuICAgIGNvbnRhY3RFbGVtZW50LmFwcGVuZENoaWxkKGRpcmVjdG9uU2VjdGlvbi5kaXJlY3Rpb25XcmFwcGVyKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdEVsZW1lbnQpO1xufVxuXG5leHBvcnQge2xvYWRDb250YWN0fSIsImltcG9ydCBidW5ueSBmcm9tICcuL2ltYWdlcy9ndWlsbGVybW8tY2FzYWxlcy0wcmd2NXlkaXBVOC11bnNwbGFzaC5qcGcnO1xuXG5jb25zdCBob21lQ29udGVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGxpbmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZUhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBjcmVhdGVIZWFkbGluZS50ZXh0Q29udGVudCA9IFwiUXVhbGl0eSBzb3VyY2VkIGluZ3JlZGllbnRzIHNoaXBwZWQgcmlnaHQgdG8geW91ciBkb29yIVwiO1xuICAgICAgICByZXR1cm4gY3JlYXRlSGVhZGxpbmU7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3JlYXRlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjcmVhdGVUZXh0LnRleHRDb250ZW50ID0gXCJUaGlzIGlzIHlvdXIgb25lIHN0b3Agc2hvcCBmb3IgeW91ciByYWJiaXQncyBudXRyaXRpb25hbCBuZWVkcy5cIjtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVRleHQ7XG4gICAgfVxuXG4gICAgY29uc3QgaW1nID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjcmVhdGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBjcmVhdGVJbWcuc3JjID0gYnVubnk7XG4gICAgICAgIGNyZWF0ZUltZy5hbHQgPSBcInJhYmJpdCBlYXRpbmcgZnJvbSBib3dsXCI7XG4gICAgICAgIHJldHVybiBjcmVhdGVJbWc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGxpbmUsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGltZyxcbiAgICB9XG59KSgpO1xuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVDb250ZW50LmhlYWRsaW5lKCkpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQudGV4dCgpKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGhvbWVDb250ZW50LmltZygpKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZSk7XG59XG5cbmV4cG9ydCB7bG9hZEhvbWV9IiwiaW1wb3J0IGJ1bm55IGZyb20gJy4vaW1hZ2VzL2d1aWxsZXJtby1jYXNhbGVzLTByZ3Y1eWRpcFU4LXVuc3BsYXNoLmpwZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGltYWdlTG9jYXRpb24sIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgXG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZWxlbWVudC5zcmMgPSBpbWFnZUxvY2F0aW9uO1xuICAgICAgICByZXR1cm4gZWxlbWVudDsgXG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgY29zdEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiJFwiICsgcHJpY2U7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KCkpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRFbGVtZW50KCkpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY29zdEVsZW1lbnQoKSk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cblxuY29uc3QgbWVudSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZnVsbE1lbnUgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvTWVudSA9ICguLi5pdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGZ1bGxNZW51LnB1c2goaXRlbSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnVsbE1lbnUsXG4gICAgICAgIGFkZFRvTWVudSxcbiAgICB9ICAgIFxufSkoKTtcblxuLyogYWRkIG1lbnUgaXRlbXMgaGVyZSAqL1xubWVudS5hZGRUb01lbnUoXG4gICAgY3JlYXRlTWVudUl0ZW0oYnVubnksIFxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdFwiLCBcbiAgICBcIjEyXCIpLFxuXG4gICAgY3JlYXRlTWVudUl0ZW0oYnVubnksXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0XCIsIFxuICAgIDUpLFxuXG4gICAgY3JlYXRlTWVudUl0ZW0oYnVubnksXG4gICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0XCIsXG4gICAgMTMuNCksXG4gICAgXG4gICAgY3JlYXRlTWVudUl0ZW0oYnVubnksIFxuICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdFwiLFxuICAgIDE1Ljk5KSxcbilcblxuXG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgY29uc3QgbWVudUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgbWVudS5mdWxsTWVudS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBtZW51RWxlbWVudC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgICB9KTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUVsZW1lbnQpO1xufVxuXG5leHBvcnQge2xvYWRNZW51fSIsIlxuXG5mdW5jdGlvbiBoZWFkZXJUYWJJdGVtcygpIHtcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIHVsLmFwcGVuZENoaWxkKGhvbWUpXG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICB1bC5hcHBlbmRDaGlsZChtZW51KVxuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY29udGFjdClcblxuICAgIHJldHVybiB1bDtcbn1cblxuZnVuY3Rpb24gaGVhZGVyVGl0bGUoKSB7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkhheSBHb3VybWV0XCI7XG5cbiAgICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGhlYWRlckljb24oKSB7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcblxuICAgIHJldHVybiBpY29uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUoKSk7XG5cbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGFiSXRlbXMoKSk7XG5cbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVySWNvbigpKTtcblxuICAgIHJldHVybiBoZWFkZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGZvb3Rlckl0ZW1zKCkge1xuICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIFxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuXG4gICAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3Rlckl0ZW1zKCkpO1xuXG4gICAgcmV0dXJuIGZvb3RlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgICByZXR1cm4gbWFpbjtcbn1cblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufVxuXG5cbmV4cG9ydCB7cGFnZUxvYWR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge3BhZ2VMb2FkfSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5pbXBvcnQge2xvYWRIb21lfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHtsb2FkTWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7bG9hZENvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbnBhZ2VMb2FkKCk7XG5sb2FkQ29udGFjdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9