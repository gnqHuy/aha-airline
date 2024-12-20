using QAirlines.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Request
{
    public class AddTicketRequest
    {
        public Guid FlightId { get; set; }
        public Guid? BookerId { get; set; }
        public List<TicketRequest> Tickets { get; set; }
    }
}
