import React from 'react';
import TicketData from "../../assets-test/Json/ticket.json";
import TicketPreview from '../../components/TicketPreview/TicketPreview';
import headerImage from "../../assets-test/Images/sunset4.jpg";
import { useFlight } from '../../context/FlightContext/FlightContext';
import Layout1 from '../../components/Layout/Layout1';
import Layout from '../../components/Layout/Layout';

type Props = {};

const TicketPage: React.FC<Props> = () => {
    const { selectedFlight} = useFlight();

    if (!selectedFlight || !selectedFlight.from || !selectedFlight.to) {
        return <div>
            <Layout>
                <div className="text-center text-red-500 text-2xl pt-4">
                    No flight has been selected, or the flight details are incomplete. <br/> Please return to select your flight.
                </div>
            </Layout>
        </div>;
    }

    const convertedTicketData = TicketData.map(ticket => ({
        ...ticket,
        fromTime: new Date(ticket.fromTime),
        toTime: new Date(ticket.toTime),
    }));

    return (
    <>
        <Layout1 headerImage={headerImage}>
            <div className="min-h-screen bg-gray-100">
                <div className="container mx-auto py-6">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Available Tickets</h1>
                    <div className="grid grid-cols-1 gap-6 w-[70%] mx-auto">
                        {convertedTicketData.map((ticket) => (
                            <div>
                                <TicketPreview
                                    key={`${ticket.fromTime}-${ticket.toTime}`}
                                    ticket={ticket}
                                    classType='none'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout1>
    </>
    );
};

export default TicketPage;
