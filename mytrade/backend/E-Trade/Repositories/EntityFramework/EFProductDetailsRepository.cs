using Entities.Dtos;
using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Repositories.Concrete.Context;
using Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.EntityFramework
{
    public class EFProductDetailsRepository : EFBaseRepository<ProductDetails>, IProductDetailRepository
    {
        public EFProductDetailsRepository(AppDbContext context) : base(context)
        {

        }

      
    }
}
