import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Opcional para estilos globales
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);