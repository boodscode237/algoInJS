/*
* Given an integer n, find the factorial of that integer
* factorial of a non-negative number is the product of all positive integers less than or equal to n
*
* n! = 5! = 5*4*3*2*1 = 120
* 0! = 1
* Big O is linear O(n)
* */

const factorial = (n) => {
    let sum = 1
    for (let i = n; i >= 1; i--) {
        sum *= i;
    }
    return sum
}

const factorial2 = (n) => {
    let sum = 1
    for (let i = 2; i <= n; i++) {
        sum *= i;
    }
    return sum
}


console.log(factorial(2))
console.log(factorial(4))

console.log('--------')

console.log(factorial2(0))
console.log(factorial2(1))