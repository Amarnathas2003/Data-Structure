class maxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(childIndex) {
        return ~~((childIndex - 1) / 2);
    }

    hasParentIndex(index) {
        return this.getParentIndex(index) >= 0;
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    addNode(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParentIndex(index) && this.parent(index) < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }


    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    hasLeftChildIndex(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChildIndex(index) {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)];
    }

    removeNode() {
        if (this.heap.length === 0) return null;
        let data = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return data;
    }

    heapifyDown() {
        let index = 0;

        while (this.hasLeftChildIndex(index)) {
            let largestChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChildIndex(index) && this.rightChild(index) > this.leftChild(index)) {
                largestChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[largestChildIndex]) {
                this.swap(index, largestChildIndex);
            } else {
                break;
            }

            index = largestChildIndex;
        }
    }

    printHeap() {
        let output = "";
        for (let i = 0; i < this.heap.length; i++) {
            output += `${this.heap[i]} , `;
        }
        console.log(output);
    }
}

let heap = new maxHeap();

heap.addNode(56);
heap.addNode(8);
heap.addNode(34);
heap.addNode(88);
heap.addNode(7);

heap.printHeap();

heap.removeNode();
console.log("After removing the item");
heap.printHeap();
