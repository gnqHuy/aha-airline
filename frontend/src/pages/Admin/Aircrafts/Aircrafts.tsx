import React, { useEffect, useState } from "react";
import { addAircrafts, getAllAircrafts } from "../../../api/aircraftsAPI";
import { FaWrench } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";
import { Aircraft } from "../../../object/aircraft";

const Aircrafts: React.FC = () => {
    const [aircrafts, setAircrafts] = useState<Aircraft[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [newAircraft, setNewAircraft] = useState<Aircraft>({
      name: "",
      manufacturer: "",
      noOfSeats: 0,
      status: 1,
      terminal: "",
    });

    const [editingAircraft, setEditingAircraft] = useState<Aircraft | null>(null);

    const [search, setSearch] = useState({
      name: "",
      manufacturer: "",
      noOfSeats: "",
      status: "",
      terminal: "",
    });
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getAllAircrafts();
          setAircrafts(response.data);
        } catch (err) {
          setError("Failed to load aircraft data.");
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
  
    const filteredAircrafts = aircrafts.filter((aircraft) => {
      return (
        (search.name === "" || aircraft.name.toLowerCase().includes(search.name.toLowerCase())) &&
        (search.manufacturer === "" || aircraft.manufacturer.toLowerCase().includes(search.manufacturer.toLowerCase())) &&
        (search.noOfSeats === "" || aircraft.noOfSeats.toString().includes(search.noOfSeats)) &&
        (search.status === "" || aircraft.status.toString() === search.status) &&
        (search.terminal === "" || aircraft.terminal.toLowerCase().includes(search.terminal.toLowerCase()))
      );
    });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setNewAircraft((prev) => ({
        ...prev,
        [name]: name === "noOfSeats" || name === "status" ? parseInt(value, 10) : value,
      }));
    };
  
    const handleAddAircraft = async () => {
      addAircrafts(newAircraft);
    };

    const handleDeleteAirCraft = (aircraftDelete: Aircraft) => {
      const update = aircrafts.filter((aircraft) => aircraft !== aircraftDelete);
      setAircrafts(update);
    }

    const handleEditAircraft = (aircraft: Aircraft) => {
      setEditingAircraft(aircraft);
      setNewAircraft({ ...aircraft });
    };

    const handleSaveEdit = () => {
      setAircrafts((prev) =>
        prev.map((item) =>
          item === editingAircraft ? newAircraft : item
        )
      );
      setEditingAircraft(null);
      setNewAircraft({
        name: "",
        manufacturer: "",
        noOfSeats: 0,
        status: 1,
        terminal: "",
      });
    };
    
    const renderStatus = (status: number) => (status === 1 ? "Active" : "Inactive");
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-600">Error: {error}</div>;
  
    return (
      <>
        <div className="text-4xl pb-6 pt-4 font-bold text-center text-golden capitalize">Aircafts</div>
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
                name="manufacturer"
                placeholder="Search by Manufacturer"
                value={search.manufacturer}
                onChange={handleSearchChange}
                className="pl-2 py-2 border rounded flex-1 text-base"
            />
            <input
                type="text"
                name="noOfSeats"
                placeholder="Search by No. of Seats"
                value={search.noOfSeats}
                onChange={handleSearchChange}
                className="pl-2 py-2 border rounded flex-1 text-base"
            />
            <select
                name="status"
                value={search.status}
                onChange={handleSearchChange}
                className="pl-2 py-2 border rounded flex-1 text-base"
            >
                <option value="">Search by Status</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
            </select>
            <input
                type="text"
                name="terminal"
                placeholder="Search by Terminal"
                value={search.terminal}
                onChange={handleSearchChange}
                className="pl-2 py-2 border rounded flex-1 text-base"
            />
        </div>

        <div className="overflow-y-auto h-[80%]">
            <table className="min-w-full border-collapse border border-gray-300">
            <thead className="bg-golden-hover sticky top-0 z-10">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Name</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Manufacturer</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Seats</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Status</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Terminal</th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold"></th>
                </tr>
                <tr className="bg-gray-100 sticky">
                  <td className="border border-gray-300 px-4 py-2">
                  <input
                      type="text"
                      name="name"
                      value={newAircraft.name}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border rounded"
                  />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                  <input
                      type="text"
                      name="manufacturer"
                      value={newAircraft.manufacturer}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border rounded"
                  />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                  <input
                      type="number"
                      name="noOfSeats"
                      value={newAircraft.noOfSeats}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border rounded"
                  />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                  <select
                      name="status"
                      value={newAircraft.status}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border rounded"
                  >
                      <option value={1}>Active</option>
                      <option value={0}>Inactive</option>
                  </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                  <input
                      type="text"
                      name="terminal"
                      value={newAircraft.terminal}
                      onChange={handleInputChange}
                      className="w-full px-2 py-1 border rounded"
                  />
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-sm">
                    <div className="flex justify-center items-center">
                      {editingAircraft ? (
                        <button
                          onClick={handleSaveEdit}
                          className="bg-green-600 hover:bg-green-400 border-none px-5 py-2 text-white rounded"
                        >
                          Save
                        </button>
                      ) : (
                        <button
                          onClick={handleAddAircraft}
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
                {filteredAircrafts.map((aircraft, index) => (
                <tr key={index} className={`${
                  editingAircraft && aircraft.terminal === editingAircraft.terminal
                    ? "bg-golden-hover"
                    : index % 2 === 0
                    ? "bg-white"
                    : "bg-gray-100"
                }`}>
                    <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.name}</td>
                    <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.manufacturer}</td>
                    <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.noOfSeats}</td>
                    <td className="border border-gray-300 px-4 py-2 text-base">{renderStatus(aircraft.status)}</td>
                    <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.terminal}</td>
                    <td className="border border-gray-300 px-2 py-2">
                      <div className="flex justify-center items-center space-x-2">
                        <button
                          onClick={() => handleEditAircraft(aircraft)}
                          className="bg-green-600 border-none rounded text-sm px-2 pt-1 hover:bg-green-400 transition duration-200"
                        >
                          <FaWrench color="white"/>
                        </button>
                        <button
                          onClick={() => handleDeleteAirCraft(aircraft)}
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
  

export default Aircrafts;
