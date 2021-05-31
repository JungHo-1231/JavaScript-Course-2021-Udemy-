'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when there is no input
    if (!guess){
        document.querySelector('.message').textContent = "- No number!";
        // when player wins
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = " Correct Number";
        document.querySelector('.number').textContent= secretNumber;

        document.querySelector("body").style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // when guess is too high
    } else if ( guess > secretNumber){
        if (score > 1){
            document.querySelector('.message').textContent = " Too high!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {

        }
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = " Too low!";
        score--;
        document.querySelector('.score').textContent = score;
    }
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

})