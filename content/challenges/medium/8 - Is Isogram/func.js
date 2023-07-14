// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {
    let isIsogram = true;
    const lowerCaseString = str.toLowerCase();

    for (let char = 0; char < lowerCaseString.length; char++) {

        for (let compare = char + 1; compare < lowerCaseString.length; compare++ ) {

            if (lowerCaseString[char] === lowerCaseString[compare]) {
                isIsogram = false;
            }     
        }

        if (!isIsogram) {
            break;
        }
        
    }
    return isIsogram;
}