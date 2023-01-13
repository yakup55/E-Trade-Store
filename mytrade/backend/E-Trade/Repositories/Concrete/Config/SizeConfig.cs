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
    public class SizeConfig : IEntityTypeConfiguration<Size>
    {
        public void Configure(EntityTypeBuilder<Size> builder)
        {
            builder.HasKey(x => x.SizeId);
            builder.Property(x => x.SizeName).IsRequired();

            builder.HasData(
                new Size { SizeId = 1, SizeName = "S" },
                new Size { SizeId = 2, SizeName = "M" },
                new Size { SizeId = 3, SizeName = "L" },
                new Size { SizeId = 4, SizeName = "XL" },
                new Size { SizeId = 5, SizeName = "XXL" },
                new Size { SizeId = 6, SizeName = "XXXL" }
                );
        }
    }
}
