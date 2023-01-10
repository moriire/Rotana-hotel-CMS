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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-chartjs */ \"./node_modules/vue-chartjs/dist/index.js\");\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n//import BarChart from \"@/components/BarChart.vue\";\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_0__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_0__.Title, chart_js__WEBPACK_IMPORTED_MODULE_0__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_0__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_0__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_0__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_0__.LinearScale);\n\nconst config = {\n  headers: {\n    //\"Authorization\" : \"Bearer sk_test_e4e73202952f186dde677ddf47d7df5a780da525\",\n    \"Content-Type\": \"application/json\"\n  }\n};\n\nArray.prototype.groupBy = function (key) {\n  return this.reduce((hash, obj) => {\n    if (obj[key] === undefined) return hash;\n    return Object.assign(hash, {\n      [obj[key]]: (hash[obj[key]] || []).concat(obj)\n    });\n  }, {});\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'DashboardView',\n  inject: [\"globals\"],\n  components: {\n    Bar: vue_chartjs__WEBPACK_IMPORTED_MODULE_2__.Bar\n  },\n\n  //components: {Payment},\n  data() {\n    return {\n      //visited: this.hits.groupBy(\"visited_on\"),\n      hits: [],\n      email: this.globals.state.data.user.email.split(\"@\")[0],\n      pk: this.globals.state.data.user.pk //email.split(\"@\")[0],\n\n    };\n  },\n\n  methods: {\n    newPage(a) {\n      location.href = `/${this.globals.state.data.user.business_type === 'ecommerce' ? 'shop' : 'hotel'}/${this.email}${a}`;\n    },\n\n    async getSub() {\n      try {\n        const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${location.origin}/v1/api/hits/?user__pk=${this.pk}`); //, config)\n\n        this.hits = res.data;\n      } catch (errors) {\n        alert(errors);\n      }\n    },\n\n    calcTime(time) {\n      return new Date(time).toDateString();\n    }\n\n  },\n\n  mounted() {\n    this.$loading.show({\n      container: null,\n      canCancel: false\n    }), this.getSub(), this.loading.hide();\n  },\n\n  computed: {\n    now() {\n      return new Date().toDateString();\n    },\n\n    chartData() {\n      const visited = this.hits.groupBy('visited_on');\n      return {\n        label: 'Visit Counter',\n        backgroundColor: '#f87979',\n        labels: Object.keys(visited).map(x => this.calcTime(x)),\n        datasets: [{\n          data: Object.values(visited).map(x => x.length),\n          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(54, 162, 235)', 'rgb(160, 162, 235)', 'rgb(255, 25, 86)']\n        }]\n      };\n    },\n\n    chartId() {\n      return 'bar-chart';\n    },\n\n    datasetIdKey() {\n      return 'label';\n    },\n\n    chartOptions() {\n      return {\n        responsive: true\n      };\n    },\n\n    link() {\n      return `${location.origin}/${this.globals.state.data.user.business_type === 'ecommerce' ? 'shop' : 'hotel'}/${this.email}`;\n    },\n\n    daily() {\n      const visited = this.hits.groupBy('visited_on');\n      const key = Object.keys(visited);\n      return [key.map(x => this.calcTime(x)), Object.values(visited).map(x => x.length)];\n    }\n\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy92aWV3cy9jbGllbnQvRGFzaGJvYXJkVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBOztBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUpBO0FBTUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQWRBOztBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQWdCQTs7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBakNBO0FBckNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvdmlld3MvY2xpZW50L0Rhc2hib2FyZFZpZXcudnVlPzMzNGYiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlIHNyYz1cIi4uLy4uL2h0bWwvaW5kZXguaHRtbFwiPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy9pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIkAvY29tcG9uZW50cy9CYXJDaGFydC52dWVcIjtcclxuaW1wb3J0IHsgQmFyIH0gZnJvbSAndnVlLWNoYXJ0anMnXHJcbmltcG9ydCB7IENoYXJ0IGFzIENoYXJ0SlMsIFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEJhckVsZW1lbnQsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlIH0gZnJvbSAnY2hhcnQuanMnXHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFRpdGxlLCBUb29sdGlwLCBMZWdlbmQsIEJhckVsZW1lbnQsIENhdGVnb3J5U2NhbGUsIExpbmVhclNjYWxlKVxyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IGNvbmZpZyA9IHsgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAvL1wiQXV0aG9yaXphdGlvblwiIDogXCJCZWFyZXIgc2tfdGVzdF9lNGU3MzIwMjk1MmYxODZkZGU2NzdkZGY0N2Q3ZGY1YTc4MGRhNTI1XCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxufTtcclxuQXJyYXkucHJvdG90eXBlLmdyb3VwQnkgPSBmdW5jdGlvbihrZXkpIHtyZXR1cm4gdGhpcy5yZWR1Y2UoKGhhc2gsIG9iaikgPT4ge1xyXG5pZihvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gaGFzaDtcclxucmV0dXJuIE9iamVjdC5hc3NpZ24oaGFzaCwgeyBbb2JqW2tleV1dOiggaGFzaFtvYmpba2V5XV0gfHwgW10gKS5jb25jYXQob2JqKX0pXHJcbn0sIHt9KVxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ0Rhc2hib2FyZFZpZXcnLCBcclxuICBpbmplY3Q6IFtcImdsb2JhbHNcIl0sXHJcbiAgY29tcG9uZW50czogeyBCYXIsIH0sXHJcbiAgLy9jb21wb25lbnRzOiB7UGF5bWVudH0sXHJcbiAgZGF0YSgpIHtcclxuICAgcmV0dXJuIHtcclxuICAgLy92aXNpdGVkOiB0aGlzLmhpdHMuZ3JvdXBCeShcInZpc2l0ZWRfb25cIiksXHJcbiAgICBoaXRzOiBbXSxcclxuICAgIGVtYWlsIDogdGhpcy5nbG9iYWxzLnN0YXRlLmRhdGEudXNlci5lbWFpbC5zcGxpdChcIkBcIilbMF0sXHJcbiAgICBwayA6IHRoaXMuZ2xvYmFscy5zdGF0ZS5kYXRhLnVzZXIucGssLy9lbWFpbC5zcGxpdChcIkBcIilbMF0sXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBuZXdQYWdlKGEpe1xyXG4gICAgICAgIGxvY2F0aW9uLmhyZWY9YC8ke3RoaXMuZ2xvYmFscy5zdGF0ZS5kYXRhLnVzZXIuYnVzaW5lc3NfdHlwZT09PSdlY29tbWVyY2UnPyAnc2hvcCc6ICdob3RlbCd9LyR7dGhpcy5lbWFpbH0ke2F9YFxyXG4gICAgfSxcclxuICAgIGFzeW5jIGdldFN1YigpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYCR7bG9jYXRpb24ub3JpZ2lufS92MS9hcGkvaGl0cy8/dXNlcl9fcGs9JHt0aGlzLnBrfWApLy8sIGNvbmZpZylcclxuXHQgICAgdGhpcy5oaXRzID0gcmVzLmRhdGFcclxuICAgICAgICB9IGNhdGNoKGVycm9ycykge1xyXG4gICAgICAgICAgICBhbGVydChlcnJvcnMpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNhbGNUaW1lKHRpbWUpe1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lKS50b0RhdGVTdHJpbmcoKVxyXG4gICAgfSxcclxuICB9LCBcclxuICBtb3VudGVkKCl7XHJcbiAgICB0aGlzLiRsb2FkaW5nLnNob3coe1xyXG4gICAgY29udGFpbmVyOiBudWxsLFxyXG4gICAgY2FuQ2FuY2VsOiBmYWxzZSxcclxuICAgIH0pLFxyXG4gICAgdGhpcy5nZXRTdWIoKSxcclxuICAgIHRoaXMubG9hZGluZy5oaWRlKClcclxuICB9LFxyXG4gIGNvbXB1dGVkOntcclxuICBub3coKXtcclxuICAgIHJldHVybiBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpXHJcbiAgfSxcclxuICAgIGNoYXJ0RGF0YSgpIHtcclxuICAgIGNvbnN0IHZpc2l0ZWQgPSB0aGlzLmhpdHMuZ3JvdXBCeSgndmlzaXRlZF9vbicpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGFiZWw6ICdWaXNpdCBDb3VudGVyJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4Nzk3OScsXHJcbiAgICAgICAgICAgIGxhYmVsczogT2JqZWN0LmtleXModmlzaXRlZCkubWFwKHggPT4gdGhpcy5jYWxjVGltZSh4KSksXHJcbiAgICAgICAgICAgIGRhdGFzZXRzOiBbIHsgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBPYmplY3QudmFsdWVzKHZpc2l0ZWQpLm1hcCh4PT54Lmxlbmd0aCksXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigyNTUsIDk5LCAxMzIpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYig1NCwgMTYyLCAyMzUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigyNTUsIDIwNSwgODYpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYig1NCwgMTYyLCAyMzUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYigxNjAsIDE2MiwgMjM1KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2IoMjU1LCAyNSwgODYpJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSBdLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFydElkKCl7IHJldHVybiAnYmFyLWNoYXJ0J30sICAgICAgICAgICAgICBcclxuICAgIGRhdGFzZXRJZEtleSgpeyByZXR1cm4gJ2xhYmVsJ30sICAgICAgIFxyXG4gICAgY2hhcnRPcHRpb25zKCl7IHJldHVybiB7cmVzcG9uc2l2ZTogdHJ1ZX0gfSxcclxuICAgIGxpbmsoKXtcclxuICAgICAgICByZXR1cm4gYCR7bG9jYXRpb24ub3JpZ2lufS8ke3RoaXMuZ2xvYmFscy5zdGF0ZS5kYXRhLnVzZXIuYnVzaW5lc3NfdHlwZT09PSdlY29tbWVyY2UnPyAnc2hvcCc6ICdob3RlbCd9LyR7dGhpcy5lbWFpbH1gXHJcbiAgICB9LFxyXG4gICAgZGFpbHkoKXtcclxuICAgICAgICBjb25zdCB2aXNpdGVkID0gdGhpcy5oaXRzLmdyb3VwQnkoJ3Zpc2l0ZWRfb24nKVxyXG4gICAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKHZpc2l0ZWQpXHJcbiAgICAgICAgcmV0dXJuIFsga2V5Lm1hcCh4ID0+IHRoaXMuY2FsY1RpbWUoeCkpLCBPYmplY3QudmFsdWVzKHZpc2l0ZWQpLm1hcCh4PT54Lmxlbmd0aCldXHJcbiAgICB9LFxyXG4gIH1cclxufVxyXG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/client/DashboardView.vue?vue&type=script&lang=js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "cd3d1178a99c1a5e"; }
/******/ }();
/******/ 
/******/ }
);