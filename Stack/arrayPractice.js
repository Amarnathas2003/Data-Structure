
class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        return this.stack.push(data);
    }

    pop() {
        if (this.isEmpty()) {
            return console.log("Stack is in Underflow")
        }
        return this.stack.pop()
    }

    peek() {
        if (this.isEmpty()) {
            return console.log("Stack is in Underflow")
        }
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    display() {
        if (this.isEmpty()) {
            return console.log("Stack is in Underflow")
        }
        console.log(this.stack)
    }
}



const myStack = new Stack()

myStack.push(38)
myStack.push(33)
myStack.push(45)

myStack.display()

console.log(myStack.peek())

myStack.pop();

myStack.display()