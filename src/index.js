import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthContextProvider } from './components/store/auth-context';

ReactDOM.render(
  // Making Context available all in app.js and its children
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById('root')
);
