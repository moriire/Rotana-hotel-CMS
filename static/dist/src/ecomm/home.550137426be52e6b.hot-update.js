"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdateappuix"]("home",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ReviewSection.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ReviewSection.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue3_carousel_dist_carousel_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue3-carousel/dist/carousel.css */ \"./node_modules/vue3-carousel/dist/carousel.css\");\n/* harmony import */ var vue3_carousel_dist_carousel_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue3_carousel_dist_carousel_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue3_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-carousel */ \"./node_modules/vue3-carousel/dist/carousel.es.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ReviewSection',\n  components: {\n    Carousel: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Carousel,\n    Slide: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Slide,\n    Pagination: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Pagination,\n    Navigation: vue3_carousel__WEBPACK_IMPORTED_MODULE_1__.Navigation\n  },\n  methods: {\n    arr(x) {\n      return [...Array(x).keys()];\n    }\n\n  },\n\n  data() {\n    return {\n      // carousel settings\n      settings: {\n        itemsToShow: 1,\n        pauseAutoplayOnHover: true,\n        snapAlign: 'center',\n        autoHeight: true,\n        autoplay: 2000\n      },\n      responsive: {\n        0: {\n          itemsToShow: 1,\n          nav: false\n        },\n        600: {\n          itemsToShow: 1,\n          nav: false\n        },\n        1000: {\n          itemsToShow: 1,\n          dots: true,\n          nav: true,\n          loop: false\n        }\n      }\n    };\n  },\n\n  props: {\n    reviews: {\n      type: Array\n    },\n    header: {\n      type: Object\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1Jldmlld1NlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUE0Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFIQTs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVRBO0FBVEE7QUEyQkE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQTFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcHVpeC8uL3NyYy9jb21wb25lbnRzL1Jldmlld1NlY3Rpb24udnVlP2M4MTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIFxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cInNlY3Rpb24gdGVzdGltb25pYWwtc2VjdGlvbiBtaW4tdmgtMTAwXCIgaWQ9XCJzZWN0aW9uLXJldmlld1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlciBtYi01XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzcz1cImhlYWRpbmcgdGV4dC1jYXBpdGFsaXplXCIgZGF0YS1hb3M9XCJmYWRlLXVwXCI+e3sgaGVhZGVyLnRpdGxlX2FsaWFzIHx8IGhlYWRlci50aXRsZSB9fTwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGpzdXRpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMTIgbWItNVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiIGRhdGEtYW9zLWRlbGF5PVwiMjAwXCI+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCAgQGxvb3A9XCJ0cnVlXCIgOm1hcmdpbj1cIjEwXCIgOnNldHRpbmdzPVwic2V0dGluZ3NcIiA6YnJlYWtwb2ludHM9XCJyZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgPFNsaWRlIHYtZm9yPVwicmV2aWV3IGluIHJldmlld3NcIiB2LWJpbmQ6a2V5PVwicmV2aWV3LmlkXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsX19pdGVtIHRlc3RpbW9uaWFsIHRleHQtY2VudGVyIHNsaWRlci1pdGVtXCIgPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yLWltYWdlIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgdi1mb3I9XCIoXywgaW5kZXgpIGluIGFycihyZXZpZXcucmF0ZSlcIiBjbGFzcz1cImZhIGZhLXN0YXIgbXgtYXV0byB0ZXh0LXN1Y2Nlc3NcIiB2LWJpbmQ6a2V5PVwiaW5kZXhcIj48L2k+PGkgdi1mb3I9XCIoXywgaW5kZXgpIGluIGFycig1LXJldmlldy5yYXRlKVwiIGNsYXNzPVwiZmEgZmEtc3RhciBteC1hdXRvIHRleHQtZGFuZ2VyXCIgdi1iaW5kOmtleT1cImluZGV4XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICAgICAgPHA+JmxkcXVvOyB7eyByZXZpZXcuY29tbWVudCB9fS4mcmRxdW87PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICAgICAgICAgICAgPHA+PGVtPiZtZGFzaDsge3sgcmV2aWV3LmZ1bGxfbmFtZSB9fTwvZW0+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TbGlkZT5cclxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjYWRkb25zPlxyXG4gICAgICAgICAgICAgICAgICA8UGFnaW5hdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPCEtLSBFTkQgc2xpZGVyIC0tPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIFxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0ICd2dWUzLWNhcm91c2VsL2Rpc3QvY2Fyb3VzZWwuY3NzJ1xyXG5pbXBvcnQgeyBDYXJvdXNlbCwgU2xpZGUsIFBhZ2luYXRpb24sIE5hdmlnYXRpb24gfSBmcm9tICd2dWUzLWNhcm91c2VsJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6ICdSZXZpZXdTZWN0aW9uJyxcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBDYXJvdXNlbCxcclxuICAgIFNsaWRlLFxyXG4gICAgUGFnaW5hdGlvbixcclxuICAgIE5hdmlnYXRpb24sXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhcnIoeCl7XHJcbiAgICAgICAgcmV0dXJuIFsuLi5BcnJheSh4KS5rZXlzKCkgXVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YSgpe1xyXG4gICAgcmV0dXJuIHsgXHJcbiAgICAgIC8vIGNhcm91c2VsIHNldHRpbmdzXHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICBpdGVtc1RvU2hvdzogMSxcclxuICAgICAgcGF1c2VBdXRvcGxheU9uSG92ZXI6IHRydWUsXHJcbiAgICAgIHNuYXBBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5OjIwMDAsIFxyXG4gICAgfSxcclxuICAgIHJlc3BvbnNpdmU6e1xyXG4gICAgICAwOntcclxuICAgICAgICBpdGVtc1RvU2hvdzoxLFxyXG4gICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICA2MDA6e1xyXG4gICAgICAgIGl0ZW1zVG9TaG93OjEsXHJcbiAgICAgICAgbmF2OmZhbHNlXHJcbiAgICAgIH0sXHJcbiAgICAgIDEwMDA6e1xyXG4gICAgICAgIGl0ZW1zVG9TaG93OjEsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgICBuYXY6dHJ1ZSxcclxuICAgICAgICBsb29wOmZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHJldmlld3M6IHsgdHlwZTogQXJyYXkgfSxcclxuICAgIGhlYWRlcjogeyB0eXBlOiBPYmplY3QgfSxcclxuICB9LFxyXG59XHJcbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ReviewSection.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ReviewSection.vue?vue&type=template&id=66ee9c26":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ReviewSection.vue?vue&type=template&id=66ee9c26 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = {\n  class: \"section testimonial-section min-vh-100\",\n  id: \"section-review\"\n};\nconst _hoisted_2 = {\n  class: \"container\"\n};\nconst _hoisted_3 = {\n  class: \"row justify-content-center text-center mb-5\"\n};\nconst _hoisted_4 = {\n  class: \"col-md-7\"\n};\nconst _hoisted_5 = {\n  class: \"heading text-capitalize\",\n  \"data-aos\": \"fade-up\"\n};\nconst _hoisted_6 = {\n  class: \"row jsutify-content-center align-items-center text-center\"\n};\nconst _hoisted_7 = {\n  class: \"col-lg-12 mb-5\",\n  \"data-aos\": \"fade-up\",\n  \"data-aos-delay\": \"200\"\n};\nconst _hoisted_8 = {\n  class: \"carousel__item testimonial text-center slider-item\"\n};\nconst _hoisted_9 = {\n  class: \"author-image mb-3\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Slide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Slide\");\n\n  const _component_Pagination = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Pagination\");\n\n  const _component_Navigation = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Navigation\");\n\n  const _component_Carousel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Carousel\");\n\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"section\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.header.title_alias || $props.header.title), 1\n  /* TEXT */\n  )])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Carousel, {\n    onLoop: $event => true,\n    margin: 10,\n    settings: $data.settings,\n    breakpoints: $data.responsive\n  }, {\n    addons: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Pagination), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navigation)]),\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.reviews, review => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Slide, {\n        key: review.id\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.arr(review.rate), (_, index) => {\n          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"i\", {\n            class: \"fa fa-star mx-auto text-success\",\n            key: index\n          });\n        }), 128\n        /* KEYED_FRAGMENT */\n        )), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.arr(5 - review.rate), (_, index) => {\n          return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"i\", {\n            class: \"fa fa-star mx-auto text-danger\",\n            key: index\n          });\n        }), 128\n        /* KEYED_FRAGMENT */\n        ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"blockquote\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"“ \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(review.comment) + \".”\", 1\n        /* TEXT */\n        )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"em\", null, \"— \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(review.full_name), 1\n        /* TEXT */\n        )])])]),\n        _: 2\n        /* DYNAMIC */\n\n      }, 1024\n      /* DYNAMIC_SLOTS */\n      );\n    }), 128\n    /* KEYED_FRAGMENT */\n    ))]),\n    _: 1\n    /* STABLE */\n\n  }, 8\n  /* PROPS */\n  , [\"settings\", \"breakpoints\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" END slider \")])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9SZXZpZXdTZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmVlOWMyNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7QUFBQTs7O0FBQ0E7OztBQUNBOzs7QUFDQTs7O0FBQ0E7QUFBQTs7O0FBR0E7OztBQUNBO0FBQUE7QUFBQTs7O0FBR0E7OztBQUdBOzs7Ozs7Ozs7OztBQWRBO0FBSUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBcUJBO0FBSkE7QUFoQkE7QUFBQTtBQUFBO0FBZUE7QUFkQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQUE7Ozs7QUFiQTs7QUFBQTtBQWVBOztBQWZBOzs7O0FBREE7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHB1aXgvLi9zcmMvY29tcG9uZW50cy9SZXZpZXdTZWN0aW9uLnZ1ZT9jODEwIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICBcclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWN0aW9uIHRlc3RpbW9uaWFsLXNlY3Rpb24gbWluLXZoLTEwMFwiIGlkPVwic2VjdGlvbi1yZXZpZXdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgdGV4dC1jZW50ZXIgbWItNVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJoZWFkaW5nIHRleHQtY2FwaXRhbGl6ZVwiIGRhdGEtYW9zPVwiZmFkZS11cFwiPnt7IGhlYWRlci50aXRsZV9hbGlhcyB8fCBoZWFkZXIudGl0bGUgfX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqc3V0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEyIG1iLTVcIiBkYXRhLWFvcz1cImZhZGUtdXBcIiBkYXRhLWFvcy1kZWxheT1cIjIwMFwiPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwgIEBsb29wPVwidHJ1ZVwiIDptYXJnaW49XCIxMFwiIDpzZXR0aW5ncz1cInNldHRpbmdzXCIgOmJyZWFrcG9pbnRzPVwicmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgIDxTbGlkZSB2LWZvcj1cInJldmlldyBpbiByZXZpZXdzXCIgdi1iaW5kOmtleT1cInJldmlldy5pZFwiID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbF9faXRlbSB0ZXN0aW1vbmlhbCB0ZXh0LWNlbnRlciBzbGlkZXItaXRlbVwiID5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvci1pbWFnZSBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIHYtZm9yPVwiKF8sIGluZGV4KSBpbiBhcnIocmV2aWV3LnJhdGUpXCIgY2xhc3M9XCJmYSBmYS1zdGFyIG14LWF1dG8gdGV4dC1zdWNjZXNzXCIgdi1iaW5kOmtleT1cImluZGV4XCI+PC9pPjxpIHYtZm9yPVwiKF8sIGluZGV4KSBpbiBhcnIoNS1yZXZpZXcucmF0ZSlcIiBjbGFzcz1cImZhIGZhLXN0YXIgbXgtYXV0byB0ZXh0LWRhbmdlclwiIHYtYmluZDprZXk9XCJpbmRleFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJsb2NrcXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgIDxwPiZsZHF1bzsge3sgcmV2aWV3LmNvbW1lbnQgfX0uJnJkcXVvOzwvcD5cclxuICAgICAgICAgICAgICAgIDwvYmxvY2txdW90ZT5cclxuICAgICAgICAgICAgICAgIDxwPjxlbT4mbWRhc2g7IHt7IHJldmlldy5mdWxsX25hbWUgfX08L2VtPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2FkZG9ucz5cclxuICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb24gLz5cclxuICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb24gLz5cclxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwhLS0gRU5EIHNsaWRlciAtLT5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICBcclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCAndnVlMy1jYXJvdXNlbC9kaXN0L2Nhcm91c2VsLmNzcydcclxuaW1wb3J0IHsgQ2Fyb3VzZWwsIFNsaWRlLCBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSAndnVlMy1jYXJvdXNlbCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAnUmV2aWV3U2VjdGlvbicsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgQ2Fyb3VzZWwsXHJcbiAgICBTbGlkZSxcclxuICAgIFBhZ2luYXRpb24sXHJcbiAgICBOYXZpZ2F0aW9uLFxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXJyKHgpe1xyXG4gICAgICAgIHJldHVybiBbLi4uQXJyYXkoeCkua2V5cygpIF1cclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGEoKXtcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAvLyBjYXJvdXNlbCBzZXR0aW5nc1xyXG4gICAgc2V0dGluZ3M6IHtcclxuICAgICAgaXRlbXNUb1Nob3c6IDEsXHJcbiAgICAgIHBhdXNlQXV0b3BsYXlPbkhvdmVyOiB0cnVlLFxyXG4gICAgICBzbmFwQWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBhdXRvSGVpZ2h0OiB0cnVlLFxyXG4gICAgICBhdXRvcGxheToyMDAwLCBcclxuICAgIH0sXHJcbiAgICByZXNwb25zaXZlOntcclxuICAgICAgMDp7XHJcbiAgICAgICAgaXRlbXNUb1Nob3c6MSxcclxuICAgICAgICBuYXY6ZmFsc2VcclxuICAgICAgfSxcclxuICAgICAgNjAwOntcclxuICAgICAgICBpdGVtc1RvU2hvdzoxLFxyXG4gICAgICAgIG5hdjpmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgICAxMDAwOntcclxuICAgICAgICBpdGVtc1RvU2hvdzoxLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgbmF2OnRydWUsXHJcbiAgICAgICAgbG9vcDpmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICByZXZpZXdzOiB7IHR5cGU6IEFycmF5IH0sXHJcbiAgICBoZWFkZXI6IHsgdHlwZTogT2JqZWN0IH0sXHJcbiAgfSxcclxufVxyXG48L3NjcmlwdD4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/ReviewSection.vue?vue&type=template&id=66ee9c26\n");

/***/ })

});