using QAirlines.Models.Base;
using QAirlines.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class Passenger : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public Guid BookerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public virtual ApplicationUser? Booker { get; set; }
        public virtual ICollection<Ticket> Tickets { get; set; } = new List<Ticket>();
    }
}
