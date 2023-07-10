// Create a function that takes an array of numbers between 1 and 10 (excluding one number) 
// and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.
module.exports = (arr) => {
    let missingNumber = 0;
    let expectedTotal = 55;
    
    for (let i = 0; i < arr.length; i++) {
        expectedTotal -= arr[i];
    }
    return expectedTotal - missingNumber;
}