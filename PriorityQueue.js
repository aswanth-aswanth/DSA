class PriorityQueue {
    constructor() {
        this.items = [];
    }

    // Enqueue operation: Add an element with priority to the queue
    enqueue(element, priority) {
        let queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    // Dequeue operation: Remove and return the element with the highest priority from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift().element;
    }

    // Peek operation: Return the element with the highest priority from the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0].element;
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
            console.log("Priority Queue elements:");
            for (let i = 0; i < this.items.length; i++) {
                console.log(this.items[i].element + " - " + this.items[i].priority);
            }
        }
    }
}

// Example usage:
let priorityQueue = new PriorityQueue();

console.log("Is priority queue empty?", priorityQueue.isEmpty()); // Output: true

priorityQueue.enqueue("Task 1", 3);
priorityQueue.enqueue("Task 2", 1);
priorityQueue.enqueue("Task 3", 2);

console.log("Priority queue peek:", priorityQueue.peek()); // Output: Task 2
console.log("Priority queue size:", priorityQueue.size()); // Output: 3

priorityQueue.print();
/*
Output:
Priority Queue elements:
Task 2 - 1
Task 3 - 2
Task 1 - 3
*/

console.log("Dequeued element:", priorityQueue.dequeue()); // Output: Task 2

priorityQueue.print();
/*
Output:
Priority Queue elements:
Task 3 - 2
Task 1 - 3
*/
