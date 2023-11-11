//Creating a basic normal tree

class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }

    deleteNode(targetValue) {
        this.children = this.children.filter(child => child.value !== targetValue);
        for (let child of this.children) {
            child.deleteNode(targetValue);
        }
    }

    searchNode(targetValue) {
        if (this.value == targetValue) {
            return this;
        }
        for (let child of this.children) {
            let getNode = child.searchNode(targetValue);
            if (getNode) {
                return getNode;
            }
        }
        return null;
    }

    //Pre Order Traversal
    traversal = (node) => {
        console.log(node.value);
        for (let child of node.children) {
            this.traversal(child);
        }
    }
}

const root = new TreeNode(58)

const child1 = new TreeNode(45)
const child2 = new TreeNode(88)

root.addChild(child1)
root.addChild(child2)

root.traversal(root);

console.log("After the Delete");
root.deleteNode(88);

root.traversal(root);

const searchNode = root.searchNode(45);
if (searchNode) {
    console.log("Element exists with value", searchNode.value);
} else {
    console.log("Element does not exists");
}