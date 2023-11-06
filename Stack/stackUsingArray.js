class Stack {
    constructor() {
        this.stack = [];
    }

    push(data) {
        this.stack.push(data)
    }

    pop() {
        if (this.isEmpty()) {
            return console.log("Stack is Underflow")
        }
        return this.stack.pop();
    }

    //Returns Array top Element Without Removing it.
    peek() {
        if (this.isEmpty()) {
            return console.log("Stack is Underflow");
        }
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }

    display() {
        if (this.isEmpty()) {
            return console.log("Stack is in Underflow");
        }
        for (let i = 0; i < this.stack.length; i++) {
            console.log(this.stack[i]);
        }
    }
}

const stack = new Stack();

stack.push(10)
stack.push(56)
stack.push(24)
stack.push(54)
stack.push(80)

stack.display()

console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())

