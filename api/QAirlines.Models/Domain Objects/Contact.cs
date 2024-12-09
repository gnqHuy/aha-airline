using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Domain_Objects
{
    public class Contact : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string PhoneNumber { get; set; }
        public virtual List<Ticket> Tickets { get; set; } = new List<Ticket>();
    }
}
