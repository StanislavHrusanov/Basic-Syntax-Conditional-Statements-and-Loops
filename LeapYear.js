function leapYear(year) {

    let answer = '';

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        answer = 'yes';
    } else {
        answer = 'no';
    }
    console.log(answer);
} leapYear(2003);