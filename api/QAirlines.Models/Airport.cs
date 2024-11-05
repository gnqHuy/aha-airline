using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class Airport : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string AirportCode {  get; set; }
        public virtual ICollection<Flight> Flights { get; set; }
    }
}
