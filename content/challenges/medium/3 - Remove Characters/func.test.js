const func = require('./func.js');

test('Remove the "!"', () => {
    expect(func("The quick brown fox!")).toEqual("The quick brown fox");
});
test("Remove the '%', '(',')', '.''", () => {
    expect(func("%fd76$fd(-)6GvKlO.")).toEqual("fd76fd-6GvKlO");
});
test('Remove the "$"', () => {
    expect(func("D0n$c sed 0di0 du1")).toEqual("D0nc sed 0di0 du1");
});
