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
    internal class AirlinerEntityTypeConfiguration : IEntityTypeConfiguration<Airliner>
    {
        public void Configure (EntityTypeBuilder<Airliner> builder)
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .HasColumnType("char(36)")
                .HasColumnName("id")
                .ValueGeneratedOnAdd();

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

            builder.ToTable("airliners");
        }
    }
}
