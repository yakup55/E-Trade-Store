using Entities.Dtos;
using Entities.Models;
using System.Linq.Expressions;

namespace Services.Service
{
    public interface IWatchDetailService
    {
        List<ProductDetailWatch> GetWacthList(Expression<Func<ProductDetailWatch, bool>> filter = null);
        ProductDetailWatch WatchAdd(WacthDetailDto detailWatch);
        ProductDetailWatch WatchUpdate(int id, ProductDetailWatch detailWatch);
        void WatchDelete(int id);
        ProductDetailWatch GetOneWacth(int id);
    }
}
