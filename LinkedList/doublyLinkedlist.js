class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }


    prepend(value) {

        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }


    display(reverse = false) {
        let current;
        if (reverse) {
            current = this.tail;
        } else {
            current = this.head;
        }
        while (current) {
            console.log(current.value);
            if (reverse) {
                current = current.prev;
            } else {
                current = current.next;
            }
        }
    }
}

const myList = new DoublyLinkedlist();

myList.append(20)
myList.append(30)
myList.append(50)
myList.append(60)

myList.display();