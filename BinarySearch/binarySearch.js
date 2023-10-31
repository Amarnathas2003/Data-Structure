function binarySearch(array, key) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = (start + end) / 2;

        if (array[mid] == key) {
            console.log("Element Found:-")
            return array[mid];
        }
  
        if (array[mid] < key) { 
            //Here the element will be in right side means vale is greater than mid value
            start = mid + 1;
        } else {
            //array[mid] > key -> element will be in the left side of the array so we have to search there
            end = mid - 1;
        }
    }

    console.log("Element Not Found In the Array")
    return -1;
}

const array = [10, 20, 30, 46, 55, 65, 80]
const result = binarySearch(array, 55);
console.log(result)
