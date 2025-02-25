import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';
import { setupAxios } from './utils/api';
import App from './App';
import { SnackbarProvider } from 'notistack';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

setupAxios(store);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SnackbarProvider anchorOrigin={{vertical: "top", horizontal: "right"}} autoHideDuration={2000}>
        <App></App>
      </SnackbarProvider>
    </PersistGate>
  </Provider>
);

reportWebVitals();
