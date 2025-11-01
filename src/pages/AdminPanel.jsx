import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { adminAPI } from '../services/api';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.role !== 'admin') {
      navigate('/');
      return;
    }
    loadPurchases();
  }, []);

  const loadPurchases = async () => {
    try {
      const response = await adminAPI.getPurchases();
      setPurchases(response.data);
    } catch (error) {
      console.error('Error loading purchases:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSendChallenge = async (purchaseId) => {
    try {
      await adminAPI.sendChallenge(purchaseId);
      alert('Challenge details sent successfully!');
    } catch (error) {
      alert('Failed to send challenge details');
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Panel - Purchases</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Challenge</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {purchases.map((purchase) => (
                <tr key={purchase._id}>
                  <td className="px-6 py-4">{purchase.userId?.email}</td>
                  <td className="px-6 py-4">{purchase.challengeId?.title}</td>
                  <td className="px-6 py-4">${purchase.amountUSD}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      purchase.status === 'paid' ? 'bg-green-100 text-green-800' :
                      purchase.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {purchase.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {new Date(purchase.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    {purchase.status === 'paid' && (
                      <button
                        onClick={() => handleSendChallenge(purchase._id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm"
                      >
                        Send Challenge
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
