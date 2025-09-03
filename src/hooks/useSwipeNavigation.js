import { useState } from 'react';
import { CALENDAR_CONFIG } from '../utils/constants.js';

export const useSwipeNavigation = (onNavigate) => {
  const [swipeStart, setSwipeStart] = useState(0);

  const handleTouchStart = (e) => {
    setSwipeStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const swipeEnd = e.changedTouches[0].clientX;
    const swipeDistance = swipeStart - swipeEnd;
    
    if (Math.abs(swipeDistance) > CALENDAR_CONFIG.SWIPE_THRESHOLD) {
      if (swipeDistance > 0) {
        onNavigate('next');
      } else {
        onNavigate('prev');
      }
    }
  };

  return { handleTouchStart, handleTouchEnd };
};