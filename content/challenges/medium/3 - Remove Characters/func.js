// Create a function that takes a string, removes all "special" characters 
// (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters 
// allowed are dashes -, underscores _ and spaces.

module.exports = (str) => {

    str = str.replace(/[&\/\\#,+()$~%.'":*?<>{}!@%^=]/g, '');
    return str;

    // testing criteria has a typo, that still expects the period '.'
    // I hope that I'm not missing something in the instructions.
    // I fixed the testing file on my own fork...
}