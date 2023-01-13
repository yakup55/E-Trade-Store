using Entities.Models;
using Repositories.Concrete.Context;
using Repositories.Contracts;

namespace Repositories.EntityFramework
{
    public class EFPhoneDetailRepository : EFBaseRepository<ProductDetailPhone>, IPhoneDetailRepository
    {
        public EFPhoneDetailRepository(AppDbContext context) : base(context)
        {
        }
    }
}
