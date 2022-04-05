function vacation(group, typeOfGroup, day) {
    let priceForOnePerson = 0;

    if (typeOfGroup == 'Students') {
        switch (day) {
            case 'Friday': priceForOnePerson = 8.45; break;
            case 'Saturday': priceForOnePerson = 9.80; break;
            case 'Sunday': priceForOnePerson = 10.46; break;
        }
    } else if (typeOfGroup == 'Business') {
        switch (day) {
            case 'Friday': priceForOnePerson = 10.90; break;
            case 'Saturday': priceForOnePerson = 15.60; break;
            case 'Sunday': priceForOnePerson = 16; break;
        }
    } else if (typeOfGroup == 'Regular') {
        switch (day) {
            case 'Friday': priceForOnePerson = 15; break;
            case 'Saturday': priceForOnePerson = 20; break;
            case 'Sunday': priceForOnePerson = 22.50; break;
        }
    }

    let totalSum = group * priceForOnePerson;

    if (typeOfGroup == 'Students' && group >= 30) {
        totalSum = totalSum * 0.85;
    } else if (typeOfGroup == 'Business' && group >= 100) {
        totalSum = totalSum - (priceForOnePerson * 10);
    } else if (typeOfGroup == 'Regular' && (group >= 10 && group <= 20)) {
        totalSum = totalSum * 0.95;
    }

    console.log(`Total price: ${totalSum.toFixed(2)}`);
} vacation(40,
    "Regular",
    "Saturday"
);