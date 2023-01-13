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
    public class CategoryConfig : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(x => x.CategoryId);
            builder.Property(x => x.CategoryName).IsRequired();
            builder.Property(x => x.CategoryImage).IsRequired();
            builder.HasData(

                new Category
                {
                    CategoryId = 1,
                    CategoryName = "Laptop",
                    CategoryStatus = true,
                    CategoryImage = "aaaa"

                },
                                new Category
                                {
                                    CategoryId = 2,
                                    CategoryName = "Akıllı Saat",
                                    CategoryStatus = true,
                                    CategoryImage = "aa"
                                },
                                                new Category
                                                {
                                                    CategoryId = 3,
                                                    CategoryName = "Test Kitapları",
                                                    CategoryStatus = true,
                                                    CategoryImage = "aa"

                                                },
                                                 new Category
                                                 {
                                                     CategoryId = 4,
                                                     CategoryName = "Kadın",
                                                     CategoryStatus = true,
                                                     CategoryImage = "https://technext.github.io/cozastore/images/banner-01.jpg"

                                                 },
                                                  new Category
                                                  {
                                                      CategoryId = 5,
                                                      CategoryName = "Erkek",
                                                      CategoryStatus = true,
                                                      CategoryImage = "https://technext.github.io/cozastore/images/banner-02.jpg"

                                                  }
                );
        }
    }
}
