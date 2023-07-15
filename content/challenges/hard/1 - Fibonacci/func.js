// Fibonacci numbers are created in the following way:
//  - F(0) = 0
//  - F(1) = 1
//  - ...
//  - F(n) = F(n-2) + F(n-1)
// Write a function that calculates the nth Fibonacci number.
module.exports = (n) => {
   
   // must return 0 if the variable n begins at 0
    if (n === 0) {
    return 0;
   }
   
   // if any number besides 0 is given for n, variabes a, b, fib begin as first three numbers
   // of the Fibonacci Sequence
    let a = 0;
    let b = 1;
    let fib = 1;

    // The for loop begins at index[2], which is actually the third number of the sequence
    // The variable fib is equal to the sum of the previous two numbers (a + b)
    // This is a moving target, so the value of a is now set to the value of b
    // The value of b is now set to the fib that we found
    for (let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
}