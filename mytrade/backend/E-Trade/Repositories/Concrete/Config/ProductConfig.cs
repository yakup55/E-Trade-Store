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
    public class ProductConfig : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(x => x.ProductId);
            builder.Property(x => x.ProductName).IsRequired();
            builder.Property(x => x.ProductImage).IsRequired();
            builder.Property(x => x.ProductPrice).HasDefaultValue(100);
            builder.Property(x => x.ProductStatus).IsRequired();
            builder.Property(b => b.ProductDate).HasDefaultValueSql("GETDATE()");
            builder.HasData(

                new Product { ProductId = 1, ProductName = "Tişört", ProductImage = "dddddd", ProductPrice = 150,ProductStatus=false},
                new Product { ProductId = 2, ProductName = "Pantolon", ProductImage = "dddddd", ProductPrice = 350, ProductStatus = false },
                new Product { ProductId = 3, ProductName = "Hırka", ProductImage = "dddddd", ProductPrice = 200, ProductStatus = false }
                
                );
            builder.HasOne(x => x.Category).WithMany(x => x.Products).HasForeignKey(x => x.CategoryId).OnDelete(DeleteBehavior.Cascade);
           
        }

    }
}
