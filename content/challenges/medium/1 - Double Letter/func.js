// Create a function that takes a word and returns true if the word has two 
//consecutive identical letters.
module.exports = (word) => {

    for (let checkLetter = 0; checkLetter < word.length; checkLetter++) {
        if (word[checkLetter] === word[checkLetter + 1]) {
            return true;
        }
    }
    return false;
}