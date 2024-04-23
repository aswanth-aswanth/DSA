class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.prev = null; // Pointer to the previous node, initially null
        this.next = null; // Pointer to the next node, initially null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null; // Pointer to the first node in the list, initially null
        this.tail = null; // Pointer to the last node in the list, initially null
    }

    // Insertion at the end of the list
    append(data) {
        const newNode = new Node(data); // Create a new node with the given data
        if (!this.head) { // If the list is empty
            this.head = newNode; // Set the new node as both head and tail
            this.tail = newNode;
        } else { // If the list is not empty
            newNode.prev = this.tail; // Set the new node's previous pointer to the current tail
            this.tail.next = newNode; // Set the current tail's next pointer to the new node
            this.tail = newNode; // Update the tail to the new node
        }
    }

    // Insertion at the beginning of the list
    prepend(data) {
        const newNode = new Node(data); // Create a new node with the given data
        if (!this.head) { // If the list is empty
            this.head = newNode; // Set the new node as both head and tail
            this.tail = newNode;
        } else { // If the list is not empty
            newNode.next = this.head; // Set the new node's next pointer to the current head
            this.head.prev = newNode; // Set the current head's previous pointer to the new node
            this.head = newNode; // Update the head to the new node
        }
    }

    // Deletion from the end of the list
    pop() {
        if (!this.head) return null; // If the list is empty, return null
        const poppedNode = this.tail; // Store a reference to the current tail
        if (this.head === this.tail) { // If there's only one node in the list
            this.head = null; // Set both head and tail to null
            this.tail = null;
        } else { // If there are multiple nodes in the list
            this.tail = this.tail.prev; // Update the tail to the previous node
            this.tail.next = null; // Set the new tail's next pointer to null
            poppedNode.prev = null; // Set the popped node's previous pointer to null
        }
        return poppedNode.data; // Return the data of the popped node
    }

    // Deletion from the beginning of the list
    shift() {
        if (!this.head) return null; // If the list is empty, return null
        const shiftedNode = this.head; // Store a reference to the current head
        if (this.head === this.tail) { // If there's only one node in the list
            this.head = null; // Set both head and tail to null
            this.tail = null;
        } else { // If there are multiple nodes in the list
            this.head = this.head.next; // Update the head to the next node
            this.head.prev = null; // Set the new head's previous pointer to null
            shiftedNode.next = null; // Set the shifted node's next pointer to null
        }
        return shiftedNode.data; // Return the data of the shifted node
    }

    // Forward traversal
    forwardTraversal() {
        let current = this.head; // Start from the head of the list
        const result = []; // Array to store the data of nodes
        while (current) { // Iterate through the list until current becomes null
            result.push(current.data); // Push the data of the current node to the result array
            current = current.next; // Move to the next node
        }
        return result; // Return the result array
    }

    // Backward traversal
    backwardTraversal() {
        let current = this.tail; // Start from the tail of the list
        const result = []; // Array to store the data of nodes
        while (current) { // Iterate through the list until current becomes null
            result.push(current.data); // Push the data of the current node to the result array
            current = current.prev; // Move to the previous node
        }
        return result; // Return the result array
    }

    // Search for a node with given data
    search(data) {
        let current = this.head; // Start from the head of the list
        while (current) { // Iterate through the list until current becomes null
            if (current.data === data) return current; // If current node's data matches the given data, return the current node
            current = current.next; // Move to the next node
        }
        return null; // If the data is not found, return null
    }

    // Efficient removal of a node
    removeNode(node) {
        if (!node) return; // If the node is null, return
        if (node === this.head) { // If the node is the head of the list
            this.head = this.head.next; // Update the head to the next node
            if (this.head) this.head.prev = null; // If the new head exists, set its previous pointer to null
        } else if (node === this.tail) { // If the node is the tail of the list
            this.tail = this.tail.prev; // Update the tail to the previous node
            if (this.tail) this.tail.next = null; // If the new tail exists, set its next pointer to null
        } else { // If the node is somewhere in the middle of the list
            node.prev.next = node.next; // Set the next pointer of the previous node to the next node
            node.next.prev = node.prev; // Set the previous pointer of the next node to the previous node
        }
    }

    // Check if the list is empty
    isEmpty() {
        return !this.head; // If the head is null, the list is empty
    }

    // Get the size of the list
    size() {
        let current = this.head; // Start from the head of the list
        let count = 0; // Initialize count to 0
        while (current) { // Iterate through the list until current becomes null
            count++; // Increment count for each node
            current = current.next; // Move to the next node
        }
        return count; // Return the total count
    }
}

// Example usage
const list = new DoublyLinkedList(); // Create a new doubly linked list
list.append(1); // Append node with data 1
list.append(2); // Append node with data 2
list.append(3); // Append node with data 3
list.prepend(0); // Prepend node with data 0
console.log("Forward traversal:", list.forwardTraversal()); // Output: [0, 1, 2, 3]
console.log("Backward traversal:", list.backwardTraversal()); // Output: [3, 2, 1, 0]
list.pop(); // Remove node from the end
console.log("After popping:", list.forwardTraversal()); // Output: [0, 1, 2]
list.shift(); // Remove node from the beginning
console.log("After shifting:", list.forwardTraversal()); // Output: [1, 2]
console.log("Is list empty?", list.isEmpty()); // Output: false
console.log("Size of list:", list.size()); // Output: 2
