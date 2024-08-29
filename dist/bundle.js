/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ListItem.js":
/*!*************************!*\
  !*** ./src/ListItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItem: () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var ListItem = /*#__PURE__*/function () {
  function ListItem(body) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var list = arguments.length > 2 ? arguments[2] : undefined;
    _classCallCheck(this, ListItem);
    this.body = body;
    this.id = id || this.generateUniqueId();
    this.displayDiv = null;
    this.displayP = null;
    this.saveBtn = null;
    this.editBtn = null;
    this.removeBtn = null;
    this.displayInput = null;
    this.list = list;
  }
  return _createClass(ListItem, [{
    key: "generateUniqueId",
    value: function generateUniqueId() {
      return "id-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
    }
  }, {
    key: "display",
    value: function display() {
      var _this = this;
      this.displayDiv = document.createElement("div");
      this.displayP = document.createElement("p");
      this.saveBtn = document.createElement("button");
      this.editBtn = document.createElement("button");
      this.removeBtn = document.createElement("button");
      this.list.appendChild(this.displayDiv);
      this.displayDiv.appendChild(this.displayP);
      this.displayDiv.appendChild(this.saveBtn);
      this.displayDiv.appendChild(this.editBtn);
      this.displayDiv.appendChild(this.removeBtn);
      this.displayDiv.classList.add("display-div");
      this.displayDiv.dataset.id = this.id;
      this.displayP.textContent = this.body;
      this.saveBtn.textContent = "save";
      this.editBtn.textContent = "edit";
      this.removeBtn.textContent = "X";
      this.removeBtn.addEventListener("click", function () {
        _this.displayDiv.remove();
        var myStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();
        myStorage = myStorage.filter(function (item) {
          return item.id != _this.id;
        });
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveStorage)(myStorage);
      });
      this.editBtn.addEventListener("click", function () {
        _this.edit(_this.displayDiv, _this.displayP);
      });
      this.saveBtn.addEventListener("click", function () {
        _this.save(_this.displayDiv);
      });
    }
  }, {
    key: "edit",
    value: function edit(displayDiv, displayP) {
      this.displayInput = document.createElement("input");
      this.displayInput.value = displayP.textContent;
      displayDiv.prepend(this.displayInput);
      displayP.remove();
      return this.displayInput;
    }
  }, {
    key: "save",
    value: function save(displayDiv) {
      var _this2 = this;
      this.displayP = document.createElement("p");
      this.displayP.textContent = this.displayInput.value;
      displayDiv.prepend(this.displayP);
      this.displayInput.remove();
      this.body = this.displayInput.value;
      var myStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();
      var storedItem = myStorage.find(function (item) {
        return item.id === _this2.id;
      });
      if (storedItem) {
        storedItem.body = this.body;
        (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveStorage)(myStorage);
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGroups: () => (/* binding */ getGroups),
/* harmony export */   getStorage: () => (/* binding */ getStorage),
/* harmony export */   saveGroups: () => (/* binding */ saveGroups),
/* harmony export */   saveStorage: () => (/* binding */ saveStorage)
/* harmony export */ });
var myStorage = JSON.parse(localStorage.getItem("myStorage")) || [];
function getStorage() {
  return myStorage;
}
function saveStorage(updatedStorage) {
  myStorage = updatedStorage;
  localStorage.setItem("myStorage", JSON.stringify(myStorage));
}

// groups
var myGroups = JSON.parse(localStorage.getItem("myGroups")) || [];
function getGroups() {
  return myGroups;
}
function saveGroups(updateGroups) {
  myGroups = updateGroups;
  localStorage.setItem("myGroups", JSON.stringify(myGroups));
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ListItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem.js */ "./src/ListItem.js");
/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ "./src/storage.js");



var listItemInput = document.getElementById("list-item-input");
var saveBtn = document.getElementById("save-btn");
var clearBtn = document.getElementById("clear-btn");
var list = document.getElementById("list-container");
clearBtn.addEventListener("click", function () {
  listItemInput.value = "";
});
saveBtn.addEventListener("click", function () {
  var newListItem = new _ListItem_js__WEBPACK_IMPORTED_MODULE_1__.ListItem(listItemInput.value, null, list);
  var myStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
  myStorage.push({
    body: newListItem.body,
    id: newListItem.id
  });
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveStorage)(myStorage);
  newListItem.display();
  addDragAndDropToListItems();
});
var draggedItem = null;
function addDragAndDropToListItems() {
  var items = document.querySelectorAll(".display-div");
  items.forEach(function (item) {
    item.draggable = true;
    item.addEventListener("dragstart", function (event) {
      draggedItem = event.target;
    });
  });
  list.addEventListener("dragstart", function (event) {
    draggedItem = event.target.closest(".display-div");
    event.dataTransfer.effectAllowed = "move";
  });
  list.addEventListener("dragover", function (event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });
  list.addEventListener("drop", function (event) {
    event.preventDefault();
    if (event.target.closest(".display-div")) {
      var targetItem = event.target.closest(".display-div");
      if (draggedItem !== targetItem) {
        reorderItems(draggedItem, targetItem);
        updateLocalStorage();
      }
    }
  });
}
function updateLocalStorage() {
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveStorage)((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)());
}
;
function reorderItems(draggedItem, targetItem) {
  var draggedIndex = Array.from(list.children).indexOf(draggedItem);
  var targetIndex = Array.from(list.children).indexOf(targetItem);
  if (draggedIndex > targetIndex) {
    list.insertBefore(draggedItem, targetItem);
  } else {
    list.insertBefore(draggedItem, targetItem.nextSibling);
  }
  var draggedId = draggedItem.dataset.id;
  var targetId = targetItem.dataset.id;
  var draggedData = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)().find(function (item) {
    return item.id === draggedId;
  });
  var targetIndexInStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)().findIndex(function (item) {
    return item.id === targetId;
  });
  var myStorage = (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
  myStorage.splice(myStorage.indexOf(draggedData), 1);
  myStorage.splice(targetIndexInStorage, 0, draggedData);
  (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveStorage)(myStorage);
}
(0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)().forEach(function (item) {
  var listItem = new _ListItem_js__WEBPACK_IMPORTED_MODULE_1__.ListItem(item.body, item.id, list);
  listItem.display(listItem);
});
addDragAndDropToListItems();
console.log((0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.getStorage)());
/******/ })()
;
//# sourceMappingURL=bundle.js.map