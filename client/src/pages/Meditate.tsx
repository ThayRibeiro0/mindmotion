import React from 'react';
import BreathingTimer from '../components/BreathingTimer.js';
import MoodSelector from '../components/MoodSelector.js';

const Meditate: React.FC = () => {
  return (
    <div className="meditate-page">
      <h1>Meditate Page</h1>
      <MoodSelector />
      <BreathingTimer/>
    </div>
  );
};

export default Meditate;