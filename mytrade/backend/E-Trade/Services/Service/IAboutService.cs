using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IAboutService
    {
        List<About> GetAboutList(Expression<Func<About, bool>> filter=null);
        About GetAboutById(int id);
        About AddAbout(About about);
        About UpdateAbout(About about,int id);
        void DeleteAbout(int id);
        List<About> GetLastAbout();

    }
}
