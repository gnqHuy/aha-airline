using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Request
{
    public class FlightPreviewRequest
    {
        public FlightRouteRequest? RouteInfo { get; set; }
        public int PageSize { get; set; }
        public int PageNumber { get; set; }
    }
}
