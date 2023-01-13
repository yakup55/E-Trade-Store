﻿using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Contracts
{
    public interface IAboutRepository:IEntityRepository<About>
    {
        List<About> GetLastAbout();
    }
}
