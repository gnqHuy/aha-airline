using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models;
using QAirlines.Models.Enums;
using QAirlines.Models.Request;
using QAirlines.Models.Response;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Repositories
{
    public class FlightRepository : GenericRepository<Flight, Guid>, IFlightRepository
    {
        public FlightRepository(QAirlineDbContext context) : base(context) { }
        public override async Task<IEnumerable<Flight>> GetPagedAsync(int pageSize, int pageNumber)
        {
            return await _context.Flights.OrderByDescending(f => f.ArrivalTime).Skip(pageNumber * pageSize).Take(pageSize).ToListAsync();
        }

        public async Task<Flight> GetCheapestByRouteId(Guid routeId)
        {
            var flight = await _context.Flights
                .Where(f => f.FlightRouteId == routeId)
                .OrderBy(f => f.EconomyPrice)
                .FirstOrDefaultAsync();

            return flight;
        }

        public async Task<IEnumerable<Flight>> GetFromRequest(FlightRequest request) 
        {
            var flights = await _context.Flights
                .Where(f => f.FlightRouteId == request.RouteId && f.DepartureTime.Date.Equals(request.DepartTime.Date))
                .ToListAsync();

            return flights;
        }

        public async Task<IEnumerable<Flight>> GetFromAircraftAndRoute(Guid aircraftId, Guid routeId)
        {
            var flights = await _context.Flights
                .Where(f => f.FlightRouteId == routeId && f.AircraftId == aircraftId)
                .ToListAsync();

            return flights;
        }
        public async Task<IEnumerable<Flight>> GetExpiredFlights(DateTime now)
        {
            return await _context.Flights
                .Where(f => f.DepartureTime < now && f.Status != FlightStatus.Cancelled)
                .ToListAsync();
        }
    }
}
