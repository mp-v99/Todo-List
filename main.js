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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! font-family/woff_fonts/Roboto-Regular.woff2 */ \"./src/font-family/woff_fonts/Roboto-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! font-family/woff_fonts/Roboto-Regular.woff */ \"./src/font-family/woff_fonts/Roboto-Regular.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n/* Define custom properties for better styling control */\n\n:root {\n    --dominant-color: #e9f2fe;\n    --dominant-secondary-color: #fdfdfd;\n    --theme-color: #1868db;\n    --soft-gray: #a3a3a3bd;\n    --text-font: Roboto, Arial, Helvetica, sans-serif;\n}\n\n/* @face rule for roboto font */\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),\n        url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');\n    font-weight: normal;\n    font-style: normal;\n    font-display: swap;\n    }\n\n\n\n/*Normalize Template: */\n\n\n/*  More-intuitive box-sizing model */\n\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\n/*  remove default margin */\n* {\n    margin: 0;\n}\n\nbody {\n    /* add accessible line-height */\n    line-height: 1.5;\n    /* improve text rendering */\n    -webkit-font-smoothing: antialiased;\n\n    height: 100vh;\n    width: 100vw;\n\n    display: grid;\n\n    font-family: var(--text-font);\n\n    display: grid;\n    grid-template-columns: 88fr 12fr;\n    grid-template-rows: 10fr 45fr 45fr;\n\n    background-color: var(--dominant-color);\n\n    overflow-x: auto;    \n}\n/* improve media defaults */\nimg, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n}\n/* inherit fonts for form controls */\ninput, button, textarea, select {\n    font: inherit;\n}\n/* avoid text overflows */\np, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n}\n/* improve line wrapping */\np {\n    text-wrap: pretty;\n}\nh1, h2, h3, h4, h5, h6 {\n    text-wrap: balance;\n}\n\n/* button tyles */\n\nbutton {\n    background: none;\n    border: none;\n    padding: 0;\n    cursor: pointer;\n  }\n\nhtml *::-webkit-scrollbar {\n    display: none;\n  }\n\n/* End of normalize template */  \n\n      \n    /* Header: */\n    \n#header {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n\n    align-content: center;\n    \n    padding-left: 1.5%;\n    padding-right: 1.5%;\n\n    background-color: var(--dominant-secondary-color);\n    color: var(--theme-color);\n\n    box-shadow: 0px 4px 5px 0px #918f8f49;\n\n    z-index: 1;\n\n    min-height: 93px;\n}\n\n#header>nav {\n    grid-column: 1 / 2;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n\n    gap: 5%;\n}\n\n\n#logo {\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    grid-column: 1 / 2;    \n}\n\n/* The sidebar */\n\n\n#sidebar {\n    grid-column: 2 / 3;\n    grid-row: 1 / 4; \n\n    background-color: var(--theme-color);\n    color: var(--dominant-secondary-color);\n\n    display: grid;\n    \n    grid-template-rows: 10fr 90fr;\n\n    min-width: 100px;\n\n\n    grid-template-columns: 1fr;\n\n}\n\n/* The main content */\n\n\n#main_content {\n    grid-column: 1 / 2;\n    grid-row: 2 / 4;\n\n    display: flex;\n\n    min-width: 400px;\n    min-height: 800px;\n\n\n    background-color: var(--dominant-color);\n\n    overflow-y: auto;\n\n    padding: 5%;\n\n    \n}\n\n/* Articles Layout: */\n\n#projects_section {\n    flex: 1;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    grid-auto-rows: minmax(200px, 220px);\n\n    grid-auto-flow: row;\n\n    gap: 2%;\n}\n\n#projects_section>h1 {\n    grid-column:  1 / -1;\n}\n\n#projects_section>article {\n    display: grid;\n    grid-template-columns: 10fr 25fr 25fr 40fr;\n    grid-template-rows: 10fr 25fr 25fr 40fr;\n\n\n    background: var(--dominant-secondary-color);\n\n    border-radius: 12px;\n\n    width: clamp(250px, 100%, 350px);\n    height: 200px;\n\n    border: 2px solid black;\n}\n\n#projects_section>article>h3 {\n    grid-column: 2 / 4;\n    grid-row: 2 / 3;\n}\n#projects_section>article>p {\n    grid-column: 2 / 4;\n    grid-row: 3 / 4;\n\n    color: var(--soft-gray);\n}\n    \n#projects_section>article>button {\n    grid-column: 4 / 5;\n    grid-row: 4 / 5;\n\n    background-color: var(--theme-color);\n\n    height: fit-content;\n    width: fit-content;\n\n    align-self: center;\n    justify-self: center;\n\n    padding-left: 5%;\n    padding-right: 5%;\n\n    border-radius: 5px;\n\n    color: var(--dominant-secondary-color);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/UI-DOM.js"
/*!***********************!*\
  !*** ./src/UI-DOM.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initUI: () => (/* binding */ initUI),\n/* harmony export */   loadProject: () => (/* binding */ loadProject),\n/* harmony export */   loadProjects: () => (/* binding */ loadProjects)\n/* harmony export */ });\n\nconst loadProjects = function(projectManager) {\n    const mainContainer = document.querySelector(\"#main_content\");\n    const previousContent = document.querySelector(\"section\");\n    const newSection = document.createElement(\"section\");\n   \n    newSection.id = \"projects_section\"\n\n    mainContainer.removeChild(previousContent);\n    mainContainer.appendChild(newSection);\n\n\n    for (const project of projectManager.listProjects()) {\n        const projectCard = document.createElement(\"article\")\n        const projectTitle = document.createElement(\"h3\");\n        const projectTodoPreview = document.createElement(\"p\");\n        const openProjectBtn = document.createElement(\"button\");\n\n        projectTitle.textContent = project.title;\n        projectTodoPreview.textContent = project.todos[0].title;\n        projectCard.setAttribute(\"data-id\", project.id);\n        openProjectBtn.textContent = \"Open\";\n        openProjectBtn.classList = \"open_project\";\n\n        newSection.appendChild(projectCard);\n        projectCard.appendChild(projectTitle);\n        projectCard.appendChild(projectTodoPreview);\n        projectCard.appendChild(openProjectBtn);\n\n        \n\n        openProjectBtn.addEventListener(\"click\", () => {\n            loadProject(projectManager, projectCard.getAttribute(\"data-id\"));\n        })\n    }\n\n \n}\n\n\nconst loadAbout = function() {\n    const mainContainer = document.querySelector(\"#main_content\");\n    const previousContent = document.querySelector(\"section\");\n    const newSection = document.createElement(\"section\");\n    const aboutTitle = document.createElement(\"h3\");\n    const aboutArticle = document.createElement(\"p\");\n    newSection.id = \"about_section\";\n\n    aboutTitle.textContent = \"Kong-Dō\"\n    aboutArticle.textContent = `Lorem Ipsum is still fine for pure layout testing,\nbut for portfolio projects and demos?\nIt looks lazy in 2026. Real-ish copy makes your project feel 10x more legit.`\n\n    mainContainer.removeChild(previousContent);\n    mainContainer.appendChild(newSection);\n\n    newSection.appendChild(aboutTitle);\n    newSection.appendChild(aboutArticle);\n\n\n    \n}\n\nconst loadProject = function(projectManager, projectID) {\n    const mainContainer = document.querySelector(\"#main_content\");\n    const previousContent = document.querySelector(\"section\");\n    const newSection = document.createElement(\"section\");\n   \n    newSection.id = \"active_project_section\"\n\n    mainContainer.removeChild(previousContent);\n    mainContainer.appendChild(newSection);\n\n    const projectTitle = document.createElement('h1');\n    const listOfTodos = document.createElement('ul');\n\n    projectManager.setActiveProject(projectID);\n    projectTitle.textContent = projectManager.getActiveProject(projectID).title;\n\n    for (const todo of projectManager.getActiveProject(projectID).todos) {\n        const newTodo = document.createElement(\"li\");\n\n        newTodo.textContent = todo.title;\n\n        listOfTodos.appendChild(newTodo);\n    }\n\n   newSection.appendChild(projectTitle);\n   newSection.appendChild(listOfTodos);\n}\n\n\n\nconst initUI = function(projectManager) {\n    const projectsBtn = document.querySelector(\"#projects_btn\");\n    const aboutBtn = document.querySelector(\"#about_btn\");\n\n    projectsBtn.addEventListener(\"click\", () => {\n        loadProjects(projectManager);\n    });\n    aboutBtn.addEventListener(\"click\", () => {\n        loadAbout();\n    });\n   \n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI-DOM.js?\n}");

/***/ },

/***/ "./src/domain.js"
/*!***********************!*\
  !*** ./src/domain.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectManager: () => (/* binding */ ProjectManager)\n/* harmony export */ });\nclass ProjectManager {\n    constructor() {\n        this.projects = [];\n        this.activeProjectID = null;\n    };\n\n    addProject(title, description, createdAt) {\n\n        const project = new Project(title, description, createdAt);\n\n        this.projects.push(project);\n    };\n\n    removeProject(projectID) {\n       \n        this.projects.splice(this.getProjectByID(projectID),1);\n\n    };\n  \n    setActiveProject(projectID) {\n    \n        this.activeProjectID = projectID;\n\n    };\n\n    getActiveProject() {\n        \n        return this.projects[this.getProjectByID(this.activeProjectID)]\n    \n    }\n\n\n    listProjects() {\n\n        return this.projects;\n    \n    };\n\n\n    getProjectByID(projectID) {\n\n        const projectIndex = this.projects.findIndex(t => t.id === projectID);\n\n        return projectIndex;\n    }\n};\n\nclass Project {\n    constructor(title, description, createdAt) {\n        this.id = crypto.randomUUID();\n        this.title = title;\n        this.description = description;\n        this.createdAt = createdAt;\n        this.todos = [];\n        this.notes = [];\n    }\n\n    addTodo(title, description, dueDate, status, priority) {     \n\n        const todo = new Todo(title, description, dueDate, status, priority);\n        this.todos.push(todo);\n       \n    };\n\n    addNote(text) {\n\n        const note = new Note(text);\n        this.notes.push(note);\n\n    };\n\n    removeTodo(todoID) {\n       \n        this.todos.splice(this.getTodoByID(todoID),1);\n\n    };\n\n    removeNote(noteID) {\n       \n        const noteIndex = this.notes.findIndex(t => t.id === noteID);\n        this.notes.splice(noteIndex,1);\n\n    };\n\n    updateTodo(todoID, patch) {\n\n        \n        this.todos[this.getTodoByID(todoID)].updateItem(patch);\n\n    };\n\n    updateNote(noteID, text) {\n\n        const noteIndex = this.notes.findIndex(t => t.id === noteID);\n        this.notes[noteIndex].updateTextBody(text);\n\n    };\n\n    getTodoByID(todoID) {\n        const todoIndex = this.todos.findIndex(t => t.id === todoID);\n        return todoIndex;\n    };\n};\n\nclass Todo {\n    constructor(title, description, dueDate, status, priority) {\n        this.id = crypto.randomUUID();\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.status = status;\n        this.priority = priority;\n        this.checkList = [];    \n    }\n\n    addListItem(text) {\n\n        const checkListItem = new CheckListItem(text);\n\n        this.checkList.push(checkListItem);\n    };\n\n    removeListItem(listItemID) {\n       \n        const listItemIndex = this.checkList.findIndex(t => t.id === listItemID);\n        this.checkList.splice(listItemIndex,1);\n\n    }\n\n    updateListItem(listItemID, text) {\n\n        const listItemIndex = this.checkList.findIndex(t => t.id === listItemID);\n        this.checkList[listItemIndex].updateTextLine(text);\n\n    };\n\n    toggleListItem(listItemID) {\n\n        const listItemIndex = this.checkList.findIndex(t => t.id === listItemID);\n        this.checkList[listItemIndex].toggleCheckBox();\n\n    };\n\n    updateItem(patch) {\n        if (patch.title !== undefined) {\n            this.title = patch.title;\n        }\n\n        if (patch.description !== undefined) {\n            this.description = patch.description;\n        }\n\n        if (patch.dueDate !== undefined) {\n\n            this.dueDate = patch.dueDate;\n        }\n\n        if (patch.status !== undefined) {\n            this.status = patch.status;\n        }\n\n        if (patch.priority !== undefined) {\n            this.priority = patch.priority;\n        }\n    };\n\n};\n\nclass Note {\n    constructor(textBody) {\n        this.id = crypto.randomUUID();\n        this.textBody = textBody;\n    }\n\n    updateTextBody(text) {\n        this.textBody = text;\n    }\n};\n\n\nclass CheckListItem {\n    constructor(textLine) {\n        this.id = crypto.randomUUID();\n        this.textLine = textLine;\n        this.checkBox = false;\n    }\n\n    updateTextLine(text) {\n        this.textLine = text;\n    }    \n\n    toggleCheckBox() {\n        if (this.checkBox === true) {\n            this.checkBox = false;\n        }\n        else if (this.checkBox === false) {\n            this.checkBox = true;\n        }\n    }\n\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/domain.js?\n}");

/***/ },

/***/ "./src/font-family/woff_fonts/Roboto-Regular.woff"
/*!********************************************************!*\
  !*** ./src/font-family/woff_fonts/Roboto-Regular.woff ***!
  \********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"7c72154162784b525f53.woff\";\n\n//# sourceURL=webpack://todo-list/./src/font-family/woff_fonts/Roboto-Regular.woff?\n}");

/***/ },

/***/ "./src/font-family/woff_fonts/Roboto-Regular.woff2"
/*!*********************************************************!*\
  !*** ./src/font-family/woff_fonts/Roboto-Regular.woff2 ***!
  \*********************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"fcc837bcbed57ee5cc6e.woff2\";\n\n//# sourceURL=webpack://todo-list/./src/font-family/woff_fonts/Roboto-Regular.woff2?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domain_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain.js */ \"./src/domain.js\");\n/* harmony import */ var _UI_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI-DOM.js */ \"./src/UI-DOM.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n// import { showList } from \"./UI-DOM.js\";\n\n\n// Get present day date:\n\nconst today = new Date().toLocaleDateString(\"en-US\")\n\n// Create the project manager container and default project:\n\nconst appProjectManager = new _domain_js__WEBPACK_IMPORTED_MODULE_0__.ProjectManager();\n\nappProjectManager.addProject(\"My tasks\", \"Don't know where to start? Start by writing a todo!!\", today);\nappProjectManager.addProject(\"Work\", \"Don't know where to start? Start by writing a todo!!\", today);\nappProjectManager.addProject(\"Life\", \"Don't know where to start? Start by writing a todo!!\", today);\n\n\n\nappProjectManager.setActiveProject(appProjectManager.projects[0].id);\n\nlet activeProject = appProjectManager.getActiveProject();\n\nactiveProject.addTodo(\"Write your first todo!\", \"This would be the description\", \"Due: March 7th\", \"In progress\", \"High\");\nappProjectManager.projects[1].addTodo(\"Write your second todo!\", \"This would be the description\", \"Due: March 7th\", \"In progress\", \"High\");\nappProjectManager.projects[2].addTodo(\"Write your thirds todo!\", \"This would be the description\", \"Due: March 7th\", \"In progress\", \"High\");\n\n(0,_UI_DOM_js__WEBPACK_IMPORTED_MODULE_1__.initUI)(appProjectManager);\n\n\n(0,_UI_DOM_js__WEBPACK_IMPORTED_MODULE_1__.loadProjects)(appProjectManager);\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
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