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
    public class SeatRepository : GenericRepository<Seat, Guid>, ISeatRepository
    {
        public SeatRepository(QAirlineDbContext context) : base(context) { }

        public async Task<Seat> GetByPosition(Guid aircraftId, int number)
        {
            var seat = await _context.Seats
                .FirstOrDefaultAsync(x => x.AircraftId == aircraftId && x.Number == number);

            return seat;
        }

        public void ResetAvailability()
        {
            var seats = _context.Seats.ToList();

            foreach (var seat in seats)
            {
                seat.IsAvaiable = true;
            }
        }
    }
}
