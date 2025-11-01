import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("activePurchaseId");
    navigate("/");
  };

  const menuItems = [
    {
      title: "Main Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      title: "Dashboard",
      icon: (
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
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 5a2 2 0 012-2h4a2 2 0 012 2v3H8V5z"
          />
        </svg>
      ),
      path: "/dashboard",
    },
    {
      id: "buy-account",
      title: "Buy Account",
      icon: (
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
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
      path: "/buy-account",
    },
    {
      id: "account-challenge",
      title: "Account Challenge",
      icon: (
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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      path: "/challenges",
    },
    {
      id: "wallet",
      title: "Wallet",
      icon: (
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
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      path: "/wallet",
    },
    {
      id: "certificates",
      title: "Certificates",
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      path: "/certificates",
    },
    {
      id: "economic-calendar",
      title: "Economic Calendar",
      icon: (
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      path: "/economic-calendar",
    },
    {
      title: "Account Settings",
      isHeader: true,
    },
    {
      id: "user-profile",
      title: "User Profile",
      icon: (
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
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      path: "/profile",
    },
    {
      id: "authentication",
      title: "Authentication",
      icon: (
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      path: "/authentication",
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 z-50 ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Logo Section */}
      <div className="h-20 flex items-center justify-between px-4 border-b border-gray-800">
        {!isCollapsed && (
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              ProopCo
            </span>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
        >
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item, index) => {
          if (item.isHeader) {
            return !isCollapsed ? (
              <div
                key={index}
                className="px-4 py-3 text-xs uppercase text-gray-500 font-semibold tracking-wider"
              >
                {item.title}
              </div>
            ) : (
              <div key={index} className="h-8"></div>
            );
          }

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center px-4 py-3 mx-2 rounded-xl transition-all duration-300 group ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-400 border-r-4 border-yellow-400"
                  : "text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400"
              }`}
            >
              <span
                className={`${
                  isActive(item.path) ? "text-yellow-400" : "text-gray-400"
                } group-hover:text-yellow-400 transition-colors duration-300`}
              >
                {item.icon}
              </span>
              {!isCollapsed && (
                <span className="ml-3 font-medium">{item.title}</span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom Actions */}
      <div className="border-t border-gray-800 p-4 space-y-2">
        <Link
          to="/"
          className="flex items-center px-4 py-3 rounded-xl text-gray-300 hover:bg-gray-800/50 hover:text-yellow-400 transition-all duration-300"
        >
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {!isCollapsed && <span className="ml-3">Return to Website</span>}
        </Link>

        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 rounded-xl text-red-400 hover:bg-red-900/20 transition-all duration-300"
        >
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
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          {!isCollapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
