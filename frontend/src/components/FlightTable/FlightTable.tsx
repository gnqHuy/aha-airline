import React, { useEffect, useState } from 'react';
import { FaPlane } from 'react-icons/fa';
import { useSearchFlightState } from '../../context/SearchFlightState/SearchFlightState';
import SearchFlight from '../SearchFlight/SearchFlight';
import { FlightPreviewType } from '../../object/flightPreview';
import { getFlightPreview } from '../../api/flightAPI';

type FlightTableProps = {
  nameCity: string | undefined;
  iata: string;
};

const FlightTable: React.FC<FlightTableProps> = ({ nameCity, iata }) => {
  const [filteredFlights, setFilteredFlights] = useState<FlightPreviewType[]>([]);
  const [fromValue, setFromValue] = useState('');
  const [fromFocused, setFromFocused] = useState(false);
  const [budgetValue, setBudgetValue] = useState('');
  const [budgetFocused, setBudgetFocused] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState<FlightPreviewType | null>(null);
  const { searchFlightState, setSearchFlightState } = useSearchFlightState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const [flightPreview, setFlightPreview] = useState<FlightPreviewType[]>([]);

  const fetchData = async () => {
    try {
      const response = await getFlightPreview({
        FromAirportIATA: "",
        ToAirportIATA: iata,
        pageSize: 20,
        pageNumber: 0,
      });
      setFlightPreview(response.data);
      setFilteredFlights(response.data); 
    } catch (err) {
      setError('Failed to load flight route data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = flightPreview.filter((flight) => {
      const matchesFrom = fromValue
        ? flight.fromAirport.city.name.toLowerCase().includes(fromValue.toLowerCase())
        : true;
      const matchesBudget = budgetValue
        ? flight.minimumPrice <= parseInt(budgetValue, 10)
        : true;
      return matchesFrom && matchesBudget;
    });
    setFilteredFlights(filtered);
  }, [fromValue, budgetValue, flightPreview]);

  const handleSelectedFlight = (flight: FlightPreviewType) => {
    setSelectedFlight(flight);
    setSearchFlightState(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <div className="w-full max-w-6xl mx-auto text-center p-4">
      <h2 className="text-2xl text-golden font-semibold mb-6">Best Flight Tickets to {nameCity}</h2>
      <div className="flex text-left justify-between gap-4">
        <div className="relative flex items-center shadow-sm bg-gray-100 w-2/3 pt-2 pl-4">
          <div className="relative flex flex-col w-full">
            <input
              type="text"
              id="from-input"
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
              onFocus={() => setFromFocused(true)}
              onBlur={() => setFromFocused(false)}
              placeholder=" "
              autoComplete="off"
              className="bg-transparent border-none outline-none text-gray-700 text-base pt-5 pb-1"
            />
            <label
              htmlFor="from-input"
              className={`absolute left-0 ${
                fromValue || fromFocused
                  ? 'top-1 text-sm text-golden font-semibold mt-1'
                  : 'top-5 text-base text-golden'
              } transform -translate-y-1/2 transition-all`}
            >
              FROM
            </label>
          </div>
          <div className="text-golden text-2xl mx-5">
            <FaPlane />
          </div>
          <div className="relative flex flex-col w-full">
            <div id="to-input" className="bg-transparent border-none outline-none text-gray-700 text-base pt-5 pb-1">
              {nameCity}
            </div>
            <label
              htmlFor="to-input"
              className="absolute left-0 top-1 text-sm text-golden font-semibold mt-1 transform -translate-y-1/2 transition-all pointer-events-none"
            >
              TO
            </label>
          </div>
        </div>

        <div className="flex items-center border rounded-md shadow-sm bg-gray-100 w-1/3 pt-2 pl-4">
          <div className="relative flex flex-col w-full">
            <input
              type="number"
              id="budget-input"
              value={budgetValue}
              onChange={(e) => setBudgetValue(e.target.value)}
              onFocus={() => setBudgetFocused(true)}
              onBlur={() => setBudgetFocused(false)}
              placeholder=" "
              className="bg-transparent border-none outline-none text-gray-700 text-base pt-5 pb-1"
            />
            <label
              htmlFor="budget-input"
              className={`absolute left-0 ${
                budgetValue || budgetFocused
                  ? 'top-1 text-sm text-golden font-semibold mt-1'
                  : 'top-5 text-base text-golden'
              } transform -translate-y-1/2 transition-all`}
            >
              INPUT MAX BUDGET
            </label>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto h-[500px] mt-4">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-Green text-golden sticky top-0 z-10 text-[17px]">
            <tr>
              <th className="border-b-2 border-golden p-3">From</th>
              <th className="border-b-2 border-golden p-3">To</th>
              <th className="border-b-2 border-golden p-3">Departure Time</th>
              <th className="border-b-2 border-golden p-3">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredFlights.length > 0 ? (
              filteredFlights.map((flight, index) => (
                <tr
                  key={index}
                  className="even:bg-gray-100 hover:bg-golden-hover cursor-pointer"
                  onClick={() => handleSelectedFlight(flight)}
                >
                  <td className="p-3">{flight.fromAirport.city.name}</td>
                  <td className="p-3">{flight.toAirport.city.name}</td>
                  <td className="p-3">{new Date(flight.departureTime).toLocaleString()}</td>
                  <td className="p-3">{flight.minimumPrice.toLocaleString()} VND</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-500">
                  No flights match your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {searchFlightState && selectedFlight && <SearchFlight flightPreview={selectedFlight} />}
    </div>
  );
};

export default FlightTable;
