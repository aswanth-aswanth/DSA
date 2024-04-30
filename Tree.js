class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    addRoot(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
        } else {
            console.log("Root already exists.");
        }
    }

    addChild(parentValue, value) {
        const parentNode = this.findNode(this.root, parentValue);
        if (parentNode) {
            const newNode = new TreeNode(value);
            parentNode.children.push(newNode);
        } else {
            console.log("Parent node not found.");
        }
    }

    findNode(node, value) {
        if (!node) return null;
        if (node.value === value) return node;

        for (const child of node.children) {
            const foundNode = this.findNode(child, value);
            if (foundNode) return foundNode;
        }

        return null;
    }

    removeNode(value) {
        if (this.root.value === value) {
            this.root = null;
            return;
        }

        this.removeNodeFromChildren(this.root, value);
    }

    removeNodeFromChildren(node, value) {
        node.children = node.children.filter(child => child.value !== value);

        for (const child of node.children) {
            this.removeNodeFromChildren(child, value);
        }
    }

    traverseBFS() {
        const queue = [this.root];
        const result = [];

        while (queue.length > 0) {
            const currentNode = queue.shift();
            result.push(currentNode.value);

            for (const child of currentNode.children) {
                queue.push(child);
            }
        }

        return result;
    }

    traverseDFS() {
        const result = [];
        this._traverseDFS(this.root, result);
        return result;
    }

    _traverseDFS(node, result) {
        if (!node) return;

        result.push(node.value);

        for (const child of node.children) {
            this._traverseDFS(child, result);
        }
    }
}

// Example usage:
const tree = new Tree();
tree.addRoot("A");
tree.addChild("A", "B");
tree.addChild("A", "C");
tree.addChild("B", "D");
tree.addChild("B", "E");
tree.addChild("C", "F");

console.log("Breadth First Traversal:", tree.traverseBFS()); // Output: [ 'A', 'B', 'C', 'D', 'E', 'F' ]
console.log("Depth First Traversal:", tree.traverseDFS()); // Output: [ 'A', 'B', 'D', 'E', 'C', 'F' ]

tree.removeNode("B");

console.log("After removing node 'B':");
console.log("Breadth First Traversal:", tree.traverseBFS()); // Output: [ 'A', 'C', 'F' ]
console.log("Depth First Traversal:", tree.traverseDFS()); // Output: [ 'A', 'C', 'F' ]
