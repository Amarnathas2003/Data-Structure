class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
            this.size++;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.size++;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return console.log("Queue is Empty");
        }
        let removeElement = this.front.data;
        this.front = this.front.next;
        this.size--;
        return removeElement;
    }

    peek() {
        if (this.isEmpty()) {
            return console.log("Queue is Empty");
        }
        return this.front.data;
    }

    isEmpty() {
        return this.front === null;
    }

    display() {
        if (this.isEmpty()) {
            return console.log("Queue is Empty");
        }
        let current = this.front;
        let elements = [];
        while (current) {
            elements.push(current.data)
            current = current.next;
        }
        return elements;
    }
}

const myQueue = new Queue()

myQueue.enqueue(64)
myQueue.enqueue(65)
myQueue.enqueue(24)
myQueue.enqueue(87)

myQueue.dequeue()

console.log(myQueue.display());