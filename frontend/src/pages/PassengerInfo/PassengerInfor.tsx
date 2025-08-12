import React, { useState } from "react";
import PassengerForm from "../../components/PassengerForm/PassengerForm";
import LayoutBooking from "../../layout/LayoutBooking";
import { useNavigate } from "react-router-dom";
import LayoutDefault from "../../layout/LayoutDefault";
import { SeatClass } from "../../object/enum/SeatClass";
import { PassengerTitle } from "../../object/enum/PassengerTitle";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useBookingTicket } from "../../store/hooks/useBookingTicket";
import { useAuth } from "../../store/hooks/useAuth";

const PassengerInfor = () => {
  const { enqueueSnackbar } = useSnackbar();
  const {user} = useAuth();
  const { selectedPassenger, roundTrip, selectedFlight, selectedFlightClass, createTickets, addFlightTicket, addFlightTicketRound } = useBookingTicket();
  const { adults, children, infants } = selectedPassenger;
  const navigate = useNavigate();

  const [passengerData, setPassengerData] = useState(
    Array(adults + children + infants).fill({
      title: null as PassengerTitle | null,
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      phone: "",
    })
  );

  if (!selectedFlight) {
    return (
      <div>
        <LayoutDefault>
          <div className="text-center text-red-500 text-2xl pt-4">
            No flight has been selected, or the flight details are incomplete.
            <br /> Kindly return and choose your flight to proceed.
          </div>
        </LayoutDefault>
      </div>
    );
  }

  const handlePassengerChange = (index: number, passenger: any) => {
    const updatedPassengerData = [...passengerData];
    updatedPassengerData[index] = passenger;
    setPassengerData(updatedPassengerData);
  };

  const handleUpdateTicket = () => {
    const allFieldsFilled = passengerData.every(
      (passenger) =>
        passenger.title !== null &&
        passenger.firstName &&
        passenger.lastName &&
        passenger.dateOfBirth &&
        passenger.email &&
        passenger.phone
    );

    if (!allFieldsFilled) {
      enqueueSnackbar("Please fill out all the fields before continuing.", {variant: "warning"});
      return;
    }

    const classType: SeatClass =
      selectedFlightClass === SeatClass.Economy || selectedFlightClass === SeatClass.Business
        ? selectedFlightClass
        : SeatClass.Economy;

    passengerData.forEach((passenger) => {
      const ticket = {
        class: classType,
        passengerTitle: passenger.title as PassengerTitle,
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        passengerDOB: passenger.dateOfBirth,
        contactEmail: passenger.email,
        phoneNumber: passenger.phone,
      };
      addFlightTicket(ticket);
    });
  };

  const handleUpdateTicketRound = () => {
    const allFieldsFilled = passengerData.every(
      (passenger) =>
        passenger.title !== null &&
        passenger.firstName &&
        passenger.lastName &&
        passenger.dateOfBirth &&
        passenger.email &&
        passenger.phone
    );

    if (!allFieldsFilled) {
      enqueueSnackbar("Please fill out all the fields before continuing.", {variant: "warning"});
      return;
    }

    const classType: SeatClass =
      selectedFlightClass === SeatClass.Economy || selectedFlightClass === SeatClass.Business
        ? selectedFlightClass
        : SeatClass.Economy;

    passengerData.forEach((passenger) => {
      const ticket = {
        class: classType,
        passengerTitle: passenger.title as PassengerTitle,
        firstName: passenger.firstName,
        lastName: passenger.lastName,
        passengerDOB: passenger.dateOfBirth,
        contactEmail: passenger.email,
        phoneNumber: passenger.phone,
      };
      addFlightTicketRound(ticket);
    });
  };

  const handleConfirm = () => {
    handleUpdateTicket();
    if (roundTrip) {
      handleUpdateTicketRound();
    }
    createTickets(user?.id);
    enqueueSnackbar("Tickets booked successfully!", {variant: "success"});
    navigate("payment");
  }

  return (
    <>
      <LayoutBooking>
        <div className="text-4xl font-bold text-ahaAmber-2 text-center mb-8 pt-8">
          Enter Your Information
        </div>
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
          <div className="text-center mt-4 pb-10">
            <button
              onClick={handleConfirm}
              className="btn-primary"
            >
              Confirm and continue
            </button>
          </div>
        </div>
      </LayoutBooking>
    </>
  );
};

export default PassengerInfor;
