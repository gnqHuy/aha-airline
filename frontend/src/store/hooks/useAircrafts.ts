import { useCallback, useState } from "react";
import { Aircraft } from "../../object/aircraft";
import { getAllAircrafts, addAircrafts } from "../../api/aircraftsAPI";

export const useAircrafts = () => {
  const [aircrafts, setAircrafts] = useState<Aircraft[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAircrafts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getAllAircrafts();
      setAircrafts(res.data);
    } catch (err: any) {
      setError("Failed to load aircraft data.");
    } finally {
      setLoading(false);
    }
  }, []);

  const addAircraft = useCallback(
    async (newAircraft: Aircraft): Promise<string | null> => {
      try {
        const res = await addAircrafts(newAircraft);
        setAircrafts((prev) => [...prev, newAircraft]);
        return res.data;
      } catch (err: any) {
        if (err.response?.data) return `Server Error: ${err.response.data}`;
        if (err.request) return "Network Error";
        return "Unknown Error";
      }
    },
    []
  );

  return {
    aircrafts,
    loading,
    error,
    fetchAircrafts,
    addAircraft,
    setAircrafts,
  };
};
