import React, { useEffect, useState } from "react";
import { addFlightRoute, getAllFlightRoutes } from "../../../api/flightRoutes";
import { FaWrench } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FlightRoute } from "../../../object/flightRoute";
import { useSnackbar } from "notistack";
import useFlightRoutes from "../../../store/hooks/useFlightRoutes";

const FlightRoutes: React.FC = () => {
  const {
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
  } = useFlightRoutes();

  if (loading) return <div className="text-center my-40 text-xl">Loading...</div>;
  if (error) return <div className="text-center my-40 text-xl text-red-600">{error}</div>;
  return (
    <>
      <div className="text-4xl pb-6 pt-4 font-bold text-center text-ahaAmber-2 capitalize">Flight Routes</div>
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
          <thead className="bg-ahaAmber-4 sticky top-0 z-10">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">From IATA</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">To IATA</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">From Airport</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">To Airport</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">From City</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">To City</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">From Country</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">To Country</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Distance</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold"></th>
            </tr>
            <tr className="bg-gray-100 sticky">
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromAirportIATA"
                  value={newFlightRoute.fromAirportIATA}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toAirportIATA"
                  value={newFlightRoute.toAirportIATA}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromAirportName"
                  value={newFlightRoute.fromAirport.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded cursor-not-allowed pointer-events-none"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toAirportName"
                  value={newFlightRoute.toAirport.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded cursor-not-allowed pointer-events-none"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromCityName"
                  value={newFlightRoute.fromAirport.city.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded cursor-not-allowed pointer-events-none"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toCityName"
                  value={newFlightRoute.toAirport.city.name}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded cursor-not-allowed pointer-events-none"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="fromCountry"
                  value={newFlightRoute.fromAirport.city.country}
                  onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded cursor-not-allowed pointer-events-none"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="toCountry"
                  value={newFlightRoute.toAirport.city.country}
                  // onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded cursor-not-allowed pointer-events-none"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <input
                  type="text"
                  name="distance"
                  value={newFlightRoute.distance}
                  // onChange={handleInputChange}
                  className="w-full px-2 py-1 border rounded"
                />
              </td>
              <td className="border border-gray-300 px-2 py-2 text-sm">
                <div className="flex justify-center items-center">
                  {editingRoute ? (
                    <button
                      onClick={handleSave}
                      className="bg-ahaGreen-3 hover:bg-ahaGreen-0-400 border-none px-5 py-2 text-white rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={handleAddFlightRoute}
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
            {filteredFlightRoutes.map((route, index) => (
              <tr className={`${
                editingRoute && editingRoute === route
                  ? "bg-ahaAmber-4"
                  : index % 2 === 0
                  ? "bg-white"
                  : "bg-gray-100"
              }`}>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.fromAirportIATA}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.toAirportIATA}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.fromAirport.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.toAirport.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.fromAirport.city.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.toAirport.city.name}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.fromAirport.city.country}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.toAirport.city.country}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{route.distance}</td>
                <td className="border border-gray-300 px-2 py-2">
                  <div className="flex justify-center items-center space-x-2">
                    <button
                      onClick={() => handleEdit(route)}
                      className="bg-ahaGreen-3 border-none rounded text-sm px-2 pt-1 hover:bg-ahaGreen-0-400 transition duration-200"
                    >
                      <FaWrench color="white"/>
                    </button>
                    <button
                      onClick={() => handleDelete(route)}
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
    </>
  );
};

export default FlightRoutes;
