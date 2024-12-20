using QAirlines.Models.Base;
using QAirlines.Models.Domain_Objects;
using QAirlines.Models.Enums;
using QAirlines.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class Ticket : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public string TicketCode { get; set; }
        public Guid? UserId { get; set; }
        public Guid FlightId { get; set; }
        public Guid SeatId { get; set; }
        public Guid ReservationId { get; set; }
        public PassengerTitle PassengerTitle { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime PassengerDOB { get; set; }
        public TicketStatus Status { get; set; }
        public string ContactEmail { get; set; }
        public string PhoneNumber { get; set; }
        public virtual ApplicationUser? User { get; set; }
        public virtual Flight? Flight { get; set; }
        public virtual Seat? Seat { get; set; }
        public virtual Reservation? Reservation { get; set; }
    }
}
