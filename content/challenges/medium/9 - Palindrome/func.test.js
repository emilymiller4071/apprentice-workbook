const func = require('./func2.js');

test('Expect true, is palindrom', () => {
    expect(func("abcba")).toEqual(true);
});
test('Expect true, 1 character is always palindrom', () => {
    expect(func("b")).toEqual(true);
});
test('Expect true, 0 characters is always palindrom', () => {
    expect(func("")).toEqual(true);
});
test('Expect false, 2 different characters is never palindrome', () => {
    expect(func("ba")).toEqual(false);
});
