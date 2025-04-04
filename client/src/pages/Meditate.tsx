import React from 'react';
import BreathingTimer from '../components/BreathingTimer.tsx';
import MoodSelector from '../components/MoodSelector.tsx';

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