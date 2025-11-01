// import React, { useState } from "react";

// const ProopCoChallengeSelector = () => {
//   const [selectedChallenge, setSelectedChallenge] = useState("Flex");
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   const challenges = [
//     { id: "custom", label: "Custom", isActive: false },
//     { id: "propone", label: "Prop ONE", isActive: false },
//     { id: "economy", label: "Economy", isActive: false },
//     { id: "flex", label: "Flex", isActive: true },
//   ];

//   const challengeData = {
//     flex: [
//       {
//         id: "1k",
//         amount: "1K",
//         price: "$15",
//         stepType: "Two Step",
//         features: {
//           "Phase 1 Profit Target": "10.00%",
//           "Phase 2 Profit Target": "5.00%",
//           "Daily Drawdown": "6.00%",
//           "Maximum Overall Loss": "10.00%",
//           "Floating Risk": "have not",
//           "Eighty Percent Law": "have not",
//           "Minimum Trading Days": "3",
//           "Withdraw & ProfitShare": "80%",
//           "News Trading": "Allow",
//         },
//       },
//       {
//         id: "3k",
//         amount: "3K",
//         price: "$39",
//         stepType: "Two Step",
//         features: {
//           "Phase 1 Profit Target": "10.00%",
//           "Phase 2 Profit Target": "5.00%",
//           "Daily Drawdown": "6.00%",
//           "Maximum Overall Loss": "10.00%",
//           "Floating Risk": "have not",
//           "Eighty Percent Law": "have not",
//           "Minimum Trading Days": "3",
//           "Withdraw & ProfitShare": "80%",
//           "News Trading": "Allow",
//         },
//       },
//       {
//         id: "5k",
//         amount: "5K",
//         price: "$59",
//         stepType: "Two Step",
//         features: {
//           "Phase 1 Profit Target": "10.00%",
//           "Phase 2 Profit Target": "5.00%",
//           "Daily Drawdown": "6.00%",
//           "Maximum Overall Loss": "10.00%",
//           "Floating Risk": "have not",
//           "Eighty Percent Law": "have not",
//           "Minimum Trading Days": "3",
//           "Withdraw & ProfitShare": "80%",
//           "News Trading": "Allow",
//         },
//       },
//       {
//         id: "10k",
//         amount: "10K",
//         price: "$99",
//         stepType: "Two Step",
//         features: {
//           "Phase 1 Profit Target": "10.00%",
//           "Phase 2 Profit Target": "5.00%",
//           "Daily Drawdown": "6.00%",
//           "Maximum Overall Loss": "10.00%",
//           "Floating Risk": "have not",
//           "Eighty Percent Law": "have not",
//           "Minimum Trading Days": "3",
//           "Withdraw & ProfitShare": "80%",
//           "News Trading": "Allow",
//         },
//       },
//     ],
//   };

//   const handleChallengeSelect = (challengeId) => {
//     setSelectedChallenge(challengeId);
//     setSelectedPlan(null);
//   };

//   const handleStartChallenge = (planId) => {
//     setSelectedPlan(planId);
//     console.log(`Starting challenge: ${selectedChallenge} - ${planId}`);
//     // Add your navigation or API call logic here
//   };

//   const getFeatureValue = (value) => {
//     if (value === "have not") return { text: "✗", color: "text-red-400" };
//     if (value === "Allow") return { text: value, color: "text-yellow-400" };
//     return { text: value, color: "text-green-400" };
//   };

//   return (
//     <div className="bg-black min-h-screen text-white py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Choose the Best{" "}
//             <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
//               ProopCo
//             </span>{" "}
//             Challenge
//           </h1>
//         </div>

//         {/* Challenge Type Selector */}
//         <div className="flex justify-center mb-12">
//           <div className="flex bg-gray-800/50 rounded-full p-2 backdrop-blur-sm border border-gray-700">
//             {challenges.map((challenge) => (
//               <button
//                 key={challenge.id}
//                 onClick={() => handleChallengeSelect(challenge.id)}
//                 className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
//                   selectedChallenge === challenge.id
//                     ? "bg-white text-black shadow-lg"
//                     : "text-gray-400 hover:text-white hover:bg-gray-700/50"
//                 }`}
//               >
//                 {challenge.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {challengeData.flex.map((plan) => (
//             <div
//               key={plan.id}
//               className={`bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 ${
//                 selectedPlan === plan.id
//                   ? "border-yellow-400 shadow-xl shadow-yellow-400/20"
//                   : "border-gray-700 hover:border-gray-600"
//               }`}
//             >
//               {/* Plan Header */}
//               <div className="text-center mb-6">
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <h3 className="text-2xl font-bold">{plan.amount}</h3>
//                   <span className="text-gray-400 text-sm">
//                     / {plan.stepType}
//                   </span>
//                 </div>
//                 <div className="text-3xl font-bold text-yellow-400 mb-4">
//                   {plan.price}
//                 </div>
//               </div>

//               {/* Features List */}
//               <div className="space-y-3 mb-8">
//                 {Object.entries(plan.features).map(([feature, value]) => {
//                   const featureDisplay = getFeatureValue(value);
//                   return (
//                     <div
//                       key={feature}
//                       className="flex justify-between items-center text-sm"
//                     >
//                       <span className="text-gray-300">{feature}</span>
//                       <span className={`font-medium ${featureDisplay.color}`}>
//                         {featureDisplay.text}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Start Challenge Button */}
//               <button
//                 onClick={() => handleStartChallenge(plan.id)}
//                 className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
//                   selectedPlan === plan.id
//                     ? "bg-yellow-400 text-black shadow-lg hover:bg-yellow-300"
//                     : "bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 text-black hover:from-yellow-400 hover:to-yellow-500 hover:shadow-lg hover:shadow-yellow-400/25"
//                 }`}
//               >
//                 {selectedPlan === plan.id ? "Selected!" : "Start Challenge"}
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Additional Info */}
//         <div className="text-center mt-12">
//           <p className="text-gray-400 text-sm">
//             All plans include 24/7 support and instant funding upon completion
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProopCoChallengeSelector;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProopCoChallengeSelector = () => {
  const navigate = useNavigate();
  const [selectedChallenge, setSelectedChallenge] = useState("Flex");
  const [selectedPlan, setSelectedPlan] = useState(null);

  const challenges = [
    { id: "custom", label: "Custom", isActive: false },
    { id: "propone", label: "Prop ONE", isActive: false },
    { id: "economy", label: "Economy", isActive: false },
    { id: "flex", label: "Flex", isActive: true },
  ];

  const challengeData = {
    flex: [
      {
        id: "1k",
        amount: "1K",
        price: "$15",
        stepType: "Two Step",
        features: {
          "Phase 1 Profit Target": "10.00%",
          "Phase 2 Profit Target": "5.00%",
          "Daily Drawdown": "6.00%",
          "Maximum Overall Loss": "10.00%",
          "Floating Risk": "have not",
          "Eighty Percent Law": "have not",
          "Minimum Trading Days": "3",
          "Withdraw & ProfitShare": "80%",
          "News Trading": "Allow",
        },
      },
      {
        id: "3k",
        amount: "3K",
        price: "$39",
        stepType: "Two Step",
        features: {
          "Phase 1 Profit Target": "10.00%",
          "Phase 2 Profit Target": "5.00%",
          "Daily Drawdown": "6.00%",
          "Maximum Overall Loss": "10.00%",
          "Floating Risk": "have not",
          "Eighty Percent Law": "have not",
          "Minimum Trading Days": "3",
          "Withdraw & ProfitShare": "80%",
          "News Trading": "Allow",
        },
      },
      {
        id: "5k",
        amount: "5K",
        price: "$59",
        stepType: "Two Step",
        features: {
          "Phase 1 Profit Target": "10.00%",
          "Phase 2 Profit Target": "5.00%",
          "Daily Drawdown": "6.00%",
          "Maximum Overall Loss": "10.00%",
          "Floating Risk": "have not",
          "Eighty Percent Law": "have not",
          "Minimum Trading Days": "3",
          "Withdraw & ProfitShare": "80%",
          "News Trading": "Allow",
        },
      },
      {
        id: "10k",
        amount: "10K",
        price: "$99",
        stepType: "Two Step",
        features: {
          "Phase 1 Profit Target": "10.00%",
          "Phase 2 Profit Target": "5.00%",
          "Daily Drawdown": "6.00%",
          "Maximum Overall Loss": "10.00%",
          "Floating Risk": "have not",
          "Eighty Percent Law": "have not",
          "Minimum Trading Days": "3",
          "Withdraw & ProfitShare": "80%",
          "News Trading": "Allow",
        },
      },
    ],
  };

  const handleChallengeSelect = (challengeId) => {
    setSelectedChallenge(challengeId);
    setSelectedPlan(null);
  };

  const handleStartChallenge = (planId) => {
    // Check if user is authenticated before starting challenge
    const token = localStorage.getItem("token");

    if (!token) {
      // If no token, redirect to login page
      navigate("/login");
      return;
    }

    // If authenticated, proceed with challenge start
    setSelectedPlan(planId);
    console.log(`Starting challenge: ${selectedChallenge} - ${planId}`);

    // Add your navigation or API call logic here for authenticated users
    // For example:
    // navigate(`/purchase?challenge=${selectedChallenge}&plan=${planId}`);
    // Or make an API call to start the challenge
  };

  const getFeatureValue = (value) => {
    if (value === "have not") return { text: "✗", color: "text-red-400" };
    if (value === "Allow") return { text: value, color: "text-yellow-400" };
    return { text: value, color: "text-green-400" };
  };

  return (
    <div className="bg-black min-h-screen text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the Best{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              ProopCo
            </span>{" "}
            Challenge
          </h1>
        </div>

        {/* Challenge Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-800/50 rounded-full p-2 backdrop-blur-sm border border-gray-700">
            {challenges.map((challenge) => (
              <button
                key={challenge.id}
                onClick={() => handleChallengeSelect(challenge.id)}
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedChallenge === challenge.id
                    ? "bg-white text-black shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                }`}
              >
                {challenge.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challengeData.flex.map((plan) => (
            <div
              key={plan.id}
              className={`bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 ${
                selectedPlan === plan.id
                  ? "border-yellow-400 shadow-xl shadow-yellow-400/20"
                  : "border-gray-700 hover:border-gray-600"
              }`}
            >
              {/* Plan Header */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{plan.amount}</h3>
                  <span className="text-gray-400 text-sm">
                    / {plan.stepType}
                  </span>
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-4">
                  {plan.price}
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {Object.entries(plan.features).map(([feature, value]) => {
                  const featureDisplay = getFeatureValue(value);
                  return (
                    <div
                      key={feature}
                      className="flex justify-between items-center text-sm"
                    >
                      <span className="text-gray-300">{feature}</span>
                      <span className={`font-medium ${featureDisplay.color}`}>
                        {featureDisplay.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Start Challenge Button */}
              <button
                onClick={() => handleStartChallenge(plan.id)}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  selectedPlan === plan.id
                    ? "bg-yellow-400 text-black shadow-lg hover:bg-yellow-300"
                    : "bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 text-black hover:from-yellow-400 hover:to-yellow-500 hover:shadow-lg hover:shadow-yellow-400/25"
                }`}
              >
                {selectedPlan === plan.id ? "Selected!" : "Start Challenge"}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            All plans include 24/7 support and instant funding upon completion
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProopCoChallengeSelector;
