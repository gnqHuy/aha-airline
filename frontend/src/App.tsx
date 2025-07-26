import React from 'react';
import './App.css';
import './styles/scrollbar.css';
import { FlightProvider } from './context/FlightContext/FlightContext';
import { router } from './routes/routes';
import { RouterProvider } from 'react-router-dom';

type Props = {
}

const App: React.FC<Props> = () => {

  return(
      <FlightProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </FlightProvider>
  );
}
export default App;
