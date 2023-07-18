/* Write a function that takes a positive integer and return its factorial.
   The factorial of 0 is 1.
   The factorial of any positive integer Z is Z * (Z - 1) * (Z - 2) * . . . . . . * 1 
   (e.g. factorial of 3 is 3 * 2 * 1 = 6). */


/*
Returns 1 for base case of 0.
Otherwise, it recursively calls itself with (num - 1) as argument and multiplies times num.
Continues until num is 0. Factorial is found by multiplying from num down to 1.
*/

   module.exports = (num) => {
      if (num === 0) {
         return 1;
      } else {
         return num * module.exports(num - 1);
      }
   }