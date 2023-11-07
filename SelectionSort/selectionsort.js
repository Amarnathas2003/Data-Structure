function selectionSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
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

// Example usage:
const myArray = [5, 8, 20, -1];


selectionSort(myArray);
console.log(myArray);

//Steps of selection sorting 

// 1 -> In the j Looping find the smallest element in the array and make it as the min value index

//2 -> If the J value has been changed do the swapping