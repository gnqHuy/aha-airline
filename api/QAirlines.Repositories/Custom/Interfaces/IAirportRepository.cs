﻿using QAirlines.Models;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Interfaces
{
    public interface IAirportRepository : IGenericRepository<Airport, Guid>
    {
        Task<IEnumerable<Airport>>GetByCountryName(string countryName);
        Airport GetByIATA(string iata);
        Task<IEnumerable<Airport>> GetByIATACodesAsync(IEnumerable<string> iataCodes);
        Task<Airport> GetByIATAAsync(string iata);
        Task<IEnumerable<Airport>> GetAirports();
    }
}
