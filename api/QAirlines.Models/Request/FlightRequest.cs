using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Request
{
    public class FlightRequest
    { 
        public Guid FlightRouteId { get; set; }
        public DateTime DepartTime { get; set; }
    }
}
