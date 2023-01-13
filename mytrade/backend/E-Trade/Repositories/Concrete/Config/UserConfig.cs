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
    public class UserConfig : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            //builder.HasKey(x => x.);
            //builder.Property(x => x.UserName).IsRequired();
            //builder.Property(x => x.UserPassword).IsRequired();
            //builder.Property(x => x.UserMail).IsRequired();
            //builder.Property(x => x.GenderAge).IsRequired();
            //builder.HasData(

            //    new Users { UserId = 1, UserName = "YAKUP YILDIRIM", UserMail = "yakup.0950@gmail.com", GenderAge = 19 ,UserPassword="ciklet123"},
            //    new Users { UserId = 2, UserName = "MURAT ÇALIŞ", UserMail = "murat@gmail.com", GenderAge = 22, UserPassword = "ciklet123" },
            //    new Users { UserId = 3, UserName = "ETHEM KOÇ", UserMail = "ethem@gmail.com", GenderAge = 22, UserPassword = "ciklet123" }
            //    );
        }
    }
}
