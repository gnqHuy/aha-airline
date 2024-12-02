using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Request
{
    public class FlightRouteRequest
    {
        public string? FromAirportIATA {  get; set; }
        public string? ToAirportIATA { get; set; }
    }
}
