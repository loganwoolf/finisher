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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Gruppo&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: sans-serif;\n  /* prevent jumping when app is longer than screen */\n  /* overflow-y: scroll; */\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  min-height: 100vh;\n}\np {\n  margin: 0;\n}\n\nheader {\n  font-family: 'Gruppo', cursive;\n  text-transform: uppercase;\n  letter-spacing: 0.7rem;\n  display: flex;\n  justify-content: center;\n}\nheader h1 {\ntext-align: right;\n}\nheader h1::before {\n  margin-left: 0.7rem;\n  content: '[ [ ';\n}\nheader h1::after {\n  content: ' ] ]';\n}\nheader h2 {\n  font-size: 1.2rem;\n}\n\nfooter {\n  font-family: monospace;\n  background-color: black;\n  color: white;\n  text-align: center;\n  padding: 1.5rem;\n}\n.zoom {\n  font-family: monospace;\n  display: inline-block;\n  color: lightblue;\n  text-decoration: none;\n  margin-top: 0.3rem;\n  transition: all 60ms linear;\n}\n.zoom:hover {\n  transform: rotate(-5deg) scale(1.15);\n  color: cyan;\n}\n\n.app {\n  margin: 0 auto;\n  min-width: 350px;\n  display: grid;\n  grid-template-columns: max-content auto;\n}\n\n.project-tabs {\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  gap: 3px;\n}\n\n.project-tab {\n  font-size: 18px;\n  height: 4rem;\n  min-width: 5rem;\n  border: 2px solid grey;\n  border-left: 5px solid grey;\n  border-right: none;\n  border-radius: 6% 0 0 6%;\n  background: hsla(220, 30%, 70%, 40%);\n}\n\n.project-tab input {\n  width: 3ch;\n  background: unset;\n  border: unset;\n  outline: unset;\n  text-align: center;\n}\n.active-project-tab {\n  background: white;\n  border-left: 5px solid green;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  border: 2px solid grey;\n  padding: 1rem 1.5rem;\n}\n.task-element {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border: 2px solid grey;\n  padding: 0.5rem;\n}\n.task-top-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 0.5rem;\n}\n.task-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.task-title {\n  min-width: 12ch;\n  margin-right: auto;\n  padding: 0.5rem;\n}\n.task-top-container button, .task-top-container label {\n  font-size: 1.2rem;\n  padding: 0.5rem 1rem;\n  border: 2px solid grey;\n  background: none;\n}\n/* hide default checkbox */\n.task-status input {\n  opacity: 0;\n  height: 0;\n  width: 0;\n  position: absolute;\n}\n/* custom checkbox */\n.checkbox {\n  height: 1.437rem;\n  width: 1.2rem;\n  transition: all 0.08s ease-in-out;\n}\n.task-status input ~ .checkbox:before {\n  content: '✅';\n  opacity: 0.2;\n}\n.task-status input:hover ~ .checkbox:before {\n  content: '✅';\n  opacity: 0.4;\n}\n.task-status input:checked ~ .checkbox:before {\n  content: '✅';\n  opacity: 1;\n}\n.task-status input:checked:hover ~ .checkbox:before {\n  opacity: 0.9;\n}\n\n/* end custom checkbox */\n.task-info {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid grey;\n  padding: 0.5rem;\n}\n.task-property {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.property-name {\n  font-size: 0.5rem;\n}\n.property-value {\n  font-size: 0.7rem;\n}\n.task-action button {\n  border: none;\n  background: none;\n  opacity: 0.4;\n  transition: all 0.08s ease-in-out;\n  font-size: 1.3rem;\n}\n.task-action button:hover {\n  opacity: 1;\n  transform: rotate(100deg);\n}\n.delete-button { \n  /* buttons at bottom of project view and task details view */\n  background: unset;\n  border: 2px solid grey;\n  margin-left: auto;\n  min-width: 3.5rem;\n  font-size: 1.3rem;\n}\n.create-task {\n  font-family: sans-serif;\n  border: 2px solid grey;\n  background: none;\n  padding: 1.25rem 1rem;\n  font-size: 1rem;\n  text-align: unset;\n}\n#new-task-name {\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  font-family: sans-serif;\n}\n.pop-out {\n  box-shadow: -1px 1px 2px grey;\n}\n.animate-out {\n  box-shadow: -1px 1px 2px grey;\n  transition: all 0.07s ease-in-out;\n}\n.animate-out:hover {\n  transform: translateX(1px) translateY(-1px);\n  box-shadow: -3px 3px 3px grey;\n}\n\n.hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Gruppo&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: sans-serif;\n  /* prevent jumping when app is longer than screen */\n  /* overflow-y: scroll; */\n  display: grid;\n  grid-template-rows: auto auto 1fr auto;\n  min-height: 100vh;\n}\np {\n  margin: 0;\n}\n\nheader {\n  font-family: 'Gruppo', cursive;\n  text-transform: uppercase;\n  letter-spacing: 0.7rem;\n  display: flex;\n  justify-content: center;\n}\nheader h1 {\ntext-align: right;\n}\nheader h1::before {\n  margin-left: 0.7rem;\n  content: '[ [ ';\n}\nheader h1::after {\n  content: ' ] ]';\n}\nheader h2 {\n  font-size: 1.2rem;\n}\n\nfooter {\n  font-family: monospace;\n  background-color: black;\n  color: white;\n  text-align: center;\n  padding: 1.5rem;\n}\n.zoom {\n  font-family: monospace;\n  display: inline-block;\n  color: lightblue;\n  text-decoration: none;\n  margin-top: 0.3rem;\n  transition: all 60ms linear;\n}\n.zoom:hover {\n  transform: rotate(-5deg) scale(1.15);\n  color: cyan;\n}\n\n.app {\n  margin: 0 auto;\n  min-width: 350px;\n  display: grid;\n  grid-template-columns: max-content auto;\n}\n\n.project-tabs {\n  display: flex;\n  flex-direction: column;\n  width: max-content;\n  gap: 3px;\n}\n\n.project-tab {\n  font-size: 18px;\n  height: 4rem;\n  min-width: 5rem;\n  border: 2px solid grey;\n  border-left: 5px solid grey;\n  border-right: none;\n  border-radius: 6% 0 0 6%;\n  background: hsla(220, 30%, 70%, 40%);\n}\n\n.project-tab input {\n  width: 3ch;\n  background: unset;\n  border: unset;\n  outline: unset;\n  text-align: center;\n}\n.active-project-tab {\n  background: white;\n  border-left: 5px solid green;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  border: 2px solid grey;\n  padding: 1rem 1.5rem;\n}\n.task-element {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border: 2px solid grey;\n  padding: 0.5rem;\n}\n.task-top-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 0.5rem;\n}\n.task-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.task-title {\n  min-width: 12ch;\n  margin-right: auto;\n  padding: 0.5rem;\n}\n.task-top-container button, .task-top-container label {\n  font-size: 1.2rem;\n  padding: 0.5rem 1rem;\n  border: 2px solid grey;\n  background: none;\n}\n/* hide default checkbox */\n.task-status input {\n  opacity: 0;\n  height: 0;\n  width: 0;\n  position: absolute;\n}\n/* custom checkbox */\n.checkbox {\n  height: 1.437rem;\n  width: 1.2rem;\n  transition: all 0.08s ease-in-out;\n}\n.task-status input ~ .checkbox:before {\n  content: '✅';\n  opacity: 0.2;\n}\n.task-status input:hover ~ .checkbox:before {\n  content: '✅';\n  opacity: 0.4;\n}\n.task-status input:checked ~ .checkbox:before {\n  content: '✅';\n  opacity: 1;\n}\n.task-status input:checked:hover ~ .checkbox:before {\n  opacity: 0.9;\n}\n\n/* end custom checkbox */\n.task-info {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid grey;\n  padding: 0.5rem;\n}\n.task-property {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.property-name {\n  font-size: 0.5rem;\n}\n.property-value {\n  font-size: 0.7rem;\n}\n.task-action button {\n  border: none;\n  background: none;\n  opacity: 0.4;\n  transition: all 0.08s ease-in-out;\n  font-size: 1.3rem;\n}\n.task-action button:hover {\n  opacity: 1;\n  transform: rotate(100deg);\n}\n.delete-button { \n  /* buttons at bottom of project view and task details view */\n  background: unset;\n  border: 2px solid grey;\n  margin-left: auto;\n  min-width: 3.5rem;\n  font-size: 1.3rem;\n}\n.create-task {\n  font-family: sans-serif;\n  border: 2px solid grey;\n  background: none;\n  padding: 1.25rem 1rem;\n  font-size: 1rem;\n  text-align: unset;\n}\n#new-task-name {\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  font-family: sans-serif;\n}\n.pop-out {\n  box-shadow: -1px 1px 2px grey;\n}\n.animate-out {\n  box-shadow: -1px 1px 2px grey;\n  transition: all 0.07s ease-in-out;\n}\n.animate-out:hover {\n  transform: translateX(1px) translateY(-1px);\n  box-shadow: -3px 3px 3px grey;\n}\n\n.hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/layouts/app.js":
/*!****************************!*\
  !*** ./src/layouts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ "./src/layouts/projects.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/createTask */ "./src/modules/createTask.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/layouts/tasks.js");
/* harmony import */ var _modules_utilityFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/utilityFunctions */ "./src/modules/utilityFunctions.js");







const app = (() => {

  function addProjectTabListener () {
    _projects__WEBPACK_IMPORTED_MODULE_1__.projectLayout.tabs.addEventListener('click', determineProjectButtonAction)
  }

	function switchActiveProject (e) {
		// check which project button was clicked
		let elementNumber = [...e.target.parentNode.children].indexOf(e.target)
		// remove active project tab class from previous tab
		const previousProjectTab = document.querySelector('.active-project-tab')
		previousProjectTab?.classList.remove('active-project-tab')

		// update state to new project
		_tasks__WEBPACK_IMPORTED_MODULE_3__.taskLayout.state.updateCurrentProject(elementNumber)

		// remove visible tasks
		const taskElement = document.querySelector('.task-list')
		taskElement.replaceChildren()

		// apply active project tab style
		e.target.classList.add('active-project-tab')

		// render tasks from new current project
		_tasks__WEBPACK_IMPORTED_MODULE_3__.taskLayout.renderCurrentTasks(_tasks__WEBPACK_IMPORTED_MODULE_3__.taskLayout.state.currentProject)

	}

	function createNewProject (e) {
		const newProjectButton = e.target

		// remove active project tab class from previous tab
		const previousProjectTab = document.querySelector('.active-project-tab')
		previousProjectTab?.classList.remove('active-project-tab')

		// apply active project tab style
		e.target.classList.add('active-project-tab')

		// clear innerText of button
		newProjectButton.innerText = null

		// create form on button to take input of new project name
		const field = document.createElement('input')
		field.type = 'text'
		field.addEventListener('input', _modules_utilityFunctions__WEBPACK_IMPORTED_MODULE_4__.utility.growInputField)
		
		const form = document.createElement('form')
		form.appendChild(field)
		newProjectButton.appendChild(form)
		field.focus()

		//
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			// check no other project with that name exists
			//
			//

			// create the project
			const newProjectName = e.target.firstChild.value
			_modules_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(newProjectName)

			// render project tabs again
			_projects__WEBPACK_IMPORTED_MODULE_1__.projectLayout.renderProjectTabs()

			//select the newly made project
			document.querySelector(`[data-project=${newProjectName}`).click()
			//begin creating first task
			document.querySelector('.create-task').click()
		})

	}

	function determineProjectButtonAction (e) {
		// check that only a project button was clicked
		if (e.target.dataset.project) {
			switchActiveProject(e)
		} else if ([...e.target.classList].includes('new-project')) {
			createNewProject(e)
		}
	}

	// check for localStorage entry
if ( JSON.parse(localStorage.getItem('taskList')) === null
	|| JSON.parse(localStorage.getItem('taskList')).length === 0 ) {
	_modules_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject('Main')
	_modules_createTask__WEBPACK_IMPORTED_MODULE_2__.tasks.addTask('Do Odin', 'Main')
} else {
	_tasks__WEBPACK_IMPORTED_MODULE_3__.taskLayout.getLocalStorage()
}
	_tasks__WEBPACK_IMPORTED_MODULE_3__.taskLayout.state.updateCurrentProject(0)

	// render project tabs
	_projects__WEBPACK_IMPORTED_MODULE_1__.projectLayout.renderProjectTabs()
	// render tasks
	_tasks__WEBPACK_IMPORTED_MODULE_3__.taskLayout.renderCurrentTasks(_tasks__WEBPACK_IMPORTED_MODULE_3__.taskLayout.state.currentProject)

	// create layoutElement to pass to index.js
	const layoutElement = document.createElement('main')
	layoutElement.classList.add('app')
	// mount app onto layoutElement
	layoutElement.appendChild(_projects__WEBPACK_IMPORTED_MODULE_1__.projectLayout.tabs)
	layoutElement.appendChild(_tasks__WEBPACK_IMPORTED_MODULE_3__.taskLayout.currentTasks)

	addProjectTabListener()

	return { layoutElement }
})()





/***/ }),

/***/ "./src/layouts/footer.js":
/*!*******************************!*\
  !*** ./src/layouts/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer)
/* harmony export */ });


const footer = ( () => {

  const ATTRIBUTION = 'Built in 🍁 by '
  const LINKTEXT = 'Logan Woolf'
  const GITHUBLINK = 'https://www.github.com/loganwoolf'

  const element = document.createElement('footer')

  const attribution = document.createElement('p')
  attribution.innerHTML = ATTRIBUTION

  const githubLink = document.createElement('a')
  githubLink.classList.add('zoom')
  githubLink.href = GITHUBLINK
  githubLink.innerText = LINKTEXT


  element.appendChild(attribution)
  element.appendChild(githubLink)
  
  return { element }

} ) ()



/***/ }),

/***/ "./src/layouts/header.js":
/*!*******************************!*\
  !*** ./src/layouts/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header)
/* harmony export */ });


const header = ( () => {
  const APPTITLE = 'finisher'
  const SUBTITLE = 'Getting your tasks DONE!'

  const element = document.createElement('header')

  const appTitle = document.createElement('h1')
  appTitle.innerText = APPTITLE

  const subTitle = document.createElement('h2')
  subTitle.innerText = SUBTITLE


  element.appendChild(appTitle)
  // element.append(subTitle)


  return { element }

} ) ()



/***/ }),

/***/ "./src/layouts/projects.js":
/*!*********************************!*\
  !*** ./src/layouts/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectLayout": () => (/* binding */ projectLayout)
/* harmony export */ });
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/createProject */ "./src/modules/createProject.js");


// conditionally render default projects
// if (projects.projectList.length === 0) {
// 	projects.addProject('Main')
// 	projects.addProject('Personal')
// }

const projectLayout = (() => {

	function renderProjectTabs () {
		// clear everything from tabs area
		tabs.replaceChildren()
		
		// loop through all projects and render a tab for each
		_modules_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.projectList.forEach( ( project, index ) => {
			const projectTab = document.createElement('button')
			projectTab.classList.add('project-tab')
			projectTab.dataset.project = project.name
			index === 0 ? projectTab.classList.add('active-project-tab') : undefined

			projectTab.textContent = project.name

			tabs.appendChild(projectTab)
			
		})
		// render the create project tab at the end
		renderCreateProjectTab()
	}

	function renderCreateProjectTab () {

		// create add new project button
		const newProjectButton = document.createElement('button')
		newProjectButton.classList.add('project-tab')
		newProjectButton.classList.add('new-project')
		newProjectButton.textContent = '➕'

		tabs.appendChild(newProjectButton)
	}

	// render project tabs
	const tabs = document.createElement('div')
	tabs.classList.add('project-tabs')

  return { tabs, renderProjectTabs }
})()



/***/ }),

/***/ "./src/layouts/tasks.js":
/*!******************************!*\
  !*** ./src/layouts/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskLayout": () => (/* binding */ taskLayout)
/* harmony export */ });
/* harmony import */ var _modules_createProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/createProject */ "./src/modules/createProject.js");
/* harmony import */ var _modules_createTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/createTask */ "./src/modules/createTask.js");
/* harmony import */ var _modules_utilityFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/utilityFunctions */ "./src/modules/utilityFunctions.js");




// conditionally render default tasks
// if (tasks.taskList.length === 0) {
//   tasks.addTask('Do Odin', 'Main')
// 	tasks.addTask('Do Lighthouse', 'Main')
// 	tasks.addTask('Get busy', 'Personal')
// 	tasks.addTask('Go crazy', 'Personal')
// }

const taskLayout = ( () => {

  const state = {
		currentProject: _modules_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.projectList[0],
		updateCurrentProject: (elementNumber) => state.currentProject = _modules_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.projectList[elementNumber]
	}

	function buildTaskProperty (propertyName, property, taskId, task) {

		// create property element
		const propertyContainer = document.createElement('div')
		propertyContainer.classList.add('task-info')
		propertyContainer.classList.add(`property-${_modules_utilityFunctions__WEBPACK_IMPORTED_MODULE_2__.utility.camelToSnake(propertyName)}`)
		
		// create property label container
		const propertyLabelContainer = document.createElement('div')
		propertyLabelContainer.classList.add('task-property')
		propertyContainer.appendChild(propertyLabelContainer)

		// create title element
		const propertyTitle = document.createElement('p')
		propertyTitle.classList.add('property-name')
		propertyTitle.innerText = _modules_utilityFunctions__WEBPACK_IMPORTED_MODULE_2__.utility.camelToHeadline(propertyName)
		propertyLabelContainer.appendChild(propertyTitle)

		// create value element
		const propertyValue = document.createElement('p')
		propertyValue.classList.add('property-value')
		propertyValue.innerText = property
		propertyLabelContainer.appendChild(propertyValue)

		// create action container (append as needed)
		const propertyActionContainer = document.createElement('div')
		propertyActionContainer.classList.add('task-action')

		// create edit buttons for text field properties
		const editableTextProperties = ['description', 'notes']
		if ( editableTextProperties.includes(propertyName)) {

			// create edit button
			const editButton = document.createElement('button')
			// apply data-id of current task to pass to event handler
			editButton.dataset.id = taskId
			// set icon of edit button
			editButton.innerText = '✏️'

			propertyActionContainer.appendChild(editButton)
			propertyContainer.appendChild(propertyActionContainer)

			editButton.onclick = (e) => editTextContents(e, propertyValue, task)
		}

		// create toggle button for task priority
		const editablePriorityProperties = ['priority']
		if (editablePriorityProperties.includes(propertyName)) {
			// set propertyValue text based on urgency
			const [URGENT, NORMAL] = ['Urgent', 'Normal']
			task.priority ? propertyValue.innerText = "Urgent" : propertyValue.innerText = "Normal"

			// create toggle button for urgency
			const priorityButton = document.createElement('button')
			task.priority ? priorityButton.innerText = '😱' : priorityButton.innerText = '🥱'
			propertyActionContainer.appendChild(priorityButton)
			propertyContainer.appendChild(propertyActionContainer)

			// toggle urgency with button click
			priorityButton.onclick = () => {
				task.newPriority = !task.priority
				setLocalStorage()
				task.priority ? priorityButton.innerText = '😱' : priorityButton.innerText = '🥱'
				task.priority ? propertyValue.innerText = URGENT: propertyValue.innerText = NORMAL
			}
		}

		// create edit button for date field properties
		const editableDateProperties = ['dueDate']
		if (editableDateProperties.includes(propertyName)) {
			const dateInputLabel = document.createElement('label')
			dateInputLabel.for = 'due-date'
			dateInputLabel.dataset.id = taskId
			dateInputLabel.innerText = '📆'
			
			const dateForm = document.createElement('form')
			const dateInput = document.createElement('input')
			dateInput.type = 'date'
			dateInput.id = 'due-date'
			dateForm.appendChild(dateInput)
			
			propertyActionContainer.appendChild(dateInputLabel)
			propertyContainer.appendChild(propertyActionContainer)

			dateInputLabel.onclick = () => {
				propertyValue.parentElement.replaceChild(dateForm, propertyValue)
				dateInput.focus()
			}
			
			dateForm.oninput = () => {
				task.newDueDate = _modules_utilityFunctions__WEBPACK_IMPORTED_MODULE_2__.utility.offsetTimeByZone(dateInput.valueAsDate)
				setLocalStorage()
				
				propertyValue.innerText = task.dueDate
				dateForm.parentElement.replaceChild(propertyValue, dateForm)
			}
		}

		const editableListProperties = ['checklist']
		if (editableListProperties.includes(propertyName)) {
			// create list container and remove propertyValue element (p)
			const listContainer = document.createElement('ol')
			listContainer.classList.add('property-value', 'checklist')
			propertyLabelContainer.replaceChild(listContainer, propertyValue)

			// render all existing items from localstorage
			property.forEach(item => listContainer.appendChild(createListItemElement(item)))
			
			// create button to add item to checklist
			const newChecklistItemButton = document.createElement('button')
			newChecklistItemButton.classList.add('btn-add-checklist-item')
			newChecklistItemButton.innerText = '➕'

			propertyActionContainer.appendChild(newChecklistItemButton)
			propertyContainer.appendChild(propertyActionContainer)

			newChecklistItemButton.addEventListener('click', function listen (e) {
				// remove event listener from button
				newChecklistItemButton.removeEventListener('click', listen)
				addListItem(e, listContainer, task)
			})
		}
		
		return propertyContainer
	}

	function editTextContents (e, propertyValue, task) {
		// hide edit button
		const editButton = e.target
		editButton.classList.toggle('hidden')

		// create input form over propertyValue element
		const inputForm = document.createElement('form')
		propertyValue.classList.toggle('hidden')
		propertyValue.parentNode.appendChild(inputForm)
		const inputField = document.createElement('input')
		// create text placeholder text in form input
		if (propertyValue.innerText === 'None' || propertyValue.innerText === 'No notes yet' || propertyValue.innerText === '') {
			const label = propertyValue.parentNode.firstChild.innerText.toLowerCase()
			inputField.placeholder = `Add ${label}...`
		} else {
			inputField.value = propertyValue.innerText
		}
		inputForm.append(inputField)
		inputField.focus()

		// save text input to task object and render changes
		inputForm.onsubmit = (e) => {
			e.preventDefault()

			// select current task using data-id (created on edit button)
			const propertyName = e.target.parentNode.firstChild.innerText
			const property = _modules_utilityFunctions__WEBPACK_IMPORTED_MODULE_2__.utility.headlineToTaskMethods(propertyName)
			// returns and object containing setter and getter names
			// for current task property
			// access using task[property.setter] (task.newDescription)
			// or task[property.getter] (task.description)
			task[property.setter] = inputField.value

			// restore hidden elements and display property
			inputForm.remove()
			propertyValue.innerText = task[property.getter]
			propertyValue.classList.toggle('hidden')
			editButton.classList.toggle('hidden')

			setLocalStorage()
		}
	}

	function createListItemElement (itemText) {
		// creates a single checklist item
		// may pass in text from localStorage in a for each function or
		// by reading from a task object

		// create new checklist and action elements in a container 
		const checkListItem = document.createElement('li')
		checkListItem.classList.add('checklist-item-container')
		const checkListValue = document.createElement('p')
		checkListValue.classList.add('checklist-item')
		const checkListActionContainer = document.createElement('div')
		checkListActionContainer.classList.add('checklist-actions')

		// add text to element from checklist property on task object 
		checkListValue.innerText = itemText

		// replace form with updated task element
		checkListItem.appendChild(checkListValue)
		checkListItem.appendChild(checkListActionContainer)

		return checkListItem
	}

	function addListItem (e, listContainer, task) {
		let button = e.target

		// create input field to type list item content into
		const inputForm = document.createElement('form')
		const inputField = document.createElement('input')
		inputField.type = 'text'
		inputForm.appendChild(inputField)
		listContainer.appendChild(inputForm)
		inputField.focus()

		// add list item content to checklist property on task object
		inputForm.onsubmit = (e) => {
			e.preventDefault()
			// write form value to task object
			task.newChecklist = inputField.value

			// replace form with checklist value
			listContainer.replaceChild(createListItemElement(task.lastChecklist), inputForm)
			setLocalStorage()

			// add event listener back to button for more checklist items
			button.addEventListener('click', function listen (e) {
				// remove event listener from button when clicked
				button.removeEventListener('click', listen)
				addListItem(e, listContainer, task)
			})
		}
	}

	function deleteTask (e) {
		const taskId = e.target.parentNode.parentNode.dataset.id
		_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.taskList.find( (obj, index) => {
			if (obj.id == taskId) {
				_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.taskList.splice(index, 1)
				return true
			}
		})
		
		renderCurrentTasks(state.currentProject)
		setLocalStorage()
	}

	function renderTaskDeleteButton (parentElement, task) {
		const deleteButton = document.createElement('button')
		deleteButton.classList.add('delete-button')
		deleteButton.classList.add('task-delete-button')
		deleteButton.classList.add('pop-out')
		deleteButton.classList.add('animate-out')

		deleteButton.innerText = '🗑'
		parentElement.appendChild(deleteButton)
		
		deleteButton.addEventListener('click', deleteTask)
	}

	function deleteProject (e) {
		const tabList = document.querySelectorAll('.project-tab')
		console.log(tabList.length)
		if (tabList.length < 3) {
			alert("Can't delete the last project. Create a new project first.")
			return undefined
		}
		// select project tab and get name
		const currentProjectTab = document.querySelector('.active-project-tab')
		const currentProjectName = currentProjectTab.dataset.project

		// delete all tasks associated with project in reverse order
		for (let taskIndex = _modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.taskList.length - 1; taskIndex >= 0; taskIndex--) {
			if (_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.taskList[taskIndex].parentProject === currentProjectName) {
				_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.taskList.splice(taskIndex, 1)
			}
		}
		setLocalStorage()
		// delete project tab
		currentProjectTab.remove()
		// click first button in project layout
		document.querySelector('.project-tabs').firstChild.click()
	}

	function renderProjectDeleteButton (parentElement) {
		const deleteButton = document.createElement('button')
		deleteButton.classList.add('delete-button')
		deleteButton.classList.add('project-delete-button')
		deleteButton.classList.add('pop-out')
		deleteButton.classList.add('animate-out')

		deleteButton.innerText = '🗑'
		parentElement.appendChild(deleteButton)

		deleteButton.addEventListener('click', deleteProject)
	}

  function renderSingleTask (task) {

		const taskElement = document.createElement('div')
		taskElement.classList.add('task-element')
		taskElement.classList.add('pop-out')
		taskElement.dataset.id = task.id

		const topContainer = document.createElement('div')
		topContainer.classList.add('task-top-container')
		taskElement.appendChild(topContainer)
		
		const taskText = document.createElement('p')
		taskText.classList.add('task-title')
		taskText.innerText = task.title
		topContainer.appendChild(taskText)

		const completedCheckboxParent = document.createElement('label')
		completedCheckboxParent.classList.add('task-status')
		completedCheckboxParent.classList.add('animate-out')
		const completedCheckboxChild = document.createElement('input')
		completedCheckboxChild.type = 'checkbox'
		// set checkbox as per task status
		task.status ? completedCheckboxChild.checked = true : completedCheckboxChild.checked = false
		const customCheckbox = document.createElement('div')
		customCheckbox.classList.add('checkbox')
		completedCheckboxParent.appendChild(completedCheckboxChild)
		completedCheckboxParent.appendChild(customCheckbox)
		topContainer.appendChild(completedCheckboxParent)

		const expandButton = document.createElement('button')
		expandButton.classList.add('task-expand')
		expandButton.classList.add('animate-out')
		expandButton.innerText = '🔍'
		topContainer.appendChild(expandButton)

		// create task detail container
		const taskDetails = document.createElement('div')
		taskDetails.classList.add('task-details')
		taskDetails.classList.add('hidden')
		taskElement.appendChild(taskDetails)
		
		// draw task details
		taskDetails.appendChild(buildTaskProperty('parentProject', task.parentProject, task))
		taskDetails.appendChild(buildTaskProperty('description', task.description, task.id, task))
		taskDetails.appendChild(buildTaskProperty('dateCreated', task.dateCreated, task.id, task))
		taskDetails.appendChild(buildTaskProperty('dueDate', task.dueDate, task.id, task))
		taskDetails.appendChild(buildTaskProperty('priority', task.priority, task.id, task))
		taskDetails.appendChild(buildTaskProperty('notes', task.notes, task.id, task))
		taskDetails.appendChild(buildTaskProperty('checklist', task.checklist, task.id, task))

		currentTasks.appendChild(taskElement)

		// event to toggle tasks as complete
		completedCheckboxChild.addEventListener('click', (e) => {
			e.stopPropagation()
			const taskId = +e.target.parentNode.parentNode.parentNode.dataset.id
			const currentTask = _modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.taskList.filter(task => task.id === taskId)[0]
			if (completedCheckboxChild.checked) {
				currentTask.setStatus = true
			} else {
				currentTask.setStatus = false
			}
			setLocalStorage()
		})

		// event to open details for a task
		expandButton.addEventListener('click', () => {
			taskDetails.classList.toggle('hidden')
		})

		renderTaskDeleteButton(taskDetails, task)
	}

	function createNewTask () {
		// select button on dom and remove event listener
		const newTaskButton = document.querySelector('.create-task')
		newTaskButton.removeEventListener('click', createNewTask)
		newTaskButton.innerText = ''
		// create a form on the button
		const inputForm = document.createElement('form')
		newTaskButton.appendChild(inputForm)
		const inputField = document.createElement('input')
		inputField.type = 'text'
		inputField.id = 'new-task-name'
		inputField.placeholder = 'New Task Name...'
		inputForm.appendChild(inputField)
		inputField.focus()
		// set event listener for input completion
		inputForm.addEventListener('submit', (e) => {
			e.preventDefault();
			// create task
			renderSingleTask(_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.addTask(inputField.value, state.currentProject.name))
			// remove new task button and create another at the bottom
			newTaskButton.remove()
			renderCreateTaskElement()
			setLocalStorage()

			// move project delete button to bottom
			const deleteButton = document.querySelector('.project-delete-button')
			deleteButton.remove()
			renderProjectDeleteButton(document.querySelector('.task-list'))
		})
		
	}

	function renderCreateTaskElement () {
		const newTaskButton = document.createElement('button')
		newTaskButton.classList.add('create-task')
		newTaskButton.classList.add('animate-out')
		newTaskButton.innerText = 'Create New Task'
		newTaskButton.addEventListener('click', createNewTask)
		currentTasks.appendChild(newTaskButton)
	}

	function renderCurrentTasks (currentProject) {
		currentTasks.replaceChildren()
		_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.taskList.forEach( (task) => {
			if (task.parentProject === currentProject.name) {
				renderSingleTask(task)
			}
		})

		renderCreateTaskElement()
		renderProjectDeleteButton(currentTasks)
	}

	function setLocalStorage () {
    const taskListSerialized = JSON.stringify(_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.taskList)
		localStorage.setItem('taskList', taskListSerialized)
  }

	function getLocalStorage () {
		const taskListDeserialized = JSON.parse(localStorage.getItem('taskList'))
		taskListDeserialized.forEach(task => {
			_modules_createTask__WEBPACK_IMPORTED_MODULE_1__.tasks.addTask(task.title, task.parentProject, task)
			if ( _modules_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.projectList.filter(project => project.name === task.parentProject).length === 0 ) {
					_modules_createProject__WEBPACK_IMPORTED_MODULE_0__.projects.addProject(task.parentProject)
				}
		})
	}

	// render tasks 
	const currentTasks = document.createElement('div')
	currentTasks.classList.add('task-list')

  return { currentTasks, state, renderCurrentTasks, getLocalStorage, setLocalStorage }

} ) ()



/***/ }),

/***/ "./src/modules/createProject.js":
/*!**************************************!*\
  !*** ./src/modules/createProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": () => (/* binding */ projects)
/* harmony export */ });

const projects = ( () => {

	const projectList = []

	const projectFactory = ( projectName ) => {
		
		let name = projectName
		const id = Math.ceil(Math.random() * 999999)
		
		return {
			get name() {
				return name
			},
			set newName(newName) {
				name = newName
			},
			get id() {
				return id
			}
		}
	}
	
	const addProject = ( name ) => {
		const newProject = projectFactory(name)
		projectList.push(newProject)
	}

	return { projectList, addProject }
} ) () 



/***/ }),

/***/ "./src/modules/createTask.js":
/*!***********************************!*\
  !*** ./src/modules/createTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _layouts_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/tasks */ "./src/layouts/tasks.js");
/* harmony import */ var _utilityFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilityFunctions */ "./src/modules/utilityFunctions.js");

	

const tasks = (() => {
	
	const taskList = []

	const taskFactory = (taskTitle, projectName, knownProperties = {} ) => {
		

		let title = taskTitle
		let status = knownProperties.status || false
		const id = knownProperties.id || Math.ceil(Math.random() * 999999)
		let parentProject = knownProperties.parentProject || projectName
		let description = knownProperties.description || 'None'
		let dateCreated = new Date()
		if (knownProperties.dateCreated) {
			let utcDate = new Date(knownProperties.dateCreated)
			dateCreated = _utilityFunctions__WEBPACK_IMPORTED_MODULE_1__.utility.offsetTimeByZone(utcDate)
		}
		let dueDate = 'None'
		if (knownProperties.dueDate && knownProperties.dueDate !== 'None') {
			let utcDate = new Date(knownProperties.dueDate)
			dueDate = _utilityFunctions__WEBPACK_IMPORTED_MODULE_1__.utility.offsetTimeByZone(utcDate)
		}
		let priority = knownProperties.priority || false
		let notes = knownProperties.notes || 'No notes yet'
		let checklist = knownProperties.checklist || []


		return {
			get title() {
				return title
			},
			set newTitle(newTitle) {
				title = newTitle
			},

			get status() {
				return status
			},
			set setStatus(bool) {
				if (typeof bool === 'boolean') {
					status = bool
				}
			},

			get id() {
				return id
			},

			get parentProject() {
				return parentProject
			},
			set newParentProject(newProjectName) {
				parentProject = newProjectName
			},

			get description() {
				return description
			},
			set newDescription(newDescription) {
				description = newDescription
			},

			get dateCreated() {
				return `${dateCreated.getFullYear()}-${_utilityFunctions__WEBPACK_IMPORTED_MODULE_1__.utility.padZero(dateCreated.getMonth() + 1)}-${_utilityFunctions__WEBPACK_IMPORTED_MODULE_1__.utility.padZero(dateCreated.getDate())}`
			},
			get dateCreatedAsDate() {
				return dateCreated
			},

			get dueDate() {
				return typeof dueDate === 'object' 
					? `${dueDate.getFullYear()}-${_utilityFunctions__WEBPACK_IMPORTED_MODULE_1__.utility.padZero(dueDate.getMonth() + 1)}-${_utilityFunctions__WEBPACK_IMPORTED_MODULE_1__.utility.padZero(dueDate.getDate())}`
					: 'None'
			},
			get dueDateAsDate() {
				return typeof dueDate === 'object'
					? dueDate
					: undefined
			},
			set newDueDate(newDueDate) {
				dueDate = newDueDate
			},

			get priority() {
				return priority
			},
			set newPriority(newPriority) {
				priority = newPriority
			},

			get notes() {
				return notes
			},
			set newNotes(newNotes) {
				notes = newNotes
			},

			get checklist() {
				return checklist
			},
			get lastChecklist() {
				return checklist[checklist.length-1]
			},
			set newChecklist(newChecklist) {
				checklist.push(newChecklist)
			},
		}
	}

	const addTask = ( title, project, knownProperties = {} ) => {
		const newTask = taskFactory(title, project, knownProperties )
		taskList.push(newTask)
		return newTask
	}

	return { taskList, addTask }
})()



/***/ }),

/***/ "./src/modules/utilityFunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/utilityFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "utility": () => (/* binding */ utility)
/* harmony export */ });
const utility = (() => {
  
  function camelToSnake (str) {
    let output = str.split('')
    let regex = /[A-Z]/g
    for (let letter in output) {
      if (regex.test(str[letter])) {
        output[letter] = `-${str[letter].toLowerCase()}`
      }
    }
    return output.join('')
  }
  
  function camelToHeadline (str) {
    let output = str.split('')
    let regex = /[A-Z]/g
    output[0] = output[0].toUpperCase()
    for (let letter in output) {
      if (regex.test(str[letter])) {
        output[letter] = ` ${str[letter]}`
      }
    }
    return output.join('')
  }

  function headlineToTaskMethods (str) {
    let split = str.split(' ')
    let setterString = `new${split.join('')}`
    
    split[0] = split[0].toLowerCase()
    let getterString = split.join('')
    console.log(getterString)
    
    return {
      getter: getterString,
      setter: setterString
    }
  }

  function padZero (num) {
    if (num.toString().length === 1) {
      return `0${num}`
    } else {
      return num.toString()
    }
  }

  function growInputField () {
		this.style.width = (this.value.length + 2) + 'ch'
	}

  function offsetTimeByZone (dateObj) {
    const timeZoneAdjustment = dateObj.getTimezoneOffset()
    let outputObj = new Date(dateObj.setMinutes(dateObj.getMinutes() + timeZoneAdjustment))
    
    return outputObj
  }

  return { 
    camelToSnake,
    camelToHeadline,
    headlineToTaskMethods,
    padZero,
    growInputField,
    offsetTimeByZone,
  }
  
})()



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _layouts_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/app */ "./src/layouts/app.js");
/* harmony import */ var _layouts_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/header */ "./src/layouts/header.js");
/* harmony import */ var _layouts_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/footer */ "./src/layouts/footer.js");





document.body.appendChild(_layouts_header__WEBPACK_IMPORTED_MODULE_2__.header.element)
document.body.appendChild(_layouts_app__WEBPACK_IMPORTED_MODULE_1__.app.layoutElement)
document.body.appendChild(document.createElement('div'))
document.body.appendChild(_layouts_footer__WEBPACK_IMPORTED_MODULE_3__.footer.element)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9maW5pc2hlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZpbmlzaGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZpbmlzaGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpbmlzaGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZpbmlzaGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maW5pc2hlci8uL3NyYy9sYXlvdXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9maW5pc2hlci8uL3NyYy9sYXlvdXRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9maW5pc2hlci8uL3NyYy9sYXlvdXRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9maW5pc2hlci8uL3NyYy9sYXlvdXRzL3Byb2plY3RzLmpzIiwid2VicGFjazovL2ZpbmlzaGVyLy4vc3JjL2xheW91dHMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvLi9zcmMvbW9kdWxlcy9jcmVhdGVQcm9qZWN0LmpzIiwid2VicGFjazovL2ZpbmlzaGVyLy4vc3JjL21vZHVsZXMvY3JlYXRlVGFzay5qcyIsIndlYnBhY2s6Ly9maW5pc2hlci8uL3NyYy9tb2R1bGVzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZpbmlzaGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmluaXNoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maW5pc2hlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdydXBwbyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAvKiBwcmV2ZW50IGp1bXBpbmcgd2hlbiBhcHAgaXMgbG9uZ2VyIHRoYW4gc2NyZWVuICovXFxuICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gMWZyIGF1dG87XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxucCB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmhlYWRlciB7XFxuICBmb250LWZhbWlseTogJ0dydXBwbycsIGN1cnNpdmU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuN3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuaGVhZGVyIGgxIHtcXG50ZXh0LWFsaWduOiByaWdodDtcXG59XFxuaGVhZGVyIGgxOjpiZWZvcmUge1xcbiAgbWFyZ2luLWxlZnQ6IDAuN3JlbTtcXG4gIGNvbnRlbnQ6ICdbIFsgJztcXG59XFxuaGVhZGVyIGgxOjphZnRlciB7XFxuICBjb250ZW50OiAnIF0gXSc7XFxufVxcbmhlYWRlciBoMiB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG59XFxuLnpvb20ge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiBsaWdodGJsdWU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgNjBtcyBsaW5lYXI7XFxufVxcbi56b29tOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKSBzY2FsZSgxLjE1KTtcXG4gIGNvbG9yOiBjeWFuO1xcbn1cXG5cXG4uYXBwIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IGF1dG87XFxufVxcblxcbi5wcm9qZWN0LXRhYnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICBnYXA6IDNweDtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIG1pbi13aWR0aDogNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA2JSAwIDAgNiU7XFxuICBiYWNrZ3JvdW5kOiBoc2xhKDIyMCwgMzAlLCA3MCUsIDQwJSk7XFxufVxcblxcbi5wcm9qZWN0LXRhYiBpbnB1dCB7XFxuICB3aWR0aDogM2NoO1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxuICBib3JkZXI6IHVuc2V0O1xcbiAgb3V0bGluZTogdW5zZXQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hY3RpdmUtcHJvamVjdC10YWIge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFzay1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjdyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxufVxcbi50YXNrLWVsZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi50YXNrLXRvcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4udGFzay1kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxufVxcbi50YXNrLXRpdGxlIHtcXG4gIG1pbi13aWR0aDogMTJjaDtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuLnRhc2stdG9wLWNvbnRhaW5lciBidXR0b24sIC50YXNrLXRvcC1jb250YWluZXIgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4vKiBoaWRlIGRlZmF1bHQgY2hlY2tib3ggKi9cXG4udGFzay1zdGF0dXMgaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4vKiBjdXN0b20gY2hlY2tib3ggKi9cXG4uY2hlY2tib3gge1xcbiAgaGVpZ2h0OiAxLjQzN3JlbTtcXG4gIHdpZHRoOiAxLjJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4wOHMgZWFzZS1pbi1vdXQ7XFxufVxcbi50YXNrLXN0YXR1cyBpbnB1dCB+IC5jaGVja2JveDpiZWZvcmUge1xcbiAgY29udGVudDogJ+KchSc7XFxuICBvcGFjaXR5OiAwLjI7XFxufVxcbi50YXNrLXN0YXR1cyBpbnB1dDpob3ZlciB+IC5jaGVja2JveDpiZWZvcmUge1xcbiAgY29udGVudDogJ+KchSc7XFxuICBvcGFjaXR5OiAwLjQ7XFxufVxcbi50YXNrLXN0YXR1cyBpbnB1dDpjaGVja2VkIH4gLmNoZWNrYm94OmJlZm9yZSB7XFxuICBjb250ZW50OiAn4pyFJztcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi50YXNrLXN0YXR1cyBpbnB1dDpjaGVja2VkOmhvdmVyIH4gLmNoZWNrYm94OmJlZm9yZSB7XFxuICBvcGFjaXR5OiAwLjk7XFxufVxcblxcbi8qIGVuZCBjdXN0b20gY2hlY2tib3ggKi9cXG4udGFzay1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi50YXNrLXByb3BlcnR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjNyZW07XFxufVxcbi5wcm9wZXJ0eS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMC41cmVtO1xcbn1cXG4ucHJvcGVydHktdmFsdWUge1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcbi50YXNrLWFjdGlvbiBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjA4cyBlYXNlLWluLW91dDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4udGFzay1hY3Rpb24gYnV0dG9uOmhvdmVyIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xcbn1cXG4uZGVsZXRlLWJ1dHRvbiB7IFxcbiAgLyogYnV0dG9ucyBhdCBib3R0b20gb2YgcHJvamVjdCB2aWV3IGFuZCB0YXNrIGRldGFpbHMgdmlldyAqL1xcbiAgYmFja2dyb3VuZDogdW5zZXQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtaW4td2lkdGg6IDMuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG4uY3JlYXRlLXRhc2sge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIHBhZGRpbmc6IDEuMjVyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRleHQtYWxpZ246IHVuc2V0O1xcbn1cXG4jbmV3LXRhc2stbmFtZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxufVxcbi5wb3Atb3V0IHtcXG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDJweCBncmV5O1xcbn1cXG4uYW5pbWF0ZS1vdXQge1xcbiAgYm94LXNoYWRvdzogLTFweCAxcHggMnB4IGdyZXk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4wN3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5hbmltYXRlLW91dDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMXB4KSB0cmFuc2xhdGVZKC0xcHgpO1xcbiAgYm94LXNoYWRvdzogLTNweCAzcHggM3B4IGdyZXk7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx1QkFBdUI7RUFDdkIsbURBQW1EO0VBQ25ELHdCQUF3QjtFQUN4QixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0EsMEJBQTBCO0FBQzFCO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCO0FBQ0Esb0JBQW9CO0FBQ3BCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsNERBQTREO0VBQzVELGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsMkNBQTJDO0VBQzNDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcnVwcG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgLyogcHJldmVudCBqdW1waW5nIHdoZW4gYXBwIGlzIGxvbmdlciB0aGFuIHNjcmVlbiAqL1xcbiAgLyogb3ZlcmZsb3cteTogc2Nyb2xsOyAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDFmciBhdXRvO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZm9udC1mYW1pbHk6ICdHcnVwcG8nLCBjdXJzaXZlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjdyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmhlYWRlciBoMSB7XFxudGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbmhlYWRlciBoMTo6YmVmb3JlIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjdyZW07XFxuICBjb250ZW50OiAnWyBbICc7XFxufVxcbmhlYWRlciBoMTo6YWZ0ZXIge1xcbiAgY29udGVudDogJyBdIF0nO1xcbn1cXG5oZWFkZXIgaDIge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxLjVyZW07XFxufVxcbi56b29tIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogbGlnaHRibHVlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDYwbXMgbGluZWFyO1xcbn1cXG4uem9vbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZykgc2NhbGUoMS4xNSk7XFxuICBjb2xvcjogY3lhbjtcXG59XFxuXFxuLmFwcCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1pbi13aWR0aDogMzUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdC10YWJzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgZ2FwOiAzcHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBtaW4td2lkdGg6IDVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNiUgMCAwIDYlO1xcbiAgYmFja2dyb3VuZDogaHNsYSgyMjAsIDMwJSwgNzAlLCA0MCUpO1xcbn1cXG5cXG4ucHJvamVjdC10YWIgaW5wdXQge1xcbiAgd2lkdGg6IDNjaDtcXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbiAgYm9yZGVyOiB1bnNldDtcXG4gIG91dGxpbmU6IHVuc2V0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWN0aXZlLXByb2plY3QtdGFiIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBncmVlbjtcXG59XFxuXFxuLnRhc2stbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC43cmVtO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xcbn1cXG4udGFzay1lbGVtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4udGFzay10b3AtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLnRhc2stZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG4udGFzay10aXRsZSB7XFxuICBtaW4td2lkdGg6IDEyY2g7XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcbi50YXNrLXRvcC1jb250YWluZXIgYnV0dG9uLCAudGFzay10b3AtY29udGFpbmVyIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLyogaGlkZSBkZWZhdWx0IGNoZWNrYm94ICovXFxuLnRhc2stc3RhdHVzIGlucHV0IHtcXG4gIG9wYWNpdHk6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLyogY3VzdG9tIGNoZWNrYm94ICovXFxuLmNoZWNrYm94IHtcXG4gIGhlaWdodDogMS40MzdyZW07XFxuICB3aWR0aDogMS4ycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDhzIGVhc2UtaW4tb3V0O1xcbn1cXG4udGFzay1zdGF0dXMgaW5wdXQgfiAuY2hlY2tib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICfinIUnO1xcbiAgb3BhY2l0eTogMC4yO1xcbn1cXG4udGFzay1zdGF0dXMgaW5wdXQ6aG92ZXIgfiAuY2hlY2tib3g6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICfinIUnO1xcbiAgb3BhY2l0eTogMC40O1xcbn1cXG4udGFzay1zdGF0dXMgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja2JveDpiZWZvcmUge1xcbiAgY29udGVudDogJ+KchSc7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4udGFzay1zdGF0dXMgaW5wdXQ6Y2hlY2tlZDpob3ZlciB+IC5jaGVja2JveDpiZWZvcmUge1xcbiAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4vKiBlbmQgY3VzdG9tIGNoZWNrYm94ICovXFxuLnRhc2staW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbn1cXG4udGFzay1wcm9wZXJ0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4zcmVtO1xcbn1cXG4ucHJvcGVydHktbmFtZSB7XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuLnByb3BlcnR5LXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbn1cXG4udGFzay1hY3Rpb24gYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4wOHMgZWFzZS1pbi1vdXQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLnRhc2stYWN0aW9uIGJ1dHRvbjpob3ZlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTAwZGVnKTtcXG59XFxuLmRlbGV0ZS1idXR0b24geyBcXG4gIC8qIGJ1dHRvbnMgYXQgYm90dG9tIG9mIHByb2plY3QgdmlldyBhbmQgdGFzayBkZXRhaWxzIHZpZXcgKi9cXG4gIGJhY2tncm91bmQ6IHVuc2V0O1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWluLXdpZHRoOiAzLjVyZW07XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuLmNyZWF0ZS10YXNrIHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBwYWRkaW5nOiAxLjI1cmVtIDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LWFsaWduOiB1bnNldDtcXG59XFxuI25ldy10YXNrLW5hbWUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbn1cXG4ucG9wLW91dCB7XFxuICBib3gtc2hhZG93OiAtMXB4IDFweCAycHggZ3JleTtcXG59XFxuLmFuaW1hdGUtb3V0IHtcXG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDJweCBncmV5O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMDdzIGVhc2UtaW4tb3V0O1xcbn1cXG4uYW5pbWF0ZS1vdXQ6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDFweCkgdHJhbnNsYXRlWSgtMXB4KTtcXG4gIGJveC1zaGFkb3c6IC0zcHggM3B4IDNweCBncmV5O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vbW9kdWxlcy9jcmVhdGVQcm9qZWN0XCI7XG5pbXBvcnQgeyBwcm9qZWN0TGF5b3V0IH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4uL21vZHVsZXMvY3JlYXRlVGFza1wiO1xuaW1wb3J0IHsgdGFza0xheW91dCB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyB1dGlsaXR5IGFzIHUgfSBmcm9tIFwiLi4vbW9kdWxlcy91dGlsaXR5RnVuY3Rpb25zXCI7XG5cblxuY29uc3QgYXBwID0gKCgpID0+IHtcblxuICBmdW5jdGlvbiBhZGRQcm9qZWN0VGFiTGlzdGVuZXIgKCkge1xuICAgIHByb2plY3RMYXlvdXQudGFicy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRldGVybWluZVByb2plY3RCdXR0b25BY3Rpb24pXG4gIH1cblxuXHRmdW5jdGlvbiBzd2l0Y2hBY3RpdmVQcm9qZWN0IChlKSB7XG5cdFx0Ly8gY2hlY2sgd2hpY2ggcHJvamVjdCBidXR0b24gd2FzIGNsaWNrZWRcblx0XHRsZXQgZWxlbWVudE51bWJlciA9IFsuLi5lLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuXS5pbmRleE9mKGUudGFyZ2V0KVxuXHRcdC8vIHJlbW92ZSBhY3RpdmUgcHJvamVjdCB0YWIgY2xhc3MgZnJvbSBwcmV2aW91cyB0YWJcblx0XHRjb25zdCBwcmV2aW91c1Byb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXByb2plY3QtdGFiJylcblx0XHRwcmV2aW91c1Byb2plY3RUYWI/LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1wcm9qZWN0LXRhYicpXG5cblx0XHQvLyB1cGRhdGUgc3RhdGUgdG8gbmV3IHByb2plY3Rcblx0XHR0YXNrTGF5b3V0LnN0YXRlLnVwZGF0ZUN1cnJlbnRQcm9qZWN0KGVsZW1lbnROdW1iZXIpXG5cblx0XHQvLyByZW1vdmUgdmlzaWJsZSB0YXNrc1xuXHRcdGNvbnN0IHRhc2tFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpXG5cdFx0dGFza0VsZW1lbnQucmVwbGFjZUNoaWxkcmVuKClcblxuXHRcdC8vIGFwcGx5IGFjdGl2ZSBwcm9qZWN0IHRhYiBzdHlsZVxuXHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0LXRhYicpXG5cblx0XHQvLyByZW5kZXIgdGFza3MgZnJvbSBuZXcgY3VycmVudCBwcm9qZWN0XG5cdFx0dGFza0xheW91dC5yZW5kZXJDdXJyZW50VGFza3ModGFza0xheW91dC5zdGF0ZS5jdXJyZW50UHJvamVjdClcblxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdCAoZSkge1xuXHRcdGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBlLnRhcmdldFxuXG5cdFx0Ly8gcmVtb3ZlIGFjdGl2ZSBwcm9qZWN0IHRhYiBjbGFzcyBmcm9tIHByZXZpb3VzIHRhYlxuXHRcdGNvbnN0IHByZXZpb3VzUHJvamVjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUtcHJvamVjdC10YWInKVxuXHRcdHByZXZpb3VzUHJvamVjdFRhYj8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QtdGFiJylcblxuXHRcdC8vIGFwcGx5IGFjdGl2ZSBwcm9qZWN0IHRhYiBzdHlsZVxuXHRcdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0LXRhYicpXG5cblx0XHQvLyBjbGVhciBpbm5lclRleHQgb2YgYnV0dG9uXG5cdFx0bmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSBudWxsXG5cblx0XHQvLyBjcmVhdGUgZm9ybSBvbiBidXR0b24gdG8gdGFrZSBpbnB1dCBvZiBuZXcgcHJvamVjdCBuYW1lXG5cdFx0Y29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cdFx0ZmllbGQudHlwZSA9ICd0ZXh0J1xuXHRcdGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdS5ncm93SW5wdXRGaWVsZClcblx0XHRcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChmaWVsZClcblx0XHRuZXdQcm9qZWN0QnV0dG9uLmFwcGVuZENoaWxkKGZvcm0pXG5cdFx0ZmllbGQuZm9jdXMoKVxuXG5cdFx0Ly9cblx0XHRmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdC8vIGNoZWNrIG5vIG90aGVyIHByb2plY3Qgd2l0aCB0aGF0IG5hbWUgZXhpc3RzXG5cdFx0XHQvL1xuXHRcdFx0Ly9cblxuXHRcdFx0Ly8gY3JlYXRlIHRoZSBwcm9qZWN0XG5cdFx0XHRjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGUudGFyZ2V0LmZpcnN0Q2hpbGQudmFsdWVcblx0XHRcdHByb2plY3RzLmFkZFByb2plY3QobmV3UHJvamVjdE5hbWUpXG5cblx0XHRcdC8vIHJlbmRlciBwcm9qZWN0IHRhYnMgYWdhaW5cblx0XHRcdHByb2plY3RMYXlvdXQucmVuZGVyUHJvamVjdFRhYnMoKVxuXG5cdFx0XHQvL3NlbGVjdCB0aGUgbmV3bHkgbWFkZSBwcm9qZWN0XG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PSR7bmV3UHJvamVjdE5hbWV9YCkuY2xpY2soKVxuXHRcdFx0Ly9iZWdpbiBjcmVhdGluZyBmaXJzdCB0YXNrXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlLXRhc2snKS5jbGljaygpXG5cdFx0fSlcblxuXHR9XG5cblx0ZnVuY3Rpb24gZGV0ZXJtaW5lUHJvamVjdEJ1dHRvbkFjdGlvbiAoZSkge1xuXHRcdC8vIGNoZWNrIHRoYXQgb25seSBhIHByb2plY3QgYnV0dG9uIHdhcyBjbGlja2VkXG5cdFx0aWYgKGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdCkge1xuXHRcdFx0c3dpdGNoQWN0aXZlUHJvamVjdChlKVxuXHRcdH0gZWxzZSBpZiAoWy4uLmUudGFyZ2V0LmNsYXNzTGlzdF0uaW5jbHVkZXMoJ25ldy1wcm9qZWN0JykpIHtcblx0XHRcdGNyZWF0ZU5ld1Byb2plY3QoZSlcblx0XHR9XG5cdH1cblxuXHQvLyBjaGVjayBmb3IgbG9jYWxTdG9yYWdlIGVudHJ5XG5pZiAoIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpID09PSBudWxsXG5cdHx8IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tMaXN0JykpLmxlbmd0aCA9PT0gMCApIHtcblx0cHJvamVjdHMuYWRkUHJvamVjdCgnTWFpbicpXG5cdHRhc2tzLmFkZFRhc2soJ0RvIE9kaW4nLCAnTWFpbicpXG59IGVsc2Uge1xuXHR0YXNrTGF5b3V0LmdldExvY2FsU3RvcmFnZSgpXG59XG5cdHRhc2tMYXlvdXQuc3RhdGUudXBkYXRlQ3VycmVudFByb2plY3QoMClcblxuXHQvLyByZW5kZXIgcHJvamVjdCB0YWJzXG5cdHByb2plY3RMYXlvdXQucmVuZGVyUHJvamVjdFRhYnMoKVxuXHQvLyByZW5kZXIgdGFza3Ncblx0dGFza0xheW91dC5yZW5kZXJDdXJyZW50VGFza3ModGFza0xheW91dC5zdGF0ZS5jdXJyZW50UHJvamVjdClcblxuXHQvLyBjcmVhdGUgbGF5b3V0RWxlbWVudCB0byBwYXNzIHRvIGluZGV4LmpzXG5cdGNvbnN0IGxheW91dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcblx0bGF5b3V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhcHAnKVxuXHQvLyBtb3VudCBhcHAgb250byBsYXlvdXRFbGVtZW50XG5cdGxheW91dEVsZW1lbnQuYXBwZW5kQ2hpbGQocHJvamVjdExheW91dC50YWJzKVxuXHRsYXlvdXRFbGVtZW50LmFwcGVuZENoaWxkKHRhc2tMYXlvdXQuY3VycmVudFRhc2tzKVxuXG5cdGFkZFByb2plY3RUYWJMaXN0ZW5lcigpXG5cblx0cmV0dXJuIHsgbGF5b3V0RWxlbWVudCB9XG59KSgpXG5cblxuXG5leHBvcnQgeyBhcHAgfSIsIlxuXG5jb25zdCBmb290ZXIgPSAoICgpID0+IHtcblxuICBjb25zdCBBVFRSSUJVVElPTiA9ICdCdWlsdCBpbiDwn42BIGJ5ICdcbiAgY29uc3QgTElOS1RFWFQgPSAnTG9nYW4gV29vbGYnXG4gIGNvbnN0IEdJVEhVQkxJTksgPSAnaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9sb2dhbndvb2xmJ1xuXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuXG4gIGNvbnN0IGF0dHJpYnV0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gIGF0dHJpYnV0aW9uLmlubmVySFRNTCA9IEFUVFJJQlVUSU9OXG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBnaXRodWJMaW5rLmNsYXNzTGlzdC5hZGQoJ3pvb20nKVxuICBnaXRodWJMaW5rLmhyZWYgPSBHSVRIVUJMSU5LXG4gIGdpdGh1YkxpbmsuaW5uZXJUZXh0ID0gTElOS1RFWFRcblxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb24pXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZ2l0aHViTGluaylcbiAgXG4gIHJldHVybiB7IGVsZW1lbnQgfVxuXG59ICkgKClcblxuZXhwb3J0IHsgZm9vdGVyIH0iLCJcblxuY29uc3QgaGVhZGVyID0gKCAoKSA9PiB7XG4gIGNvbnN0IEFQUFRJVExFID0gJ2ZpbmlzaGVyJ1xuICBjb25zdCBTVUJUSVRMRSA9ICdHZXR0aW5nIHlvdXIgdGFza3MgRE9ORSEnXG5cbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG5cbiAgY29uc3QgYXBwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gIGFwcFRpdGxlLmlubmVyVGV4dCA9IEFQUFRJVExFXG5cbiAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gIHN1YlRpdGxlLmlubmVyVGV4dCA9IFNVQlRJVExFXG5cblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGFwcFRpdGxlKVxuICAvLyBlbGVtZW50LmFwcGVuZChzdWJUaXRsZSlcblxuXG4gIHJldHVybiB7IGVsZW1lbnQgfVxuXG59ICkgKClcblxuZXhwb3J0IHsgaGVhZGVyIH0iLCJpbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gXCIuLi9tb2R1bGVzL2NyZWF0ZVByb2plY3RcIlxuXG4vLyBjb25kaXRpb25hbGx5IHJlbmRlciBkZWZhdWx0IHByb2plY3RzXG4vLyBpZiAocHJvamVjdHMucHJvamVjdExpc3QubGVuZ3RoID09PSAwKSB7XG4vLyBcdHByb2plY3RzLmFkZFByb2plY3QoJ01haW4nKVxuLy8gXHRwcm9qZWN0cy5hZGRQcm9qZWN0KCdQZXJzb25hbCcpXG4vLyB9XG5cbmNvbnN0IHByb2plY3RMYXlvdXQgPSAoKCkgPT4ge1xuXG5cdGZ1bmN0aW9uIHJlbmRlclByb2plY3RUYWJzICgpIHtcblx0XHQvLyBjbGVhciBldmVyeXRoaW5nIGZyb20gdGFicyBhcmVhXG5cdFx0dGFicy5yZXBsYWNlQ2hpbGRyZW4oKVxuXHRcdFxuXHRcdC8vIGxvb3AgdGhyb3VnaCBhbGwgcHJvamVjdHMgYW5kIHJlbmRlciBhIHRhYiBmb3IgZWFjaFxuXHRcdHByb2plY3RzLnByb2plY3RMaXN0LmZvckVhY2goICggcHJvamVjdCwgaW5kZXggKSA9PiB7XG5cdFx0XHRjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblx0XHRcdHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWInKVxuXHRcdFx0cHJvamVjdFRhYi5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0Lm5hbWVcblx0XHRcdGluZGV4ID09PSAwID8gcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdC10YWInKSA6IHVuZGVmaW5lZFxuXG5cdFx0XHRwcm9qZWN0VGFiLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lXG5cblx0XHRcdHRhYnMuYXBwZW5kQ2hpbGQocHJvamVjdFRhYilcblx0XHRcdFxuXHRcdH0pXG5cdFx0Ly8gcmVuZGVyIHRoZSBjcmVhdGUgcHJvamVjdCB0YWIgYXQgdGhlIGVuZFxuXHRcdHJlbmRlckNyZWF0ZVByb2plY3RUYWIoKVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyQ3JlYXRlUHJvamVjdFRhYiAoKSB7XG5cblx0XHQvLyBjcmVhdGUgYWRkIG5ldyBwcm9qZWN0IGJ1dHRvblxuXHRcdGNvbnN0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXHRcdG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgncHJvamVjdC10YWInKVxuXHRcdG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QnKVxuXHRcdG5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAn4p6VJ1xuXG5cdFx0dGFicy5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKVxuXHR9XG5cblx0Ly8gcmVuZGVyIHByb2plY3QgdGFic1xuXHRjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0dGFicy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRhYnMnKVxuXG4gIHJldHVybiB7IHRhYnMsIHJlbmRlclByb2plY3RUYWJzIH1cbn0pKClcblxuZXhwb3J0IHsgcHJvamVjdExheW91dCB9IiwiaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vbW9kdWxlcy9jcmVhdGVQcm9qZWN0XCJcbmltcG9ydCB7IHRhc2tzIH0gZnJvbSBcIi4uL21vZHVsZXMvY3JlYXRlVGFza1wiXG5pbXBvcnQgeyB1dGlsaXR5IGFzIHUgfSBmcm9tIFwiLi4vbW9kdWxlcy91dGlsaXR5RnVuY3Rpb25zXCJcblxuLy8gY29uZGl0aW9uYWxseSByZW5kZXIgZGVmYXVsdCB0YXNrc1xuLy8gaWYgKHRhc2tzLnRhc2tMaXN0Lmxlbmd0aCA9PT0gMCkge1xuLy8gICB0YXNrcy5hZGRUYXNrKCdEbyBPZGluJywgJ01haW4nKVxuLy8gXHR0YXNrcy5hZGRUYXNrKCdEbyBMaWdodGhvdXNlJywgJ01haW4nKVxuLy8gXHR0YXNrcy5hZGRUYXNrKCdHZXQgYnVzeScsICdQZXJzb25hbCcpXG4vLyBcdHRhc2tzLmFkZFRhc2soJ0dvIGNyYXp5JywgJ1BlcnNvbmFsJylcbi8vIH1cblxuY29uc3QgdGFza0xheW91dCA9ICggKCkgPT4ge1xuXG4gIGNvbnN0IHN0YXRlID0ge1xuXHRcdGN1cnJlbnRQcm9qZWN0OiBwcm9qZWN0cy5wcm9qZWN0TGlzdFswXSxcblx0XHR1cGRhdGVDdXJyZW50UHJvamVjdDogKGVsZW1lbnROdW1iZXIpID0+IHN0YXRlLmN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdHMucHJvamVjdExpc3RbZWxlbWVudE51bWJlcl1cblx0fVxuXG5cdGZ1bmN0aW9uIGJ1aWxkVGFza1Byb3BlcnR5IChwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCB0YXNrSWQsIHRhc2spIHtcblxuXHRcdC8vIGNyZWF0ZSBwcm9wZXJ0eSBlbGVtZW50XG5cdFx0Y29uc3QgcHJvcGVydHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdHByb3BlcnR5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpXG5cdFx0cHJvcGVydHlDb250YWluZXIuY2xhc3NMaXN0LmFkZChgcHJvcGVydHktJHt1LmNhbWVsVG9TbmFrZShwcm9wZXJ0eU5hbWUpfWApXG5cdFx0XG5cdFx0Ly8gY3JlYXRlIHByb3BlcnR5IGxhYmVsIGNvbnRhaW5lclxuXHRcdGNvbnN0IHByb3BlcnR5TGFiZWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdHByb3BlcnR5TGFiZWxDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFzay1wcm9wZXJ0eScpXG5cdFx0cHJvcGVydHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydHlMYWJlbENvbnRhaW5lcilcblxuXHRcdC8vIGNyZWF0ZSB0aXRsZSBlbGVtZW50XG5cdFx0Y29uc3QgcHJvcGVydHlUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXHRcdHByb3BlcnR5VGl0bGUuY2xhc3NMaXN0LmFkZCgncHJvcGVydHktbmFtZScpXG5cdFx0cHJvcGVydHlUaXRsZS5pbm5lclRleHQgPSB1LmNhbWVsVG9IZWFkbGluZShwcm9wZXJ0eU5hbWUpXG5cdFx0cHJvcGVydHlMYWJlbENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9wZXJ0eVRpdGxlKVxuXG5cdFx0Ly8gY3JlYXRlIHZhbHVlIGVsZW1lbnRcblx0XHRjb25zdCBwcm9wZXJ0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cdFx0cHJvcGVydHlWYWx1ZS5jbGFzc0xpc3QuYWRkKCdwcm9wZXJ0eS12YWx1ZScpXG5cdFx0cHJvcGVydHlWYWx1ZS5pbm5lclRleHQgPSBwcm9wZXJ0eVxuXHRcdHByb3BlcnR5TGFiZWxDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydHlWYWx1ZSlcblxuXHRcdC8vIGNyZWF0ZSBhY3Rpb24gY29udGFpbmVyIChhcHBlbmQgYXMgbmVlZGVkKVxuXHRcdGNvbnN0IHByb3BlcnR5QWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHRwcm9wZXJ0eUFjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWFjdGlvbicpXG5cblx0XHQvLyBjcmVhdGUgZWRpdCBidXR0b25zIGZvciB0ZXh0IGZpZWxkIHByb3BlcnRpZXNcblx0XHRjb25zdCBlZGl0YWJsZVRleHRQcm9wZXJ0aWVzID0gWydkZXNjcmlwdGlvbicsICdub3RlcyddXG5cdFx0aWYgKCBlZGl0YWJsZVRleHRQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5TmFtZSkpIHtcblxuXHRcdFx0Ly8gY3JlYXRlIGVkaXQgYnV0dG9uXG5cdFx0XHRjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblx0XHRcdC8vIGFwcGx5IGRhdGEtaWQgb2YgY3VycmVudCB0YXNrIHRvIHBhc3MgdG8gZXZlbnQgaGFuZGxlclxuXHRcdFx0ZWRpdEJ1dHRvbi5kYXRhc2V0LmlkID0gdGFza0lkXG5cdFx0XHQvLyBzZXQgaWNvbiBvZiBlZGl0IGJ1dHRvblxuXHRcdFx0ZWRpdEJ1dHRvbi5pbm5lclRleHQgPSAn4pyP77iPJ1xuXG5cdFx0XHRwcm9wZXJ0eUFjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKVxuXHRcdFx0cHJvcGVydHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvcGVydHlBY3Rpb25Db250YWluZXIpXG5cblx0XHRcdGVkaXRCdXR0b24ub25jbGljayA9IChlKSA9PiBlZGl0VGV4dENvbnRlbnRzKGUsIHByb3BlcnR5VmFsdWUsIHRhc2spXG5cdFx0fVxuXG5cdFx0Ly8gY3JlYXRlIHRvZ2dsZSBidXR0b24gZm9yIHRhc2sgcHJpb3JpdHlcblx0XHRjb25zdCBlZGl0YWJsZVByaW9yaXR5UHJvcGVydGllcyA9IFsncHJpb3JpdHknXVxuXHRcdGlmIChlZGl0YWJsZVByaW9yaXR5UHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpKSB7XG5cdFx0XHQvLyBzZXQgcHJvcGVydHlWYWx1ZSB0ZXh0IGJhc2VkIG9uIHVyZ2VuY3lcblx0XHRcdGNvbnN0IFtVUkdFTlQsIE5PUk1BTF0gPSBbJ1VyZ2VudCcsICdOb3JtYWwnXVxuXHRcdFx0dGFzay5wcmlvcml0eSA/IHByb3BlcnR5VmFsdWUuaW5uZXJUZXh0ID0gXCJVcmdlbnRcIiA6IHByb3BlcnR5VmFsdWUuaW5uZXJUZXh0ID0gXCJOb3JtYWxcIlxuXG5cdFx0XHQvLyBjcmVhdGUgdG9nZ2xlIGJ1dHRvbiBmb3IgdXJnZW5jeVxuXHRcdFx0Y29uc3QgcHJpb3JpdHlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXHRcdFx0dGFzay5wcmlvcml0eSA/IHByaW9yaXR5QnV0dG9uLmlubmVyVGV4dCA9ICfwn5ixJyA6IHByaW9yaXR5QnV0dG9uLmlubmVyVGV4dCA9ICfwn6WxJ1xuXHRcdFx0cHJvcGVydHlBY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlCdXR0b24pXG5cdFx0XHRwcm9wZXJ0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9wZXJ0eUFjdGlvbkNvbnRhaW5lcilcblxuXHRcdFx0Ly8gdG9nZ2xlIHVyZ2VuY3kgd2l0aCBidXR0b24gY2xpY2tcblx0XHRcdHByaW9yaXR5QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRcdHRhc2submV3UHJpb3JpdHkgPSAhdGFzay5wcmlvcml0eVxuXHRcdFx0XHRzZXRMb2NhbFN0b3JhZ2UoKVxuXHRcdFx0XHR0YXNrLnByaW9yaXR5ID8gcHJpb3JpdHlCdXR0b24uaW5uZXJUZXh0ID0gJ/CfmLEnIDogcHJpb3JpdHlCdXR0b24uaW5uZXJUZXh0ID0gJ/CfpbEnXG5cdFx0XHRcdHRhc2sucHJpb3JpdHkgPyBwcm9wZXJ0eVZhbHVlLmlubmVyVGV4dCA9IFVSR0VOVDogcHJvcGVydHlWYWx1ZS5pbm5lclRleHQgPSBOT1JNQUxcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBjcmVhdGUgZWRpdCBidXR0b24gZm9yIGRhdGUgZmllbGQgcHJvcGVydGllc1xuXHRcdGNvbnN0IGVkaXRhYmxlRGF0ZVByb3BlcnRpZXMgPSBbJ2R1ZURhdGUnXVxuXHRcdGlmIChlZGl0YWJsZURhdGVQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3BlcnR5TmFtZSkpIHtcblx0XHRcdGNvbnN0IGRhdGVJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXHRcdFx0ZGF0ZUlucHV0TGFiZWwuZm9yID0gJ2R1ZS1kYXRlJ1xuXHRcdFx0ZGF0ZUlucHV0TGFiZWwuZGF0YXNldC5pZCA9IHRhc2tJZFxuXHRcdFx0ZGF0ZUlucHV0TGFiZWwuaW5uZXJUZXh0ID0gJ/Cfk4YnXG5cdFx0XHRcblx0XHRcdGNvbnN0IGRhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG5cdFx0XHRjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5cdFx0XHRkYXRlSW5wdXQudHlwZSA9ICdkYXRlJ1xuXHRcdFx0ZGF0ZUlucHV0LmlkID0gJ2R1ZS1kYXRlJ1xuXHRcdFx0ZGF0ZUZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUlucHV0KVxuXHRcdFx0XG5cdFx0XHRwcm9wZXJ0eUFjdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXRMYWJlbClcblx0XHRcdHByb3BlcnR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnR5QWN0aW9uQ29udGFpbmVyKVxuXG5cdFx0XHRkYXRlSW5wdXRMYWJlbC5vbmNsaWNrID0gKCkgPT4ge1xuXHRcdFx0XHRwcm9wZXJ0eVZhbHVlLnBhcmVudEVsZW1lbnQucmVwbGFjZUNoaWxkKGRhdGVGb3JtLCBwcm9wZXJ0eVZhbHVlKVxuXHRcdFx0XHRkYXRlSW5wdXQuZm9jdXMoKVxuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRkYXRlRm9ybS5vbmlucHV0ID0gKCkgPT4ge1xuXHRcdFx0XHR0YXNrLm5ld0R1ZURhdGUgPSB1Lm9mZnNldFRpbWVCeVpvbmUoZGF0ZUlucHV0LnZhbHVlQXNEYXRlKVxuXHRcdFx0XHRzZXRMb2NhbFN0b3JhZ2UoKVxuXHRcdFx0XHRcblx0XHRcdFx0cHJvcGVydHlWYWx1ZS5pbm5lclRleHQgPSB0YXNrLmR1ZURhdGVcblx0XHRcdFx0ZGF0ZUZvcm0ucGFyZW50RWxlbWVudC5yZXBsYWNlQ2hpbGQocHJvcGVydHlWYWx1ZSwgZGF0ZUZvcm0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Y29uc3QgZWRpdGFibGVMaXN0UHJvcGVydGllcyA9IFsnY2hlY2tsaXN0J11cblx0XHRpZiAoZWRpdGFibGVMaXN0UHJvcGVydGllcy5pbmNsdWRlcyhwcm9wZXJ0eU5hbWUpKSB7XG5cdFx0XHQvLyBjcmVhdGUgbGlzdCBjb250YWluZXIgYW5kIHJlbW92ZSBwcm9wZXJ0eVZhbHVlIGVsZW1lbnQgKHApXG5cdFx0XHRjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKVxuXHRcdFx0bGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9wZXJ0eS12YWx1ZScsICdjaGVja2xpc3QnKVxuXHRcdFx0cHJvcGVydHlMYWJlbENvbnRhaW5lci5yZXBsYWNlQ2hpbGQobGlzdENvbnRhaW5lciwgcHJvcGVydHlWYWx1ZSlcblxuXHRcdFx0Ly8gcmVuZGVyIGFsbCBleGlzdGluZyBpdGVtcyBmcm9tIGxvY2Fsc3RvcmFnZVxuXHRcdFx0cHJvcGVydHkuZm9yRWFjaChpdGVtID0+IGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEl0ZW1FbGVtZW50KGl0ZW0pKSlcblx0XHRcdFxuXHRcdFx0Ly8gY3JlYXRlIGJ1dHRvbiB0byBhZGQgaXRlbSB0byBjaGVja2xpc3Rcblx0XHRcdGNvbnN0IG5ld0NoZWNrbGlzdEl0ZW1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXHRcdFx0bmV3Q2hlY2tsaXN0SXRlbUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLWNoZWNrbGlzdC1pdGVtJylcblx0XHRcdG5ld0NoZWNrbGlzdEl0ZW1CdXR0b24uaW5uZXJUZXh0ID0gJ+KelSdcblxuXHRcdFx0cHJvcGVydHlBY3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2hlY2tsaXN0SXRlbUJ1dHRvbilcblx0XHRcdHByb3BlcnR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb3BlcnR5QWN0aW9uQ29udGFpbmVyKVxuXG5cdFx0XHRuZXdDaGVja2xpc3RJdGVtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gbGlzdGVuIChlKSB7XG5cdFx0XHRcdC8vIHJlbW92ZSBldmVudCBsaXN0ZW5lciBmcm9tIGJ1dHRvblxuXHRcdFx0XHRuZXdDaGVja2xpc3RJdGVtQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGlzdGVuKVxuXHRcdFx0XHRhZGRMaXN0SXRlbShlLCBsaXN0Q29udGFpbmVyLCB0YXNrKVxuXHRcdFx0fSlcblx0XHR9XG5cdFx0XG5cdFx0cmV0dXJuIHByb3BlcnR5Q29udGFpbmVyXG5cdH1cblxuXHRmdW5jdGlvbiBlZGl0VGV4dENvbnRlbnRzIChlLCBwcm9wZXJ0eVZhbHVlLCB0YXNrKSB7XG5cdFx0Ly8gaGlkZSBlZGl0IGJ1dHRvblxuXHRcdGNvbnN0IGVkaXRCdXR0b24gPSBlLnRhcmdldFxuXHRcdGVkaXRCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcblxuXHRcdC8vIGNyZWF0ZSBpbnB1dCBmb3JtIG92ZXIgcHJvcGVydHlWYWx1ZSBlbGVtZW50XG5cdFx0Y29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG5cdFx0cHJvcGVydHlWYWx1ZS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxuXHRcdHByb3BlcnR5VmFsdWUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChpbnB1dEZvcm0pXG5cdFx0Y29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0XHQvLyBjcmVhdGUgdGV4dCBwbGFjZWhvbGRlciB0ZXh0IGluIGZvcm0gaW5wdXRcblx0XHRpZiAocHJvcGVydHlWYWx1ZS5pbm5lclRleHQgPT09ICdOb25lJyB8fCBwcm9wZXJ0eVZhbHVlLmlubmVyVGV4dCA9PT0gJ05vIG5vdGVzIHlldCcgfHwgcHJvcGVydHlWYWx1ZS5pbm5lclRleHQgPT09ICcnKSB7XG5cdFx0XHRjb25zdCBsYWJlbCA9IHByb3BlcnR5VmFsdWUucGFyZW50Tm9kZS5maXJzdENoaWxkLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpXG5cdFx0XHRpbnB1dEZpZWxkLnBsYWNlaG9sZGVyID0gYEFkZCAke2xhYmVsfS4uLmBcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5wdXRGaWVsZC52YWx1ZSA9IHByb3BlcnR5VmFsdWUuaW5uZXJUZXh0XG5cdFx0fVxuXHRcdGlucHV0Rm9ybS5hcHBlbmQoaW5wdXRGaWVsZClcblx0XHRpbnB1dEZpZWxkLmZvY3VzKClcblxuXHRcdC8vIHNhdmUgdGV4dCBpbnB1dCB0byB0YXNrIG9iamVjdCBhbmQgcmVuZGVyIGNoYW5nZXNcblx0XHRpbnB1dEZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRcdC8vIHNlbGVjdCBjdXJyZW50IHRhc2sgdXNpbmcgZGF0YS1pZCAoY3JlYXRlZCBvbiBlZGl0IGJ1dHRvbilcblx0XHRcdGNvbnN0IHByb3BlcnR5TmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZmlyc3RDaGlsZC5pbm5lclRleHRcblx0XHRcdGNvbnN0IHByb3BlcnR5ID0gdS5oZWFkbGluZVRvVGFza01ldGhvZHMocHJvcGVydHlOYW1lKVxuXHRcdFx0Ly8gcmV0dXJucyBhbmQgb2JqZWN0IGNvbnRhaW5pbmcgc2V0dGVyIGFuZCBnZXR0ZXIgbmFtZXNcblx0XHRcdC8vIGZvciBjdXJyZW50IHRhc2sgcHJvcGVydHlcblx0XHRcdC8vIGFjY2VzcyB1c2luZyB0YXNrW3Byb3BlcnR5LnNldHRlcl0gKHRhc2submV3RGVzY3JpcHRpb24pXG5cdFx0XHQvLyBvciB0YXNrW3Byb3BlcnR5LmdldHRlcl0gKHRhc2suZGVzY3JpcHRpb24pXG5cdFx0XHR0YXNrW3Byb3BlcnR5LnNldHRlcl0gPSBpbnB1dEZpZWxkLnZhbHVlXG5cblx0XHRcdC8vIHJlc3RvcmUgaGlkZGVuIGVsZW1lbnRzIGFuZCBkaXNwbGF5IHByb3BlcnR5XG5cdFx0XHRpbnB1dEZvcm0ucmVtb3ZlKClcblx0XHRcdHByb3BlcnR5VmFsdWUuaW5uZXJUZXh0ID0gdGFza1twcm9wZXJ0eS5nZXR0ZXJdXG5cdFx0XHRwcm9wZXJ0eVZhbHVlLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG5cdFx0XHRlZGl0QnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXG5cblx0XHRcdHNldExvY2FsU3RvcmFnZSgpXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlTGlzdEl0ZW1FbGVtZW50IChpdGVtVGV4dCkge1xuXHRcdC8vIGNyZWF0ZXMgYSBzaW5nbGUgY2hlY2tsaXN0IGl0ZW1cblx0XHQvLyBtYXkgcGFzcyBpbiB0ZXh0IGZyb20gbG9jYWxTdG9yYWdlIGluIGEgZm9yIGVhY2ggZnVuY3Rpb24gb3Jcblx0XHQvLyBieSByZWFkaW5nIGZyb20gYSB0YXNrIG9iamVjdFxuXG5cdFx0Ly8gY3JlYXRlIG5ldyBjaGVja2xpc3QgYW5kIGFjdGlvbiBlbGVtZW50cyBpbiBhIGNvbnRhaW5lciBcblx0XHRjb25zdCBjaGVja0xpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXHRcdGNoZWNrTGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2hlY2tsaXN0LWl0ZW0tY29udGFpbmVyJylcblx0XHRjb25zdCBjaGVja0xpc3RWYWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXHRcdGNoZWNrTGlzdFZhbHVlLmNsYXNzTGlzdC5hZGQoJ2NoZWNrbGlzdC1pdGVtJylcblx0XHRjb25zdCBjaGVja0xpc3RBY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdGNoZWNrTGlzdEFjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGVja2xpc3QtYWN0aW9ucycpXG5cblx0XHQvLyBhZGQgdGV4dCB0byBlbGVtZW50IGZyb20gY2hlY2tsaXN0IHByb3BlcnR5IG9uIHRhc2sgb2JqZWN0IFxuXHRcdGNoZWNrTGlzdFZhbHVlLmlubmVyVGV4dCA9IGl0ZW1UZXh0XG5cblx0XHQvLyByZXBsYWNlIGZvcm0gd2l0aCB1cGRhdGVkIHRhc2sgZWxlbWVudFxuXHRcdGNoZWNrTGlzdEl0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tMaXN0VmFsdWUpXG5cdFx0Y2hlY2tMaXN0SXRlbS5hcHBlbmRDaGlsZChjaGVja0xpc3RBY3Rpb25Db250YWluZXIpXG5cblx0XHRyZXR1cm4gY2hlY2tMaXN0SXRlbVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkTGlzdEl0ZW0gKGUsIGxpc3RDb250YWluZXIsIHRhc2spIHtcblx0XHRsZXQgYnV0dG9uID0gZS50YXJnZXRcblxuXHRcdC8vIGNyZWF0ZSBpbnB1dCBmaWVsZCB0byB0eXBlIGxpc3QgaXRlbSBjb250ZW50IGludG9cblx0XHRjb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcblx0XHRjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuXHRcdGlucHV0RmllbGQudHlwZSA9ICd0ZXh0J1xuXHRcdGlucHV0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKVxuXHRcdGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRGb3JtKVxuXHRcdGlucHV0RmllbGQuZm9jdXMoKVxuXG5cdFx0Ly8gYWRkIGxpc3QgaXRlbSBjb250ZW50IHRvIGNoZWNrbGlzdCBwcm9wZXJ0eSBvbiB0YXNrIG9iamVjdFxuXHRcdGlucHV0Rm9ybS5vbnN1Ym1pdCA9IChlKSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRcdC8vIHdyaXRlIGZvcm0gdmFsdWUgdG8gdGFzayBvYmplY3Rcblx0XHRcdHRhc2submV3Q2hlY2tsaXN0ID0gaW5wdXRGaWVsZC52YWx1ZVxuXG5cdFx0XHQvLyByZXBsYWNlIGZvcm0gd2l0aCBjaGVja2xpc3QgdmFsdWVcblx0XHRcdGxpc3RDb250YWluZXIucmVwbGFjZUNoaWxkKGNyZWF0ZUxpc3RJdGVtRWxlbWVudCh0YXNrLmxhc3RDaGVja2xpc3QpLCBpbnB1dEZvcm0pXG5cdFx0XHRzZXRMb2NhbFN0b3JhZ2UoKVxuXG5cdFx0XHQvLyBhZGQgZXZlbnQgbGlzdGVuZXIgYmFjayB0byBidXR0b24gZm9yIG1vcmUgY2hlY2tsaXN0IGl0ZW1zXG5cdFx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiBsaXN0ZW4gKGUpIHtcblx0XHRcdFx0Ly8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVyIGZyb20gYnV0dG9uIHdoZW4gY2xpY2tlZFxuXHRcdFx0XHRidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsaXN0ZW4pXG5cdFx0XHRcdGFkZExpc3RJdGVtKGUsIGxpc3RDb250YWluZXIsIHRhc2spXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGV0ZVRhc2sgKGUpIHtcblx0XHRjb25zdCB0YXNrSWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5pZFxuXHRcdHRhc2tzLnRhc2tMaXN0LmZpbmQoIChvYmosIGluZGV4KSA9PiB7XG5cdFx0XHRpZiAob2JqLmlkID09IHRhc2tJZCkge1xuXHRcdFx0XHR0YXNrcy50YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpXG5cdFx0XHRcdHJldHVybiB0cnVlXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRcblx0XHRyZW5kZXJDdXJyZW50VGFza3Moc3RhdGUuY3VycmVudFByb2plY3QpXG5cdFx0c2V0TG9jYWxTdG9yYWdlKClcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlclRhc2tEZWxldGVCdXR0b24gKHBhcmVudEVsZW1lbnQsIHRhc2spIHtcblx0XHRjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuXHRcdGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtYnV0dG9uJylcblx0XHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndGFzay1kZWxldGUtYnV0dG9uJylcblx0XHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncG9wLW91dCcpXG5cdFx0ZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUtb3V0JylcblxuXHRcdGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSAn8J+XkSdcblx0XHRwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcblx0XHRcblx0XHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVUYXNrKVxuXHR9XG5cblx0ZnVuY3Rpb24gZGVsZXRlUHJvamVjdCAoZSkge1xuXHRcdGNvbnN0IHRhYkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC10YWInKVxuXHRcdGNvbnNvbGUubG9nKHRhYkxpc3QubGVuZ3RoKVxuXHRcdGlmICh0YWJMaXN0Lmxlbmd0aCA8IDMpIHtcblx0XHRcdGFsZXJ0KFwiQ2FuJ3QgZGVsZXRlIHRoZSBsYXN0IHByb2plY3QuIENyZWF0ZSBhIG5ldyBwcm9qZWN0IGZpcnN0LlwiKVxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZFxuXHRcdH1cblx0XHQvLyBzZWxlY3QgcHJvamVjdCB0YWIgYW5kIGdldCBuYW1lXG5cdFx0Y29uc3QgY3VycmVudFByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXByb2plY3QtdGFiJylcblx0XHRjb25zdCBjdXJyZW50UHJvamVjdE5hbWUgPSBjdXJyZW50UHJvamVjdFRhYi5kYXRhc2V0LnByb2plY3RcblxuXHRcdC8vIGRlbGV0ZSBhbGwgdGFza3MgYXNzb2NpYXRlZCB3aXRoIHByb2plY3QgaW4gcmV2ZXJzZSBvcmRlclxuXHRcdGZvciAobGV0IHRhc2tJbmRleCA9IHRhc2tzLnRhc2tMaXN0Lmxlbmd0aCAtIDE7IHRhc2tJbmRleCA+PSAwOyB0YXNrSW5kZXgtLSkge1xuXHRcdFx0aWYgKHRhc2tzLnRhc2tMaXN0W3Rhc2tJbmRleF0ucGFyZW50UHJvamVjdCA9PT0gY3VycmVudFByb2plY3ROYW1lKSB7XG5cdFx0XHRcdHRhc2tzLnRhc2tMaXN0LnNwbGljZSh0YXNrSW5kZXgsIDEpXG5cdFx0XHR9XG5cdFx0fVxuXHRcdHNldExvY2FsU3RvcmFnZSgpXG5cdFx0Ly8gZGVsZXRlIHByb2plY3QgdGFiXG5cdFx0Y3VycmVudFByb2plY3RUYWIucmVtb3ZlKClcblx0XHQvLyBjbGljayBmaXJzdCBidXR0b24gaW4gcHJvamVjdCBsYXlvdXRcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWJzJykuZmlyc3RDaGlsZC5jbGljaygpXG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXJQcm9qZWN0RGVsZXRlQnV0dG9uIChwYXJlbnRFbGVtZW50KSB7XG5cdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblx0XHRkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ1dHRvbicpXG5cdFx0ZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGVsZXRlLWJ1dHRvbicpXG5cdFx0ZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BvcC1vdXQnKVxuXHRcdGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW91dCcpXG5cblx0XHRkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ/Cfl5EnXG5cdFx0cGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG5cblx0XHRkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVQcm9qZWN0KVxuXHR9XG5cbiAgZnVuY3Rpb24gcmVuZGVyU2luZ2xlVGFzayAodGFzaykge1xuXG5cdFx0Y29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdHRhc2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZWxlbWVudCcpXG5cdFx0dGFza0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wLW91dCcpXG5cdFx0dGFza0VsZW1lbnQuZGF0YXNldC5pZCA9IHRhc2suaWRcblxuXHRcdGNvbnN0IHRvcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cdFx0dG9wQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stdG9wLWNvbnRhaW5lcicpXG5cdFx0dGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKVxuXHRcdFxuXHRcdGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cdFx0dGFza1RleHQuY2xhc3NMaXN0LmFkZCgndGFzay10aXRsZScpXG5cdFx0dGFza1RleHQuaW5uZXJUZXh0ID0gdGFzay50aXRsZVxuXHRcdHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGV4dClcblxuXHRcdGNvbnN0IGNvbXBsZXRlZENoZWNrYm94UGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXHRcdGNvbXBsZXRlZENoZWNrYm94UGFyZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2stc3RhdHVzJylcblx0XHRjb21wbGV0ZWRDaGVja2JveFBhcmVudC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW91dCcpXG5cdFx0Y29uc3QgY29tcGxldGVkQ2hlY2tib3hDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0XHRjb21wbGV0ZWRDaGVja2JveENoaWxkLnR5cGUgPSAnY2hlY2tib3gnXG5cdFx0Ly8gc2V0IGNoZWNrYm94IGFzIHBlciB0YXNrIHN0YXR1c1xuXHRcdHRhc2suc3RhdHVzID8gY29tcGxldGVkQ2hlY2tib3hDaGlsZC5jaGVja2VkID0gdHJ1ZSA6IGNvbXBsZXRlZENoZWNrYm94Q2hpbGQuY2hlY2tlZCA9IGZhbHNlXG5cdFx0Y29uc3QgY3VzdG9tQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRcdGN1c3RvbUNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jylcblx0XHRjb21wbGV0ZWRDaGVja2JveFBhcmVudC5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveENoaWxkKVxuXHRcdGNvbXBsZXRlZENoZWNrYm94UGFyZW50LmFwcGVuZENoaWxkKGN1c3RvbUNoZWNrYm94KVxuXHRcdHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveFBhcmVudClcblxuXHRcdGNvbnN0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cdFx0ZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZXhwYW5kJylcblx0XHRleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS1vdXQnKVxuXHRcdGV4cGFuZEJ1dHRvbi5pbm5lclRleHQgPSAn8J+UjSdcblx0XHR0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQoZXhwYW5kQnV0dG9uKVxuXG5cdFx0Ly8gY3JlYXRlIHRhc2sgZGV0YWlsIGNvbnRhaW5lclxuXHRcdGNvbnN0IHRhc2tEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcblx0XHR0YXNrRGV0YWlscy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRldGFpbHMnKVxuXHRcdHRhc2tEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG5cdFx0dGFza0VsZW1lbnQuYXBwZW5kQ2hpbGQodGFza0RldGFpbHMpXG5cdFx0XG5cdFx0Ly8gZHJhdyB0YXNrIGRldGFpbHNcblx0XHR0YXNrRGV0YWlscy5hcHBlbmRDaGlsZChidWlsZFRhc2tQcm9wZXJ0eSgncGFyZW50UHJvamVjdCcsIHRhc2sucGFyZW50UHJvamVjdCwgdGFzaykpXG5cdFx0dGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoYnVpbGRUYXNrUHJvcGVydHkoJ2Rlc2NyaXB0aW9uJywgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5pZCwgdGFzaykpXG5cdFx0dGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoYnVpbGRUYXNrUHJvcGVydHkoJ2RhdGVDcmVhdGVkJywgdGFzay5kYXRlQ3JlYXRlZCwgdGFzay5pZCwgdGFzaykpXG5cdFx0dGFza0RldGFpbHMuYXBwZW5kQ2hpbGQoYnVpbGRUYXNrUHJvcGVydHkoJ2R1ZURhdGUnLCB0YXNrLmR1ZURhdGUsIHRhc2suaWQsIHRhc2spKVxuXHRcdHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGJ1aWxkVGFza1Byb3BlcnR5KCdwcmlvcml0eScsIHRhc2sucHJpb3JpdHksIHRhc2suaWQsIHRhc2spKVxuXHRcdHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGJ1aWxkVGFza1Byb3BlcnR5KCdub3RlcycsIHRhc2subm90ZXMsIHRhc2suaWQsIHRhc2spKVxuXHRcdHRhc2tEZXRhaWxzLmFwcGVuZENoaWxkKGJ1aWxkVGFza1Byb3BlcnR5KCdjaGVja2xpc3QnLCB0YXNrLmNoZWNrbGlzdCwgdGFzay5pZCwgdGFzaykpXG5cblx0XHRjdXJyZW50VGFza3MuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpXG5cblx0XHQvLyBldmVudCB0byB0b2dnbGUgdGFza3MgYXMgY29tcGxldGVcblx0XHRjb21wbGV0ZWRDaGVja2JveENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0XHRcdGNvbnN0IHRhc2tJZCA9ICtlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5kYXRhc2V0LmlkXG5cdFx0XHRjb25zdCBjdXJyZW50VGFzayA9IHRhc2tzLnRhc2tMaXN0LmZpbHRlcih0YXNrID0+IHRhc2suaWQgPT09IHRhc2tJZClbMF1cblx0XHRcdGlmIChjb21wbGV0ZWRDaGVja2JveENoaWxkLmNoZWNrZWQpIHtcblx0XHRcdFx0Y3VycmVudFRhc2suc2V0U3RhdHVzID0gdHJ1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFRhc2suc2V0U3RhdHVzID0gZmFsc2Vcblx0XHRcdH1cblx0XHRcdHNldExvY2FsU3RvcmFnZSgpXG5cdFx0fSlcblxuXHRcdC8vIGV2ZW50IHRvIG9wZW4gZGV0YWlscyBmb3IgYSB0YXNrXG5cdFx0ZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXHRcdFx0dGFza0RldGFpbHMuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcblx0XHR9KVxuXG5cdFx0cmVuZGVyVGFza0RlbGV0ZUJ1dHRvbih0YXNrRGV0YWlscywgdGFzaylcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZU5ld1Rhc2sgKCkge1xuXHRcdC8vIHNlbGVjdCBidXR0b24gb24gZG9tIGFuZCByZW1vdmUgZXZlbnQgbGlzdGVuZXJcblx0XHRjb25zdCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10YXNrJylcblx0XHRuZXdUYXNrQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlTmV3VGFzaylcblx0XHRuZXdUYXNrQnV0dG9uLmlubmVyVGV4dCA9ICcnXG5cdFx0Ly8gY3JlYXRlIGEgZm9ybSBvbiB0aGUgYnV0dG9uXG5cdFx0Y29uc3QgaW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG5cdFx0bmV3VGFza0J1dHRvbi5hcHBlbmRDaGlsZChpbnB1dEZvcm0pXG5cdFx0Y29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcblx0XHRpbnB1dEZpZWxkLnR5cGUgPSAndGV4dCdcblx0XHRpbnB1dEZpZWxkLmlkID0gJ25ldy10YXNrLW5hbWUnXG5cdFx0aW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9ICdOZXcgVGFzayBOYW1lLi4uJ1xuXHRcdGlucHV0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkKVxuXHRcdGlucHV0RmllbGQuZm9jdXMoKVxuXHRcdC8vIHNldCBldmVudCBsaXN0ZW5lciBmb3IgaW5wdXQgY29tcGxldGlvblxuXHRcdGlucHV0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Ly8gY3JlYXRlIHRhc2tcblx0XHRcdHJlbmRlclNpbmdsZVRhc2sodGFza3MuYWRkVGFzayhpbnB1dEZpZWxkLnZhbHVlLCBzdGF0ZS5jdXJyZW50UHJvamVjdC5uYW1lKSlcblx0XHRcdC8vIHJlbW92ZSBuZXcgdGFzayBidXR0b24gYW5kIGNyZWF0ZSBhbm90aGVyIGF0IHRoZSBib3R0b21cblx0XHRcdG5ld1Rhc2tCdXR0b24ucmVtb3ZlKClcblx0XHRcdHJlbmRlckNyZWF0ZVRhc2tFbGVtZW50KClcblx0XHRcdHNldExvY2FsU3RvcmFnZSgpXG5cblx0XHRcdC8vIG1vdmUgcHJvamVjdCBkZWxldGUgYnV0dG9uIHRvIGJvdHRvbVxuXHRcdFx0Y29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtZGVsZXRlLWJ1dHRvbicpXG5cdFx0XHRkZWxldGVCdXR0b24ucmVtb3ZlKClcblx0XHRcdHJlbmRlclByb2plY3REZWxldGVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpKVxuXHRcdH0pXG5cdFx0XG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXJDcmVhdGVUYXNrRWxlbWVudCAoKSB7XG5cdFx0Y29uc3QgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cdFx0bmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFzaycpXG5cdFx0bmV3VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlLW91dCcpXG5cdFx0bmV3VGFza0J1dHRvbi5pbm5lclRleHQgPSAnQ3JlYXRlIE5ldyBUYXNrJ1xuXHRcdG5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVOZXdUYXNrKVxuXHRcdGN1cnJlbnRUYXNrcy5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyQ3VycmVudFRhc2tzIChjdXJyZW50UHJvamVjdCkge1xuXHRcdGN1cnJlbnRUYXNrcy5yZXBsYWNlQ2hpbGRyZW4oKVxuXHRcdHRhc2tzLnRhc2tMaXN0LmZvckVhY2goICh0YXNrKSA9PiB7XG5cdFx0XHRpZiAodGFzay5wYXJlbnRQcm9qZWN0ID09PSBjdXJyZW50UHJvamVjdC5uYW1lKSB7XG5cdFx0XHRcdHJlbmRlclNpbmdsZVRhc2sodGFzaylcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0cmVuZGVyQ3JlYXRlVGFza0VsZW1lbnQoKVxuXHRcdHJlbmRlclByb2plY3REZWxldGVCdXR0b24oY3VycmVudFRhc2tzKVxuXHR9XG5cblx0ZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlICgpIHtcbiAgICBjb25zdCB0YXNrTGlzdFNlcmlhbGl6ZWQgPSBKU09OLnN0cmluZ2lmeSh0YXNrcy50YXNrTGlzdClcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza0xpc3QnLCB0YXNrTGlzdFNlcmlhbGl6ZWQpXG4gIH1cblxuXHRmdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2UgKCkge1xuXHRcdGNvbnN0IHRhc2tMaXN0RGVzZXJpYWxpemVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza0xpc3QnKSlcblx0XHR0YXNrTGlzdERlc2VyaWFsaXplZC5mb3JFYWNoKHRhc2sgPT4ge1xuXHRcdFx0dGFza3MuYWRkVGFzayh0YXNrLnRpdGxlLCB0YXNrLnBhcmVudFByb2plY3QsIHRhc2spXG5cdFx0XHRpZiAoIHByb2plY3RzLnByb2plY3RMaXN0LmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gdGFzay5wYXJlbnRQcm9qZWN0KS5sZW5ndGggPT09IDAgKSB7XG5cdFx0XHRcdFx0cHJvamVjdHMuYWRkUHJvamVjdCh0YXNrLnBhcmVudFByb2plY3QpXG5cdFx0XHRcdH1cblx0XHR9KVxuXHR9XG5cblx0Ly8gcmVuZGVyIHRhc2tzIFxuXHRjb25zdCBjdXJyZW50VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXHRjdXJyZW50VGFza3MuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0JylcblxuICByZXR1cm4geyBjdXJyZW50VGFza3MsIHN0YXRlLCByZW5kZXJDdXJyZW50VGFza3MsIGdldExvY2FsU3RvcmFnZSwgc2V0TG9jYWxTdG9yYWdlIH1cblxufSApICgpXG5cbmV4cG9ydCB7IHRhc2tMYXlvdXQgfSIsIlxuY29uc3QgcHJvamVjdHMgPSAoICgpID0+IHtcblxuXHRjb25zdCBwcm9qZWN0TGlzdCA9IFtdXG5cblx0Y29uc3QgcHJvamVjdEZhY3RvcnkgPSAoIHByb2plY3ROYW1lICkgPT4ge1xuXHRcdFxuXHRcdGxldCBuYW1lID0gcHJvamVjdE5hbWVcblx0XHRjb25zdCBpZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogOTk5OTk5KVxuXHRcdFxuXHRcdHJldHVybiB7XG5cdFx0XHRnZXQgbmFtZSgpIHtcblx0XHRcdFx0cmV0dXJuIG5hbWVcblx0XHRcdH0sXG5cdFx0XHRzZXQgbmV3TmFtZShuZXdOYW1lKSB7XG5cdFx0XHRcdG5hbWUgPSBuZXdOYW1lXG5cdFx0XHR9LFxuXHRcdFx0Z2V0IGlkKCkge1xuXHRcdFx0XHRyZXR1cm4gaWRcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cdGNvbnN0IGFkZFByb2plY3QgPSAoIG5hbWUgKSA9PiB7XG5cdFx0Y29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KG5hbWUpXG5cdFx0cHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KVxuXHR9XG5cblx0cmV0dXJuIHsgcHJvamVjdExpc3QsIGFkZFByb2plY3QgfVxufSApICgpIFxuXG5leHBvcnQgeyBwcm9qZWN0cyB9IiwiaW1wb3J0IHsgdGFza0xheW91dCB9IGZyb20gXCIuLi9sYXlvdXRzL3Rhc2tzXCJcbmltcG9ydCB7IHV0aWxpdHkgYXMgdSB9IGZyb20gXCIuL3V0aWxpdHlGdW5jdGlvbnNcIlx0XG5cbmNvbnN0IHRhc2tzID0gKCgpID0+IHtcblx0XG5cdGNvbnN0IHRhc2tMaXN0ID0gW11cblxuXHRjb25zdCB0YXNrRmFjdG9yeSA9ICh0YXNrVGl0bGUsIHByb2plY3ROYW1lLCBrbm93blByb3BlcnRpZXMgPSB7fSApID0+IHtcblx0XHRcblxuXHRcdGxldCB0aXRsZSA9IHRhc2tUaXRsZVxuXHRcdGxldCBzdGF0dXMgPSBrbm93blByb3BlcnRpZXMuc3RhdHVzIHx8IGZhbHNlXG5cdFx0Y29uc3QgaWQgPSBrbm93blByb3BlcnRpZXMuaWQgfHwgTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA5OTk5OTkpXG5cdFx0bGV0IHBhcmVudFByb2plY3QgPSBrbm93blByb3BlcnRpZXMucGFyZW50UHJvamVjdCB8fCBwcm9qZWN0TmFtZVxuXHRcdGxldCBkZXNjcmlwdGlvbiA9IGtub3duUHJvcGVydGllcy5kZXNjcmlwdGlvbiB8fCAnTm9uZSdcblx0XHRsZXQgZGF0ZUNyZWF0ZWQgPSBuZXcgRGF0ZSgpXG5cdFx0aWYgKGtub3duUHJvcGVydGllcy5kYXRlQ3JlYXRlZCkge1xuXHRcdFx0bGV0IHV0Y0RhdGUgPSBuZXcgRGF0ZShrbm93blByb3BlcnRpZXMuZGF0ZUNyZWF0ZWQpXG5cdFx0XHRkYXRlQ3JlYXRlZCA9IHUub2Zmc2V0VGltZUJ5Wm9uZSh1dGNEYXRlKVxuXHRcdH1cblx0XHRsZXQgZHVlRGF0ZSA9ICdOb25lJ1xuXHRcdGlmIChrbm93blByb3BlcnRpZXMuZHVlRGF0ZSAmJiBrbm93blByb3BlcnRpZXMuZHVlRGF0ZSAhPT0gJ05vbmUnKSB7XG5cdFx0XHRsZXQgdXRjRGF0ZSA9IG5ldyBEYXRlKGtub3duUHJvcGVydGllcy5kdWVEYXRlKVxuXHRcdFx0ZHVlRGF0ZSA9IHUub2Zmc2V0VGltZUJ5Wm9uZSh1dGNEYXRlKVxuXHRcdH1cblx0XHRsZXQgcHJpb3JpdHkgPSBrbm93blByb3BlcnRpZXMucHJpb3JpdHkgfHwgZmFsc2Vcblx0XHRsZXQgbm90ZXMgPSBrbm93blByb3BlcnRpZXMubm90ZXMgfHwgJ05vIG5vdGVzIHlldCdcblx0XHRsZXQgY2hlY2tsaXN0ID0ga25vd25Qcm9wZXJ0aWVzLmNoZWNrbGlzdCB8fCBbXVxuXG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Z2V0IHRpdGxlKCkge1xuXHRcdFx0XHRyZXR1cm4gdGl0bGVcblx0XHRcdH0sXG5cdFx0XHRzZXQgbmV3VGl0bGUobmV3VGl0bGUpIHtcblx0XHRcdFx0dGl0bGUgPSBuZXdUaXRsZVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IHN0YXR1cygpIHtcblx0XHRcdFx0cmV0dXJuIHN0YXR1c1xuXHRcdFx0fSxcblx0XHRcdHNldCBzZXRTdGF0dXMoYm9vbCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIGJvb2wgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRcdHN0YXR1cyA9IGJvb2xcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGlkKCkge1xuXHRcdFx0XHRyZXR1cm4gaWRcblx0XHRcdH0sXG5cblx0XHRcdGdldCBwYXJlbnRQcm9qZWN0KCkge1xuXHRcdFx0XHRyZXR1cm4gcGFyZW50UHJvamVjdFxuXHRcdFx0fSxcblx0XHRcdHNldCBuZXdQYXJlbnRQcm9qZWN0KG5ld1Byb2plY3ROYW1lKSB7XG5cdFx0XHRcdHBhcmVudFByb2plY3QgPSBuZXdQcm9qZWN0TmFtZVxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGRlc2NyaXB0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gZGVzY3JpcHRpb25cblx0XHRcdH0sXG5cdFx0XHRzZXQgbmV3RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcblx0XHRcdFx0ZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGRhdGVDcmVhdGVkKCkge1xuXHRcdFx0XHRyZXR1cm4gYCR7ZGF0ZUNyZWF0ZWQuZ2V0RnVsbFllYXIoKX0tJHt1LnBhZFplcm8oZGF0ZUNyZWF0ZWQuZ2V0TW9udGgoKSArIDEpfS0ke3UucGFkWmVybyhkYXRlQ3JlYXRlZC5nZXREYXRlKCkpfWBcblx0XHRcdH0sXG5cdFx0XHRnZXQgZGF0ZUNyZWF0ZWRBc0RhdGUoKSB7XG5cdFx0XHRcdHJldHVybiBkYXRlQ3JlYXRlZFxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0IGR1ZURhdGUoKSB7XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgZHVlRGF0ZSA9PT0gJ29iamVjdCcgXG5cdFx0XHRcdFx0PyBgJHtkdWVEYXRlLmdldEZ1bGxZZWFyKCl9LSR7dS5wYWRaZXJvKGR1ZURhdGUuZ2V0TW9udGgoKSArIDEpfS0ke3UucGFkWmVybyhkdWVEYXRlLmdldERhdGUoKSl9YFxuXHRcdFx0XHRcdDogJ05vbmUnXG5cdFx0XHR9LFxuXHRcdFx0Z2V0IGR1ZURhdGVBc0RhdGUoKSB7XG5cdFx0XHRcdHJldHVybiB0eXBlb2YgZHVlRGF0ZSA9PT0gJ29iamVjdCdcblx0XHRcdFx0XHQ/IGR1ZURhdGVcblx0XHRcdFx0XHQ6IHVuZGVmaW5lZFxuXHRcdFx0fSxcblx0XHRcdHNldCBuZXdEdWVEYXRlKG5ld0R1ZURhdGUpIHtcblx0XHRcdFx0ZHVlRGF0ZSA9IG5ld0R1ZURhdGVcblx0XHRcdH0sXG5cblx0XHRcdGdldCBwcmlvcml0eSgpIHtcblx0XHRcdFx0cmV0dXJuIHByaW9yaXR5XG5cdFx0XHR9LFxuXHRcdFx0c2V0IG5ld1ByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XG5cdFx0XHRcdHByaW9yaXR5ID0gbmV3UHJpb3JpdHlcblx0XHRcdH0sXG5cblx0XHRcdGdldCBub3RlcygpIHtcblx0XHRcdFx0cmV0dXJuIG5vdGVzXG5cdFx0XHR9LFxuXHRcdFx0c2V0IG5ld05vdGVzKG5ld05vdGVzKSB7XG5cdFx0XHRcdG5vdGVzID0gbmV3Tm90ZXNcblx0XHRcdH0sXG5cblx0XHRcdGdldCBjaGVja2xpc3QoKSB7XG5cdFx0XHRcdHJldHVybiBjaGVja2xpc3Rcblx0XHRcdH0sXG5cdFx0XHRnZXQgbGFzdENoZWNrbGlzdCgpIHtcblx0XHRcdFx0cmV0dXJuIGNoZWNrbGlzdFtjaGVja2xpc3QubGVuZ3RoLTFdXG5cdFx0XHR9LFxuXHRcdFx0c2V0IG5ld0NoZWNrbGlzdChuZXdDaGVja2xpc3QpIHtcblx0XHRcdFx0Y2hlY2tsaXN0LnB1c2gobmV3Q2hlY2tsaXN0KVxuXHRcdFx0fSxcblx0XHR9XG5cdH1cblxuXHRjb25zdCBhZGRUYXNrID0gKCB0aXRsZSwgcHJvamVjdCwga25vd25Qcm9wZXJ0aWVzID0ge30gKSA9PiB7XG5cdFx0Y29uc3QgbmV3VGFzayA9IHRhc2tGYWN0b3J5KHRpdGxlLCBwcm9qZWN0LCBrbm93blByb3BlcnRpZXMgKVxuXHRcdHRhc2tMaXN0LnB1c2gobmV3VGFzaylcblx0XHRyZXR1cm4gbmV3VGFza1xuXHR9XG5cblx0cmV0dXJuIHsgdGFza0xpc3QsIGFkZFRhc2sgfVxufSkoKVxuXG5leHBvcnQgeyB0YXNrcyB9IiwiY29uc3QgdXRpbGl0eSA9ICgoKSA9PiB7XG4gIFxuICBmdW5jdGlvbiBjYW1lbFRvU25ha2UgKHN0cikge1xuICAgIGxldCBvdXRwdXQgPSBzdHIuc3BsaXQoJycpXG4gICAgbGV0IHJlZ2V4ID0gL1tBLVpdL2dcbiAgICBmb3IgKGxldCBsZXR0ZXIgaW4gb3V0cHV0KSB7XG4gICAgICBpZiAocmVnZXgudGVzdChzdHJbbGV0dGVyXSkpIHtcbiAgICAgICAgb3V0cHV0W2xldHRlcl0gPSBgLSR7c3RyW2xldHRlcl0udG9Mb3dlckNhc2UoKX1gXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQuam9pbignJylcbiAgfVxuICBcbiAgZnVuY3Rpb24gY2FtZWxUb0hlYWRsaW5lIChzdHIpIHtcbiAgICBsZXQgb3V0cHV0ID0gc3RyLnNwbGl0KCcnKVxuICAgIGxldCByZWdleCA9IC9bQS1aXS9nXG4gICAgb3V0cHV0WzBdID0gb3V0cHV0WzBdLnRvVXBwZXJDYXNlKClcbiAgICBmb3IgKGxldCBsZXR0ZXIgaW4gb3V0cHV0KSB7XG4gICAgICBpZiAocmVnZXgudGVzdChzdHJbbGV0dGVyXSkpIHtcbiAgICAgICAgb3V0cHV0W2xldHRlcl0gPSBgICR7c3RyW2xldHRlcl19YFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBoZWFkbGluZVRvVGFza01ldGhvZHMgKHN0cikge1xuICAgIGxldCBzcGxpdCA9IHN0ci5zcGxpdCgnICcpXG4gICAgbGV0IHNldHRlclN0cmluZyA9IGBuZXcke3NwbGl0LmpvaW4oJycpfWBcbiAgICBcbiAgICBzcGxpdFswXSA9IHNwbGl0WzBdLnRvTG93ZXJDYXNlKClcbiAgICBsZXQgZ2V0dGVyU3RyaW5nID0gc3BsaXQuam9pbignJylcbiAgICBjb25zb2xlLmxvZyhnZXR0ZXJTdHJpbmcpXG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGdldHRlcjogZ2V0dGVyU3RyaW5nLFxuICAgICAgc2V0dGVyOiBzZXR0ZXJTdHJpbmdcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYWRaZXJvIChudW0pIHtcbiAgICBpZiAobnVtLnRvU3RyaW5nKCkubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gYDAke251bX1gXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdyb3dJbnB1dEZpZWxkICgpIHtcblx0XHR0aGlzLnN0eWxlLndpZHRoID0gKHRoaXMudmFsdWUubGVuZ3RoICsgMikgKyAnY2gnXG5cdH1cblxuICBmdW5jdGlvbiBvZmZzZXRUaW1lQnlab25lIChkYXRlT2JqKSB7XG4gICAgY29uc3QgdGltZVpvbmVBZGp1c3RtZW50ID0gZGF0ZU9iai5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgbGV0IG91dHB1dE9iaiA9IG5ldyBEYXRlKGRhdGVPYmouc2V0TWludXRlcyhkYXRlT2JqLmdldE1pbnV0ZXMoKSArIHRpbWVab25lQWRqdXN0bWVudCkpXG4gICAgXG4gICAgcmV0dXJuIG91dHB1dE9ialxuICB9XG5cbiAgcmV0dXJuIHsgXG4gICAgY2FtZWxUb1NuYWtlLFxuICAgIGNhbWVsVG9IZWFkbGluZSxcbiAgICBoZWFkbGluZVRvVGFza01ldGhvZHMsXG4gICAgcGFkWmVybyxcbiAgICBncm93SW5wdXRGaWVsZCxcbiAgICBvZmZzZXRUaW1lQnlab25lLFxuICB9XG4gIFxufSkoKVxuXG5leHBvcnQgeyB1dGlsaXR5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IGFwcCB9IGZyb20gJy4vbGF5b3V0cy9hcHAnXG5pbXBvcnQgeyBoZWFkZXIgfSBmcm9tIFwiLi9sYXlvdXRzL2hlYWRlclwiXG5pbXBvcnQgeyBmb290ZXIgfSBmcm9tIFwiLi9sYXlvdXRzL2Zvb3RlclwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhlYWRlci5lbGVtZW50KVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAubGF5b3V0RWxlbWVudClcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvb3Rlci5lbGVtZW50KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==