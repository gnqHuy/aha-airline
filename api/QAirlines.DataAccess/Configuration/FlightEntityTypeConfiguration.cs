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
    public class FlightEntityTypeConfiguration : IEntityTypeConfiguration<Flight>
    {
        public void Configure (EntityTypeBuilder<Flight> builder) 
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.AircraftId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("aircraft_id");

            builder.Property(e => e.FlightRouteId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("flight_route");

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

            builder.Property(e => e.Status)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("status");

            builder.Property(e => e.BoardingGate)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("boarding_gate");

            builder.Property(e => e.EconomyPrice)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("economy_price");

            builder.Property(e => e.BusinessPrice)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("business_price");

            builder.HasOne(e => e.Aircraft)
                .WithMany(a => a.Flights)
                .HasForeignKey(e => e.AircraftId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(e => e.FlightRoute)
                .WithMany(fr => fr.Flights)
                .HasForeignKey(e => e.FlightRouteId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.ToTable("flights");
        }
    }
}
