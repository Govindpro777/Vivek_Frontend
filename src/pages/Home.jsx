import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChallengeCard from "../components/ChallengeCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";
import { challengeAPI } from "../services/api";
import ProopCoChallengeSelector from "../components/Choose";
import Testimonial from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    loadChallenges();
  }, []);

  const loadChallenges = async () => {
    try {
      const response = await challengeAPI.getAll();
      setChallenges(response.data);
    } catch (error) {
      console.error("Error loading challenges:", error);
    }
  };

  const testimonials = [
    {
      name: "John Smith",
      profit: "+$15,420",
      text: "Amazing platform! Passed my 10k challenge in 3 weeks.",
    },
    {
      name: "Sarah Johnson",
      profit: "+$8,950",
      text: "Best prop firm out there. Fast payouts and great support.",
    },
    {
      name: "Mike Chen",
      profit: "+$22,100",
      text: "Started with 5k, now trading 20k account. Life changing!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <ProopCoChallengeSelector />
      <Testimonial />
      <WhyChooseUs />

      <Footer />
    </div>
  );
};

export default Home;
