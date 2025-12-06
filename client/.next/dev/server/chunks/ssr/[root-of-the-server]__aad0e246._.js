module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/components/Nav.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "nav",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.href,
                        className: idActive === item.id ? "active" : "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
const __TURBOPACK__default__export__ = Nav;
}),
"[project]/src/app/safety/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Nav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Nav.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Safety = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("first-aid");
    const [openBlock, setOpenBlock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, `empty-${index}`, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 336,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        }
        const isHeader = !line.startsWith("•") && !line.startsWith("  ") && !/^\d+\./.test(line);
        const isImportant = line.startsWith("Важно:") || line.startsWith("Совет:") || line.startsWith("Правило:") || line.startsWith("Тревожные признаки:");
        if (isHeader) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "content-header",
                children: line
            }, `header-${index}`, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 349,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (isImportant) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "important-line",
                children: line
            }, `important-${index}`, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 357,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "content-line",
            children: line
        }, `line-${index}`, false, {
            fileName: "[project]/src/app/safety/page.jsx",
            lineNumber: 364,
            columnNumber: 4
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "safety",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "safety-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "emergency-block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "emergency-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/safety/page.jsx",
                                                lineNumber: 391,
                                                columnNumber: 9
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "emergency-content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "emergency-title",
                                            children: "Экстренная помощь - 112"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/safety/page.jsx",
                                            lineNumber: 396,
                                            columnNumber: 8
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "safety-tabs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `tab-button ${activeTab === "first-aid" ? "active first-aid" : ""}`,
                                    onClick: ()=>handleTabClick("first-aid"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                        cx: "12",
                                                        cy: "12",
                                                        r: "10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 425,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "12",
                                                        y1: "8",
                                                        x2: "12",
                                                        y2: "16"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 426,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `tab-button ${activeTab === "survival" ? "active survival" : ""}`,
                                    onClick: ()=>handleTabClick("survival"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tab-icon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                        lineNumber: 450,
                                                        columnNumber: 10
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "safety-content",
                            children: activeData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `safety-block ${openBlock === item.id ? "open" : ""}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "block-header",
                                            onClick: ()=>handleBlockClick(item.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "block-header-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `block-icon ${activeTab === "first-aid" ? "first-aid" : "survival"}`,
                                                            children: activeTab === "first-aid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                        cx: "12",
                                                                        cy: "12",
                                                                        r: "10"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                                        lineNumber: 488,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                                        x1: "12",
                                                                        y1: "8",
                                                                        x2: "12",
                                                                        y2: "16"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                                        lineNumber: 489,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
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
                                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
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
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/safety/page.jsx",
                                                                        lineNumber: 504,
                                                                        columnNumber: 14
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "block-title-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "block-title",
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/safety/page.jsx",
                                                                    lineNumber: 510,
                                                                    columnNumber: 12
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "block-arrow",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "block-content",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Nav$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                idActive: 4
            }, void 0, false, {
                fileName: "[project]/src/app/safety/page.jsx",
                lineNumber: 543,
                columnNumber: 4
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Safety;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__aad0e246._.js.map