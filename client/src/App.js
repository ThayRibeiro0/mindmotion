import React from 'react';
import Home from './pages/Home.js';
import Header from './components/Header.js';
const App = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement(Home, null)));
};
export default App;
