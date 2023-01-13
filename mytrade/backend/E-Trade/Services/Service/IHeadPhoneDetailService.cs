using Entities.Dtos;
using Entities.Models;
using System.Linq.Expressions;

namespace Services.Service
{
    public interface IHeadPhoneDetailService
    {
        List<ProductDetailHeadPhone> GetHeadPhoneList(Expression<Func<ProductDetailHeadPhone, bool>> filter = null);
        ProductDetailHeadPhone HeadPhoneAdd(HeadPhoneDetailDto headPhone);
        ProductDetailHeadPhone HeadPhoneUpdate(int id, ProductDetailHeadPhone headPhone);
        void HeadPhoneDelete(int id);
        ProductDetailHeadPhone GetOneHeadPhone(int id);
    }
}
