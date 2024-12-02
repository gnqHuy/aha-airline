using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models;
using QAirlines.Models.Request;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Repositories
{
    public class FlightRouteRepository : GenericRepository<FlightRoute, Guid>, IFlightRouteRepository
    {
        public FlightRouteRepository(QAirlineDbContext context) : base(context) { }

        public IEnumerable<FlightRoute> FindRoutesFromRequest(FlightRouteRequest request)
        {
            var flightRoutes = _context.FlightRoutes.AsQueryable();

            if (!string.IsNullOrEmpty(request.FromAirportIATA))
            {
                flightRoutes = flightRoutes.Where(fr => fr.FromAirportIATA == request.FromAirportIATA);
            }

            if (!string.IsNullOrEmpty(request.ToAirportIATA))
            {
                flightRoutes = flightRoutes.Where(fr => fr.ToAirportIATA == request.ToAirportIATA);
            }

            return flightRoutes.ToList();
        }
    }
}
