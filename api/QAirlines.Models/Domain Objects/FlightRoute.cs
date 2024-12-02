using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class FlightRoute : IEntity<Guid>
    {
        public Guid Id { get; set; }

        [ForeignKey(nameof(FromAirport))]
        public string FromAirportIATA { get; set; }

        [ForeignKey(nameof(ToAirport))]
        public string ToAirportIATA { get; set; }

        public int NoOfFlights { get; set; }

        public virtual Airport? FromAirport { get; set; }

        public virtual Airport? ToAirport { get; set; }

        public virtual ICollection<Flight> Flights { get; set; } = new List<Flight>();

    }
}
