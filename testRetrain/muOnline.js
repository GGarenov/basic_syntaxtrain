function muOnline(input) {
   let rooms = input[0].split("|")
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    let isOver = false;

    for (let room of rooms) {
        roomCounter++;

        let commands = room.split(" ");
        let command = commands[0];
        let value = Number(commands[1]);
        switch (command) {
            case "potion":
             
                if (value + health > 100) {
                    value = value - (value + health - 100)
                }
                health += value;
                console.log(`You healed for ${value} hp.`)
                console.log(`Current health: ${health} hp.`)
                break;

            case "chest":
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`)
                break;
            default:
                health -= value;

                if (health > 0) {
                    console.log(`You slayed ${command}.`)
                } else {
                    console.log(`You died! Killed by ${command}.`)
                    isOver = true;
                    console.log(`Best room: ${roomCounter}`)
                }
                break;
                
        }
        if (isOver) {
            break;
        }
        if (!isOver) {
            console.log(`You've made it!`)
            console.log(`Bitcoins: ${bitcoins}`)
            console.log(`Health: ${health}`)
        }

    }
}
muOnline(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])