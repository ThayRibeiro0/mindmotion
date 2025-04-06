import React from 'react';
import BreathingTimer from '../components/BreathingTimer.js';
import MoodSelector from '../components/MoodSelector.js';

const Meditate: React.FC = () => {
  return (
    <div>
      <h1>Meditate Page</h1>
      <BreathingTimer />
      <MoodSelector />
    </div>
  );
};

export default Meditate;