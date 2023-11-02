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

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }

    delete(value) {
        if (!this.head) {
            console.log("Nothing to delete")
            return;
        }

        if (this.head.value == value) {
            this.head = null;
            return;
        }

        let current = this.head;
        let previous = null;
        
        while (current && current.next.value != value) {
            previous = current;
            current = current.next;
        }

        previous.next = current.next.next;
    }

    display() {
        let current = this.head;
        let result = '';
        while (current != null) {
            result 
        }
    }

}