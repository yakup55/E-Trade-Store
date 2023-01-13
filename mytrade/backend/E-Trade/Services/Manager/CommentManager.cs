using AutoMapper;
using Entities.Dtos;
using Entities.Models;
using Repositories.Contracts;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static Entities.Exceptions.NotFoundException;

namespace Services.Manager
{
    public class CommentManager:ICommentService
    {
        private readonly ICommentRepository repository;
        private readonly IMapper mapper;

        public CommentManager(ICommentRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        
        public Comment AddComment(CommentDto commentDto)
        {
            if (commentDto is null)
            {
                throw new ArgumentNullException();
            }
          var add=mapper.Map<Comment>(commentDto);
            repository.Add(add);
            return add;
        }

        public void DeleteComment(int id)
        {
            var one = GetOneComment(id);
            if (one is null)
            {
                throw new CommentNotFoundException(id);
            }
            repository.Delete(one);
        }

        public List<Comment> GetCommentList(Expression<Func<Comment, bool>> filter = null)
        {
            return repository.GetList(filter).OrderByDescending(x => x.CommentId).ToList() ;
        }

        public Comment GetOneComment(int id)
        {
            var one=repository.GetOne(x=>x.CommentId==id);
            if (one is null)
            {
                throw new CommentNotFoundException(id);
            }
            return one;
        }

        

        public Comment UpdateComment(Comment commentDto, int id)
        {
            if (commentDto is null)
            {
                throw new CommentNotFoundException(id);
            }
            var update = GetOneComment(id);
            update.CommentName = commentDto.CommentName;
            update.Message = commentDto.Message;
            update.CommentSubject = commentDto.CommentSubject;
            update.CommentStatus = commentDto.CommentStatus;
            repository.Update(update);
            return update;
        }
    }
}
