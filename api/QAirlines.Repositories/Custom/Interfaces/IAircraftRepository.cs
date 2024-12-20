﻿using QAirlines.Models;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Interfaces
{
    public interface IAircraftRepository : IGenericRepository<Aircraft, Guid>
    {
        IEnumerable<Aircraft> GetLargestAircrafts(int count);
        void UpdateAircrafts();
        void UpdateNoOfSeats();
        Task ResetAvailableTime();
    }
}
