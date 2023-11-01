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
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
        return;
    }


    insertPosition(position, value) {
        let newNode = new Node(value);

        if (this.head == null) {
            this.head = newNode;
            return;
        }

        position = position - 1;
        let count = 1;
        let current = this.head;

        while (count != position) {
            count++;
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
    }


    deleteNode(position) {

        if (this.head == null) {
            console.log("Nothing to delete")
            return;
        }

        if (position == 0) {
            this.head = this.head.next;
            return;
        }

        if (position == 1) {
            const current = this.head;
            this.head = current.next;
            current.next = null;
            return;
        }

        let current = this.head;
        position = position - 1;
        let count = 1;

        while (count != position) {
            count++;
            current = current.next;
        }
        current.next = current.next.next;
    }

    arrayLinkedlist(array) {
        for (let i = 0; i < array.length; i++) {
            this.append(array[i]);
        }
    }


    getSize() {
        if (this.head == null) {
            console.log("Empty Linked List");
            return;
        }

        if (this.head.next == null) {
            console.log(1)
            return;
        }

        let current = this.head;
        let count = 1;
        while (current.next != null) {
            count++;
            current = current.next;
        }
        console.log(count);
        return;
    }




    insertBetween(value, firstValue, secondValue) {
        const newNode = new Node(value);

        if (this.head == null) {
            console.log("The List Is Empty");
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.value == firstValue && current.next.value == secondValue) {
                newNode.next = current.next;
                current.next = newNode;
                return;
            }
            current = current.next;
        }

        console.log("Values not found in list")
        return;
    }








    display() {

        if (this.head == null) {
            console.log("Nothing top Display")
            return;
        }

        let current = this.head;
        let result = '';
        while (current !== null) {
            result += `${current.value} => `
            current = current.next;
        }

        console.log(result, "NULL");
    }
}

const myList = new LinkedList()

myList.append(10)
myList.append(13)
myList.append(58)
myList.append(49)
myList.append(20)

myList.display()

myList.insertPosition(6, 99)

myList.display();

myList.deleteNode(6)

myList.display();

const array = [1, 2, 3, 4, 5]

myList.arrayLinkedlist(array)

myList.display()

myList.insertBetween(88, 4, 5)

myList.display();

myList.getSize()