using QAirlines.Models;
using QAirlines.Models.Enums;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Interfaces
{
    public interface ISeatRepository : IGenericRepository<Seat, Guid>
    {
        Task<Seat> GetByPosition(Guid aircraftId, int number);
        Seat GetNextAvailableSeat(Guid aircraftId, SeatClass seatClass);
        Seat UpgradeSeat(Guid aircraftId, Guid seatId);
        Seat CancelSeat(Guid seatId);
        void ResetAvailability();
    }
}
