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

            builder.Property(e => e.UserId)
                .HasColumnType("char(36)")
                .HasColumnName("booker_id");

            builder.Property(e => e.FlightId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("flight_id");

            builder.Property(e => e.SeatId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("seat_id");

            builder.Property(e => e.ReservationId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("reservation_id");

            builder.Property(e => e.PassengerTitle)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("passenger_title");

            builder.Property(e => e.FirstName)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("first_name");

            builder.Property(e => e.LastName)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("last_name");

            builder.Property(e => e.PassengerDOB)
                .IsRequired()
                .HasColumnType("datetime(6)")
                .HasColumnName("passenger_dob");

            builder.Property(e => e.Status)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("status");

            builder.Property(e => e.ContactEmail)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("contact_email");

            builder.Property(e => e.PhoneNumber)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("phone_number");

            builder.HasOne(e => e.User)
                .WithMany(u => u.Tickets)
                .HasForeignKey(e => e.UserId)
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(e => e.Flight)
                .WithMany(f => f.Tickets)
                .HasForeignKey(e => e.FlightId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(e => e.Reservation)
                .WithMany(f => f.Tickets)
                .HasForeignKey(e => e.ReservationId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.ToTable("tickets");
        }
    }
}
