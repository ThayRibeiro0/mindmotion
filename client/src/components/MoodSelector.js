import React, { useState } from 'react';
const MoodSelector = () => {
    const [mood, setMood] = useState('');
    const handleChange = (event) => {
        setMood(event.target.value);
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "Mood Selector"),
        React.createElement("label", { htmlFor: "mood-select" }, "Select your mood:"),
        React.createElement("select", { id: "mood-select", value: mood, onChange: handleChange },
            React.createElement("option", { value: "" }, "--Select your mood--"),
            React.createElement("option", { value: "happy" }, "Happy"),
            React.createElement("option", { value: "sad" }, "Sad"),
            React.createElement("option", { value: "calm" }, "Calm"),
            React.createElement("option", { value: "stressed" }, "Stressed")),
        mood && React.createElement("p", null,
            "You are feeling: ",
            mood)));
};
export default MoodSelector;
