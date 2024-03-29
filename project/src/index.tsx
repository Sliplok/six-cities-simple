import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import MockkData from './data';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount = {MockkData.PlacesCount}/>
  </React.StrictMode>
);
