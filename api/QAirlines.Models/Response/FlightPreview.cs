using QAirlines.Models.Data_Transfer_Objects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Response
{
    public class FlightPreview
    {
        public AirportDTO FromAirport { get; set; }
        public AirportDTO ToAirport { get; set; }
        public DateTime DepartureTime { get; set; }
        public int MinimumPrice { get; set; }
    }
}
