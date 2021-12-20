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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_priceFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/priceFilter */ \"./src/modules/priceFilter.js\");\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/filter */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_search__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_load__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_priceFilter__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\n\r\nfunction cart() {\r\n  const cartBtn = document.querySelector(\"#cart\");\r\n  const cartWindow = document.querySelector(\".cart\");\r\n  const cartBtnClose = document.querySelector(\".cart-close\");\r\n  const cartTotal = cartWindow.querySelector(\".cart-total > span\");\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n  const cartWrapper = document.querySelector(\".cart-wrapper\");\r\n  const cartSendBtn = document.querySelector(\".cart-confirm\");\r\n\r\n  // const cartNumber = document.querySelector(\"#cart > span\");\r\n\r\n  cartBtn.addEventListener(\"click\", (event) => {\r\n    // event.preventDefault();\r\n    const cart = localStorage.getItem(\"cart\")\r\n      ? JSON.parse(localStorage.getItem(\"cart\"))\r\n      : [];\r\n    changeStyleDisplayElement(cartWindow, \"flex\");\r\n    (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n    cartTotal.innerHTML = cart.reduce((sum, goodItem) => {\r\n      return sum + goodItem.price;\r\n    }, 0);\r\n  });\r\n\r\n  cartBtnClose.addEventListener(\"click\", () => {\r\n    changeStyleDisplayElement(cartWindow, \"\");\r\n  });\r\n\r\n  function changeStyleDisplayElement(element, paramDisplay) {\r\n    element.style.display = paramDisplay;\r\n  }\r\n\r\n  goodsWrapper.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"btn-primary\")) {\r\n      const card = event.target.closest(\".card\");\r\n      const key = card.dataset.key;\r\n      const goods = JSON.parse(localStorage.getItem(\"goods\"));\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n      const goodItem = goods.find((item) => {\r\n        return item.id === +key;\r\n      });\r\n      cart.push(goodItem);\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n\r\n      // cartNumber.innerHTML = cart.length;\r\n    }\r\n  });\r\n  cartWrapper.addEventListener(\"click\", (event) => {\r\n    if (event.target.classList.contains(\"btn-primary\")) {\r\n      const cart = localStorage.getItem(\"cart\")\r\n        ? JSON.parse(localStorage.getItem(\"cart\"))\r\n        : [];\r\n      const card = event.target.closest(\".card\");\r\n      const key = card.dataset.key;\r\n      const index = cart.findIndex((item) => {\r\n        return item.id === +key;\r\n      });\r\n      cart.splice(index, 1);\r\n      console.log(key);\r\n\r\n      localStorage.setItem(\"cart\", JSON.stringify(cart));\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n      cartTotal.innerHTML = cart.reduce((sum, goodItem) => {\r\n        return sum + goodItem.price;\r\n      }, 0);\r\n      // cartNumber.innerHTML = cart.length;\r\n    }\r\n  });\r\n\r\n  cartSendBtn.addEventListener(\"click\", () => {\r\n    const cart = localStorage.getItem(\"cart\")\r\n      ? JSON.parse(localStorage.getItem(\"cart\"))\r\n      : [];\r\n    (0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n      localStorage.removeItem(\"cart\");\r\n      (0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\r\n      cartTotal.innerHTML = 0;\r\n      cartNumber.innerHTML = 0;\r\n    });\r\n  });\r\n\r\n  // window.onload = () => {\r\n  //   const cart = localStorage.getItem(\"cart\")\r\n  //     ? JSON.parse(localStorage.getItem(\"cart\"))\r\n  //     : [];\r\n  //   cartNumber.innerHTML = cart.length;\r\n  // };\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n// import { DllPlugin } from \"webpack\";\r\n\r\n\r\n\r\n\r\nfunction catalog() {\r\n  const btnCatalog = document.querySelector(\".catalog-button >button\");\r\n  const catalogModal = document.querySelector(\".catalog\");\r\n  const catalogModalItem = document.querySelectorAll(\".catalog-list li\");\r\n  let isModal = false;\r\n  btnCatalog.addEventListener(\"click\", () => {\r\n    isModal = !isModal;\r\n    if (isModal) {\r\n      catalogModal.style.display = \"block\";\r\n    } else {\r\n      catalogModal.style.display = \"\";\r\n    }\r\n  });\r\n\r\n  catalogModalItem.forEach((item) => {\r\n    item.addEventListener(\"click\", () => {\r\n      const text = item.textContent;\r\n      (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text));\r\n      });\r\n    });\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction filter() {}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"seacrhFilter\": () => (/* binding */ seacrhFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilterFormTo\": () => (/* binding */ priceFilterFormTo),\n/* harmony export */   \"hotSaleFilter\": () => (/* binding */ hotSaleFilter)\n/* harmony export */ });\nfunction seacrhFilter(goods, value) {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.title.toUpperCase().includes(value.toUpperCase());\r\n  });\r\n}\r\nfunction categoryFilter(goods, value) {\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.category === value;\r\n  });\r\n}\r\n\r\n//Поиск по цене через фильтр\r\nfunction priceFilterFormTo(goods, value1 = 0, value2 = 99999999999) {\r\n  if (value1.length === 0) {\r\n    value1 = 0;\r\n  }\r\n  if (value2.length === 0) {\r\n    value2 = Infinity;\r\n  }\r\n  return goods.filter((goodsItem) => {\r\n    return goodsItem.price > value1 && goodsItem.price < value2;\r\n  });\r\n}\r\nfunction hotSaleFilter(goods, value) {\r\n  return goods.filter((goodsItem) => {\r\n    if (value) {\r\n      return goodsItem.sale === true;\r\n    } else {\r\n      return goodsItem;\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction getData(str) {\r\n  return fetch(\r\n    `https://ozontest-f5959-default-rtdb.firebaseio.com/goods.json`\r\n  ).then((response) => {\r\n    return response.json();\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nfunction load() {\r\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n    (0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction postData(cart) {\r\n  return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify(cart),\r\n    headers: {\r\n      \"Content-type\": \"application/json; charset=UTF-8\",\r\n    },\r\n  }).then((res) => res.json());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/priceFilter.js":
/*!************************************!*\
  !*** ./src/modules/priceFilter.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nfunction priceFilter() {\r\n  const priceFrom = document.querySelector(\"#min\");\r\n  const priceTo = document.querySelector(\"#max\");\r\n  const checkboxInput = document.querySelector(\"#discount-checkbox\");\r\n  const checkboxSpan = document.querySelector(\".filter-check_checkmark\");\r\n  // Сортировка от минимальной цены\r\n  priceFrom.addEventListener(\"input\", (event) => {\r\n    const value1 = priceFrom.value;\r\n    const value2 = priceTo.value;\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilterFormTo)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          value1,\r\n          value2\r\n        )\r\n      );\r\n    });\r\n  });\r\n  // Сортировка до максимальной цены\r\n  priceTo.addEventListener(\"input\", (event) => {\r\n    const value1 = priceFrom.value;\r\n    const value2 = priceTo.value;\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilterFormTo)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          value1,\r\n          value2\r\n        )\r\n      );\r\n    });\r\n  });\r\n  //Сортировка по Sale\r\n  checkboxInput.addEventListener(\"change\", () => {\r\n    checkboxSpan.classList.toggle(\"checked\");\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\r\n        (0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilterFormTo)(\r\n          (0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotSaleFilter)(data, checkboxInput.checked),\r\n          priceFrom.value,\r\n          priceTo.value\r\n        )\r\n      );\r\n    });\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceFilter);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/priceFilter.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderCart(goods) {\r\n  const cardWrapper = document.querySelector(\".cart-wrapper\");\r\n  cardWrapper.innerHTML = \"\";\r\n\r\n  // localStorage.setItem(\"goods\", JSON.stringify(goods));\r\n\r\n  if (goods.length === 0) {\r\n    cardWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n    <div id=\"cart-empty\">\r\n      Ваша корзина пока пуста\r\n    </div>\r\n    `\r\n    );\r\n  } else {\r\n    goods.forEach((goodItem) => {\r\n      cardWrapper.insertAdjacentHTML(\r\n        \"beforeend\",\r\n        `\r\n        <div class=\"card\" data-key=\"${goodItem.id}\">\r\n          ${goodItem.sale ? `<div class=\"card-sale\">🔥Hot Sale🔥</div>` : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n            <span\r\n              class=\"card-img-top\"\r\n              style=\"\r\n                background-image: url('${goodItem.img}');\r\n              \"\r\n            ></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${goodItem.price}  ₽</div>\r\n            <h5 class=\"card-title\">\r\n              ${goodItem.title} \r\n            </h5>\r\n            <button class=\"btn btn-primary\">Удалить</button>\r\n          </div>\r\n  </div>\r\n`\r\n      );\r\n    });\r\n  }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction renderGoods(goods) {\r\n  const goodsWrapper = document.querySelector(\".goods\");\r\n  goodsWrapper.innerHTML = \"\";\r\n\r\n  localStorage.setItem(\"goods\", JSON.stringify(goods));\r\n\r\n  goods.forEach((goodItem) => {\r\n    goodsWrapper.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `\r\n      <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\" data-key=\"${goodItem.id}\">\r\n          ${goodItem.sale ? `<div class=\"card-sale\">🔥Hot Sale🔥</div>` : \"\"}\r\n          <div class=\"card-img-wrapper\">\r\n            <span\r\n              class=\"card-img-top\"\r\n              style=\"\r\n                background-image: url('${goodItem.img}');\r\n              \"\r\n            ></span>\r\n          </div>\r\n          <div class=\"card-body justify-content-between\">\r\n            <div class=\"card-price\">${goodItem.price}  ₽</div>\r\n            <h5 class=\"card-title\">\r\n              ${goodItem.title} \r\n            </h5>\r\n            <button class=\"btn btn-primary\">В корзину</button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n`\r\n    );\r\n  });\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nfunction search() {\r\n  const searchStr = document.querySelector(\".search-wrapper_input\");\r\n  searchStr.addEventListener(\"input\", (event) => {\r\n    const value = event.target.value;\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n      (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.seacrhFilter)(data, value));\r\n    });\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\r\n\n\n//# sourceURL=webpack://ozon-on-js/./src/modules/search.js?");

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