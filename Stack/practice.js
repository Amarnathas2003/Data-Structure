class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top
        this.top = newNode
        this.size++
    }

    display() {
        let current = this.top;
        let elements = [];
        while (current) {
            elements.push(current.data)
            current = current.next;
        }
        return elements;
    }

    peek() {
        return this.top.data;
    }
}

const myStack = new Stack()
myStack.push(20)
myStack.push(21)
myStack.push(22)
myStack.push(23)
myStack.push(24)

console.log(myStack.display())
console.log("After peek", myStack.display())
console.log(myStack.peek())