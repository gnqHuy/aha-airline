import React, { useEffect, useState } from "react";
import Layout1 from "../../layout/Layout1";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ElectronicTicket from "../../components/ElectronicTicket/ElectronicTicket";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import { AddTickets } from "../../api/ticket";
import { FlightTicketResponse } from "../../object/reponseTicketData";
import { useBookingTicket } from "../../store/hooks/useBookingTicket";
import { useAuth } from "../../store/hooks/useAuth";

type Props = {};

const Payment: React.FC<Props> = () => {
  const {user} = useAuth();
  const { responseTicketData, responseTicketData1, flightTickets, roundTrip, selectedFlight, flightTicketsRound, selectedFlightRound, setFlightTicketsId, createTickets } = useBookingTicket();
  const navigate = useNavigate();

  useEffect(() => {
    createTickets(user?.id);
  }, [flightTickets, flightTicketsRound]);

  if (!flightTickets || flightTickets.tickets.length === 0) {
    return (
      <Layout>
        <div className="text-center text-red-500 text-2xl pt-4">
          No flight has been selected, or the flight details are incomplete.
          <br /> Kindly return and choose your flight to proceed.
        </div>
      </Layout>
    );
  }

  const generatePDFs = () => {
    responseTicketData?.ticketSummaries.forEach((ticket, index) => {
      const ticketElement = document.createElement("div");
      ticketElement.id = `ticket-${index}`;
      document.body.appendChild(ticketElement);
      
      if (roundTrip) {
        ReactDOM.render(
          <>
            <ElectronicTicket ticketSummary={ticket} flightInfo={responseTicketData.flightInfo}  reservation={responseTicketData.reservationCode}/>
            <ElectronicTicket ticketSummary={ticket} flightInfo={responseTicketData1?.flightInfo!} reservation={responseTicketData1?.reservationCode!}/>
          </>,
          ticketElement
        );
      } else {
        ReactDOM.render(
          <ElectronicTicket ticketSummary={ticket} flightInfo={responseTicketData.flightInfo} reservation={responseTicketData.reservationCode}/>,
          ticketElement
        );
      }

      html2canvas(ticketElement).then((canvas) => {
        const doc = new jsPDF();
        const imgData = canvas.toDataURL("image/png");
        const pageWidth = doc.internal.pageSize.width;
        
        const imgHeight = (canvas.height / canvas.width) * (pageWidth - 20);

        doc.addImage(imgData, "PNG", 10, 10, pageWidth - 20, imgHeight);

        doc.save(`ticket-${ticket.firstName}-${index + 1}.pdf`);

        ReactDOM.unmountComponentAtNode(ticketElement);
        document.body.removeChild(ticketElement);
      });
    });
  };

  const handleClickConfirm = async () => {
    generatePDFs();
    navigate("/");
  };

  return (
    <Layout1>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-0 pt-4">
        Check Your Ticket's Information
      </h1>
      <p className="text-center text-xl mb-10">
        Please double-check your ticket details. If there are any discrepancies, kindly contact us immediately.
      </p>
      <div>
        {responseTicketData?.ticketSummaries.map((ticket, index) => (
          <div id={`ticket-content-${index}`} key={index}>
            <ElectronicTicket ticketSummary={ticket} flightInfo={responseTicketData.flightInfo} reservation={responseTicketData.reservationCode}/>
          </div>
        ))}
      </div>
      {roundTrip && responseTicketData1?.ticketSummaries && (
        <div>
          {responseTicketData1?.ticketSummaries.map((ticket, index) => (
            <div id={`ticket-content-${index}`} key={index}>
              <ElectronicTicket ticketSummary={ticket} flightInfo={responseTicketData1.flightInfo} reservation={responseTicketData1.reservationCode}/>
            </div>
          ))}
        </div>
      )}
      <div className="w-[70%] mx-auto text-center mt-4 pb-10">
        <button
          onClick={handleClickConfirm}
          className="my-auto px-6 py-2 text-ahaAmber-2 text-base cursor-pointer border-ahaAmber-2 font-semibold hover:bg-ahaAmber-2 hover:text-white rounded-md"
        >
          Confirm and Print Ticket
        </button>
      </div>
    </Layout1>
  );
};

export default Payment;
