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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/DashboardView.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/DashboardView.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue3_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-loading-overlay */ \"./node_modules/vue3-loading-overlay/dist/index.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue3-loading-overlay/dist/vue3-loading.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-chartjs */ \"./node_modules/vue-chartjs/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n//import BarChart from \"@/components/BarChart.vue\";\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale);\n\nconst config = {\n  headers: {\n    //\"Authorization\" : \"Bearer sk_test_e4e73202952f186dde677ddf47d7df5a780da525\",\n    \"Content-Type\": \"application/json\"\n  }\n};\n\nArray.prototype.groupBy = function (key) {\n  return this.reduce((hash, obj) => {\n    if (obj[key] === undefined) return hash;\n    return Object.assign(hash, {\n      [obj[key]]: (hash[obj[key]] || []).concat(obj)\n    });\n  }, {});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DashboardView',\n  inject: [\"globals\"],\n  components: {\n    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_4__.Bar,\n    Loading: vue3_loading_overlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n\n  //components: {Payment},\n  data() {\n    return {\n      //visited: this.hits.groupBy(\"visited_on\"),\n      hits: [],\n      email: this.globals.state.data.user.email.split(\"@\")[0],\n      pk: this.globals.state.data.user.pk //email.split(\"@\")[0],\n\n    };\n  },\n\n  methods: {\n    newPage(a) {\n      location.href = `/${this.globals.state.data.user.business_type === 'ecommerce' ? 'shop' : 'hotel'}/${this.email}${a}`;\n    },\n\n    async getSub() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${location.origin}/v1/api/hits/?user__pk=${this.pk}`); //, config)\n\n        this.hits = res.data;\n      } catch (errors) {\n        alert(errors);\n      }\n    },\n\n    calcTime(time) {\n      return new Date(time).toDateString();\n    }\n\n  },\n\n  mounted() {\n    apiWithLoader = function () {\n      let loader = this.loading.show({\n        canCancel: false,\n        isFullPage: true,\n        backgroundColor: '#a23445'\n      });\n      this.getSub();\n      loader.hide();\n    }, apiWithLoader();\n  },\n\n  computed: {\n    now() {\n      return new Date().toDateString();\n    },\n\n    chartData() {\n      const visited = this.hits.groupBy('visited_on');\n      return {\n        label: 'Visit Counter',\n        backgroundColor: '#f87979',\n        labels: Object.keys(visited).map(x => this.calcTime(x)),\n        datasets: [{\n          data: Object.values(visited).map(x => x.length),\n          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(54, 162, 235)', 'rgb(160, 162, 235)', 'rgb(255, 25, 86)']\n        }]\n      };\n    },\n\n    chartId() {\n      return 'bar-chart';\n    },\n\n    datasetIdKey() {\n      return 'label';\n    },\n\n    chartOptions() {\n      return {\n        responsive: true\n      };\n    },\n\n    link() {\n      return `${location.origin}/${this.globals.state.data.user.business_type === 'ecommerce' ? 'shop' : 'hotel'}/${this.email}`;\n    },\n\n    daily() {\n      const visited = this.hits.groupBy('visited_on');\n      const key = Object.keys(visited);\n      return [key.map(x => this.calcTime(x)), Object.values(visited).map(x => x.length)];\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9jbGllbnQvRGFzaGJvYXJkVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBOztBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFNQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBZEE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQWdCQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBakNBO0FBekNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvY2xpZW50L0Rhc2hib2FyZFZpZXcudnVlPzMzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uLy4uL2h0bWwvaW5kZXguaHRtbFwiPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy9pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9CYXJDaGFydC52dWVcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAndnVlMy1sb2FkaW5nLW92ZXJsYXknO1xyXG5pbXBvcnQgJ3Z1ZTMtbG9hZGluZy1vdmVybGF5L2Rpc3QvdnVlMy1sb2FkaW5nLmNzcyc7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gJ3Z1ZS1jaGFydGpzJ1xyXG5pbXBvcnQgeyBDaGFydCBhcyBDaGFydEpTLCBUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBCYXJFbGVtZW50LCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSB9IGZyb20gJ2NoYXJ0LmpzJ1xyXG5cclxuQ2hhcnRKUy5yZWdpc3RlcihUaXRsZSwgVG9vbHRpcCwgTGVnZW5kLCBCYXJFbGVtZW50LCBDYXRlZ29yeVNjYWxlLCBMaW5lYXJTY2FsZSlcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5jb25zdCBjb25maWcgPSB7IGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgLy9cIkF1dGhvcml6YXRpb25cIiA6IFwiQmVhcmVyIHNrX3Rlc3RfZTRlNzMyMDI5NTJmMTg2ZGRlNjc3ZGRmNDdkN2RmNWE3ODBkYTUyNVwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbn07XHJcbkFycmF5LnByb3RvdHlwZS5ncm91cEJ5ID0gZnVuY3Rpb24oa2V5KSB7cmV0dXJuIHRoaXMucmVkdWNlKChoYXNoLCBvYmopID0+IHtcclxuaWYob2JqW2tleV0gPT09IHVuZGVmaW5lZCkgcmV0dXJuIGhhc2g7XHJcbnJldHVybiBPYmplY3QuYXNzaWduKGhhc2gsIHsgW29ialtrZXldXTooIGhhc2hbb2JqW2tleV1dIHx8IFtdICkuY29uY2F0KG9iail9KVxyXG59LCB7fSlcclxufTtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdEYXNoYm9hcmRWaWV3JywgXHJcbiAgaW5qZWN0OiBbXCJnbG9iYWxzXCJdLFxyXG4gIGNvbXBvbmVudHM6IHsgQmFyLCBMb2FkaW5nfSxcclxuICAvL2NvbXBvbmVudHM6IHtQYXltZW50fSxcclxuICBkYXRhKCkge1xyXG4gICByZXR1cm4ge1xyXG4gICAvL3Zpc2l0ZWQ6IHRoaXMuaGl0cy5ncm91cEJ5KFwidmlzaXRlZF9vblwiKSxcclxuICAgIGhpdHM6IFtdLFxyXG4gICAgZW1haWwgOiB0aGlzLmdsb2JhbHMuc3RhdGUuZGF0YS51c2VyLmVtYWlsLnNwbGl0KFwiQFwiKVswXSxcclxuICAgIHBrIDogdGhpcy5nbG9iYWxzLnN0YXRlLmRhdGEudXNlci5waywvL2VtYWlsLnNwbGl0KFwiQFwiKVswXSxcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG5ld1BhZ2UoYSl7XHJcbiAgICAgICAgbG9jYXRpb24uaHJlZj1gLyR7dGhpcy5nbG9iYWxzLnN0YXRlLmRhdGEudXNlci5idXNpbmVzc190eXBlPT09J2Vjb21tZXJjZSc/ICdzaG9wJzogJ2hvdGVsJ30vJHt0aGlzLmVtYWlsfSR7YX1gXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgZ2V0U3ViKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtsb2NhdGlvbi5vcmlnaW59L3YxL2FwaS9oaXRzLz91c2VyX19waz0ke3RoaXMucGt9YCkvLywgY29uZmlnKVxyXG5cdCAgICB0aGlzLmhpdHMgPSByZXMuZGF0YVxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3JzKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGVycm9ycylcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FsY1RpbWUodGltZSl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRpbWUpLnRvRGF0ZVN0cmluZygpXHJcbiAgICB9LFxyXG4gIH0sIFxyXG4gIG1vdW50ZWQoKXtcclxuICAgIGFwaVdpdGhMb2FkZXI9ZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgbG9hZGVyID0gdGhpcy5sb2FkaW5nLnNob3coe1xyXG4gICAgICAgIGNhbkNhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgaXNGdWxsUGFnZTogdHJ1ZSxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjYTIzNDQ1JyxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdldFN1YigpO1xyXG4gICAgICAgIGxvYWRlci5oaWRlKClcclxuICAgIH0sXHJcbiAgICBhcGlXaXRoTG9hZGVyKClcclxuICB9LFxyXG4gIGNvbXB1dGVkOntcclxuICBub3coKXtcclxuICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpXHJcbiAgfSxcclxuICAgIGNoYXJ0RGF0YSgpIHtcclxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLmhpdHMuZ3JvdXBCeSgndmlzaXRlZF9vbicpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdWaXNpdCBDb3VudGVyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4Nzk3OScsXHJcbiAgICAgICAgICAgIGxhYmVsczogT2JqZWN0LmtleXModmlzaXRlZCkubWFwKHggPT4gdGhpcy5jYWxjVGltZSh4KSksXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbIHsgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHZpc2l0ZWQpLm1hcCh4PT54Lmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigyNTUsIDk5LCAxMzIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYig1NCwgMTYyLCAyMzUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigyNTUsIDIwNSwgODYpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYig1NCwgMTYyLCAyMzUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigxNjAsIDE2MiwgMjM1KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMjU1LCAyNSwgODYpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSBdLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFydElkKCl7IHJldHVybiAnYmFyLWNoYXJ0J30sICAgICAgICAgICAgICBcclxuICAgIGRhdGFzZXRJZEtleSgpeyByZXR1cm4gJ2xhYmVsJ30sICAgICAgIFxyXG4gICAgY2hhcnRPcHRpb25zKCl7IHJldHVybiB7cmVzcG9uc2l2ZTogdHJ1ZX0gfSxcclxuICAgIGxpbmsoKXtcclxuICAgICAgICByZXR1cm4gYCR7bG9jYXRpb24ub3JpZ2lufS8ke3RoaXMuZ2xvYmFscy5zdGF0ZS5kYXRhLnVzZXIuYnVzaW5lc3NfdHlwZT09PSdlY29tbWVyY2UnPyAnc2hvcCc6ICdob3RlbCd9LyR7dGhpcy5lbWFpbH1gXHJcbiAgICB9LFxyXG4gICAgZGFpbHkoKXtcclxuICAgICAgICBjb25zdCB2aXNpdGVkID0gdGhpcy5oaXRzLmdyb3VwQnkoJ3Zpc2l0ZWRfb24nKVxyXG4gICAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKHZpc2l0ZWQpXHJcbiAgICAgICAgcmV0dXJuIFsga2V5Lm1hcCh4ID0+IHRoaXMuY2FsY1RpbWUoeCkpLCBPYmplY3QudmFsdWVzKHZpc2l0ZWQpLm1hcCh4PT54Lmxlbmd0aCldXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/DashboardView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9d3c8dbef9421afd"; }
/******/ }();
/******/ 
/******/ }
);