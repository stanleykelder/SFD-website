"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(request) {\n    // Create a response\n    const response = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    // Add the pathname to the response headers\n    response.headers.set(\"x-pathname\", request.nextUrl.pathname);\n    return response;\n}\nconst config = {\n    matcher: \"/:path*\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBR25DLFNBQVNDLFdBQVdDLE9BQW9CO0lBQzdDLG9CQUFvQjtJQUNwQixNQUFNQyxXQUFXSCxrRkFBWUEsQ0FBQ0ksSUFBSTtJQUVsQywyQ0FBMkM7SUFDM0NELFNBQVNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWNKLFFBQVFLLE9BQU8sQ0FBQ0MsUUFBUTtJQUUzRCxPQUFPTDtBQUNUO0FBRU8sTUFBTU0sU0FBUztJQUNwQkMsU0FBUztBQUNYLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcidcbmltcG9ydCB0eXBlIHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcidcblxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgLy8gQ3JlYXRlIGEgcmVzcG9uc2VcbiAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UubmV4dCgpXG5cbiAgLy8gQWRkIHRoZSBwYXRobmFtZSB0byB0aGUgcmVzcG9uc2UgaGVhZGVyc1xuICByZXNwb25zZS5oZWFkZXJzLnNldCgneC1wYXRobmFtZScsIHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSlcblxuICByZXR1cm4gcmVzcG9uc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgbWF0Y2hlcjogJy86cGF0aConLFxufSAiXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJyZXNwb25zZSIsIm5leHQiLCJoZWFkZXJzIiwic2V0IiwibmV4dFVybCIsInBhdGhuYW1lIiwiY29uZmlnIiwibWF0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});