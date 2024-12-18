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
    public interface IFlightRouteRepository : IGenericRepository<FlightRoute, Guid>
    {
        Task<IEnumerable<FlightRoute>> FindRoutesFromRequest(FlightRouteRequest request);
        IEnumerable<FlightRoute> FindPagedRoutesFromRequest(FlightRouteRequest request, int pageSize = 9, int pageNumber = 0);
        IEnumerable<FlightRoute> FindMostPopularRoutes(int pageSize = 9, int pageNumber = 0);
        Task<FlightRoute> UpdateNoOfFlights(FlightRouteRequest request, int amount);
    }
}
