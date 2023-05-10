function dungeon(input) {
    // Split the string into individual room strings using the vertical bar character as a delimiter
    let rooms = input[0].split("|");

    // Initialize variables for health, coins, room count, and flag for whether the game is over
    let health = 100;
    let coins = 0;
    let roomCounter = 0;
    let isOver = false;

    // Iterate over each room in the dungeon
    for (let room of rooms) {
        // Increment the room counter
        roomCounter++;

        // Split the room string into the command and value components
        let commands = room.split(" ");
        let command = commands[0];
        let value = Number(commands[1]);

        // Check the command for each room
        switch (command) {
            case "potion":
                // If the command is a potion, add the value to the health, but do not exceed the maximum of 100
                if (value + health > 100) {
                    value = value - (value + health - 100);
                }
                health += value;
                // Print the healing message and the current health
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                // If the command is a chest, add the value to the coins
                coins += value;
                // Print the coins message
                console.log(`You found ${value} coins.`);
                break;
            default:
                // If the command is anything else, subtract the value from the health
                health -= value;
                // If the health is greater than zero, the player is alive and can continue to the next room
                if (health > 0) {
                    // Print the slayed message
                    console.log(`You slayed ${command}.`);
                } else {
                    // If the player's health is zero or below, print the death message and set the isOver flag to true
                    console.log(`You died! Killed by ${command}.`);
                    isOver = true;
                    // Print the best room number the player has reached
                    console.log(`Best room: ${roomCounter}`);
                }
                break;
        }
        // If the game is over, break out of the loop
        if (isOver) {
            break;
        }
    }
    // If the game is not over, print the victory messages with the coins and health totals
    if (!isOver) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

// Call the dungeon function with two example input strings
dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
console.log(`------------------------------------------`);
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);