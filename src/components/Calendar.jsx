import React, { useState } from 'react';
import { CALENDAR_CONFIG } from '../utils/constants.js';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll.js';
import CalendarHeader from './calendar/CalendarHeader.jsx';
import CalendarMonth from './calendar/CalendarMonth.jsx';
import EntryModal from './modal/EntryModal.jsx';

function Calendar() {
  const [selectedEntry, setSelectedEntry] = useState(null);
  
  const {
    currentMonth,
    months,
    scrollContainerRef,
    handleScroll,
    setMonthRef
  } = useInfiniteScroll(CALENDAR_CONFIG.TODAY);

  const handleEntryClick = (entry) => {
    setSelectedEntry(entry);
  };

  const handleCloseModal = () => {
    setSelectedEntry(null);
  };

  const handleEntryChange = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      <CalendarHeader currentMonth={currentMonth} />

      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto"
        onScroll={handleScroll}
      >
        <div className="space-y-4 p-4">
          {months.map((monthDate, monthIndex) => {
            const monthKey = `${monthDate.getFullYear()}-${monthDate.getMonth()}`;
            
            return (
              <CalendarMonth
                key={`${monthKey}-${monthIndex}`}
                monthDate={monthDate}
                onEntryClick={handleEntryClick}
                monthRef={(el) => setMonthRef(monthKey, el)}
              />
            );
          })}
        </div>
      </div>

      <EntryModal
        selectedEntry={selectedEntry}
        onClose={handleCloseModal}
        onEntryChange={handleEntryChange}
      />
    </div>
  );
}

export default Calendar;