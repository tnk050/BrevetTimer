import { differenceInMinutes } from 'date-fns';

export function calculateResult(
  depart: Date,
  finish: Date,
  distance: Distance
): string {
  let result = differenceInMinutes(finish, depart);
  let limit;
  switch (distance) {
    case '400':
      limit = 300;
      break;
    case '600':
      limit = 1080;
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
