

function Quicksort(array, low, high) {
    if (low >= high) {
        return;
    }

    let s = low;
    let e = high;
    let mid = Math.floor((s + e) / 2);
    let pivot = array[mid];

    //Finding the Violation
    while (s <= e) {

        while (array[s] < pivot) {
            s++;
        }

        while (array[e] > pivot) {
            e--;
        }

        if (s <= e) {
            let temp = array[s];
            array[s] = array[e];
            array[e] = temp;
            s++;
            e--;
        }
    }

    //Recursion Calls
    Quicksort(array, low, e);
    Quicksort(array, s, high);
}


const array = [3, 2, 0, 4, 9];
Quicksort(array, 0, array.length - 1);
console.log(array);