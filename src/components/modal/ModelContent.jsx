import React from 'react';

const ModalContent = ({ entry }) => {
  return (
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {entry.categories.slice(0, 3).map((category, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700"
          >
            {category}
          </span>
        ))}
        {entry.categories.length > 3 && (
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
            +{entry.categories.length - 3} more
          </span>
        )}
      </div>
      
      <p className="text-gray-700 leading-relaxed mb-6">
        {entry.description}
      </p>
    </div>
  );
};

export default ModalContent;