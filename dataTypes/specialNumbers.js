function solve(n) {
    for (let i = 1; i <= n; i++) {
        let numString = i.toString();
        let sum = 0;
        for (let j = 0; j < numString.length; j++) {
            let curChar = numString[j];
            let charNum = Number(curChar);
            sum += charNum;
        }
        let isSpecial = (sum === 5 || sum === 7 || sum === 11);
        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
}

solve(15)