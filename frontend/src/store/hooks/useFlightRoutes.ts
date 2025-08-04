import { useEffect, useState } from "react";    
import { useSnackbar } from "notistack";
import { FlightRoute } from "../../object/flightRoute";
import { addFlightRoute, getAllFlightRoutes } from "../../api/flightRoutes";

export default function useFlightRoutes() {
  const { enqueueSnackbar } = useSnackbar();
  const [flightRoutes, setFlightRoutes] = useState<FlightRoute[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState({
    fromIATA: "",
    toIATA: "",
    fromAirportName: "",
    toAirportName: "",
    fromCityName: "",
    toCityName: "",
    fromCountry: "",
    toCountry: "",
  });

  const [editingRoute, setEditingRoute] = useState<FlightRoute | null>(null);
  const [newFlightRoute, setNewFlightRoute] = useState<FlightRoute>({
    fromAirportIATA: "",
    toAirportIATA: "",
    fromAirport: { iata: "", name: "", city: { name: "", country: "", imageUrl: "" } },
    toAirport: { iata: "", name: "", city: { name: "", country: "", imageUrl: "" } },
    noOfFlights: 0,
    distance: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFlightRoutes();
        setFlightRoutes(response.data);
      } catch (err) {
        setError("Failed to load flight route data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewFlightRoute((prev) => {
      const val = name.includes("IATA") ? value.toUpperCase() : value;

      switch (name) {
        case "fromAirportName":
          return { ...prev, fromAirport: { ...prev.fromAirport, name: val } };
        case "toAirportName":
          return { ...prev, toAirport: { ...prev.toAirport, name: val } };
        case "fromCityName":
          return { ...prev, fromAirport: { ...prev.fromAirport, city: { ...prev.fromAirport.city, name: val } } };
        case "toCityName":
          return { ...prev, toAirport: { ...prev.toAirport, city: { ...prev.toAirport.city, name: val } } };
        case "fromCountry":
          return { ...prev, fromAirport: { ...prev.fromAirport, city: { ...prev.fromAirport.city, country: val } } };
        case "toCountry":
          return { ...prev, toAirport: { ...prev.toAirport, city: { ...prev.toAirport.city, country: val } } };
        default:
          return { ...prev, [name]: val };
      }
    });
  };

  const handleAddFlightRoute = async () => {
    try {
      await addFlightRoute(newFlightRoute.fromAirportIATA, newFlightRoute.toAirportIATA);
      enqueueSnackbar("Flight route added successfully.", { variant: "success" });
    } catch (error: any) {
      if (error.response) {
        enqueueSnackbar(`Server Error: ${error.response.data}`, { variant: "error" });
      } else if (error.request) {
        enqueueSnackbar("Network Error: Unable to reach server.", { variant: "warning" });
      } else {
        enqueueSnackbar(`Error: ${error.message}`, { variant: "error" });
      }
    }
  };

  const handleDelete = (route: FlightRoute) => {
    setFlightRoutes((prev) => prev.filter((item) => item !== route));
  };

  const handleEdit = (route: FlightRoute) => {
    setEditingRoute(route);
    setNewFlightRoute({ ...route });
  };

  const handleSave = () => {
    setFlightRoutes((prev) =>
      prev.map((item) => (item === editingRoute ? newFlightRoute : item))
    );
    setEditingRoute(null);
    resetNewFlightRoute();
  };

  const resetNewFlightRoute = () => {
    setNewFlightRoute({
      fromAirportIATA: "",
      toAirportIATA: "",
      fromAirport: { iata: "", name: "", city: { name: "", country: "", imageUrl: "" } },
      toAirport: { iata: "", name: "", city: { name: "", country: "", imageUrl: "" } },
      noOfFlights: 0,
      distance: 0,
    });
  };

  const filteredFlightRoutes = flightRoutes.filter((route) => {
    const includes = (val: string, keyword: string) =>
      keyword === "" || val.toLowerCase().includes(keyword.toLowerCase());

    return (
      includes(route.fromAirportIATA, search.fromIATA) &&
      includes(route.toAirportIATA, search.toIATA) &&
      includes(route.fromAirport.name, search.fromAirportName) &&
      includes(route.toAirport.name, search.toAirportName) &&
      includes(route.fromAirport.city.name, search.fromCityName) &&
      includes(route.toAirport.city.name, search.toCityName) &&
      includes(route.fromAirport.city.country, search.fromCountry) &&
      includes(route.toAirport.city.country, search.toCountry)
    );
  });

  return {
    loading,
    error,
    filteredFlightRoutes,
    newFlightRoute,
    editingRoute,
    search,
    handleSearchChange,
    handleInputChange,
    handleAddFlightRoute,
    handleDelete,
    handleEdit,
    handleSave,
  };
}
