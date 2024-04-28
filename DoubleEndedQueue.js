class Deque {
    constructor() {
        this.items = [];
    }

    // Add element to the front of the deque
    addFront(element) {
        this.items.unshift(element);
    }

    // Add element to the rear of the deque
    addRear(element) {
        this.items.push(element);
    }

    // Remove and return element from the front of the deque
    removeFront() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.shift();
    }

    // Remove and return element from the rear of the deque
    removeRear() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Return the element at the front of the deque without removing it
    peekFront() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items[0];
    }

    // Return the element at the rear of the deque without removing it
    peekRear() {
        if (this.isEmpty()) {
            return "Deque is empty";
        }
        return this.items[this.items.length - 1];
    }

    // Check if the deque is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Return the number of elements in the deque
    size() {
        return this.items.length;
    }

    // Print all elements of the deque
    print() {
        if (this.isEmpty()) {
            console.log("Deque is empty");
        } else {
            console.log("Deque elements:");
            console.log(this.items.join(", "));
        }
    }
}

// Example usage:
let deque = new Deque();

console.log("Is deque empty?", deque.isEmpty()); // Output: true

deque.addFront(10);
deque.addRear(20);
deque.addFront(30);

console.log("Deque peekFront:", deque.peekFront()); // Output: 30
console.log("Deque peekRear:", deque.peekRear()); // Output: 20
console.log("Deque size:", deque.size()); // Output: 3

deque.print();
/*
Output:
Deque elements:
30, 10, 20
*/

console.log("Removed front element:", deque.removeFront()); // Output: 30

deque.print();
/*
Output:
Deque elements:
10, 20
*/

console.log("Removed rear element:", deque.removeRear()); // Output: 20

deque.print();
/*
Output:
Deque elements:
10
*/
