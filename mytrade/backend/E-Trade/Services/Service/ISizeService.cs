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
    public interface ISizeService
    {
        List<Size>GetSizeList(Expression<Func<Size, bool>> filter=null);
        Size UpdateSize(Size size,int id);
        Size AddSize(SizeDto sizeDto);
        void DeleteSize(int id);
        Size GetOneBySizeId(int id);
    }
}
