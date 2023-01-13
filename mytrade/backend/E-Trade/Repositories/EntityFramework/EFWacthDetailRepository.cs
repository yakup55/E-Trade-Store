using Entities.Models;
using Repositories.Concrete.Context;
using Repositories.Contracts;

namespace Repositories.EntityFramework
{
    public class EFWacthDetailRepository : EFBaseRepository<ProductDetailWatch>, IWacthDetailRepository
    {
        public EFWacthDetailRepository(AppDbContext context) : base(context)
        {
        }
    }
}
