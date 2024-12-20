using QAirlines.Models.Domain_Objects;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Interfaces
{
    public interface IReservationRepository : IGenericRepository<Reservation, Guid>
    {
        bool IsCodeDuplicated(string reservationCode);

        Reservation GetByReservationCode(string reservationCode);
    }
}
