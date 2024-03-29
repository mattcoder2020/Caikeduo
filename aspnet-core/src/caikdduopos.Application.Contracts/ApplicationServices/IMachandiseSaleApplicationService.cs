﻿using caikdduopos.Dto;
using caikdduopos.Dto.Create;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace caikdduopos.ApplicationServices
{
    public interface IMerchandiseSalesService : ICrudAppService
        <MerchandiseSalesDto, Guid, PagedResultRequestDto, CreateMerchandiseSalesDto>
    {
    }
}


