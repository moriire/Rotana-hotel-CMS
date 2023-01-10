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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue3_loading_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-loading-overlay */ \"./node_modules/vue3-loading-overlay/dist/index.js\");\n/* harmony import */ var vue3_loading_overlay_dist_vue3_loading_overlay_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-loading-overlay/dist/vue3-loading-overlay.css */ \"./node_modules/vue3-loading-overlay/dist/vue3-loading-overlay.css\");\n/* harmony import */ var vue3_loading_overlay_dist_vue3_loading_overlay_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue3_loading_overlay_dist_vue3_loading_overlay_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-chartjs */ \"./node_modules/vue-chartjs/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n//import BarChart from \"@/components/BarChart.vue\";\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale);\n\nconst config = {\n  headers: {\n    //\"Authorization\" : \"Bearer sk_test_e4e73202952f186dde677ddf47d7df5a780da525\",\n    \"Content-Type\": \"application/json\"\n  }\n};\n\nArray.prototype.groupBy = function (key) {\n  return this.reduce((hash, obj) => {\n    if (obj[key] === undefined) return hash;\n    return Object.assign(hash, {\n      [obj[key]]: (hash[obj[key]] || []).concat(obj)\n    });\n  }, {});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DashboardView',\n  inject: [\"globals\"],\n  components: {\n    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_4__.Bar,\n    Loading: vue3_loading_overlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n\n  //components: {Payment},\n  data() {\n    return {\n      isLoading: false,\n      //visited: this.hits.groupBy(\"visited_on\"),\n      hits: [],\n      email: this.globals.state.data.user.email.split(\"@\")[0],\n      pk: this.globals.state.data.user.pk //email.split(\"@\")[0],\n\n    };\n  },\n\n  methods: {\n    newPage(a) {\n      location.href = `/${this.globals.state.data.user.business_type === 'ecommerce' ? 'shop' : 'hotel'}/${this.email}${a}`;\n    },\n\n    async getSub() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().get(`${location.origin}/v1/api/hits/?user__pk=${this.pk}`); //, config)\n\n        this.hits = res.data;\n      } catch (errors) {\n        alert(errors);\n      }\n    },\n\n    calcTime(time) {\n      return new Date(time).toDateString();\n    }\n\n  },\n\n  mounted() {\n    apiWithLoader = function () {\n      let loader = this.loading.show({\n        canCancel: false,\n        isFullPage: true,\n        backgroundColor: '#a23445'\n      });\n      this.getSub();\n      loader.hide();\n    }, apiWithLoader();\n  },\n\n  computed: {\n    now() {\n      return new Date().toDateString();\n    },\n\n    chartData() {\n      const visited = this.hits.groupBy('visited_on');\n      return {\n        backgroundColor: '#f87979',\n        labels: Object.keys(visited).map(x => this.calcTime(x)),\n        datasets: [{\n          label: Object.keys(visited).map(x => this.calcTime(x)),\n          data: Object.values(visited).map(x => x.length),\n          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(54, 162, 235)', 'rgb(160, 162, 235)', 'rgb(255, 25, 86)']\n        }]\n      };\n    },\n\n    chartId() {\n      return 'bar-chart';\n    },\n\n    datasetIdKey() {\n      return 'label';\n    },\n\n    chartOptions() {\n      return {\n        responsive: true\n      };\n    },\n\n    link() {\n      return `${location.origin}/${this.globals.state.data.user.business_type === 'ecommerce' ? 'shop' : 'hotel'}/${this.email}`;\n    },\n\n    daily() {\n      const visited = this.hits.groupBy('visited_on');\n      const key = Object.keys(visited);\n      return [key.map(x => this.calcTime(x)), Object.values(visited).map(x => x.length)];\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9jbGllbnQvRGFzaGJvYXJkVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTs7QUFLQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTEE7QUFPQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBZEE7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQWdCQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBakNBO0FBMUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvY2xpZW50L0Rhc2hib2FyZFZpZXcudnVlPzMzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uLy4uL2h0bWwvaW5kZXguaHRtbFwiPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy9pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9CYXJDaGFydC52dWVcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSAndnVlMy1sb2FkaW5nLW92ZXJsYXknO1xyXG5pbXBvcnQgJ3Z1ZTMtbG9hZGluZy1vdmVybGF5L2Rpc3QvdnVlMy1sb2FkaW5nLW92ZXJsYXkuY3NzJztcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAndnVlLWNoYXJ0anMnXHJcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEJhckVsZW1lbnQsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlIH0gZnJvbSAnY2hhcnQuanMnXHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEJhckVsZW1lbnQsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlKVxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IGNvbmZpZyA9IHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAvL1wiQXV0aG9yaXphdGlvblwiIDogXCJCZWFyZXIgc2tfdGVzdF9lNGU3MzIwMjk1MmYxODZkZGU2NzdkZGY0N2Q3ZGY1YTc4MGRhNTI1XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxufTtcclxuQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbihrZXkpIHtyZXR1cm4gdGhpcy5yZWR1Y2UoKGhhc2gsIG9iaikgPT4ge1xyXG5pZihvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaGFzaDtcclxucmV0dXJuIE9iamVjdC5hc3NpZ24oaGFzaCwgeyBbb2JqW2tleV1dOiggaGFzaFtvYmpba2V5XV0gfHwgW10gKS5jb25jYXQob2JqKX0pXHJcbn0sIHt9KVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0Rhc2hib2FyZFZpZXcnLCBcclxuICBpbmplY3Q6IFtcImdsb2JhbHNcIl0sXHJcbiAgY29tcG9uZW50czogeyBCYXIsIExvYWRpbmd9LFxyXG4gIC8vY29tcG9uZW50czoge1BheW1lbnR9LFxyXG4gIGRhdGEoKSB7XHJcbiAgIHJldHVybiB7XHJcbiAgIGlzTG9hZGluZzogZmFsc2UsXHJcbiAgIC8vdmlzaXRlZDogdGhpcy5oaXRzLmdyb3VwQnkoXCJ2aXNpdGVkX29uXCIpLFxyXG4gICAgaGl0czogW10sXHJcbiAgICBlbWFpbCA6IHRoaXMuZ2xvYmFscy5zdGF0ZS5kYXRhLnVzZXIuZW1haWwuc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgcGsgOiB0aGlzLmdsb2JhbHMuc3RhdGUuZGF0YS51c2VyLnBrLC8vZW1haWwuc3BsaXQoXCJAXCIpWzBdLFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbmV3UGFnZShhKXtcclxuICAgICAgICBsb2NhdGlvbi5ocmVmPWAvJHt0aGlzLmdsb2JhbHMuc3RhdGUuZGF0YS51c2VyLmJ1c2luZXNzX3R5cGU9PT0nZWNvbW1lcmNlJz8gJ3Nob3AnOiAnaG90ZWwnfS8ke3RoaXMuZW1haWx9JHthfWBcclxuICAgIH0sXHJcbiAgICBhc3luYyBnZXRTdWIoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2xvY2F0aW9uLm9yaWdpbn0vdjEvYXBpL2hpdHMvP3VzZXJfX3BrPSR7dGhpcy5wa31gKS8vLCBjb25maWcpXHJcblx0ICAgIHRoaXMuaGl0cyA9IHJlcy5kYXRhXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcnMpIHtcclxuICAgICAgICAgICAgYWxlcnQoZXJyb3JzKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjYWxjVGltZSh0aW1lKXtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGltZSkudG9EYXRlU3RyaW5nKClcclxuICAgIH0sXHJcbiAgfSwgXHJcbiAgbW91bnRlZCgpe1xyXG4gICAgYXBpV2l0aExvYWRlcj1mdW5jdGlvbigpe1xyXG4gICAgICAgIGxldCBsb2FkZXIgPSB0aGlzLmxvYWRpbmcuc2hvdyh7XHJcbiAgICAgICAgY2FuQ2FuY2VsOiBmYWxzZSxcclxuICAgICAgICBpc0Z1bGxQYWdlOiB0cnVlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNhMjM0NDUnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZ2V0U3ViKCk7XHJcbiAgICAgICAgbG9hZGVyLmhpZGUoKVxyXG4gICAgfSxcclxuICAgIGFwaVdpdGhMb2FkZXIoKVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6e1xyXG4gIG5vdygpe1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCkudG9EYXRlU3RyaW5nKClcclxuICB9LFxyXG4gICAgY2hhcnREYXRhKCkge1xyXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMuaGl0cy5ncm91cEJ5KCd2aXNpdGVkX29uJylcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjg3OTc5JyxcclxuICAgICAgICAgICAgbGFiZWxzOiBPYmplY3Qua2V5cyh2aXNpdGVkKS5tYXAoeCA9PiB0aGlzLmNhbGNUaW1lKHgpKSxcclxuICAgICAgICAgICAgZGF0YXNldHM6IFsgeyBcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBPYmplY3Qua2V5cyh2aXNpdGVkKS5tYXAoeCA9PiB0aGlzLmNhbGNUaW1lKHgpKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IE9iamVjdC52YWx1ZXModmlzaXRlZCkubWFwKHg9PngubGVuZ3RoKSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDI1NSwgOTksIDEzMiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDU0LCAxNjIsIDIzNSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDI1NSwgMjA1LCA4NiknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDU0LCAxNjIsIDIzNSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiKDE2MCwgMTYyLCAyMzUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigyNTUsIDI1LCA4NiknXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9IF0sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYXJ0SWQoKXsgcmV0dXJuICdiYXItY2hhcnQnfSwgICAgICAgICAgICAgIFxyXG4gICAgZGF0YXNldElkS2V5KCl7IHJldHVybiAnbGFiZWwnfSwgICAgICAgXHJcbiAgICBjaGFydE9wdGlvbnMoKXsgcmV0dXJuIHtyZXNwb25zaXZlOiB0cnVlfSB9LFxyXG4gICAgbGluaygpe1xyXG4gICAgICAgIHJldHVybiBgJHtsb2NhdGlvbi5vcmlnaW59LyR7dGhpcy5nbG9iYWxzLnN0YXRlLmRhdGEudXNlci5idXNpbmVzc190eXBlPT09J2Vjb21tZXJjZSc/ICdzaG9wJzogJ2hvdGVsJ30vJHt0aGlzLmVtYWlsfWBcclxuICAgIH0sXHJcbiAgICBkYWlseSgpe1xyXG4gICAgICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLmhpdHMuZ3JvdXBCeSgndmlzaXRlZF9vbicpXHJcbiAgICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXModmlzaXRlZClcclxuICAgICAgICByZXR1cm4gWyBrZXkubWFwKHggPT4gdGhpcy5jYWxjVGltZSh4KSksIE9iamVjdC52YWx1ZXModmlzaXRlZCkubWFwKHg9PngubGVuZ3RoKV1cclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/DashboardView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "0b2c9294dfb27522"; }
/******/ }();
/******/ 
/******/ }
);