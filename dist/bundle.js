/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n#main-container {\n    height: 100vh;\n    background-color: #f7f7bb;\n    display: flex;\n    flex-direction: column;\n}\n\n#head-container {\n    background-color: hsl(0, 0%, 75%);\n}\n\n#show-hide-btn {\n    border: 1px solid red;\n    width: 100%;\n    text-align: center;\n\n}\n\n#list-groups {\n    display: flex;\n    overflow-x: auto;\n    white-space: nowrap;\n    max-width: 100%;\n}\n\n.group-div{\n    border: 1px solid blue;\n}\n\n#add-group{\n    display: none;\n}\n\n\n\n#add-list-item {\n    border: 1px solid red;\n    display: none;\n}\n\n\n.display-div{\n    border: 1px solid blue;\n    display: flex;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/ListItem.js":
/*!*************************!*\
  !*** ./src/ListItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListItem: () => (/* binding */ ListItem)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nclass ListItem {\n    constructor(body, id = null,list) {\n        this.body = body;\n        this.id = id || this.generateUniqueId();\n        this.displayDiv = null; \n        this.displayP = null\n        this.saveBtn = null;\n        this.editBtn = null;\n        this.removeBtn = null;\n        this.displayInput = null;\n        this.list = list;\n       \n    }\n\n    generateUniqueId() {\n        return \"id-\" + Date.now() + \"-\" + Math.floor(Math.random()*1000);\n    }\n\n    display() {\n        this.displayDiv = document.createElement(\"div\");\n        this.displayP = document.createElement(\"p\");\n        this.saveBtn = document.createElement(\"button\");\n        this.editBtn = document.createElement(\"button\");\n        this.removeBtn = document.createElement(\"button\");\n\n        this.list.appendChild(this.displayDiv);\n        this.displayDiv.appendChild(this.displayP);\n        this.displayDiv.appendChild(this.saveBtn);\n        this.displayDiv.appendChild(this.editBtn);\n        this.displayDiv.appendChild(this.removeBtn);\n\n        this.displayDiv.classList.add(\"display-div\");\n        this.displayDiv.dataset.id = this.id; \n\n        this.displayP.textContent = this.body;\n        this.saveBtn.textContent = \"save\";\n        this.editBtn.textContent = \"edit\";\n        this.removeBtn.textContent = \"X\";\n\n        this.removeBtn.addEventListener(\"click\", () => {\n            this.displayDiv.remove();\n            let myStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n\n            myStorage = myStorage.filter(item => item.id != this.id);\n\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveStorage)(myStorage);\n        });\n\n        this.editBtn.addEventListener(\"click\", () => {\n            this.edit(this.displayDiv, this.displayP);\n        });\n\n        this.saveBtn.addEventListener(\"click\", () => {\n            this.save(this.displayDiv);\n        })\n    }\n\n    edit(displayDiv, displayP) { \n        this.displayInput = document.createElement(\"input\");\n        this.displayInput.value = displayP.textContent;\n        \n        displayDiv.prepend(this.displayInput);\n        displayP.remove();\n\n        return this.displayInput;\n    }\n\n    save(displayDiv) {\n        this.displayP = document.createElement(\"p\");\n        this.displayP.textContent = this.displayInput.value;\n\n        displayDiv.prepend(this.displayP);\n        this.displayInput.remove();\n\n        this.body = this.displayInput.value;\n\n        let myStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n        let storedItem = myStorage.find(item => item.id === this.id)\n        \n        if (storedItem) {\n            storedItem.body = this.body;\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveStorage)(myStorage); \n        }\n\n    }\n    \n}\n\n//# sourceURL=webpack://todo-list/./src/ListItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _ListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem.js */ \"./src/ListItem.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\n\n\n\nconst listGroups = document.getElementById(\"list-groups\");\nconst addGroupBtn = document.getElementById(\"add-group\");\nconst showHideBtn = document.getElementById(\"show-hide-btn\");\nconst addListItem = document.getElementById(\"add-list-item\");\nconst listItemInput = document.getElementById(\"list-item-input\");\nconst saveBtn = document.getElementById(\"save-btn\");\nconst clearBtn = document.getElementById(\"clear-btn\");\nconst list = document.getElementById(\"list\");\n\nclass Group {\n    constructor(title = Group.generateGroupName(), id = null) {\n        this.title = title;\n        this.id = id || this.generateUniqueId();\n        this.groupDiv = null;\n        this.groupP = null;\n        this.saveBtn = null\n    }\n\n    static updateGroupCounter() {\n        const groupDivs = document.querySelectorAll(\".group-div\");\n        return groupDivs.length;\n    }\n\n    static generateGroupName() {\n        const groupCounter = Group.updateGroupCounter();\n        return `Untitled-${groupCounter + 1}`;\n    }\n\n    generateUniqueId() {\n        return \"group-\" + Date.now() + \"-\" + Math.floor(Math.random()*1000);\n    }\n\n    displayGroup(listGroups) {\n        this.groupDiv = document.createElement(\"div\");\n        this.groupP = document.createElement(\"p\");\n\n       \n        this.groupDiv.dataset.id = this.id;\n        this.groupDiv.classList.add(\"group-div\")\n        this.groupP.textContent = this.title;\n    \n        this.saveBtn = document.createElement(\"button\")\n        this.saveBtn.textContent = \"save\";\n\n        this.groupDiv.appendChild(this.groupP);\n        this.groupDiv.appendChild(this.saveBtn);\n\n        listGroups.appendChild(this.groupDiv);\n\n        this.groupDiv.draggable = true;\n    }\n\n}\n\n\nfunction updateAddGroupButtonVisibility() {\n    const groupDivs = document.querySelectorAll(\".group-div\");\n    addGroupBtn.style.display = groupDivs.length > 0 ? \"block\" : \"none\";\n}\n\n\n\nshowHideBtn.addEventListener(\"click\", () => {\n    if (addListItem.style.display === \"none\" || addListItem.style.display === \"\") {\n        addListItem.style.display = \"flex\";\n        showHideBtn.textContent = \"Don't add new item\";\n\n    } \n    else {\n        addListItem.style.display = \"none\";\n        showHideBtn.textContent = \"Add new item\";\n    }\n});\n\nclearBtn.addEventListener(\"click\", () => {\n    listItemInput.value = \"\";\n});\n\nsaveBtn.addEventListener(\"click\", () => {\n    let newListItem = new _ListItem_js__WEBPACK_IMPORTED_MODULE_1__.ListItem(listItemInput.value, null, list);\n    \n    let myStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)();\n    myStorage.push({body: newListItem.body, id: newListItem.id});\n   \n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveStorage)(myStorage);\n    \n    newListItem.display();\n\n    addDragAndDropToListItems();\n\n    newGroup();\n\n});\n\n\nlet draggedItem = null;\nfunction addDragAndDropToListItems() {\n    const items = document.querySelectorAll(\".display-div\");\n    items.forEach(item => {\n        item.draggable = true;\n        item.addEventListener(\"dragstart\", (event) => {\n            draggedItem = event.target;\n        });\n    });\n\n    list.addEventListener(\"dragstart\", (event) => {\n        draggedItem = event.target.closest(\".display-div\");\n        event.dataTransfer.effectAllowed = \"move\";\n    });\n\n    list.addEventListener(\"dragover\", (event) => {\n        event.preventDefault();\n        event.dataTransfer.dropEffect = \"move\";\n    });\n\n    list.addEventListener(\"drop\", (event) => {\n        event.preventDefault();\n        if (event.target.closest(\".display-div\")) {\n            const targetItem = event.target.closest(\".display-div\");\n            if (draggedItem !== targetItem) {\n                reorderItems(draggedItem, targetItem);\n                updateLocalStorage();\n            }\n        }\n    });\n}\nfunction addDragAndDropToGroups() {\n    const groups = document.querySelectorAll(\".group-div\");\n    groups.forEach(group => {\n        group.draggable = true;\n        group.addEventListener(\"dragstart\", (event) => {\n            draggedItem = event.target;\n        });\n    });\n\n    listGroups.addEventListener(\"dragstart\", (event) => {\n        draggedItem = event.target.closest(\".group-div\");\n        event.dataTransfer.effectAllowed = \"move\";\n    });\n\n    listGroups.addEventListener(\"dragover\", (event) => {\n        event.preventDefault();\n        event.dataTransfer.dropEffect = \"move\";\n    });\n\n    listGroups.addEventListener(\"drop\", (event) => {\n        event.preventDefault();\n        if (event.target.closest(\".group-div\")) {\n            const targetGroup = event.target.closest(\".group-div\");\n            if (draggedItem !== targetGroup) {\n                reorderGroups(draggedItem, targetGroup);\n                updateGroupStorage();\n            }\n        }\n    });\n}\n\nfunction updateLocalStorage() {\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveStorage)((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)());\n};\n\nfunction updateGroupStorage() {\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveGroups)((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getGroups)());\n}\n\n\n\n\nfunction reorderItems(draggedItem, targetItem) {\n    const draggedIndex = Array.from(list.children).indexOf(draggedItem);\n    const targetIndex = Array.from(list.children).indexOf(targetItem);\n\n    if (draggedIndex > targetIndex) {\n        list.insertBefore(draggedItem, targetItem);\n    } else {\n        list.insertBefore(draggedItem, targetItem.nextSibling);\n    }\n\n    const draggedId = draggedItem.dataset.id;\n    const targetId = targetItem.dataset.id;\n    const draggedData = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)().find(item => item.id === draggedId);\n    const targetIndexInStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)().findIndex(item => item.id === targetId);\n\n    let myStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)();\n    myStorage.splice(myStorage.indexOf(draggedData), 1);\n    myStorage.splice(targetIndexInStorage, 0, draggedData);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveStorage)(myStorage);\n}\n\nfunction reorderGroups(draggedGroup, targetGroup) {\n    const draggedIndex = Array.from(listGroups.children).indexOf(draggedGroup);\n    const targetIndex = Array.from(listGroups.children).indexOf(targetGroup);\n\n    if (draggedIndex > targetIndex) {\n        listGroups.insertBefore(draggedGroup, targetGroup);\n    } else {\n        listGroups.insertBefore(draggedGroup, targetGroup.nextSibling);\n    }\n\n    const draggedId = draggedGroup.dataset.id;\n    const targetId = targetGroup.dataset.id;\n    const draggedData = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getGroups)().find(group => group.id === draggedId);\n    const targetIndexInStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getGroups)().findIndex(group => group.id === targetId);\n\n    let myGroups = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getGroups)();\n    myGroups.splice(myGroups.indexOf(draggedData), 1);\n    myGroups.splice(targetIndexInStorage, 0, draggedData);\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveGroups)(myGroups);\n}\n\n\n\nlet isGroups = false;\n\nfunction newGroup() {\n    if(!isGroups) {\n        isGroups = true;\n\n        const newGroup = new Group();\n        newGroup.displayGroup(listGroups);\n\n        let myGroups = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getGroups)();\n        myGroups.push({\n            title: newGroup.title,\n            id: newGroup.id\n        });\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveGroups)(myGroups);\n\n        updateAddGroupButtonVisibility();\n\n    } \n};\n\n\n\naddGroupBtn.addEventListener(\"click\", () => {\n    const anotherGroup = new Group();\n    anotherGroup.displayGroup(listGroups);\n\n    let myGroups = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getGroups)();\n    myGroups.push({\n        title: anotherGroup.title,\n        id: anotherGroup.id\n    });\n    (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveGroups)(myGroups);\n\n    updateAddGroupButtonVisibility();\n});\n\n\n(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)().forEach(item => {\n    let listItem = new _ListItem_js__WEBPACK_IMPORTED_MODULE_1__.ListItem(item.body, item.id, list);\n    listItem.display(listGroups);\n});\n\n\n(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getGroups)().forEach(group => {\n    let listGroup = new Group(group.title, group.id)\n    console.log(listGroup);\n    listGroup.displayGroup(listGroups);\n});\n\n\naddDragAndDropToListItems();\naddDragAndDropToGroups();\n\nupdateAddGroupButtonVisibility();\n\nconsole.log((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)())\nconsole.log((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getGroups)());\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getGroups: () => (/* binding */ getGroups),\n/* harmony export */   getStorage: () => (/* binding */ getStorage),\n/* harmony export */   saveGroups: () => (/* binding */ saveGroups),\n/* harmony export */   saveStorage: () => (/* binding */ saveStorage)\n/* harmony export */ });\nlet myStorage = JSON.parse(localStorage.getItem(\"myStorage\")) || [];\n\nfunction getStorage() {\n    return myStorage;\n}\n\nfunction saveStorage(updatedStorage) {\n    myStorage = updatedStorage;\n    localStorage.setItem(\"myStorage\", JSON.stringify(myStorage));\n}\n\n\n\n// groups\nlet myGroups = JSON.parse(localStorage.getItem(\"myGroups\")) || [];\n\nfunction getGroups() {\n    return myGroups;\n}\n\nfunction saveGroups(updateGroups){\n    myGroups = updateGroups;\n    localStorage.setItem(\"myGroups\", JSON.stringify(myGroups));\n}\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;