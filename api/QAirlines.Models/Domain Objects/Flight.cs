using QAirlines.Models.Base;
using QAirlines.Models.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class Flight : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public Guid AircraftId { get; set; }
        public Guid FlightRouteId { get; set; }
        public DateTime BoardingTime { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        public FlightStatus Status { get; set; }
        public string BoardingGate { get; set; }
        public int EconomyPrice { get; set; }
        public int BusinessPrice { get; set; }
        public int? RemainingSeats { get; set; }
        public virtual Aircraft? Aircraft { get; set; }
        public virtual FlightRoute? FlightRoute { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();

    }
}
