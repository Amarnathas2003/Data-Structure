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

    //Add at first
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
            console.log("Nothing to Remove")
            return
        }

        if (this.head.next === null) {
            this.head = null;
            return
        }
        
        this.head = this.head.next;
    }

    removeLast() {
        if (this.head === null) {
            console.log("Nothing to Remove From Array")
            return
        }

        if (this.head.next === null) {
            this.head = null;
            return
        }

        let current = this.head;
        let previous = null;

        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
    }

    reverseList(point) {
        if(!this.head) {
            console.log("Nothing to reverse");
            return;
        }
        
        let current = this.head;
        while(current && current.value !== point) {
            current = current.next;
        }
        let reverseStart = current.next;
        let nextNode = null;
        let prev = null;
        
        while(reverseStart !== null) {
             nextNode = reverseStart.next;
             reverseStart.next = prev;
             prev = reverseStart;
             reverseStart = nextNode;
        }
        current.next = prev;
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
