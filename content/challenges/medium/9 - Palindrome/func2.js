// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.

module.exports = (str) => {
    
    return str === str.split('').reverse().join('');
}

