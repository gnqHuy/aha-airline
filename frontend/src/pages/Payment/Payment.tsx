import React, { useEffect, useState } from "react";
import Layout1 from "../../components/Layout/Layout1";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useFlightContext } from "../../context/FlightContext/FlightContext";
import ElectronicTicket from "../../components/ElectronicTicket/ElectronicTicket";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { AddTickets } from "../../api/ticket";
import { FlightTicketResponse } from "../../object/reponseTicketData";

type Props = {};

const Payment: React.FC<Props> = () => {
  const { flightTickets, flightTicketsRound, roundTrip } = useFlightContext();
  const [responseTicketData, setResponseTicketData] = useState<FlightTicketResponse | null>(null);
  const [responseTicketData1, setResponseTicketData1] = useState<FlightTicketResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(flightTickets);
        const response = await AddTickets(flightTickets);
        setResponseTicketData(response.data);   

        if (roundTrip) {
          const response1 = await AddTickets(flightTicketsRound);
          setResponseTicketData1(response1.data);
          console.log(response1.data);
        }    
      } catch (err) {
        setError("Failed to load response data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

      // Render both tickets for round trip or just one ticket if it's one way
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
          className="my-auto px-6 py-2 text-golden text-base cursor-pointer border-golden font-semibold hover:bg-golden hover:text-white rounded-md"
        >
          Confirm and Print Ticket
        </button>
      </div>
    </Layout1>
  );
};

export default Payment;
