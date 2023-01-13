using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete.Config
{
    public class GenderConfig : IEntityTypeConfiguration<Gender>
    {
        public void Configure(EntityTypeBuilder<Gender> builder)
        {
            builder.HasKey(x => x.GenderId);
            builder.Property(x => x.GenderName).IsRequired();
            builder.HasData(
                new Gender { GenderId = 1, GenderName = "Erkek" },
                new Gender { GenderId = 2, GenderName = "Kadın" }
                );
        }
    }
}
