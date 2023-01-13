using Entities.Models;
using Repositories.Concrete.Context;
using Repositories.Contracts;

namespace Repositories.EntityFramework
{
    public class EFManWomenDetailRepository : EFBaseRepository<ProductDetailManWomen>, IManWomenDetailRepository
    {
        public EFManWomenDetailRepository(AppDbContext context) : base(context)
        {
        }
    }
}
