// Write a function that takes a string, and returns a new string with any 
// duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
   const letters = word.toLowerCase().split('');
   const filteredLetters = letters.filter((char, index) => {
        if (char === 0) {
            return true;
        } 
        return char !== letters[index - 1];
   });
   return filteredLetters.join('');
}