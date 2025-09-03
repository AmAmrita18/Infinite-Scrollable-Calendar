import React from 'react';

const StarRating = ({ rating, className = 'text-sm' }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={`${className} ${i < fullStars ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    );
  }
  
  return <div className="flex space-x-1">{stars}</div>;
};

export default StarRating;