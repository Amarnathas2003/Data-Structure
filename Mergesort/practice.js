function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2);

    let left = mergeSort(array.slice(0, mid))
    let right = mergeSort(array.slice(mid))

    return mergedArray(left, right);

    function mergedArray(first, last) {

        const newArray = [];

        let i = 0;
        let j = 0;

        while (i < first.length && j < last.length) {
            if (first[i] < last[j]) {
                newArray.push(first[i])
                i++;
            } else {
                newArray.push(last[j])
                j++;
            }
        }

        while (i < first.length) {
            newArray.push(first[i]);
            i++;
        }

        while (j < last.length) {
            newArray.push(last[j]);
            j++;
        }
        return newArray;
    }
}

const array = [4, 7, 3, 2, 8, 9, 3]
console.log(mergeSort(array))