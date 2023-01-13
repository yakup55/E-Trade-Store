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
    public class TvDetailManager : ITvDetailService
    {
        private readonly ITvDetailRepository repository;
        private readonly IMapper mapper;
        private readonly IBrandService brand;
        public TvDetailManager()
        {

        }
        public TvDetailManager(ITvDetailRepository repository, IMapper mapper, IBrandService brand)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.brand = brand;
        }

        public ProductDetailTv GetOneTv(int id)
        {
            var one = repository.GetOne(x=>x.TvId== id);
            if (one is null)
            {
                throw new TvDetailNotFoundException(id);
            }
            return one;
        }

        public List<ProductDetailTv> GetTvList(Expression<Func<ProductDetailTv, bool>> filter = null)
        {
          return repository.GetList(filter).OrderByDescending(x=>x.TvId).ToList();
        }

        public ProductDetailTv TvAdd(TvDetailDto detailTv)
        {
            if (detailTv is null)
            {
                throw new ArgumentNullException();
            }
            brand.GetBrandOneById(detailTv.BrandId);
            var add=mapper.Map<ProductDetailTv>(detailTv);
            repository.Add(add);
            return add;
        }

        public void TvDelete(int id)
        {
            var one = GetOneTv(id);
            if (one is null)
            {
                throw new TvDetailNotFoundException(id);
            }
            repository.Delete(one);
        }

        public ProductDetailTv TvUpdate(int id, ProductDetailTv detailTv)
        {
            var update = GetOneTv(id);
            update.DahiliUyduAlici = detailTv.DahiliUyduAlici;
            update.EkranEbati = detailTv.EkranEbati;
            update.EkranFormati = detailTv.EkranFormati;
            update.Wifi = detailTv.Wifi;
            update.Kurulum = detailTv.Kurulum;
            update.PcBaglantisi = detailTv.PcBaglantisi;
            update.HdmiGirisleri = detailTv.HdmiGirisleri;
            update.BrandId=detailTv.BrandId;
            update.Image1= detailTv.Image1;
            update.Image2= detailTv.Image2;
            update.Image3= detailTv.Image3;
            repository.Update(update);
            return update;
        }
    }
}
