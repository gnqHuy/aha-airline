using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QAirlines.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.DataAccess.Configuration
{
    public class TicketEntityTypeConfiguration : IEntityTypeConfiguration<Ticket>
    {
        public void Configure (EntityTypeBuilder<Ticket> builder) 
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.PassengerId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("passenger_id");

            builder.Property(e => e.FlightId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("flight_id");

            builder.Property(e => e.SeatId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("seat_id");

            builder.Property(e => e.Status)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("status");

            builder.HasOne(e => e.Flight)
                .WithMany(f => f.Tickets)
                .HasForeignKey(e => e.FlightId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(e => e.Passenger)
                .WithMany(p => p.Tickets)
                .HasForeignKey(e => e.PassengerId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.ToTable("tickets");
        }
    }
}
