using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QAirlines.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.DataAccess.Model_Configuration
{
    public class AircraftEntityTypeConfiguration : IEntityTypeConfiguration<Aircraft>
    {
        public void Configure (EntityTypeBuilder<Aircraft> builder)
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .HasColumnType("int")
                .HasColumnName("id")
                .ValueGeneratedOnAdd();

            builder.Property(e => e.Model)
                .HasColumnType("varchar(255)")
                .HasColumnName("model");

            builder.Property(e => e.Name)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("name");

            builder.Property(e => e.Manufacturer)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("manufacturer");

            builder.Property(e => e.NoOfSeats)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("no_of_seats");

            builder.Property(e => e.Status)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("status");

            builder.Property(e => e.Terminal)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("terminal");

            builder.Property(e => e.AvailableAt)
                .IsRequired()
                .HasColumnType("datetime(6)")
                .HasColumnName("datetime");

            builder.ToTable("aircrafts");
        }
    }
}
