import dayjs from 'dayjs';

export const getMonthAndDay = (date: number) => {
  return dayjs(date).format('DD/MM');
};

export const checkIsToday = (date: number) => {
  return dayjs(date).isSame(dayjs(), 'day');
};

export const checkIsTommorrow = (date: number) => {
  return dayjs(date).isSame(dayjs().add(1, 'day'), 'day');
};

export const checkIsYesterday = (date: number) => {
  return dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day');
};

export const getHourAndMinute = (date: number) => {
  return dayjs(date).format('HH:mm');
};

export const checkIsMorning = (date: number) => {
  return dayjs(date).hour() < 12;
};

export const convertStatusDay = (date: number) => {
  const hour = dayjs(date).hour();
  if (hour < 12) {
    return 0;
  } else if (hour < 18) {
    return 1;
  } else {
    return 2;
  }
};

export const checkIsTimeActive = (date1: number, date2: number) => {
  return dayjs().isBefore(dayjs(date2)) && dayjs().isAfter(dayjs(date1));
};
