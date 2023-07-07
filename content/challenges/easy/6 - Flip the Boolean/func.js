// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given
module.exports = (bool) => {
    if (bool === true) {
        bool = !bool;
        return bool;
    }else if (bool === false) {
        bool = !bool;
        return bool;
    } else {
        return 'boolean expected';
    }
};
