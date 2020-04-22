let word = String(prompt('Please, input the word:')).trim();
const two =2;
let middleCharact = Math.floor(word.length/two);
if ( word === '') {
    alert('Invalid value');
} else if (word.length % two !== 0 ) {
    alert(word[middleCharact]);
} else {
    alert(word[middleCharact-1] + word[middleCharact]);
}