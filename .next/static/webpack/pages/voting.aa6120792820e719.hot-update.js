"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/voting",{

/***/ "./src/pages/voting.js":
/*!*****************************!*\
  !*** ./src/pages/voting.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Voting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-bar */ \"./src/components/nav-bar.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Voting(param) {\n    var updatedData = param.updatedData;\n    var _this = this;\n    var subScore = function subScore(i) {\n        var tmpChange = competitors[i] - 1;\n        var tmpArray = [];\n        for(var _$i = 0; _$i < competitors.length; _$i += 1){\n            tmpArray[_$i] = competitors[_$i];\n        }\n        tmpArray[i] = tmpChange;\n        setCompetitors(tmpArray);\n    };\n    var addScore = //ran for loop again because if I were to set the temp array equal to the exact same competitors array react\n    function addScore(i) {\n        var tmpChange = competitors[i] + 1;\n        var tmpArray = [];\n        for(var _$i = 0; _$i < competitors.length; _$i += 1){\n            tmpArray[_$i] = competitors[_$i];\n        }\n        tmpArray[i] = tmpChange;\n        setCompetitors(tmpArray);\n    };\n    _s();\n    var tmp = [];\n    for(var i = 0; i < updatedData.length; i += 1){\n        tmp[i] = updatedData[i].score;\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tmp), competitors = ref[0], setCompetitors = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-evenly\",\n                flexDirection: \"row\",\n                paddingTop: \"125px\",\n                children: updatedData.map(function(result) {\n                    var i = updatedData.indexOf(result);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                        backgroundColor: \"white\",\n                                        boxSize: \"300px\",\n                                        roundedTop: \"lg\",\n                                        objectFit: \"cover\",\n                                        src: result.image,\n                                        alt: \"competitor image source\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                        backgroundColor: \"#F1EDDF\",\n                                        roundedBottom: \"lg\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                                                flex: \"1\",\n                                                justifyContent: \"space-evenly\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                            as: \"i\",\n                                                            children: [\n                                                                \" \",\n                                                                result.name,\n                                                                \" \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                            lineNumber: 61,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                            as: \"b\",\n                                                            children: [\n                                                                \" Score: \",\n                                                                competitors[i],\n                                                                \"! \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                                justifyContent: \"center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        bgColor: \"#EFDCB6\",\n                                                        _hover: {\n                                                            bg: \"#FFFFF0\"\n                                                        },\n                                                        boxShadow: \"2xl\",\n                                                        p: \"6\",\n                                                        rounded: \"md\",\n                                                        \"border-radius\": \"30px\",\n                                                        onClick: function() {\n                                                            return addScore(i);\n                                                        },\n                                                        children: \" + \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    \"                 \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        bgColor: \"#EFDCB6\",\n                                                        _hover: {\n                                                            bg: \"#FFFFF0\"\n                                                        },\n                                                        onClick: function() {\n                                                            return subScore(i);\n                                                        },\n                                                        children: \" - \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                        lineNumber: 69,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, result.name, true, {\n                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}; // import { useState } from \"react\";\n // import NavBar from \"../components/nav-bar\";\n // import { Box, Image, Button, Collapse, Heading, Text, HStack, Spacer, Stack, VStack } from \"@chakra-ui/react\";\n // const votingEndpoint = 'https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json'\n // export async function getStaticProps() {\n //     const res = await fetch(votingEndpoint);\n //     const data = await res.json();\n //     const updatedData = data.voting;\n //     return {\n //         props: { updatedData }\n //     }\n // }\n // export default function Voting({ updatedData }) {\n //     let tmp = [];\n //     for (let i = 0; i < updatedData.length; i += 1) {\n //         tmp[i] = updatedData[i].score;\n //     }\n //     const [competitors, setCompetitors] = useState(tmp);\n //     function subScore(i){\n //         const tmpChange = competitors[i] - 1;\n //         let tmpArray = []\n //         for (let i = 0; i < competitors.length; i += 1) {\n //             tmpArray[i] = competitors[i];\n //         }\n //         tmpArray[i] = tmpChange\n //         setCompetitors(tmpArray)\n //         }\n //     //ran for loop again because if I were to set the temp array equal to the exact same competitors array react\n //     function addScore(i){\n //         const tmpChange = competitors[i] + 1;\n //         let tmpArray = []\n //         for (let i = 0; i < competitors.length; i += 1) {\n //             tmpArray[i] = competitors[i];\n //         }\n //         tmpArray[i] = tmpChange\n //         setCompetitors(tmpArray)\n //         }\n //     return(\n //         <>\n //         <NavBar/>\n //         <Box padding=\"50px\" display=\"flex\" justifyContent=\"space-evenly\" flexDirection=\"row\"  >\n //         {updatedData.map(result => { \n //             const i = updatedData.indexOf(result);\n //         return ( \n //             <>\n //             <Box display=\"flex\" flexDirection=\"row\" >\n //                 <Box key={result.name}>\n //                 <Image _hover={{ borderColor: \"#F1EDDF\", bg: \"#F1EDDF\" }} backgroundColor=\"white\"  paddingLeft=\"50px\" padding=\"50px\"  boxSize='300px' objectFit='cover' src={result.image} alt='competitor image source' />\n //                 <Box backgroundColor=\"#F1EDDF\" rounded='lg' > \n //                     <Text as='i'> {result.name} </Text>\n //                     {\" \"}\n //                     <Text as='b'> {competitors[i]} </Text>\n //                     {\" \"}\n //                     <Button rounded='lg' colorScheme=\"#EFDCB6\" onClick={() => addScore(i)}> + </Button>\n //                     {\"                 \"}\n //                     <Button rounded='lg' colorScheme=\"#FEFCBF\" onClick={() => subScore(i)}> - </Button>\n //                 </Box>\n //                 </Box>\n //             </Box>\n //             </>\n //             )\n //         },)}\n //         </Box>\n //         </>\n //     );\n // }\n_s(Voting, \"dmJxci3BmUmy7rafQVJrxOPlwkM=\");\n_c = Voting;\nvar _c;\n$RefreshReg$(_c, \"Voting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdi1iYXJcIjtcbmltcG9ydCB7IEJveCwgSW1hZ2UsIEJ1dHRvbiwgSGVhZGluZywgVGV4dCwgSFN0YWNrLCBTcGFjZXIsIFN0YWNrLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuY29uc3Qgdm90aW5nRW5kcG9pbnQgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dlYi1hdC1iZXJrZWxleS9mYTIyLWZyb250ZW5kLWFwaS1lbmRwb2ludC9tYWluL2RhdGEuanNvbidcbmltcG9ydCB7IENpcmNsZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh2b3RpbmdFbmRwb2ludCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc3QgdXBkYXRlZERhdGEgPSBkYXRhLnZvdGluZztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IHVwZGF0ZWREYXRhIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWb3RpbmcoeyB1cGRhdGVkRGF0YSB9KSB7XG4gXG4gICAgbGV0IHRtcCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZERhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdG1wW2ldID0gdXBkYXRlZERhdGFbaV0uc2NvcmU7XG4gICAgfVxuICAgIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUodG1wKTtcblxuIFxuICAgIGZ1bmN0aW9uIHN1YlNjb3JlKGkpe1xuICAgICAgICBjb25zdCB0bXBDaGFuZ2UgPSBjb21wZXRpdG9yc1tpXSAtIDE7XG4gICAgICAgIGxldCB0bXBBcnJheSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGV0aXRvcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRtcEFycmF5W2ldID0gY29tcGV0aXRvcnNbaV07XG4gICAgICAgIH1cbiAgICAgICAgdG1wQXJyYXlbaV0gPSB0bXBDaGFuZ2VcbiAgICAgICAgc2V0Q29tcGV0aXRvcnModG1wQXJyYXkpXG4gICAgICAgIH1cblxuICAgIC8vcmFuIGZvciBsb29wIGFnYWluIGJlY2F1c2UgaWYgSSB3ZXJlIHRvIHNldCB0aGUgdGVtcCBhcnJheSBlcXVhbCB0byB0aGUgZXhhY3Qgc2FtZSBjb21wZXRpdG9ycyBhcnJheSByZWFjdFxuICAgIGZ1bmN0aW9uIGFkZFNjb3JlKGkpe1xuICAgICAgICBjb25zdCB0bXBDaGFuZ2UgPSBjb21wZXRpdG9yc1tpXSArIDE7XG4gICAgICAgIGxldCB0bXBBcnJheSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGV0aXRvcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRtcEFycmF5W2ldID0gY29tcGV0aXRvcnNbaV07XG4gICAgICAgIH1cblxuICAgICAgICB0bXBBcnJheVtpXSA9IHRtcENoYW5nZVxuICAgICAgICBzZXRDb21wZXRpdG9ycyh0bXBBcnJheSlcbiAgICAgICAgfVxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPE5hdkJhci8+XG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWV2ZW5seVwiIGZsZXhEaXJlY3Rpb249XCJyb3dcIiBwYWRkaW5nVG9wPVwiMTI1cHhcIiA+XG4gICAgICAgIHt1cGRhdGVkRGF0YS5tYXAocmVzdWx0ID0+IHsgXG4gICAgICAgICAgICBjb25zdCBpID0gdXBkYXRlZERhdGEuaW5kZXhPZihyZXN1bHQpO1xuICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiID5cbiAgICAgICAgICAgICAgICA8Qm94IGtleT17cmVzdWx0Lm5hbWV9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiICBib3hTaXplPSczMDBweCcgcm91bmRlZFRvcD0nbGcnIG9iamVjdEZpdD0nY292ZXInIHNyYz17cmVzdWx0LmltYWdlfSBhbHQ9J2NvbXBldGl0b3IgaW1hZ2Ugc291cmNlJyAvPlxuICAgICAgICAgICAgICAgIDxCb3ggYmFja2dyb3VuZENvbG9yPVwiI0YxRURERlwiIHJvdW5kZWRCb3R0b209J2xnJyA+IFxuICAgICAgICAgICAgICAgIDxWU3RhY2sgZmxleD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWV2ZW5seVwiPlxuICAgICAgICAgICAgICAgICAgICA8VlN0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz0naSc+IHtyZXN1bHQubmFtZX0gPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdiJz4gU2NvcmU6IHtjb21wZXRpdG9yc1tpXX0hIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8SFN0YWNrIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+ICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYmdDb2xvcj1cIiNFRkRDQjZcIiBfaG92ZXI9e3sgYmc6IFwiI0ZGRkZGMFwiIH19IGJveFNoYWRvdz0nMnhsJyBwPSc2JyByb3VuZGVkPSdtZCcgYm9yZGVyLXJhZGl1cz1cIjMwcHhcIiBvbkNsaWNrPXsoKSA9PiBhZGRTY29yZShpKX0+ICsgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtcIiAgICAgICAgICAgICAgICAgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIGJnQ29sb3I9XCIjRUZEQ0I2XCIgX2hvdmVyPXt7IGJnOiBcIiNGRkZGRjBcIiB9fSBvbkNsaWNrPXsoKSA9PiBzdWJTY29yZShpKX0+IC0gPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPiAgIFxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgIH0sKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cblxuXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYtYmFyXCI7XG4vLyBpbXBvcnQgeyBCb3gsIEltYWdlLCBCdXR0b24sIENvbGxhcHNlLCBIZWFkaW5nLCBUZXh0LCBIU3RhY2ssIFNwYWNlciwgU3RhY2ssIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG4vLyBjb25zdCB2b3RpbmdFbmRwb2ludCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vd2ViLWF0LWJlcmtlbGV5L2ZhMjItZnJvbnRlbmQtYXBpLWVuZHBvaW50L21haW4vZGF0YS5qc29uJ1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godm90aW5nRW5kcG9pbnQpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gZGF0YS52b3Rpbmc7XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczogeyB1cGRhdGVkRGF0YSB9XG4vLyAgICAgfVxuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm90aW5nKHsgdXBkYXRlZERhdGEgfSkge1xuIFxuLy8gICAgIGxldCB0bXAgPSBbXTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWREYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgIHRtcFtpXSA9IHVwZGF0ZWREYXRhW2ldLnNjb3JlO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKHRtcCk7XG5cbiBcbi8vICAgICBmdW5jdGlvbiBzdWJTY29yZShpKXtcbi8vICAgICAgICAgY29uc3QgdG1wQ2hhbmdlID0gY29tcGV0aXRvcnNbaV0gLSAxO1xuLy8gICAgICAgICBsZXQgdG1wQXJyYXkgPSBbXVxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBldGl0b3JzLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgICAgICB0bXBBcnJheVtpXSA9IGNvbXBldGl0b3JzW2ldO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRtcEFycmF5W2ldID0gdG1wQ2hhbmdlXG4vLyAgICAgICAgIHNldENvbXBldGl0b3JzKHRtcEFycmF5KVxuLy8gICAgICAgICB9XG5cbi8vICAgICAvL3JhbiBmb3IgbG9vcCBhZ2FpbiBiZWNhdXNlIGlmIEkgd2VyZSB0byBzZXQgdGhlIHRlbXAgYXJyYXkgZXF1YWwgdG8gdGhlIGV4YWN0IHNhbWUgY29tcGV0aXRvcnMgYXJyYXkgcmVhY3Rcbi8vICAgICBmdW5jdGlvbiBhZGRTY29yZShpKXtcbi8vICAgICAgICAgY29uc3QgdG1wQ2hhbmdlID0gY29tcGV0aXRvcnNbaV0gKyAxO1xuLy8gICAgICAgICBsZXQgdG1wQXJyYXkgPSBbXVxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBldGl0b3JzLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgICAgICB0bXBBcnJheVtpXSA9IGNvbXBldGl0b3JzW2ldO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdG1wQXJyYXlbaV0gPSB0bXBDaGFuZ2Vcbi8vICAgICAgICAgc2V0Q29tcGV0aXRvcnModG1wQXJyYXkpXG4vLyAgICAgICAgIH1cbiAgICBcbi8vICAgICByZXR1cm4oXG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgIDxOYXZCYXIvPlxuLy8gICAgICAgICA8Qm94IHBhZGRpbmc9XCI1MHB4XCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWV2ZW5seVwiIGZsZXhEaXJlY3Rpb249XCJyb3dcIiAgPlxuLy8gICAgICAgICB7dXBkYXRlZERhdGEubWFwKHJlc3VsdCA9PiB7IFxuLy8gICAgICAgICAgICAgY29uc3QgaSA9IHVwZGF0ZWREYXRhLmluZGV4T2YocmVzdWx0KTtcbi8vICAgICAgICAgcmV0dXJuICggXG4vLyAgICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJyb3dcIiA+XG4vLyAgICAgICAgICAgICAgICAgPEJveCBrZXk9e3Jlc3VsdC5uYW1lfT5cbi8vICAgICAgICAgICAgICAgICA8SW1hZ2UgX2hvdmVyPXt7IGJvcmRlckNvbG9yOiBcIiNGMUVEREZcIiwgYmc6IFwiI0YxRURERlwiIH19IGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCIgIHBhZGRpbmdMZWZ0PVwiNTBweFwiIHBhZGRpbmc9XCI1MHB4XCIgIGJveFNpemU9JzMwMHB4JyBvYmplY3RGaXQ9J2NvdmVyJyBzcmM9e3Jlc3VsdC5pbWFnZX0gYWx0PSdjb21wZXRpdG9yIGltYWdlIHNvdXJjZScgLz5cbi8vICAgICAgICAgICAgICAgICA8Qm94IGJhY2tncm91bmRDb2xvcj1cIiNGMUVEREZcIiByb3VuZGVkPSdsZycgPiBcbi8vICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J2knPiB7cmVzdWx0Lm5hbWV9IDwvVGV4dD5cbi8vICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuLy8gICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz0nYic+IHtjb21wZXRpdG9yc1tpXX0gPC9UZXh0PlxuXG4vLyAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cblxuLy8gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdW5kZWQ9J2xnJyBjb2xvclNjaGVtZT1cIiNFRkRDQjZcIiBvbkNsaWNrPXsoKSA9PiBhZGRTY29yZShpKX0+ICsgPC9CdXR0b24+XG4vLyAgICAgICAgICAgICAgICAgICAgIHtcIiAgICAgICAgICAgICAgICAgXCJ9XG4vLyAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm91bmRlZD0nbGcnIGNvbG9yU2NoZW1lPVwiI0ZFRkNCRlwiIG9uQ2xpY2s9eygpID0+IHN1YlNjb3JlKGkpfT4gLSA8L0J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICAgICA8L0JveD5cbi8vICAgICAgICAgICAgIDwvPlxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICB9LCl9XG4vLyAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICA8Lz5cbi8vICAgICApO1xuLy8gfVxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJOYXZCYXIiLCJCb3giLCJJbWFnZSIsIkJ1dHRvbiIsIkhlYWRpbmciLCJUZXh0IiwiSFN0YWNrIiwiU3BhY2VyIiwiU3RhY2siLCJWU3RhY2siLCJDaXJjbGUiLCJWb3RpbmciLCJ1cGRhdGVkRGF0YSIsInN1YlNjb3JlIiwiaSIsInRtcENoYW5nZSIsImNvbXBldGl0b3JzIiwidG1wQXJyYXkiLCJsZW5ndGgiLCJzZXRDb21wZXRpdG9ycyIsImFkZFNjb3JlIiwidG1wIiwic2NvcmUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZ1RvcCIsIm1hcCIsInJlc3VsdCIsImluZGV4T2YiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaXplIiwicm91bmRlZFRvcCIsIm9iamVjdEZpdCIsInNyYyIsImltYWdlIiwiYWx0Iiwicm91bmRlZEJvdHRvbSIsImZsZXgiLCJhcyIsIm5hbWUiLCJiZ0NvbG9yIiwiX2hvdmVyIiwiYmciLCJib3hTaGFkb3ciLCJwIiwicm91bmRlZCIsImJvcmRlci1yYWRpdXMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/voting.js\n"));

/***/ })

});