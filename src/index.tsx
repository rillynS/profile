import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import { store } from './store';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { mainTheme } from './mainTheme';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme = {mainTheme}>
    <App />
    </ThemeProvider>
  </Provider>
);

