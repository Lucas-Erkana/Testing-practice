const calculator = require('./calculator');

test('that is', () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.substract(2, 2)).toBe(0);
  expect(calculator.multiply(1, 2)).toBe(2);
  expect(calculator.divide(4, 2)).toBe(2);
});

describe('Calculator', () => {
  test('add fun', () => {
    expect(calculator.add(2, 2)).toBeTruthy();
  });
  test('add fun', () => {
    expect(calculator.add(3, 2)).toBeTruthy();
  });
  test('add fun', () => {
    expect(calculator.add(1, 2)).toBeTruthy();
  });
  test('subtract fun', () => {
    expect(calculator.substract(3, 2)).toBeTruthy();
  });
  test('subtract fun', () => {
    expect(calculator.substract(4, 3)).toBeTruthy();
  });
  test('subtract fun', () => {
    expect(calculator.substract(5, 3)).toBeTruthy();
  });
  test('multiply fun', () => {
    expect(calculator.multiply(2, 2)).toBeTruthy();
  });
  test('multiply fun', () => {
    expect(calculator.multiply(3, 2)).toBeTruthy();
  });
  test('multiply fun', () => {
    expect(calculator.multiply(4, 2)).toBeTruthy();
  });
  test('divide fun', () => {
    expect(calculator.divide(2, 2)).toBeTruthy();
  });
  test('divide fun', () => {
    expect(calculator.divide(6, 2)).toBeTruthy();
  });
  test('divide fun', () => {
    expect(calculator.divide(4, 2)).toBeTruthy();
  });
});
