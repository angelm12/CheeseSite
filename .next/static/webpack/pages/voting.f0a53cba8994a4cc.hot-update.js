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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Voting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-bar */ \"./src/components/nav-bar.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Voting(param) {\n    var updatedData = param.updatedData;\n    var _this = this;\n    var subScore = function subScore(i) {\n        var tmpChange = competitors[i] - 1;\n        var tmpArray = [];\n        for(var _$i = 0; _$i < competitors.length; _$i += 1){\n            tmpArray[_$i] = competitors[_$i];\n        }\n        tmpArray[i] = tmpChange;\n        setCompetitors(tmpArray);\n    };\n    var addScore = //ran for loop again because if I were to set the temp array equal to the exact same competitors array react\n    function addScore(i) {\n        var tmpChange = competitors[i] + 1;\n        var tmpArray = [];\n        for(var _$i = 0; _$i < competitors.length; _$i += 1){\n            tmpArray[_$i] = competitors[_$i];\n        }\n        tmpArray[i] = tmpChange;\n        setCompetitors(tmpArray);\n    };\n    _s();\n    var tmp = [];\n    for(var i = 0; i < updatedData.length; i += 1){\n        tmp[i] = updatedData[i].score;\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tmp), competitors = ref[0], setCompetitors = ref[1];\n    // Modal functionality\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isModalOpen = ref2[0], setIsModalOpen = ref2[1];\n    (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useOutsideClick)({\n        ref: ref1,\n        handler: function() {\n            return setIsModalOpen(false);\n        }\n    });\n    // End of Modal.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                fontSize: \"4xl\",\n                as: \"b\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                paddingTop: \"50px\",\n                children: \"Cast your Votes!\"\n            }, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: isModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    paddingTop: \"25px\",\n                    ref: ref1,\n                    children: \"Place your vote for your favorite contestant who you think will win this year's Grand Cheese Race!\"\n                }, void 0, false, {\n                    fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    colorScheme: \"#FFFFF0\",\n                    variant: \"ghost\",\n                    onClick: function() {\n                        return setIsModalOpen(true);\n                    },\n                    children: \"Bruh\"\n                }, void 0, false, {\n                    fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-evenly\",\n                flexDirection: \"row\",\n                paddingTop: \"50px\",\n                children: updatedData.map(function(result) {\n                    var i = updatedData.indexOf(result);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                        backgroundColor: \"white\",\n                                        boxSize: \"300px\",\n                                        roundedTop: \"lg\",\n                                        boxShadow: \"2xl\",\n                                        objectFit: \"cover\",\n                                        src: result.image,\n                                        alt: \"competitor image source\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                        backgroundColor: \"#F1EDDF\",\n                                        roundedBottom: \"lg\",\n                                        boxShadow: \"2xl\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                                                flex: \"1\",\n                                                justifyContent: \"space-evenly\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                            as: \"i\",\n                                                            children: [\n                                                                \" \",\n                                                                result.name,\n                                                                \" \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                            as: \"b\",\n                                                            children: [\n                                                                \" Score: \",\n                                                                competitors[i],\n                                                                \"! \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                                justifyContent: \"center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        bgColor: \"#EFDCB6\",\n                                                        _hover: {\n                                                            bg: \"#FFFFF0\"\n                                                        },\n                                                        \"border-radius\": \"30px\",\n                                                        onClick: function() {\n                                                            return addScore(i);\n                                                        },\n                                                        children: \" + \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    \"                 \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        bgColor: \"#EFDCB6\",\n                                                        _hover: {\n                                                            bg: \"#FFFFF0\"\n                                                        },\n                                                        onClick: function() {\n                                                            return subScore(i);\n                                                        },\n                                                        children: \" - \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, result.name, true, {\n                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}; // import { useState } from \"react\";\n // import NavBar from \"../components/nav-bar\";\n // import { Box, Image, Button, Collapse, Heading, Text, HStack, Spacer, Stack, VStack } from \"@chakra-ui/react\";\n // const votingEndpoint = 'https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json'\n // export async function getStaticProps() {\n //     const res = await fetch(votingEndpoint);\n //     const data = await res.json();\n //     const updatedData = data.voting;\n //     return {\n //         props: { updatedData }\n //     }\n // }\n // export default function Voting({ updatedData }) {\n //     let tmp = [];\n //     for (let i = 0; i < updatedData.length; i += 1) {\n //         tmp[i] = updatedData[i].score;\n //     }\n //     const [competitors, setCompetitors] = useState(tmp);\n //     function subScore(i){\n //         const tmpChange = competitors[i] - 1;\n //         let tmpArray = []\n //         for (let i = 0; i < competitors.length; i += 1) {\n //             tmpArray[i] = competitors[i];\n //         }\n //         tmpArray[i] = tmpChange\n //         setCompetitors(tmpArray)\n //         }\n //     //ran for loop again because if I were to set the temp array equal to the exact same competitors array react\n //     function addScore(i){\n //         const tmpChange = competitors[i] + 1;\n //         let tmpArray = []\n //         for (let i = 0; i < competitors.length; i += 1) {\n //             tmpArray[i] = competitors[i];\n //         }\n //         tmpArray[i] = tmpChange\n //         setCompetitors(tmpArray)\n //         }\n //     return(\n //         <>\n //         <NavBar/>\n //         <Box padding=\"50px\" display=\"flex\" justifyContent=\"space-evenly\" flexDirection=\"row\"  >\n //         {updatedData.map(result => { \n //             const i = updatedData.indexOf(result);\n //         return ( \n //             <>\n //             <Box display=\"flex\" flexDirection=\"row\" >\n //                 <Box key={result.name}>\n //                 <Image _hover={{ borderColor: \"#F1EDDF\", bg: \"#F1EDDF\" }} backgroundColor=\"white\"  paddingLeft=\"50px\" padding=\"50px\"  boxSize='300px' objectFit='cover' src={result.image} alt='competitor image source' />\n //                 <Box backgroundColor=\"#F1EDDF\" rounded='lg' > \n //                     <Text as='i'> {result.name} </Text>\n //                     {\" \"}\n //                     <Text as='b'> {competitors[i]} </Text>\n //                     {\" \"}\n //                     <Button rounded='lg' colorScheme=\"#EFDCB6\" onClick={() => addScore(i)}> + </Button>\n //                     {\"                 \"}\n //                     <Button rounded='lg' colorScheme=\"#FEFCBF\" onClick={() => subScore(i)}> - </Button>\n //                 </Box>\n //                 </Box>\n //             </Box>\n //             </>\n //             )\n //         },)}\n //         </Box>\n //         </>\n //     );\n // }\n_s(Voting, \"uNLqDj4ajD138UkR7iC94NkvW84=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useOutsideClick\n    ];\n});\n_c = Voting;\nvar _c;\n$RefreshReg$(_c, \"Voting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtDQUN4RCx5Q0FBeUM7Q0FDekMsUUFBUTtDQUNSLDJEQUEyRDtDQUczRCw0QkFBNEI7Q0FDNUIsZ0RBQWdEO0NBQ2hELDRCQUE0QjtDQUM1Qiw0REFBNEQ7Q0FDNUQsNENBQTRDO0NBQzVDLFlBQVk7Q0FDWixrQ0FBa0M7Q0FDbEMsbUNBQW1DO0NBQ25DLFlBQVk7Q0FFWixtSEFBbUg7Q0FDbkgsNEJBQTRCO0NBQzVCLGdEQUFnRDtDQUNoRCw0QkFBNEI7Q0FDNUIsNERBQTREO0NBQzVELDRDQUE0QztDQUM1QyxZQUFZO0NBRVosa0NBQWtDO0NBQ2xDLG1DQUFtQztDQUNuQyxZQUFZO0NBRVosY0FBYztDQUNkLGFBQWE7Q0FDYixvQkFBb0I7Q0FDcEIsa0dBQWtHO0NBQ2xHLHdDQUF3QztDQUN4QyxxREFBcUQ7Q0FDckQsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQix3REFBd0Q7Q0FDeEQsMENBQTBDO0NBQzFDLDhOQUE4TjtDQUM5TixpRUFBaUU7Q0FDakUsMERBQTBEO0NBQzFELDRCQUE0QjtDQUM1Qiw2REFBNkQ7Q0FFN0QsNEJBQTRCO0NBRTVCLDBHQUEwRztDQUMxRyw0Q0FBNEM7Q0FDNUMsMEdBQTBHO0NBQzFHLHlCQUF5QjtDQUV6Qix5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsU0FBUztDQUNULElBQUk7R0F6S29CdEMsTUFBTTs7UUFrQ3RCRCw2REFBZTs7O0FBbENDQyxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy92b3RpbmcuanM/MmFlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdi1iYXJcIjtcbmltcG9ydCB7IEJveCwgSW1hZ2UsIEJ1dHRvbiwgSGVhZGluZywgVGV4dCwgSFN0YWNrLCBTcGFjZXIsIFN0YWNrLCBWU3RhY2sgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuY29uc3Qgdm90aW5nRW5kcG9pbnQgPSAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dlYi1hdC1iZXJrZWxleS9mYTIyLWZyb250ZW5kLWFwaS1lbmRwb2ludC9tYWluL2RhdGEuanNvbidcblxuaW1wb3J0IHsgdXNlT3V0c2lkZUNsaWNrIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHZvdGluZ0VuZHBvaW50KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zdCB1cGRhdGVkRGF0YSA9IGRhdGEudm90aW5nO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgdXBkYXRlZERhdGEgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZvdGluZyh7IHVwZGF0ZWREYXRhIH0pIHtcbiBcbiAgICBsZXQgdG1wID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVkRGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0bXBbaV0gPSB1cGRhdGVkRGF0YVtpXS5zY29yZTtcbiAgICB9XG4gICAgY29uc3QgW2NvbXBldGl0b3JzLCBzZXRDb21wZXRpdG9yc10gPSB1c2VTdGF0ZSh0bXApO1xuXG4gXG4gICAgZnVuY3Rpb24gc3ViU2NvcmUoaSl7XG4gICAgICAgIGNvbnN0IHRtcENoYW5nZSA9IGNvbXBldGl0b3JzW2ldIC0gMTtcbiAgICAgICAgbGV0IHRtcEFycmF5ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wZXRpdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdG1wQXJyYXlbaV0gPSBjb21wZXRpdG9yc1tpXTtcbiAgICAgICAgfVxuICAgICAgICB0bXBBcnJheVtpXSA9IHRtcENoYW5nZVxuICAgICAgICBzZXRDb21wZXRpdG9ycyh0bXBBcnJheSlcbiAgICAgICAgfVxuXG4gICAgLy9yYW4gZm9yIGxvb3AgYWdhaW4gYmVjYXVzZSBpZiBJIHdlcmUgdG8gc2V0IHRoZSB0ZW1wIGFycmF5IGVxdWFsIHRvIHRoZSBleGFjdCBzYW1lIGNvbXBldGl0b3JzIGFycmF5IHJlYWN0XG4gICAgZnVuY3Rpb24gYWRkU2NvcmUoaSl7XG4gICAgICAgIGNvbnN0IHRtcENoYW5nZSA9IGNvbXBldGl0b3JzW2ldICsgMTtcbiAgICAgICAgbGV0IHRtcEFycmF5ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21wZXRpdG9ycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdG1wQXJyYXlbaV0gPSBjb21wZXRpdG9yc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRtcEFycmF5W2ldID0gdG1wQ2hhbmdlXG4gICAgICAgIHNldENvbXBldGl0b3JzKHRtcEFycmF5KVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTW9kYWwgZnVuY3Rpb25hbGl0eVxuICAgICAgICBjb25zdCByZWYgPSB1c2VSZWYoKVxuICAgICAgICBjb25zdCBbaXNNb2RhbE9wZW4sIHNldElzTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgICAgICB1c2VPdXRzaWRlQ2xpY2soe1xuICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHNldElzTW9kYWxPcGVuKGZhbHNlKSxcbiAgICAgICAgfSlcbiAgICAgICAgLy8gRW5kIG9mIE1vZGFsLlxuICAgIFxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgPE5hdkJhci8+XG4gICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwiNHhsXCIgYXM9XCJiXCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHBhZGRpbmdUb3A9XCI1MHB4XCI+Q2FzdCB5b3VyIFZvdGVzITwvSGVhZGluZz5cblxuXG4gICAgICAgIHsvKiBmb2xsb3dpbmcgZW5jbG9zdXJlIGlzIGZvciBleHRyYSBtb2RhbCBmdW5jdGlvbiwgZmVlbCBmcmVlIHRvIGRlbGV0ZSBpZiBuZWVkIGJlISAqL31cbiAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgIHtpc01vZGFsT3BlbiA/IChcbiAgICAgICAgICAgIDxUZXh0IHBhZGRpbmdUb3A9XCIyNXB4XCIgcmVmPXtyZWZ9PlxuICAgICAgICAgICAgUGxhY2UgeW91ciB2b3RlIGZvciB5b3VyIGZhdm9yaXRlIGNvbnRlc3RhbnQgd2hvIHlvdSB0aGluayB3aWxsIHdpbiB0aGlzIHllYXIncyBHcmFuZCBDaGVlc2UgUmFjZSFcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9JyNGRkZGRjAnIHZhcmlhbnQ9J2dob3N0JyBvbkNsaWNrPXsoKSA9PiBzZXRJc01vZGFsT3Blbih0cnVlKX0+QnJ1aDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgICB7LyogRW5kIG9mIE1vZGFsLiAqL31cblxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1ldmVubHlcIiBmbGV4RGlyZWN0aW9uPVwicm93XCIgcGFkZGluZ1RvcD1cIjUwcHhcIiA+XG4gICAgICAgIHt1cGRhdGVkRGF0YS5tYXAocmVzdWx0ID0+IHsgXG4gICAgICAgICAgICBjb25zdCBpID0gdXBkYXRlZERhdGEuaW5kZXhPZihyZXN1bHQpO1xuICAgICAgICByZXR1cm4gKCBcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiID5cbiAgICAgICAgICAgICAgICA8Qm94IGtleT17cmVzdWx0Lm5hbWV9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBiYWNrZ3JvdW5kQ29sb3I9XCJ3aGl0ZVwiICBib3hTaXplPSczMDBweCcgcm91bmRlZFRvcD0nbGcnIGJveFNoYWRvdz0nMnhsJyBvYmplY3RGaXQ9J2NvdmVyJyBzcmM9e3Jlc3VsdC5pbWFnZX0gYWx0PSdjb21wZXRpdG9yIGltYWdlIHNvdXJjZScgLz5cbiAgICAgICAgICAgICAgICA8Qm94IGJhY2tncm91bmRDb2xvcj1cIiNGMUVEREZcIiByb3VuZGVkQm90dG9tPSdsZycgYm94U2hhZG93PScyeGwnID4gXG4gICAgICAgICAgICAgICAgPFZTdGFjayBmbGV4PVwiMVwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtZXZlbmx5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxWU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdpJz4ge3Jlc3VsdC5uYW1lfSA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J2InPiBTY29yZToge2NvbXBldGl0b3JzW2ldfSEgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9WU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgIDxIU3RhY2sganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBiZ0NvbG9yPVwiI0VGRENCNlwiIF9ob3Zlcj17eyBiZzogXCIjRkZGRkYwXCIgfX0gYm9yZGVyLXJhZGl1cz1cIjMwcHhcIiBvbkNsaWNrPXsoKSA9PiBhZGRTY29yZShpKX0+ICsgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIHtcIiAgICAgICAgICAgICAgICAgXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gIGJnQ29sb3I9XCIjRUZEQ0I2XCIgX2hvdmVyPXt7IGJnOiBcIiNGRkZGRjBcIiB9fSBvbkNsaWNrPXsoKSA9PiBzdWJTY29yZShpKX0+IC0gPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvSFN0YWNrPiAgIFxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgIH0sKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cblxuXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYtYmFyXCI7XG4vLyBpbXBvcnQgeyBCb3gsIEltYWdlLCBCdXR0b24sIENvbGxhcHNlLCBIZWFkaW5nLCBUZXh0LCBIU3RhY2ssIFNwYWNlciwgU3RhY2ssIFZTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG4vLyBjb25zdCB2b3RpbmdFbmRwb2ludCA9ICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vd2ViLWF0LWJlcmtlbGV5L2ZhMjItZnJvbnRlbmQtYXBpLWVuZHBvaW50L21haW4vZGF0YS5qc29uJ1xuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godm90aW5nRW5kcG9pbnQpO1xuLy8gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuLy8gICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gZGF0YS52b3Rpbmc7XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwcm9wczogeyB1cGRhdGVkRGF0YSB9XG4vLyAgICAgfVxuLy8gfVxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm90aW5nKHsgdXBkYXRlZERhdGEgfSkge1xuIFxuLy8gICAgIGxldCB0bXAgPSBbXTtcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWREYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgIHRtcFtpXSA9IHVwZGF0ZWREYXRhW2ldLnNjb3JlO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKHRtcCk7XG5cbiBcbi8vICAgICBmdW5jdGlvbiBzdWJTY29yZShpKXtcbi8vICAgICAgICAgY29uc3QgdG1wQ2hhbmdlID0gY29tcGV0aXRvcnNbaV0gLSAxO1xuLy8gICAgICAgICBsZXQgdG1wQXJyYXkgPSBbXVxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBldGl0b3JzLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgICAgICB0bXBBcnJheVtpXSA9IGNvbXBldGl0b3JzW2ldO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRtcEFycmF5W2ldID0gdG1wQ2hhbmdlXG4vLyAgICAgICAgIHNldENvbXBldGl0b3JzKHRtcEFycmF5KVxuLy8gICAgICAgICB9XG5cbi8vICAgICAvL3JhbiBmb3IgbG9vcCBhZ2FpbiBiZWNhdXNlIGlmIEkgd2VyZSB0byBzZXQgdGhlIHRlbXAgYXJyYXkgZXF1YWwgdG8gdGhlIGV4YWN0IHNhbWUgY29tcGV0aXRvcnMgYXJyYXkgcmVhY3Rcbi8vICAgICBmdW5jdGlvbiBhZGRTY29yZShpKXtcbi8vICAgICAgICAgY29uc3QgdG1wQ2hhbmdlID0gY29tcGV0aXRvcnNbaV0gKyAxO1xuLy8gICAgICAgICBsZXQgdG1wQXJyYXkgPSBbXVxuLy8gICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBldGl0b3JzLmxlbmd0aDsgaSArPSAxKSB7XG4vLyAgICAgICAgICAgICB0bXBBcnJheVtpXSA9IGNvbXBldGl0b3JzW2ldO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdG1wQXJyYXlbaV0gPSB0bXBDaGFuZ2Vcbi8vICAgICAgICAgc2V0Q29tcGV0aXRvcnModG1wQXJyYXkpXG4vLyAgICAgICAgIH1cbiAgICBcbi8vICAgICByZXR1cm4oXG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgIDxOYXZCYXIvPlxuLy8gICAgICAgICA8Qm94IHBhZGRpbmc9XCI1MHB4XCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWV2ZW5seVwiIGZsZXhEaXJlY3Rpb249XCJyb3dcIiAgPlxuLy8gICAgICAgICB7dXBkYXRlZERhdGEubWFwKHJlc3VsdCA9PiB7IFxuLy8gICAgICAgICAgICAgY29uc3QgaSA9IHVwZGF0ZWREYXRhLmluZGV4T2YocmVzdWx0KTtcbi8vICAgICAgICAgcmV0dXJuICggXG4vLyAgICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJyb3dcIiA+XG4vLyAgICAgICAgICAgICAgICAgPEJveCBrZXk9e3Jlc3VsdC5uYW1lfT5cbi8vICAgICAgICAgICAgICAgICA8SW1hZ2UgX2hvdmVyPXt7IGJvcmRlckNvbG9yOiBcIiNGMUVEREZcIiwgYmc6IFwiI0YxRURERlwiIH19IGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCIgIHBhZGRpbmdMZWZ0PVwiNTBweFwiIHBhZGRpbmc9XCI1MHB4XCIgIGJveFNpemU9JzMwMHB4JyBvYmplY3RGaXQ9J2NvdmVyJyBzcmM9e3Jlc3VsdC5pbWFnZX0gYWx0PSdjb21wZXRpdG9yIGltYWdlIHNvdXJjZScgLz5cbi8vICAgICAgICAgICAgICAgICA8Qm94IGJhY2tncm91bmRDb2xvcj1cIiNGMUVEREZcIiByb3VuZGVkPSdsZycgPiBcbi8vICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J2knPiB7cmVzdWx0Lm5hbWV9IDwvVGV4dD5cbi8vICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuLy8gICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz0nYic+IHtjb21wZXRpdG9yc1tpXX0gPC9UZXh0PlxuXG4vLyAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cblxuLy8gICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHJvdW5kZWQ9J2xnJyBjb2xvclNjaGVtZT1cIiNFRkRDQjZcIiBvbkNsaWNrPXsoKSA9PiBhZGRTY29yZShpKX0+ICsgPC9CdXR0b24+XG4vLyAgICAgICAgICAgICAgICAgICAgIHtcIiAgICAgICAgICAgICAgICAgXCJ9XG4vLyAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm91bmRlZD0nbGcnIGNvbG9yU2NoZW1lPVwiI0ZFRkNCRlwiIG9uQ2xpY2s9eygpID0+IHN1YlNjb3JlKGkpfT4gLSA8L0J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgICAgICA8L0JveD5cbi8vICAgICAgICAgICAgIDwvPlxuLy8gICAgICAgICAgICAgKVxuLy8gICAgICAgICB9LCl9XG4vLyAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICA8Lz5cbi8vICAgICApO1xuLy8gfVxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJOYXZCYXIiLCJCb3giLCJJbWFnZSIsIkJ1dHRvbiIsIkhlYWRpbmciLCJUZXh0IiwiSFN0YWNrIiwiU3BhY2VyIiwiU3RhY2siLCJWU3RhY2siLCJ1c2VPdXRzaWRlQ2xpY2siLCJWb3RpbmciLCJ1cGRhdGVkRGF0YSIsInN1YlNjb3JlIiwiaSIsInRtcENoYW5nZSIsImNvbXBldGl0b3JzIiwidG1wQXJyYXkiLCJsZW5ndGgiLCJzZXRDb21wZXRpdG9ycyIsImFkZFNjb3JlIiwidG1wIiwic2NvcmUiLCJyZWYiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwiaGFuZGxlciIsImZvbnRTaXplIiwiYXMiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nVG9wIiwiY29sb3JTY2hlbWUiLCJ2YXJpYW50Iiwib25DbGljayIsImZsZXhEaXJlY3Rpb24iLCJtYXAiLCJyZXN1bHQiLCJpbmRleE9mIiwiYmFja2dyb3VuZENvbG9yIiwiYm94U2l6ZSIsInJvdW5kZWRUb3AiLCJib3hTaGFkb3ciLCJvYmplY3RGaXQiLCJzcmMiLCJpbWFnZSIsImFsdCIsInJvdW5kZWRCb3R0b20iLCJmbGV4IiwibmFtZSIsImJnQ29sb3IiLCJfaG92ZXIiLCJiZyIsImJvcmRlci1yYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/voting.js\n"));

/***/ })

});