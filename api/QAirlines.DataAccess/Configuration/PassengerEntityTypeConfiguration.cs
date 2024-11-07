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
    public class PassengerEntityTypeConfiguration : IEntityTypeConfiguration<Passenger>
    {
        public void Configure (EntityTypeBuilder<Passenger> builder) 
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.BookerId)
                .IsRequired()
                .HasColumnType("char(16)")
                .HasColumnName("booker_id");

            builder.Property(e => e.FirstName)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("first_name");

            builder.Property(e => e.LastName)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("last_name");

            builder.Property(e => e.PhoneNumber)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("phone_number");

            builder.Property(e => e.Email)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("email");

            builder.HasOne(e => e.Booker)
                .WithMany(b => b.Passengers)
                .HasForeignKey(e => e.BookerId)
                .IsRequired()
                .OnDelete(DeleteBehavior.Cascade);

            builder.ToTable("passengers");
        }
    }
}
