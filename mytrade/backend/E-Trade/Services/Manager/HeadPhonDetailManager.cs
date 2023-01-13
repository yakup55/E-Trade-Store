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
    public class HeadPhonDetailManager : IHeadPhoneDetailService
    {
        private readonly IHeadPhoneDetailRepository repository;
        private readonly IMapper mapper;
        private readonly IColorService service;
        private readonly IBrandService brand;

        public HeadPhonDetailManager()
        {

        }
        public HeadPhonDetailManager(IHeadPhoneDetailRepository repository, IMapper mapper, IColorService service, IBrandService brand)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.service = service;
            this.brand = brand;
        }

        public List<ProductDetailHeadPhone> GetHeadPhoneList(Expression<Func<ProductDetailHeadPhone, bool>> filter = null)
        {
            return repository.GetList(filter).OrderByDescending(x=>x.HeadPhoneId).ToList();
        }

        public ProductDetailHeadPhone GetOneHeadPhone(int id)
        {
            var one = repository.GetOne(x => x.HeadPhoneId == id);
            if (one is null)
            {
                throw new HeadPhoneDetailNotFoundException(id);
            }
            return one;
        }

        public ProductDetailHeadPhone HeadPhoneAdd(HeadPhoneDetailDto headPhone)
        {
            if (headPhone is null)
            {
                throw new ArgumentNullException();
            }
            service.GetOneByColor(headPhone.ColorId);
            brand.GetBrandOneById(headPhone.BrandId);
            var add = mapper.Map<ProductDetailHeadPhone>(headPhone);
            repository.Add(add);
            return add;
        }

        public void HeadPhoneDelete(int id)
        {
            var one = GetOneHeadPhone(id);
            if (one is null)
            {
                throw new HeadPhoneDetailNotFoundException(id);
            }
            repository.Delete(one);
        }

        public ProductDetailHeadPhone HeadPhoneUpdate(int id, ProductDetailHeadPhone headPhone)
        {
            if (headPhone is  null)
            {
                throw new HeadPhoneDetailNotFoundException(id);
            }
            var update = GetOneHeadPhone(id);
            update.GurultuOnleme = headPhone.GurultuOnleme;
            update.BluetoothVersiyon = headPhone.BluetoothVersiyon;
            update.CiftTelefonDestegi = headPhone.CiftTelefonDestegi;
            update.KullanimTipi = headPhone.KullanimTipi;
            update.SuyaTereDayanikli = headPhone.SuyaTereDayanikli;
            update.BrandId = headPhone.BrandId;
            update.ColorId= headPhone.ColorId;
            update.Image1 = headPhone.Image1;
            update.Image2 = headPhone.Image2;
            update.Image3 = headPhone.Image3;
            repository.Update(update);
            return update;
        }
    }
}
