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
    public class ColorConfig : IEntityTypeConfiguration<Color>
    {
        public void Configure(EntityTypeBuilder<Color> builder)
        {
            builder.HasKey(x => x.ColorId);
            builder.Property(x => x.ColorName).IsRequired();

            builder.HasData(
                new Color { ColorId = 1, ColorName = "Mavi" },
                new Color { ColorId = 2, ColorName = "Sarı" },
                new Color { ColorId = 3, ColorName = "Kırmızı" },
                new Color { ColorId = 4, ColorName = "Turuncu" },
                new Color { ColorId = 5, ColorName = "Siyah" },
                new Color { ColorId = 6, ColorName = "Beyaz" },
                new Color { ColorId = 7, ColorName = "Gri" }
                );
        }
    }
}
