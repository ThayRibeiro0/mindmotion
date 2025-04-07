import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const MoodSelector = () => {
    const [mood, setMood] = useState('');
    const handleChange = (event) => {
        setMood(event.target.value);
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Mood Selector" }), _jsx("label", { htmlFor: "mood-select", children: "Select your mood:" }), _jsxs("select", { id: "mood-select", value: mood, onChange: handleChange, children: [_jsx("option", { value: "", children: "--Select your mood--" }), _jsx("option", { value: "happy", children: "Happy" }), _jsx("option", { value: "sad", children: "Sad" }), _jsx("option", { value: "calm", children: "Calm" }), _jsx("option", { value: "stressed", children: "Stressed" })] }), mood && _jsxs("p", { children: ["You are feeling: ", mood] })] }));
};
export default MoodSelector;
