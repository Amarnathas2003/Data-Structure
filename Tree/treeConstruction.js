class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChildren(childNode) {
        this.children.push(childNode);
    }

    //Deleting a node in the tree
    deleteNode(targetValue) {
        this.children = this.children.filter(child => child.value !== targetValue);
        for (let child of this.children) {
            child.deleteNode(targetValue);
        }
    }

    //this is pre-order traversal
    preOrderTraversal = (node) => {
        console.log(node.value);
        for (let child of node.children) {
            this.preOrderTraversal(child);
        }
    }

    //this is post-order traversal
    postOrderTraversal = (node) => {
        console.log(node.value);
        for (let child of node.children) {
            this.postOrderTraversal(child);
        }
    }

    //Searching a node in the tree
    searchNode(nodeValue) {
        if (this.value == nodeValue) {
            return this;
        }

        for (let child of this.children) {
            let getNode = child.searchNode(nodeValue);
            if (getNode) {
                return getNode;
            }
        }
        return null;
    }
}

const root = new TreeNode(40);

const child1 = new TreeNode(70)
const child2 = new TreeNode(55)
const child3 = new TreeNode(78)

const child4 = new TreeNode(34)
const child5 = new TreeNode(99)
const child6 = new TreeNode(100)


root.addChildren(child1)
root.addChildren(child2)
root.addChildren(child3)
root.addChildren(child4)
root.addChildren(child5)
root.addChildren(child6)

root.preOrderTraversal(root);

const node = root.searchNode(99)

if (node) {
    console.log("Element found with value", node.value);
} else {
    console.log("Element not found");
}

root.deleteNode(34);
console.log("After Deleting the element")
root.preOrderTraversal(root)
