function quickSort(array, low, high) {

    if (low >= high) {
        return;
    }

    let s = low;
    let e = high;

    let mid = Math.floor((s + e) / 2);
    let pivot = array[mid]

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
    quickSort(array, low, e)
    quickSort(array, s, high)
}

const s = [4, 6, 7, 1, -2, -8];
quickSort(s, 0, s.length - 1);
console.log(s)