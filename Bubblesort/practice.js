
function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {

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

const array = [10, 5, 2, 3]
console.log(bubbleSort(array));


