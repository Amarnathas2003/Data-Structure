class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addNode(value) {
        return this.children.push(value);
    }

    deleteNode(nodeValue) {
        this.children = this.children.filter(child => child.value !== nodeValue);
        for (const child of this.children) {
            child.deleteNode(nodeValue);
        }
    }

    searchNode(nodeValue) {
        if (this.value === nodeValue) {
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

    inOrderTraversal = (node) => {
        console.log(node.value);
        for (let child of node.children) {
            this.inOrderTraversal(child);
        }
    }
}

const root = new TreeNode(50);

const child1 = new TreeNode(89)
const child2 = new TreeNode(45)
const child3 = new TreeNode(56)
const child4 = new TreeNode(34)

root.addNode(child1)
root.addNode(child2)
root.addNode(child3)
root.addNode(child4)

root.inOrderTraversal(root);

const exists = root.searchNode(45);

if (exists) {
    console.log("exists")
} else {
    console.log("Does not exists")
}