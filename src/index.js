import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/style.scss'
import './assets/fonts/fonts.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();