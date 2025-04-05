import React, { useState } from 'react';

const MoodSelector: React.FC = () => {
  const [mood, setMood] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMood(event.target.value);
  };

  return (
    <div>
      <h2>Mood Selector</h2>
      <label htmlFor="mood-select">Select your mood:</label>
      <select id="mood-select" value={mood} onChange={handleChange}>
        <option value="">--Select your mood--</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="calm">Calm</option>
        <option value="stressed">Stressed</option>
      </select>
      {mood && <p>You are feeling: {mood}</p>}
    </div>
  );
}

export default MoodSelector;