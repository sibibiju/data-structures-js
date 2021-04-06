class MinHeap {
    constructor() {
        this.heap = [null];
    }

    add(num) {
        this.heap.push(num);
        if (this.heap.length > 2) {
            let index = this.heap.length - 1;
            let parentIndex = Math.floor(index / 2);

            while (parentIndex > 0 && this.heap[parentIndex] > this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

                index = parentIndex;
                parentIndex = Math.floor(index / 2);
            }
        }

        return true;
    }

    //removes the smallest element
    remove() {
        let smallest = (this.heap[1] === undefined) ? null : this.heap[1];
        if (this.heap.length == 2) {
            this.heap.splice(1);
        } else {
            let length = this.heap.length;
            this.heap[1] = this.heap[length - 1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3 && this.heap[2] < this.heap[1]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            } else if (this.heap.length > 3) {
                let i = 1;
                let left = 2 * i;
                let right = 2 * i + 1;

                length = this.heap.length;

                while (this.heap[i] > this.heap[left] || this.heap[i] > this.heap[right]) {
                    if (this.heap[left] < this.heap[right]) {
                        [this.heap[left], this.heap[i]] = [this.heap[i], this.heap[left]];
                        i = i * 2;
                    } else {
                        [this.heap[right], this.heap[i]] = [this.heap[i], this.heap[right]];
                        i = i * 2 + 1;
                    }

                    left = 2 * i;
                    right = 2 * i + 1;

                    if (this.heap[left] === undefined || this.heap[right] === undefined) {
                        break;
                    }
                }
            }
        }

        return smallest;
    }

    sort() {
        let sorted_array = [];
        while (this.heap.length > 1) {
            let smallest = this.remove();
            console.log("Smallest element = ", smallest);
            sorted_array.push(smallest);
        }

        return sorted_array;
    }

    print() {
        return this.heap;
    }
}

let minHeap = new MinHeap();
minHeap.add(2);
minHeap.add(3);
minHeap.add(4);
minHeap.add(1);
minHeap.add(5);
minHeap.add(6);

console.log("Element removed = ", minHeap.remove());
console.log(" Array = ", minHeap.print());
console.log(" Sorted Array = ", minHeap.sort());