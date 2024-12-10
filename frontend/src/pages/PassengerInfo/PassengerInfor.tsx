import React, { useState } from "react";
import { useFlightContext } from "../../context/FlightContext/FlightContext";
import { useTicket } from "../../context/TicketContext/TicketContext";
import PassengerForm from "../../components/PassengerForm/PassengerForm";
import { useBookedTicket } from "../../context/BookedTicket/BookedTicket";
import { BookedTicket } from "../../object/ticket/ticket";
import Layout1 from "../../components/Layout/Layout1";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";

type Props = {};

const PassengerInfor: React.FC<Props> = () => {
  const { selectedPassenger } = useFlightContext();
  const { adults, children, infants } = selectedPassenger;
  const { selectedClass, selectedTicket } = useTicket();
  const { addBookedTicket } = useBookedTicket();
  const navigate = useNavigate();

  const [passengerData, setPassengerData] = useState(
    Array(adults + children + infants).fill({
      title: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email:"",
      phone:"",
    })
  );

  if (!selectedTicket) {
    return <div>
            <Layout>
                <div className="text-center text-red-500 text-2xl pt-4">
                    No flight has been selected, or the flight details are incomplete. <br/> Please return to select your flight.
                </div>
            </Layout>
        </div>;
  }

  const handlePassengerChange = (index: number, passenger: any) => {
    const updatedPassengerData = [...passengerData];
    updatedPassengerData[index] = passenger;
    setPassengerData(updatedPassengerData);
  };

  const handleConfirm = () => {
    const allFieldsFilled = passengerData.every((passenger) => 
      passenger.title &&
      passenger.firstName &&
      passenger.lastName &&
      passenger.dateOfBirth &&
      passenger.email &&
      passenger.phone
    );
  
    if (!allFieldsFilled) {
      alert("Please fill out all the fields before continuing.");
      return;
    }
  
    const classType: "Economy" | "Business" =
      selectedClass === "Economy" || selectedClass === "Business"
        ? selectedClass
        : "Economy";
  
    passengerData.forEach((passenger, index) => {
      const price =
        selectedClass === "Economy"
          ? selectedTicket.economyPrice
          : selectedTicket.businessPrice;
  
      const newBookedTicket: BookedTicket = {
        aircraft: selectedTicket.aircraft,
        fromIATA: selectedTicket.fromIATA,
        toIATA: selectedTicket.toIATA,
        fromAirportName: selectedTicket.fromAirportName,
        toAirportName: selectedTicket.toAirportName,
        fromTime: selectedTicket.fromTime,
        toTime: selectedTicket.toTime,
        classType: classType,
        price: price,
        title: passenger.title,
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        dateOfBirth: passenger.dateOfBirth ? new Date(passenger.dateOfBirth) : new Date(),
        email: passenger.email,
        phone: passenger.phone,
      };
  
      addBookedTicket(newBookedTicket);
    });
  
    alert("Tickets booked successfully!");
    navigate("payment");
  };  

  return (
    <>
      <Layout1>
      <div className="text-2xl font-bold text-center text-gray-800 mb-6 pt-6">Enter Your Information</div>
      <div className="bg-slate-50">
        {[...Array(adults)].map((_, index) => (
          <PassengerForm
            key={`adult-${index}`}
            passengerType="adult"
            onPassengerChange={(passenger) =>
              handlePassengerChange(index, passenger)
            }
          />
        ))}
        {[...Array(children)].map((_, index) => (
          <PassengerForm
            key={`child-${index}`}
            passengerType="child"
            onPassengerChange={(passenger) =>
              handlePassengerChange(adults + index, passenger)
            }
          />
        ))}
        {[...Array(infants)].map((_, index) => (
          <PassengerForm
            key={`infant-${index}`}
            passengerType="infant"
            onPassengerChange={(passenger) =>
              handlePassengerChange(adults + children + index, passenger)
            }
          />
        ))}
        <div className="w-[70%] mx-auto text-center mt-4 pb-10">
          <button
            onClick={handleConfirm}
            className="my-auto px-6 py-2 text-golden text-base cursor-pointer border-golden font-semibold hover:bg-golden hover:text-white rounded-md"
          >
            Confirm and continue
          </button>
        </div>
      </div>
      </Layout1>
    </>
  );
};

export default PassengerInfor;
