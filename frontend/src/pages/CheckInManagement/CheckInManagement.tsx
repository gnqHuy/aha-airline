import React, { useEffect, useState } from 'react'
import headerImage from "../../assets-test/Images/sunset4.jpg";
import { IoIosAirplane } from "react-icons/io";
import Layout from '../../components/Layout/Layout';

type Props = {}

const CheckInManagement = (props: Props) => {
    const [reservations, setReservations] = useState<any[]>([]);

    const [displayOption, setDisplayOption] = useState<boolean>(false);

    useEffect(() => {
        fetch("/reservation-sample.json").then((response) => {
            if (!response.ok) {
                throw new Error("Response was not ok!");
            }
            return response.json();
        }).then((response) => {
            setReservations(response);
        }).catch((err) => console.error(err));
    }, []);
  return (
    <Layout headerImage = {headerImage}>
        <div className = "ml-[12vw]">
            <div className = "pt-[1rem]">
                <p className = "text-2xl font-bold text-Green">Check-in management</p>
            </div>

            {/* title */}
            <div className = "flex w-[80%] mt-[3rem]">
                <div className = "bg-gray-500 w-[40%] h-[0.01rem]"></div>
                <p className = "text-Green text-lg font-bold relative bottom-[2rem] ml-[2.8rem] w-[20%]">Check-in information</p>
                <div className = "bg-gray-500 w-[40%] h-[0.01rem] ml-[1.5rem]"></div>
            </div>

            {/* info */}
            {reservations.map((reservation: any) => {
                return reservation.ticketSummaries.map((ticketSummary: any) => {
                    return (
                        <>
                            <div className = "w-[80%] mt-[1rem] bg-white border-[2px] border-Green border-solid rounded-[8px] flex hover:cursor-pointer" onClick = {() => displayOption === true ? setDisplayOption(false) : setDisplayOption(true)}>
                                {/* customer info */}
                                <div className = "ml-[1rem] w-[30%]">
                                    <p className = "text-base text-Green font-bold">Customer information</p>
                                    <p className = "text-base">Customer name: {ticketSummary.passengerTitle === 0 ? `Mr. ${ticketSummary.firstName} ${ticketSummary.lastName}` : `Ms. ${ticketSummary.firstName} ${ticketSummary.lastName}`}</p>
                                    <p className = "text-base">Date of birth: {ticketSummary.passengerDOB.substring(0,10)}</p>
                                    <p className = "text-base">Email: {ticketSummary.contactEmail}</p>
                                    <p className = "text-base">Phone number: {ticketSummary.phoneNumber}</p>
                                </div>

                                {/* boundaries */}
                                <div className = "bg-gray-500 w-[0.01rem] h-[24vw] mt-[2rem] ml-[8%]"></div>

                                {/* journey info */}
                                <div className = "">
                                    <p className = "text-base text-Green font-bold ml-[1.5rem]">Journey information</p>
                                    <div className = "flex relative bottom-[1rem] ml-[1.5rem]">
                                        {/* from flight */}
                                        <div>
                                            <p className = "text-sm text-Green font-bold">{`${reservation.flightInfo.fromAirport.city.name} (${reservation.flightInfo.fromAirport.iata}), ${reservation.flightInfo.fromAirport.city.country}`}</p>
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
                                            <p className = "text-sm text-Green font-bold">{`${reservation.flightInfo.toAirport.city.name} (${reservation.flightInfo.toAirport.iata}), ${reservation.flightInfo.toAirport.city.country}`}</p>
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
                                        <div className = "ml-[6.5rem] relative bottom-[1rem]">
                                            <p className = {ticketSummary.class === 0 ? "text-[60px] text-Green font-bold text-center" : "text-[60px] text-golden font-bold text-center"}>{ticketSummary.seatPosition}</p>
                                            {ticketSummary.class === 0 ? 
                                                <p className = "text-4xl text-Green font-bold relative bottom-[3rem] right-[0rem]">Economy</p> : 
                                                <p className = "text-4xl text-golden font-bold relative bottom-[3rem] right-[0rem]">Business</p>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* option */}
                            {displayOption === true && 
                                <div className = "flex mt-[0.5rem] ml-[43vw]">
                                    <button className = "bg-red-500 text-white w-[8vw] h-[2.5rem] rounded-[7px] text-base font-bold border-white hover:cursor-pointer">Cancel</button>
                                    <button className = "bg-golden text-white w-[8vw] h-[2.5rem] rounded-[7px] text-base font-bold border-white ml-[1rem] hover:cursor-pointer">Upgrade seat</button>
                                    <button className = "bg-golden text-white w-[8vw] h-[2.5rem] rounded-[7px] text-base font-bold border-white ml-[1rem] hover:cursor-pointer">Check in</button>
                                </div>
                            }
                        </>
                    )
                })
            })}
        </div>
    </Layout>
  )
}

export default CheckInManagement