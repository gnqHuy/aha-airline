import React, { createContext, useContext, useState } from "react";

type SearchFlightStateContextType = {
  searchFlightState: boolean;
  setSearchFlightState: (state: boolean) => void;
};

const SearchFlightStateContext = createContext<SearchFlightStateContextType | undefined>(undefined);

export const SearchFlightStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchFlightState, setSearchFlightState] = useState<boolean>(false);

  return (
    <SearchFlightStateContext.Provider value={{ searchFlightState, setSearchFlightState }}>
      {children}
    </SearchFlightStateContext.Provider>
  );
};

export const useSearchFlightState = () => {
  const context = useContext(SearchFlightStateContext);
  if (!context) {
    throw new Error("useSearchFlightState must be used within a SearchFlightStateProvider");
  }
  return context;
};
