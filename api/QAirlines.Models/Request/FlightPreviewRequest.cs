using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Request
{
    public class FlightPreviewRequest
    {
        public string? FromAirportIATA { get; set; }
        public string? ToAirportIATA { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
}
