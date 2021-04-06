function Queue() {
    this.collection = [];

    this.enqueue = (data) => {
        this.collection.push(data);
        console.log(' Queue after push operation ', this.collection);
    }

    this.front = () => {
        console.log("Front of the Queue ", this.collection[0])
    }

    this.dequeue = () => {
        result = this.collection.shift();
        console.log('Data removed from Queue ', result);
    }

    this.print = () => {
        console.log("Queue = ", this.collection);
    }
}

let queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

queue.dequeue()
queue.front()

queue.print()