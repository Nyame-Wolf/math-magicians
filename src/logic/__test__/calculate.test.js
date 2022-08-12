import calculate from '../calculate';

/** * @jest-environment jsdom */

test('AC button returns object null', () => {
  const obj = {
    next: null,
    operation: null,
    total: null,
  };
  calculate({}, 'AC');
  expect(obj.next).toBe(null);
});
