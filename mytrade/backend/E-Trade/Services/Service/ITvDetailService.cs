using Entities.Dtos;
using Entities.Models;
using System.Linq.Expressions;

namespace Services.Service
{
    public interface ITvDetailService
    {
        List<ProductDetailTv> GetTvList(Expression<Func<ProductDetailTv, bool>> filter = null);
        ProductDetailTv TvAdd(TvDetailDto detailTv);
        ProductDetailTv TvUpdate(int id, ProductDetailTv detailTv);
        void TvDelete(int id);
        ProductDetailTv GetOneTv(int id);
    }
}
