

function selectionSort(array) {

    if (array.length <= 1) {
        return array;
    }

    //find the minimum value index in the array
    for (let i = 0; i < array.length; i++) {
        let minvalue = i;

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minvalue]) {
                minvalue = j;
            }
        }

        if (minvalue !== i) {
            let temp = array[i];
            array[i] = array[minvalue];
            array[minvalue] = temp;
        }
    }
    return array;
}


const array = [4, 2, 6, 8, 1, 3]
console.log(selectionSort(array));