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
    public class AircraftRepository : GenericRepository<Aircraft, Guid>, IAircraftRepository
    {
        public AircraftRepository(QAirlineDbContext context) : base(context) { }

        public IEnumerable<Aircraft> GetLargestAircrafts(int count)
        {
            return _context.Aircrafts.OrderByDescending(a => a.NoOfSeats).Take(count).ToList();
        }
    }
}
