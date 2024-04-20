class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(element) {
        const newNode = new Node(element)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    printList() {
        if (!this.head) {
            console.log("No values are here");
            return;
        } else {
            let current = this.head;
            while (current !== null) {
                console.log(current.value);
                current = current.next;
            }
            //For printing reverse order
            // {
            //     let current = this.tail;
            //     while (current !== null) {
            //         console.log(current.value);
            //         current = current.prev;
            //     }
            // }
        }
    }

    deleteNode(value) {
        if (this.head === null) {
            console.log("Linked list is empty nothing to delete");
            return;
        }
        let current = this.head;
        while (current && current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next
                return;
            }
            current = current.next;
        }
    }

    findMiddle() {
        if (this.head === null) {
            console.log("Empty")
            return
        }
        let fast = this.head;
        let slow = this.head;
        while (fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.value;
    }

    reverse() {
        if (this.head === null) {
            console.log("List is empty");
            return;
        }

        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

const myList = new DoublyLinkedlist();

myList.append(20)
myList.append(21)
myList.append(22)
myList.append(23)
myList.append(24)
myList.append(26)

// myList.printList();

myList.deleteNode(21);

myList.printList();

// console.log("Middle", myList.findMiddle())

console.log("After reversing")
myList.reverse();

myList.printList();
