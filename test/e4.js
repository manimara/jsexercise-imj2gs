const compareArray = require("../e4.js");

const a = [
  [1, 2],  [3, 4],
];
const b = [
  [4, 3],  [2, 1]
];
const c = [
  [1, 3],  [2, 4],
];

const c1 = [
    [3, 2, 2],  [7, 4, 2],
];

const c2 = [
    [2, 3, 2],  [7, 4, 2],
];

const c3 = [
    [3, 1, 2],  [2, 7, 2],
];

const c4 = [
    [1, 2],  [2, 3, 4, 5],  [6, 7, 8],
];

const c5 = [
    [7, 6, 8],  [5, 3, 4, 2],  [2, 1],
];

test("a and b are equal ", () => {
  expect(compareArray(a, b)).toBe(true);
});
test("a and c are not equal ", () => {
    expect(compareArray(a, c)).toBe(false);
});
test("b and c are not equal ", () => {
    expect(compareArray(b, c)).toBe(false);
});
  
test("c1 and c2 are equal ", () => {
    expect(compareArray(c1, c2)).toBe(true);
});
test("c1 and c5 are not equal ", () => {
    expect(compareArray(c1, c5)).toBe(false);
});
test("c2 and c5 are not equal ", () => {
    expect(compareArray(c2, c5)).toBe(false);
});
test("c4 and c5 are equal ", () => {
    expect(compareArray(c4, c5)).toBe(true);
});
test("c3 and c4 are not equal ", () => {
    expect(compareArray(c3, c4)).toBe(false);
});