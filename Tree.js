class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    // Method to add a child to the current node
    addChild(childNode) {
        this.children.push(childNode);
    }

    // Method to remove a child from the current node
    removeChild(childNode) {
        const index = this.children.indexOf(childNode);
        if (index > -1) {
            this.children.splice(index, 1);
        }
    }

    // Method to get all children of the current node
    getChildren() {
        return this.children;
    }

    // Method to check if the current node has any children
    hasChildren() {
        return this.children.length > 0;
    }
}

// Example usage
const root = new TreeNode('root');
const child1 = new TreeNode('child1');
const child2 = new TreeNode('child2');

root.addChild(child1);
root.addChild(child2);

console.log(root.getChildren()); // Output: [TreeNode { value: 'child1', children: [] }, TreeNode { value: 'child2', children: [] }]
