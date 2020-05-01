function letterCount (word, character) {
    let count=0;
    for (let i = 0; i<word.length; i++) {
        if (character.toLowerCase() === word[i].toLowerCase()) {
          count ++;
        }
    }
    return count;
}
console.log(letterCount('Maggy', 'g'));