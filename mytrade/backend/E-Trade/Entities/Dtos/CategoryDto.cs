using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public record CategoryDto
    {
        public string? CategoryName { get; set; }
        public bool CategoryStatus { get; set; }
        public string? CategoryImage { get; set; }
        public int ProductId { get; set; }
    }
}
