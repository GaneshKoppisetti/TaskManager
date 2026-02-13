import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigation } from './Navigation/Navigation';
import Loader from './Shared/Loader';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.title = 'Task Manager';
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Loader />
      <Navigation />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
