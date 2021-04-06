class MaxHeap {
    constructor() {
        this.heap = [null];
    }

    add(num) {
        this.heap.push(num);
        if (this.heap.length > 2) {
            let index = this.heap.length - 1;
            let parentIndex = Math.floor(index / 2);

            while (parentIndex > 0 && this.heap[parentIndex] < this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];

                index = parentIndex;
                parentIndex = Math.floor(index / 2);
            }
        }

        return true;
    }

    //removes the largest element
    remove() {
        let largest = (this.heap[1] === undefined) ? null : this.heap[1];
        if (this.heap.length == 2) {
            this.heap.splice(1);
        } else {
            let length = this.heap.length;
            this.heap[1] = this.heap[length - 1];
            this.heap.splice(this.heap.length - 1);

            if (this.heap.length === 3 && this.heap[2] > this.heap[1]) {
                [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
            } else if (this.heap.length > 3) {
                let i = 1;
                let left = 2 * i;
                let right = 2 * i + 1;

                length = this.heap.length;

                while (this.heap[i] < this.heap[left] || this.heap[i] < this.heap[right]) {
                    if (this.heap[left] > this.heap[right]) {
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

        return largest;
    }

    sort() {
        let sorted_array = [];
        while (this.heap.length > 1) {
            let largest = this.remove();
            console.log("Largest element = ", largest);
            sorted_array.push(largest);
        }

        return sorted_array;
    }

    print() {
        return this.heap;
    }
}

let maxHeap = new MaxHeap();

maxHeap.add(5);
maxHeap.add(2);
maxHeap.add(3);
maxHeap.add(6);
maxHeap.add(4);
maxHeap.add(1);

console.log("Element removed = ", maxHeap.remove());
console.log(" Array = ", maxHeap.print());
console.log(" Sorted Array = ", maxHeap.sort());