import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import "./Spinner.css";

type Props = {
  timeout: number;
}

const Spinner = ({ timeout }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, timeout * 1000);
    return () => clearTimeout(timer);
  }, [timeout]);

  return (
    <>
      {isVisible && (
        <>
          <div id="overlay" className="fixed inset-0 bg-black bg-opacity-50 z-50"></div>
          <div id="loading-spinner" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ClipLoader
              color="#36b7d7"
              loading={isVisible}
              size={35}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </>
      )}
    </>
  );
}

export default Spinner;
