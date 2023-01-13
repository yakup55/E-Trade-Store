using AutoMapper;
using Entities.Dtos;
using Entities.Models;
using Repositories.Contracts;
using Services.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using static Entities.Exceptions.NotFoundException;

namespace Services.Manager
{
    public class BrandManager : IBrandService
    {
        private readonly IBrandRepository repository;
        private readonly IMapper mapper;
        public BrandManager()
        {

        }

        public BrandManager(IBrandRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public Brand AddBrand(BrandDto brand)
        {
            if (brand is null)
            {
                throw new ArgumentNullException();
            }
            var add = mapper.Map<Brand>(brand);
             repository.Add(add);
            return add;
        }

        public void DeleteBrand(int id)
        {
            var one = GetBrandOneById(id);
            if (one is null)
            {
                throw new BrandNotFoundException(id);
            }
            repository.Delete(one);
        }

        public List<Brand> GetBrandList(Expression<Func<Brand, bool>> filter = null)
        {
            return repository.GetList(filter).OrderByDescending(x=>x.BrandId).ToList();
        }

        public Brand GetBrandOneById(int id)
        {
            var one = repository.GetOne(x => x.BrandId == id);
            if (one is null)
            {
                throw new BrandNotFoundException(id);
            }
            return one;
        }

        public Brand UpdateBrand(Brand brand, int id)
        {
            if (brand.BrandId!=id)
            {
                throw new BrandNotFoundException(id);
            }
            var update = GetBrandOneById(id);
            update.BrandName = brand.BrandName;
            update.BrandImage = brand.BrandImage;
            repository.Update(update);
            return update;
        }
    }
}
