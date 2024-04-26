// Node class to represent each node in the doubly circular linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Pointer to the next node
        this.prev = null; // Pointer to the previous node
    }
}

// DoublyCircularLinkedList class to represent the doubly circular linked list
class DoublyCircularLinkedList {
    constructor() {
        this.head = null; // Pointer to the head node
        this.tail = null; // Pointer to the tail node
        this.size = 0;    // Size of the list
    }

    // Method to append a new node with data at the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
            // Make the new node point to itself since it's the only node in the list
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            // If the list is not empty
            // Set the new node's previous pointer to the current tail
            newNode.prev = this.tail;
            // Set the new node's next pointer to the head (since it's circular)
            newNode.next = this.head;
            // Make the current tail node point to the new node
            this.tail.next = newNode;
            // Make the head node's previous pointer point to the new node
            this.head.prev = newNode;
            // Update the tail pointer to the new node
            this.tail = newNode;
        }
        // Increment the size of the list
        this.size++;
    }

    // Method to prepend a new node with data at the beginning of the list
    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            // If the list is empty, set both head and tail to the new node
            this.head = newNode;
            this.tail = newNode;
            // Make the new node point to itself since it's the only node in the list
            newNode.next = newNode;
            newNode.prev = newNode;
        } else {
            // If the list is not empty
            // Set the new node's previous pointer to the current tail
            newNode.prev = this.tail;
            // Set the new node's next pointer to the head (since it's circular)
            newNode.next = this.head;
            // Make the head node's previous pointer point to the new node
            this.head.prev = newNode;
            // Make the current tail node point to the new node
            this.tail.next = newNode;
            // Update the head pointer to the new node
            this.head = newNode;
        }
        // Increment the size of the list
        this.size++;
    }

    // Method to delete a node with given data from the list
    delete(data) {
        if (!this.head) return; // If the list is empty, do nothing

        let current = this.head;
        // Traverse the list until we find the node with the given data or we reach the head again
        do {
            if (current.data === data) {
                // If the node with the data is found
                if (current === this.head && current === this.tail) {
                    // If there's only one node in the list
                    this.head = null;
                    this.tail = null;
                } else if (current === this.head) {
                    // If the node to delete is the head node
                    // Update the head pointer to the next node
                    this.head = current.next;
                    // Update the new head node's previous pointer to the current tail
                    this.head.prev = this.tail;
                    // Update the current tail node's next pointer to the new head
                    this.tail.next = this.head;
                } else if (current === this.tail) {
                    // If the node to delete is the tail node
                    // Update the tail pointer to the previous node
                    this.tail = current.prev;
                    // Update the new tail node's next pointer to the head
                    this.tail.next = this.head;
                    // Update the head node's previous pointer to the new tail
                    this.head.prev = this.tail;
                } else {
                    // If the node to delete is in between
                    // Update the previous node's next pointer to the next node
                    current.prev.next = current.next;
                    // Update the next node's previous pointer to the previous node
                    current.next.prev = current.prev;
                }
                // Decrement the size of the list
                this.size--;
                return;
            }
            // Move to the next node
            current = current.next;
        } while (current !== this.head); // Continue until we reach the head again
    }

    // Method to traverse the list and return an array of node data
    traverse() {
        if (!this.head) return []; // If the list is empty, return an empty array

        const result = [];
        let current = this.head;
        // Traverse the list until we reach the head again
        do {
            // Add the data of the current node to the result array
            result.push(current.data);
            // Move to the next node
            current = current.next;
        } while (current !== this.head);
        // Return the result array
        return result;
    }

    // Method to search for a node with given data in the list
    search(data) {
        if (!this.head) return false; // If the list is empty, return false

        let current = this.head;
        // Traverse the list until we reach the head again
        do {
            // If the data of the current node matches the given data, return true
            if (current.data === data) return true;
            // Move to the next node
            current = current.next;
        } while (current !== this.head);
        // If the data is not found in the list, return false
        return false;
    }
}

// Example usage:
const dll = new DoublyCircularLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.prepend(0);
console.log(dll.traverse()); // Output: [0, 1, 2, 3]
dll.delete(2);
console.log(dll.traverse()); // Output: [0, 1, 3]
console.log(dll.search(1)); // Output: true
console.log(dll.search(5)); // Output: false
