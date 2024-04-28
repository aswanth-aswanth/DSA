class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue operation: Add an element to the back of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue operation: Remove and return the element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Peek operation: Return the element at the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // isEmpty operation: Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // size operation: Return the number of elements in the queue
    size() {
        return this.items.length;
    }

    // Print operation: Print all elements of the queue
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            console.log("Queue elements:");
            for (let i = 0; i < this.items.length; i++) {
                console.log(this.items[i]);
            }
        }
    }
}

// Example usage:
let queue = new Queue();

console.log("Is queue empty?", queue.isEmpty()); // Output: true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue peek:", queue.peek()); // Output: 10
console.log("Queue size:", queue.size()); // Output: 3

queue.print();
/*
Output:
Queue elements:
10
20
30
*/

console.log("Dequeued element:", queue.dequeue()); // Output: 10

queue.print();
/*
Output:
Queue elements:
20
30
*/
