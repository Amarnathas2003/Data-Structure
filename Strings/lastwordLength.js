

function lastwordLength(string) {
    const wordsArray = string.split(/\s+/).filter(word => word !== '');
    const word = wordsArray[wordsArray.length - 1];
    return word.length;
}


const string = "   fly me   to   the moon  ";
lastwordLength(string);