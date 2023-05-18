// Big-O = O(logn)
function recursiveBinarySearch(arr, t){
    return search(arr, t, 0, arr.length - 1)
}

function search(arr, t, leftInd, rightInd){
    if(leftInd > rightInd){
        return -1
    }

    let midIndex = Math.floor((leftInd + rightInd) / 2)
    if(t === arr[midIndex]) return midIndex

    if (t < arr[midIndex]) {
        search(arr, t, leftInd, rightInd - 1)
    }else {
        search(arr, t, leftInd + 1, rightInd)
    }
}