using QAirlines.Models.Base;
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
        public Guid AirlinerId { get; set; }
        public int Number { get; set; }
        public string Class {  get; set; }
        public bool IsAvaiable { get; set; }
        public virtual Airliner? Airliner { get; set; }
        public virtual Ticket? Ticket { get; set; }
    }
}
