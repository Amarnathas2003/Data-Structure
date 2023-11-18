class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(root, key) {
        if (!root) {
            return false;
        } else if (root.data === key) {
            return true;
        } else {
            //This does the work
            if (this.search(root.left, key) || this.search(root.right, key)) {
                return true;
            }
        }
        return false;
    }

    height(root) {
        if (!root) {
            return 0;
        }
        const leftHeight = this.height(root.left);
        const rightHeigt = this.height(root.right);

        return Math.max(leftHeight, rightHeigt) + 1;
    }

    inOrderTraversal(root) {
        if (!root) return;
        this.inOrderTraversal(root.left);
        console.log(root.data)
        this.inOrderTraversal(root.right);
    }

    isBalanced(root) {
        if (!root) return true;

        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right);

        if (Math.abs(leftHeight - rightHeight) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right)) {
            return true;
        }

        return false;
    }

    //Check given tree BST or not
    isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        if (!root) {
            return true;
        }

        //This one makes sense
        if (root.data <= min || root.data >= max) {
            return false;
        }

        return (
            //All values in the left subtree must be less than the root.data.
            //All values in the right subtree must be Greater than the root.data.
            this.isBST(root.left, min, root.data) &&
            this.isBST(root.right, root.data, max)
        );
    }
}

const bst = new BST();

bst.insert(36)
bst.insert(56)
bst.insert(43)
bst.insert(88)
bst.insert(34)
bst.insert(78)

bst.inOrderTraversal(bst.root);

const element = bst.search(bst.root, 78);

if (element) {
    console.log("element found")
} else {
    console.log("element not found");
}

const height = bst.height(bst.root)

console.log("Height of the Tree will be", height);

const isBalanced = bst.isBalanced(bst.root);

if (isBalanced) {
    console.log("tree is balanaced")
} else {
    console.log("Tree not balnaced");
}

const isBST = bst.isBST(bst.root);
if (isBST) {
    console.log("Tree is BST")
} else {
    console.log("Not BST")
}