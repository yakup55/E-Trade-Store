using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Concrete.Config
{
    public class CommentConfig : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.HasKey(x => x.CommentId);
            builder.Property(x => x.CommentName).IsRequired();
            builder.Property(x => x.Message).IsRequired();
            builder.Property(x => x.CommentSubject).IsRequired();
            builder.Property(x => x.CommentStatus).IsRequired();
            builder.HasData(
                new Comment { CommentId = 1, CommentName = "Test", Message = "ehddhdhscb",CommentSubject="",CommentStatus=true },
                new Comment { CommentId = 2, CommentName = "Test", Message = "ehddhdhscb", CommentSubject = "", CommentStatus = true },
                new Comment { CommentId = 3, CommentName = "Test", Message = "ehddhdhscb", CommentSubject = "", CommentStatus = true }
                );
        }
    }
}
