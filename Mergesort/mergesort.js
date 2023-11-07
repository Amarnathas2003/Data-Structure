
function mergeSort(array) {

    if (array.length <= 1) {
        return array;
    }

    let mid = Math.floor(array.length / 2); //Finidng the middle element

    let left = mergeSort(array.slice(0, mid)); // -> Takes 0 to Mid Excluding the mid element
    let right = mergeSort(array.slice(mid)); // -> Takes mid to end(Including the mid and end)

    return mergeArray(left, right);

    //This is the Merging Part
    function mergeArray(first, last) {

        //New Array for storing elements
        const newArray = [];

        let i = 0;
        let j = 0;

        while (i < first.length && j < last.length) {

            if (first[i] < last[j]) {
                newArray.push(first[i]);
                i++;
            } else {
                newArray.push(last[j]);
                j++;
            }
        }

        while (i < first.length) {
            newArray.push(first[i]);
            i++;
        }

        while (j < last.length) {
            newArray.push(last[j])
            j++;
        }
        return newArray;
    }
}

const array = [2, 5, 0, 8, 9];
console.log(mergeSort(array));

