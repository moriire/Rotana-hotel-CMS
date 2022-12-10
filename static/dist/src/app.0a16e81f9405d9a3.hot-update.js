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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeroSection_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/HeroSection.vue */ \"./src/components/HeroSection.vue\");\n/* harmony import */ var _components_StaffSection_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/StaffSection.vue */ \"./src/components/StaffSection.vue\");\n/* harmony import */ var _components_RoomSection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/RoomSection.vue */ \"./src/components/RoomSection.vue\");\n/* harmony import */ var _components_MenuSection_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MenuSection.vue */ \"./src/components/MenuSection.vue\");\n/* harmony import */ var _components_ReviewSection_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ReviewSection.vue */ \"./src/components/ReviewSection.vue\");\n/* harmony import */ var _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContactSection.vue */ \"./src/components/ContactSection.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* eslint-disable */\n\n\n\n\n\n\n\nArray.prototype.groupBy = function (key) {\n  return this.reduce((hash, obj) => {\n    if (obj[key] === undefined) return hash;\n    return Object.assign(hash, {\n      [obj[key]]: (hash[obj[key]] || []).concat(obj)\n    });\n  }, {});\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'HomeView',\n  components: {\n    HeroSection: _components_HeroSection_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    RoomSection: _components_RoomSection_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    StaffSection: _components_StaffSection_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MenuSection: _components_MenuSection_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ReviewSection: _components_ReviewSection_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ContactSection: _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n\n  data() {\n    return {\n      hotel: {}\n    };\n  },\n\n  created() {\n    this.getStaffs();\n  },\n\n  methods: {\n    async getStaffs() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`http://127.0.0.1:8000/v1/api/hotel/${this.$route.params.user}`);\n        this.hotel = res.data;\n      } catch (e) {\n        alert(\"yeah\"); //location.href = \"/admin/\"\n      }\n    }\n\n  },\n  computed: {\n    pages() {\n      if (this.hotel.page) {\n        return this.hotel.page.map(x => x.title);\n      }\n\n      return [];\n    },\n\n    rooms() {\n      return this.hotel.room;\n    },\n\n    staffs() {\n      return this.hotel.staff;\n    },\n\n    menus() {\n      if (this.hotel.menu) {\n        return this.hotel.menu.groupBy(\"nature\");\n      }\n\n      return [];\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9iYXNpYy9Ib21lVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQWxCQTtBQXRCQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3ZpZXdzL2Jhc2ljL0hvbWVWaWV3LnZ1ZT9iMTI4Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIHBiX25hdmJhciBwYl9zY3JvbGxlZC1saWdodFwiIGlkPVwidGVtcGxhdGV1eC1uYXZiYXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj48c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+Ujwvc3Bhbj5vdGFuYTwvYT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tZW51LXRvZ2dsZSBqcy1zaXRlLW1lbnUtdG9nZ2xlICBtbC1hdXRvXCIgIGRhdGEtYW9zPVwiZmFkZVwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiN0ZW1wbGF0ZXV4LW5hdmJhci1uYXZcIiBhcmlhLWNvbnRyb2xzPVwidGVtcGxhdGV1eC1uYXZiYXItbmF2XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIEVORCBtZW51LXRvZ2dsZSAtLT5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwidGVtcGxhdGV1eC1uYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIiB2LWZvcj1cInBhZ2UgaW4gcGFnZXNcIiB2LWJpbmQ6a2V5PVwicGFnZVwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiA6aHJlZj1cImAjc2VjdGlvbi0ke3BhZ2V9YFwiPnt7IHBhZ2VbMF0udG9VcHBlckNhc2UoKStwYWZlWzE6XSB9fTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBjdGEtYnRuIG1sLXhsLTIgbWwtbGctMiBtbC1tZC0wIG1sLXNtLTAgbWwtMFwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZXNlcnZhdGlvbi1mb3JtXCIgPjxzcGFuIGNsYXNzPVwicGJfcm91bmRlZC00IHB4LTQgcm91bmRlZFwiPkJvb2tpbmcgJiBSZXNlcnZhdGlvbjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgICA8IS0tIEVORCBuYXYgLS0+XHJcblxyXG48SGVyb1NlY3Rpb24gOm1zZz1cImhvdGVsLm5hbWVcIiA6aGVyb19pbWFnZT1cImhvdGVsLmhlcm9faW1hZ2VcIiB2LWlmPVwicGFnZXMuaW5jbHVkZXMoJ2hvbWUnKVwiIC8+XHJcblx0PFN0YWZmU2VjdGlvbiA6c3RhZmZzPVwic3RhZmZzXCIgOmFib3V0PVwiaG90ZWwuYWJvdXRcIiB2LWlmPVwicGFnZXMuaW5jbHVkZXMoJ3N0YWZmJylcIiAvPlxyXG4gIDxSb29tU2VjdGlvbiA6cm9vbXM9XCJyb29tc1wiIHYtaWY9XCJwYWdlcy5pbmNsdWRlcygncm9vbScpXCIgLz5cclxuICA8TWVudVNlY3Rpb24gIDptZW51cz1cIm1lbnVzXCIgdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdtZW51JylcIi8+XHJcbiAgPFJldmlld1NlY3Rpb24gdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdyZXZpZXcnKVwiIC8+XHJcbiAgPENvbnRhY3RTZWN0aW9uIDphZGRyZXNzPVwiaG90ZWwuYWRkcmVzc1wiIDplbWFpbD1cImhvdGVsLmVtYWlsXCIgOnBob25lcz1cImhvdGVsLmNvbnRhY3RcIiB2LWlmPVwicGFnZXMuaW5jbHVkZXMoJ2NvbnRhY3QnKVwiIC8+XHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIGJnLWltYWdlIG92ZXJsYXlcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL3NyYy9kaXN0L2ltYWdlcy9oZXJvXzQuanBnKTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlciBtYi00IG1iLW1kLTAgdGV4dC1tZC1sZWZ0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC13aGl0ZSBmb250LXdlaWdodC1ib2xkXCI+QSBCZXN0IFBsYWNlIFRvIFN0YXkuIFJlc2VydmUgTm93ITwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC02IHRleHQtY2VudGVyIHRleHQtbWQtcmlnaHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gRXh0cmEgbGFyZ2UgbW9kYWwgLS0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13aGl0ZS1wcmltYXJ5IHB5LTMgdGV4dC13aGl0ZSBweC01XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3Jlc2VydmF0aW9uLWZvcm1cIj5SZXNlcnZlIE5vdzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBTdGFmZlNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9TdGFmZlNlY3Rpb24udnVlXCJcclxuaW1wb3J0IFJvb21TZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvUm9vbVNlY3Rpb24udnVlXCJcclxuaW1wb3J0IE1lbnVTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvTWVudVNlY3Rpb24udnVlXCJcclxuaW1wb3J0IFJldmlld1NlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9SZXZpZXdTZWN0aW9uLnZ1ZVwiO1xyXG5pbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi52dWVcIjtcclxuXHJcbkFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24oa2V5KSB7cmV0dXJuIHRoaXMucmVkdWNlKChoYXNoLCBvYmopID0+IHtcclxuaWYob2JqW2tleV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGhhc2g7XHJcbnJldHVybiBPYmplY3QuYXNzaWduKGhhc2gsIHsgW29ialtrZXldXTooIGhhc2hbb2JqW2tleV1dIHx8IFtdICkuY29uY2F0KG9iail9KVxyXG59LCB7fSlcclxufTtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdIb21lVmlldycsXHJcbiAgY29tcG9uZW50czogeyBIZXJvU2VjdGlvbiwgUm9vbVNlY3Rpb24sIFN0YWZmU2VjdGlvbiwgTWVudVNlY3Rpb24sIFJldmlld1NlY3Rpb24sIENvbnRhY3RTZWN0aW9uIH0sXHJcbiAgZGF0YSgpe1xyXG4gIFx0cmV0dXJuIHtcclxuICAgICAgaG90ZWw6IHt9LFxyXG5cdFx0fVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0U3RhZmZzKClcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIGdldFN0YWZmcygpe1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL3YxL2FwaS9ob3RlbC8ke3RoaXMuJHJvdXRlLnBhcmFtcy51c2VyfWApXHJcbiAgICAgICAgdGhpcy5ob3RlbCA9IHJlcy5kYXRhXHJcbiAgICAgIH0gY2F0Y2goZSl7XHJcbiAgICAgIGFsZXJ0KFwieWVhaFwiKVxyXG4gICAgICAgIC8vbG9jYXRpb24uaHJlZiA9IFwiL2FkbWluL1wiXHJcbiAgICAgIH0gXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHBhZ2VzKCl7XHJcbiAgICAgIGlmICh0aGlzLmhvdGVsLnBhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG90ZWwucGFnZS5tYXAoeD0+eC50aXRsZSlcclxuICAgICAgICAgIH1cclxuICAgICAgcmV0dXJuIFtdXHJcbiAgICB9LFxyXG4gICAgcm9vbXMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaG90ZWwucm9vbVxyXG4gICAgfSxcclxuICAgIHN0YWZmcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5ob3RlbC5zdGFmZlxyXG4gICAgfSxcclxuICAgIG1lbnVzKCl7XHJcbiAgICAgIGlmICh0aGlzLmhvdGVsLm1lbnUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaG90ZWwubWVudS5ncm91cEJ5KFwibmF0dXJlXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=template&id=2851eb1f":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=template&id=2851eb1f ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\src\\views\\basic\\HomeView.vue: Unexpected token, expected \"]\" (70:64)\n\n\u001b[0m \u001b[90m 68 |\u001b[39m                   \u001b[36mclass\u001b[39m\u001b[33m:\u001b[39m \u001b[32m\"nav-link\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 69 |\u001b[39m                   href\u001b[33m:\u001b[39m \u001b[32m`#section-${page}`\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 70 |\u001b[39m                 }\u001b[33m,\u001b[39m _toDisplayString(page[\u001b[35m0\u001b[39m]\u001b[33m.\u001b[39mtoUpperCase()\u001b[33m+\u001b[39mpafe[\u001b[35m1\u001b[39m\u001b[33m:\u001b[39m])\u001b[33m,\u001b[39m \u001b[35m9\u001b[39m \u001b[90m/* TEXT, PROPS */\u001b[39m\u001b[33m,\u001b[39m _hoisted_7)\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                                                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 71 |\u001b[39m               ]))\u001b[0m\n\u001b[0m \u001b[90m 72 |\u001b[39m             })\u001b[33m,\u001b[39m \u001b[35m128\u001b[39m \u001b[90m/* KEYED_FRAGMENT */\u001b[39m))\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 73 |\u001b[39m             _hoisted_8\u001b[0m\n    at instantiate (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:359:12)\n    at Object.raise (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:3339:19)\n    at Object.unexpected (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:3377:16)\n    at Object.expect (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:4006:28)\n    at Object.parseMember (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:12716:12)\n    at Object.parseSubscript (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:12701:21)\n    at Object.parseSubscripts (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:12665:19)\n    at Object.parseExprSubscripts (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:12654:17)\n    at Object.parseUpdate (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\frontend\\node_modules\\@babel\\parser\\lib\\index.js:12627:21)");

/***/ }),

/***/ "./src/views/basic/HomeView.vue?vue&type=template&id=2851eb1f":
/*!********************************************************************!*\
  !*** ./src/views/basic/HomeView.vue?vue&type=template&id=2851eb1f ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_HomeView_vue_vue_type_template_id_2851eb1f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./HomeView.vue?vue&type=template&id=2851eb1f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/basic/HomeView.vue?vue&type=template&id=2851eb1f");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f5b55f50c731d6a3"; }
/******/ }();
/******/ 
/******/ }
);