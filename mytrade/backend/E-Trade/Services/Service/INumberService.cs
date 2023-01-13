using Entities.Dtos;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface INumberService
    {
        List<Number>GetNumbersList(Expression<Func<Number,bool>>filter=null);
        Number AddNumber(NumberDto numberDto);
        Number UpdateNumber(Number number,int id);
        void DeleteNumber(int id);
        Number GetOneNumberId(int id);
    }
}
