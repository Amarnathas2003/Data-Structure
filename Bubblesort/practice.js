function bubbleSort(array) {
    if (array.length <= 1) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        let sorted = true;
        for (let j = 1; j < array.length - i; j++) {
            if (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp
                sorted = false;
            }
        }
        if (sorted) {
            break;
        }
    }
    return array;
}
const array = [392, 817, 145, 670]

console.log(bubbleSort(array))