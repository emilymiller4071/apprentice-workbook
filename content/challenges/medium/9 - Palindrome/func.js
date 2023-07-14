// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.

module.exports = (str) => {
    let isPalindrome = true;
    let forwardWord = '';
    let backwardWord = '';

    for (let forwardIteration = 0; forwardIteration < str.length; forwardIteration++) {
        forwardWord += str[forwardIteration];
    }
        
    for (let reverseIteration = str.length - 1; reverseIteration >= 0; reverseIteration--) {
            backwardWord += str[reverseIteration];
    }
        
    if (forwardWord !== backwardWord) {
        isPalindrome = false;
    }
       
    return isPalindrome;
}