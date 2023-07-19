// Create a function that takes a word and returns true if the word has two 
//consecutive identical letters.

// This regular expression uses . to capture any letter
// /1 refers to the captured letter so only consecutively repeating letters
// trigger the boolean response of true when we use .test

module.exports = (word) => {
    return /(.)\1/.test(word);
}