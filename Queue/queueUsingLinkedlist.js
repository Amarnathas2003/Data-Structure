
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
        const newNode = new Node(data)
        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return console.log("Queue is Empty");
        }
        let removeElement = this.front;
        this.front = this.front.next;
        this.size--;
        return removeElement.data;
    }

    peek() {
        if (this.isEmpty()) {
            return console.log("Queue is Empty");
        }
        return this.front.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    display() {
        if (this.isEmpty()) {
            return console.log("Queue is Empty");
        }
        let current = this.front;
        let printData = [];
        while (current.next !== null) {
            printData.push(current.data);
            current = current.next;
        }
        console.log(printData);
    }
}

const myQueue = new Queue();

myQueue.enqueue(29)
myQueue.enqueue(54)
myQueue.enqueue(87)
myQueue.enqueue(32)
myQueue.enqueue(89)

myQueue.display();

myQueue.dequeue();

myQueue.display()