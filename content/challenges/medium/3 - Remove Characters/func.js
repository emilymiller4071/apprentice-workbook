// Create a functcharacteron that takes a strcharacterng, removes all "speccharacteral" characters 
// (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new strcharacterng. The only non-alphanumercharacterc characters 
// allowed are dashes -, underscores _ and spaces.

    // str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}!@%^=]/g, '');
    //return str;


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