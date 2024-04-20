function quickSort(array, low, high) {

    if (low >= high) {
        return;
    }

    let s = low;
    let e = high;

    let mid = Math.floor((s + e) / 2)
    let pivot = array[mid];

    while (s <= e) {

        while (array[s] < pivot) {
            s++;
        }
        while (array[e] > pivot) {
            e--;
        }

        if (s <= e) {
            let temp = array[s]
            array[s] = array[e]
            array[e] = temp
            s++
            e--
        }
    }
    quickSort(array, low, e)
    quickSort(array, s, high)
}

const array = [10, 50, 28, 4, 12, 28]
const low = 0;
const high = array.length - 1
quickSort(array, low, high)
console.log(array)
