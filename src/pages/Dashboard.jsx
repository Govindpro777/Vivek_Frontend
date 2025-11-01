// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import ProgressCard from '../components/Dashboard/ProgressCard';
// import ProfitChart from '../components/Dashboard/ProfitChart';
// import ActivityList from '../components/Dashboard/ActivityList';
// import { purchaseAPI } from '../services/api';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [dashboardData, setDashboardData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       navigate('/login');
//       return;
//     }

//     // Get purchaseId from URL or localStorage
//     const urlParams = new URLSearchParams(window.location.search);
//     const purchaseId = urlParams.get('purchaseId') || localStorage.getItem('activePurchaseId');

//     if (purchaseId) {
//       loadDashboard(purchaseId);
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   const loadDashboard = async (purchaseId) => {
//     try {
//       const response = await purchaseAPI.getDashboard(purchaseId);
//       setDashboardData(response.data);
//       localStorage.setItem('activePurchaseId', purchaseId);
//     } catch (error) {
//       console.error('Error loading dashboard:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   if (!dashboardData) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <div className="container mx-auto px-4 py-12 text-center">
//           <h1 className="text-3xl font-bold mb-4">No Active Challenge</h1>
//           <p className="text-gray-600 mb-8">You don't have an active challenge yet.</p>
//           <a href="/#challenges" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">
//             View Challenges
//           </a>
//         </div>
//       </div>
//     );
//   }

//   const { stats, challenge, activities } = dashboardData;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold mb-8">{challenge.title} Dashboard</h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-gray-600 font-semibold mb-2">Current Balance</h3>
//             <div className="text-3xl font-bold">${stats.currentBalance.toFixed(2)}</div>
//           </div>

//           <ProgressCard
//             title="Profit/Loss"
//             value={parseFloat(stats.pnlPercent)}
//             max={stats.targetPercent}
//             color={parseFloat(stats.pnlPercent) >= 0 ? 'green' : 'red'}
//           />

//           <ProgressCard
//             title="Drawdown"
//             value={parseFloat(stats.drawdownPercent)}
//             max={stats.maxDrawdownPercent}
//             color={parseFloat(stats.drawdownPercent) > stats.maxDrawdownPercent * 0.8 ? 'red' : 'yellow'}
//           />

//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h3 className="text-gray-600 font-semibold mb-2">Status</h3>
//             <div className={`text-2xl font-bold ${
//               stats.status === 'passed' ? 'text-green-600' :
//               stats.status === 'failed' ? 'text-red-600' :
//               'text-blue-600'
//             }`}>
//               {stats.status.toUpperCase()}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//           <ProfitChart activities={activities} />
//           <ActivityList activities={activities} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { purchaseAPI } from "../services/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const purchaseId =
      urlParams.get("purchaseId") || localStorage.getItem("activePurchaseId");

    if (purchaseId) {
      loadDashboard(purchaseId);
    } else {
      setLoading(false);
    }
  }, []);

  const loadDashboard = async (purchaseId) => {
    try {
      const response = await purchaseAPI.getDashboard(purchaseId);
      setDashboardData(response.data);
      localStorage.setItem("activePurchaseId", purchaseId);
    } catch (error) {
      console.error("Error loading dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  const topTraders = [
    {
      rank: 1,
      name: "کاستوم چالش 25K",
      profit: "$1742.7",
      date: "1404-05-18",
      link: "TRON Scan",
    },
    {
      rank: 2,
      name: "آکونتی چالش 25K",
      profit: "$1130.576",
      date: "1404-05-25",
      link: "TRON Scan",
    },
    {
      rank: 3,
      name: "کاستوم چالش 25K",
      profit: "$2347.126",
      date: "1404-05-21",
      link: "TRON Scan",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-white text-lg">Loading Dashboard...</span>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

        <div
          className={`transition-all duration-300 ${
            isCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          {/* Header */}
          <div className="bg-gray-900 px-8 py-6 border-b border-gray-800">
            <h1 className="text-2xl font-bold text-white">User Dashboard</h1>
          </div>

          {/* No Active Challenge Section */}
          <div className="p-8">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              {/* Demo Account Info */}
              <div className="flex items-center justify-between mb-8 bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Demo Test Account
                    </h3>
                    <div className="flex items-center space-x-6 mt-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">Log In:</span>
                        <span className="text-white font-mono">200000</span>
                        <button className="text-gray-500 hover:text-yellow-400">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-400">Master Pass:</span>
                        <span className="text-white font-mono">
                          ProopCo!Test1
                        </span>
                        <button className="text-gray-500 hover:text-yellow-400">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gray-400 text-sm">
                    Server: ProopCoFX-Live / Platform: MT5
                  </div>
                </div>
                <button
                  onClick={() => setShowAccountModal(false)}
                  className="text-gray-500 hover:text-white"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Alert Message */}
              <div className="flex items-center justify-between bg-yellow-900/20 border border-yellow-700/50 rounded-xl p-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-yellow-400 font-semibold">
                      You don't have an active account yet
                    </h4>
                    <p className="text-gray-300 mt-1">
                      To start your first challenge, purchase an account and
                      begin your journey on Propco.
                    </p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105">
                  Start First Challenge
                </button>
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Challenge Statistics */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">
                      Challenge Statistics
                    </h3>
                    <button className="text-yellow-400 hover:text-yellow-300 text-sm font-medium flex items-center space-x-1">
                      <span>View All</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center justify-center py-16">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg
                          className="w-16 h-16 text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-4xl font-bold text-yellow-400 mb-2">
                        IT'S TIME
                      </h4>
                      <h4 className="text-4xl font-bold text-yellow-400 mb-4">
                        TO START!
                      </h4>
                      <p className="text-gray-400">
                        Begin your trading journey today
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top Traders */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Top Traders
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left text-gray-400 text-sm font-medium pb-3">
                            نوع چالش
                          </th>
                          <th className="text-left text-gray-400 text-sm font-medium pb-3">
                            مبلغ تسویه
                          </th>
                          <th className="text-left text-gray-400 text-sm font-medium pb-3">
                            زمان تراکنش
                          </th>
                          <th className="text-left text-gray-400 text-sm font-medium pb-3">
                            لینک تراکنش
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {topTraders.map((trader, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-700/50"
                          >
                            <td className="py-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-yellow-400/20 rounded-full flex items-center justify-center">
                                  <svg
                                    className="w-4 h-4 text-yellow-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                  </svg>
                                </div>
                                <span className="text-white font-medium">
                                  {trader.name}
                                </span>
                              </div>
                            </td>
                            <td className="py-4">
                              <span className="text-green-400 font-semibold">
                                {trader.profit}
                              </span>
                            </td>
                            <td className="py-4">
                              <span className="text-gray-300">
                                {trader.date}
                              </span>
                            </td>
                            <td className="py-4">
                              <button className="text-yellow-400 hover:text-yellow-300 font-medium">
                                {trader.link}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { stats, challenge, activities } = dashboardData;

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div
        className={`transition-all duration-300 ${
          isCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Header */}
        <div className="bg-gray-900 px-8 py-6 border-b border-gray-800">
          <h1 className="text-2xl font-bold">{challenge.title} Dashboard</h1>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-gray-400 font-semibold mb-2">
                Current Balance
              </h3>
              <div className="text-3xl font-bold text-white">
                ${stats.currentBalance.toFixed(2)}
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-gray-400 font-semibold mb-2">Profit/Loss</h3>
              <div
                className={`text-3xl font-bold ${
                  parseFloat(stats.pnlPercent) >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {parseFloat(stats.pnlPercent).toFixed(2)}%
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                <div
                  className={`h-2 rounded-full ${
                    parseFloat(stats.pnlPercent) >= 0
                      ? "bg-green-400"
                      : "bg-red-400"
                  }`}
                  style={{
                    width: `${Math.min(
                      Math.abs(parseFloat(stats.pnlPercent)),
                      100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-gray-400 font-semibold mb-2">Drawdown</h3>
              <div
                className={`text-3xl font-bold ${
                  parseFloat(stats.drawdownPercent) >
                  stats.maxDrawdownPercent * 0.8
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {parseFloat(stats.drawdownPercent).toFixed(2)}%
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                <div
                  className={`h-2 rounded-full ${
                    parseFloat(stats.drawdownPercent) >
                    stats.maxDrawdownPercent * 0.8
                      ? "bg-red-400"
                      : "bg-yellow-400"
                  }`}
                  style={{
                    width: `${Math.min(
                      parseFloat(stats.drawdownPercent),
                      100
                    )}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-gray-400 font-semibold mb-2">Status</h3>
              <div
                className={`text-2xl font-bold ${
                  stats.status === "passed"
                    ? "text-green-400"
                    : stats.status === "failed"
                    ? "text-red-400"
                    : "text-blue-400"
                }`}
              >
                {stats.status.toUpperCase()}
              </div>
            </div>
          </div>

          {/* Charts and Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                Profit Chart
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="text-gray-400">Chart Component Here</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">
                Recent Activities
              </h3>
              <div className="space-y-4">
                {activities?.slice(0, 5).map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                  >
                    <div>
                      <div className="text-white font-medium">
                        {activity.type}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {activity.timestamp}
                      </div>
                    </div>
                    <div
                      className={`font-semibold ${
                        activity.amount >= 0 ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      ${Math.abs(activity.amount).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
