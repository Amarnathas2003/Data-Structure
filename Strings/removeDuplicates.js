
/**
 * Returns the String by Removing the Repeated Elements (Prints Elements Occuered Only Once)
 * Used ES6 Methods
 * @param {String} word 
 * @returns String
 */

function removeDuplicates(word) {
    const splitArray = word.split('')

    const uniqueSet = [...new Set(splitArray)];

    const uniqueString = uniqueSet.join('')

    return uniqueString;
}

const word = 'malayalam'
console.log(removeDuplicates(word));