using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class Airport : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public Guid CityId { get; set; }
        public string Name { get; set; }
        public string AirportCode {  get; set; }

        [InverseProperty(nameof(Flight.Departure))]
        public virtual ICollection<Flight> DepartureFlights { get; set; } = new List<Flight>();

        [InverseProperty(nameof(Flight.Arrival))]
        public virtual ICollection<Flight> ArrivalFlights { get; set; } = new List<Flight>();
        public virtual City? City { get; set; }
    }
}
