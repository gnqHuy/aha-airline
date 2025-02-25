using QAirlines.Models;
using QAirlines.Models.Request;
using QAirlines.Models.Response;
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
        //Task<IEnumerable<Flight>> GetFlightsFromDepartureCity(Guid cityId);
        //Task<IEnumerable<Flight>> GetFlightsToArrivalCity(Guid cityId);
        //Task<IEnumerable<Flight>> GetFlightsFromTerminalInfo(Guid departureId, Guid arrivalId);
        //Task<Flight> GetFlightByTicket(Guid ticketId);
        Task<IEnumerable<Flight>> GetPagedAsync(int pageSize, int pageNumber);
        Task<Flight> GetCheapestByRouteId(Guid routeId);
        Task<IEnumerable<Flight>> GetFromRequest(FlightRequest request);
        Task<IEnumerable<Flight>> GetFromAircraftAndRoute(Guid aircraftId, Guid routeId);
        Task<IEnumerable<Flight>> GetExpiredFlights(DateTime now);

    }
}
