using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete.Config
{
    public class PhoneDetailConfig : IEntityTypeConfiguration<ProductDetailPhone>
    {
        public void Configure(EntityTypeBuilder<ProductDetailPhone> builder)
        {
            builder.HasKey(x => x.PhoneId);
            builder.Property(x => x.bluetooth).IsRequired();
            builder.Property(x => x.cifthat).IsRequired();
            builder.Property(x => x.dahilihafiza).IsRequired();
            builder.Property(x => x.kameracözünürlügü).IsRequired();
            builder.Property(x => x.pilgücü).IsRequired();
            builder.Property(x => x.yüztanıma).IsRequired();
            builder.Property(x => x.parmakizi).IsRequired();



            builder.HasOne(x => x.Color).WithMany(x => x.ProductDetailPhones).HasForeignKey(x => x.ColorId).OnDelete(DeleteBehavior.SetNull);
            builder.HasOne(x => x.Brand).WithMany(x => x.ProductDetailPhones).HasForeignKey(x => x.BrandId).OnDelete(DeleteBehavior.SetNull);
        }
    }
}
