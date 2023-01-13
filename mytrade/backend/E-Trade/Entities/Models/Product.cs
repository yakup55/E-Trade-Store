using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Product
    {
       
        public Product()
        {

        }

        public Product(int productId, string? productName, string? productImage, int productPrice, DateTime productDate, bool productStatus, int? categoryId, Category? category, ICollection<ProductComment>? productComments, ProductDetails? productDetails)
        {
            ProductId = productId;
            ProductName = productName;
            ProductImage = productImage;
            ProductPrice = productPrice;
            ProductDate = productDate;
            ProductStatus = productStatus;
            CategoryId = categoryId;
            Category = category;
        }

        [Key]
        [Required]
        public int ProductId { get; set; }
        [Required]
        [MinLength(3)]
        [MaxLength(1000)]
        public string? ProductName { get; set; }
        [Required]
        public string? ProductImage { get; set; }
        [Required]
        public int ProductPrice { get; set; }
        public DateTime ProductDate { get; set; }
        public bool ProductStatus { get; set; }

        public int? CategoryId { get; set; }
        public Category? Category { get; set; }

        public ICollection<Comment>? Comments { get; set; }

         public ProductDetails ProductDetails { get; set; }
       // public ICollection<ProductDetails>? ProductDetails { get; set; }

        public override string ToString()
        {
            return $"{ProductName} {ProductPrice} {ProductImage} {ProductDate}";
        }
    }
}
