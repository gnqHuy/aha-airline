import React, { useEffect, useState } from "react";
import { getAllFlightRoutes } from "../../../api/flightRoutes";

interface City {
  id: string;
  name: string;
  country: string;
}

interface Airport {
  iata: string;
  name: string;
  city: City;
}

interface FlightRoute {
  id: string;
  fromAirportIATA: string;
  toAirportIATA: string;
  fromAirport: Airport;
  toAirport: Airport;
  noOfFlights: number;
  distance: number;
}

const FlightRoutes: React.FC = () => {
  const [flightRoutes, setFlightRoutes] = useState<FlightRoute[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newRoute, setNewRoute] = useState<FlightRoute>({
    id: "",
    fromAirportIATA: "",
    toAirportIATA: "",
    fromAirport: { iata: "", name: "", city: { id: "", name: "", country: "" } },
    toAirport: { iata: "", name: "", city: { id: "", name: "", country: "" } },
    noOfFlights: 0,
    distance: 0,
  });

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllFlightRoutes();
        console.log(response.data);
        setFlightRoutes(response.data);
      } catch (err) {
        setError("Failed to load flight route data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearch((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filteredFlightRoutes = flightRoutes.filter((route) => {
    return (
      (search.fromIATA === "" || route.fromAirportIATA.toLowerCase().includes(search.fromIATA.toLowerCase())) &&
      (search.toIATA === "" || route.toAirportIATA.toLowerCase().includes(search.toIATA.toLowerCase())) &&
      (search.fromAirportName === "" || route.fromAirport.name.toLowerCase().includes(search.fromAirportName.toLowerCase())) &&
      (search.toAirportName === "" || route.toAirport.name.toLowerCase().includes(search.toAirportName.toLowerCase())) &&
      (search.fromCityName === "" || route.fromAirport.city.name.toLowerCase().includes(search.fromCityName.toLowerCase())) &&
      (search.toCityName === "" || route.toAirport.city.name.toLowerCase().includes(search.toCityName.toLowerCase())) &&
      (search.fromCountry === "" || route.fromAirport.city.country.toLowerCase().includes(search.fromCountry.toLowerCase())) &&
      (search.toCountry === "" || route.toAirport.city.country.toLowerCase().includes(search.toCountry.toLowerCase()))
    );
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewRoute((prev) => ({
      ...prev,
      [name]: name === "fromAirportIATA" || name === "toAirportIATA" ? value.toUpperCase() : value,
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <>
      <div className="text-4xl pb-6 pt-4 font-bold text-center text-golden capitalize">Flight Routes</div>
      <div className="mb-4 flex space-x-4">
        <input
          type="text"
          name="fromIATA"
          placeholder="Search by From IATA"
          value={search.fromIATA}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="toIATA"
          placeholder="Search by To IATA"
          value={search.toIATA}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="fromAirportName"
          placeholder="Search by From Airport Name"
          value={search.fromAirportName}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="toAirportName"
          placeholder="Search by To Airport Name"
          value={search.toAirportName}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
      </div>

      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          name="fromCityName"
          placeholder="Search by From City"
          value={search.fromCityName}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="toCityName"
          placeholder="Search by To City"
          value={search.toCityName}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="fromCountry"
          placeholder="Search by From Country"
          value={search.fromCountry}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="toCountry"
          placeholder="Search by To Country"
          value={search.toCountry}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
      </div>

      <div className="overflow-y-auto h-[73%]">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-golden-hover sticky top-0 z-10">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">From IATA</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">To IATA</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">From Airport</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">To Airport</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">From City</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">To City</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">From Country</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">To Country</th>
            </tr>
            <tr className="bg-gray-100 sticky">
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromAirportIATA"
                  value={newRoute.fromAirportIATA}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toAirportIATA"
                  value={newRoute.toAirportIATA}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromAirportName"
                  value={newRoute.fromAirport.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toAirportName"
                  value={newRoute.toAirport.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromCityName"
                  value={newRoute.fromAirport.city.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toCityName"
                  value={newRoute.toAirport.city.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromCountry"
                  value={newRoute.fromAirport.city.country}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 flex items-center space-x-2">
                <input
                  type="text"
                  name="toCountry"
                  value={newRoute.toAirport.city.country}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
                <button className="px-4 py-2 bg-golden-hover rounded hover:bg-golden">
                  Add
                </button>
              </td>
            </tr>
          </thead>
          <tbody>
            {filteredFlightRoutes.map((route, index) => (
              <tr key={route.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.fromAirportIATA}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.toAirportIATA}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.fromAirport.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.toAirport.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.fromAirport.city.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.toAirport.city.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.fromAirport.city.country}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.toAirport.city.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FlightRoutes;
