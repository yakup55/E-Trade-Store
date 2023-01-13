using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Color
    {
        [Key]
        [Required]
        public int ColorId { get; set; }
        [Required]
        public string? ColorName { get; set; }

        public ICollection<ProductDetailWatch>? ProductDetailWatches { get; set; }
        public ICollection<ProductDetailHeadPhone>? ProductDetailHeadPhones { get; set; }
        public ICollection<ProductDetailManWomen>? ProductDetailManWomens { get; set; }
        public ICollection<ProductDetailPc>? ProductDetailPcs { get; set; }
        public ICollection<ProductDetailPhone>? ProductDetailPhones { get; set; }
    }
}
