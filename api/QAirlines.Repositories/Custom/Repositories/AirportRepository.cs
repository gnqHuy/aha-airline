using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Repositories
{
    public class AirportRepository : GenericRepository<Airport, Guid>, IAirportRepository
    {
        public AirportRepository(QAirlineDbContext context) : base(context) { }

        public async Task<IEnumerable<Airport>> GetByCountryName(string countryName)
        {
            var airports = await _context.Airports
            .Join(_context.Cities,
                  airport => airport.CityId,
                  city => city.Id,
                  (airport, city) => new { Airport = airport, City = city })
            .Where(ac => ac.City.Country.Trim().ToLower().Equals(countryName.Trim().ToLower()))
            .Select(ac => ac.Airport)
            .ToListAsync();
            return airports;
        }

        public Airport GetByIATA(string iata)
        {
            var airport = _context.Airports.Find(iata);
            return airport;
        }

        public async Task<IEnumerable<Airport>> GetByIATACodesAsync(IEnumerable<string> iataCodes)
        {
            return await _context.Airports
                .Where(a => iataCodes.Contains(a.IATA))
                .ToListAsync();
        }

        public async Task<Airport> GetByIATAAsync(string iata)
        {
            var airport = await _context.Airports.FindAsync(iata);
            return airport;
        }

        public async Task<IEnumerable<Airport>>GetAirports()
        {
            var airports = await _context.Airports.Include(airport => airport.City).ToListAsync();
            return airports;
        }
    }
}
