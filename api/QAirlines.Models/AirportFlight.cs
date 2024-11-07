using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class AirportFlight
    {
        public Guid AirportId { get; set; }
        public Guid FlightId { get; set; }

        public virtual Flight? Flight { get; set; }
        public string Type { get; set; }
    }
}
