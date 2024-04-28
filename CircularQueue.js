class CircularQueue {
    constructor(capacity) {
        this.capacity = capacity;
        this.queue = new Array(capacity);
        this.front = 0; // Index of the front element
        this.rear = -1; // Index of the rear element
        this.size = 0; // Number of elements in the queue
    }

    // Enqueue operation: Add an element to the rear of the queue
    enqueue(element) {
        if (this.isFull()) {
            return "Overflow";
        }
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = element;
        this.size++;
    }

    // Dequeue operation: Remove and return the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        let removedElement = this.queue[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return removedElement;
    }

    // Peek operation: Return the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[this.front];
    }

    // isEmpty operation: Check if the queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // isFull operation: Check if the queue is full
    isFull() {
        return this.size === this.capacity;
    }

    // size operation: Return the number of elements in the queue
    getSize() {
        return this.size;
    }

    // Print operation: Print all elements of the queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        console.log("Circular Queue elements:");
        for (let i = 0; i < this.size; i++) {
            let index = (this.front + i) % this.capacity;
            console.log(this.queue[index]);
        }
    }
}

// Example usage:
let circularQueue = new CircularQueue(5);

console.log("Is circular queue empty?", circularQueue.isEmpty()); // Output: true

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);

console.log("Circular queue peek:", circularQueue.peek()); // Output: 10
console.log("Circular queue size:", circularQueue.getSize()); // Output: 3

circularQueue.print();
/*
Output:
Circular Queue elements:
10
20
30
*/

console.log("Dequeued element:", circularQueue.dequeue()); // Output: 10

circularQueue.print();
/*
Output:
Circular Queue elements:
20
30
*/

circularQueue.enqueue(40);
circularQueue.enqueue(50);

console.log("Circular queue isFull:", circularQueue.isFull()); // Output: true

circularQueue.print();
/*
Output:
Circular Queue elements:
20
30
40
50
*/
