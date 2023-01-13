using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Models
{
    public class ProductComment
    {
        public int ProductCommentId { get; set; }

        public int? ProductId { get; set; }
        public Product? Product { get; set; }

        public int? CommentId { get; set; }
        public Comment? Comment { get; set; }
    }
}
