let checkNum = Number(prompt('Please, input check number: '));
let tip = Number(prompt('Please, input tip percentage'));
let tipAmount = checkNum/hundred * tip;
let totalSum = checkNum + tipAmount;
const two =2;
const hundred = 100;
if (!checkNum || !tip || checkNum < 0 || tip < 0 || totalSum < 0 || tip > hundred) {
        alert('Invalid input data');
}
alert('Check number:' + checkNum + '\nTip:' + tip +'\nTipAmount:' + tipAmount.toFixed(two) +
    '\nTotal sum to pay:' + totalSum.toFixed(two));