class minHeap {
    constructor() {
        this.heap = [];
    }

    add(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    swap(index1, index2) {
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp;
    }

    getParentIndex(childIndex) {
        return ~~((childIndex - 1) / 2)
    }

    hasParentIndex(index) {
        return this.getParentIndex(index) >= 0;
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)]
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParentIndex(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index)
            index = this.getParentIndex(index)
        }
    }

    //<------------------------- Remove from the heap ----------------------->
    remove() {
        if (this.heap.length === 0) return null;
        const data = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return data;
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    hasLeftChildIndex(index) {
        return this.getLeftChildIndex(index) < this.heap.length
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2
    }

    hasRightChildIndex(index) {
        return this.getRightChildIndex(index) < this.heap.length
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)]
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)]
    }


    heapifyDown() {
        let index = 0;
        while (this.hasLeftChildIndex(index)) {
            let smallestChildIndex = this.getLeftChildIndex(index);

            if (this.hasRightChildIndex(index) && this.rightChild(index) < this.leftChild(index)) {
                smallestChildIndex = this.getRightChildIndex(index)
            }

            if (this.heap[index] > this.heap[smallestChildIndex]) {
                this.swap(index, smallestChildIndex);
            } else {
                break;
            }
            index = smallestChildIndex;
        }
    }

    printHeap() {
        let str = "";
        for (let i = 0; i < this.heap.length; i++) {
            str += `${this.heap[i]} `
        }
        console.log(str)
    }
}

const myHeap = new minHeap();
myHeap.add(49);
myHeap.add(39);
myHeap.add(24);
myHeap.printHeap();
myHeap.remove();
myHeap.printHeap();