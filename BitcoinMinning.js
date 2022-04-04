function bitcoinMinning(input) {
    let index = 0;
    let indexOfDays = 0;
    let boughtBitcoins = 0;
    let amountOfMoney = 0;
    let dayOfBuyingFirstBitcoin = 0;

    for (let i = 0; i < input.length; i++) {
        let goldInGrams = input[index++];
        indexOfDays++;
        if (indexOfDays % 3 === 0) {
            goldInGrams = goldInGrams * 0.70;
        }
        amountOfMoney += goldInGrams * 67.51;

        if (amountOfMoney >= 11949.16) {
            if (dayOfBuyingFirstBitcoin === 0) {
                dayOfBuyingFirstBitcoin = indexOfDays;
            }
            boughtBitcoins += Math.floor(amountOfMoney / 11949.16);
            amountOfMoney -= Math.floor(amountOfMoney / 11949.16) * 11949.16;
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);

    if (boughtBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfBuyingFirstBitcoin}`);
    }
    console.log(`Left money: ${amountOfMoney.toFixed(2)} lv.`);
}
bitcoinMinning([3124.15, 504.212, 2511.124]);