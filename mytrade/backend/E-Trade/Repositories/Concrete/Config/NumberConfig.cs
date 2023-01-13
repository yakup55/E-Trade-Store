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
    public class NumberConfig : IEntityTypeConfiguration<Number>
    {
        public void Configure(EntityTypeBuilder<Number> builder)
        {
            builder.HasKey(x => x.NumberId);
            builder.Property(x => x.ShoesNumber).IsRequired();

            builder.HasData(
                new Number { NumberId = 1, ShoesNumber = 32 },
                new Number { NumberId = 2, ShoesNumber = 33 },
                new Number { NumberId = 3, ShoesNumber = 34 },
                 new Number { NumberId = 4, ShoesNumber = 35 },
                new Number { NumberId = 5, ShoesNumber = 36 },
                new Number { NumberId = 6, ShoesNumber = 37 },
                 new Number { NumberId = 7, ShoesNumber = 38 },
                new Number { NumberId = 8, ShoesNumber = 39 },
                new Number { NumberId = 9, ShoesNumber = 40 },
                 new Number { NumberId = 10, ShoesNumber = 41 },
                new Number { NumberId = 11, ShoesNumber = 42 },
                new Number { NumberId = 12, ShoesNumber = 43 },
                 new Number { NumberId = 13, ShoesNumber = 44 },
                new Number { NumberId = 14, ShoesNumber = 45 },
                new Number { NumberId = 15, ShoesNumber = 46 }
                );
        }
    }
}
