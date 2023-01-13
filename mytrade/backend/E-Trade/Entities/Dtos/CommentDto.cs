using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Dtos
{
    public record CommentDto
    {
        public string CommentName { get; set; }
        public string Message { get; set; }
        public string CommentSubject { get; set; }
        public bool CommentStatus { get; set; }
        public int ProductId { get; set; }
    }
}
