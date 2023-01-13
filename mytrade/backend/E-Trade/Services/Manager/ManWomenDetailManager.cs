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
    public class ManWomenDetailManager : IManWomenDetailService
    {
        private readonly IManWomenDetailRepository repository;
        private readonly IMapper mapper;
        private readonly IBrandService brand;
        private readonly INumberService number;
        private readonly ISizeService size;

        public ManWomenDetailManager()
        {

        }

        public ManWomenDetailManager(IManWomenDetailRepository repository, IMapper mapper, IBrandService brand, INumberService number, ISizeService size)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.brand = brand;
            this.number = number;
            this.size = size;
        }

        public List<ProductDetailManWomen> GetManWomenList(Expression<Func<ProductDetailManWomen, bool>> filter = null)
        {
            return repository.GetList(filter).OrderByDescending(x=>x.ManWomenId).ToList();
        }

        public ProductDetailManWomen GetOneManWomen(int id)
        {
            var one = repository.GetOne(x => x.ManWomenId == id);
            if (one is null)
            {
                throw new ManWomenDetailNotFoundException(id);
            }
            return one;
        }

        public ProductDetailManWomen ManWomenAdd(ManWomenDetailDto detailManWomen)
        {
            if (detailManWomen is null)
            {
                throw new ArgumentNullException();
            }
            brand.GetBrandOneById(detailManWomen.BrandId);
            size.GetOneBySizeId(detailManWomen.SizeId);
            number.GetOneNumberId(detailManWomen.NumberId);
            var add = mapper.Map<ProductDetailManWomen>(detailManWomen);
            repository.Add(add);
            return add;
        }

        public void ManWomenDelete(int id)
        {
            var one = GetOneManWomen(id);
            if (one is null)
            {
                throw new ManWomenDetailNotFoundException(id);
            }
            repository.Delete(one);
        }

        public ProductDetailManWomen ManWomenUpdate(int id, ProductDetailManWomen detailManWomen)
        {

            var update = GetOneManWomen(id);
            update.AyakkabiTipi = detailManWomen.AyakkabiTipi;
            update.Malzeme = detailManWomen.Malzeme;
            update.Cinsiyet = detailManWomen.Cinsiyet;
            update.YakaStili = detailManWomen.YakaStili;
            update.Tipi = detailManWomen.Tipi;
            update.BrandId=detailManWomen.BrandId;
            update.SizeId=detailManWomen.SizeId;
            update.NumberId=detailManWomen.NumberId;
            update.ColorId=detailManWomen.ColorId;
            update.Image1=detailManWomen.Image1;
            update.Image2=detailManWomen.Image2;
            update.Image3=detailManWomen.Image3;
            repository.Update(update);
            return update;
        }
    }
}
