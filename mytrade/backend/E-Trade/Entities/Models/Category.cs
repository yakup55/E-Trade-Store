using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.SymbolStore;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Category
    {
        [Key] [Required]
        public int CategoryId { get; set; }
        [Required]  [MinLength(5)]
        public string? CategoryName { get; set; }
        public bool CategoryStatus { get; set; }
        public string? CategoryImage { get; set; }

        public ICollection<Product>? Products { get; set; }

    }
}
