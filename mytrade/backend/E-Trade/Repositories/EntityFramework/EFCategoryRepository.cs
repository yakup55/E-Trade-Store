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
    public class EFCategoryRepository : EFBaseRepository<Category>, ICategoryRepository
    {
        public EFCategoryRepository(AppDbContext context) : base(context)
        {
        }

       

        public List<Category> LastCategory()
        {
            return context.Categories.OrderByDescending(x => x.CategoryId).Take(4).ToList() ;
        }
    }
}
