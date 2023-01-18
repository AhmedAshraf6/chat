import React from 'react';
import ReactDOM from 'react-dom/client';
// All Contexts
import { AdsProvider } from './contexts/AdsProvider';
import MainProvider from './contexts/MainProvider';
// All Contexts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './style.scss';
import App from './App';
import { UserProvider } from './contexts/UserProvider';
import { CalledUserProvider } from './contexts/CalledUserProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdsProvider>
      <MainProvider>
        <UserProvider>
          <CalledUserProvider>
            <App />
          </CalledUserProvider>
        </UserProvider>
      </MainProvider>
    </AdsProvider>
  </React.StrictMode>
);
