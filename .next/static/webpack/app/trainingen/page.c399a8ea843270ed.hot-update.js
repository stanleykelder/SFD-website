"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/trainingen/page",{

/***/ "(app-pages-browser)/./src/components/ui/button.tsx":
/*!**************************************!*\
  !*** ./src/components/ui/button.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: function() { return /* binding */ Button; },\n/* harmony export */   buttonVariants: function() { return /* binding */ buttonVariants; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(app-pages-browser)/./node_modules/@radix-ui/react-slot/dist/index.mjs\");\n/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-variance-authority */ \"(app-pages-browser)/./node_modules/class-variance-authority/dist/index.mjs\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ Button,buttonVariants auto */ \n\n\n\n\n/**\n * Button variants using class-variance-authority\n * Ensures consistent styling and WCAG 2.2 AA compliance\n */ const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.cva)([\n    \"inline-flex items-center justify-center\",\n    \"text-base font-semibold\",\n    \"transition-all duration-300\",\n    \"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2\",\n    \"disabled:pointer-events-none disabled:opacity-50\",\n    \"select-none\"\n].join(\" \"), {\n    variants: {\n        variant: {\n            default: [\n                \"bg-background text-primary\",\n                \"border-2 border-primary/30\",\n                \"hover:border-primary hover:-translate-y-1\",\n                \"transform-gpu\"\n            ].join(\" \"),\n            outline: [\n                \"border-2 border-primary\",\n                \"bg-background hover:bg-primary/10\",\n                \"text-primary\"\n            ].join(\" \"),\n            ghost: \"hover:bg-primary/10 text-primary\",\n            link: \"text-primary underline-offset-4 hover:underline\"\n        },\n        size: {\n            default: \"h-12 min-w-[44px] px-8\",\n            sm: \"h-11 min-w-[44px] px-4\",\n            lg: \"h-14 min-w-[44px] px-8\",\n            icon: \"h-12 w-12\"\n        }\n    },\n    defaultVariants: {\n        variant: \"default\",\n        size: \"default\"\n    }\n});\n/**\n * Button component that follows WCAG 2.2 AA guidelines\n * Supports various variants and sizes\n * Can be rendered as a child component using asChild prop\n */ const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = (param, ref)=>{\n    let { className, variant, size, asChild = false, ...props } = param;\n    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot : \"button\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Comp, {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({\n            variant,\n            size,\n            className\n        })),\n        ref: ref,\n        ...props\n    }, void 0, false, {\n        fileName: \"/Users/stanley/Documents/savethecity/SFD-website/src/components/ui/button.tsx\",\n        lineNumber: 71,\n        columnNumber: 7\n    }, undefined);\n});\n_c1 = Button;\nButton.displayName = \"Button\";\n\nvar _c, _c1;\n$RefreshReg$(_c, \"Button$React.forwardRef\");\n$RefreshReg$(_c1, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2J1dHRvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRThCO0FBQ2E7QUFDc0I7QUFDakM7QUFFaEM7OztDQUdDLEdBQ0QsTUFBTUksaUJBQWlCRiw2REFBR0EsQ0FDeEI7SUFDRTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRCxDQUFDRyxJQUFJLENBQUMsTUFDUDtJQUNFQyxVQUFVO1FBQ1JDLFNBQVM7WUFDUEMsU0FBUztnQkFDUDtnQkFDQTtnQkFDQTtnQkFDQTthQUNELENBQUNILElBQUksQ0FBQztZQUNQSSxTQUFTO2dCQUNQO2dCQUNBO2dCQUNBO2FBQ0QsQ0FBQ0osSUFBSSxDQUFDO1lBQ1BLLE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBQ0FDLE1BQU07WUFDSkosU0FBUztZQUNUSyxJQUFJO1lBQ0pDLElBQUk7WUFDSkMsTUFBTTtRQUNSO0lBQ0Y7SUFDQUMsaUJBQWlCO1FBQ2ZULFNBQVM7UUFDVEssTUFBTTtJQUNSO0FBQ0Y7QUFhRjs7OztDQUlDLEdBQ0QsTUFBTUssdUJBQVNqQiw2Q0FBZ0IsTUFDN0IsUUFBMERtQjtRQUF6RCxFQUFFQyxTQUFTLEVBQUViLE9BQU8sRUFBRUssSUFBSSxFQUFFUyxVQUFVLEtBQUssRUFBRSxHQUFHQyxPQUFPO0lBQ3RELE1BQU1DLE9BQU9GLFVBQVVwQixzREFBSUEsR0FBRztJQUM5QixxQkFDRSw4REFBQ3NCO1FBQ0NILFdBQVdqQiw4Q0FBRUEsQ0FBQ0MsZUFBZTtZQUFFRztZQUFTSztZQUFNUTtRQUFVO1FBQ3hERCxLQUFLQTtRQUNKLEdBQUdHLEtBQUs7Ozs7OztBQUdmOztBQUVGTCxPQUFPTyxXQUFXLEdBQUc7QUFFWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9idXR0b24udHN4PzZhMGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2xvdCB9IGZyb20gJ0ByYWRpeC11aS9yZWFjdC1zbG90J1xuaW1wb3J0IHsgY3ZhLCB0eXBlIFZhcmlhbnRQcm9wcyB9IGZyb20gJ2NsYXNzLXZhcmlhbmNlLWF1dGhvcml0eSdcbmltcG9ydCB7IGNuIH0gZnJvbSAnQC9saWIvdXRpbHMnXG5cbi8qKlxuICogQnV0dG9uIHZhcmlhbnRzIHVzaW5nIGNsYXNzLXZhcmlhbmNlLWF1dGhvcml0eVxuICogRW5zdXJlcyBjb25zaXN0ZW50IHN0eWxpbmcgYW5kIFdDQUcgMi4yIEFBIGNvbXBsaWFuY2VcbiAqL1xuY29uc3QgYnV0dG9uVmFyaWFudHMgPSBjdmEoXG4gIFtcbiAgICAnaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJyxcbiAgICAndGV4dC1iYXNlIGZvbnQtc2VtaWJvbGQnLFxuICAgICd0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAnLFxuICAgICdmb2N1cy12aXNpYmxlOm91dGxpbmUtbm9uZSBmb2N1cy12aXNpYmxlOnJpbmctMiBmb2N1cy12aXNpYmxlOnJpbmctcHJpbWFyeSBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LTInLFxuICAgICdkaXNhYmxlZDpwb2ludGVyLWV2ZW50cy1ub25lIGRpc2FibGVkOm9wYWNpdHktNTAnLFxuICAgICdzZWxlY3Qtbm9uZScsXG4gIF0uam9pbignICcpLFxuICB7XG4gICAgdmFyaWFudHM6IHtcbiAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgZGVmYXVsdDogW1xuICAgICAgICAgICdiZy1iYWNrZ3JvdW5kIHRleHQtcHJpbWFyeScsXG4gICAgICAgICAgJ2JvcmRlci0yIGJvcmRlci1wcmltYXJ5LzMwJyxcbiAgICAgICAgICAnaG92ZXI6Ym9yZGVyLXByaW1hcnkgaG92ZXI6LXRyYW5zbGF0ZS15LTEnLFxuICAgICAgICAgICd0cmFuc2Zvcm0tZ3B1JyxcbiAgICAgICAgXS5qb2luKCcgJyksXG4gICAgICAgIG91dGxpbmU6IFtcbiAgICAgICAgICAnYm9yZGVyLTIgYm9yZGVyLXByaW1hcnknLFxuICAgICAgICAgICdiZy1iYWNrZ3JvdW5kIGhvdmVyOmJnLXByaW1hcnkvMTAnLFxuICAgICAgICAgICd0ZXh0LXByaW1hcnknLFxuICAgICAgICBdLmpvaW4oJyAnKSxcbiAgICAgICAgZ2hvc3Q6ICdob3ZlcjpiZy1wcmltYXJ5LzEwIHRleHQtcHJpbWFyeScsXG4gICAgICAgIGxpbms6ICd0ZXh0LXByaW1hcnkgdW5kZXJsaW5lLW9mZnNldC00IGhvdmVyOnVuZGVybGluZScsXG4gICAgICB9LFxuICAgICAgc2l6ZToge1xuICAgICAgICBkZWZhdWx0OiAnaC0xMiBtaW4tdy1bNDRweF0gcHgtOCcsXG4gICAgICAgIHNtOiAnaC0xMSBtaW4tdy1bNDRweF0gcHgtNCcsXG4gICAgICAgIGxnOiAnaC0xNCBtaW4tdy1bNDRweF0gcHgtOCcsXG4gICAgICAgIGljb246ICdoLTEyIHctMTInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGRlZmF1bHRWYXJpYW50czoge1xuICAgICAgdmFyaWFudDogJ2RlZmF1bHQnLFxuICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgIH0sXG4gIH1cbilcblxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Qcm9wc1xuICBleHRlbmRzIFJlYWN0LkJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PixcbiAgICBWYXJpYW50UHJvcHM8dHlwZW9mIGJ1dHRvblZhcmlhbnRzPiB7XG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIHRoZSBidXR0b24gd2lsbCBiZSByZW5kZXJlZCBhcyBhIGNoaWxkIGNvbXBvbmVudFxuICAgKiBVc2VmdWwgZm9yIGNyZWF0aW5nIGxpbmsgYnV0dG9ucyB3aXRoIE5leHQuanMgTGlua1xuICAgKi9cbiAgYXNDaGlsZD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBCdXR0b24gY29tcG9uZW50IHRoYXQgZm9sbG93cyBXQ0FHIDIuMiBBQSBndWlkZWxpbmVzXG4gKiBTdXBwb3J0cyB2YXJpb3VzIHZhcmlhbnRzIGFuZCBzaXplc1xuICogQ2FuIGJlIHJlbmRlcmVkIGFzIGEgY2hpbGQgY29tcG9uZW50IHVzaW5nIGFzQ2hpbGQgcHJvcFxuICovXG5jb25zdCBCdXR0b24gPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxCdXR0b25FbGVtZW50LCBCdXR0b25Qcm9wcz4oXG4gICh7IGNsYXNzTmFtZSwgdmFyaWFudCwgc2l6ZSwgYXNDaGlsZCA9IGZhbHNlLCAuLi5wcm9wcyB9LCByZWYpID0+IHtcbiAgICBjb25zdCBDb21wID0gYXNDaGlsZCA/IFNsb3QgOiAnYnV0dG9uJ1xuICAgIHJldHVybiAoXG4gICAgICA8Q29tcFxuICAgICAgICBjbGFzc05hbWU9e2NuKGJ1dHRvblZhcmlhbnRzKHsgdmFyaWFudCwgc2l6ZSwgY2xhc3NOYW1lIH0pKX1cbiAgICAgICAgcmVmPXtyZWZ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG4pXG5CdXR0b24uZGlzcGxheU5hbWUgPSAnQnV0dG9uJ1xuXG5leHBvcnQgeyBCdXR0b24sIGJ1dHRvblZhcmlhbnRzIH0gIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2xvdCIsImN2YSIsImNuIiwiYnV0dG9uVmFyaWFudHMiLCJqb2luIiwidmFyaWFudHMiLCJ2YXJpYW50IiwiZGVmYXVsdCIsIm91dGxpbmUiLCJnaG9zdCIsImxpbmsiLCJzaXplIiwic20iLCJsZyIsImljb24iLCJkZWZhdWx0VmFyaWFudHMiLCJCdXR0b24iLCJmb3J3YXJkUmVmIiwicmVmIiwiY2xhc3NOYW1lIiwiYXNDaGlsZCIsInByb3BzIiwiQ29tcCIsImRpc3BsYXlOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/button.tsx\n"));

/***/ })

});