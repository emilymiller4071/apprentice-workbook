// Write a function that takes a string, and returns a new string with any 
// duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {
    let fixedWord = '';
    

    for (let letter = 0; letter < word.length; letter++) {
        
        if (letter === 0 || word[letter] !== word[letter - 1]) {
            fixedWord += word[letter];
        }
    }
    return fixedWord;
}