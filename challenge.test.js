const deleteNth = require('./challenge');

test('it should delete occurances of an element if the element occurs more than n times', () => {
  expect(deleteNth([20, 37, 20, 21], 1)).toStrictEqual([20, 37, 21]);
});
