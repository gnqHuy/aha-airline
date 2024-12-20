using QAirlines.DataAccess.DbContext;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Custom.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.UnitOfWorks
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly QAirlineDbContext _context;
        public IAircraftRepository Aircrafts {  get; private set; }
        public IAirportRepository Airports { get; private set; }
        public ICancellationRepository Cancellations { get; private set; }
        public ICityRepository Cities { get; private set; }
        public ICountryRepository Countries { get; private set; }
        public IFlightRepository Flights { get; private set; }
        public IFlightRouteRepository FlightRoutes { get; private set; }
        public IRefreshTokenRepository RefreshTokens { get; private set; }
        public IApplicationUserRepository ApplicationUsers { get; private set; }
        public ISeatRepository Seats { get; private set; }
        public ITicketRepository Tickets { get; private set; }
        public IReservationRepository Reservations { get; private set; }

        public UnitOfWork(QAirlineDbContext context)
        {
            _context = context;
            Aircrafts = new AircraftRepository(context);
            Airports = new AirportRepository(context);
            Cancellations = new CancellationRepository(context);
            Cities = new CityRepository(context);
            Countries = new CountryRepository(context);
            Flights = new FlightRepository(context);
            FlightRoutes = new FlightRouteRepository(context);
            RefreshTokens = new RefreshTokenRepository(context);
            ApplicationUsers = new ApplicationUserRepository(context);
            Seats = new SeatRepository(context);
            Tickets = new TicketRepository(context);
            Reservations = new ReservationRepository(context);
        }

        public int Commit()
        {
            return _context.SaveChanges();
        }

        public void Dispose() 
        {
            _context.Dispose();
        }
    }
}
