import React, { useEffect, useState } from "react";
import { FaWrench } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { deleteExpiredFlights, generateFlights, getFromAircraftAndRoute, getFromRequest, getPagedFlightDTO } from "../../../api/flightAPI";
import { EnumDeclaration } from "typescript";
import { AxiosResponse } from "axios";
import Pagination from "../Pagination/Pagination";

interface Aircraft {
  name: string;
  manufacturer: string;
  noOfSeats: number;
}

interface City {
  name: string;
  country: string;
}

interface Airport {
  iata: string;
  name: string;
  city: City;
}

interface FlightRoute {
  fromAirportIATA: string;
  toAirportIATA: string;
  fromAirport: Airport;
  toAirport: Airport;
  noOfFlights: number;
  distance: number;
}

enum FlightStatus
{
    Upcomming,
    Boarding,
    Departed,
    Delayed,
    Cancelled
}

interface Flight {
  id: string,
  aircraft: Aircraft,
  flightRoute: FlightRoute,
  boardingTime: string,
  departureTime: string,
  arrivalTime: string,
  boardingGate: string,
  remainingBsnSeats: number,
  remainingEcoSeats: number,
  economyPrice: number,
  businessPrice: number,
  status: FlightStatus,
}

const Flights: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newFlight, setNewFlight] = useState<Flight>({
    id: "",
    aircraft: { name: "", manufacturer: "", noOfSeats: 0 },
    flightRoute: {
      fromAirportIATA: "",
      toAirportIATA: "",
      fromAirport: { iata: "", name: "", city: { name: "", country: "" } },
      toAirport: { iata: "", name: "", city: { name: "", country: "" } },
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
  });
  const [editingFlight, setEditingFlight] = useState<Flight | null>(null);
  const [searchFromIATA, setSearchFromIATA] = useState<string>("");
  const [searchToIATA, setSearchToIATA] = useState<string>("");
  const [aircraftNameSearch, setAircraftNameSearch] = useState<string>("");
  const [searchError, setSearchError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(0);
  const [autoGenerate, setAutoGenerate] = useState<number>(0);
  
  const fetchData = async (page: number = 0, fromIATA: string = "", toIATA: string = "", aircraftName: string | null = "AHA-001") => {
    setLoading(true);
    setSearchError(null);
  
    try {
      const response = fromIATA && toIATA && aircraftName
        ? await getFromAircraftAndRoute(aircraftName, fromIATA, toIATA)
        : await getPagedFlightDTO(10, page);
  
      setFlights(response.data);
    } catch (err) {
      setError("Failed to load flight data.");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData(0);
  }, []);
  

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFromIATA(event.target.value);
  };

  const handleSearchChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchToIATA(event.target.value);
  };

  const handleSearchChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAircraftNameSearch(event.target.value);
  };

  const handleSearchSubmit = async () => {
    if (!searchFromIATA && !searchToIATA || searchFromIATA && searchToIATA && aircraftNameSearch) {
      fetchData(page, searchFromIATA, searchToIATA, aircraftNameSearch);
    }
    else {
      setSearchError("All input are required.");
      return; 
    }
  };
  const handlePageChange = (page: number) => {
    setPage(page);
    fetchData(page); 
  };

  const handleAddFlight = async () => {
    setFlights((prev) => [...prev, newFlight]);
    setNewFlight({
      id: "",
      aircraft: { name: "", manufacturer: "", noOfSeats: 0 },
      flightRoute: {
        fromAirportIATA: "",
        toAirportIATA: "",
        fromAirport: { iata: "", name: "", city: { name: "", country: "" } },
        toAirport: { iata: "", name: "", city: { name: "", country: "" } },
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
    });
  };
  
  const handleDeleteFlight = (flightToDelete: Flight) => {
    const updatedFlights = flights.filter((flight) => flight !== flightToDelete);
    setFlights(updatedFlights);
  };
  
  const handleEditFlight = (flight: Flight) => {
    setEditingFlight(flight);
    setNewFlight({ ...flight });
  };
  
  const handleSaveEdit = () => {
    setFlights((prev) =>
      prev.map((item) => (item === editingFlight ? newFlight : item))
    );
    setEditingFlight(null);
    setNewFlight({
      id: "",
      aircraft: { name: "", manufacturer: "", noOfSeats: 0 },
      flightRoute: {
        fromAirportIATA: "",
        toAirportIATA: "",
        fromAirport: { iata: "", name: "", city: { name: "", country: "" } },
        toAirport: { iata: "", name: "", city: { name: "", country: "" } },
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
    });
  };
  const handleChangeAutoGenerate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAutoGenerate(parseInt(e.target.value));
  };

  const handleAutoGenerate = async () => {
    try {
      const response = await generateFlights(autoGenerate);
      fetchData(0);
    } catch (err) {
      setError("Failed to load flight data.");
    } finally {
      setLoading(false);
    }
  }

  const handleDeleteExpiredFlights = async () => {
    try {
        const result = await deleteExpiredFlights();
        postMessage(result.message);
    } catch (error) {
        postMessage("Failed to delete expired flights.");
    }
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
          return {
            ...prev,
            boardingGate: value,
          };
        case "departureTime":
          return {
            ...prev,
            departureTime: value,
          };
        case "arrivalTime":
          return {
            ...prev,
            arrivalTime: value,
          };
        case "economyPrice":
          return {
            ...prev,
            economyPrice: isNaN(parseFloat(value)) ? 0 : parseFloat(value),
          };
        case "businessPrice":
          return {
            ...prev,
            businessPrice: isNaN(parseFloat(value)) ? 0 : parseFloat(value),
          };
        case "status":
          return {
            ...prev,
            status: isNaN(parseInt(value, 10)) ? 0 : parseInt(value, 10),
          };
        default:
          return prev;
      }
    });
  };
  
  if (loading) return <div className='mx-auto text-xl text-center my-40'>Loading...</div>;
  if (error) return <div className="mx-auto text-xl text-center my-40 text-red-600">Error: {error}</div>;

  return (
    <>
      <div className="text-4xl pb-6 pt-[0,9rem] font-bold text-center text-golden capitalize">Flights</div>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          name="fromIATA"
          placeholder="Search by From IATA"
          value={searchFromIATA}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1"
        />
        <input
          type="text"
          name="toIATA"
          placeholder="Search by To IATA"
          value={searchToIATA}
          onChange={handleSearchChange1}
          className="pl-2 py-2 border rounded flex-1 "
        />
        <input
          type="text"
          name="Aircraft Name"
          placeholder="Search by Aircraft name"
          value={aircraftNameSearch}
          onChange={handleSearchChange2}
          className="pl-2 py-2 border rounded flex-1 "
        />
        <button
          onClick={handleSearchSubmit}
          className="bg-blue-600 hover:bg-blue-400 border-none px-5 py-2 text-white rounded"
        >
          Search
        </button>
      </div>
      <div className="my-4 w-">
        <input
            type="number"
            name="autoGenerate"
            placeholder="Auto Generate Data"
            value={autoGenerate}
            onChange={handleChangeAutoGenerate}
            className="pl-2 mr-4 py-2 border rounded flex-1"
          />
        <button
          onClick={handleAutoGenerate}
          className="bg-blue-600 hover:bg-blue-400 border-none px-5 py-2 text-white rounded"
        >
          Auto Generate
        </button>
        <button
          onClick={handleDeleteExpiredFlights}
          className="bg-red-500 ml-5 hover:bg-blue-400 border-none px-5 py-2 text-white rounded"
        >
          Delete Expired Flights
        </button>
      </div>
      {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="overflow-y-auto h-[73%]">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-golden-hover sticky top-0 z-10">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Id</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Aircraft</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">From IATA</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">To IATA</th>
              {/* <th className="border border-gray-300 px-4 py-2 text-left font-semibold">From City</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">To City</th> */}
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Boarding Gate</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Departure Time</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Arrival Time</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Business Seats</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Economy Seats</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Economy Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Business Price</th>
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Status</th>
              {/* <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Remaining Seat</th> */}
              <th className="border border-gray-300 px-4 py-2 text-left font-semibold"></th>
            </tr>
            <tr className="bg-gray-100 sticky">
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="id"
                  // value={newFlight.flightRoute.fromAirportIATA}
                  // onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="aircraft.name"
                  // value={newFlight.flightRoute.fromAirportIATA}
                  // onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromIATA"
                  value={newFlight.flightRoute.fromAirportIATA}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toIATA"
                  value={newFlight.flightRoute.toAirportIATA}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              {/* <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromCity"
                  value={newFlight.flightRoute.fromAirport.city.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toCity"
                  value={newFlight.flightRoute.toAirport.city.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td> */}
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="boardingGate"
                  value={newFlight.boardingGate}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="departureTime"
                  value={newFlight.departureTime}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="arrivalTime"
                  value={newFlight.arrivalTime}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="Business Seats"
                  value={newFlight.remainingBsnSeats}
                  // onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="Economy Seats"
                  value={newFlight.remainingEcoSeats}
                  // onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  name="economyPrice"
                  value={newFlight.economyPrice}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  name="businessPrice"
                  value={newFlight.businessPrice}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                    name="status"
                    value={newFlight.status}
                    onChange={handleInputChange}
                    className="pl-2 py-2 border rounded flex-1"
                >
                    <option value={FlightStatus.Upcomming}>Upcomming</option>
                    <option value={FlightStatus.Boarding}>Boarding</option>
                    <option value={FlightStatus.Cancelled}>Cancelled</option>
                    <option value={FlightStatus.Delayed}>Delayed</option>
                    <option value={FlightStatus.Departed}>Departed</option>
                </select>
              </td>
              {/* <td className="border border-gray-300 px-4 py-2">
                <input
                  type="number"
                  name="remainingSeat"
                  value={newFlight.aircraft.noOfSeats}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td> */}
              <td className="border border-gray-300 px-2 py-2 text-sm">
                <div className="flex justify-center items-center">
                  {editingFlight ? (
                    <button
                      onClick={handleSaveEdit}
                      className="bg-green-600 hover:bg-green-400 border-none px-5 py-2 text-white rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={handleAddFlight}
                      className="bg-blue-600 hover:bg-blue-400 border-none px-6 py-2 text-white rounded"
                    >
                      Add
                    </button>
                  )}
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr 
              className={`${editingFlight && editingFlight === flight? "bg-golden-hover": index % 2 === 0? "bg-white" : "bg-gray-100"}`}
              >
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.id}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.aircraft.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.flightRoute.fromAirportIATA}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.flightRoute.toAirportIATA}</td>
                {/* <td className="border border-gray-300 px-4 py-2 text-sm">{flight.flightRoute.fromAirport.city.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.flightRoute.toAirport.city.name}</td> */}
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.boardingGate}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.departureTime}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.arrivalTime}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.remainingBsnSeats}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.remainingEcoSeats}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.economyPrice.toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{flight.businessPrice.toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{FlightStatus[flight.status]}</td>
                {/* <td className="border border-gray-300 px-4 py-2 text-sm">{flight.aircraft.noOfSeats}</td> */}
                <td className="border border-gray-300 px-2 py-2">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handleEditFlight(flight)}
                      className="bg-green-600 border-none rounded text-sm px-2 pt-1 hover:bg-green-400 transition duration-200"
                    >
                      <FaWrench color="white"/>
                    </button>
                    <button
                      onClick={() => handleDeleteFlight(flight)}
                      className="bg-red-600 border-none rounded text-sm px-2 pt-1 hover:bg-red-400 transition duration-200"
                    >
                      <FaDeleteLeft color="white"/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={page} totalPages={100} onPageChange={handlePageChange}/>
    </>
  );
};

export default Flights;