// import React, { useState } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { authAPI } from '../services/api';

// const VerifyEmail = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email;

//   const [code, setCode] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);

//     try {
//       await authAPI.verify({ email, code });
//       alert('Email verified! Please login.');
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Verification failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-4">Verify Email</h1>
//         <p className="text-gray-600 text-center mb-8">
//           We sent a 6-digit code to <strong>{email}</strong>
//         </p>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Verification Code</label>
//             <input
//               type="text"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//               placeholder="Enter 6-digit code"
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-center text-2xl tracking-widest"
//               maxLength="6"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50"
//           >
//             {loading ? 'Verifying...' : 'Verify Email'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmail;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authAPI } from "../services/api";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authAPI.verify({ email, code });
      alert("Email verified! Please login.");
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              ProopCo
            </span>
          </div>
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-yellow-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Check Your Email
          </h1>
          <p className="text-gray-400 leading-relaxed">
            We sent a 6-digit verification code to
          </p>
          <p className="text-yellow-400 font-semibold">{email}</p>
        </div>

        {error && (
          <div className="bg-red-900/50 border border-red-500/50 text-red-300 px-4 py-3 rounded-xl mb-6 backdrop-blur-sm">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              {error}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-300 font-semibold mb-3 text-center">
              Verification Code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) =>
                setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="000000"
              className="w-full px-4 py-6 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 text-center text-3xl font-mono tracking-[0.5em] transition-all duration-300"
              maxLength="6"
              required
            />
            <p className="text-xs text-gray-500 mt-2 text-center">
              Enter the 6-digit code from your email
            </p>
          </div>

          <button
            type="submit"
            disabled={loading || code.length !== 6}
            className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-4 rounded-xl font-bold text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Verifying...
              </div>
            ) : (
              "Verify & Continue"
            )}
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm mb-4">Didn't receive the code?</p>
          <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300 text-sm">
            Resend verification code
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-xs">
            Need help? Contact our{" "}
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
