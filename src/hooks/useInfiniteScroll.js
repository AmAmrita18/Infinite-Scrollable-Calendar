import { useState, useEffect, useRef, useCallback } from 'react';
import { dateUtils } from '../utils/dateUtils.js';
import { CALENDAR_CONFIG, INTERSECTION_OBSERVER_CONFIG } from '../utils/constants.js';

export const useInfiniteScroll = (initialDate) => {
  const [currentMonth, setCurrentMonth] = useState(initialDate);
  const [months, setMonths] = useState([]);
  const scrollContainerRef = useRef(null);
  const isInitializedRef = useRef(false);
  const monthRefs = useRef(new Map());

  useEffect(() => {
    if (!isInitializedRef.current) {
      const initialMonths = [];
      
      for (let i = -CALENDAR_CONFIG.MONTHS_BUFFER; i <= CALENDAR_CONFIG.MONTHS_BUFFER; i++) {
        const monthDate = dateUtils.addMonths(initialDate, i);
        initialMonths.push(monthDate);
      }
      
      setMonths(initialMonths);
      isInitializedRef.current = true;
      
      setTimeout(() => {
        if (scrollContainerRef.current) {
          const centerIndex = CALENDAR_CONFIG.MONTHS_BUFFER;
          scrollContainerRef.current.scrollTop = centerIndex * CALENDAR_CONFIG.MONTH_HEIGHT;
        }
      }, 100);
    }
  }, [initialDate]);

  useEffect(() => {
    if (!scrollContainerRef.current || months.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const monthKey = entry.target.getAttribute('data-month-key');
            if (monthKey) {
              const [year, month] = monthKey.split('-').map(Number);
              const newCurrentMonth = new Date(year, month, 1);
              if (!dateUtils.isSameMonth(newCurrentMonth, currentMonth)) {
                setCurrentMonth(newCurrentMonth);
              }
            }
          }
        });
      },
      {
        root: scrollContainerRef.current,
        ...INTERSECTION_OBSERVER_CONFIG
      }
    );

    monthRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [months, currentMonth]);

  const handleScroll = useCallback((e) => {
    const container = e.target;
    const scrollTop = container.scrollTop;
    const scrollHeight = container.scrollHeight;
    const clientHeight = container.clientHeight;
    
    setMonths(prevMonths => {
      let newMonths = [...prevMonths];
      let needsScrollAdjustment = false;
      let scrollAdjustment = 0;
      
      if (scrollTop < CALENDAR_CONFIG.MONTH_HEIGHT * CALENDAR_CONFIG.SCROLL_THRESHOLD) {
        const firstMonth = newMonths[0];
        const additionalMonths = [];
        for (let i = 1; i <= 12; i++) {
          additionalMonths.unshift(dateUtils.addMonths(firstMonth, -i));
        }
        newMonths = [...additionalMonths, ...newMonths];
        needsScrollAdjustment = true;
        scrollAdjustment = additionalMonths.length * CALENDAR_CONFIG.MONTH_HEIGHT;
      }
      
      if (scrollTop > scrollHeight - clientHeight - CALENDAR_CONFIG.MONTH_HEIGHT * CALENDAR_CONFIG.SCROLL_THRESHOLD) {
        const lastMonth = newMonths[newMonths.length - 1];
        for (let i = 1; i <= 12; i++) {
          newMonths.push(dateUtils.addMonths(lastMonth, i));
        }
      }
      
      if (needsScrollAdjustment) {
        setTimeout(() => {
          if (container) {
            container.scrollTop = scrollTop + scrollAdjustment;
          }
        }, 0);
      }
      
      return newMonths.length !== prevMonths.length ? newMonths : prevMonths;
    });
  }, []);

  const setMonthRef = useCallback((monthKey, element) => {
    if (element) {
      monthRefs.current.set(monthKey, element);
    }
  }, []);

  return {
    currentMonth,
    months,
    scrollContainerRef,
    monthRefs: monthRefs.current,
    handleScroll,
    setMonthRef
  };
};