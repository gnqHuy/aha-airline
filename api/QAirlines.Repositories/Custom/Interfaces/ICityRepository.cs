    using QAirlines.Models;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Interfaces
{
    public interface ICityRepository : IGenericRepository<City, Guid>
    {
        Task<IEnumerable<City>>GetByCountryName(string countryName);
        Task<City?> GetCityByIdAsync(Guid id);
        Task<bool> UpdateImageUrlAsync(Guid cityId, string imageUrl);


    }
}
