import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import axios from 'axios';
import { useEffect, useState } from 'react';
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
    return (_jsxs("div", { className: "max-w-4xl mx-auto py-6 px-4 space-y-6", children: [_jsx("h1", { className: "text-3xl font-bold text-center", children: "Dashboard" }), _jsx("blockquote", { className: "italic text-center", children: quote }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "bg-blue-100 p-4 rounded text-center", children: [_jsx("p", { className: "text-xl font-bold", children: stats.total }), _jsx("p", { children: "Total Meditations" })] }), _jsxs("div", { className: "bg-green-100 p-4 rounded text-center", children: [_jsx("p", { className: "text-xl font-bold", children: stats.todayCount }), _jsx("p", { children: "Today" })] })] }), _jsxs("p", { className: "text-center", children: ["\uD83D\uDD25 Current Streak: ", stats.streak, " days"] }), _jsx(ProgressChart, { logs: stats.logs })] }));
};
export default Dashboard;
