
function bubbleSort(array) {

    if (array.length <= 1) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        //we are pushing the largest element to the last position of the array
        for (let j = 1; j < array.length - i; j++) {

            if (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
            
        }
    }
    return array;
}

const array = [5, 6, 0, -8, 1];
console.log(bubbleSort(array));