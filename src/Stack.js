class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }

    push = (data) => {
        this.stack[this.count] = data;
        this.count++;
    }

    pop = () => {
        if (this.count === 0) {
            return null;
        }

        let data = this.stack[this.count - 1];
        delete this.stack[this.count - 1];

        this.count--;
        return data;
    }

    peek = () => {
        if (this.count === 0) {
            return null;
        }

        let data = this.stack[this.count - 1];
        return data;
    }

    data = () => {
        return this.stack;
    }
}

let stackDS = new Stack();

console.log(stackDS.push(1));
console.log(stackDS.push(2));
console.log(stackDS.push(3));

console.log(stackDS.data());

console.log("Value popped from stack ", stackDS.pop());

console.log(stackDS.data());

console.log("Value peeked from stack ", stackDS.peek());