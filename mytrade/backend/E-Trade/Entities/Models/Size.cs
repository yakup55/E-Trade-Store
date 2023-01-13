using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Size
    {
        [Key]
        [Required]
        public int SizeId { get; set; }
        [Required]
        public string? SizeName { get; set; }

        public ICollection<ProductDetailManWomen>? ProductDetailManWomens { get; set; }
    }
}
