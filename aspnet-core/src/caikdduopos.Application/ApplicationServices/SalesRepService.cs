using caikdduopos.Dto;
using caikdduopos.Entity;
using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationServices
{
    public class SalesRepApplicationService :
        CrudAppService<
        SalesRep,
        SalesRepDto,
        int,
        PagedAndSortedResultRequestDto,
        SalesRepDto>,
        IApplicationService
    {
        public SalesRepApplicationService(IRepository<SalesRep, int> repository) : base(repository)
        {
            this.repository = repository;
        }

        private readonly IRepository<SalesRep, int> repository;
    }
}
