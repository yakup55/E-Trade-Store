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
    public class PcDetailManager : IPcDetailService
    {
        private readonly IPcDetailRepository repository;
        private readonly IMapper mapper;
        private readonly IBrandService brand;
        private readonly IColorService color;

        public PcDetailManager()
        {

        }

        public PcDetailManager(IPcDetailRepository repository, IMapper mapper, IBrandService brand, IColorService color)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.brand = brand;
            this.color = color;
        }

        public ProductDetailPc GetOnePc(int id)
        {
            var one = repository.GetOne(x => x.PcId == id);
            if (one is null)
            {
                throw new PcDetailNotFoundException(id);
            }
            return one;
        }

        public List<ProductDetailPc> GetPcList(Expression<Func<ProductDetailPc, bool>> filter = null)
        {
            return repository.GetList(filter).OrderByDescending(x=>x.PcId).ToList();
        }

        public ProductDetailPc PcAdd(PcDetailDto detailPc)
        {
            if (detailPc is null)
            {
                throw new ArgumentNullException();
            }
            brand.GetBrandOneById(detailPc.BrandId);
            color.GetOneByColor(detailPc.ColorId);
            var dto = mapper.Map<ProductDetailPc>(detailPc);
            repository.Add(dto);
            return dto;
        }

        public void PcDelete(int id)
        {
            var one = GetOnePc(id);
            if (one is null)
            {
                throw new PcDetailNotFoundException(id);
            }
            repository.Delete(one);
        }

        public ProductDetailPc PcUpdate(int id, ProductDetailPc detailPc)
        {
            if (detailPc.PcId != id)
            {
                throw new PcDetailNotFoundException(id);
            }
            var update = GetOnePc(id);
            update.İslemciTipi = detailPc.İslemciTipi;
            update.İslemciNesli = detailPc.İslemciNesli;
            update.Ram = detailPc.Ram;
            update.RamTipi = detailPc.RamTipi;
            update.SDDKapasite = detailPc.SDDKapasite;
            update.BellekHizi = detailPc.BellekHizi;
            update.CihazAgirligi = detailPc.CihazAgirligi;
            update.EkranBoyutu = detailPc.EkranBoyutu;
            update.EkranCozunurlugu = detailPc.EkranCozunurlugu;
            update.EkranYenilemeHizi = detailPc.EkranYenilemeHizi;
            update.ColorId= detailPc.ColorId;
            update.BrandId= detailPc.BrandId;
            update.Image1 = detailPc.Image1;
            update.Image2 = detailPc.Image2;
            update.Image3 = detailPc.Image3;
            repository.Update(update);
            return update;
        }
    }
}
