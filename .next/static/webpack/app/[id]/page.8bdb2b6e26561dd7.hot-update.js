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

/***/ "(app-pages-browser)/./app/data/Categories.js":
/*!********************************!*\
  !*** ./app/data/Categories.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categories: function() { return /* binding */ categories; }\n/* harmony export */ });\nconst categories = {\n    \"Web Development\": {\n        id: \"webdev\",\n        name: \"Web Development\",\n        desc: \"Resources and tools for web development\",\n        color: \"bg-red-600\",\n        links: [\n            {\n                web: \"Tailwind\",\n                logo: \"RiTailwindCssFill\",\n                link: \"https://tailwindcss.com/\",\n                desc: \"Rapidly build modern websites without ever leaving your HTML.\"\n            },\n            {\n                web: \"tailwind\",\n                link: \"https://tailwindcss.com/\"\n            },\n            {\n                web: \"tailwind\",\n                link: \"https://tailwindcss.com/\"\n            },\n            {\n                web: \"tailwind\",\n                link: \"https://tailwindcss.com/\"\n            },\n            {\n                web: \"tailwind\",\n                link: \"https://tailwindcss.com/\"\n            }\n        ]\n    },\n    \"AI Tools and Sites\": {\n        id: \"aitools\",\n        name: \"AI Tools and Sites\",\n        desc: \"AI-related tools and websites\",\n        color: \"bg-orange-600\",\n        links: [\n            {\n                web: \"tailwind\",\n                link: \"https://tailwindcss.com/\"\n            },\n            {\n                web: \"tailwind\",\n                link: \"https://tailwindcss.com/\"\n            },\n            {\n                web: \"tailwind\",\n                link: \"https://tailwindcss.com/\"\n            }\n        ]\n    },\n    \"Editing Tools\": {\n        id: \"edittools\",\n        name: \"Editing Tools\",\n        desc: \"Tools for editing and manipulation\",\n        color: \"bg-lime-600\",\n        links: [\n            \"https://example.com/edittools1\",\n            \"https://example.com/edittools2\",\n            \"https://example.com/edittools3\",\n            \"https://example.com/edittools4\",\n            \"https://example.com/edittools5\"\n        ]\n    },\n    \"Software Downloads\": {\n        id: \"softwaredl\",\n        name: \"Software Downloads\",\n        desc: \"Downloadable software applications\",\n        color: \"bg-green-600\",\n        links: [\n            \"https://example.com/softwaredl1\",\n            \"https://example.com/softwaredl2\",\n            \"https://example.com/softwaredl3\",\n            \"https://example.com/softwaredl4\",\n            \"https://example.com/softwaredl5\"\n        ]\n    },\n    \"Hacks and Tricks\": {\n        id: \"hacks\",\n        name: \"Hacks and Tricks\",\n        desc: \"Tips, tricks, and hacks\",\n        color: \"bg-cyan-600\",\n        links: [\n            \"https://example.com/hacks1\",\n            \"https://example.com/hacks2\",\n            \"https://example.com/hacks3\",\n            \"https://example.com/hacks4\",\n            \"https://example.com/hacks5\"\n        ]\n    },\n    \"Learning Resources\": {\n        id: \"learning\",\n        name: \"Learning Resources\",\n        desc: \"Educational resources for learning\",\n        color: \"bg-indigo-600\",\n        links: [\n            \"https://example.com/learning1\",\n            \"https://example.com/learning2\",\n            \"https://example.com/learning3\",\n            \"https://example.com/learning4\",\n            \"https://example.com/learning5\"\n        ]\n    },\n    \"Productivity Tools\": {\n        id: \"productivity\",\n        name: \"Productivity Tools\",\n        desc: \"Tools to enhance productivity\",\n        color: \"bg-pink-600\",\n        links: [\n            \"https://example.com/productivity1\",\n            \"https://example.com/productivity2\",\n            \"https://example.com/productivity3\",\n            \"https://example.com/productivity4\",\n            \"https://example.com/productivity5\"\n        ]\n    },\n    \"Design Resources\": {\n        id: \"design\",\n        name: \"Design Resources\",\n        desc: \"Resources for design and creativity\",\n        color: \"bg-yellow-600\",\n        links: [\n            \"https://example.com/design1\",\n            \"https://example.com/design2\",\n            \"https://example.com/design3\",\n            \"https://example.com/design4\",\n            \"https://example.com/design5\"\n        ]\n    },\n    \"Cloud Services\": {\n        id: \"cloud\",\n        name: \"Cloud Services\",\n        desc: \"Services related to cloud computing\",\n        color: \"bg-teal-600\",\n        links: [\n            \"https://example.com/cloud1\",\n            \"https://example.com/cloud2\",\n            \"https://example.com/cloud3\",\n            \"https://example.com/cloud4\",\n            \"https://example.com/cloud5\"\n        ]\n    },\n    \"Miscellaneous Tools\": {\n        id: \"misc\",\n        name: \"Miscellaneous Tools\",\n        desc: \"Various tools for different purposes\",\n        color: \"bg-purple-600\",\n        links: [\n            \"https://example.com/misc1\",\n            \"https://example.com/misc2\",\n            \"https://example.com/misc3\",\n            \"https://example.com/misc4\",\n            \"https://example.com/misc5\"\n        ]\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXRhL0NhdGVnb3JpZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUNPLE1BQU1BLGFBQWE7SUFDeEIsbUJBQW1CO1FBQ2pCQyxJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87WUFDTDtnQkFHRUMsS0FBSTtnQkFDSkMsTUFBSztnQkFDTkMsTUFBSztnQkFDSkwsTUFBSztZQUNQO1lBQ0E7Z0JBQ0VHLEtBQUk7Z0JBQ0pFLE1BQUs7WUFDUDtZQUNBO2dCQUNFRixLQUFJO2dCQUNKRSxNQUFLO1lBQ1A7WUFDQTtnQkFDRUYsS0FBSTtnQkFDSkUsTUFBSztZQUNQO1lBQ0E7Z0JBQ0VGLEtBQUk7Z0JBQ0pFLE1BQUs7WUFDUDtTQUVEO0lBQ0g7SUFDQSxzQkFBc0I7UUFDcEJQLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztZQUNMO2dCQUNFQyxLQUFJO2dCQUNKRSxNQUFLO1lBQ1A7WUFDQTtnQkFDRUYsS0FBSTtnQkFDSkUsTUFBSztZQUNQO1lBQ0E7Z0JBQ0VGLEtBQUk7Z0JBQ0pFLE1BQUs7WUFDUDtTQUNEO0lBQ0g7SUFDQSxpQkFBaUI7UUFDZlAsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1lBQ0w7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQSxzQkFBc0I7UUFDcEJKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztZQUNMO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0Esb0JBQW9CO1FBQ2xCSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87WUFDTDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBLHNCQUFzQjtRQUNwQkosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1lBQ0w7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQSxzQkFBc0I7UUFDcEJKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztZQUNMO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0lBQ0Esb0JBQW9CO1FBQ2xCSixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLE9BQU87WUFDTDtZQUNBO1lBQ0E7WUFDQTtZQUNBO1NBQ0Q7SUFDSDtJQUNBLGtCQUFrQjtRQUNoQkosSUFBSTtRQUNKQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsT0FBTztRQUNQQyxPQUFPO1lBQ0w7WUFDQTtZQUNBO1lBQ0E7WUFDQTtTQUNEO0lBQ0g7SUFDQSx1QkFBdUI7UUFDckJKLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLE9BQU87UUFDUEMsT0FBTztZQUNMO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRDtJQUNIO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGF0YS9DYXRlZ29yaWVzLmpzP2E4YTYiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjb25zdCBjYXRlZ29yaWVzID0ge1xyXG4gIFwiV2ViIERldmVsb3BtZW50XCI6IHtcclxuICAgIGlkOiBcIndlYmRldlwiLFxyXG4gICAgbmFtZTogXCJXZWIgRGV2ZWxvcG1lbnRcIixcclxuICAgIGRlc2M6IFwiUmVzb3VyY2VzIGFuZCB0b29scyBmb3Igd2ViIGRldmVsb3BtZW50XCIsXHJcbiAgICBjb2xvcjogXCJiZy1yZWQtNjAwXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcblxyXG5cclxuICAgICAgICB3ZWI6XCJUYWlsd2luZFwiLFxyXG4gICAgICAgIGxvZ286XCJSaVRhaWx3aW5kQ3NzRmlsbFwiLFxyXG4gICAgICAgbGluazpcImh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL1wiLFxyXG4gICAgICAgIGRlc2M6XCJSYXBpZGx5IGJ1aWxkIG1vZGVybiB3ZWJzaXRlcyB3aXRob3V0IGV2ZXIgbGVhdmluZyB5b3VyIEhUTUwuXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlYjpcInRhaWx3aW5kXCIsXHJcbiAgICAgICAgbGluazpcImh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWI6XCJ0YWlsd2luZFwiLFxyXG4gICAgICAgIGxpbms6XCJodHRwczovL3RhaWx3aW5kY3NzLmNvbS9cIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgd2ViOlwidGFpbHdpbmRcIixcclxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlYjpcInRhaWx3aW5kXCIsXHJcbiAgICAgICAgbGluazpcImh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgXSxcclxuICB9LFxyXG4gIFwiQUkgVG9vbHMgYW5kIFNpdGVzXCI6IHtcclxuICAgIGlkOiBcImFpdG9vbHNcIixcclxuICAgIG5hbWU6IFwiQUkgVG9vbHMgYW5kIFNpdGVzXCIsXHJcbiAgICBkZXNjOiBcIkFJLXJlbGF0ZWQgdG9vbHMgYW5kIHdlYnNpdGVzXCIsXHJcbiAgICBjb2xvcjogXCJiZy1vcmFuZ2UtNjAwXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgd2ViOlwidGFpbHdpbmRcIixcclxuICAgICAgICBsaW5rOlwiaHR0cHM6Ly90YWlsd2luZGNzcy5jb20vXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlYjpcInRhaWx3aW5kXCIsXHJcbiAgICAgICAgbGluazpcImh0dHBzOi8vdGFpbHdpbmRjc3MuY29tL1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB3ZWI6XCJ0YWlsd2luZFwiLFxyXG4gICAgICAgIGxpbms6XCJodHRwczovL3RhaWx3aW5kY3NzLmNvbS9cIlxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIFwiRWRpdGluZyBUb29sc1wiOiB7XHJcbiAgICBpZDogXCJlZGl0dG9vbHNcIixcclxuICAgIG5hbWU6IFwiRWRpdGluZyBUb29sc1wiLFxyXG4gICAgZGVzYzogXCJUb29scyBmb3IgZWRpdGluZyBhbmQgbWFuaXB1bGF0aW9uXCIsXHJcbiAgICBjb2xvcjogXCJiZy1saW1lLTYwMFwiLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2VkaXR0b29sczFcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2VkaXR0b29sczJcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2VkaXR0b29sczNcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2VkaXR0b29sczRcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2VkaXR0b29sczVcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICBcIlNvZnR3YXJlIERvd25sb2Fkc1wiOiB7XHJcbiAgICBpZDogXCJzb2Z0d2FyZWRsXCIsXHJcbiAgICBuYW1lOiBcIlNvZnR3YXJlIERvd25sb2Fkc1wiLFxyXG4gICAgZGVzYzogXCJEb3dubG9hZGFibGUgc29mdHdhcmUgYXBwbGljYXRpb25zXCIsXHJcbiAgICBjb2xvcjogXCJiZy1ncmVlbi02MDBcIixcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9zb2Z0d2FyZWRsMVwiLFxyXG4gICAgICBcImh0dHBzOi8vZXhhbXBsZS5jb20vc29mdHdhcmVkbDJcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL3NvZnR3YXJlZGwzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9zb2Z0d2FyZWRsNFwiLFxyXG4gICAgICBcImh0dHBzOi8vZXhhbXBsZS5jb20vc29mdHdhcmVkbDVcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICBcIkhhY2tzIGFuZCBUcmlja3NcIjoge1xyXG4gICAgaWQ6IFwiaGFja3NcIixcclxuICAgIG5hbWU6IFwiSGFja3MgYW5kIFRyaWNrc1wiLFxyXG4gICAgZGVzYzogXCJUaXBzLCB0cmlja3MsIGFuZCBoYWNrc1wiLFxyXG4gICAgY29sb3I6IFwiYmctY3lhbi02MDBcIixcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9oYWNrczFcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2hhY2tzMlwiLFxyXG4gICAgICBcImh0dHBzOi8vZXhhbXBsZS5jb20vaGFja3MzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9oYWNrczRcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2hhY2tzNVwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIFwiTGVhcm5pbmcgUmVzb3VyY2VzXCI6IHtcclxuICAgIGlkOiBcImxlYXJuaW5nXCIsXHJcbiAgICBuYW1lOiBcIkxlYXJuaW5nIFJlc291cmNlc1wiLFxyXG4gICAgZGVzYzogXCJFZHVjYXRpb25hbCByZXNvdXJjZXMgZm9yIGxlYXJuaW5nXCIsXHJcbiAgICBjb2xvcjogXCJiZy1pbmRpZ28tNjAwXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICBcImh0dHBzOi8vZXhhbXBsZS5jb20vbGVhcm5pbmcxXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9sZWFybmluZzJcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2xlYXJuaW5nM1wiLFxyXG4gICAgICBcImh0dHBzOi8vZXhhbXBsZS5jb20vbGVhcm5pbmc0XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9sZWFybmluZzVcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICBcIlByb2R1Y3Rpdml0eSBUb29sc1wiOiB7XHJcbiAgICBpZDogXCJwcm9kdWN0aXZpdHlcIixcclxuICAgIG5hbWU6IFwiUHJvZHVjdGl2aXR5IFRvb2xzXCIsXHJcbiAgICBkZXNjOiBcIlRvb2xzIHRvIGVuaGFuY2UgcHJvZHVjdGl2aXR5XCIsXHJcbiAgICBjb2xvcjogXCJiZy1waW5rLTYwMFwiLFxyXG4gICAgbGlua3M6IFtcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL3Byb2R1Y3Rpdml0eTFcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL3Byb2R1Y3Rpdml0eTJcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL3Byb2R1Y3Rpdml0eTNcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL3Byb2R1Y3Rpdml0eTRcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL3Byb2R1Y3Rpdml0eTVcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICBcIkRlc2lnbiBSZXNvdXJjZXNcIjoge1xyXG4gICAgaWQ6IFwiZGVzaWduXCIsXHJcbiAgICBuYW1lOiBcIkRlc2lnbiBSZXNvdXJjZXNcIixcclxuICAgIGRlc2M6IFwiUmVzb3VyY2VzIGZvciBkZXNpZ24gYW5kIGNyZWF0aXZpdHlcIixcclxuICAgIGNvbG9yOiBcImJnLXllbGxvdy02MDBcIixcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9kZXNpZ24xXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9kZXNpZ24yXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9kZXNpZ24zXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9kZXNpZ240XCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9kZXNpZ241XCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgXCJDbG91ZCBTZXJ2aWNlc1wiOiB7XHJcbiAgICBpZDogXCJjbG91ZFwiLFxyXG4gICAgbmFtZTogXCJDbG91ZCBTZXJ2aWNlc1wiLFxyXG4gICAgZGVzYzogXCJTZXJ2aWNlcyByZWxhdGVkIHRvIGNsb3VkIGNvbXB1dGluZ1wiLFxyXG4gICAgY29sb3I6IFwiYmctdGVhbC02MDBcIixcclxuICAgIGxpbmtzOiBbXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9jbG91ZDFcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2Nsb3VkMlwiLFxyXG4gICAgICBcImh0dHBzOi8vZXhhbXBsZS5jb20vY2xvdWQzXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9jbG91ZDRcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL2Nsb3VkNVwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIFwiTWlzY2VsbGFuZW91cyBUb29sc1wiOiB7XHJcbiAgICBpZDogXCJtaXNjXCIsXHJcbiAgICBuYW1lOiBcIk1pc2NlbGxhbmVvdXMgVG9vbHNcIixcclxuICAgIGRlc2M6IFwiVmFyaW91cyB0b29scyBmb3IgZGlmZmVyZW50IHB1cnBvc2VzXCIsXHJcbiAgICBjb2xvcjogXCJiZy1wdXJwbGUtNjAwXCIsXHJcbiAgICBsaW5rczogW1xyXG4gICAgICBcImh0dHBzOi8vZXhhbXBsZS5jb20vbWlzYzFcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL21pc2MyXCIsXHJcbiAgICAgIFwiaHR0cHM6Ly9leGFtcGxlLmNvbS9taXNjM1wiLFxyXG4gICAgICBcImh0dHBzOi8vZXhhbXBsZS5jb20vbWlzYzRcIixcclxuICAgICAgXCJodHRwczovL2V4YW1wbGUuY29tL21pc2M1XCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJjYXRlZ29yaWVzIiwiaWQiLCJuYW1lIiwiZGVzYyIsImNvbG9yIiwibGlua3MiLCJ3ZWIiLCJsb2dvIiwibGluayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/data/Categories.js\n"));

/***/ })

});