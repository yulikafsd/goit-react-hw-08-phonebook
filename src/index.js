import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { store } from 'redux/store';
// import { persistor } from 'redux/store';
// import { PersistGate } from 'redux-persist/integration/react';
import { theme } from 'constants/theme';
import { App } from 'App';
import { GlobalStyle } from 'styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <ThemeProvider theme={theme}>
          <App />
          <ToastContainer />
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
