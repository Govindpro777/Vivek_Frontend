import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Rules = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-8">Challenge Rules</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">General Rules</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Maximum daily drawdown: 5%</li>
              <li>• Maximum total drawdown: 10%</li>
              <li>• Profit target: 10% of initial balance</li>
              <li>• Minimum trading days: 5 days</li>
              <li>• Maximum challenge duration: 30 days</li>
              <li>• Weekend trading not allowed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Trading Rules</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• No martingale or grid trading</li>
              <li>• Maximum 5% risk per trade</li>
              <li>• All trading styles allowed (scalping, day trading, swing)</li>
              <li>• News trading allowed</li>
              <li>• Expert Advisors (EAs) allowed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Profit Split</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• Phase 1: 80% to trader, 20% to firm</li>
              <li>• Phase 2: 85% to trader, 15% to firm</li>
              <li>• Funded account: 90% to trader, 10% to firm</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Payout Policy</h2>
            <ul className="space-y-3 text-gray-700">
              <li>• First payout after 14 days</li>
              <li>• Subsequent payouts every 14 days</li>
              <li>• Minimum payout: $100</li>
              <li>• Payouts via crypto or bank transfer</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rules;
