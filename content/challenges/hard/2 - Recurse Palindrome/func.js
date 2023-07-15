// Write a function that recursively determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {
  // put your code here
  // don't touch anything else

let isPalindrome = true;

  // this takes the beginning index and ending index of the word and checks for comparison.
  // if the word has 0 or 1 characters, it automatically returns true.
  
  function checkIfPalindrome (start, end) {
   
    // if the pointers meet each other, it is a Palindrome
    if (start >= end) {
      return true;
    }

    // Begin recursively checking through the string. If they don't match, it is not a Palindrome
    if (str[start] !== str[end]) {
      return false;
    }

    // recursively check the remaining substring
    return checkIfPalindrome(start + 1, end - 1);
  }
  
  return checkIfPalindrome(0, str.length -1);
}