class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    //add at first
    addFirst(element) {
        let newNode = new Node(element)

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    //add at last
    addLast(element) {
        let newNode = new Node(element)

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    removeFirst() {
        if (this.head === null) {
            console.log("Nothing to Remove From Array")
        }

        if (this.head.next === null) {
            this.head = null;
        }

        this.head = this.head.next;
    }

    removeLast() {
        if (this.head === null) {
            console.log("Nothing to Remove From Array")
        }

        if (this.head.next === null) {
            this.head = null;
        }

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
    }


    display() {

        if (this.head === null) {
            console.log("The Linked List is empty")
            return;
        }

        let current = this.head;
        while (current !== null) {
            console.log(current.value)
            current = current.next;
        }
    }
}

const myList = new LinkedList()

myList.addFirst(10)
myList.addFirst(20)

myList.display()

myList.addLast(30)
myList.addLast(40)


myList.display()

myList.removeFirst()

myList.display()

myList.removeLast()


myList.display()
