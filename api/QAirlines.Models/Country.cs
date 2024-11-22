using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class Country : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ISOcode { get; set; }
        public virtual ICollection<City> Cities { get; set; } = new List<City>();
    }
}
