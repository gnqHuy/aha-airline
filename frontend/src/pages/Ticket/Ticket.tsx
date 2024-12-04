import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import TicketData from "../../assets-test/Json/ticket.json";
import TicketPreview from '../../components/TicketPreview/TicketPreview';
import { FaPlane , FaPlaneDeparture} from 'react-icons/fa';
import { IoPerson } from "react-icons/io5";
import headerImage from "../../assets-test/Images/plane1.jpg";
import { useFlight } from '../../context/FlightContext/FlightContext';

type Props = {};

const Ticket: React.FC<Props> = () => {
    const { selectedFlight } = useFlight();

    if (!selectedFlight) {
        return <div>No flight selected.</div>;  
    }
  return (
    <>
        <NavBar />
        <div className='relative'>
            <img src={headerImage} alt="Header" className="w-full h-[300px] object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-md flex items-center justify-between w-[80%] max-w-2xl">
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                    <div className="text-left">
                        <div className="text-xl font-semibold text-gray-900">HAN</div>
                        <div className="text-base text-gray-500">{selectedFlight.from}</div>
                    </div>

                    <div className="flex items-center text-gray-500">
                        <div className="h-0.5 w-36 bg-gray-300"></div>
                        <FaPlaneDeparture className="mx-2 text-xl text-golden"/>
                    </div>

                    <div className="text-right">
                        <div className="text-xl font-semibold text-gray-900">SGN</div>
                        <div className="text-base text-gray-500">{selectedFlight.to}</div>
                    </div>
                    </div>
                </div>

                <div className="h-14 w-px bg-golden mx-4"></div>

                <div className="flex items-center justify-center w-32 font-semibold">
                    <div>
                    Depart<br />
                    <span className="block mt-2">{selectedFlight.day}</span>
                    </div>
                </div>

                <div className="h-14 w-px bg-golden mx-4"></div>

                <div className="flex items-center justify-center w-32 font-semibold">
                    <div>
                    Passengers<br />
                    <div className="flex items-center mt-2">
                        <IoPerson className="text-golden mr-1"/>
                        <span className="font-semibold ">1</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-6">
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Available Tickets</h1>
            <div className="grid grid-cols-1 gap-6">
                {TicketData.map((ticket) => (
                <TicketPreview
                    aircraft={ticket.aircraft}
                    fromIATA={ticket.fromIATA}
                    toIATA={ticket.toIATA}
                    fromAirportName={ticket.fromAirportName}
                    toAirportName={ticket.toAirportName}
                    fromTime={new Date(ticket.fromTime)}
                    toTime={new Date(ticket.toTime)}
                    economyPrice={ticket.economyPrice}
                    businessPrice={ticket.businessPrice}
                />
                ))}
            </div>
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Ticket;
