import React, { useState, useEffect } from 'react';
const BreathingTimer = () => {
    const [timeLeft, setTimeLeft] = useState(30);
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        let timer = null;
        if (isActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1); // Decrease time left by 1 second
            }, 1000);
        }
        else if (timeLeft === 0) {
            setIsActive(false);
        }
        return () => {
            if (timer)
                clearInterval(timer);
        };
    }, [isActive, timeLeft]);
    const handleStart = () => {
        setIsActive(true);
    };
    const handleReset = () => {
        setIsActive(false);
        setTimeLeft(30);
    };
    return (React.createElement("div", null,
        React.createElement("h2", null, "Breathing Timer"),
        timeLeft > 0 ? (React.createElement("p", null,
            "Time remaining: ",
            timeLeft,
            " seconds")) : (React.createElement("p", null, "Breathing exercise complete!")),
        React.createElement("div", null,
            !isActive && timeLeft === 30 && (React.createElement("button", { onClick: handleStart }, "Start")),
            (isActive || timeLeft < 30) && (React.createElement("button", { onClick: handleReset }, "Reset")))));
};
export default BreathingTimer;
