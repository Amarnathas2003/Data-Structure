var sortedArrayToBST = function (nums) {
    class TreeNode {
        constructor(val, left = null, right = null) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    function insertNode(nums) {
        if (nums.length === 0) {
            return null;
        }

        let mid = Math.floor((nums.length) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = insertNode(nums.slice(0, mid));
        root.right = insertNode(nums.slice(mid + 1));

        return root;
    }

    const resultTree = insertNode(nums);
    return resultTree;
};
