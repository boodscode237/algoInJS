/*
Given a positive integer n, determine if the number is a power of two or not
An integer i a power of two if there exists an integer x such as n ===2x
 */

// BIG-O is O(log(n))
const isPowerOfTwo = (n) => {
    if (n < 1) {
        return false
    }
    while(n>1){
        if (n%2 !== 0) return false
        n = n/2
    }
    return true
}
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))
console.log(isPowerOfTwo(8))


// BIG-O is O(1)
const isPowerOfTwoBitWise = (n) => {
    if (n < 1) return false
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitWise(1))
console.log(isPowerOfTwoBitWise(2))
console.log(isPowerOfTwoBitWise(5))
console.log(isPowerOfTwoBitWise(8))
