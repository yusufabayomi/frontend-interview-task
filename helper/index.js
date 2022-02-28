import { add, format } from 'date-fns';

export const numberFormatter = (amount) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(amount);
};

export const dateFormatter = (date) => {
  return format(new Date(date), 'do MMM yyyy');
};

export const addDaysToDate = (date, days) => {
  return dateFormatter(add(new Date(date), { days }));
};

export const yearsFromNow = (date) => {
  return new Date().getFullYear() - new Date(date).getFullYear();
};
