function division(number) {
    let biggestDivision = 0;
    let isDivisible = false;

    if (number % 2 === 0) {
        biggestDivision = 2;
        isDivisible = true;
    }
    if (number % 3 === 0) {
        biggestDivision = 3;
        isDivisible = true;
    }
    if (number % 6 === 0) {
        biggestDivision = 6;
        isDivisible = true;
    }
    if (number % 7 === 0) {
        biggestDivision = 7;
        isDivisible = true;
    }
    if (number % 10 === 0) {
        biggestDivision = 10;
        isDivisible = true;
    }

    if (isDivisible) {
        console.log(`The number is divisible by ${biggestDivision}`);
    } else {
        console.log('Not divisible');
    }
} division(1643);