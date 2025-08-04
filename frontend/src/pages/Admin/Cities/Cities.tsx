import React from "react";
import { FaWrench } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { useCities } from "../../../store/hooks/useCities";

const Cities: React.FC = () => {
  const {
    cities,
    loading,
    error,
    newCity,
    editingCity,
    search,
    handleInputChange,
    handleSearchChange,
    handleAddCity,
    handleEditCity,
    handleSaveEdit,
    handleDeleteCity,
  } = useCities();

  if (loading) return <div className='mx-auto text-xl text-center my-40'>Loading...</div>;
  if (error) return <div className='mx-auto text-xl text-center my-40 text-red-600'>Error: {error}</div>;

  return (
    <>
      <div className="text-4xl pb-6 pt-4 font-bold text-center text-ahaAmber-2 capitalize">
        Cities
      </div>
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
          <thead className="bg-ahaAmber-4 sticky top-0 z-10">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">
                City
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">
                Country
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">
                ImageUrl
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold"></th>
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
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="country"
                  value={newCity.country}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="country"
                  value={newCity.imageUrl}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm">
                <div className="flex justify-center items-center">
                  {editingCity ? (
                    <button
                      onClick={handleSaveEdit}
                      className="bg-ahaGreen-3 hover:bg-ahaGreen-0-400 border-none px-5 py-2 text-white rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={handleAddCity}
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
            {cities.map((city, index) => (
              <tr
                key={index}
                className={`${
                  editingCity && city.name === editingCity.name && city.country === editingCity.country
                    ? "bg-ahaAmber-4"
                    : index % 2 === 0
                    ? "bg-white"
                    : "bg-gray-100"
                }`}
              >
                <td className="border border-gray-300 px-4 py-2 text-base">
                  {city.name}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-base">
                  {city.country}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-base">
                  {city.imageUrl == null ? "hello" : city.imageUrl}
                </td>
                <td className="border border-gray-300 px-2 py-2">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handleEditCity(city)}
                      className="bg-ahaGreen-3 border-none rounded px-2 pt-1 hover:bg-ahaGreen-0-400 transition duration-200"
                    >
                      <FaWrench color="white" />
                    </button>
                    <button
                      onClick={() => handleDeleteCity(city)}
                      className="bg-red-600 border-none rounded px-2 pt-1 hover:bg-red-400 transition duration-200"
                    >
                      <FaDeleteLeft color="white" />
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

export default Cities;
