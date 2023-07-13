// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {

    let transformedArray = [];

    for(let thisNumber = 0; thisNumber < arr.length; thisNumber++) {
        let transformedNumber = arr[thisNumber];

        for (let i = 0; i < n; i++) {

            if (transformedNumber % 2 === 0) {
                transformedNumber -= 2;
            } else {
                transformedNumber += 2;
            }
        }

        transformedArray.push(transformedNumber);
    }
    return transformedArray;
}