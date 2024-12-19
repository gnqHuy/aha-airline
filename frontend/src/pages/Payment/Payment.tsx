import React from 'react';
import Layout1 from '../../components/Layout/Layout1';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useBookedTicket } from '../../context/BookedFlight/BookedFlight';
import ElectronicTicket from '../../components/ElectronicTicket/ElectronicTicket';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';

type Props = {};

const Payment: React.FC<Props> = () => {
  const { bookedTickets } = useBookedTicket();
  const navigate = useNavigate();
  if (!bookedTickets) {
    return <div>
            <Layout>
                <div className="text-center text-red-500 text-2xl pt-4">
                    No flight has been selected, or the flight details are incomplete. <br/> Please return to select your flight.
                </div>
            </Layout>
        </div>;
  }

  const generatePDFs = () => {
    bookedTickets.forEach((bookedTicket, index) => {
      const ticketElement = document.createElement('div');
      ticketElement.id = `ticket-${index}`;
      document.body.appendChild(ticketElement);

      ReactDOM.render(
        <ElectronicTicket bookedTicket={bookedTicket} />,
        ticketElement
      );

      html2canvas(ticketElement).then((canvas) => {
        const doc = new jsPDF();
        const imgData = canvas.toDataURL('image/png');
        const pageWidth = doc.internal.pageSize.width;

        doc.addImage(
          imgData,
          'PNG',
          10,
          10,
          pageWidth - 20,
          (canvas.height / canvas.width) * (pageWidth - 20)
        );

        doc.save(`ticket-${bookedTicket.firstName + 1}.pdf`);

        ReactDOM.unmountComponentAtNode(ticketElement);
        document.body.removeChild(ticketElement);
      });
    });
    navigate("/");
  };

  return (
    <Layout1>
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 mt-0 pt-4">
        Check Your Ticket's Information
      </h1>
      {bookedTickets.map((bookedTicket, index) => (
        <div id={`ticket-content-${index}`} key={index}>
          <ElectronicTicket bookedTicket={bookedTicket} />
        </div>
      ))}

      <div className="w-[70%] mx-auto text-center mt-4 pb-10">
        <button
          onClick={generatePDFs}
          className="my-auto px-6 py-2 text-golden text-base cursor-pointer border-golden font-semibold hover:bg-golden hover:text-white rounded-md"
        >
          Confirm and Book Ticket
        </button>
      </div>
    </Layout1>
  );
};

export default Payment;
