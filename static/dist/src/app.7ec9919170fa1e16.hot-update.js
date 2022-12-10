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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeroSection_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/HeroSection.vue */ \"./src/components/HeroSection.vue\");\n/* harmony import */ var _components_StaffSection_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/StaffSection.vue */ \"./src/components/StaffSection.vue\");\n/* harmony import */ var _components_RoomSection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/RoomSection.vue */ \"./src/components/RoomSection.vue\");\n/* harmony import */ var _components_MenuSection_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MenuSection.vue */ \"./src/components/MenuSection.vue\");\n/* harmony import */ var _components_ReviewSection_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ReviewSection.vue */ \"./src/components/ReviewSection.vue\");\n/* harmony import */ var _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContactSection.vue */ \"./src/components/ContactSection.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* eslint-disable */\n\n\n\n\n\n\n\nArray.prototype.groupBy = function (key) {\n  return this.reduce((hash, obj) => {\n    if (obj[key] === undefined) return hash;\n    return Object.assign(hash, {\n      [obj[key]]: (hash[obj[key]] || []).concat(obj)\n    });\n  }, {});\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomeView',\n  components: {\n    HeroSection: _components_HeroSection_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    RoomSection: _components_RoomSection_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    StaffSection: _components_StaffSection_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MenuSection: _components_MenuSection_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ReviewSection: _components_ReviewSection_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ContactSection: _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n\n  data() {\n    return {\n      hotel: {}\n    };\n  },\n\n  created() {\n    this.getStaffs();\n  },\n\n  methods: {\n    async getStaffs() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`http://127.0.0.1:8000/v1/api/hotel/${this.$route.params.user}`);\n        this.hotel = res.data;\n      } catch (e) {\n        alert(\"yeah\"); //location.href = \"/admin/\"\n      }\n    }\n\n  },\n  computed: {\n    pages() {\n      if (this.hotel.page) {\n        return this.hotel.page.map(x => x.title);\n      }\n\n      return [];\n    },\n\n    rooms() {\n      return this.hotel.room;\n    },\n\n    staffs() {\n      return this.hotel.staff;\n    },\n\n    menus() {\n      if (this.hotel.menu) {\n        return this.hotel.menu.groupBy(\"nature\");\n      }\n\n      return [];\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9iYXNpYy9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQWxCQTtBQXRCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2Jhc2ljL0hvbWVWaWV3LnZ1ZT9iMTI4Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIHBiX25hdmJhciBwYl9zY3JvbGxlZC1saWdodFwiIGlkPVwidGVtcGxhdGV1eC1uYXZiYXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj48c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Ujwvc3Bhbj5vdGFuYTwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tZW51LXRvZ2dsZSBqcy1zaXRlLW1lbnUtdG9nZ2xlICBtbC1hdXRvXCIgIGRhdGEtYW9zPVwiZmFkZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiN0ZW1wbGF0ZXV4LW5hdmJhci1uYXZcIiBhcmlhLWNvbnRyb2xzPVwidGVtcGxhdGV1eC1uYXZiYXItbmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIEVORCBtZW51LXRvZ2dsZSAtLT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwidGVtcGxhdGV1eC1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiB2LWZvcj1cInBhZ2UgaW4gcGFnZXNcIiB2LWJpbmQ6a2V5PVwicGFnZVwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiA6aHJlZj1cImAjc2VjdGlvbi0ke3BhZ2V9YFwiPnt7IHBhZ2UuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgfX08L2E+PC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW0gY3RhLWJ0biBtbC14bC0yIG1sLWxnLTIgbWwtbWQtMCBtbC1zbS0wIG1sLTBcIj48YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjcmVzZXJ2YXRpb24tZm9ybVwiID48c3BhbiBjbGFzcz1cInBiX3JvdW5kZWQtNCBweC00IHJvdW5kZWRcIj5Cb29raW5nICYgUmVzZXJ2YXRpb248L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICAgPCEtLSBFTkQgbmF2IC0tPlxyXG5cclxuPEhlcm9TZWN0aW9uIDptc2c9XCJob3RlbC5uYW1lXCIgOmhlcm9faW1hZ2U9XCJob3RlbC5oZXJvX2ltYWdlXCIgdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdob21lJylcIiAvPlxyXG5cdDxTdGFmZlNlY3Rpb24gOnN0YWZmcz1cInN0YWZmc1wiIDphYm91dD1cImhvdGVsLmFib3V0XCIgdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdzdGFmZicpXCIgLz5cclxuICA8Um9vbVNlY3Rpb24gOnJvb21zPVwicm9vbXNcIiB2LWlmPVwicGFnZXMuaW5jbHVkZXMoJ3Jvb20nKVwiIC8+XHJcbiAgPE1lbnVTZWN0aW9uICA6bWVudXM9XCJtZW51c1wiIHYtaWY9XCJwYWdlcy5pbmNsdWRlcygnbWVudScpXCIvPlxyXG4gIDxSZXZpZXdTZWN0aW9uIHYtaWY9XCJwYWdlcy5pbmNsdWRlcygncmV2aWV3JylcIiAvPlxyXG4gIDxDb250YWN0U2VjdGlvbiA6YWRkcmVzcz1cImhvdGVsLmFkZHJlc3NcIiA6ZW1haWw9XCJob3RlbC5lbWFpbFwiIDpwaG9uZXM9XCJob3RlbC5jb250YWN0XCIgdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdjb250YWN0JylcIiAvPlxyXG4gIDxzZWN0aW9uIGNsYXNzPVwic2VjdGlvbiBiZy1pbWFnZSBvdmVybGF5XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9zcmMvZGlzdC9pbWFnZXMvaGVyb180LmpwZyk7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiID5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgY29sLW1kLTYgdGV4dC1jZW50ZXIgbWItNCBtYi1tZC0wIHRleHQtbWQtbGVmdFwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtd2hpdGUgZm9udC13ZWlnaHQtYm9sZFwiPkEgQmVzdCBQbGFjZSBUbyBTdGF5LiBSZXNlcnZlIE5vdyE8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlciB0ZXh0LW1kLXJpZ2h0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIyMDBcIj5cclxuICAgICAgICAgICAgICA8IS0tIEV4dHJhIGxhcmdlIG1vZGFsIC0tPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtd2hpdGUtcHJpbWFyeSBweS0zIHRleHQtd2hpdGUgcHgtNVwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZXNlcnZhdGlvbi1mb3JtXCI+UmVzZXJ2ZSBOb3c8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgSGVyb1NlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9IZXJvU2VjdGlvbi52dWVcIlxyXG5pbXBvcnQgU3RhZmZTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvU3RhZmZTZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBSb29tU2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL1Jvb21TZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBNZW51U2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL01lbnVTZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBSZXZpZXdTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvUmV2aWV3U2VjdGlvbi52dWVcIjtcclxuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGFjdFNlY3Rpb24udnVlXCI7XHJcblxyXG5BcnJheS5wcm90b3R5cGUuZ3JvdXBCeSA9IGZ1bmN0aW9uKGtleSkge3JldHVybiB0aGlzLnJlZHVjZSgoaGFzaCwgb2JqKSA9PiB7XHJcbmlmKG9ialtrZXldID09PSB1bmRlZmluZWQpIHJldHVybiBoYXNoO1xyXG5yZXR1cm4gT2JqZWN0LmFzc2lnbihoYXNoLCB7IFtvYmpba2V5XV06KCBoYXNoW29ialtrZXldXSB8fCBbXSApLmNvbmNhdChvYmopfSlcclxufSwge30pXHJcbn07XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnSG9tZVZpZXcnLFxyXG4gIGNvbXBvbmVudHM6IHsgSGVyb1NlY3Rpb24sIFJvb21TZWN0aW9uLCBTdGFmZlNlY3Rpb24sIE1lbnVTZWN0aW9uLCBSZXZpZXdTZWN0aW9uLCBDb250YWN0U2VjdGlvbiB9LFxyXG4gIGRhdGEoKXtcclxuICBcdHJldHVybiB7XHJcbiAgICAgIGhvdGVsOiB7fSxcclxuXHRcdH1cclxuICB9LFxyXG4gIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLmdldFN0YWZmcygpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyBnZXRTdGFmZnMoKXtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC92MS9hcGkvaG90ZWwvJHt0aGlzLiRyb3V0ZS5wYXJhbXMudXNlcn1gKVxyXG4gICAgICAgIHRoaXMuaG90ZWwgPSByZXMuZGF0YVxyXG4gICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICBhbGVydChcInllYWhcIilcclxuICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9hZG1pbi9cIlxyXG4gICAgICB9IFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwYWdlcygpe1xyXG4gICAgICBpZiAodGhpcy5ob3RlbC5wYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdGVsLnBhZ2UubWFwKHg9PngudGl0bGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfSxcclxuICAgIHJvb21zKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmhvdGVsLnJvb21cclxuICAgIH0sXHJcbiAgICBzdGFmZnMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaG90ZWwuc3RhZmZcclxuICAgIH0sXHJcbiAgICBtZW51cygpe1xyXG4gICAgICBpZiAodGhpcy5ob3RlbC5tZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdGVsLm1lbnUuZ3JvdXBCeShcIm5hdHVyZVwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=template&id=2851eb1f":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=template&id=2851eb1f ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = {\n  class: \"navbar navbar-expand-lg navbar-dark pb_navbar pb_scrolled-light\",\n  id: \"templateux-navbar\"\n};\nconst _hoisted_2 = {\n  class: \"container\"\n};\n\nconst _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"a\", {\n  class: \"navbar-brand\",\n  href: \"/\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"span\", {\n  class: \"text-danger\"\n}, \"R\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createTextVNode)(\"otana\")], -1\n/* HOISTED */\n);\n\nconst _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", {\n  class: \"site-menu-toggle js-site-menu-toggle ml-auto\",\n  \"data-aos\": \"fade\",\n  \"data-toggle\": \"collapse\",\n  \"data-target\": \"#templateux-navbar-nav\",\n  \"aria-controls\": \"templateux-navbar-nav\",\n  \"aria-expanded\": \"false\",\n  \"aria-label\": \"Toggle navigation\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"span\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"span\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"span\")], -1\n/* HOISTED */\n);\n\nconst _hoisted_5 = {\n  class: \"collapse navbar-collapse\",\n  id: \"templateux-navbar-nav\"\n};\nconst _hoisted_6 = {\n  class: \"navbar-nav ml-auto\"\n};\nconst _hoisted_7 = [\"href\"];\n\nconst _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"li\", {\n  class: \"nav-item cta-btn ml-xl-2 ml-lg-2 ml-md-0 ml-sm-0 ml-0\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"a\", {\n  class: \"nav-link\",\n  href: \"#\",\n  \"data-toggle\": \"modal\",\n  \"data-target\": \"#reservation-form\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"span\", {\n  class: \"pb_rounded-4 px-4 rounded\"\n}, \"Booking & Reservation\")])], -1\n/* HOISTED */\n);\n\nconst _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_1__.createStaticVNode)(\"<section class=\\\"section bg-image overlay\\\" style=\\\"background-image:url(/static/src/dist/images/hero_4.jpg);\\\"><div class=\\\"container\\\"><div class=\\\"row align-items-center\\\"><div class=\\\"col-12 col-md-6 text-center mb-4 mb-md-0 text-md-left\\\" data-aos=\\\"fade-up\\\"><h2 class=\\\"text-white font-weight-bold\\\">A Best Place To Stay. Reserve Now!</h2></div><div class=\\\"col-12 col-md-6 text-center text-md-right\\\" data-aos=\\\"fade-up\\\" data-aos-delay=\\\"200\\\"><!-- Extra large modal --><a href=\\\"#\\\" class=\\\"btn btn-outline-white-primary py-3 text-white px-5\\\" data-toggle=\\\"modal\\\" data-target=\\\"#reservation-form\\\">Reserve Now</a></div></div></div></section>\", 1);\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_HeroSection = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"HeroSection\");\n\n  const _component_StaffSection = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"StaffSection\");\n\n  const _component_RoomSection = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"RoomSection\");\n\n  const _component_MenuSection = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"MenuSection\");\n\n  const _component_ReviewSection = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"ReviewSection\");\n\n  const _component_ContactSection = (0,vue__WEBPACK_IMPORTED_MODULE_1__.resolveComponent)(\"ContactSection\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"nav\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_2, [_hoisted_3, _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" END menu-toggle \"), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"ul\", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_1__.renderList)($options.pages, page => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementBlock)(\"li\", {\n      class: \"nav-item\",\n      key: page\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_1__.createElementVNode)(\"a\", {\n      class: \"nav-link\",\n      href: `#section-${page}`\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_1__.toDisplayString)(page.charAt(0).toUpperCase()), 9\n    /* TEXT, PROPS */\n    , _hoisted_7)]);\n  }), 128\n  /* KEYED_FRAGMENT */\n  )), _hoisted_8])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\" END nav \"), $options.pages.includes('home') ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(_component_HeroSection, {\n    key: 0,\n    msg: $data.hotel.name,\n    hero_image: $data.hotel.hero_image\n  }, null, 8\n  /* PROPS */\n  , [\"msg\", \"hero_image\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true), $options.pages.includes('staff') ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(_component_StaffSection, {\n    key: 1,\n    staffs: $options.staffs,\n    about: $data.hotel.about\n  }, null, 8\n  /* PROPS */\n  , [\"staffs\", \"about\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true), $options.pages.includes('room') ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(_component_RoomSection, {\n    key: 2,\n    rooms: $options.rooms\n  }, null, 8\n  /* PROPS */\n  , [\"rooms\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true), $options.pages.includes('menu') ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(_component_MenuSection, {\n    key: 3,\n    menus: $options.menus\n  }, null, 8\n  /* PROPS */\n  , [\"menus\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true), $options.pages.includes('review') ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(_component_ReviewSection, {\n    key: 4\n  })) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true), $options.pages.includes('contact') ? ((0,vue__WEBPACK_IMPORTED_MODULE_1__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_1__.createBlock)(_component_ContactSection, {\n    key: 5,\n    address: $data.hotel.address,\n    email: $data.hotel.email,\n    phones: $data.hotel.contact\n  }, null, 8\n  /* PROPS */\n  , [\"address\", \"email\", \"phones\"])) : (0,vue__WEBPACK_IMPORTED_MODULE_1__.createCommentVNode)(\"v-if\", true), _hoisted_9], 64\n  /* STABLE_FRAGMENT */\n  );\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvdmlld3MvYmFzaWMvSG9tZVZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI4NTFlYjFmLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQTtBQUFBOzs7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFKQTs7O0FBT0E7QUFBQTs7O0FBQ0E7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFiQTtBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBUUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFBQTs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvYmFzaWMvSG9tZVZpZXcudnVlP2IxMjgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG48bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgcGJfbmF2YmFyIHBiX3Njcm9sbGVkLWxpZ2h0XCIgaWQ9XCJ0ZW1wbGF0ZXV4LW5hdmJhclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPjxzcGFuIGNsYXNzPVwidGV4dC1kYW5nZXJcIj5SPC9zcGFuPm90YW5hPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLW1lbnUtdG9nZ2xlIGpzLXNpdGUtbWVudS10b2dnbGUgIG1sLWF1dG9cIiAgZGF0YS1hb3M9XCJmYWRlXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI3RlbXBsYXRldXgtbmF2YmFyLW5hdlwiIGFyaWEtY29udHJvbHM9XCJ0ZW1wbGF0ZXV4LW5hdmJhci1uYXZcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gRU5EIG1lbnUtdG9nZ2xlIC0tPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJ0ZW1wbGF0ZXV4LW5hdmJhci1uYXZcIj5cclxuICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbWwtYXV0b1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiIHYtZm9yPVwicGFnZSBpbiBwYWdlc1wiIHYtYmluZDprZXk9XCJwYWdlXCI+PGEgY2xhc3M9XCJuYXYtbGlua1wiIDpocmVmPVwiYCNzZWN0aW9uLSR7cGFnZX1gXCI+e3sgcGFnZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSB9fTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBjdGEtYnRuIG1sLXhsLTIgbWwtbGctMiBtbC1tZC0wIG1sLXNtLTAgbWwtMFwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZXNlcnZhdGlvbi1mb3JtXCIgPjxzcGFuIGNsYXNzPVwicGJfcm91bmRlZC00IHB4LTQgcm91bmRlZFwiPkJvb2tpbmcgJiBSZXNlcnZhdGlvbjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgICA8IS0tIEVORCBuYXYgLS0+XHJcblxyXG48SGVyb1NlY3Rpb24gOm1zZz1cImhvdGVsLm5hbWVcIiA6aGVyb19pbWFnZT1cImhvdGVsLmhlcm9faW1hZ2VcIiB2LWlmPVwicGFnZXMuaW5jbHVkZXMoJ2hvbWUnKVwiIC8+XHJcblx0PFN0YWZmU2VjdGlvbiA6c3RhZmZzPVwic3RhZmZzXCIgOmFib3V0PVwiaG90ZWwuYWJvdXRcIiB2LWlmPVwicGFnZXMuaW5jbHVkZXMoJ3N0YWZmJylcIiAvPlxyXG4gIDxSb29tU2VjdGlvbiA6cm9vbXM9XCJyb29tc1wiIHYtaWY9XCJwYWdlcy5pbmNsdWRlcygncm9vbScpXCIgLz5cclxuICA8TWVudVNlY3Rpb24gIDptZW51cz1cIm1lbnVzXCIgdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdtZW51JylcIi8+XHJcbiAgPFJldmlld1NlY3Rpb24gdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdyZXZpZXcnKVwiIC8+XHJcbiAgPENvbnRhY3RTZWN0aW9uIDphZGRyZXNzPVwiaG90ZWwuYWRkcmVzc1wiIDplbWFpbD1cImhvdGVsLmVtYWlsXCIgOnBob25lcz1cImhvdGVsLmNvbnRhY3RcIiB2LWlmPVwicGFnZXMuaW5jbHVkZXMoJ2NvbnRhY3QnKVwiIC8+XHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIGJnLWltYWdlIG92ZXJsYXlcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL3NyYy9kaXN0L2ltYWdlcy9oZXJvXzQuanBnKTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlciBtYi00IG1iLW1kLTAgdGV4dC1tZC1sZWZ0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC13aGl0ZSBmb250LXdlaWdodC1ib2xkXCI+QSBCZXN0IFBsYWNlIFRvIFN0YXkuIFJlc2VydmUgTm93ITwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC02IHRleHQtY2VudGVyIHRleHQtbWQtcmlnaHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gRXh0cmEgbGFyZ2UgbW9kYWwgLS0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13aGl0ZS1wcmltYXJ5IHB5LTMgdGV4dC13aGl0ZSBweC01XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3Jlc2VydmF0aW9uLWZvcm1cIj5SZXNlcnZlIE5vdzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBTdGFmZlNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9TdGFmZlNlY3Rpb24udnVlXCJcclxuaW1wb3J0IFJvb21TZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvUm9vbVNlY3Rpb24udnVlXCJcclxuaW1wb3J0IE1lbnVTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvTWVudVNlY3Rpb24udnVlXCJcclxuaW1wb3J0IFJldmlld1NlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9SZXZpZXdTZWN0aW9uLnZ1ZVwiO1xyXG5pbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi52dWVcIjtcclxuXHJcbkFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24oa2V5KSB7cmV0dXJuIHRoaXMucmVkdWNlKChoYXNoLCBvYmopID0+IHtcclxuaWYob2JqW2tleV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGhhc2g7XHJcbnJldHVybiBPYmplY3QuYXNzaWduKGhhc2gsIHsgW29ialtrZXldXTooIGhhc2hbb2JqW2tleV1dIHx8IFtdICkuY29uY2F0KG9iail9KVxyXG59LCB7fSlcclxufTtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdIb21lVmlldycsXHJcbiAgY29tcG9uZW50czogeyBIZXJvU2VjdGlvbiwgUm9vbVNlY3Rpb24sIFN0YWZmU2VjdGlvbiwgTWVudVNlY3Rpb24sIFJldmlld1NlY3Rpb24sIENvbnRhY3RTZWN0aW9uIH0sXHJcbiAgZGF0YSgpe1xyXG4gIFx0cmV0dXJuIHtcclxuICAgICAgaG90ZWw6IHt9LFxyXG5cdFx0fVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0U3RhZmZzKClcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGdldFN0YWZmcygpe1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3YxL2FwaS9ob3RlbC8ke3RoaXMuJHJvdXRlLnBhcmFtcy51c2VyfWApXHJcbiAgICAgICAgdGhpcy5ob3RlbCA9IHJlcy5kYXRhXHJcbiAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgIGFsZXJ0KFwieWVhaFwiKVxyXG4gICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2FkbWluL1wiXHJcbiAgICAgIH0gXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHBhZ2VzKCl7XHJcbiAgICAgIGlmICh0aGlzLmhvdGVsLnBhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG90ZWwucGFnZS5tYXAoeD0+eC50aXRsZSlcclxuICAgICAgICAgIH1cclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9LFxyXG4gICAgcm9vbXMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaG90ZWwucm9vbVxyXG4gICAgfSxcclxuICAgIHN0YWZmcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5ob3RlbC5zdGFmZlxyXG4gICAgfSxcclxuICAgIG1lbnVzKCl7XHJcbiAgICAgIGlmICh0aGlzLmhvdGVsLm1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG90ZWwubWVudS5ncm91cEJ5KFwibmF0dXJlXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=template&id=2851eb1f\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e43ec8d770fd4a5d"; }
/******/ }();
/******/ 
/******/ }
);