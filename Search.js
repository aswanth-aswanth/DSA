// Linear Search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if the target is found
        }
    }
    return -1; // Return -1 if the target is not found
}

// Binary Search (assuming the array is sorted)
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];
        
        if (guess === target) {
            return mid; // Return the index if the target is found
        } else if (guess < target) {
            low = mid + 1; // Search the right half
        } else {
            high = mid - 1; // Search the left half
        }
    }
    
    return -1; // Return -1 if the target is not found
}

// Example usage
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const targetLinear = 23;
const targetBinary = 38;

console.log("Linear Search:");
console.log("Index of", targetLinear, ":", linearSearch(arr, targetLinear));

console.log("\nBinary Search:");
console.log("Index of", targetBinary, ":", binarySearch(arr, targetBinary));
