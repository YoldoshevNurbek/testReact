import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nbk from './NBK'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Nbk />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();