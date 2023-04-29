function evenAndSubstraction(arr) {
    //Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
    for (i = 0; i < arr.length; i++){
        arr[i] = Number(arr[i]);
    }
    let sumEven = 0;
    let sumOdd = 0
    for (let num of arr) {
        if (num % 2 == 0) {
            sumEven += num
        }
    }
    for (let num of arr) {
        if (num % 2 === 1) {
            sumOdd += num
        }
    }
    // if (sumOdd > sumEven) {   <- tozi kod smqna razlikata mejdu chetnoto i nechetnoto
    //     console.log(sumOdd - sumEven)
    // } else if (sumEven > sumOdd) {
    //     console.log(sumEven - sumOdd)
    // }

    // NO ima i po-lesen nachin s math.abs
    let diff = Math.abs(sumEven - sumOdd)
    console.log(diff)
}
evenAndSubstraction([1, 2, 3, 4, 5, 6])
console.log(`--------------------------------`)
evenAndSubstraction([3, 5, 7, 9])
console.log(`---------------------------------`)
evenAndSubstraction([2,4,6,8,10])