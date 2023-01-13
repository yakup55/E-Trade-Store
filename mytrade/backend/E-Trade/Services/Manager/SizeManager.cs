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
    public class SizeManager : ISizeService
    {
        private readonly ISizeRepository repository;
        private readonly IMapper mapper;
        public SizeManager()
        {

        }

        public SizeManager(ISizeRepository repository, IMapper mapper)
        {
            this.repository = repository;
            this.mapper = mapper;
        }

        public Size AddSize(SizeDto sizeDto)
        {
            if (sizeDto is null)
            {
                throw new ArgumentNullException();
            }
            var size = mapper.Map<Size>(sizeDto);
            repository.Add(size);
            return size;
        }

        public void DeleteSize(int id)
        {
            var one = GetOneBySizeId(id);
            if (one is null)
            {
                throw new SizeNotFoundException(id);
            }
            repository.Delete(one);
        }

        public Size GetOneBySizeId(int id)
        {
            var one = repository.GetOne(x => x.SizeId == id);
            if (one is null)
            {
                throw new SizeNotFoundException(id);

            }
            return one;
        }

        public List<Size> GetSizeList(Expression<Func<Size, bool>> filter = null)
        {
            return repository.GetList(filter);
        }

        public Size UpdateSize(Size size, int id)
        {
            var update = GetOneBySizeId(id);
            if (update is null)
            {
                throw new SizeNotFoundException(id);
            }
            update.SizeName = size.SizeName;
            repository.Update(update);
            return update;
        }
    }
}
