using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Brand
    {
        [Key]
        [Required]
        public int BrandId { get; set; }
        [Required]
        public string? BrandName { get; set; }
        [Required]
        public string? BrandImage { get; set; }

        public ICollection<ProductDetailWatch>? ProductDetailWatches { get; set; }
        public ICollection<ProductDetailHeadPhone>? ProductDetailHeadPhones { get; set; }
        public ICollection<ProductDetailManWomen>? ProductDetailManWomens { get; set; }
        public ICollection<ProductDetailPc>? ProductDetailPcs { get; set; }
        public ICollection<ProductDetailPhone>? ProductDetailPhones { get; set; }
        public ICollection<ProductDetailTv>? ProductDetailTvs { get; set; }
    }
}
