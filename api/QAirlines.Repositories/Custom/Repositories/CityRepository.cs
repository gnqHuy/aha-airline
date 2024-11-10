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
    }
}
