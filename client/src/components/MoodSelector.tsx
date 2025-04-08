import React, { useState } from 'react';

const MoodSelector: React.FC = () => {
  const [mood, setMood] = useState('');

  const handleMoodClick = (selectedMood: string) => {
    setMood(selectedMood);
  };

  const moodOptions = [
    { value: 'happy', label: 'Happy', emoji: '😊' },
    { value: 'sad', label: 'Sad', emoji: '😢' },
    { value: 'calm', label: 'Calm', emoji: '🧘‍♀️' },
    { value: 'stressed', label: 'Stressed', emoji: '🤯' },
    { value: 'excited', label: 'Excited', emoji: '🤩' }, // Added another option
  ];

  return (
    <div className="mood-selector-container">
      <h2>How are you feeling today?</h2>
      <div className="mood-buttons-container">
        {moodOptions.map((option) => (
          <button
            key={option.value}
            className={`mood-button ${mood === option.value ? 'selected' : ''}`}
            onClick={() => handleMoodClick(option.value)}
          >
            {option.emoji} {option.label}
          </button>
        ))}
      </div>
      {mood && <p className="selected-mood-text">You are feeling: {moodOptions.find(opt => opt.value === mood)?.emoji} {mood}</p>}
    </div>
  );
}

export default MoodSelector;