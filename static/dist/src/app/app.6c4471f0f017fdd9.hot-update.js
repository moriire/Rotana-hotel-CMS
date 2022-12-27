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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n\n  data() {\n    return {\n      form: {},\n      fresh: new Date().getFullYear(),\n      hotel: {},\n      about: {},\n      rooms: [],\n      menus: [],\n      contacts: [],\n      reviews: [],\n      pages: [],\n      staffs: [],\n      hero_image: \"\"\n    };\n  },\n\n  created() {\n    this.getStaffs();\n  },\n\n  mounted() {},\n\n  methods: {\n    chTitle(title) {\n      document.title = `${title.toUpperCase()} | ${this.hotel.business_name}`;\n    },\n\n    pageHeaders(x) {\n      if (this.pages.length) {\n        return this.pages.filter(y => y.title == x)[0];\n      } else {\n        return \"\";\n      }\n    },\n\n    async Book() {\n      try {\n        this.form.no_of_adult = parseInt(this.form.no_of_adult);\n        this.form.no_of_kids = parseInt(this.form.no_of_kids);\n        this.form.user = this.hotel.id;\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${location.origin}/v1/api/booking/`, this.form);\n        alertify.success(\"successfully posted. You'll get a feedback from them shortly!\");\n      } catch (e) {\n        alertify.error(\"Check the form and try again to book\");\n      }\n    }\n\n  },\n  computed: {\n    bn() {\n      let hot = this.hotel.business_name_alias;\n\n      if (hot) {\n        return [hot.substr(0, 1), hot.substr(1)];\n      } else {\n        return ['Logo', this.hotel.business_name];\n      }\n    },\n\n    pagetitle() {\n      if (this.pages) {\n        return this.pages.map(x => x.title);\n      }\n\n      return [];\n    },\n\n    gmenus() {\n      if (this.menus) {\n        return this.menus.groupBy(\"nature\");\n      }\n\n      return [];\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBckJBO0FBd0JBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQXJCQTtBQWhEQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcHVpeC8uL3NyYy9BcHAudnVlPzkxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdBcHAnLFxyXG4gIGRhdGEoKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZvcm06IHt9LFxyXG4gICAgICBmcmVzaDogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICBob3RlbDoge30sXHJcbiAgICAgIGFib3V0OiB7fSxcclxuICAgICAgcm9vbXM6IFtdLFxyXG4gICAgICBtZW51czogW10sXHJcbiAgICAgIGNvbnRhY3RzOiBbXSxcclxuICAgICAgcmV2aWV3czogW10sXHJcbiAgICAgIHBhZ2VzOiBbXSxcclxuICAgICAgc3RhZmZzOiBbXSxcclxuICAgICAgaGVyb19pbWFnZTogXCJcIixcclxuXHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5nZXRTdGFmZnMoKVxyXG4gIH0sXHJcbiAgbW91bnRlZCgpe1xyXG4gICAgXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBjaFRpdGxlKHRpdGxlKXtcclxuICAgICAgZG9jdW1lbnQudGl0bGUgPSBgJHt0aXRsZS50b1VwcGVyQ2FzZSgpfSB8ICR7dGhpcy5ob3RlbC5idXNpbmVzc19uYW1lfWBcclxuICAgIH0sXHJcbiAgICBwYWdlSGVhZGVycyh4KXtcclxuICAgICAgaWYgKHRoaXMucGFnZXMubGVuZ3RoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYWdlcy5maWx0ZXIoeSA9PiB5LnRpdGxlPT14KVswXVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcIlwiXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhc3luYyBCb29rKCl7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdGhpcy5mb3JtLm5vX29mX2FkdWx0ID0gcGFyc2VJbnQodGhpcy5mb3JtLm5vX29mX2FkdWx0KTtcclxuICAgICAgICB0aGlzLmZvcm0ubm9fb2Zfa2lkcyA9IHBhcnNlSW50KHRoaXMuZm9ybS5ub19vZl9raWRzKTtcclxuICAgICAgICB0aGlzLmZvcm0udXNlciA9IHRoaXMuaG90ZWwuaWQ7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtsb2NhdGlvbi5vcmlnaW59L3YxL2FwaS9ib29raW5nL2AsIHRoaXMuZm9ybSlcclxuICAgICAgICBhbGVydGlmeS5zdWNjZXNzKFwic3VjY2Vzc2Z1bGx5IHBvc3RlZC4gWW91J2xsIGdldCBhIGZlZWRiYWNrIGZyb20gdGhlbSBzaG9ydGx5IVwiKVxyXG4gICAgICB9IGNhdGNoKGUpe1xyXG4gICAgICAgIGFsZXJ0aWZ5LmVycm9yKFwiQ2hlY2sgdGhlIGZvcm0gYW5kIHRyeSBhZ2FpbiB0byBib29rXCIpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBibigpe1xyXG4gICAgICBsZXQgaG90ID0gdGhpcy5ob3RlbC5idXNpbmVzc19uYW1lX2FsaWFzO1xyXG4gICAgICBpZiAoaG90KXtcclxuICAgICAgICAgIHJldHVybiBbaG90LnN1YnN0cigwLDEpLCBob3Quc3Vic3RyKDEpXVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbJ0xvZ28nLCB0aGlzLmhvdGVsLmJ1c2luZXNzX25hbWVdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwYWdldGl0bGUoKXtcclxuICAgICAgaWYgKHRoaXMucGFnZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZXMubWFwKHg9PngudGl0bGUpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfSxcclxuICAgIGdtZW51cygpe1xyXG4gICAgICBpZiAodGhpcy5tZW51cykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZW51cy5ncm91cEJ5KFwibmF0dXJlXCIpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNyYz1cIi4uL3B1YmxpYy9mb250cy9mb250YXdlc29tZS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2ZvbnRzL2lvbmljb25zL2Nzcy9pb25pY29ucy5taW4uY3NzXCI+PC9zdHlsZT5cclxuPHN0eWxlIHNyYz1cIi4uL3B1YmxpYy9jc3MvZmFuY3lib3gubWluLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvY3NzL2pxdWVyeS50aW1lcGlja2VyLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvY3NzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvY3NzL2Fvcy5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9hbmltYXRlLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI+PC9zdHlsZT5cclxuPHN0eWxlIHNyYz1cIi4uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzXCI+PC9zdHlsZT5cclxuPHRlbXBsYXRlPlxyXG4gIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG48L3RlbXBsYXRlPlxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_router_view = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"router-view\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_router_view);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFzRkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHB1aXgvLi9zcmMvQXBwLnZ1ZT85MWEwIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XHJcblxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnQXBwJyxcclxuICBkYXRhKCl7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmb3JtOiB7fSxcclxuICAgICAgZnJlc2g6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgaG90ZWw6IHt9LFxyXG4gICAgICBhYm91dDoge30sXHJcbiAgICAgIHJvb21zOiBbXSxcclxuICAgICAgbWVudXM6IFtdLFxyXG4gICAgICBjb250YWN0czogW10sXHJcbiAgICAgIHJldmlld3M6IFtdLFxyXG4gICAgICBwYWdlczogW10sXHJcbiAgICAgIHN0YWZmczogW10sXHJcbiAgICAgIGhlcm9faW1hZ2U6IFwiXCIsXHJcblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZ2V0U3RhZmZzKClcclxuICB9LFxyXG4gIG1vdW50ZWQoKXtcclxuICAgIFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2hUaXRsZSh0aXRsZSl7XHJcbiAgICAgIGRvY3VtZW50LnRpdGxlID0gYCR7dGl0bGUudG9VcHBlckNhc2UoKX0gfCAke3RoaXMuaG90ZWwuYnVzaW5lc3NfbmFtZX1gXHJcbiAgICB9LFxyXG4gICAgcGFnZUhlYWRlcnMoeCl7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VzLmxlbmd0aCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZXMuZmlsdGVyKHkgPT4geS50aXRsZT09eClbMF1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgQm9vaygpe1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHRoaXMuZm9ybS5ub19vZl9hZHVsdCA9IHBhcnNlSW50KHRoaXMuZm9ybS5ub19vZl9hZHVsdCk7XHJcbiAgICAgICAgdGhpcy5mb3JtLm5vX29mX2tpZHMgPSBwYXJzZUludCh0aGlzLmZvcm0ubm9fb2Zfa2lkcyk7XHJcbiAgICAgICAgdGhpcy5mb3JtLnVzZXIgPSB0aGlzLmhvdGVsLmlkO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7bG9jYXRpb24ub3JpZ2lufS92MS9hcGkvYm9va2luZy9gLCB0aGlzLmZvcm0pXHJcbiAgICAgICAgYWxlcnRpZnkuc3VjY2VzcyhcInN1Y2Nlc3NmdWxseSBwb3N0ZWQuIFlvdSdsbCBnZXQgYSBmZWVkYmFjayBmcm9tIHRoZW0gc2hvcnRseSFcIilcclxuICAgICAgfSBjYXRjaChlKXtcclxuICAgICAgICBhbGVydGlmeS5lcnJvcihcIkNoZWNrIHRoZSBmb3JtIGFuZCB0cnkgYWdhaW4gdG8gYm9va1wiKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgYm4oKXtcclxuICAgICAgbGV0IGhvdCA9IHRoaXMuaG90ZWwuYnVzaW5lc3NfbmFtZV9hbGlhcztcclxuICAgICAgaWYgKGhvdCl7XHJcbiAgICAgICAgICByZXR1cm4gW2hvdC5zdWJzdHIoMCwxKSwgaG90LnN1YnN0cigxKV1cclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gWydMb2dvJywgdGhpcy5ob3RlbC5idXNpbmVzc19uYW1lXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFnZXRpdGxlKCl7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VzLm1hcCh4PT54LnRpdGxlKVxyXG4gICAgICAgICAgfVxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH0sXHJcbiAgICBnbWVudXMoKXtcclxuICAgICAgaWYgKHRoaXMubWVudXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVudXMuZ3JvdXBCeShcIm5hdHVyZVwiKVxyXG4gICAgICAgICAgfVxyXG4gICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvZm9udHMvZm9udGF3ZXNvbWUvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9zdHlsZT5cclxuPHN0eWxlIHNyYz1cIi4uL3B1YmxpYy9mb250cy9pb25pY29ucy9jc3MvaW9uaWNvbnMubWluLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvY3NzL2ZhbmN5Ym94Lm1pbi5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9qcXVlcnkudGltZXBpY2tlci5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9ib290c3RyYXAtZGF0ZXBpY2tlci5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9hb3MuY3NzXCI+PC9zdHlsZT5cclxuPHN0eWxlIHNyYz1cIi4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5jc3NcIj48L3N0eWxlPlxyXG48c3R5bGUgc3JjPVwiLi4vcHVibGljL2Nzcy9ib290c3RyYXAubWluLmNzc1wiPjwvc3R5bGU+XHJcbjxzdHlsZSBzcmM9XCIuLi9wdWJsaWMvY3NzL3N0eWxlLmNzc1wiPjwvc3R5bGU+XHJcbjx0ZW1wbGF0ZT5cclxuICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "1f7735c474c06299"; }
/******/ }();
/******/ 
/******/ }
);