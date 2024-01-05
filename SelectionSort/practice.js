function selectionSort(array) {
    if (array.length <= 1) {
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = array[i]
            array[i] = array[minIndex]
            array[minIndex] = temp
        }
    }
    return array;
}

const s = [8, 3, 7, 8, 4, 2, 90]
console.log(selectionSort(s));
