"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateappuix"]("app",{

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* eslint-disable */\n\nconst routes = [{\n  path: \"/:user_id\",\n  name: \"user_id\",\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.bind(__webpack_require__, /*! @/views/HomeView.vue */ \"./src/views/HomeView.vue\"))\n}, {\n  path: \"/:user_id/all\",\n  name: \"all_user_id\",\n  component: () => __webpack_require__.e(/*! import() | about */ \"about\").then(__webpack_require__.t.bind(__webpack_require__, /*! @/views/EditPageView.vue */ \"./src/views/EditPageView.vue\", 23))\n}];\nconst router = (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createRouter)({\n  history: (0,vue_router__WEBPACK_IMPORTED_MODULE_0__.createWebHistory)(),\n  routes\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcm91dGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUpBO0FBT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHB1aXgvLi9zcmMvcm91dGVyL2luZGV4LmpzPzVhYTQiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cclxuaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5IH0gZnJvbSAndnVlLXJvdXRlcidcclxuY29uc3Qgcm91dGVzID0gW1xyXG4gICB7IHBhdGg6IFwiLzp1c2VyX2lkXCIsIG5hbWU6IFwidXNlcl9pZFwiLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJ0Avdmlld3MvSG9tZVZpZXcudnVlJyl9LFxyXG4gIHsgcGF0aDogXCIvOnVzZXJfaWQvYWxsXCIsIG5hbWU6XCJhbGxfdXNlcl9pZFwiLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJ0Avdmlld3MvRWRpdFBhZ2VWaWV3LnZ1ZScpfSxcclxuXVxyXG5cclxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcclxuICBoaXN0b3J5OiBjcmVhdGVXZWJIaXN0b3J5KFxyXG5cdCAgLy9wcm9jZXNzLmVudi5CQVNFX1VSTFxyXG5cdCAgKSxcclxuICByb3V0ZXMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/router/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/create fake namespace object */
/******/ !function() {
/******/ 	var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 	var leafPrototypes;
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 16: return value when it's Promise-like
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = this(value);
/******/ 		if(mode & 8) return value;
/******/ 		if(typeof value === 'object' && value) {
/******/ 			if((mode & 4) && value.__esModule) return value;
/******/ 			if((mode & 16) && typeof value.then === 'function') return value;
/******/ 		}
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		var def = {};
/******/ 		leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 		for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 			Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 		}
/******/ 		def['default'] = function() { return value; };
/******/ 		__webpack_require__.d(ns, def);
/******/ 		return ns;
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e1c2c8d2f07153ca"; }
/******/ }();
/******/ 
/******/ }
);