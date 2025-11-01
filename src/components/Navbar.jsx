// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const token = localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     window.location.href = '/';
//   };

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           <Link to="/" className="text-2xl font-bold text-primary">
//             PropFirm
//           </Link>

//           <div className="hidden md:flex items-center space-x-8">
//             <a href="#challenges" className="text-gray-700 hover:text-primary">Challenges</a>
//             <a href="#testimonials" className="text-gray-700 hover:text-primary">Testimonials</a>
//             <Link to="/rules" className="text-gray-700 hover:text-primary">Rules</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
//           </div>

//           <div className="flex items-center space-x-4">
//             {token ? (
//               <>
//                 <Link to="/dashboard" className="text-gray-700 hover:text-primary">Dashboard</Link>
//                 <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="text-gray-700 hover:text-primary">Login</Link>
//                 <Link to="/signup" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90">
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <nav className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                ProopCo
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {token ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium px-4 py-2"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600/80 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-red-500/50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium px-4 py-2"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25"
                >
                  Get Funded
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors duration-300 p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 space-y-4">
            <div className="pt-4 border-t border-gray-800 space-y-3">
              {token ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-600/80 hover:bg-red-600 text-white px-4 py-3 rounded-xl font-semibold transition-colors duration-300 border border-red-500/50"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-3 rounded-xl font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Funded
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
