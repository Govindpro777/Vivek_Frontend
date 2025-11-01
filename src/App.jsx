import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import Dashboard from './pages/Dashboard';
import BuyChallenge from './pages/BuyChallenge';
import Contact from './pages/Contact';
import Rules from './pages/Rules';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/buy/:challengeId" element={<BuyChallenge />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
