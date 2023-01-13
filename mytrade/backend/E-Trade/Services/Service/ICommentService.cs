using Entities.Dtos;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface ICommentService
    {
        List<Comment> GetCommentList(Expression<Func<Comment, bool>> filter = null);
        Comment GetOneComment(int id);
        Comment AddComment(CommentDto commentDto);
        Comment UpdateComment(Comment commentDto,int id);
        void DeleteComment(int id);

    }
}
