

/**
 * Print the count of Repeated Elements excluding the initial value
 * @param {String} value
 * If you pass word "MALAYALAM" it Will Output -> 
 *  Value m has been repeated 1 Times
    Value a has been repeated 3 Times
    Value l has been repeated 1 Times
    
 */

function printDuplicates(value) {

    const elements = [];

    for (let i = 0; i < value.length; i++) {
        let count = 0;

        if (!elements.includes(value[i])) {
            for (let j = i + 1; j < value.length; j++) {
                if (value[i] === value[j]) {
                    elements.push(value[i])
                    count++;
                }
            }
        }

        if (count > 0) {
            console.log(`Value ${value[i]} has been repeated ${count} Times`);
        }
    }
}

const name = 'malayalam'
printDuplicates(name);
