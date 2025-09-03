import {
  format as formatDate,
  parse as parseDateFns,
  startOfMonth as startOfMonthFns,
  endOfMonth as endOfMonthFns,
  startOfWeek as startOfWeekFns,
  endOfWeek as endOfWeekFns,
  eachDayOfInterval as eachDayOfIntervalFns,
  isSameMonth as isSameMonthFns,
  isSameDay as isSameDayFns,
  addMonths as addMonthsFns,
} from "date-fns";

export const dateUtils = {
  format: (date, formatStr) => {
    try {
      return formatDate(date, formatStr);
    } catch {
      return date.toString();
    }
  },

  parse: (dateStr) => {
    return parseDateFns(dateStr, "dd/MM/yyyy", new Date());
  },

  startOfMonth: (date) => {
    return startOfMonthFns(date);
  },

  endOfMonth: (date) => {
    return endOfMonthFns(date);
  },

  startOfWeek: (date, weekStartsOn = 0) => {
    return startOfWeekFns(date, { weekStartsOn });
  },

  endOfWeek: (date, weekStartsOn = 0) => {
    return endOfWeekFns(date, { weekStartsOn });
  },

  eachDayOfInterval: (interval) => {
    return eachDayOfIntervalFns(interval);
  },

  isSameMonth: (date1, date2) => {
    return isSameMonthFns(date1, date2);
  },

  isSameDay: (date1, date2) => {
    return isSameDayFns(date1, date2);
  },

  addMonths: (date, months) => {
    return addMonthsFns(date, months);
  },
};
