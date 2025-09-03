import React from 'react';

const NavigationButton = ({ onClick, children, position = 'left', disabled = false }) => {
  const positionClasses = {
    left: 'left-4',
    right: 'right-4',
    'top-right': 'top-4 right-4'
  };

  if (disabled) return null;

  return (
    <button
      onClick={onClick}
      className={`absolute ${positionClasses[position]} ${
        position.includes('top') ? '' : 'top-1/2 -translate-y-1/2'
      } p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg z-10`}
    >
      {children}
    </button>
  );
};

export default NavigationButton;