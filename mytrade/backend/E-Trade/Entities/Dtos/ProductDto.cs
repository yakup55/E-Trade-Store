using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public record ProductDto
    {
        public string? ProductName { get; set; }
        public string? ProductImage { get; set; }
        public int ProductPrice { get; set; }
        public bool ProductStatus { get; set; }
        public int CategoryId { get; set; }


      
    }
}
