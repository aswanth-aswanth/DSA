class Stack {
    constructor() {
        this.items = [];
    }

    // Push operation: Add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Pop operation: Remove and return the element from the top of the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Peek operation: Return the element at the top of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }

    // isEmpty operation: Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // size operation: Return the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Print operation: Print all elements of the stack
    print() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
        } else {
            console.log("Stack elements:");
            for (let i = this.items.length - 1; i >= 0; i--) {
                console.log(this.items[i]);
            }
        }
    }
}

// Example usage:
let stack = new Stack();

console.log("Is stack empty?", stack.isEmpty()); // Output: true

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Stack peek:", stack.peek()); // Output: 30
console.log("Stack size:", stack.size()); // Output: 3

stack.print();
/*
Output:
Stack elements:
30
20
10
*/

console.log("Popped element:", stack.pop()); // Output: 30

stack.print();
/*
Output:
Stack elements:
20
10
*/
