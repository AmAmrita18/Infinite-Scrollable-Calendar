import React from 'react';
import { dateUtils } from '../../utils/dateUtils.js';
import { CALENDAR_CONFIG } from '../../utils/constants.js';
import StarRating from '../common/StarRating.jsx';
import { getEntriesForDate } from '../../data/mockData.js';

const CalendarDay = ({ day, monthDate, onEntryClick }) => {
  const entries = getEntriesForDate(day);
  const isCurrentMonth = dateUtils.isSameMonth(day, monthDate);
  const isToday = dateUtils.isSameDay(day, CALENDAR_CONFIG.TODAY);

  return (
    <div
      className={`bg-white p-2 min-h-[80px] transition-opacity relative ${
        isCurrentMonth ? '' : 'opacity-40'
      }`}
    >
      <div className={`text-sm font-medium mb-2 relative ${
        isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
      }`}>
        {isToday && (
          <div className="absolute -inset-1 bg-blue-500 rounded-full"></div>
        )}
        <span className={`relative ${isToday ? 'text-white' : ''}`}>
          {dateUtils.format(day, 'd')}
        </span>
      </div>
      
      {entries.map(entry => (
        <div
          key={entry.id}
          onClick={() => onEntryClick(entry)}
          className="cursor-pointer group mb-2 transform transition-all hover:scale-105"
        >
          <div className="relative overflow-hidden rounded-lg shadow-sm">
            <img
              src={entry.imgUrl}
              alt="Hair journal entry"
              className="w-full h-12 object-cover transition-transform group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-1 left-1 right-1 md:block hidden">
              <div className="flex items-center justify-between text-white text-xs">
                <StarRating rating={entry.rating} className="text-xs" />
                <span className="bg-black/50 px-2 py-1 rounded text-xs">
                  {entry.categories[1]}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarDay;