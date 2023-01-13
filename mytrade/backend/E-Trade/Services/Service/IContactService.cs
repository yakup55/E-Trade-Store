using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IContactService
    {
        List<Contact> GetContactList(Expression<Func<Contact, bool>> filter = null);
        Contact GetContactById(int id);
        void DeleteContact(int id);
        Contact AddContact(Contact contact);
        Contact UpdateContact(Contact contact,int id);
    }
}
