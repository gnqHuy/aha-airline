using QAirlines.Models.Base;
using QAirlines.Models.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models
{
    public class Seat : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public Guid AircraftId { get; set; }
        public int Number { get; set; }
        public string Position { get; set; }
        public SeatClass Class {  get; set; }
        public bool IsAvaiable { get; set; }
        public virtual Aircraft? Aircraft { get; set; }
        public virtual Ticket? Ticket { get; set; }
    }
}
