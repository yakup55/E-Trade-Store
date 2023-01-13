using Entities.Dtos;
using Entities.Models;
using System.Linq.Expressions;

namespace Services.Service
{
    public interface IPhoneDetailService
    {
        List<ProductDetailPhone> GetPhoneList(Expression<Func<ProductDetailPhone, bool>> filter = null);
        ProductDetailPhone PhoneAdd(PhoneDetailDto detailPhone);
        ProductDetailPhone PhoneUpdate(int id, ProductDetailPhone detailPhone);
        void PhoneDelete(int id);
        ProductDetailPhone GetOnePhone(int id);
    }
}
