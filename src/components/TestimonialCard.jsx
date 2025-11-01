import React from 'react';

const TestimonialCard = ({ name, profit, image, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-green-600 font-semibold">{profit}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">"{text}"</p>
    </div>
  );
};

export default TestimonialCard;
