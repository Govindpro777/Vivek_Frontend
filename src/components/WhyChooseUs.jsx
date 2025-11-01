import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
      title: "Instant Funding",
      description:
        "Get funded within 24 hours of passing your challenge. No waiting, no delays - start trading with real capital immediately.",
      highlight: "24hr",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "90% Profit Split",
      description:
        "Keep up to 90% of your trading profits. Our industry-leading profit sharing ensures you're rewarded for your success.",
      highlight: "90%",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
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
      title: "No Time Limits",
      description:
        "Trade at your own pace without pressure. No minimum trading days or time restrictions on funded accounts.",
      highlight: "Unlimited",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Global Markets",
      description:
        "Access forex, indices, commodities, and crypto markets worldwide. Trade what you know best with global opportunities.",
      highlight: "Worldwide",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM12 6a6 6 0 100 12 6 6 0 000-12z"
          />
        </svg>
      ),
      title: "24/7 Support",
      description:
        "Get expert assistance anytime, anywhere. Our dedicated support team is available around the clock for all traders.",
      highlight: "24/7",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      title: "Flexible Rules",
      description:
        "Trade with reasonable rules designed for success. No hidden restrictions or unrealistic requirements to hold you back.",
      highlight: "Fair",
    },
  ];

  const stats = [
    { number: "$50M+", label: "Funded to Traders" },
    { number: "10K+", label: "Active Traders" },
    { number: "95%", label: "Success Rate" },
    { number: "150+", label: "Countries Served" },
  ];

  return (
    <div className="bg-black min-h-screen text-white py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/5 to-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-yellow-500/3 to-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            <p className="text-yellow-400 text-sm font-medium tracking-wider">
              WHY PROOPCO
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              ProopCo
            </span>
          </h2>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful traders who chose ProopCo for
            transparent, trader-friendly conditions and industry-leading profit
            sharing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 hover:border-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/10"
            >
              {/* Icon with highlight */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-2xl flex items-center justify-center text-yellow-400 group-hover:from-yellow-400/30 group-hover:to-yellow-600/30 transition-all duration-300">
                  {feature.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">
                  {feature.highlight}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Trusted by Traders{" "}
              <span className="text-yellow-400">Worldwide</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Our numbers speak for themselves - join the ProopCo success story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="group relative px-12 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 transform">
            <span className="relative z-10">Start Your Journey Today</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
