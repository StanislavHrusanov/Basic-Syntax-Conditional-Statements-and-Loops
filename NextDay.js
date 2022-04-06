function nextDay(year, month, day) {

    if (month === 1 && day === 31) {
        month++;
        day = 1;
    } else if (month === 2 && day === 28) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            day++;
        } else {
            month++;
            day = 1;
        }
    } else if (month === 2 && day === 29) {
        month++;
        day = 1;
    } else if (month === 3 && day === 31) {
        month++;
        day = 1;
    } else if (month === 4 && day === 30) {
        month++;
        day = 1;
    } else if (month === 5 && day === 31) {
        month++;
        day = 1;
    } else if (month === 6 && day === 30) {
        month++;
        day = 1;
    } else if (month === 7 && day === 31) {
        month++;
        day = 1;
    } else if (month === 8 && day === 31) {
        month++;
        day = 1;
    } else if (month === 9 && day === 30) {
        month++;
        day = 1;
    } else if (month === 10 && day === 31) {
        month++;
        day = 1;
    } else if (month === 11 && day === 30) {
        month++;
        day = 1;
    } else if (month === 12 && day === 31) {
        year++;
        month = 1;
        day = 1;
    } else {
        day++;
    }

    console.log(`${year}-${month}-${day}`);
}
nextDay(2020, 2, 28);