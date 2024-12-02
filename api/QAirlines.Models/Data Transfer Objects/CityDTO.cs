using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Data_Transfer_Objects
{
    public class CityDTO
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Country { get; set; }
    }
}
