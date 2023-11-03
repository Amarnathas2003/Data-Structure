
function insertionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j > 0; j--) {

            if (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}

const array = [10, 6, 7, 3];
console.log(insertionSort(array));