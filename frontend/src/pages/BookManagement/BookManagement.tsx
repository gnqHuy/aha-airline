import React from 'react'
import headerImage from "../../assets-test/Images/sunset4.jpg";
import { IoIosAirplane } from "react-icons/io";
import Layout from '../../components/Layout/Layout';

type Props = {}

const BookManagement = (props: Props) => {
    const SampleJourneys = [
        {
            fromDestination: "Hanoi (HAN)", 
            toDestination: "Bangkok (BKK)", 
            flightDate: "20/12/2024, 3:46",
            flightNumber: "VN 615", 
            freeBaggageAllowance: "1 item 23KG"
        }, 
        {
            fromDestination: "Bangkok (BKK)", 
            toDestination: "Osaka (KIX)", 
            flightDate: "20/12/2024, 3:50",
            flightNumber: "BK 618", 
            freeBaggageAllowance: "1 item 23KG"
        }
    ]
  return (
    <Layout headerImage = {headerImage}>
        <div className = "ml-[12vw]">
            <div className = "pt-[1rem]">
                <p className = "text-Green font-bold text-2xl">Booking Management</p>
            </div>
            <div className = "flex w-[80%] mt-[3rem]">
                <div className = "bg-gray-500 w-[40%] h-[0.01rem]"></div>
                <p className = "text-Green text-lg font-bold relative bottom-[2rem] ml-[2rem] w-[20%]">Customer information</p>
                <div className = "bg-gray-500 w-[40%] h-[0.01rem] ml-[2rem]"></div>
            </div>

            {/* info */}
            <div className = "w-[80%] mt-[0rem] bg-white border-[2px] border-Green border-solid rounded-[8px] flex">
                {/* customer info */}
                <div className = "ml-[2rem] mt-[1rem]">
                    <p className = "text-base font-bold">Customer name:</p>
                    <p className = "text-base font-bold">Reservation code:</p>
                    <p className = "text-base font-bold">Ticket number:</p>
                    <p className = "text-base font-bold">Email:</p>
                    <br/>
                    <p className = "text-base font-bold">Payment status: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Paid</p>
                    <p className = "text-base font-bold">Additional services: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [<span className = "underline text-Green">Detail</span>]</p>
                </div>

                {/* journey info */}
                <div className = "ml-[30%] mt-[1rem] w-[40%]">
                    {SampleJourneys.map((journey, index) => {
                        return (
                            <div className = "flex text-base">
                                <p className = "w-[30%]">{`Route ${index + 1}`}: </p>
                                <div className = "ml-[1rem]">
                                    <div className = "flex font-bold">
                                        <p className = "text-Green">{journey.fromDestination}</p>
                                        <IoIosAirplane style = {{color: "#1A4532"}} className = "mx-[1rem] mt-[1.2rem] w-[1.4rem] h-[1.4rem]"/>
                                        <p className = "text-Green">{journey.toDestination}</p>
                                    </div>
                                    <p className = "text-base relative bottom-[1.5rem]"><span className = "font-bold">Flight date: </span>{journey.flightDate}</p>
                                    <p className = "text-base relative bottom-[2rem]"><span className = "font-bold">Flight number: </span>{journey.flightNumber}</p>
                                    <p className = "text-base relative bottom-[2.5rem]"><span className = "font-bold">Free baggage allowance: </span>{journey.freeBaggageAllowance}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default BookManagement