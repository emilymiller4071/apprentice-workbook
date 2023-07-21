const func = require('./func2.js');

test('Expect the whole thing to be reversed', () => {
    expect(func("Reverse")).toEqual("esreveR");
});
test('Expect only certain words to be reversed"', () => {
    expect(func("This is a typical sentence.")).toEqual("This is a lacipyt .ecnetnes");
});
test('Expect result to match input', () => {
    expect(func("The dog is big.")).toEqual("The dog is big.");
});
