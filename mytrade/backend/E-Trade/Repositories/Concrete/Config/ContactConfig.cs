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
    public class ContactConfig : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.HasKey(x => x.ContactId);
            builder.Property(x => x.ContactName).IsRequired();
            builder.Property(x => x.ContactMail).IsRequired();
            builder.Property(x=>x.ContactSubject).IsRequired();
            builder.Property(x=>x.ContactMessage).IsRequired();

            builder.HasData(

                new Contact
                {
                    ContactId=1,ContactName="Yakup",ContactMail="yakup.0950@gmail.com",ContactSubject="Deneme",ContactMessage="test mesajıdır"
                }
                );
        }
    }
}
