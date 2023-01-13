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
    public class DetailTvConfig : IEntityTypeConfiguration<ProductDetailTv>
    {
        public void Configure(EntityTypeBuilder<ProductDetailTv> builder)
        {
            builder.HasKey(x => x.TvId);
            builder.Property(x => x.DahiliUyduAlici).IsRequired();
            builder.Property(x => x.EkranEbati).IsRequired();
            builder.Property(x => x.EkranFormati).IsRequired();
            builder.Property(x => x.Wifi).IsRequired();
            builder.Property(x => x.Kurulum).IsRequired();
            builder.Property(x => x.PcBaglantisi).IsRequired();
  
           

           builder.HasOne(x => x.Brand).WithMany(x => x.ProductDetailTvs).HasForeignKey(x => x.BrandId).OnDelete(DeleteBehavior.SetNull);
        }
    }
}
