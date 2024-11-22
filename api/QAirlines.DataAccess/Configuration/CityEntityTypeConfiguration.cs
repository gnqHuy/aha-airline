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
    public class CityEntityTypeConfiguration : IEntityTypeConfiguration<City>
    {
        public void Configure (EntityTypeBuilder<City> builder)
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .IsRequired()
                .ValueGeneratedOnAdd()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.Name)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("name");

            builder.Property(e => e.Country)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("country");

            builder.ToTable("cities");
        }
    }
}
