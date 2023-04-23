function printTriangle(n) {
    for (let row = 1; row <= n; row++){
        let buff = "";
        for (let col = 0; col < row; col++){
            buff += row + " ";
        }
        
        console.log(buff)
        
    }
}

printTriangle(3);
console.log(`-------------------------`)
printTriangle(5);
console.log(`-------------------------`)
printTriangle(8);
console.log(`-------------------------`)
