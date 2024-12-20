using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models.Domain_Objects;
using QAirlines.Models.Summary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Response
{
    public class AddTicketResponse
    {
        public bool IsSuccess { get; set; }
        public string Message { get; set; }
        public string? ReservationCode { get; set; }
        public Guid? UserId { get; set; }
        public FlightSummary FlightInfo { get; set; }
        public List<TicketSummary>? TicketSummaries { get; set; }
    }
}
