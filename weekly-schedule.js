var WEEKLY_SCHEDULE = [
    {
        date: '2026-11-10T19:00:00+03:00', // 10.11.2026 21:00 по Казахстану
        name: 'Камеры наблюдения',
        image: 'images/вариатор-камеры-наблюдения.webp',
        bannerImage: 'banners/баннер камеры.webp',
        description: 'Камеры наблюдения установлены по всему испытанию. Обнаружение приведёт к болезненному удару током и оповестит ближайших экс-попов.'
    },
    {
        date: '2026-11-17T19:00:00+03:00', // 17.11.2026 21:00 по Казахстану
        name: 'Токсический Шок',
        image: 'images/вариатор-токсический-шок.webp',
        bannerImage: 'banners/баннер токсик шок.webp',
        description: 'Пространство испытания периодически заполняется токсичным газом, наносящим постоянный урон. Прячьтесь, чтобы выжить.'
    },
    {
        date: '2026-11-24T19:00:00+03:00', // 24.11.2026 21:00 по Казахстану
        name: 'Главная Рулетка',
        image: 'images/вариатор-главная-рулетка.webp',
        bannerImage: 'banners/баннер главная рулетка.webp',
        description: 'Несколько главных активов присутствуют в испытании.'
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
