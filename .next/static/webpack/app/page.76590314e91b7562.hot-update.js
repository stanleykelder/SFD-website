"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/lib/utils.ts":
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   absoluteUrl: function() { return /* binding */ absoluteUrl; },\n/* harmony export */   cn: function() { return /* binding */ cn; },\n/* harmony export */   formatDate: function() { return /* binding */ formatDate; },\n/* harmony export */   isValidEmail: function() { return /* binding */ isValidEmail; },\n/* harmony export */   slugify: function() { return /* binding */ slugify; }\n/* harmony export */ });\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwind-merge */ \"(app-pages-browser)/./node_modules/tailwind-merge/dist/bundle-mjs.mjs\");\n\n\n/**\n * Merges Tailwind CSS classes with proper precedence\n */ function cn() {\n    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){\n        inputs[_key] = arguments[_key];\n    }\n    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_1__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_0__.clsx)(inputs));\n}\n/**\n * Formats a date string into a localized format\n */ function formatDate(date) {\n    return new Date(date).toLocaleDateString(\"en-US\", {\n        month: \"long\",\n        day: \"numeric\",\n        year: \"numeric\"\n    });\n}\n/**\n * Converts a relative path to an absolute URL using the app's base URL\n */ function absoluteUrl(path) {\n    return \"\".concat(\"http://localhost:3000\").concat(path);\n}\n/**\n * Validates an email address format\n */ function isValidEmail(email) {\n    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);\n}\n/**\n * Converts a string to a URL-friendly slug\n */ function slugify(str) {\n    return str.toLowerCase().replace(/[^\\w\\s-]/g, \"\").replace(/[\\s_-]+/g, \"-\").replace(/^-+|-+$/g, \"\");\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvdXRpbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE0QztBQUNKO0FBRXhDOztDQUVDLEdBQ00sU0FBU0U7SUFBRztRQUFHQyxPQUFILHVCQUF1Qjs7SUFDeEMsT0FBT0YsdURBQU9BLENBQUNELDBDQUFJQSxDQUFDRztBQUN0QjtBQUVBOztDQUVDLEdBQ00sU0FBU0MsV0FBV0MsSUFBWTtJQUNyQyxPQUFPLElBQUlDLEtBQUtELE1BQU1FLGtCQUFrQixDQUFDLFNBQVM7UUFDaERDLE9BQU87UUFDUEMsS0FBSztRQUNMQyxNQUFNO0lBQ1I7QUFDRjtBQUVBOztDQUVDLEdBQ00sU0FBU0MsWUFBWUMsSUFBWTtJQUN0QyxPQUFPLEdBQXFDQSxPQUFsQ0MsdUJBQStCLEVBQVEsT0FBTEQ7QUFDOUM7QUFFQTs7Q0FFQyxHQUNNLFNBQVNJLGFBQWFDLEtBQWE7SUFDeEMsT0FBTyw2QkFBNkJDLElBQUksQ0FBQ0Q7QUFDM0M7QUFFQTs7Q0FFQyxHQUNNLFNBQVNFLFFBQVFDLEdBQVc7SUFDakMsT0FBT0EsSUFDSkMsV0FBVyxHQUNYQyxPQUFPLENBQUMsYUFBYSxJQUNyQkEsT0FBTyxDQUFDLFlBQVksS0FDcEJBLE9BQU8sQ0FBQyxZQUFZO0FBQ3pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvdXRpbHMudHM/N2MxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIENsYXNzVmFsdWUsIGNsc3ggfSBmcm9tICdjbHN4J1xuaW1wb3J0IHsgdHdNZXJnZSB9IGZyb20gJ3RhaWx3aW5kLW1lcmdlJ1xuXG4vKipcbiAqIE1lcmdlcyBUYWlsd2luZCBDU1MgY2xhc3NlcyB3aXRoIHByb3BlciBwcmVjZWRlbmNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbiguLi5pbnB1dHM6IENsYXNzVmFsdWVbXSkge1xuICByZXR1cm4gdHdNZXJnZShjbHN4KGlucHV0cykpXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIGRhdGUgc3RyaW5nIGludG8gYSBsb2NhbGl6ZWQgZm9ybWF0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgIG1vbnRoOiAnbG9uZycsXG4gICAgZGF5OiAnbnVtZXJpYycsXG4gICAgeWVhcjogJ251bWVyaWMnLFxuICB9KVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgcmVsYXRpdmUgcGF0aCB0byBhbiBhYnNvbHV0ZSBVUkwgdXNpbmcgdGhlIGFwcCdzIGJhc2UgVVJMXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVybChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX1VSTH0ke3BhdGh9YFxufVxuXG4vKipcbiAqIFZhbGlkYXRlcyBhbiBlbWFpbCBhZGRyZXNzIGZvcm1hdFxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpXG59XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJpbmcgdG8gYSBVUkwtZnJpZW5kbHkgc2x1Z1xuICovXG5leHBvcnQgZnVuY3Rpb24gc2x1Z2lmeShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzdHJcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC5yZXBsYWNlKC9bXlxcd1xccy1dL2csICcnKVxuICAgIC5yZXBsYWNlKC9bXFxzXy1dKy9nLCAnLScpXG4gICAgLnJlcGxhY2UoL14tK3wtKyQvZywgJycpXG59ICJdLCJuYW1lcyI6WyJjbHN4IiwidHdNZXJnZSIsImNuIiwiaW5wdXRzIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwiYWJzb2x1dGVVcmwiLCJwYXRoIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQUF9VUkwiLCJpc1ZhbGlkRW1haWwiLCJlbWFpbCIsInRlc3QiLCJzbHVnaWZ5Iiwic3RyIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/utils.ts\n"));

/***/ })

});