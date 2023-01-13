using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Repositories.Concrete.Config
{
    public class ProductDetailConfig : IEntityTypeConfiguration<ProductDetails>
    {
        public void Configure(EntityTypeBuilder<ProductDetails> builder)
        {
            builder.HasKey(x => x.ProductDetailsId);
            builder.Property(x => x.ProductExplanation).IsRequired();


            builder.HasOne(x => x.Product).WithOne(x => x.ProductDetails).HasForeignKey<ProductDetails>(x => x.ProductId)
                .OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.Pc).WithMany(x => x.ProductDetails).HasForeignKey(x => x.PcId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.Watch).WithMany(x => x.ProductDetails).HasForeignKey(x => x.WacthId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.Tv).WithMany(x => x.ProductDetails).HasForeignKey(x => x.TvId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.Phone).WithMany(x => x.ProductDetails).HasForeignKey(x => x.PhoneId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.ManWomen).WithMany(x => x.ProductDetails).HasForeignKey(x => x.ManWomenId).OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(x => x.HeadPhone).WithMany(x => x.ProductDetails).HasForeignKey(x => x.HeadPhoneId).OnDelete(DeleteBehavior.Cascade);
        }
    }
}
