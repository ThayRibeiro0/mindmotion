import React from 'react';
import Home from './pages/Home.js';
import Header from './components/Header.js';
import Dashboard from './pages/Dashboard.js';
import Meditate from './pages/Meditate.js';
import BreathingTimer from './components/BreathingTimer.js';
import MoodSelector from './components/MoodSelector.js';
import ProgressChart from './components/ProgressChart.js'; // Import the ProgressChart component

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Dashboard />
      <Meditate />
      <BreathingTimer />
      <MoodSelector />
      <ProgressChart logs={[]} />
    </>
  );
}

export default App;
