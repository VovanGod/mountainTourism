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
                                lineNumber: 44,
                                columnNumber: 8
                            }, ("TURBOPACK compile-time value", void 0)),
                            item.text
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/Nav.jsx",
                        lineNumber: 40,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                }, item.id, false, {
                    fileName: "[project]/src/app/components/Nav.jsx",
                    lineNumber: 39,
                    columnNumber: 6
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/src/app/components/Nav.jsx",
            lineNumber: 37,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/components/Nav.jsx",
        lineNumber: 36,
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
"[project]/src/app/safety/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Nav.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Safety = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("first-aid");
    const [openBlock, setOpenBlock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const firstAidData = [
        {
            id: "bleeding",
            title: "Остановка кровотечения",
            description: "Как правильно остановить кровотечение в походных условиях",
            content: [
                "Алгоритм действий при кровотечении:",
                "1. Оцените тип кровотечения:",
                "Капиллярное - кровь сочится по всей поверхности раны",
                "Венозное - кровь темная, вытекает равномерной струей",
                "Артериальное - кровь алая, пульсирующая струя, опаснее всего",
                "2. Прямое давление на рану:",
                "Используйте чистую ткань, бинт или подручные средства",
                "Давите непрерывно 10-15 минут",
                "Не поднимайте повязку для проверки",
                "3. Наложение жгута (только при артериальном кровотечении):",
                "Используйте резиновый жгут, ремень или прочную ткань",
                "Накладывайте выше раны на 5-7 см",
                "Под жгут подложите записку с временем наложения",
                "Максимальное время наложения - 1 час летом, 30 минут зимой",
                "4. Обработка раны:",
                "Промойте рану чистой водой",
                "Обработайте антисептиком (перекись водорода, хлоргексидин)",
                "Наложите стерильную повязку",
                "Важно: При сильном кровотечении немедленно вызывайте помощь!"
            ]
        },
        {
            id: "fracture",
            title: "Переломы и вывихи",
            description: "Правила иммобилизации при травмах опорно-двигательного аппарата",
            content: [
                "Действия при переломах и вывихах:",
                "Общие правила:",
                "Не пытайтесь вправить вывих самостоятельно",
                "Не двигайте пострадавшего без необходимости",
                "Дайте обезболивающее (если нет противопоказаний)",
                "",
                "Иммобилизация (обездвиживание):",
                "1. Подготовка шины:",
                "Используйте палки, лыжи, ветки",
                "Оберните шину мягким материалом",
                "Шина должна фиксировать суставы выше и ниже перелома",
                "2. Наложение шины:",
                "Аккуратно приложите шину к конечности",
                "Фиксируйте бинтами, ремнями или веревкой",
                "Не затягивайте туго - проверяйте пульс ниже повязки",
                "3. Особые случаи:",
                "Перелом позвоночника: Не двигайте пострадавшего!",
                "Перелом ребер: Тугая повязка на выдохе",
                "Открытый перелом: Сначала остановите кровотечение",
                "",
                "Транспортировка:",
                "При травме ног - транспортировка на носилках",
                "При травме рук - поддерживающая повязка",
                "При подозрении на травму позвоночника - жесткие носилки"
            ]
        },
        {
            id: "burn",
            title: "Ожоги и обморожения",
            description: "Первая помощь при термических и холодовых травмах",
            content: [
                "Первая помощь при ожогах:",
                "Степени ожогов:",
                "I степень: Покраснение, боль, отек",
                "II степень: Пузыри с прозрачной жидкостью",
                "III степень: Поражение всех слоев кожи, белый или черный цвет",
                "",
                "Действия:",
                "1. Охлаждение:",
                "Поместите обожженный участок под холодную воду на 15-20 минут",
                "Не используйте лед напрямую",
                "2. Обработка:",
                "Не вскрывайте пузыри",
                "Наложите стерильную повязку",
                "Используйте пантенол или другие противоожоговые средства",
                "3. Запрещено:",
                "Смазывать маслом, жиром, сметаной",
                "Отрывать прилипшую одежду",
                "Прикладывать вату",
                "",
                "Первая помощь при обморожениях:",
                "1. Согревание:",
                "Занесите пострадавшего в тепло",
                "Снимите мокрую одежду",
                "Согревайте постепенно, начиная с туловища",
                "2. Восстановление кровообращения:",
                "Растирайте мягкой тканью до покраснения",
                "Дайте теплое питье",
                "Наложите теплоизолирующую повязку",
                "3. Запрещено:",
                "Растирать снегом",
                "Резко согревать у костра",
                "Вскрывать пузыри"
            ]
        },
        {
            id: "shock",
            title: "Шоковые состояния",
            description: "Распознавание и помощь при травматическом шоке",
            content: [
                "Признаки травматического шока:",
                "Бледная, холодная, влажная кожа",
                "Учащенный слабый пульс",
                "Учащенное поверхностное дыхание",
                "Спутанность сознания или возбуждение",
                "Тошнота, рвота",
                "",
                "Алгоритм действий:",
                "1. Остановить кровотечение - основная причина шока",
                "2. Обезболить - если возможно",
                "3. Уложить пострадавшего:",
                "Ноги приподнять на 30-40 см",
                "Голова на одном уровне с телом или ниже",
                "При травме грудной клетки - полусидячее положение",
                "4. Согреть:",
                "Накрыть одеялом, спальником",
                "Дать теплое сладкое питье (если нет травм живота)",
                "Не давать алкоголь!",
                "5. Мониторинг состояния:",
                "Контролировать пульс каждые 5 минут",
                "Следить за сознанием",
                "Быть готовым к сердечно-легочной реанимации",
                "",
                "Тревожные признаки: Если пострадавший перестает реагировать на боль, зрачки расширены и не реагируют на свет - критическое состояние!"
            ]
        }
    ];
    const survivalData = [
        {
            id: "fire",
            title: "Разведение костра",
            description: "Техники разведения огня в различных условиях",
            content: [
                "Подготовка места для костра:",
                "1. Выбор места:",
                "Вдали от деревьев (минимум 3 метра)",
                "На открытом, но защищенном от ветра месте",
                "На камнях или выкопанной яме",
                "Вдали от сухой травы и мха",
                "2. Подготовка площадки:",
                "Очистите площадку диаметром 2-3 метра",
                "Снимите дерн (можно использовать позже для тушения)",
                "Обложите камнями для теплоотражения",
                "3. Типы костров:",
                '"Шалаш" - для быстрого разогрева, требует много дров',
                '"Колодец" - для длительного горения, экономичный',
                '"Звезда" - для поддержания огня всю ночь',
                '"Нодья" - из бревен, горит до 8 часов',
                "",
                "Этапы разведения огня:",
                "1. Растопка:",
                "Береста, сухая трава, пух растений",
                "Смолистая кора хвойных",
                "Вата, бумага (если есть)",
                "2. Мелкие ветки:",
                "Толщиной с карандаш",
                "Сухие, ломающиеся с хрустом",
                "Укладывать шалашиком над растопкой",
                "3. Крупные дрова:",
                "Постепенно увеличивать толщину",
                "Сухие поленья диаметром до 10 см",
                "Не класть слишком много - нужен доступ воздуха",
                "",
                "Способы добычи огня:",
                "Огниво/зажигалка - самый надежный способ",
                "Линза/лупа - в солнечную погоду",
                "Огниво из ножа и кремня - искры на трут",
                "Трение дерева о дерево - сложно, требует навыка",
                "",
                "Совет: Всегда носите с собой в непромокаемом пакете сухую растопку и спички/зажигалку!"
            ]
        },
        {
            id: "water",
            title: "Добыча и очистка воды",
            description: "Методы поиска и очистки воды в дикой природе",
            content: [
                "Поиск источников воды:",
                "Природные источники:",
                "Родники и ключи - самая чистая вода",
                "Реки и ручьи - кипятить обязательно",
                "Озера и пруды - возможны загрязнения",
                "",
                "Сбор воды:",
                "Утренняя роса на траве",
                "Дождевая вода в расстеленный тент",
                "Вода из растений (береза, клен весной)",
                "Конденсат на пластике (солнечный дистиллятор)",
                "",
                "Признаки наличия воды:",
                "Скопления комаров и мошек",
                "Влажная почва, зеленые растения",
                "Следы животных, ведущие вниз",
                "Птицы, летящие на водопой утром/вечером",
                "",
                "Очистка воды:",
                "1. Механическая очистка:",
                "Фильтрация через ткань, песок, уголь",
                "Отстаивание 2-3 часа",
                "2. Кипячение:",
                "Кипятить 5-10 минут",
                "На высоте - дольше (вода кипит при меньшей температуре)",
                "3. Химическая очистка:",
                "Таблетки для очистки воды",
                "Йод (5-10 капель на литр, выдержать 30 минут)",
                "Марганцовка (до слабо-розового цвета)",
                "4. Дистилляция:",
                "Испарение и конденсация",
                "Удаляет все примеси, включая соли",
                "",
                "Обеззараживание в полевых условиях:",
                "Самодельный фильтр: ткань - песок - уголь - гравий",
                "Солнечная дезинфекция: прозрачная бутылка на солнце 6 часов",
                "Кипячение с углем: улучшает вкус"
            ]
        },
        {
            id: "shelter",
            title: "Устройство укрытия",
            description: "Построение убежищ для защиты от непогоды",
            content: [
                "Выбор места для укрытия:",
                "Безопасность:",
                "Вдали от сухих деревьев, которые могут упасть",
                "Не в руслах ручьев и оврагов",
                "Не на вершинах холмов (молнии, ветер)",
                "",
                "Комфорт:",
                "Рядом с водой, но не слишком близко",
                "На сухом месте, с небольшим уклоном",
                "Защищенное от преобладающих ветров",
                "Утреннее солнце для быстрого прогрева",
                "",
                "Ресурсы:",
                "Наличие строительных материалов",
                "Дрова для костра поблизости",
                "Маскировка от животных и насекомых",
                "",
                "Типы укрытий:",
                "1. Шатровое укрытие:",
                "Простое и быстрое",
                "Нужен тент или пленка",
                "Защищает от дождя и ветра",
                "2. Навес:",
                "Опора на дерево или жерди",
                "Крыша из веток, коры, лапника",
                "Защита с одной стороны",
                "3. Землянка/снежная яма:",
                "Хорошая теплоизоляция",
                "Требует много времени и сил",
                "Опасна обвалом",
                "4. Иглу:",
                "Из снежных блоков",
                "Температура внутри до +5°C при -30°C снаружи",
                "Требует навыка строительства",
                "",
                "Утепление укрытия:",
                "Пол: лапник, сухая трава, мох (слой 20-30 см)",
                "Стены: плетень из веток с утеплителем",
                "Крыша: несколько слоев с воздушными прослойками",
                "Вход: с подветренной стороны, завеса из ткани",
                "",
                "Правило: Укрытие должно быть не больше необходимого - меньше объем, легче обогреть!"
            ]
        },
        {
            id: "navigation",
            title: "Ориентирование на местности",
            description: "Способы определения сторон света без компаса",
            content: [
                "Определение сторон света:",
                "По солнцу и часам:",
                "1. Расположите часы горизонтально",
                "2. Направьте часовую стрелку на солнце",
                '3. Угол между часовой стрелкой и цифрой "1" (13:00) разделите пополам',
                "4. Биссектриса укажет направление на юг (до 18:00)",
                "",
                "По звездам (Северное полушарие):",
                "Полярная звезда: всегда указывает на север",
                "Найдите Большую Медведицу (ковш)",
                'От крайних звезд "ковша" отложите 5 расстояний',
                "Попадете на Полярную звезду (хвост Малой Медведицы)",
                "",
                "По природным признакам:",
                "Деревья:",
                "С северной стороны больше мха и лишайников",
                "С южной стороны кора светлее и чище",
                "С юга ветви пышнее и длиннее",
                "Муравейники: пологий склон с юга, крутой с севера",
                "Ягоды и фрукты: раньше созревают с южной стороны",
                "Снег: быстрее тает на южных склонах",
                "",
                "Составление простого плана местности:",
                "1. Выберите ориентир (высокая гора, река)",
                "2. Определите стороны света",
                "3. Отметьте на плане основные объекты",
                "4. Укажите примерные расстояния",
                "5. Отметьте свой маршрут",
                "",
                "Правила движения по азимуту:",
                "Выбирайте заметные промежуточные ориентиры",
                "Сверяйтесь с компасом каждые 100-200 метров",
                "При обходе препятствий возвращайтесь на прежний азимут",
                "Ведение записей о пройденном пути",
                "",
                "Важно: При потере ориентации остановитесь, оцените ситуацию, не паникуйте. Лучше вернуться по своим следам."
            ]
        }
    ];
    const handleTabClick = (tab)=>{
        setActiveTab(tab);
        setOpenBlock(null);
    };
    const handleBlockClick = (blockId)=>{
        setOpenBlock(openBlock === blockId ? null : blockId);
    };
    const activeData = activeTab === "first-aid" ? firstAidData : survivalData;
    const formatContentLine = (line, index)=>{
        if (!line.trim()) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, `empty-${index}`, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 336,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        }
        const isHeader = !line.startsWith("•") && !line.startsWith("  ") && !/^\d+\./.test(line);
        const isImportant = line.startsWith("Важно:") || line.startsWith("Совет:") || line.startsWith("Правило:") || line.startsWith("Тревожные признаки:");
        if (isHeader) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "content-header",
                children: line
            }, `header-${index}`, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 349,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (isImportant) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "important-line",
                children: line
            }, `important-${index}`, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 357,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-line",
            children: line
        }, `line-${index}`, false, {
            fileName: "[project]/src/app/safety/page.jsx",
            lineNumber: 364,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "safety",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "safety-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "safety-title",
                                children: "Безопасность"
                            }, void 0, false, {
                                fileName: "[project]/src/app/safety/page.jsx",
                                lineNumber: 375,
                                columnNumber: 7
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/safety/page.jsx",
                            lineNumber: 374,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "emergency-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "emergency-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/safety/page.jsx",
                                                lineNumber: 391,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "m9 12 2 2 4-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/safety/page.jsx",
                                                lineNumber: 392,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/safety/page.jsx",
                                        lineNumber: 380,
                                        columnNumber: 8
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/safety/page.jsx",
                                    lineNumber: 379,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "emergency-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "emergency-title",
                                            children: "Экстренная помощь - 112"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 396,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "emergency-text",
                                            children: "В любой критической ситуации незамедлительно звоните в МЧС по единому номеру 112. Сообщите оператору точное местоположение, характер происшествия и количество пострадавших. Не вешайте трубку до конца разговора и следуйте инструкциям диспетчера."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 397,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safety/page.jsx",
                                    lineNumber: 395,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safety/page.jsx",
                            lineNumber: 378,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "safety-tabs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `tab-button ${activeTab === "first-aid" ? "active first-aid" : ""}`,
                                    onClick: ()=>handleTabClick("first-aid"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 425,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "8",
                                                        x2: "12",
                                                        y2: "16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 426,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "8",
                                                        y1: "12",
                                                        x2: "16",
                                                        y2: "12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 427,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/safety/page.jsx",
                                                lineNumber: 414,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 413,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab-text",
                                            children: "Первая помощь"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 430,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safety/page.jsx",
                                    lineNumber: 407,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `tab-button ${activeTab === "survival" ? "active survival" : ""}`,
                                    onClick: ()=>handleTabClick("survival"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 450,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                        points: "9 22 9 12 15 12 15 22"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 451,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/safety/page.jsx",
                                                lineNumber: 439,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 438,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab-text",
                                            children: "Выживание"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 454,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/safety/page.jsx",
                                    lineNumber: 432,
                                    columnNumber: 7
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/safety/page.jsx",
                            lineNumber: 406,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "safety-content",
                            children: activeData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `safety-block ${openBlock === item.id ? "open" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "block-header",
                                            onClick: ()=>handleBlockClick(item.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "block-header-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `block-icon ${activeTab === "first-aid" ? "first-aid" : "survival"}`,
                                                            children: activeTab === "first-aid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
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
                                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "12",
                                                                        y1: "8",
                                                                        x2: "12",
                                                                        y2: "16"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "8",
                                                                        y1: "12",
                                                                        x2: "16",
                                                                        y2: "12"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/safety/page.jsx",
                                                                lineNumber: 477,
                                                                columnNumber: 13
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                width: "24",
                                                                height: "24",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                                        lineNumber: 504,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                                        points: "9 22 9 12 15 12 15 22"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                                        lineNumber: 505,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/safety/page.jsx",
                                                                lineNumber: 493,
                                                                columnNumber: 13
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/safety/page.jsx",
                                                            lineNumber: 471,
                                                            columnNumber: 11
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "block-title-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "block-title",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/safety/page.jsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 12
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "block-description",
                                                                    children: item.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/safety/page.jsx",
                                                                    lineNumber: 511,
                                                                    columnNumber: 12
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/safety/page.jsx",
                                                            lineNumber: 509,
                                                            columnNumber: 11
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/safety/page.jsx",
                                                    lineNumber: 470,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "block-arrow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                            points: "6 9 12 15 18 9"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/safety/page.jsx",
                                                            lineNumber: 526,
                                                            columnNumber: 12
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 515,
                                                        columnNumber: 11
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/safety/page.jsx",
                                                    lineNumber: 514,
                                                    columnNumber: 10
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 466,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "block-content",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "content-text",
                                                children: item.content.map((line, idx)=>formatContentLine(line, idx))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/safety/page.jsx",
                                                lineNumber: 532,
                                                columnNumber: 10
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 531,
                                            columnNumber: 9
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, item.id, true, {
                                    fileName: "[project]/src/app/safety/page.jsx",
                                    lineNumber: 460,
                                    columnNumber: 8
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/safety/page.jsx",
                            lineNumber: 458,
                            columnNumber: 6
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/safety/page.jsx",
                    lineNumber: 373,
                    columnNumber: 5
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 372,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Nav$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                idActive: 4
            }, void 0, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 543,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(Safety, "CCM2NBwUyaTavkv9suBhC26DQz0=");
_c = Safety;
const __TURBOPACK__default__export__ = Safety;
var _c;
__turbopack_context__.k.register(_c, "Safety");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_1516fa46._.js.map