import { useEffect, useState } from "react";
import { Flight } from "../../object/flight";
import { AircraftStatus } from "../../object/enum/AircraftStatus";
import { FlightStatus } from "../../object/enum/FlightStatus";
import { deleteExpiredFlights, generateFlights, getFromAircraftAndRoute, getPagedFlightDTO } from "../../api/flightAPI";

export const useFlights = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchError, setSearchError] = useState<string | null>(null);

  const [searchFromIATA, setSearchFromIATA] = useState("");
  const [searchToIATA, setSearchToIATA] = useState("");
  const [aircraftNameSearch, setAircraftNameSearch] = useState("AHA-001");
  const [page, setPage] = useState(0);
  const [autoGenerate, setAutoGenerate] = useState(0);

  const [editingFlight, setEditingFlight] = useState<Flight | null>(null);
  const [newFlight, setNewFlight] = useState<Flight>(getEmptyFlight());

  function getEmptyFlight(): Flight {
    return {
      id: "",
      aircraft: {
        name: "",
        manufacturer: "",
        model: "",
        status: AircraftStatus.Airborne,
        noOfSeats: 0,
        availableAt: undefined,
        terminal: ""
      },
      flightRoute: {
        fromAirportIATA: "",
        toAirportIATA: "",
        fromAirport: { iata: "", name: "", city: { name: "", country: "", imageUrl: "" } },
        toAirport: { iata: "", name: "", city: { name: "", country: "", imageUrl: "" } },
        noOfFlights: 0,
        distance: 0,
      },
      boardingTime: "",
      departureTime: "",
      arrivalTime: "",
      boardingGate: "",
      remainingBsnSeats: 0,
      remainingEcoSeats: 0,
      economyPrice: 0,
      businessPrice: 0,
      status: FlightStatus.Upcomming,
    };
  }

  const fetchFlights = async (page = 0, fromIATA = "", toIATA = "", aircraftName = "AHA-001") => {
    setLoading(true);
    setSearchError(null);

    try {
      const response =
        fromIATA && toIATA && aircraftName
          ? await getFromAircraftAndRoute(aircraftName, fromIATA, toIATA)
          : await getPagedFlightDTO(10, page);

      setFlights(response.data);
    } catch {
      setError("Failed to load flight data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const handleSearchSubmit = async () => {
    if (!searchFromIATA && !searchToIATA || (searchFromIATA && searchToIATA && aircraftNameSearch)) {
      fetchFlights(page, searchFromIATA, searchToIATA, aircraftNameSearch);
    } else {
      setSearchError("All input are required.");
    }
  };

  const handlePageChange = (page: number) => {
    setPage(page);
    fetchFlights(page);
  };

  const handleAddFlight = () => {
    setFlights((prev) => [...prev, newFlight]);
    setNewFlight(getEmptyFlight());
  };

  const handleDeleteFlight = (flightToDelete: Flight) => {
    setFlights((prev) => prev.filter((f) => f !== flightToDelete));
  };

  const handleEditFlight = (flight: Flight) => {
    setEditingFlight(flight);
    setNewFlight({ ...flight });
  };

  const handleSaveEdit = () => {
    setFlights((prev) =>
      prev.map((f) => (f === editingFlight ? newFlight : f))
    );
    setEditingFlight(null);
    setNewFlight(getEmptyFlight());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setNewFlight((prev) => {
      switch (name) {
        case "fromCity":
          return {
            ...prev,
            flightRoute: {
              ...prev.flightRoute,
              fromAirport: {
                ...prev.flightRoute.fromAirport,
                city: {
                  ...prev.flightRoute.fromAirport.city,
                  name: value,
                },
              },
            },
          };
        case "toCity":
          return {
            ...prev,
            flightRoute: {
              ...prev.flightRoute,
              toAirport: {
                ...prev.flightRoute.toAirport,
                city: {
                  ...prev.flightRoute.toAirport.city,
                  name: value,
                },
              },
            },
          };
        case "fromIATA":
          return {
            ...prev,
            flightRoute: {
              ...prev.flightRoute,
              fromAirportIATA: value.toUpperCase(),
            },
          };
        case "toIATA":
          return {
            ...prev,
            flightRoute: {
              ...prev.flightRoute,
              toAirportIATA: value.toUpperCase(),
            },
          };
        case "boardingGate":
        case "departureTime":
        case "arrivalTime":
          return { ...prev, [name]: value };
        case "economyPrice":
          return { ...prev, economyPrice: parseFloat(value) || 0 };
        case "businessPrice":
          return { ...prev, businessPrice: parseFloat(value) || 0 };
        case "status":
          return { ...prev, status: parseInt(value, 10) || 0 };
        default:
          return prev;
      }
    });
  };

  const handleAutoGenerate = async () => {
    try {
      await generateFlights(autoGenerate);
      fetchFlights(0);
    } catch {
      setError("Failed to auto-generate flights.");
    }
  };

  const handleDeleteExpiredFlights = async () => {
    try {
      await deleteExpiredFlights();
      fetchFlights(page);
    } catch {
      setError("Failed to delete expired flights.");
    }
  };

  return {
    flights,
    loading,
    error,
    newFlight,
    editingFlight,
    searchError,
    searchFromIATA,
    searchToIATA,
    aircraftNameSearch,
    page,
    autoGenerate,
    setSearchFromIATA,
    setSearchToIATA,
    setAircraftNameSearch,
    setAutoGenerate,
    handleSearchSubmit,
    handlePageChange,
    handleAddFlight,
    handleDeleteFlight,
    handleEditFlight,
    handleSaveEdit,
    handleInputChange,
    handleAutoGenerate,
    handleDeleteExpiredFlights,
  };
};
