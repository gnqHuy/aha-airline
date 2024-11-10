using QAirlines.Models;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Interfaces
{
    public interface ICountryRepository : IGenericRepository<Country, Guid>
    {
    }
}
