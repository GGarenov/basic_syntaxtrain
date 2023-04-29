function reverseInPlace(arr) {
    
    for (let i = 0; i < arr.length / 2; i++){
        swapElements(arr, i, arr.length - 1 - i)
    }
    console.log(arr.join(' '))

}
reverseInPlace()