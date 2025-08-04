import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Airport } from "../../object/airport";
import { getAllAirport } from "../../api/airportAPI";

export const useAirports = () => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const fetchAirports = async () => {
    setLoading(true);
    try {
      const response = await getAllAirport();
      setAirports(response.data);
    } catch (err: any) {
      const message = err?.response?.data || "Failed to load airport data.";
      setError(message);
      enqueueSnackbar(message, { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  return {
    airports,
    loading,
    error,
    refetch: fetchAirports,
    setAirports
  };
};
