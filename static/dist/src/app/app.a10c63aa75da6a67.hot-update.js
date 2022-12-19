/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateappuix"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_HeroSection_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/HeroSection.vue */ \"./src/components/HeroSection.vue\");\n/* harmony import */ var _components_StaffSection_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/StaffSection.vue */ \"./src/components/StaffSection.vue\");\n/* harmony import */ var _components_RoomSection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/RoomSection.vue */ \"./src/components/RoomSection.vue\");\n/* harmony import */ var _components_MenuSection_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MenuSection.vue */ \"./src/components/MenuSection.vue\");\n/* harmony import */ var _components_ReviewSection_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ReviewSection.vue */ \"./src/components/ReviewSection.vue\");\n/* harmony import */ var _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContactSection.vue */ \"./src/components/ContactSection.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* eslint-disable */\n\n\n\n\n\n\n\nArray.prototype.groupBy = function (key) {\n  return this.reduce((hash, obj) => {\n    if (obj[key] === undefined) return hash;\n    return Object.assign(hash, {\n      [obj[key]]: (hash[obj[key]] || []).concat(obj)\n    });\n  }, {});\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  components: {\n    HeroSection: _components_HeroSection_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    RoomSection: _components_RoomSection_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    StaffSection: _components_StaffSection_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    MenuSection: _components_MenuSection_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ReviewSection: _components_ReviewSection_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ContactSection: _components_ContactSection_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n\n  data() {\n    return {\n      form: {\n        user: this.$route.params.user\n      },\n      hotel: {}\n    };\n  },\n\n  mounted() {\n    this.getStaffs();\n  },\n\n  methods: {\n    pageHeaders(x) {\n      if (this.hotel.page) {\n        return this.hotel.page.filter(y => y.title === x);\n      }\n\n      return \"\";\n    },\n\n    async getStaffs() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().get(`http://127.0.0.1:8000/v1/api/hotel/${this.$route.params.user_id}/`);\n        this.hotel = res.data;\n      } catch (e) {\n        alert(e.response); //location.href = \"/admin/\"\n      }\n    },\n\n    async Book() {\n      try {\n        this.form.no_of_adult = parseInt(this.form.no_of_adult);\n        this.form.no_of_kids = parseInt(this.form.no_of_kids);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"http://127.0.0.1:8000/v1/api/booking/\", this.form);\n        alert(\"success\");\n      } catch (e) {\n        alert(\"failed booking\");\n      }\n    }\n\n  },\n  computed: {\n    pages() {\n      if (this.hotel.page) {\n        return this.hotel.page.map(x => x.title);\n      }\n\n      return [];\n    },\n\n    rooms() {\n      return this.hotel.room;\n    },\n\n    staffs() {\n      return this.hotel.staff;\n    },\n\n    menus() {\n      if (this.hotel.menu) {\n        return this.hotel.menu.groupBy(\"nature\");\n      }\n\n      return [];\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUlBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF6QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFsQkE7QUF2Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHB1aXgvLi9zcmMvQXBwLnZ1ZT85MWEwIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcbi8qIGVzbGludC1kaXNhYmxlICovXHJcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiQC9jb21wb25lbnRzL0hlcm9TZWN0aW9uLnZ1ZVwiXHJcbmltcG9ydCBTdGFmZlNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9TdGFmZlNlY3Rpb24udnVlXCJcclxuaW1wb3J0IFJvb21TZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvUm9vbVNlY3Rpb24udnVlXCJcclxuaW1wb3J0IE1lbnVTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvTWVudVNlY3Rpb24udnVlXCJcclxuaW1wb3J0IFJldmlld1NlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9SZXZpZXdTZWN0aW9uLnZ1ZVwiO1xyXG5pbXBvcnQgQ29udGFjdFNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9Db250YWN0U2VjdGlvbi52dWVcIjtcclxuXHJcbkFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24oa2V5KSB7cmV0dXJuIHRoaXMucmVkdWNlKChoYXNoLCBvYmopID0+IHtcclxuaWYob2JqW2tleV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGhhc2g7XHJcbnJldHVybiBPYmplY3QuYXNzaWduKGhhc2gsIHsgW29ialtrZXldXTooIGhhc2hbb2JqW2tleV1dIHx8IFtdICkuY29uY2F0KG9iail9KVxyXG59LCB7fSlcclxufTtcclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdBcHAnLFxyXG4gIGNvbXBvbmVudHM6IHsgSGVyb1NlY3Rpb24sIFJvb21TZWN0aW9uLCBTdGFmZlNlY3Rpb24sIE1lbnVTZWN0aW9uLCBSZXZpZXdTZWN0aW9uLCBDb250YWN0U2VjdGlvbiB9LFxyXG4gIGRhdGEoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZvcm06IHt1c2VyOiB0aGlzLiRyb3V0ZS5wYXJhbXMudXNlcn0sXHJcbiAgICAgIGhvdGVsOiB7fSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmdldFN0YWZmcygpXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBwYWdlSGVhZGVycyh4KXtcclxuICAgICAgaWYgKHRoaXMuaG90ZWwucGFnZSl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG90ZWwucGFnZS5maWx0ZXIoeT0+IHkudGl0bGUgPT09IHgpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFwiXCJcclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRTdGFmZnMoKXtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC92MS9hcGkvaG90ZWwvJHt0aGlzLiRyb3V0ZS5wYXJhbXMudXNlcl9pZH0vYClcclxuICAgICAgICB0aGlzLmhvdGVsID0gcmVzLmRhdGFcclxuICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgYWxlcnQoZS5yZXNwb25zZSlcclxuICAgICAgICAvL2xvY2F0aW9uLmhyZWYgPSBcIi9hZG1pbi9cIlxyXG4gICAgICB9IFxyXG4gICAgfSxcclxuICAgIGFzeW5jIEJvb2soKXtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB0aGlzLmZvcm0ubm9fb2ZfYWR1bHQgPSBwYXJzZUludCh0aGlzLmZvcm0ubm9fb2ZfYWR1bHQpO1xyXG4gICAgICAgIHRoaXMuZm9ybS5ub19vZl9raWRzID0gcGFyc2VJbnQodGhpcy5mb3JtLm5vX29mX2tpZHMpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvdjEvYXBpL2Jvb2tpbmcvXCIsIHRoaXMuZm9ybSlcclxuICAgICAgICBhbGVydChcInN1Y2Nlc3NcIilcclxuICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICBhbGVydChcImZhaWxlZCBib29raW5nXCIpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwYWdlcygpe1xyXG4gICAgICBpZiAodGhpcy5ob3RlbC5wYWdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdGVsLnBhZ2UubWFwKHg9PngudGl0bGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfSxcclxuICAgIHJvb21zKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmhvdGVsLnJvb21cclxuICAgIH0sXHJcbiAgICBzdGFmZnMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaG90ZWwuc3RhZmZcclxuICAgIH0sXHJcbiAgICBtZW51cygpe1xyXG4gICAgICBpZiAodGhpcy5ob3RlbC5tZW51KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhvdGVsLm1lbnUuZ3JvdXBCeShcIm5hdHVyZVwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvZm9udHMvZm9udGF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9zdHlsZT5cclxuPHN0eWxlIHNyYz1cIi4uL3B1YmxpYy9mb250cy9pb25pY29ucy9jc3MvaW9uaWNvbnMubWluLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvY3NzL2ZhbmN5Ym94Lm1pbi5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9qcXVlcnkudGltZXBpY2tlci5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlci5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9hb3MuY3NzXCI+PC9zdHlsZT5cclxuPHN0eWxlIHNyYz1cIi4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9ib290c3RyYXAubWluLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvY3NzL3N0eWxlLmNzc1wiPjwvc3R5bGU+XHJcbjx0ZW1wbGF0ZT5cclxuXHJcbiAgPG5hdiBjbGFzcz1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIHBiX25hdmJhciBwYl9zY3JvbGxlZC1saWdodFwiIGlkPVwidGVtcGxhdGV1eC1uYXZiYXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgOmhyZWY9XCIvJHskcm91dGUucGFyYW1zLnVzZXJfaWR9XCI+PHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlI8L3NwYW4+b3RhbmE8L2E+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtbWVudS10b2dnbGUganMtc2l0ZS1tZW51LXRvZ2dsZSAgbWwtYXV0b1wiICBkYXRhLWFvcz1cImZhZGVcIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjdGVtcGxhdGV1eC1uYXZiYXItbmF2XCIgYXJpYS1jb250cm9scz1cInRlbXBsYXRldXgtbmF2YmFyLW5hdlwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSBFTkQgbWVudS10b2dnbGUgLS0+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cInRlbXBsYXRldXgtbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCIgdi1mb3I9XCJwYWdlIGluIHBhZ2VzXCIgdi1iaW5kOmtleT1cInBhZ2VcIj48YSBjbGFzcz1cIm5hdi1saW5rIHRleHQtY2FwaXRhbGl6ZVwiIDpocmVmPVwiYCNzZWN0aW9uLSR7cGFnZX1gXCI+e3sgcGFnZSB9fTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbSBjdGEtYnRuIG1sLXhsLTIgbWwtbGctMiBtbC1tZC0wIG1sLXNtLTAgbWwtMFwiPjxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNyZXNlcnZhdGlvbi1mb3JtXCIgPjxzcGFuIGNsYXNzPVwicGJfcm91bmRlZC00IHB4LTQgcm91bmRlZFwiPkJvb2tpbmcgJiBSZXNlcnZhdGlvbjwvc3Bhbj48L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgICA8IS0tIEVORCBuYXYgLS0+XHJcblxyXG4gIDxIZXJvU2VjdGlvbiA6bXNnPVwiaG90ZWwubmFtZVwiIDpoZXJvX2ltYWdlPVwiaG90ZWwuaGVyb19pbWFnZVwiIHYtaWY9XCJwYWdlcy5pbmNsdWRlcygnaG9tZScpXCIgOmhlYWRlcj1cInBhZ2VIZWFkZXJzKCdob21lJylcIiAvPlxyXG4gIDxTdGFmZlNlY3Rpb24gOnN0YWZmcz1cInN0YWZmc1wiIDphYm91dD1cImhvdGVsLmFib3V0XCIgdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdzdGFmZicpXCIgOmhlYWRlcj1cInBhZ2VIZWFkZXJzKCdzdGFmZicpXCIgLz5cclxuICA8Um9vbVNlY3Rpb24gOnJvb21zPVwicm9vbXNcIiB2LWlmPVwicGFnZXMuaW5jbHVkZXMoJ3Jvb20nKVwiIDpoZWFkZXI9XCJwYWdlSGVhZGVycygncm9vbScpXCIgLz5cclxuICA8TWVudVNlY3Rpb24gIDptZW51cz1cIm1lbnVzXCIgdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdtZW51JylcIiA6aGVhZGVyPVwicGFnZUhlYWRlcnMoJ21lbnUnKVwiIC8+XHJcbiAgPFJldmlld1NlY3Rpb24gdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdyZXZpZXcnKVwiIDpoZWFkZXI9XCJwYWdlSGVhZGVycygncmV2aWV3JylcIiAvPlxyXG4gIDxDb250YWN0U2VjdGlvbiA6YWRkcmVzcz1cImhvdGVsLmFkZHJlc3NcIiA6ZW1haWw9XCJob3RlbC5lbWFpbFwiIDpwaG9uZXM9XCJob3RlbC5jb250YWN0XCIgdi1pZj1cInBhZ2VzLmluY2x1ZGVzKCdjb250YWN0JylcIiA6aGVhZGVyPVwicGFnZUhlYWRlcnMoJ2NvbnRhY3QnKVwiIC8+XHJcbiAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIGJnLWltYWdlIG92ZXJsYXlcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3RhdGljL3NyYy9kaXN0L2ltYWdlcy9oZXJvXzQuanBnKTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCIgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBjb2wtbWQtNiB0ZXh0LWNlbnRlciBtYi00IG1iLW1kLTAgdGV4dC1tZC1sZWZ0XCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGV4dC13aGl0ZSBmb250LXdlaWdodC1ib2xkXCI+QSBCZXN0IFBsYWNlIFRvIFN0YXkuIFJlc2VydmUgTm93ITwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyIGNvbC1tZC02IHRleHQtY2VudGVyIHRleHQtbWQtcmlnaHRcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiPlxyXG4gICAgICAgICAgICAgIDwhLS0gRXh0cmEgbGFyZ2UgbW9kYWwgLS0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS13aGl0ZS1wcmltYXJ5IHB5LTMgdGV4dC13aGl0ZSBweC01XCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI3Jlc2VydmF0aW9uLWZvcm1cIj5SZXNlcnZlIE5vdzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPCEtLSBNb2RhbCAtLT5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGUgXCIgaWQ9XCJyZXNlcnZhdGlvbi1mb3JtXCIgdGFiaW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWxhYmVsbGVkYnk9XCJyZXNlcnZhdGlvbkZvcm1UaXRsZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkXCIgcm9sZT1cImRvY3VtZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAge3sgZm9ybSB9fVxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJCb29rKClcIiAgY2xhc3M9XCJiZy13aGl0ZSBwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTRcIj48ZGl2IGNsYXNzPVwiY29sLTEyXCI+PGgyPlJlc2VydmF0aW9uPC9oMj48L2Rpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWJsYWNrIGZvbnQtd2VpZ2h0LWJvbGRcIiBmb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIFwiIHYtbW9kZWw9XCJmb3JtLmZ1bGxfbmFtZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1ibGFjayBmb250LXdlaWdodC1ib2xkXCIgZm9yPVwicGhvbmVcIj5QaG9uZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicGhvbmVcIiBjbGFzcz1cImZvcm0tY29udHJvbCBcIiB2LW1vZGVsPVwiZm9ybS5waG9uZVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cInRleHQtYmxhY2sgZm9udC13ZWlnaHQtYm9sZFwiIGZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIFwiIHYtbW9kZWw9XCJmb3JtLmVtYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwidGV4dC1ibGFjayBmb250LXdlaWdodC1ib2xkXCIgZm9yPVwiY2hlY2tpbl9kYXRlXCI+RGF0ZSBDaGVjayBJbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiY2hlY2tpbl9kYXRlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5jaGVja19pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTYgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWJsYWNrIGZvbnQtd2VpZ2h0LWJvbGRcIiBmb3I9XCJjaGVja291dF9kYXRlXCI+RGF0ZSBDaGVjayBPdXQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImNoZWNrb3V0X2RhdGVcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLmNoZWNrX291dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZHVsdHNcIiBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1ibGFja1wiPkFkdWx0czwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pY29uLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPjxzcGFuIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1kb3duXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiYWR1bHRzXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwiZm9ybS5ub19vZl9hZHVsdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj4xPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40Kzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoaWxkcmVuXCIgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkIHRleHQtYmxhY2tcIj5DaGlsZHJlbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC1pY29uLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPjxzcGFuIGNsYXNzPVwiaW9uLWlvcy1hcnJvdy1kb3duXCI+PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cIlwiIGlkPVwiY2hpbGRyZW5cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJmb3JtLm5vX29mX2tpZHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NCs8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJ0ZXh0LWJsYWNrIGZvbnQtd2VpZ2h0LWJvbGRcIiBmb3I9XCJtZXNzYWdlXCI+Tm90ZXM8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcIiBpZD1cIm1lc3NhZ2VcIiBjbGFzcz1cImZvcm0tY29udHJvbCBcIiBjb2xzPVwiMzBcIiByb3dzPVwiNVwiIHYtbW9kZWw9XCJmb3JtLm5vdGVcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02IGZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlJlc2VydmUgTm93XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdGV4dC13aGl0ZSBweS0zIHB4LTUgZm9udC13ZWlnaHQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function() {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\src\\App.vue: Unterminated regular expression. (166:17)\n\n\u001b[0m \u001b[90m 164 |\u001b[39m         _createElementVNode(\u001b[32m\"a\"\u001b[39m\u001b[33m,\u001b[39m {\u001b[0m\n\u001b[0m \u001b[90m 165 |\u001b[39m           \u001b[36mclass\u001b[39m\u001b[33m:\u001b[39m \u001b[32m\"navbar-brand\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 166 |\u001b[39m           href\u001b[33m:\u001b[39m \u001b[33m/\u001b[39m${$route\u001b[33m.\u001b[39mparams\u001b[33m.\u001b[39muser_id}\u001b[0m\n\u001b[0m \u001b[90m     |\u001b[39m                  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 167 |\u001b[39m         }\u001b[33m,\u001b[39m _hoisted_6\u001b[33m,\u001b[39m \u001b[35m8\u001b[39m \u001b[90m/* PROPS */\u001b[39m\u001b[33m,\u001b[39m _hoisted_3)\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 168 |\u001b[39m         _hoisted_7\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 169 |\u001b[39m         _createCommentVNode(\u001b[32m\" END menu-toggle \"\u001b[39m)\u001b[33m,\u001b[39m\u001b[0m\n    at instantiate (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:359:12)\n    at Object.raise (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:3339:19)\n    at Object.readRegexp (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:2714:20)\n    at Object.parseExprAtom (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12948:16)\n    at Object.parseExprAtom (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:8039:20)\n    at Object.parseExprSubscripts (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12648:23)\n    at Object.parseUpdate (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12627:21)\n    at Object.parseMaybeUnary (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12598:23)\n    at Object.parseMaybeUnaryOrPrivate (C:\\Users\\Mobolaji\\Desktop\\acsolot\\Rotana-hotel-CMS\\appuix\\node_modules\\@babel\\parser\\lib\\index.js:12392:61)");

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./App.vue?vue&type=template&id=7ba5bd90 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2c1588c95a95feff"; }
/******/ }();
/******/ 
/******/ }
);