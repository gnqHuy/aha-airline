using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public async Task<City?> GetCityByIdAsync(Guid id)
        {
            return await _context.Cities.FirstOrDefaultAsync(c => c.Id == id);
        }
        public async Task<bool> UpdateImageUrlAsync(Guid cityId, string imageUrl)
        {
            var city = await _context.Cities.FindAsync(cityId);
            if (city == null)
                return false;

            city.ImageUrl = imageUrl;
            _context.Cities.Update(city);
            await _context.SaveChangesAsync();

            return true;
        }
            
    }
}
