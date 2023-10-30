function recursiveSearch(start, end, key, arr) {

    if (start > end) {
        console.log("Elemement Not Found in the Array");
        return;
    }

    //Must Use Math.Floor() -> For the Mid Calculation
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] == key) {
        console.log(`Element Found at the position ${mid}`);
        return mid;
    }

    if (arr[mid] < key) {
        //Search in the right side of the array
        return recursiveSearch(mid + 1, end, key, arr);
    } else {
        //Search in the left side of the arrray
        return recursiveSearch(start, mid - 1, key, arr);
    }
}

const arr = [2, 4, 6, 10, 15, 18]
const start = 0;
const end = arr.length - 1;
const key = 18;
recursiveSearch(start, end, key, arr);

