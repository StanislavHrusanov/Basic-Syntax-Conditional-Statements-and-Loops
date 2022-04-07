function sortNumbers(a, b, c) {
    let firstNum;
    let secNum;
    let thirdNum;

    if ((a >= b && a >= c) && b >= c) {
        firstNum = a;
        secNum = b;
        thirdNum = c;
    } else if ((a >= b && a >= c) && c >= b) {
        firstNum = a;
        secNum = c;
        thirdNum = b;
    } else if ((b >= a && b >= c) && a >= c) {
        firstNum = b;
        secNum = a;
        thirdNum = c;
    } else if ((b >= a && b >= c) && c >= a) {
        firstNum = b;
        secNum = c;
        thirdNum = a;
    } else if ((c >= a && c >= b) && a >= b) {
        firstNum = c;
        secNum = a;
        thirdNum = b;
    } else if ((c >= a && c >= b) && b >= a) {
        firstNum = c;
        secNum = b;
        thirdNum = a;
    }

    console.log(firstNum);
    console.log(secNum);
    console.log(thirdNum);
}
sortNumbers(-2,
    1,
    3);