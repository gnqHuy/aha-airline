using QAirlines.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Request
{
    public class AircraftRequest
    {
        public Guid? Id { get; set; }
        public string Name { get; set; }
        public string Model { get; set; }
        public string Manufacturer { get; set; }
        public int NoOfSeats { get; set; }
        public AircraftStatus Status { get; set; }
        public string Terminal { get; set; }
        public DateTime? AvailableAt { get; set; }
    }
}
