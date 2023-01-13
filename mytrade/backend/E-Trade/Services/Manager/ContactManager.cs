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
    public class ContactManager : IContactService
    {
        private readonly IContactRepository repository;

        public ContactManager(IContactRepository repository)
        {
            this.repository = repository;
        }
       
        public Contact AddContact(Contact contact)
        {
            if (contact is null)
            {
                throw new ArgumentNullException();
            }
            repository.Add(contact);
            return contact;
        }

        public void DeleteContact(int id)
        {
            var one = GetContactById(id);
            if (one is null)
            {
                throw new ContactNotFoundException(id);
            }
            repository.Delete(one);
        }

        public Contact GetContactById(int id)
        {
            var one = repository.GetOne(x => x.ContactId == id);
            if (one is null)
            {
                throw new ContactNotFoundException(id);
            }
            return one;
        }

        public List<Contact> GetContactList(Expression<Func<Contact, bool>> filter = null)
        {
        return repository.GetList(filter).OrderByDescending(x=>x.ContactId).ToList();
        }

        public Contact UpdateContact(Contact contact, int id)
        {
            if (contact.ContactId!=id)
            {
                throw new ContactNotFoundException(id);
            }
            var update=GetContactById(id);
            update.ContactName = contact.ContactName;
            update.ContactSubject = contact.ContactSubject;
            update.ContactMail = contact.ContactMail;
            repository.Update(update);
            return update;
        }
    }
}
