

function thousandPointer(n) {

    let resultArray = [];
    if (n < 1000) {
        return n.toString();
    } else {
        if (n >= 1000) {
            let numToString = n.toString();
            for (let i = 0; i < numToString.length; i++) {
                resultArray.push(numToString[i]);
                if (i === 0) {
                    resultArray.push('.');
                }
            }
        }
        console.log("This is result array", resultArray)
        let string = '';
        for (let j = 0; j < resultArray.length; j++) {
            string += resultArray[j];
        }
        return string;
    }
}


const number = 32423587435;
// console.log(thousandPointer(number));
console.log(thousandPointer(number));