// Create a function that takes a string, removes all "special" characters 
// (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters 
// allowed are dashes -, underscores _ and spaces.

module.exports = (str) => {

    
        const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '.', '<', '>', '/', '|', '`', '~', ','];
        let result = '';
        
      
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            let isSpecialCharacter = false;

            for (let j = 0; j < specialChars.length; j++){
                if (char === specialChars[j]) {
                    isSpecialCharacter = true;
                    break;
                }
            }

            if (!isSpecialCharacter) {
               result += char; 
            }
          }
          return result;
        };