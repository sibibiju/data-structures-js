let LinkedListNode = function(element) {
    this.element = element;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    size() {
        return this.length;
    }

    add(element) {
        let node = new LinkedListNode(element);

        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        this.length++;
    }

    remove(element) {
        let currentNode = this.head;
        let previousNode;

        if (currentNode.element === element) {
            this.head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            if (currentNode === null) {
                return false;
            } else {
                previousNode.next = currentNode.next;
                this.length--;
                return true;
            }
        }
    }

    isEmpty() {
        return this.length === 0;
    }

    indexOf(element) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode.element !== element) {
            currentNode = currentNode.next;
            index++;
        }

        if (currentNode === null) {
            return null;
        } else {
            return index;
        }
    }

    addAt(index, element) {
        if (index > this.length || index < 0) {
            return false;
        }

        let node = new LinkedListNode(element);
        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index === 0) {
            node.next = currentNode;
            this.head = node;
        } else {
            while (index !== currentIndex && currentIndex < this.length) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }

            if (currentNode === null) return null;

            node.next = currentNode;
            previousNode.next = node;
            this.length++;

            return true;
        }
    }

    removeAt(index) {
        if (index > this.length || index < 0) {
            return false;
        }

        let currentNode = this.head;
        let previousNode;
        let currentIndex = 0;

        if (index === 0) {
            this.head = currentNode.next;
        } else {
            while (index !== currentIndex) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                currentIndex++;
            }

            if (currentNode === null) return null;
            previousNode.next = currentNode.next;

            this.length--;
            return true;
        }
    }

    showElements() {
        let elements = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            elements.push(currentNode.element);
            currentNode = currentNode.next;
        }

        return elements;
    }
}

let linkedlist = new LinkedList();
linkedlist.add('kitten');
linkedlist.add('puppy');
linkedlist.add('dog');
linkedlist.add('cat');
linkedlist.add('man');
linkedlist.addAt(3, "Fish");
linkedlist.remove('dog');


console.log('-- ELEMENTS OF LL = ', linkedlist.showElements());

console.log('--SIZE OF LINKED LIST == ', linkedlist.size());
console.log(linkedlist.removeAt(3));
console.log('--SIZE OF LINKED LIST == ', linkedlist.size());
console.log('-- ELEMENTS OF LL = ', linkedlist.showElements());
console.log('-- INDEX OF FISH = ', linkedlist.indexOf('Fish'));