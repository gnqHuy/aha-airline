using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Data_Transfer_Objects
{
    public class FlightRouteDTO
    {
        public Guid Id { get; set; }
        public string FromAirportIATA { get; set; }
        public string ToAirportIATA { get; set; }
        public AirportDTO FromAirport { get; set; }
        public AirportDTO ToAirport { get; set; }
        public int NoOfFlights { get; set; }
        public double? Distance {  get; set; } 
    }
}
