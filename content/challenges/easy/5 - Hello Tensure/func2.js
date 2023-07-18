// if the number is a multiple of 3, return "Hello"
// if the number is a multiple of 5, return "Tensure"
// if the number is a multiple of both 3 and 5, return "Hello Tensure"

module.exports = (num) => {
    return num % 3 === 0    // check if divisible by 3
        ? num % 5 === 0     // check if also divisible by 5
            ? 'Hello Tensure'   // return if divisible by both
            : 'Hello'       // return if only divisible by 3
        : num % 5 === 0     // if not divisible by 3, check if divisible by 5
            ? 'Tensure'       // return if only divisible by 5
            : 'Not a multiple of 3 or 5';       // return if not divisible by 3 or 5
}