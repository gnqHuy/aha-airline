using QAirlines.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Request
{
    public class TicketRequest
    {
        public SeatClass Class { get; set; }
        public PassengerTitle PassengerTitle { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime PassengerDOB { get; set; }
        public string ContactEmail { get; set; }
        public string PhoneNumber { get; set; }
    }
}
