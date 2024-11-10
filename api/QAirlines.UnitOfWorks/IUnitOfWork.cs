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
        public ICityRepository Citys { get; }
        public ICountryRepository Countrys { get; }
        public IFlightRepository Flights { get; }
        public int Commit();
    }
}
