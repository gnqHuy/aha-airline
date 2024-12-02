using QAirlines.Models.Base;
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
        public Guid PassengerId { get; set; }
        public Guid FlightId { get; set; }
        public Guid SeatId { get; set; }
        public string BoardingGate  { get; set; }
        public string Status { get; set; }
        public virtual Flight? Flight { get; set; }
        public virtual Seat? Seat { get; set; }
        public virtual Cancellation? Cancellation { get; set; }
        public virtual Passenger Passenger { get; set; }
    }
}
