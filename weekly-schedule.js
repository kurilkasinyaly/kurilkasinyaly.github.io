var WEEKLY_SCHEDULE = [
    {
        date: '2026-11-24T19:00:00+03:00', // 24.11.2026 21:00 по Казахстану
        name: 'Главная Рулетка',
        image: 'images/вариатор-главная-рулетка.webp',
        bannerImage: 'banners/баннер главная рулетка.webp',
        description: 'Несколько главных активов присутствуют в испытании.'
    },
    {
        date: '2026-12-01T19:00:00+03:00', // 01.12.2026 21:00 по Казахстану
        name: 'Все На Выход',
        image: 'images/вариатор-все-на-выход.webp',
        bannerImage: 'banners/баннер все на выход.webp',
        description: 'Для выхода с испытании дается всего 30 секунд времяни.'
    },
    {
        date: '2026-12-08T19:00:00+03:00', // 08.12.2026 21:00 по Казахстану
        name: 'Вечная Мерзлота',
        image: 'images/вариатор-вечная-мерзлота.webp',
        bannerImage: 'banners/баннер вечная мерзлота.webp',
        description: 'Постоянные замораживающие температуры в испытании. Найдите источники тепла, чтобы согреться.'
    }
];
// ============================================================
// АКТИВНЫЙ ВАРИАТОР НА ТЕКУЩИЙ МОМЕНТ
// ============================================================
function getActiveWeeklyVariator() {
    var now = new Date();
    var active = null;

    for (var i = 0; i < WEEKLY_SCHEDULE.length; i++) {
        var item = WEEKLY_SCHEDULE[i];
        var itemDate = new Date(item.date);
        if (itemDate <= now) {
            active = item;
        } else {
            break;
        }
    }

    if (!active && WEEKLY_SCHEDULE.length > 0) {
        active = WEEKLY_SCHEDULE[0];
    }

    return active;
}

// ============================================================
// СЛЕДУЮЩИЙ ВАРИАТОР
// ============================================================
function getNextWeeklyVariator() {
    var now = new Date();
    for (var i = 0; i < WEEKLY_SCHEDULE.length; i++) {
        if (new Date(WEEKLY_SCHEDULE[i].date) > now) {
            return WEEKLY_SCHEDULE[i];
        }
    }
    return null;
}

// ============================================================
// ЭКСПОРТ
// ============================================================
window.WEEKLY_SCHEDULE = WEEKLY_SCHEDULE;
window.getActiveWeeklyVariator = getActiveWeeklyVariator;
window.getNextWeeklyVariator = getNextWeeklyVariator;
