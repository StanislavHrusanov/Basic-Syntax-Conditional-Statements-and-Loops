function thePyramid(base, increment) {

    let stone = 0;
    let marble = 0;
    let lazuli = 0;
    let gold = 0;
    let steps = 0;
    let heightOfThePyramid = 0;

    if (base % 2 === 0) {
        gold = 4;
    } else {
        gold = 1;
    }

    for (let i = base; i > 0; i = i - 2) {
        steps++;

        if ((i !== 1 && i !== 2)) {
            if (steps % 5 === 0) {
                lazuli += (i * 4) - 4;
                stone += (i * i) - ((i * 4) - 4);
            } else {
                marble += (i * 4) - 4;
                stone += (i * i) - ((i * 4) - 4);
            }
        }
    }
    stone *= increment;
    marble *= increment;
    lazuli *= increment;
    gold *= increment;
    heightOfThePyramid = steps * increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(heightOfThePyramid)}`);
}
thePyramid(11,
    1
);