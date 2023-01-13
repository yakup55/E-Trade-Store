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
    public class AboutManager : IAboutService
    {
        private readonly IAboutRepository aboutRepository;

        public AboutManager(IAboutRepository aboutRepository)
        {
            this.aboutRepository = aboutRepository;
        }
      
        public About AddAbout(About about)
        {
            if (about is null)
            {
                throw new ArgumentNullException();
            }
            aboutRepository.Add(about);
            return about;
        }

        public void DeleteAbout(int id)
        {
            var delete = GetAboutById(id);
            if (delete is null)
            {
                throw new AboutNotFoundException(id);
            }
            aboutRepository.Delete(delete);
        }

        public About GetAboutById(int id)
        {
            var about = aboutRepository.GetOne(x => x.AboutId == id);
            if (about is null)
            {
                throw new AboutNotFoundException(id);
            }
            return about;
        }

        public List<About> GetAboutList(Expression<Func<About, bool>> filter)
        {
            return aboutRepository.GetList(filter).OrderByDescending(x=>x.AboutId).ToList();
        }

        public List<About> GetLastAbout()
        {
            return aboutRepository.GetLastAbout();
        }

        public About UpdateAbout(About about, int id)
        {
            if (about.AboutId != id)
            {
                throw new AboutNotFoundException(id);
            }
            var update = GetAboutById(id);
            update.AboutImage = about.AboutImage;
            update.AboutDetails = about.AboutDetails;
            aboutRepository.Update(update);
            return update;

        }
    }
}
