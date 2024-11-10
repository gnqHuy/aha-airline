using QAirlines.Models;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Interfaces
{
    public interface IFlightRepository : IGenericRepository<Flight, Guid>
    {
        Task<IEnumerable<Flight>> GetFlightsFromDepartureCity(Guid cityId);
        Task<IEnumerable<Flight>> GetFlightsToArrivalCity(Guid cityId);
        Task<IEnumerable<Flight>> GetFlightsFromTerminalInfo(Guid departureId, Guid arrivalId);
        Task<Flight> GetFlightByTicket(Guid ticketId);
    }
}
