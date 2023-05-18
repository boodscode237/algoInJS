/*
If the array is empty, return -1 as the element cannot be found
If the array has elements, find the middle element in the array.If target is equal to the middle element index.
If the target is less than the middle element, binary search left of the array
if target is greater than middle element, binary search right half of the array

 */

// Big-O = O(log(n))
const binarySearch = (arr, t) => {
    if (arr.length === 0) return -1
    let leftInd = 0
    let rightInd = arr.length - 1

    while (leftInd <= rightInd) {
        let midInd = Math.floor((leftInd + rightInd) / 2)
        if(t === arr[midInd]) return midInd
        if (t < arr[midInd]) rightInd = midInd - 1
        else leftInd = midInd + 1
    }
    return -1
}

console.log(binarySearch([-5, 2, 10, 4, 6].sort((a, b) => {
    return a - b;
}), 6))
console.log(binarySearch([-5, 2, 10, 4, 6].sort((a, b) => {
    return a - b;
}), 10))
console.log(binarySearch([-5, 2, 10, 4, 6].sort((a, b) => {
    return a - b;
}), 25))