﻿using QAirlines.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Data_Transfer_Objects
{
    public class FlightDTO
    {
        public Guid Id { get; set; }
        public AircraftDTO Aircraft { get; set; }
        public FlightRouteDTO FlightRoute { get; set; }
        public DateTime BoardingTime { get; set; }
        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string BoardingGate { get; set; }
        public int RemainingBsnSeats { get; set; }
        public int RemainingEcoSeats { get; set; }
        public int EconomyPrice { get; set; }
        public int BusinessPrice { get; set; }
        public FlightStatus Status { get; set; }
    }
}
