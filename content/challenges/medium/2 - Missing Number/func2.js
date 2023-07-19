// Create a function that takes an array of numbers between 1 and 10 (excluding one number) 
// and returns the missing number.
// Notes:
//   - The array of numbers will be unsorted (not in order).
//   - Only one number will be missing.

// An array of 1 - 10 should have a sum of 55   
// sum = (n/2) * (first # + last #) ... (10/2) * (1 + 10) = 55
// .reduce array method calculates the actual sum of the array, 
// here I used a callback method that adds each element (num) to the sum
// second argument sets the initial value to 0
// missing number is then calculated by subtracting actual sum from the expected sum

module.exports = (arr) => {
    const expectedSum = 55;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
};