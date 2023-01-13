using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class ProductDetailWatch
    {
        [Key]
        [Required]
        public int WatchId { get; set; }

        public string? AdımSayar { get; set; }
        public string? GPS { get; set; }
        public string? KalpRitmiOlcme { get; set; }
        public string? Kamera { get; set; }
        public string? SesliGorusme { get; set; }
        public string? SuGecirme { get; set; }
        public string? UykuTakibi { get; set; }
        public string? UyumluMarka { get; set; }

        public string? Image1 { get; set; }
        public string? Image2 { get; set; }
        public string? Image3 { get; set; }

        public int? ColorId { get; set; }
        public Color? Color { get; set; }

        public int? BrandId { get; set; }
        public Brand? Brand { get; set; }


        public ICollection<ProductDetails>? ProductDetails { get; set; }
    }
}
