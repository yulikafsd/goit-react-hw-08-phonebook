import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { store } from 'redux/store';
import { theme } from 'constants/theme';
import { App } from 'App';
import { GlobalStyle } from 'styles/GlobalStyles';
import { HelmetProvider } from 'react-helmet-async';
import { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <BrowserRouter basename="/phonebook">
            <ThemeProvider theme={theme}>
              <App />
              <ToastContainer autoClose={2000} style={{ width: '200px' }} />
              <GlobalStyle />
            </ThemeProvider>
          </BrowserRouter>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
