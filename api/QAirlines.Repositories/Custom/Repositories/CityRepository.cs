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
    public class CityRepository : GenericRepository<City, Guid>, ICityRepository
    {
        public CityRepository(QAirlineDbContext context) : base(context) { }

        public async Task<IEnumerable<City>> GetByCountryName(string countryName)
        {
            var cities = await _context.Cities
                .Where(city => city.Country.Trim().ToLower().Equals(countryName.Trim().ToLower()))
                .ToListAsync();
            return cities;
        }
    }
}
