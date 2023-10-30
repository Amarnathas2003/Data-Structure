/**
 * Remove the Duplicates from the Array and Print Only the the Unique Elements
 * @param {String} word 
 * @returns {Array}
 */

function removeDuplicates(word) {

    let elements = []

    for (let i = 0; i < word.length; i++) {
        var count = 0;

        for (let j = 0; j < word.length; j++) {
            if (word[i] == word[j]) {
                count++;
            }
        }

        if (count == 1 && !elements.includes(word[i])) {
            elements.push(word[i]);
        }
    }

    return elements;
}

const word = 'malayhalam'
console.log(removeDuplicates(word));