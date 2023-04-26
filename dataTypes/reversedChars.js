function reversedChars(char1, char2, char3) {
    let combinedChars = char1 + char2 + char3;
    let reversed = combinedChars.split('').reverse().join(' ');
    console.log(reversed)
}
reversedChars('a', 'b', 'c')