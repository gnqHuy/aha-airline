using QAirlines.Models;
using QAirlines.Models.Request;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Interfaces
{
    public interface ITicketRepository : IGenericRepository<Ticket,  Guid>
    {
        bool IsCodeDuplicated(string ticketCode);
        IEnumerable<Ticket> GetByReservationCode(string reservationCode);
    }
}
