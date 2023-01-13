using Entities.Models;
using Repositories.Concrete.Context;
using Repositories.Contracts;

namespace Repositories.EntityFramework
{
    public class EFTvDetailRepository : EFBaseRepository<ProductDetailTv>, ITvDetailRepository
    {
        public EFTvDetailRepository(AppDbContext context) : base(context)
        {
        }
    }
}
