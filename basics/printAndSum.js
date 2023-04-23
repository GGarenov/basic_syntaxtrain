function printAndSum(a, b) {
    let sum = 0;
    let nums = '';
    for (i = a; i <= b; i++){
        sum += i;
        nums += i + ' ';
    }
    console.log(`${nums}\nSum: ${sum}`);

}

printAndSum(5,10)
