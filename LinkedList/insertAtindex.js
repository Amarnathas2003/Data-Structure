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

    appendNode(value) {
        let newNode = new Node(value)

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode
    }

    addFirst(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        }
        newNode.next = this.head
        this.head = newNode;
    }

    addLast(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    deleteNode(value) {
        if (!this.head) {
            console.log("Nothing to delete here")
            return;
        }

        if (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let current = this.head;
        while (current && current.next !== null) {

            if (current.next.value === value) {

                current.next = current.next.next;
            }
            current = current.next;
        }
    }


    addBefore(position, data) {
        let newNode = new Node(data);
        position = position - 1;

        if (!this.head) {
            console.log("List is empty")
            return;
        }

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (current && count !== position) {
            previous = current;
            current = current.next;
            count++;
        }

        if (count === position) {
            newNode.next = current;
            previous.next = newNode
        }
    }




    addAfter(position, value) {
        const newNode = new Node(value)
        position -= 1;

        if (!this.head) {
            console.log("the lsit is empty")
            return;
        }

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let count = 0;

        while (current && count != position) {
            current = current.next;
            count++;
        }

        newNode.next = current.next;
        current.next = newNode;
    }



    display() {
        let current = this.head;
        let output = "";
        while (current !== null) {
            output += `${current.value} =>`
            current = current.next
        }
        
        console.log(output + "NULL");
    }
}


const myList = new LinkedList()

myList.appendNode(10);
myList.appendNode(20)
myList.appendNode(30)

myList.display()

myList.addBefore(4, 99)

myList.display()

myList.addAfter(2, 88)

myList.display()