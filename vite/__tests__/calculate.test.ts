import { expect, test } from 'vitest';

import { calculateResult } from '../src/util/calculate';

test('U400', () => {
  const dep = new Date(2022, 6, 21, 6, 0, 0);
  const fin = new Date(2022, 6, 21, 17, 28, 0);
  expect(calculateResult(dep, fin, '400')).toBe('11 : 28');
});

test('U400rev', () => {
  const dep = new Date(2022, 6, 21, 18, 0, 0);
  const fin = new Date(2022, 6, 21, 8, 34, 0);
  expect(calculateResult(dep, fin, '400')).toBe('14 : 34');
});

test('600', () => {
  const dep = new Date(2022, 6, 21, 6, 0, 0);
  const fin = new Date(2022, 6, 21, 17, 28, 0);
  expect(calculateResult(dep, fin, '600')).toBe('35 : 28');
});

test('600rev', () => {
  const dep = new Date(2022, 6, 21, 18, 0, 0);
  const fin = new Date(2022, 6, 21, 8, 34, 0);
  expect(calculateResult(dep, fin, '600')).toBe('38 : 34');
});

test('1000', () => {
  const dep = new Date(2022, 6, 21, 6, 0, 0);
  const fin = new Date(2022, 6, 23, 20, 12, 0);
  expect(calculateResult(dep, fin, '1000')).toBe('62 : 12');
});

test('1000rev', () => {
  const dep = new Date(2022, 6, 21, 22, 0, 0);
  const fin = new Date(2022, 6, 21, 1, 55, 0);
  expect(calculateResult(dep, fin, '1000')).toBe('03 : 55');
});
