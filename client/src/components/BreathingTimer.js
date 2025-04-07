import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
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
    return (_jsxs("div", { children: [_jsx("h2", { children: "Breathing Timer" }), timeLeft > 0 ? (_jsxs("p", { children: ["Time remaining: ", timeLeft, " seconds"] })) : (_jsx("p", { children: "Breathing exercise complete!" })), _jsxs("div", { children: [!isActive && timeLeft === 30 && (_jsx("button", { onClick: handleStart, children: "Start" })), (isActive || timeLeft < 30) && (_jsx("button", { onClick: handleReset, children: "Reset" }))] })] }));
};
export default BreathingTimer;
