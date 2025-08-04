import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { FaWrench } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Aircraft } from "../../../object/aircraft";
import { AircraftStatus } from "../../../object/enum/AircraftStatus";
import { useAircrafts } from "../../../store/hooks/useAircrafts";

const Aircrafts: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  const {
    aircrafts,
    loading,
    error,
    fetchAircrafts,
    addAircraft,
    setAircrafts,
  } = useAircrafts();

  const [newAircraft, setNewAircraft] = useState<Aircraft>({
    name: "",
    model: "Boeing 737-800",
    manufacturer: "Boeing",
    noOfSeats: 60,
    status: AircraftStatus.Holding,
    availableAt: null,
    terminal: "HPH",
  });

  const [editingAircraft, setEditingAircraft] = useState<Aircraft | null>(null);

  const [search, setSearch] = useState({
    name: "",
    model: "",
    manufacturer: "",
    noOfSeats: "",
    availableAt: "",
    terminal: "",
  });

  useEffect(() => {
    fetchAircrafts();
  }, [fetchAircrafts]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearch((prev) => ({ ...prev, [name]: value }));
  };

  const filteredAircrafts = aircrafts.filter((aircraft) => {
    return (
      (search.name === "" || aircraft.name.toLowerCase().includes(search.name.toLowerCase())) &&
      (search.model === "" || aircraft.model.toLowerCase().includes(search.model.toLowerCase())) &&
      (search.manufacturer === "" || aircraft.manufacturer.toLowerCase().includes(search.manufacturer.toLowerCase())) &&
      (search.noOfSeats === "" || aircraft.noOfSeats.toString().includes(search.noOfSeats)) &&
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
    if (newAircraft.noOfSeats % 6 !== 0) {
      enqueueSnackbar("Please enter a number that is divisible by 6.", { variant: "warning" });
      return;
    }

    const result = await addAircraft(newAircraft);
    if (result) {
      enqueueSnackbar(result, { variant: "success" });
      setNewAircraft({
        name: "",
        model: "",
        manufacturer: "",
        noOfSeats: 0,
        status: AircraftStatus.Holding,
        availableAt: null,
        terminal: "",
      });
    } else {
      enqueueSnackbar("Failed to add aircraft.", { variant: "error" });
    }
  };

  const handleDeleteAirCraft = (aircraftToDelete: Aircraft) => {
    setAircrafts((prev) => prev.filter((a) => a !== aircraftToDelete));
  };

  const handleEditAircraft = (aircraft: Aircraft) => {
    setEditingAircraft(aircraft);
    setNewAircraft({ ...aircraft });
  };

  const handleSaveEdit = () => {
    setAircrafts((prev) =>
      prev.map((item) => (item === editingAircraft ? newAircraft : item))
    );
    setEditingAircraft(null);
    setNewAircraft({
      name: "",
      model: "",
      manufacturer: "",
      noOfSeats: 0,
      status: AircraftStatus.Holding,
      availableAt: null,
      terminal: "",
    });
  };

  if (loading) return <div className="text-center text-xl my-40">Loading...</div>;
  if (error) return <div className="text-center text-xl my-40 text-red-600">{error}</div>;

  return (
    <>
      <div className="text-4xl pb-6 pt-4 font-bold text-center text-ahaAmber-2 capitalize">Aircrafts</div>
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
          <input
              type="text"
              name="terminal"
              placeholder="Search by Terminal"
              value={search.terminal}
              onChange={handleSearchChange}
              className="pl-2 py-2 border rounded flex-1 text-base"
          />
          {/* <select
              name="status"
              value={search.status}
              onChange={handleSearchChange}
              className="pl-2 py-2 border rounded flex-1 text-base"
          >
              <option value={""}>Status</option>
              <option value={AircraftStatus.Airborne}>Airborne</option>
              <option value={AircraftStatus.Fuelling}>Fueling</option>
              <option value={AircraftStatus.Holding}>Holding</option>
          </select> */}
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
          <thead className="bg-ahaAmber-4 sticky top-0 z-10">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Model</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Manufacturer</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Seats</th>
                {/* <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Status</th> */}
                <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Available At</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold">Terminal</th>
                <th className="border border-gray-300 px-4 py-2 text-left text-base font-semibold"></th>
              </tr>
              <tr className="bg-gray-100 sticky">
                <td className="border border-gray-300 px-4 py-2">
                <input
                    type="text"
                    name="name"
                    value={newAircraft.name}
                    // onChange={handleInputChange}
                    className="w-full px-2 py-1 border rounded"
                />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                <input
                    type="text"
                    name="model"
                    value={newAircraft.model}
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
                {/* <td className="border border-gray-300 px-4 py-2">
                <select
                    name="status"
                    value={newAircraft.status}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border rounded"
                >
                    <option value={AircraftStatus.Airborne}>Airborne</option>
                    <option value={AircraftStatus.Fuelling}>Fueling</option>
                    <option value={AircraftStatus.Holding}>Holding</option>
                </select>
                </td> */}
                <td className="border border-gray-300 px-4 py-2">
                <input
                    type="text"
                    name="availableAt"
                    value={newAircraft.availableAt}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1 border rounded"
                />
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
                        className="bg-ahaGreen-3 hover:bg-ahaGreen-0-400 border-none px-5 py-2 text-white rounded"
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
                editingAircraft && aircraft.name === editingAircraft.name
                  ? "bg-ahaAmber-4"
                  : index % 2 === 0
                  ? "bg-white"
                  : "bg-gray-100"
              }`}>
                  <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.name}</td>
                  <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.model}</td>
                  <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.manufacturer}</td>
                  <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.noOfSeats}</td>
                  {/* <td className="border border-gray-300 px-4 py-2 text-base">{AircraftStatus[aircraft.status]}</td> */}
                  <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.availableAt}</td>
                  <td className="border border-gray-300 px-4 py-2 text-base">{aircraft.terminal}</td>
                  <td className="border border-gray-300 px-2 py-2">
                    <div className="flex justify-center items-center space-x-2">
                      <button
                        onClick={() => handleEditAircraft(aircraft)}
                        className="bg-ahaGreen-3 border-none rounded text-sm px-2 pt-1 hover:bg-ahaGreen-0-400 transition duration-200"
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
