import React, { useEffect, useState } from "react";
import { getAllCities } from "../../../api/cities.API";

interface City {
  name: string;
  country: string;
}

const Cities: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newCity, setNewCity] = useState<City>({
    name: "",
    country: ""
  })

  const [search, setSearch] = useState({
    name: "",
    country: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCities();
        console.log(response);
        setCities(response.data);
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

  const filteredCities = cities.filter((city) => {
    return (
      (search.name === "" || city.name.toLowerCase().includes(search.name.toLowerCase())) &&
      (search.country === "" || city.country.toLowerCase().includes(search.country.toLowerCase()))
    );
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCity((prev) => ({
      ...prev,
      [name]: name === "iata" ? value.toUpperCase() : value,
    }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <>
      <div className="text-4xl pb-6 pt-4 font-bold text-center text-golden capitalize">Cities</div>
      <div className="mb-6 flex space-x-4">
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
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">City</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Country</th>
            </tr>
            <tr className="bg-gray-100 sticky">
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="name"
                  value={newCity.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2 flex items-center space-x-2">
                <input
                  type="text"
                  name="country"
                  value={newCity.country}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
                 <button
                    className="px-4 py-2 bg-golden-hover rounded hover:bg-golden"
                >
                    Add
                </button>
              </td>
            </tr>

          </thead>
          <tbody>
            {filteredCities.map((city, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="border border-gray-300 px-4 py-2 text-sm">{city.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{city.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cities;
