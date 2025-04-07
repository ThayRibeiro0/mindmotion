import { jsx as _jsx } from "react/jsx-runtime";
import './index.css'; // Certifique-se que o caminho está correto
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Certifique-se que o caminho está correto
const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));
}
else {
    console.error("Root element not found");
}
