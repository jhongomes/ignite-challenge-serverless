/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/createTodo.ts":
/*!*************************************!*\
  !*** ./src/functions/createTodo.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dynamodbClient */ \"./src/utils/dynamodbClient.ts\");\n\n\nconst handle = async (event) => {\n    const { user_id } = event.pathParameters;\n    const { id, title, deadline } = JSON.parse(event.body);\n    const response = await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_1__.document.query({\n        TableName: \"todo\",\n        KeyConditionExpression: \"id = :id\",\n        ExpressionAttributeValues: {\n            \":id\": id\n        }\n    }).promise();\n    const todoAlreadyExists = response.Items[0];\n    if (!todoAlreadyExists) {\n        await _utils_dynamodbClient__WEBPACK_IMPORTED_MODULE_1__.document.put({\n            TableName: \"todo\",\n            Item: {\n                id,\n                user_id,\n                title,\n                done: false,\n                deadline: dayjs__WEBPACK_IMPORTED_MODULE_0__(deadline).format(\"DD/MM/YYYY\"),\n            }\n        }).promise();\n        return {\n            statusCode: 201,\n            body: JSON.stringify({\n                message: \"Todo created\",\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        };\n    }\n    return {\n        statusCode: 400,\n        body: JSON.stringify({\n            massage: \"Todo already exists!\"\n        })\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVRvZG8udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXJsZXNzLy4vc3JjL2Z1bmN0aW9ucy9jcmVhdGVUb2RvLnRzPzkyMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgKiBhcyBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IGRvY3VtZW50IH0gZnJvbSBcIi4uL3V0aWxzL2R5bmFtb2RiQ2xpZW50XCI7XG5cbmludGVyZmFjZSBJQ3JlYXRlVG9kbyB7XG4gICAgaWQ6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlYWRsaW5lOiBEYXRlO1xufVxuXG5leHBvcnQgY29uc3QgaGFuZGxlOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyB1c2VyX2lkIH0gPSBldmVudC5wYXRoUGFyYW1ldGVycztcbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgZGVhZGxpbmUgfSA9IEpTT04ucGFyc2UoZXZlbnQuYm9keSkgYXMgSUNyZWF0ZVRvZG87XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRvY3VtZW50LnF1ZXJ5KHtcbiAgICAgICAgVGFibGVOYW1lOiBcInRvZG9cIixcbiAgICAgICAgS2V5Q29uZGl0aW9uRXhwcmVzc2lvbjogXCJpZCA9IDppZFwiLFxuICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XG4gICAgICAgICAgICBcIjppZFwiOiBpZFxuICAgICAgICB9XG4gICAgfSkucHJvbWlzZSgpXG5cbiAgICBjb25zdCB0b2RvQWxyZWFkeUV4aXN0cyA9IHJlc3BvbnNlLkl0ZW1zWzBdO1xuIFxuICAgIGlmICghdG9kb0FscmVhZHlFeGlzdHMpIHtcbiAgICAgICAgYXdhaXQgZG9jdW1lbnQucHV0KHtcbiAgICAgICAgICAgIFRhYmxlTmFtZTogXCJ0b2RvXCIsXG4gICAgICAgICAgICBJdGVtOiB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgdXNlcl9pZCxcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWFkbGluZTogZGF5anMoZGVhZGxpbmUpLmZvcm1hdChcIkREL01NL1lZWVlcIiksXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnByb21pc2UoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAxLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVG9kbyBjcmVhdGVkXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHN0YXR1c0NvZGU6IDQwMCxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbWFzc2FnZTogXCJUb2RvIGFscmVhZHkgZXhpc3RzIVwiXG4gICAgICAgIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/functions/createTodo.ts\n");

/***/ }),

/***/ "./src/utils/dynamodbClient.ts":
/*!*************************************!*\
  !*** ./src/utils/dynamodbClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: \"localhost\",\n    endpoint: \"http://localhost:7000\"\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlcmxlc3MvLi9zcmMvdXRpbHMvZHluYW1vZGJDbGllbnQudHM/NDUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQiB9IGZyb20gXCJhd3Mtc2RrXCI7XG5cbmNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcmVnaW9uOiBcImxvY2FsaG9zdFwiLFxuICAgIGVuZHBvaW50OiBcImh0dHA6Ly9sb2NhbGhvc3Q6NzAwMFwiXG59XG5cbmNvbnN0IGlzT2ZmbGluZSA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuSVNfT0ZGTElORTtcbn07XG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpXG4gICAgPyBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQob3B0aW9ucylcbiAgICA6IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/createTodo.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;