using Entities.Dtos;
using Entities.Models;
using System.Linq.Expressions;

namespace Services.Service
{
    public interface IManWomenDetailService
    {
        List<ProductDetailManWomen> GetManWomenList(Expression<Func<ProductDetailManWomen, bool>> filter = null);
        ProductDetailManWomen ManWomenAdd(ManWomenDetailDto detailManWomen);
        ProductDetailManWomen ManWomenUpdate(int id, ProductDetailManWomen detailManWomen);
        void ManWomenDelete(int id);
        ProductDetailManWomen GetOneManWomen(int id);
    }
}
