import { differenceInMinutes } from 'date-fns';

export function calculateResult(
  depart: Date,
  finish: Date,
  distance: Distance
): string {
  let result = differenceInMinutes(finish, depart, { roundingMethod: 'ceil' });
  let limit;
  switch (distance) {
    case '400':
      limit = 5 * 60;
      break;
    case '600':
      limit = 18 * 60;
      break;
    case '1000':
      limit = 0;
      break;
    default:
      limit = 0;
      break;
  }
  while (result <= limit) {
    result += 24 * 60;
  }
  const hour = Math.floor(result / 60);
  const minute = result % 60;
  // prettier-ignore
  const response = `${hour.toString().padStart(2, '0')} : ${minute.toString().padStart(2, '0')}`;
  return response;
}

export function newDateZeroSecond(): Date {
  const date = new Date().setSeconds(0, 0);
  return new Date(date);
}
