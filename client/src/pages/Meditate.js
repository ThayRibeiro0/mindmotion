import React from 'react';
import BreathingTimer from '../components/BreathingTimer.js';
import MoodSelector from '../components/MoodSelector.js';
const Meditate = () => {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Meditate Page"),
        React.createElement(BreathingTimer, null),
        React.createElement(MoodSelector, null)));
};
export default Meditate;
