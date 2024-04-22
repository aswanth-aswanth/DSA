class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node in the list, initially null
    }
}

class LinkedList {
    constructor(values) {
        let head = new Node(values[0]); // Create the head node with the first value
        let current = head; // Pointer to traverse the list
        // Iterate through the remaining values to create the linked list
        for (let i = 1; i < values.length; i++) {
            current.next = new Node(values[i]); // Create a new node with the value
            current = current.next; // Move the pointer to the new node
        }
        this.head = head; // Set the head of the linked list
    }

    // Method to print all the elements in the linked list
    printLinkedList() {
        let current = this.head; // Start from the head of the list
        while (current) {
            console.log(current.data); // Print the data of the current node
            current = current.next; // Move to the next node
        }
    }

    // Method to calculate the length of the linked list
    lengthOfLinkedList() {
        let current = this.head; // Start from the head of the list
        let count = 0; // Initialize count to 0
        while (current) {
            count++; // Increment count for each node
            current = current.next; // Move to the next node
        }
        return count; // Return the total count
    }

    // Method to check if the linked list is empty
    isEmpty() {
        return this.head === null; // If head is null, list is empty
    }

    // Method to append a node with the given value to the end of the linked list
    appendNode(value) {
        let current = this.head; // Start from the head of the list
        while (current.next) {
            current = current.next; // Move to the last node
        }
        current.next = new Node(value); // Append the new node to the end
    }

    // Method to add a node with the given value to the beginning of the linked list
    addNodeBeginning(value) {
        let current = new Node(value); // Create a new node with the value
        current.next = this.head; // Set the next of the new node to the current head
        this.head = current; // Update the head to the new node
    }

    // Method to remove a node with the given value from the linked list
    removeNode(value) {
        if (!this.head) return; // If list is empty, return
        if (this.head.data === value) { // If value is at the head
            this.head = this.head.next; // Update head to the next node
            return;
        }
        let current = this.head; // Start from the head of the list
        while (current.next) {
            if (current.next.data === value) { // If next node contains the value
                current.next = current.next.next; // Remove the next node
                return;
            }
            current = current.next; // Move to the next node
        }
    }
}

let linkedList = new LinkedList([1, 2, 3, 4, 5]); // Create a new linked list

linkedList.printLinkedList(); // Print all elements in the linked list
console.log("Length of linkedList:", linkedList.lengthOfLinkedList()); // Print the length of the linked list
console.log("Is LinkedList Empty:", linkedList.isEmpty()); // Check if the linked list is empty
linkedList.appendNode(6); // Append a node with value 6 to the end
linkedList.addNodeBeginning(0); // Add a node with value 0 to the beginning
linkedList.printLinkedList(); // Print all elements in the updated linked list
