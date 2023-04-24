function integerFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float';
    console.log(sum)


}
integerFloat(105, 100, 1.1)