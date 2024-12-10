using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QAirlines.Models.Token;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.DataAccess.Configuration
{
    public class RefreshTokenEntityTypeConfiguration : IEntityTypeConfiguration<RefreshToken>
    {
        public void Configure(EntityTypeBuilder<RefreshToken> builder) 
        {
            builder.HasKey(x => x.Id).HasName("PRIMARY");

            builder.Property(e => e.Id)
                .ValueGeneratedOnAdd()
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("id");

            builder.Property(e => e.AppUserId)
                .IsRequired()
                .HasColumnType("char(36)")
                .HasColumnName("app_user_id");

            builder.Property(e => e.Token)
                .IsRequired()
                .HasColumnType("varchar(255)")
                .HasColumnName("token");

            builder.Property(e => e.CreatedAt)
                .IsRequired()
                .HasColumnType("datetime(6)")
                .HasColumnName("created_at");

            builder.Property(e => e.ExpiredAt)
                .HasColumnType("datetime(6)")
                .HasColumnName("expired_at");

            builder.Property(e => e.ReasonOfRevocation)
                .HasColumnType("varchar(255)")
                .HasColumnName("reason_of_revocation");

            builder.HasOne(rt => rt.User)
                .WithMany(user => user.RefreshTokens)
                .HasForeignKey(rt => rt.AppUserId)
                .IsRequired()
                .OnDelete(DeleteBehavior.NoAction);

            builder.ToTable("refresh_tokens");
        }
    }
}
