using caikdduopos.Dto;
using caikdduopos.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationServices
{
    public class MerchandiseSalesApplicationService : 
        CrudAppService<
        MerchandiseSales,
        MerchandiseSalesDto,
        Guid,
        PagedAndSortedResultRequestDto,
        CreateMerchandiseDto>, 
        IApplicationService
    {
        private readonly IRepository<MerchandiseSales, Guid> repository;
        public MerchandiseSalesApplicationService(IRepository<MerchandiseSales, Guid> repository) : base(repository)
        {
            this.repository = repository;
        }
    }
}
