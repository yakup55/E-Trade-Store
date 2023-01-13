using Entities.Models;
using Repositories.Concrete.Context;
using Repositories.Contracts;

namespace Repositories.EntityFramework
{
    public class EFHeadPhoneDetailRepository : EFBaseRepository<ProductDetailHeadPhone>, IHeadPhoneDetailRepository
    {
        public EFHeadPhoneDetailRepository(AppDbContext context) : base(context)
        {
        }
    }
}
