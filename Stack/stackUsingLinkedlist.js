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
        let newData = new Node(data);
        newData.next = this.top; //Setting Current top node as newNode.next node
        this.top = newData;
        this.size++;
    }

    pop() {
        if (this.isEmpty) {
            return console.log("Stack is empty")
        }
        const poppedData = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedData;
    }

    peek() {
        if (this.isEmpty) {
            return console.log("Stack is Empty");
        }
        return this.top.data;
    }

    display() {
        if (this.isEmpty) {
            return console.log("Stack is Empty");
        }
        let current = this.top;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        return elements;
    }
}

const stack = new Stack();

stack.push(45)
stack.push(28)
stack.push(79)
stack.push(45)

console.log(stack.display());

stack.pop()

console.log(stack.display());

console.log(stack.peek());

