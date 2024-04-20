function binarySearch(array, key) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === key) {
            console.log("Element Found at position:-", mid + 1)
            return array[mid];
        }

        if (array[mid] < key) {
            //Here the element will be in right side means value is greater than mid value
            start = mid + 1;
        } else {
            //array[mid] > key -> element will be in the left side of the array so we have to search there
            end = mid - 1;
        }
    }
    console.log("Element Not Found In the Array");
    return -1;
}

const array = [10, 20, 30, 46, 55, 65, 80];
const result = binarySearch(array, 80);
console.log(result);

