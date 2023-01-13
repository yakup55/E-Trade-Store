using AutoMapper;
using Entities.Dtos;
using Entities.Models;
using Repositories.Contracts;
using Repositories.EntityFramework;
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
    public class ColorManager : IColorService
    {
        private readonly IColorRepository repository;
        private readonly IMapper mapper;
        private readonly IProductDetailService service;

        public ColorManager()
        {

        }
        public ColorManager(IColorRepository repository, IMapper mapper, IProductDetailService service)
        {
            this.repository = repository;
            this.mapper = mapper;
            this.service = service;
        }

        public Color AddColor(ColorDto colorDto)
        {
            if (colorDto is null)
            {
                throw new ArgumentNullException();
            }
            //service.GetOneProductDetails(colorDto.ProductDetailId);
            var color=mapper.Map<Color>(colorDto);
            repository.Add(color);
            return color;
        }

        public void DeleteColor(int id)
        {
            var delete = GetOneByColor(id);
            if (delete is null)
            {
                throw new ColorNotFoundException(id);
            }
            repository.Delete(delete);
        }

        public List<Color> GetColorList(Expression<Func<Color, bool>> filter = null)
        {
            return repository.GetList(filter);
        }

        public Color GetOneByColor(int id)
        {
            var one= repository.GetOne(x=>x.ColorId==id);
            if (one is null)
            {
                throw new ColorNotFoundException(id);
            }
            return one;
        }

        public Color UpdateColor(Color color, int id)
        {
            if (color is null)
            {
                throw new ColorNotFoundException(id);
            }
            var update=GetOneByColor(id);
            update.ColorName=color.ColorName;
            repository.Update(update);
            return update;
        }
    }
}
