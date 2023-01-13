using Entities.Dtos;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IProductDetailService
    {
        List<ProductDetails> GetProductDetailsList(Expression<Func<ProductDetails, bool>> filter = null);
        ProductDetails GetOneProductDetails(int productId);
        ProductDetails DetailAdd(ProductDetailDto product);
    }
}
