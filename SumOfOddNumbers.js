function sumOfOddNumbers(n) {
    let counter = 1;
    let sum = 0;
    let i = 0;
    while (counter <= n) {
        if (i % 2 !== 0) {
            counter++;
            sum += i;
            console.log(i);
        }
        i++;
    }
    console.log(`Sum: ${sum}`);

} sumOfOddNumbers(3);