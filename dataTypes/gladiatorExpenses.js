function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    
    for (let i = 1; i <= lostFights; i++){

        if (i % 2 === 0) {
            sum += helmetPrice;
            
        }

        if (i % 3 === 0) {
            sum += swordPrice;
        } 

        if (i % 6 ===0) {
            sum += shieldPrice;
        }

        if (i % 12 === 0) {
            sum += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}

// test case 1
gladiatorExpenses(7, 2, 3, 4, 5); // expected output: Gladiator expenses: 20.00 aureus

// test case 2
gladiatorExpenses(23, 12.50, 21.50, 40, 200); 