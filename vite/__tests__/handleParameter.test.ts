import {
  getParameter,
  defineDistance,
  defineDate,
  defineTime,
} from '../src/util/handleParameter';

describe('parameter handling', () => {
  test('get query', () => {
    const testParameter =
      'dDate=2022-12-01&dTime=07%3A00&depLock=true&dist=1000&distLock=true';
    const answerQuery = {
      queryDistance: '1000',
      departureDate: '2022-12-01',
      departureTime: '07:00',
      distanceLock: true,
      departureLock: true,
    };
    expect(getParameter(testParameter)).toStrictEqual(answerQuery);
  });
  test.each([
    ['under 400', '200', '400'],
    ['600', '600', '600'],
    ['over 1000', '1200', '1000'],
  ])('get distance from query %s', (_title, distance, expected) => {
    expect(defineDistance(distance)).toBe(expected);
  });
  test.each([
    [
      'correct query date',
      new Date(2020, 1, 1),
      '2022-05-01',
      new Date(2022, 4, 1),
    ],
    [
      'incorrect query date',
      new Date(2020, 1, 1),
      '05-01',
      new Date(2020, 1, 1),
    ],
  ])('%s', (_title, initial, query, expected) => {
    expect(defineDate(initial, query)).toStrictEqual(expected);
  });
  test.each([
    [
      'correct query time',
      new Date(2020, 1, 1, 0, 0),
      '07:30',
      new Date(2020, 1, 1, 7, 30),
    ],
    [
      'incorrect query time',
      new Date(2020, 1, 10, 0, 0),
      '09',
      new Date(2020, 1, 10, 0, 0),
    ],
  ])('%s', (_title, initial, query, expected) => {
    expect(defineTime(initial, query)).toStrictEqual(expected);
  });
});
