using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Contracts
{
    public interface IProductRepository : IEntityRepository<Product>
    {
        List<Product> GetLastProduct();
        List<Product> GetAllProductWithDetailList();
        Product GetOneProductWithDetail(int id);
        List<Product> PopularProductList();
        List<Product> ProductBrandList(int id);
        List<Product> ProductPriceSinking();
        List<Product> ProductPriceGrowing();
        List<Product> ProductList2(int id);
        List<Product> ProductCategoryList(int id);
        List<Product> ProductColorList(int id);
        List<Product> ProductNumberList(int id);
        List<Product> ProductSizeList(int id);
        List<Product> ProductPrice1();
        List<Product> ProductPrice2();
        List<Product> ProductPrice3();
        List<Product> ProductPrice4();
    }
}
