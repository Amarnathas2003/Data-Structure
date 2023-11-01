
function longestPrefix(strs) {
    console.log(strs)
    let array = [];

    let firstString = strs[0];
    console.log(firstString)

    for (let i = 0; i < firstString.length; i++) {

        let firstLetter = firstString[i];
        console.log(firstLetter)

        for (let j = i + 1; j < strs.length; j++) {

            let string = strs[j];
            console.log(string)

            if (string[i] == firstLetter) {


                array.push(string[i]);


            } else {
                console.log("No Prefix Exists in Array")
                return "";
            }
        }
    }
    console.log(array)
}

function findPrefix(strs) {
    let array = [];
    console.log(strs)

    for (let i = 0; i < strs[0].length; i++) {

        const firstWord = strs[i];
        const firstLetter = firstWord[i]

        for (let j = i + 1; j < strs.length; j++) {
            var flag = 0

            const secondWordFirst = strs[j];
            const secondWordFirstLetter = secondWordFirst[i];

            if (firstLetter !== secondWordFirstLetter) {
                flag = 1;
                return "";
            }
        }

        if (flag == 0) {
            array.push(firstLetter);
        }
    }

    const newArray = array.join('')
    console.log(newArray)
    return newArray;
}


const strs = ["flower", "flow", "flight"];
strs.sort()
// findPrefix(strs);


var longestCommonPrefix = function (strs) {

    // Return early on empty input
    if (!strs.length) {
        return '';
    }

    // Loop through the letters of the first string
    for (let i = 0; i <= strs[0].length; i++) {
        // Loop through the other strings

        for (let j = 1; j < strs.length; j++) {
            // Check if this character is also present in the same position of each string
            if (strs[0][i] !== strs[j][i]) {
                // If not, return the string up to and including the previous character
                return strs[0].slice(0, i);
            }
        }
    }

    return strs[0];
};


