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
    public class HeadPhoneDetailConfig : IEntityTypeConfiguration<ProductDetailHeadPhone>
    {
        public void Configure(EntityTypeBuilder<ProductDetailHeadPhone> builder)
        {
            builder.HasKey(x => x.HeadPhoneId);
            builder.Property(x => x.GurultuOnleme).IsRequired();
            builder.Property(x => x.BluetoothVersiyon).IsRequired();
            builder.Property(x => x.CiftTelefonDestegi).IsRequired();
            builder.Property(x => x.KullanimTipi).IsRequired();
            builder.Property(x => x.SuyaTereDayanikli).IsRequired();
            // builder.HasData(

            //new ProductDetailHeadPhone
            //{
            //    HeadPhoneId = 1,
            //    GurultuOnleme = "",
            //    BluetoothVersiyon = "",
            //    CiftTelefonDestegi = "",
            //    KullanimTipi = "",
            //    SuyaTereDayanikli = "",
            //    BrandId = 1
            //});

            builder.HasOne(x => x.Color).WithMany(x => x.ProductDetailHeadPhones).HasForeignKey(x => x.ColorId).OnDelete(DeleteBehavior.SetNull);
            builder.HasOne(x => x.Brand).WithMany(x => x.ProductDetailHeadPhones).HasForeignKey(x => x.BrandId).OnDelete(DeleteBehavior.SetNull);
        }
}
}
