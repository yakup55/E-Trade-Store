using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class About
    {
        public About(int aboutId, string? aboutDetails, string? aboutImage)
        {
            AboutId = aboutId;
            AboutDetails = aboutDetails;
            AboutImage = aboutImage;
        }
        public About()
        {

        }
        [Key]
        [Required]
        public int AboutId { get; set; }
        [Required][MinLength(20)] [MaxLength(100)]
        public string? AboutDetails { get; set; }
        [Required]
        public string? AboutImage { get; set; }

        public override string ToString()
        {
            return $"{AboutDetails}";
        }
    }
}
