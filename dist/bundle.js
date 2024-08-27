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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;