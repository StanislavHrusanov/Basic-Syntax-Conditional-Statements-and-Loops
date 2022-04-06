function reverseString(word) {

    let reversedString = '';
    for (let i = String(word).length - 1; i >= 0; i--) {
        reversedString += word.charAt(i);
    }
    console.log(reversedString);
}
reverseString('Hello');