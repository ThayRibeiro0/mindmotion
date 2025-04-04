import React, { FC } from 'react';
import BreathingTimer from '../components/BreathingTimer';
import MoodSelector from '../components/MoodSelector';

const Meditate: FC = () => {
  return (
    <div>
      <h1>Meditate Page</h1>
      <BreathingTimer />
      <MoodSelector />
    </div>
  );
};

export default Meditate;