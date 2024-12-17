import React, { useEffect, useState } from "react";
import { getAllAirport, getAllAirports } from "../../../api/airportAPI";
import { FaWrench } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

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

const Airports: React.FC = () => {
  const [airports, setAirports] = useState<Airport[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newAirport, setNewAirport] = useState<Airport>({
    iata: "",
    name: "",
    city: { id: "", name: "", country: "" },
  });

  const [search, setSearch] = useState({
    name: "",
    iata: "",
    cityName: "",
    country: "",
  });

  const [editingAirport, setEditingAirport] = useState<Airport | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllAirport();
        console.log(response);
        setAirports(response.data);
      } catch (err) {
        setError("Failed to load airport data.");
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

  const filteredAirports = airports.filter((airport) => {
    return (
      (search.name === "" || airport.name.toLowerCase().includes(search.name.toLowerCase())) &&
      (search.iata === "" || airport.iata.toLowerCase().includes(search.iata.toLowerCase())) &&
      (search.cityName === "" || airport.city.name.toLowerCase().includes(search.cityName.toLowerCase())) &&
      (search.country === "" || airport.city.country.toLowerCase().includes(search.country.toLowerCase()))
    );
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewAirport((prev) => ({
      ...prev,
      [name]: name === "iata" ? value.toUpperCase() : value,
    }));
  };

  const handleAddAirport = async () => {
  };

  const handleDeleteAirport = (airportDelete: Airport) => {
    const update = airports.filter((airport) => airport !== airportDelete);
    setAirports(update);
  }

  const handleEditAirport = (airport: Airport) => {
    setEditingAirport(airport);
    setNewAirport({ ...airport });
  };
  const handleSaveEdit = () => {
    setAirports((prev) =>
      prev.map((item) =>
        item === editingAirport ? newAirport : item
      )
    );
    setEditingAirport(null);
    setNewAirport({
      iata: "",
      name: "",
      city: { id: "", name: "", country: "" },
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <>
      <div className="text-4xl pb-6 pt-4 font-bold text-center text-golden capitalize">Airports</div>
      <div className="mb-6 flex space-x-4">
        <input
          type="text"
          name="iata"
          placeholder="Search by IATA"
          value={search.iata}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="name"
          placeholder="Search by Name"
          value={search.name}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="cityName"
          placeholder="Search by City"
          value={search.cityName}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
        <input
          type="text"
          name="country"
          placeholder="Search by Country"
          value={search.country}
          onChange={handleSearchChange}
          className="pl-2 py-2 border rounded flex-1 text-base"
        />
      </div>

      <div className="overflow-y-auto h-[80%]">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead className="bg-golden-hover sticky top-0 z-10">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">IATA</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">City</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Country</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold"></th>
            </tr>
            <tr className="bg-gray-100 sticky">
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="iata"
                  value={newAirport.iata}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="name"
                  value={newAirport.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="cityName"
                  value={newAirport.city.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 flex items-center space-x-2">
                <input
                  type="text"
                  name="country"
                  value={newAirport.city.country}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="px-2">
                {editingAirport ? (
                  <button onClick={handleSaveEdit} className="bg-green-600 hover:bg-green-400 border-none px-5 py-2 text-white rounded">Save</button>
                ) : (
                  <button onClick={handleAddAirport} className="bg-blue-600 hover:bg-blue-400 border-none px-6 py-2 text-white rounded">Add</button>
                )}
              </td>
            </tr>

          </thead>
          <tbody>
            {filteredAirports.map((airport, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="border border-gray-300 px-4 py-2 text-sm">{airport.iata}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{airport.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{airport.city.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{airport.city.country}</td>
                <td className="border border-gray-300 px-2 py-2 text-sm">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEditAirport(airport)}
                      className="bg-green-600 border-none rounded px-2 pt-1 hover:bg-green-400 transition duration-200"
                    >
                      <FaWrench color="white"/>
                    </button>
                    <button
                      onClick={() => handleDeleteAirport(airport)}
                      className="bg-red-600 border-none rounded px-2 pt-1 hover:bg-red-400 transition duration-200"
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
    </>
  );
};

export default Airports;
