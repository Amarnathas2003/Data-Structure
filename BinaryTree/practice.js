class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addLeft(value) {
        this.left = new BinaryTree(value);
    }

    addRight(value) {
        this.right = new BinaryTree(value);
    }

    search(key) {
        if (!this) {
            return false;
        } else if (this.value === key) {
            return true;
        } else {
            return (this.left && this.left.search(key) ||
                this.right && this.right.search(key)
            );
        }
    }

    inOrderTraversel = (root) => {
        if (!root) return;
        this.inOrderTraversel(root.left);
        console.log(root.value);
        this.inOrderTraversel(root.right);
    }
}

function heightOfTree(root) {
    if (!root) {
        return 0;
    } else {
        const leftHeight = heightOfTree(root.left)
        const rightHeight = heightOfTree(root.right)

        return Math.max(leftHeight, rightHeight) + 1;
    }
}


const root = new BinaryTree(50);

root.addLeft(50)
root.addRight(34)

root.left.addLeft(24)
root.left.addRight(88);

root.inOrderTraversel(root);

console.log(root.search(24));

console.log("Height of the Tree is", heightOfTree(root))