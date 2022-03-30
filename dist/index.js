/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/homePage */ \"./src/js/pages/homePage.js\");\n/* harmony import */ var _pages_profilePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/profilePage */ \"./src/js/pages/profilePage.js\");\n/* harmony import */ var _pages_contactsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contactsPage */ \"./src/js/pages/contactsPage.js\");\n/* harmony import */ var _pages_contactsPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_contactsPage__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n\n\n\n\nvar routes = [{\n  path: \"/\",\n  component: _pages_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: \"profile\",\n  component: _pages_profilePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: \"contacts\",\n  component: (_pages_contactsPage__WEBPACK_IMPORTED_MODULE_2___default())\n}];\n\nfunction findComponentByPath(path, routes) {\n  return routes.find(function (route) {\n    return route.path === path;\n  });\n}\n\nfunction router() {\n  var pathArray = location.hash.split(\"/\");\n  var currentPath = pathArray[0] === \"\" ? \"/\" : pathArray[1];\n  currentPath = currentPath === \"\" ? \"/\" : currentPath;\n\n  var _ref = findComponentByPath(currentPath, routes) || {},\n      _ref$component = _ref.component,\n      component = _ref$component === void 0 ? errorPage : _ref$component;\n\n  component();\n}\n\nwindow.addEventListener(\"hashchange\", router);\nwindow.addEventListener(\"load\", router);\n\n//# sourceURL=webpack://aveds-test-js/./src/js/main.js?");

/***/ }),

/***/ "./src/js/pages/contactsPage.js":
/*!**************************************!*\
  !*** ./src/js/pages/contactsPage.js ***!
  \**************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://aveds-test-js/./src/js/pages/contactsPage.js?");

/***/ }),

/***/ "./src/js/pages/homePage.js":
/*!**********************************!*\
  !*** ./src/js/pages/homePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/img/logo.png */ \"./assets/img/logo.png\");\n/* harmony import */ var _assets_img_online_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/img/online.png */ \"./assets/img/online.png\");\n/* harmony import */ var _assets_img_emergency_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/img/emergency.png */ \"./assets/img/emergency.png\");\n/* harmony import */ var _assets_img_therapy_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/img/therapy.png */ \"./assets/img/therapy.png\");\n/* harmony import */ var _profilePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profilePage */ \"./src/js/pages/profilePage.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  var mainContent = \"\\n    <div class=\\\"header\\\">\\n        <div class=\\\"logo\\\">\\n        <a href=\\\"./index.html\\\"> <img src=\".concat(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \" alt=\\\"logo\\\" /></a>\\n        </div>\\n        <div class=\\\"header-btn\\\">\\n        <button class=\\\"header-btn__contacts\\\" type=\\\"submit\\\">\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B</button>\\n        <button class=\\\"header-btn__login btn-login\\\" type=\\\"submit\\\">\\u0412\\u043E\\u0439\\u0442\\u0438</button>\\n        </div>\\n    </div>\\n  \\n    <div class=\\\"content\\\">\\n        <div class=\\\"container\\\">\\n        <div class=\\\"content-title\\\">\\n            <h1>\\u041C\\u0435\\u0441\\u0442\\u043E \\u0434\\u043B\\u044F \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u0438\\u044F \\u043C\\u0435\\u0434\\u0438\\u0446\\u0438\\u043D\\u0441\\u043A\\u043E\\u0439 \\u043F\\u043E\\u043C\\u043E\\u0449\\u0438</h1>\\n        </div>\\n        <div class=\\\"content-buttons\\\">\\n            <button class=\\\"button btn-login\\\" type=\\\"submit\\\">\\u0412\\u043E\\u0439\\u0442\\u0438</button>\\n            <button class=\\\"button\\\" type=\\\"submit\\\">\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B</button>\\n        </div>\\n        <div class=\\\"content-services-cards\\\">\\n            <div class=\\\"services-card__item\\\">\\n            <div class=\\\"services-card__item-icon\\\">\\n                <img src=\").concat(_assets_img_online_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], \" alt=\\\"icon\\\" />\\n            </div>\\n            <div class=\\\"services-card__item-title\\\"><h5>\\u041E\\u043D\\u043B\\u0430\\u0439\\u043D-\\u043F\\u0440\\u0438\\u0435\\u043C</h5></div>\\n            <div class=\\\"services-card__item-desc\\\"><p>\\u0420\\u044B\\u0431\\u0430 \\u0442\\u0435\\u043A\\u0441\\u0442</p></div>\\n            </div>\\n            <div class=\\\"services-card__item\\\">\\n            <div class=\\\"services-card__item-icon\\\">\\n                <img src=\").concat(_assets_img_emergency_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"], \" alt=\\\"icon\\\" />\\n            </div>\\n            <div class=\\\"services-card__item-title\\\">\\n                <h5>\\u042D\\u043A\\u0441\\u0442\\u0440\\u0435\\u043D\\u043D\\u044B\\u0439 \\u0421\\u043B\\u0443\\u0447\\u0430\\u0439</h5>\\n            </div>\\n            <div class=\\\"services-card__item-desc\\\"><p>\\u0420\\u044B\\u0431\\u0430 \\u0442\\u0435\\u043A\\u0441\\u0442</p></div>\\n            </div>\\n            <div class=\\\"services-card__item\\\">\\n            <div class=\\\"services-card__item-icon\\\">\\n                <img src=\").concat(_assets_img_therapy_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"], \" alt=\\\"icon\\\" />\\n            </div>\\n            <div class=\\\"services-card__item-title\\\"><h5>\\u041B\\u0435\\u0447\\u0435\\u043D\\u0438\\u0435 \\u0440\\u0430\\u043A\\u0430</h5></div>\\n            <div class=\\\"services-card__item-desc\\\"><p>\\u0420\\u044B\\u0431\\u0430 \\u0442\\u0435\\u043A\\u0441\\u0442</p></div>\\n            </div>\\n        </div>\\n        </div>\\n    </div>\");\n  var loginPage = \"\\n    <div class=\\\"modal-overlay\\\">\\n        <form class=\\\"form-auth\\\" id=\\\"form\\\">\\n            <div class=\\\"form-title\\\"><h2>\\u0410\\u0432\\u0442\\u043E\\u0440\\u0438\\u0437\\u0430\\u0446\\u0438\\u044F</h2></div>\\n            <div class=\\\"form-content\\\">\\n                <div class=\\\"form-content__item\\\">\\n                <label class=\\\"form-label\\\" for=\\\"name\\\">\\u041B\\u043E\\u0433\\u0438\\u043D</label>\\n                <input\\n                    class=\\\"form-input\\\"\\n                    type=\\\"text\\\"\\n                    name=\\\"name\\\"\\n                    id=\\\"form-name\\\"\\n                    required\\n                />\\n                </div>\\n                <div class=\\\"form-content__item\\\">\\n                <label class=\\\"form-label\\\" for=\\\"password\\\">\\u041F\\u0430\\u0440\\u043E\\u043B\\u044C</label>\\n                <input\\n                    class=\\\"form-input password-input\\\"\\n                    type=\\\"password\\\"\\n                    name=\\\"password\\\"\\n                    id=\\\"form-password\\\"\\n                    required\\n                />\\n                </div>\\n                <div class=\\\"form-button\\\">\\n                <button class=\\\"button btn-login-form\\\" type=\\\"submit\\\">\\u0412\\u043E\\u0439\\u0442\\u0438</button>\\n                <button class=\\\"button btn-cancel\\\" type=\\\"submit\\\">\\u041E\\u0442\\u043C\\u0435\\u043D\\u0430</button>\\n                </div>\\n            </div>\\n        </form>\\n    </div>\";\n  document.querySelector(\"#app\").innerHTML = mainContent;\n  document.querySelector(\"#app\").insertAdjacentHTML(\"afterbegin\", loginPage);\n  var submitBtn = document.querySelectorAll(\".btn-login\");\n  var modalForm = document.querySelector(\".modal-overlay\"); // Так как на странице две кнопки \"Войти\", проходимся по ним циклом, чтобы на каждую повесить обработчик событий,\n  // который показывает модальное окно\n\n  var _iterator = _createForOfIteratorHelper(submitBtn),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var button = _step.value;\n      button.addEventListener(\"click\", function (e) {\n        e.preventDefault();\n        modalForm.classList.add(\"show\");\n      });\n    } // Зактрытие модального окна по нжатию на кнопку \"Отмена\"\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  document.querySelector(\".btn-cancel\").addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    modalForm.classList.remove(\"show\");\n  }); // Зактрытие модального окна по клику за его пределами\n\n  modalForm.addEventListener(\"click\", function (e) {\n    if (!e.target.closest(\".form-auth\")) {\n      modalForm.classList.remove(\"show\");\n    }\n  }); // Отправка формы\n\n  document.querySelector(\".form-auth\").addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    var allUsers = getUsersFromLocalStorage();\n    var dataUser = getInput();\n    allUsers.push(dataUser);\n    localStorage.setItem(\"users\", JSON.stringify(allUsers));\n    modalForm.classList.remove(\"show\");\n    clearInput();\n    (0,_profilePage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  }); // Получение данных из инпутов\n\n  function getInput() {\n    var data = {};\n    data.name = document.querySelector(\"#form-name\").value;\n    data.password = document.querySelector(\"#form-password\").value;\n    return data;\n  } // Очищение инпутов\n\n\n  function clearInput() {\n    document.querySelector(\"#form-name\").value = \"\";\n    document.querySelector(\"#form-password\").value = \"\";\n  } // Валидация поля \"Пароль\"\n\n\n  function inputValidate() {} // Проверяем есть ли в localStorage пользователи\n\n\n  function getUsersFromLocalStorage() {\n    return JSON.parse(localStorage.getItem(\"users\") || \"[]\");\n  }\n}\n\n//# sourceURL=webpack://aveds-test-js/./src/js/pages/homePage.js?");

/***/ }),

/***/ "./src/js/pages/profilePage.js":
/*!*************************************!*\
  !*** ./src/js/pages/profilePage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderProfile)\n/* harmony export */ });\n/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/img/logo.png */ \"./assets/img/logo.png\");\n\nfunction renderProfile() {\n  var profilePage = \"\\n    <div class=\\\"header\\\">\\n      <div class=\\\"logo\\\">\\n        <a href=\\\"./index.html\\\"> <img src=\".concat(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"], \" alt=\\\"logo\\\" /></a>\\n      </div>\\n      <div class=\\\"header-btn\\\">\\n        <button class=\\\"header-btn__contacts\\\" type=\\\"button\\\">\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B</button>\\n        <button class=\\\"header-btn__logOut logOut-btn\\\" type=\\\"button\\\">\\u0412\\u044B\\u0439\\u0442\\u0438</button>\\n      </div>\\n    </div>\\n   \\n    <div class=\\\"container\\\">\\n      <div class=\\\"content-title\\\"><h1>\\u041F\\u0440\\u0438\\u0432\\u0435\\u0442, \\u0421\\u0435\\u0440\\u0433\\u0435\\u0439!</h1></div>\\n      <div class=\\\"profile-buttons\\\">\\n        <button class=\\\"button logOut-btn\\\" type=\\\"button\\\">\\n          \\u0412\\u044B\\u0439\\u0442\\u0438 \\u0438\\u0437 \\u0430\\u043A\\u043A\\u0430\\u0443\\u043D\\u0442\\u0430\\n        </button>\\n        <button class=\\\"button profile-contacts-btn\\\" type=\\\"button\\\">\\n          \\u041F\\u0435\\u0440\\u0435\\u0439\\u0442\\u0438 \\u0432 \\u043A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B\\n        </button>\\n      </div>\\n    </div>\");\n  document.querySelector(\"#app\").innerHTML = profilePage;\n}\n\n//# sourceURL=webpack://aveds-test-js/./src/js/pages/profilePage.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  border: 0;\\n}\\n*,\\n*:before,\\n*:after {\\n  -webkit-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n:focus,\\n:active {\\n  outline: none;\\n}\\na:focus,\\na:active {\\n  outline: none;\\n}\\nhtml,\\nbody {\\n  overflow-x: hidden;\\n  height: 100%;\\n  width: 100%;\\n  font-size: 100%;\\n  font-size: 14px;\\n  -ms-text-size-adjust: 100%;\\n  -moz-text-size-adjust: 100%;\\n  -webkit-text-size-adjust: 100%;\\n}\\nbutton {\\n  font-family: inherit;\\n  cursor: pointer;\\n}\\nbutton::-moz-focus-inner {\\n  padding: 0;\\n  border: 0;\\n}\\na,\\na:visited {\\n  text-decoration: none;\\n}\\na:hover {\\n  text-decoration: none;\\n}\\nimg {\\n  width: 100%;\\n  height: auto;\\n  display: block;\\n}\\nh1,\\nh2 {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: inherit;\\n  line-height: inherit;\\n  letter-spacing: 0.2px;\\n  color: #252b42;\\n}\\nh5 {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 16px;\\n  line-height: 24px;\\n  letter-spacing: 0.1px;\\n  color: #252b42;\\n}\\n.header {\\n  width: 100%;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n  justify-content: space-between;\\n  -webkit-box-align: center;\\n  -ms-flex-align: center;\\n  align-items: center;\\n  padding: 20px 10px;\\n  border-bottom: 1px solid black;\\n}\\n@media (min-width: 768px) {\\n  .header {\\n    padding: 18px 30px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .header {\\n    padding: 18px 70px;\\n  }\\n}\\n.logo {\\n  width: 53px;\\n  height: 23px;\\n}\\n.header-btn__contacts {\\n  margin-right: 10px;\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-weight: 600;\\n  font-size: 15px;\\n  line-height: 24px;\\n  letter-spacing: 0.2px;\\n  background-color: #fff;\\n  color: #737373;\\n}\\n.header-btn__contacts:hover {\\n  color: #ff685b;\\n}\\n.header-btn__contacts:active {\\n  color: #f8958c;\\n}\\n@media (min-width: 768px) {\\n  .header-btn__contacts {\\n    margin-right: 58px;\\n  }\\n}\\n.header-btn__login,\\n.logOut-btn {\\n  padding: 6px 20px;\\n  border: 2px solid #ff685b;\\n  border-radius: 7px;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 500;\\n  font-size: 20px;\\n  line-height: 24px;\\n  color: #ff685b;\\n  background-color: #fff;\\n}\\n.header-btn__login:hover,\\n.logOut-btn:hover {\\n  color: #fff;\\n  background-color: #ff685b;\\n}\\n.header-btn__login:active,\\n.logOut-btn:active {\\n  background-color: #f8958c;\\n  border-color: #f8958c;\\n}\\n@media (min-width: 768px) {\\n  .header-btn__login,\\n  .logOut-btn {\\n    padding: 8px 60px;\\n  }\\n}\\n.container {\\n  width: 370px;\\n  margin: 0 auto;\\n  padding-right: 10px;\\n  padding-left: 10px;\\n  padding-top: 55px;\\n  padding-bottom: 62px;\\n}\\n@media (min-width: 768px) {\\n  .container {\\n    width: 768px;\\n    padding-right: 20px;\\n    padding-left: 20px;\\n    padding-top: 76px;\\n    padding-bottom: 80px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .container {\\n    width: 1050px;\\n    padding-right: 0;\\n    padding-left: 0;\\n    padding-top: 96px;\\n    padding-bottom: 100px;\\n  }\\n}\\n.content-title {\\n  margin-bottom: 35px;\\n  font-size: 28px;\\n  line-height: 39px;\\n}\\n@media (min-width: 768px) {\\n  .content-title {\\n    font-size: 46px;\\n    line-height: 60px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .content-title {\\n    font-size: 58px;\\n    line-height: 80px;\\n  }\\n}\\n.content-buttons {\\n  margin-bottom: 30px;\\n}\\n@media (min-width: 768px) {\\n  .content-buttons {\\n    margin-bottom: 56px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .content-buttons {\\n    margin-bottom: 96px;\\n  }\\n}\\n/* --------- Services cards --------- */\\n.content-services-cards {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n  -ms-flex-direction: column;\\n  flex-direction: column;\\n  -ms-flex-wrap: nowrap;\\n  flex-wrap: nowrap;\\n  -webkit-box-pack: center;\\n  -ms-flex-pack: center;\\n  justify-content: center;\\n  -webkit-box-align: center;\\n  -ms-flex-align: center;\\n  align-items: center;\\n}\\n@media (min-width: 768px) {\\n  .content-services-cards {\\n    -webkit-box-orient: horizontal;\\n    -webkit-box-direction: normal;\\n    -ms-flex-direction: row;\\n    flex-direction: row;\\n    -webkit-box-pack: justify;\\n    -ms-flex-pack: justify;\\n    justify-content: space-between;\\n  }\\n}\\n.services-card__item {\\n  width: 328px;\\n  height: auto;\\n  margin-bottom: 30px;\\n  padding: 35px 40px;\\n  -webkit-box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);\\n  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);\\n  cursor: pointer;\\n}\\n.services-card__item:last-child {\\n  margin-bottom: 0;\\n}\\n.services-card__item:hover {\\n  -webkit-box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.2);\\n  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.2);\\n}\\n@media (min-width: 768px) {\\n  .services-card__item {\\n    width: 225px;\\n    padding: 20px;\\n    margin-bottom: 0;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .services-card__item {\\n    width: 328px;\\n    padding: 35px 40px;\\n  }\\n}\\n.services-card__item-icon {\\n  width: 72px;\\n  height: 72px;\\n  margin-bottom: 20px;\\n}\\n@media (min-width: 768px) {\\n  .services-card__item-icon {\\n    width: 52px;\\n    height: 52px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  .services-card__item-icon {\\n    width: 72px;\\n    height: 72px;\\n  }\\n}\\n.services-card__item-title {\\n  position: relative;\\n  margin-bottom: 42px;\\n}\\n.services-card__item-title::after {\\n  position: absolute;\\n  content: \\\"\\\";\\n  width: 50px;\\n  height: 2px;\\n  top: 43px;\\n  left: 1px;\\n  background-color: #e74040;\\n}\\n.services-card__item-desc {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 400;\\n  font-size: 14px;\\n  line-height: 20px;\\n  letter-spacing: 0.2px;\\n  color: #737373;\\n}\\n.button {\\n  padding: 15px 38px;\\n  margin-right: 10px;\\n  border: 1px solid #ff685b;\\n  border-radius: 5px;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 14px;\\n  line-height: 22px;\\n  letter-spacing: 0.2px;\\n  color: #ff685b;\\n  background-color: #fff;\\n}\\n.button:last-child {\\n  margin-right: 0;\\n}\\n.button:hover {\\n  color: #fff;\\n  background-color: #ff685b;\\n}\\n.button:active {\\n  border-color: #f8958c;\\n  background-color: #f8958c;\\n}\\n.profile-btn {\\n  margin-right: 0;\\n  margin-bottom: 10px;\\n}\\n.profile-btn:last-child {\\n  margin-bottom: 0;\\n}\\n@media (min-width: 768px) {\\n  .profile-btn {\\n    margin-right: 10px;\\n    margin-bottom: 0;\\n  }\\n  .profile-btn:last-child {\\n    margin-right: 0;\\n  }\\n}\\n.modal-overlay.show {\\n  display: block;\\n}\\n.modal-overlay {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  left: 0;\\n  bottom: 0;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  overflow-y: auto;\\n}\\n.form-auth {\\n  width: 600px;\\n  margin: 100px auto;\\n  padding: 20px 50px;\\n  border-radius: 5px;\\n  background-color: #fff;\\n}\\n.form-content__item {\\n  margin-bottom: 40px;\\n}\\n.form-title {\\n  margin-bottom: 30px;\\n  text-align: center;\\n  font-size: 26px;\\n}\\n.form-label {\\n  margin-bottom: 10px;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-weight: 700;\\n  font-size: 14px;\\n  line-height: 24px;\\n  letter-spacing: 0.1px;\\n  color: #252b42;\\n}\\n.form-input {\\n  width: 100%;\\n  height: 40px;\\n  padding: 10px;\\n  border: 1px solid #252b42;\\n  border-radius: 5px;\\n}\\n.form-button {\\n  text-align: center;\\n}\\n.error {\\n  border-color: #dd3d3d;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://aveds-test-js/./src/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://aveds-test-js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://aveds-test-js/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/img/emergency.png":
/*!**********************************!*\
  !*** ./assets/img/emergency.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"8bcdbf0d1f03cce62d1ad5278d4fd84a.png\");\n\n//# sourceURL=webpack://aveds-test-js/./assets/img/emergency.png?");

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d1ae559cecd991d47ad50ccae49177e1.png\");\n\n//# sourceURL=webpack://aveds-test-js/./assets/img/logo.png?");

/***/ }),

/***/ "./assets/img/online.png":
/*!*******************************!*\
  !*** ./assets/img/online.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d79c645246646119eef278e136c0be59.png\");\n\n//# sourceURL=webpack://aveds-test-js/./assets/img/online.png?");

/***/ }),

/***/ "./assets/img/therapy.png":
/*!********************************!*\
  !*** ./assets/img/therapy.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"5b4b1ea2bfb5fe9ba80f4844e7cc3d82.png\");\n\n//# sourceURL=webpack://aveds-test-js/./assets/img/therapy.png?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://aveds-test-js/./src/css/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://aveds-test-js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://aveds-test-js/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://aveds-test-js/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://aveds-test-js/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://aveds-test-js/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://aveds-test-js/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;