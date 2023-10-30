

/**
 * Finds How Many Times a Element Has Been Repeated
 * @param {String} word 
 * @returns {Object}
 * 
 */

function findCount(word) {

    let result = {};

    for (let i = 0; i < word.length; i++) {

        if (result[word[i]] >= 0) {
            result[word[i]] += 1;
        } else {
            result[word[i]] = 1;
        }
    }

    return result;
}

const word = 'aaccbbg'
console.log(findCount(word));