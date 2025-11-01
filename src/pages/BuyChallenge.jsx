import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { challengeAPI, purchaseAPI } from '../services/api';
import Navbar from '../components/Navbar';

const BuyChallenge = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadChallenge();
  }, [challengeId]);

  const loadChallenge = async () => {
    try {
      const response = await challengeAPI.getById(challengeId);
      setChallenge(response.data);
    } catch (error) {
      console.error('Error loading challenge:', error);
    }
  };

  const handlePurchase = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      const response = await purchaseAPI.create(challengeId);
      window.location.href = response.data.paymentUrl;
    } catch (error) {
      alert('Purchase failed: ' + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  if (!challenge) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4">{challenge.title}</h1>
          <div className="text-5xl font-bold text-primary mb-8">
            ${challenge.priceUSD}
          </div>

          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-semibold">Challenge Details</h2>
            {challenge.features?.map((feature, index) => (
              <div key={index} className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">✓</span>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-lg mb-2">Payment with Crypto</h3>
            <p className="text-gray-700">
              You'll be redirected to NOWPayments to complete your purchase with cryptocurrency.
            </p>
          </div>

          <button
            onClick={handlePurchase}
            disabled={loading}
            className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Buy with Crypto'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyChallenge;
