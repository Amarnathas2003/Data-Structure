//Creation, Insertion, Search

class BinaryTree {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insertLeft(data) {
        this.left = new BinaryTree(data);
    }

    insertRight(data) {
        this.right = new BinaryTree(data);
    }
}

//Binary Tree Operation Functions

//In-Order Traversal
function inOrderTraversal(root) {
    if (!root) return;
    inOrderTraversal(root.left);
    console.log(root.data);
    inOrderTraversal(root.right);
}

//Serach an Element
function search(root, key) {
    if (!root) {
        return false;
    } else if (root.data === key) {
        return true;
    } else {
        if (search(root.left, key) || search(root.right, key)) {
            return true;
        }
    }
    return false;
}

//Find the Hight of the Binary Tree
function height(root) {
    if (!root) {
        return 0;
    } else {
        const leftHeight = height(root.left);
        const rightHeight = height(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}


const root = new BinaryTree(40);

root.insertLeft(67);
root.insertRight(89);

root.left.insertLeft(34)
root.left.insertRight(78) 

inOrderTraversal(root)

const searchElement = search(root, 34)
if (searchElement) {
    console.log("Element found")
} else {
    console.log("Element not found")
}
