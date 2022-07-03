// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

let numPlayers;



let board = {
    "red": [],
    "yellow": [],
    "green": [],
    "blue": []
}

export function rollDice() {

    let dice = {
        "common1": 0,
        "common2": 0,
        "red": 0,
        "yellow": 0,
        "green": 0,
        "blue": 0
    };

    for (const die in dice) {
        dice[die] = Math.floor(Math.random() * 6) + 1;
    }

    const commonSum = dice["common1"] + dice["common2"];
    const redSums = [dice["common1"] + dice["red"], dice["common2"] + dice["red"]];
    const yellowSums = [dice["common1"] + dice["yellow"], dice["common2"] + dice["yellow"]];
    const greenSums = [dice["common1"] + dice["green"], dice["common2"] + dice["green"]];
    const blueSums = [dice["common1"] + dice["blue"], dice["common2"] + dice["blue"]];

    console.log(dice);
    console.log(`Common: ${commonSum}`);
    console.log(`Red: ${redSums}`);
    console.log(`Yellow: ${yellowSums}`);
    console.log(`Green: ${greenSums}`);
    console.log(`Blue: ${blueSums}`);

    return dice;
};

function playerTurn(player) {

}


/*
    Game flow:

    Setup

    Loop while no end condition:
        P1 turn
            roll dice
            P1 select from common
            P1 select from colors

            other players select common
        P2 turn
            ...
        
        ...
*/
function gameMain() {
    // console.log("QWIXX");
    
    // let endCon = false;

    // while (!endCon) {

    // }


}
