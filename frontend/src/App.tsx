import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { FlightProvider } from './context/FlightContext/FlightContext';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';
import { Persistor } from 'redux-persist';

type Props = {
}

const App: React.FC<Props> = () => {
  //hellohello

  return(
      <FlightProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </FlightProvider>
  );
}
export default App;
