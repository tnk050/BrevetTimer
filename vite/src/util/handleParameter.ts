import queryString from 'query-string';

import { set, formatISO9075 } from 'date-fns';

/**
 *
 * @param query
 * parameters
 *
 * dist: distance
 *
 * dDate: date of departure
 *
 * dTime: time of departure
 *
 * distLock: disable distance button
 *
 * depLock: disable departure date and time
 *
 * @returns query object
 */
export function getParameter(query: string): Query {
  const param = queryString.parse(query, { parseBooleans: true });
  const queryDistance = param.dist?.toString();

  const response: Query = {
    queryDistance,
    departureDate: param.dDate as string,
    departureTime: param.dTime as string,
    distanceLock: param.distLock as boolean,
    departureLock: param.depLock as boolean,
  };
  return response;
}

export function defineDistance(value: string | undefined): Distance {
  const distance = value ? parseInt(value, 10) : NaN;
  if (distance <= 400) {
    return '400';
  } else if (400 < distance && distance < 1000) {
    return '600';
  } else if (1000 <= distance) {
    return '1000';
  } else {
    //default
    return '400';
  }
}

export function defineDate(initial: Date, queryDate: string): Date {
  const requestDate = queryDate.split('-').map((item) => parseInt(item));
  if (requestDate.length < 3) {
    return initial;
  }
  const [year, iniMonth, date] = requestDate;
  const month = iniMonth - 1;
  return set(initial, { year, month, date });
}

export function defineTime(initial: Date, queryTime: string): Date {
  const requestTime = queryTime.split(':').map((item) => parseInt(item));
  if (requestTime.length < 2) {
    return initial;
  }
  const [hours, minutes] = requestTime;
  return set(initial, { hours, minutes });
}

export function getDateString(date: Date): string {
  return formatISO9075(date, { representation: 'date' });
}

export function getTimeString(date: Date): string {
  return formatISO9075(date, { representation: 'time' }).slice(0, -3);
}
