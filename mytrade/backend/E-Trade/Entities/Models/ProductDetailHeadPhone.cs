using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class ProductDetailHeadPhone
    {
        [Key]
        [Required]
        public int HeadPhoneId { get; set; }

        public string? GurultuOnleme { get; set; }
        public string? BluetoothVersiyon { get; set; }
        public string? CiftTelefonDestegi { get; set; }
        public string? KullanimTipi { get; set; }
        public string? SuyaTereDayanikli { get; set; }
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
