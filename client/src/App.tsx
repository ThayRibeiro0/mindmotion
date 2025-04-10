import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './components/ProtectedRoute.js';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import Meditate from './pages/Meditate.js';
import Contact from './pages/Contact.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import Dashboard from './pages/Dashboard.js';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="meditate" element={<Meditate />} />
        <Route path="dashboard" element={<Dashboard />} />
        {/* Protected Routes */}
        {/* <Route path="meditate" element={<PrivateRoute><Meditate /></PrivateRoute>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
