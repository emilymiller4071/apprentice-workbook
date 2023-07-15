// Create a function that takes in an initial word and filters 
// out an array to contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

module.exports = (initial, words) => {
    let filteredArray = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let isMatching = true;

        for (let j = 0; j < initial.length; j++) {

            if (word[j] !== initial[j] ) {
                isMatching = false;
                break;
            }
        }

            if (isMatching) {
                filteredArray.push(word);
            }

    }
    return filteredArray;
}