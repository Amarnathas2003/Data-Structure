class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, key) {
        if (!root) {
            return false;
        } else if (root.value === key) {
            return true;
        } else {
            if (root.left && this.search(root.left, key) || root.right && this.search(root.right, key)) {
                return true;
            }
        }
        return false;
    }

    height(root) {
        if (!root) {
            return 0;
        }

        let leftHeight = this.height(root.left);
        let rightHeight = this.height(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    isBalanced(root) {
        if (!root) return true;

        let leftHeight = this.height(root.left)
        let rightHeight = this.height(root.right);

        if (Math.abs(leftHeight - rightHeight <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right))) {
            return true;
        }
        return false;
    }

    isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        if (!root) return true;


        if (root.data <= min || root.data >= max) {
            return false;
        }

        return (
            this.isBST(root.left, min, root.data) &&
            this.isBST(root.right, root.data, max)
        );

    }


    delete(key) {
        this.root = this.deleteNode(this.root, key);
    }

    deleteNode(root, value) {
        if (!root) return null;

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            root.value = this.getMinValue(root.right);
            root.right = this.deleteNode(root.right, root.data);
        }
        return root;
    }

    getMinValue(node) {
        let minValue = node.data;
        while (node.left !== null) {
            minValue = node.left.data;
            node = node.left;
        }
        return minValue;
    }

    findClosest(data) {
        if (!this.root) return null;
        return this.findClosestHelper(this.root, data, Number.MAX_SAFE_INTEGER);
    }

    findClosestHelper(root, data, closest) {
        if (!root) return closest;

        if (Math.abs(data - root.data) < Math.abs(data - closest)) {
            closest = root.data;
        }

        if (data < root.data) {
            closest = this.findClosestHelper(root.left, data, closest);
        } else if (data > root.data) {
            closest = this.findClosestHelper(root.right, data, closest);
        } else {
            return root.data;
        }
        return closest;
    }

    countElements() {
        return this.countElementsRecursive(this.root);
    }

    countElementsRecursive(root) {
        if (!root) return 0;
        return this.countElementsRecursive(root.left) + this.countElementsRecursive(root.right) + 1;
    }

    inOrderTraversal(root) {
        if (!root) return;
        this.inOrderTraversal(root.left);
        console.log(root.value);
        this.inOrderTraversal(root.right);
    }

}

const bst = new BST();

bst.insert(50)
bst.insert(89)
bst.insert(23)
bst.insert(67)
bst.insert(45)

bst.inOrderTraversal(bst.root);

console.log(bst.search(bst.root, 45));

console.log(bst.height(bst.root));

console.log(bst.isBalanced(bst.root));

console.log(bst.isBST(bst.root));

console.log("After deleting the node :");

bst.delete(23)

bst.inOrderTraversal(bst.root);

// console.log("Closest value is :-", bst.findClosest(23));

const count = bst.countElements();
console.log("Count of elements in the binary tree:", count);