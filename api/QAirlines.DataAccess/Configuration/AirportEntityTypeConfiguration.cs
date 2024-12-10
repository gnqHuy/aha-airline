using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QAirlines.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.DataAccess.Mapping
{
    public class AirportEntityTypeConfiguration : IEntityTypeConfiguration<Airport>
    {
        public void Configure(EntityTypeBuilder<Airport> builder)
        {
            builder.HasKey(x => x.IATA).HasName("PRIMARY");

            builder.Property(e => e.IATA)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("IATA");

            builder.HasIndex(e => e.IATA)
                .IsUnique()
                .HasDatabaseName("IX_IATA");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.Name)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("name");

            builder.Property(e => e.Latitude)
                .HasColumnType("double")
                .HasColumnName("latitude");

            builder.Property(e => e.Longitude)
                .HasColumnType("double")
                .HasColumnName("longtitude");

            builder.HasOne(e => e.City)
                .WithMany(c => c.Airports)
                .HasForeignKey(e => e.CityId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.ToTable("airports");
        }
    }
}
