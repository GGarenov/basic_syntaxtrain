function addAndSubtract(arr) {
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++){ // obhojdame masiva
        let currentNumber = arr[i];
        oldSum += currentNumber; // subirame chislata
        if (currentNumber % 2 === 0) { // proverqvame dali e chetno
            currentNumber += i; // dobavqme stoinostta na indexa sprqmo chisloto
            arr[i] = currentNumber;
        } else { // nechetno
            currentNumber -= i;
            arr[i] = currentNumber;
        }
        newSum += currentNumber // subirame novite chisla
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);


}
addAndSubtract([5, 15, 23, 56, 35])
console.log(`--------------------`)
addAndSubtract([-5, 11, 3, 0, 2])