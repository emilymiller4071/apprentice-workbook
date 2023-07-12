// Create a function that takes a string as an argument and converts 
// the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {

    let capitalizedString = ''; 
    
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const previousChar = i === 0 ? '' : str[i - 1];

        if (i === 0 || previousChar === ' ') {
            capitalizedString += currentChar.toUpperCase();
        } else {
            capitalizedString += currentChar;
        }

    }
    return capitalizedString;
}