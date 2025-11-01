import React from 'react';

const ProgressCard = ({ title, value, max, unit = '%', color = 'blue' }) => {
  const percentage = (value / max) * 100;
  
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500'
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-gray-600 font-semibold mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-4">
        {value}{unit}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`h-3 rounded-full ${colorClasses[color]}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className="text-sm text-gray-500 mt-2">
        Target: {max}{unit}
      </div>
    </div>
  );
};

export default ProgressCard;
