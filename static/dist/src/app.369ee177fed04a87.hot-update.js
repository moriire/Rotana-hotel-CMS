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

/***/ "./src/stores/globals.js":
/*!*******************************!*\
  !*** ./src/stores/globals.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ \"./src/router/index.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! alertifyjs */ \"./node_modules/alertifyjs/build/alertify.js\");\n/* harmony import */ var alertifyjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_3__);\n//<script>\n\n/* eslint-disable */\n\n\n //const BASE = \"http://127.0.0.1:8000\"\n\nconst BASE = \"https://rotana.pythonanywhere.com/\";\n\nconst state = (0,vue__WEBPACK_IMPORTED_MODULE_1__.reactive)({\n  data: JSON.parse(localStorage.getItem(\"user\")),\n  loggedIn: localStorage.getItem(\"loggedin\"),\n  detail: {}\n}); //const config = { headers: {Authorization: `Bearer  ${ state.data.user.access_token }` }}\n\nconst logout = async function () {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/v1/rest/api/auth/logout/`); //config)\n\n    const resp = res.data;\n    localStorage.removeItem(\"user\");\n    localStorage.removeItem(\"loggedin\");\n    alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().alert(\"loggedout\");\n    _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"].push(\"/account/login\"); //location.href=\"/\";                             \n  } catch (errors) {\n    return \"errors\";\n  } //localStorage.removeItem(\"user\");\n\n};\n\nconst getProfile = async function () {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${BASE}/v1/rest/api/auth/user/`); //, config)\n    //{ headers: { Authorization: `Bearer ${ state.data.user.access_token }` }})\n\n    state.detail = res.data;\n    alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().alert(\"profile created\");\n  } catch (errors) {\n    alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().alert(\"logging out\"); //logout()\n  }\n};\n\nconst refreshToken = async function (refresh = state.data.refresh_token) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/v1/rest/api/auth/token/refresh/`, {\n      refresh\n    });\n    const resp = res.data;\n    localStorage.setItem(\"user\", JSON.stringify(resp));\n    alert(\"refreshed\");\n  } catch (errors) {\n    localStorage.removeItem(\"loggedin\"), location.href = \"/account/login\";\n  }\n};\n\nconst verifyToken = async function (token = state.data.access_token) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/v1/rest/api/auth/token/verify/`, {\n      token\n    });\n    return res.data;\n  } catch (errors) {\n    localStorage.removeItem(\"loggedin\"), location.href = \"/account/login\"; //refreshToken() \n  }\n};\n\nconst resetPassword = async function (email) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/v1/rest/api/auth/password/reset/`, {\n      email\n    });\n    const resp = res.data;\n    alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().alert(\"Password reset successful\");\n    _router__WEBPACK_IMPORTED_MODULE_2__[\"default\"].push(\"/account/confirm_password\");\n  } catch (errors) {\n    alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().alert(errors);\n    $errors.code = errors.response.status;\n    $errors.message = \"Username or password error\";\n  }\n};\n\nconst login = async function (username, password) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/v1/rest/api/auth/login/`, {\n      username,\n      password\n    });\n    const resp = res.data;\n    localStorage.setItem(\"user\", JSON.stringify(resp));\n    localStorage.setItem(\"loggedin\", true), alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().success(\"loggedin\");\n    location.href = \"/\";\n  } catch (errors) {\n    alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().alert(errors);\n  }\n};\n/*\r\nconst logout = async function(){\r\n\ttry {\r\n\t\tconst res = await axios.post(`${BASE}/v1/rest/api/auth/logout/`, config)\r\n\tconst resp = res.data\r\n\tlocalStorage.removeItem(\"user\");\r\n\tlocalStorage.removeItem(\"loggedin\");\r\n\talertify.alert(\"loggedout\")\r\n\t//router.push(\"/account/login\")\r\n\tlocation.href=\"/\";\r\n\t} catch(errors) {\r\n\t\treturn \"errors\"\r\n\t}\r\n\tlocalStorage.removeItem(\"user\");\r\n\r\n};\r\n*/\n\n\nconst register = async function (kw) {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${BASE}/v1/rest/api/auth/signup/`, kw);\n    alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().alert(res.data.data);\n  } catch (errors) {\n    alertifyjs__WEBPACK_IMPORTED_MODULE_3___default().alert(JSON.stringify(errors.response));\n  }\n};\n\nconst auth = (0,vue__WEBPACK_IMPORTED_MODULE_1__.computed)(() => state.data);\n\nconst authRequired = function () {\n  if (!isAuthenticated) {\n    $router.push(`${BASE}/account/login`);\n  }\n};\n\nconsole.log(JSON.stringify(state.data));\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  state,\n  //: readonly(state),\n  resetPassword,\n  login,\n  register,\n  logout,\n  //config,\n  auth,\n  verifyToken,\n  refreshToken,\n  BASE,\n  getProfile\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmVzL2dsb2JhbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUhBOztBQVNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOztBQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vc3JjL3N0b3Jlcy9nbG9iYWxzLmpzP2I1YzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy88c2NyaXB0PlxyXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHJlYWN0aXZlLCBjb21wdXRlZCwgcmVhZG9ubHkgfSBmcm9tIFwidnVlXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIkAvcm91dGVyXCI7XHJcbi8vY29uc3QgQkFTRSA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDAwXCJcclxuY29uc3QgQkFTRSA9IFwiaHR0cHM6Ly9yb3RhbmEucHl0aG9uYW55d2hlcmUuY29tL1wiXHJcblxyXG5pbXBvcnQgYWxlcnRpZnkgZnJvbSBcImFsZXJ0aWZ5anNcIlxyXG5cclxuY29uc3Qgc3RhdGUgPSByZWFjdGl2ZShcclxuXHR7XHJcblx0XHRkYXRhIDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpLFxyXG5cdFx0bG9nZ2VkSW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9nZ2VkaW5cIiksXHJcblx0XHRkZXRhaWw6IHt9LFxyXG5cdH1cclxuXHQpO1xyXG5cclxuLy9jb25zdCBjb25maWcgPSB7IGhlYWRlcnM6IHtBdXRob3JpemF0aW9uOiBgQmVhcmVyICAkeyBzdGF0ZS5kYXRhLnVzZXIuYWNjZXNzX3Rva2VuIH1gIH19XHJcblxyXG5jb25zdCBsb2dvdXQgPSBhc3luYyBmdW5jdGlvbigpe1xyXG5cdFx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRX0vdjEvcmVzdC9hcGkvYXV0aC9sb2dvdXQvYCwgKS8vY29uZmlnKVxyXG5cdFx0XHRjb25zdCByZXNwID0gcmVzLmRhdGEgXHJcblx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJsb2dnZWRpblwiKTtcclxuXHRcdFx0YWxlcnRpZnkuYWxlcnQoXCJsb2dnZWRvdXRcIik7XHJcblx0XHRcdHJvdXRlci5wdXNoKFwiL2FjY291bnQvbG9naW5cIik7ICAgICAgICAgICAgICAgIC8vbG9jYXRpb24uaHJlZj1cIi9cIjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0fSBjYXRjaChlcnJvcnMpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImVycm9yc1wiICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG5cclxufTtcclxuXHRjb25zdCBnZXRQcm9maWxlID0gYXN5bmMgZnVuY3Rpb24oKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBU0V9L3YxL3Jlc3QvYXBpL2F1dGgvdXNlci9gKS8vLCBjb25maWcpXHJcblx0XHRcdC8veyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHsgc3RhdGUuZGF0YS51c2VyLmFjY2Vzc190b2tlbiB9YCB9fSlcclxuXHRcdFx0c3RhdGUuZGV0YWlsPSByZXMuZGF0YTtcclxuXHRhbGVydGlmeS5hbGVydChcInByb2ZpbGUgY3JlYXRlZFwiKTtcclxuXHRcdH0gY2F0Y2goZXJyb3JzKSB7XHJcblx0XHRcdGFsZXJ0aWZ5LmFsZXJ0KFwibG9nZ2luZyBvdXRcIik7XHJcblx0XHRcdC8vbG9nb3V0KClcclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3QgcmVmcmVzaFRva2VuID0gYXN5bmMgZnVuY3Rpb24ocmVmcmVzaCA9IHN0YXRlLmRhdGEucmVmcmVzaF90b2tlbikge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFfS92MS9yZXN0L2FwaS9hdXRoL3Rva2VuL3JlZnJlc2gvYCwgeyByZWZyZXNoIH0sICk7XHJcblx0XHRcdGNvbnN0IHJlc3AgPSByZXMuZGF0YTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcclxuXHRcdFx0YWxlcnQoXCJyZWZyZXNoZWRcIilcclxuXHRcdH0gY2F0Y2goZXJyb3JzKSB7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9nZ2VkaW5cIiksXHJcblx0XHRcdGxvY2F0aW9uLmhyZWY9XCIvYWNjb3VudC9sb2dpblwiXHJcblx0XHR9XHJcblx0fTtcclxuY29uc3QgdmVyaWZ5VG9rZW4gPSBhc3luYyBmdW5jdGlvbih0b2tlbiA9IHN0YXRlLmRhdGEuYWNjZXNzX3Rva2VuKXtcclxuXHR0cnkge1xyXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRX0vdjEvcmVzdC9hcGkvYXV0aC90b2tlbi92ZXJpZnkvYCwge3Rva2VufSlcclxuXHRyZXR1cm4gcmVzLmRhdGFcclxuXHR9IGNhdGNoKGVycm9ycykge1xyXG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwibG9nZ2VkaW5cIiksXHJcblx0bG9jYXRpb24uaHJlZj1cIi9hY2NvdW50L2xvZ2luXCJcclxuXHRcdC8vcmVmcmVzaFRva2VuKCkgXHJcblx0fVxyXG59O1xyXG5cclxuY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jIGZ1bmN0aW9uKGVtYWlsKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0V9L3YxL3Jlc3QvYXBpL2F1dGgvcGFzc3dvcmQvcmVzZXQvYCwgeyBlbWFpbCB9KTtcclxuXHRcdFx0Y29uc3QgcmVzcCA9IHJlcy5kYXRhXHJcblx0XHRcdGFsZXJ0aWZ5LmFsZXJ0KFwiUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bFwiKVxyXG5cdFx0XHRyb3V0ZXIucHVzaChcIi9hY2NvdW50L2NvbmZpcm1fcGFzc3dvcmRcIilcclxuXHRcdH0gY2F0Y2goZXJyb3JzKSB7XHJcblx0XHRcdFx0YWxlcnRpZnkuYWxlcnQoZXJyb3JzKTtcclxuXHRcdFx0XHQkZXJyb3JzLmNvZGUgPSBlcnJvcnMucmVzcG9uc2Uuc3RhdHVzO1xyXG5cdFx0XHRcdCRlcnJvcnMubWVzc2FnZT0gXCJVc2VybmFtZSBvciBwYXNzd29yZCBlcnJvclwiXHJcblx0XHR9XHJcblx0fTtcclxuXHJcbmNvbnN0IGxvZ2luID0gYXN5bmMgZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKSB7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0V9L3YxL3Jlc3QvYXBpL2F1dGgvbG9naW4vYCwgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSwpO1xyXG5cdFx0XHRjb25zdCByZXNwID0gcmVzLmRhdGFcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dnZWRpblwiLCB0cnVlKSxcclxuXHRcdFx0YWxlcnRpZnkuc3VjY2VzcyhcImxvZ2dlZGluXCIpXHJcblx0XHRcdGxvY2F0aW9uLmhyZWY9XCIvXCJcclxuXHRcdH0gY2F0Y2goZXJyb3JzKSB7XHJcblx0XHRhbGVydGlmeS5hbGVydChlcnJvcnMpXHJcblx0XHRcdFx0fVxyXG5cdH07XHJcbi8qXHJcbmNvbnN0IGxvZ291dCA9IGFzeW5jIGZ1bmN0aW9uKCl7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRX0vdjEvcmVzdC9hcGkvYXV0aC9sb2dvdXQvYCwgY29uZmlnKVxyXG5cdGNvbnN0IHJlc3AgPSByZXMuZGF0YVxyXG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuXHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ2dlZGluXCIpO1xyXG5cdGFsZXJ0aWZ5LmFsZXJ0KFwibG9nZ2Vkb3V0XCIpXHJcblx0Ly9yb3V0ZXIucHVzaChcIi9hY2NvdW50L2xvZ2luXCIpXHJcblx0bG9jYXRpb24uaHJlZj1cIi9cIjtcclxuXHR9IGNhdGNoKGVycm9ycykge1xyXG5cdFx0cmV0dXJuIFwiZXJyb3JzXCJcclxuXHR9XHJcblx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ1c2VyXCIpO1xyXG5cclxufTtcclxuKi9cclxuY29uc3QgcmVnaXN0ZXIgPSBhc3luYyBmdW5jdGlvbihrdyl7XHJcblx0dHJ5IHtcclxuXHRcdGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRX0vdjEvcmVzdC9hcGkvYXV0aC9zaWdudXAvYCwga3cgKVxyXG5cdFx0YWxlcnRpZnkuYWxlcnQocmVzLmRhdGEuZGF0YSk7XHJcblx0fSBjYXRjaChlcnJvcnMpe1xyXG5cdFx0YWxlcnRpZnkuYWxlcnQoSlNPTi5zdHJpbmdpZnkoZXJyb3JzLnJlc3BvbnNlKSk7XHJcblx0fVxyXG59O1x0XHJcblxyXG5jb25zdCBhdXRoID0gY29tcHV0ZWQoKCkgPT4gc3RhdGUuZGF0YSk7XHJcblxyXG5jb25zdCBhdXRoUmVxdWlyZWQgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAoISBpc0F1dGhlbnRpY2F0ZWQpIHtcclxuXHRcdFx0JHJvdXRlci5wdXNoKGAke0JBU0V9L2FjY291bnQvbG9naW5gKVxyXG5cdFx0fVxyXG5cdH07XHJcbmNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0YXRlLmRhdGEpKVxyXG4gZXhwb3J0IGRlZmF1bHQgeyBzdGF0ZSxcclxuXHQgLy86IHJlYWRvbmx5KHN0YXRlKSxcclxuXHQgXHRcdFx0IHJlc2V0UGFzc3dvcmQsXHJcblx0XHRcdFx0IGxvZ2luLCBcclxuXHRcdFx0XHQgcmVnaXN0ZXIsXHJcblx0IFx0XHRcdCBsb2dvdXQsXHJcbiAgIC8vY29uZmlnLFxyXG4gICBhdXRoLFxyXG5cdCB2ZXJpZnlUb2tlbixcclxuXHQgcmVmcmVzaFRva2VuLFxyXG5cdCBcdFx0XHQgQkFTRSxcclxuIGdldFByb2ZpbGVcclxuIH1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/stores/globals.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a32216d7e063e57f"; }
/******/ }();
/******/ 
/******/ }
);