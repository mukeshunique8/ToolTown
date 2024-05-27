"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[id]/page",{

/***/ "(app-pages-browser)/./app/components/SearchModal.jsx":
/*!****************************************!*\
  !*** ./app/components/SearchModal.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/icons */ \"(app-pages-browser)/./node_modules/@chakra-ui/icons/dist/chunk-PZLLQGKX.mjs\");\n/* harmony import */ var _contexts_ModeContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ModeContext */ \"(app-pages-browser)/./app/contexts/ModeContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction SearchModal() {\n    _s();\n    const { darkmode, isSearch, setIsSearch } = (0,_contexts_ModeContext__WEBPACK_IMPORTED_MODULE_2__.useModeContext)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleClickOutside = (event)=>{\n            const modal = document.getElementById(\"search-modal\");\n            if (modal && !modal.contains(event.target)) {\n                setIsSearch(false);\n            }\n        };\n        // Add event listener when the component mounts\n        document.addEventListener(\"mousedown\", handleClickOutside);\n        // Cleanup the event listener when the component unmounts\n        return ()=>{\n            document.removeEventListener(\"mousedown\", handleClickOutside);\n        };\n    }, [\n        setIsSearch\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat(darkmode ? \"blur-black text-white\" : \"text-black blur-white\", \" absolute top-[50%] -translate-y-[50%] w-full h-full flex flex-col justify-start p-4 items-center shadow-2xl\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"search-modal\",\n            className: \"\".concat(darkmode ? \"bg-black text-white\" : \"text-black bg-white\", \" flex flex-col shadow-2xl p-4 w-[300px] md:w-[600px] min-h-[500px]  rounded-md\"),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center pt-6 gap-4 w-full items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.Search2Icon, {\n                        boxSize: 18\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\ToolTown\\\\app\\\\components\\\\SearchModal.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"\".concat(darkmode ? \"text-white\" : \"text-black\", \" p-2 rounded-md w-[70%]\"),\n                        type: \"text\",\n                        placeholder: \"Search the docs..\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Cyces 888\\\\ToolTown\\\\app\\\\components\\\\SearchModal.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Cyces 888\\\\ToolTown\\\\app\\\\components\\\\SearchModal.jsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Cyces 888\\\\ToolTown\\\\app\\\\components\\\\SearchModal.jsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Cyces 888\\\\ToolTown\\\\app\\\\components\\\\SearchModal.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(SearchModal, \"i1WnrW4vkKcT0Yks75L5AO4odfc=\", false, function() {\n    return [\n        _contexts_ModeContext__WEBPACK_IMPORTED_MODULE_2__.useModeContext\n    ];\n});\n_c = SearchModal;\nvar _c;\n$RefreshReg$(_c, \"SearchModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1NlYXJjaE1vZGFsLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUNpQjtBQUNEO0FBRTFDLFNBQVNLOztJQUN0QixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUUsR0FBR0oscUVBQWNBO0lBRTFESCxnREFBU0EsQ0FBQztRQUNSLE1BQU1RLHFCQUFxQixDQUFDQztZQUMxQixNQUFNQyxRQUFRQyxTQUFTQyxjQUFjLENBQUM7WUFDdEMsSUFBSUYsU0FBUyxDQUFDQSxNQUFNRyxRQUFRLENBQUNKLE1BQU1LLE1BQU0sR0FBRztnQkFDMUNQLFlBQVk7WUFDZDtRQUNGO1FBRUEsK0NBQStDO1FBQy9DSSxTQUFTSSxnQkFBZ0IsQ0FBQyxhQUFhUDtRQUV2Qyx5REFBeUQ7UUFDekQsT0FBTztZQUNMRyxTQUFTSyxtQkFBbUIsQ0FBQyxhQUFhUjtRQUM1QztJQUNGLEdBQUc7UUFBQ0Q7S0FBWTtJQUVoQixxQkFDRSw4REFBQ1U7UUFFQ0MsV0FBVyxHQUVWLE9BRENiLFdBQVcsMEJBQTBCLHlCQUN0QztrQkFFRCw0RUFBQ1k7WUFDREUsSUFBRztZQUNERCxXQUFXLEdBRVYsT0FEQ2IsV0FBVyx3QkFBd0IsdUJBQ3BDO3NCQU1ELDRFQUFDWTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNoQix5REFBV0E7d0JBQUNrQixTQUFTOzs7Ozs7a0NBQ3RCLDhEQUFDQzt3QkFBTUgsV0FBVyxHQUFzQyxPQUFuQ2IsV0FBUyxlQUFhLGNBQWE7d0JBQTBCaUIsTUFBSzt3QkFBT0MsYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwSDtHQTVDd0JuQjs7UUFDc0JELGlFQUFjQTs7O0tBRHBDQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9TZWFyY2hNb2RhbC5qc3g/OWE2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENsb3NlSWNvbiwgU2VhcmNoMkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VNb2RlQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Nb2RlQ29udGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoTW9kYWwoKSB7XHJcbiAgY29uc3QgeyBkYXJrbW9kZSwgaXNTZWFyY2gsIHNldElzU2VhcmNoIH0gPSB1c2VNb2RlQ29udGV4dCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2tPdXRzaWRlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtbW9kYWxcIik7XHJcbiAgICAgIGlmIChtb2RhbCAmJiAhbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgIHNldElzU2VhcmNoKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29tcG9uZW50IG1vdW50c1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG5cclxuICAgIC8vIENsZWFudXAgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xyXG4gICAgfTtcclxuICB9LCBbc2V0SXNTZWFyY2hdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgXHJcbiAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgZGFya21vZGUgPyBcImJsdXItYmxhY2sgdGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWJsYWNrIGJsdXItd2hpdGVcIlxyXG4gICAgICB9IGFic29sdXRlIHRvcC1bNTAlXSAtdHJhbnNsYXRlLXktWzUwJV0gdy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgcC00IGl0ZW1zLWNlbnRlciBzaGFkb3ctMnhsYH1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICBpZD1cInNlYXJjaC1tb2RhbFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtcclxuICAgICAgICAgIGRhcmttb2RlID8gXCJiZy1ibGFjayB0ZXh0LXdoaXRlXCIgOiBcInRleHQtYmxhY2sgYmctd2hpdGVcIlxyXG4gICAgICAgIH0gZmxleCBmbGV4LWNvbCBzaGFkb3ctMnhsIHAtNCB3LVszMDBweF0gbWQ6dy1bNjAwcHhdIG1pbi1oLVs1MDBweF0gIHJvdW5kZWQtbWRgfVxyXG4gICAgICA+XHJcbiAgICAgICAgey8qIDxkaXYgb25DbGljaz17KCkgPT4gc2V0SXNTZWFyY2goZmFsc2UpfSBjbGFzc05hbWU9XCJmbGV4IHNlbGYtZW5kIGN1cnNvci1wb2ludGVyXCI+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIGJveFNpemU9ezE4fSAvPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTYgZ2FwLTQgdy1mdWxsIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPFNlYXJjaDJJY29uIGJveFNpemU9ezE4fSAvPlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17YCR7ZGFya21vZGU/XCJ0ZXh0LXdoaXRlXCI6XCJ0ZXh0LWJsYWNrXCJ9IHAtMiByb3VuZGVkLW1kIHctWzcwJV1gfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHRoZSBkb2NzLi5cIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiQ2xvc2VJY29uIiwiU2VhcmNoMkljb24iLCJ1c2VNb2RlQ29udGV4dCIsIlNlYXJjaE1vZGFsIiwiZGFya21vZGUiLCJpc1NlYXJjaCIsInNldElzU2VhcmNoIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJtb2RhbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWlucyIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJib3hTaXplIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/SearchModal.jsx\n"));

/***/ })

});