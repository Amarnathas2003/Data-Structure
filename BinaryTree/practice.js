class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTree(value);
    }

    insertRight(value) {
        this.right = new BinaryTree(value);
    }
}

function inOrderTraversal(root) {
    if (!root) return;
    inOrderTraversal(root.left)
    console.log(root.value)
    inOrderTraversal(root.right)
}

const root = new BinaryTree(30);