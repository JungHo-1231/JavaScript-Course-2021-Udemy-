'use strict';
let rollDiceNumber = Math.trunc(Math.random() * 6) + 1;
let leftScore = document.querySelector('#score--0').textContent;
let rightScore = document.querySelector('#score--1').textContent;

console.log(rollDiceNumber);

function diceImageSetting(imageFileName) {
    document.querySelector('.dice').src = imageFileName;
}

if (rollDiceNumber === 1){

} else {
    // todo
    leftScore += rollDiceNumber;
}

switch (rollDiceNumber) {
    case 1 :
        diceImageSetting("dice-1.png");
        break;
    case 2 :
        diceImageSetting("dice-2.png");
        break;
    case 3 :
        diceImageSetting("dice-3.png");
        break;
    case 4 :
        diceImageSetting("dice-4.png");
        break;
    case 5 :
        diceImageSetting("dice-5.png");
        break;
    case 6 :
        diceImageSetting("dice-6.png");
        break;
}