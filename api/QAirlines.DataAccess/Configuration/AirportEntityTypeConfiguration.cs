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
    internal class AirportEntityTypeConfiguration : IEntityTypeConfiguration<Airport>
    {
        public void Configure(EntityTypeBuilder<Airport> builder)
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.Name)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("name");

            builder.Property(e => e.AirportCode)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("airport_code");

            builder.ToTable("airports");
        }
    }
}
