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
        public ICityRepository Citys { get; private set; }
        public ICountryRepository Countrys { get; private set; }
        public IFlightRepository Flights { get; private set; }

        public UnitOfWork(QAirlineDbContext context)
        {
            _context = context;
            Aircrafts = new AircraftRepository(context);
            Airports = new AirportRepository(context);
            Cancellations = new CancellationRepository(context);
            Citys = new CityRepository(context);
            Countrys = new CountryRepository(context);
            Flights = new FlightRepository(context);
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
