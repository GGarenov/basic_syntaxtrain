function login(input) {
    let username = input[0];
    let password = "";
    for (let i = username.length - 1; i >= 0; i--){
        password += username[i];
    }
    let incorrectPasswordCount = 0;
    for (let i = 1; i < input.length; i++){
        let tempPassword = input[i];
        if (tempPassword === password) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            incorrectPasswordCount++;
            if (incorrectPasswordCount === 4) {
                console.log(`User ${username} blocked!`);
                return;
            }
            console.log(`Incorrect password. Try again.`);
        }
    }
}

login(['Acer', 'login', 'go', 'let me in', 'recA'])
console.log(`---------------------------`)
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny'])
console.log(`-----------------------`)
login(['momo','omom'])