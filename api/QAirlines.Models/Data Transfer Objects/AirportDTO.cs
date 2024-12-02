using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Data_Transfer_Objects
{
    public class AirportDTO
    {
        public string IATA {  get; set; }
        public string Name { get; set; }
        public CityDTO City { get; set; }
    }
}
