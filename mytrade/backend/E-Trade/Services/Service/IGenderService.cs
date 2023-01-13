using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Services.Service
{
    public interface IGenderService
    {
        List<Gender>GetGenderList(Expression<Func<Gender, bool>> filter=null);
        Gender AddGender(Gender gender);
        Gender UpdateGender(Gender gender,int id);
        void DeleteGender(int id);
        Gender GetOneGender(int id);
    }
}
