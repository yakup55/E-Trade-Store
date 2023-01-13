using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class ProductDetailTv
    {
        [Key]
        [Required]
        public int TvId { get; set; }

        public string? DahiliUyduAlici { get; set; }
        public string? EkranEbati { get; set; }
        public string? EkranFormati { get; set; }
        public string? Wifi { get; set; }
        public string? Kurulum { get; set; }
        public string? PcBaglantisi { get; set; }
        public string? HdmiGirisleri { get; set; }
        public string? Image1 { get; set; }
        public string? Image2 { get; set; }
        public string? Image3 { get; set; }

        public int? BrandId { get; set; }
        public Brand? Brand { get; set; }

        public ICollection<ProductDetails>? ProductDetails { get; set; }
    }
}
