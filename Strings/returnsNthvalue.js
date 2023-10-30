

/**
 * Write a function to replace each alphabet in the given string with another 
   alphabet occurring at the n-th position from each of them.
 * @param {String} word 
 * @param {Integer} n 
 * @returns {String}
 */

function getNvalue(word, n) {

    let loweCaseword = word.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < alphabets.length; i++) {
        if (alphabets[i] == loweCaseword) {
            const position = i + n;
            return alphabets[position];
        }
    }
}

function alphabetChange(word, n) {

    let fullWord = [];

    for (let i = 0; i < word.length; i++) {
        let value = getNvalue(word[i], n)
        fullWord.push(value);
    }

    return fullWord.join('');
}


const word = 'william';
const n = 3;
console.log(alphabetChange(word, n));
