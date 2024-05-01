class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    search(data) {
        return this.searchNode(this.root, data);
    }

    searchNode(node, data) {
        if (node === null) {
            return false;
        }

        if (data < node.data) {
            return this.searchNode(node.left, data);
        } else if (data > node.data) {
            return this.searchNode(node.right, data);
        } else {
            return true;
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            } else if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            } else {
                const minNode = this.findMinNode(node.right);
                node.data = minNode.data;
                node.right = this.removeNode(node.right, minNode.data);
                return node;
            }
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    findMaxNode(node) {
        if (node.right === null) {
            return node;
        } else {
            return this.findMaxNode(node.right);
        }
    }

    isEmpty() {
        return this.root === null;
    }

    inorderTraversal(callback) {
        this.inorderTraversalNode(this.root, callback);
    }

    inorderTraversalNode(node, callback) {
        if (node !== null) {
            this.inorderTraversalNode(node.left, callback);
            callback(node.data);
            this.inorderTraversalNode(node.right, callback);
        }
    }
}

// Example usage:

const bst = new BinarySearchTree();

// Inserting nodes
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(17);

console.log("Inorder traversal:");
bst.inorderTraversal(data => console.log(data));
// Sample output: 3, 5, 7, 10, 12, 15, 17

console.log("Search 7:", bst.search(7));
// Sample output: true

console.log("Search 20:", bst.search(20));
// Sample output: false

// Removing a node
bst.remove(5);
console.log("After removing 5:");
bst.inorderTraversal(data => console.log(data));
// Sample output: 3, 7, 10, 12, 15, 17

// Finding minimum and maximum nodes
console.log("Minimum value:", bst.findMinNode(bst.root).data);
// Sample output: 3
console.log("Maximum value:", bst.findMaxNode(bst.root).data);
// Sample output: 17

// Checking if the tree is empty
console.log("Is tree empty?", bst.isEmpty());
// Sample output: false