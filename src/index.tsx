import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Container/App/App';
import './style/Style.scss'
import { BrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
    </React.StrictMode>
);

