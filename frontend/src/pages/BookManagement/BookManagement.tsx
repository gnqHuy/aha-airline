import { useEffect, useState } from 'react'

import { IoIosAirplane } from "react-icons/io";
import LayoutDefault from '../../layout/LayoutDefault';
import { useFlightContext } from '../../store/context/FlightContext';
import { GetByReservationOrTicketCode } from '../../api/ticket';

const BookManagement = () => {
    const [reservations, setReservations] = useState<any[]>([]);

    const {manageBookingReservationCode} = useFlightContext();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GetByReservationOrTicketCode(manageBookingReservationCode);
                setReservations(response.data);
                console.log("Data reservation:"+response.data)
            } catch (err) {
                return <div className = "text-red-500 text-base">Failed to get your information! Check your reservation code!</div>;
            } finally {
                
            }
        }
        fetchData();
    }, []);
  return (
    <LayoutDefault >
        <div className = "ml-[12vw]">
            <div className = "pt-[1rem]">
                <p className = "text-ahaGreen-0 font-bold text-2xl">Booking Management</p>
            </div>
            <div className = "flex w-[80%] mt-[3rem]">
                <div className = "bg-gray-500 w-[40%] h-[0.01rem]"></div>
                <p className = "text-ahaGreen-0 text-lg font-bold relative bottom-[2rem] ml-[2rem] w-[20%]">Customer information</p>
                <div className = "bg-gray-500 w-[40%] h-[0.01rem] ml-[2rem]"></div>
            </div>

            {/* info */}
            {reservations.map((reservation) => {
                return (
                    <div className = "w-[80%] mt-[0rem] bg-white border-[2px] border-ahaGreen-0 border-solid rounded-[8px] flex mb-[2rem]">
                        <div className = "ml-[2rem] mt-[1rem]">
                            <p className = "text-base font-bold"><b>Customer name: </b> {`${reservation?.firstName} ${reservation?.lastName}`}</p>
                            <p className = "text-base font-bold">Reservation code: {manageBookingReservationCode}</p>
                            <p className = "text-base font-bold">Ticket number: {reservation?.ticketCode}</p>
                            <p className = "text-base font-bold">Email: {reservation?.contactEmail}</p>
                            <p className = "text-base font-bold">Phone number: {reservation?.phoneNumber}</p>
                            <p className = "text-base font-bold">Payment status: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {`${reservation?.status === 0 ? "Unpaid" : "Paid"}`}</p>
                        </div>

                        <div className = "absolute left-[40vw] mt-[1rem] font-bold">
                            <div className = "flex text-ahaGreen-0">
                                <p>{`${reservation?.flightInfo?.fromAirport?.city?.name} (${reservation?.flightInfo?.fromAirport?.iata}), ${reservation?.flightInfo?.fromAirport?.city?.country}`}</p>
                                <IoIosAirplane style = {{color: "#1A4532"}} className = "w-[1.5rem] h-[1.5rem] ml-[0.7rem] relative top-[1.1rem]"/>
                                <p className = "ml-[0.5rem]">{`${reservation?.flightInfo?.toAirport?.city?.name} (${reservation?.flightInfo?.toAirport?.iata}), ${reservation?.flightInfo?.toAirport?.city?.country}`}</p>
                            </div>
                            <div className = "relative bottom-[1rem]">
                                <p><b>Boarding time: </b>{reservations[0]?.flightInfo?.boardingTime}</p>
                                <p className = "relative bottom-[0.5rem]"><b>Departure time: </b>{reservations[0]?.flightInfo?.departureTime}</p>
                                <p className = "relative bottom-[1rem]"><b>Arrival time: </b>{reservations[0]?.flightInfo?.arrivalTime}</p>
                                <p className = "relative bottom-[1.5rem]"><b>Aircraft name: </b>{reservations[0]?.flightInfo?.aircraft?.name}</p>
                                <p className = "relative bottom-[2rem]"><b>Aircraft model: </b>{reservations[0]?.flightInfo?.aircraft?.model}</p>
                                <p className = "relative bottom-[2.5rem]"><b>Seat number: </b>{reservations[0]?.seatNumber}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </LayoutDefault>
  )
}

export default BookManagement