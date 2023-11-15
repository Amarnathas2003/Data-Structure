class minHeap {
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

    add(data) {
        this.heap.push(data);
        this.heapifyUp();
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParentIndex(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }


    remove() {
        if (this.heap === 0) return null;
        let data = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return data;
    }

    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    hasLeftChildIndex(index) {
        return this.getLeftChildIndex(index) <= this.heap.length;
    }

    hasRightChildIndex(index) {
        return this.getRightChildIndex(index) <= this.heap.length;
    }

    leftIndex(index) {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index) {
        return this.heap[this.getRightChildIndex(index)]
    }

    heapifyDown() {
        let index = 0;
        while (this.hasLeftChildIndex(index)) {

            let smallestChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChildIndex(index) && this.rightChild(index) < this.leftIndex(index)) {
                smallestChildIndex = this.getRightChildIndex;
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
        if (this.heap === 0) return null;
        let result = "";
        for (let i = 0; i < this.heap.length; i++) {
            result += `${this.heap[i]} , `;
        }
        console.log(result);
    }
}

const heapSort = (arr) => {
    let heap = new minHeap()

    for (let i = 0; i < arr.length; i++) {
        heap.add(arr[i]);
    }

    let result = [];
    for (let j = 0; j < arr.length; j++) {
        result.push(heap.remove());
    }
    return result;
}

const heap = new minHeap();

heap.add(67)
heap.add(13)
heap.add(89)
heap.add(45)
heap.add(56)

heap.printHeap();

console.log('After deleting the node')

heap.remove()

heap.printHeap();


const array = [7, 9, 3, 4, 6]
console.log(heapSort(array))