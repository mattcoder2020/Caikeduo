using caikdduopos.Dto;
using caikdduopos.Entity;
using System;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace caikdduopos.ApplicationServices
{
    public class CashierApplicationService :
        CrudAppService<
        Cashier,
        CashierDto,
        int,
        PagedAndSortedResultRequestDto,
        CashierDto>,
        IApplicationService
    {
        public CashierApplicationService(IRepository<Cashier, int> repository) : base(repository)
        {
            this.repository = repository;
        }

        private readonly IRepository<Cashier, int> repository;
    }
}
