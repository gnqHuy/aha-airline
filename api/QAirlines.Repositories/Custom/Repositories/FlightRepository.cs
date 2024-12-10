using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models;
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

        //public async Task<IEnumerable<Flight>> GetFlightsFromDepartureCity(Guid cityId)
        //{
        //    var flights = await _context.Flights
        //        .Where(flight => flight.Departure.CityId == cityId)
        //        .ToListAsync();

        //    return flights;
        //}

        //public async Task<IEnumerable<Flight>> GetFlightsToArrivalCity(Guid cityId)
        //{
        //    var flights = await _context.Flights
        //        .Where(flight => flight.Arrival.CityId == cityId)
        //        .ToListAsync();

        //    return flights;
        //}

        //public async Task<IEnumerable<Flight>> GetFlightsFromTerminalInfo(Guid departureId, Guid arrivalId)
        //{
        //    var flights = await _context.Flights
        //        .Include(flight => flight.Departure) // eager loading
        //        .Include(flight => flight.Arrival)
        //        .Where(flight => flight.Departure.CityId == departureId 
        //            && flight.Arrival.CityId == arrivalId)
        //        .ToListAsync();

        //    return flights;
        //}

        //public async Task<Flight> GetFlightByTicket(Guid ticketId)
        //{
        //    var flight = await _context.Flights
        //        .Include(flight => flight.Tickets)
        //        .FirstOrDefaultAsync(flight => flight.Tickets.Any(ticket => ticket.Id == ticketId));
        //    return flight;
        //}
    }
}
