// Linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if target is found
        }
    }
    return -1; // Return -1 if target is not found
}

// Example usage:
const array = [1, 3, 5, 7, 9];
const target = 5;
console.log("Linear Search:", linearSearch(array, target)); // Output: 2 (index of target)


// Binary search
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Return index if target is found
        } else if (arr[mid] < target) {
            left = mid + 1; // Continue searching in the right half
        } else {
            right = mid - 1; // Continue searching in the left half
        }
    }

    return -1; // Return -1 if target is not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9];
const targetValue = 5;
console.log("Binary Search:", binarySearch(sortedArray, targetValue)); // Output: 2 (index of target)
