import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import any global styles if you have them
import App from './components/App.js'; // Correct

// Render the App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
