using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QAirlines.Models.User;
using Microsoft.EntityFrameworkCore;
using QAirlines.Models;

namespace QAirlines.DataAccess.DbContext
{
    public class QAirlineDbContext : IdentityDbContext<ApplicationUser, ApplicationRole, Guid>
    {
        public QAirlineDbContext(DbContextOptions<QAirlineDbContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfigurationsFromAssembly(typeof(IEntityTypeConfiguration<>).Assembly);
        }

        public int TenantId { get; set; }

        #region DbSets

        public DbSet<Airliner> Airliners { get; set; }
        public DbSet<Airport> Airports { get; set; }
        public DbSet<Cancellation> Cancellation { get; set; }
        public DbSet<Flight> Flights { get; set; }
        public DbSet<Passenger> Passengers { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Ticket> Tickets { get; set; }

        #endregion
    }
}
