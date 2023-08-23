﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Identity;

namespace caikdduopos.EntityFrameworkCore.Repository
{
    public interface IMyIdentityUserRepository:IIdentityUserRepository
    {
        Task<List<IdentityUser>> FindByCreationDateRange(DateTime from, DateTime to);
    }
}
