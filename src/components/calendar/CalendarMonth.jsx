import React from 'react';
import { dateUtils } from '../../utils/dateUtils.js';
import { CALENDAR_CONFIG } from '../../utils/constants.js';
import CalendarDay from './CalendarDay';

const CalendarMonth = ({ monthDate, onEntryClick, monthRef }) => {
  const getCalendarDays = (monthDate) => {
    const monthStart = dateUtils.startOfMonth(monthDate);
    const monthEnd = dateUtils.endOfMonth(monthDate);
    const calendarStart = dateUtils.startOfWeek(monthStart, 0);
    const calendarEnd = dateUtils.endOfWeek(monthEnd, 0);
    
    return dateUtils.eachDayOfInterval({
      start: calendarStart,
      end: calendarEnd
    });
  };

  const days = getCalendarDays(monthDate);
  const monthKey = `${monthDate.getFullYear()}-${monthDate.getMonth()}`;

  return (
    <div 
      data-month-key={monthKey}
      ref={monthRef}
      style={{ minHeight: `${CALENDAR_CONFIG.MONTH_HEIGHT}px` }}
    >
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-blue-500 p-4 text-white">
          <h3 className="text-lg font-bold">{dateUtils.format(monthDate, 'MMMM yyyy')}</h3>
        </div>
        
        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {CALENDAR_CONFIG.WEEK_DAYS.map(day => (
            <div key={day} className="bg-gray-50 p-3 text-center">
              <span className="text-sm font-semibold text-gray-600">{day}</span>
            </div>
          ))}
          
          {days.map((day, index) => (
            <CalendarDay
              key={`${day.getTime()}-${index}`}
              day={day}
              monthDate={monthDate}
              onEntryClick={onEntryClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarMonth;