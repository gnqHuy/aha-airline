using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models;
using QAirlines.Models.Enums;
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

        public Seat GetNextAvailableSeat(Guid aircraftId, SeatClass seatClass)
        {
            var seats = _context.Seats.Where(x => x.AircraftId == aircraftId).OrderBy(x => x.Number);

            foreach (var seat in seats)
            {
                if (seat.IsAvaiable && seat.Class == seatClass)
                {
                    seat.IsAvaiable = false;
                    return seat;
                }
            }
            return null;
        }

        public Seat UpgradeSeat(Guid aircraftId, Guid seatId)
        {
            var target = GetById(seatId);

            if (target.Class == SeatClass.Economy)
            {
                var seats = _context.Seats.Where(x => x.AircraftId == aircraftId).OrderBy(x => x.Number);
                target.IsAvaiable = true;

                foreach (var seat in seats)
                {
                    if (seat.IsAvaiable && seat.Class == SeatClass.Business)
                    {
                        seat.IsAvaiable = false;
                        return seat;
                    }
                }
            }

            return null;
        }

        public Seat CancelSeat(Guid seatId)
        {
            var seat = GetById(seatId);
            seat.IsAvaiable = false;

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
