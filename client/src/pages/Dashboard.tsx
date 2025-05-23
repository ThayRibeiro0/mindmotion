import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UserAvatar from '../assets/avatar.jpg';

interface Stats {
  totalMeditatedTime: string;
  sessionsCompleted: number;
  averageDuration: string;
  emotionalData: {
    month: string;
    peakMindfulness: number;
    restlessMind: number;
  }[];
}

interface UserInfo {
  name: string;
  id: string;
  age: number;
  daysActive: number;
}

interface SoundRecommendation {
  name: string;
  source: string; // Could be a local file path or URL, or Freesound ID
}

interface ForismaticResponse {
  quoteText: string;
  quoteAuthor: string;
  quoteLink: string;
}

interface FreesoundResponse {
  results: {
    id: number;
    name: string;
    user: {
      username: string;
    };
  }[];
}

declare global {
  interface Window {
    processJSON?: (data: { quoteText: string; quoteAuthor: string; quoteLink: string }) => void;
  }
}

const Dashboard = () => {
  const [quote, setQuote] = useState<ForismaticResponse | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [userInfo] = useState<UserInfo>({
    name: 'Adeline Watson',
    id: 'ID: 1890274',
    age: 24,
    daysActive: 56,
  });
  const [soundRecommendations, setSoundRecommendations] = useState<SoundRecommendation[]>([
    { name: 'Gentle Waves', source: '/sounds/gentle-waves.mp3' }, // Example local path
    { name: 'Alpha Waves 10Hz', source: 'https://example.com/alpha-waves.mp3' }, // Example URL
    { name: 'Forest Ambience', source: '/sounds/forest-ambience.ogg' }, // Example local path
  ]);
  const [meditationEvents] = useState([
    { title: 'New sound of nature available!' },
    { title: 'Check out our curated soundscapes for sleep.' },
  ]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const quoteApiUrl = 'http://api.forismatic.com/api/1.0/';
  const freesoundApiKey = 'API_KEY';

  useEffect(() => {
    const fetchQuote = () => {
      const script = document.createElement('script');
      script.src = `${quoteApiUrl}?method=getQuote&format=jsonp&lang=en&jsonp=processJSON`;
      script.async = true;

      window.processJSON = (data: { quoteText: string; quoteAuthor: string; quoteLink: string }) => {
        setQuote({
          quoteText: data.quoteText,
          quoteAuthor: data.quoteAuthor || 'Unknown',
          quoteLink: data.quoteLink,
        });
        delete (window as any).processJSON;
      };

      script.onerror = () => {
        console.error("Failed to load quote script from Forismatic.");
        delete (window as any).processJSON;
      };

      document.body.appendChild(script);
    };

    fetchQuote();

    const fetchStats = () => {
      axios.get<Stats>(`${import.meta.env.VITE_API_URL}/api/meditations/dashboard-stats`, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.API_KEY}`,
        },
      })
      .then(res => {
        setStats(res.data);
      })
      .catch(error => console.error("Error fetching dashboard stats:", error));
    };

    fetchStats();

    const fetchFreesoundRecommendations = async () => {
      if (freesoundApiKey) {
        try {
          const ambientResponse = await axios.get<FreesoundResponse>(
            `https://freesound.org/apiv2/search/text/?query=ambient%20meditation&token=${freesoundApiKey}`
          );
          const natureResponse = await axios.get<FreesoundResponse>(
            `https://freesound.org/apiv2/search/text/?query=nature%20meditation&token=${freesoundApiKey}`
          );

          const newRecommendations: SoundRecommendation[] = [
            ...(ambientResponse.data.results.slice(0, 2).map((sound) => ({
              name: sound.name,
              source: `https://freesound.org/people/${sound.user.username}/sounds/${sound.id}/`,
            }))),
            ...(natureResponse.data.results.slice(0, 2).map((sound) => ({
              name: sound.name,
              source: `https://freesound.org/people/${sound.user.username}/sounds/${sound.id}/`,
            }))),
          ];
          setSoundRecommendations(newRecommendations);
        } catch (error) {
          console.error("Error fetching sounds from Freesound:", error);
        }
      } else {
        console.warn("Freesound API key not provided.");
      }
    };

    fetchFreesoundRecommendations();
  }, [quoteApiUrl, freesoundApiKey]);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const currentMonth = months[currentDate.getMonth()];
  const currentYear = currentDate.getFullYear();
  const daysInMonth = new Date(currentYear, currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">

        {/* Left Section */}
        <div className="dashboard-section">
          {/* Welcome and User Info */}
          <div className="user-info">
            <div className="avatar-container">
              <img src={UserAvatar} alt="User Avatar" className="avatar" />
            </div>
            <div className="user-info-text">
              <h2 className="welcome-text">Welcome, {userInfo.name}</h2>
              <p className="user-details">{userInfo.id} | {userInfo.age} years old</p>
              <p className="user-details">{userInfo.daysActive} Days</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="key-metrics-grid">
            <div className="metric-box blue">
              <p className="metric-value">{stats?.totalMeditatedTime || '0 min'}</p>
              <p className="metric-label">Total Meditated Time</p>
            </div>
            <div className="metric-box green">
              <p className="metric-value">{stats?.sessionsCompleted || 0}</p>
              <p className="metric-label">Sessions Completed</p>
            </div>
            {stats?.averageDuration && (
              <div className="metric-box indigo full-width">
                <p className="metric-value">{stats.averageDuration}</p>
                <p className="metric-label">Average Duration</p>
              </div>
            )}
          </div>

          {/* Emotional Focusing Chart */}
          <div className="chart-container">
            <h3 className="chart-title">Emotional Focusing</h3>
            {stats?.emotionalData && stats.emotionalData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={stats.emotionalData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="peakMindfulness" stroke="#8884d8" name="Peak Mindfulness" />
                  <Line type="monotone" dataKey="restlessMind" stroke="#82ca9d" name="Restless Mind" />
                </LineChart>
              </ResponsiveContainer>
            ) : (
              <p className="no-data">No emotional data available.</p>
            )}
          </div>
        </div>

        {/* Middle Section (Quote) */}
        <div className="quote-section">
          <blockquote className="quote-text">
            "{quote?.quoteText}"
            {quote?.quoteAuthor && <span className="quote-author"> — {quote.quoteAuthor}</span>}
          </blockquote>
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Sound Recommendations */}
          <div className="sound-recommendations-container">
            <h3 className="section-title">Sound Recommendations</h3>
            <ul className="sound-recommendations-list">
              {soundRecommendations.map((recommendation, index) => (
                <li key={index} className="sound-recommendation-item">
                  <span className="sound-name">{recommendation.name}</span>
                  <audio controls src={recommendation.source}>
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </li>
              ))}
            </ul>
          </div>

          {/* Notifications */}
          <div className="events-container">
            <h3 className="section-title">Notifications</h3>
            <ul className="events-list">
              {meditationEvents.map((event, index) => (
                <li key={index} className="event-item">
                  <span>{event.title}</span>
                  <button className="join-button">View</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendar */}
          <div className="calendar-container">
            <h3 className="section-title">Calendar</h3>
            <div className="calendar-header">
              <button onClick={prevMonth}>&lt;</button>
              <h2>{currentMonth} {currentYear}</h2>
              <button onClick={nextMonth}>&gt;</button>
            </div>
            <div className="calendar-grid">
              {daysOfWeek.map((day) => (
                <div key={day} className="calendar-day">{day}</div>
              ))}
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="calendar-day empty"></div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => (
                <div key={i} className="calendar-day">{i + 1}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
