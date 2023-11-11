
function mergeArray(nums1, m, nums2, n) {

    let newArray = [];

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] !== 0) {
            newArray.push(nums1[i]);
        }
    }

    for (let j = 0; j < nums2.length; j++) {
        newArray.push(nums2[j]);
    }
    return newArray.sort();
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];
console.log(mergeArray(nums1, 6, nums2, 3));