import React, { useEffect, useState } from "react";
import TicketPreview from "../../components/TicketPreview/TicketPreview";
import headerImage from "../../assets-test/Images/sunset4.jpg";
import { useFlightContext } from "../../context/FlightContext/FlightContext";
import Layout1 from "../../components/Layout/Layout1";
import Layout from "../../components/Layout/Layout";
import { Flight } from "../../object/flight";
import { getFromRequest } from "../../api/flightAPI";

const TicketPage: React.FC = () => {
  const { selectedFlightPreview } = useFlightContext();
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const isFlightSelected =
    selectedFlightPreview &&
    selectedFlightPreview.fromAirport.city.name &&
    selectedFlightPreview.toAirport.city.name;

  useEffect(() => {
    if (isFlightSelected) {
      const fetchData = async () => {
        try {
          const response = await getFromRequest(
            selectedFlightPreview.fromAirport.iata,
            selectedFlightPreview.toAirport.iata,
            selectedFlightPreview.departureTime
          );
          setFlights(response.data);
          console.log(response.data);
        } catch (err) {
          setError("Failed to load flight route data.");
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setLoading(false);
    }
  }, [isFlightSelected, selectedFlightPreview]);

  if (!isFlightSelected) {
    return (
      <Layout>
        <div className="text-center text-red-500 text-2xl pt-4">
          No flight has been selected, or the flight details are incomplete.
          <br /> Please return to select your flight.
        </div>
      </Layout>
    );
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <Layout1 headerImage={headerImage}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-6">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Available Tickets
          </h1>
          <div className="grid grid-cols-1 gap-6 w-[70%] mx-auto">
            {flights.map((flight) => (
              <div>
                <TicketPreview flight={flight} classType="none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout1>
  );
};

export default TicketPage;
