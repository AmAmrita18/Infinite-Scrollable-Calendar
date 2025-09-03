import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { dateUtils } from '../../utils/dateUtils.js';
import StarRating from '../common/StarRating.jsx';
import NavigationButton from '../common/NavigationButton.jsx';

const ModalHeader = ({ 
  entry, 
  onClose, 
  onNavigate, 
  canGoToPrev, 
  canGoToNext 
}) => {
  return (
    <div className="relative">
      <img
        src={entry.imgUrl}
        alt="Hair journal"
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      
      <NavigationButton 
        onClick={onClose} 
        position="top-right"
      >
        <X className="text-gray-700" size={20} />
      </NavigationButton>

      <NavigationButton 
        onClick={() => onNavigate('prev')} 
        position="left"
        disabled={!canGoToPrev}
      >
        <ChevronLeft className="text-gray-700" size={20} />
      </NavigationButton>
      
      <NavigationButton 
        onClick={() => onNavigate('next')} 
        position="right"
        disabled={!canGoToNext}
      >
        <ChevronRight className="text-gray-700" size={20} />
      </NavigationButton>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center justify-between text-white mb-3">
          <StarRating rating={entry.rating} />
          <span className="text-sm font-medium">
            {dateUtils.format(entry.parsedDate, 'MMM dd, yyyy')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ModalHeader;