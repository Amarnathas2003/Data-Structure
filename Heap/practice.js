class heap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(childIndex) {
        return ~~((childIndex - 1) / 2);
    }

    hasParentIndex(index) {
        return this.getParentIndex(index) >= 0;
    }

    parent(childIndex) {
        return this.heap[this.getParentIndex(childIndex)];
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    addNode(data) {
        this.heap.push(data)
        this.heapifyUp();
    }

    heapifyUp() {
        let insertedIndex = this.heap.length - 1;
        while (this.hasParentIndex(insertedIndex) && this.parent(insertedIndex) > this.heap[insertedIndex]) {
            this.swap(this.getParentIndex(insertedIndex), insertedIndex)
            this.insertedIndex = this.getParentIndex(insertedIndex);
        }
    }

    getLeftChildIndex(currentIndex) {
        return 2 * currentIndex + 1;
    }

    getRightChildIndex(currentIndex) {
        return 2 * currentIndex + 2;
    }

    hasLeftIndex(currentIndex) {
        return this.getLeftChildIndex(currentIndex) < this.heap.length;
    }

    hasRightIndex(currentIndex) {
        return this.getRightChildIndex(currentIndex) < this.heap.length;
    }

    rightIndex(currentIndex) {
        return this.heap[this.getRightChildIndex(currentIndex)];
    }

    leftIndex(currentIndex) {
        return this.heap[this.getLeftChildIndex(currentIndex)];
    }

    removeNode() {
        if (this.heap.length === 0) return null;
        const data = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return data;
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftIndex(index)) {
            let smallestChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightIndex(index) && this.rightIndex(index) < this.leftIndex(index)) {
                smallestChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallestChildIndex]) {
                break;
            } else {
                this.swap(index, smallestChildIndex);
            }
            index = smallestChildIndex;
        }
    }

    printHeap() {
        let output = "";
        for (let i = 0; i < this.heap.length; i++) {
            output += `${this.heap[i]}, `;
        }
        console.log(output);
    }
}

const heapSort = (array) => {
    let newHeap = new heap();

    for (let i = 0; i < array.length; i++) {
        newHeap.addNode(array[i]);
    }

    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(newHeap.removeNode());
    }
    return result;
}

const myHeap = new heap();

myHeap.addNode(47)
myHeap.addNode(78)
myHeap.addNode(42)
myHeap.addNode(65)
myHeap.addNode(46)

myHeap.printHeap();

console.log("After Removing the element")
myHeap.removeNode()

myHeap.printHeap();


const array = [6, 7, 23, 9, 3, 5]

console.log(heapSort(array));
