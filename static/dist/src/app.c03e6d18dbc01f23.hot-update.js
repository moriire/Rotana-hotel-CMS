"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatefrontend"]("app",{

/***/ "./src/stores/pages.js":
/*!*****************************!*\
  !*** ./src/stores/pages.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alertifyjs */ \"./node_modules/alertifyjs/build/alertify.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/router */ \"./src/router/index.js\");\n//<script>\n\n\n\n\nconst BASE = \"https://present.pythonanywhere\"; //const config = { headers: { 'Authorization' :  `Bearer ${state.user.access_token}` }}\n\nconst clients = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({\n  data: []\n});\nconst $errors = (0,vue__WEBPACK_IMPORTED_MODULE_2__.reactive)({});\n\nconst getClients = async function () {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BASE}/api/students/`);\n    clients.data = res.data;\n    alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().success(\"students get\");\n  } catch (errors) {\n    alert(errors.response);\n  }\n};\n\nconst addClient = async function (kw) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/api/students/`, kw);\n    const resp = res.data;\n    alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().success(JSON.stringify(resp));\n    getClients();\n  } catch (errors) {\n    console.log(errors.response.data);\n    $errors.code = errors.response.status;\n    $errors.message = errors.response.data;\n    alertifyjs__WEBPACK_IMPORTED_MODULE_1___default().error(\"Pls check the form\");\n  }\n};\n\nconst addRoll = async function (user, kw) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/api/rolls/`, {\n      user: user,\n      present: kw\n    });\n    const respData = res.data;\n    alert(respData);\n    getClients();\n    _router__WEBPACK_IMPORTED_MODULE_3__[\"default\"].push(\"/\");\n  } catch (errors) {\n    return \"errors\";\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  clients,\n  getClients,\n  addClient,\n  addRoll\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL3BhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFBQTtBQUFBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvc3RvcmVzL3BhZ2VzLmpzP2MzYjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy88c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBhbGVydGlmeSBmcm9tIFwiYWxlcnRpZnlqc1wiO1xyXG5pbXBvcnQgeyByZWFjdGl2ZSwgcmVmLCByZWFkb25seSB9IGZyb20gXCJ2dWVcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQC9yb3V0ZXJcIjtcclxuY29uc3QgQkFTRSA9IFwiaHR0cHM6Ly9wcmVzZW50LnB5dGhvbmFueXdoZXJlXCJcclxuXHJcbi8vY29uc3QgY29uZmlnID0geyBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJyA6ICBgQmVhcmVyICR7c3RhdGUudXNlci5hY2Nlc3NfdG9rZW59YCB9fVxyXG5jb25zdCBjbGllbnRzID0gcmVhY3RpdmUoe2RhdGE6IFtdfSk7XHJcblxyXG5jb25zdCAkZXJyb3JzPXJlYWN0aXZlKHt9KTtcclxuXHJcbmNvbnN0IGdldENsaWVudHMgPSBhc3luYyBmdW5jdGlvbigpe1xyXG5cdHRyeSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7QkFTRX0vYXBpL3N0dWRlbnRzL2ApXHJcblx0XHRjbGllbnRzLmRhdGEgPSAgcmVzLmRhdGFcclxuXHRcdGFsZXJ0aWZ5LnN1Y2Nlc3MoXCJzdHVkZW50cyBnZXRcIilcclxuXHR9IGNhdGNoKGVycm9ycykge1xyXG5cdFx0XHRhbGVydChlcnJvcnMucmVzcG9uc2UpXHJcblx0fVxyXG59O1xyXG5jb25zdCAgYWRkQ2xpZW50ID0gYXN5bmMgZnVuY3Rpb24oa3cpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRX0vYXBpL3N0dWRlbnRzL2AsIGt3KVxyXG4gICAgICAgIFx0Y29uc3QgcmVzcCA9IHJlcy5kYXRhXHJcblx0ICAgICAgIFx0YWxlcnRpZnkuc3VjY2VzcyhKU09OLnN0cmluZ2lmeShyZXNwKSk7XHJcbiAgICAgICAgXHRnZXRDbGllbnRzKCk7XHJcbiAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2goZXJyb3JzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcnMucmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAkZXJyb3JzLmNvZGU9ZXJyb3JzLnJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgICRlcnJvcnMubWVzc2FnZT1lcnJvcnMucmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgIGFsZXJ0aWZ5LmVycm9yKFwiUGxzIGNoZWNrIHRoZSBmb3JtXCIpXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG5jb25zdCAgYWRkUm9sbCA9IGFzeW5jIGZ1bmN0aW9uKHVzZXIsIGt3KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFfS9hcGkvcm9sbHMvYCwge3VzZXI6IHVzZXIsIHByZXNlbnQ6IGt3fSlcclxuICAgICAgICBjb25zdCByZXNwRGF0YSA9IHJlcy5kYXRhXHJcbiAgICAgICAgYWxlcnQocmVzcERhdGEpO1xyXG4gICAgICAgIGdldENsaWVudHMoKTtcclxuXHRyb3V0ZXIucHVzaChcIi9cIilcclxuICAgICAgfSBjYXRjaChlcnJvcnMpIHtcclxuICAgICAgICAgIHJldHVybiBcImVycm9yc1wiXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgY2xpZW50cywgZ2V0Q2xpZW50cywgYWRkQ2xpZW50LCAgYWRkUm9sbH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/stores/pages.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "39e6b93f71dbc5c1"; }
/******/ }();
/******/ 
/******/ }
);