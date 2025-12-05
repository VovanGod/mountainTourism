(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/Nav.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const Nav = ({ idActive })=>{
    const menuItems = [
        {
            id: 1,
            href: "/",
            icon: "/homePage/home.svg",
            alt: "home",
            text: "Главная"
        },
        {
            id: 2,
            href: "/hiking",
            icon: "/homePage/routes.svg",
            alt: "routes",
            text: "Маршруты"
        },
        {
            id: 3,
            href: "/animals",
            icon: "/homePage/animals.svg",
            alt: "animals",
            text: "Животные"
        },
        {
            id: 4,
            href: "/safety",
            icon: "/homePage/safety.svg",
            alt: "safety",
            text: "Безопасность"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "nav",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.href,
                        className: idActive === item.id ? "active" : "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.icon,
                                alt: item.alt
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/Nav.jsx",
                                lineNumber: 45,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            item.text
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Nav.jsx",
                        lineNumber: 41,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, item.id, false, {
                    fileName: "[project]/src/app/components/Nav.jsx",
                    lineNumber: 40,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Nav.jsx",
            lineNumber: 38,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Nav.jsx",
        lineNumber: 37,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Nav;
const __TURBOPACK__default__export__ = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/hiking/ListHiking.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/hiking/ListHiking.jsx
__turbopack_context__.s([
    "default",
    ()=>ListHiking
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
// Компонент для отображения звезд сложности
const DifficultyStars = ({ level })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "difficulty-stars",
        children: [
            [
                ...Array(5)
            ].map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: index < level ? "rgba(184, 103, 46, 1)" : "rgba(229, 235, 224, 1)",
                    stroke: "rgba(184, 103, 46, 1)",
                    strokeWidth: "1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                        points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                        lineNumber: 23,
                        columnNumber: 6
                    }, ("TURBOPACK compile-time value", void 0))
                }, index, false, {
                    fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                    lineNumber: 11,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "difficulty-text",
                children: [
                    level === 1 && "Легкий",
                    level === 2 && "Простой",
                    level === 3 && "Средний",
                    level === 4 && "Сложный",
                    level === 5 && "Эксперт"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                lineNumber: 26,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DifficultyStars;
function ListHiking({ routes = [] }) {
    // Если маршрутов нет после фильтрации
    if (routes.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "list-hiking",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "no-results",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "64",
                            height: "64",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "rgba(184, 103, 46, 0.5)",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "12",
                                    cy: "12",
                                    r: "10"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                    lineNumber: 55,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "8",
                                    x2: "12",
                                    y2: "12"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                    lineNumber: 56,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "12",
                                    y1: "16",
                                    x2: "12.01",
                                    y2: "16"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                    lineNumber: 57,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                            lineNumber: 44,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            children: "Маршруты не найдены"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                            lineNumber: 59,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Попробуйте изменить параметры фильтрации"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                            lineNumber: 60,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                    lineNumber: 43,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                lineNumber: 42,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
            lineNumber: 41,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "list-hiking",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hiking-grid",
                children: routes.map((route)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/hiking/${route.id}`,
                        className: "hiking-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-image",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "image-placeholder",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "48",
                                            height: "48",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "rgba(184, 103, 46, 0.3)",
                                            strokeWidth: "1",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m8 3 4 8 5-5 5 15H2L8 3z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                lineNumber: 90,
                                                columnNumber: 11
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                            lineNumber: 79,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                        lineNumber: 78,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-badge",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                route.distance_km,
                                                " км"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                            lineNumber: 94,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                        lineNumber: 93,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "difficulty-badge",
                                        children: [
                                            route.difficulty,
                                            "/5"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                        lineNumber: 97,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                lineNumber: 77,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "card-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "card-title",
                                        children: route.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                        lineNumber: 101,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-meta",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "rgba(184, 103, 46, 1)",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                                lineNumber: 116,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "12 6 12 12 16 14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                                lineNumber: 117,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                        lineNumber: 105,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            route.duration_hours,
                                                            " ч"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                        lineNumber: 119,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                lineNumber: 104,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "meta-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "16",
                                                        height: "16",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "rgba(184, 103, 46, 1)",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M12 2v20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                                lineNumber: 134,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m17 5-5-3-5 3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                                lineNumber: 135,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m17 19-5 3-5-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                                lineNumber: 136,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M2 12h20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                                lineNumber: 137,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: route.elevation
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                lineNumber: 122,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                        lineNumber: 103,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-difficulty",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DifficultyStars, {
                                            level: route.difficulty
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                            lineNumber: 144,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                        lineNumber: 143,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "card-description",
                                        children: route.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                        lineNumber: 147,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-footer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "details-button",
                                            children: [
                                                "Подробнее",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "9 18 15 12 9 6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                        lineNumber: 163,
                                                        columnNumber: 12
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                            lineNumber: 150,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                        lineNumber: 149,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                                lineNumber: 100,
                                columnNumber: 8
                            }, this)
                        ]
                    }, route.id, true, {
                        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                        lineNumber: 72,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
                lineNumber: 70,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
            lineNumber: 69,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/hiking/ListHiking.jsx",
        lineNumber: 68,
        columnNumber: 3
    }, this);
}
_c1 = ListHiking;
var _c, _c1;
__turbopack_context__.k.register(_c, "DifficultyStars");
__turbopack_context__.k.register(_c1, "ListHiking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/hiking/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Nav.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$hiking$2f$ListHiking$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/hiking/ListHiking.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Hiking = ()=>{
    _s();
    // Состояния для фильтров
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        difficulty: "all",
        maxDistance: "",
        maxDuration: ""
    });
    // Состояния для временных значений фильтров (чтобы не терять фокус)
    const [tempFilters, setTempFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        maxDistance: "",
        maxDuration: ""
    });
    // Состояние для отфильтрованных маршрутов
    const [filteredRoutes, setFilteredRoutes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Состояние для кастомного селекта
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const distanceInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const durationInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fetchTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const difficultyOptions = [
        {
            value: "all",
            label: "Все маршруты"
        },
        {
            value: "1",
            label: "Легкий (1 звезда)"
        },
        {
            value: "2",
            label: "Простой (2 звезды)"
        },
        {
            value: "3",
            label: "Средний (3 звезды)"
        },
        {
            value: "4",
            label: "Сложный (4 звезды)"
        },
        {
            value: "5",
            label: "Эксперт (5 звезд)"
        }
    ];
    // Функция для загрузки маршрутов с сервера
    const fetchRoutes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Hiking.useCallback[fetchRoutes]": async (currentFilters = filters)=>{
            setLoading(true);
            setError(null);
            try {
                // Собираем параметры запроса
                const params = new URLSearchParams();
                if (currentFilters.difficulty !== "all") {
                    params.append("difficulty", currentFilters.difficulty);
                }
                if (currentFilters.maxDistance) {
                    params.append("maxDistance", currentFilters.maxDistance);
                }
                if (currentFilters.maxDuration) {
                    params.append("maxDuration", currentFilters.maxDuration);
                }
                // Запрос к нашему серверу
                const response = await fetch(`http://localhost:5001/api/routes?${params}`);
                if (!response.ok) {
                    throw new Error(`Ошибка сервера: ${response.status}`);
                }
                const data = await response.json();
                // Преобразуем данные из БД в формат для компонента
                const formattedData = data.map({
                    "Hiking.useCallback[fetchRoutes].formattedData": (route)=>({
                            id: route.id,
                            title: route.title,
                            difficulty: route.difficulty,
                            distance: parseFloat(route.distance_km),
                            duration: parseFloat(route.duration_hours),
                            elevation: route.elevation,
                            description: route.description,
                            image: route.image_url || "/hiking/default.jpg",
                            distance_km: route.distance_km,
                            duration_hours: route.duration_hours,
                            full_description: route.full_description,
                            equipment: route.equipment,
                            how_to_get: route.how_to_get,
                            attractions: route.attractions,
                            region: route.region,
                            best_season: route.best_season
                        })
                }["Hiking.useCallback[fetchRoutes].formattedData"]);
                setFilteredRoutes(formattedData);
            } catch (err) {
                console.error("Ошибка при загрузке маршрутов:", err);
                setError("Не удалось загрузить маршруты. Проверьте подключение к серверу.");
                setFilteredRoutes([]);
            } finally{
                setLoading(false);
            }
        }
    }["Hiking.useCallback[fetchRoutes]"], []);
    // Загружаем маршруты при первом рендере
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hiking.useEffect": ()=>{
            fetchRoutes();
        }
    }["Hiking.useEffect"], [
        fetchRoutes
    ]);
    // Обработчик для селекта сложности (без проблем с фокусом)
    const handleDifficultyChange = (value)=>{
        const newFilters = {
            ...filters,
            difficulty: value
        };
        setFilters(newFilters);
        // Запускаем запрос с debounce
        if (fetchTimeoutRef.current) {
            clearTimeout(fetchTimeoutRef.current);
        }
        fetchTimeoutRef.current = setTimeout(()=>{
            fetchRoutes(newFilters);
        }, 300);
    };
    // Обработчик для числовых инпутов с сохранением фокуса
    const handleNumericInputChange = (e, filterName, inputRef, maxValue)=>{
        const value = e.target.value;
        // Обновляем временное значение
        setTempFilters((prev)=>({
                ...prev,
                [filterName]: value
            }));
        // Проверяем валидность ввода
        if (value === "" || /^[\d.,]*$/.test(value)) {
            const normalizedValue = value.replace(",", ".");
            // Проверяем, что значение не превышает максимальное
            const numValue = parseFloat(normalizedValue);
            if (normalizedValue === "" || numValue >= 0 && numValue <= maxValue) {
                // Обновляем фильтры с debounce
                const newFilters = {
                    ...filters,
                    [filterName]: normalizedValue
                };
                setFilters(newFilters);
                // Очищаем предыдущий таймаут
                if (fetchTimeoutRef.current) {
                    clearTimeout(fetchTimeoutRef.current);
                }
                // Запускаем новый таймаут для запроса
                fetchTimeoutRef.current = setTimeout(()=>{
                    fetchRoutes(newFilters);
                }, 500); // 500ms debounce
            }
        }
        // Сохраняем фокус
        if (inputRef && inputRef.current) {
            // Используем requestAnimationFrame для гарантии фокуса
            requestAnimationFrame(()=>{
                if (document.activeElement !== inputRef.current) {
                    inputRef.current.focus();
                }
            });
        }
    };
    // Обработчик blur для инпутов
    const handleInputBlur = (e, filterName, maxValue)=>{
        const value = e.target.value;
        // Проверяем валидность значения
        if (value === "" || parseFloat(value) >= 0 && parseFloat(value) <= maxValue) {
            return;
        }
        // Если значение невалидно, сбрасываем
        const newFilters = {
            ...filters,
            [filterName]: ""
        };
        setFilters(newFilters);
        setTempFilters((prev)=>({
                ...prev,
                [filterName]: ""
            }));
        // Запускаем запрос
        if (fetchTimeoutRef.current) {
            clearTimeout(fetchTimeoutRef.current);
        }
        fetchRoutes(newFilters);
    };
    // Функция сброса всех фильтров
    const handleResetFilters = ()=>{
        const resetFilters = {
            difficulty: "all",
            maxDistance: "",
            maxDuration: ""
        };
        setFilters(resetFilters);
        setTempFilters({
            maxDistance: "",
            maxDuration: ""
        });
        // Очищаем таймаут
        if (fetchTimeoutRef.current) {
            clearTimeout(fetchTimeoutRef.current);
        }
        fetchRoutes(resetFilters);
    };
    // Закрытие селекта при клике вне его
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hiking.useEffect": ()=>{
            const handleClickOutside = {
                "Hiking.useEffect.handleClickOutside": (event)=>{
                    if (selectRef.current && !selectRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["Hiking.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Hiking.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Hiking.useEffect"];
        }
    }["Hiking.useEffect"], []);
    // Очистка таймаута при размонтировании
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hiking.useEffect": ()=>{
            return ({
                "Hiking.useEffect": ()=>{
                    if (fetchTimeoutRef.current) {
                        clearTimeout(fetchTimeoutRef.current);
                    }
                }
            })["Hiking.useEffect"];
        }
    }["Hiking.useEffect"], []);
    const selectedLabel = difficultyOptions.find((opt)=>opt.value === filters.difficulty)?.label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hiking",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "header-with-reset",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "hiking-title",
                                    children: "Маршруты"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 254,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                (filters.difficulty !== "all" || filters.maxDistance || filters.maxDuration) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "reset-filters-btn",
                                    onClick: handleResetFilters,
                                    disabled: loading,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 6h18"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 274,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 275,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 276,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "10",
                                                    y1: "11",
                                                    x2: "10",
                                                    y2: "17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 277,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "14",
                                                    y1: "11",
                                                    x2: "14",
                                                    y2: "17"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 263,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Сброс фильтров"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 258,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hiking/page.jsx",
                            lineNumber: 253,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filters",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "filter",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "filter-header",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "filter-icon",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "rgba(184, 103, 46, 1)",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "m8 3 4 8 5-5 5 15H2L8 3z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hiking/page.jsx",
                                                            lineNumber: 301,
                                                            columnNumber: 11
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/hiking/page.jsx",
                                                        lineNumber: 290,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Сложность"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/hiking/page.jsx",
                                                        lineNumber: 303,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                lineNumber: 289,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 288,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "custom-select-wrapper",
                                            ref: selectRef,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `custom-select ${isOpen ? "open" : ""} ${loading ? "disabled" : ""}`,
                                                    onClick: ()=>!loading && setIsOpen(!isOpen),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "selected-value",
                                                            children: selectedLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hiking/page.jsx",
                                                            lineNumber: 314,
                                                            columnNumber: 10
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "select-arrow",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "16",
                                                                height: "16",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "rgba(184, 103, 46, 1)",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                    points: "6 9 12 15 18 9"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                                    lineNumber: 327,
                                                                    columnNumber: 12
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                                lineNumber: 316,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/hiking/page.jsx",
                                                            lineNumber: 315,
                                                            columnNumber: 10
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                isOpen && !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "dropdown-menu",
                                                    children: difficultyOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `dropdown-item ${filters.difficulty === option.value ? "selected" : ""}`,
                                                            onClick: ()=>{
                                                                handleDifficultyChange(option.value);
                                                                setIsOpen(false);
                                                            },
                                                            children: option.label
                                                        }, option.value, false, {
                                                            fileName: "[project]/src/app/hiking/page.jsx",
                                                            lineNumber: 335,
                                                            columnNumber: 12
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 333,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 307,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 287,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "filter",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "filter-header",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "filter-icon",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "rgba(184, 103, 46, 1)",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                                lineNumber: 368,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m14.5 12.5 2-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                                lineNumber: 369,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m11.5 9.5 2-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                                lineNumber: 370,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m8.5 6.5 2-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                                lineNumber: 371,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "m17.5 15.5 2-2"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                                lineNumber: 372,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/hiking/page.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Макс. расстояние, км"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/hiking/page.jsx",
                                                        lineNumber: 374,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                lineNumber: 356,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 355,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "filter-input-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: distanceInputRef,
                                                    type: "text",
                                                    inputMode: "decimal",
                                                    className: "filter-input",
                                                    placeholder: "0-100",
                                                    value: tempFilters.maxDistance,
                                                    onChange: (e)=>handleNumericInputChange(e, "maxDistance", distanceInputRef, 100),
                                                    onBlur: (e)=>handleInputBlur(e, "maxDistance", 100),
                                                    disabled: loading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 378,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "input-unit",
                                                    children: "км"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 396,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 377,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 354,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "filter",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "filter-header",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "filter-icon",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "24",
                                                        height: "24",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "rgba(184, 103, 46, 1)",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                                lineNumber: 415,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                points: "12 6 12 12 16 14"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                                lineNumber: 416,
                                                                columnNumber: 11
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/hiking/page.jsx",
                                                        lineNumber: 404,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Макс. время, ч"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/hiking/page.jsx",
                                                        lineNumber: 418,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/hiking/page.jsx",
                                                lineNumber: 403,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 402,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "filter-input-wrapper",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ref: durationInputRef,
                                                    type: "text",
                                                    inputMode: "decimal",
                                                    className: "filter-input",
                                                    placeholder: "0-24",
                                                    value: tempFilters.maxDuration,
                                                    onChange: (e)=>handleNumericInputChange(e, "maxDuration", durationInputRef, 24),
                                                    onBlur: (e)=>handleInputBlur(e, "maxDuration", 24),
                                                    disabled: loading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 422,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "input-unit",
                                                    children: "ч"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/hiking/page.jsx",
                                                    lineNumber: 440,
                                                    columnNumber: 9
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 421,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 401,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hiking/page.jsx",
                            lineNumber: 285,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "filter-error-message",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "10"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 459,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "8",
                                            x2: "12",
                                            y2: "12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 460,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "12",
                                            y1: "16",
                                            x2: "12.01",
                                            y2: "16"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 461,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 448,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                error
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hiking/page.jsx",
                            lineNumber: 447,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)),
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "loading-indicator",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "loading-spinner"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 469,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Загрузка маршрутов..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 470,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/hiking/page.jsx",
                            lineNumber: 468,
                            columnNumber: 7
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "results-counter",
                                    children: [
                                        "Найдено маршрутов:",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "count",
                                            children: filteredRoutes.length
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/hiking/page.jsx",
                                            lineNumber: 477,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 475,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$hiking$2f$ListHiking$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    routes: filteredRoutes
                                }, void 0, false, {
                                    fileName: "[project]/src/app/hiking/page.jsx",
                                    lineNumber: 480,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/hiking/page.jsx",
                    lineNumber: 252,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/hiking/page.jsx",
                lineNumber: 251,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                idActive: 2
            }, void 0, false, {
                fileName: "[project]/src/app/hiking/page.jsx",
                lineNumber: 486,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Hiking, "Y71twdgujdR7fsO+/vcxLRgzYdI=");
_c = Hiking;
const __TURBOPACK__default__export__ = Hiking;
var _c;
__turbopack_context__.k.register(_c, "Hiking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_eda9752a._.js.map