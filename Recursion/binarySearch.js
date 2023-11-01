

function binarySearch(start, end, array, key) {

    if (start > end) {
        console.log("Element not in the Array");
        return;
    }

    let mid = Math.floor((start + end) / 2);

    if (array[mid] == key) {
        console.log(`Element Found at Position ${mid + 1}`);
        return;
    }

    if (array[mid] < key) {
        return binarySearch(mid + 1, end, array, key);
    } else {
        return binarySearch(start, mid - 1, array, key);
    }
}

const array = [10, 20, 30, 46, 55, 65, 80];
const start = 0;
const end = array.length;
const key = 65;
const result = binarySearch(start, end - 1, array, key);
