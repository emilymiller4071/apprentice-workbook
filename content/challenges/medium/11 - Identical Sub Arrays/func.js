// Create a function that takes in a two-dimensional array and 
// returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.

module.exports = (arr) => {

    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const subArray = arr[i];
        let isIdentical = true;

        for (let j = 1; j < subArray.length; j++) {
            if (subArray[j] !== subArray [0]) {
                isIdentical = false;
                break;
            }
        }

        if (isIdentical) {
            count++;
        }
    }
    return count;
}
