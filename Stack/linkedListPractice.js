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
        let newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return console.log("Stack is in Underflow");
        }
        let poppedData = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedData;
    }

    peek() {
        if (this.isEmpty()) {
            return console.log("Stack is in Underflow");
        }
        return this.top.data;
    }

    isEmpty() {
        return this.top === null;
    }

    display() {
        if (this.isEmpty()) {
            return console.log("Stack is in Underflow");
        }
        let current = this.top;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

const myStack = new Stack();

myStack.push(46)
myStack.push(76)
myStack.push(72)
myStack.push(23)

console.log(myStack.display());

console.log(myStack.peek());

myStack.pop()

console.log(myStack.display());