
function bubbleSort(array) {

    if (array.length <= 1) {
        return array;
    }

    for (let i = 0; i < array.length - 1; i++) {

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

const array = [3, 0, 2, 8, 9]
console.log(bubbleSort(array));