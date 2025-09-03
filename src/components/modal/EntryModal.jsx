import React from 'react';
import { useSwipeNavigation } from '../../hooks/useSwipeNavigation.js';
import ModalHeader from './ModalHeader.jsx';
import { hairJournalData } from '../../data/mockData.js';
import ModalContent from './ModelContent.jsx';

const EntryModal = ({ selectedEntry, onClose, onEntryChange }) => {
  const currentEntryIndex = selectedEntry ? hairJournalData.findIndex(e => e.id === selectedEntry.id) : -1;
  const canGoToPrev = currentEntryIndex > 0;
  const canGoToNext = currentEntryIndex < hairJournalData.length - 1;

  const navigateEntry = (direction) => {
    if (direction === 'next' && canGoToNext) {
      onEntryChange(hairJournalData[currentEntryIndex + 1]);
    } else if (direction === 'prev' && canGoToPrev) {
      onEntryChange(hairJournalData[currentEntryIndex - 1]);
    }
  };

  const { handleTouchStart, handleTouchEnd } = useSwipeNavigation(navigateEntry);

  if (!selectedEntry) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="bg-white rounded-3xl max-w-md w-full max-h-[80vh] overflow-hidden shadow-2xl transform transition-all relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <ModalHeader
          entry={selectedEntry}
          onClose={onClose}
          onNavigate={navigateEntry}
          canGoToPrev={canGoToPrev}
          canGoToNext={canGoToNext}
        />
        <ModalContent entry={selectedEntry} />
      </div>
    </div>
  );
};

export default EntryModal;