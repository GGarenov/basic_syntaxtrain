function printEvenNumbers(arr) {  // da printirame samo chetnite chisla
    for (let i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    let output = ''; // ako iskam da sa na edin red
    for (num of arr) {
        if (num % 2 === 0) {
            output += num + ' ';
        }
    }

    console.log(output.trim())    
}
printEvenNumbers(['1','2','3','4','5','6'])