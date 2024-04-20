class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChildren(childNode) {
        this.children.push(childNode)
    }

    preOrderTraversal(root) {
        console.log(root.value);
        for (let node of root.children) {
            this.preOrderTraversal(node);
        }
    }

    postOrderTraversal(root) {
        for (let node of root.children) {
            this.postOrderTraversal(node)
        }
        console.log(root.value)
    }

    deleteNode(value) {
        this.children = this.children.filter(node => node.value !== value)
    }

    search(value) {
        if (this.value === value) {
            return this;
        }
        for (let node of this.children) {
            const result = node.search(node);
            if (result) {
                return result;
            }
        }
    }
}

const root = new TreeNode(80);

const child1 = new TreeNode(59)
const child2 = new TreeNode(55)
const child3 = new TreeNode(34)
const child4 = new TreeNode(38)


root.addChildren(child1)
root.addChildren(child2)
root.addChildren(child3)
root.addChildren(child4)

root.preOrderTraversal(root)
// console.log("Second One")
// root.postOrderTraversal(root)

// root.deleteNode(34)
// root.preOrderTraversal(root)

const foundNode = root.search(55);

if (foundNode) {
    console.log(`Node with value ${55} found in the tree.`);
} else {
    console.log(`Node with value ${55} not found in the tree.`);
}