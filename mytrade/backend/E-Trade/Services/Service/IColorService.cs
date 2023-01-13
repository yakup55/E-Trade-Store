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
    public interface IColorService
    {
        List<Color>GetColorList(Expression<Func<Color, bool>> filter=null);
        Color AddColor(ColorDto colorDto);
        void DeleteColor(int id);
        Color GetOneByColor(int id);
        Color UpdateColor(Color color,int id);
    }
}
