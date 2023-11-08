
function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2)

    let left = mergeSort(array.slice(0, mid));
    let right = mergeSort(array.slice(mid));

    return mergeArray(left, right);

    function mergeArray(left, right) {

        let newArray = [];

        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {

            if (left[i] < right[j]) {
                newArray.push(left[i]);
                i++;
            } else {
                newArray.push(right[j]);
                j++;
            }
        }

        while (i < left.length) {
            newArray.push(left[i])
            i++;
        }

        while (j < right.length) {
            newArray.push(right[j]);
            j++;
        }
        return newArray;
    }
}

const array = [6, 2, 8, 1, 7];
console.log(mergeSort(array));