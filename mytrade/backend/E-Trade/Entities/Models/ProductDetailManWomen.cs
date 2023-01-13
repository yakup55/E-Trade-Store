using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class ProductDetailManWomen
    {
        [Key]
        [Required]
        public int ManWomenId { get; set; }

        public string? AyakkabiTipi { get; set; }
        public string? Malzeme { get; set; }
        public string? Cinsiyet { get; set; }
        public string? YakaStili { get; set; }
        public string? Tipi { get; set; }
        public string? Image1 { get; set; }
        public string? Image2 { get; set; }
        public string? Image3 { get; set; }

        public int? ColorId { get; set; }
        public Color? Color { get; set; }

        public int? SizeId { get; set; }
        public Size? Size { get; set; }

        public int? NumberId { get; set; }
        public Number? Number { get; set; }

        public int? BrandId { get; set; }
        public Brand? Brand { get; set; }

        public ICollection<ProductDetails>? ProductDetails { get; set; }
    }
}
