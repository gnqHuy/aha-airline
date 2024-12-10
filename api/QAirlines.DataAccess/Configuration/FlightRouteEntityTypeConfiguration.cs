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
    public class FlightRouteEntityTypeConfiguration : IEntityTypeConfiguration<FlightRoute>
    {
        public void Configure (EntityTypeBuilder<FlightRoute> builder)
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.FromAirportIATA)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("from_city_iata");

            builder.Property(e => e.ToAirportIATA)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("to_city_iata");

            builder.Property(e => e.NoOfFlights)
                .HasDefaultValue(0)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("no_of_flights");

            builder.Property(e => e.Distance)
                .HasColumnType("double")
                .HasColumnName("distance");

            builder.HasOne(e => e.FromAirport)
                .WithMany(c => c.FromRoutes)
                .HasForeignKey(e => e.FromAirportIATA)
                .HasPrincipalKey(c => c.IATA)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.HasOne(e => e.ToAirport)
                .WithMany(c => c.ToRoutes)
                .HasForeignKey(e => e.ToAirportIATA)
                .HasPrincipalKey(c => c.IATA)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.ToTable("flightroutes");
        }
    }
}
