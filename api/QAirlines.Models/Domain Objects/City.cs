using Microsoft.EntityFrameworkCore;
using QAirlines.Models.Base;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class City : IEntity<Guid>
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Country { get; set; }

        public virtual ICollection<Airport> Airports { get; set; } = new List<Airport>();

        public string? ImageUrl { get; set; }
    }
}
