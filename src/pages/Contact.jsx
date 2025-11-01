import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Have questions? We're here to help!
          </p>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ContactForm />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">support@propfirm.com</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold mb-2">Discord</h3>
              <p className="text-gray-600">Join our community</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <h3 className="font-semibold mb-2">Telegram</h3>
              <p className="text-gray-600">@propfirm_support</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
