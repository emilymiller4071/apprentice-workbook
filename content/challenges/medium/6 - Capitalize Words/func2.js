// Create a function that takes a string as an argument and converts 
// the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.

module.exports = (str) => {
    const words = str.split(' ');

    let capitalizedString = words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

    return capitalizedString;
}