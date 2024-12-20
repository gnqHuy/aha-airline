using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Domain_Objects
{
    public class Reservation : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public string ReservationCode { get; set; }
        public virtual List<Ticket> Tickets { get; set; }
    }
}
