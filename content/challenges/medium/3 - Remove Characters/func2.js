// Create a function that takes a string, removes all "special" characters 
// (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters 
// allowed are dashes -, underscores _ and spaces.

// This function uses the .replace method to check for the non-allowable special
// characters and replace them with an empty string

module.exports = (str) => {

    str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}!@%^=]/g, '');
    return str;
}