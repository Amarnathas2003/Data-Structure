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

    //Delete a node from the BST
    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (!root) return null;

        if (value < root.data) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value);
        } else {
            //Cheking for nodes with one children or no children
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            //Getting the value for replacemenet of the deleted node
            root.data = this.getMinvalue(root.right);

            //After getting the in order successor we can delete that value
            //(Beacuse it is now used as root node)
            root.right = this.deleteNode(root.right, root.data)
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


    inroderTraversal(root) {
        if (!root) return;
        this.inroderTraversal(root.left);
        console.log(root.data)
        this.inroderTraversal(root.right);
    }
}


const bst = new BST();

bst.insert(50)
bst.insert(43)
bst.insert(89)
bst.insert(13)
bst.insert(80)

bst.inroderTraversal(bst.root);

bst.delete(13);

console.log("After Deleting")

bst.inroderTraversal(bst.root);