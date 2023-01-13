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
    public class NumberManager:INumberService
    {
        private readonly INumberRepository repository;
        private readonly IProductDetailService service;
       private readonly IMapper mapper;
        public NumberManager()
        {

        }
       
        public NumberManager(INumberRepository repository, IProductDetailService service, IMapper mapper)
        {
            this.repository = repository;
            this.service = service;
            this.mapper = mapper;
        }

        public Number AddNumber(NumberDto numberDto)
        {
            if (numberDto is null)
            {
                throw new ArgumentNullException();
            }
          var add=mapper.Map<Number>(numberDto);
            repository.Add(add);
            return add;
        }

        public void DeleteNumber(int id)
        {
            var one = GetOneNumberId(id);
            if (one is null)
            {
                throw new NumberNotFoundException(id);
            }
            repository.Delete(one);
        }

        public List<Number> GetNumbersList(Expression<Func<Number, bool>> filter = null)
        {
            return repository.GetList(filter);
        }

        public Number GetOneNumberId(int id)
        {
            var one = repository.GetOne(x => x.NumberId == id);
            if (one is null)
            {
                throw new NumberNotFoundException(id);
            }
            return one;
        }

        public Number UpdateNumber(Number number, int id)
        {
            if (number is null)
            {
                throw new NumberNotFoundException(id);
            }
            var update = repository.GetOne(x => x.NumberId == id);
            update.ShoesNumber = number.ShoesNumber;
            repository.Update(update);
            return update;
        }
    }
}
