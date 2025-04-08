import React from 'react';
import Home from './pages/Home.js';
import Header from './components/Header.js';
// import Dashboard from './pages/Dashboard.js';
// import Meditate from './pages/Meditate.js';
import Contact from './pages/Contact.js';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Dashboard />
      <Meditate /> */}
      <Contact />
    </>
  );
}

export default App;
