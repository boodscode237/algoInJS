/*
* Given a number `n` find the first `n` elements of the fibonacci sequence
* i fibonacci sequence is a sequence in which each number is the sum of the two preceding ones.
* The first two numbers in the sequence are 0 and 1.
* fibonacci(2) = [0, 1]
* fibonacci(3) = [0, 1, 1]
* fibonacci(5) = [0, 1, 1, 2, 3]
*/

const fibonacci = (n) => {
    const arr = [0, 1]
    let first
    let second
    for (let i = 0; i < n; i++) {
        first = arr[i]
        second = arr[i + 1]
        arr[i+2] = first + second
        // arr.push(first + second)
    }
    return arr.slice(0, n)
}
// Big-O = O(n)

function fibonacci2(n) {
    const fib = [0, 1]
    for (let i = 2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
// Big-O = O(n)
console.log(fibonacci(6))
// console.log(fibonacci2(8))