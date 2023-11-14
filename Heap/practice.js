class minHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(parentIndex) {
        return ~~((parentIndex - 1) / 2);
    }

    hasParentIndex(index) {
        return this.getParentIndex(index) >= 0;
    }

    parent(index) {
        return this.heap[this.getParentIndex(index)];
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }


    add(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParentIndex(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }



    getLeftChildIndex(childIndex) {
        return 2 * childIndex + 1;
    }
    
    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    hasLeftChildIndex(index) {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChildIndex(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heap.length;
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)]
    }

    leftChild(index) {
        return this.heap[this.getLeftChildIndex(index)]
    }

    remove() {
        if (this.heap.length === 0) return null;
        let data = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return data;
    }

    heapifyDown() {
        let index = 0;

        while (this.hasLeftChildIndex(index)) {
            let smallestChildIndex = this.getLeftChildIndex(index)

            if (this.hasRightChildIndex(index) && this.rightChild(index) < this.leftChild(index)) {
                smallestChildIndex = this.getRightChildIndex(index)
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
        let value = "";
        for (let i = 0; i < this.heap.length; i++) {
            value += `${this.heap[i]} , `;
        }
        console.log(value);
    }
}

const heap = new minHeap()

heap.add(68)
heap.add(89)
heap.add(32)
heap.add(23)

heap.printHeap();

console.log("After removig")

heap.remove()

heap.printHeap()