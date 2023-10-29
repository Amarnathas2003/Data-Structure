// function recursiveSearch(start, end, key, arr) {

//     if (start > end) {
//         console.log("Elemement Not Found in the Array");
//         return;
//     }

//     //Must Use Math.Floor() -> For the Mid Calculation
//     let mid = Math.floor((start + end) / 2);

//     if (arr[mid] == key) {
//         console.log(`Element Found at the position ${mid}`);
//         return mid;
//     }

//     if (arr[mid] < key) {
//         //Search in the right side of the array
//         return recursiveSearch(mid + 1, end, key, arr);
//     } else {
//         //Search in the left side of the arrray
//         return recursiveSearch(start, mid - 1, key, arr);
//     }
// }

// const arr = [2, 4, 6, 10, 15, 18]
// const start = 0;
// const end = arr.length - 1;
// const key = 18;
// recursiveSearch(start, end, key, arr);


function recursiveSearch(start, end, key, arr) {
    console.log(arr)

    if (start > end) {
        console.log("Element Not Found in the Array");
        return;
    }

    // Must use Math.floor() for mid calculation
    let mid = Math.floor((start + end) / 2);
    console.log("This is the mid " + arr[mid])

    if (arr[mid] == key) {
        console.log(`Element Found at the position ${mid}`);
        return mid;
    }

    if (arr[mid] < key) {
        // Search in the right side of the array
        console.log(`Searching in the right side from index ${mid + 1} to ${end}`);
        return recursiveSearch(mid + 1, end, key, arr);
    } else {
        // Search in the left side of the array
        console.log(`Searching in the left side from index ${start} to ${mid - 1}`);
        return recursiveSearch(start, mid - 1, key, arr);
    }
}

const arr = [2, 4, 6, 10, 15, 18];
const start = 0;
const end = arr.length - 1;
const key = 18;
recursiveSearch(start, end, key, arr);

