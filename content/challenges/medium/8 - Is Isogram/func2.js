// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.

module.exports = (str) => {
    const lowercaseWord = str.toLowerCase();

    return lowercaseWord.split('')
    .every((letter, index) => lowercaseWord
    .indexOf(letter) === index);
}