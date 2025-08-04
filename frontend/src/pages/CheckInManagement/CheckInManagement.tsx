import React, { useEffect, useState } from 'react'
import headerImage from "../../assets-test/Images/sunset4.jpg";
import { IoIosAirplane } from "react-icons/io";
import Layout from '../../layout/Layout';
import { CancelTicketByCode, GetByReservationOrTicketCode, UpgradeSeatByCode } from '../../api/ticket';
import { useFlightContext } from '../../store/context/FlightContext';
import { SeatClass } from '../../object/enum/SeatClass';
import { Ticket } from '../../object/ticket';
import { useSnackbar } from 'notistack';

type Props = {}

const CheckInManagement = (props: Props) => {
    const [reservations, setReservations] = useState<Ticket[]>([]);

    const [displayOption, setDisplayOption] = useState<boolean>(false);

    const { enqueueSnackbar } = useSnackbar();

    // context
    const {checkinReservationCode} = useFlightContext();
    const {checkinTicket} = useFlightContext();
    const {checkinOption} = useFlightContext();

    useEffect(() => {
        if (checkinOption === "reservation") {
            const fetchData = async () => {
                try {
                    const response = await GetByReservationOrTicketCode(checkinReservationCode);
                    setReservations(response.data);
                    console.log("Data reservation:"+response.data)
                } catch (err) {
                    return <div className = "text-red-500 text-base">Failed to get your information! Check your reservation code!</div>;
                } finally {
                    
                }
            }
            fetchData();
        } else if (checkinOption === "ticket") {
            const fetchData = async () => {
                try {
                    const response = await GetByReservationOrTicketCode(checkinTicket);
                    setReservations(response.data);
                    console.log("Ticket reservation:"+response.data)
                } catch (err) {
                    return <div className = "text-red-500 text-base">Failed to get your information! Check your reservation code!</div>;
                } finally {
                    
                }
            }
            fetchData();
        }
    }, [reservations]);
    const handleCancel = async (code: string) => {
        try {
            const response = await CancelTicketByCode(code);
            enqueueSnackbar(response.data, {variant: "success"});
        } catch (err) {
            return <div className = "text-red-500 text-base">Failed to cancel!!</div>;
        } finally {
            
        }
    }

    const handleUpgrade = async (code: string) => {
        try {
            const response = await UpgradeSeatByCode(code);
            enqueueSnackbar(response.data, {variant: "success"});
        } catch (err) {
            return <div className = "text-red-500 text-base">Failed to Upgrade!!</div>;
        } finally {
            
        }
    }
  return (
    <Layout headerImage = {headerImage}>
        <div className = "ml-[12vw]">
            <div className = "pt-[1rem]">
                <p className = "text-2xl font-bold text-ahaGreen-0">Check-in management</p>
            </div>

            {/* title */}
            <div className = "flex w-[80%] mt-[3rem]">
                <div className = "bg-gray-500 w-[40%] h-[0.01rem]"></div>
                <p className = "text-ahaGreen-0 text-lg font-bold relative bottom-[2rem] ml-[2.8rem] w-[20%]">Check-in information</p>
                <div className = "bg-gray-500 w-[40%] h-[0.01rem] ml-[1.5rem]"></div>
            </div>

            {/* info */}
            {reservations.map((reservation: any) => {
                return (
                    <>
                        <div className = "w-[80%] mt-[1rem] bg-white border-[2px] border-ahaGreen-0 border-solid rounded-[8px] flex hover:cursor-pointer" onClick = {() => displayOption === true ? setDisplayOption(false) : setDisplayOption(true)}>
                            {/* customer info */}
                            <div className = "ml-[1rem] w-[30%]">
                                <p className = "text-base text-ahaGreen-0 font-bold">Customer information</p>
                                <p className = "text-base">Customer name: {reservation?.passengerTitle === 0 ? `Mr. ${reservation?.firstName} ${reservation?.lastName}` : `Ms. ${reservation?.firstName} ${reservation?.lastName}`}</p>
                                <p className = "text-base">Date of birth: {reservation?.passengerDOB.substring(0,10)}</p>
                                <p className = "text-base">Email: {reservation?.contactEmail}</p>
                                <p className = "text-base">Phone number: {reservation?.phoneNumber}</p>
                            </div>

                            {/* boundaries */}
                            <div className = "bg-gray-500 w-[0.01rem] h-[24vw] mt-[2rem] ml-[8%]"></div>

                            {/* journey info */}
                            <div className = "">
                                <p className = "text-base text-ahaGreen-0 font-bold ml-[1.5rem]">Journey information</p>
                                <div className = "flex relative bottom-[1rem] ml-[1.5rem]">
                                    {/* from flight */}
                                    <div>
                                        <p className = "text-sm text-ahaGreen-0 font-bold">{`${reservation.flightInfo.fromAirport.city.name} (${reservation.flightInfo.fromAirport.iata}), ${reservation.flightInfo.fromAirport.city.country}`}</p>
                                        <p className = "text-sm relative bottom-[1rem] ml-[3rem]">{`${reservation.flightInfo.fromAirport.name}`}</p>
                                    </div>

                                    {/* boundaries */}
                                    <div className = "flex ml-[0.5rem] mt-[1.6rem]">
                                        <div className = "bg-gray-500 w-[5vw] h-[0.01rem]"></div>
                                        <IoIosAirplane style = {{color: "#1A4532"}} className = "w-[1.5rem] h-[1.5rem] ml-[1rem] relative bottom-[0.7rem]"/>
                                        <div className = "bg-gray-500 w-[5vw] h-[0.01rem] ml-[1rem]"></div>
                                    </div>

                                    {/* to flight */}
                                    <div className = "ml-[0.5rem]">
                                        <p className = "text-sm text-ahaGreen-0 font-bold">{`${reservation.flightInfo.toAirport.city.name} (${reservation.flightInfo.toAirport.iata}), ${reservation.flightInfo.toAirport.city.country}`}</p>
                                        <p className = "text-sm relative bottom-[1rem] ml-[3rem]">{`${reservation.flightInfo.toAirport.name}`}</p>
                                    </div>
                                </div>

                                {/* reservation code to model */}
                                <div className = "flex">
                                    <div>
                                        <p className = "text-base relative bottom-[2.5rem] ml-[1.5rem]"><b>Reservation code:</b> {reservation.reservationCode}</p>
                                        <p className = "text-base relative bottom-[3rem] ml-[1.5rem]"><b>Boarding time:</b> {`${reservation.flightInfo.boardingTime.substring(0, 10)} ${reservation.flightInfo.boardingTime.substring(11, 19)}`}</p>
                                        <p className = "text-base relative bottom-[3.5rem] ml-[1.5rem]"><b>Departure time:</b> {`${reservation.flightInfo.departureTime.substring(0, 10)} ${reservation.flightInfo.departureTime.substring(11, 19)}`}</p>
                                        <p className = "text-base relative bottom-[4rem] ml-[1.5rem]"><b>Arrival time:</b> {`${reservation.flightInfo.arrivalTime.substring(0, 10)} ${reservation.flightInfo.arrivalTime.substring(11, 19)}`}</p>
                                        <p className = "text-base relative bottom-[4.5rem] ml-[1.5rem]"><b>Boarding gate: </b> {reservation.flightInfo.boardingGate}</p>
                                        <p className = "text-base relative bottom-[5rem] ml-[1.5rem]"><b>Aircraft:</b> {`${reservation.flightInfo.aircraft.manufacturer} ${reservation.flightInfo.aircraft.name}`}</p>
                                        <p className = "text-base relative bottom-[5.5rem] ml-[1.5rem]"><b>Aircraft model:</b> {reservation.flightInfo.aircraft.model}</p>
                                    </div>

                                    {/* seat position */}
                                    <div className = "ml-[8.5rem] relative bottom-[1rem]">
                                        <p className = {reservation.seatClass == SeatClass.Economy ? "text-[60px] text-ahaGreen-0 font-bold text-center" : "text-[60px] text-ahaAmber-2 font-bold text-center"}>{reservation?.seatNumber}</p>
                                        {reservation?.seatClass == SeatClass.Economy ? 
                                            <p className = "text-4xl text-ahaGreen-0 font-bold relative bottom-[3rem] right-[0rem]">Economy</p> : 
                                            <p className = "text-4xl text-ahaAmber-2 font-bold relative bottom-[3rem] right-[0rem]">Business</p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* option */}
                        {displayOption === true && 
                            <div className = "flex mt-[0.5rem] ml-[43vw]">
                                <button onClick={() => handleCancel(reservation.ticketCode)} className = "bg-red-500 text-white w-[8vw] h-[2.5rem] rounded-[7px] text-base font-bold border-white hover:cursor-pointer">Cancel</button>
                                <button onClick={() => handleUpgrade(reservation.ticketCode)} className = "bg-ahaAmber-2 text-white w-[8vw] h-[2.5rem] rounded-[7px] text-base font-bold border-white ml-[1rem] hover:cursor-pointer">Upgrade seat</button>
                            </div>
                        }
                    </>
                )
            })}
        </div>
    </Layout>
  )
}

export default CheckInManagement