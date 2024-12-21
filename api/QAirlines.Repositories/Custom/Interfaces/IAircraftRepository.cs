using QAirlines.Models;
using QAirlines.Models.Request;
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
        string AddAircraft(AircraftRequest aircraft);
        Aircraft GetByName(string name);
        void UpdateAircrafts();
        void UpdateNoOfSeats();
        Task ResetAvailableTime();
    }
}
