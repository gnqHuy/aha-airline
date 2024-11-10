using QAirlines.Models.Base;
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

        [ForeignKey(nameof(Departure))]
        public Guid DepartureId { get; set; }

        [ForeignKey(nameof(Arrival))]
        public Guid ArrivalId { get; set; }

        public DateTime BoardingTime { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        public int NoOfSeats { get; set; }
        public string Status { get; set; }
        public virtual Aircraft? Aircraft { get; set; }
        public virtual Airport? Departure { get; set; }
        public virtual Airport? Arrival { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();

    }
}
