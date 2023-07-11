// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {

    let reversedString = ''; // Will be final reversed string
    let word = ''; // will be the current word to be checked and returned properly
    let isLongWord = false; // boolean that checks word length

    // outer begins to iterate through the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // characters are added to word variable until a space is reached
        if (char !== ' ') {
            word += char;

            /* isLongWord is initially false, so it checks for length when a space is reached.
            If the word is found to have >= 5 characters, boolean is marked true
            */
            if (!isLongWord && word.length >=5) {
                isLongWord = true;
            }
        }else {
            // Long words are returned in reverse with a decrementing loop
            if (isLongWord) {
                let reversedWord = '';

                for(let j = word.length -1; j >= 0; j--) {
                    reversedWord += word[j]; 
                }
                reversedString += reversedWord; // reversed word is added to the reversed string
            } else {
                reversedString += word; // words with < 5 are added as is
            }
            reversedString += ' '; // add the spaces after each word is processed
            word = ''; // reset word variable for the next word to be processed
            isLongWord = false;
        }
    }
    /*
    A space will not likely be encountered at the end of the given string. Since spaces
    trigger the processing of the word (and there won't be one at the end), we need to 
    run the last word when we hit the end of the given string.
    */
    if (isLongWord) {
        reversedWord = '';

        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }
        reversedString += reversedWord;
    } else {
        reversedString += word;
    }
    return reversedString;
}