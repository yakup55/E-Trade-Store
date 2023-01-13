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
    public interface IPcDetailService
    {
        List<ProductDetailPc>GetPcList(Expression<Func<ProductDetailPc, bool>> filter=null);
        ProductDetailPc PcAdd(PcDetailDto dto );
        ProductDetailPc PcUpdate(int id,ProductDetailPc detailPc);
        void PcDelete(int id);
        ProductDetailPc GetOnePc(int id);
    }
}
