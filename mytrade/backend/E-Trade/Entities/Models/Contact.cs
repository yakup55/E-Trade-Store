using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class Contact
    {
        [Key]
        [Required]
        public int ContactId { get; set; }
        public string? ContactName { get; set; }
        public string? ContactMail { get; set; }
        public string? ContactSubject { get; set; }
        public string? ContactMessage{ get; set; }
    }
}
