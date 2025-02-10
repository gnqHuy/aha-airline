using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models.Domain_Objects;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Repositories
{
    public class ReservationRepository : GenericRepository<Reservation, Guid>, IReservationRepository
    {
        public ReservationRepository(QAirlineDbContext context) : base(context) { }

        public bool IsCodeDuplicated(string reservationCode)
        {
            var reservation = _context.Reservations.FirstOrDefault(x => x.ReservationCode == reservationCode);

            if (reservation == null)
            {
                return false;
            }

            return true;
        }

        public Reservation GetByReservationCode(string reservationCode)
        {
            var reservation = _context.Reservations.FirstOrDefault(x => x.ReservationCode == reservationCode);
            return reservation;
        }

        public async Task<Reservation> GetByReservationCodeAsync(string reservationCode)
        {
            var reservation = await _context.Reservations.FirstOrDefaultAsync(x => x.ReservationCode == reservationCode);
            return reservation;
        }
    }
}
