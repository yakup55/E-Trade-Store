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
    public class GenderManager : IGenderService
    {
        private readonly IGenderRepository repository;

        public GenderManager(IGenderRepository repository)
        {
            this.repository = repository;
        }

        public Gender AddGender(Gender gender)
        {
            if (gender is null)
            {
                throw new ArgumentNullException();
            }
             repository.Add(gender);
            return gender;
        }

        public void DeleteGender(int id)
        {
            var one = GetOneGender(id);
            if (one is null)
            {
                throw new GenderNotFoundException(id);
            }
            repository.Delete(one);
        }

        public List<Gender> GetGenderList(Expression<Func<Gender, bool>> filter = null)
        {
            return repository.GetList(filter);
        }

        public Gender GetOneGender(int id)
        {
            var one = repository.GetOne(x => x.GenderId == id);
            if (one is null)
            {
                throw new GenderNotFoundException(id);
            }
            return one;
        }

        public Gender UpdateGender(Gender gender, int id)
        {
            var update = GetOneGender(id);
            if (update is null)
            {
                throw new GenderNotFoundException(id);
            }
            update.GenderName = gender.GenderName;
            repository.Update(update);
            return update;
        }
    }
}
