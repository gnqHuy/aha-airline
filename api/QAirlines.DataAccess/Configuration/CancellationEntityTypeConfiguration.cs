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
    public class CancellationEntityTypeConfiguration : IEntityTypeConfiguration<Cancellation>
    {
        public void Configure (EntityTypeBuilder<Cancellation> builder)
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.TicketId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("ticket_id");

            builder.Property(e => e.PassengerId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("passenger_id");

            builder.Property(e => e.Time)
                .IsRequired()
                .HasColumnType("datetime")
                .HasColumnName("time");

            builder.HasOne(e => e.Ticket)
                .WithOne(t => t.Cancellation)
                .HasForeignKey<Cancellation>(e => e.TicketId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.ToTable("cancellations");
        }
    }
}
