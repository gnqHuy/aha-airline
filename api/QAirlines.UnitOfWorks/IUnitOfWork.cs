using QAirlines.Repositories.Custom.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.UnitOfWorks
{
    public interface IUnitOfWork : IDisposable
    {
        public IAircraftRepository Aircrafts { get; }
        public IAirportRepository Airports { get; }
        public ICancellationRepository Cancellations { get; }
        public ICityRepository Cities { get; }
        public ICountryRepository Countries { get; }
        public IFlightRepository Flights { get; }
        public IFlightRouteRepository FlightRoutes { get; }
        public IRefreshTokenRepository RefreshTokens { get; }
        public IApplicationUserRepository ApplicationUsers { get; }
        public ISeatRepository Seats { get; }
        public ITicketRepository Tickets { get; }
        public IReservationRepository Reservations { get; }
        public int Commit();
    }
}
