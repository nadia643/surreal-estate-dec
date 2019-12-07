import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/app.css';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  global.document.getElementById('root'),
);
