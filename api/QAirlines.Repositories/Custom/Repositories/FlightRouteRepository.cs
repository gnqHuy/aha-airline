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

        public async Task<IEnumerable<FlightRoute>> FindRoutesFromRequestAsync(FlightRouteRequest request)
        {
            var flightRoutes = _context.FlightRoutes.AsQueryable();

            if (!string.IsNullOrEmpty(request.FromAirportIATA))
            {
                flightRoutes = flightRoutes.Where(fr => fr.FromAirportIATA.Trim().ToLower().Equals(request.FromAirportIATA.Trim().ToLower()));
            }

            if (!string.IsNullOrEmpty(request.ToAirportIATA))
            {
                flightRoutes = flightRoutes.Where(fr => fr.ToAirportIATA.Trim().ToLower().Equals(request.ToAirportIATA.Trim().ToLower()));
            }

            return await flightRoutes.ToListAsync();
        }

        public IEnumerable<FlightRoute> FindRoutesFromRequest(FlightRouteRequest request)
        {
            var flightRoutes = _context.FlightRoutes.AsQueryable();

            if (!string.IsNullOrEmpty(request.FromAirportIATA))
            {
                flightRoutes = flightRoutes.Where(fr => fr.FromAirportIATA.Trim().ToLower().Equals(request.FromAirportIATA.Trim().ToLower()));
            }

            if (!string.IsNullOrEmpty(request.ToAirportIATA))
            {
                flightRoutes = flightRoutes.Where(fr => fr.ToAirportIATA.Trim().ToLower().Equals(request.ToAirportIATA.Trim().ToLower()));
            }

            return flightRoutes.ToList();
        }

        public IEnumerable<FlightRoute> FindPagedRoutesFromRequest(FlightRouteRequest request, int pageSize = 9, int pageNumber = 0)
        {
            var flightRoutes = _context.FlightRoutes.AsQueryable();

            if (!string.IsNullOrEmpty(request.FromAirportIATA))
            {
                flightRoutes = flightRoutes.Where(fr => fr.FromAirportIATA.Trim().ToLower().Equals(request.FromAirportIATA.Trim().ToLower()));
            }

            if (!string.IsNullOrEmpty(request.ToAirportIATA))
            {
                flightRoutes = flightRoutes.Where(fr => fr.ToAirportIATA.Trim().ToLower().Equals(request.ToAirportIATA.Trim().ToLower()));
            }

            flightRoutes = flightRoutes.Skip(pageSize * pageNumber).Take(pageSize);

            return flightRoutes;
        }

        public IEnumerable<FlightRoute> FindMostPopularRoutes(int pageSize = 9, int pageNumber = 0)
        {
            var flightRoutes = _context.FlightRoutes
                .OrderBy(fr => fr.NoOfFlights)
                .Skip(pageSize * pageNumber)
                .Take(pageSize);

            return flightRoutes;
        }

        public async Task<FlightRoute> UpdateNoOfFlights(FlightRouteRequest request, int amount)
        {
            var flightRoutes = _context.FlightRoutes.AsQueryable();

            var flightroute = await flightRoutes.FirstOrDefaultAsync(
                fr => fr.FromAirportIATA.Trim().ToLower().Equals(request.FromAirportIATA.Trim().ToLower())
                && fr.ToAirportIATA.Trim().ToLower().Equals(request.ToAirportIATA.Trim().ToLower()));

            if (flightroute != null) 
            {
                flightroute.NoOfFlights += amount;
            }

            return flightroute;
        }
    }
}
