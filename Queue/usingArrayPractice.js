
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        return this.queue.push(data)
    }

    dequeue() {
        if (this.isEmpty()) {
            return console.log("Queue is empty");
        }
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return console.log("Queue is empty");
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    display() {
        if (this.isEmpty()) {
            return console.log("Queue is empty");
        }
        return console.log(this.queue);
    }
}


const myQueue = new Queue()

myQueue.enqueue(37)
myQueue.enqueue(23)
myQueue.enqueue(52)
myQueue.enqueue(54)


myQueue.display()

myQueue.dequeue()

myQueue.display()
