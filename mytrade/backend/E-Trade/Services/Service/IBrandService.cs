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
    public interface IBrandService
    {
        List<Brand> GetBrandList(Expression<Func<Brand,bool>>filter=null);
        Brand AddBrand(BrandDto brand);
        Brand UpdateBrand(Brand brand,int id);
        void DeleteBrand(int id);
        Brand GetBrandOneById(int id);
    }
}
