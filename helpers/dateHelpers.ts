import dayjs from 'dayjs';

// format date to Day Mon DD YYYY
export function formatPostDate(date: string): string {
  return dayjs(date).format('ddd MMM DD, YYYY');
}

// format date to japanese format YYYY/MM/DD
export function formatJapaneseDate(date: string): string {
  return dayjs(date).format('YYYY/MM/DD');
}
