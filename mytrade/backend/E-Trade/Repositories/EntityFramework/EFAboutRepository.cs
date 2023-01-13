using Entities.Models;
using Repositories.Concrete.Context;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.EntityFramework
{
    public class EFAboutRepository : EFBaseRepository<About>, IAboutRepository
    {
        public EFAboutRepository(AppDbContext context) : base(context)
        {
        }

        public List<About> GetLastAbout()
        {
            return context.Abouts.OrderByDescending(x => x.AboutId).Take(3).ToList();
        }
}
  
}
