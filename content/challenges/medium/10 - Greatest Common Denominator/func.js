// Write a function that returns the greatest common divisor (GCD) of two integers.
// Notes: 
//   - Both values will be positive.
//   - The GCD is the largest factor that divides both numbers.

module.exports = (int1, int2) => {
    while (int1 !== int2) {

        if (int1 > int2) {
            int1 -= int2;
        } else {
            int2 -= int1;
        }
    }
    return int1;
}
