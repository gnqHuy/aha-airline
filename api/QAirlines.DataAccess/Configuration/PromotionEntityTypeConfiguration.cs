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
    internal class PromotionEntityTypeConfiguration : IEntityTypeConfiguration<Promotion>
    {
        public void Configure(EntityTypeBuilder<Promotion> builder)
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.Title)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("title");

            builder.Property(e => e.Description)
                .IsRequired()
                .HasColumnType("char(255)")
                .HasColumnName("description");

            builder.Property(e => e.StartDate)
                .IsRequired()
                .HasColumnType("datetime(6)")
                .HasColumnName("start_date");

            builder.Property(e => e.EndDate)
                .IsRequired()
                .HasColumnType("datetime(6)")
                .HasColumnName("end_date");

            builder.ToTable("promotions");
        }
    }
}
