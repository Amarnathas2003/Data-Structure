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

    addFirst(element) {
        let newNode = new Node(element)

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    printList() {
        if (this.head === null) {
            console.log("List is empty")
            return;
        }

        let current = this.head;

        while (current !== null) {
            console.log(current.value)
            current = current.next;
        }
    }

    getElement(element) {
        let index = 0;

        let current = this.head;
        while (current.value != element) {
            current = current.next;
            index += 1;
        }

        return index;
    }
}

const myList = new LinkedList()

myList.addFirst(1)
myList.addFirst(5)
myList.addFirst(7)
myList.addFirst(3)
myList.addFirst(8)
myList.addFirst(2)
myList.addFirst(3)

myList.printList()
console.log("This is the index", myList.getElement(8))