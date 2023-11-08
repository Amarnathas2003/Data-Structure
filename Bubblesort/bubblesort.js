
function getBubblesort(array) {

    for (let i = 0; i < array.length; i++) {

        for (let j = 1; j < array.length - i; j++) {

            if (array[j] < array[j - 1]) {
                let temp = array[j]
                array[j] = array[j - 1];
                array[j - 1] = temp;
            }
        }
    }
    return array;
}

const array = [1, 0, 3, 5, 4]
console.log(getBubblesort(array));


