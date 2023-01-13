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
    public class PhoneDetailManager : IPhoneDetailService
    {
        private readonly IPhoneDetailRepository repository;
        private readonly IMapper mapper;
        private readonly IBrandService brand;
        private readonly IColorService color;

        public PhoneDetailManager()
        {
                
        }
        public PhoneDetailManager(IPhoneDetailRepository repository, IMapper mapper, IBrandService brand, IColorService color)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.brand = brand;
            this.color = color;
        }

        public ProductDetailPhone GetOnePhone(int id)
        {
            var one = repository.GetOne(x=>x.PhoneId == id);
            if (one is null)
            {
                throw new PhoneDetailNotFoundException(id);
            }
            return one;

        }

        public List<ProductDetailPhone> GetPhoneList(Expression<Func<ProductDetailPhone, bool>> filter = null)
        {
            return repository.GetList(filter).OrderByDescending(x=>x.PhoneId).ToList();
        }

        public ProductDetailPhone PhoneAdd(PhoneDetailDto detailPhone)
        {
            if (detailPhone == null)
            {
                throw new ArgumentNullException();
            }
            brand.GetBrandOneById(detailPhone.BrandId);
            color.GetOneByColor(detailPhone.ColorId);
            var add = mapper.Map<ProductDetailPhone>(detailPhone);
            repository.Add(add);
            return add;
        }

        public void PhoneDelete(int id)
        {
            var one = GetOnePhone(id);
            if (one is null)
            {
                throw new PhoneDetailNotFoundException(id);
            }
            repository.Delete(one);
        }

        public ProductDetailPhone PhoneUpdate(int id, ProductDetailPhone detailPhone)
        {
            if (detailPhone is null)
            {
                throw new PhoneDetailNotFoundException(id);
            }
            var update = GetOnePhone(id);
            update.bluetooth = detailPhone.bluetooth;
            update.cifthat = detailPhone.cifthat;
            update.dahilihafiza = detailPhone.dahilihafiza;
            update.kameracözünürlügü = detailPhone.kameracözünürlügü;
            update.pilgücü = detailPhone.pilgücü;
            update.yüztanıma = detailPhone.yüztanıma;
            update.parmakizi = detailPhone.parmakizi;
            update.ColorId = detailPhone.ColorId;
            update.BrandId = detailPhone.BrandId;
            update.Image1 = detailPhone.Image1;
            update.Image2 = detailPhone.Image2;
            update.Image3 = detailPhone.Image3;
            repository.Update(update);
            return update;
         
        }
    }
}
