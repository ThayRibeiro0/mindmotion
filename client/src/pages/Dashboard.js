import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressChart from '../components/ProgressChart.js';
const Dashboard = () => {
    const [quote, setQuote] = useState('');
    const [stats, setStats] = useState({ total: 0, todayCount: 0, streak: 0, logs: [] });
    useEffect(() => {
        axios.get('/api/quotes').then(res => {
            setQuote(`${res.data.q} — ${res.data.a}`);
        });
        axios.get('/api/meditations/stats').then(res => {
            setStats(res.data);
        });
    }, []);
    return (React.createElement("div", { className: "max-w-4xl mx-auto py-6 px-4 space-y-6" },
        React.createElement("h1", { className: "text-3xl font-bold text-center" }, "Dashboard"),
        React.createElement("blockquote", { className: "italic text-center" }, quote),
        React.createElement("div", { className: "grid grid-cols-2 gap-4" },
            React.createElement("div", { className: "bg-blue-100 p-4 rounded text-center" },
                React.createElement("p", { className: "text-xl font-bold" }, stats.total),
                React.createElement("p", null, "Total Meditations")),
            React.createElement("div", { className: "bg-green-100 p-4 rounded text-center" },
                React.createElement("p", { className: "text-xl font-bold" }, stats.todayCount),
                React.createElement("p", null, "Today"))),
        React.createElement("p", { className: "text-center" },
            "\uD83D\uDD25 Current Streak: ",
            stats.streak,
            " days"),
        React.createElement(ProgressChart, { logs: stats.logs })));
};
export default Dashboard;
