using QAirlines.Models.Enums;
using QAirlines.Models.Summary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Data_Transfer_Objects
{
    public class TicketDTO
    {
        public Guid TicketId { get; set; }
        public string TicketCode { get; set; }
        public FlightSummary FlightInfo { get; set; }
        public Guid? BookerId { get; set; }
        public string? BookerFirstName { get; set; }
        public string? BookerLastName { get; set; }
        public string SeatNumber { get; set; }
        public SeatClass SeatClass { get; set; }
        public string ReservationCode { get; set; }
        public PassengerTitle PassengerTitle { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime PassengerDOB { get; set; }
        public TicketStatus Status { get; set; }
        public string ContactEmail { get; set; }
        public string PhoneNumber { get; set; }
    }
}
