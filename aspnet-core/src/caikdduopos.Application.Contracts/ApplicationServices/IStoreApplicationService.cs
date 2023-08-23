using caikdduopos.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace caikdduopos.ApplicatinServices
{
    public interface IStoreApplicationService : ICrudAppService<StoreDto, Guid, PagedAndSortedResultRequestDto, CreateStoreDto>  
    {
    }
}
