
function moveZeros(nums) {
    let newArray = [];

    if (nums.length <= 1) {
        return nums;
    } else {

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                newArray.push(nums[i]);
            }
        }

        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === 0) {
                newArray.push(nums[j])
            }
        }

        for (let i = 0; i < nums.length; i++) {
            nums[i] = newArray[i];
        }
    }
}

const nums = [0, 1, 0, 3, 12];
moveZeros(nums)