import React from "react";
import { Link } from "react-router-dom";

const ChallengeCard = ({ challenge }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition">
      <h3 className="text-3xl font-bold mb-2">{challenge.title}</h3>
      <div className="text-4xl font-bold text-primary mb-6">
        ${challenge.priceUSD}
      </div>

      <div className="space-y-3 mb-8">
        {challenge.features?.map((feature, index) => (
          <div key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <Link
        to={`/buy/${challenge._id}`}
        className="block w-full bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
      >
        Buy Challenge
      </Link>
    </div>
  );
};

export default ChallengeCard;
