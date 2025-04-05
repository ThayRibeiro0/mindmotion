import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProgressChart from '../components/ProgressChart';

const Dashboard: React.FC = (): JSX.Element => {
  const [quote, setQuote] = useState('');
  const [stats, setStats] = useState<{ total: number; todayCount: number; streak: number; logs: any[] }>({ total: 0, todayCount: 0, streak: 0, logs: [] });

  useEffect(() => {
    axios.get<{ q: string; a: string }>('/api/quotes').then(res => {
      setQuote(`${res.data.q} — ${res.data.a}`);
    });
    axios.get<{ total: number; todayCount: number; streak: number; logs: any[] }>('/api/meditations/stats').then(res => {
      setStats(res.data);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <blockquote className="italic text-center">{quote}</blockquote>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-4 rounded text-center">
          <p className="text-xl font-bold">{stats.total}</p>
          <p>Total Meditations</p>
        </div>
        <div className="bg-green-100 p-4 rounded text-center">
          <p className="text-xl font-bold">{stats.todayCount}</p>
          <p>Today</p>
        </div>
      </div>
      <p className="text-center">🔥 Current Streak: {stats.streak} days</p>
      <ProgressChart logs={stats.logs} />
    </div>
  );
};

export default Dashboard;