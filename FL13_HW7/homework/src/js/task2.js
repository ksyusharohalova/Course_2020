let userNumber, randomNumber, total;
const startTotalPrice = 0;
const maxAttempts = 3;
const maxFirstRoundPrice = 100;
const two = 2;
const stepNumber = 5;
let exit = false;

let game=confirm(`Do you want to play a game?`);
if (game) {
    let max = stepNumber;
    let possiblePrice = maxFirstRoundPrice;
    total = startRound(max, startTotalPrice, possiblePrice);
    while (!exit && confirm(`Do you want to continue a game?`)) {
        total = startRound(max += stepNumber, total, possiblePrice *= two)
    }
} else {
    alert(`'You did not become a billionaire, but can.`);
}

function startRound(maxInterval, totalPrice, possiblePrice) {
    let attempts = maxAttempts;
    randomNumber = Math.floor(Math.random() * (maxInterval + 1));
    userNumber = Number(prompt(`Choose a roulette pocket number from 0 to ` + maxInterval +
        `\n Attempts left: ` + attempts + ` Total price: ` + totalPrice + `$ \n Possible prize on current attempt: `
        + possiblePrice + `$`));
    if (userNumber !== randomNumber) {
        while (attempts !== 1 && userNumber !== randomNumber) {
            possiblePrice = possiblePrice / two;
            attempts = attempts - 1;
            userNumber = Number(prompt(`Choose a roulette pocket number from 0 to ` + maxInterval +
                `\n Attempts left: ` + attempts + ` Total price: ` + totalPrice +
                `$ \n Possible prize on current attempt: ` + possiblePrice + `$`));

        }
        if (userNumber !== randomNumber) {
            totalPrice = 0;
            alert(`Thank you for your participation. Your prize is: ` + totalPrice + ` $`);
            exit = true
        } else {
            totalPrice = totalPrice + possiblePrice;
            alert('Congratulation, you won!   Your prize is: ' + totalPrice + '  $.');
        }
    } else {
        totalPrice = totalPrice + possiblePrice;
        alert('Congratulation, you won!   Your prize is: ' + totalPrice + '  $.');
    }

    return totalPrice;
}