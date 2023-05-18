/*
Given a natural number n, determine if the number is prime or not
A prime number is a number greater than one that is not the product of two smaller natural numbers
Big-O notation of isPrime is linear O(n)
 */
function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++){
        if(n%i ===0){
            console.log(i)
            return false
        }
    }
    return true;
}


// big-o = O(sqrt(n))
function isPrime2(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++){
        if(n%i ===0){
            console.log(i)
            return false
        }
    }
    return true;
}

console.log(isPrime(7))