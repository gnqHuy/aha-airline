using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class City : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public Guid CountryId { get; set; }
        public string Name { get; set; }
        public virtual Country? Country { get; set; }
        public virtual ICollection<Airport> Airports { get; set; } = new List<Airport>();
    }
}
