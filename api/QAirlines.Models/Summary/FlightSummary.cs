using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Summary
{
    public class FlightSummary
    {
        public Guid Id { get; set; }
        public AircraftDTO Aircraft { get; set; }
        public AirportDTO FromAirport { get; set; }
        public AirportDTO ToAirport { get; set; }
        public DateTime BoardingTime { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        public FlightStatus Status { get; set; }
        public string BoardingGate { get; set; }
    }
}
