using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class ProductDetails
    {
        [Key]
        [Required]
        public int ProductDetailsId { get; set; }
        [Required]
        public string? ProductExplanation { get; set; }

        public int? TvId { get; set; }
        public ProductDetailTv? Tv { get; set; }

        public int? WacthId { get; set; }
        public ProductDetailWatch? Watch { get; set; }

        public int? PhoneId { get; set; }
        public ProductDetailPhone? Phone { get; set; }

        public int? PcId { get; set; }
        public  ProductDetailPc? Pc { get; set; }

        public int? ManWomenId { get; set; }
        public ProductDetailManWomen? ManWomen { get; set; }

        public int? HeadPhoneId { get; set; }
        public ProductDetailHeadPhone? HeadPhone { get; set; }

        [Required]
        public int ProductId { get; set; }
        public Product? Product { get; set; }

    }
}
