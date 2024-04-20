function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2)

    const left = mergeSort(array.slice(0, mid))
    const right = mergeSort(array.slice(mid))

    return mergedArray(left, right)

    function mergedArray(first, last) {

        const newArray = [];

        let i = 0;
        let j = 0;

        while (i < first.length && j < last.length) {
            if (first[i] < last[j]) {
                newArray.push(first[i]);
                i++
            } else {
                newArray.push(last[j])
                j++
            }

            while (i < first.length) {
                newArray.push(first[i])
                i++
            }

            while (j < last.length) {
                newArray.push(last[j])
                j++
            }
        }
        return newArray;
    }
}

const array = [2, 5, 0, 8, -9];
console.log(mergeSort(array));