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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n}\n\n:root {\n    --accent-color: #18F58C;\n    --darker-accent-color: rgb(102, 187, 102);\n    --main-bg-color: #C25100;\n    --hf-bg-color: #F5AC18;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    \n    height: 100vh;\n    font-family: 'Ubuntu', sans-serif;\n}\n\n.header, .footer {\n    position: relative;\n    width: inherit;\n    height: 50px;\n    background-color: var(--hf-bg-color);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    font-size: 2.75rem;\n    position: absolute;\n    left: .5rem;\n    bottom: 1px;\n    -webkit-text-fill-color: var(--darker-accent-color);\n    -webkit-text-stroke-width: 2px;\n    -webkit-text-stroke-color: black;\n    font-family: 'Ubuntu', sans-serif;\n}\n\nul {\n    width: 50%;\n    height: inherit;\n    list-style: none;\n\n    display: flex; \n    justify-content: center;\n    align-items: center;\n}\n\n.header li {\n    height: inherit;\n    width: 33%;\n    font-size: 1.5rem;\n    background-color: var(--hf-bg-color);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header li:hover, .icon:hover{\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);\n    scale: 1.1;\n}\n\n.icon {\n    position: absolute;\n    right: .75rem;\n    top: .5rem;\n\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.footer li {\n    height: 80%;\n    width: 40px;\n    border-radius: 30%;\n}\n\nli:hover , .icon:hover {\n    cursor: pointer;\n}\n\n.footer li:hover {\n    box-shadow: inset 0px 0px 3px var(--accent-color),\n        0px 0px 3px var(--accent-color);\n    scale: 1.1;\n}\n\n.selected {\n    text-decoration: underline 3px var(--accent-color);\n    font-weight: bold;\n}\n\n.main {\n    flex: 1;\n\n    background-color: var(--main-bg-color);\n    width: inherit;\n    \n    display: flex;\n    justify-content: center;\n}\n\n/* home */\n.home {\n    width: min(90%, 1400px);\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    text-align: center;\n    padding: .5rem .5rem;\n\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    justify-items: center;\n    row-gap: 1rem;\n}\n\n.home img {\n    grid-column-start: 2;\n    grid-row: 1 / span 2;\n\n    height: calc(200px + 30vw);\n}\n\n.home p {\n    align-self: start;\n}\n\n/* menu */\n.menu {\n    width: 75%;\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    padding: 2rem;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px ,1fr));\n    gap: 2rem;\n}\n\n.menu .item {\n    height: 300px;\n    padding: .5rem;\n    font-size: 1rem;\n    border: double 10px black;\n    text-align: center;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr auto;\n    place-items: center;\n    gap: .5rem;\n    \n}\n\n.menu img {\n    height: 262px;\n    grid-row: 2 / span 2;\n}\n\n.item > p:first-of-type {\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-decoration: underline 2px rgba(0,0,0, .5);\n    grid-row-start: 1;\n    grid-column: 1 / span 2;\n}\n\n.item > button {\n    position: relative;\n    font-size: 1.5rem;\n    background-color: var(--darker-accent-color);\n    border-radius: 15px;\n    border: none;\n    padding: 0px .5rem;\n    width: 130px;\n    cursor: pointer;\n    \n    \n    justify-self: end;\n    align-self: end;\n}\n\n.item > button:hover {\n    scale: 1.05;\n    color: var(--darker-accent-color);\n    box-shadow: inset 0px 0px 3px var(--accent-color),\n        0px 0px 3px var(--accent-color);\n}\n\n.item > button:hover::before {\n    position: absolute;\n    content: \"Add To Cart\";\n    font-size: 1.2rem;\n    background-color: var(--darker-accent-color); \n    color: black;\n    top: 3px;\n    left: 13px;\n    border-radius: 15px;\n    \n}\n\n\n/* contact */\n.contact {\n    box-sizing: border-box;\n    width: min(90%, 1200px);\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    padding: calc(1rem + 5vw);\n    text-align: center;\n    \n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n}\n\n.contact > div > p:nth-child(2n - 1) {\n    font-weight: bold;\n}\n\n.contact p {\n    display: block;\n    line-height: 2rem;\n    background-color: rgba(145, 145, 145, 0.1);\n}\n\n.contact h3 {\n    font-size: 1.5rem;\n    text-decoration: underline 2px;\n    margin: 0 0 -1.5rem 0;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,SAAS;AACb;;AAEA;IACI,uBAAuB;IACvB,yCAAyC;IACzC,wBAAwB;IACxB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,aAAa;IACb,iCAAiC;AACrC;;AAEA;IACI,kBAAkB;IAClB,cAAc;IACd,YAAY;IACZ,oCAAoC;;IAEpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,mDAAmD;IACnD,8BAA8B;IAC9B,gCAAgC;IAChC,iCAAiC;AACrC;;AAEA;IACI,UAAU;IACV,eAAe;IACf,gBAAgB;;IAEhB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,iBAAiB;IACjB,oCAAoC;;IAEpC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,yCAAyC;IACzC,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,UAAU;;IAEV,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI;uCACmC;IACnC,UAAU;AACd;;AAEA;IACI,kDAAkD;IAClD,iBAAiB;AACrB;;AAEA;IACI,OAAO;;IAEP,sCAAsC;IACtC,cAAc;;IAEd,aAAa;IACb,uBAAuB;AAC3B;;AAEA,SAAS;AACT;IACI,uBAAuB;IACvB,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;;IAEpB,aAAa;IACb,+BAA+B;IAC/B,mBAAmB;IACnB,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,oBAAoB;;IAEpB,0BAA0B;AAC9B;;AAEA;IACI,iBAAiB;AACrB;;AAEA,SAAS;AACT;IACI,UAAU;IACV,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,aAAa;IACb,cAAc;IACd,eAAe;IACf,yBAAyB;IACzB,kBAAkB;;IAElB,aAAa;IACb,+BAA+B;IAC/B,iCAAiC;IACjC,mBAAmB;IACnB,UAAU;;AAEd;;AAEA;IACI,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,8CAA8C;IAC9C,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,4CAA4C;IAC5C,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;;;IAGf,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,iCAAiC;IACjC;uCACmC;AACvC;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;IACjB,4CAA4C;IAC5C,YAAY;IACZ,QAAQ;IACR,UAAU;IACV,mBAAmB;;AAEvB;;;AAGA,YAAY;AACZ;IACI,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,yBAAyB;IACzB,kBAAkB;;;IAGlB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,0CAA0C;AAC9C;;AAEA;IACI,iBAAiB;IACjB,8BAA8B;IAC9B,qBAAqB;AACzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n}\n\n:root {\n    --accent-color: #18F58C;\n    --darker-accent-color: rgb(102, 187, 102);\n    --main-bg-color: #C25100;\n    --hf-bg-color: #F5AC18;\n}\n\n.content{\n    display: flex;\n    flex-direction: column;\n    \n    height: 100vh;\n    font-family: 'Ubuntu', sans-serif;\n}\n\n.header, .footer {\n    position: relative;\n    width: inherit;\n    height: 50px;\n    background-color: var(--hf-bg-color);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nh1 {\n    font-size: 2.75rem;\n    position: absolute;\n    left: .5rem;\n    bottom: 1px;\n    -webkit-text-fill-color: var(--darker-accent-color);\n    -webkit-text-stroke-width: 2px;\n    -webkit-text-stroke-color: black;\n    font-family: 'Ubuntu', sans-serif;\n}\n\nul {\n    width: 50%;\n    height: inherit;\n    list-style: none;\n\n    display: flex; \n    justify-content: center;\n    align-items: center;\n}\n\n.header li {\n    height: inherit;\n    width: 33%;\n    font-size: 1.5rem;\n    background-color: var(--hf-bg-color);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.header li:hover, .icon:hover{\n    box-shadow: 0px 0px 5px rgba(0, 0, 0, .5);\n    scale: 1.1;\n}\n\n.icon {\n    position: absolute;\n    right: .75rem;\n    top: .5rem;\n\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n}\n\n.footer li {\n    height: 80%;\n    width: 40px;\n    border-radius: 30%;\n}\n\nli:hover , .icon:hover {\n    cursor: pointer;\n}\n\n.footer li:hover {\n    box-shadow: inset 0px 0px 3px var(--accent-color),\n        0px 0px 3px var(--accent-color);\n    scale: 1.1;\n}\n\n.selected {\n    text-decoration: underline 3px var(--accent-color);\n    font-weight: bold;\n}\n\n.main {\n    flex: 1;\n\n    background-color: var(--main-bg-color);\n    width: inherit;\n    \n    display: flex;\n    justify-content: center;\n}\n\n/* home */\n.home {\n    width: min(90%, 1400px);\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    text-align: center;\n    padding: .5rem .5rem;\n\n    display: grid;\n    grid-template-columns: 1fr auto;\n    align-items: center;\n    justify-items: center;\n    row-gap: 1rem;\n}\n\n.home img {\n    grid-column-start: 2;\n    grid-row: 1 / span 2;\n\n    height: calc(200px + 30vw);\n}\n\n.home p {\n    align-self: start;\n}\n\n/* menu */\n.menu {\n    width: 75%;\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    padding: 2rem;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px ,1fr));\n    gap: 2rem;\n}\n\n.menu .item {\n    height: 300px;\n    padding: .5rem;\n    font-size: 1rem;\n    border: double 10px black;\n    text-align: center;\n\n    display: grid;\n    grid-template-columns: auto 1fr;\n    grid-template-rows: auto 1fr auto;\n    place-items: center;\n    gap: .5rem;\n    \n}\n\n.menu img {\n    height: 262px;\n    grid-row: 2 / span 2;\n}\n\n.item > p:first-of-type {\n    font-size: 1.5rem;\n    font-weight: bold;\n    text-decoration: underline 2px rgba(0,0,0, .5);\n    grid-row-start: 1;\n    grid-column: 1 / span 2;\n}\n\n.item > button {\n    position: relative;\n    font-size: 1.5rem;\n    background-color: var(--darker-accent-color);\n    border-radius: 15px;\n    border: none;\n    padding: 0px .5rem;\n    width: 130px;\n    cursor: pointer;\n    \n    \n    justify-self: end;\n    align-self: end;\n}\n\n.item > button:hover {\n    scale: 1.05;\n    color: var(--darker-accent-color);\n    box-shadow: inset 0px 0px 3px var(--accent-color),\n        0px 0px 3px var(--accent-color);\n}\n\n.item > button:hover::before {\n    position: absolute;\n    content: \"Add To Cart\";\n    font-size: 1.2rem;\n    background-color: var(--darker-accent-color); \n    color: black;\n    top: 3px;\n    left: 13px;\n    border-radius: 15px;\n    \n}\n\n\n/* contact */\n.contact {\n    box-sizing: border-box;\n    width: min(90%, 1200px);\n    background-color: beige;\n    box-shadow: 0 0 10px rgba(0, 0, 0, .5);\n    margin: 1rem;\n    padding: calc(1rem + 5vw);\n    text-align: center;\n    \n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n}\n\n.contact > div > p:nth-child(2n - 1) {\n    font-weight: bold;\n}\n\n.contact p {\n    display: block;\n    line-height: 2rem;\n    background-color: rgba(145, 145, 145, 0.1);\n}\n\n.contact h3 {\n    font-size: 1.5rem;\n    text-decoration: underline 2px;\n    margin: 0 0 -1.5rem 0;\n}\n\n"],"sourceRoot":""}]);
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

/***/ "./src/images/facebook.svg":
/*!*********************************!*\
  !*** ./src/images/facebook.svg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/facebook.svg");

/***/ }),

/***/ "./src/images/guillermo-casales-0rgv5ydipU8-unsplash.jpg":
/*!***************************************************************!*\
  !*** ./src/images/guillermo-casales-0rgv5ydipU8-unsplash.jpg ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/guillermo-casales-0rgv5ydipU8-unsplash.jpg");

/***/ }),

/***/ "./src/images/instagram.svg":
/*!**********************************!*\
  !*** ./src/images/instagram.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/instagram.svg");

/***/ }),

/***/ "./src/images/rabbit-7040066.svg":
/*!***************************************!*\
  !*** ./src/images/rabbit-7040066.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/rabbit-7040066.svg");

/***/ }),

/***/ "./src/images/twitter.svg":
/*!********************************!*\
  !*** ./src/images/twitter.svg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "./images/twitter.svg");

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

function loadContact() {
    const main = document.querySelector(".main");
    main.textContent = "";
    
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
        const headline = document.createElement("h2");
        headline.textContent = "Quality sourced ingredients shipped right to your door!";
        return headline;
    }

    const text = () => {
        const txt = document.createElement("p");
        txt.textContent = "This is your one stop shop for your rabbit's nutritional needs.";
        return txt;
    }

    const img = () => {
        const img = document.createElement("img");
        img.src = _images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
        img.alt = "rabbit eating from bowl";
        return img;
    }

    return {
        headline,
        text,
        img,
    }
})();

function loadHome(){
    const main = document.querySelector(".main");
    main.textContent = "";
    
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


function createMenuItem(imageLocation, title, description, price) {
    const item = document.createElement("div");
    item.classList.add("item");
    
    const imageElement = () => {
        const element = document.createElement("img");
        element.src = imageLocation;
        return element; 
    }

    const titleElement = () => {
        const element = document.createElement("p");
        element.textContent = title;
        return element;
    }

    const descriptElement = () => {
        const element = document.createElement("p");
        element.textContent = description;
        return element;
    }

    const costElement = () => {
        const element = document.createElement("button");
        element.textContent = "$" + price;
        return element;
    }

    item.appendChild(imageElement());
    item.appendChild(titleElement());
    item.appendChild(descriptElement());
    item.appendChild(costElement());

    return item;
}

const menuList = (() => {
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
menuList.addToMenu(
    createMenuItem(_images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], 
        "Timothy Hay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        "1.99"),

    createMenuItem(_images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], 
        "Timothy Hay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        "12.00"),

    createMenuItem(_images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], 
        "Timothy Hay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        "25.50"),

    createMenuItem(_images_guillermo_casales_0rgv5ydipU8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__["default"], 
        "Timothy Hay",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit", 
        "11.12"),
);



function loadMenu() {
    const main = document.querySelector(".main");
    main.textContent = "";
    
    const menuElement = document.createElement("div");
    menuElement.classList.add("menu");

    menuList.fullMenu.forEach(item => {
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
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad),
/* harmony export */   "getTabs": () => (/* binding */ getTabs)
/* harmony export */ });
/* harmony import */ var _images_rabbit_7040066_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/rabbit-7040066.svg */ "./src/images/rabbit-7040066.svg");
/* harmony import */ var _images_facebook_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/facebook.svg */ "./src/images/facebook.svg");
/* harmony import */ var _images_instagram_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/instagram.svg */ "./src/images/instagram.svg");
/* harmony import */ var _images_twitter_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/twitter.svg */ "./src/images/twitter.svg");






function headerTabItems() {
    const ul = document.createElement("ul");

    const home = document.createElement("li");
    home.textContent = "Home";
    home.setAttribute("id", "home");
    home.classList.add("selected");
    ul.appendChild(home)

    const menu = document.createElement("li");
    menu.textContent = "Menu";
    menu.setAttribute("id", "menu");
    ul.appendChild(menu)

    const contact = document.createElement("li");
    contact.textContent = "Contact";
    contact.setAttribute("id", "contact");
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
    icon.style.background = `rgba(0, 0, 0, .75) url(${_images_rabbit_7040066_svg__WEBPACK_IMPORTED_MODULE_0__["default"]}) no-repeat center`;

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
    
    const facebook = document.createElement("li")
    facebook.style.background = `url(${_images_facebook_svg__WEBPACK_IMPORTED_MODULE_1__["default"]}) no-repeat center/100%`;
    ul.appendChild(facebook);

    const instagram = document.createElement("li")
    instagram.style.background = `url(${_images_instagram_svg__WEBPACK_IMPORTED_MODULE_2__["default"]}) no-repeat center/100%`;
    ul.appendChild(instagram);

    const twitter = document.createElement("li")
    twitter.style.background = `url(${_images_twitter_svg__WEBPACK_IMPORTED_MODULE_3__["default"]}) no-repeat center/100%`;
    ul.appendChild(twitter);

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

const getTabs = () => document.querySelectorAll(".header li");



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






init();

function changePage(e) {
    switch (e.target.id) {
        case "home":
            (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.loadHome)();
            break;
        case "menu":
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.loadMenu)();
            break;
        case "contact":
            (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.loadContact)();
            break;
    }
    changePageHighlight(e);
}

function addListeners() {
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.getTabs)().forEach(tab => {
        tab.addEventListener("click", changePage);
    })
}

function changePageHighlight(e) {
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.getTabs)().forEach(tab => {
        if (tab.classList == "selected") {
            tab.classList.toggle("selected");
        }
    })
    e.target.classList.toggle("selected");
}

function init() {
    (0,_page_load_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)();
    (0,_home_js__WEBPACK_IMPORTED_MODULE_2__.loadHome)();
    addListeners();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNvQztBQUN0QjtBQUNBO0FBQ007O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksa0RBQVE7QUFDcEI7QUFDQTtBQUNBLFlBQVksd0RBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHNEQUFJO0FBQ1I7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxJQUFJLHNEQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHVEQUFRO0FBQ1osSUFBSSxrREFBUTtBQUNaO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9mYWNlYm9vay5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9ndWlsbGVybW8tY2FzYWxlcy0wcmd2NXlkaXBVOC11bnNwbGFzaC5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ltYWdlcy9pbnN0YWdyYW0uc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvcmFiYml0LTcwNDAwNjYuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbWFnZXMvdHdpdHRlci5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2UtbG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgICAtLWFjY2VudC1jb2xvcjogIzE4RjU4QztcXG4gICAgLS1kYXJrZXItYWNjZW50LWNvbG9yOiByZ2IoMTAyLCAxODcsIDEwMik7XFxuICAgIC0tbWFpbi1iZy1jb2xvcjogI0MyNTEwMDtcXG4gICAgLS1oZi1iZy1jb2xvcjogI0Y1QUMxODtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIsIC5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJnLWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyLjc1cmVtO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC41cmVtO1xcbiAgICBib3R0b206IDFweDtcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHZhcigtLWRhcmtlci1hY2NlbnQtY29sb3IpO1xcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IGJsYWNrO1xcbiAgICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxufVxcblxcbnVsIHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgbGkge1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZi1iZy1jb2xvcik7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyIGxpOmhvdmVyLCAuaWNvbjpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcblxcbi5pY29uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogLjc1cmVtO1xcbiAgICB0b3A6IC41cmVtO1xcblxcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmZvb3RlciBsaSB7XFxuICAgIGhlaWdodDogODAlO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xcbn1cXG5cXG5saTpob3ZlciAsIC5pY29uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIGxpOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggdmFyKC0tYWNjZW50LWNvbG9yKSxcXG4gICAgICAgIDBweCAwcHggM3B4IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIHNjYWxlOiAxLjE7XFxufVxcblxcbi5zZWxlY3RlZCB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDNweCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmbGV4OiAxO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLyogaG9tZSAqL1xcbi5ob21lIHtcXG4gICAgd2lkdGg6IG1pbig5MCUsIDE0MDBweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgbWFyZ2luOiAxcmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IC41cmVtIC41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDFyZW07XFxufVxcblxcbi5ob21lIGltZyB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgICBncmlkLXJvdzogMSAvIHNwYW4gMjtcXG5cXG4gICAgaGVpZ2h0OiBjYWxjKDIwMHB4ICsgMzB2dyk7XFxufVxcblxcbi5ob21lIHAge1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLyogbWVudSAqL1xcbi5tZW51IHtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHggLDFmcikpO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5tZW51IC5pdGVtIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYm9yZGVyOiBkb3VibGUgMTBweCBibGFjaztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIFxcbn1cXG5cXG4ubWVudSBpbWcge1xcbiAgICBoZWlnaHQ6IDI2MnB4O1xcbiAgICBncmlkLXJvdzogMiAvIHNwYW4gMjtcXG59XFxuXFxuLml0ZW0gPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDJweCByZ2JhKDAsMCwwLCAuNSk7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcXG59XFxuXFxuLml0ZW0gPiBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItYWNjZW50LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiAwcHggLjVyZW07XFxuICAgIHdpZHRoOiAxMzBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBcXG4gICAgXFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5pdGVtID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgc2NhbGU6IDEuMDU7XFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrZXItYWNjZW50LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAzcHggdmFyKC0tYWNjZW50LWNvbG9yKSxcXG4gICAgICAgIDBweCAwcHggM3B4IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5pdGVtID4gYnV0dG9uOmhvdmVyOjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbnRlbnQ6IFxcXCJBZGQgVG8gQ2FydFxcXCI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrZXItYWNjZW50LWNvbG9yKTsgXFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDEzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIFxcbn1cXG5cXG5cXG4vKiBjb250YWN0ICovXFxuLmNvbnRhY3Qge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTIwMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHBhZGRpbmc6IGNhbGMoMXJlbSArIDV2dyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbi5jb250YWN0ID4gZGl2ID4gcDpudGgtY2hpbGQoMm4gLSAxKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGFjdCBwIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0NSwgMTQ1LCAxNDUsIDAuMSk7XFxufVxcblxcbi5jb250YWN0IGgzIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDJweDtcXG4gICAgbWFyZ2luOiAwIDAgLTEuNXJlbSAwO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGFBQWE7SUFDYixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixvQ0FBb0M7O0lBRXBDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLG1EQUFtRDtJQUNuRCw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG9DQUFvQzs7SUFFcEMsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixVQUFVOztJQUVWLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7dUNBQ21DO0lBQ25DLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxPQUFPOztJQUVQLHNDQUFzQztJQUN0QyxjQUFjOztJQUVkLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUEsU0FBUztBQUNUO0lBQ0ksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixvQkFBb0I7O0lBRXBCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLG9CQUFvQjs7SUFFcEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLFNBQVM7QUFDVDtJQUNJLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixhQUFhOztJQUViLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsbUJBQW1CO0lBQ25CLFVBQVU7O0FBRWQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw4Q0FBOEM7SUFDOUMsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlOzs7SUFHZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakM7dUNBQ21DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtJQUNWLG1CQUFtQjs7QUFFdkI7OztBQUdBLFlBQVk7QUFDWjtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjs7O0lBR2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9VWJ1bnR1OndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICAgIC0tYWNjZW50LWNvbG9yOiAjMThGNThDO1xcbiAgICAtLWRhcmtlci1hY2NlbnQtY29sb3I6IHJnYigxMDIsIDE4NywgMTAyKTtcXG4gICAgLS1tYWluLWJnLWNvbG9yOiAjQzI1MTAwO1xcbiAgICAtLWhmLWJnLWNvbG9yOiAjRjVBQzE4O1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRlciwgLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGYtYmctY29sb3IpO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDIuNzVyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLjVyZW07XFxuICAgIGJvdHRvbTogMXB4O1xcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tZGFya2VyLWFjY2VudC1jb2xvcik7XFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDJweDtcXG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciBsaSB7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhmLWJnLWNvbG9yKTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgbGk6aG92ZXIsIC5pY29uOmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgc2NhbGU6IDEuMTtcXG59XFxuXFxuLmljb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAuNzVyZW07XFxuICAgIHRvcDogLjVyZW07XFxuXFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4uZm9vdGVyIGxpIHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAzMCU7XFxufVxcblxcbmxpOmhvdmVyICwgLmljb246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIgbGk6aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCB2YXIoLS1hY2NlbnQtY29sb3IpLFxcbiAgICAgICAgMHB4IDBweCAzcHggdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgc2NhbGU6IDEuMTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgM3B4IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGZsZXg6IDE7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmctY29sb3IpO1xcbiAgICB3aWR0aDogaW5oZXJpdDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKiBob21lICovXFxuLmhvbWUge1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTQwMHB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xcbiAgICBtYXJnaW46IDFyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogLjVyZW0gLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMXJlbTtcXG59XFxuXFxuLmhvbWUgaW1nIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAgIGdyaWQtcm93OiAxIC8gc3BhbiAyO1xcblxcbiAgICBoZWlnaHQ6IGNhbGMoMjAwcHggKyAzMHZ3KTtcXG59XFxuXFxuLmhvbWUgcCB7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4vKiBtZW51ICovXFxuLm1lbnUge1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogMnJlbTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCAsMWZyKSk7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLm1lbnUgLml0ZW0ge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBwYWRkaW5nOiAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBib3JkZXI6IGRvdWJsZSAxMHB4IGJsYWNrO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAuNXJlbTtcXG4gICAgXFxufVxcblxcbi5tZW51IGltZyB7XFxuICAgIGhlaWdodDogMjYycHg7XFxuICAgIGdyaWQtcm93OiAyIC8gc3BhbiAyO1xcbn1cXG5cXG4uaXRlbSA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4IHJnYmEoMCwwLDAsIC41KTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbn1cXG5cXG4uaXRlbSA+IGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1hY2NlbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDBweCAuNXJlbTtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIFxcbiAgICBcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG59XFxuXFxuLml0ZW0gPiBidXR0b246aG92ZXIge1xcbiAgICBzY2FsZTogMS4wNTtcXG4gICAgY29sb3I6IHZhcigtLWRhcmtlci1hY2NlbnQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDNweCB2YXIoLS1hY2NlbnQtY29sb3IpLFxcbiAgICAgICAgMHB4IDBweCAzcHggdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLml0ZW0gPiBidXR0b246aG92ZXI6OmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29udGVudDogXFxcIkFkZCBUbyBDYXJ0XFxcIjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtlci1hY2NlbnQtY29sb3IpOyBcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogMTNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgXFxufVxcblxcblxcbi8qIGNvbnRhY3QgKi9cXG4uY29udGFjdCB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiBtaW4oOTAlLCAxMjAwcHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAuNSk7XFxuICAgIG1hcmdpbjogMXJlbTtcXG4gICAgcGFkZGluZzogY2FsYygxcmVtICsgNXZ3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuLmNvbnRhY3QgPiBkaXYgPiBwOm50aC1jaGlsZCgybiAtIDEpIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb250YWN0IHAge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQ1LCAxNDUsIDE0NSwgMC4xKTtcXG59XFxuXFxuLmNvbnRhY3QgaDMge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgMnB4O1xcbiAgICBtYXJnaW46IDAgMCAtMS41cmVtIDA7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9pbWFnZXMvZmFjZWJvb2suc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL2d1aWxsZXJtby1jYXNhbGVzLTByZ3Y1eWRpcFU4LXVuc3BsYXNoLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy9pbnN0YWdyYW0uc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vaW1hZ2VzL3JhYmJpdC03MDQwMDY2LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2ltYWdlcy90d2l0dGVyLnN2Z1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVQYWlyZWRQYXJhZ3JhcGgodGl0bGUsIGNvbnRlbnQpIHtcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZpcnN0LnRleHRDb250ZW50ID0gdGl0bGU7XG5cbiAgICBjb25zdCBzZWNvbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzZWNvbmQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmlyc3QsXG4gICAgICAgIHNlY29uZFxuICAgIH1cbn1cblxuY29uc3QgY29udGFjdFNlY3Rpb24gPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxuXG4gICAgY29uc3QgZGV0YWlsV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgXG4gICAgY29uc3QgcGhvbmUgPSBjcmVhdGVQYWlyZWRQYXJhZ3JhcGgoXCJQaG9uZTpcIiwgXCJYWFgtWFhYLVhYWFhcIik7XG4gICAgY29uc3QgZW1haWwgPSBjcmVhdGVQYWlyZWRQYXJhZ3JhcGgoXCJFbWFpbDpcIiwgXCJpbmZvQGhheWdvdXJtZXQuY29tXCIpXG5cbiAgICBkZXRhaWxXcmFwcGVyLmFwcGVuZENoaWxkKHBob25lLmZpcnN0KTtcbiAgICBkZXRhaWxXcmFwcGVyLmFwcGVuZENoaWxkKHBob25lLnNlY29uZCk7XG4gICAgZGV0YWlsV3JhcHBlci5hcHBlbmRDaGlsZChlbWFpbC5maXJzdCk7XG4gICAgZGV0YWlsV3JhcHBlci5hcHBlbmRDaGlsZChlbWFpbC5zZWNvbmQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29udGFjdFRpdGxlLFxuICAgICAgICBkZXRhaWxXcmFwcGVyLFxuICAgIH1cblxufSkoKTtcblxuY29uc3QgZGlyZWN0b25TZWN0aW9uID0gKCgpID0+IHtcbiAgICBjb25zdCBkaXJlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBkaXJlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiRGlyZWN0aW9uc1wiO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBmYWtlQXJlYURpcmVjdGlvbnMgPSBjcmVhdGVQYWlyZWRQYXJhZ3JhcGgoXCJGcm9tIEZha2UgQXJlYTpcIiwgXCJUYWtlIE9uZSBQa3d5IE5vcnRoIHRvIFJvdXRlIDEuNS4gVGFrZSBSb3V0ZSAxLjUgTm9ydGggdG8gdGhlIFZFUlkgRU5EIGluIFJhYmJpdHZpbGxlLiAoRG8gbm90IHRha2UgQU5ZIGV4aXRzIG9mZiBvZiBSb3V0ZSAxLjUpLiBJbiBSYWJiaXR2aWxsZSwgUm91dGUgMS41IHJ1bnMgaW50byBhbmQgQkVDT01FUyBSb3V0ZSAyIE5vcnRoICh0b3dhcmRzIERvZ3Rvd24pLiBDb250aW51ZSBOb3J0aCBvbiBSb3V0ZSAyIGZvciAxLzIgbWlsZS4gSGF5IEdvdXJtZXQgd2lsbCBiZSBvbiB5b3VyIHJpZ2h0LlwiKTtcbiAgICBjb25zdCBhbm90aGVyRmFrZUFyZWFEaXJlY3Rpb25zID0gY3JlYXRlUGFpcmVkUGFyYWdyYXBoKFwiRnJvbSBBbm90aGVyIEZha2UgQXJlYTpcIiwgXCJUYWtlIDEwMDAgV2VzdCB0byBFeGl0IDUwIGludG8gUm91dGUgMiBOb3J0aCBhbmQgRG9ndG93bi4gRHJpdmUgMS8yIG1pbGVzIGFuZCBIYXkgR291cm1ldCB3aWxsIGJlIG9uIHlvdXIgcmlnaHQuXCIpO1xuICAgIGNvbnN0IG9uZU1vcmVNYWtlQXJlYURpcmVjdGlvbnMgPSBjcmVhdGVQYWlyZWRQYXJhZ3JhcGgoXCJGcm9tIE9uZSBNb3JlIEZha2UgQXJlYTpcIiwgXCJUYWtlIDEwMDAgRWFzdCB0byBFeGl0IDQwIE4gKG5vcnRoKS4gRm9sbG93IHNpZ25zIHRvIFJvdXRlIDIgTm9ydGggYW5kIERvZ3Rvd24uIERyaXZlIDEvMiBtaWxlcyBhbmQgSGF5IEdvdXJtZXQgd2lsbCBiZSBvbiB5b3VyIHJpZ2h0LlwiKTtcblxuICAgIGRpcmVjdGlvbldyYXBwZXIuYXBwZW5kQ2hpbGQoZmFrZUFyZWFEaXJlY3Rpb25zLmZpcnN0KTtcbiAgICBkaXJlY3Rpb25XcmFwcGVyLmFwcGVuZENoaWxkKGZha2VBcmVhRGlyZWN0aW9ucy5zZWNvbmQpO1xuICAgIGRpcmVjdGlvbldyYXBwZXIuYXBwZW5kQ2hpbGQoYW5vdGhlckZha2VBcmVhRGlyZWN0aW9ucy5maXJzdCk7XG4gICAgZGlyZWN0aW9uV3JhcHBlci5hcHBlbmRDaGlsZChhbm90aGVyRmFrZUFyZWFEaXJlY3Rpb25zLnNlY29uZCk7XG4gICAgZGlyZWN0aW9uV3JhcHBlci5hcHBlbmRDaGlsZChvbmVNb3JlTWFrZUFyZWFEaXJlY3Rpb25zLmZpcnN0KTtcbiAgICBkaXJlY3Rpb25XcmFwcGVyLmFwcGVuZENoaWxkKG9uZU1vcmVNYWtlQXJlYURpcmVjdGlvbnMuc2Vjb25kKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGlvblRpdGxlLFxuICAgICAgICBkaXJlY3Rpb25XcmFwcGVyLFxuICAgIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgXG4gICAgY29uc3QgY29udGFjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gICAgY29udGFjdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24uY29udGFjdFRpdGxlKTtcbiAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWN0U2VjdGlvbi5kZXRhaWxXcmFwcGVyKTtcbiAgICBjb250YWN0RWxlbWVudC5hcHBlbmRDaGlsZChkaXJlY3RvblNlY3Rpb24uZGlyZWN0aW9uVGl0bGUpO1xuICAgIGNvbnRhY3RFbGVtZW50LmFwcGVuZENoaWxkKGRpcmVjdG9uU2VjdGlvbi5kaXJlY3Rpb25XcmFwcGVyKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdEVsZW1lbnQpO1xufVxuXG5leHBvcnQge2xvYWRDb250YWN0fSIsImltcG9ydCBidW5ueSBmcm9tICcuL2ltYWdlcy9ndWlsbGVybW8tY2FzYWxlcy0wcmd2NXlkaXBVOC11bnNwbGFzaC5qcGcnO1xuXG5jb25zdCBob21lQ29udGVudCA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGxpbmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiUXVhbGl0eSBzb3VyY2VkIGluZ3JlZGllbnRzIHNoaXBwZWQgcmlnaHQgdG8geW91ciBkb29yIVwiO1xuICAgICAgICByZXR1cm4gaGVhZGxpbmU7XG4gICAgfVxuXG4gICAgY29uc3QgdGV4dCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHR4dC50ZXh0Q29udGVudCA9IFwiVGhpcyBpcyB5b3VyIG9uZSBzdG9wIHNob3AgZm9yIHlvdXIgcmFiYml0J3MgbnV0cml0aW9uYWwgbmVlZHMuXCI7XG4gICAgICAgIHJldHVybiB0eHQ7XG4gICAgfVxuXG4gICAgY29uc3QgaW1nID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWcuc3JjID0gYnVubnk7XG4gICAgICAgIGltZy5hbHQgPSBcInJhYmJpdCBlYXRpbmcgZnJvbSBib3dsXCI7XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaGVhZGxpbmUsXG4gICAgICAgIHRleHQsXG4gICAgICAgIGltZyxcbiAgICB9XG59KSgpO1xuXG5mdW5jdGlvbiBsb2FkSG9tZSgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQuaGVhZGxpbmUoKSk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChob21lQ29udGVudC50ZXh0KCkpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQuaW1nKCkpO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lKTtcbn1cblxuZXhwb3J0IHtsb2FkSG9tZX0iLCJpbXBvcnQgYnVubnkgZnJvbSAnLi9pbWFnZXMvZ3VpbGxlcm1vLWNhc2FsZXMtMHJndjV5ZGlwVTgtdW5zcGxhc2guanBnJztcblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0oaW1hZ2VMb2NhdGlvbiwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XG4gICAgXG4gICAgY29uc3QgaW1hZ2VFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgZWxlbWVudC5zcmMgPSBpbWFnZUxvY2F0aW9uO1xuICAgICAgICByZXR1cm4gZWxlbWVudDsgXG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgZGVzY3JpcHRFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgY29zdEVsZW1lbnQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gXCIkXCIgKyBwcmljZTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQoKSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQoKSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChkZXNjcmlwdEVsZW1lbnQoKSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChjb3N0RWxlbWVudCgpKTtcblxuICAgIHJldHVybiBpdGVtO1xufVxuXG5jb25zdCBtZW51TGlzdCA9ICgoKSA9PiB7XG4gICAgY29uc3QgZnVsbE1lbnUgPSBbXTtcblxuICAgIGNvbnN0IGFkZFRvTWVudSA9ICguLi5pdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGZ1bGxNZW51LnB1c2goaXRlbSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZnVsbE1lbnUsXG4gICAgICAgIGFkZFRvTWVudSxcbiAgICB9ICAgIFxufSkoKTtcblxuLyogYWRkIG1lbnUgaXRlbXMgaGVyZSAqL1xubWVudUxpc3QuYWRkVG9NZW51KFxuICAgIGNyZWF0ZU1lbnVJdGVtKGJ1bm55LCBcbiAgICAgICAgXCJUaW1vdGh5IEhheVwiLFxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXRcIiwgXG4gICAgICAgIFwiMS45OVwiKSxcblxuICAgIGNyZWF0ZU1lbnVJdGVtKGJ1bm55LCBcbiAgICAgICAgXCJUaW1vdGh5IEhheVwiLFxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXRcIiwgXG4gICAgICAgIFwiMTIuMDBcIiksXG5cbiAgICBjcmVhdGVNZW51SXRlbShidW5ueSwgXG4gICAgICAgIFwiVGltb3RoeSBIYXlcIixcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0XCIsIFxuICAgICAgICBcIjI1LjUwXCIpLFxuXG4gICAgY3JlYXRlTWVudUl0ZW0oYnVubnksIFxuICAgICAgICBcIlRpbW90aHkgSGF5XCIsXG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdFwiLCBcbiAgICAgICAgXCIxMS4xMlwiKSxcbik7XG5cblxuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIFxuICAgIGNvbnN0IG1lbnVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnVMaXN0LmZ1bGxNZW51LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIG1lbnVFbGVtZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51RWxlbWVudCk7XG59XG5cbmV4cG9ydCB7bG9hZE1lbnV9IiwiaW1wb3J0IGJ1bm55SWNvbiBmcm9tICcuL2ltYWdlcy9yYWJiaXQtNzA0MDA2Ni5zdmcnXG5pbXBvcnQgZmFjZWJvb2tJY29uIGZyb20gJy4vaW1hZ2VzL2ZhY2Vib29rLnN2ZydcbmltcG9ydCBpbnN0YWdyYW1JY29uIGZyb20gJy4vaW1hZ2VzL2luc3RhZ3JhbS5zdmcnXG5pbXBvcnQgdHdpdHRlckljb24gZnJvbSAnLi9pbWFnZXMvdHdpdHRlci5zdmcnXG5cblxuZnVuY3Rpb24gaGVhZGVyVGFiSXRlbXMoKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBob21lLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZVwiKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB1bC5hcHBlbmRDaGlsZChob21lKVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gICAgdWwuYXBwZW5kQ2hpbGQobWVudSlcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpO1xuICAgIHVsLmFwcGVuZENoaWxkKGNvbnRhY3QpXG5cbiAgICByZXR1cm4gdWw7XG59XG5cbmZ1bmN0aW9uIGhlYWRlclRpdGxlKCkge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJIYXkgR291cm1ldFwiO1xuXG4gICAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBoZWFkZXJJY29uKCkge1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kID0gYHJnYmEoMCwgMCwgMCwgLjc1KSB1cmwoJHtidW5ueUljb259KSBuby1yZXBlYXQgY2VudGVyYDtcblxuICAgIHJldHVybiBpY29uO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgICBcbiAgICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUoKSk7XG4gICAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlclRhYkl0ZW1zKCkpO1xuICAgIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJJY29uKCkpO1xuXG4gICAgcmV0dXJuIGhlYWRlckNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZm9vdGVySXRlbXMoKSB7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgXG4gICAgY29uc3QgZmFjZWJvb2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBmYWNlYm9vay5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ZhY2Vib29rSWNvbn0pIG5vLXJlcGVhdCBjZW50ZXIvMTAwJWA7XG4gICAgdWwuYXBwZW5kQ2hpbGQoZmFjZWJvb2spO1xuXG4gICAgY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgaW5zdGFncmFtLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW5zdGFncmFtSWNvbn0pIG5vLXJlcGVhdCBjZW50ZXIvMTAwJWA7XG4gICAgdWwuYXBwZW5kQ2hpbGQoaW5zdGFncmFtKTtcblxuICAgIGNvbnN0IHR3aXR0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICB0d2l0dGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7dHdpdHRlckljb259KSBuby1yZXBlYXQgY2VudGVyLzEwMCVgO1xuICAgIHVsLmFwcGVuZENoaWxkKHR3aXR0ZXIpO1xuXG4gICAgcmV0dXJuIHVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcblxuICAgIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb290ZXJJdGVtcygpKTtcblxuICAgIHJldHVybiBmb290ZXJDb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIHBhZ2VMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuY29uc3QgZ2V0VGFicyA9ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyIGxpXCIpO1xuXG5leHBvcnQge3BhZ2VMb2FkLCBnZXRUYWJzfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtwYWdlTG9hZCwgZ2V0VGFicyBhcyB0YWJzfSBmcm9tICcuL3BhZ2UtbG9hZC5qcyc7XG5pbXBvcnQge2xvYWRIb21lfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IHtsb2FkTWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7bG9hZENvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmluaXQoKTtcblxuZnVuY3Rpb24gY2hhbmdlUGFnZShlKSB7XG4gICAgc3dpdGNoIChlLnRhcmdldC5pZCkge1xuICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgbG9hZEhvbWUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwibWVudVwiOlxuICAgICAgICAgICAgbG9hZE1lbnUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY29udGFjdFwiOlxuICAgICAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjaGFuZ2VQYWdlSGlnaGxpZ2h0KGUpO1xufVxuXG5mdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgdGFicygpLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VQYWdlKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQYWdlSGlnaGxpZ2h0KGUpIHtcbiAgICB0YWJzKCkuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICBpZiAodGFiLmNsYXNzTGlzdCA9PSBcInNlbGVjdGVkXCIpIHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XG4gICAgICAgIH1cbiAgICB9KVxuICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoXCJzZWxlY3RlZFwiKTtcbn1cblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBwYWdlTG9hZCgpO1xuICAgIGxvYWRIb21lKCk7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=