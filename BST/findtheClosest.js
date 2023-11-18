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

    //Get the Closest value near to a node
    findClosest(data) {
        if (!this.root) return null;
        return this.findClosesthelper(this.root, data, Number.MAX_SAFE_INTEGER);
    }

    findClosesthelper(node, data, closest) {

        if (!node) return closest;

        //At first this one will be always be true
        if (Math.abs(data - node.data) < Math.abs(data - closest)) {
            closest = node.data;
        }

        if (data < node.data) {
            closest = this.findClosesthelper(node.left, data, closest);
        } else if (data > node.data) {
            closest = this.findClosesthelper(node.right, data, closest);
        } else {
            //Target data equals to current nodes value
            return node.data;
        }
        
        return closest;
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

console.log("Closest Value is", bst.findClosest(12))