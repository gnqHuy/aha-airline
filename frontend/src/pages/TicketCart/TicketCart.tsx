import React from 'react';
import { useFlightContext } from '../../context/FlightContext/FlightContext';
import TicketPreview from '../../components/TicketPreview/TicketPreview';
import { useNavigate } from 'react-router-dom';
import Layout1 from '../../components/Layout/Layout1';
import Layout from '../../components/Layout/Layout';
import { SeatClass } from '../../object/enum/SeatClass';

type Props = {};

const TicketCard: React.FC<Props> = () => {
    const { selectedFlight, selectedPassenger, selectedFlightClass} = useFlightContext();
    const navigate = useNavigate();

    const handleConfirmButton = () => {
        navigate("passengerInfor");
    };

    if (!selectedFlight) {
        return <div>
            <Layout>
                <div className="text-center text-red-500 text-2xl pt-4">
                    No flight has been selected, or the flight details are incomplete. <br/> Please return to select your flight.
                </div>
            </Layout>
        </div>;
    }

    const passengerCount = selectedPassenger.adults + selectedPassenger.children + selectedPassenger.infants;

    let totalPrice = 0;
    if (selectedFlightClass === SeatClass.Economy) {
        totalPrice = selectedFlight.economyPrice * passengerCount;
    } else if (selectedFlightClass === SeatClass.Business) {
        totalPrice = selectedFlight.businessPrice * passengerCount;
    }
    
    return (
    <Layout1>
        <div className="text-2xl font-bold text-center text-gray-800 mb-6 pt-6">Your Ticket</div>
        <div id="ticket-content" className="w-[70%] mx-auto">
            <TicketPreview flight={selectedFlight} classType={selectedFlightClass} />
        </div>
        <div className="w-[70%] mx-auto text-right">
            <p className="text-2xl font-semibold">Total Price</p>
            <p className="text-xl">VND {totalPrice.toLocaleString()}</p>
        </div>

        <div className="w-[70%] mx-auto text-right mt-4 mb-10">
            <button
                onClick={handleConfirmButton}
                className="my-auto px-6 py-2 text-golden text-base cursor-pointer border-golden font-semibold hover:bg-golden hover:text-white rounded-md"
                >
                Confirm and continue
            </button>
        </div>
    </Layout1 >
    );
};

export default TicketCard;
