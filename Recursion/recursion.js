
function fibonacci(a, b, s) {

    if (s == 0) {
        return;
    }

    const c = a + b;
    console.log(c);

    fibonacci(b, c, s - 1)
}


const a = 0;
const b = 1;
const s = 5;
console.log(a)
console.log(b)
fibonacci(a, b, s);



//Numbers between in a range

function printNumbers(start, end) {

    if (!start > 2 || !start < end) {
        console.log("Please provide a valid numbers");
        return;
    }

    if (end == start) {
        return;
    }

    let result = ''
    printNumbers(start, end - 1)
    result += end;
    console.log(result)
}

const start = 5;
const end = 3;

printNumbers(start, end - 1);

//Binary Search using recursion

// function binarySearch(numbers, start, end, key) {

//     if (start > end) {
//         console.log("Number Not Exist in Array")
//         return;
//     }

//     let mid = Math.floor((start + end) / 2)

//     if (numbers[mid] == key) {
//         console.log(`Key Found at position ${mid + 1}`)
//         return mid;
//     }


//     if (numbers[mid] < key) {
//         return binarySearch(numbers, mid + 1, end, key)
//     } else {
//         return binarySearch(numbers, start, mid - 1, key);
//     }

// }

// const numbers = [3, 4, 5, 6, 8, 10]
// const end = numbers.length;
// const start = 0;
// const key = 3;

// binarySearch(numbers, start, end, key);
