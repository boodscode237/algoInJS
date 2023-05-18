/*
* Given a number `n` find the first `n` elements of the fibonacci sequence
* i fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
* The first two numbers in the sequence are 0 and 1.
* fibonacci(2) = [0, 1]
* fibonacci(3) = [0, 1, 1]
* fibonacci(5) = [0, 1, 1, 2, 3]
* */

// O(n) = O(2^n)
const recursiveFibonacci = (n) => {
    if (n < 2) return n
    return recursiveFibonacci(n-1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(0))
console.log(recursiveFibonacci(1))
console.log(recursiveFibonacci(6))
