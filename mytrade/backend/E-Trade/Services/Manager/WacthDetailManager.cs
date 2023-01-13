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
    public class WacthDetailManager:IWatchDetailService
    {
        private readonly IWacthDetailRepository repository;
        private readonly IMapper mapper;
        private readonly IBrandService brand;
        private readonly IColorService color;
        public WacthDetailManager()
        {

        }
        public WacthDetailManager(IWacthDetailRepository repository, IMapper mapper, IBrandService brand, IColorService color)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.brand = brand;
            this.color = color;
        }

        public ProductDetailWatch GetOneWacth(int id)
        {
            var one =repository.GetOne(x=>x.WatchId== id); 
            if (one is null)
            {
                throw new WacthDetailNotFoundException(id);
            }
            return one;
        }

        public List<ProductDetailWatch> GetWacthList(Expression<Func<ProductDetailWatch, bool>> filter = null)
        {
           return repository.GetList(filter).OrderByDescending(x=>x.WatchId).ToList();
        }

        public ProductDetailWatch WatchAdd(WacthDetailDto detailWatch)
        {
            if (detailWatch is null)
            {
                throw new ArgumentNullException();
            }
            brand.GetBrandOneById(detailWatch.BrandId);
            color.GetOneByColor(detailWatch.ColorId);
            var add=mapper.Map<ProductDetailWatch>(detailWatch);
            repository.Add(add);
            return add;
        }

        public void WatchDelete(int id)
        {
          var one=GetOneWacth(id);
            if (one is null)
            {
                throw new WacthDetailNotFoundException(id);
            }
            repository.Delete(one);
        }

        public ProductDetailWatch WatchUpdate(int id, ProductDetailWatch detailWatch)
        {
            var update = GetOneWacth(id);
            update.AdımSayar = detailWatch.AdımSayar;
            update.GPS = detailWatch.GPS;
            update.KalpRitmiOlcme = detailWatch.KalpRitmiOlcme;
            update.Kamera = detailWatch.Kamera;
            update.SesliGorusme = detailWatch.SesliGorusme;
            update.SuGecirme = detailWatch.SuGecirme;
            update.UykuTakibi = detailWatch.UykuTakibi;
            update.UyumluMarka = detailWatch.UyumluMarka;
            update.ColorId= detailWatch.ColorId;
            update.BrandId= detailWatch.BrandId;
            update.Image1 = detailWatch.Image1;
            update.Image2 = detailWatch.Image2;
            update.Image3 = detailWatch.Image3;
            repository.Update(update);
            return update;
        }
    }
}
