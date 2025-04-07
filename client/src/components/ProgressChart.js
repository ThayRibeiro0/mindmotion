import { jsx as _jsx } from "react/jsx-runtime";
import("chart.js");
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);
const ProgressChart = ({ logs }) => {
    const data = {
        labels: logs.map(log => new Date(log.created_at).toLocaleDateString()),
        datasets: [
            {
                label: 'Minutes Meditated',
                data: logs.map(log => log.duration),
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                tension: 0.4,
            },
        ],
    };
    return (_jsx("div", { className: "bg-white rounded p-4 shadow", children: _jsx(Line, { data: data }) }));
};
export default ProgressChart;
