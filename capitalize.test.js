const capitalize = require('./capitalize');

test('that is', () => {
  expect(capitalize('hello')).toBe('Hello');
});
