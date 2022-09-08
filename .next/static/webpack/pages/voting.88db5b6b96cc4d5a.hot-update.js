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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Voting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_nav_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav-bar */ \"./src/components/nav-bar.tsx\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSG = true;\nfunction Voting(param) {\n    var updatedData = param.updatedData;\n    var _this = this;\n    var subScore = function subScore(i) {\n        var tmpChange = competitors[i] - 1;\n        var tmpArray = [];\n        for(var _$i = 0; _$i < competitors.length; _$i += 1){\n            tmpArray[_$i] = competitors[_$i];\n        }\n        tmpArray[i] = tmpChange;\n        setCompetitors(tmpArray);\n    };\n    var addScore = //ran for loop again because if I were to set the temp array equal to the exact same competitors array react\n    function addScore(i) {\n        var tmpChange = competitors[i] + 1;\n        var tmpArray = [];\n        for(var _$i = 0; _$i < competitors.length; _$i += 1){\n            tmpArray[_$i] = competitors[_$i];\n        }\n        tmpArray[i] = tmpChange;\n        setCompetitors(tmpArray);\n    };\n    _s();\n    var tmp = [];\n    for(var i = 0; i < updatedData.length; i += 1){\n        tmp[i] = updatedData[i].score;\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tmp), competitors = ref[0], setCompetitors = ref[1];\n    // Modal functionality\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isModalOpen = ref2[0], setIsModalOpen = ref2[1];\n    (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useOutsideClick)({\n        ref: ref1,\n        handler: function() {\n            return setIsModalOpen(false);\n        }\n    });\n    // End of Modal.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_nav_bar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {\n                fontSize: \"4xl\",\n                as: \"b\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                paddingTop: \"50px\",\n                children: \"Cast your Votes!\"\n            }, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"center\",\n                children: isModalOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                    paddingTop: \"16px\",\n                    ref: ref1,\n                    children: \"Place your vote for your favorite contestant who you think will win this year's Grand Cheese Race!\"\n                }, void 0, false, {\n                    fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    onClick: function() {\n                        return setIsModalOpen(true);\n                    },\n                    children: \"Info!\"\n                }, void 0, false, {\n                    fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                display: \"flex\",\n                justifyContent: \"space-evenly\",\n                flexDirection: \"row\",\n                paddingTop: \"50px\",\n                children: updatedData.map(function(result) {\n                    var i = updatedData.indexOf(result);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                            display: \"flex\",\n                            flexDirection: \"row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                                        backgroundColor: \"white\",\n                                        boxSize: \"300px\",\n                                        roundedTop: \"lg\",\n                                        boxShadow: \"2xl\",\n                                        objectFit: \"cover\",\n                                        src: result.image,\n                                        alt: \"competitor image source\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                                        backgroundColor: \"#F1EDDF\",\n                                        roundedBottom: \"lg\",\n                                        boxShadow: \"2xl\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                                                flex: \"1\",\n                                                justifyContent: \"space-evenly\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                            as: \"i\",\n                                                            children: [\n                                                                \" \",\n                                                                result.name,\n                                                                \" \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 21\n                                                        }, _this),\n                                                        \" \",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                            as: \"b\",\n                                                            children: [\n                                                                \" Score: \",\n                                                                competitors[i],\n                                                                \"! \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 21\n                                                        }, _this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {\n                                                justifyContent: \"center\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        bgColor: \"#EFDCB6\",\n                                                        _hover: {\n                                                            bg: \"#FFFFF0\"\n                                                        },\n                                                        \"border-radius\": \"30px\",\n                                                        onClick: function() {\n                                                            return addScore(i);\n                                                        },\n                                                        children: \" + \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 21\n                                                    }, _this),\n                                                    \"                 \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                                        bgColor: \"#EFDCB6\",\n                                                        _hover: {\n                                                            bg: \"#FFFFF0\"\n                                                        },\n                                                        onClick: function() {\n                                                            return subScore(i);\n                                                        },\n                                                        children: \" - \"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 21\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, result.name, true, {\n                                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                                lineNumber: 81,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/angelmau/WDBFrontendProject/tp-fa22-frontend/src/pages/voting.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}; // import { useState } from \"react\";\n // import NavBar from \"../components/nav-bar\";\n // import { Box, Image, Button, Collapse, Heading, Text, HStack, Spacer, Stack, VStack } from \"@chakra-ui/react\";\n // const votingEndpoint = 'https://raw.githubusercontent.com/web-at-berkeley/fa22-frontend-api-endpoint/main/data.json'\n // export async function getStaticProps() {\n //     const res = await fetch(votingEndpoint);\n //     const data = await res.json();\n //     const updatedData = data.voting;\n //     return {\n //         props: { updatedData }\n //     }\n // }\n // export default function Voting({ updatedData }) {\n //     let tmp = [];\n //     for (let i = 0; i < updatedData.length; i += 1) {\n //         tmp[i] = updatedData[i].score;\n //     }\n //     const [competitors, setCompetitors] = useState(tmp);\n //     function subScore(i){\n //         const tmpChange = competitors[i] - 1;\n //         let tmpArray = []\n //         for (let i = 0; i < competitors.length; i += 1) {\n //             tmpArray[i] = competitors[i];\n //         }\n //         tmpArray[i] = tmpChange\n //         setCompetitors(tmpArray)\n //         }\n //     //ran for loop again because if I were to set the temp array equal to the exact same competitors array react\n //     function addScore(i){\n //         const tmpChange = competitors[i] + 1;\n //         let tmpArray = []\n //         for (let i = 0; i < competitors.length; i += 1) {\n //             tmpArray[i] = competitors[i];\n //         }\n //         tmpArray[i] = tmpChange\n //         setCompetitors(tmpArray)\n //         }\n //     return(\n //         <>\n //         <NavBar/>\n //         <Box padding=\"50px\" display=\"flex\" justifyContent=\"space-evenly\" flexDirection=\"row\"  >\n //         {updatedData.map(result => { \n //             const i = updatedData.indexOf(result);\n //         return ( \n //             <>\n //             <Box display=\"flex\" flexDirection=\"row\" >\n //                 <Box key={result.name}>\n //                 <Image _hover={{ borderColor: \"#F1EDDF\", bg: \"#F1EDDF\" }} backgroundColor=\"white\"  paddingLeft=\"50px\" padding=\"50px\"  boxSize='300px' objectFit='cover' src={result.image} alt='competitor image source' />\n //                 <Box backgroundColor=\"#F1EDDF\" rounded='lg' > \n //                     <Text as='i'> {result.name} </Text>\n //                     {\" \"}\n //                     <Text as='b'> {competitors[i]} </Text>\n //                     {\" \"}\n //                     <Button rounded='lg' colorScheme=\"#EFDCB6\" onClick={() => addScore(i)}> + </Button>\n //                     {\"                 \"}\n //                     <Button rounded='lg' colorScheme=\"#FEFCBF\" onClick={() => subScore(i)}> - </Button>\n //                 </Box>\n //                 </Box>\n //             </Box>\n //             </>\n //             )\n //         },)}\n //         </Box>\n //         </>\n //     );\n // }\n_s(Voting, \"uNLqDj4ajD138UkR7iC94NkvW84=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useOutsideClick\n    ];\n});\n_c = Voting;\nvar _c;\n$RefreshReg$(_c, \"Voting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEJBQTRCO0NBQzVCLGdEQUFnRDtDQUNoRCw0QkFBNEI7Q0FDNUIsNERBQTREO0NBQzVELDRDQUE0QztDQUM1QyxZQUFZO0NBQ1osa0NBQWtDO0NBQ2xDLG1DQUFtQztDQUNuQyxZQUFZO0NBRVosbUhBQW1IO0NBQ25ILDRCQUE0QjtDQUM1QixnREFBZ0Q7Q0FDaEQsNEJBQTRCO0NBQzVCLDREQUE0RDtDQUM1RCw0Q0FBNEM7Q0FDNUMsWUFBWTtDQUVaLGtDQUFrQztDQUNsQyxtQ0FBbUM7Q0FDbkMsWUFBWTtDQUVaLGNBQWM7Q0FDZCxhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLGtHQUFrRztDQUNsRyx3Q0FBd0M7Q0FDeEMscURBQXFEO0NBQ3JELG9CQUFvQjtDQUNwQixpQkFBaUI7Q0FDakIsd0RBQXdEO0NBQ3hELDBDQUEwQztDQUMxQyw4TkFBOE47Q0FDOU4saUVBQWlFO0NBQ2pFLDBEQUEwRDtDQUMxRCw0QkFBNEI7Q0FDNUIsNkRBQTZEO0NBRTdELDRCQUE0QjtDQUU1QiwwR0FBMEc7Q0FDMUcsNENBQTRDO0NBQzVDLDBHQUEwRztDQUMxRyx5QkFBeUI7Q0FFekIseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsY0FBYztDQUNkLFNBQVM7Q0FDVCxJQUFJO0dBMUtvQnBDLE1BQU07O1FBa0N0QkQsNkRBQWU7OztBQWxDQ0MsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvdm90aW5nLmpzPzJhZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYtYmFyXCI7XG5pbXBvcnQgeyBCb3gsIEltYWdlLCBCdXR0b24sIEhlYWRpbmcsIFRleHQsIEhTdGFjaywgU3BhY2VyLCBTdGFjaywgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmNvbnN0IHZvdGluZ0VuZHBvaW50ID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93ZWItYXQtYmVya2VsZXkvZmEyMi1mcm9udGVuZC1hcGktZW5kcG9pbnQvbWFpbi9kYXRhLmpzb24nXG5cbmltcG9ydCB7IHVzZU91dHNpZGVDbGljayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godm90aW5nRW5kcG9pbnQpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnN0IHVwZGF0ZWREYXRhID0gZGF0YS52b3Rpbmc7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyB1cGRhdGVkRGF0YSB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVm90aW5nKHsgdXBkYXRlZERhdGEgfSkge1xuIFxuICAgIGxldCB0bXAgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWREYXRhLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRtcFtpXSA9IHVwZGF0ZWREYXRhW2ldLnNjb3JlO1xuICAgIH1cbiAgICBjb25zdCBbY29tcGV0aXRvcnMsIHNldENvbXBldGl0b3JzXSA9IHVzZVN0YXRlKHRtcCk7XG5cbiBcbiAgICBmdW5jdGlvbiBzdWJTY29yZShpKXtcbiAgICAgICAgY29uc3QgdG1wQ2hhbmdlID0gY29tcGV0aXRvcnNbaV0gLSAxO1xuICAgICAgICBsZXQgdG1wQXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBldGl0b3JzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0bXBBcnJheVtpXSA9IGNvbXBldGl0b3JzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRtcEFycmF5W2ldID0gdG1wQ2hhbmdlXG4gICAgICAgIHNldENvbXBldGl0b3JzKHRtcEFycmF5KVxuICAgICAgICB9XG5cbiAgICAvL3JhbiBmb3IgbG9vcCBhZ2FpbiBiZWNhdXNlIGlmIEkgd2VyZSB0byBzZXQgdGhlIHRlbXAgYXJyYXkgZXF1YWwgdG8gdGhlIGV4YWN0IHNhbWUgY29tcGV0aXRvcnMgYXJyYXkgcmVhY3RcbiAgICBmdW5jdGlvbiBhZGRTY29yZShpKXtcbiAgICAgICAgY29uc3QgdG1wQ2hhbmdlID0gY29tcGV0aXRvcnNbaV0gKyAxO1xuICAgICAgICBsZXQgdG1wQXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBldGl0b3JzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB0bXBBcnJheVtpXSA9IGNvbXBldGl0b3JzW2ldO1xuICAgICAgICB9XG5cbiAgICAgICAgdG1wQXJyYXlbaV0gPSB0bXBDaGFuZ2VcbiAgICAgICAgc2V0Q29tcGV0aXRvcnModG1wQXJyYXkpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBNb2RhbCBmdW5jdGlvbmFsaXR5XG4gICAgICAgIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gICAgICAgIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgICAgIHVzZU91dHNpZGVDbGljayh7XG4gICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4gc2V0SXNNb2RhbE9wZW4oZmFsc2UpLFxuICAgICAgICB9KVxuICAgICAgICAvLyBFbmQgb2YgTW9kYWwuXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8PlxuICAgICAgICA8TmF2QmFyLz5cbiAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9XCI0eGxcIiBhcz1cImJcIiBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgcGFkZGluZ1RvcD1cIjUwcHhcIj5DYXN0IHlvdXIgVm90ZXMhPC9IZWFkaW5nPlxuXG5cbiAgICAgICAgey8qIGZvbGxvd2luZyBlbmNsb3N1cmUgaXMgZm9yIGV4dHJhIG1vZGFsIGZ1bmN0aW9uLCBmZWVsIGZyZWUgdG8gZGVsZXRlIGlmIG5lZWQgYmUhICovfVxuICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAge2lzTW9kYWxPcGVuID8gKFxuICAgICAgICAgICAgPFRleHQgcGFkZGluZ1RvcD1cIjE2cHhcIiByZWY9e3JlZn0+XG4gICAgICAgICAgICBQbGFjZSB5b3VyIHZvdGUgZm9yIHlvdXIgZmF2b3JpdGUgY29udGVzdGFudCB3aG8geW91IHRoaW5rIHdpbGwgd2luIHRoaXMgeWVhcidzIEdyYW5kIENoZWVzZSBSYWNlIVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPEJ1dHRvbiAgIG9uQ2xpY2s9eygpID0+IHNldElzTW9kYWxPcGVuKHRydWUpfT5JbmZvITwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgICB7LyogRW5kIG9mIE1vZGFsLiAqL31cblxuXG4gICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWV2ZW5seVwiIGZsZXhEaXJlY3Rpb249XCJyb3dcIiBwYWRkaW5nVG9wPVwiNTBweFwiID5cbiAgICAgICAge3VwZGF0ZWREYXRhLm1hcChyZXN1bHQgPT4geyBcbiAgICAgICAgICAgIGNvbnN0IGkgPSB1cGRhdGVkRGF0YS5pbmRleE9mKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiAoIFxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwicm93XCIgPlxuICAgICAgICAgICAgICAgIDxCb3gga2V5PXtyZXN1bHQubmFtZX0+XG4gICAgICAgICAgICAgICAgPEltYWdlIGJhY2tncm91bmRDb2xvcj1cIndoaXRlXCIgIGJveFNpemU9JzMwMHB4JyByb3VuZGVkVG9wPSdsZycgYm94U2hhZG93PScyeGwnIG9iamVjdEZpdD0nY292ZXInIHNyYz17cmVzdWx0LmltYWdlfSBhbHQ9J2NvbXBldGl0b3IgaW1hZ2Ugc291cmNlJyAvPlxuICAgICAgICAgICAgICAgIDxCb3ggYmFja2dyb3VuZENvbG9yPVwiI0YxRURERlwiIHJvdW5kZWRCb3R0b209J2xnJyBib3hTaGFkb3c9JzJ4bCcgPiBcbiAgICAgICAgICAgICAgICA8VlN0YWNrIGZsZXg9XCIxXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1ldmVubHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J2knPiB7cmVzdWx0Lm5hbWV9IDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz0nYic+IFNjb3JlOiB7Y29tcGV0aXRvcnNbaV19ISA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPEhTdGFjayBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnQ29sb3I9XCIjRUZEQ0I2XCIgX2hvdmVyPXt7IGJnOiBcIiNGRkZGRjBcIiB9fSBib3JkZXItcmFkaXVzPVwiMzBweFwiIG9uQ2xpY2s9eygpID0+IGFkZFNjb3JlKGkpfT4gKyA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAge1wiICAgICAgICAgICAgICAgICBcIn1cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiAgYmdDb2xvcj1cIiNFRkRDQjZcIiBfaG92ZXI9e3sgYmc6IFwiI0ZGRkZGMFwiIH19IG9uQ2xpY2s9eygpID0+IHN1YlNjb3JlKGkpfT4gLSA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9IU3RhY2s+ICAgXG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSwpfVxuICAgICAgICA8L0JveD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuXG5cbi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9jb21wb25lbnRzL25hdi1iYXJcIjtcbi8vIGltcG9ydCB7IEJveCwgSW1hZ2UsIEJ1dHRvbiwgQ29sbGFwc2UsIEhlYWRpbmcsIFRleHQsIEhTdGFjaywgU3BhY2VyLCBTdGFjaywgVlN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbi8vIGNvbnN0IHZvdGluZ0VuZHBvaW50ID0gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93ZWItYXQtYmVya2VsZXkvZmEyMi1mcm9udGVuZC1hcGktZW5kcG9pbnQvbWFpbi9kYXRhLmpzb24nXG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbi8vICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh2b3RpbmdFbmRwb2ludCk7XG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4vLyAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBkYXRhLnZvdGluZztcblxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICAgIHByb3BzOiB7IHVwZGF0ZWREYXRhIH1cbi8vICAgICB9XG4vLyB9XG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWb3RpbmcoeyB1cGRhdGVkRGF0YSB9KSB7XG4gXG4vLyAgICAgbGV0IHRtcCA9IFtdO1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlZERhdGEubGVuZ3RoOyBpICs9IDEpIHtcbi8vICAgICAgICAgdG1wW2ldID0gdXBkYXRlZERhdGFbaV0uc2NvcmU7XG4vLyAgICAgfVxuLy8gICAgIGNvbnN0IFtjb21wZXRpdG9ycywgc2V0Q29tcGV0aXRvcnNdID0gdXNlU3RhdGUodG1wKTtcblxuIFxuLy8gICAgIGZ1bmN0aW9uIHN1YlNjb3JlKGkpe1xuLy8gICAgICAgICBjb25zdCB0bXBDaGFuZ2UgPSBjb21wZXRpdG9yc1tpXSAtIDE7XG4vLyAgICAgICAgIGxldCB0bXBBcnJheSA9IFtdXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGV0aXRvcnMubGVuZ3RoOyBpICs9IDEpIHtcbi8vICAgICAgICAgICAgIHRtcEFycmF5W2ldID0gY29tcGV0aXRvcnNbaV07XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdG1wQXJyYXlbaV0gPSB0bXBDaGFuZ2Vcbi8vICAgICAgICAgc2V0Q29tcGV0aXRvcnModG1wQXJyYXkpXG4vLyAgICAgICAgIH1cblxuLy8gICAgIC8vcmFuIGZvciBsb29wIGFnYWluIGJlY2F1c2UgaWYgSSB3ZXJlIHRvIHNldCB0aGUgdGVtcCBhcnJheSBlcXVhbCB0byB0aGUgZXhhY3Qgc2FtZSBjb21wZXRpdG9ycyBhcnJheSByZWFjdFxuLy8gICAgIGZ1bmN0aW9uIGFkZFNjb3JlKGkpe1xuLy8gICAgICAgICBjb25zdCB0bXBDaGFuZ2UgPSBjb21wZXRpdG9yc1tpXSArIDE7XG4vLyAgICAgICAgIGxldCB0bXBBcnJheSA9IFtdXG4vLyAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcGV0aXRvcnMubGVuZ3RoOyBpICs9IDEpIHtcbi8vICAgICAgICAgICAgIHRtcEFycmF5W2ldID0gY29tcGV0aXRvcnNbaV07XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICB0bXBBcnJheVtpXSA9IHRtcENoYW5nZVxuLy8gICAgICAgICBzZXRDb21wZXRpdG9ycyh0bXBBcnJheSlcbi8vICAgICAgICAgfVxuICAgIFxuLy8gICAgIHJldHVybihcbi8vICAgICAgICAgPD5cbi8vICAgICAgICAgPE5hdkJhci8+XG4vLyAgICAgICAgIDxCb3ggcGFkZGluZz1cIjUwcHhcIiBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtZXZlbmx5XCIgZmxleERpcmVjdGlvbj1cInJvd1wiICA+XG4vLyAgICAgICAgIHt1cGRhdGVkRGF0YS5tYXAocmVzdWx0ID0+IHsgXG4vLyAgICAgICAgICAgICBjb25zdCBpID0gdXBkYXRlZERhdGEuaW5kZXhPZihyZXN1bHQpO1xuLy8gICAgICAgICByZXR1cm4gKCBcbi8vICAgICAgICAgICAgIDw+XG4vLyAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cInJvd1wiID5cbi8vICAgICAgICAgICAgICAgICA8Qm94IGtleT17cmVzdWx0Lm5hbWV9PlxuLy8gICAgICAgICAgICAgICAgIDxJbWFnZSBfaG92ZXI9e3sgYm9yZGVyQ29sb3I6IFwiI0YxRURERlwiLCBiZzogXCIjRjFFRERGXCIgfX0gYmFja2dyb3VuZENvbG9yPVwid2hpdGVcIiAgcGFkZGluZ0xlZnQ9XCI1MHB4XCIgcGFkZGluZz1cIjUwcHhcIiAgYm94U2l6ZT0nMzAwcHgnIG9iamVjdEZpdD0nY292ZXInIHNyYz17cmVzdWx0LmltYWdlfSBhbHQ9J2NvbXBldGl0b3IgaW1hZ2Ugc291cmNlJyAvPlxuLy8gICAgICAgICAgICAgICAgIDxCb3ggYmFja2dyb3VuZENvbG9yPVwiI0YxRURERlwiIHJvdW5kZWQ9J2xnJyA+IFxuLy8gICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz0naSc+IHtyZXN1bHQubmFtZX0gPC9UZXh0PlxuLy8gICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4vLyAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdiJz4ge2NvbXBldGl0b3JzW2ldfSA8L1RleHQ+XG5cbi8vICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuXG4vLyAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcm91bmRlZD0nbGcnIGNvbG9yU2NoZW1lPVwiI0VGRENCNlwiIG9uQ2xpY2s9eygpID0+IGFkZFNjb3JlKGkpfT4gKyA8L0J1dHRvbj5cbi8vICAgICAgICAgICAgICAgICAgICAge1wiICAgICAgICAgICAgICAgICBcIn1cbi8vICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiByb3VuZGVkPSdsZycgY29sb3JTY2hlbWU9XCIjRkVGQ0JGXCIgb25DbGljaz17KCkgPT4gc3ViU2NvcmUoaSl9PiAtIDwvQnV0dG9uPlxuLy8gICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICBcbi8vICAgICAgICAgICAgICAgICA8L0JveD5cbi8vICAgICAgICAgICAgIDwvQm94PlxuLy8gICAgICAgICAgICAgPC8+XG4vLyAgICAgICAgICAgICApXG4vLyAgICAgICAgIH0sKX1cbi8vICAgICAgICAgPC9Cb3g+XG4vLyAgICAgICAgIDwvPlxuLy8gICAgICk7XG4vLyB9XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJlZiIsIk5hdkJhciIsIkJveCIsIkltYWdlIiwiQnV0dG9uIiwiSGVhZGluZyIsIlRleHQiLCJIU3RhY2siLCJTcGFjZXIiLCJTdGFjayIsIlZTdGFjayIsInVzZU91dHNpZGVDbGljayIsIlZvdGluZyIsInVwZGF0ZWREYXRhIiwic3ViU2NvcmUiLCJpIiwidG1wQ2hhbmdlIiwiY29tcGV0aXRvcnMiLCJ0bXBBcnJheSIsImxlbmd0aCIsInNldENvbXBldGl0b3JzIiwiYWRkU2NvcmUiLCJ0bXAiLCJzY29yZSIsInJlZiIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJoYW5kbGVyIiwiZm9udFNpemUiLCJhcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmdUb3AiLCJvbkNsaWNrIiwiZmxleERpcmVjdGlvbiIsIm1hcCIsInJlc3VsdCIsImluZGV4T2YiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaXplIiwicm91bmRlZFRvcCIsImJveFNoYWRvdyIsIm9iamVjdEZpdCIsInNyYyIsImltYWdlIiwiYWx0Iiwicm91bmRlZEJvdHRvbSIsImZsZXgiLCJuYW1lIiwiYmdDb2xvciIsIl9ob3ZlciIsImJnIiwiYm9yZGVyLXJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/voting.js\n"));

/***/ })

});