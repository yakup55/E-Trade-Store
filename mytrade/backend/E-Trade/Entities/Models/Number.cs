using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Number
    {
        [Key]
        [Required]
        public int NumberId { get; set; }
        [Required]
        public int ShoesNumber { get; set; }

        public ICollection<ProductDetailManWomen>? ProductDetailManWomens { get; set; }
    }
}
