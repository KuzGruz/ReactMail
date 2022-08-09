import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import Layout from '@ui/Layout/Layout'
import AppRouter from '@ui/AppRouter'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Layout>
              <AppRouter/>
          </Layout>
      </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
