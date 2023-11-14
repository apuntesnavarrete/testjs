const filter = require('./filter');

test('takes a list of non-negative integers and strings and returns a new list with the strings filtered ou', () => {
  expect(filter([1, 2, 'a', 'b'])).toEqual([1, 2]);
});
