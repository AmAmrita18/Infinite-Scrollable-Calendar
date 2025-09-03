import React from 'react';
import { Calendar } from 'lucide-react';
import { dateUtils } from '../../utils/dateUtils.js';

const CalendarHeader = ({ currentMonth }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-20">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500 rounded-xl">
            <Calendar className="text-white text-lg" size={20} />
          </div>
          <span className="text-blue-500 font-bold text-lg">Hair Journal</span>
        </div>
        <div className="text-right">
          <h1 className="text-lg font-bold text-gray-900">
            {dateUtils.format(currentMonth, 'MMM yyyy')}
          </h1>
          <p className="text-sm text-gray-500">Track your hair journey</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;