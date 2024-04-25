// Define a Node class to represent each element of the linked list
class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node
    }
}

// Define a CircularLinkedList class to implement circular linked list operations
class CircularLinkedList {
    constructor() {
        this.head = null; // Pointer to the first node in the list
        this.tail = null; // Pointer to the last node in the list
        this.size = 0;    // Size of the list
    }

    // Insert a new node at the beginning of the list
    insertAtBeginning(data) {
        const newNode = new Node(data);
        if (!this.head) {
            // If the list is empty, set the new node as both head and tail
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head; // Make the new node point to itself
        } else {
            // If the list is not empty, adjust pointers accordingly
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head; // Make the last node point to the new head
        }
        this.size++;
    }

    // Insert a new node at the end of the list
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            // If the list is empty, set the new node as both head and tail
            this.head = newNode;
            this.tail = newNode;
            newNode.next = this.head; // Make the new node point to itself
        } else {
            // If the list is not empty, adjust pointers accordingly
            this.tail.next = newNode;
            newNode.next = this.head; // Make the new node point to the head
            this.tail = newNode;      // Update the tail to the new node
        }
        this.size++;
    }

    // Insert a new node at a specific position in the list
    insertAtPosition(data, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.insertAtBeginning(data); // If position is 0, insert at the beginning
        } else if (position === this.size) {
            this.insertAtEnd(data);       // If position is at the end, insert at the end
        } else {
            const newNode = new Node(data);
            let current = this.head;
            let count = 0;
            while (count < position - 1) {
                current = current.next;
                count++;
            }
            newNode.next = current.next;
            current.next = newNode;
            this.size++;
        }
    }

    // Delete the node at the beginning of the list
    deleteAtBeginning() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        if (this.head === this.tail) {
            // If there is only one node in the list
            this.head = null;
            this.tail = null;
        } else {
            // If there are more than one nodes in the list
            this.head = this.head.next;
            this.tail.next = this.head; // Make the last node point to the new head
        }
        this.size--;
    }

    // Delete the node at the end of the list
    deleteAtEnd() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }

        if (this.head === this.tail) {
            // If there is only one node in the list
            this.head = null;
            this.tail = null;
        } else {
            // If there are more than one nodes in the list
            let current = this.head;
            while (current.next !== this.tail) {
                current = current.next;
            }
            current.next = this.head; // Make the second last node point to the head
            this.tail = current;       // Update the tail to the second last node
        }
        this.size--;
    }

    // Delete the node at a specific position in the list
    deleteAtPosition(position) {
        if (position < 0 || position >= this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.deleteAtBeginning(); // If position is 0, delete at the beginning
        } else if (position === this.size - 1) {
            this.deleteAtEnd();       // If position is at the end, delete at the end
        } else {
            let current = this.head;
            let count = 0;
            while (count < position - 1) {
                current = current.next;
                count++;
            }
            current.next = current.next.next;
            this.size--;
        }
    }

    // Display the elements of the list
    display() {
        if (!this.head) {
            console.log("List is empty");
            return;
        }
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head); // Iterate until we reach the head again
    }
}

// Example usage:
const circularList = new CircularLinkedList();
circularList.insertAtEnd(1);
circularList.insertAtEnd(2);
circularList.insertAtEnd(3);
circularList.display(); // Output: 1 2 3

circularList.insertAtBeginning(0);
circularList.display(); // Output: 0 1 2 3

circularList.deleteAtEnd();
circularList.display(); // Output: 0 1 2

circularList.insertAtPosition(4, 3);
circularList.display(); // Output: 0 1 2 4

circularList.deleteAtPosition(2);
circularList.display(); // Output: 0 1 4
