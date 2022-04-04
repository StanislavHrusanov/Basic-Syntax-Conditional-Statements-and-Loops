function login(input) {
    let index = 0;
    let username = input[index++];
    let reversedUsername = '';
    for (let i = String(username).length - 1; i >= 0; i--) {
        reversedUsername += username.charAt(i);
    }
    let islogged = true;
    let counter = 0;
    let password = input[index++];

    while (password != reversedUsername) {
        counter++;

        if (counter >= 4) {
            islogged = false;
            console.log(`User ${username} blocked!`);
            break;
        }
        console.log('Incorrect password. Try again.');
        password = input[index++];
    }

    if (islogged) {
        console.log(`User ${username} logged in.`);
    }

}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);