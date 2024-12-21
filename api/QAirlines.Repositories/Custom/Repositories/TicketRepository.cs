using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models;
using QAirlines.Models.Request;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Repositories
{
    public class TicketRepository : GenericRepository<Ticket, Guid>, ITicketRepository
    {
        public TicketRepository(QAirlineDbContext context) : base(context) { }

        public bool IsCodeDuplicated(string ticketCode)
        {
            var ticket = _context.Tickets.FirstOrDefault(x => x.TicketCode == ticketCode);

            if (ticket == null)
            {
                return false;
            }

            return true;
        }

        public async Task<IEnumerable<Ticket>> GetByTicketCodeAsync(string ticketCode)
        {
            var ticket = await _context.Tickets.Where(x => x.TicketCode == ticketCode).ToListAsync();

            return ticket;
        }

        public IEnumerable<Ticket> GetByReservationCode(string reservationCode)
        {
            var reservation = _context.Reservations
                .FirstOrDefault(x => x.ReservationCode.Trim().ToLower().Equals(reservationCode.Trim().ToLower()));

            var reservationId = reservation?.Id;

            if (reservation == null)
            {
                return null;
            }
            var ticket = _context.Tickets
                .Where(x => x.ReservationId.Equals(reservationId));

            return ticket;
        }

        public async Task<IEnumerable<Ticket>> GetByReservationCodeAsync(string reservationCode)
        {
            var reservation = await _context.Reservations
                .FirstOrDefaultAsync(x => x.ReservationCode.Trim().ToLower().Equals(reservationCode.Trim().ToLower()));

            var reservationId = reservation?.Id;

            if (reservation == null)
            {
                return null;
            }
            var ticket = _context.Tickets
                .Where(x => x.ReservationId.Equals(reservationId));

            return ticket.ToList();
        }
    }
}
