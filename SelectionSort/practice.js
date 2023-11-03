

function selectionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }

        // i is what we are changing to the j, beacuse we are taking the min valueIndex(which is i)
        //And in that i's position we are inserting the min element
        if (minIndex !== i) {
            let temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    return array;
}


const array = [20, 6, 7, 2, 9]
console.log(selectionSort(array));