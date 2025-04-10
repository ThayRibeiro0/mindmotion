import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/ProtectedRoute.js';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Meditate from './pages/Meditate.js';
import Contact from './pages/Contact.js';
import LoginPage from './pages/LoginPage.js';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meditate" element={<PrivateRoute><Meditate /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
