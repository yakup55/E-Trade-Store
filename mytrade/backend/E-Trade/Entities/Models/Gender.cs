using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Gender
    {
        [Key]
        [Required]
        public int GenderId { get; set; }

        [Required]
        public string? GenderName { get; set; }

        public ICollection<User>? Users { get; set; }
    }
}
