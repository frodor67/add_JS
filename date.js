window.addEventListener('DOMContentLoaded', () => {
    let timeOfDay, ending, thisDay, currentTime, leftDayToNewYear;
    const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        date = new Date();
    const getTimeOfDay = () => {
        const hours = date.getHours();
        if (22 < hours < 6) {
            timeOfDay = 'ночи';
            ending = 'ой';
        } else if (6 < hours <= 10) {
            timeOfDay = 'утро';
            ending = 'ое';
        } else if (10 < hours <= 18) {
            timeOfDay = 'день';
            ending = 'ый';
        } else if (18 < hours <= 22) {
            timeOfDay = 'вечер';
            ending = 'ый';
        }

        week.forEach(elem => {
            elem = week.indexOf(elem);
            if (elem === date.getDay()) {
                thisDay = week[elem];
            }
        });

        currentTime = date.toLocaleTimeString('en');

    };

    const getDayToNewYear = () => {
        const dateNewYear = new Date('01 january 2022');
        leftDayToNewYear = Math.floor((dateNewYear - date) / 1000 / 60 / 60 / 24);
    };
    getTimeOfDay();
    getDayToNewYear();

    const div = document.querySelector('.date-now');

    div.innerHTML = `<p>Добр${ending} ${timeOfDay}!</p>
                    <p>Сегодня: ${thisDay}</p>
                    <p>Текущее время:${currentTime}</p>
                    <p>До нового года осталось ${leftDayToNewYear} дней</p>`;
});
