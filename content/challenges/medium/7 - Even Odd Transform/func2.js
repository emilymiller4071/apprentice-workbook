// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.

module.exports = (arr, n) => {
   return arr.map(element => {
        return element + (element % 2 === 0 ? -2 * n : 2 * n);
    });
}