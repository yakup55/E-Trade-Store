using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Comment
    {
        [Key]
        [Required]
        public int CommentId { get; set; }
        [Required]
        [MinLength(5)]
        public string? CommentName { get; set; }
        [Required]
        [MinLength(5)]
        public string? CommentSubject { get; set; }
        [Required]
        [MinLength(10)]
        [MaxLength(100)]
        public string? Message { get; set; }

        public bool CommentStatus { get; set; }

        public int? ProductId { get; set; }
        public Product? Product { get; set; }
    }
}
