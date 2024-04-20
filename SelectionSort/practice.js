function selectionSort(array) {
    if (array.length <= 1) {
        return;
    }
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}

const myArray = [5, 8, -20, -1];


selectionSort(myArray);
console.log(myArray);
