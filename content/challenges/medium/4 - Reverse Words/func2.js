// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.

module.exports = (str) => {
    // use spaces as delimiter
    const words = str.split(' ');

    // use map to create a new array called reversedWords, use callback to return the word in the
    // correct format
    const reversedWords = words.map((word) => {
        if (word.match(/\w{5,}/)) {
            return word.split('').reverse().join('');
            // returns word in reverse if it has 5 or more characters
        } else {
            return word;
        }
  });
  // joins all words putting spaces between
  return reversedWords.join(' ');
}