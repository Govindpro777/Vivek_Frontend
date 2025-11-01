import React, { useState, useEffect } from "react";

const ProopCoTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sample team data - replace with your actual team members
  const teamMembers = [
    {
      id: 1,
      name: "Alex Rodriguez",
      position: "CEO & Founder",
      description:
        "Leading ProopCo with 15+ years in financial markets and prop trading expertise.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/alexrodriguez",
      twitter: "https://twitter.com/alexrodriguez",
      email: "alex@proopco.com",
    },
    {
      id: 2,
      name: "Sarah Chen",
      position: "Head of Trading",
      description:
        "Former Goldman Sachs trader with expertise in forex and risk management strategies.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah@proopco.com",
    },
    {
      id: 3,
      name: "Michael Thompson",
      position: "CTO",
      description:
        "Tech veteran building scalable trading platforms and cutting-edge fintech solutions.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/michaelthompson",
      twitter: "https://twitter.com/michaelthompson",
      email: "michael@proopco.com",
    },
    {
      id: 4,
      name: "Emma Wilson",
      position: "Head of Operations",
      description:
        "Operations expert ensuring smooth trader onboarding and platform reliability.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/emmawilson",
      twitter: "https://twitter.com/emmawilson",
      email: "emma@proopco.com",
    },
    {
      id: 5,
      name: "David Park",
      position: "Head of Analytics",
      description:
        "Data scientist driving insights and performance optimization for prop traders.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/davidpark",
      twitter: "https://twitter.com/davidpark",
      email: "david@proopco.com",
    },
    {
      id: 6,
      name: "Lisa Garcia",
      position: "Customer Success Manager",
      description:
        "Dedicated to trader success with personalized support and training programs.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      linkedin: "https://linkedin.com/in/lisagarcia",
      twitter: "https://twitter.com/lisagarcia",
      email: "lisa@proopco.com",
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex >= totalPages - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalPages]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const getCurrentMembers = () => {
    const startIndex = currentIndex * itemsPerPage;
    return teamMembers.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <div className="bg-black min-h-screen text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            <p className="text-yellow-400 text-sm font-medium tracking-wider">
              MEET THE EXPERTS
            </p>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Team
            </span>
          </h2>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Meet the trading professionals and tech experts behind ProopCo's
            success. Our team combines decades of market experience with
            cutting-edge technology.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Team Cards */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${totalPages * 100}%`,
              }}
            >
              {Array.from({ length: totalPages }, (_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex gap-8 justify-center"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {teamMembers
                    .slice(
                      pageIndex * itemsPerPage,
                      (pageIndex + 1) * itemsPerPage
                    )
                    .map((member) => (
                      <div
                        key={member.id}
                        className="group bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50 hover:border-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/20 flex-1 max-w-sm"
                      >
                        {/* Profile Image */}
                        <div className="relative mb-6">
                          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-yellow-400/50 transition-colors duration-300">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
                        </div>

                        {/* Member Info */}
                        <div className="text-center mb-6">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                            {member.name}
                          </h3>
                          <p className="text-yellow-400 font-semibold mb-4 text-lg">
                            {member.position}
                          </p>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {member.description}
                          </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-4">
                          <a
                            href={member.linkedin}
                            className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 group/social"
                          >
                            <svg
                              className="w-5 h-5 text-gray-400 group-hover/social:text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                          <a
                            href={member.twitter}
                            className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors duration-300 group/social"
                          >
                            <svg
                              className="w-5 h-5 text-gray-400 group-hover/social:text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                            </svg>
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="w-10 h-10 bg-gray-800 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors duration-300 group/social"
                          >
                            <svg
                              className="w-5 h-5 text-gray-400 group-hover/social:text-white"
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
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-yellow-400/80 border border-gray-600 hover:border-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 hover:bg-yellow-400/80 border border-gray-600 hover:border-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
          >
            <svg
              className="w-6 h-6 text-white"
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

        {/* Carousel Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "bg-yellow-400 w-8"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
            <div className="text-gray-400">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">$2B+</div>
            <div className="text-gray-400">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
            <div className="text-gray-400">Countries Represented</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400">Global Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProopCoTeam;
