import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider       theme={{
        
        colors: {
          gray: [
            "#f8f9fa",
            "#f1f3f5",
            "#e9ecef",
            "#dee2e6",
            "#ced4da",
            "#adb5bd",
            "#868e96",
            "#495057",
            "#343a40",
            "#212529",
          ],
        },
        primaryColor: "gray",
      }}
    >
      <style>
        {`
          :root {
            --mantine-color-body: #ffffff;
            --mantine-color-text: #525252;
          }
        `}
      </style>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);

