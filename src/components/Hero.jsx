import React from "react";

const ProopCoHero = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-yellow-600/5 to-yellow-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-500/5 to-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
        {/* Top badge with enhanced styling */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-sm">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            <p className="text-yellow-400 text-sm font-medium tracking-wider">
              POWERED BY TRADERS
            </p>
          </div>
        </div>

        {/* Enhanced main heading */}
        <div className="text-center max-w-6xl mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black mb-8 leading-tight">
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-2xl">
              ProopCo
            </span>
            <br className="md:hidden" />
            <span className="text-white/90 font-light text-4xl md:text-5xl lg:text-6xl block mt-4">
              Buy Prop Trading Accounts
            </span>
            <span className="text-white/90 font-light text-4xl md:text-5xl lg:text-6xl">
              & Instant Funding
            </span>
          </h1>

          {/* Enhanced description */}
          <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-light">
            The premier platform for Forex traders seeking{" "}
            <span className="text-yellow-400 font-medium">instant funding</span>
            , cutting-edge tools, and profitable trading challenges.{" "}
            <span className="text-white/90">Scale your trading career</span>{" "}
            with our proven prop trading solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProopCoHero;
