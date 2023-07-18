// Create a function that reverses a boolean value and
// returns the string "boolean expected" if another variable type is given

module.exports = (bool) => {

    return typeof bool === 'boolean' ? !bool : 'boolean expected';
    
}