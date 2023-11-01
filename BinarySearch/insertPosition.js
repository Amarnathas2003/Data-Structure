
/**
 * Given a sorted array of distinct integers and a target value, 
 * return the index if the target is found. If not, 
 * return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2)
        if (nums[mid] == target) {
            return mid;
        }

        if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1
        }
    }
    return start;
};