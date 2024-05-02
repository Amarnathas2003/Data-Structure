function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) { //Change happend it means another elem is there
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    
    return array;
}

// Example usage:
const myArray = [5, 8, 20, -1];


selectionSort(myArray);
console.log(myArray);

