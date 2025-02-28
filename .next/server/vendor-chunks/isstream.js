"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/isstream";
exports.ids = ["vendor-chunks/isstream"];
exports.modules = {

/***/ "(action-browser)/./node_modules/isstream/isstream.js":
/*!*******************************************!*\
  !*** ./node_modules/isstream/isstream.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar stream = __webpack_require__(/*! stream */ \"stream\");\nfunction isStream(obj) {\n    return obj instanceof stream.Stream;\n}\nfunction isReadable(obj) {\n    return isStream(obj) && typeof obj._read == \"function\" && typeof obj._readableState == \"object\";\n}\nfunction isWritable(obj) {\n    return isStream(obj) && typeof obj._write == \"function\" && typeof obj._writableState == \"object\";\n}\nfunction isDuplex(obj) {\n    return isReadable(obj) && isWritable(obj);\n}\nmodule.exports = isStream;\nmodule.exports.isReadable = isReadable;\nmodule.exports.isWritable = isWritable;\nmodule.exports.isDuplex = isDuplex;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9pc3N0cmVhbS9pc3N0cmVhbS5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBSUEsU0FBU0MsbUJBQU9BLENBQUM7QUFHckIsU0FBU0MsU0FBVUMsR0FBRztJQUNwQixPQUFPQSxlQUFlSCxPQUFPSSxNQUFNO0FBQ3JDO0FBR0EsU0FBU0MsV0FBWUYsR0FBRztJQUN0QixPQUFPRCxTQUFTQyxRQUFRLE9BQU9BLElBQUlHLEtBQUssSUFBSSxjQUFjLE9BQU9ILElBQUlJLGNBQWMsSUFBSTtBQUN6RjtBQUdBLFNBQVNDLFdBQVlMLEdBQUc7SUFDdEIsT0FBT0QsU0FBU0MsUUFBUSxPQUFPQSxJQUFJTSxNQUFNLElBQUksY0FBYyxPQUFPTixJQUFJTyxjQUFjLElBQUk7QUFDMUY7QUFHQSxTQUFTQyxTQUFVUixHQUFHO0lBQ3BCLE9BQU9FLFdBQVdGLFFBQVFLLFdBQVdMO0FBQ3ZDO0FBR0FTLE9BQU9DLE9BQU8sR0FBY1g7QUFDNUJVLHlCQUF5QixHQUFHUDtBQUM1Qk8seUJBQXlCLEdBQUdKO0FBQzVCSSx1QkFBdUIsR0FBS0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbm5vdmF0aW9uLWNvYWNoLy4vbm9kZV9tb2R1bGVzL2lzc3RyZWFtL2lzc3RyZWFtLmpzP2FjZDgiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpXG5cblxuZnVuY3Rpb24gaXNTdHJlYW0gKG9iaikge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2Ygc3RyZWFtLlN0cmVhbVxufVxuXG5cbmZ1bmN0aW9uIGlzUmVhZGFibGUgKG9iaikge1xuICByZXR1cm4gaXNTdHJlYW0ob2JqKSAmJiB0eXBlb2Ygb2JqLl9yZWFkID09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5fcmVhZGFibGVTdGF0ZSA9PSAnb2JqZWN0J1xufVxuXG5cbmZ1bmN0aW9uIGlzV3JpdGFibGUgKG9iaikge1xuICByZXR1cm4gaXNTdHJlYW0ob2JqKSAmJiB0eXBlb2Ygb2JqLl93cml0ZSA9PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouX3dyaXRhYmxlU3RhdGUgPT0gJ29iamVjdCdcbn1cblxuXG5mdW5jdGlvbiBpc0R1cGxleCAob2JqKSB7XG4gIHJldHVybiBpc1JlYWRhYmxlKG9iaikgJiYgaXNXcml0YWJsZShvYmopXG59XG5cblxubW9kdWxlLmV4cG9ydHMgICAgICAgICAgICA9IGlzU3RyZWFtXG5tb2R1bGUuZXhwb3J0cy5pc1JlYWRhYmxlID0gaXNSZWFkYWJsZVxubW9kdWxlLmV4cG9ydHMuaXNXcml0YWJsZSA9IGlzV3JpdGFibGVcbm1vZHVsZS5leHBvcnRzLmlzRHVwbGV4ICAgPSBpc0R1cGxleFxuIl0sIm5hbWVzIjpbInN0cmVhbSIsInJlcXVpcmUiLCJpc1N0cmVhbSIsIm9iaiIsIlN0cmVhbSIsImlzUmVhZGFibGUiLCJfcmVhZCIsIl9yZWFkYWJsZVN0YXRlIiwiaXNXcml0YWJsZSIsIl93cml0ZSIsIl93cml0YWJsZVN0YXRlIiwiaXNEdXBsZXgiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/isstream/isstream.js\n");

/***/ })

};
;