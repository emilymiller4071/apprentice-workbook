const func = require('./func2.js');

test('Expect true, is isogram', () => {
    expect(func("Algorism")).toEqual(true);
});
test('Expect false, is not isogram', () => {
    expect(func("PasSword")).toEqual(false);
});
test('Expect false, is not isogram', () => {
    expect(func("Consecutive")).toEqual(false);
});