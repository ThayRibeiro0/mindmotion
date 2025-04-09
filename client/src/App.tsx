import React from 'react';
import Home from './pages/Home.js';
import Header from './components/Header.js';
import Dashboard from './pages/Dashboard.js';
import Meditate from './pages/Meditate.js';
import Contact from './pages/Contact.js';
import RegisterPage from './pages/RegisterPage.js';
import LoginPage from './pages/LoginPage.js';

const App: React.FC = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Dashboard/>
      <Meditate/>
      <Contact/>
      <RegisterPage/>
      <LoginPage/>
    </>
  );
}

export default App;
