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
            //Here node to be deleted has been found in the tree
            //Cheking for nodes with one children or no children
            // Case 1: Node to be deleted has one child or no child
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            // Case 2: Node to be deleted has two children
            // So we will get the min value while is current nodes left min value
            root.data = this.getMinValue(root.right);

            // Delete the in-order successor from the right subtree
            //(Beacuse it is now used as root node)
            root.right = this.deleteNode(root.right, root.data)
        }
        
        //Here with route is new bst without the specified delete element
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