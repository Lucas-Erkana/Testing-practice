const capitalize = require('./capitalize');

test('that is', () => {
  expect(capitalize('hey')).toBe('HEY');
});
