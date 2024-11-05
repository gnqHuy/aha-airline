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
    internal class FlightEntityTypeConfiguration : IEntityTypeConfiguration<Flight>
    {
        public void Configure (EntityTypeBuilder<Flight> builder) 
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.AirlinerId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("airliner_id");

            builder.Property(e => e.DepartureId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("departure_id");

            builder.Property(e => e.DestinationId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("destination_id");

            builder.Property(e => e.BoardingTime)
                .IsRequired()
                .HasColumnType("datetime")
                .HasColumnName("boarding_time");

            builder.Property(e => e.DepartureTime)
                .IsRequired()
                .HasColumnType("datetime(6)")
                .HasColumnName("departure_time");

            builder.Property(e => e.ArrivalTime)
                .IsRequired()
                .HasColumnType("datetime(6)")
                .HasColumnName("arrival_time");

            builder.Property(e => e.NoOfSeats)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("no_of_seats");

            builder.Property(e => e.Status)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("status");

            builder.HasOne(e => e.Airliner)
                .WithMany(a => a.Flights)
                .HasForeignKey(e => e.AirlinerId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(e => e.Departure)
                .WithMany(d => d.Flights)
                .HasForeignKey(e => e.DepartureId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(e => e.Destination)
                .WithMany(d => d.Flights)
                .HasForeignKey(e => e.DestinationId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.ToTable("flights");
        }
    }
}
