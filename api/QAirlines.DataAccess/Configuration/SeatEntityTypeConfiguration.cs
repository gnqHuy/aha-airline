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
    public class SeatEntityTypeConfiguration : IEntityTypeConfiguration<Seat> 
    {
        public void Configure (EntityTypeBuilder<Seat> builder)
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

            builder.Property(e => e.Number)
                .IsRequired()
                .HasColumnType("int")
                .HasColumnName("number");

            builder.Property(e => e.Class)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("class");

            builder.Property(e => e.IsAvaiable)
                .IsRequired()
                .HasColumnType("tinyint")
                .HasColumnName("is_available");

            builder.HasOne(e => e.Airliner)
                .WithMany(a => a.Seats)
                .HasForeignKey(e => e.AirlinerId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.HasOne(e => e.Ticket)
                .WithOne(e => e.Seat)
                .HasForeignKey<Ticket>(e => e.SeatId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.ToTable("seats");
        }
    }
}
