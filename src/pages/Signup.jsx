// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { authAPI } from '../services/api';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setLoading(true);

//     try {
//       await authAPI.signup({ email: formData.email, password: formData.password });
//       navigate('/verify', { state: { email: formData.email } });
//     } catch (err) {
//       setError(err.response?.data?.message || 'Signup failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
//         <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Password</label>
//             <input
//               type="password"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
//             <input
//               type="password"
//               value={formData.confirmPassword}
//               onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
//               required
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50"
//           >
//             {loading ? 'Creating account...' : 'Sign Up'}
//           </button>
//         </form>

//         <p className="text-center mt-6 text-gray-600">
//           Already have an account?{' '}
//           <Link to="/login" className="text-primary font-semibold hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authAPI } from "../services/api";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    try {
      await authAPI.signup({
        email: formData.email,
        password: formData.password,
      });
      navigate("/verify", { state: { email: formData.email } });
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-3xl font-bold mb-2">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              ProopCo
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Get Funded Today
          </h1>
          <p className="text-gray-400">Create your prop trading account</p>
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
            <label className="block text-gray-300 font-semibold mb-3">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-3">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 pr-12"
                placeholder="Create a strong password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Must be at least 8 characters
            </p>
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-3">
              Confirm Password
            </label>
            <input
              type="password"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
              className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="flex items-start space-x-3">
            <input type="checkbox" className="mt-1 sr-only" required />
            <div className="w-4 h-4 bg-gray-800 border border-gray-600 rounded mt-1"></div>
            <p className="text-sm text-gray-400 leading-relaxed">
              I agree to the{" "}
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-yellow-400 hover:text-yellow-300">
                Privacy Policy
              </a>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
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
                Creating Account...
              </div>
            ) : (
              "Create Trading Account"
            )}
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors duration-300"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Features */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center text-sm text-gray-400">
            <svg
              className="w-4 h-4 text-yellow-400 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Instant funding upon challenge completion
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <svg
              className="w-4 h-4 text-yellow-400 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Up to 90% profit split
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <svg
              className="w-4 h-4 text-yellow-400 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            24/7 dedicated support
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
