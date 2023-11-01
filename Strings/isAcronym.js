

function checkisAcronym(words, s) {
    let result = '';

    for (let i = 0; i < words.length; i++) {
        const firstWord = words[i];
        const firstLetter = firstWord[0];
        result += firstLetter;
    }

    if (result === s) {
        return true;
    } else {
        return false;
    }
}

const words = ["alice", "bob", "charlie"];
const s = "abc";
checkisAcronym(words, s);