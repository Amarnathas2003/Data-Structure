
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        return this.queue.push(data);
    }

    dequeue() {
        if (this.isEmpty()) {
            return console.log("Queue is Empty")
        }
        //shift() -> Removes the First element from the Queue
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return console.log("Queue is Empty")
        }
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    display() {
        return console.log(this.queue);
    }
}

const myQueue = new Queue();

myQueue.enqueue(10)
myQueue.enqueue(43)
myQueue.enqueue(67)
myQueue.enqueue(24)

myQueue.display()

myQueue.dequeue()

myQueue.display()

console.log(myQueue.peek())
