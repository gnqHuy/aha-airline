using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class Cancellation : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public Guid TicketId { get; set; }
        public Guid PassengerId { get; set; }
        public DateTime Time { get; set; }
        public virtual Ticket? Ticket { get; set; }
    }
}
