import React, { useEffect, useState } from "react";
import TicketPreview from "../../components/TicketPreview/TicketPreview";
import headerImage from "../../assets-test/Images/sunset4.jpg";
import Layout1 from "../../components/Layout/Layout1";
import Layout from "../../components/Layout/Layout";
import { Flight } from "../../object/flight";
import { getFromRequest } from "../../api/flightAPI";
import { SeatClass } from "../../object/enum/SeatClass";
import { Link, useNavigate } from "react-router-dom";
import { selectIsRoundTrip, selectReturnDate, selectSelectedFlight, selectSelectedFlightClass, selectSelectedFlightPreview, selectSelectedFlightRound, selectSelectedFlightRoundClass } from "../../redux/selector/flightSelector";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFlight, setSelectedFlightClass, setSelectedFlightRound, setSelectedFlightRoundClass } from "../../redux/slice/flightSlice";
import { useSnackbar } from "notistack";

const TicketPage: React.FC = () => {
  const dispatch = useDispatch();
  const selectedFlightPreview = useSelector(selectSelectedFlightPreview);
  const roundTrip = useSelector(selectIsRoundTrip);
  const returnDate = useSelector(selectReturnDate);
  const selectedFlight = useSelector(selectSelectedFlight);
  const selectedFlightRound = useSelector(selectSelectedFlightRound);
  const selectedFlightClass = useSelector(selectSelectedFlightClass);
  const selectedFlightRoundClass = useSelector(selectSelectedFlightRoundClass);

  const [flights, setFlights] = useState<Flight[]>([]);
  const [flightsRound, setFlightsRound] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [checkFlight, setCheckFlight] = useState<boolean>(false);
  const [checkFlightRound, setCheckFlightRound] = useState<boolean>(false);

  const { enqueueSnackbar } = useSnackbar();


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
          selectedFlightPreview.departureTime);
          setFlights(response.data);
          if (roundTrip) {
            const response1 = await getFromRequest(
              selectedFlightPreview.toAirport.iata,
              selectedFlightPreview.fromAirport.iata,
              returnDate);
            setFlightsRound(response1.data);
          }
        } catch (err) {
          return <div>
            <Layout>
                <div className="text-center text-red-500 text-2xl pt-4">
                    No flight has been selected, or the flight details are incomplete. <br/> Please return to select your flight.
                </div>
            </Layout>
          </div>;
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

  const handleSelectFlight = (flight: Flight, classType: SeatClass) => {
    dispatch(setSelectedFlight(flight));
    dispatch(setSelectedFlightClass(classType));
    setCheckFlight(true);
    if (classType == SeatClass.Economy) {
      enqueueSnackbar( "Economy class selected successfully for your departure!", {variant: "success"});
    }
    else if (classType == SeatClass.Business) {
      enqueueSnackbar( "Business class selected successfully! for your departure!", {variant: "success"});
    }
  };

  const handleSelectFlightRound = (flight: Flight, classType: SeatClass) => {
    dispatch(setSelectedFlightRound(flight));
    dispatch(setSelectedFlightRoundClass(classType));
    setCheckFlightRound(true);
    if (classType == SeatClass.Economy) {
      enqueueSnackbar( "Economy class selected successfully for your retun flight!", {variant: "success"});
    }
    else if (classType == SeatClass.Business) {
      enqueueSnackbar( "Business class selected successfully! for your retun flight!", {variant: "success"});
    }
  };

  const handleConfirmButton = () => {
    const isFlightSelected = checkFlight && (roundTrip ? checkFlightRound : true);
    
    if (isFlightSelected) {
      enqueueSnackbar("Tickets booked successfully!", {variant: "success"});
      navigate("ticketCart");
    } else {
      enqueueSnackbar(roundTrip ? "Please choose both outbound and return flights." : "Please choose a flight.", {variant: "error"});
    }
  };
  
  if (loading) return <div className='mx-auto text-xl text-center my-40'>Loading...</div>;
  if (error) return <div className="mx-auto text-xl text-center my-40 text-red-600">Error: {error}</div>;

  return (
    <Layout1 headerImage={headerImage}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold text-center mb-6 ">
            Available Tickets
          </h1>
          
          <div className="grid grid-cols-1 gap-6 w-[70%] mx-auto">
            <h1 className="text-2xl font-bold text-center mb-6">
              Depart
            </h1>
            
            {flights.length === 0 ? (
              <p className="mx-auto text-2xl text-center">
                Currently, there are no flights available for your selected route.<br /> 
                Please consider choosing an alternative option or adjusting your search criteria. <br />
                <Link to={"/"} className="no-underline text-xl text-golden">Back to HomePage</Link>
              </p> 
            ) : (
              flights.map((flight) => (
                <div key={flight.id}>
                  <TicketPreview flight={flight} classType={SeatClass.None} handleSelectedFlight={handleSelectFlight}/>
                </div>
              ))
              
            )}
          </div>
          
          {(flightsRound.length > 0 && roundTrip) && (
            <div className="grid grid-cols-1 gap-6 w-[70%] mx-auto">
              <h1 className="text-2xl font-bold text-center mb-6">
                Return
              </h1>
              
              {flightsRound.map((flight) => (
                <div key={flight.id}>
                  <TicketPreview flight={flight} classType={SeatClass.None} handleSelectedFlight={handleSelectFlightRound}/>
                </div>
              ))}
            </div>
          )}
        </div>
        {selectedFlight &&
          <div className="grid grid-cols-1 gap-6 w-[70%] mx-auto mb-10">
            <h1 className="text-2xl font-bold text-center mb-6">
                Selected Flight
            </h1>
            <TicketPreview flight={selectedFlight} classType={selectedFlightClass}/>
            { selectedFlightRound && <TicketPreview flight={selectedFlightRound} classType={selectedFlightRoundClass}/>
            }
          </div>
        }
        {flights.length === 0 ? (
              <></>
            ) : (
              <div className="flex items-center justify-center p-4">
                <button
                  onClick={handleConfirmButton} 
                  className="my-auto px-6 py-2 text-golden text-base cursor-pointer border-golden font-semibold hover:bg-golden hover:text-white rounded-md">
                  Confirm and continue
                </button>
              </div>   
            )}
      </div>
    </Layout1>

  );
};

export default TicketPage;