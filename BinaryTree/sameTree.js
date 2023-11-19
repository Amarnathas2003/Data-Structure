

function checkArray(p, q) {

    let firstArray = [];
    let secondArray = [];

    for (let i = 0; i < p.length; i++) {
        firstArray.push(p[i]);
        secondArray.push(q[i]);
    }

    console.log(firstArray)
    console.log(secondArray)

    return firstArray === secondArray;
}

const p = [1, 2, 1];
const q = [1, 1, 2];

console.log(checkArray(p, q))





