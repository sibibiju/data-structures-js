class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = null;
        this.right = null
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    add(data) {
        if (this.root === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                    } else {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }

            searchTree(this.root);
        }
    }

    findMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }

        return current.data;
    }

    findMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }

        return current.data;
    }

    find(data) {
        let current = this.root;
        while (current) {
            if (data === current.data) {
                return true;
            } else if (data < current.data) {
                current = current.left;
            } else if (data > current.data) {
                current = current.right;
            }
        }

        return false;
    }

    //remove is not implemented correctly
    remove(data) {
        const removeNode = (node, data) => {
            if (node == null) {
                return null;
            }

            if (node.data === data) {
                if (node.left === null && node.right === null) {
                    return null;
                }

                if (node.left === null) {
                    return node.right;
                }

                if (node.right === null) {
                    return node.left;
                }

                let tempNode = node.right;
                while (tempNode.left !== null) {
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);

                return node;
            } else if (node.data < data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        }
        this.root = removeNode(this.root, data);
    }
}


let bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log("Minimum value in BST ", bst.findMin());
console.log("Maximum value in BST ", bst.findMax());
bst.remove(7);
console.log("Maximum value in BST ", bst.findMax());
console.log("Has value in BST ", bst.find(4));
console.log("Has value in BST ", bst.find(7));

// console.log(bst.remove(2));
console.log(bst);